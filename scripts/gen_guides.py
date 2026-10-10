#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Stardew Valley Hub — Guides Hub 数据驱动原创攻略页生成器
=========================================================
从开源数据包 stardew-valley-data 的客观游戏事实生成 100% 原创攻略页，
不抓取任何外部文章，零版权风险。选题池按分类轮询，跳过已生成页面，
每次默认生成 3 篇（--count 可调），并自动更新：
  - 分类页 content/en/all-guides/<cat>/_index.md（该分类全部攻略索引）
  - 攻略库首页 content/en/all-guides/_index.md 的 GUIDES-HUB 区段
攻略页底部通过 front matter `related` 自动内链到对应站内工具。

用法:
  python3 scripts/gen_guides.py [--count 3] [--dry-run]
"""
import argparse
import datetime
import json
import os
import re
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "data-src", "package", "data")
GUIDES_DIR = os.path.join(ROOT, "content", "en", "all-guides")
TODAY = datetime.date.today().isoformat()

CATS = ["crops", "fish", "minerals", "villagers"]


def slugify(name):
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    s = s.replace("'", "").replace("’", "").replace(".", "")
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "item"


def load(name):
    with open(os.path.join(DATA_DIR, name), encoding="utf-8") as f:
        return json.load(f)


def w(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def front(title, desc, icon, related, **extra):
    lines = ["---"]
    lines.append("title: %s" % json.dumps(title, ensure_ascii=False))
    lines.append("description: %s" % json.dumps(desc, ensure_ascii=False))
    lines.append("date: %s" % TODAY)
    lines.append("draft: false")
    lines.append("type: guide")
    if icon:
        lines.append("icon: %s" % json.dumps(icon, ensure_ascii=False))
    rel = []
    for r in related:
        rel.append(json.dumps({"title": r[0], "url": r[1]}, ensure_ascii=False))
    lines.append("related: [%s]" % ", ".join(rel))
    for k, v in extra.items():
        if isinstance(v, str):
            lines.append("%s: %s" % (k, json.dumps(v, ensure_ascii=False)))
        else:
            lines.append("%s: %s" % (k, json.dumps(v, ensure_ascii=False)))
    lines.append("---")
    return "\n".join(lines) + "\n"


def seed_costs(item):
    if not item.get("seedBuyPrices"):
        return "Unknown"
    parts = []
    for p in item["seedBuyPrices"]:
        parts.append("%s (%dg)" % (p.get("place", "Shop"), p.get("price", 0)))
    return "; ".join(parts)


def season_label(seasons):
    if not seasons:
        return "All seasons (greenhouse)"
    return ", ".join(s.capitalize() for s in seasons)


def artisan_label(item):
    uses = [k.replace("driedFruit", "Dried Fruit").replace("driedMushrooms", "Dried Mushrooms")
            .replace("honey", "Honey").replace("jelly", "Jelly").replace("juice", "Juice")
            .replace("pickles", "Pickles").replace("wine", "Wine")
            for k, v in (item.get("artisanUses") or {}).items() if v]
    return ", ".join(uses) if uses else "—"


def money(v):
    return "%dg" % v if isinstance(v, int) else "—"


def img_url(item):
    """数据里 image 形如 images/xxx.png（相对），转为 /images/xxx.png"""
    p = item.get("image", "")
    if not p:
        return ""
    return "/" + p if not p.startswith("/") else p


def crop_guide(item):
    name = item["name"]
    slug = slugify(name)
    grow = item.get("growDays", 0)
    regrow = item.get("regrowDays")
    regrow_txt = "Yes (%d days)" % regrow if regrow else "No"
    sell = item.get("cropSellPrice", 0)
    seed_min = min((p.get("price", 0) for p in item.get("seedBuyPrices") or []), default=0)
    profit_each = sell - seed_min
    if regrow:
        # 首次 grow 天后收获，之后每 regrow 天再收一次（季节 28 天）
        harvests = 1 + max(0, (28 - grow) // regrow)
        season_profit = harvests * sell - seed_min
    else:
        harvests = max(28 // grow, 1)
        season_profit = harvests * (sell - seed_min)
    giant = item.get("giant", False)
    trellis = item.get("trellis", False)
    desc = item.get("description", "")
    seed_name = item.get("seedName") or (name + " Seeds")

    intro = ("The %s is a %s crop in Stardew Valley. %s "
             "It grows in %s and is one of the most reliable ways to build early-season income, "
             "so it belongs in almost every farm plan.") % (
        name, item.get("category", "crop").lower(), desc, season_label(item.get("seasons", [])))

    body = [
        "# %s Guide: How to Grow, Harvest & Profit" % name,
        "",
        "![%s](%s)" % (name, img_url(item)),
        "",
        intro,
        "",
        "## At a Glance",
        "",
        "| Detail | Value |",
        "|---|---|",
        "| Season | %s |" % season_label(item.get("seasons", [])),
        "| Growth time | %d days%s |" % (grow, " then regrows every %d days" % regrow if regrow else ""),
        "| Regrow | %s |" % regrow_txt,
        "| Seed cost | %s |" % seed_costs(item),
        "| Sell price | %s |" % money(sell),
        "| Max quality | %s |" % item.get("maxQuality", "normal").capitalize(),
        "| Category | %s |" % item.get("category", "crop"),
        "| Trellis | %s |" % ("Yes" if trellis else "No"),
        "| Giant crop | %s |" % ("Yes" if giant else "No"),
        "| Farming XP | %d |" % item.get("farmingXP", 0),
        "",
        "## How to Grow",
        "",
        "Plant %s in tilled, watered soil at the start of the season. "
        "The crop takes **%d days** to mature%s. Water every morning (or set up a sprinkler) "
        "so the growth timer never pauses." % (
            seed_name, grow,
            " and then produces again every %d days after the first harvest" % regrow if regrow else ""),
        "",
        "**Harvest strategy**: %s%s" % (
            "This is a multi-harvest crop — plan to keep it planted all season and collect repeatedly."
            if regrow else
            "This is a single-harvest crop — replant after each harvest to keep the field productive.",
            (" It needs a trellis, so leave a row gap between planting lines to walk through."
             if trellis else "")),
        "",
        "## Profit Analysis",
        "",
        "| Metric | Value |",
        "|---|---|",
        "| Net profit per plant | %s |" % money(profit_each),
        "| Harvests per season | ~%d |" % harvests,
        "| Approx. season profit per plant | %s |" % money(season_profit),
        "",
        "With the **Tiller** profession, crop sell prices increase by 10%%, lifting the season "
        "profit per plant to about **%s**. Multiplied across a 12×8 field, this crop becomes a solid "
        "seasonal income source." % money(int(sell * 1.1) * harvests - seed_min if regrow else (int(sell * 1.1) - seed_min) * harvests),
        "",
        "## Tips & Pairings",
        "",
        "- **Artisan processing**: this crop can be processed into %s for even higher value." % artisan_label(item),
        "- **Sprinklers**: pair it with a sprinkler layout in the [Farm Layout Planner](/farmlayout/) "
        "to automate watering from day one.",
        "- **Quality**: with higher Farming skill and fertilizer, silver/gold/iridium quality "
        "harvests raise the sell price well above the base %s." % money(sell),
        "- **Season end**: crops wither at season change — time plantings so the final harvest "
        "lands before the 28th.",
        "",
    ]
    return slug, body


def fish_guide(item):
    name = item["name"]
    slug = slugify(name)
    diff = item.get("difficulty", 0)
    diff_txt = ("Very hard — requires maxed fishing skill, quality bait and careful timing."
                if diff >= 70 else
                "Moderate — an upgraded rod and bait make it reliable."
                if diff >= 40 else
                "Easy — catchable with the basic rod early on.")
    body = [
        "# %s Guide: Where to Catch, Seasons & Tips" % name,
        "",
        "![%s](%s)" % (name, img_url(item)),
        "",
        "The %s is a %s fish in Stardew Valley. %s" % (name, item.get("category", "fish"), item.get("description", "")),
        "",
        "## Catch Conditions",
        "",
        "| Detail | Value |",
        "|---|---|",
        "| Season | %s |" % season_label(item.get("seasons", [])),
        "| Time | %s |" % item.get("time", "All day"),
        "| Weather | %s |" % (item.get("weather") or "Any"),
        "| Location | %s |" % item.get("location", "—"),
        "| Difficulty | %d / 100 |" % diff,
        "| Sell price | %s |" % money(item.get("sellPrice", 0)),
        "| Catch type | %s |" % item.get("catchType", "rod"),
        "",
        "## How to Catch",
        "",
        "Go to **%s** during the right season and time window. %s" % (
            item.get("location", "the listed spot"),
            "The %s is %s." % (name, diff_txt)),
        "",
        "**Bait & tackle**: use Bait (or Magnet/Lure) and an upgraded rod to shrink the catch "
        "window. For hard fish, hold the bobber high and tap, don't hold — release pressure "
        "the instant the bar drops.",
        "",
        "## Uses & Tips",
        "",
        "- **Sell value**: base price **%s** — with the Fisher/Angler professions it sells for "
        "**%s**." % (money(item.get("sellPrice", 0)),
                     money(int(item.get("sellPrice", 0) * 1.25))),
        "- **Cooking**: used in %s." % (", ".join(item.get("usedIn", [])) if item.get("usedIn") else "no recipes"),
        "- **Smoking**: %s" % ("can be smoked in a Fish Smoker for extra value." if item.get("canSmoke") else "cannot be smoked."),
        "- **Fish Pond**: %s" % ("keeps in a Fish Pond and produces Roe/items at population milestones."
                                if item.get("fishPond") else "not a Fish Pond resident."),
        "- Track your catches with the [Fish Checklist](/fish-checklist/).",
        "",
    ]
    return slug, body


def mineral_guide(item):
    name = item["name"]
    slug = slugify(name)
    # artifacts.json 无 kind 字段（有独有字段 donationNotes）；minerals.json 的 kind 为
    # mineral/ore/node/geode/bar/resource 等，均属矿物类走 Gemologist 分支
    kind = "artifact" if ("donationNotes" in item) else item.get("kind", "mineral")
    body = [
        "# %s Guide: Where to Find & Value" % name,
        "",
        "![%s](%s)" % (name, img_url(item)),
        "",
        "%s" % item.get("description", ""),
        "",
        "## Where to Find",
        "",
        "| Detail | Value |",
        "|---|---|",
        "| Type | %s |" % ("Artifact" if kind == "artifact" else "Mineral"),
        "| Sell price | %s |" % money(item.get("sellPrice", 0)),
        "| Sources | %s |" % ("<br>".join(item.get("locations", []))),
        "",
        "## Collection Tips",
        "",
        "- **%s** is part of the Museum collection — donate your first copy before selling extras." % name,
        "- %s" % (item.get("donationNotes", "Mining deeper floors and cracking geodes are the fastest ways to find new pieces.")),
        "- Gemologist profession raises mineral sell prices by 30%% (base **%s** → **%s**)."
        % (money(item.get("sellPrice", 0)), money(int(item.get("sellPrice", 0) * 1.3))) if kind == "mineral" else
        "- Artifacts are also found by tilling artifact spots — keep a Hoe on hand in the Mines and at the Beach.",
        "- Track donations with the [Museum Checklist](/museum-checklist/).",
        "",
    ]
    return slug, body


def villager_guide(item):
    name = item["name"]
    slug = slugify(name)
    bday = item.get("birthday") or {}
    bday_txt = "%s %d" % (bday.get("season", "?").capitalize(), bday.get("day", "?")) if bday else "—"
    loves = item.get("loves") or []
    likes = item.get("likes") or []
    body = [
        "# %s Guide: Gifts, Birthday & Schedule" % name,
        "",
        "![%s](%s)" % (name, img_url(item)),
        "",
        "%s" % item.get("description", ""),
        "",
        "## At a Glance",
        "",
        "| Detail | Value |",
        "|---|---|",
        "| Lives at | %s |" % item.get("address", "—"),
        "| Birthday | %s |" % bday_txt,
        "| Giftable | Yes (daily, 2 per week) |",
        "",
        "## Loved Gifts",
        "",
        "%s" % ("<br>".join("- " + g for g in loves[:12]) if loves else "—"),
        "",
        "## Liked Gifts",
        "",
        "%s" % ("<br>".join("- " + g for g in likes[:10]) if likes else "—"),
        "",
        "## Relationship Tips",
        "",
        "- **Birthday bonus**: gifts on %s give 8× friendship points — save a loved item for that day." % bday_txt,
        "- Talk daily and give a loved gift twice a week to reach the next heart event quickly.",
        "- Plan which items to stock with the [Gift Lookup](/gift/) tool.",
        "",
    ]
    return slug, body


# 每分类的生成函数、数据文件、图标目录、内链
REGISTRY = {
    "crops": {"file": "crops.json", "gen": crop_guide,
              "title": "Crop Guides", "blurb": "How to grow, harvest and profit from every crop.",
              "related": [("Farm Layout Planner", "/farmlayout/"),
                          ("Crop Profit Calculator", "/calculator/")]},
    "fish": {"file": "fish.json", "gen": fish_guide,
             "title": "Fish Guides", "blurb": "Where and when to catch every fish.",
             "related": [("Fish Checklist", "/fish-checklist/"),
                         ("Farm Layout Planner", "/farmlayout/")]},
    "minerals": {"file": "minerals.json", "gen": mineral_guide,
                 "title": "Mineral & Artifact Guides", "blurb": "Where to find minerals and artifacts.",
                 "related": [("Museum Checklist", "/museum-checklist/")]},
    "villagers": {"file": "villagers.json", "gen": villager_guide,
                  "title": "Villager Guides", "blurb": "Gifts, birthdays and friendship tips.",
                  "related": [("Gift Lookup", "/gift/")]},
}


def existing_slugs(cat):
    d = os.path.join(GUIDES_DIR, cat)
    slugs = set()
    if os.path.isdir(d):
        for fn in os.listdir(d):
            if fn.endswith(".md") and fn != "_index.md":
                slugs.add(fn[:-3])
    return slugs


def read_category_meta(cat):
    """读取分类页以获取 blurb（保持手工微调不丢）"""
    p = os.path.join(GUIDES_DIR, cat, "_index.md")
    if not os.path.exists(p):
        return REGISTRY[cat]["blurb"]
    with open(p, encoding="utf-8") as f:
        m = re.search(r'<p>(.*?)</p>', f.read(), re.S)
    return m.group(1) if m else REGISTRY[cat]["blurb"]


def cat_index_md(cat, guides):
    reg = REGISTRY[cat]
    rows = []
    for slug, title, desc in sorted(guides, key=lambda x: x[0]):
        rows.append('  <a class="card" href="/all-guides/%s/%s/"><h3>%s</h3><p>%s</p></a>'
                    % (cat, slug, title, desc))
    md = ["---", "title: %s - Stardew Valley Hub" % reg["title"], "---", "",
          '<div class="page-hero"><h1>%s</h1><p>%s</p></div>' % (reg["title"], reg["blurb"]), "",
          '<div class="card-grid home-grid">',
          "\n".join(rows),
          "</div>", ""]
    return "\n".join(md)


def hub_section(cat_summary):
    """all-guides 首页的 GUIDES-HUB 区段"""
    lines = [
        '<div class="page-hero" style="margin-top:28px;">',
        '  <h2>Original Guides (auto-generated)</h2>',
        '  <p>Data-driven guides generated from official game data — updated automatically every 2 days.</p>',
        '</div>',
        '<div class="card-grid home-grid">',
    ]
    for cat, info in cat_summary.items():
        if info["count"] == 0:
            # 空分类不输出卡片，避免 404 死链（等有攻略页后再显示）
            continue
        recent = " · ".join('<a href="/all-guides/%s/%s/">%s</a>' % (cat, s, t)
                            for s, t in info["recent"][:3])
        lines.append(
            '  <a class="card big" href="/all-guides/%s/"><div class="card-icon">%s</div>'
            '<h3>%s (%d)</h3><p>%s</p><div class="card-links">%s</div></a>'
            % (cat, info["emoji"], REGISTRY[cat]["title"], info["count"], REGISTRY[cat]["blurb"], recent))
    lines.append("</div>")
    return "\n".join(lines)


def patch_hub_section(section):
    p = os.path.join(GUIDES_DIR, "_index.md")
    with open(p, encoding="utf-8") as f:
        text = f.read()
    start = text.find("<!-- GUIDES-HUB-START -->")
    end = text.find("<!-- GUIDES-HUB-END -->")
    block = "<!-- GUIDES-HUB-START -->\n%s\n<!-- GUIDES-HUB-END -->" % section
    if start != -1 and end != -1:
        text = text[:start] + block + text[end + len("<!-- GUIDES-HUB-END -->"):]
    else:
        # 标记缺失/不完整时：先清掉残留的半截标记，再追加完整区段
        text = text.replace("<!-- GUIDES-HUB-START -->", "").replace("<!-- GUIDES-HUB-END -->", "")
        text = text.rstrip() + "\n\n" + block + "\n"
    w(p, text)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=3)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    # 轮询选题：按 CATS 轮流取下一个未生成的
    generated = []      # (cat, slug, title, desc)
    pool_index = 0
    while len(generated) < args.count:
        cat = CATS[pool_index % len(CATS)]
        pool_index += 1
        items = load(REGISTRY[cat]["file"])
        if cat == "minerals":
            items = items + load("artifacts.json")
        done = existing_slugs(cat)
        for it in items:
            slug = slugify(it["name"])
            if slug in done:
                # minerals 与 artifacts 同 slug 时只生成第一篇，避免重复
                continue
            generated.append((cat, slug, it))
            done.add(slug)
            break
        else:
            # 该分类已生成完，标记后继续轮询下一分类
            pass
        if len(generated) >= args.count:
            break
        if pool_index > len(CATS) * 4 and len(generated) < args.count:
            print("No more unpicked guides in pool (all generated).", file=sys.stderr)
            break

    if not generated:
        print("Nothing to generate — pool empty or all guides already exist. Refreshing indexes.")

    # 分类级汇总（用于首页区段）
    cat_summary = {c: {"count": 0, "recent": []} for c in CATS}

    if generated:
        for cat, slug, it in generated:
            gen_fn = REGISTRY[cat]["gen"]
            gslug, body = gen_fn(it)
            title = body[0].lstrip("# ").strip()
            desc = next((l.strip("- ").strip() for l in body if l.strip().startswith("- ") and "Guide" not in l.split(":")[0]), "")
            # 生成描述：用数据描述截断
            d = (it.get("description") or title).strip()
            if len(d) > 120:
                d = d[:117].rstrip() + "…"
            desc = d
            icon = img_url(it)
            md = front(title, d, icon, REGISTRY[cat]["related"]) + "\n".join(body) + "\n"
            out = os.path.join(GUIDES_DIR, cat, slug + ".md")
            if args.dry_run:
                print("[dry-run] would write:", os.path.relpath(out, ROOT))
            else:
                w(out, md)
                print("Wrote:", os.path.relpath(out, ROOT))
            cat_summary[cat]["count"] += 1
            cat_summary[cat]["recent"].append((slug, title))

    if args.dry_run:
        return

    # 重建各分类索引（含历史全部攻略）
    for cat in CATS:
        d = os.path.join(GUIDES_DIR, cat)
        guides = []
        if os.path.isdir(d):
            for fn in sorted(os.listdir(d)):
                if fn.endswith(".md") and fn != "_index.md":
                    slug = fn[:-3]
                    with open(os.path.join(d, fn), encoding="utf-8") as f:
                        m = re.search(r'title: "(.*?)"', f.read())
                    title = m.group(1) if m else slug.replace("-", " ").title()
                    guides.append((slug, title, "Full guide with data, tips and tools."))
        if guides:
            w(os.path.join(d, "_index.md"), cat_index_md(cat, guides))

    # 汇总所有分类的最新记录（含历史，便于首页显示计数）
    for cat in CATS:
        d = os.path.join(GUIDES_DIR, cat)
        if not os.path.isdir(d):
            continue
        items = []
        for fn in sorted(os.listdir(d)):
            if fn.endswith(".md") and fn != "_index.md":
                slug = fn[:-3]
                with open(os.path.join(d, fn), encoding="utf-8") as f:
                    m = re.search(r'title: "(.*?)"', f.read())
                items.append((slug, m.group(1) if m else slug))
        cat_summary[cat]["count"] = len(items)
        cat_summary[cat]["recent"] = items[-6:][::-1]

    emojis = {"crops": "🌾", "fish": "🐟", "minerals": "💎", "villagers": "👥"}
    for c in CATS:
        cat_summary[c]["emoji"] = emojis[c]
    patch_hub_section(hub_section(cat_summary))
    print("Updated Guides Hub home + category indexes.")


if __name__ == "__main__":
    main()
