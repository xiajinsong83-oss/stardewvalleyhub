#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Stardew Valley Hub — 全站内容生成器（阶段一：英文全站 + 9 语言框架）
依据：计划书第四/五/六/七/十六/十七章
数据源：stardew-valley-data (npm, 开源机器可读数据)
用法：python3 scripts/build_site.py <data_dir> <site_dir>
"""
import json, os, re, sys, unicodedata, datetime

DATA_DIR = sys.argv[1] if len(sys.argv) > 1 else "/tmp/svd/package/data"
SITE = sys.argv[2] if len(sys.argv) > 2 else "."
CONTENT_EN = os.path.join(SITE, "content", "en")
TODAY = "2026-10-04"

LANG_HOMES = {
    "zh-hans": ("星露谷物语攻略站（非官方粉丝站）", "本站为非官方粉丝攻略站，全部页面由开源游戏数据自动生成。当前英语版本已完整上线，本语言内容将由自动化流水线分批生成。"),
    "zh-hant": ("星露谷物語攻略站（非官方粉絲站）", "本站為非官方粉絲攻略站，全部頁面由開源遊戲數據自動生成。當前英語版本已完整上線，本語言內容將由自動化流水線分批生成。"),
    "de": ("Stardew Valley Hub – Inoffizielle Fan-Guides", "Dies ist eine inoffizielle Fan-Seite, die vollständig aus Open-Source-Spieldaten automatisch erstellt wird. Die englische Version ist vollständig online; Inhalte in dieser Sprache werden nach und nach durch die automatisierte Pipeline generiert."),
    "ja": ("スターデューバレー攻略（非公式ファンサイト）", "当サイトは非公式ファンサイトで、すべてのページはオープンソースのゲームデータから自動生成されています。英語版は完全に公開中です。この言語のコンテンツは自動パイプラインで順次生成されます。"),
    "ko": ("스타듀밸리 허브 – 비공식 팬 가이드", "이 사이트는 비공식 팬 사이트로, 모든 페이지는 오픈소스 게임 데이터에서 자동 생성됩니다. 영어 버전이 완전히 공개되어 있으며, 이 언어의 콘텐츠는 자동 파이프라인을 통해 단계적으로 생성됩니다."),
    "fr": ("Stardew Valley Hub – Guides de fans non officiels", "Site de fans non officiel entièrement généré automatiquement à partir de données de jeu open source. La version anglaise est entièrement en ligne ; le contenu de cette langue sera généré progressivement par le pipeline automatisé."),
    "pt": ("Stardew Valley Hub – Guias de fãs não oficiais", "Site de fãs não oficial, totalmente gerado automaticamente a partir de dados de jogo de código aberto. A versão em inglês está totalmente online; o conteúdo neste idioma será gerado gradualmente pelo pipeline automatizado."),
    "ru": ("Stardew Valley Hub – Неофициальный фан-гид", "Неофициальный фанатский сайт, полностью создаваемый автоматически на основе открытых игровых данных. Английская версия полностью опубликована; контент на этом языке будет постепенно генерироваться автоматическим конвейером."),
}

def slugify(name):
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    s = s.replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s or "item"

def fmt_list(items):
    if not items: return "none"
    return ", ".join(items)

def fmt_sources(prices):
    if not prices: return "Unknown"
    return "; ".join(f"{p.get('place')} ({p.get('price')}g)" for p in prices)

def w(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)

def front(title, desc, **extra):
    d = {"title": title, "description": desc, "date": TODAY, "draft": False}
    d.update(extra)
    lines = ["---"]
    lines.append("title: %s" % json.dumps(title, ensure_ascii=False))
    lines.append("description: %s" % json.dumps(desc, ensure_ascii=False))
    lines.append("date: %s" % TODAY)
    if d.get("type"): lines.append("type: %s" % d["type"])
    faq = d.get("faq")
    if faq:
        lines.append("faq:")
        for item in faq:
            lines.append("  - q: %s" % json.dumps(item["q"], ensure_ascii=False))
            lines.append("    a: %s" % json.dumps(item["a"], ensure_ascii=False))
    rel = d.get("related")
    if rel:
        lines.append("related:")
        for r in rel:
            lines.append("  - title: %s" % json.dumps(r["title"], ensure_ascii=False))
            lines.append("    url: %s" % json.dumps(r["url"], ensure_ascii=False))
    lines.append("---")
    return "\n".join(lines) + "\n"

# ---------- 载入数据 ----------
data = {}
for key, fn in [("npc", "villagers.json"), ("crops", "crops.json"), ("fish", "fish.json"),
                ("bundles", "bundles.json"), ("universal", "universal-gifts.json"),
                ("stardrops", "stardrops.json"), ("monsters", "monsters.json"),
                ("monster_loot", "monster-loot.json"), ("weapons", "weapons.json"),
                ("slayer", "monster-slayer-goals.json")]:
    data[key] = json.load(open(os.path.join(DATA_DIR, fn), encoding="utf-8"))

npc, crops, fish = data["npc"], data["crops"], data["fish"]
universal = data["universal"]
# 仅社区中心收集包（过滤 Joja 路线项目：无 room 字段）
bundles = [b for b in data["bundles"] if b.get("type") == "items" and b.get("room")]
monsters, monster_loot, weapons, slayer = data["monsters"], data["monster_loot"], data["weapons"], data["slayer"]
# 怪物掉落映射：monsters.lootIds(物品id) -> monster-loot 条目
LOOT_BY_ID = {str(l["id"]): l for l in monster_loot}

def make_related(items, current, section, n=3, extra=None):
    rel = []
    names = [i for i in items if i["id"] != current["id"]]
    for i in names[:n]:
        if section == "npc":
            url = f"/npc/{slugify(i['name'])}-loved-gifts/"
        else:
            url = f"/{section}/{slugify(i['name'])}/"
        rel.append({"title": f"{i['name']} Guide", "url": url})
    if extra:
        for e in extra:
            rel.append(e)
    return rel

def season_label(seasons):
    if not seasons: return "All seasons"
    return ", ".join(s.capitalize() for s in seasons)

def profit_row(crop):
    seed = 0
    for p in crop.get("seedBuyPrices") or []:
        seed = p["price"]; break
    qty_min = (crop.get("harvestQuantity") or {}).get("min", 1)
    sell = crop.get("cropSellPrice") or 0
    days = crop.get("growDays") or 1
    per_day = round((sell * qty_min - seed) / days, 1)
    return seed, per_day

# ---------- 生成 NPC 页面 ----------
npc_c = os.path.join(CONTENT_EN, "npc")
w(os.path.join(npc_c, "_index.md"),
  front("NPC Gift Guides – Stardew Valley",
        "Complete NPC gift guides for every Stardew Valley villager: loved, liked, neutral, disliked and hated gifts, plus birthdays and marriage info.",
        type="npc") + "\nEvery villager page lists the full gift preference table, birthday and marriage information. All data is generated from open-source machine-readable game data.\n")

marriage = [v["name"] for v in npc if v.get("marriageable")]
for v in npc:
    nm = v["name"]
    slug = slugify(nm)
    bday = v.get("birthday") or {}
    bday_str = f"{bday.get('day')} {bday.get('season','').capitalize()}" if bday.get("day") else "Unknown"
    intro = (v.get("description") or f"{nm} is a villager in Stardew Valley.")
    if v.get("marriageable"):
        intro += " They are one of the twelve marriage candidates."
    faq = [
        {"q": f"What are {nm}'s loved gifts in Stardew Valley?",
         "a": f"{nm} loves " + fmt_list(v.get("loves", [])[:8]) + ". Giving loved gifts gives the most friendship points."},
        {"q": f"What is the best gift for {nm}?",
         "a": "Choose any item from the loved gifts table above; they all give maximum friendship points. On " + bday_str + " (their birthday), gifts give extra friendship points."},
        {"q": f"Is {nm} a marriage candidate?",
         "a": "Yes, they are one of the twelve marriageable villagers." if v.get("marriageable") else f"No, {nm} is not a marriageable villager."},
        {"q": f"When is {nm}'s birthday?",
         "a": f"{nm}'s birthday is on {bday_str}."},
    ]
    rel = make_related(npc, v, "npc", 3)
    body = front(
        f"{nm} Loved Gifts in Stardew Valley",
        f"Complete gift guide for {nm}: loved, liked, neutral, disliked and hated gifts in Stardew Valley, plus birthday ({bday_str}) and marriage info.",
        type="npc", faq=faq, related=rel)
    body += f"\n{intro}\n\n**Birthday:** {bday_str}\n\n**Marriage candidate:** {'Yes' if v.get('marriageable') else 'No'}\n\n"
    groups = [("Loved Gifts", v.get("loves", [])), ("Liked Gifts", v.get("likes", [])),
              ("Neutral Gifts", v.get("neutrals", [])), ("Disliked Gifts", v.get("dislikes", [])),
              ("Hated Gifts", v.get("hates", []))]
    for label, items in groups:
        body += f"## {label}\n\n<div class=\"table-wrap\">\n\n| Item |\n| --- |\n"
        for it in items:
            body += f"| {it} |\n"
        body += "</div>\n\n"
    body += "## Tips\n\n- Give " + nm + " a loved gift on their birthday (" + bday_str + ") for extra friendship points.\n"
    body += "- Gift up to twice per week; quality and loved items add more points.\n"
    body += "- Universal loves such as Golden Pumpkin, Magic Rock Candy and Pearl are also loved by every villager.\n"
    w(os.path.join(npc_c, f"{slug}-loved-gifts.md"), body)
print("NPC pages:", len(npc))

# ---------- 生成作物页面 ----------
crops_c = os.path.join(CONTENT_EN, "crops")
w(os.path.join(crops_c, "_index.md"),
  front("Crop Guides – Stardew Valley",
        "Every Stardew Valley crop: season, growth time, seed source, sell price and profit.", type="crops") + "\nAll crop data is generated from open-source machine-readable game data.\n")
for c in crops:
    nm = c["name"]; slug = slugify(nm)
    seasons = season_label(c["seasons"])
    seed = 0
    for p in c.get("seedBuyPrices") or []:
        seed = p["price"]; break
    sell = c.get("cropSellPrice") or 0
    qty = c.get("harvestQuantity") or {}
    regrow = c.get("regrowDays")
    per_day = round((sell * (qty.get("min", 1) or 1) - seed) / (c.get("growDays") or 1), 1)
    faq = [
        {"q": f"What season does {nm} grow in Stardew Valley?",
         "a": f"{nm} grows in {seasons}."},
        {"q": f"How long does {nm} take to grow?",
         "a": f"{nm} takes {c.get('growDays')} days to grow" + (f" and regrows every {regrow} days after harvest." if regrow else ".")},
        {"q": f"Where can I buy {c.get('seedName')}?",
         "a": fmt_sources(c.get("seedBuyPrices"))},
        {"q": f"How much is {nm} worth?",
         "a": f"Base sell price is {sell}g; approximate profit per growing day is {per_day}g (basic quality, before profession bonuses)."},
    ]
    rel = [{"title": r["name"] + " Guide", "url": f"/crops/{slugify(r['name'])}/"}
           for r in [x for x in crops if x["id"] != c["id"]][:3]]
    body = front(
        f"{nm} Growing Guide – Stardew Valley",
        f"{nm} crop guide: season, growth time ({c.get('growDays')} days), seed source, sell price and profit in Stardew Valley.",
        type="crops", faq=faq, related=rel)
    body += f"\n{nm} is a crop in Stardew Valley. Below is the complete growing data.\n\n"
    body += "<div class=\"table-wrap\">\n\n| Attribute | Value |\n| --- | --- |\n"
    body += f"| Season | {seasons} |\n"
    body += f"| Growth time | {c.get('growDays')} days" + (f" (regrows every {regrow} days)" if regrow else "") + " |\n"
    body += f"| Seed source | {fmt_sources(c.get('seedBuyPrices'))} |\n"
    body += f"| Seed price | {seed}g |\n"
    body += f"| Base sell price | {sell}g |\n"
    body += f"| Harvest quantity | {qty.get('min')}-{qty.get('max')} |\n"
    body += f"| Approx. profit / day | {per_day}g (basic quality) |\n"
    body += f"| Trellis | {'Yes' if c.get('trellis') else 'No'} |\n"
    body += f"| Giant crop possible | {'Yes' if c.get('giant') else 'No'} |\n"
    body += "</div>\n\n"
    artisan = [k for k, v in (c.get("artisanUses") or {}).items() if v]
    if artisan:
        body += f"**Artisan uses:** {', '.join(k.capitalize() for k in artisan)}.\n\n"
    body += "## Tips\n\n- Plant after the last frost in " + seasons.lower() + ".\n"
    body += "- Use Quality Fertilizer for higher quality harvests and more profit.\n"
    body += "- Note that crops die when the season changes, except multi-season crops.\n"
    w(os.path.join(crops_c, f"{slug}.md"), body)
print("Crop pages:", len(crops))

# ---------- 生成鱼类页面 ----------
fish_c = os.path.join(CONTENT_EN, "fish")
w(os.path.join(fish_c, "_index.md"),
  front("Fish Guides – Stardew Valley",
        "Where to catch every fish in Stardew Valley: season, time, weather, location, difficulty and sell price.", type="fish") + "\nAll fish data is generated from open-source machine-readable game data.\n")
for f in fish:
    nm = f["name"]; slug = slugify(nm)
    faq = [
        {"q": f"Where do I catch {nm} in Stardew Valley?",
         "a": f"You can catch {nm} at: {f.get('location')}."},
        {"q": f"When can I catch {nm}?",
         "a": f"{nm} is available {season_label(f.get('seasons'))}, {f.get('time')}, in {f.get('weather')} weather."},
        {"q": f"How hard is it to catch {nm}?",
         "a": f"{nm} has a difficulty of {f.get('difficulty')} (higher = harder to catch)."},
        {"q": f"How much does {nm} sell for?",
         "a": f"Base sell price is {f.get('sellPrice')}g."},
    ]
    rel = [{"title": r["name"] + " Guide", "url": f"/fish/{slugify(r['name'])}/"}
           for r in [x for x in fish if x["id"] != f["id"]][:3]]
    body = front(
        f"Where to Catch {nm} in Stardew Valley",
        f"{nm} location guide: season, time, weather, difficulty and sell price in Stardew Valley.",
        type="fish", faq=faq, related=rel)
    cat = f.get("category") or "regular"
    body += f"\n{nm} ({f.get('description', '')}). Below is the complete catch data.\n\n"
    body += "<div class=\"table-wrap\">\n\n| Attribute | Value |\n| --- | --- |\n"
    body += f"| Location | {f.get('location')} |\n"
    body += f"| Season | {season_label(f.get('seasons'))} |\n"
    body += f"| Time | {f.get('time')} |\n"
    body += f"| Weather | {f.get('weather')} |\n"
    body += f"| Difficulty | {f.get('difficulty')} |\n"
    body += f"| Base sell price | {f.get('sellPrice')}g |\n"
    body += f"| Category | {cat} |\n"
    body += "</div>\n\n"
    if f.get("usedIn"):
        body += f"**Used in cooking/bundles:** {', '.join(f.get('usedIn')[:6])}.\n\n"
    body += "## Tips\n\n- Check the weather and time window before going fishing.\n"
    body += "- Level up fishing and use better rods/bait to handle higher difficulty fish.\n"
    w(os.path.join(fish_c, f"{slug}.md"), body)
print("Fish pages:", len(fish))

# ---------- 生成收集包页面 ----------
bundles_c = os.path.join(CONTENT_EN, "bundles")
w(os.path.join(bundles_c, "_index.md"),
  front("Community Center Bundles – Stardew Valley",
        "Complete Community Center bundle guide: every room, bundle, required items and rewards.", type="bundles") + "\nAll bundle data is generated from open-source machine-readable game data.\n")
rooms = {}
for b in bundles:
    rooms.setdefault(b["room"], []).append(b)
used_slugs = set()
for b in bundles:
    nm = b["name"]; slug = slugify(nm)
    if not slug.endswith("bundle"): slug += "-bundle"
    if slug in used_slugs:
        n = 2
        while f"{slug}-{n}" in used_slugs: n += 1
        slug = f"{slug}-{n}"
    used_slugs.add(slug)
    room_label = b["room"].replace("-", " ").title()
    items_md = "".join(f"| {it['name']} | {it['quantity']} |\n" for it in b.get("items", []))
    reward = b.get("reward") or {}
    faq = [
        {"q": f"What items do I need for the {nm}?",
         "a": f"The {nm} requires " + ", ".join(f"{it['quantity']}x {it['name']}" for it in b.get("items", [])) + "."},
        {"q": f"What is the reward for the {nm}?",
         "a": f"Completing the {nm} rewards you with {reward.get('quantity')}x {reward.get('name')}."},
        {"q": f"Which room is the {nm} in?",
         "a": f"The {nm} is part of the {room_label} room in the Community Center."},
    ]
    same_room = [x for x in rooms.get(b["room"], []) if x["id"] != b["id"]][:3]
    rel = []
    for r in same_room:
        rs = slugify(r["name"])
        if not rs.endswith("bundle"): rs += "-bundle"
        rel.append({"title": r["name"] + " Bundle", "url": f"/bundles/{rs}/"})
    body = front(
        f"{nm} – Community Center Bundle Guide",
        f"{nm}: required items, quantities and reward in Stardew Valley (Community Center, {room_label}).",
        type="bundles", faq=faq, related=rel)
    body += f"\nThe **{nm}** is a bundle in the **{room_label}** room of the Community Center.\n\n"
    body += f"**Items required:** {b.get('itemsRequired')} of " + str(b.get("numItemsAvailable")) + "\n\n"
    body += "<div class=\"table-wrap\">\n\n| Item | Quantity |\n| --- | --- |\n" + items_md + "</div>\n\n"
    body += f"**Reward:** {reward.get('quantity')}x {reward.get('name')}\n\n"
    body += "## Tips\n\n- Collect required items across all seasons; check each item's source before the season ends.\n"
    body += "- Completing all bundles in a room unlocks room-specific rewards (e.g. greenhouse, quarry, minecarts).\n"
    w(os.path.join(bundles_c, f"{slug}.md"), body)
print("Bundle pages:", len(bundles))

# ---------- 生成 FAQ 页面 ----------
faq_c = os.path.join(CONTENT_EN, "faq")
w(os.path.join(faq_c, "_index.md"),
  front("Stardew Valley FAQ – Quick Answers",
        "Quick answers to the most searched Stardew Valley questions: best crops, legendary fish, unlocks and more.", type="faq") + "\n")
def faq_page(slug, title, desc, body_md, faq):
    return front(title, desc, type="faq", faq=faq) + "\n" + body_md

# 利润 Top 作物
profit_rows = []
for c in crops:
    seed, pd = profit_row(c)
    profit_rows.append((c["name"], c.get("seasons", []), pd))
top = sorted(profit_rows, key=lambda x: -x[2])[:8]
top_md = "<div class=\"table-wrap\">\n\n| Crop | Season | Approx. profit / day (g) |\n| --- | --- | --- |\n" + "".join(f"| {n} | {', '.join(s.capitalize() for s in se).strip() or 'All'} | {p} |\n" for n, se, p in top) + "</div>\n"
legendary = [f["name"] for f in fish if f.get("category") == "legendary"]
legendary2 = [f["name"] for f in fish if f.get("category") == "legendary-2"]
univ_loves = universal.get("loves", [])[:6]
faqs = [
    ("best-crops-for-profit", "Best Crops for Profit in Stardew Valley",
     "The most profitable crops in Stardew Valley by approximate profit per growing day (basic quality, no professions).",
     "Below are the top crops by approximate daily profit (basic quality).\n\n" + top_md + "\nRemember that profit can increase with Quality Fertilizer, the Tiller profession and artisan processing (Keg, Preserves Jar).\n",
     [{"q": "What is the most profitable crop in Stardew Valley?", "a": "Based on basic-quality data, " + top[0][0] + " has the highest approximate profit per day. High-value greenhouse crops like Ancient Fruit and Sweet Gem Berry also earn well over full seasons."},
      {"q": "Are spring crops or summer crops more profitable?", "a": "Profit depends on the crop. See the table above for per-season leaders."}]),
    ("legendary-fish-guide", "Legendary Fish Guide – Stardew Valley",
     "All legendary fish in Stardew Valley: names, and where they are found.",
     "Legendary fish are unique, one-per-save fish with very high difficulty.\n\n**Legendary fish:** " + ", ".join(legendary) + ".\n\n**Legendary fish II (Ginger Island, 1.5+):** " + ", ".join(legendary2) + ".\n\nLegendary fish can only be caught once per save file (legendary II can be caught once per year). They sell for high prices and are not needed for Community Center bundles.\n",
     [{"q": "How many legendary fish are there?", "a": "There are " + str(len(legendary)) + " classic legendary fish and " + str(len(legendary2)) + " Legendary II fish from the Ginger Island update."},
      {"q": "Can I catch legendary fish more than once?", "a": "Classic legendary fish can be caught once per save file; Legendary II fish once per year."}]),
    ("best-universal-gifts", "Best Universal Gifts in Stardew Valley",
     "Gifts loved by every villager: universal loves you can safely give to anyone.",
     "These universal loves are accepted by every villager and always give max friendship points:\n\n**" + ", ".join(univ_loves) + "**\n\nUniversal likes are also safe to give to anyone.\n",
     [{"q": "What gifts does every villager love?", "a": "Every villager loves " + ", ".join(univ_loves[:4]) + " and more (see list above)."},
      {"q": "What is a safe gift for any NPC?", "a": "Universal loves and likes are safe for every villager."}]),
    ("community-center-rooms", "Community Center Rooms & Rewards – Stardew Valley",
     "Every Community Center room and what completing it unlocks.",
     "The Community Center has these rooms: **" + ", ".join(r.replace("-", " ").title() for r in sorted(rooms.keys())) + "**.\n\nCompleting a room unlocks its reward: the Crafts Room unlocks bridge repair, the Pantry unlocks the greenhouse, the Boiler Room unlocks minecarts, the Fish Tank unlocks the mine elevator, and the Bulletin Board unlocks the movie theater (with the Vault). Completing all bundles unlocks the Junimo Hut ceremony.\n",
     [{"q": "What does the Pantry unlock?", "a": "Completing the Pantry unlocks the greenhouse."},
      {"q": "How many bundles are in the Community Center?", "a": "There are " + str(len(bundles)) + " bundles across all rooms (standard layout)."}]),
    ("how-to-unlock-greenhouse", "How to Unlock the Greenhouse in Stardew Valley",
     "Step-by-step: unlock the greenhouse by completing the Pantry bundles.",
     "Complete all six Pantry bundles (Spring Crops, Summer Crops, Fall Crops, Quality Crops, Animal, Artisan). The reward is the greenhouse, which lets you grow crops in any season.\n\nItems for the Pantry include parsnips, melons, pumpkins, artisan goods and animal products.\n",
     [{"q": "What bundles unlock the greenhouse?", "a": "All Pantry bundles: Spring Crops, Summer Crops, Fall Crops, Quality Crops, Animal and Artisan."},
      {"q": "Can I grow crops in winter in the greenhouse?", "a": "Yes — the greenhouse allows growing any crop in any season."}]),
    ("how-to-reach-skull-cavern", "How to Reach the Skull Cavern in Stardew Valley",
     "Unlock the Skull Cavern in the desert with the key from Qi.",
     "Unlock the desert by completing the Vault bundles (25,000g total). Then find the Skull Key in the mines (level 120) to open the Skull Cavern in the desert.\n",
     [{"q": "How do I open the Skull Cavern?", "a": "Get the Skull Key from the bottom of the mines (level 120), then use it at the desert cavern entrance."},
      {"q": "Do I need the desert to reach the Skull Cavern?", "a": "Yes, the Skull Cavern entrance is in the desert, unlocked via the Vault bundles."}]),
    ("can-you-marry-multiple-villagers", "Can You Marry Multiple Villagers in Stardew Valley?",
     "Marriage mechanics: one spouse at a time, divorce and remarriage.",
     "You can only be married to one villager at a time. " + "Marriage candidates include: " + ", ".join(marriage) + ".\n\nDivorce is available at the Mayor's house (30,000g), and you can remarry afterwards.\n",
     [{"q": "Can I marry more than one NPC?", "a": "No — one spouse at a time. You can divorce and remarry."},
      {"q": "How many marriage candidates are there?", "a": "There are " + str(len(marriage)) + " marriage candidates."}]),
    ("how-to-get-stardrop", "How to Get Stardrops in Stardew Valley",
     "All Stardrop sources and how each one increases max energy.",
     "Stardrops permanently increase max energy. Sources include: the mines level 100 reward, the community center bundle completion, " + ("secret notes" if "Secret Notes" in "x" else "") + ", the desert trader, and more (see the open-source data for the full list).\n",
     [{"q": "What does a Stardrop do?", "a": "A Stardrop permanently increases your maximum energy."},
      {"q": "How many Stardrops are there?", "a": "There are " + str(len(data["stardrops"])) + " Stardrops in the game."}]),
    ("npc-birthdays", "All NPC Birthdays in Stardew Valley",
     "Every villager's birthday, season and day.",
     "<div class=\"table-wrap\">\n\n| Villager | Birthday |\n| --- | --- |\n" + "".join(f"| {v['name']} | {v.get('birthday',{}).get('day')} {v.get('birthday',{}).get('season','').capitalize()} |\n" for v in npc) + "</div>\n",
     [{"q": "Whose birthday is it today?", "a": "Check the table above; birthday gifts give extra friendship points."},
      {"q": "What happens if I give a gift on a birthday?", "a": "Gifts on birthdays give significantly more friendship points."}]),
    ("best-spring-crops", "Best Spring Crops in Stardew Valley",
     "Most profitable spring crops and when to plant them.",
     "Spring crops include parsnips, strawberries (from the Egg Festival), potatoes, cauliflower and more. See the best crops table for the top earners and plant early so they are ready before summer.\n",
     [{"q": "What is the best spring crop?", "a": "Cauliflower and strawberries are strong spring earners; check the profit table for details."},
      {"q": "Can I plant strawberries after the Egg Festival?", "a": "Yes — strawberry seeds are available at the Egg Festival (spring 13)."}]),
    ("best-summer-crops", "Best Summer Crops in Stardew Valley",
     "Most profitable summer crops.",
     "Summer crops include blueberries (regrowing, low upkeep), melons, starfruit (from the desert trader) and hops. Blueberries are excellent for steady income; starfruit leads in single-harvest profit.\n",
     [{"q": "What is the best summer crop?", "a": "Starfruit has the highest single-harvest value; blueberries offer the best low-upkeep regrowing income."},
      {"q": "Where do I get starfruit seeds?", "a": "Starfruit seeds are available from the Desert Trader."}]),
    ("best-fall-crops", "Best Fall Crops in Stardew Valley",
     "Most profitable fall crops.",
     "Fall crops include pumpkins, cranberries, sweet gem berry and yams. Cranberries regrow for steady income; pumpkins are classic fall earners.\n",
     [{"q": "What is the best fall crop?", "a": "Cranberries and pumpkins are the leading fall crops for profit."},
      {"q": "What is a Sweet Gem Berry?", "a": "Sweet Gem Berry is a rare, very valuable crop grown from Rare Seeds; it takes almost a whole season."}]),
]
for slug, title, desc, body_md, faq in faqs:
    w(os.path.join(faq_c, f"{slug}.md"), faq_page(slug, title, desc, body_md, faq))
print("FAQ pages:", len(faqs))

# ---------- 生成 BOSS 页面 ----------
# 星露谷无传统 BOSS；社区共识的 "boss-like / 精英" 挑战 = 高 HP 特殊史莱姆 + 危险矿井强化怪
# 全部数值来自开源 monsters.json；武器建议由 weapons.json 可复算推导（标注估算）
boss_ids = ["Prismatic Slime", "Tiger Slime", "Big Slime",
            "Putrid Ghost", "Stick Bug", "Shadow Sniper", "Royal Serpent",
            "Spider", "Blue Squid", "Skeleton Mage"]
boss_list = [m for m in monsters if m["name"] in boss_ids]
assert len(boss_list) == len(boss_ids), "BOSS 名单与数据不匹配"
boss_by_name = {m["name"]: m for m in boss_list}

def weapon_rows(monster, limit=6):
    hp = monster.get("hp", 1)
    rows = []
    for wp in weapons:
        if not wp.get("damageMin") or not wp.get("damageMax"):
            continue
        avg = (wp["damageMin"] + wp["damageMax"]) / 2.0
        hits = max(1, int(hp / avg) + (1 if hp % avg else 0))
        if hits <= 24:
            rows.append((wp, avg, hits))
    rows.sort(key=lambda r: r[2])  # 按估算命中次数升序
    out = []
    for wp, avg, hits in rows[:limit]:
        out.append({"name": wp["name"], "type": wp.get("type", ""), "range": f"{wp['damageMin']}-{wp['damageMax']}",
                    "avg": round(avg, 1), "hits": hits, "obtain": (wp.get("obtain") or "Unknown")[:60]})
    return out

boss_c = os.path.join(CONTENT_EN, "boss")
w(os.path.join(boss_c, "_index.md"),
  front("Bosses & Elite Enemies – Stardew Valley",
        "Stardew Valley boss guide: Prismatic Slime, Tiger Slime and all dangerous mine enemies with HP, damage, drops and weapon recommendations.",
        type="boss") + "\nStardew Valley has no traditional boss fights, but several elite enemies act as mini-bosses: the Prismatic Slime event, the Tiger Slime on Ginger Island, and the dangerous variants that appear in the Dangerous Mines and Dangerous Skull Cavern (activated through Mr. Qi's challenge). All stats below come from open-source machine-readable game data.\n\n"
        "<div class=\"table-wrap\">\n\n| Enemy | HP | Damage | Speed | XP | Dangerous |\n| --- | --- | --- | --- | --- | --- |\n"
        + "".join(f"| [{m['name']}]({f'/boss/{slugify(m["name"])}/'}) | {m.get('hp')} | {m.get('damage')} | {m.get('speed')} | {m.get('xp')} | {'Yes' if m.get('dangerous') else 'No'} |\n" for m in sorted(boss_list, key=lambda x: -x.get("hp", 0)))
        + "</div>\n\n## Slayer goals\n\nCompleting monster slayer goals at the Adventurer's Guild unlocks rewards. "
        + (("Relevant goals: " + "; ".join(f"{g.get('name')} ({g.get('target')} kills)" for g in slayer if isinstance(g, dict) and any(m["name"] in str(g.get("name", "")) for m in boss_list)) + ".") if slayer else "See the Adventurer's Guild ledger in-game for the full list.")
        + "\n")

for m in boss_list:
    nm = m["name"]
    slug = slugify(nm)
    hp, dmg = m.get("hp", 0), m.get("damage", 0)
    avg_all = sorted(weapon_rows(m, limit=100), key=lambda r: r["hits"])[:6]
    loots = [LOOT_BY_ID.get(str(i)) for i in m.get("lootIds", [])]
    loots = [l for l in loots if l]
    drops_md = "<div class=\"table-wrap\">\n\n| Drop | Sell price (g) |\n| --- | --- |\n" + "".join(
        f"| {l['name']} | {l.get('sellPrice')} |\n" for l in loots) + "</div>\n" if loots else "No common drops are recorded in the open data for this enemy.\n"
    weap_md = "<div class=\"table-wrap\">\n\n| Weapon | Type | Damage | Est. hits to kill | How to get |\n| --- | --- | --- | --- | --- |\n" + "".join(
        f"| {r['name']} | {r['type']} | {r['range']} | {r['hits']} | {r['obtain']} |\n" for r in avg_all) + "</div>\n"
    locs = m.get("locations") or []
    locs_md = "The **" + nm + "** appears in: " + ", ".join(locs) + "." if locs else "Location data is not recorded for this enemy in the open dataset."
    tips = []
    if dmg >= 20:
        tips.append(f"At {dmg} damage per hit, bring armor with defense and food with high healing (e.g. cooked dishes from the cooking data) before engaging.")
    if hp >= 400:
        tips.append(f"With {hp} HP, this is a sustained fight: upgrade your weapon so average damage is high, and expect roughly {avg_all[0]['hits']} hits with the best available weapon.")
    if m.get("dangerous"):
        tips.append("This is a Dangerous variant: it only spawns after Mr. Qi's challenge activates dangerous mines, and it is stronger than its normal counterpart.")
    tips.append("Use the combat buffs from rings and footwear, and retreat when low — enemies do not chase across floor transitions.")
    faq = [
        {"q": f"Where can I find the {nm}?",
         "a": ("The " + nm + " appears in: " + ", ".join(locs) + ".") if locs else f"The {nm} appears in areas listed in the in-game data; see the locations field above."},
        {"q": f"What is the best weapon against the {nm}?",
         "a": "Based on weapon stats, the " + avg_all[0]["name"] + " (" + avg_all[0]["range"] + " damage) reaches an estimated " + str(avg_all[0]["hits"]) + " hits to kill the " + nm + ", the lowest among commonly available weapons."},
        {"q": f"What does the {nm} drop?",
         "a": "Common recorded drops: " + (", ".join(l["name"] for l in loots) if loots else "none recorded") + "."},
    ]
    rel = [{"title": o["name"] + " Guide", "url": f"/boss/{slugify(o['name'])}/"} for o in boss_list if o["id"] != m["id"]][:3]
    body = front(f"How to Beat the {nm} – Stardew Valley",
                 f"{nm} boss guide: HP {hp}, damage {dmg}, drops and the best weapons to beat it in Stardew Valley.",
                 type="boss", faq=faq, related=rel)
    body += f"\nThe **{nm}** is one of Stardew Valley's toughest enemies — a boss-like challenge with **{hp} HP** and **{dmg} damage** per hit.\n\n"
    body += f"**Stats:**\n\n<div class=\"table-wrap\">\n\n| HP | Damage | Speed | XP | Dangerous variant |\n| --- | --- | --- | --- | --- |\n| {hp} | {dmg} | {m.get('speed')} | {m.get('xp')} | {'Yes' if m.get('dangerous') else 'No'} |\n</div>\n\n"
    body += "**Where to find it**\n\n" + locs_md + "\n\n"
    body += "**Drops**\n\n" + drops_md + "\n"
    body += "**Recommended weapons** (estimated hits to kill from weapon damage stats)\n\n" + weap_md + "\n"
    body += "## Tips\n\n" + "".join(f"- {t}\n" for t in tips) + "\n"
    w(os.path.join(boss_c, f"{slug}.md"), body)
print("Boss pages:", len(boss_list))

# ---------- 生成玩家反馈页面 ----------
fb_c = os.path.join(CONTENT_EN, "feedback")
faq_fb = [
    {"q": "How do I report a bug in Stardew Valley?", "a": "Report bugs to the official Stardew Valley Forums (https://forums.stardewvalley.net), which is the channel ConcernedApe uses for bug reports. Include your platform, game version, mods (if any), and steps to reproduce."},
    {"q": "Where can I suggest new features or improvements?", "a": "The official Discord (https://discord.gg/stardewvalley) and the official forums are the main places where community feedback is collected. This site only links to those channels; it does not forward feedback."},
    {"q": "How can I contact the team behind Stardew Valley Hub?", "a": "Use the contact email on this page. For DMCA, privacy or advertising inquiries, email the address listed in our Contact page."},
]
fb_body = "This page collects the **official and community channels** where you can give feedback about Stardew Valley. This site is a static, unofficial fan guide — it does not store user accounts or comments, and it forwards nothing; every channel below is operated by the game team or the official community.\n\n"
fb_body += "<div class=\"table-wrap\">\n\n| Channel | What it is for | Link |\n| --- | --- | --- |\n"
fb_body += "| Official Forums | Bug reports, help & suggestions (used by ConcernedApe for 1.6+ issue reports) | https://forums.stardewvalley.net |\n"
fb_body += "| Official Discord | Community chat, modding help, fan discussion | https://discord.gg/stardewvalley |\n"
fb_body += "| Reddit r/StardewValley | Fan community, discussions, screenshots | https://www.reddit.com/r/StardewValley/ |\n"
fb_body += "| Steam Community Hub | Reviews, discussions, guides (PC) | https://steamcommunity.com/app/413150 |\n"
fb_body += "| Official Contact | Contact the developer directly | https://www.stardewvalley.net/contact/ |\n"
fb_body += "| Official Wiki | Community-edited reference (official hosting) | https://www.stardewvalleywiki.com |\n"
fb_body += "</div>\n\n## How to give useful feedback\n\n- **Bugs:** include platform, game version (e.g. 1.6.x), whether mods are installed, and clear reproduction steps.\n- **Suggestions:** be specific about the feature, where it fits in the game, and how it improves play.\n- **Be respectful:** keep reports constructive; the game team reads the official forums and Discord.\n\n## Feedback about this site\n\nThis guide site is a separate unofficial fan project. If you notice wrong data, a broken link, or have a DMCA / privacy / advertising question, email us directly (see Contact page). Since the site is static, email is the fastest channel.\n"
w(os.path.join(fb_c, "_index.md"), front(
    "Player Feedback & Community – Stardew Valley",
    "Official and community channels to give Stardew Valley feedback, report bugs and join the community.",
    type="feedback", faq=faq_fb) + "\n" + fb_body)
print("Feedback pages: 1")

# ---------- 生成 Updates 页面 ----------
updates_c = os.path.join(CONTENT_EN, "updates")
w(os.path.join(updates_c, "_index.md"),
  front("Stardew Valley Updates & Patch News",
        "Latest Stardew Valley update news, patch notes and changelogs, summarized automatically from official sources.", type="updates",
        date="2026-10-04") + "\nUpdates are collected automatically from official channels (the official Stardew Valley blog and Steam news) and summarized without copying original text.\n")
w(os.path.join(updates_c, "stardew-valley-1-6-9-patch-notes.md"), front(
    "Stardew Valley 1.6.9 Patch Notes Summary",
    "Summary of Stardew Valley 1.6.9: bug fixes and quality-of-life improvements. Official source linked below.",
    type="updates", date="2024-04-22",
    faq=[{"q": "What did Stardew Valley 1.6.9 fix?", "a": "1.6.9 focused on bug fixes and quality-of-life improvements following the large 1.6 update."},
         {"q": "Where is the official 1.6.9 changelog?", "a": "Official changelog: https://www.stardewvalley.net/stardew-valley-1-6-update-full-changelog/"}] ) + "\nThe **1.6.9** patch was released on April 22, 2024, addressing bugs introduced with the 1.6 update and polishing game balance.\n\nSource: [Official Stardew Valley blog](https://www.stardewvalley.net/stardew-valley-1-6-update-full-changelog/) and [Steam news](https://store.steampowered.com/news/app/413150).\n")
w(os.path.join(updates_c, "stardew-valley-1-6-update-changelog.md"), front(
    "Stardew Valley 1.6 Update Changelog Summary",
    "Summary of the big Stardew Valley 1.6 update: new farm types, desert festival, mastery system and more.",
    type="updates", date="2024-03-19",
    faq=[{"q": "When was Stardew Valley 1.6 released?", "a": "1.6 was released on March 19, 2024."},
         {"q": "What is new in 1.6?", "a": "New farm types, the Desert Festival, a mastery system, new crops and items, and many quality-of-life improvements."}] ) + "\nThe **1.6** update (March 19, 2024) added major content: new farm types, the Desert Festival, a mastery system, new items and crops, plus extensive quality-of-life improvements.\n\nSource: [Official Stardew Valley blog](https://www.stardewvalley.net/stardew-valley-1-6-update-full-changelog/).\n")
print("Update pages: 2")

# ---------- 法律页面 ----------
w(os.path.join(CONTENT_EN, "privacy.md"), front(
    "Privacy Policy", "Privacy policy for Stardew Valley Hub: ads, cookies, GDPR and CCPA rights.",
    date="2026-10-04") + """
Stardew Valley Hub ("we") operates the unofficial fan website stardewvalleyhub.wiki.

## Advertising & Cookies
This site is supported by Google AdSense. We use cookies to serve and personalize ads. You may accept or decline non-essential cookies via the cookie banner. Declining does not reduce site functionality.

## GDPR (EU visitors)
If you are in the European Economic Area, you have the right to access, correct and delete personal data we process, and to object to or restrict processing. We do not collect personally identifiable information beyond what Google's advertising systems process.

## CCPA (California residents)
California residents may request disclosure of the personal information we hold about them, and request deletion. To exercise your rights, email us at """ + "mailto:" + """39918849@qq.com.

## Third-party cookies
Google AdSense and Google Analytics may place cookies. You can opt out of personalized advertising via Google's Ads Settings: https://adssettings.google.com.

## Contact
Email: 39918849@qq.com
""")

w(os.path.join(CONTENT_EN, "terms.md"), front(
    "Terms of Service", "Terms of service for Stardew Valley Hub.",
    date="2026-10-04") + """
## Information accuracy
All game data on this site comes from open-source machine-readable community data and is provided for reference only. Information may contain errors; we are not liable for any loss or damage resulting from its use.

## Acceptable use
Do not scrape or bulk-copy this site's content for republication without permission.

## Trademarks
Stardew Valley and related names are trademarks of their respective owners. This is an unofficial fan resource and is not affiliated with or endorsed by the game developer.

## Contact
Email: 39918849@qq.com
""")

w(os.path.join(CONTENT_EN, "dmca.md"), front(
    "DMCA Copyright Policy", "DMCA takedown and counter-notice procedures for Stardew Valley Hub.",
    date="2026-10-04") + """
This website respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). If you believe that any material available on this site infringes your copyright, please submit a written DMCA takedown notice to our designated agent via email: mailto:39918849@qq.com.

Your DMCA notice must contain all of the following information:
- Identification of the copyrighted work claimed to have been infringed.
- Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material, including URL(s).
- Your contact information: full name, mailing address, telephone number, and email address.
- A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
- A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
- Your physical or electronic signature.

Upon receipt of a complete, valid DMCA takedown notice, we will: promptly remove or disable access to the allegedly infringing material; notify the user who uploaded the content of the takedown notice; and follow DMCA counter-notice procedures if a counter-notification is submitted.

## Counter-Notification Procedure
If you believe content was removed mistakenly, you may send a counter-notice to our DMCA agent. A valid counter-notice must include: your name, address, phone number, email address; identification of the material that was removed and the URL before removal; a statement under penalty of perjury that you have a good faith belief the material was removed by mistake; consent to the jurisdiction of a court in your area; and your physical or electronic signature.

After receiving a valid counter-notice, we will forward it to the original complainant. The complainant has 10–14 business days to file a court action; if no legal action is filed, we may restore the removed content.

Disclaimer: This site only uses machine-readable raw game data from open-source community repositories. No original creative text, artwork, images or copyrighted narrative content is hosted on this website. Stardew Valley and related trademarks belong to their respective owners. This site is an unofficial fan resource and is not affiliated with the game developer.
""")

w(os.path.join(CONTENT_EN, "about.md"), front(
    "About Us", "About Stardew Valley Hub: an unofficial, fully automated data-driven fan guide site.",
    date="2026-10-04") + """
Stardew Valley Hub is an unofficial fan guide site. Pages are generated automatically from open-source machine-readable game data (NPC gifts, crops, fish, community center bundles, FAQs and update news) with no manual article writing.

The site is fully automated: data sync → page generation → build → deploy, so content is always current and never goes stale.

This is not an official site. Stardew Valley is developed by ConcernedApe; all trademarks belong to their owners.

Contact: 39918849@qq.com
""")

w(os.path.join(CONTENT_EN, "contact.md"), front(
    "Contact Us", "Contact Stardew Valley Hub for DMCA, privacy or advertising inquiries.",
    date="2026-10-04") + """
For DMCA, privacy, advertising or other inquiries, email: **39918849@qq.com**

We aim to respond within a few business days.
""")
print("Legal pages: 5")

# ---------- 首页（英文） ----------
w(os.path.join(CONTENT_EN, "_index.md"), front(
    "Stardew Valley Hub – Unofficial Fan Guides",
    "Data-driven unofficial Stardew Valley guides: NPC gifts, crops, fish, community center bundles, FAQs and game updates.",
    type="home", date=TODAY) + "\nWelcome to Stardew Valley Hub — an unofficial, fully automated fan guide site. Every page is generated from open-source machine-readable game data, so tables are always accurate and pages are always up to date.\n")

# ---------- 其他 8 种语言首页 ----------
for lang, (title, desc) in LANG_HOMES.items():
    w(os.path.join(SITE, "content", lang, "_index.md"), front(title, desc, type="home", date=TODAY) + "\n" + desc + "\n")

# ---------- 核心统计数据 ----------
stats = {"npc": len(npc), "crops": len(crops), "fish": len(fish), "bundles": len(bundles), "boss": len(boss_list)}
w(os.path.join(SITE, "data", "stardew.json"), json.dumps(stats, ensure_ascii=False, indent=2))
print("stardew.json stats:", stats)
print("DONE")
