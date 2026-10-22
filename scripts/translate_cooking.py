#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 data/cooking.json 追加 zh/de 字段（name/description + ingredients 每项 name_zh/name_de）。"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'data', 'cooking.json')

# 食材中文/德文
ING = {
    "Any Egg": ("任意蛋", "Jedes Ei"), "Any Milk": ("任意牛奶", "Jede Milch"),
    "Leek": ("韭葱", "Lauch"), "Dandelion": ("蒲公英", "Löwenzahn"), "Vinegar": ("醋", "Essig"),
    "Cauliflower": ("菜花", "Blumenkohl"), "Cheese": ("奶酪", "Käse"),
    "Sunfish": ("太阳鱼", "Sonnenbarsch"), "Bream": ("鳊鱼", "Brasse"),
    "Wheat Flour": ("小麦粉", "Weizenmehl"), "Parsnip": ("防风草", "Pastinake"),
    "Tomato": ("西红柿", "Tomate"), "Beet": ("甜菜", "Rote Bete"),
    "Hashbrowns": ("薯饼", "Rösti"), "Pancakes": ("薄煎饼", "Pfannkuchen"),
    "Squid": ("鱿鱼", "Tintenfisch"), "Oil": ("油", "Öl"),
    "Periwinkle": ("玉黍螺", "Strandschnecke"), "Void Mayonnaise": ("虚空蛋黄酱", "Leere-Mayonnaise"),
    "Sea Cucumber": ("海参", "Seegurke"), "Tortilla": ("玉米饼", "Tortilla"),
    "Blue Jazz": ("蓝爵士", "Blauer Jazz"), "Common Mushroom": ("普通蘑菇", "Gewöhnlicher Pilz"),
    "Morel": ("羊肚菌", "Morchel"), "Green Bean": ("绿豆", "Grüne Bohne"),
    "Yam": ("山药", "Yams"), "Sugar": ("糖", "Zucker"), "Carp": ("鲤鱼", "Karpfen"),
    "Potato": ("土豆", "Kartoffel"), "Salmon": ("三文鱼", "Lachs"),
    "Amaranth": ("苋菜", "Amaranth"), "Kale": ("甘蓝菜", "Grünkohl"),
    "Tuna": ("金枪鱼", "Thunfisch"), "Red Cabbage": ("红叶卷心菜", "Rotkohl"),
    "Mayonnaise": ("蛋黄酱", "Mayonnaise"), "Largemouth Bass": ("大口鲈鱼", "Forellenbarsch"),
    "Hot Pepper": ("辣椒", "Scharfe Paprika"), "Coconut": ("椰子", "Kokosnuss"),
    "Shrimp": ("虾", "Garnele"), "Rainbow Trout": ("虹鳟鱼", "Regenbogenforelle"),
    "Green Algae": ("绿藻", "Grünalge"), "Melon": ("甜瓜", "Melone"),
    "Rhubarb": ("大黄", "Rhabarber"), "Eel": ("鳗鱼", "Aal"),
    "Seaweed": ("海草", "Seetang"), "Rice": ("大米", "Reis"), "Corn": ("玉米", "Mais"),
    "Radish": ("萝卜", "Rettich"), "Eggplant": ("茄子", "Aubergine"),
    "Blueberry": ("蓝莓", "Blaubeere"), "Pumpkin": ("南瓜", "Kürbis"),
    "Bok Choy": ("小白菜", "Pak Choi"), "Cranberries": ("蔓越莓", "Preiselbeeren"),
    "Artichoke": ("洋蓟", "Artischocke"), "Hazelnut": ("榛子", "Haselnuss"),
    "Cave Carrot": ("山洞萝卜", "Höhlenmöhre"), "Sardine": ("沙丁鱼", "Sardine"),
    "Winter Root": ("冬根", "Winterwurzel"), "Coffee": ("咖啡", "Kaffee"),
    "Flounder": ("比目鱼", "Flunder"), "Midnight Carp": ("午夜鲤鱼", "Mitternachtskarpfen"),
    "Squid Ink": ("鱿鱼墨汁", "Tintenfischtinte"), "White Algae": ("白藻", "Weiße Alge"),
    "Wild Plum": ("野李子", "Wildpflaume"), "Apricot": ("杏子", "Aprikose"),
    "Blackberry": ("黑莓", "Brombeere"), "Apple": ("苹果", "Apfel"),
    "Fiddlehead Fern": ("蕨菜", "Farnspitze"), "Garlic": ("大蒜", "Knoblauch"),
    "Poppy": ("罂粟", "Mohn"), "Clam": ("蛤蜊", "Muschel"), "Crayfish": ("小龙虾", "Flusskrebs"),
    "Mussel": ("贻贝", "Miesmuschel"), "Snail": ("蜗牛", "Schnecke"),
    "Lobster": ("龙虾", "Hummer"), "Maple Syrup": ("枫糖浆", "Ahornsirup"),
    "Crab": ("螃蟹", "Krabbe"), "Wild Horseradish": ("野山葵", "Wilder Meerrettich"),
    "Ginger": ("生姜", "Ingwer"), "Banana": ("香蕉", "Banane"), "Mango": ("芒果", "Mango"),
    "Taro Root": ("芋头", "Taro"), "Pineapple": ("菠萝", "Ananas"),
    "Moss": ("苔藓", "Moos"), "Bread": ("面包", "Brot"),
}

# 食谱中文名（星露谷官方物品译名）
REC_ZH = {
    "Fried Egg": "煎蛋", "Omelet": "煎蛋卷", "Salad": "沙拉", "Cheese Cauliflower": "奶酪菜花",
    "Baked Fish": "烤鱼", "Parsnip Soup": "防风草汤", "Vegetable Medley": "蔬菜杂烩",
    "Complete Breakfast": "全套早餐", "Fried Calamari": "炸鱿鱼", "Strange Bun": "奇怪的小面包",
    "Lucky Lunch": "幸运午餐", "Fried Mushroom": "炒蘑菇", "Pizza": "披萨",
    "Bean Hotpot": "豆类火锅", "Glazed Yams": "蜜汁山药", "Carp Surprise": "鲤鱼惊喜",
    "Hashbrowns": "薯饼", "Pancakes": "薄煎饼", "Salmon Dinner": "三文鱼晚餐",
    "Fish Taco": "鱼肉卷饼", "Crispy Bass": "香酥鲈鱼", "Pepper Poppers": "爆辣青椒",
    "Bread": "面包", "Tom Kha Soup": "冬阴功汤", "Trout Soup": "鳟鱼汤",
    "Chocolate Cake": "巧克力蛋糕", "Pink Cake": "粉红蛋糕", "Rhubarb Pie": "大黄派",
    "Cookie": "曲奇", "Spaghetti": "意大利面", "Fried Eel": "炸鳗鱼", "Spicy Eel": "辣鳗鱼",
    "Sashimi": "生鱼片", "Maki Roll": "寿司卷", "Tortilla": "玉米饼", "Red Plate": "红盘",
    "Eggplant Parmesan": "茄子帕玛森", "Rice Pudding": "米布丁", "Ice Cream": "冰淇淋",
    "Blueberry Tart": "蓝莓挞", "Autumn's Bounty": "秋日恩赐", "Pumpkin Soup": "南瓜汤",
    "Super Meal": "超级大餐", "Cranberry Sauce": "蔓越莓酱", "Stuffing": "填料",
    "Farmer's Lunch": "农夫午餐", "Survival Burger": "生存汉堡", "Dish O' The Sea": "海鲜杂烩",
    "Miner's Treat": "矿工特供", "Roots Platter": "根茎拼盘", "Triple Shot Espresso": "三倍浓缩咖啡",
    "Seafoam Pudding": "海泡布丁", "Algae Soup": "海藻汤", "Pale Broth": "清汤",
    "Plum Pudding": "李子布丁", "Artichoke Dip": "洋蓟蘸酱", "Stir Fry": "炒菜",
    "Roasted Hazelnuts": "烤榛子", "Pumpkin Pie": "南瓜派", "Radish Salad": "萝卜沙拉",
    "Fruit Salad": "水果沙拉", "Blackberry Cobbler": "黑莓馅饼", "Cranberry Candy": "蔓越莓糖果",
    "Bruschetta": "意式烤面包", "Coleslaw": "凉拌卷心菜", "Fiddlehead Risotto": "蕨菜烩饭",
    "Poppyseed Muffin": "罂粟籽松饼", "Chowder": "蛤蜊浓汤", "Fish Stew": "鱼汤",
    "Escargot": "法式蜗牛", "Lobster Bisque": "龙虾浓汤", "Maple Bar": "枫糖棒",
    "Crab Cakes": "蟹肉饼", "Shrimp Cocktail": "鲜虾鸡尾酒", "Ginger Ale": "姜汁汽水",
    "Banana Pudding": "香蕉布丁", "Mango Sticky Rice": "芒果糯米饭", "Poi": "芋泥",
    "Tropical Curry": "热带咖喱", "Squid Ink Ravioli": "墨鱼汁饺子", "Moss Soup": "苔藓汤",
}
REC_DE = {
    "Fried Egg": "Spiegelei", "Omelet": "Omelett", "Salad": "Salat",
    "Cheese Cauliflower": "Käse-Blumenkohl", "Baked Fish": "Gebackener Fisch",
    "Parsnip Soup": "Pastinakensuppe", "Vegetable Medley": "Gemüsemischung",
    "Complete Breakfast": "Komplettes Frühstück", "Fried Calamari": "Frittierter Kalmar",
    "Strange Bun": "Seltsames Brötchen", "Lucky Lunch": "Glücksessen",
    "Fried Mushroom": "Gebratene Pilze", "Pizza": "Pizza", "Bean Hotpot": "Bohneneintopf",
    "Glazed Yams": "Glasierte Yams", "Carp Surprise": "Karpfen-Überraschung",
    "Hashbrowns": "Röstis", "Pancakes": "Pfannkuchen", "Salmon Dinner": "Lachsessen",
    "Fish Taco": "Fisch-Taco", "Crispy Bass": "Knuspriger Barsch",
    "Pepper Poppers": "Scharfe Paprika-Bissen", "Bread": "Brot", "Tom Kha Soup": "Tom-Kha-Suppe",
    "Trout Soup": "Forellensuppe", "Chocolate Cake": "Schokoladenkuchen",
    "Pink Cake": "Rosa Kuchen", "Rhubarb Pie": "Rhabarberkuchen", "Cookie": "Keks",
    "Spaghetti": "Spaghetti", "Fried Eel": "Gebratener Aal", "Spicy Eel": "Würziger Aal",
    "Sashimi": "Sashimi", "Maki Roll": "Maki-Rolle", "Tortilla": "Tortilla",
    "Red Plate": "Roter Teller", "Eggplant Parmesan": "Auberginen-Parmesan",
    "Rice Pudding": "Reispudding", "Ice Cream": "Eiscreme", "Blueberry Tart": "Blaubeertorte",
    "Autumn's Bounty": "Herbstliche Fülle", "Pumpkin Soup": "Kürbissuppe",
    "Super Meal": "Super-Mahlzeit", "Cranberry Sauce": "Preiselbeersoße",
    "Stuffing": "Füllung", "Farmer's Lunch": "Farmer-Mittagessen",
    "Survival Burger": "Überlebens-Burger", "Dish O' The Sea": "Meeresgericht",
    "Miner's Treat": "Minersnack", "Roots Platter": "Wurzel-Platte",
    "Triple Shot Espresso": "Triple-Espresso", "Seafoam Pudding": "Schaumpudding",
    "Algae Soup": "Algensuppe", "Pale Broth": "Blasse Brühe", "Plum Pudding": "Pflaumenpudding",
    "Artichoke Dip": "Artischocken-Dip", "Stir Fry": "Pfannengericht",
    "Roasted Hazelnuts": "Geröstete Haselnüsse", "Pumpkin Pie": "Kürbiskuchen",
    "Radish Salad": "Rettichsalat", "Fruit Salad": "Obstsalat",
    "Blackberry Cobbler": "Brombeer-Cobbler", "Cranberry Candy": "Preiselbeer-Bonbon",
    "Bruschetta": "Bruschetta", "Coleslaw": "Krautsalat",
    "Fiddlehead Risotto": "Farnrisotto", "Poppyseed Muffin": "Mohn-Muffin",
    "Chowder": "Chowder", "Fish Stew": "Fischeintopf", "Escargot": "Escargot",
    "Lobster Bisque": "Hummerbisque", "Maple Bar": "Ahornriegel", "Crab Cakes": "Krabbenküchlein",
    "Shrimp Cocktail": "Garnelencocktail", "Ginger Ale": "Ingwer-Ale",
    "Banana Pudding": "Bananenpudding", "Mango Sticky Rice": "Mango-Klebreis",
    "Poi": "Poi", "Tropical Curry": "Tropisches Curry",
    "Squid Ink Ravioli": "Tintenfisch-Ravioli", "Moss Soup": "Moossuppe",
}
REC_DESC_ZH = {
    "Fried Egg": "单面煎的鸡蛋。", "Omelet": "超级松软。", "Salad": "健康的花园沙拉。",
    "Cheese Cauliflower": "闻起来好香！", "Baked Fish": "铺在香草上的烤鱼。",
    "Parsnip Soup": "新鲜又暖胃。", "Vegetable Medley": "非常有营养。",
    "Complete Breakfast": "吃完后你会准备好迎接这一天。", "Fried Calamari": "很有嚼劲。",
    "Strange Bun": "里面是什么？", "Lucky Lunch": "特别的一餐。",
    "Fried Mushroom": "土香浓郁。", "Pizza": "受欢迎是有理由的。",
    "Bean Hotpot": "确实很健康。", "Glazed Yams": "香甜满足……糖层是甜味的关键。",
    "Carp Surprise": "寡淡油腻。", "Hashbrowns": "金黄酥脆！",
    "Pancakes": "双层松软的煎饼。", "Salmon Dinner": "柠檬喷香让它格外特别。",
    "Fish Taco": "闻起来很香。", "Crispy Bass": "哇，面包屑裹得完美。",
    "Pepper Poppers": "塞满奶酪的辣味面包屑青椒。", "Bread": "外皮酥脆的法棍。",
    "Tom Kha Soup": "这些风味太棒了！", "Trout Soup": "相当咸。",
    "Chocolate Cake": "湿润浓郁，带厚厚糖霜。", "Pink Cake": "上面有小心形糖果。",
    "Rhubarb Pie": "嗯，酸甜可口！", "Cookie": "非常有嚼劲。",
    "Spaghetti": "经典老味道。", "Fried Eel": "油腻但风味十足。",
    "Spicy Eel": "真的很辣！小心。", "Sashimi": "切成薄片的生鱼。",
    "Maki Roll": "鱼和米饭裹在海藻里。", "Tortilla": "可以当作盛放食物的容器。",
    "Red Plate": "富含抗氧化剂。", "Eggplant Parmesan": "酸甜可口，妙不可言。",
    "Rice Pudding": "口感细腻甜美。", "Ice Cream": "很难找到不爱它的人。",
    "Blueberry Tart": "清淡爽口。", "Autumn's Bounty": "品尝秋天的味道。",
    "Pumpkin Soup": "季节最爱的美食。", "Super Meal": "非常提神的餐点。",
    "Cranberry Sauce": "节日美食。", "Stuffing": "啊……热面包的香味。",
    "Farmer's Lunch": "让你保持精力充沛。", "Survival Burger": "探险者方便的零食。",
    "Dish O' The Sea": "寒冷天气里让你暖和起来。", "Miner's Treat": "让你的精力充沛。",
    "Roots Platter": "让你更有干劲去挖掘。", "Triple Shot Espresso": "比普通咖啡更提神。",
    "Seafoam Pudding": "这款咸味布丁真的能让你更专注。", "Algae Soup": "有点黏糊。",
    "Pale Broth": "带有淡淡咸味的清汤。", "Plum Pudding": "传统节日甜点。",
    "Artichoke Dip": "清凉爽口。", "Stir Fry": "铺在面条上的细丝蔬菜。",
    "Roasted Hazelnuts": "烘烤过程带来复杂的香气。", "Pumpkin Pie": "酥皮中的丝滑南瓜奶油。",
    "Radish Salad": "萝卜非常爽脆！", "Fruit Salad": "夏日水果的美妙组合。",
    "Blackberry Cobbler": "没有什么比得上它。", "Cranberry Candy": "甜得足以盖过酸味。",
    "Bruschetta": "酥脆白面包上的烤番茄。", "Coleslaw": "清淡、新鲜、非常健康。",
    "Fiddlehead Risotto": "配香草的奶油米饭。", "Poppyseed Muffin": "有安抚效果。",
    "Chowder": "温暖自己的完美方式。", "Fish Stew": "闻起来很像大海。",
    "Escargot": "黄油浸透的蜗牛，完美烹制。", "Lobster Bisque": "这道细腻的汤是秘传配方。",
    "Maple Bar": "淋上枫糖浆的甜甜圈。", "Crab Cakes": "螃蟹、面包屑和鸡蛋，做成肉饼后油炸。",
    "Shrimp Cocktail": "用野生山葵制作的美味开胃菜。", "Ginger Ale": "以舒缓功效著称的汽水。",
    "Banana Pudding": "带有绝妙香气的奶油甜点。", "Mango Sticky Rice": "香甜芒果和椰香糯米的神奇组合。",
    "Poi": "味道传统可口。", "Tropical Curry": "配椰奶的异国风味咖喱。",
    "Squid Ink Ravioli": "暂时抵御负面效果。", "Moss Soup": "浓稠黏滑，但可以食用。",
}
REC_DESC_DE = {
    "Fried Egg": "Spiegelei.", "Omelet": "Super fluffig.", "Salad": "Ein gesunder Gartensalat.",
    "Cheese Cauliflower": "Riecht großartig!", "Baked Fish": "Gebackener Fisch auf Kräutern.",
    "Parsnip Soup": "Frisch und herzhaft.", "Vegetable Medley": "Sehr nahrhaft.",
    "Complete Breakfast": "Du fühlst dich bereit für den Tag.", "Fried Calamari": "Schön zäh.",
    "Strange Bun": "Was ist da drin?", "Lucky Lunch": "Ein besonderes Essen.",
    "Fried Mushroom": "Erdig und aromatisch.", "Pizza": "Aus gutem Grund beliebt.",
    "Bean Hotpot": "Wirklich gesund.", "Glazed Yams": "Süß und sättigend... Der Zuckerguss ist der Schlüssel.",
    "Carp Surprise": "Fad und ölig.", "Hashbrowns": "Knusprig und goldbraun!",
    "Pancakes": "Ein doppelter Stapel fluffiger Pfannkuchen.",
    "Salmon Dinner": "Der Zitronenspritzer macht es besonders.",
    "Fish Taco": "Riecht köstlich.", "Crispy Bass": "Wow, die Panade ist perfekt.",
    "Pepper Poppers": "Scharfe Paprika mit Käse gefüllt.", "Bread": "Ein knuspriges Baguette.",
    "Tom Kha Soup": "Diese Aromen sind unglaublich!", "Trout Soup": "Ziemlich salzig.",
    "Chocolate Cake": "Saftig und reich mit dickem Zuckerguss.",
    "Pink Cake": "Darauf sind kleine Herzbonbons.",
    "Rhubarb Pie": "Mmm, spritzig und süß!", "Cookie": "Sehr zäh.",
    "Spaghetti": "Ein alter Klassiker.", "Fried Eel": "Fettig, aber geschmackvoll.",
    "Spicy Eel": "Wirklich scharf! Vorsicht.", "Sashimi": "Roher Fisch in dünne Scheiben geschnitten.",
    "Maki Roll": "Fisch und Reis in Seetang gewickelt.",
    "Tortilla": "Kann als Behälter für Speisen dienen.",
    "Red Plate": "Voller Antioxidantien.", "Eggplant Parmesan": "Spritzig, käsig und wunderbar.",
    "Rice Pudding": "Cremig, süß und lecker.", "Ice Cream": "Kaum jemand mag es nicht.",
    "Blueberry Tart": "Dezent und erfrischend.", "Autumn's Bounty": "Ein Geschmack der Saison.",
    "Pumpkin Soup": "Ein saisonaler Favorit.", "Super Meal": "Ein wirklich stärkendes Essen.",
    "Cranberry Sauce": "Ein festlicher Genuss.", "Stuffing": "Ahh... der Duft von warmem Brot.",
    "Farmer's Lunch": "Hält dich in Schwung.", "Survival Burger": "Ein praktischer Snack für die Erkundung.",
    "Dish O' The Sea": "Wärmt dich an kalten Tagen.", "Miner's Treat": "Sollte deine Energie aufrecht halten.",
    "Roots Platter": "Hält dich beim Graben fit.", "Triple Shot Espresso": "Stärker als normaler Kaffee.",
    "Seafoam Pudding": "Dieser salzige Pudding macht dich fokussiert.",
    "Algae Soup": "Etwas schleimig.", "Pale Broth": "Eine feine Brühe mit etwas Salz.",
    "Plum Pudding": "Ein traditionelles Festtagsdessert.",
    "Artichoke Dip": "Kühl und erfrischend.",
    "Stir Fry": "Streifengemüse auf einer Basis aus Nudeln.",
    "Roasted Hazelnuts": "Das Rösten erzeugt komplexe Aromen.",
    "Pumpkin Pie": "Seidige Kürbiscreme in blättrigem Teig.",
    "Radish Salad": "Die Radieschen sind so knackig!",
    "Fruit Salad": "Eine köstliche Kombination aus Sommerfrüchten.",
    "Blackberry Cobbler": "Es gibt nichts Vergleichbares.",
    "Cranberry Candy": "Süß genug, um die Säure zu überdecken.",
    "Bruschetta": "Geröstete Tomaten auf knusprigem Brot.",
    "Coleslaw": "Leicht, frisch und sehr gesund.",
    "Fiddlehead Risotto": "Cremiges Reisgericht mit Kräutern.",
    "Poppyseed Muffin": "Hat eine beruhigende Wirkung.",
    "Chowder": "Der perfekte Weg, sich aufzuwärmen.",
    "Fish Stew": "Riecht stark nach Meer.", "Escargot": "In Butter getränkte Schnecken.",
    "Lobster Bisque": "Diese feine Suppe ist ein Geheimrezept.",
    "Maple Bar": "Ein süßer Donut mit Ahornsirup.",
    "Crab Cakes": "Krabbe, Paniermehl und Ei, frittiert.",
    "Shrimp Cocktail": "Ein delikates Vorspeise mit wildem Meerrettich.",
    "Ginger Ale": "Ein spritziger Softdrink.",
    "Banana Pudding": "Ein cremiges Dessert mit wunderbarem Aroma.",
    "Mango Sticky Rice": "Süße Mango und Kokosreis – wunderbar.",
    "Poi": "Ein traditionelles Essen mit feinem Geschmack.",
    "Tropical Curry": "Ein exotisches, duftendes Curry mit Kokos.",
    "Squid Ink Ravioli": "Schützt vorübergehend vor Statuseffekten.",
    "Moss Soup": "Dick und schleimig, aber essbar.",
}

def main():
    with open(PATH, encoding='utf-8') as f:
        data = json.load(f)
    for item in data:
        name = item['name']
        if name in REC_ZH:
            item['name_zh'] = REC_ZH[name]; item['name_de'] = REC_DE[name]
        if name in REC_DESC_ZH:
            item['description_zh'] = REC_DESC_ZH[name]; item['description_de'] = REC_DESC_DE[name]
        for ing in item.get('ingredients', []):
            iname = ing.get('name', '')
            if iname in ING:
                ing['name_zh'] = ING[iname][0]; ing['name_de'] = ING[iname][1]
    with open(PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    # 校验覆盖
    missing_zh = [x['name'] for x in data if 'name_zh' not in x]
    missing_ing = set()
    for x in data:
        for i in x.get('ingredients', []):
            if 'name_zh' not in i: missing_ing.add(i['name'])
    print(f"OK: {len(data)} 条食谱已补全")
    print("缺失食谱翻译:", missing_zh or "无")
    print("缺失食材翻译:", missing_ing or "无")

if __name__ == '__main__':
    main()
