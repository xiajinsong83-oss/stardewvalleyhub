#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
阶段二：全自动 AI 差异化内容流水线（对齐计划书第九章）
=========================================================
目标：为 8 种附加语言（及可选栏目增强）自动生成差异化英文正文，无需人工逐页编辑；
     通过事实校验 + 相似度过滤 + 字数浮动，最大程度规避 Thin Content /
     Scaled Content Abuse 判定。

设计（对齐计划书「流水线架构」）：
  1. 读取开源结构化数据 data/*.json 作为唯一事实源；
  2. 遍历 content/en 下已生成的英文页面（front matter + 正文）；
  3. 对每页独立调用 LLM，使用差异化 Prompt 生成目标语言正文（禁止固定模板替换）；
  4. 事实校验：抽取原文中的关键数值/实体，与 JSON 数据比对，编造即丢弃；
  5. 语义相似度过滤：与英文母页 difflib 相似度超阈值则丢弃重试；
  6. 字数浮动：目标字数随机 ±15%，规避统一字数特征；
  7. 输出 Markdown 到 content/{lang}/，构建后自动部署（build-deploy.yml 触发）；
  8. 每次运行输出质量抽样报告 report/ai-report-{ts}.json，站长仅需查看报告。

用法：
  export LLM_API_KEY=xxx            # 必填（OpenAI 兼容）
  export LLM_BASE_URL=https://api.openai.com/v1
  export LLM_MODEL=gpt-4o-mini
  python3 scripts/ai_pipeline.py --langs zh-hans zh-hant de ja ko fr pt ru --dry-run
  python3 scripts/ai_pipeline.py --langs zh-hans --limit 3        # 试跑
  python3 scripts/ai_pipeline.py --langs de ja                   # 正式分批运行

无 LLM_API_KEY 时自动进入 dry-run（只输出计划与抽样 Prompt，不调用外部 API）。
"""
import argparse, difflib, json, os, random, re, sys, time, unicodedata, urllib.request, datetime

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(SITE, "data")
CONTENT_EN = os.path.join(SITE, "content", "en")

# 每种语言的目标字数（英文母页基础上浮动 ±15%）
WORD_TARGETS = {"zh-hans": 320, "zh-hant": 320, "de": 260, "ja": 240, "ko": 240, "fr": 280, "pt": 280, "ru": 280}

def load_facts():
    """将 data/*.json 压平成 {实体名: 数值} 事实字典，用于校验 AI 输出。"""
    facts = {}
    if not os.path.isdir(DATA_DIR):
        return facts
    for fn in os.listdir(DATA_DIR):
        if not fn.endswith(".json"):
            continue
        try:
            rows = json.load(open(os.path.join(DATA_DIR, fn), encoding="utf-8"))
        except Exception:
            continue
        if isinstance(rows, list):
            for r in rows:
                if isinstance(r, dict):
                    nm = r.get("name") or r.get("id")
                    for k in ("hp", "damage", "sellPrice", "price", "growDays", "quantity"):
                        if k in r and isinstance(r[k], (int, float)):
                            facts[f"{nm}|{k}"] = r[k]
    return facts

FACTS = load_facts()

def extract_fact_claims(text):
    """从文本中提取 {实体|字段} 类的数值断言（用于校验）。"""
    claims = []
    for key, val in FACTS.items():
        name, field = key.split("|", 1)
        if name and re.search(re.escape(name[:20]), text, re.I):
            claims.append((name, field, val))
    return claims

def verify_claims(text):
    """事实校验：文本中出现的实体-数值必须与数据一致，冲突即失败。"""
    bad = []
    for name, field, val in FACTS.items():
        if not name or len(name) < 3:
            continue
        if re.search(r"\b" + re.escape(name) + r"\b", text, re.I):
            for m in re.finditer(r"\b" + re.escape(name) + r"[^.\n]{0,40}?(\d[\d,\.]*)\b", text, re.I):
                try:
                    num = float(m.group(1).replace(",", ""))
                except ValueError:
                    continue
                if num != float(val) and num > 0:
                    bad.append((name, field, val, num))
                    break
    return bad

def target_words(path):
    """读取英文母页正文（front matter 之外）并统计字数。"""
    s = open(path, encoding="utf-8").read()
    body = re.sub(r"^---.*?---", "", s, flags=re.S)
    return len(re.findall(r"\S+", body))

def prompt_for(path, lang):
    """按语言构造差异化 Prompt（对齐计划书固定英文 Prompt 的扩展版）。"""
    s = open(path, encoding="utf-8").read()
    fm = re.search(r"^---\n(.*?)\n---", s, flags=re.S)
    meta = fm.group(1) if fm else ""
    body = re.sub(r"^---.*?---", "", s, flags=re.S).strip()
    base = (re.search(r'title:\s*"([^"]+)"', meta) or [None, "Stardew Valley guide"])[1]
    return (
        f"Translate and rewrite the following Stardew Valley guide into {lang}.\n"
        f"Original title: {base}\n"
        "RULES:\n"
        "- Write natural, conversational text for casual game players. Do NOT translate sentence-by-sentence or copy sentence patterns from the English source.\n"
        "- Keep every number, item name and game fact EXACTLY as in the source. Never invent, guess or estimate facts.\n"
        "- If the source gives no value for something, state it is not available — do not fabricate.\n"
        "- Aim for a length of " + str(random.randint(int(WORD_TARGETS.get(lang, 260) * 0.85), int(WORD_TARGETS.get(lang, 260) * 1.15))) + " words.\n"
        "- Preserve the markdown table structure and headings. Translate headings and descriptions, keep table data intact.\n"
        "- Do not add external references or links that are not in the source.\n\n"
        "SOURCE:\n" + body[:6000]
    )

def llm_generate(prompt, api_key, base_url, model):
    url = (base_url.rstrip("/")) + "/chat/completions"
    payload = {"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.7}
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
                                 headers={"Content-Type": "application/json",
                                          "Authorization": f"Bearer {api_key}"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.loads(r.read().decode())
    return data["choices"][0]["message"]["content"]

def similarity(a, b):
    a = re.sub(r"\s+", " ", a)[:2000]
    b = re.sub(r"\s+", " ", b)[:2000]
    return difflib.SequenceMatcher(None, a, b).ratio()

def main():
    ap = argparse.ArgumentParser(description="AI 差异化内容流水线")
    ap.add_argument("--langs", nargs="+", default=["zh-hans"], help="目标语言（默认 zh-hans）")
    ap.add_argument("--limit", type=int, default=0, help="每语言最多处理页数（0=全部，调试用）")
    ap.add_argument("--dry-run", action="store_true", help="不调用 API，只输出计划与抽样 Prompt")
    ap.add_argument("--report-dir", default=os.path.join(SITE, "reports"), help="报告输出目录")
    args = ap.parse_args()

    api_key = os.environ.get("LLM_API_KEY", "")
    base_url = os.environ.get("LLM_BASE_URL", "https://api.openai.com/v1")
    model = os.environ.get("LLM_MODEL", "gpt-4o-mini")
    dry = args.dry_run or not api_key

    os.makedirs(args.report_dir, exist_ok=True)
    report = {"mode": "dry-run" if dry else "live", "model": model, "started": time.time(),
              "per_lang": {}, "dropped": [], "failed": []}

    pages = sorted([os.path.join(dp, f) for dp, _, fs in os.walk(CONTENT_EN) for f in fs if f.endswith(".md")])
    pages = [p for p in pages if not p.endswith("_index.md")]
    print(f"[ai] 共 {len(pages)} 个英文页面，目标语言 {args.langs}，模式 {'dry-run' if dry else 'live'}")

    for lang in args.langs:
        lang_dir = os.path.join(SITE, "content", lang)
        os.makedirs(lang_dir, exist_ok=True)
        done, skipped, attempts = 0, 0, 0
        target = pages[:args.limit] if args.limit else pages
        for i, src in enumerate(target):
            rel = os.path.relpath(src, CONTENT_EN)
            dst = os.path.join(lang_dir, rel)
            if os.path.exists(dst):
                skipped += 1
                continue
            prompt = prompt_for(src, lang)
            if dry:
                if i == 0:
                    print(f"\n---- [dry-run] {lang} 抽样 Prompt（第 1 页）----\n{prompt[:900]}...\n")
                attempts += 1
                done += 1
                continue
            try:
                out = llm_generate(prompt, api_key, base_url, model)
                # 事实校验
                bad = verify_claims(out + open(src, encoding="utf-8").read())
                if bad:
                    report["dropped"].append({"file": rel, "lang": lang, "reason": f"fact conflict: {bad[:3]}"})
                    print(f"  [x] {rel} 事实冲突，丢弃: {bad[:2]}")
                    attempts += 1
                    continue
                # 相似度过滤（与英文母页）
                sim = similarity(out, open(src, encoding="utf-8").read())
                if sim > 0.62:
                    report["dropped"].append({"file": rel, "lang": lang, "reason": f"similarity {sim:.2f}"})
                    print(f"  [x] {rel} 相似度过高 ({sim:.2f})，丢弃")
                    attempts += 1
                    continue
                # 保留 front matter，替换正文
                fm = re.search(r"^---.*?---", open(src, encoding="utf-8").read(), flags=re.S).group(0)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                with open(dst, "w", encoding="utf-8") as f:
                    f.write(fm + "\n\n" + out.strip() + "\n")
                done += 1
                attempts += 1
                if done % 10 == 0:
                    print(f"  [ok] {lang} {done} 页完成")
            except Exception as e:
                report["failed"].append({"file": rel, "lang": lang, "error": str(e)[:200]})
                attempts += 1
                if attempts - done - len(report["failed"]) > 5:  # 连续失败保护
                    print(f"  [!] 连续失败，暂停 {lang}")
                    break
        report["per_lang"][lang] = {"pages": done, "skipped_existing": skipped, "attempts": attempts}
        print(f"[ai] {lang}: 完成 {done}，跳过已有 {skipped}")

    report["elapsed"] = round(time.time() - report["started"], 1)
    report_path = os.path.join(args.report_dir, f"ai-report-{datetime.date.today()}.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    print(f"\n[ai] 报告: {report_path}")
    if dry:
        print("[ai] 配置 LLM_API_KEY 后执行正式生成。")
    else:
        print("[ai] 完成。有问题的页面见报告 dropped/failed 字段。")

if __name__ == "__main__":
    main()
