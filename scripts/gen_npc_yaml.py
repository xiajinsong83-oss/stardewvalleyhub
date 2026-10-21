#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gen_npc_yaml.py — 生成 data/npc/<slug>.yaml（34 位村民）+ data/universal-gifts.yaml
数据来源：
  - 基础信息 + 送礼 5 档：data-src/package/data/villagers.json（开源 stardew-valley-data）
  - 通用礼物：data-src/package/data/universal-gifts.json
  - 行程表：Stardew Valley Wiki（https://stardewvalleywiki.com/<NPC>）Schedule 章节
用法：python3 scripts/gen_npc_yaml.py [--skip-wiki]
"""
import json, os, re, html, time, urllib.parse, sys, subprocess
import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_SRC = os.path.join(ROOT, "data-src", "package", "data")
OUT_DIR = os.path.join(ROOT, "data", "npc")
WIKI_UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

def load(name):
    with open(os.path.join(DATA_SRC, name), encoding="utf-8") as f:
        return json.load(f)

def slugify(s):
    return re.sub(r"[^a-z0-9-]+", "-", s.lower()).strip("-")

def yaml_str(s):
    """YAML 单引号字符串：内部单引号加倍。对 : # " 等特殊字符全部安全。"""
    return "'" + str(s).replace("'", "''") + "'"

def fmt_gift_items(items):
    """villagers.json 的礼物字段：list[str]（物品名）或 list[dict]（带 name）"""
    out = []
    for it in items or []:
        if isinstance(it, dict):
            name = it.get("name", "")
        else:
            name = str(it)
        if not name:
            continue
        uid = slugify(name)
        out.append({"name": name, "uid": uid})
    return out

# ---------------- 行程解析（Stardew Valley Wiki） ----------------
SEASONS = ("Spring", "Summer", "Fall", "Winter", "Marriage")
TIME_RE = re.compile(r"^\d{1,2}:\d{2}\s*(AM|PM)$", re.I)

def fetch_wiki(name):
    """用 curl 抓取 wiki 页面（urllib 会被 403 拦截，curl 带完整 UA 可过）"""
    url = "https://stardewvalleywiki.com/" + urllib.parse.quote(name.replace(" ", "_"))
    r = subprocess.run(
        ["curl", "-s", "-L", "--max-time", "45", "-A", WIKI_UA,
         "-H", "Accept-Language: en-US,en;q=0.9", url],
        capture_output=True, text=True, timeout=60)
    if r.returncode != 0 or not r.stdout:
        raise RuntimeError((r.stderr or "empty response").strip()[:200])
    return r.stdout

def textify(raw):
    """HTML → 行为单位的纯文本（保留段落/表格行边界）"""
    raw = re.sub(r"<script.*?</script>", " ", raw, flags=re.S)
    raw = re.sub(r"<style.*?</style>", " ", raw, flags=re.S)
    # 块级元素换行
    raw = re.sub(r"</?(p|div|tr|li|h\d|table|thead|tbody|ul|ol|br)[^>]*>", "\n", raw, flags=re.I)
    raw = re.sub(r"<[^>]+>", " ", raw)
    raw = html.unescape(raw)
    lines = [re.sub(r"\s+", " ", l).strip() for l in raw.split("\n")]
    return [l for l in lines if l]

def parse_schedules(lines):
    """从正文行列表解析行程表结构（通用状态机，兼容带/不带 Time/Location 表头两种格式）。
    结构：季节标题（Spring/Summer/Fall/Winter/Marriage）→ 行程标题 → [Time/Location 表头] →
    交替的 时间/地点 对。时间行天然标志上一个地点结束。
    """
    # 定位正文 Schedule 章节：第一个独立 'Schedule' 行
    sched_idx = None
    for i, l in enumerate(lines):
        if l == "Schedule":
            sched_idx = i
            break
    if sched_idx is None:
        return []
    body = lines[sched_idx + 1:]
    schedules = []
    cur_season = None
    pending_title = None
    cur_timeline = []
    time_pending = None
    loc_parts = []

    TITLE_RE = re.compile(
        r"^(Regular Schedule|Rain|Green Rain|Night Market|Desert Festival.*|"
        r"(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday).*|"
        r"(Spring|Summer|Fall|Winter) \d+.*|Marriage.*|Community Center Restored.*|"
        r".*Festival.*|.*\(.*\).*)")

    def push_point():
        nonlocal time_pending, loc_parts
        if time_pending is not None:
            cur_timeline.append({"time": time_pending, "location": " ".join(loc_parts)})
        time_pending = None
        loc_parts = []

    def infer_season(title):
        if cur_season:
            return cur_season
        m = re.match(r"^(Spring|Summer|Fall|Winter)", title or "")
        return m.group(1) if m else "Any"

    STOP_RE = re.compile(
        r"^(Relationships|Gifts|Movies & Concessions|Movies|Heart Events|Quotes|"
        r"Questions|Quests|Portraits|Trivia|Timeline|History|Notes)$")

    def flush_block():
        nonlocal pending_title, cur_timeline
        push_point()
        if cur_timeline:
            label = pending_title or "Regular Schedule"
            schedules.append({
                "season": infer_season(label),
                "label": label,
                "condition": label,
                "timeline": cur_timeline,
            })
        pending_title = None
        cur_timeline = []

    def is_new_title(lk):
        if STOP_RE.match(lk):
            return True
        if TITLE_RE.match(lk):
            return True
        if loc_parts:
            if loc_parts[-1].endswith("."):
                return True
            if len(lk) < 45 and not lk.endswith(".") and not lk[0].islower():
                return True
        return False

    for l in body:
        if STOP_RE.match(l):
            break  # 行程章节结束
        if l in SEASONS:
            flush_block()
            cur_season = l
            continue
        if TIME_RE.match(l):
            push_point()
            time_pending = l
            continue
        if l in ("Time", "Location"):
            continue  # 表头行（Maru 等带表头格式）
        if time_pending is not None:
            # 正在累积地点：判断是否为新标题
            if loc_parts and is_new_title(l):
                push_point()
                if cur_timeline:
                    lbl = pending_title or "Regular Schedule"
                    schedules.append({
                        "season": infer_season(lbl),
                        "label": lbl,
                        "condition": lbl,
                        "timeline": cur_timeline,
                    })
                    cur_timeline = []
                pending_title = l
            else:
                loc_parts.append(l)
        else:
            # 无当前时间点：作为行程标题暂存（允许无季节上下文，跳过废话行）
            if pending_title is None and not l.startswith(("After the", "Shown below", "Festival", "Linus never", "In the")):
                pending_title = l
    flush_block()
    # 清理地点文本尾部 " ." 与多余空格
    for s in schedules:
        for t in s["timeline"]:
            t["location"] = re.sub(r"\s+\.", ".", t["location"]).strip()
    return schedules

# ---------------- YAML 输出 ----------------
def gen_yaml(v, schedules):
    name = v["name"]
    bd = v.get("birthday", {}) or {}
    season_map = {"spring": "Spring", "summer": "Summer", "fall": "Fall", "winter": "Winter"}
    out = []
    out.append("# ============================================================")
    out.append(f"# NPC 数据：{name}（自动生成 scripts/gen_npc_yaml.py）")
    out.append("# 基础/送礼数据来自开源 stardew-valley-data；行程来自 Stardew Valley Wiki。")
    out.append("# ============================================================")
    out.append(f'slug: "{slugify(v.get("id", name))}"')
    out.append(f'name: {yaml_str(name)}')
    out.append(f'display_name: {yaml_str(name)}')
    out.append("birthday:")
    out.append(f'  season: {yaml_str(season_map.get(str(bd.get("season", "")).lower(), str(bd.get("season", ""))))}')
    out.append(f'  day: {bd.get("day", "")}')
    out.append(f'lives_in: {yaml_str(v.get("address", "").split(",")[0].strip())}')
    out.append(f'address: {yaml_str(v.get("address", ""))}')
    out.append(f'marriage: {"true" if v.get("marriageable") else "false"}')
    out.append('marriageable_since: ""')
    out.append("clinic_visit:")
    out.append('  season: ""')
    out.append("  day: 0")
    out.append("family:")
    out.append("  - relation: \"\"")
    out.append("    name: \"\"")
    bio = (v.get("description") or "").strip()
    out.append("bio: >")
    import textwrap
    for chunk in textwrap.wrap(bio, 88) or [""]:
        out.append("  " + chunk)
    img = v.get("image") or f"/images/villagers/{name}.png"
    out.append(f'image: {yaml_str(img)}')
    out.append("")
    out.append("# ---------- 送礼偏好 ----------")
    out.append("gifts:")
    for tier, flag in [("loved", "universal_loves"), ("liked", "universal_likes"),
                       ("neutral", "universal_neutrals"), ("dislike", "universal_dislikes"),
                       ("hate", "universal_hates")]:
        out.append(f"  {tier}:")
        # universal 开关：参考实现用 true + items；此处 items 为专属物品
        out.append(f"    {flag}: false")
        out.append("    universal_exception: \"\"")
        items = fmt_gift_items(v.get({"loved": "loves", "liked": "likes", "neutral": "neutrals",
                                      "dislike": "dislikes", "hate": "hates"}[tier]))
        out.append("    items:")
        for it in items:
            out.append(f"      - name: {yaml_str(it['name'])}")
            out.append(f"        uid: \"{it['uid']}\"")
    out.append("")
    out.append("# ---------- 行程表 ----------")
    out.append("schedules:")
    if schedules:
        for s in schedules:
            out.append(f"  - season: {yaml_str(s['season'])}")
            out.append(f"    label: {yaml_str(s['label'])}")
            out.append(f"    condition: {yaml_str(s['condition'])}")
            out.append("    timeline:")
            for t in s["timeline"]:
                out.append(f"      - time: {yaml_str(t['time'])}")
                out.append(f"        location: {yaml_str(t['location'])}")
    else:
        out.append("  # 行程数据未抓取到，请人工补全")
    return "\n".join(out) + "\n"

def gen_universal_yaml():
    u = load("universal-gifts.json")
    out = []
    out.append("# ============================================================")
    out.append("# 通用礼物（Universal Gifts）—— 开源 stardew-valley-data")
    out.append("# ============================================================")
    out.append('version: "1.6.15"')
    out.append('source: "https://www.npmjs.com/package/stardew-valley-data"')
    out.append("points:")
    for k, v in [("love", 80), ("like", 45), ("neutral", 20), ("dislike", -20), ("hate", -40)]:
        out.append(f"  {k}: {v}")
    for tier, label in [("loves", "Universal Loves"), ("likes", "Universal Likes"),
                        ("neutrals", "Universal Neutrals"), ("dislikes", "Universal Dislikes"),
                        ("hates", "Universal Hates")]:
        out.append(f"{tier}:")
        out.append(f'  label: "{label}"')
        out.append("  items:")
        for it in u.get(tier, []):
            if isinstance(it, dict):
                nm = it.get("name", "")
            else:
                nm = str(it)
            out.append(f'    - name: {yaml_str(nm)}')
            out.append(f'      uid: "{slugify(nm)}"')
    return "\n".join(out) + "\n"

# 固定不移动的 NPC：wiki 无行程表，只有说明文字
STATIC_SCHEDULES = {
    "dwarf": [{
        "season": "All", "label": "Always in the Mines", "condition": "Always",
        "timeline": [{"time": "All Day", "location": "Stands east of the entrance to the Mines."}],
    }],
    "krobus": [{
        "season": "All", "label": "Always in the Sewers", "condition": "Always",
        "timeline": [{"time": "All Day", "location": "Stays in the Sewers."}],
    }],
    "wizard": [{
        "season": "All", "label": "Always in the Wizard's Tower", "condition": "Always",
        "timeline": [{"time": "All Day", "location": "Stays inside the Wizard's Tower."}],
    }],
}

def _load_existing_schedules(slug):
    """读取已有 data/npc/<slug>.yaml 的 schedules（供 --skip-wiki 保留行程）"""
    fp = os.path.join(OUT_DIR, slug + ".yaml")
    if not os.path.exists(fp):
        return None
    try:
        with open(fp, encoding="utf-8") as f:
            data = yaml.safe_load(f)
        return data.get("schedules") or []
    except Exception:
        return None

def main():
    skip_wiki = "--skip-wiki" in sys.argv
    villagers = load("villagers.json")
    os.makedirs(OUT_DIR, exist_ok=True)
    ok, fail = 0, 0
    for v in villagers:
        name = v["name"]
        slug = slugify(v.get("id", name))
        print(f"[{name}] 抓取行程...", flush=True)
        try:
            if skip_wiki:
                sched = _load_existing_schedules(slug)
                if sched is None:
                    sched = []  # 无旧行程文件
            else:
                raw = fetch_wiki(name)
                sched = parse_schedules(textify(raw))
                if not sched:
                    print(f"  !! {name} 行程解析为空，检查页面结构", flush=True)
                time.sleep(0.4)
        except Exception as e:
            print(f"  !! {name} 抓取失败: {e}", flush=True)
            sched = []
        # 固定不移动 NPC 兜底
        if not sched and slug in STATIC_SCHEDULES:
            sched = STATIC_SCHEDULES[slug]
            print(f"  -> 使用静态行程（{name} 不移动）", flush=True)
        yaml_text = gen_yaml(v, sched)
        with open(os.path.join(OUT_DIR, slug + ".yaml"), "w", encoding="utf-8") as f:
            f.write(yaml_text)
        n_entries = len(sched)
        n_rows = sum(len(s["timeline"]) for s in sched)
        print(f"  -> {slug}.yaml（行程 {n_entries} 条 / {n_rows} 行）", flush=True)
        ok += 1
    # 通用礼物
    with open(os.path.join(ROOT, "data", "universal-gifts.yaml"), "w", encoding="utf-8") as f:
        f.write(gen_universal_yaml())
    print(f"\n完成：{ok} 位村民 YAML + data/universal-gifts.yaml（失败 {fail}）")

if __name__ == "__main__":
    main()
