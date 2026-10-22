#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 data/achievements.json 追加 zh/de 字段（name/description/reward）。"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'data', 'achievements.json')

# 成就中文名（星露谷社区/官方常用译名）
ZH_NAME = {
    "Greenhorn": "新手", "Cowpoke": "牛仔", "Homesteader": "自耕农", "Millionaire": "百万富翁",
    "Legend": "传奇", "A Complete Collection": "完整收藏", "A New Friend": "新朋友",
    "Best Friends": "挚友", "The Beloved Farmer": "受人爱戴的农夫", "Cliques": "小圈子",
    "Networking": "人脉广阔", "Popular": "万人迷", "Cook": "厨师", "Sous Chef": "副厨师长",
    "Gourmet Chef": "美食大厨", "Moving Up": "搬新家", "Living Large": "豪宅",
    "D.I.Y.": "手工达人", "Artisan": "工匠", "Craft Master": "工匠大师", "Fisherman": "渔夫",
    "Ol' Mariner": "老水手", "Master Angler": "垂钓大师", "Mother Catch": "捕鱼高手",
    "Treasure Trove": "宝藏收藏家", "Gofer": "跑腿专员", "A Big Help": "大忙人",
    "Polyculture": "多样化种植", "Monoculture": "单一化种植", "Full Shipment": "全部发货",
    "Prairie King": "草原之王", "The Bottom": "地底深处", "Local Legend": "本地传奇",
    "Joja Co. Member Of The Year": "乔家年度员工", "Mystery Of The Stardrops": "星露谷之谜",
    "Full House": "人丁兴旺", "Singular Talent": "天赋异禀", "Master Of The Five Ways": "全能大师",
    "Protector Of The Valley": "山谷守护者", "Fector's Challenge": "菲克托的挑战",
    "A Distant Shore": "遥远彼岸", "Well-Read": "博览群书", "Two Thumbs Up": "好评",
    "Blue Ribbon": "蓝丝带", "An Unforgettable Soup": "难忘的汤", "Good Neighbors": "好邻居",
    "Danger In The Deep": "深海危机", "Infinite Power": "无限力量", "Perfection": "完美",
}
ZH_DESC = {
    "Greenhorn": "赚到 15,000g。", "Cowpoke": "赚到 50,000g。", "Homesteader": "赚到 250,000g。",
    "Millionaire": "赚到 1,000,000g。", "Legend": "赚到 10,000,000g。",
    "A Complete Collection": "完成博物馆收藏。", "A New Friend": "与某人达到 5 心好友等级。",
    "Best Friends": "与某人达到 10 心好友等级。", "The Beloved Farmer": "与 8 人达到 10 心好友等级。",
    "Cliques": "与 4 人达到 5 心好友等级。", "Networking": "与 10 人达到 5 心好友等级。",
    "Popular": "与 20 人达到 5 心好友等级。", "Cook": "烹饪 10 种不同食谱。",
    "Sous Chef": "烹饪 25 种不同食谱。", "Gourmet Chef": "烹饪全部食谱。",
    "Moving Up": "升级你的房屋。", "Living Large": "将房屋升级到最大规模。",
    "D.I.Y.": "制作 15 种不同物品。", "Artisan": "制作 30 种不同物品。",
    "Craft Master": "制作全部物品。", "Fisherman": "钓起 10 种不同的鱼。",
    "Ol' Mariner": "钓起 24 种不同的鱼。", "Master Angler": "钓起每一种鱼。",
    "Mother Catch": "钓起 100 条鱼。", "Treasure Trove": "向博物馆捐赠 40 种不同物品。",
    "Gofer": "完成 10 个“求助”任务。", "A Big Help": "完成 40 个“求助”任务。",
    "Polyculture": "出货 15 种作物各 15 个。", "Monoculture": "出货 300 个同一种作物。",
    "Full Shipment": "出货每一种物品。", "Prairie King": "通关“草原王者大冒险”。",
    "The Bottom": "到达矿洞最底层。", "Local Legend": "修复鹈鹕镇社区中心。",
    "Joja Co. Member Of The Year": "购买全部乔家社区发展项目。",
    "Mystery Of The Stardrops": "找到每一颗星之果实。", "Full House": "结婚并育有两个孩子。",
    "Singular Talent": "在任意技能达到 10 级。", "Master Of The Five Ways": "所有技能都达到 10 级。",
    "Protector Of The Valley": "完成冒险者公会的全部怪物猎人目标。",
    "Fector's Challenge": "无死亡通关“草原王者大冒险”。",
    "A Distant Shore": "抵达姜岛。", "Well-Read": "阅读每一本书。",
    "Two Thumbs Up": "看一场电影。", "Blue Ribbon": "在星露谷展销会中获得第一名。",
    "An Unforgettable Soup": "让州长赞不绝口。", "Good Neighbors": "帮助你的森林邻居组建家庭。",
    "Danger In The Deep": "到达“危险”矿洞的底部。", "Infinite Power": "获得最强大的武器。",
    "Perfection": "到达山顶。",
}
ZH_REWARD = {
    "Good Ol' Cap": "旧棒球帽", "Lucky Bow": "幸运蝴蝶结", "Cool Cap": "酷帽",
    "Bowler Hat": "圆顶礼帽", "Sombrero": "宽边帽", "Cowboy Hat": "牛仔帽",
    "Butterfly Bow": "蝴蝶结", "Mouse Ears": "老鼠耳朵", "Cat Ears": "猫咪耳朵",
    "Tiara": "头冠", "Santa Hat": "圣诞帽", "Earmuffs": "耳罩", "Delicate Bow": "精致蝴蝶结",
    "Plum Chapeau": "李子帽", "Archer's Cap": "射手帽", "Chef Hat": "厨师帽",
    "Tropiclip": "热带发夹", "Hunter's Cap": "猎人帽", "Daisy": "雏菊",
    "Trucker Hat": "卡车司机帽", "Gnome's Cap": "地精帽", "Sou'wester": "渔夫帽",
    "Official Cap": "制服帽", "Eye Patch": "眼罩", "Watermelon Band": "西瓜发带",
    "Blue Bonnet": "蓝色软帽", "Polka Bow": "波点蝴蝶结", "Chicken Mask": "鸡面具",
    "Cowpoke Hat": "牛仔帽", "Cowgal Hat": "女牛仔帽", "Goblin Mask": "哥布林面具",
    "Prairie King Arcade System": "草原之王街机", "Skull Key": "骷髅钥匙",
    "Stardew Hero Trophy": "星露谷英雄奖杯", "Soda Machine": "汽水机",
    "Paper Hat": "纸帽", "Pageboy Cap": "蘑菇头帽", "Jester Hat": "小丑帽",
    "Blue Ribbon": "蓝丝带", "Governor's Hat": "州长帽", "White Bow": "白色蝴蝶结",
    "Space Helmet": "太空头盔", "Infinity Crown": "无限皇冠", "Junimo Hat": "祝尼魔帽",
    "None": "无",
}
DE_NAME = {
    "Greenhorn": "Grünschnabel", "Cowpoke": "Cowboy", "Homesteader": "Siedler",
    "Millionaire": "Millionär", "Legend": "Legende", "A Complete Collection": "Komplette Sammlung",
    "A New Friend": "Ein neuer Freund", "Best Friends": "Beste Freunde",
    "The Beloved Farmer": "Der geliebte Farmer", "Cliques": "Cliquen",
    "Networking": "Vernetzt", "Popular": "Beliebt", "Cook": "Koch",
    "Sous Chef": "Sous-Chef", "Gourmet Chef": "Gourmet-Koch", "Moving Up": "Umzug",
    "Living Large": "Großes Leben", "D.I.Y.": "Selbstgemacht", "Artisan": "Handwerker",
    "Craft Master": "Handwerksmeister", "Fisherman": "Angler", "Ol' Mariner": "Alter Seemann",
    "Master Angler": "Angelmeister", "Mother Catch": "Fischfang-Profi",
    "Treasure Trove": "Schatzgrube", "Gofer": "Laufbursche", "A Big Help": "Große Hilfe",
    "Polyculture": "Vielfalt", "Monoculture": "Monokultur", "Full Shipment": "Kompletter Versand",
    "Prairie King": "Prärie-König", "The Bottom": "Der Grund", "Local Legend": "Lokale Legende",
    "Joja Co. Member Of The Year": "Joja-Mitarbeiter des Jahres",
    "Mystery Of The Stardrops": "Geheimnis der Sterntropfen", "Full House": "Komplettes Haus",
    "Singular Talent": "Einziges Talent", "Master Of The Five Ways": "Meister der fünf Wege",
    "Protector Of The Valley": "Beschützer des Tals", "Fector's Challenge": "Fectors Herausforderung",
    "A Distant Shore": "Ein fernes Ufer", "Well-Read": "Belesen", "Two Thumbs Up": "Daumen hoch",
    "Blue Ribbon": "Blaues Band", "An Unforgettable Soup": "Eine unvergessliche Suppe",
    "Good Neighbors": "Gute Nachbarn", "Danger In The Deep": "Gefahr in der Tiefe",
    "Infinite Power": "Unendliche Macht", "Perfection": "Perfektion",
}
DE_DESC = {
    "Greenhorn": "Verdiene 15.000g.", "Cowpoke": "Verdiene 50.000g.",
    "Homesteader": "Verdiene 250.000g.", "Millionaire": "Verdiene 1.000.000g.",
    "Legend": "Verdiene 10.000.000g.", "A Complete Collection": "Schließe die Museumssammlung ab.",
    "A New Friend": "Erreiche 5 Herz Freundschaft mit jemandem.",
    "Best Friends": "Erreiche 10 Herz Freundschaft mit jemandem.",
    "The Beloved Farmer": "Erreiche 10 Herz Freundschaft mit 8 Personen.",
    "Cliques": "Erreiche 5 Herz Freundschaft mit 4 Personen.",
    "Networking": "Erreiche 5 Herz Freundschaft mit 10 Personen.",
    "Popular": "Erreiche 5 Herz Freundschaft mit 20 Personen.",
    "Cook": "Koche 10 verschiedene Rezepte.", "Sous Chef": "Koche 25 verschiedene Rezepte.",
    "Gourmet Chef": "Koche jedes Rezept.", "Moving Up": "Baue dein Haus aus.",
    "Living Large": "Baue dein Haus zur maximalen Größe aus.",
    "D.I.Y.": "Stelle 15 verschiedene Gegenstände her.",
    "Artisan": "Stelle 30 verschiedene Gegenstände her.",
    "Craft Master": "Stelle jeden Gegenstand her.", "Fisherman": "Fange 10 verschiedene Fische.",
    "Ol' Mariner": "Fange 24 verschiedene Fische.", "Master Angler": "Fange jeden Fisch.",
    "Mother Catch": "Fange 100 Fische.", "Treasure Trove": "Spende 40 verschiedene Gegenstände ans Museum.",
    "Gofer": "Schließe 10 'Hilfe gesucht'-Aufträge ab.",
    "A Big Help": "Schließe 40 'Hilfe gesucht'-Aufträge ab.",
    "Polyculture": "Verschiffe 15 von jeder Feldfrucht.",
    "Monoculture": "Verschiffe 300 von einer Feldfrucht.",
    "Full Shipment": "Verschiffe jeden Gegenstand.", "Prairie King": "Schlage 'Reise des Prärie-Königs'.",
    "The Bottom": "Erreiche die tiefste Ebene der Minen.",
    "Local Legend": "Stelle das Gemeinschaftszentrum von Pelikanstadt wieder her.",
    "Joja Co. Member Of The Year": "Kaufe alle Joja-Gemeinschaftsprojekte.",
    "Mystery Of The Stardrops": "Finde jeden Sterntropfen.", "Full House": "Heirate und habe zwei Kinder.",
    "Singular Talent": "Erreiche Stufe 10 in einer Fähigkeit.",
    "Master Of The Five Ways": "Erreiche Stufe 10 in jeder Fähigkeit.",
    "Protector Of The Valley": "Schließe alle Monsterjäger-Ziele der Abenteuergilde ab.",
    "Fector's Challenge": "Schlage 'Reise des Prärie-Königs' ohne zu sterben.",
    "A Distant Shore": "Erreiche Ginger Island.", "Well-Read": "Lies jedes Buch.",
    "Two Thumbs Up": "Sieh dir einen Film an.",
    "Blue Ribbon": "Gewinne den 1. Platz im Stardew Valley Wettbewerb.",
    "An Unforgettable Soup": "Begeistere den Gouverneur.",
    "Good Neighbors": "Hilf deinen Waldnachbarn, ihre Familie zu vergrößern.",
    "Danger In The Deep": "Erreiche den Grund der 'gefährlichen' Minen.",
    "Infinite Power": "Erhalte die mächtigste Waffe.", "Perfection": "Erreiche den Gipfel.",
}
DE_REWARD = {
    "Good Ol' Cap": "Alter Hut", "Lucky Bow": "Glücksschleife", "Cool Cap": "Coole Mütze",
    "Bowler Hat": "Melone", "Sombrero": "Sombrero", "Cowboy Hat": "Cowboyhut",
    "Butterfly Bow": "Schmetterlingsschleife", "Mouse Ears": "Mauseohren",
    "Cat Ears": "Katzenohren", "Tiara": "Tiara", "Santa Hat": "Weihnachtsmannmütze",
    "Earmuffs": "Ohrenschützer", "Delicate Bow": "Feine Schleife", "Plum Chapeau": "Pflaumenhut",
    "Archer's Cap": "Bogenschützenmütze", "Chef Hat": "Kochmütze", "Tropiclip": "Tropenclip",
    "Hunter's Cap": "Jägermütze", "Daisy": "Gänseblümchen", "Trucker Hat": "Trucker-Mütze",
    "Gnome's Cap": "Gnomenmütze", "Sou'wester": "Südwester", "Official Cap": "Offizielle Mütze",
    "Eye Patch": "Augenklappe", "Watermelon Band": "Wassermelonenband",
    "Blue Bonnet": "Blaue Haube", "Polka Bow": "Punktschleife", "Chicken Mask": "Hühnermaske",
    "Cowpoke Hat": "Cowboyhut", "Cowgal Hat": "Cowgirlhut", "Goblin Mask": "Goblinmaske",
    "Prairie King Arcade System": "Prärie-König Arcade", "Skull Key": "Totenkopfschlüssel",
    "Stardew Hero Trophy": "Stardew-Heldentrophäe", "Soda Machine": "Sodamaschine",
    "Paper Hat": "Papierhut", "Pageboy Cap": "Pagenmütze", "Jester Hat": "Narrenhut",
    "Blue Ribbon": "Blaues Band", "Governor's Hat": "Gouverneurshut", "White Bow": "Weiße Schleife",
    "Space Helmet": "Raumhelm", "Infinity Crown": "Krone der Unendlichkeit",
    "Junimo Hat": "Junimo-Hut", "None": "Keine",
}

def main():
    with open(PATH, encoding='utf-8') as f:
        data = json.load(f)
    added = 0
    for item in data:
        name = item['name']
        if name in ZH_NAME:
            item['name_zh'] = ZH_NAME[name]; item['name_de'] = DE_NAME[name]
        if name in ZH_DESC:
            item['description_zh'] = ZH_DESC[name]; item['description_de'] = DE_DESC[name]
        if item.get('reward') and item['reward'] in ZH_REWARD:
            item['reward_zh'] = ZH_REWARD[item['reward']]
            item['reward_de'] = DE_REWARD[item['reward']]
        added += 1
    with open(PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"OK: {len(data)} 条成就已补全 zh/de 字段")

if __name__ == '__main__':
    main()
