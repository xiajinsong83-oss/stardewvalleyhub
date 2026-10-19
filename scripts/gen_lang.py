#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gen_lang.py — 多语言页面生成器（zh-hans / de）
策略：
  1. 核心页（首页/栏目索引/静态页）：人工高质量译文（MANUAL）
  2. 数据详情页：title 模式翻译（专名保留英文），description/正文保留英文原文
  3. 图片路径、表格、HTML、frontmatter 其余字段（date/type 等）原样保留
用法：python3 scripts/gen_lang.py   # 生成 content/zh-hans 与 content/de
"""
import os, re, glob, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN = os.path.join(ROOT, "content", "en")

# ---------------- 核心页人工译文 ----------------
# path: (title, description, body)  body=None 表示正文保留英文原文
MANUAL = {
"zh-hans": {
  "_index.md": (
    "星露谷物语攻略站（非官方粉丝站）",
    "数据驱动的非官方星露谷物语攻略：NPC 礼物、作物、鱼类、社区中心收集包、常见问题与游戏更新。数据来自开源游戏数据。",
    "欢迎来到星露谷物语 Hub —— 一个非官方、全自动化的粉丝攻略站。每个页面都由开源机器可读游戏数据生成，表格始终准确，页面始终最新。"),
  "starter/_index.md": (
    "开局规划 – 星露谷物语",
    "一键随机生成第一年建议：种什么作物、先建什么建筑、优先解锁哪位村民。",
    None),
  "npc/_index.md": (
    "NPC 礼物攻略 – 星露谷物语",
    "每位星露谷村民的完整礼物攻略：最爱、喜欢、中立、讨厌与憎恨的礼物，以及生日和结婚信息。",
    "每个村民页面列出完整的礼物偏好表、生日和结婚信息。所有数据来自开源机器可读游戏数据。"),
  "crops/_index.md": (
    "作物攻略 – 星露谷物语",
    "星露谷物语每一种作物：季节、生长时间、种子来源、售价与利润。",
    "所有作物数据来自开源机器可读游戏数据。"),
  "fish/_index.md": (
    "鱼类攻略 – 星露谷物语",
    "星露谷物语每一种鱼的钓点：季节、时间、天气、地点、难度与售价。",
    "所有鱼类数据来自开源机器可读游戏数据。"),
  "bundles/_index.md": (
    "社区中心收集包 – 星露谷物语",
    "完整的社区中心收集包攻略：每个房间、收集包、所需物品与奖励。",
    "所有收集包数据来自开源机器可读游戏数据。"),
  "boss/_index.md": (
    "Boss 与精英敌人 – 星露谷物语",
    "星露谷物语 Boss 攻略：棱镜史莱姆、老虎史莱姆以及所有危险矿洞敌人，含生命值、伤害、掉落与武器推荐。",
    None),
  "weapons/_index.md": (
    "武器数据库 – 星露谷物语",
    "星露谷物语全部 62 种武器：剑、弹弓、锤与匕首，含伤害、暴击、获取途径与售价。",
    "所有武器数据来自开源机器可读游戏数据。"),
  "monsters/_index.md": (
    "怪物数据库 – 星露谷物语",
    "星露谷物语全部 46 种怪物：生命值、伤害、经验、出没地点与掉落物。",
    "开源游戏数据。"),
  "museum/_index.md": (
    "博物馆捐赠 – 星露谷物语",
    "完整的博物馆捐赠攻略：95 件文物与矿物，含位置与价值。",
    None),
  "tier/_index.md": (
    "强度排行 – 星露谷物语",
    "按每日利润排名的星露谷最佳作物：S/A/B/C 级排行，含图标与季节信息。",
    None),
  "tier/crop-profit/_index.md": (
    "最佳作物利润强度排行 – 星露谷物语",
    "按每日利润排名的星露谷最佳作物：S/A/B/C 级排行，含图标与季节信息。",
    None),
  "maps/_index.md": (
    "农场地图 – 星露谷物语",
    "全部 8 张星露谷农场地图，含预览图及各布局最适合的玩法。",
    None),
  "farm-types/_index.md": (
    "星露谷物语全部农场类型：如何选择最适合你的",
    "对比全部 8 种星露谷农场类型——标准、河岸、森林、山顶、荒野、四角、海滩与草地。每种农场地图的优缺点、最佳玩法与布局建议。",
    None),
  "calculator/_index.md": (
    "作物利润计算器 – 星露谷物语",
    "计算作物每日利润：种子成本、售价、生长天数、收获次数与额外成本。",
    None),
  "fish-checklist/_index.md": (
    "鱼类图鉴清单 – 星露谷物语",
    "可勾选的鱼类收集追踪器：按季节、天气、时间与地点分类，进度自动保存在浏览器中。",
    None),
  "museum-checklist/_index.md": (
    "博物馆清单 – 星露谷物语",
    "可勾选的博物馆捐赠追踪器：按文物与矿物分类，进度自动保存在浏览器中。",
    None),
  "gift/_index.md": (
    "礼物查询 – 星露谷物语",
    "为每位星露谷村民找到完美礼物。按村民名字或最爱物品搜索。",
    None),
  "farmlayou/_index.md": (
    "农场布局规划器 – 星露谷物语 Hub",
    "免费的交互式星露谷物语农场布局规划器。在 12×8 网格上规划你的农场，放置土壤、作物、建筑、树木、道路与水。自动保存在浏览器中。",
    None),
  "sprinkler-layout-guide/_index.md": (
    "星露谷物语洒水器布局指南与规划器：最佳方案与覆盖范围",
    "用免费规划工具规划完美的星露谷洒水器布局。了解基础、优质与铱星洒水器的覆盖范围、最佳 3×3 与 5×5 布局，以及每个洒水器可浇灌多少作物。",
    None),
  "faq/_index.md": (
    "星露谷物语常见问题 – 快速解答",
    "搜索最多的星露谷问题快速解答：最佳作物、传说之鱼、解锁条件等。",
    None),
  "updates/_index.md": (
    "星露谷物语更新与补丁新闻",
    "最新星露谷更新新闻、补丁说明与更新日志，自动从官方来源摘要。",
    "更新自动从官方渠道（官方星露谷博客与 Steam 新闻）收集并摘要，不复制原文。"),
  "all-guides/_index.md": (
    "全部攻略 – 星露谷物语 Hub",
    "本站全部星露谷物语攻略与工具完整列表。",
    None),
  "tools/_index.md": (
    "工具 – 星露谷物语",
    "全部 17 种工具，含升级成本与材料。",
    "工具数据来自开源游戏数据。"),
  "unlocks/_index.md": (
    "建筑与解锁 – 星露谷物语",
    "全部 24 种农场建筑，含成本、材料与用途。",
    "建筑数据来自开源游戏数据。"),
  "achievements/_index.md": (
    "成就 – 星露谷物语",
    "全部 49 个成就，含达成条件与奖励。",
    "成就数据来自开源游戏数据。"),
  "events/_index.md": (
    "心动事件 – 星露谷物语",
    "31 位村民的心动事件：每位村民有多少个事件以及何时解锁。",
    "心动事件数据来自开源游戏数据。事件随好感度心数提升而解锁。"),
  "festivals/_index.md": (
    "节日 – 星露谷物语日历",
    "全部 12 个星露谷节日，按季节与日期。",
    "节日日历由开源游戏数据生成。"),
  "orders/_index.md": (
    "特殊订单 – 星露谷物语",
    "全部 28 个特殊订单，含委托人、要求与奖励。",
    "特殊订单数据来自开源游戏数据。"),
  "pets/_index.md": (
    "宠物与农场动物 – 星露谷物语",
    "14 种农场动物与 5 种宠物，含购买价格与产出。",
    "动物数据来自开源游戏数据。"),
  "recipes/_index.md": (
    "烹饪食谱 – 星露谷物语",
    "全部 81 个烹饪食谱，含食材、能量、增益与售价。",
    "完整烹饪数据来自开源机器可读游戏数据。"),
  "money/_index.md": (
    "赚钱指南 – 星露谷物语",
    "最快的赚钱方式：高利润作物、工匠制品与珍贵矿物。",
    None),
  "feedback/_index.md": (
    "玩家反馈与社区 – 星露谷物语",
    "为星露谷提供反馈、报告 Bug 与加入社区的官方及社区渠道。",
    None),
  "high-priority/_index.md": (
    "高优先级攻略 – 星露谷物语 Hub",
    "搜索最多的星露谷攻略：强度排行、地图、数据表与工具。",
    None),
  "more-guides/_index.md": (
    "更多攻略 – 星露谷物语 Hub",
    "更多星露谷攻略：工具、建筑、成就、订单等。",
    None),
  "about.md": (
    "关于我们",
    "关于星露谷物语 Hub：一个非官方、全自动化的数据驱动粉丝攻略站。",
    None),
  "contact.md": (
    "联系我们",
    "联系星露谷物语 Hub：DMCA、隐私或广告咨询。",
    None),
  "privacy.md": (
    "隐私政策",
    "星露谷物语 Hub 的隐私政策：广告、Cookie、GDPR 与 CCPA 权利。",
    None),
  "terms.md": (
    "服务条款",
    "星露谷物语 Hub 的服务条款。",
    None),
  "dmca.md": (
    "DMCA 版权政策",
    "星露谷物语 Hub 的 DMCA 下架与反通知流程。",
    None),
},
"de": {
  "_index.md": (
    "Stardew Valley Hub – Inoffizielle Fan-Guides",
    "Datengesteuerte inoffizielle Stardew-Valley-Guides: NPC-Geschenke, Pflanzen, Fische, Gemeinschaftszentrum-Bündel, FAQ und Spiele-Updates. Powered by Open-Source-Spieldaten.",
    "Willkommen bei Stardew Valley Hub — einer inoffiziellen, vollautomatisierten Fan-Guide-Seite. Jede Seite wird aus offenen maschinenlesbaren Spieldaten generiert, sodass Tabellen immer korrekt und Seiten immer aktuell sind."),
  "starter/_index.md": (
    "Start-Planer – Stardew Valley",
    "Zufällige Empfehlung mit einem Klick: Was im ersten Jahr anbauen, was zuerst bauen, wen zuerst freischalten.",
    None),
  "npc/_index.md": (
    "NPC-Geschenk-Guides – Stardew Valley",
    "Komplette NPC-Geschenk-Guides für jeden Stardew-Valley-Dorfbewohner: geliebte, gemochte, neutrale, ungemochte und gehasste Geschenke, plus Geburtstage und Heiratsinfos.",
    "Jede Dorfbewohner-Seite listet die komplette Geschenk-Präferenztabelle, Geburtstag und Heiratsinformationen. Alle Daten stammen aus offenen maschinenlesbaren Spieldaten."),
  "crops/_index.md": (
    "Pflanzen-Guides – Stardew Valley",
    "Jede Stardew-Valley-Pflanze: Saison, Wachstumszeit, Samenquelle, Verkaufspreis und Gewinn.",
    "Alle Pflanzendaten stammen aus offenen maschinenlesbaren Spieldaten."),
  "fish/_index.md": (
    "Fisch-Guides – Stardew Valley",
    "Wo man jeden Fisch in Stardew Valley fängt: Saison, Zeit, Wetter, Ort, Schwierigkeit und Verkaufspreis.",
    "Alle Fischdaten stammen aus offenen maschinenlesbaren Spieldaten."),
  "bundles/_index.md": (
    "Gemeinschaftszentrum-Bündel – Stardew Valley",
    "Kompletter Leitfaden für die Gemeinschaftszentrum-Bündel: jeder Raum, jedes Bündel, benötigte Gegenstände und Belohnungen.",
    "Alle Bündeldaten stammen aus offenen maschinenlesbaren Spieldaten."),
  "boss/_index.md": (
    "Bosse & Elite-Gegner – Stardew Valley",
    "Stardew-Valley-Boss-Guide: Prismatischer Schleim, Tiger-Schleim und alle gefährlichen Minen-Gegner mit HP, Schaden, Drops und Waffenempfehlungen.",
    None),
  "weapons/_index.md": (
    "Waffen-Datenbank – Stardew Valley",
    "Alle 62 Waffen in Stardew Valley: Schwerter, Schleudern, Hämmer und Dolche mit Schaden, Krit-Chance, Fundort und Verkaufspreis.",
    "Alle Waffendaten stammen aus offenen maschinenlesbaren Spieldaten."),
  "monsters/_index.md": (
    "Monster-Datenbank – Stardew Valley",
    "Alle 46 Monster in Stardew Valley: HP, Schaden, XP, Fundorte und Drops.",
    "Open-Source-Spieldaten."),
  "museum/_index.md": (
    "Museumsspenden – Stardew Valley",
    "Kompletter Museums-Spendenleitfaden: 95 Artefakte und Mineralien mit Fundorten und Werten.",
    None),
  "tier/_index.md": (
    "Tier-Liste – Stardew Valley",
    "Beste Pflanzen nach Gewinn pro Tag in Stardew Valley: S/A/B/C-Tier-Liste mit Symbolen und Saisoninfos.",
    None),
  "tier/crop-profit/_index.md": (
    "Beste Pflanzen nach Gewinn – Tier-Liste für Stardew Valley",
    "Beste Pflanzen nach Gewinn pro Tag in Stardew Valley: S/A/B/C-Tier-Liste mit Symbolen und Saisoninfos.",
    None),
  "maps/_index.md": (
    "Farm-Karten – Stardew Valley",
    "Alle 8 Stardew-Valley-Farmkarten mit Vorschau-Bildern und wofür jedes Layout am besten ist.",
    None),
  "farm-types/_index.md": (
    "Alle Farm-Typen in Stardew Valley: So wählen Sie den besten",
    "Vergleichen Sie alle 8 Stardew-Valley-Farm-Typen — Standard, Flussland, Wald, Hügelkuppe, Wildnis, Vier Ecken, Strand und Wiesenland. Vor- und Nachteile, bester Spielstil und Layout-Tipps für jede Farmkarte.",
    None),
  "calculator/_index.md": (
    "Pflanzen-Gewinnrechner – Stardew Valley",
    "Berechnen Sie den Gewinn pro Tag: Saatgutkosten, Verkaufspreis, Wachstumstage, Erntemengen und Zusatzkosten.",
    None),
  "fish-checklist/_index.md": (
    "Fisch-Checkliste – Stardew Valley",
    "Abhakbarer Fisch-Sammel-Tracker: klassifiziert nach Saison, Wetter, Zeit und Ort; Fortschritt wird automatisch im Browser gespeichert.",
    None),
  "museum-checklist/_index.md": (
    "Museum-Checkliste – Stardew Valley",
    "Abhakbarer Museums-Spenden-Tracker: Artefakte und Mineralien; Fortschritt wird automatisch im Browser gespeichert.",
    None),
  "gift/_index.md": (
    "Geschenk-Suche – Stardew Valley",
    "Finden Sie das perfekte Geschenk für jeden Dorfbewohner. Suche nach Name oder geliebtem Gegenstand.",
    None),
  "farmlayou/_index.md": (
    "Farm-Layout-Planer – Stardew Valley Hub",
    "Kostenloser interaktiver Stardew-Valley-Farm-Layout-Planer. Skizzieren Sie Ihr Farmdesign auf einem 12×8-Raster, platzieren Sie Boden, Pflanzen, Gebäude, Bäume, Wege und Wasser. Automatisch im Browser gespeichert.",
    None),
  "sprinkler-layout-guide/_index.md": (
    "Stardew-Valley-Sprinkler-Layout-Guide & Planer: Beste Setups & Abdeckung",
    "Planen Sie das perfekte Sprinkler-Layout mit unserem kostenlosen Planer. Lernen Sie die Abdeckungsbereiche von Basis-, Qualitäts- und Iridium-Sprinklern, die besten 3×3- und 5×5-Layouts und wie viele Pflanzen jeder Sprinkler bewässert.",
    None),
  "faq/_index.md": (
    "Stardew-Valley-FAQ – Schnelle Antworten",
    "Schnelle Antworten auf die meistgesuchten Stardew-Valley-Fragen: beste Pflanzen, legendäre Fische, Freischaltungen und mehr.",
    None),
  "updates/_index.md": (
    "Stardew-Valley-Updates & Patch-News",
    "Aktuelle Stardew-Valley-Update-News, Patch-Notizen und Changelogs, automatisch aus offiziellen Quellen zusammengefasst.",
    "Updates werden automatisch aus offiziellen Kanälen (dem offiziellen Stardew-Valley-Blog und Steam-News) gesammelt und ohne Kopieren des Originaltexts zusammengefasst."),
  "all-guides/_index.md": (
    "Alle Guides – Stardew Valley Hub",
    "Vollständige Liste aller Stardew-Valley-Guides und -Tools auf dieser Seite.",
    None),
  "tools/_index.md": (
    "Werkzeuge – Stardew Valley",
    "Alle 17 Werkzeuge mit Upgrade-Kosten und Materialien.",
    "Werkzeugdaten aus Open-Source-Spieldaten."),
  "unlocks/_index.md": (
    "Gebäude & Freischaltungen – Stardew Valley",
    "Alle 24 Farmgebäude mit Kosten, Materialien und Zweck.",
    "Gebäudedaten aus Open-Source-Spieldaten."),
  "achievements/_index.md": (
    "Erfolge – Stardew Valley",
    "Alle 49 Erfolge mit Anforderungen und Belohnungen.",
    "Erfolgsdaten aus Open-Source-Spieldaten."),
  "events/_index.md": (
    "Herzereignisse – Stardew Valley",
    "Herzereignisse für 31 Dorfbewohner: wie viele Ereignisse jeder hat und wann sie freigeschaltet werden.",
    "Herzereignisdaten aus Open-Source-Spieldaten. Ereignisse werden freigeschaltet, wenn die Freundschaftsherzen steigen."),
  "festivals/_index.md": (
    "Feste – Stardew-Valley-Kalender",
    "Alle 12 Stardew-Valley-Feste nach Saison und Monatstag.",
    "Der Festkalender wird aus Open-Source-Spieldaten generiert."),
  "orders/_index.md": (
    "Sonderaufträge – Stardew Valley",
    "Alle 28 Sonderaufträge mit Auftraggeber, Anforderungen und Belohnungen.",
    "Sonderauftragsdaten aus Open-Source-Spieldaten."),
  "pets/_index.md": (
    "Haustiere & Nutztiere – Stardew Valley",
    "14 Nutztiere und 5 Haustiere mit Kaufpreis und Produkten.",
    "Tierdaten aus Open-Source-Spieldaten."),
  "recipes/_index.md": (
    "Kochrezepte – Stardew Valley",
    "Alle 81 Kochrezepte mit Zutaten, Energie, Buffs und Verkaufspreis.",
    "Vollständige Kochdaten aus offenen maschinenlesbaren Spieldaten."),
  "money/_index.md": (
    "Geldverdienen-Guide – Stardew Valley",
    "Schnellste Wege, Geld zu verdienen: profitabelste Pflanzen, Handwerkswaren und wertvolle Mineralien.",
    None),
  "feedback/_index.md": (
    "Spieler-Feedback & Community – Stardew Valley",
    "Offizielle und Community-Kanäle für Stardew-Valley-Feedback, Bug-Reports und Community-Beitritt.",
    None),
  "high-priority/_index.md": (
    "Hochprioritäre Guides – Stardew Valley Hub",
    "Die meistgesuchten Stardew-Valley-Guides: Tier-Listen, Karten, Datentabellen und Tools.",
    None),
  "more-guides/_index.md": (
    "Weitere Guides – Stardew Valley Hub",
    "Zusätzliche Stardew-Valley-Guides: Werkzeuge, Gebäude, Erfolge, Aufträge usw.",
    None),
  "about.md": (
    "Über uns",
    "Über Stardew Valley Hub: eine inoffizielle, vollautomatisierte datengesteuerte Fan-Guide-Seite.",
    None),
  "contact.md": (
    "Kontakt",
    "Kontaktieren Sie Stardew Valley Hub für DMCA-, Datenschutz- oder Werbeanfragen.",
    None),
  "privacy.md": (
    "Datenschutzerklärung",
    "Datenschutzrichtlinie für Stardew Valley Hub: Werbung, Cookies, GDPR- und CCPA-Rechte.",
    None),
  "terms.md": (
    "Nutzungsbedingungen",
    "Nutzungsbedingungen für Stardew Valley Hub.",
    None),
  "dmca.md": (
    "DMCA-Urheberrechtsrichtlinie",
    "DMCA-Takedown- und Gegendarstellungsverfahren für Stardew Valley Hub.",
    None),
},
}

# ---------------- 详情页标题模式翻译（专名保留英文） ----------------
PATTERNS = {
"zh-hans": [
  (r"^(.+?) Loved Gifts in Stardew Valley$", r"星露谷物语中 \1 的最爱礼物"),
  (r"^(.+?) Growing Guide – Stardew Valley$", r"\1 种植指南 – 星露谷物语"),
  (r"^Where to Catch (.+?) in Stardew Valley$", r"星露谷物语中在哪里钓到 \1"),
  (r"^How to Beat the (.+?) – Stardew Valley$", r"如何击败 \1 – 星露谷物语"),
  (r"^(.+?) – Stardew Valley Weapon$", r"\1 – 星露谷物语武器"),
  (r"^(.+?) – Stardew Valley Monster$", r"\1 – 星露谷物语怪物"),
  (r"^(.+?) – Museum Donation Guide$", r"\1 – 博物馆捐赠指南"),
  (r"^(.+?) – Stardew Valley Recipe$", r"\1 – 星露谷物语食谱"),
  (r"^(.+?) – Stardew Valley Achievement$", r"\1 – 星露谷物语成就"),
  (r"^(.+?) Heart Events – Stardew Valley$", r"\1 心动事件 – 星露谷物语"),
  (r"^(.+?) – Special Order Guide$", r"\1 – 特殊订单指南"),
  (r"^(.+?) – Stardew Valley Animal Guide$", r"\1 – 星露谷物语动物指南"),
  (r"^(.+?) – Stardew Valley Building Guide$", r"\1 – 星露谷物语建筑指南"),
  (r"^(.+?) – Stardew Valley Tool Guide$", r"\1 – 星露谷物语工具指南"),
  (r"^(.+?) Bundle – Community Center Bundle Guide$", r"\1 收集包 – 社区中心收集包指南"),
  (r"^(.+?) – Festival Date & Guide$", r"\1 – 节日日期与指南"),
  (r"^Best Crops Profit Tier List – Stardew Valley$", r"最佳作物利润强度排行 – 星露谷物语"),
  (r"^Crop: (.+?) – Stardew Valley$", r"作物：\1 – 星露谷物语"),
  (r"^How to Grow (.+?) in Stardew Valley$", r"星露谷物语中如何种植 \1"),
],
"de": [
  (r"^(.+?) Loved Gifts in Stardew Valley$", r"\1-Lieblingsgeschenke in Stardew Valley"),
  (r"^(.+?) Growing Guide – Stardew Valley$", r"\1-Anbau-Leitfaden – Stardew Valley"),
  (r"^Where to Catch (.+?) in Stardew Valley$", r"Wo man \1 in Stardew Valley fängt"),
  (r"^How to Beat the (.+?) – Stardew Valley$", r"So besiegt man \1 – Stardew Valley"),
  (r"^(.+?) – Stardew Valley Weapon$", r"\1 – Stardew-Valley-Waffe"),
  (r"^(.+?) – Stardew Valley Monster$", r"\1 – Stardew-Valley-Monster"),
  (r"^(.+?) – Museum Donation Guide$", r"\1 – Museums-Spendenleitfaden"),
  (r"^(.+?) – Stardew Valley Recipe$", r"\1 – Stardew-Valley-Rezept"),
  (r"^(.+?) – Stardew Valley Achievement$", r"\1 – Stardew-Valley-Erfolg"),
  (r"^(.+?) Heart Events – Stardew Valley$", r"\1-Herzereignisse – Stardew Valley"),
  (r"^(.+?) – Special Order Guide$", r"\1 – Sonderauftrag-Leitfaden"),
  (r"^(.+?) – Stardew Valley Animal Guide$", r"\1 – Stardew-Valley-Tierleitfaden"),
  (r"^(.+?) – Stardew Valley Building Guide$", r"\1 – Stardew-Valley-Gebäudeleitfaden"),
  (r"^(.+?) – Stardew Valley Tool Guide$", r"\1 – Stardew-Valley-Werkzeugleitfaden"),
  (r"^(.+?) Bundle – Community Center Bundle Guide$", r"\1-Bündel – Leitfaden für Gemeinschaftszentrum-Bündel"),
  (r"^(.+?) – Festival Date & Guide$", r"\1 – Festivaltermin & Leitfaden"),
  (r"^Best Crops Profit Tier List – Stardew Valley$", r"Beste Pflanzen nach Gewinn – Tier-Liste für Stardew Valley"),
  (r"^Crop: (.+?) – Stardew Valley$", r"Pflanze: \1 – Stardew Valley"),
  (r"^How to Grow (.+?) in Stardew Valley$", r"So baut man \1 in Stardew Valley an"),
],
}

def translate_title(lang, title):
    for pat, repl in PATTERNS[lang]:
        if re.match(pat, title):
            return re.sub(pat, repl, title)
    return None  # 未匹配 → 保留英文

def process():
    total = 0
    for lang in ("zh-hans", "de"):
        dst = os.path.join(ROOT, "content", lang)
        manual = MANUAL[lang]
        n_new, n_manual, n_pattern = 0, 0, 0
        for f in sorted(glob.glob(os.path.join(EN, "**", "*.md"), recursive=True)):
            rel = os.path.relpath(f, EN)
            # 鱼类攻略详情页：gen_guides.py 已生成中文正文，不覆盖
            if rel.startswith("all-guides/fish/"):
                continue
            s = open(f, encoding="utf-8").read()
            m = re.match(r"^---\n(.*?)\n---\n(.*)$", s, re.S)
            if not m:
                continue
            fm_raw, body = m.group(1), m.group(2)
            # frontmatter 行解析（保留顺序，仅替换 title/description）
            lines = fm_raw.split("\n")
            new_lines = []
            title_done = desc_done = False
            new_title = new_desc = None
            if rel in manual:
                t, d, b = manual[rel]
                new_title, new_desc = t, d
                if b is not None:
                    body = b + "\n"
                n_manual += 1
            else:
                # 详情页：模式翻译 title，description/正文保留英文
                for ln in lines:
                    mt = re.match(r'^title:\s*"(.*)"$', ln)
                    if mt:
                        tt = translate_title(lang, mt.group(1))
                        if tt:
                            new_title = tt
                            n_pattern += 1
                        break
            for ln in lines:
                mt = re.match(r'^title:\s*"(.*)"$', ln)
                if mt and new_title is not None and not title_done:
                    new_lines.append(f'title: "{new_title}"')
                    title_done = True
                    continue
                md_ = re.match(r'^description:\s*"(.*)"$', ln)
                if md_ and new_desc is not None and not desc_done:
                    new_lines.append(f'description: "{new_desc}"')
                    desc_done = True
                    continue
                new_lines.append(ln)
            out = "---\n" + "\n".join(new_lines) + "\n---\n" + body
            out_path = os.path.join(dst, rel)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            # 仅在内容与英文不同或有译文时写（避免无意义复制；翻译语言目录本来就需要全量文件）
            with open(out_path, "w", encoding="utf-8") as fh:
                fh.write(out)
            n_new += 1
        print(f"[{lang}] 生成 {n_new} 页（人工译文 {n_manual}，模式翻译标题 {n_pattern}）")
        total += n_new
    print(f"总计 {total} 页")

if __name__ == "__main__":
    process()
