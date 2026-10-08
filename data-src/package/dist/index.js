"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AchievementQuery: () => AchievementQuery,
  AnimalQuery: () => AnimalQuery,
  ArtifactQuery: () => ArtifactQuery,
  ArtisanGoodQuery: () => ArtisanGoodQuery,
  BaitQuery: () => BaitQuery,
  BlacksmithQuery: () => BlacksmithQuery,
  BooksellerItemQuery: () => BooksellerItemQuery,
  BooksellerTradeQuery: () => BooksellerTradeQuery,
  BuildingQuery: () => BuildingQuery,
  BundleQuery: () => BundleQuery,
  CarpenterQuery: () => CarpenterQuery,
  CasinoQuery: () => CasinoQuery,
  CollectionItemQuery: () => CollectionItemQuery,
  CollectionsQuery: () => CollectionsQuery,
  ConcessionQuery: () => ConcessionQuery,
  CookingQuery: () => CookingQuery,
  CraftingQuery: () => CraftingQuery,
  CropQuery: () => CropQuery,
  DesertTraderQuery: () => DesertTraderQuery,
  DwarfShopQuery: () => DwarfShopQuery,
  EventQuery: () => EventQuery,
  FarmMapQuery: () => FarmMapQuery,
  FieldOfficeDonationQuery: () => FieldOfficeDonationQuery,
  FieldOfficeQuery: () => FieldOfficeQuery,
  FishQuery: () => FishQuery,
  FootwearQuery: () => FootwearQuery,
  ForageableQuery: () => ForageableQuery,
  GoldenWalnutQuery: () => GoldenWalnutQuery,
  GrandpaEvaluator: () => GrandpaEvaluator,
  GuildQuery: () => GuildQuery,
  HatQuery: () => HatQuery,
  HouseRenovationQuery: () => HouseRenovationQuery,
  HouseUpgradeQuery: () => HouseUpgradeQuery,
  IslandTraderQuery: () => IslandTraderQuery,
  JojaQuery: () => JojaQuery,
  KrobusQuery: () => KrobusQuery,
  LATEST_API_VERSION: () => LATEST_API_VERSION,
  LocationQuery: () => LocationQuery,
  LostBookQuery: () => LostBookQuery,
  MASTERY_LEVELS: () => MASTERY_LEVELS,
  MarnieQuery: () => MarnieQuery,
  MedicalSupplyQuery: () => MedicalSupplyQuery,
  MineralQuery: () => MineralQuery,
  MixedSeedQuery: () => MixedSeedQuery,
  MonsterLootQuery: () => MonsterLootQuery,
  MonsterQuery: () => MonsterQuery,
  MonsterSlayerGoalQuery: () => MonsterSlayerGoalQuery,
  OasisQuery: () => OasisQuery,
  PerfectionQuery: () => PerfectionQuery,
  PierreQuery: () => PierreQuery,
  ProfessionQuery: () => ProfessionQuery,
  QiStockQuery: () => QiStockQuery,
  QualityCalculator: () => QualityCalculator,
  QuestQuery: () => QuestQuery,
  RingQuery: () => RingQuery,
  SKILL_TITLES: () => SKILL_TITLES,
  SaloonQuery: () => SaloonQuery,
  SeasonQuery: () => SeasonQuery,
  SecretNoteQuery: () => SecretNoteQuery,
  SkillQuery: () => SkillQuery,
  SpecialItemQuery: () => SpecialItemQuery,
  SpecialOrderQuery: () => SpecialOrderQuery,
  StarDropQuery: () => StarDropQuery,
  TackleQuery: () => TackleQuery,
  ToolQuery: () => ToolQuery,
  TreeQuery: () => TreeQuery,
  TrinketQuery: () => TrinketQuery,
  VillagerQuery: () => VillagerQuery,
  VolcanoShopQuery: () => VolcanoShopQuery,
  WeaponQuery: () => WeaponQuery,
  WeaponStatQuery: () => WeaponStatQuery,
  WeatherQuery: () => WeatherQuery,
  WillyQuery: () => WillyQuery,
  WizardQuery: () => WizardQuery,
  achievements: () => achievements,
  animals: () => animals,
  applyPriceFormula: () => applyPriceFormula,
  artifacts: () => artifacts,
  artisanGoods: () => artisanGoods,
  bait: () => bait,
  blacksmith: () => blacksmith,
  booksellerShop: () => booksellerShop,
  booksellerTrades: () => booksellerTrades,
  buildings: () => buildings,
  bundles: () => bundles,
  calculateArtisanPrice: () => calculateArtisanPrice,
  carpenter: () => carpenter,
  casino: () => casino,
  collections: () => collections,
  concessions: () => concessions,
  cooking: () => cooking,
  crafting: () => crafting,
  crops: () => crops,
  desertTrader: () => desertTrader,
  dwarfShop: () => dwarfShop,
  events: () => events,
  fieldOffice: () => fieldOffice,
  fieldOfficeDonations: () => fieldOfficeDonations,
  findFestival: () => findFestival,
  fish: () => fish,
  footwear: () => footwear,
  forageables: () => forageables,
  getMasteryLevel: () => getMasteryLevel,
  getProfessionOptions: () => getProfessionOptions,
  getTitle: () => getTitle,
  getTitleScore: () => getTitleScore,
  goldenWalnuts: () => goldenWalnuts,
  grandpaEvaluator: () => grandpaEvaluator,
  guild: () => guild,
  hats: () => hats,
  houseRenovations: () => houseRenovations,
  houseUpgrades: () => houseUpgrades,
  isFarmAnimal: () => isFarmAnimal,
  isPet: () => isPet,
  islandTrader: () => islandTrader,
  joja: () => joja,
  krobus: () => krobus,
  locations: () => locations,
  lostBooks: () => lostBooks,
  maps: () => maps,
  marnie: () => marnie,
  medicalSupplies: () => medicalSupplies,
  minerals: () => minerals,
  mixedSeeds: () => mixedSeeds,
  monsterLoot: () => monsterLoot,
  monsterSlayerGoals: () => monsterSlayerGoals,
  monsters: () => monsters,
  oasis: () => oasis,
  parseSaveFile: () => parseSaveFile,
  perfection: () => perfection,
  pierre: () => pierre,
  professions: () => professions,
  qiStock: () => qiStock,
  qualityCalculator: () => qualityCalculator,
  quests: () => quests,
  resolveApiVersion: () => resolveApiVersion,
  rings: () => rings,
  saloon: () => saloon,
  search: () => search,
  seasons: () => seasons,
  secretNotes: () => secretNotes,
  skills: () => skills,
  specialItems: () => specialItems,
  specialOrders: () => specialOrders,
  starDrops: () => starDrops,
  tackle: () => tackle,
  tools: () => tools,
  trees: () => trees,
  trinkets: () => trinkets,
  universalGifts: () => universalGifts,
  villagers: () => villagers,
  volcanoShop: () => volcanoShop,
  weaponStats: () => weaponStats,
  weapons: () => weapons,
  weather: () => weather,
  willy: () => willy,
  wizard: () => wizard
});
module.exports = __toCommonJS(index_exports);

// src/common/query-base.ts
var QueryBase = class {
  constructor(data) {
    this.data = data;
  }
  /** Return all results as an array. */
  get() {
    return this.data;
  }
  /** Return the first result, or `undefined` if there are none. */
  first() {
    return this.data[0];
  }
  /** Find an item by its exact ID. */
  find(id) {
    return this.data.find((x) => x.id === id);
  }
  /** Find an item by name (case-insensitive exact match). */
  findByName(name) {
    const q = name.toLowerCase();
    return this.data.find((x) => x.name.toLowerCase() === q);
  }
  /** Return the number of results. */
  count() {
    return this.data.length;
  }
};

// data/achievements.json
var achievements_default = [
  {
    id: "0",
    name: "Greenhorn",
    description: "Earn 15,000g.",
    image: "images/achievements/Achievement_Greenhorn.jpg",
    icon: "images/achievements/Achievement_Star_12.png",
    reward: "Good Ol' Cap",
    secret: false
  },
  {
    id: "1",
    name: "Cowpoke",
    description: "Earn 50,000g.",
    image: "images/achievements/Achievement_Cowpoke.jpg",
    icon: "images/achievements/Achievement_Star_02.png",
    reward: "Lucky Bow",
    secret: false
  },
  {
    id: "2",
    name: "Homesteader",
    description: "Earn 250,000g.",
    image: "images/achievements/Achievement_Homesteader.jpg",
    icon: "images/achievements/Achievement_Star_11.png",
    reward: "Cool Cap",
    secret: false
  },
  {
    id: "3",
    name: "Millionaire",
    description: "Earn 1,000,000g.",
    image: "images/achievements/Achievement_Millionaire.jpg",
    icon: "images/achievements/Achievement_Star_09.png",
    reward: "Bowler Hat",
    secret: false
  },
  {
    id: "4",
    name: "Legend",
    description: "Earn 10,000,000g.",
    image: "images/achievements/Achievement_Legend.jpg",
    icon: "images/achievements/Achievement_Star_04.png",
    reward: "Sombrero",
    secret: true
  },
  {
    id: "5",
    name: "A Complete Collection",
    description: "Complete the museum collection.",
    image: "images/achievements/Achievement_A_Complete_Collection.jpg",
    icon: "images/achievements/Achievement_Star_02.png",
    reward: "Cowboy Hat",
    secret: false
  },
  {
    id: "6",
    name: "A New Friend",
    description: "Reach a 5-heart friend level with someone.",
    image: "images/achievements/Achievement_A_New_Friend.jpg",
    icon: "images/achievements/Achievement_Star_02.png",
    reward: "Butterfly Bow",
    secret: false
  },
  {
    id: "7",
    name: "Best Friends",
    description: "Reach a 10-heart friend level with someone.",
    image: "images/achievements/Achievement_Best_Friends.jpg",
    icon: "images/achievements/Achievement_Star_04.png",
    reward: "Mouse Ears",
    secret: false
  },
  {
    id: "9",
    name: "The Beloved Farmer",
    description: "Reach a 10-heart friend level with 8 people.",
    image: "images/achievements/Achievement_The_Beloved_Farmer.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Cat Ears",
    secret: false
  },
  {
    id: "11",
    name: "Cliques",
    description: "Reach a 5-heart friend level with 4 people.",
    image: "images/achievements/Achievement_Cliques.jpg",
    icon: "images/achievements/Achievement_Star_10.png",
    reward: "Tiara",
    secret: false
  },
  {
    id: "12",
    name: "Networking",
    description: "Reach a 5-heart friend level with 10 people.",
    image: "images/achievements/Achievement_Networking.jpg",
    icon: "images/achievements/Achievement_Star_04.png",
    reward: "Santa Hat",
    secret: false
  },
  {
    id: "13",
    name: "Popular",
    description: "Reach a 5-heart friend level with 20 people.",
    image: "images/achievements/Achievement_Popular.jpg",
    icon: "images/achievements/Achievement_Star_09.png",
    reward: "Earmuffs",
    secret: false
  },
  {
    id: "15",
    name: "Cook",
    description: "Cook 10 different recipes.",
    image: "images/achievements/Achievement_Cook.jpg",
    icon: "images/achievements/Achievement_Star_02.png",
    reward: "Delicate Bow",
    secret: false
  },
  {
    id: "16",
    name: "Sous Chef",
    description: "Cook 25 different recipes.",
    image: "images/achievements/Achievement_Sous_Chef.jpg",
    icon: "images/achievements/Achievement_Star_09.png",
    reward: "Plum Chapeau",
    secret: false
  },
  {
    id: "17",
    name: "Gourmet Chef",
    description: "Cook every recipe.",
    image: "images/achievements/Achievement_Gourmet_Chef.jpg",
    icon: "images/achievements/Achievement_Star_08.png",
    reward: "Archer's Cap, Chef Hat",
    secret: false
  },
  {
    id: "18",
    name: "Moving Up",
    description: "Upgrade your house.",
    image: "images/achievements/Achievement_Moving_Up.jpg",
    icon: "images/achievements/Achievement_Star_01.png",
    reward: "Tropiclip",
    secret: false
  },
  {
    id: "19",
    name: "Living Large",
    description: "Upgrade your house to the maximum size.",
    image: "images/achievements/Achievement_Living_Large.jpg",
    icon: "images/achievements/Achievement_Star_09.png",
    reward: "Hunter's Cap",
    secret: false
  },
  {
    id: "20",
    name: "D.I.Y.",
    description: "Craft 15 different items.",
    image: "images/achievements/Achievement_DIY.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Daisy",
    secret: false
  },
  {
    id: "21",
    name: "Artisan",
    description: "Craft 30 different items.",
    image: "images/achievements/Achievement_Artisan.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Trucker Hat",
    secret: false
  },
  {
    id: "22",
    name: "Craft Master",
    description: "Craft every item.",
    image: "images/achievements/Achievement_Master_Craft.jpg",
    icon: "images/achievements/Achievement_Star_10.png",
    reward: "Gnome's Cap",
    secret: false
  },
  {
    id: "24",
    name: "Fisherman",
    description: "Catch 10 different fish.",
    image: "images/achievements/Achievement_Fisherman.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Sou'wester",
    secret: false
  },
  {
    id: "25",
    name: "Ol' Mariner",
    description: "Catch 24 different fish.",
    image: "images/achievements/Achievement_Ol_Mariner.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Official Cap",
    secret: false
  },
  {
    id: "26",
    name: "Master Angler",
    description: "Catch every fish.",
    image: "images/achievements/Achievement_Master_Angler.jpg",
    icon: "images/achievements/Achievement_Star_07.png",
    reward: "Eye Patch",
    secret: false
  },
  {
    id: "27",
    name: "Mother Catch",
    description: "Catch 100 fish.",
    image: "images/achievements/Achievement_Mother_Catch.jpg",
    icon: "images/achievements/Achievement_Star_08.png",
    reward: "Watermelon Band",
    secret: false
  },
  {
    id: "28",
    name: "Treasure Trove",
    description: "Donate 40 different items to the museum.",
    image: "images/achievements/Achievement_Treasure_Trove.jpg",
    icon: "images/achievements/Achievement_Star_08.png",
    reward: "Blue Bonnet",
    secret: false
  },
  {
    id: "29",
    name: "Gofer",
    description: "Complete 10 'Help Wanted' requests.",
    image: "images/achievements/Achievement_Gofer.jpg",
    icon: "images/achievements/Achievement_Star_10.png",
    reward: "Polka Bow",
    secret: false
  },
  {
    id: "30",
    name: "A Big Help",
    description: "Complete 40 'Help Wanted' requests.",
    image: "images/achievements/Achievement_A_Big_Help.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Chicken Mask",
    secret: false
  },
  {
    id: "31",
    name: "Polyculture",
    description: "Ship 15 of each crop.",
    image: "images/achievements/Achievement_Polyculture.jpg",
    icon: "images/achievements/Achievement_Star_12.png",
    reward: "Cowpoke Hat",
    secret: false
  },
  {
    id: "32",
    name: "Monoculture",
    description: "Ship 300 of one crop.",
    image: "images/achievements/Achievement_Monoculture.jpg",
    icon: "images/achievements/Achievement_Star_01.png",
    reward: "Cowgal Hat",
    secret: false
  },
  {
    id: "34",
    name: "Full Shipment",
    description: "Ship every item.",
    image: "images/achievements/Achievement_Full_Shipment.jpg",
    icon: "images/achievements/Achievement_Star_04.png",
    reward: "Goblin Mask",
    secret: false
  },
  {
    id: "prairie-king",
    name: "Prairie King",
    description: "Beat 'Journey of the Prairie King'.",
    image: "images/achievements/Achievement_Prarie_King.jpg",
    icon: null,
    reward: "Prairie King Arcade System",
    secret: false
  },
  {
    id: "the-bottom",
    name: "The Bottom",
    description: "Reach the lowest level of the mines.",
    image: "images/achievements/Achievement_The_Bottom.jpg",
    icon: null,
    reward: "Skull Key",
    secret: false
  },
  {
    id: "local-legend",
    name: "Local Legend",
    description: "Restore the Pelican Town Community Center.",
    image: "images/achievements/Achievement_Local_Legend.jpg",
    icon: null,
    reward: "Stardew Hero Trophy",
    secret: false
  },
  {
    id: "joja-co-member-of-the-year",
    name: "Joja Co. Member Of The Year",
    description: "Purchase all Joja Community Development projects.",
    image: "images/achievements/Achievement_Joja_Co._Member_Of_The_Year.jpg",
    icon: null,
    reward: "Soda Machine",
    secret: false
  },
  {
    id: "mystery-of-the-stardrops",
    name: "Mystery Of The Stardrops",
    description: "Find every stardrop.",
    image: "images/achievements/Achievement_Mystery_Of_The_Stardrops.jpg",
    icon: null,
    reward: null,
    secret: false
  },
  {
    id: "full-house",
    name: "Full House",
    description: "Get married and have two kids.",
    image: "images/achievements/Achievement_Full_House.jpg",
    icon: null,
    reward: null,
    secret: false
  },
  {
    id: "singular-talent",
    name: "Singular Talent",
    description: "Reach level 10 in a skill.",
    image: "images/achievements/Achievement_Singular_Talent.jpg",
    icon: null,
    reward: null,
    secret: false
  },
  {
    id: "master-of-the-five-ways",
    name: "Master Of The Five Ways",
    description: "Reach level 10 in every skill.",
    image: "images/achievements/Achievement_Master_Of_The_Five_Ways.jpg",
    icon: null,
    reward: null,
    secret: false
  },
  {
    id: "protector-of-the-valley",
    name: "Protector Of The Valley",
    description: "Complete all of the Adventure Guild Monster Slayer goals.",
    image: "images/achievements/Achievement_Protector_Of_The_Valley.jpg",
    icon: null,
    reward: null,
    secret: false
  },
  {
    id: "fectors-challenge",
    name: "Fector's Challenge",
    description: "Beat 'Journey Of The Prairie King' without dying.",
    image: "images/achievements/Achievement_Fectors_Challenge.jpg",
    icon: null,
    reward: null,
    secret: true
  },
  {
    id: "40",
    name: "A Distant Shore",
    description: "Reach Ginger Island.",
    image: "images/achievements/Achievement_A_Distant_Shore.jpg",
    icon: "images/achievements/Achievement_Star_09.png",
    reward: "Paper Hat",
    secret: false
  },
  {
    id: "35",
    name: "Well-Read",
    description: "Read every book.",
    image: "images/achievements/Achievement_Well-Read.jpg",
    icon: "images/achievements/Achievement_Star_06.png",
    reward: "Pageboy Cap",
    secret: false
  },
  {
    id: "36",
    name: "Two Thumbs Up",
    description: "See a movie.",
    image: "images/achievements/Achievement_Two_Thumbs_Up.jpg",
    icon: "images/achievements/Achievement_Star_08.png",
    reward: "Jester Hat",
    secret: false
  },
  {
    id: "37",
    name: "Blue Ribbon",
    description: "Get 1st place in the Stardew Valley Fair competition.",
    image: "images/achievements/Achievement_Blue_Ribbon.jpg",
    icon: "images/achievements/Achievement_Star_08.png",
    reward: "Blue Ribbon",
    secret: false
  },
  {
    id: "38",
    name: "An Unforgettable Soup",
    description: "Delight the Governor.",
    image: "images/achievements/Achievement_An_Unforgettable_Soup.jpg",
    icon: "images/achievements/Achievement_Star_02.png",
    reward: "Governor's Hat",
    secret: false
  },
  {
    id: "39",
    name: "Good Neighbors",
    description: "Help your forest neighbors grow their family.",
    image: "images/achievements/Achievement_Good_Neighbors.jpg",
    icon: "images/achievements/Achievement_Star_11.png",
    reward: "White Bow",
    secret: false
  },
  {
    id: "41",
    name: "Danger In The Deep",
    description: "Reach the bottom of the 'dangerous' mines.",
    image: "images/achievements/Achievement_Danger_In_The_Deep.jpg",
    icon: "images/achievements/Achievement_Star_03.png",
    reward: "Space Helmet",
    secret: false
  },
  {
    id: "42",
    name: "Infinite Power",
    description: "Obtain the most powerful weapon.",
    image: "images/achievements/Achievement_Infinite_Power.jpg",
    icon: "images/achievements/Achievement_Star_07.png",
    reward: "Infinity Crown",
    secret: false
  },
  {
    id: "44",
    name: "Perfection",
    description: "Reach the summit.",
    image: "images/achievements/Achievement_Perfection.jpg",
    icon: "images/achievements/Achievement_Star_10.png",
    reward: "Junimo Hat",
    secret: false
  }
];

// src/modules/achievements/index.ts
var achievementsData = achievements_default;
var AchievementQuery = class _AchievementQuery extends QueryBase {
  constructor(data = achievementsData) {
    super(data);
  }
  /** Filter to secret achievements (hidden until unlocked). */
  secret() {
    return new _AchievementQuery(this.data.filter((a) => a.secret));
  }
  /**
   * Filter to in-game achievements (those with an in-game icon).
   * Excludes platform-only achievements that only appear in Steam/GOG.
   */
  inGame() {
    return new _AchievementQuery(this.data.filter((a) => a.icon !== null));
  }
  /** Filter to achievements that grant an in-game reward (hat, title, etc.). */
  withReward() {
    return new _AchievementQuery(this.data.filter((a) => a.reward !== null));
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _AchievementQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function achievements(source = achievementsData) {
  return new AchievementQuery(source);
}

// data/animals.json
var animals_default = [
  {
    type: "pet",
    id: "cat-1",
    name: "Cat",
    variant: 1,
    image: "images/animals/Cat 1.png"
  },
  {
    type: "pet",
    id: "cat-2",
    name: "Cat",
    variant: 2,
    image: "images/animals/Cat 2.png"
  },
  {
    type: "pet",
    id: "cat-3",
    name: "Cat",
    variant: 3,
    image: "images/animals/Cat 3.png"
  },
  {
    type: "pet",
    id: "cat-4",
    name: "Cat",
    variant: 4,
    image: "images/animals/Cat 4.png"
  },
  {
    type: "pet",
    id: "cat-5",
    name: "Cat",
    variant: 5,
    image: "images/animals/Cat 5.png"
  },
  {
    type: "pet",
    id: "dog-1",
    name: "Dog",
    variant: 1,
    image: "images/animals/Dog 1.png"
  },
  {
    type: "pet",
    id: "dog-2",
    name: "Dog",
    variant: 2,
    image: "images/animals/Dog 2.png"
  },
  {
    type: "pet",
    id: "dog-3",
    name: "Dog",
    variant: 3,
    image: "images/animals/Dog 3.png"
  },
  {
    type: "pet",
    id: "dog-4",
    name: "Dog",
    variant: 4,
    image: "images/animals/Dog 4.png"
  },
  {
    type: "pet",
    id: "dog-5",
    name: "Dog",
    variant: 5,
    image: "images/animals/Dog 5.png"
  },
  {
    type: "pet",
    id: "turtle",
    name: "Turtle",
    variant: 1,
    image: "images/animals/Turtle.png"
  },
  {
    type: "pet",
    id: "iridium-turtle",
    name: "Iridium Turtle",
    variant: 2,
    image: "images/animals/Iridium Turtle.png"
  },
  {
    type: "pet",
    id: "horse",
    name: "Horse",
    image: "images/animals/horse.png"
  },
  {
    type: "farm-animal",
    id: "white-chicken",
    name: "White Chicken",
    description: "A common farm bird. Lays an egg each morning.",
    building: "Coop",
    purchasePrice: 400,
    sellPrice: 800,
    daysToMature: 3,
    daysToProduce: 1,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "176",
      name: "Egg",
      sellPrice: 50,
      image: "images/animals/produce/Egg.png"
    },
    deluxeProduce: {
      id: "174",
      name: "Large Egg",
      sellPrice: 95,
      image: "images/animals/produce/Large Egg.png"
    },
    image: "images/animals/White Chicken.png"
  },
  {
    type: "farm-animal",
    id: "brown-chicken",
    name: "Brown Chicken",
    description: "A common farm bird with brown plumage. Lays brown eggs each morning.",
    building: "Coop",
    purchasePrice: null,
    sellPrice: 800,
    daysToMature: 3,
    daysToProduce: 1,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "180",
      name: "Brown Egg",
      sellPrice: 50,
      image: "images/animals/produce/Brown Egg.png"
    },
    deluxeProduce: {
      id: "182",
      name: "Large Brown Egg",
      sellPrice: 95,
      image: "images/animals/produce/Large Brown Egg.png"
    },
    image: "images/animals/Brown Chicken.png"
  },
  {
    type: "farm-animal",
    id: "blue-chicken",
    name: "Blue Chicken",
    description: "A rare blue-feathered chicken unlocked through a deep friendship with Shane. Produces white eggs daily.",
    building: "Coop",
    purchasePrice: null,
    sellPrice: 800,
    daysToMature: 3,
    daysToProduce: 1,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "176",
      name: "Egg",
      sellPrice: 50,
      image: "images/animals/produce/Egg.png"
    },
    deluxeProduce: {
      id: "174",
      name: "Large Egg",
      sellPrice: 95,
      image: "images/animals/produce/Large Egg.png"
    },
    image: "images/animals/Blue Chicken.png"
  },
  {
    type: "farm-animal",
    id: "void-chicken",
    name: "Void Chicken",
    description: "A dark, magical chicken hatched from a Void Egg. Produces Void Eggs daily.",
    building: "Coop",
    purchasePrice: null,
    sellPrice: 800,
    daysToMature: 3,
    daysToProduce: 1,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "305",
      name: "Void Egg",
      sellPrice: 65,
      image: "images/animals/produce/Void Egg.png"
    },
    deluxeProduce: null,
    image: "images/animals/Void Chicken.png"
  },
  {
    type: "farm-animal",
    id: "golden-chicken",
    name: "Golden Chicken",
    description: "A rare golden chicken hatched from a Golden Egg. Produces Golden Eggs daily.",
    building: "Coop",
    purchasePrice: null,
    sellPrice: 800,
    daysToMature: 3,
    daysToProduce: 1,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "928",
      name: "Golden Egg",
      sellPrice: 500,
      image: "images/animals/produce/Golden Egg.png"
    },
    deluxeProduce: null,
    image: "images/animals/Golden Chicken.png"
  },
  {
    type: "farm-animal",
    id: "duck",
    name: "Duck",
    description: "A waterfowl that lays a Duck Egg every other day. Happy ducks occasionally drop a valuable Duck Feather.",
    building: "Big Coop",
    purchasePrice: 600,
    sellPrice: 1200,
    daysToMature: 5,
    daysToProduce: 2,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "442",
      name: "Duck Egg",
      sellPrice: 95,
      image: "images/animals/produce/Duck Egg.png"
    },
    deluxeProduce: {
      id: "444",
      name: "Duck Feather",
      sellPrice: 250,
      image: "images/animals/produce/Duck Feather.png"
    },
    image: "images/animals/Duck.png"
  },
  {
    type: "farm-animal",
    id: "rabbit",
    name: "Rabbit",
    description: "A fluffy coop animal that sheds Wool every few days. Very happy rabbits may drop a lucky Rabbit's Foot.",
    building: "Deluxe Coop",
    purchasePrice: 4e3,
    sellPrice: 8e3,
    daysToMature: 6,
    daysToProduce: 4,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "440",
      name: "Wool",
      sellPrice: 340,
      image: "images/animals/produce/Wool.png"
    },
    deluxeProduce: {
      id: "446",
      name: "Rabbit's Foot",
      sellPrice: 565,
      image: "images/animals/produce/Rabbit's Foot.png"
    },
    image: "images/animals/Rabbit.png"
  },
  {
    type: "farm-animal",
    id: "dinosaur",
    name: "Dinosaur",
    description: "A prehistoric creature hatched from a Dinosaur Egg found in the mines. Lays another Dinosaur Egg each week.",
    building: "Coop",
    purchasePrice: null,
    sellPrice: 1e3,
    daysToMature: 0,
    daysToProduce: 7,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "107",
      name: "Dinosaur Egg",
      sellPrice: 350,
      image: "images/animals/produce/Dinosaur Egg.png"
    },
    deluxeProduce: null,
    image: "images/animals/Dinosaur.png"
  },
  {
    type: "farm-animal",
    id: "white-cow",
    name: "White Cow",
    description: "A dairy cow that produces milk daily. Must be milked with a Milk Pail.",
    building: "Barn",
    purchasePrice: 750,
    sellPrice: 1500,
    daysToMature: 5,
    daysToProduce: 1,
    harvestMethod: "tool",
    harvestTool: "Milk Pail",
    produce: {
      id: "184",
      name: "Milk",
      sellPrice: 125,
      image: "images/animals/produce/Milk.png"
    },
    deluxeProduce: {
      id: "186",
      name: "Large Milk",
      sellPrice: 190,
      image: "images/animals/produce/Large Milk.png"
    },
    image: "images/animals/White Cow.png"
  },
  {
    type: "farm-animal",
    id: "brown-cow",
    name: "Brown Cow",
    description: "A dairy cow with brown markings. Produces milk daily and must be milked with a Milk Pail.",
    building: "Barn",
    purchasePrice: null,
    sellPrice: 1500,
    daysToMature: 5,
    daysToProduce: 1,
    harvestMethod: "tool",
    harvestTool: "Milk Pail",
    produce: {
      id: "184",
      name: "Milk",
      sellPrice: 125,
      image: "images/animals/produce/Milk.png"
    },
    deluxeProduce: {
      id: "186",
      name: "Large Milk",
      sellPrice: 190,
      image: "images/animals/produce/Large Milk.png"
    },
    image: "images/animals/Brown Cow.png"
  },
  {
    type: "farm-animal",
    id: "goat",
    name: "Goat",
    description: "A barn animal that produces Goat Milk every other day. Must be milked with a Milk Pail.",
    building: "Big Barn",
    purchasePrice: 2e3,
    sellPrice: 4e3,
    daysToMature: 5,
    daysToProduce: 2,
    harvestMethod: "tool",
    harvestTool: "Milk Pail",
    produce: {
      id: "436",
      name: "Goat Milk",
      sellPrice: 225,
      image: "images/animals/produce/Goat Milk.png"
    },
    deluxeProduce: {
      id: "438",
      name: "Large Goat Milk",
      sellPrice: 345,
      image: "images/animals/produce/Large Goat Milk.png"
    },
    image: "images/animals/Goat.png"
  },
  {
    type: "farm-animal",
    id: "sheep",
    name: "Sheep",
    description: "A barn animal that grows a fleece every three days. Must be sheared with Shears. Very friendly sheep grow wool faster.",
    building: "Deluxe Barn",
    purchasePrice: 4e3,
    sellPrice: 8e3,
    daysToMature: 4,
    daysToProduce: 3,
    harvestMethod: "tool",
    harvestTool: "Shears",
    produce: {
      id: "440",
      name: "Wool",
      sellPrice: 340,
      image: "images/animals/produce/Wool.png"
    },
    deluxeProduce: null,
    image: "images/animals/Sheep.png"
  },
  {
    type: "farm-animal",
    id: "pig",
    name: "Pig",
    description: "Forages for Truffles outside each day in clear weather. Cannot produce in winter.",
    building: "Deluxe Barn",
    purchasePrice: 8e3,
    sellPrice: 16e3,
    daysToMature: 10,
    daysToProduce: 1,
    harvestMethod: "dig",
    harvestTool: null,
    produce: {
      id: "430",
      name: "Truffle",
      sellPrice: 625,
      image: "images/animals/produce/Truffle.png"
    },
    deluxeProduce: null,
    image: "images/animals/Pig.png"
  },
  {
    type: "farm-animal",
    id: "ostrich",
    name: "Ostrich",
    description: "A large bird hatched from an Ostrich Egg found on Ginger Island. Produces a massive egg every seven days.",
    building: "Barn",
    purchasePrice: null,
    sellPrice: 16e3,
    daysToMature: 7,
    daysToProduce: 7,
    harvestMethod: "drop",
    harvestTool: null,
    produce: {
      id: "289",
      name: "Ostrich Egg",
      sellPrice: 600,
      image: "images/animals/produce/Ostrich Egg.png"
    },
    deluxeProduce: null,
    image: "images/animals/Ostrich.png"
  }
];

// src/modules/animals/index.ts
var animalData = animals_default;
function isPet(animal) {
  return animal.type === "pet";
}
function isFarmAnimal(animal) {
  return animal.type === "farm-animal";
}
var AnimalQuery = class _AnimalQuery extends QueryBase {
  constructor(data = animalData) {
    super(data);
  }
  /** Filter to pets only. */
  pets() {
    return new _AnimalQuery(this.data.filter(isPet));
  }
  /** Filter to a specific pet breed by name (case-insensitive). Only matches pets. */
  byPetName(name) {
    return new _AnimalQuery(
      this.data.filter((a) => isPet(a) && a.name.toLowerCase() === name.toLowerCase())
    );
  }
  /** Filter to farm animals only. */
  farmAnimals() {
    return new _AnimalQuery(this.data.filter(isFarmAnimal));
  }
  /** Filter farm animals by their required building (e.g. `'Coop'`, `'Barn'`). */
  byBuilding(building) {
    return new _AnimalQuery(
      this.data.filter(
        (a) => isFarmAnimal(a) && a.building.toLowerCase() === building.toLowerCase()
      )
    );
  }
  /** Filter farm animals by harvest method (`'tool'` or `'auto'`). */
  byHarvestMethod(method) {
    return new _AnimalQuery(this.data.filter((a) => isFarmAnimal(a) && a.harvestMethod === method));
  }
  /** Filter to farm animals with a purchase price (excludes animals obtained by other means). */
  purchasable() {
    return new _AnimalQuery(this.data.filter((a) => isFarmAnimal(a) && a.purchasePrice !== null));
  }
};
function animals(source = animalData) {
  return new AnimalQuery(source);
}

// data/bundles.json
var bundles_default = [
  {
    id: "Crafts Room/13",
    type: "items",
    name: "Spring Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Spring Foraging Bundle.png",
    items: [
      {
        name: "Wild Horseradish",
        quantity: 1
      },
      {
        name: "Daffodil",
        quantity: 1
      },
      {
        name: "Leek",
        quantity: 1
      },
      {
        name: "Dandelion",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Spring Seeds",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/13-remix",
    type: "items",
    name: "Spring Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Spring Foraging Bundle.png",
    items: [
      {
        name: "Wild Horseradish",
        quantity: 1
      },
      {
        name: "Daffodil",
        quantity: 1
      },
      {
        name: "Leek",
        quantity: 1
      },
      {
        name: "Dandelion",
        quantity: 1
      },
      {
        name: "Spring Onion",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: true,
    numItemsAvailable: 4,
    reward: {
      name: "Spring Seeds",
      quantity: 30
    },
    remixBundle: true
  },
  {
    id: "Crafts Room/14",
    type: "items",
    name: "Summer Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Summer Foraging Bundle.png",
    items: [
      {
        name: "Grape",
        quantity: 1
      },
      {
        name: "Spice Berry",
        quantity: 1
      },
      {
        name: "Sweet Pea",
        quantity: 1
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Summer Seeds",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/15",
    type: "items",
    name: "Fall Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Fall Foraging Bundle.png",
    items: [
      {
        name: "Common Mushroom",
        quantity: 1
      },
      {
        name: "Wild Plum",
        quantity: 1
      },
      {
        name: "Hazelnut",
        quantity: 1
      },
      {
        name: "Blackberry",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Fall Seeds",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/16",
    type: "items",
    name: "Winter Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Winter Foraging Bundle.png",
    items: [
      {
        name: "Winter Root",
        quantity: 1
      },
      {
        name: "Crystal Fruit",
        quantity: 1
      },
      {
        name: "Snow Yam",
        quantity: 1
      },
      {
        name: "Crocus",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Winter Seeds",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/16-remix",
    type: "items",
    name: "Winter Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Winter Foraging Bundle.png",
    items: [
      {
        name: "Winter Root",
        quantity: 1
      },
      {
        name: "Crystal Fruit",
        quantity: 1
      },
      {
        name: "Snow Yam",
        quantity: 1
      },
      {
        name: "Crocus",
        quantity: 1
      },
      {
        name: "Holly",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: true,
    numItemsAvailable: 4,
    reward: {
      name: "Winter Seeds",
      quantity: 30
    },
    remixBundle: true
  },
  {
    id: "Crafts Room/17",
    type: "items",
    name: "Construction Bundle",
    room: "crafts-room",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Construction Bundle.png",
    items: [
      {
        name: "Wood",
        quantity: 99
      },
      {
        name: "Stone",
        quantity: 99
      },
      {
        name: "Hardwood",
        quantity: 10
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Charcoal Kiln",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/sticky-bundle",
    type: "items",
    name: "Sticky Bundle",
    room: "crafts-room",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Sticky Bundle.png",
    items: [
      {
        name: "Sap",
        quantity: 500
      }
    ],
    itemsRequired: 1,
    itemsChosenRandom: false,
    numItemsAvailable: 1,
    reward: {
      name: "Charcoal Kiln",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Crafts Room/forest-bundle",
    type: "items",
    name: "Forest Bundle",
    room: "crafts-room",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Forest Bundle.png",
    items: [
      {
        name: "Moss",
        quantity: 10
      },
      {
        name: "Fiber",
        quantity: 200
      },
      {
        name: "Acorn",
        quantity: 10
      },
      {
        name: "Maple Seed",
        quantity: 10
      }
    ],
    itemsRequired: 1,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Charcoal Kiln",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Crafts Room/19",
    type: "items",
    name: "Exotic Foraging Bundle",
    room: "crafts-room",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Exotic Foraging Bundle.png",
    items: [
      {
        name: "Coconut",
        quantity: 1
      },
      {
        name: "Cactus Fruit",
        quantity: 1
      },
      {
        name: "Cave Carrot",
        quantity: 1
      },
      {
        name: "Red Mushroom",
        quantity: 1
      },
      {
        name: "Purple Mushroom",
        quantity: 1
      },
      {
        name: "Maple Syrup",
        quantity: 1
      },
      {
        name: "Oak Resin",
        quantity: 1
      },
      {
        name: "Pine Tar",
        quantity: 1
      },
      {
        name: "Morel",
        quantity: 1
      }
    ],
    itemsRequired: 5,
    itemsChosenRandom: false,
    numItemsAvailable: 9,
    reward: {
      name: "Autumn's Bounty",
      quantity: 5
    },
    remixBundle: false
  },
  {
    id: "Crafts Room/wild-medicine-bundle",
    type: "items",
    name: "Wild Medicine Bundle",
    room: "crafts-room",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Wild Medicine Bundle.png",
    items: [
      {
        name: "Purple Mushroom",
        quantity: 5
      },
      {
        name: "Fiddlehead Fern",
        quantity: 5
      },
      {
        name: "White Algae",
        quantity: 5
      },
      {
        name: "Hops",
        quantity: 5
      }
    ],
    itemsRequired: 1,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Cookout Kit",
      quantity: 2
    },
    remixBundle: true
  },
  {
    id: "Pantry/0",
    type: "items",
    name: "Spring Crops Bundle",
    room: "pantry",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Spring Crops Bundle.png",
    items: [
      {
        name: "Parsnip",
        quantity: 1
      },
      {
        name: "Green Bean",
        quantity: 1
      },
      {
        name: "Cauliflower",
        quantity: 1
      },
      {
        name: "Potato",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Speed-Gro",
      quantity: 20
    },
    remixBundle: false
  },
  {
    id: "Pantry/0-remix",
    type: "items",
    name: "Spring Crops Bundle",
    room: "pantry",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Spring Crops Bundle.png",
    items: [
      {
        name: "Parsnip",
        quantity: 1
      },
      {
        name: "Green Bean",
        quantity: 1
      },
      {
        name: "Cauliflower",
        quantity: 1
      },
      {
        name: "Potato",
        quantity: 1
      },
      {
        name: "Kale",
        quantity: 1
      },
      {
        name: "Carrot",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: true,
    numItemsAvailable: 4,
    reward: {
      name: "Speed-Gro",
      quantity: 20
    },
    remixBundle: true
  },
  {
    id: "Pantry/1",
    type: "items",
    name: "Summer Crops Bundle",
    room: "pantry",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Summer Crops Bundle.png",
    items: [
      {
        name: "Tomato",
        quantity: 1
      },
      {
        name: "Hot Pepper",
        quantity: 1
      },
      {
        name: "Blueberry",
        quantity: 1
      },
      {
        name: "Melon",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Quality Sprinkler",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Pantry/1-remix",
    type: "items",
    name: "Summer Crops Bundle",
    room: "pantry",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Summer Crops Bundle.png",
    items: [
      {
        name: "Tomato",
        quantity: 1
      },
      {
        name: "Hot Pepper",
        quantity: 1
      },
      {
        name: "Blueberry",
        quantity: 1
      },
      {
        name: "Melon",
        quantity: 1
      },
      {
        name: "Summer Squash",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: true,
    numItemsAvailable: 4,
    reward: {
      name: "Quality Sprinkler",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/2",
    type: "items",
    name: "Fall Crops Bundle",
    room: "pantry",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Fall Crops Bundle.png",
    items: [
      {
        name: "Corn",
        quantity: 1
      },
      {
        name: "Eggplant",
        quantity: 1
      },
      {
        name: "Pumpkin",
        quantity: 1
      },
      {
        name: "Yam",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Bee House",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Pantry/2-remix",
    type: "items",
    name: "Fall Crops Bundle",
    room: "pantry",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Fall Crops Bundle.png",
    items: [
      {
        name: "Corn",
        quantity: 1
      },
      {
        name: "Eggplant",
        quantity: 1
      },
      {
        name: "Pumpkin",
        quantity: 1
      },
      {
        name: "Yam",
        quantity: 1
      },
      {
        name: "Broccoli",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: true,
    numItemsAvailable: 4,
    reward: {
      name: "Bee House",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/3",
    type: "items",
    name: "Quality Crops Bundle",
    room: "pantry",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Quality Crops Bundle.png",
    items: [
      {
        name: "Parsnip",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Melon",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Pumpkin",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Corn",
        quantity: 5,
        quality: "gold"
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Preserves Jar",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Pantry/3-remix",
    type: "items",
    name: "Quality Crops Bundle",
    room: "pantry",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Quality Crops Bundle.png",
    items: [
      {
        name: "Parsnip",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Green Bean",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Potato",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Cauliflower",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Melon",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Blueberry",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Hot Pepper",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Pumpkin",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Yam",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Eggplant",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Corn",
        quantity: 5,
        quality: "gold"
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: true,
    numItemsAvailable: 11,
    reward: {
      name: "Preserves Jar",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/rare-crop-bundle",
    type: "items",
    name: "Rare Crops Bundle",
    room: "pantry",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Rare Crops Bundle.png",
    items: [
      {
        name: "Ancient Fruit",
        quantity: 1
      },
      {
        name: "Sweet Gem Berry",
        quantity: 1
      }
    ],
    itemsRequired: 1,
    itemsChosenRandom: false,
    numItemsAvailable: 2,
    reward: {
      name: "Preserves Jar",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/4",
    type: "items",
    name: "Animal Bundle",
    room: "pantry",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Animal Bundle.png",
    items: [
      {
        name: "Large Milk",
        quantity: 1
      },
      {
        name: "Large Egg (Brown)",
        quantity: 1
      },
      {
        name: "Large Egg",
        quantity: 1
      },
      {
        name: "Large Goat Milk",
        quantity: 1
      },
      {
        name: "Wool",
        quantity: 1
      },
      {
        name: "Duck Egg",
        quantity: 1
      }
    ],
    itemsRequired: 5,
    itemsChosenRandom: false,
    numItemsAvailable: 6,
    reward: {
      name: "Cheese Press",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Pantry/fish-farmers-bundle",
    type: "items",
    name: "Fish Farmer's Bundle",
    room: "pantry",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Fish Farmer's Bundle.png",
    items: [
      {
        name: "Roe",
        quantity: 15
      },
      {
        name: "Aged Roe",
        quantity: 15
      },
      {
        name: "Squid Ink",
        quantity: 1
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Worm Bin",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/garden-bundle",
    type: "items",
    name: "Garden Bundle",
    room: "pantry",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Garden Bundle.png",
    items: [
      {
        name: "Tulip",
        quantity: 1
      },
      {
        name: "Blue Jazz",
        quantity: 1
      },
      {
        name: "Summer Spangle",
        quantity: 1
      },
      {
        name: "Sunflower",
        quantity: 1
      },
      {
        name: "Fairy Rose",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 5,
    reward: {
      name: "Quality Sprinkler",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Pantry/5",
    type: "items",
    name: "Artisan Bundle",
    room: "pantry",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Artisan Bundle.png",
    items: [
      {
        name: "Truffle Oil",
        quantity: 1
      },
      {
        name: "Cloth",
        quantity: 1
      },
      {
        name: "Goat Cheese",
        quantity: 1
      },
      {
        name: "Cheese",
        quantity: 1
      },
      {
        name: "Honey",
        quantity: 1
      },
      {
        name: "Jelly",
        quantity: 1
      },
      {
        name: "Apple",
        quantity: 1
      },
      {
        name: "Apricot",
        quantity: 1
      },
      {
        name: "Orange",
        quantity: 1
      },
      {
        name: "Peach",
        quantity: 1
      },
      {
        name: "Pomegranate",
        quantity: 1
      },
      {
        name: "Cherry",
        quantity: 1
      }
    ],
    itemsRequired: 6,
    itemsChosenRandom: false,
    numItemsAvailable: 12,
    reward: {
      name: "Keg",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Pantry/brewers-bundle",
    type: "items",
    name: "Brewer's Bundle",
    room: "pantry",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Brewer's Bundle.png",
    items: [
      {
        name: "Mead",
        quantity: 1
      },
      {
        name: "Pale Ale",
        quantity: 1
      },
      {
        name: "Wine",
        quantity: 1
      },
      {
        name: "Juice",
        quantity: 1
      },
      {
        name: "Green Tea",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 5,
    reward: {
      name: "Keg",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Fish Tank/6",
    type: "items",
    name: "River Fish Bundle",
    room: "fish-tank",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/River Fish Bundle.png",
    items: [
      {
        name: "Sunfish",
        quantity: 1
      },
      {
        name: "Catfish",
        quantity: 1
      },
      {
        name: "Shad",
        quantity: 1
      },
      {
        name: "Tiger Trout",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Deluxe Bait",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/7",
    type: "items",
    name: "Lake Fish Bundle",
    room: "fish-tank",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Lake Fish Bundle.png",
    items: [
      {
        name: "Largemouth Bass",
        quantity: 1
      },
      {
        name: "Carp",
        quantity: 1
      },
      {
        name: "Bullhead",
        quantity: 1
      },
      {
        name: "Sturgeon",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    reward: {
      name: "Dressed Spinner",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/8",
    type: "items",
    name: "Ocean Fish Bundle",
    room: "fish-tank",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Ocean Fish Bundle.png",
    items: [
      {
        name: "Sardine",
        quantity: 1
      },
      {
        name: "Tuna",
        quantity: 1
      },
      {
        name: "Red Snapper",
        quantity: 1
      },
      {
        name: "Tilapia",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Warp Totem: Beach",
      quantity: 5
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/9",
    type: "items",
    name: "Night Fishing Bundle",
    room: "fish-tank",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Night Fishing Bundle.png",
    items: [
      {
        name: "Walleye",
        quantity: 1
      },
      {
        name: "Bream",
        quantity: 1
      },
      {
        name: "Eel",
        quantity: 1
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Glow Ring",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/11",
    type: "items",
    name: "Crab Pot Bundle",
    room: "fish-tank",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Crab Pot Bundle.png",
    items: [
      {
        name: "Lobster",
        quantity: 1
      },
      {
        name: "Crayfish",
        quantity: 1
      },
      {
        name: "Crab",
        quantity: 1
      },
      {
        name: "Cockle",
        quantity: 1
      },
      {
        name: "Mussel",
        quantity: 1
      },
      {
        name: "Shrimp",
        quantity: 1
      },
      {
        name: "Snail",
        quantity: 1
      },
      {
        name: "Periwinkle",
        quantity: 1
      },
      {
        name: "Oyster",
        quantity: 1
      },
      {
        name: "Clam",
        quantity: 1
      }
    ],
    itemsRequired: 5,
    itemsChosenRandom: false,
    numItemsAvailable: 10,
    reward: {
      name: "Crab Pot",
      quantity: 3
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/10",
    type: "items",
    name: "Specialty Fish Bundle",
    room: "fish-tank",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Specialty Fish Bundle.png",
    items: [
      {
        name: "Pufferfish",
        quantity: 1
      },
      {
        name: "Ghostfish",
        quantity: 1
      },
      {
        name: "Sandfish",
        quantity: 1
      },
      {
        name: "Woodskip",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Dish O' The Sea",
      quantity: 5
    },
    remixBundle: false
  },
  {
    id: "Fish Tank/quality-fish-bundle",
    type: "items",
    name: "Quality Fish Bundle",
    room: "fish-tank",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Quality Fish Bundle.png",
    items: [
      {
        name: "Largemouth Bass",
        quantity: 1,
        quality: "gold"
      },
      {
        name: "Shad",
        quantity: 1,
        quality: "gold"
      },
      {
        name: "Tuna",
        quantity: 1,
        quality: "gold"
      },
      {
        name: "Walleye",
        quantity: 1,
        quality: "gold"
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Dish O' The Sea",
      quantity: 5
    },
    remixBundle: true
  },
  {
    id: "Fish Tank/master-fishers-bundle",
    type: "items",
    name: "Master Fisher's Bundle",
    room: "fish-tank",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Master Fisher's Bundle.png",
    items: [
      {
        name: "Lava Eel",
        quantity: 1
      },
      {
        name: "Scorpion Carp",
        quantity: 1
      },
      {
        name: "Octopus",
        quantity: 1
      },
      {
        name: "Blobfish",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Dish O' The Sea",
      quantity: 5
    },
    remixBundle: true
  },
  {
    id: "Boiler Room/20",
    type: "items",
    name: "Blacksmith's Bundle",
    room: "boiler-room",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Blacksmith Bundle.png",
    items: [
      {
        name: "Copper Bar",
        quantity: 1
      },
      {
        name: "Iron Bar",
        quantity: 1
      },
      {
        name: "Gold Bar",
        quantity: 1
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Furnace",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Boiler Room/21",
    type: "items",
    name: "Geologist's Bundle",
    room: "boiler-room",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Geologist's Bundle.png",
    items: [
      {
        name: "Quartz",
        quantity: 1
      },
      {
        name: "Earth Crystal",
        quantity: 1
      },
      {
        name: "Frozen Tear",
        quantity: 1
      },
      {
        name: "Fire Quartz",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Omni Geode",
      quantity: 5
    },
    remixBundle: false
  },
  {
    id: "Boiler Room/22",
    type: "items",
    name: "Adventurer's Bundle",
    room: "boiler-room",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Adventurer's Bundle.png",
    items: [
      {
        name: "Slime",
        quantity: 99
      },
      {
        name: "Bat Wing",
        quantity: 10
      },
      {
        name: "Solar Essence",
        quantity: 1
      },
      {
        name: "Void Essence",
        quantity: 1
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Small Magnet Ring",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Boiler Room/22-remix",
    type: "items",
    name: "Adventurer's Bundle",
    room: "boiler-room",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Adventurer's Bundle.png",
    items: [
      {
        name: "Slime",
        quantity: 99
      },
      {
        name: "Bat Wing",
        quantity: 10
      },
      {
        name: "Solar Essence",
        quantity: 1
      },
      {
        name: "Void Essence",
        quantity: 1
      },
      {
        name: "Bone Fragment",
        quantity: 10
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: true,
    numItemsAvailable: 5,
    reward: {
      name: "Small Magnet Ring",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Boiler Room/treasure-hunters-bundle",
    type: "items",
    name: "Treasure Hunter's Bundle",
    room: "boiler-room",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Treasure Hunter's Bundle.png",
    items: [
      {
        name: "Amethyst",
        quantity: 1
      },
      {
        name: "Aquamarine",
        quantity: 1
      },
      {
        name: "Diamond",
        quantity: 1
      },
      {
        name: "Emerald",
        quantity: 1
      },
      {
        name: "Ruby",
        quantity: 1
      },
      {
        name: "Topaz",
        quantity: 1
      }
    ],
    itemsRequired: 5,
    itemsChosenRandom: false,
    numItemsAvailable: 6,
    reward: {
      name: "Lucky Lunch",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Boiler Room/engineers-bundle",
    type: "items",
    name: "Engineer's Bundle",
    room: "boiler-room",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Engineer's Bundle.png",
    items: [
      {
        name: "Iridium Ore",
        quantity: 1
      },
      {
        name: "Battery Pack",
        quantity: 1
      },
      {
        name: "Refined Quartz",
        quantity: 5
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Furnace",
      quantity: 2
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/31",
    type: "items",
    name: "Chef's Bundle",
    room: "bulletin-board",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/Chef's Bundle.png",
    items: [
      {
        name: "Maple Syrup",
        quantity: 1
      },
      {
        name: "Fiddlehead Fern",
        quantity: 1
      },
      {
        name: "Truffle",
        quantity: 1
      },
      {
        name: "Poppy",
        quantity: 1
      },
      {
        name: "Maki Roll",
        quantity: 1
      },
      {
        name: "Fried Egg",
        quantity: 1
      }
    ],
    itemsRequired: 6,
    itemsChosenRandom: false,
    numItemsAvailable: 6,
    reward: {
      name: "Pink Cake",
      quantity: 3
    },
    remixBundle: false
  },
  {
    id: "Bulletin Board/34",
    type: "items",
    name: "Dye Bundle",
    room: "bulletin-board",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Dye Bundle.png",
    items: [
      {
        name: "Red Mushroom",
        quantity: 1
      },
      {
        name: "Sea Urchin",
        quantity: 1
      },
      {
        name: "Sunflower",
        quantity: 1
      },
      {
        name: "Duck Feather",
        quantity: 1
      },
      {
        name: "Aquamarine",
        quantity: 1
      },
      {
        name: "Red Cabbage",
        quantity: 1
      }
    ],
    itemsRequired: 6,
    itemsChosenRandom: false,
    numItemsAvailable: 6,
    reward: {
      name: "Seed Maker",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Bulletin Board/34-remix",
    type: "items",
    name: "Dye Bundle",
    room: "bulletin-board",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/Dye Bundle.png",
    items: [
      {
        name: "Red Mushroom",
        quantity: 1
      },
      {
        name: "Beet",
        quantity: 1
      },
      {
        name: "Sea Urchin",
        quantity: 1
      },
      {
        name: "Amaranth",
        quantity: 1
      },
      {
        name: "Sunflower",
        quantity: 1
      },
      {
        name: "Starfruit",
        quantity: 1
      },
      {
        name: "Duck Feather",
        quantity: 1
      },
      {
        name: "Cactus Fruit",
        quantity: 1
      },
      {
        name: "Aquamarine",
        quantity: 1
      },
      {
        name: "Blueberry",
        quantity: 1
      },
      {
        name: "Red Cabbage",
        quantity: 1
      },
      {
        name: "Iridium Bar",
        quantity: 1
      }
    ],
    itemsRequired: 6,
    itemsChosenRandom: true,
    numItemsAvailable: 6,
    reward: {
      name: "Seed Maker",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/32",
    type: "items",
    name: "Field Research Bundle",
    room: "bulletin-board",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/Field Research Bundle.png",
    items: [
      {
        name: "Purple Mushroom",
        quantity: 1
      },
      {
        name: "Nautilus Shell",
        quantity: 1
      },
      {
        name: "Chub",
        quantity: 1
      },
      {
        name: "Frozen Geode",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Recycling Machine",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Bulletin Board/35",
    type: "items",
    name: "Fodder Bundle",
    room: "bulletin-board",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/Fodder Bundle.png",
    items: [
      {
        name: "Wheat",
        quantity: 10
      },
      {
        name: "Hay",
        quantity: 10
      },
      {
        name: "Apple",
        quantity: 3
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Heater",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Bulletin Board/33",
    type: "items",
    name: "Enchanter's Bundle",
    room: "bulletin-board",
    bundleGroup: 5,
    image: "images/bundles/bundle-images/Enchanter's Bundle.png",
    items: [
      {
        name: "Oak Resin",
        quantity: 1
      },
      {
        name: "Wine",
        quantity: 1
      },
      {
        name: "Rabbit's Foot",
        quantity: 1
      },
      {
        name: "Pomegranate",
        quantity: 1
      }
    ],
    itemsRequired: 4,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Gold Bar",
      quantity: 5
    },
    remixBundle: false
  },
  {
    id: "Bulletin Board/childrens-bundle",
    type: "items",
    name: "Children's Bundle",
    room: "bulletin-board",
    bundleGroup: 6,
    image: "images/bundles/bundle-images/Children's Bundle.png",
    items: [
      {
        name: "Salmonberry",
        quantity: 10
      },
      {
        name: "Cookie",
        quantity: 1
      },
      {
        name: "Ancient Doll",
        quantity: 1
      },
      {
        name: "Ice Cream",
        quantity: 1
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Battery Pack",
      quantity: 3
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/Foragers-bundle",
    type: "items",
    name: "Forager's Bundle",
    room: "bulletin-board",
    bundleGroup: 7,
    image: "images/bundles/bundle-images/Forager's Bundle.png",
    items: [
      {
        name: "Salmonberry",
        quantity: 50
      },
      {
        name: "Blackberry",
        quantity: 50
      },
      {
        name: "Wild Plum",
        quantity: 15
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Tapper",
      quantity: 3
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/home-cooks-bundle",
    type: "items",
    name: "Home Cook's Bundle",
    room: "bulletin-board",
    bundleGroup: 8,
    image: "images/bundles/bundle-images/Home Cook's Bundle.png",
    items: [
      {
        name: "Egg",
        quantity: 10
      },
      {
        name: "Milk",
        quantity: 10
      },
      {
        name: "Wheat Flour",
        quantity: 100
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Complete Breakfast",
      quantity: 5
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/helpers-bundle",
    type: "items",
    name: "Helper's Bundle",
    room: "bulletin-board",
    bundleGroup: 9,
    image: "images/bundles/bundle-images/Helper's Bundle.png",
    items: [
      {
        name: "Prize Ticket",
        quantity: 1
      },
      {
        name: "Mystery Box",
        quantity: 5
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: false,
    numItemsAvailable: 2,
    reward: {
      name: "Stardrop Tea",
      quantity: 1
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/spirits-eve-bundle",
    type: "items",
    name: "Spirit's Eve Bundle",
    room: "bulletin-board",
    bundleGroup: 10,
    image: "images/bundles/bundle-images/Spirit's Eve Bundle.png",
    items: [
      {
        name: "Jack-O-Lantern",
        quantity: 1
      },
      {
        name: "Corn",
        quantity: 10
      },
      {
        name: "Bat Wing",
        quantity: 10
      }
    ],
    itemsRequired: 3,
    itemsChosenRandom: false,
    numItemsAvailable: 3,
    reward: {
      name: "Complete Breakfast",
      quantity: 5
    },
    remixBundle: true
  },
  {
    id: "Bulletin Board/winter-star-bundle",
    type: "items",
    name: "Winter Star Bundle",
    room: "bulletin-board",
    bundleGroup: 11,
    image: "images/bundles/bundle-images/Winter Star Bundle.png",
    items: [
      {
        name: "Holly",
        quantity: 5
      },
      {
        name: "Plum Pudding",
        quantity: 1
      },
      {
        name: "Stuffing",
        quantity: 1
      },
      {
        name: "Powdermelon",
        quantity: 5
      }
    ],
    itemsRequired: 2,
    itemsChosenRandom: false,
    numItemsAvailable: 4,
    reward: {
      name: "Mystery Box",
      quantity: 3
    },
    remixBundle: true
  },
  {
    id: "Vault/23",
    type: "gold",
    name: "2,500g Bundle",
    room: "vault",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/2500 Bundle.png",
    goldCost: 2500,
    reward: {
      name: "Chocolate Cake",
      quantity: 3
    },
    remixBundle: false
  },
  {
    id: "Vault/24",
    type: "gold",
    name: "5,000g Bundle",
    room: "vault",
    bundleGroup: 2,
    image: "images/bundles/bundle-images/5000 Bundle.png",
    goldCost: 5e3,
    reward: {
      name: "Quality Fertilizer",
      quantity: 30
    },
    remixBundle: false
  },
  {
    id: "Vault/25",
    type: "gold",
    name: "10,000g Bundle",
    room: "vault",
    bundleGroup: 3,
    image: "images/bundles/bundle-images/10000 Bundle.png",
    goldCost: 1e4,
    reward: {
      name: "Lightning Rod",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Vault/26",
    type: "gold",
    name: "25,000g Bundle",
    room: "vault",
    bundleGroup: 4,
    image: "images/bundles/bundle-images/25000 Bundle.png",
    goldCost: 25e3,
    reward: {
      name: "Crystalarium",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "Abandoned Joja Mart/36",
    type: "items",
    name: "The Missing Bundle",
    room: "abandoned-joja-mart",
    bundleGroup: 1,
    image: "images/bundles/bundle-images/The Missing Bundle.png",
    items: [
      {
        name: "Wine",
        quantity: 1,
        quality: "silver"
      },
      {
        name: "Dinosaur Mayonnaise",
        quantity: 1
      },
      {
        name: "Prismatic Shard",
        quantity: 1
      },
      {
        name: "Ancient Fruit",
        quantity: 5,
        quality: "gold"
      },
      {
        name: "Void Salmon",
        quantity: 1,
        quality: "gold"
      }
    ],
    itemsRequired: 5,
    itemsChosenRandom: false,
    numItemsAvailable: 5,
    reward: {
      name: "Movie Theater",
      quantity: 1
    },
    remixBundle: false
  },
  {
    id: "minecarts-joja",
    type: "joja mart",
    name: "Minecarts",
    description: "Repairs the minecart system that runs between the bus stop, the mountains, and Pelican Town.",
    goldCost: 15e3,
    unlock: "Minecarts"
  },
  {
    id: "panning-joja",
    type: "joja mart",
    name: "Panning",
    description: "Removes the glimmering boulder near the mine entrance.",
    goldCost: 2e4,
    unlock: "Panning"
  },
  {
    id: "bridge-joja",
    type: "joja mart",
    name: "Bridge",
    description: "Repairs the broken bridge in the mountains. The broken bridge east of the Mines will be repaired, enabling access to the Quarry.",
    goldCost: 25e3,
    unlock: "Bridge"
  },
  {
    id: "greenhouse-joja",
    type: "joja mart",
    name: "Greenhouse",
    description: "Repairs the old ruins on the farm, turning it into a greenhouse.",
    goldCost: 35e3,
    unlock: "Greenhouse"
  },
  {
    id: "bus-joja",
    type: "joja mart",
    name: "Bus",
    description: "Repairs the bus that runs to the Calico Desert.",
    goldCost: 4e4,
    unlock: "Bus"
  }
];

// src/modules/bundles/index.ts
var bundlesData = bundles_default;
var BundleQuery = class _BundleQuery extends QueryBase {
  constructor(data = bundlesData) {
    super(data);
  }
  /** Filter to bundles in the given room. Joja bundles (no room) are excluded. */
  byRoom(room) {
    return new _BundleQuery(
      this.data.filter(
        (b) => b.type !== "joja mart" && b.room === room
      )
    );
  }
  /**
   * Return the active remix bundle selection: for each bundle group, returns the
   * remix variant if one exists, otherwise falls back to the non-remix entry.
   * Joja bundles are excluded.
   */
  remix() {
    const eligible = this.data.filter((b) => b.type !== "joja mart");
    const groups = /* @__PURE__ */ new Map();
    for (const b of eligible) {
      const key = `${b.room}:${b.bundleGroup}`;
      const group = groups.get(key) ?? [];
      group.push(b);
      groups.set(key, group);
    }
    const result = [];
    for (const group of groups.values()) {
      const remixEntries = group.filter((b) => b.remixBundle);
      result.push(...remixEntries.length > 0 ? remixEntries : group);
    }
    return new _BundleQuery(result);
  }
  /** Filter to standard (non-remix) Community Center bundles. Joja bundles are excluded. */
  standard() {
    return new _BundleQuery(
      this.data.filter(
        (b) => b.type !== "joja mart" && !b.remixBundle
      )
    );
  }
  /** Filter to item bundles (type `'items'`). */
  itemBundles() {
    return new _BundleQuery(this.data.filter((b) => b.type === "items"));
  }
  /** Filter to gold bundles (type `'gold'`). */
  goldBundles() {
    return new _BundleQuery(this.data.filter((b) => b.type === "gold"));
  }
  /** Filter to Joja Mart restoration bundles. */
  jojaBundles() {
    return new _BundleQuery(this.data.filter((b) => b.type === "joja mart"));
  }
  /** Sort by room order (as they appear in the Community Center), then by bundle group number within each room. */
  sortByRoomAndBundleGroup() {
    const ROOM_ORDER = [
      "crafts-room",
      "pantry",
      "fish-tank",
      "boiler-room",
      "bulletin-board",
      "vault",
      "abandoned-joja-mart"
    ];
    return new _BundleQuery(
      [...this.data].sort((a, b) => {
        const aRoom = "room" in a ? ROOM_ORDER.indexOf(a.room) : Infinity;
        const bRoom = "room" in b ? ROOM_ORDER.indexOf(b.room) : Infinity;
        if (aRoom !== bRoom) return aRoom - bRoom;
        const aGroup = "bundleGroup" in a ? a.bundleGroup : Infinity;
        const bGroup = "bundleGroup" in b ? b.bundleGroup : Infinity;
        return aGroup - bGroup;
      })
    );
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _BundleQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function bundles(source = bundlesData) {
  return new BundleQuery(source);
}

// data/artisan-goods.json
var artisan_goods_default = [
  {
    id: "340",
    name: "Honey",
    description: "It's a sweet syrup produced by bees.",
    equipment: "Bee House",
    ingredients: [
      {
        name: "Flower (nearby)",
        id: null,
        quantity: null
      }
    ],
    processingMinutes: 6400,
    processingDays: 4,
    sellPrice: 100,
    sellPriceFormula: "100g for wild honey; 2\xD7 nearby flower base price + 100 for flower honey",
    priceFormula: {
      multiplier: 2,
      addend: 100
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Honey.png"
  },
  {
    id: "348",
    name: "Wine",
    description: "Drink in moderation.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Any Fruit",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 1e4,
    processingDays: 6.25,
    sellPrice: null,
    sellPriceFormula: "3\xD7 base fruit price",
    priceFormula: {
      multiplier: 3,
      addend: 0
    },
    qualityLevels: true,
    cask: {
      silverDays: 14,
      goldDays: 28,
      iridiumDays: 56
    },
    image: "images/artisan-goods/Wine.png"
  },
  {
    id: "350",
    name: "Juice",
    description: "A sweet, nutritious beverage.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Any Vegetable",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 6e3,
    processingDays: 3.75,
    sellPrice: null,
    sellPriceFormula: "2.25\xD7 base vegetable price",
    priceFormula: {
      multiplier: 2.25,
      addend: 0
    },
    qualityLevels: true,
    cask: {
      silverDays: 14,
      goldDays: 28,
      iridiumDays: 56
    },
    image: "images/artisan-goods/Juice.png"
  },
  {
    id: "303",
    name: "Pale Ale",
    description: "Drink in moderation.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Hops",
        id: "304",
        quantity: 1
      }
    ],
    processingMinutes: 2250,
    processingDays: 1.41,
    sellPrice: 300,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: true,
    cask: {
      silverDays: 9,
      goldDays: 18,
      iridiumDays: 36
    },
    image: "images/artisan-goods/Pale Ale.png"
  },
  {
    id: "346",
    name: "Beer",
    description: "Drink in moderation.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Wheat",
        id: "262",
        quantity: 1
      }
    ],
    processingMinutes: 1750,
    processingDays: 1.09,
    sellPrice: 200,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: true,
    cask: {
      silverDays: 7,
      goldDays: 14,
      iridiumDays: 28
    },
    image: "images/artisan-goods/Beer.png"
  },
  {
    id: "459",
    name: "Mead",
    description: "Drink in moderation.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Honey",
        id: "340",
        quantity: 1
      }
    ],
    processingMinutes: 600,
    processingDays: 0.38,
    sellPrice: 300,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: true,
    cask: {
      silverDays: 7,
      goldDays: 14,
      iridiumDays: 28
    },
    image: "images/artisan-goods/Mead.png"
  },
  {
    id: "395",
    name: "Coffee",
    description: "It smells delicious. This is sure to give you a boost.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Coffee Bean",
        id: "433",
        quantity: 5
      }
    ],
    processingMinutes: 120,
    processingDays: 0.08,
    sellPrice: 150,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Coffee.png"
  },
  {
    id: "419",
    name: "Vinegar",
    description: "A fermented liquid used in cooking and preservation.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Rice",
        id: "423",
        quantity: 1
      }
    ],
    processingMinutes: 600,
    processingDays: 0.38,
    sellPrice: 100,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Vinegar.png"
  },
  {
    id: "614",
    name: "Green Tea",
    description: "A soothing beverage made from tea leaves.",
    equipment: "Keg",
    ingredients: [
      {
        name: "Tea Leaves",
        id: "815",
        quantity: 1
      }
    ],
    processingMinutes: 180,
    processingDays: 0.11,
    sellPrice: 100,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Green Tea.png"
  },
  {
    id: "344",
    name: "Jelly",
    description: "A sweet fruit preserve.",
    equipment: "Preserves Jar",
    ingredients: [
      {
        name: "Any Fruit",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 4e3,
    processingDays: 2.5,
    sellPrice: null,
    sellPriceFormula: "50 + 2\xD7 base fruit price",
    priceFormula: {
      multiplier: 2,
      addend: 50
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Jelly.png"
  },
  {
    id: "342",
    name: "Pickles",
    description: "A jar of your home-grown pickles.",
    equipment: "Preserves Jar",
    ingredients: [
      {
        name: "Any Vegetable",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 4e3,
    processingDays: 2.5,
    sellPrice: null,
    sellPriceFormula: "50 + 2\xD7 base vegetable price",
    priceFormula: {
      multiplier: 2,
      addend: 50
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Pickles.png"
  },
  {
    id: "447",
    name: "Aged Roe",
    description: "Aged to a delicate, complex flavor.",
    equipment: "Preserves Jar",
    ingredients: [
      {
        name: "Roe",
        id: "812",
        quantity: 1
      }
    ],
    processingMinutes: 4e3,
    processingDays: 2.5,
    sellPrice: null,
    sellPriceFormula: "2\xD7 base roe price",
    priceFormula: {
      multiplier: 2,
      addend: 0
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Aged Roe.png"
  },
  {
    id: "445",
    name: "Caviar",
    description: "Fish eggs prepared with care.",
    equipment: "Preserves Jar",
    ingredients: [
      {
        name: "Sturgeon Roe",
        id: "723",
        quantity: 1
      }
    ],
    processingMinutes: 6e3,
    processingDays: 3.75,
    sellPrice: 500,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Caviar.png"
  },
  {
    id: "424",
    name: "Cheese",
    description: "It's a basic necessity of life.",
    equipment: "Cheese Press",
    ingredients: [
      {
        name: "Milk",
        id: "184",
        quantity: 1
      },
      {
        name: "Large Milk",
        id: "186",
        quantity: 1
      }
    ],
    processingMinutes: 200,
    processingDays: 0.13,
    sellPrice: 230,
    sellPriceFormula: "Large Milk produces Gold quality (345g)",
    priceFormula: null,
    qualityLevels: true,
    cask: {
      silverDays: 7,
      goldDays: 14,
      iridiumDays: 28
    },
    image: "images/artisan-goods/Cheese.png"
  },
  {
    id: "426",
    name: "Goat Cheese",
    description: "Soft cheese made from goat's milk.",
    equipment: "Cheese Press",
    ingredients: [
      {
        name: "Goat Milk",
        id: "436",
        quantity: 1
      },
      {
        name: "Large Goat Milk",
        id: "438",
        quantity: 1
      }
    ],
    processingMinutes: 200,
    processingDays: 0.13,
    sellPrice: 400,
    sellPriceFormula: "Large Goat Milk produces Gold quality (600g)",
    priceFormula: null,
    qualityLevels: true,
    cask: {
      silverDays: 7,
      goldDays: 14,
      iridiumDays: 28
    },
    image: "images/artisan-goods/Goat Cheese.png"
  },
  {
    id: "428",
    name: "Cloth",
    description: "A bolt of fine wool cloth.",
    equipment: "Loom",
    ingredients: [
      {
        name: "Wool",
        id: "440",
        quantity: 1
      }
    ],
    processingMinutes: 240,
    processingDays: 0.15,
    sellPrice: 470,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Cloth.png"
  },
  {
    id: "432",
    name: "Truffle Oil",
    description: "A gourmet cooking ingredient.",
    equipment: "Oil Maker",
    ingredients: [
      {
        name: "Truffle",
        id: "430",
        quantity: 1
      }
    ],
    processingMinutes: 360,
    processingDays: 0.23,
    sellPrice: 1065,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Truffle Oil.png"
  },
  {
    id: "247",
    name: "Oil",
    description: "A multipurpose cooking oil.",
    equipment: "Oil Maker",
    ingredients: [
      {
        name: "Sunflower",
        id: "421",
        quantity: 1
      },
      {
        name: "Sunflower Seeds",
        id: "431",
        quantity: 1
      },
      {
        name: "Corn",
        id: "270",
        quantity: 1
      }
    ],
    processingMinutes: 1e3,
    processingDays: 0.63,
    sellPrice: 100,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Oil.png"
  },
  {
    id: "306",
    name: "Mayonnaise",
    description: "It's a thick, creamy sauce.",
    equipment: "Mayonnaise Machine",
    ingredients: [
      {
        name: "Egg",
        id: "176",
        quantity: 1
      },
      {
        name: "Large Egg",
        id: "174",
        quantity: 1
      },
      {
        name: "Brown Egg",
        id: "180",
        quantity: 1
      },
      {
        name: "Large Brown Egg",
        id: "182",
        quantity: 1
      },
      {
        name: "Golden Egg",
        id: "928",
        quantity: 1
      }
    ],
    processingMinutes: 180,
    processingDays: 0.11,
    sellPrice: 190,
    sellPriceFormula: "Large Egg produces 2\xD7 Mayonnaise; Golden Egg produces Gold quality",
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Mayonnaise.png"
  },
  {
    id: "307",
    name: "Duck Mayonnaise",
    description: "This mayonnaise was made with a duck egg.",
    equipment: "Mayonnaise Machine",
    ingredients: [
      {
        name: "Duck Egg",
        id: "442",
        quantity: 1
      }
    ],
    processingMinutes: 180,
    processingDays: 0.11,
    sellPrice: 375,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Duck Mayonnaise.png"
  },
  {
    id: "308",
    name: "Void Mayonnaise",
    description: "A dark, mysterious condiment.",
    equipment: "Mayonnaise Machine",
    ingredients: [
      {
        name: "Void Egg",
        id: "305",
        quantity: 1
      }
    ],
    processingMinutes: 180,
    processingDays: 0.11,
    sellPrice: 275,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Void Mayonnaise.png"
  },
  {
    id: "807",
    name: "Dinosaur Mayonnaise",
    description: "It's thick and creamy, with a distinct prehistoric smell.",
    equipment: "Mayonnaise Machine",
    ingredients: [
      {
        name: "Dinosaur Egg",
        id: "107",
        quantity: 1
      }
    ],
    processingMinutes: 180,
    processingDays: 0.11,
    sellPrice: 800,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Dinosaur Mayonnaise.png"
  },
  {
    id: "Raisins",
    name: "Raisins",
    description: "Dried grapes. They have a very sweet flavor.",
    equipment: "Dehydrator",
    ingredients: [
      {
        name: "Grape",
        id: "398",
        quantity: 5
      }
    ],
    processingMinutes: 1600,
    processingDays: 1,
    sellPrice: 600,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Raisins.png"
  },
  {
    id: "DriedFruit",
    name: "Dried Fruit",
    description: "A sweet and chewy snack.",
    equipment: "Dehydrator",
    ingredients: [
      {
        name: "Any Fruit",
        id: null,
        quantity: 5
      }
    ],
    processingMinutes: 1600,
    processingDays: 1,
    sellPrice: null,
    sellPriceFormula: "2.5\xD7 base fruit price",
    priceFormula: {
      multiplier: 2.5,
      addend: 0
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Dried Fruit.png"
  },
  {
    id: "DriedMushrooms",
    name: "Dried Mushrooms",
    description: "Concentrated mushroom flavor. Goes great in soups.",
    equipment: "Dehydrator",
    ingredients: [
      {
        name: "Any Edible Mushroom",
        id: null,
        quantity: 2
      }
    ],
    processingMinutes: 1600,
    processingDays: 1,
    sellPrice: null,
    sellPriceFormula: "2.5\xD7 base mushroom price",
    priceFormula: {
      multiplier: 2.5,
      addend: 0
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Dried Mushrooms.png"
  },
  {
    id: "SmokedFish",
    name: "Smoked Fish",
    description: "Preserving fish through smoking gives it a rich, complex flavor.",
    equipment: "Fish Smoker",
    ingredients: [
      {
        name: "Any Fish",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 50,
    processingDays: 0.03,
    sellPrice: null,
    sellPriceFormula: "2\xD7 base fish sell price",
    priceFormula: {
      multiplier: 2,
      addend: 0
    },
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Smoked Fish.png"
  },
  {
    id: "MysticSyrup",
    name: "Mystic Syrup",
    description: "A syrup with a powerful magical essence.",
    equipment: "Tapper",
    ingredients: [
      {
        name: "Mystic Tree",
        id: null,
        quantity: 1
      }
    ],
    processingMinutes: 10080,
    processingDays: 7,
    sellPrice: 1e3,
    sellPriceFormula: null,
    priceFormula: null,
    qualityLevels: false,
    cask: null,
    image: "images/artisan-goods/Mystic Syrup.png"
  }
];

// src/modules/artisan-goods/index.ts
var artisanGoodData = artisan_goods_default;
var ArtisanGoodQuery = class _ArtisanGoodQuery extends QueryBase {
  constructor(data = artisanGoodData) {
    super(data);
  }
  /** Filter by the equipment that produces the good (case-insensitive, e.g. `'Keg'`, `'Preserves Jar'`). */
  byEquipment(equipment) {
    return new _ArtisanGoodQuery(
      this.data.filter((a) => a.equipment.toLowerCase() === equipment.toLowerCase())
    );
  }
  /** Filter to goods that can be aged in a Cask (have `cask` data). */
  caskAgeable() {
    return new _ArtisanGoodQuery(this.data.filter((a) => a.cask !== null));
  }
  /** Filter to goods that can achieve Silver/Gold/Iridium quality. */
  withQualityLevels() {
    return new _ArtisanGoodQuery(this.data.filter((a) => a.qualityLevels));
  }
  /** Filter to goods with a fixed sell price (not formula-based). */
  fixedPrice() {
    return new _ArtisanGoodQuery(this.data.filter((a) => a.sellPrice !== null));
  }
  /** Filter to goods whose sell price is calculated from an ingredient (formula-based). */
  formulaPrice() {
    return new _ArtisanGoodQuery(this.data.filter((a) => a.sellPrice === null));
  }
};
function artisanGoods(source = artisanGoodData) {
  return new ArtisanGoodQuery(source);
}
function calculateArtisanPrice(good, ingredientBasePrice) {
  if (!good.priceFormula) return null;
  return applyPriceFormula(good.priceFormula, ingredientBasePrice);
}
function applyPriceFormula(formula, ingredientBasePrice) {
  return Math.floor(ingredientBasePrice * formula.multiplier) + formula.addend;
}

// src/modules/calculator/index.ts
var QUALITY_ICONS = {
  silver: "images/misc/Silver Quality.png",
  gold: "images/misc/Gold Quality.png",
  iridium: "images/misc/Iridium Quality.png"
};
var SELL_MULTIPLIERS = {
  silver: 1.25,
  gold: 1.5,
  iridium: 2
};
var ENERGY_MULTIPLIERS = {
  silver: 1.4,
  gold: 1.8,
  iridium: 2.6
};
var QUALITIES = ["silver", "gold", "iridium"];
var QualityCalculator = class {
  /**
   * Calculate sell prices for Silver, Gold, and Iridium quality.
   * Calculation: Math.floor(basePrice * multiplier)
   * Multipliers: Silver ×1.25, Gold ×1.5, Iridium ×2
   */
  sellPrices(basePrice) {
    return QUALITIES.map((quality) => ({
      quality,
      icon: QUALITY_ICONS[quality],
      value: Math.floor(basePrice * SELL_MULTIPLIERS[quality])
    }));
  }
  /**
   * Calculate energy and health for Silver, Gold, and Iridium quality.
   * The same multiplier is applied independently to each base value.
   * Multipliers: Silver ×1.4, Gold ×1.8, Iridium ×2.6
   */
  energyHealth(baseEnergy, baseHealth) {
    return QUALITIES.map((quality) => ({
      quality,
      icon: QUALITY_ICONS[quality],
      energy: Math.floor(baseEnergy * ENERGY_MULTIPLIERS[quality]),
      health: Math.floor(baseHealth * ENERGY_MULTIPLIERS[quality])
    }));
  }
};
function qualityCalculator() {
  return new QualityCalculator();
}

// data/crops.json
var crops_default = [
  {
    id: "24",
    name: "Parsnip",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 4,
    regrowDays: null,
    seedId: "472",
    seedName: "Parsnip Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 20 },
      { place: "JojaMart", price: 25 }
    ],
    seedSellPrice: 10,
    cropSellPrice: 35,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A spring tuber closely related to the carrot. It has a sweet, fresh taste.",
    image: "images/crops/parsnip/crop.png",
    seedImage: "images/crops/parsnip/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/parsnip/stage-1.png" },
      { name: "stage 2", image: "images/crops/parsnip/stage-2.png" },
      { name: "stage 3", image: "images/crops/parsnip/stage-3.png" },
      { name: "stage 4", image: "images/crops/parsnip/stage-4.png" },
      { name: "harvest", image: "images/crops/parsnip/stage-5.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 8
  },
  {
    id: "188",
    name: "Green Bean",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 10,
    regrowDays: 3,
    seedId: "473",
    seedName: "Bean Starter",
    seedBuyPrices: [
      { place: "Pierre's", price: 60 },
      { place: "JojaMart", price: 75 }
    ],
    seedSellPrice: 30,
    cropSellPrice: 40,
    harvestQuantity: { min: 1, max: 1 },
    trellis: true,
    giant: false,
    description: "A young, tender bean in the pod.",
    image: "images/crops/green-bean/crop.png",
    seedImage: "images/crops/green-bean/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/green-bean/stage-1.png" },
      { name: "stage 2", image: "images/crops/green-bean/stage-2.png" },
      { name: "stage 3", image: "images/crops/green-bean/stage-3.png" },
      { name: "stage 4", image: "images/crops/green-bean/stage-4.png" },
      { name: "stage 5", image: "images/crops/green-bean/stage-5.png" },
      { name: "harvest", image: "images/crops/green-bean/stage-6.png" },
      { name: "regrowth", image: "images/crops/green-bean/stage-7.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 9
  },
  {
    id: "190",
    name: "Cauliflower",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 12,
    regrowDays: null,
    seedId: "474",
    seedName: "Cauliflower Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 80 },
      { place: "JojaMart", price: 100 }
    ],
    seedSellPrice: 40,
    cropSellPrice: 175,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: true,
    description: "It's actually a type of flower! A massive head of tightly packed white florets.",
    image: "images/crops/cauliflower/crop.png",
    giantImage: "images/crops/cauliflower/giant.png",
    seedImage: "images/crops/cauliflower/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/cauliflower/stage-1.png" },
      { name: "stage 2", image: "images/crops/cauliflower/stage-2.png" },
      { name: "stage 3", image: "images/crops/cauliflower/stage-3.png" },
      { name: "stage 4", image: "images/crops/cauliflower/stage-4.png" },
      { name: "stage 5", image: "images/crops/cauliflower/stage-5.png" },
      { name: "harvest", image: "images/crops/cauliflower/stage-6.png" }
    ],
    energyHealth: { energy: 75, health: 33 },
    farmingXP: 23
  },
  {
    id: "192",
    name: "Potato",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 6,
    regrowDays: null,
    seedId: "475",
    seedName: "Potato Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 50 },
      { place: "JojaMart", price: 63 }
    ],
    seedSellPrice: 25,
    cropSellPrice: 80,
    harvestQuantity: { min: 1, max: 4 },
    trellis: false,
    giant: false,
    description: "A widely cultivated plant, the potato is one of the most important food crops in the world.",
    image: "images/crops/potato/crop.png",
    seedImage: "images/crops/potato/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/potato/stage-1.png" },
      { name: "stage 2", image: "images/crops/potato/stage-2.png" },
      { name: "stage 3", image: "images/crops/potato/stage-3.png" },
      { name: "stage 4", image: "images/crops/potato/stage-4.png" },
      { name: "stage 5", image: "images/crops/potato/stage-5.png" },
      { name: "harvest", image: "images/crops/potato/stage-6.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 14
  },
  {
    id: "248",
    name: "Garlic",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 4,
    regrowDays: null,
    seedId: "476",
    seedName: "Garlic Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 60,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A pungent herb used in cooking. The aroma is known to keep monsters at bay.",
    image: "images/crops/garlic/crop.png",
    seedImage: "images/crops/garlic/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/garlic/stage-1.png" },
      { name: "stage 2", image: "images/crops/garlic/stage-2.png" },
      { name: "stage 3", image: "images/crops/garlic/stage-3.png" },
      { name: "stage 4", image: "images/crops/garlic/stage-4.png" },
      { name: "harvest", image: "images/crops/garlic/stage-5.png" }
    ],
    energyHealth: { energy: 20, health: 9 },
    farmingXP: 12
  },
  {
    id: "250",
    name: "Kale",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 6,
    regrowDays: null,
    seedId: "477",
    seedName: "Kale Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 70 },
      { place: "JojaMart", price: 88 }
    ],
    seedSellPrice: 35,
    cropSellPrice: 110,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "This dark leafy green is impressively healthy and grows quickly.",
    image: "images/crops/kale/crop.png",
    seedImage: "images/crops/kale/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/kale/stage-1.png" },
      { name: "stage 2", image: "images/crops/kale/stage-2.png" },
      { name: "stage 3", image: "images/crops/kale/stage-3.png" },
      { name: "stage 4", image: "images/crops/kale/stage-4.png" },
      { name: "harvest", image: "images/crops/kale/stage-5.png" }
    ],
    energyHealth: { energy: 50, health: 22 },
    farmingXP: 17
  },
  {
    id: "252",
    name: "Rhubarb",
    category: "fruit",
    seasons: ["spring"],
    growDays: 13,
    regrowDays: null,
    seedId: "478",
    seedName: "Rhubarb Seeds",
    seedBuyPrices: [{ place: "Oasis", price: 100 }],
    seedSellPrice: 50,
    cropSellPrice: 220,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A spring crop sold at the Oasis Shop. It's tart but flavorful when cooked.",
    image: "images/crops/rhubarb/crop.png",
    seedImage: "images/crops/rhubarb/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/rhubarb/stage-1.png" },
      { name: "stage 2", image: "images/crops/rhubarb/stage-2.png" },
      { name: "stage 3", image: "images/crops/rhubarb/stage-3.png" },
      { name: "stage 4", image: "images/crops/rhubarb/stage-4.png" },
      { name: "stage 5", image: "images/crops/rhubarb/stage-5.png" },
      { name: "harvest", image: "images/crops/rhubarb/stage-6.png" }
    ],
    farmingXP: 26
  },
  {
    id: "400",
    name: "Strawberry",
    category: "fruit",
    seasons: ["spring"],
    growDays: 8,
    regrowDays: 4,
    seedId: "745",
    seedName: "Strawberry Seeds",
    seedBuyPrices: [{ place: "Egg Festival", price: 100 }],
    seedSellPrice: 0,
    cropSellPrice: 120,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "This plump, delicious berry will continue to produce after the first harvest.",
    image: "images/crops/strawberry/crop.png",
    seedImage: "images/crops/strawberry/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/strawberry/stage-1.png" },
      { name: "stage 2", image: "images/crops/strawberry/stage-2.png" },
      { name: "stage 3", image: "images/crops/strawberry/stage-3.png" },
      { name: "stage 4", image: "images/crops/strawberry/stage-4.png" },
      { name: "stage 5", image: "images/crops/strawberry/stage-5.png" },
      { name: "harvest", image: "images/crops/strawberry/stage-6.png" },
      { name: "regrowth", image: "images/crops/strawberry/stage-7.png" }
    ],
    energyHealth: { energy: 50, health: 22 },
    farmingXP: 18
  },
  {
    id: "271",
    name: "Unmilled Rice",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 8,
    regrowDays: null,
    seedId: "273",
    seedName: "Rice Shoot",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 30,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "Needs to be milled before eating. Thrives in paddy conditions near water.",
    image: "images/crops/unmilled-rice/crop.png",
    seedImage: "images/crops/unmilled-rice/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/unmilled-rice/stage-1.png" },
      { name: "stage 2", image: "images/crops/unmilled-rice/stage-2.png" },
      { name: "stage 3", image: "images/crops/unmilled-rice/stage-3.png" },
      { name: "stage 4", image: "images/crops/unmilled-rice/stage-4.png" },
      { name: "harvest", image: "images/crops/unmilled-rice/stage-5.png" }
    ],
    energyHealth: { energy: 3, health: 1 },
    farmingXP: 7
  },
  {
    id: "591",
    name: "Tulip",
    category: "flower",
    seasons: ["spring"],
    growDays: 6,
    regrowDays: null,
    seedId: "427",
    seedName: "Tulip Bulb",
    seedBuyPrices: [
      { place: "Pierre's", price: 20 },
      { place: "JojaMart", price: 25 }
    ],
    seedSellPrice: 10,
    cropSellPrice: 30,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A vivid spring flower that turns the meadow red and yellow.",
    image: "images/crops/tulip/crop.png",
    seedImage: "images/crops/tulip/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/tulip/stage-1.png" },
      { name: "stage 2", image: "images/crops/tulip/stage-2.png" },
      { name: "stage 3", image: "images/crops/tulip/stage-3.png" },
      { name: "stage 4", image: "images/crops/tulip/stage-4.png" },
      { name: "harvest", image: "images/crops/tulip/stage-5.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 7
  },
  {
    id: "597",
    name: "Blue Jazz",
    category: "flower",
    seasons: ["spring"],
    growDays: 7,
    regrowDays: null,
    seedId: "429",
    seedName: "Jazz Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 30 },
      { place: "JojaMart", price: 38 }
    ],
    seedSellPrice: 15,
    cropSellPrice: 50,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A delicate flower with a lovely blue hue.",
    image: "images/crops/blue-jazz/crop.png",
    seedImage: "images/crops/blue-jazz/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/blue-jazz/stage-1.png" },
      { name: "stage 2", image: "images/crops/blue-jazz/stage-2.png" },
      { name: "stage 3", image: "images/crops/blue-jazz/stage-3.png" },
      { name: "harvest", image: "images/crops/blue-jazz/stage-4.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 10
  },
  {
    id: "Carrot",
    name: "Carrot",
    category: "vegetable",
    seasons: ["spring"],
    growDays: 3,
    regrowDays: null,
    seedId: "CarrotSeeds",
    seedName: "Carrot Seeds",
    seedBuyPrices: [],
    seedSellPrice: 15,
    cropSellPrice: 35,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A bright orange root vegetable. Good for your eyesight.",
    image: "images/crops/carrot/crop.png",
    seedImage: "images/crops/carrot/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/carrot/stage-1.png" },
      { name: "stage 2", image: "images/crops/carrot/stage-2.png" },
      { name: "stage 3", image: "images/crops/carrot/stage-3.png" },
      { name: "harvest", image: "images/crops/carrot/stage-4.png" }
    ],
    energyHealth: { energy: 75, health: 33 },
    farmingXP: 8
  },
  {
    id: "433",
    name: "Coffee Bean",
    category: "seed",
    seasons: ["spring", "summer"],
    growDays: 10,
    regrowDays: 2,
    seedId: "433",
    seedName: "Coffee Bean",
    seedBuyPrices: [{ place: "Traveling Cart", price: 2500 }],
    seedSellPrice: 15,
    cropSellPrice: 15,
    harvestQuantity: { min: 4, max: 4 },
    trellis: false,
    giant: false,
    description: "It'll keep you buzzin'. Plant in spring or summer to harvest more beans.",
    image: "images/crops/coffee-bean/crop.png",
    seedImage: "images/crops/coffee-bean/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/coffee-bean/stage-1.png" },
      { name: "stage 2", image: "images/crops/coffee-bean/stage-2.png" },
      { name: "stage 3", image: "images/crops/coffee-bean/stage-3.png" },
      { name: "stage 4", image: "images/crops/coffee-bean/stage-4.png" },
      { name: "stage 5", image: "images/crops/coffee-bean/stage-5.png" },
      { name: "harvest", image: "images/crops/coffee-bean/stage-6.png" },
      { name: "regrowth", image: "images/crops/coffee-bean/stage-7.png" }
    ],
    farmingXP: 4
  },
  {
    id: "254",
    name: "Melon",
    category: "fruit",
    seasons: ["summer"],
    growDays: 12,
    regrowDays: null,
    seedId: "479",
    seedName: "Melon Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 80 },
      { place: "JojaMart", price: 100 }
    ],
    seedSellPrice: 40,
    cropSellPrice: 250,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: true,
    description: "A large sweet fruit that grows in summer. It's one of the most popular at festivals.",
    image: "images/crops/melon/crop.png",
    giantImage: "images/crops/melon/giant.png",
    seedImage: "images/crops/melon/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/melon/stage-1.png" },
      { name: "stage 2", image: "images/crops/melon/stage-2.png" },
      { name: "stage 3", image: "images/crops/melon/stage-3.png" },
      { name: "stage 4", image: "images/crops/melon/stage-4.png" },
      { name: "stage 5", image: "images/crops/melon/stage-5.png" },
      { name: "harvest", image: "images/crops/melon/stage-6.png" }
    ],
    energyHealth: { energy: 113, health: 50 },
    farmingXP: 27
  },
  {
    id: "256",
    name: "Tomato",
    category: "vegetable",
    seasons: ["summer"],
    growDays: 11,
    regrowDays: 4,
    seedId: "480",
    seedName: "Tomato Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 50 },
      { place: "JojaMart", price: 63 }
    ],
    seedSellPrice: 25,
    cropSellPrice: 60,
    harvestQuantity: { min: 1, max: 1 },
    trellis: true,
    giant: false,
    description: "A juicy, nutritious summer vegetable used in cooking worldwide.",
    image: "images/crops/tomato/crop.png",
    seedImage: "images/crops/tomato/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/tomato/stage-1.png" },
      { name: "stage 2", image: "images/crops/tomato/stage-2.png" },
      { name: "stage 3", image: "images/crops/tomato/stage-3.png" },
      { name: "harvest", image: "images/crops/tomato/stage-4.png" },
      { name: "regrowth", image: "images/crops/tomato/stage-5.png" }
    ],
    energyHealth: { energy: 20, health: 9 },
    farmingXP: 12
  },
  {
    id: "258",
    name: "Blueberry",
    category: "fruit",
    seasons: ["summer"],
    growDays: 13,
    regrowDays: 4,
    seedId: "481",
    seedName: "Blueberry Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 80 },
      { place: "JojaMart", price: 100 }
    ],
    seedSellPrice: 40,
    cropSellPrice: 50,
    harvestQuantity: { min: 3, max: 3 },
    trellis: false,
    giant: false,
    description: "A popular berry among the residents of Stardew Valley.",
    image: "images/crops/blueberry/crop.png",
    seedImage: "images/crops/blueberry/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/blueberry/stage-1.png" },
      { name: "stage 2", image: "images/crops/blueberry/stage-2.png" },
      { name: "stage 3", image: "images/crops/blueberry/stage-3.png" },
      { name: "stage 4", image: "images/crops/blueberry/stage-4.png" },
      { name: "stage 5", image: "images/crops/blueberry/stage-5.png" },
      { name: "harvest", image: "images/crops/blueberry/stage-6.png" },
      { name: "regrowth", image: "images/crops/blueberry/stage-7.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 10
  },
  {
    id: "260",
    name: "Hot Pepper",
    category: "fruit",
    seasons: ["summer"],
    growDays: 5,
    regrowDays: 3,
    seedId: "482",
    seedName: "Pepper Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 40,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "Fiery hot! A perfect flavoring for spicy summer dishes.",
    image: "images/crops/hot-pepper/crop.png",
    seedImage: "images/crops/hot-pepper/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/hot-pepper/stage-1.png" },
      { name: "stage 2", image: "images/crops/hot-pepper/stage-2.png" },
      { name: "stage 3", image: "images/crops/hot-pepper/stage-3.png" },
      { name: "stage 4", image: "images/crops/hot-pepper/stage-4.png" },
      { name: "stage 5", image: "images/crops/hot-pepper/stage-5.png" },
      { name: "harvest", image: "images/crops/hot-pepper/stage-6.png" },
      { name: "regrowth", image: "images/crops/hot-pepper/stage-7.png" }
    ],
    energyHealth: { energy: 13, health: 5 },
    farmingXP: 9
  },
  {
    id: "264",
    name: "Radish",
    category: "vegetable",
    seasons: ["summer"],
    growDays: 6,
    regrowDays: null,
    seedId: "484",
    seedName: "Radish Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 90,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A crisp, peppery vegetable used in many summer salads and dishes.",
    image: "images/crops/radish/crop.png",
    seedImage: "images/crops/radish/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/radish/stage-1.png" },
      { name: "stage 2", image: "images/crops/radish/stage-2.png" },
      { name: "stage 3", image: "images/crops/radish/stage-3.png" },
      { name: "stage 4", image: "images/crops/radish/stage-4.png" },
      { name: "harvest", image: "images/crops/radish/stage-5.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 15
  },
  {
    id: "266",
    name: "Red Cabbage",
    category: "vegetable",
    seasons: ["summer"],
    growDays: 9,
    regrowDays: null,
    seedId: "485",
    seedName: "Red Cabbage Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 100 },
      { place: "JojaMart", price: 125 }
    ],
    seedSellPrice: 50,
    cropSellPrice: 260,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A blushing vegetable available from Pierre's starting in year two.",
    image: "images/crops/red-cabbage/crop.png",
    seedImage: "images/crops/red-cabbage/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/red-cabbage/stage-1.png" },
      { name: "stage 2", image: "images/crops/red-cabbage/stage-2.png" },
      { name: "stage 3", image: "images/crops/red-cabbage/stage-3.png" },
      { name: "stage 4", image: "images/crops/red-cabbage/stage-4.png" },
      { name: "stage 5", image: "images/crops/red-cabbage/stage-5.png" },
      { name: "harvest", image: "images/crops/red-cabbage/stage-6.png" }
    ],
    energyHealth: { energy: 75, health: 33 },
    farmingXP: 28
  },
  {
    id: "268",
    name: "Starfruit",
    category: "fruit",
    seasons: ["summer"],
    growDays: 13,
    regrowDays: null,
    seedId: "486",
    seedName: "Starfruit Seeds",
    seedBuyPrices: [{ place: "Oasis", price: 400 }],
    seedSellPrice: 200,
    cropSellPrice: 750,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A delicious fruit that is said to be the sweetest thing you can grow.",
    image: "images/crops/starfruit/crop.png",
    seedImage: "images/crops/starfruit/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/starfruit/stage-1.png" },
      { name: "stage 2", image: "images/crops/starfruit/stage-2.png" },
      { name: "stage 3", image: "images/crops/starfruit/stage-3.png" },
      { name: "stage 4", image: "images/crops/starfruit/stage-4.png" },
      { name: "stage 5", image: "images/crops/starfruit/stage-5.png" },
      { name: "harvest", image: "images/crops/starfruit/stage-6.png" }
    ],
    energyHealth: { energy: 125, health: 56 },
    farmingXP: 43
  },
  {
    id: "304",
    name: "Hops",
    category: "vegetable",
    seasons: ["summer"],
    growDays: 11,
    regrowDays: 1,
    seedId: "302",
    seedName: "Hops Starter",
    seedBuyPrices: [
      { place: "Pierre's", price: 60 },
      { place: "JojaMart", price: 75 }
    ],
    seedSellPrice: 30,
    cropSellPrice: 25,
    harvestQuantity: { min: 1, max: 1 },
    trellis: true,
    giant: false,
    description: "The flower clusters of the hops plant are used to brew beer.",
    image: "images/crops/hops/crop.png",
    seedImage: "images/crops/hops/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/hops/stage-1.png" },
      { name: "stage 2", image: "images/crops/hops/stage-2.png" },
      { name: "stage 3", image: "images/crops/hops/stage-3.png" },
      { name: "stage 4", image: "images/crops/hops/stage-4.png" },
      { name: "stage 5", image: "images/crops/hops/stage-5.png" },
      { name: "harvest", image: "images/crops/hops/stage-6.png" },
      { name: "regrowth", image: "images/crops/hops/stage-7.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 6
  },
  {
    id: "376",
    name: "Poppy",
    category: "flower",
    seasons: ["summer"],
    growDays: 7,
    regrowDays: null,
    seedId: "453",
    seedName: "Poppy Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 100 },
      { place: "JojaMart", price: 125 }
    ],
    seedSellPrice: 50,
    cropSellPrice: 140,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "The poppy is a sweet, delicate flower with a bold and powerful flavor.",
    image: "images/crops/poppy/crop.png",
    seedImage: "images/crops/poppy/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/poppy/stage-1.png" },
      { name: "stage 2", image: "images/crops/poppy/stage-2.png" },
      { name: "stage 3", image: "images/crops/poppy/stage-3.png" },
      { name: "stage 4", image: "images/crops/poppy/stage-4.png" },
      { name: "harvest", image: "images/crops/poppy/stage-5.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 20
  },
  {
    id: "593",
    name: "Summer Spangle",
    category: "flower",
    seasons: ["summer"],
    growDays: 8,
    regrowDays: null,
    seedId: "455",
    seedName: "Spangle Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 50 },
      { place: "JojaMart", price: 63 }
    ],
    seedSellPrice: 25,
    cropSellPrice: 90,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A tropical bloom that thrives in the summer heat.",
    image: "images/crops/summer-spangle/crop.png",
    seedImage: "images/crops/summer-spangle/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/summer-spangle/stage-1.png" },
      { name: "stage 2", image: "images/crops/summer-spangle/stage-2.png" },
      { name: "stage 3", image: "images/crops/summer-spangle/stage-3.png" },
      { name: "stage 4", image: "images/crops/summer-spangle/stage-4.png" },
      { name: "harvest", image: "images/crops/summer-spangle/stage-5.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 15
  },
  {
    id: "SummerSquash",
    name: "Summer Squash",
    category: "vegetable",
    seasons: ["summer"],
    growDays: 6,
    regrowDays: 3,
    seedId: "SummerSquashSeeds",
    seedName: "Summer Squash Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 45,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A versatile summer squash that's great for cooking.",
    image: "images/crops/summer-squash/crop.png",
    seedImage: "images/crops/summer-squash/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/summer-squash/stage-1.png" },
      { name: "stage 2", image: "images/crops/summer-squash/stage-2.png" },
      { name: "stage 3", image: "images/crops/summer-squash/stage-3.png" },
      { name: "harvest", image: "images/crops/summer-squash/stage-4.png" },
      { name: "regrowth", image: "images/crops/summer-squash/stage-5.png" }
    ],
    energyHealth: { energy: 63, health: 28 },
    farmingXP: 9
  },
  {
    id: "830",
    name: "Taro Root",
    category: "vegetable",
    seasons: ["summer", "ginger island"],
    growDays: 10,
    regrowDays: null,
    seedId: "831",
    seedName: "Taro Tuber",
    seedBuyPrices: [],
    seedSellPrice: 20,
    cropSellPrice: 100,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A starchy root vegetable that grows best in wet, paddy conditions.",
    image: "images/crops/taro-root/crop.png",
    seedImage: "images/crops/taro-root/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/taro-root/stage-1.png" },
      { name: "stage 2", image: "images/crops/taro-root/stage-2.png" },
      { name: "stage 3", image: "images/crops/taro-root/stage-3.png" },
      { name: "harvest", image: "images/crops/taro-root/stage-4.png" }
    ],
    energyHealth: { energy: 38, health: 17 },
    farmingXP: 16
  },
  {
    id: "270",
    name: "Corn",
    category: "vegetable",
    seasons: ["summer", "fall"],
    growDays: 14,
    regrowDays: 4,
    seedId: "487",
    seedName: "Corn Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 150 },
      { place: "JojaMart", price: 188 }
    ],
    seedSellPrice: 75,
    cropSellPrice: 50,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A sweet and filling crop that grows in both summer and fall.",
    image: "images/crops/corn/crop.png",
    seedImage: "images/crops/corn/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/corn/stage-1.png" },
      { name: "stage 2", image: "images/crops/corn/stage-2.png" },
      { name: "stage 3", image: "images/crops/corn/stage-3.png" },
      { name: "stage 4", image: "images/crops/corn/stage-4.png" },
      { name: "stage 5", image: "images/crops/corn/stage-5.png" },
      { name: "harvest", image: "images/crops/corn/stage-6.png" },
      { name: "regrowth", image: "images/crops/corn/stage-7.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 10
  },
  {
    id: "262",
    name: "Wheat",
    category: "vegetable",
    seasons: ["summer", "fall"],
    growDays: 4,
    regrowDays: null,
    seedId: "483",
    seedName: "Wheat Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 10 },
      { place: "JojaMart", price: 13 }
    ],
    seedSellPrice: 5,
    cropSellPrice: 25,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A common grain used to make flour. Harvest with a scythe.",
    image: "images/crops/wheat/crop.png",
    seedImage: "images/crops/wheat/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/wheat/stage-1.png" },
      { name: "stage 2", image: "images/crops/wheat/stage-2.png" },
      { name: "stage 3", image: "images/crops/wheat/stage-3.png" },
      { name: "harvest", image: "images/crops/wheat/stage-4.png" }
    ],
    farmingXP: 6
  },
  {
    id: "421",
    name: "Sunflower",
    category: "flower",
    seasons: ["summer", "fall"],
    growDays: 8,
    regrowDays: null,
    seedId: "431",
    seedName: "Sunflower Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 200 },
      { place: "JojaMart", price: 250 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 80,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A giant, warming flower that also produces useful seeds.",
    image: "images/crops/sunflower/crop.png",
    seedImage: "images/crops/sunflower/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/sunflower/stage-1.png" },
      { name: "stage 2", image: "images/crops/sunflower/stage-2.png" },
      { name: "stage 3", image: "images/crops/sunflower/stage-3.png" },
      { name: "harvest", image: "images/crops/sunflower/stage-4.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 5
  },
  {
    id: "276",
    name: "Pumpkin",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 13,
    regrowDays: null,
    seedId: "490",
    seedName: "Pumpkin Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 100 },
      { place: "JojaMart", price: 125 }
    ],
    seedSellPrice: 50,
    cropSellPrice: 320,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: true,
    description: "A fall favorite, grown for its flavor and its festive orange color.",
    image: "images/crops/pumpkin/crop.png",
    giantImage: "images/crops/pumpkin/giant.png",
    seedImage: "images/crops/pumpkin/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/pumpkin/stage-1.png" },
      { name: "stage 2", image: "images/crops/pumpkin/stage-2.png" },
      { name: "stage 3", image: "images/crops/pumpkin/stage-3.png" },
      { name: "stage 4", image: "images/crops/pumpkin/stage-4.png" },
      { name: "harvest", image: "images/crops/pumpkin/stage-5.png" }
    ],
    farmingXP: 31
  },
  {
    id: "272",
    name: "Eggplant",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 5,
    regrowDays: 5,
    seedId: "488",
    seedName: "Eggplant Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 20 },
      { place: "JojaMart", price: 25 }
    ],
    seedSellPrice: 10,
    cropSellPrice: 60,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A purple vegetable most often used in cooking.",
    image: "images/crops/eggplant/crop.png",
    seedImage: "images/crops/eggplant/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/eggplant/stage-1.png" },
      { name: "stage 2", image: "images/crops/eggplant/stage-2.png" },
      { name: "stage 3", image: "images/crops/eggplant/stage-3.png" },
      { name: "harvest", image: "images/crops/eggplant/stage-4.png" },
      { name: "regrowth", image: "images/crops/eggplant/stage-5.png" }
    ],
    energyHealth: { energy: 20, health: 9 },
    farmingXP: 12
  },
  {
    id: "274",
    name: "Artichoke",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 8,
    regrowDays: null,
    seedId: "489",
    seedName: "Artichoke Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 30 },
      { place: "JojaMart", price: 38 }
    ],
    seedSellPrice: 15,
    cropSellPrice: 160,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A hearty crop that takes a while to grow, but the rewards are worth the wait.",
    image: "images/crops/artichoke/crop.png",
    seedImage: "images/crops/artichoke/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/artichoke/stage-1.png" },
      { name: "stage 2", image: "images/crops/artichoke/stage-2.png" },
      { name: "stage 3", image: "images/crops/artichoke/stage-3.png" },
      { name: "stage 4", image: "images/crops/artichoke/stage-4.png" },
      { name: "harvest", image: "images/crops/artichoke/stage-5.png" }
    ],
    energyHealth: { energy: 30, health: 13 },
    farmingXP: 22
  },
  {
    id: "300",
    name: "Amaranth",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 7,
    regrowDays: null,
    seedId: "299",
    seedName: "Amaranth Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 70 },
      { place: "JojaMart", price: 88 }
    ],
    seedSellPrice: 35,
    cropSellPrice: 150,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "This grain has been cultivated by humans for thousands of years.",
    image: "images/crops/amaranth/crop.png",
    seedImage: "images/crops/amaranth/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/amaranth/stage-1.png" },
      { name: "stage 2", image: "images/crops/amaranth/stage-2.png" },
      { name: "stage 3", image: "images/crops/amaranth/stage-3.png" },
      { name: "harvest", image: "images/crops/amaranth/stage-4.png" }
    ],
    energyHealth: { energy: 50, health: 22 },
    farmingXP: 21
  },
  {
    id: "398",
    name: "Grape",
    category: "fruit",
    seasons: ["fall"],
    growDays: 10,
    regrowDays: 3,
    seedId: "301",
    seedName: "Grape Starter",
    seedBuyPrices: [
      { place: "Pierre's", price: 60 },
      { place: "JojaMart", price: 75 }
    ],
    seedSellPrice: 30,
    cropSellPrice: 80,
    harvestQuantity: { min: 1, max: 1 },
    trellis: true,
    giant: false,
    description: "A sweet fruit that grows on a vine trellis in the fall.",
    image: "images/crops/grape/crop.png",
    seedImage: "images/crops/grape/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/grape/stage-1.png" },
      { name: "stage 2", image: "images/crops/grape/stage-2.png" },
      { name: "stage 3", image: "images/crops/grape/stage-3.png" },
      { name: "harvest", image: "images/crops/grape/stage-4.png" },
      { name: "regrowth", image: "images/crops/grape/stage-5.png" }
    ],
    energyHealth: { energy: 38, health: 17 },
    farmingXP: 14
  },
  {
    id: "282",
    name: "Cranberries",
    category: "fruit",
    seasons: ["fall"],
    growDays: 7,
    regrowDays: 5,
    seedId: "493",
    seedName: "Cranberry Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 240 },
      { place: "JojaMart", price: 300 }
    ],
    seedSellPrice: 120,
    cropSellPrice: 75,
    harvestQuantity: { min: 2, max: 2 },
    trellis: false,
    giant: false,
    description: "A sharp, tangy red berry often used in fall cooking. Each plant bears multiple fruits.",
    image: "images/crops/cranberries/crop.png",
    seedImage: "images/crops/cranberries/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/cranberries/stage-1.png" },
      { name: "stage 2", image: "images/crops/cranberries/stage-2.png" },
      { name: "stage 3", image: "images/crops/cranberries/stage-3.png" },
      { name: "harvest", image: "images/crops/cranberries/stage-4.png" },
      { name: "regrowth", image: "images/crops/cranberries/stage-5.png" }
    ],
    energyHealth: { energy: 38, health: 17 },
    farmingXP: 14
  },
  {
    id: "278",
    name: "Bok Choy",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 4,
    regrowDays: null,
    seedId: "491",
    seedName: "Bok Choy Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 50 },
      { place: "JojaMart", price: 63 }
    ],
    seedSellPrice: 25,
    cropSellPrice: 80,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A type of cabbage with a firm texture and a mild, sweet flavor.",
    image: "images/crops/bok-choy/crop.png",
    seedImage: "images/crops/bok-choy/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/bok-choy/stage-1.png" },
      { name: "stage 2", image: "images/crops/bok-choy/stage-2.png" },
      { name: "stage 3", image: "images/crops/bok-choy/stage-3.png" },
      { name: "harvest", image: "images/crops/bok-choy/stage-4.png" }
    ],
    energyHealth: { energy: 25, health: 11 },
    farmingXP: 14
  },
  {
    id: "280",
    name: "Yam",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 10,
    regrowDays: null,
    seedId: "492",
    seedName: "Yam Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 60 },
      { place: "JojaMart", price: 75 }
    ],
    seedSellPrice: 30,
    cropSellPrice: 160,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "It's a starchy yam. Looks like food...",
    image: "images/crops/yam/crop.png",
    seedImage: "images/crops/yam/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/yam/stage-1.png" },
      { name: "stage 2", image: "images/crops/yam/stage-2.png" },
      { name: "stage 3", image: "images/crops/yam/stage-3.png" },
      { name: "harvest", image: "images/crops/yam/stage-4.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 22
  },
  {
    id: "284",
    name: "Beet",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 6,
    regrowDays: null,
    seedId: "494",
    seedName: "Beet Seeds",
    seedBuyPrices: [{ place: "Oasis", price: 20 }],
    seedSellPrice: 10,
    cropSellPrice: 100,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A sweet root vegetable. Can be used at the mill to make sugar.",
    image: "images/crops/beet/crop.png",
    seedImage: "images/crops/beet/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/beet/stage-1.png" },
      { name: "stage 2", image: "images/crops/beet/stage-2.png" },
      { name: "stage 3", image: "images/crops/beet/stage-3.png" },
      { name: "harvest", image: "images/crops/beet/stage-4.png" }
    ],
    energyHealth: { energy: 30, health: 13 },
    farmingXP: 16
  },
  {
    id: "417",
    name: "Sweet Gem Berry",
    category: "special",
    seasons: ["fall"],
    growDays: 24,
    regrowDays: null,
    seedId: "347",
    seedName: "Rare Seed",
    seedBuyPrices: [{ place: "Traveling Cart", price: 1e3 }],
    seedSellPrice: 200,
    cropSellPrice: 3e3,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "The rarest of all gems in the known world. It's an extraordinary sweet fruit.",
    image: "images/crops/sweet-gem-berry/crop.png",
    seedImage: "images/crops/sweet-gem-berry/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/sweet-gem-berry/stage-1.png" },
      { name: "stage 2", image: "images/crops/sweet-gem-berry/stage-2.png" },
      { name: "stage 3", image: "images/crops/sweet-gem-berry/stage-3.png" },
      { name: "stage 4", image: "images/crops/sweet-gem-berry/stage-4.png" },
      { name: "harvest", image: "images/crops/sweet-gem-berry/stage-5.png" }
    ],
    farmingXP: 64
  },
  {
    id: "595",
    name: "Fairy Rose",
    category: "flower",
    seasons: ["fall"],
    growDays: 12,
    regrowDays: null,
    seedId: "425",
    seedName: "Fairy Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 200 },
      { place: "JojaMart", price: 250 }
    ],
    seedSellPrice: 100,
    cropSellPrice: 290,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "An extremely rare flower with a powerful, sweet perfume.",
    image: "images/crops/fairy-rose/crop.png",
    seedImage: "images/crops/fairy-rose/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/fairy-rose/stage-1.png" },
      { name: "stage 2", image: "images/crops/fairy-rose/stage-2.png" },
      { name: "stage 3", image: "images/crops/fairy-rose/stage-3.png" },
      { name: "harvest", image: "images/crops/fairy-rose/stage-4.png" }
    ],
    energyHealth: { energy: 45, health: 20 },
    farmingXP: 29
  },
  {
    id: "Broccoli",
    name: "Broccoli",
    category: "vegetable",
    seasons: ["fall"],
    growDays: 8,
    regrowDays: 4,
    seedId: "BroccoliSeeds",
    seedName: "Broccoli Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 80 },
      { place: "JojaMart", price: 100 }
    ],
    seedSellPrice: 40,
    cropSellPrice: 70,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A dark green vegetable with many densely-packed florets.",
    image: "images/crops/broccoli/crop.png",
    seedImage: "images/crops/broccoli/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/broccoli/stage-1.png" },
      { name: "stage 2", image: "images/crops/broccoli/stage-2.png" },
      { name: "stage 3", image: "images/crops/broccoli/stage-3.png" },
      { name: "stage 4", image: "images/crops/broccoli/stage-4.png" },
      { name: "harvest", image: "images/crops/broccoli/stage-5.png" },
      { name: "regrowth", image: "images/crops/broccoli/stage-6.png" }
    ],
    energyHealth: { energy: 63, health: 28 },
    farmingXP: 13
  },
  {
    id: "Powdermelon",
    name: "Powdermelon",
    category: "fruit",
    seasons: ["winter"],
    growDays: 7,
    regrowDays: null,
    seedId: "PowdermelonSeeds",
    seedName: "Powdermelon Seeds",
    seedBuyPrices: [
      { place: "Pierre's", price: 40 },
      { place: "JojaMart", price: 50 }
    ],
    seedSellPrice: 20,
    cropSellPrice: 60,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A mysterious pale melon that flourishes in winter.",
    image: "images/crops/powdermelon/crop.png",
    seedImage: "images/crops/powdermelon/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/powdermelon/stage-1.png" },
      { name: "stage 2", image: "images/crops/powdermelon/stage-2.png" },
      { name: "stage 3", image: "images/crops/powdermelon/stage-3.png" },
      { name: "stage 4", image: "images/crops/powdermelon/stage-4.png" },
      { name: "harvest", image: "images/crops/powdermelon/stage-5.png" }
    ],
    energyHealth: { energy: 63, health: 28 },
    farmingXP: 12
  },
  {
    id: "454",
    name: "Ancient Fruit",
    category: "fruit",
    seasons: ["spring", "summer", "fall"],
    growDays: 28,
    regrowDays: 7,
    seedId: "499",
    seedName: "Ancient Seeds",
    seedBuyPrices: [],
    seedSellPrice: 30,
    cropSellPrice: 550,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A very rare fruit that has survived since ancient times. It's extraordinarily sweet.",
    image: "images/crops/ancient-fruit/crop.png",
    seedImage: "images/crops/ancient-fruit/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/ancient-fruit/stage-1.png" },
      { name: "stage 2", image: "images/crops/ancient-fruit/stage-2.png" },
      { name: "stage 3", image: "images/crops/ancient-fruit/stage-3.png" },
      { name: "harvest", image: "images/crops/ancient-fruit/stage-4.png" },
      { name: "regrowth", image: "images/crops/ancient-fruit/stage-5.png" }
    ],
    farmingXP: 38
  },
  {
    id: "90",
    name: "Cactus Fruit",
    category: "fruit",
    seasons: ["spring", "summer", "fall", "winter"],
    growDays: 12,
    regrowDays: 3,
    seedId: "802",
    seedName: "Cactus Seeds",
    seedBuyPrices: [{ place: "Oasis", price: 150 }],
    seedSellPrice: 0,
    cropSellPrice: 75,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "The sweet fruit of a cactus. Grows year-round indoors or on Ginger Island.",
    image: "images/crops/cactus-fruit/crop.png",
    seedImage: "images/crops/cactus-fruit/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/cactus-fruit/stage-1.png" },
      { name: "stage 2", image: "images/crops/cactus-fruit/stage-2.png" },
      { name: "stage 3", image: "images/crops/cactus-fruit/stage-3.png" },
      { name: "stage 4", image: "images/crops/cactus-fruit/stage-4.png" },
      { name: "stage 5", image: "images/crops/cactus-fruit/stage-5.png" },
      { name: "harvest", image: "images/crops/cactus-fruit/stage-6.png" },
      { name: "regrowth", image: "images/crops/cactus-fruit/stage-7.png" }
    ],
    energyHealth: { energy: 75, health: 33 },
    farmingXP: 14
  },
  {
    id: "832",
    name: "Pineapple",
    category: "fruit",
    seasons: ["summer", "ginger island"],
    growDays: 14,
    regrowDays: 7,
    seedId: "833",
    seedName: "Pineapple Seeds",
    seedBuyPrices: [],
    seedSellPrice: 240,
    cropSellPrice: 300,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: false,
    description: "A prickly, succulent fruit found in tropical climates.",
    image: "images/crops/pineapple/crop.png",
    seedImage: "images/crops/pineapple/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/pineapple/stage-1.png" },
      { name: "stage 2", image: "images/crops/pineapple/stage-2.png" },
      { name: "stage 3", image: "images/crops/pineapple/stage-3.png" },
      { name: "harvest", image: "images/crops/pineapple/stage-4.png" },
      { name: "regrowth", image: "images/crops/pineapple/stage-5.png" }
    ],
    energyHealth: { energy: 138, health: 62 },
    farmingXP: 30
  },
  {
    id: "889",
    name: "Qi Fruit",
    category: "fruit",
    seasons: ["spring", "summer", "fall", "winter"],
    growDays: 4,
    regrowDays: null,
    seedId: "890",
    seedName: "Qi Bean",
    seedBuyPrices: [],
    seedSellPrice: 1,
    cropSellPrice: 1,
    harvestQuantity: { min: 1, max: 1 },
    trellis: false,
    giant: true,
    description: "A fruit imbued with the essence of Qi. Used to complete Qi's special orders.",
    image: "images/crops/qi-fruit/crop.png",
    giantImage: "images/crops/qi-fruit/giant.png",
    seedImage: "images/crops/qi-fruit/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/qi-fruit/stage-1.png" },
      { name: "stage 2", image: "images/crops/qi-fruit/stage-2.png" },
      { name: "stage 3", image: "images/crops/qi-fruit/stage-3.png" },
      { name: "harvest", image: "images/crops/qi-fruit/stage-4.png" }
    ],
    energyHealth: { energy: 3, health: 1 }
  },
  {
    id: "771",
    name: "Fiber",
    category: "resource",
    seasons: ["spring", "summer", "fall", "winter"],
    growDays: 7,
    regrowDays: null,
    seedId: "885",
    seedName: "Fiber Seeds",
    seedBuyPrices: [],
    seedSellPrice: 5,
    cropSellPrice: 1,
    harvestQuantity: { min: 4, max: 7 },
    trellis: false,
    giant: false,
    description: "Plant these in any season. Does not require watering. Harvest with the scythe.",
    image: "images/crops/fiber/crop.png",
    seedImage: "images/crops/fiber/seed.png",
    stages: [
      { name: "stage 1", image: "images/crops/fiber/stage-1.png" },
      { name: "stage 2", image: "images/crops/fiber/stage-2.png" },
      { name: "stage 3", image: "images/crops/fiber/stage-3.png" },
      { name: "stage 4", image: "images/crops/fiber/stage-4.png" },
      { name: "harvest", image: "images/crops/fiber/stage-5.png" }
    ]
  }
];

// src/modules/crops/index.ts
var cropData = crops_default;
var CropQuery = class _CropQuery extends QueryBase {
  constructor(data = cropData) {
    super(data);
  }
  /** Filter to crops available in the given season. */
  bySeason(season) {
    return new _CropQuery(this.data.filter((c) => c.seasons.includes(season)));
  }
  /** Filter by category string (e.g. `'Vegetable'`, `'Fruit'`). */
  byCategory(category) {
    return new _CropQuery(this.data.filter((c) => c.category === category));
  }
  /** Filter to crops whose seed is sold at the given shop (case-insensitive). */
  byShop(shop) {
    return new _CropQuery(
      this.data.filter(
        (c) => c.seedBuyPrices.some((p) => p.place.toLowerCase() === shop.toLowerCase())
      )
    );
  }
  /** Filter to crops that regrow after harvesting (have a `regrowDays` value). */
  regrowing() {
    return new _CropQuery(this.data.filter((c) => c.regrowDays !== null));
  }
  /** Filter to crops that can grow into giant crops. */
  giant() {
    return new _CropQuery(this.data.filter((c) => c.giant));
  }
  /** Filter to crops that require a trellis. */
  trellis() {
    return new _CropQuery(this.data.filter((c) => c.trellis));
  }
  /** Filter to crops available in more than one season. */
  multiSeason() {
    return new _CropQuery(this.data.filter((c) => c.seasons.length > 1));
  }
  /** Filter to crops with a variable harvest that can yield more than 1 item. */
  extraHarvest() {
    return new _CropQuery(this.data.filter((c) => c.harvestQuantity.max > 1));
  }
  /** Filter to crops whose seeds are purchasable somewhere. */
  availableInShop() {
    return new _CropQuery(this.data.filter((c) => c.seedBuyPrices.length > 0));
  }
  /** Filter to crops with energy/health values (edible when consumed). */
  eatable() {
    return new _CropQuery(this.data.filter((c) => c.energyHealth !== void 0));
  }
  /** Sort by crop sell price. Default: `'desc'` (most valuable first). */
  sortBySellPrice(order = "desc") {
    return new _CropQuery(
      [...this.data].sort(
        (a, b) => order === "desc" ? b.cropSellPrice - a.cropSellPrice : a.cropSellPrice - b.cropSellPrice
      )
    );
  }
  /** Sort by grow days. Default: `'asc'` (fastest first). */
  sortByGrowDays(order = "asc") {
    return new _CropQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.growDays - b.growDays : b.growDays - a.growDays
      )
    );
  }
};
function crops(source = cropData) {
  return new CropQuery(source);
}

// data/maps.json
var maps_default = [
  {
    id: "0",
    name: "Standard",
    description: "The most spacious farming layout with the largest contiguous tillable area. Ideal for crops and animals.",
    skills: ["Farming"],
    tillableTiles: 3427,
    features: [
      "Largest contiguous tillable area of all farm types (63 x 31 tiles)",
      "No special restrictions or bonuses"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Standard Farm Map.png",
    icon: "images/maps/icons/Standard Farm Map Icon.png"
  },
  {
    id: "1",
    name: "Riverland",
    description: "Water significantly decreases the overall farming area, but fishing is more rewarding.",
    skills: ["Fishing"],
    tillableTiles: 1578,
    features: [
      "Random bubble fishing spots appear exclusively on this farm",
      "70% town river fish, 30% forest fish",
      "Smallest farming area due to water coverage"
    ],
    startingItems: ["15 Parsnip Seeds", "Fish Smoker"],
    image: "images/maps/full-image/Riverland Farm Map.png",
    icon: "images/maps/icons/Riverland Farm Map Icon.png"
  },
  {
    id: "2",
    name: "Forest",
    description: "The border features trees and foliage resembling the Secret Woods, emphasizing resource gathering.",
    skills: ["Foraging"],
    tillableTiles: 1413,
    features: [
      "16 renewable berry bushes along the southern border",
      "8 renewable hardwood stumps in the western clearing",
      "Seasonal forage items spawn on the farm",
      "Woodskip can be caught in the farm pond"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Forest Farm Map.png",
    icon: "images/maps/icons/Forest Farm Map Icon.png"
  },
  {
    id: "3",
    name: "Hill-top",
    description: "Features a quarry for mining operations and resource extraction.",
    skills: ["Mining"],
    tillableTiles: 1648,
    features: [
      "Southwest quarry spawns stones, ores, and geodes daily",
      "Ore quality scales with mining level (copper, iron, gold, iridium)",
      "Geode types progress with mining level"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Hilltop Farm Map.png",
    icon: "images/maps/icons/Hilltop Farm Map Icon.png"
  },
  {
    id: "4",
    name: "Wilderness",
    description: "Combat-focused farm where monsters spawn at night and scale with the player's combat level.",
    skills: ["Combat"],
    tillableTiles: 2131,
    features: [
      "Monsters spawn at night and scale with combat level",
      "Iridium Golems can spawn at Combat level 9+ and drop Iridium Ore",
      "35% lake fish, 65% trash from the farm pond"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Wilderness Farm Map.png",
    icon: "images/maps/icons/Wilderness Farm Map Icon.png"
  },
  {
    id: "5",
    name: "Four Corners",
    description: "The farming area is split by cliffs into four distinct areas, each reminiscent of other farm types. Best suited for multiplayer.",
    skills: ["Multiplayer"],
    tillableTiles: 2952,
    features: [
      "Top-left: forest area with renewable hardwood stump",
      "Top-right: open standard farmland (largest quadrant)",
      "Bottom-left: pond with 50% forest fish catch rate",
      "Bottom-right: small quarry with mining nodes"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Four Corners Farm Map.png",
    icon: "images/maps/icons/Four Corners Farm Map Icon.png"
  },
  {
    id: "6",
    name: "Beach",
    description: "Offers foraging and fishing but limits farming due to sandy soil. Intended for seasoned players.",
    skills: ["Foraging", "Fishing"],
    tillableTiles: 2700,
    features: [
      "Sprinklers do not work on sandy soil (only 202 tiles are sprinkler-compatible)",
      "Supply crates occasionally wash ashore",
      "Both forest and ocean forage items spawn",
      "52.73% ocean fish, 15% seaweed, 5.1% shellfish from fishing"
    ],
    startingItems: ["15 Parsnip Seeds"],
    image: "images/maps/full-image/Beach Farm Map.png",
    icon: "images/maps/icons/Beach Farm Map Icon.png"
  },
  {
    id: "MeadowlandsFarm",
    name: "Meadowlands",
    description: "An animal-focused farm with a pre-built coop, two chickens, and special blue grass that animals love.",
    skills: ["Farming"],
    tillableTiles: 2066,
    features: [
      "Starts with a pre-built coop and two randomly-named chickens",
      "Special blue grass that animals love grows naturally",
      "40% forest pond fish, 60% trash from fishing"
    ],
    startingItems: ["15 Hay", "Coop", "2 Chickens"],
    image: "images/maps/full-image/Meadowlands Farm Map.png",
    icon: "images/maps/icons/Meadowlands Farm Map Icon.png"
  }
];

// src/modules/maps/index.ts
var mapData = maps_default;
var FarmMapQuery = class _FarmMapQuery extends QueryBase {
  constructor(data = mapData) {
    super(data);
  }
  bySkill(skill) {
    return new _FarmMapQuery(
      this.data.filter((m) => m.skills.some((s) => s.toLowerCase() === skill.toLowerCase()))
    );
  }
};
function maps(source = mapData) {
  return new FarmMapQuery(source);
}

// data/monster-loot.json
var monster_loot_default = [
  {
    id: "684",
    name: "Bug Meat",
    sellPrice: 8,
    image: "images/monsters/monster-loot/Bug Meat.png",
    droppedBy: ["bug", "grub", "cave-fly", "armored-bug", "mutant-fly", "mutant-grub"]
  },
  {
    id: "766",
    name: "Slime",
    sellPrice: 5,
    image: "images/monsters/monster-loot/Slime.png",
    droppedBy: [
      "green-slime",
      "blue-slime",
      "red-slime",
      "big-slime",
      "tiger-slime",
      "copper-slime",
      "iron-slime",
      "purple-slime"
    ]
  },
  {
    id: "767",
    name: "Bat Wing",
    sellPrice: 15,
    image: "images/monsters/monster-loot/Bat Wing.png",
    droppedBy: ["bat", "frost-bat", "lava-bat"]
  },
  {
    id: "768",
    name: "Solar Essence",
    sellPrice: 40,
    image: "images/monsters/monster-loot/Solar Essence.png",
    droppedBy: [
      "ghost",
      "squid-kid",
      "metal-head",
      "hot-head",
      "mummy",
      "iridium-bat",
      "blue-squid",
      "haunted-skull"
    ]
  },
  {
    id: "769",
    name: "Void Essence",
    sellPrice: 50,
    image: "images/monsters/monster-loot/Void Essence.png",
    droppedBy: [
      "shadow-brute",
      "shadow-shaman",
      "serpent",
      "royal-serpent",
      "spider",
      "shadow-sniper",
      "haunted-skull"
    ]
  }
];

// data/monsters.json
var monsters_default = [
  {
    id: "Green Slime",
    name: "Green Slime",
    hp: 24,
    damage: 5,
    speed: 0,
    xp: 3,
    image: "images/monsters/Green Slime.png",
    locations: ["The Mines (Floors 1-29)", "The Farm"],
    lootIds: ["766"],
    dangerous: false,
    variants: [
      {
        name: "Blue Slime",
        hp: 106,
        damage: 7,
        speed: 0,
        xp: 6,
        image: "images/monsters/Blue Slime.png",
        locations: ["The Mines (Floors 41-79)", "The Farm"],
        lootIds: ["766"],
        dangerous: false
      },
      {
        name: "Red Slime",
        hp: 205,
        damage: 16,
        speed: 0,
        xp: 10,
        image: "images/monsters/Red Slime.png",
        locations: ["The Mines (Floors 81-119)", "The Farm"],
        lootIds: ["766"],
        dangerous: false
      },
      {
        name: "Purple Slime",
        hp: 410,
        damage: 16,
        speed: 2,
        xp: 10,
        image: "images/monsters/Purple Slime.png",
        locations: ["Skull Cavern", "The Farm"],
        lootIds: ["766"],
        dangerous: false
      },
      {
        name: "Copper Slime",
        hp: 102,
        damage: 16,
        speed: 4,
        xp: 10,
        image: "images/monsters/Copper Slime.png",
        locations: ["Quarry Mine"],
        lootIds: ["766"],
        dangerous: false
      },
      {
        name: "Iron Slime",
        hp: 205,
        damage: 16,
        speed: 1,
        xp: 10,
        image: "images/monsters/Iron Slime.png",
        locations: ["Quarry Mine"],
        lootIds: ["766"],
        dangerous: false
      }
    ]
  },
  {
    id: "Big Slime",
    name: "Big Slime",
    hp: 60,
    damage: 5,
    speed: 0,
    xp: 7,
    image: "images/monsters/Big Slime.png",
    locations: ["Skull Cavern", "The Mines"],
    lootIds: ["766"],
    dangerous: false
  },
  {
    id: "Tiger Slime",
    name: "Tiger Slime",
    hp: 415,
    damage: 23,
    speed: 0,
    xp: 20,
    image: "images/monsters/Tiger Slime.png",
    locations: ["Volcano Dungeon"],
    lootIds: ["766"],
    dangerous: false
  },
  {
    id: "Bat",
    name: "Bat",
    hp: 24,
    damage: 6,
    speed: 0,
    xp: 3,
    image: "images/monsters/Bat.png",
    locations: ["The Mines (Floors 31-39)", "The Farm"],
    lootIds: ["767"],
    dangerous: false
  },
  {
    id: "Frost Bat",
    name: "Frost Bat",
    hp: 36,
    damage: 7,
    speed: 0,
    xp: 7,
    image: "images/monsters/Frost Bat.png",
    locations: ["The Mines (Floors 41-79)", "The Farm"],
    lootIds: ["767"],
    dangerous: false
  },
  {
    id: "Lava Bat",
    name: "Lava Bat",
    hp: 80,
    damage: 15,
    speed: 0,
    xp: 15,
    image: "images/monsters/Lava Bat.png",
    locations: ["The Mines (Floors 81-119)", "Skull Cavern", "The Farm"],
    lootIds: ["767"],
    dangerous: false
  },
  {
    id: "Iridium Bat",
    name: "Iridium Bat",
    hp: 300,
    damage: 30,
    speed: 0,
    xp: 22,
    image: "images/monsters/Iridium Bat.png",
    locations: ["Skull Cavern", "The Farm"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Bug",
    name: "Bug",
    hp: 1,
    damage: 8,
    speed: 0,
    xp: 1,
    image: "images/monsters/Bug.png",
    locations: ["The Mines"],
    lootIds: ["684"],
    dangerous: false,
    variants: [
      {
        name: "Armored Bug",
        hp: 1,
        damage: 8,
        speed: 2,
        xp: 1,
        image: "images/monsters/Armored Bug.png",
        locations: ["Skull Cavern"],
        lootIds: ["684"],
        dangerous: false
      }
    ]
  },
  {
    id: "Grub",
    name: "Grub",
    hp: 20,
    damage: 4,
    speed: 0,
    xp: 2,
    image: "images/monsters/Grub.png",
    locations: ["The Mines (Floors 1-29)"],
    lootIds: ["684"],
    dangerous: false,
    variants: [
      {
        name: "Mutant Grub",
        hp: 100,
        damage: 12,
        speed: 1,
        xp: 6,
        image: "images/monsters/Mutant Grub.png",
        locations: ["Mutant Bug Lair"],
        lootIds: ["684"],
        dangerous: false
      }
    ]
  },
  {
    id: "Fly",
    name: "Cave Fly",
    hp: 22,
    damage: 6,
    speed: 0,
    xp: 10,
    image: "images/monsters/Cave Fly.png",
    locations: ["The Mines (Floors 1-29)"],
    lootIds: ["684"],
    dangerous: false,
    variants: [
      {
        name: "Mutant Fly",
        hp: 66,
        damage: 12,
        speed: 2,
        xp: 10,
        image: "images/monsters/Mutant Fly.png",
        locations: ["Mutant Bug Lair"],
        lootIds: ["684"],
        dangerous: false
      }
    ]
  },
  {
    id: "Dust Spirit",
    name: "Dust Sprite",
    hp: 40,
    damage: 6,
    speed: 0,
    xp: 2,
    image: "images/monsters/Dust Sprite.png",
    locations: ["The Mines (Floors 41-79)"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Ghost",
    name: "Ghost",
    hp: 96,
    damage: 10,
    speed: 3,
    xp: 15,
    image: "images/monsters/Ghost.png",
    locations: ["The Mines (Floors 41-79)"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Carbon Ghost",
    name: "Carbon Ghost",
    hp: 190,
    damage: 25,
    speed: 3,
    xp: 20,
    image: "images/monsters/Carbon Ghost.png",
    locations: ["Skull Cavern"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Putrid Ghost",
    name: "Putrid Ghost",
    hp: 500,
    damage: 25,
    speed: 3,
    xp: 25,
    image: "images/monsters/Putrid Ghost.png",
    locations: ["Dangerous Mines", "Dangerous Skull Cavern"],
    lootIds: [],
    dangerous: true
  },
  {
    id: "Haunted Skull",
    name: "Haunted Skull",
    hp: 160,
    damage: 15,
    speed: 3,
    xp: 15,
    image: "images/monsters/Haunted Skull.png",
    locations: ["Quarry Mine", "The Mines"],
    lootIds: ["768", "769"],
    dangerous: false
  },
  {
    id: "Shadow Brute",
    name: "Shadow Brute",
    hp: 160,
    damage: 18,
    speed: 0,
    xp: 15,
    image: "images/monsters/Shadow Brute.png",
    locations: ["The Mines (Floors 81-119)", "The Farm"],
    lootIds: ["769"],
    dangerous: false
  },
  {
    id: "Shadow Shaman",
    name: "Shadow Shaman",
    hp: 80,
    damage: 17,
    speed: 0,
    xp: 15,
    image: "images/monsters/Shadow Shaman.png",
    locations: ["The Mines (Floors 81-119)", "The Farm"],
    lootIds: ["769"],
    dangerous: false
  },
  {
    id: "Shadow Sniper",
    name: "Shadow Sniper",
    hp: 300,
    damage: 18,
    speed: 0,
    xp: 20,
    image: "images/monsters/Shadow Sniper.png",
    locations: ["Dangerous Mines"],
    lootIds: ["769"],
    dangerous: true
  },
  {
    id: "Skeleton",
    name: "Skeleton",
    hp: 140,
    damage: 10,
    speed: 2,
    xp: 8,
    image: "images/monsters/Skeleton.png",
    locations: ["The Mines (Floors 41-79)", "Skull Cavern"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Skeleton Mage",
    name: "Skeleton Mage",
    hp: 60,
    damage: 5,
    speed: 2,
    xp: 8,
    image: "images/monsters/Skeleton Mage.png",
    locations: ["Dangerous Mines"],
    lootIds: [],
    dangerous: true
  },
  {
    id: "Mummy",
    name: "Mummy",
    hp: 260,
    damage: 30,
    speed: 3,
    xp: 20,
    image: "images/monsters/Mummy.png",
    locations: ["Skull Cavern"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Stone Golem",
    name: "Stone Golem",
    hp: 45,
    damage: 5,
    speed: 0,
    xp: 5,
    image: "images/monsters/Stone Golem.png",
    locations: ["The Mines (Floors 31-39)"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Wilderness Golem",
    name: "Wilderness Golem",
    hp: 30,
    damage: 5,
    speed: 0,
    xp: 5,
    image: "images/monsters/Wilderness Golem.png",
    locations: ["The Farm"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Iridium Golem",
    name: "Iridium Golem",
    hp: 30,
    damage: 5,
    speed: 0,
    xp: 5,
    image: "images/monsters/Iridium Golem.png",
    locations: ["The Farm"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Duggy",
    name: "Duggy",
    hp: 40,
    damage: 6,
    speed: 0,
    xp: 10,
    image: "images/monsters/Duggy.png",
    locations: ["The Mines (Floors 1-29)"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Magma Duggy",
    name: "Magma Duggy",
    hp: 380,
    damage: 16,
    speed: 0,
    xp: 18,
    image: "images/monsters/Magma Duggy.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Rock Crab",
    name: "Rock Crab",
    hp: 30,
    damage: 5,
    speed: 0,
    xp: 4,
    image: "images/monsters/Rock Crab.png",
    locations: ["The Mines (Floors 1-29)"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Lava Crab",
    name: "Lava Crab",
    hp: 120,
    damage: 15,
    speed: 0,
    xp: 12,
    image: "images/monsters/Lava Crab.png",
    locations: ["The Mines (Floors 81-119)"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Iridium Crab",
    name: "Iridium Crab",
    hp: 240,
    damage: 15,
    speed: 0,
    xp: 20,
    image: "images/monsters/Iridium Crab.png",
    locations: ["Skull Cavern"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Truffle Crab",
    name: "Truffle Crab",
    hp: 30,
    damage: 5,
    speed: 0,
    xp: 4,
    image: "images/monsters/Truffle Crab.png",
    locations: ["The Farm"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Squid Kid",
    name: "Squid Kid",
    hp: 1,
    damage: 18,
    speed: 0,
    xp: 15,
    image: "images/monsters/Squid Kid.png",
    locations: ["The Mines (Floors 81-119)"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Blue Squid",
    name: "Blue Squid",
    hp: 80,
    damage: 18,
    speed: 0,
    xp: 15,
    image: "images/monsters/Blue Squid.png",
    locations: ["Dangerous Mines"],
    lootIds: ["768"],
    dangerous: true
  },
  {
    id: "Metal Head",
    name: "Metal Head",
    hp: 40,
    damage: 15,
    speed: 0,
    xp: 6,
    image: "images/monsters/Metal Head.png",
    locations: ["The Mines (Floors 81-119)"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Serpent",
    name: "Serpent",
    hp: 150,
    damage: 23,
    speed: 2,
    xp: 20,
    image: "images/monsters/Serpent.png",
    locations: ["Skull Cavern", "The Farm"],
    lootIds: ["769"],
    dangerous: false
  },
  {
    id: "Royal Serpent",
    name: "Royal Serpent",
    hp: 150,
    damage: 23,
    speed: 2,
    xp: 20,
    image: "images/monsters/Royal Serpent.png",
    locations: ["Dangerous Skull Cavern"],
    lootIds: ["769"],
    dangerous: true
  },
  {
    id: "Spider",
    name: "Spider",
    hp: 200,
    damage: 15,
    speed: 0,
    xp: 15,
    image: "images/monsters/Spider.png",
    locations: ["Dangerous Mines", "Skull Cavern"],
    lootIds: ["769"],
    dangerous: true
  },
  {
    id: "Pepper Rex",
    name: "Pepper Rex",
    hp: 300,
    damage: 15,
    speed: 0,
    xp: 7,
    image: "images/monsters/Pepper Rex.png",
    locations: ["Skull Cavern"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Stick Bug",
    name: "Stick Bug",
    hp: 700,
    damage: 20,
    speed: 3,
    xp: 4,
    image: "images/monsters/Stick Bug.png",
    locations: ["Dangerous Mines"],
    lootIds: [],
    dangerous: true
  },
  {
    id: "Lava Lurk",
    name: "Lava Lurk",
    hp: 220,
    damage: 15,
    speed: 0,
    xp: 12,
    image: "images/monsters/Lava Lurk.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Hot Head",
    name: "Hot Head",
    hp: 250,
    damage: 18,
    speed: 0,
    xp: 16,
    image: "images/monsters/Hot Head.png",
    locations: ["Volcano Dungeon"],
    lootIds: ["768"],
    dangerous: false
  },
  {
    id: "Magma Sprite",
    name: "Magma Sprite",
    hp: 220,
    damage: 15,
    speed: 0,
    xp: 15,
    image: "images/monsters/Magma Sprite.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Magma Sparker",
    name: "Magma Sparker",
    hp: 310,
    damage: 15,
    speed: 0,
    xp: 17,
    image: "images/monsters/Magma Sparker.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "False Magma Cap",
    name: "False Magma Cap",
    hp: 290,
    damage: 15,
    speed: 0,
    xp: 14,
    image: "images/monsters/False Magma Cap.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  },
  {
    id: "Dwarvish Sentry",
    name: "Dwarvish Sentry",
    hp: 300,
    damage: 18,
    speed: 0,
    xp: 15,
    image: "images/monsters/Dwarvish Sentry.png",
    locations: ["Volcano Dungeon"],
    lootIds: [],
    dangerous: false
  }
];

// src/modules/monsters/index.ts
var monstersData = monsters_default;
var lootData = monster_loot_default;
var MonsterQuery = class _MonsterQuery extends QueryBase {
  constructor(data = monstersData) {
    super(data);
  }
  /** Filter to monsters that spawn in the given location (case-insensitive substring match). */
  byLocation(location) {
    const q = location.toLowerCase();
    return new _MonsterQuery(
      this.data.filter((m) => m.locations.some((l) => l.toLowerCase().includes(q)))
    );
  }
  /** Filter to monsters that drop the given loot item ID. */
  dropsLoot(lootId) {
    return new _MonsterQuery(this.data.filter((m) => m.lootIds.includes(lootId)));
  }
  /** Filter to Dangerous mode variants only. */
  dangerous() {
    return new _MonsterQuery(this.data.filter((m) => m.dangerous));
  }
  /** Filter to standard (non-Dangerous) variants only. */
  standard() {
    return new _MonsterQuery(this.data.filter((m) => !m.dangerous));
  }
  /** Sort by XP rewarded on kill. Default: `'desc'` (most XP first). */
  sortByXp(order = "desc") {
    return new _MonsterQuery(
      [...this.data].sort((a, b) => order === "desc" ? b.xp - a.xp : a.xp - b.xp)
    );
  }
  /** Sort by max HP. Default: `'desc'` (tankiest first). */
  sortByHp(order = "desc") {
    return new _MonsterQuery(
      [...this.data].sort((a, b) => order === "desc" ? b.hp - a.hp : a.hp - b.hp)
    );
  }
};
var MonsterLootQuery = class _MonsterLootQuery extends QueryBase {
  constructor(data = lootData) {
    super(data);
  }
  /** Filter to loot items dropped by the given monster ID. */
  droppedBy(monsterId) {
    return new _MonsterLootQuery(this.data.filter((l) => l.droppedBy.includes(monsterId)));
  }
};
function monsters(source = monstersData) {
  return new MonsterQuery(source);
}
function monsterLoot(source = lootData) {
  return new MonsterLootQuery(source);
}

// data/monster-slayer-goals.json
var monster_slayer_goals_default = [
  {
    id: "Slimes",
    name: "Slime",
    killTarget: 1e3,
    monsters: ["Green Slime", "Frost Jelly", "Sludge", "Tiger Slime"],
    reward: {
      name: "Slime Charmer Ring",
      itemId: "(O)520",
      image: "images/rings/Slime Charmer Ring.png"
    }
  },
  {
    id: "Shadows",
    name: "Void Spirits",
    killTarget: 150,
    monsters: ["Shadow Guy", "Shadow Shaman", "Shadow Brute", "Shadow Sniper"],
    reward: {
      name: "Savage Ring",
      itemId: "(O)523",
      image: "images/rings/Savage Ring.png"
    }
  },
  {
    id: "Bats",
    name: "Bats",
    killTarget: 200,
    monsters: ["Bat", "Frost Bat", "Lava Bat", "Iridium Bat"],
    reward: {
      name: "Vampire Ring",
      itemId: "(O)522",
      image: "images/rings/Vampire Ring.png"
    }
  },
  {
    id: "Skeletons",
    name: "Skeletons",
    killTarget: 50,
    monsters: ["Skeleton", "Skeleton Mage"],
    reward: {
      name: "Skeleton Mask",
      itemId: "(H)8",
      image: "images/hats/Skeleton Mask.png"
    }
  },
  {
    id: "Insects",
    name: "Cave Insects",
    killTarget: 80,
    monsters: ["Grub", "Fly", "Bug"],
    reward: {
      name: "Insect Head",
      itemId: "(W)13",
      image: "images/weapons/swords/Insect Head.png"
    }
  },
  {
    id: "Duggy",
    name: "Duggies",
    killTarget: 30,
    monsters: ["Duggy", "Magma Duggy"],
    reward: {
      name: "Hard Hat",
      itemId: "(H)27",
      image: "images/hats/Hard Hat.png"
    }
  },
  {
    id: "DustSpirits",
    name: "Dust Sprites",
    killTarget: 500,
    monsters: ["Dust Spirit"],
    reward: {
      name: "Burglar's Ring",
      itemId: "(O)526",
      image: "images/rings/Burglar's Ring.png"
    }
  },
  {
    id: "Crabs",
    name: "Rock Crabs",
    killTarget: 60,
    monsters: ["Rock Crab", "Lava Crab", "Iridium Crab"],
    reward: {
      name: "Crabshell Ring",
      itemId: "(O)810",
      image: "images/rings/Crabshell Ring.png"
    }
  },
  {
    id: "Mummies",
    name: "Mummies",
    killTarget: 100,
    monsters: ["Mummy"],
    reward: {
      name: "Arcane Hat",
      itemId: "(H)60",
      image: "images/hats/Arcane Hat.png"
    }
  },
  {
    id: "Dinos",
    name: "Pepper Rex",
    killTarget: 50,
    monsters: ["Pepper Rex"],
    reward: {
      name: "Knight's Helmet",
      itemId: "(H)50",
      image: "images/hats/Knight's Helmet.png"
    }
  },
  {
    id: "Serpents",
    name: "Serpents",
    killTarget: 250,
    monsters: ["Serpent", "Royal Serpent"],
    reward: {
      name: "Napalm Ring",
      itemId: "(O)811",
      image: "images/rings/Napalm Ring.png"
    }
  },
  {
    id: "FlameSpirits",
    name: "Magma Sprites",
    killTarget: 150,
    monsters: ["Magma Sprite", "Magma Sparker"],
    reward: {
      name: "Marlon's Phone Number",
      itemId: null,
      image: null
    }
  }
];

// src/modules/monster-slayer-goals/index.ts
var monsterSlayerGoalData = monster_slayer_goals_default;
var MonsterSlayerGoalQuery = class _MonsterSlayerGoalQuery extends QueryBase {
  constructor(data = monsterSlayerGoalData) {
    super(data);
  }
  /** Sort by kill target. Default: `'asc'` (easiest first). */
  sortByKillTarget(order = "asc") {
    return new _MonsterSlayerGoalQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.killTarget - b.killTarget : b.killTarget - a.killTarget
      )
    );
  }
};
function monsterSlayerGoals(source = monsterSlayerGoalData) {
  return new MonsterSlayerGoalQuery(source);
}

// data/artifacts.json
var artifacts_default = [
  {
    id: "96",
    name: "Dwarf Scroll I",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a red bow.",
    sellPrice: 1,
    locations: ["Tilling in Mines/Skull Cavern (any floor)", "Several monsters (0.5% each)"],
    donationNotes: "One of four scrolls; donating all four unlocks Dwarvish Translation Guide",
    image: "images/artifacts/Dwarf Scroll I.png"
  },
  {
    id: "97",
    name: "Dwarf Scroll II",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a green ribbon.",
    sellPrice: 1,
    locations: [
      "Tilling in Mines (floor 1-39)",
      "Ghost, Frost Bat, Dust Sprite, Blue Slime drop (0.5%)"
    ],
    donationNotes: "One of four scrolls; donating all four unlocks Dwarvish Translation Guide",
    image: "images/artifacts/Dwarf Scroll II.png"
  },
  {
    id: "98",
    name: "Dwarf Scroll III",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a blue rope.",
    sellPrice: 1,
    locations: ["Several monsters (0.5-1.5%)"],
    donationNotes: "One of four scrolls; donating all four unlocks Dwarvish Translation Guide",
    image: "images/artifacts/Dwarf Scroll III.png"
  },
  {
    id: "99",
    name: "Dwarf Scroll IV",
    description: "A yellowed scroll of parchment filled with dwarven script. This one's tied with a golden chain.",
    sellPrice: 1,
    locations: ["Most monsters (0.1%)", "Tilling in Mines (floor 80+) (0.2%)"],
    donationNotes: "One of four scrolls; donating all four unlocks Dwarvish Translation Guide",
    image: "images/artifacts/Dwarf Scroll IV.png"
  },
  {
    id: "100",
    name: "Chipped Amphora",
    description: "An ancient vessel made of ceramic material. Used to transport both dry and wet goods.",
    sellPrice: 40,
    locations: ["Town (3%)", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Chipped Amphora.png"
  },
  {
    id: "101",
    name: "Arrowhead",
    description: "A crudely fashioned point used for hunting.",
    sellPrice: 40,
    locations: ["Mountain (1.6%)", "Forest (1.6%)", "Bus Stop (1.6%)", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Arrowhead.png"
  },
  {
    id: "103",
    name: "Ancient Doll",
    description: "An ancient doll covered in grime. This doll may have been used as a toy, a decoration, or a prop in some kind of ritual.",
    sellPrice: 60,
    locations: [
      "Mountain (3%)",
      "Forest (2.4%)",
      "Bus Stop (2.4%)",
      "Town (0.8%)",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Ancient Doll.png"
  },
  {
    id: "104",
    name: "Elvish Jewelry",
    description: "Dirty but still beautiful. On the side is a flowing script thought by some to be the ancient language of the elves.",
    sellPrice: 200,
    locations: ["Forest (0.8%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Elvish Jewelry.png"
  },
  {
    id: "105",
    name: "Chewing Stick",
    description: "Ancient people chewed on these to keep their teeth clean.",
    sellPrice: 50,
    locations: [
      "Mountain (1.5%)",
      "Forest (1.5%)",
      "Town (0.8%)",
      "Fishing Treasure Chest",
      "Duggy drop (2%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Chewing Stick.png"
  },
  {
    id: "106",
    name: "Ornamental Fan",
    description: "This exquisite fan most likely belonged to a noblewoman. Historians believe that the valley was a popular sixth-era vacation spot for the wealthy.",
    sellPrice: 300,
    locations: [
      "Beach (1.6%)",
      "Forest (0.7%)",
      "Town (0.6%)",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Ornamental Fan.png"
  },
  {
    id: "107",
    name: "Dinosaur Egg",
    description: "A giant dino egg... The entire shell is still intact!",
    sellPrice: 350,
    locations: [
      "Mountain (0.6%)",
      "Fishing Treasure Chest",
      "Prehistoric floors in Skull Cavern",
      "Pepper Rex drop (10%)"
    ],
    donationNotes: "Can be hatched in an Incubator to obtain a Dinosaur",
    image: "images/animals/produce/Dinosaur Egg.png"
  },
  {
    id: "108",
    name: "Rare Disc",
    description: "A heavy black disc studded with peculiar red stones. When you hold it, you're overwhelmed with a feeling of dread.",
    sellPrice: 300,
    locations: [
      "Fishing Treasure Chest",
      "Most Bats (0.1%)",
      "Shadow Brute, Shadow Shaman, Spider drop (0.3%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Rare Disc.png"
  },
  {
    id: "109",
    name: "Ancient Sword",
    description: "It's the remains of an ancient sword. Most of the blade has turned to rust, but the hilt is very finely crafted.",
    sellPrice: 100,
    locations: [
      "Forest (0.7%)",
      "Mountain (0.6%)",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Ancient Sword.png"
  },
  {
    id: "110",
    name: "Rusty Spoon",
    description: "A plain old spoon, probably ten years old. Not very interesting.",
    sellPrice: 25,
    locations: [
      "Town (4-11%)",
      "Fishing Treasure Chest",
      "Tilling in Mines/Skull Cavern",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Rusty Spoon.png"
  },
  {
    id: "111",
    name: "Rusty Spur",
    description: "An old spur that was once attached to a cowboy's boot. People must have been raising animals in this area for many generations.",
    sellPrice: 25,
    locations: ["Farm (10%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Rusty Spur.png"
  },
  {
    id: "112",
    name: "Rusty Cog",
    description: "A well preserved cog that must have been part of some ancient machine. This could be dwarven technology.",
    sellPrice: 25,
    locations: [
      "Mountain (4%)",
      "Tilling in Mines/Skull Cavern",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Rusty Cog.png"
  },
  {
    id: "113",
    name: "Chicken Statue",
    description: "It's a statue of a chicken on a bronze base. The ancient people of this area must have been very fond of chickens.",
    sellPrice: 50,
    locations: ["Farm (9%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Chicken Statue.png"
  },
  {
    id: "114",
    name: "Ancient Seed",
    description: "It's a dry old seed from some ancient plant. By all appearances it's long since dead...",
    sellPrice: 5,
    locations: [
      "Forest (0.7%)",
      "Mountain (0.7%)",
      "Fishing Treasure Chest",
      "Bug, Cave Fly, Grub drop (0.5%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: "Donating grants Ancient Seed crafting recipe and 1 Ancient Seeds pack",
    image: "images/artifacts/Ancient Seed.png"
  },
  {
    id: "115",
    name: "Prehistoric Tool",
    description: "Some kind of gnarly old digging tool.",
    sellPrice: 50,
    locations: [
      "Bus Stop (3%)",
      "Forest (2.1%)",
      "Mountain (2%)",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Prehistoric Tool.png"
  },
  {
    id: "116",
    name: "Dried Starfish",
    description: "A starfish from the primordial ocean. It's an unusually pristine specimen!",
    sellPrice: 40,
    locations: ["Beach (8%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Dried Starfish.png"
  },
  {
    id: "117",
    name: "Anchor",
    description: "It may have belonged to ancient pirates.",
    sellPrice: 100,
    locations: ["Beach (4%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Anchor.png"
  },
  {
    id: "118",
    name: "Glass Shards",
    description: "A mixture of glass shards smoothed by centuries of ocean surf. These could have belonged to an ancient mosaic or necklace.",
    sellPrice: 20,
    locations: ["Beach (7%)", "Fishing Treasure Chest", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Glass Shards.png"
  },
  {
    id: "119",
    name: "Bone Flute",
    description: "It's a prehistoric wind instrument carved from an animal's bone. It produces an eerie tone.",
    sellPrice: 100,
    locations: [
      "Forest (0.7%)",
      "Mountain (0.7%)",
      "Town (0.4%)",
      "Fishing Treasure Chest",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: "Donating grants a Flute Block",
    image: "images/artifacts/Bone Flute.png"
  },
  {
    id: "120",
    name: "Prehistoric Handaxe",
    description: 'One of the earliest tools employed by humans. This "crude" tool was created by striking one rock with another to form a sharp edge.',
    sellPrice: 50,
    locations: ["Bus Stop (4%)", "Mountain (3%)", "Forest (3%)", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Prehistoric Handaxe.png"
  },
  {
    id: "121",
    name: "Dwarvish Helm",
    description: "It's one of the helmets commonly worn by dwarves. The thick metal plating protects them from falling debris and stalactites.",
    sellPrice: 100,
    locations: [
      "Tilling in Mines (floor 1-39) (0.1%)",
      "Geode (3%)",
      "Omni Geode (1%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Dwarvish Helm.png"
  },
  {
    id: "122",
    name: "Dwarf Gadget",
    description: "It's a piece of the advanced technology once known to the dwarves. It's still glowing and humming, but you're unable to understand how it works.",
    sellPrice: 200,
    locations: [
      "Tilling in Mines (floor 40-79) (0.1%)",
      "Magma Geode (4%)",
      "Omni Geode (1%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Dwarf Gadget.png"
  },
  {
    id: "123",
    name: "Ancient Drum",
    description: "It's a drum made from wood and animal skin. It has a low, reverberating tone.",
    sellPrice: 100,
    locations: [
      "Bus Stop (0.7%)",
      "Forest (0.7%)",
      "Town (0.4%)",
      "Frozen Geode (3%)",
      "Omni Geode (1%)",
      "Artifact Trove (3.6%)"
    ],
    donationNotes: "Donating grants a Drum Block",
    image: "images/artifacts/Ancient Drum.png"
  },
  {
    id: "124",
    name: "Golden Mask",
    description: "A creepy golden mask probably used in an ancient magic ritual. A socket in the forehead contains a large purple gemstone.",
    sellPrice: 500,
    locations: ["Desert (3%)", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Golden Mask.png"
  },
  {
    id: "125",
    name: "Golden Relic",
    description: "It's a golden slab with hieroglyphs and pictures emblazoned onto the front.",
    sellPrice: 250,
    locations: ["Desert (6%)", "Artifact Trove (3.6%)"],
    donationNotes: null,
    image: "images/artifacts/Golden Relic.png"
  },
  {
    id: "126",
    name: "Strange Doll (green)",
    description: "???",
    sellPrice: 1e3,
    locations: ["Various dig spots (very rare)", "Fishing Treasure Chest", "Secret Note #17"],
    donationNotes: null,
    image: "images/artifacts/Strange Doll (green).png"
  },
  {
    id: "127",
    name: "Strange Doll (yellow)",
    description: "???",
    sellPrice: 1e3,
    locations: ["Various dig spots (very rare)", "Fishing Treasure Chest", "Secret Note #18"],
    donationNotes: null,
    image: "images/artifacts/Strange Doll (yellow).png"
  },
  {
    id: "579",
    name: "Prehistoric Scapula",
    description: `Commonly known as a "shoulder blade"... It's unclear what species it belonged to.`,
    sellPrice: 100,
    locations: ["Forest (3-6%)", "Town (0.7%)", "Skeleton drop (0.5%)", "Bone Nodes (0.8%)"],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Prehistoric Scapula.png"
  },
  {
    id: "580",
    name: "Prehistoric Tibia",
    description: "A thick and sturdy leg bone.",
    sellPrice: 100,
    locations: ["Railroad (4-8%)", "Forest (0.6%)", "Pepper Rex drop (30%)", "Bone Nodes (0.8%)"],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Prehistoric Tibia.png"
  },
  {
    id: "581",
    name: "Prehistoric Skull",
    description: "This is definitely a mammalian skull.",
    sellPrice: 100,
    locations: ["Mountain (0.6-6%)", "Haunted Skull drop (1.3%)", "Bone Nodes (0.8%)"],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Prehistoric Skull.png"
  },
  {
    id: "582",
    name: "Skeletal Hand",
    description: "It's a wonder all these ancient little pieces lasted so long.",
    sellPrice: 100,
    locations: [
      "Backwoods (4-8%)",
      "Beach (0.6%)",
      "Haunted Skull drop (1.3%)",
      "Bone Nodes (0.8%)"
    ],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Skeletal Hand.png"
  },
  {
    id: "583",
    name: "Prehistoric Rib",
    description: "Little gouge marks on the side suggest that this rib was someone's dinner.",
    sellPrice: 100,
    locations: ["Town (2-4%)", "Farm (0.8%)", "Pepper Rex drop (30%)", "Bone Nodes (0.8%)"],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Prehistoric Rib.png"
  },
  {
    id: "584",
    name: "Prehistoric Vertebra",
    description: "A segment of some prehistoric creature's spine.",
    sellPrice: 100,
    locations: ["Bus Stop (0.7-5%)", "Pepper Rex drop (30%)", "Bone Nodes (0.8%)"],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Prehistoric Vertebra.png"
  },
  {
    id: "585",
    name: "Skeletal Tail",
    description: "It's pretty short for a tail.",
    sellPrice: 100,
    locations: [
      "Tilling in Mines/Skull Cavern",
      "Fishing Treasure Chest (3.1-3.4%)",
      "Bone Nodes (0.8%)"
    ],
    donationNotes: "Part of the Sloth Skeleton display in the museum",
    image: "images/artifacts/Skeletal Tail.png"
  },
  {
    id: "586",
    name: "Nautilus Fossil",
    description: "This must've washed up ages ago from an ancient coral reef.",
    sellPrice: 80,
    locations: ["Beach (1.8%)", "Fishing Treasure Chest (3.1-3.4%)", "Bone Nodes (0.8%)"],
    donationNotes: null,
    image: "images/artifacts/Nautilus Fossil.png"
  },
  {
    id: "587",
    name: "Amphibian Fossil",
    description: "The relatively short hind legs suggest some kind of primordial toad.",
    sellPrice: 150,
    locations: [
      "Forest (0.6%)",
      "Mountain (0.6%)",
      "Fishing Treasure Chest (3.1-3.4%)",
      "Bone Nodes (0.8%)"
    ],
    donationNotes: null,
    image: "images/artifacts/Amphibian Fossil.png"
  },
  {
    id: "588",
    name: "Palm Fossil",
    description: "Palm Fossils are relatively common, but this happens to be a particularly well-preserved specimen.",
    sellPrice: 100,
    locations: ["Desert (7%)", "Forest (0.6-5%)", "Beach (0.6%)", "Bone Nodes (0.8%)"],
    donationNotes: null,
    image: "images/artifacts/Palm Fossil.png"
  },
  {
    id: "589",
    name: "Trilobite",
    description: "A long extinct relative of the crab.",
    sellPrice: 50,
    locations: ["Beach (1.7-5%)", "Forest (1.9%)", "Mountain (1.8%)", "Bone Nodes (0.8%)"],
    donationNotes: null,
    image: "images/artifacts/Trilobite.png"
  }
];

// src/modules/artifacts/index.ts
var allArtifactData = artifacts_default;
var ArtifactQuery = class _ArtifactQuery extends QueryBase {
  constructor(data = allArtifactData) {
    super(data);
  }
  /** Filter to artifacts with donation notes (most artifacts can be donated; these have additional reward notes). */
  withDonationNotes() {
    return new _ArtifactQuery(this.data.filter((a) => a.donationNotes !== null));
  }
  /** Filter to artifacts found via fishing treasure chests. */
  fromFishing() {
    return new _ArtifactQuery(
      this.data.filter((a) => a.locations.some((l) => l.toLowerCase().includes("fishing")))
    );
  }
  /** Sort alphabetically by name. Default: 'asc'. */
  sortByName(order = "asc") {
    return new _ArtifactQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /** Sort by sell price. Default: 'desc' (highest first). */
  sortBySellPrice(order = "desc") {
    return new _ArtifactQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
      )
    );
  }
};
function artifacts(source = allArtifactData) {
  return new ArtifactQuery(source);
}

// data/bait.json
var bait_default = [
  {
    id: "685",
    name: "Bait",
    description: "Causes fish to bite faster. Must first be attached to a fishing rod.",
    sellPrice: 1,
    image: "images/fish/bait/Bait.png"
  },
  {
    id: "ChallengeBait",
    name: "Challenge Bait",
    description: "A 'perfect' catch yields triple the fish. Each escape reduces the catch.",
    sellPrice: 1,
    image: "images/fish/bait/Challenge Bait.png"
  },
  {
    id: "DeluxeBait",
    name: "Deluxe Bait",
    description: "Causes fish to bite even faster and increases the size of the fishing bar.",
    sellPrice: 1,
    image: "images/fish/bait/Deluxe Bait.png"
  },
  {
    id: "908",
    name: "Magic Bait",
    description: "Allows you to catch fish from any season, time, or weather, from whichever type of water you cast into.",
    sellPrice: 1,
    image: "images/fish/bait/Magic Bait.png"
  },
  {
    id: "703",
    name: "Magnet",
    description: "Increases the chance of finding treasure while fishing.",
    sellPrice: 15,
    image: "images/fish/bait/Magnet.png"
  },
  {
    id: "SpecificBait",
    name: "Specific Bait",
    description: "Increases your chances of catching a specific fish.",
    sellPrice: 5,
    image: "images/fish/bait/Pink Bait.png"
  },
  {
    id: "774",
    name: "Wild Bait",
    description: "A unique recipe from Linus that gives you a chance to catch two fish at once.",
    sellPrice: 15,
    image: "images/fish/bait/Wild Bait.png"
  }
];

// src/modules/bait/index.ts
var allBaitData = bait_default;
var BaitQuery = class _BaitQuery extends QueryBase {
  constructor(data = allBaitData) {
    super(data);
  }
  sortByName(order = "asc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return new _BaitQuery(sorted);
  }
  sortBySellPrice(order = "desc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
    );
    return new _BaitQuery(sorted);
  }
};
function bait(source = allBaitData) {
  return new BaitQuery(source);
}

// data/cooking.json
var cooking_default = [
  {
    id: "194",
    name: "Fried Egg",
    description: "Sunny-side up.",
    sellPrice: 35,
    energyHealth: { energy: 50, health: 22 },
    ingredients: [{ id: "-5", name: "Any Egg", quantity: 1 }],
    image: "images/cooking/Fried Egg.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "default" }]
  },
  {
    id: "195",
    name: "Omelet",
    description: "It's super fluffy.",
    sellPrice: 125,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "-5", name: "Any Egg", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Omelet.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [
      { type: "queen-of-sauce", season: "spring", day: 28, year: 1 },
      { type: "purchase", from: "Gus", price: 100, currency: "g" }
    ]
  },
  {
    id: "196",
    name: "Salad",
    description: "A healthy garden salad.",
    sellPrice: 110,
    energyHealth: { energy: 113, health: 50 },
    ingredients: [
      { id: "20", name: "Leek", quantity: 1 },
      { id: "22", name: "Dandelion", quantity: 1 },
      { id: "419", name: "Vinegar", quantity: 1 }
    ],
    image: "images/cooking/Salad.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Emily", hearts: 3 }]
  },
  {
    id: "197",
    name: "Cheese Cauliflower",
    description: "It smells great!",
    sellPrice: 300,
    energyHealth: { energy: 138, health: 62 },
    ingredients: [
      { id: "190", name: "Cauliflower", quantity: 1 },
      { id: "424", name: "Cheese", quantity: 1 }
    ],
    image: "images/cooking/Cheese Cauliflower.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Pam", hearts: 3 }]
  },
  {
    id: "198",
    name: "Baked Fish",
    description: "Baked fish on a bed of herbs.",
    sellPrice: 100,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [
      { id: "145", name: "Sunfish", quantity: 1 },
      { id: "132", name: "Bream", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 }
    ],
    image: "images/cooking/Baked Fish.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "summer", day: 7, year: 1 }]
  },
  {
    id: "199",
    name: "Parsnip Soup",
    description: "It's fresh and hearty.",
    sellPrice: 120,
    energyHealth: { energy: 85, health: 38 },
    ingredients: [
      { id: "24", name: "Parsnip", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "419", name: "Vinegar", quantity: 1 }
    ],
    image: "images/cooking/Parsnip Soup.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Caroline", hearts: 3 }]
  },
  {
    id: "200",
    name: "Vegetable Medley",
    description: "This is very nutritious.",
    sellPrice: 120,
    energyHealth: { energy: 165, health: 74 },
    ingredients: [
      { id: "256", name: "Tomato", quantity: 1 },
      { id: "284", name: "Beet", quantity: 1 }
    ],
    image: "images/cooking/Vegetable Medley.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Caroline", hearts: 7 }]
  },
  {
    id: "201",
    name: "Complete Breakfast",
    description: "You'll feel ready to take on the world!",
    sellPrice: 350,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "194", name: "Fried Egg", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "210", name: "Hashbrowns", quantity: 1 },
      { id: "211", name: "Pancakes", quantity: 1 }
    ],
    image: "images/cooking/Complete Breakfast.png",
    buffs: [
      { stat: "Farming", value: 2 },
      { stat: "Max Energy", value: 50 }
    ],
    buffDuration: 420,
    recipeSources: [{ type: "queen-of-sauce", season: "spring", day: 21, year: 2 }]
  },
  {
    id: "202",
    name: "Fried Calamari",
    description: "It's so chewy.",
    sellPrice: 150,
    energyHealth: { energy: 80, health: 36 },
    ingredients: [
      { id: "151", name: "Squid", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Fried Calamari.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Jodi", hearts: 3 }]
  },
  {
    id: "203",
    name: "Strange Bun",
    description: "What's inside?",
    sellPrice: 225,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "722", name: "Periwinkle", quantity: 1 },
      { id: "308", name: "Void Mayonnaise", quantity: 1 }
    ],
    image: "images/cooking/Strange Bun.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Shane", hearts: 7 }]
  },
  {
    id: "204",
    name: "Lucky Lunch",
    description: "A special little meal.",
    sellPrice: 250,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "154", name: "Sea Cucumber", quantity: 1 },
      { id: "229", name: "Tortilla", quantity: 1 },
      { id: "597", name: "Blue Jazz", quantity: 1 }
    ],
    image: "images/cooking/Lucky Lunch.png",
    buffs: [{ stat: "Luck", value: 3 }],
    buffDuration: 672,
    recipeSources: [{ type: "queen-of-sauce", season: "spring", day: 28, year: 2 }]
  },
  {
    id: "205",
    name: "Fried Mushroom",
    description: "Earthy and aromatic.",
    sellPrice: 200,
    energyHealth: { energy: 135, health: 60 },
    ingredients: [
      { id: "404", name: "Common Mushroom", quantity: 1 },
      { id: "257", name: "Morel", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Fried Mushroom.png",
    buffs: [{ stat: "Attack", value: 2 }],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Demetrius", hearts: 3 }]
  },
  {
    id: "206",
    name: "Pizza",
    description: "It's popular for all the right reasons.",
    sellPrice: 300,
    energyHealth: { energy: 150, health: 67 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 },
      { id: "424", name: "Cheese", quantity: 1 }
    ],
    image: "images/cooking/Pizza.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [
      { type: "queen-of-sauce", season: "spring", day: 7, year: 2 },
      { type: "purchase", from: "Gus", price: 150, currency: "g" }
    ]
  },
  {
    id: "207",
    name: "Bean Hotpot",
    description: "It sure is healthy.",
    sellPrice: 100,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [{ id: "188", name: "Green Bean", quantity: 2 }],
    image: "images/cooking/Bean Hotpot.png",
    buffs: [
      { stat: "Max Energy", value: 30 },
      { stat: "Magnetism", value: 32 }
    ],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Clint", hearts: 7 }]
  },
  {
    id: "208",
    name: "Glazed Yams",
    description: "Sweet and satisfying...The sugar gives it a hint of caramel.",
    sellPrice: 200,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "280", name: "Yam", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Glazed Yams.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 21, year: 1 }]
  },
  {
    id: "209",
    name: "Carp Surprise",
    description: "It's bland and oily.",
    sellPrice: 150,
    energyHealth: { energy: 90, health: 40 },
    ingredients: [{ id: "142", name: "Carp", quantity: 4 }],
    image: "images/cooking/Carp Surprise.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "summer", day: 7, year: 2 }]
  },
  {
    id: "210",
    name: "Hashbrowns",
    description: "Crispy and golden-brown!",
    sellPrice: 120,
    energyHealth: { energy: 90, health: 40 },
    ingredients: [
      { id: "192", name: "Potato", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Hashbrowns.png",
    buffs: [{ stat: "Farming", value: 1 }],
    buffDuration: 336,
    recipeSources: [
      { type: "queen-of-sauce", season: "spring", day: 14, year: 2 },
      { type: "purchase", from: "Gus", price: 50, currency: "g" }
    ]
  },
  {
    id: "211",
    name: "Pancakes",
    description: "A double stack of fluffy, soft pancakes.",
    sellPrice: 80,
    energyHealth: { energy: 90, health: 40 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 }
    ],
    image: "images/cooking/Pancakes.png",
    buffs: [{ stat: "Foraging", value: 2 }],
    buffDuration: 672,
    recipeSources: [
      { type: "queen-of-sauce", season: "summer", day: 14, year: 1 },
      { type: "purchase", from: "Gus", price: 100, currency: "g" }
    ]
  },
  {
    id: "212",
    name: "Salmon Dinner",
    description: "The lemon spritz makes it special.",
    sellPrice: 300,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "139", name: "Salmon", quantity: 1 },
      { id: "300", name: "Amaranth", quantity: 1 },
      { id: "250", name: "Kale", quantity: 1 }
    ],
    image: "images/cooking/Salmon Dinner.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Gus", hearts: 3 }]
  },
  {
    id: "213",
    name: "Fish Taco",
    description: "It smells delicious.",
    sellPrice: 500,
    energyHealth: { energy: 165, health: 74 },
    ingredients: [
      { id: "130", name: "Tuna", quantity: 1 },
      { id: "229", name: "Tortilla", quantity: 1 },
      { id: "266", name: "Red Cabbage", quantity: 1 },
      { id: "306", name: "Mayonnaise", quantity: 1 }
    ],
    image: "images/cooking/Fish Taco.png",
    buffs: [{ stat: "Fishing", value: 2 }],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Linus", hearts: 7 }]
  },
  {
    id: "214",
    name: "Crispy Bass",
    description: "Wow, the breading is perfect.",
    sellPrice: 150,
    energyHealth: { energy: 90, health: 40 },
    ingredients: [
      { id: "136", name: "Largemouth Bass", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Crispy Bass.png",
    buffs: [{ stat: "Magnetism", value: 64 }],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Kent", hearts: 3 }]
  },
  {
    id: "215",
    name: "Pepper Poppers",
    description: "Spicy breaded peppers filled with cheese.",
    sellPrice: 200,
    energyHealth: { energy: 130, health: 58 },
    ingredients: [
      { id: "260", name: "Hot Pepper", quantity: 1 },
      { id: "424", name: "Cheese", quantity: 1 }
    ],
    image: "images/cooking/Pepper Poppers.png",
    buffs: [
      { stat: "Farming", value: 2 },
      { stat: "Speed", value: 1 }
    ],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Shane", hearts: 3 }]
  },
  {
    id: "216",
    name: "Bread",
    description: "A crusty baguette.",
    sellPrice: 60,
    energyHealth: { energy: 50, health: 22 },
    ingredients: [{ id: "246", name: "Wheat Flour", quantity: 1 }],
    image: "images/cooking/Bread.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [
      { type: "queen-of-sauce", season: "summer", day: 28, year: 1 },
      { type: "purchase", from: "Gus", price: 100, currency: "g" }
    ]
  },
  {
    id: "218",
    name: "Tom Kha Soup",
    description: "These flavors are incredible!",
    sellPrice: 250,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [
      { id: "88", name: "Coconut", quantity: 1 },
      { id: "720", name: "Shrimp", quantity: 1 },
      { id: "404", name: "Common Mushroom", quantity: 1 }
    ],
    image: "images/cooking/Tom Kha Soup.png",
    buffs: [
      { stat: "Farming", value: 2 },
      { stat: "Max Energy", value: 30 }
    ],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "Sandy", hearts: 7 }]
  },
  {
    id: "219",
    name: "Trout Soup",
    description: "Pretty salty.",
    sellPrice: 100,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "138", name: "Rainbow Trout", quantity: 1 },
      { id: "153", name: "Green Algae", quantity: 1 }
    ],
    image: "images/cooking/Trout Soup.png",
    buffs: [{ stat: "Fishing", value: 1 }],
    buffDuration: 280,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 14, year: 1 }]
  },
  {
    id: "220",
    name: "Chocolate Cake",
    description: "Rich and moist with a thick fudge icing.",
    sellPrice: 200,
    energyHealth: { energy: 150, health: 67 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 }
    ],
    image: "images/cooking/Chocolate Cake.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 14, year: 1 }]
  },
  {
    id: "221",
    name: "Pink Cake",
    description: "There's little heart candies on top.",
    sellPrice: 480,
    energyHealth: { energy: 250, health: 112 },
    ingredients: [
      { id: "254", name: "Melon", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 }
    ],
    image: "images/cooking/Pink Cake.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "summer", day: 21, year: 2 }]
  },
  {
    id: "222",
    name: "Rhubarb Pie",
    description: "Mmm, tangy and sweet!",
    sellPrice: 400,
    energyHealth: { energy: 215, health: 96 },
    ingredients: [
      { id: "252", name: "Rhubarb", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Rhubarb Pie.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Marnie", hearts: 7 }]
  },
  {
    id: "223",
    name: "Cookie",
    description: "Very chewy.",
    sellPrice: 140,
    energyHealth: { energy: 90, health: 40 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 }
    ],
    image: "images/cooking/Cookie.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "cutscene", description: "Evelyn 4-heart event" }]
  },
  {
    id: "224",
    name: "Spaghetti",
    description: "An old favorite.",
    sellPrice: 120,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 }
    ],
    image: "images/cooking/Spaghetti.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Lewis", hearts: 3 }]
  },
  {
    id: "225",
    name: "Fried Eel",
    description: "Greasy but flavorful.",
    sellPrice: 120,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [
      { id: "148", name: "Eel", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Fried Eel.png",
    buffs: [{ stat: "Luck", value: 1 }],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "George", hearts: 3 }]
  },
  {
    id: "226",
    name: "Spicy Eel",
    description: "It's really spicy! Be careful.",
    sellPrice: 175,
    energyHealth: { energy: 115, health: 51 },
    ingredients: [
      { id: "148", name: "Eel", quantity: 1 },
      { id: "260", name: "Hot Pepper", quantity: 1 }
    ],
    image: "images/cooking/Spicy Eel.png",
    buffs: [
      { stat: "Luck", value: 1 },
      { stat: "Speed", value: 1 }
    ],
    buffDuration: 420,
    recipeSources: [{ type: "friendship", villager: "George", hearts: 7 }]
  },
  {
    id: "227",
    name: "Sashimi",
    description: "Raw fish sliced into thin pieces.",
    sellPrice: 75,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [{ id: "-4", name: "Any Fish", quantity: 1 }],
    image: "images/cooking/Sashimi.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Linus", hearts: 3 }]
  },
  {
    id: "228",
    name: "Maki Roll",
    description: "Fish and rice wrapped in seaweed.",
    sellPrice: 220,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "-4", name: "Any Fish", quantity: 1 },
      { id: "152", name: "Seaweed", quantity: 1 },
      { id: "423", name: "Rice", quantity: 1 }
    ],
    image: "images/cooking/Maki Roll.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [
      { type: "queen-of-sauce", season: "summer", day: 21, year: 1 },
      { type: "purchase", from: "Gus", price: 300, currency: "g" }
    ]
  },
  {
    id: "229",
    name: "Tortilla",
    description: "Can be used as a vessel for food or eaten by itself.",
    sellPrice: 50,
    energyHealth: { energy: 50, health: 22 },
    ingredients: [{ id: "270", name: "Corn", quantity: 1 }],
    image: "images/cooking/Tortilla.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [
      { type: "queen-of-sauce", season: "fall", day: 7, year: 1 },
      { type: "purchase", from: "Gus", price: 100, currency: "g" }
    ]
  },
  {
    id: "230",
    name: "Red Plate",
    description: "Full of antioxidants.",
    sellPrice: 400,
    energyHealth: { energy: 240, health: 108 },
    ingredients: [
      { id: "266", name: "Red Cabbage", quantity: 1 },
      { id: "264", name: "Radish", quantity: 1 }
    ],
    image: "images/cooking/Red Plate.png",
    buffs: [{ stat: "Max Energy", value: 50 }],
    buffDuration: 210,
    recipeSources: [{ type: "friendship", villager: "Emily", hearts: 7 }]
  },
  {
    id: "231",
    name: "Eggplant Parmesan",
    description: "Tangy, cheesy, and wonderful.",
    sellPrice: 200,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [
      { id: "272", name: "Eggplant", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 }
    ],
    image: "images/cooking/Eggplant Parmesan.png",
    buffs: [
      { stat: "Mining", value: 1 },
      { stat: "Defense", value: 3 }
    ],
    buffDuration: 280,
    recipeSources: [{ type: "friendship", villager: "Lewis", hearts: 7 }]
  },
  {
    id: "232",
    name: "Rice Pudding",
    description: "It's creamy, sweet, and fun to eat.",
    sellPrice: 260,
    energyHealth: { energy: 115, health: 51 },
    ingredients: [
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "423", name: "Rice", quantity: 1 }
    ],
    image: "images/cooking/Rice Pudding.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Evelyn", hearts: 7 }]
  },
  {
    id: "233",
    name: "Ice Cream",
    description: "It's hard to find someone who doesn't like this.",
    sellPrice: 120,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Ice Cream.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Jodi", hearts: 7 }]
  },
  {
    id: "234",
    name: "Blueberry Tart",
    description: "It's subtle and refreshing.",
    sellPrice: 150,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "258", name: "Blueberry", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 }
    ],
    image: "images/cooking/Blueberry Tart.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Pierre", hearts: 3 }]
  },
  {
    id: "235",
    name: "Autumn's Bounty",
    description: "A taste of the season.",
    sellPrice: 350,
    energyHealth: { energy: 220, health: 99 },
    ingredients: [
      { id: "280", name: "Yam", quantity: 1 },
      { id: "276", name: "Pumpkin", quantity: 1 }
    ],
    image: "images/cooking/Autumn's Bounty.png",
    buffs: [
      { stat: "Foraging", value: 2 },
      { stat: "Defense", value: 2 }
    ],
    buffDuration: 462,
    recipeSources: [{ type: "friendship", villager: "Demetrius", hearts: 7 }]
  },
  {
    id: "236",
    name: "Pumpkin Soup",
    description: "A seasonal favorite.",
    sellPrice: 300,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "276", name: "Pumpkin", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Pumpkin Soup.png",
    buffs: [
      { stat: "Luck", value: 2 },
      { stat: "Defense", value: 2 }
    ],
    buffDuration: 462,
    recipeSources: [{ type: "friendship", villager: "Robin", hearts: 7 }]
  },
  {
    id: "237",
    name: "Super Meal",
    description: "It's a really energizing meal.",
    sellPrice: 220,
    energyHealth: { energy: 160, health: 72 },
    ingredients: [
      { id: "278", name: "Bok Choy", quantity: 1 },
      { id: "282", name: "Cranberries", quantity: 1 },
      { id: "274", name: "Artichoke", quantity: 1 }
    ],
    image: "images/cooking/Super Meal.png",
    buffs: [
      { stat: "Max Energy", value: 40 },
      { stat: "Speed", value: 1 }
    ],
    buffDuration: 210,
    recipeSources: [{ type: "friendship", villager: "Kent", hearts: 7 }]
  },
  {
    id: "238",
    name: "Cranberry Sauce",
    description: "A festive treat.",
    sellPrice: 120,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "282", name: "Cranberries", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Cranberry Sauce.png",
    buffs: [{ stat: "Mining", value: 2 }],
    buffDuration: 210,
    recipeSources: [{ type: "friendship", villager: "Gus", hearts: 7 }]
  },
  {
    id: "239",
    name: "Stuffing",
    description: "Ahh... the smell of warm bread and sage.",
    sellPrice: 165,
    energyHealth: { energy: 170, health: 76 },
    ingredients: [
      { id: "216", name: "Bread", quantity: 1 },
      { id: "282", name: "Cranberries", quantity: 1 },
      { id: "408", name: "Hazelnut", quantity: 1 }
    ],
    image: "images/cooking/Stuffing.png",
    buffs: [{ stat: "Defense", value: 2 }],
    buffDuration: 336,
    recipeSources: [{ type: "friendship", villager: "Pam", hearts: 7 }]
  },
  {
    id: "240",
    name: "Farmer's Lunch",
    description: "This'll keep you going.",
    sellPrice: 150,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "195", name: "Omelet", quantity: 1 },
      { id: "24", name: "Parsnip", quantity: 1 }
    ],
    image: "images/cooking/Farmer's Lunch.png",
    buffs: [{ stat: "Farming", value: 3 }],
    buffDuration: 336,
    recipeSources: [{ type: "skill", skill: "Farming", level: 3 }]
  },
  {
    id: "241",
    name: "Survival Burger",
    description: "A convenient snack for the explorer.",
    sellPrice: 180,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "216", name: "Bread", quantity: 1 },
      { id: "78", name: "Cave Carrot", quantity: 1 },
      { id: "272", name: "Eggplant", quantity: 1 }
    ],
    image: "images/cooking/Survival Burger.png",
    buffs: [{ stat: "Foraging", value: 3 }],
    buffDuration: 336,
    recipeSources: [{ type: "skill", skill: "Foraging", level: 8 }]
  },
  {
    id: "242",
    name: "Dish O' The Sea",
    description: "This'll keep you warm in the cold sea air.",
    sellPrice: 220,
    energyHealth: { energy: 150, health: 67 },
    ingredients: [
      { id: "131", name: "Sardine", quantity: 2 },
      { id: "210", name: "Hashbrowns", quantity: 1 }
    ],
    image: "images/cooking/Dish O' The Sea.png",
    buffs: [{ stat: "Fishing", value: 3 }],
    buffDuration: 336,
    recipeSources: [{ type: "skill", skill: "Fishing", level: 3 }]
  },
  {
    id: "243",
    name: "Miner's Treat",
    description: "This should keep your energy up.",
    sellPrice: 200,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "78", name: "Cave Carrot", quantity: 2 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Miner's Treat.png",
    buffs: [
      { stat: "Mining", value: 3 },
      { stat: "Magnetism", value: 32 }
    ],
    buffDuration: 336,
    recipeSources: [{ type: "skill", skill: "Mining", level: 3 }]
  },
  {
    id: "244",
    name: "Roots Platter",
    description: "This'll get you digging for more.",
    sellPrice: 100,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "78", name: "Cave Carrot", quantity: 1 },
      { id: "412", name: "Winter Root", quantity: 1 }
    ],
    image: "images/cooking/Roots Platter.png",
    buffs: [{ stat: "Attack", value: 3 }],
    buffDuration: 336,
    recipeSources: [{ type: "skill", skill: "Combat", level: 3 }]
  },
  {
    id: "253",
    name: "Triple Shot Espresso",
    description: "It's more potent than regular coffee!",
    sellPrice: 450,
    energyHealth: { energy: 8, health: 3 },
    ingredients: [{ id: "395", name: "Coffee", quantity: 3 }],
    image: "images/cooking/Triple Shot Espresso.png",
    buffs: [{ stat: "Speed", value: 1 }],
    buffDuration: 252,
    recipeSources: [{ type: "purchase", from: "Gus", price: 5e3, currency: "g" }]
  },
  {
    id: "265",
    name: "Seafoam Pudding",
    description: "This briny pudding will really get you into the maritime mindset!",
    sellPrice: 300,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [
      { id: "267", name: "Flounder", quantity: 1 },
      { id: "269", name: "Midnight Carp", quantity: 1 },
      { id: "814", name: "Squid Ink", quantity: 1 }
    ],
    image: "images/cooking/Seafoam Pudding.png",
    buffs: [{ stat: "Fishing", value: 4 }],
    buffDuration: 210,
    recipeSources: [{ type: "skill", skill: "Fishing", level: 9 }]
  },
  {
    id: "456",
    name: "Algae Soup",
    description: "It's a little slimy.",
    sellPrice: 100,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [{ id: "153", name: "Green Algae", quantity: 4 }],
    image: "images/cooking/Algae Soup.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Clint", hearts: 3 }]
  },
  {
    id: "457",
    name: "Pale Broth",
    description: "A delicate broth with a hint of sulfur.",
    sellPrice: 150,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [{ id: "157", name: "White Algae", quantity: 2 }],
    image: "images/cooking/Pale Broth.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Marnie", hearts: 3 }]
  },
  {
    id: "604",
    name: "Plum Pudding",
    description: "A traditional holiday treat.",
    sellPrice: 260,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [
      { id: "406", name: "Wild Plum", quantity: 2 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Plum Pudding.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 7, year: 1 }]
  },
  {
    id: "605",
    name: "Artichoke Dip",
    description: "It's cool and refreshing.",
    sellPrice: 210,
    energyHealth: { energy: 100, health: 45 },
    ingredients: [
      { id: "274", name: "Artichoke", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Artichoke Dip.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 28, year: 1 }]
  },
  {
    id: "606",
    name: "Stir Fry",
    description: "Julienned vegetables on a bed of rice.",
    sellPrice: 335,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "78", name: "Cave Carrot", quantity: 1 },
      { id: "404", name: "Common Mushroom", quantity: 1 },
      { id: "250", name: "Kale", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Stir Fry.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "spring", day: 7, year: 1 }]
  },
  {
    id: "607",
    name: "Roasted Hazelnuts",
    description: "The roasting process creates a rich forest flavor.",
    sellPrice: 270,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [{ id: "408", name: "Hazelnut", quantity: 3 }],
    image: "images/cooking/Roasted Hazelnuts.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "summer", day: 28, year: 2 }]
  },
  {
    id: "608",
    name: "Pumpkin Pie",
    description: "Silky pumpkin cream in a flaky crust.",
    sellPrice: 385,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "276", name: "Pumpkin", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Pumpkin Pie.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 21, year: 1 }]
  },
  {
    id: "609",
    name: "Radish Salad",
    description: "The radishes are so crisp!",
    sellPrice: 300,
    energyHealth: { energy: 200, health: 90 },
    ingredients: [
      { id: "247", name: "Oil", quantity: 1 },
      { id: "419", name: "Vinegar", quantity: 1 },
      { id: "264", name: "Radish", quantity: 1 }
    ],
    image: "images/cooking/Radish Salad.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "spring", day: 21, year: 1 }]
  },
  {
    id: "610",
    name: "Fruit Salad",
    description: "A delicious combination of summer fruits.",
    sellPrice: 450,
    energyHealth: { energy: 263, health: 118 },
    ingredients: [
      { id: "258", name: "Blueberry", quantity: 1 },
      { id: "254", name: "Melon", quantity: 1 },
      { id: "634", name: "Apricot", quantity: 1 }
    ],
    image: "images/cooking/Fruit Salad.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 7, year: 2 }]
  },
  {
    id: "611",
    name: "Blackberry Cobbler",
    description: "There's nothing quite like it.",
    sellPrice: 260,
    energyHealth: { energy: 175, health: 78 },
    ingredients: [
      { id: "410", name: "Blackberry", quantity: 2 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 }
    ],
    image: "images/cooking/Blackberry Cobbler.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 14, year: 2 }]
  },
  {
    id: "612",
    name: "Cranberry Candy",
    description: "It's sweet enough to mask the bitter fruit.",
    sellPrice: 175,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "282", name: "Cranberries", quantity: 1 },
      { id: "613", name: "Apple", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Cranberry Candy.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 28, year: 1 }]
  },
  {
    id: "618",
    name: "Bruschetta",
    description: "Roasted tomatoes on a crisp white bread.",
    sellPrice: 210,
    energyHealth: { energy: 113, health: 50 },
    ingredients: [
      { id: "216", name: "Bread", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 }
    ],
    image: "images/cooking/Bruschetta.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 21, year: 2 }]
  },
  {
    id: "648",
    name: "Coleslaw",
    description: "It's light, fresh and very healthy.",
    sellPrice: 345,
    energyHealth: { energy: 213, health: 95 },
    ingredients: [
      { id: "266", name: "Red Cabbage", quantity: 1 },
      { id: "419", name: "Vinegar", quantity: 1 },
      { id: "306", name: "Mayonnaise", quantity: 1 }
    ],
    image: "images/cooking/Coleslaw.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "spring", day: 14, year: 1 }]
  },
  {
    id: "649",
    name: "Fiddlehead Risotto",
    description: "A creamy rice dish served with sauteed fern heads. It's a little bland.",
    sellPrice: 350,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "247", name: "Oil", quantity: 1 },
      { id: "259", name: "Fiddlehead Fern", quantity: 1 },
      { id: "248", name: "Garlic", quantity: 1 }
    ],
    image: "images/cooking/Fiddlehead Risotto.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 28, year: 2 }]
  },
  {
    id: "651",
    name: "Poppyseed Muffin",
    description: "It has a soothing effect.",
    sellPrice: 250,
    energyHealth: { energy: 150, health: 67 },
    ingredients: [
      { id: "376", name: "Poppy", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Poppyseed Muffin.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 7, year: 2 }]
  },
  {
    id: "727",
    name: "Chowder",
    description: "A perfect way to warm yourself after a cold night at sea.",
    sellPrice: 135,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "372", name: "Clam", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Chowder.png",
    buffs: [{ stat: "Fishing", value: 1 }],
    buffDuration: 1008,
    recipeSources: [{ type: "friendship", villager: "Willy", hearts: 3 }]
  },
  {
    id: "728",
    name: "Fish Stew",
    description: "It smells a lot like the sea. Tastes better, though.",
    sellPrice: 175,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "716", name: "Crayfish", quantity: 1 },
      { id: "719", name: "Mussel", quantity: 1 },
      { id: "722", name: "Periwinkle", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 }
    ],
    image: "images/cooking/Fish Stew.png",
    buffs: [{ stat: "Fishing", value: 3 }],
    buffDuration: 1008,
    recipeSources: [{ type: "friendship", villager: "Willy", hearts: 7 }]
  },
  {
    id: "729",
    name: "Escargot",
    description: "Butter-soaked snails cooked to perfection.",
    sellPrice: 125,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "721", name: "Snail", quantity: 1 },
      { id: "248", name: "Garlic", quantity: 1 }
    ],
    image: "images/cooking/Escargot.png",
    buffs: [{ stat: "Fishing", value: 2 }],
    buffDuration: 1008,
    recipeSources: [{ type: "friendship", villager: "Willy", hearts: 5 }]
  },
  {
    id: "730",
    name: "Lobster Bisque",
    description: "This delicate soup is a secret family recipe of Willy's.",
    sellPrice: 205,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "715", name: "Lobster", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 }
    ],
    image: "images/cooking/Lobster Bisque.png",
    buffs: [
      { stat: "Fishing", value: 3 },
      { stat: "Max Energy", value: 50 }
    ],
    buffDuration: 1008,
    recipeSources: [
      { type: "queen-of-sauce", season: "winter", day: 14, year: 2 },
      { type: "friendship", villager: "Willy", hearts: 9 }
    ]
  },
  {
    id: "731",
    name: "Maple Bar",
    description: "It's a sweet doughnut topped with a rich maple glaze.",
    sellPrice: 300,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "724", name: "Maple Syrup", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 }
    ],
    image: "images/cooking/Maple Bar.png",
    buffs: [
      { stat: "Farming", value: 1 },
      { stat: "Fishing", value: 1 },
      { stat: "Mining", value: 1 }
    ],
    buffDuration: 1008,
    recipeSources: [{ type: "queen-of-sauce", season: "summer", day: 14, year: 2 }]
  },
  {
    id: "732",
    name: "Crab Cakes",
    description: "Crab, bread crumbs, and egg formed into patties then fried to golden brown.",
    sellPrice: 275,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "717", name: "Crab", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "-5", name: "Any Egg", quantity: 1 },
      { id: "247", name: "Oil", quantity: 1 }
    ],
    image: "images/cooking/Crab Cakes.png",
    buffs: [
      { stat: "Speed", value: 1 },
      { stat: "Defense", value: 1 }
    ],
    buffDuration: 1008,
    recipeSources: [{ type: "queen-of-sauce", season: "fall", day: 21, year: 2 }]
  },
  {
    id: "733",
    name: "Shrimp Cocktail",
    description: "A sumptuous appetizer made with freshly-caught shrimp.",
    sellPrice: 160,
    energyHealth: { energy: 225, health: 101 },
    ingredients: [
      { id: "720", name: "Shrimp", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 },
      { id: "16", name: "Wild Horseradish", quantity: 1 }
    ],
    image: "images/cooking/Shrimp Cocktail.png",
    buffs: [
      { stat: "Fishing", value: 1 },
      { stat: "Luck", value: 1 }
    ],
    buffDuration: 602,
    recipeSources: [{ type: "queen-of-sauce", season: "winter", day: 28, year: 2 }]
  },
  {
    id: "903",
    name: "Ginger Ale",
    description: "A zesty soda known for its soothing effect on the stomach.",
    sellPrice: 200,
    energyHealth: { energy: 63, health: 28 },
    ingredients: [
      { id: "829", name: "Ginger", quantity: 3 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Ginger Ale.png",
    buffs: [{ stat: "Luck", value: 1 }],
    buffDuration: 301,
    recipeSources: [{ type: "purchase", from: "Dwarf Shop", price: 1e3, currency: "g" }]
  },
  {
    id: "904",
    name: "Banana Pudding",
    description: "A creamy dessert with a wonderful tropical flavor.",
    sellPrice: 260,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "91", name: "Banana", quantity: 1 },
      { id: "-6", name: "Any Milk", quantity: 1 },
      { id: "245", name: "Sugar", quantity: 1 }
    ],
    image: "images/cooking/Banana Pudding.png",
    buffs: [
      { stat: "Mining", value: 1 },
      { stat: "Luck", value: 1 },
      { stat: "Defense", value: 1 }
    ],
    buffDuration: 301,
    recipeSources: [
      { type: "purchase", from: "Island Trader", price: 30, currency: "Bone Fragment" }
    ]
  },
  {
    id: "905",
    name: "Mango Sticky Rice",
    description: "Sweet mango and coconut transforms this rice into something very special.",
    sellPrice: 250,
    energyHealth: { energy: 113, health: 50 },
    ingredients: [
      { id: "834", name: "Mango", quantity: 1 },
      { id: "88", name: "Coconut", quantity: 1 },
      { id: "423", name: "Rice", quantity: 1 }
    ],
    image: "images/cooking/Mango Sticky Rice.png",
    buffs: [{ stat: "Defense", value: 3 }],
    buffDuration: 301,
    recipeSources: [{ type: "friendship", villager: "Leo", hearts: 7 }]
  },
  {
    id: "906",
    name: "Poi",
    description: "A traditional food with a delicate, sweet flavor when eaten fresh.",
    sellPrice: 400,
    energyHealth: { energy: 75, health: 33 },
    ingredients: [{ id: "830", name: "Taro Root", quantity: 4 }],
    image: "images/cooking/Poi.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "friendship", villager: "Leo", hearts: 3 }]
  },
  {
    id: "907",
    name: "Tropical Curry",
    description: "An exotic, fragrant curry served in a pineapple bowl.",
    sellPrice: 500,
    energyHealth: { energy: 150, health: 67 },
    ingredients: [
      { id: "88", name: "Coconut", quantity: 1 },
      { id: "832", name: "Pineapple", quantity: 1 },
      { id: "260", name: "Hot Pepper", quantity: 1 }
    ],
    image: "images/cooking/Tropical Curry.png",
    buffs: [{ stat: "Foraging", value: 4 }],
    buffDuration: 301,
    recipeSources: [
      { type: "purchase", from: "Ginger Island Resort", price: 2e3, currency: "g" }
    ]
  },
  {
    id: "921",
    name: "Squid Ink Ravioli",
    description: "Temporarily protects from debuffs.",
    sellPrice: 150,
    energyHealth: { energy: 125, health: 56 },
    ingredients: [
      { id: "814", name: "Squid Ink", quantity: 1 },
      { id: "246", name: "Wheat Flour", quantity: 1 },
      { id: "256", name: "Tomato", quantity: 1 }
    ],
    image: "images/cooking/Squid Ink Ravioli.png",
    buffs: [
      { stat: "Mining", value: 1 },
      { stat: "Debuff Immunity", value: 1 }
    ],
    buffDuration: 280,
    recipeSources: [{ type: "skill", skill: "Combat", level: 9 }]
  },
  {
    id: "MossSoup",
    name: "Moss Soup",
    description: "It's thick and slimy, but edible.",
    sellPrice: 80,
    energyHealth: { energy: 70, health: 31 },
    ingredients: [{ id: "Moss", name: "Moss", quantity: 20 }],
    image: "images/cooking/Moss Soup.png",
    buffs: [],
    buffDuration: null,
    recipeSources: [{ type: "skill", skill: "Foraging", level: 3 }]
  }
];

// src/modules/cooking/index.ts
var allCookingData = cooking_default;
var CookingQuery = class _CookingQuery extends QueryBase {
  constructor(data = allCookingData) {
    super(data);
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return new _CookingQuery(sorted);
  }
  /** Sort by sell price. Default: `'desc'` (most valuable first). */
  sortBySellPrice(order = "desc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
    );
    return new _CookingQuery(sorted);
  }
  /**
   * Sort by energy restored. Dishes with no energy value sort as 0.
   * Default: `'desc'` (most energising first).
   */
  sortByEnergy(order = "desc") {
    const sorted = [...this.data].sort((a, b) => {
      const ea = a.energyHealth.energy ?? 0;
      const eb = b.energyHealth.energy ?? 0;
      return order === "asc" ? ea - eb : eb - ea;
    });
    return new _CookingQuery(sorted);
  }
  /** Filter to dishes that require a specific ingredient by ID. */
  withIngredient(ingredientId) {
    const filtered = this.data.filter((d) => d.ingredients.some((i) => i.id === ingredientId));
    return new _CookingQuery(filtered);
  }
};
function cooking(source = allCookingData) {
  return new CookingQuery(source);
}

// data/crafting.json
var crafting_default = [
  {
    id: "Bomb",
    name: "Bomb",
    description: "Generates a powerful explosion.",
    category: "Bombs",
    source: "Mining Level 6",
    output: {
      id: "287",
      name: "Bomb",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "380",
        name: "Iron Ore",
        quantity: 4
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      }
    ],
    image: "images/craftable/bombs/Bomb.png"
  },
  {
    id: "Cherry Bomb",
    name: "Cherry Bomb",
    description: "Creates a small explosion. Radius 3.",
    category: "Bombs",
    source: "Mining Level 1",
    output: {
      id: "286",
      name: "Cherry Bomb",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "378",
        name: "Copper Ore",
        quantity: 4
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      }
    ],
    image: "images/craftable/bombs/Cherry Bomb.png"
  },
  {
    id: "Mega Bomb",
    name: "Mega Bomb",
    description: "Generates a massive explosion.",
    category: "Bombs",
    source: "Mining Level 8",
    output: {
      id: "288",
      name: "Mega Bomb",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "384",
        name: "Gold Ore",
        quantity: 4
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 1
      },
      {
        id: "769",
        name: "Void Essence",
        quantity: 1
      }
    ],
    image: "images/craftable/bombs/Mega Bomb.png"
  },
  {
    id: "Gate",
    name: "Gate",
    description: "Allows you and your animals to pass through a fence.",
    category: "Fences",
    source: "Starter",
    output: {
      id: "325",
      name: "Gate",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 10
      }
    ],
    image: "images/craftable/fences/Gate.png"
  },
  {
    id: "Hardwood Fence",
    name: "Hardwood Fence",
    description: "Extremely durable. Lasts about 505 days.",
    category: "Fences",
    source: "Farming Level 6",
    output: {
      id: "298",
      name: "Hardwood Fence",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      }
    ],
    image: "images/craftable/fences/Hardwood Fence.png"
  },
  {
    id: "Iron Fence",
    name: "Iron Fence",
    description: "Very long lasting. Lasts about 226 days.",
    category: "Fences",
    source: "Farming Level 4",
    output: {
      id: "324",
      name: "Iron Fence",
      quantity: 10,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/fences/Iron Fence.png"
  },
  {
    id: "Stone Fence",
    name: "Stone Fence",
    description: "Longer lasting than wood. Lasts about 109 days.",
    category: "Fences",
    source: "Farming Level 2",
    output: {
      id: "323",
      name: "Stone Fence",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 2
      }
    ],
    image: "images/craftable/fences/Stone Fence.png"
  },
  {
    id: "Wood Fence",
    name: "Wood Fence",
    description: "Contains grass and animals. Lasts about 52 days.",
    category: "Fences",
    source: "Starter",
    output: {
      id: "322",
      name: "Wood Fence",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 2
      }
    ],
    image: "images/craftable/fences/Wood Fence.png"
  },
  {
    id: "Big Chest",
    name: "Big Chest",
    description: "Store your items in this. Holds nearly twice as much as a regular chest.",
    category: "Storage",
    source: "Special",
    output: {
      id: "BigChest",
      name: "Big Chest",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 120
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 2
      }
    ],
    image: "images/craftable/storage/Big Chest.png"
  },
  {
    id: "Big Stone Chest",
    name: "Big Stone Chest",
    description: "Store your items in this. Holds nearly twice as much as a regular stone chest.",
    category: "Storage",
    source: "Special",
    output: {
      id: "BigStoneChest",
      name: "Big Stone Chest",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 250
      }
    ],
    image: "images/craftable/storage/Big Stone Chest.png"
  },
  {
    id: "Chest",
    name: "Chest",
    description: "Store your items in this.",
    category: "Storage",
    source: "Starter",
    output: {
      id: "130",
      name: "Chest",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      }
    ],
    image: "images/craftable/storage/Chest.png"
  },
  {
    id: "Stone Chest",
    name: "Stone Chest",
    description: "Store your items in this.",
    category: "Storage",
    source: "Special",
    output: {
      id: "232",
      name: "Stone Chest",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 50
      }
    ],
    image: "images/craftable/storage/Stone Chest.png"
  },
  {
    id: "Dark Sign",
    name: "Dark Sign",
    description: "Use items on this to change what's displayed.",
    category: "Signs",
    source: "Krobus (3 hearts)",
    output: {
      id: "39",
      name: "Dark Sign",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "767",
        name: "Bat Wing",
        quantity: 5
      },
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 5
      }
    ],
    image: "images/craftable/signs/Dark Sign.png"
  },
  {
    id: "Stone Sign",
    name: "Stone Sign",
    description: "Use items on this to change what's displayed.",
    category: "Signs",
    source: "Starter",
    output: {
      id: "38",
      name: "Stone Sign",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 25
      }
    ],
    image: "images/craftable/signs/Stone Sign.png"
  },
  {
    id: "Text Sign",
    name: "Text Sign",
    description: "Write a custom message on this sign.",
    category: "Signs",
    source: "Starter",
    output: {
      id: "TextSign",
      name: "Text Sign",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 25
      }
    ],
    image: "images/craftable/signs/Text Sign.png"
  },
  {
    id: "Wood Sign",
    name: "Wood Sign",
    description: "Use items on this to change what's displayed.",
    category: "Signs",
    source: "Starter",
    output: {
      id: "37",
      name: "Wood Sign",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 25
      }
    ],
    image: "images/craftable/signs/Wood Sign.png"
  },
  {
    id: "Bee House",
    name: "Bee House",
    description: "Place outside and bees will make honey for you. Honey is ready to harvest every few days. (Not during winter)",
    category: "Artisan Equipment",
    source: "Farming Level 3",
    output: {
      id: "10",
      name: "Bee House",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 40
      },
      {
        id: "382",
        name: "Coal",
        quantity: 8
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "724",
        name: "Maple Syrup",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Bee House.png"
  },
  {
    id: "Cask",
    name: "Cask",
    description: "Allows you to age artisan goods. Place in a cellar to use.",
    category: "Artisan Equipment",
    source: "Special",
    output: {
      id: "163",
      name: "Cask",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 20
      },
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Cask.png"
  },
  {
    id: "Cheese Press",
    name: "Cheese Press",
    description: "Turns milk into cheese.",
    category: "Artisan Equipment",
    source: "Farming Level 6",
    output: {
      id: "16",
      name: "Cheese Press",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 45
      },
      {
        id: "390",
        name: "Stone",
        quantity: 45
      },
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Cheese Press.png"
  },
  {
    id: "Dehydrator",
    name: "Dehydrator",
    description: "Place 5 fruit or edible mushrooms inside to dry them.",
    category: "Artisan Equipment",
    source: "Special",
    output: {
      id: "Dehydrator",
      name: "Dehydrator",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 30
      },
      {
        id: "330",
        name: "Clay",
        quantity: 2
      },
      {
        id: "82",
        name: "Fire Quartz",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Dehydrator.png"
  },
  {
    id: "Fish Smoker",
    name: "Fish Smoker",
    description: "Create smoked fish, worth twice as much with quality preserved.",
    category: "Artisan Equipment",
    source: "Special",
    output: {
      id: "FishSmoker",
      name: "Fish Smoker",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "SeaJelly",
        name: "Sea Jelly",
        quantity: 1
      },
      {
        id: "RiverJelly",
        name: "River Jelly",
        quantity: 1
      },
      {
        id: "CaveJelly",
        name: "Cave Jelly",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Fish Smoker.png"
  },
  {
    id: "Keg",
    name: "Keg",
    description: "Place a fruit or vegetable in here. Eventually it will turn into a beverage.",
    category: "Artisan Equipment",
    source: "Farming Level 8",
    output: {
      id: "12",
      name: "Keg",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 30
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "725",
        name: "Oak Resin",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Keg.png"
  },
  {
    id: "Loom",
    name: "Loom",
    description: "Turns raw wool into fine cloth.",
    category: "Artisan Equipment",
    source: "Farming Level 7",
    output: {
      id: "17",
      name: "Loom",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 60
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 30
      },
      {
        id: "726",
        name: "Pine Tar",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Loom.png"
  },
  {
    id: "Mayonnaise Machine",
    name: "Mayonnaise Machine",
    description: "Turns eggs into mayonnaise.",
    category: "Artisan Equipment",
    source: "Farming Level 2",
    output: {
      id: "24",
      name: "Mayonnaise Machine",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 15
      },
      {
        id: "390",
        name: "Stone",
        quantity: 15
      },
      {
        id: "86",
        name: "Earth Crystal",
        quantity: 1
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Mayonnaise Machine.png"
  },
  {
    id: "Oil Maker",
    name: "Oil Maker",
    description: "Produces gourmet truffle oil when given a truffle.",
    category: "Artisan Equipment",
    source: "Farming Level 8",
    output: {
      id: "19",
      name: "Oil Maker",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "766",
        name: "Slime",
        quantity: 50
      },
      {
        id: "709",
        name: "Hardwood",
        quantity: 20
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/artisan-equipment/Oil Maker.png"
  },
  {
    id: "Preserves Jar",
    name: "Preserves Jar",
    description: "Turns vegetables into pickles and fruit into jam.",
    category: "Artisan Equipment",
    source: "Farming Level 4",
    output: {
      id: "15",
      name: "Preserves Jar",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      },
      {
        id: "390",
        name: "Stone",
        quantity: 40
      },
      {
        id: "382",
        name: "Coal",
        quantity: 8
      }
    ],
    image: "images/craftable/artisan-equipment/Preserves Jar.png"
  },
  {
    id: "Bait Maker",
    name: "Bait Maker",
    description: "Place a fish inside to create targeted bait.",
    category: "Refining Equipment",
    source: "Fishing Level 6",
    output: {
      id: "BaitMaker",
      name: "Bait Maker",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 3
      },
      {
        id: "393",
        name: "Coral",
        quantity: 3
      },
      {
        id: "397",
        name: "Sea Urchin",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Bait Maker.png"
  },
  {
    id: "Bone Mill",
    name: "Bone Mill",
    description: "Converts bone items into fertilizer.",
    category: "Refining Equipment",
    source: "Special",
    output: {
      id: "90",
      name: "Bone Mill",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 10
      },
      {
        id: "330",
        name: "Clay",
        quantity: 3
      },
      {
        id: "390",
        name: "Stone",
        quantity: 20
      }
    ],
    image: "images/craftable/refining-equipment/Bone Mill.png"
  },
  {
    id: "Charcoal Kiln",
    name: "Charcoal Kiln",
    description: "Turns 10 pieces of wood into 1 piece of coal.",
    category: "Refining Equipment",
    source: "Foraging Level 2",
    output: {
      id: "114",
      name: "Charcoal Kiln",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 20
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 2
      }
    ],
    image: "images/craftable/refining-equipment/Charcoal Kiln.png"
  },
  {
    id: "Crystalarium",
    name: "Crystalarium",
    description: "Insert a gem inside and it will grow copies of that gem.",
    category: "Refining Equipment",
    source: "Mining Level 9",
    output: {
      id: "21",
      name: "Crystalarium",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 99
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 5
      },
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 2
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Crystalarium.png"
  },
  {
    id: "Deluxe Worm Bin",
    name: "Deluxe Worm Bin",
    description: "Produces Deluxe Bait regularly. Worms are self-sufficient.",
    category: "Refining Equipment",
    source: "Fishing Level 8",
    output: {
      id: "DeluxeWormBin",
      name: "Deluxe Worm Bin",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "(BC)154",
        name: "Worm Bin",
        quantity: 1
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 30
      }
    ],
    image: "images/craftable/refining-equipment/Deluxe Worm Bin.png"
  },
  {
    id: "Furnace",
    name: "Furnace",
    description: "Converts ore and coal into metal bars.",
    category: "Refining Equipment",
    source: "Mining Level 2",
    output: {
      id: "13",
      name: "Furnace",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "378",
        name: "Copper Ore",
        quantity: 20
      },
      {
        id: "390",
        name: "Stone",
        quantity: 25
      }
    ],
    image: "images/craftable/refining-equipment/Furnace.png"
  },
  {
    id: "Geode Crusher",
    name: "Geode Crusher",
    description: "Automatically breaks open geodes when supplied with coal.",
    category: "Refining Equipment",
    source: "Special",
    output: {
      id: "182",
      name: "Geode Crusher",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "336",
        name: "Gold Bar",
        quantity: 2
      },
      {
        id: "390",
        name: "Stone",
        quantity: 50
      },
      {
        id: "72",
        name: "Diamond",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Geode Crusher.png"
  },
  {
    id: "Heavy Furnace",
    name: "Heavy Furnace",
    description: "Converts ore and coal into metal bars. Requires more ore but less coal per use.",
    category: "Refining Equipment",
    source: "Mining Level 2",
    output: {
      id: "HeavyFurnace",
      name: "Heavy Furnace",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "(BC)13",
        name: "Furnace",
        quantity: 2
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 3
      },
      {
        id: "390",
        name: "Stone",
        quantity: 50
      }
    ],
    image: "images/craftable/refining-equipment/Heavy Furnace.png"
  },
  {
    id: "Heavy Tapper",
    name: "Heavy Tapper",
    description: "Place on a tree. Works twice as fast as a tapper.",
    category: "Refining Equipment",
    source: "Special",
    output: {
      id: "264",
      name: "Heavy Tapper",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 30
      },
      {
        id: "910",
        name: "Radioactive Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Heavy Tapper.png"
  },
  {
    id: "Lightning Rod",
    name: "Lightning Rod",
    description: "Collects energy during lightning storms and turns it into battery packs.",
    category: "Refining Equipment",
    source: "Foraging Level 6",
    output: {
      id: "9",
      name: "Lightning Rod",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 1
      },
      {
        id: "767",
        name: "Bat Wing",
        quantity: 5
      }
    ],
    image: "images/craftable/refining-equipment/Lightning Rod.png"
  },
  {
    id: "Mushroom Log",
    name: "Mushroom Log",
    description: "Grows mushrooms regularly. Better output when placed near wild trees.",
    category: "Refining Equipment",
    source: "Foraging Level 4",
    output: {
      id: "MushroomLog",
      name: "Mushroom Log",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 10
      }
    ],
    image: "images/craftable/refining-equipment/Mushroom Log.png"
  },
  {
    id: "Ostrich Incubator",
    name: "Ostrich Incubator",
    description: "Hatches ostrich eggs into baby ostriches. Place in a barn.",
    category: "Refining Equipment",
    source: "Special",
    output: {
      id: "254",
      name: "Ostrich Incubator",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 50
      },
      {
        id: "709",
        name: "Hardwood",
        quantity: 50
      },
      {
        id: "848",
        name: "Cinder Shard",
        quantity: 20
      }
    ],
    image: "images/craftable/refining-equipment/Ostrich Incubator.png"
  },
  {
    id: "Recycling Machine",
    name: "Recycling Machine",
    description: "Turns fishing trash into resources.",
    category: "Refining Equipment",
    source: "Fishing Level 4",
    output: {
      id: "20",
      name: "Recycling Machine",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 25
      },
      {
        id: "390",
        name: "Stone",
        quantity: 25
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Recycling Machine.png"
  },
  {
    id: "Seed Maker",
    name: "Seed Maker",
    description: "Produces seeds from crops. Core crops have a chance to give 1-3 seeds.",
    category: "Refining Equipment",
    source: "Farming Level 9",
    output: {
      id: "25",
      name: "Seed Maker",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 25
      },
      {
        id: "382",
        name: "Coal",
        quantity: 10
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Seed Maker.png"
  },
  {
    id: "Slime Egg-Press",
    name: "Slime Egg-Press",
    description: "Compresses 100 slimes into a slime egg.",
    category: "Refining Equipment",
    source: "Combat Level 6",
    output: {
      id: "158",
      name: "Slime Egg-Press",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "382",
        name: "Coal",
        quantity: 25
      },
      {
        id: "82",
        name: "Fire Quartz",
        quantity: 1
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/refining-equipment/Slime Egg-Press.png"
  },
  {
    id: "Slime Incubator",
    name: "Slime Incubator",
    description: "Hatches slime eggs into slimes. You can raise them in a slime hutch.",
    category: "Refining Equipment",
    source: "Combat Level 8",
    output: {
      id: "156",
      name: "Slime Incubator",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 2
      },
      {
        id: "766",
        name: "Slime",
        quantity: 100
      }
    ],
    image: "images/craftable/refining-equipment/Slime Incubator.png"
  },
  {
    id: "Tapper",
    name: "Tapper",
    description: "Place on a tree and wait for the reservoir to fill with product.",
    category: "Refining Equipment",
    source: "Foraging Level 4",
    output: {
      id: "105",
      name: "Tapper",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 40
      },
      {
        id: "334",
        name: "Copper Bar",
        quantity: 2
      }
    ],
    image: "images/craftable/refining-equipment/Tapper.png"
  },
  {
    id: "Worm Bin",
    name: "Worm Bin",
    description: "Produces bait regularly. Worms are self-sufficient.",
    category: "Refining Equipment",
    source: "Fishing Level 4",
    output: {
      id: "154",
      name: "Worm Bin",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 15
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 50
      }
    ],
    image: "images/craftable/refining-equipment/Worm Bin.png"
  },
  {
    id: "Iridium Sprinkler",
    name: "Iridium Sprinkler",
    description: "Waters the 24 adjacent tiles every morning.",
    category: "Sprinklers",
    source: "Farming Level 9",
    output: {
      id: "645",
      name: "Iridium Sprinkler",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      },
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 1
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/sprinklers/Iridium Sprinkler.png"
  },
  {
    id: "Quality Sprinkler",
    name: "Quality Sprinkler",
    description: "Waters the 8 adjacent tiles every morning.",
    category: "Sprinklers",
    source: "Farming Level 6",
    output: {
      id: "621",
      name: "Quality Sprinkler",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      },
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 1
      }
    ],
    image: "images/craftable/sprinklers/Quality Sprinkler.png"
  },
  {
    id: "Sprinkler",
    name: "Sprinkler",
    description: "Waters the 4 adjacent tiles every morning.",
    category: "Sprinklers",
    source: "Farming Level 2",
    output: {
      id: "599",
      name: "Sprinkler",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/sprinklers/Sprinkler.png"
  },
  {
    id: "Barrel Brazier",
    name: "Barrel Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "150",
      name: "Barrel Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 1
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Barrel Brazier.png"
  },
  {
    id: "Campfire",
    name: "Campfire",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Starter",
    output: {
      id: "146",
      name: "Campfire",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 10
      },
      {
        id: "388",
        name: "Wood",
        quantity: 10
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 10
      }
    ],
    image: "images/craftable/lighting/Campfire.png"
  },
  {
    id: "Carved Brazier",
    name: "Carved Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "148",
      name: "Carved Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Carved Brazier.png"
  },
  {
    id: "Gold Brazier",
    name: "Gold Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "145",
      name: "Gold Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 5
      }
    ],
    image: "images/craftable/lighting/Gold Brazier.png"
  },
  {
    id: "Iron Lamp-post",
    name: "Iron Lamp-post",
    description: "Provides a good amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "153",
      name: "Iron Lamp-post",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Iron Lamp-post.png"
  },
  {
    id: "Jack-O-Lantern",
    name: "Jack-O-Lantern",
    description: "A whimsical fall decoration.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "746",
      name: "Jack-O-Lantern",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "276",
        name: "Pumpkin",
        quantity: 1
      },
      {
        id: "93",
        name: "Torch",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Jack-O-Lantern.png"
  },
  {
    id: "Marble Brazier",
    name: "Marble Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "151",
      name: "Marble Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "567",
        name: "Marble",
        quantity: 1
      },
      {
        id: "62",
        name: "Aquamarine",
        quantity: 1
      },
      {
        id: "390",
        name: "Stone",
        quantity: 100
      }
    ],
    image: "images/craftable/lighting/Marble Brazier.png"
  },
  {
    id: "Skull Brazier",
    name: "Skull Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "149",
      name: "Skull Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 10
      }
    ],
    image: "images/craftable/lighting/Skull Brazier.png"
  },
  {
    id: "Stone Brazier",
    name: "Stone Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "144",
      name: "Stone Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 10
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 5
      }
    ],
    image: "images/craftable/lighting/Stone Brazier.png"
  },
  {
    id: "Stump Brazier",
    name: "Stump Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "147",
      name: "Stump Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 5
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Stump Brazier.png"
  },
  {
    id: "Torch",
    name: "Torch",
    description: "Provides a little bit of light.",
    category: "Lighting",
    source: "Starter",
    output: {
      id: "93",
      name: "Torch",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      },
      {
        id: "92",
        name: "Sap",
        quantity: 2
      }
    ],
    image: "images/craftable/lighting/Torch.png"
  },
  {
    id: "Wood Lamp-post",
    name: "Wood Lamp-post",
    description: "Provides a good amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "152",
      name: "Wood Lamp-post",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/lighting/Wood Lamp-post.png"
  },
  {
    id: "Wooden Brazier",
    name: "Wooden Brazier",
    description: "Provides a moderate amount of light.",
    category: "Lighting",
    source: "Special",
    output: {
      id: "143",
      name: "Wooden Brazier",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 10
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 5
      }
    ],
    image: "images/craftable/lighting/Wooden Brazier.png"
  },
  {
    id: "Deluxe Scarecrow",
    name: "Deluxe Scarecrow",
    description: 'Prevents crows from attacking your crops. Has a large radius (about 16 "tiles").',
    category: "Farming",
    source: "Special",
    output: {
      id: "167",
      name: "Deluxe Scarecrow",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      },
      {
        id: "386",
        name: "Iridium Ore",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 40
      }
    ],
    image: "images/scarecrows/Deluxe Scarecrow.png"
  },
  {
    id: "Garden Pot",
    name: "Garden Pot",
    description: "You can grow crops from any season in this. Place it indoors or outdoors.",
    category: "Farming",
    source: "Special",
    output: {
      id: "62",
      name: "Garden Pot",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "330",
        name: "Clay",
        quantity: 1
      },
      {
        id: "390",
        name: "Stone",
        quantity: 10
      },
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 1
      }
    ],
    image: "images/craftable/misc/Garden Pot.png"
  },
  {
    id: "Hopper",
    name: "Hopper",
    description: "Items placed inside will automatically be loaded into the machine in front of it.",
    category: "Farming",
    source: "Special",
    output: {
      id: "275",
      name: "Hopper",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 1
      },
      {
        id: "910",
        name: "Radioactive Bar",
        quantity: 1
      }
    ],
    image: "images/craftable/misc/Hopper.png"
  },
  {
    id: "Scarecrow",
    name: "Scarecrow",
    description: 'Prevents crows from attacking your crops. Has a limited radius (about 8 "tiles").',
    category: "Farming",
    source: "Farming Level 1",
    output: {
      id: "8",
      name: "Scarecrow",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 50
      },
      {
        id: "382",
        name: "Coal",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 20
      }
    ],
    image: "images/scarecrows/Scarecrow.png"
  },
  {
    id: "Tub o' Flowers",
    name: "Tub o' Flowers",
    description: "Plant it outside in spring or summer for a beautiful bouquet of flowers.",
    category: "Decor",
    source: "Special",
    output: {
      id: "108",
      name: "Tub o' Flowers",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 15
      },
      {
        id: "427",
        name: "Tulip Bulb",
        quantity: 1
      },
      {
        id: "429",
        name: "Jazz Seeds",
        quantity: 1
      },
      {
        id: "453",
        name: "Poppy Seeds",
        quantity: 1
      },
      {
        id: "455",
        name: "Spangle Seeds",
        quantity: 1
      }
    ],
    image: "images/craftable/furniture/Tub o' Flowers.png"
  },
  {
    id: "Wicked Statue",
    name: "Wicked Statue",
    description: "The statue smiles at you.",
    category: "Decor",
    source: "Special",
    output: {
      id: "83",
      name: "Wicked Statue",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "382",
        name: "Coal",
        quantity: 5
      },
      {
        id: "390",
        name: "Stone",
        quantity: 25
      }
    ],
    image: "images/craftable/furniture/Wicked Statue.png"
  },
  {
    id: "Drum Block",
    name: "Drum Block",
    description: "Plays a drum note when you walk past.",
    category: "Instruments",
    source: "Special",
    output: {
      id: "463",
      name: "Drum Block",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 10
      },
      {
        id: "378",
        name: "Copper Ore",
        quantity: 2
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 20
      }
    ],
    image: "images/craftable/furniture/Drum Block.png"
  },
  {
    id: "Flute Block",
    name: "Flute Block",
    description: "Plays a flute note when you walk past.",
    category: "Instruments",
    source: "Special",
    output: {
      id: "464",
      name: "Flute Block",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 10
      },
      {
        id: "378",
        name: "Copper Ore",
        quantity: 2
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 20
      }
    ],
    image: "images/craftable/furniture/Flute Block.png"
  },
  {
    id: "Glowstone Ring",
    name: "Glowstone Ring",
    description: "Emits a constant light and increases your radius for collecting items.",
    category: "Rings",
    source: "Mining Level 4",
    output: {
      id: "888",
      name: "Glowstone Ring",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "768",
        name: "Solar Essence",
        quantity: 5
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 5
      }
    ],
    image: "images/rings/Glowstone Ring.png"
  },
  {
    id: "Iridium Band",
    name: "Iridium Band",
    description: "Glows, attracts items, and increases damage by 10%.",
    category: "Rings",
    source: "Combat Level 9",
    output: {
      id: "527",
      name: "Iridium Band",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 5
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 50
      },
      {
        id: "769",
        name: "Void Essence",
        quantity: 50
      }
    ],
    image: "images/rings/Iridium Band.png"
  },
  {
    id: "Ring of Yoba",
    name: "Ring of Yoba",
    description: "Occasionally shields the wearer from damage.",
    category: "Rings",
    source: "Combat Level 7",
    output: {
      id: "524",
      name: "Ring of Yoba",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "336",
        name: "Gold Bar",
        quantity: 5
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 5
      },
      {
        id: "72",
        name: "Diamond",
        quantity: 1
      }
    ],
    image: "images/rings/Ring of Yoba.png"
  },
  {
    id: "Sturdy Ring",
    name: "Sturdy Ring",
    description: "Cuts the duration of negative status effects in half.",
    category: "Rings",
    source: "Combat Level 1",
    output: {
      id: "525",
      name: "Sturdy Ring",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 2
      },
      {
        id: "684",
        name: "Bug Meat",
        quantity: 25
      },
      {
        id: "766",
        name: "Slime",
        quantity: 25
      }
    ],
    image: "images/rings/Sturdy Ring.png"
  },
  {
    id: "Thorns Ring",
    name: "Thorns Ring",
    description: "When an enemy injures you, they will take 1/3 of the damage they caused.",
    category: "Rings",
    source: "Combat Level 7",
    output: {
      id: "839",
      name: "Thorns Ring",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 50
      },
      {
        id: "390",
        name: "Stone",
        quantity: 50
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      }
    ],
    image: "images/rings/Thorns Ring.png"
  },
  {
    id: "Warrior Ring",
    name: "Warrior Ring",
    description: 'Occasionally infuses the wearer with "warrior energy" after slaying a monster.',
    category: "Rings",
    source: "Combat Level 4",
    output: {
      id: "521",
      name: "Warrior Ring",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 10
      },
      {
        id: "382",
        name: "Coal",
        quantity: 25
      },
      {
        id: "84",
        name: "Frozen Tear",
        quantity: 10
      }
    ],
    image: "images/rings/Warrior Ring.png"
  },
  {
    id: "Wedding Ring",
    name: "Wedding Ring",
    description: "Give this to another player to propose marriage.",
    category: "Rings",
    source: "Special",
    output: {
      id: "801",
      name: "Wedding Ring",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 5
      },
      {
        id: "74",
        name: "Prismatic Shard",
        quantity: 1
      }
    ],
    image: "images/rings/Wedding Ring.png"
  },
  {
    id: "Bait",
    name: "Bait",
    description: "Causes fish to bite faster. Must be attached to a fishing rod. (+5)",
    category: "Fishing",
    source: "Fishing Level 2",
    output: {
      id: "685",
      name: "Bait",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "684",
        name: "Bug Meat",
        quantity: 1
      }
    ],
    image: "images/fish/bait/Bait.png"
  },
  {
    id: "Barbed Hook",
    name: "Barbed Hook",
    description: 'Makes your catch more secure, causing the "fishing bar" to cling to your fish. Works best on slow, weak fish.',
    category: "Fishing",
    source: "Fishing Level 8",
    output: {
      id: "691",
      name: "Barbed Hook",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 1
      }
    ],
    image: "images/fish/tackle/Barbed Hook.png"
  },
  {
    id: "Challenge Bait",
    name: "Challenge Bait",
    description: "A perfect catch triples the fish caught, but any escape removes one. (+5)",
    category: "Fishing",
    source: "Special",
    output: {
      id: "ChallengeBait",
      name: "Challenge Bait",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 5
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 2
      }
    ],
    image: "images/fish/bait/Challenge Bait.png"
  },
  {
    id: "Cork Bobber",
    name: "Cork Bobber",
    description: 'Slightly increases the size of your "fishing bar".',
    category: "Fishing",
    source: "Fishing Level 7",
    output: {
      id: "695",
      name: "Cork Bobber",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 10
      },
      {
        id: "709",
        name: "Hardwood",
        quantity: 5
      },
      {
        id: "766",
        name: "Slime",
        quantity: 10
      }
    ],
    image: "images/fish/tackle/Cork Bobber.png"
  },
  {
    id: "Crab Pot",
    name: "Crab Pot",
    description: "Place it in the water, load it with bait, and check the next day.",
    category: "Fishing",
    source: "Fishing Level 3",
    output: {
      id: "710",
      name: "Crab Pot",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 40
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 3
      }
    ],
    image: "images/craftable/fishing/Crab Pot.png"
  },
  {
    id: "Deluxe Bait",
    name: "Deluxe Bait",
    description: "Fish bite faster and you'll rarely miss a catch. Also slightly increases the size of the fishing bar. (+5)",
    category: "Fishing",
    source: "Fishing Level 4",
    output: {
      id: "DeluxeBait",
      name: "Deluxe Bait",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "685",
        name: "Bait",
        quantity: 5
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 2
      }
    ],
    image: "images/fish/bait/Deluxe Bait.png"
  },
  {
    id: "Dressed Spinner",
    name: "Dressed Spinner",
    description: "The attractive lure creates a lot of vibration and movement. Increases the bite-rate when fishing.",
    category: "Fishing",
    source: "Fishing Level 8",
    output: {
      id: "687",
      name: "Dressed Spinner",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 2
      },
      {
        id: "428",
        name: "Cloth",
        quantity: 1
      }
    ],
    image: "images/fish/tackle/Dressed Spinner.png"
  },
  {
    id: "Magic Bait",
    name: "Magic Bait",
    description: "Allows you to catch fish from any location, season, or weather. (+5)",
    category: "Fishing",
    source: "Special",
    output: {
      id: "908",
      name: "Magic Bait",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "909",
        name: "Radioactive Ore",
        quantity: 1
      },
      {
        id: "684",
        name: "Bug Meat",
        quantity: 3
      }
    ],
    image: "images/fish/bait/Magic Bait.png"
  },
  {
    id: "Magnet",
    name: "Magnet",
    description: "Increases the chance of finding treasure while fishing, but fish aren't as attracted to it. (+3)",
    category: "Fishing",
    source: "Fishing Level 9",
    output: {
      id: "703",
      name: "Magnet",
      quantity: 3,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      }
    ],
    image: "images/fish/bait/Magnet.png"
  },
  {
    id: "Quality Bobber",
    name: "Quality Bobber",
    description: "Increases the quality of caught fish.",
    category: "Fishing",
    source: "Special",
    output: {
      id: "877",
      name: "Quality Bobber",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      },
      {
        id: "92",
        name: "Sap",
        quantity: 20
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 5
      }
    ],
    image: "images/fish/tackle/Quality Bobber.png"
  },
  {
    id: "Sonar Bobber",
    name: "Sonar Bobber",
    description: "Allows you to see which fish is biting before you catch it.",
    category: "Fishing",
    source: "Fishing Level 6",
    output: {
      id: "SonarBobber",
      name: "Sonar Bobber",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 2
      }
    ],
    image: "images/fish/tackle/Sonar Bobber.png"
  },
  {
    id: "Spinner",
    name: "Spinner",
    description: "The rotating lure creates a lot of vibration and movement. Slightly increases bite-rate when fishing.",
    category: "Fishing",
    source: "Fishing Level 6",
    output: {
      id: "686",
      name: "Spinner",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 2
      }
    ],
    image: "images/fish/tackle/Spinner.png"
  },
  {
    id: "Trap Bobber",
    name: "Trap Bobber",
    description: "Causes fish to escape slower when you aren't reeling them in.",
    category: "Fishing",
    source: "Fishing Level 6",
    output: {
      id: "694",
      name: "Trap Bobber",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 1
      },
      {
        id: "92",
        name: "Sap",
        quantity: 10
      }
    ],
    image: "images/fish/tackle/Trap Bobber.png"
  },
  {
    id: "Treasure Hunter",
    name: "Treasure Hunter",
    description: "Fish don't escape while you're collecting treasure.",
    category: "Fishing",
    source: "Fishing Level 7",
    output: {
      id: "693",
      name: "Treasure Hunter",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "336",
        name: "Gold Bar",
        quantity: 2
      }
    ],
    image: "images/fish/tackle/Treasure Hunter.png"
  },
  {
    id: "Wild Bait",
    name: "Wild Bait",
    description: "A special bait that appeals to all fish. With this bait, you have a chance of catching 2 fish at once. (+5)",
    category: "Fishing",
    source: "Special",
    output: {
      id: "774",
      name: "Wild Bait",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "771",
        name: "Fiber",
        quantity: 10
      },
      {
        id: "684",
        name: "Bug Meat",
        quantity: 5
      },
      {
        id: "766",
        name: "Slime",
        quantity: 5
      }
    ],
    image: "images/fish/bait/Wild Bait.png"
  },
  {
    id: "Brick Floor",
    name: "Brick Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "293",
      name: "Brick Floor",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "330",
        name: "Clay",
        quantity: 2
      },
      {
        id: "390",
        name: "Stone",
        quantity: 5
      }
    ],
    image: "images/craftable/decor/Brick Floor.png"
  },
  {
    id: "Crystal Floor",
    name: "Crystal Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "333",
      name: "Crystal Floor",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Crystal Floor.png"
  },
  {
    id: "Rustic Plank Floor",
    name: "Rustic Plank Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "840",
      name: "Rustic Plank Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Rustic Plank Floor.png"
  },
  {
    id: "Stone Floor",
    name: "Stone Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "329",
      name: "Stone Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Stone Floor.png"
  },
  {
    id: "Stone Walkway Floor",
    name: "Stone Walkway Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "841",
      name: "Stone Walkway Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Stone Walkway Floor.png"
  },
  {
    id: "Straw Floor",
    name: "Straw Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "401",
      name: "Straw Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Straw Floor.png"
  },
  {
    id: "Weathered Floor",
    name: "Weathered Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "331",
      name: "Weathered Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Weathered Floor.png"
  },
  {
    id: "Wood Floor",
    name: "Wood Floor",
    description: "Use this to make a path or to decorate your floors.",
    category: "Flooring",
    source: "Starter",
    output: {
      id: "328",
      name: "Wood Floor",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Wood Floor.png"
  },
  {
    id: "Cobblestone Path",
    name: "Cobblestone Path",
    description: "Use this to make a path or to decorate your floors.",
    category: "Paths",
    source: "Starter",
    output: {
      id: "411",
      name: "Cobblestone Path",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Cobblestone Path.png"
  },
  {
    id: "Crystal Path",
    name: "Crystal Path",
    description: "Use this to make a path or to decorate your floors.",
    category: "Paths",
    source: "Starter",
    output: {
      id: "409",
      name: "Crystal Path",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Crystal Path.png"
  },
  {
    id: "Gravel Path",
    name: "Gravel Path",
    description: "Use this to make a path or to decorate your floors.",
    category: "Paths",
    source: "Starter",
    output: {
      id: "407",
      name: "Gravel Path",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Gravel Path.png"
  },
  {
    id: "Stepping Stone Path",
    name: "Stepping Stone Path",
    description: "Use this to make a path or to decorate your floors.",
    category: "Paths",
    source: "Starter",
    output: {
      id: "415",
      name: "Stepping Stone Path",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Stepping Stone Path.png"
  },
  {
    id: "Wood Path",
    name: "Wood Path",
    description: "Use this to make a path or to decorate your floors.",
    category: "Paths",
    source: "Starter",
    output: {
      id: "405",
      name: "Wood Path",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 1
      }
    ],
    image: "images/craftable/decor/Wood Path.png"
  },
  {
    id: "Ancient Seeds",
    name: "Ancient Seeds",
    description: "Plant these in Spring, Summer, or Fall. Takes 28 days to mature, and produces fruit every 7 days.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "499",
      name: "Ancient Seeds",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "114",
        name: "Ancient Seed",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Ancient Seeds.png"
  },
  {
    id: "Basic Fertilizer",
    name: "Basic Fertilizer",
    description: "Improves soil quality, increasing your chance of producing quality crops. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 1",
    output: {
      id: "368",
      name: "Basic Fertilizer",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "92",
        name: "Sap",
        quantity: 2
      }
    ],
    image: "images/craftable/fertilizer/Basic Fertilizer.png"
  },
  {
    id: "Basic Retaining Soil",
    name: "Basic Retaining Soil",
    description: "This soil has a chance of staying watered overnight. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 4",
    output: {
      id: "370",
      name: "Basic Retaining Soil",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 2
      }
    ],
    image: "images/craftable/fertilizer/Basic Retaining Soil.png"
  },
  {
    id: "Blue Grass Starter",
    name: "Blue Grass Starter",
    description: "Grows into a patch of blue grass when placed on the farm.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "BlueGrassStarter",
      name: "Blue Grass Starter",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "771",
        name: "Fiber",
        quantity: 25
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 10
      },
      {
        id: "MysticSyrup",
        name: "Mystic Syrup",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Blue Grass Starter.png"
  },
  {
    id: "Deluxe Fertilizer",
    name: "Deluxe Fertilizer",
    description: "Greatly improves soil quality. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "919",
      name: "Deluxe Fertilizer",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 1
      },
      {
        id: "92",
        name: "Sap",
        quantity: 40
      }
    ],
    image: "images/craftable/fertilizer/Deluxe Fertilizer.png"
  },
  {
    id: "Deluxe Retaining Soil",
    name: "Deluxe Retaining Soil",
    description: "This soil will stay watered overnight. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "920",
      name: "Deluxe Retaining Soil",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 5
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 3
      },
      {
        id: "330",
        name: "Clay",
        quantity: 1
      }
    ],
    image: "images/craftable/fertilizer/Deluxe Retaining Soil.png"
  },
  {
    id: "Deluxe Speed-Gro",
    name: "Deluxe Speed-Gro",
    description: "Stimulates leaf production. Guaranteed to increase growth rate by at least 25%. Mix into tilled soil before planting.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 8",
    output: {
      id: "466",
      name: "Deluxe Speed-Gro",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "725",
        name: "Oak Resin",
        quantity: 1
      },
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 5
      }
    ],
    image: "images/craftable/fertilizer/Deluxe Speed-Gro.png"
  },
  {
    id: "Fiber Seeds",
    name: "Fiber Seeds",
    description: "Plant these in any season. They don't need water.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "885",
      name: "Fiber Seeds",
      quantity: 4,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "770",
        name: "Mixed Seeds",
        quantity: 1
      },
      {
        id: "92",
        name: "Sap",
        quantity: 5
      },
      {
        id: "330",
        name: "Clay",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Fiber Seeds.png"
  },
  {
    id: "Grass Starter",
    name: "Grass Starter",
    description: "Grows into a patch of grass when placed on the farm.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "297",
      name: "Grass Starter",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "771",
        name: "Fiber",
        quantity: 10
      }
    ],
    image: "images/craftable/seeds/Grass Starter.png"
  },
  {
    id: "Hyper Speed-Gro",
    name: "Hyper Speed-Gro",
    description: "Stimulates leaf production. Guaranteed to increase growth rate by at least 33%. Mix into tilled soil before planting.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "918",
      name: "Hyper Speed-Gro",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "909",
        name: "Radioactive Ore",
        quantity: 1
      },
      {
        id: "881",
        name: "Bone Fragment",
        quantity: 3
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 1
      }
    ],
    image: "images/craftable/fertilizer/Hyper Speed-Gro.png"
  },
  {
    id: "Mystic Tree Seed",
    name: "Mystic Tree Seed",
    description: "Plant this to grow a mystic tree.",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "MysticTreeSeed",
      name: "Mystic Tree Seed",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "309",
        name: "Acorn",
        quantity: 5
      },
      {
        id: "310",
        name: "Maple Seed",
        quantity: 5
      },
      {
        id: "311",
        name: "Pine Cone",
        quantity: 5
      },
      {
        id: "292",
        name: "Mahogany Seed",
        quantity: 5
      }
    ],
    image: "images/craftable/seeds/Mystic Tree Seed.png"
  },
  {
    id: "Quality Fertilizer",
    name: "Quality Fertilizer",
    description: "Improves soil quality greatly, increasing your chance of producing quality crops. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 9",
    output: {
      id: "369",
      name: "Quality Fertilizer",
      quantity: 2,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "92",
        name: "Sap",
        quantity: 4
      },
      {
        id: "-4",
        name: "Any Fish",
        quantity: 1
      }
    ],
    image: "images/craftable/fertilizer/Quality Fertilizer.png"
  },
  {
    id: "Quality Retaining Soil",
    name: "Quality Retaining Soil",
    description: "This soil has a good chance of staying watered overnight. Mix into tilled soil.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 7",
    output: {
      id: "371",
      name: "Quality Retaining Soil",
      quantity: 2,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 3
      },
      {
        id: "330",
        name: "Clay",
        quantity: 1
      }
    ],
    image: "images/craftable/fertilizer/Quality Retaining Soil.png"
  },
  {
    id: "Speed-Gro",
    name: "Speed-Gro",
    description: "Stimulates leaf production. Guaranteed to increase growth rate by at least 10%. Mix into tilled soil before planting.",
    category: "Seeds & Fertilizer",
    source: "Farming Level 3",
    output: {
      id: "465",
      name: "Speed-Gro",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "726",
        name: "Pine Tar",
        quantity: 1
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 5
      }
    ],
    image: "images/craftable/fertilizer/Speed-Gro.png"
  },
  {
    id: "Tea Sapling",
    name: "Tea Sapling",
    description: "Takes 20 days to mature, after which it produces tea leaves during the last week of each season (except winter).",
    category: "Seeds & Fertilizer",
    source: "Special",
    output: {
      id: "251",
      name: "Tea Sapling",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "-777",
        name: "Mixed Seeds",
        quantity: 2
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 5
      },
      {
        id: "388",
        name: "Wood",
        quantity: 5
      }
    ],
    image: "images/craftable/seeds/Tea Sapling.png"
  },
  {
    id: "Tree Fertilizer",
    name: "Tree Fertilizer",
    description: "Speeds up the growth of wild trees. Spread on a young tree.",
    category: "Seeds & Fertilizer",
    source: "Foraging Level 7",
    output: {
      id: "805",
      name: "Tree Fertilizer",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "771",
        name: "Fiber",
        quantity: 5
      },
      {
        id: "390",
        name: "Stone",
        quantity: 5
      }
    ],
    image: "images/craftable/fertilizer/Tree Fertilizer.png"
  },
  {
    id: "Wild Seeds (Fa)",
    name: "Wild Seeds (Fa)",
    description: "An assortment of wild Fall seeds. Plant these in Fall.",
    category: "Seeds & Fertilizer",
    source: "Foraging Level 6",
    output: {
      id: "497",
      name: "Fall Seeds",
      quantity: 10,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "404",
        name: "Common Mushroom",
        quantity: 1
      },
      {
        id: "406",
        name: "Wild Plum",
        quantity: 1
      },
      {
        id: "408",
        name: "Hazelnut",
        quantity: 1
      },
      {
        id: "410",
        name: "Blackberry",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Fall Seeds.png"
  },
  {
    id: "Wild Seeds (Sp)",
    name: "Wild Seeds (Sp)",
    description: "An assortment of wild Spring seeds. Plant these in Spring.",
    category: "Seeds & Fertilizer",
    source: "Foraging Level 1",
    output: {
      id: "495",
      name: "Spring Seeds",
      quantity: 10,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "16",
        name: "Wild Horseradish",
        quantity: 1
      },
      {
        id: "18",
        name: "Daffodil",
        quantity: 1
      },
      {
        id: "20",
        name: "Leek",
        quantity: 1
      },
      {
        id: "22",
        name: "Dandelion",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Spring Seeds.png"
  },
  {
    id: "Wild Seeds (Su)",
    name: "Wild Seeds (Su)",
    description: "An assortment of wild Summer seeds. Plant these in Summer.",
    category: "Seeds & Fertilizer",
    source: "Foraging Level 4",
    output: {
      id: "496",
      name: "Summer Seeds",
      quantity: 10,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "396",
        name: "Spice Berry",
        quantity: 1
      },
      {
        id: "398",
        name: "Grape",
        quantity: 1
      },
      {
        id: "402",
        name: "Sweet Pea",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Summer Seeds.png"
  },
  {
    id: "Wild Seeds (Wi)",
    name: "Wild Seeds (Wi)",
    description: "An assortment of wild Winter seeds. Plant these in Winter.",
    category: "Seeds & Fertilizer",
    source: "Foraging Level 7",
    output: {
      id: "498",
      name: "Winter Seeds",
      quantity: 10,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "412",
        name: "Winter Root",
        quantity: 1
      },
      {
        id: "414",
        name: "Crystal Fruit",
        quantity: 1
      },
      {
        id: "416",
        name: "Snow Yam",
        quantity: 1
      },
      {
        id: "418",
        name: "Crocus",
        quantity: 1
      }
    ],
    image: "images/craftable/seeds/Winter Seeds.png"
  },
  {
    id: "Cookout Kit",
    name: "Cookout Kit",
    description: "Use this to create a cooking campfire, allowing you to cook on-the-go!",
    category: "Totems",
    source: "Foraging Level 3",
    output: {
      id: "926",
      name: "Cookout Kit",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "388",
        name: "Wood",
        quantity: 15
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 10
      },
      {
        id: "382",
        name: "Coal",
        quantity: 3
      }
    ],
    image: "images/craftable/misc/Cookout Kit.png"
  },
  {
    id: "Rain Totem",
    name: "Rain Totem",
    description: "Activate to greatly increase the chance of rain tomorrow. Consumed on use.",
    category: "Totems",
    source: "Foraging Level 9",
    output: {
      id: "681",
      name: "Rain Totem",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      },
      {
        id: "432",
        name: "Truffle Oil",
        quantity: 1
      },
      {
        id: "726",
        name: "Pine Tar",
        quantity: 5
      }
    ],
    image: "images/craftable/consumables/Rain Totem.png"
  },
  {
    id: "Tent Kit",
    name: "Tent Kit",
    description: "Use this to deploy a one-time-use tent for sleeping. Can only be used outdoors.",
    category: "Totems",
    source: "Foraging Level 8",
    output: {
      id: "TentKit",
      name: "Tent Kit",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 10
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 25
      },
      {
        id: "428",
        name: "Cloth",
        quantity: 1
      }
    ],
    image: "images/craftable/misc/Tent Kit.png"
  },
  {
    id: "Treasure Totem",
    name: "Treasure Totem",
    description: "Use on diggable terrain to summon a ring of treasure spots.",
    category: "Totems",
    source: "Special",
    output: {
      id: "TreasureTotem",
      name: "Treasure Totem",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 5
      },
      {
        id: "MysticSyrup",
        name: "Mystic Syrup",
        quantity: 1
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 10
      }
    ],
    image: "images/craftable/consumables/Treasure Totem.png"
  },
  {
    id: "Warp Totem: Beach",
    name: "Warp Totem: Beach",
    description: "Warp directly to the beach. Consumed on use.",
    category: "Totems",
    source: "Foraging Level 6",
    output: {
      id: "690",
      name: "Warp Totem: Beach",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      },
      {
        id: "393",
        name: "Coral",
        quantity: 2
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 10
      }
    ],
    image: "images/craftable/consumables/Warp Totem Beach.png"
  },
  {
    id: "Warp Totem: Desert",
    name: "Warp Totem: Desert",
    description: "Warp directly to the Calico Desert. Consumed on use.",
    category: "Totems",
    source: "Special",
    output: {
      id: "261",
      name: "Warp Totem: Desert",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 2
      },
      {
        id: "88",
        name: "Coconut",
        quantity: 1
      },
      {
        id: "386",
        name: "Iridium Ore",
        quantity: 4
      }
    ],
    image: "images/craftable/consumables/Warp Totem Desert.png"
  },
  {
    id: "Warp Totem: Farm",
    name: "Warp Totem: Farm",
    description: "Warp directly to your house. Consumed on use.",
    category: "Totems",
    source: "Foraging Level 8",
    output: {
      id: "688",
      name: "Warp Totem: Farm",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      },
      {
        id: "340",
        name: "Honey",
        quantity: 1
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 20
      }
    ],
    image: "images/craftable/consumables/Warp Totem Farm.png"
  },
  {
    id: "Warp Totem: Island",
    name: "Warp Totem: Island",
    description: "Warp directly to Ginger Island. Consumed on use.",
    category: "Totems",
    source: "Special",
    output: {
      id: "886",
      name: "Warp Totem: Island",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 5
      },
      {
        id: "852",
        name: "Dragon Tooth",
        quantity: 1
      },
      {
        id: "829",
        name: "Ginger",
        quantity: 1
      }
    ],
    image: "images/craftable/consumables/Warp Totem Island.png"
  },
  {
    id: "Warp Totem: Mountains",
    name: "Warp Totem: Mountains",
    description: "Warp directly to the mountains. Consumed on use.",
    category: "Totems",
    source: "Foraging Level 7",
    output: {
      id: "689",
      name: "Warp Totem: Mountains",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 1
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "390",
        name: "Stone",
        quantity: 25
      }
    ],
    image: "images/craftable/consumables/Warp Totem Mountains.png"
  },
  {
    id: "Field Snack",
    name: "Field Snack",
    description: "A quick snack to fuel the hungry forager.",
    category: "Food",
    source: "Foraging Level 1",
    output: {
      id: "403",
      name: "Field Snack",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "309",
        name: "Acorn",
        quantity: 1
      },
      {
        id: "310",
        name: "Maple Seed",
        quantity: 1
      },
      {
        id: "311",
        name: "Pine Cone",
        quantity: 1
      }
    ],
    image: "images/craftable/edible-items/Field Snack.png"
  },
  {
    id: "Bug Steak",
    name: "Bug Steak",
    description: "The last resort of a hungry cave diver.",
    category: "Combat",
    source: "Combat Level 1",
    output: {
      id: "874",
      name: "Bug Steak",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "684",
        name: "Bug Meat",
        quantity: 10
      }
    ],
    image: "images/craftable/edible-items/Bug Steak.png"
  },
  {
    id: "Explosive Ammo",
    name: "Explosive Ammo",
    description: "Load into a slingshot and fire at enemies. (+5)",
    category: "Combat",
    source: "Combat Level 8",
    output: {
      id: "441",
      name: "Explosive Ammo",
      quantity: 5,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 1
      },
      {
        id: "382",
        name: "Coal",
        quantity: 2
      }
    ],
    image: "images/craftable/misc/Explosive Ammo.png"
  },
  {
    id: "Fairy Dust",
    name: "Fairy Dust",
    description: "Sprinkle on kegs, furnaces, and other processing equipment to instantly receive product.",
    category: "Combat",
    source: "Special",
    output: {
      id: "872",
      name: "Fairy Dust",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "72",
        name: "Diamond",
        quantity: 1
      },
      {
        id: "595",
        name: "Fairy Rose",
        quantity: 1
      }
    ],
    image: "images/craftable/consumables/Fairy Dust.png"
  },
  {
    id: "Life Elixir",
    name: "Life Elixir",
    description: "Restores health to full.",
    category: "Combat",
    source: "Combat Level 2",
    output: {
      id: "773",
      name: "Life Elixir",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "420",
        name: "Red Mushroom",
        quantity: 1
      },
      {
        id: "422",
        name: "Purple Mushroom",
        quantity: 1
      },
      {
        id: "257",
        name: "Morel",
        quantity: 1
      },
      {
        id: "281",
        name: "Chanterelle",
        quantity: 1
      }
    ],
    image: "images/craftable/edible-items/Life Elixir.png"
  },
  {
    id: "Monster Musk",
    name: "Monster Musk",
    description: "Spray this on yourself to bring out more monsters.",
    category: "Combat",
    source: "Special",
    output: {
      id: "879",
      name: "Monster Musk",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "767",
        name: "Bat Wing",
        quantity: 30
      },
      {
        id: "766",
        name: "Slime",
        quantity: 30
      }
    ],
    image: "images/craftable/consumables/Monster Musk.png"
  },
  {
    id: "Oil Of Garlic",
    name: "Oil Of Garlic",
    description: "Drink this and weaker monsters will be too afraid to approach you.",
    category: "Combat",
    source: "Combat Level 6",
    output: {
      id: "772",
      name: "Oil of Garlic",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "248",
        name: "Garlic",
        quantity: 10
      },
      {
        id: "247",
        name: "Oil",
        quantity: 1
      }
    ],
    image: "images/craftable/edible-items/Oil of Garlic.png"
  },
  {
    id: "Anvil",
    name: "Anvil",
    description: "Allows you to re-forge trinkets, randomizing their stats. Costs 3 iridium bars per use.",
    category: "Misc",
    source: "Mining Level 2",
    output: {
      id: "Anvil",
      name: "Anvil",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 50
      }
    ],
    image: "images/craftable/misc/Anvil.png"
  },
  {
    id: "Farm Computer",
    name: "Farm Computer",
    description: "Scans the farm and displays useful information.",
    category: "Misc",
    source: "Special",
    output: {
      id: "239",
      name: "Farm Computer",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "122",
        name: "Dwarf Gadget",
        quantity: 1
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      },
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 10
      }
    ],
    image: "images/craftable/misc/Farm Computer.png"
  },
  {
    id: "Mini-Forge",
    name: "Mini-Forge",
    description: "Now, you can use a dwarvish forge from the convenience of your home.",
    category: "Misc",
    source: "Mining Level 2",
    output: {
      id: "MiniForge",
      name: "Mini-Forge",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "852",
        name: "Dragon Tooth",
        quantity: 5
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 10
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 10
      },
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 5
      }
    ],
    image: "images/craftable/misc/Mini-Forge.png"
  },
  {
    id: "Mini-Jukebox",
    name: "Mini-Jukebox",
    description: "Play your favorite songs.",
    category: "Misc",
    source: "Special",
    output: {
      id: "209",
      name: "Mini-Jukebox",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 2
      },
      {
        id: "787",
        name: "Battery Pack",
        quantity: 1
      }
    ],
    image: "images/craftable/misc/Mini-Jukebox.png"
  },
  {
    id: "Mini-Obelisk",
    name: "Mini-Obelisk",
    description: "Place two on the farm to warp between them.",
    category: "Misc",
    source: "Special",
    output: {
      id: "238",
      name: "Mini-Obelisk",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "709",
        name: "Hardwood",
        quantity: 30
      },
      {
        id: "768",
        name: "Solar Essence",
        quantity: 20
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 3
      }
    ],
    image: "images/craftable/misc/Mini-Obelisk.png"
  },
  {
    id: "Solar Panel",
    name: "Solar Panel",
    description: "Slowly generates battery packs when left in the sun.",
    category: "Misc",
    source: "Special",
    output: {
      id: "231",
      name: "Solar Panel",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "338",
        name: "Refined Quartz",
        quantity: 10
      },
      {
        id: "335",
        name: "Iron Bar",
        quantity: 5
      },
      {
        id: "336",
        name: "Gold Bar",
        quantity: 5
      }
    ],
    image: "images/craftable/refining-equipment/Solar Panel.png"
  },
  {
    id: "Staircase",
    name: "Staircase",
    description: "Use this to reach the next level of the mine.",
    category: "Misc",
    source: "Mining Level 2",
    output: {
      id: "71",
      name: "Staircase",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 99
      }
    ],
    image: "images/craftable/misc/Staircase.png"
  },
  {
    id: "Statue Of Blessings",
    name: "Statue Of Blessings",
    description: "Touching the statue gives a unique blessing every day.",
    category: "Misc",
    source: "Special",
    output: {
      id: "StatueOfBlessings",
      name: "Statue Of Blessings",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "390",
        name: "Stone",
        quantity: 999
      },
      {
        id: "771",
        name: "Fiber",
        quantity: 999
      },
      {
        id: "92",
        name: "Sap",
        quantity: 999
      },
      {
        id: "Moss",
        name: "Moss",
        quantity: 333
      }
    ],
    image: "images/craftable/misc/Statue Of Blessings.png"
  },
  {
    id: "Statue Of The Dwarf King",
    name: "Statue Of The Dwarf King",
    description: "Choose from two mining-related powers each day.",
    category: "Misc",
    source: "Special",
    output: {
      id: "StatueOfTheDwarfKing",
      name: "Statue Of The Dwarf King",
      quantity: 1,
      isBigCraftable: true
    },
    ingredients: [
      {
        id: "337",
        name: "Iridium Bar",
        quantity: 20
      }
    ],
    image: "images/craftable/misc/Statue Of The Dwarf King.png"
  },
  {
    id: "Transmute (Au)",
    name: "Transmute (Au)",
    description: "Turns iron bars into gold bars.",
    category: "Misc",
    source: "Mining Level 7",
    output: {
      id: "336",
      name: "Gold Bar",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "335",
        name: "Iron Bar",
        quantity: 2
      }
    ],
    image: "images/minerals/bars/Gold Bar.png"
  },
  {
    id: "Transmute (Fe)",
    name: "Transmute (Fe)",
    description: "Turns copper bars into iron bars.",
    category: "Misc",
    source: "Mining Level 4",
    output: {
      id: "335",
      name: "Iron Bar",
      quantity: 1,
      isBigCraftable: false
    },
    ingredients: [
      {
        id: "334",
        name: "Copper Bar",
        quantity: 3
      }
    ],
    image: "images/minerals/bars/Iron Bar.png"
  }
];

// src/modules/crafting/index.ts
var allCraftingData = crafting_default;
var CraftingQuery = class _CraftingQuery extends QueryBase {
  constructor(data = allCraftingData) {
    super(data);
  }
  /** Filter recipes by category (case-insensitive). */
  byCategory(category) {
    const lower = category.toLowerCase();
    return new _CraftingQuery(this.data.filter((r) => r.category.toLowerCase() === lower));
  }
  /** Filter recipes by source string (partial match, case-insensitive). */
  bySource(source) {
    const lower = source.toLowerCase();
    return new _CraftingQuery(this.data.filter((r) => r.source.toLowerCase().includes(lower)));
  }
  /** Find a recipe by its output item ID. */
  findByOutputId(id) {
    return this.data.find((r) => r.output.id === id);
  }
  sortByName(order = "asc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return new _CraftingQuery(sorted);
  }
  sortByCategory(order = "asc") {
    const sorted = [...this.data].sort((a, b) => {
      const cmp = a.category.localeCompare(b.category);
      return order === "asc" ? cmp : -cmp;
    });
    return new _CraftingQuery(sorted);
  }
};
function crafting(source = allCraftingData) {
  return new CraftingQuery(source);
}

// data/fish.json
var fish_default = [
  {
    id: "128",
    name: "Pufferfish",
    description: "Inflates when threatened.",
    catchType: "rod",
    seasons: ["summer"],
    location: "Ocean, Ginger Island",
    weather: "sunny",
    time: "12:00 PM \u2013 4:00 PM",
    difficulty: 80,
    sellPrice: 200,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Specialty Fish Bundle"],
    image: "images/fish/Pufferfish.png"
  },
  {
    id: "129",
    name: "Anchovy",
    description: "A small silver fish found in the ocean.",
    catchType: "rod",
    seasons: ["spring", "fall"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 30,
    sellPrice: 30,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Anchovy.png"
  },
  {
    id: "130",
    name: "Tuna",
    description: "A large fish that lives in the ocean.",
    catchType: "rod",
    seasons: ["summer", "winter"],
    location: "Ocean, Ginger Island",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 70,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Fish Taco", "Maki Roll", "Quality Fertilizer", "Sashimi", "Ocean Fish Bundle"],
    image: "images/fish/Tuna.png"
  },
  {
    id: "131",
    name: "Sardine",
    description: "A common ocean fish.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 30,
    sellPrice: 40,
    fishTank: true,
    usedIn: [
      "Dish O' The Sea",
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Ocean Fish Bundle"
    ],
    image: "images/fish/Sardine.png"
  },
  {
    id: "132",
    name: "Bream",
    description: "A fairly common river fish that becomes active at night.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "River",
    weather: "both",
    time: "6:00 PM \u2013 2:00 AM",
    difficulty: 35,
    sellPrice: 45,
    fishTank: true,
    usedIn: ["Baked Fish", "Maki Roll", "Quality Fertilizer", "Sashimi", "Night Fishing Bundle"],
    image: "images/fish/Bream.png"
  },
  {
    id: "136",
    name: "Largemouth Bass",
    description: "A popular fish that lives in lakes.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 50,
    sellPrice: 100,
    fishTank: true,
    usedIn: [
      "Crispy Bass",
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Lake Fish Bundle",
      "Quality Fish Bundle"
    ],
    image: "images/fish/Largemouth Bass.png"
  },
  {
    id: "137",
    name: "Smallmouth Bass",
    description: "A freshwater fish that is very sensitive to pollution.",
    catchType: "rod",
    seasons: ["spring", "fall"],
    location: "River, Forest Pond",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 28,
    sellPrice: 50,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Smallmouth Bass.png"
  },
  {
    id: "138",
    name: "Rainbow Trout",
    description: "A freshwater trout with colorful markings.",
    catchType: "rod",
    seasons: ["summer"],
    location: "River, Mountain Lake",
    weather: "sunny",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 45,
    sellPrice: 65,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Trout Soup"],
    image: "images/fish/Rainbow Trout.png"
  },
  {
    id: "139",
    name: "Salmon",
    description: "Swims upstream to lay its eggs.",
    catchType: "rod",
    seasons: ["fall"],
    location: "River",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 50,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Salmon Dinner", "Sashimi"],
    image: "images/fish/Salmon.png"
  },
  {
    id: "140",
    name: "Walleye",
    description: "A freshwater fish caught at night.",
    catchType: "rod",
    seasons: ["fall", "winter"],
    location: "River, Mountain Lake, Forest Pond",
    weather: "rainy",
    time: "12:00 PM \u2013 2:00 AM",
    difficulty: 45,
    sellPrice: 105,
    fishTank: true,
    usedIn: [
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Night Fishing Bundle",
      "Quality Fish Bundle"
    ],
    image: "images/fish/Walleye.png"
  },
  {
    id: "141",
    name: "Perch",
    description: "A freshwater fish of the winter.",
    catchType: "rod",
    seasons: ["winter"],
    location: "River, Mountain Lake, Forest Pond",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 35,
    sellPrice: 55,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Perch.png"
  },
  {
    id: "142",
    name: "Carp",
    description: "A common pond fish.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall"],
    location: "Mountain Lake, Secret Woods, Sewers, Mutant Bug Lair",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 15,
    sellPrice: 30,
    fishTank: true,
    usedIn: ["Carp Surprise", "Maki Roll", "Quality Fertilizer", "Sashimi", "Lake Fish Bundle"],
    image: "images/fish/Carp.png"
  },
  {
    id: "143",
    name: "Catfish",
    description: "An uncommon fish found in streams.",
    catchType: "rod",
    seasons: ["spring", "fall", "winter"],
    location: "River, Secret Woods, Witch's Swamp",
    weather: "rainy",
    time: "6:00 AM \u2013 12:00 AM",
    difficulty: 75,
    sellPrice: 200,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "River Fish Bundle"],
    image: "images/fish/Catfish.png"
  },
  {
    id: "144",
    name: "Pike",
    description: "A freshwater fish that's difficult to catch.",
    catchType: "rod",
    seasons: ["summer", "winter"],
    location: "River, Forest Pond",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 60,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Pike.png"
  },
  {
    id: "145",
    name: "Sunfish",
    description: "A common river fish.",
    catchType: "rod",
    seasons: ["spring", "summer"],
    location: "River",
    weather: "sunny",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 30,
    sellPrice: 30,
    fishTank: true,
    usedIn: ["Baked Fish", "Maki Roll", "Quality Fertilizer", "Sashimi", "River Fish Bundle"],
    image: "images/fish/Sunfish.png"
  },
  {
    id: "146",
    name: "Red Mullet",
    description: "Long ago these were kept as pets.",
    catchType: "rod",
    seasons: ["summer", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 55,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Red Mullet.png"
  },
  {
    id: "147",
    name: "Herring",
    description: "A common ocean fish.",
    catchType: "rod",
    seasons: ["spring", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 25,
    sellPrice: 30,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Herring.png"
  },
  {
    id: "148",
    name: "Eel",
    description: "A long, slippery little fish.",
    catchType: "rod",
    seasons: ["spring", "fall"],
    location: "Ocean",
    weather: "rainy",
    time: "4:00 PM \u2013 2:00 AM",
    difficulty: 70,
    sellPrice: 85,
    fishTank: true,
    usedIn: [
      "Fried Eel",
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Spicy Eel",
      "Night Fishing Bundle"
    ],
    image: "images/fish/Eel.png"
  },
  {
    id: "149",
    name: "Octopus",
    description: "A mysterious and intelligent creature.",
    catchType: "rod",
    seasons: ["summer"],
    location: "Ocean, Ginger Island, Night Market submarine",
    weather: "both",
    time: "6:00 AM \u2013 1:00 PM",
    difficulty: 95,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Master Fisher's Bundle"],
    image: "images/fish/Octopus.png"
  },
  {
    id: "150",
    name: "Red Snapper",
    description: "A popular fish with a nice red color.",
    catchType: "rod",
    seasons: ["summer", "fall", "winter"],
    location: "Ocean",
    weather: "rainy",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 40,
    sellPrice: 50,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Ocean Fish Bundle"],
    image: "images/fish/Red Snapper.png"
  },
  {
    id: "151",
    name: "Squid",
    description: "A deep sea creature that can grow to enormous size.",
    catchType: "rod",
    seasons: ["winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 PM \u2013 2:00 AM",
    difficulty: 75,
    sellPrice: 80,
    fishTank: true,
    usedIn: ["Fried Calamari", "Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Squid.png"
  },
  {
    id: "152",
    name: "Seaweed",
    description: "It can be used in cooking.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 5,
    sellPrice: 20,
    fishTank: false,
    usedIn: ["Maki Roll"],
    image: "images/fish/Seaweed.png"
  },
  {
    id: "153",
    name: "Green Algae",
    description: "It's really slimy.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "River, Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 5,
    sellPrice: 15,
    fishTank: false,
    usedIn: ["Algae Soup", "Trout Soup"],
    image: "images/fish/Green Algae.png"
  },
  {
    id: "154",
    name: "Sea Cucumber",
    description: "A slippery, slimy creature found on the ocean floor.",
    catchType: "rod",
    seasons: ["fall", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 40,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Lucky Lunch", "Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Sea Cucumber.png"
  },
  {
    id: "155",
    name: "Super Cucumber",
    description: "A rare, purple variety of sea cucumber.",
    catchType: "rod",
    seasons: ["summer", "winter"],
    location: "Ocean, Ginger Island",
    weather: "both",
    time: "6:00 PM \u2013 2:00 AM",
    difficulty: 80,
    sellPrice: 250,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Super Cucumber.png"
  },
  {
    id: "156",
    name: "Ghostfish",
    description: "A pale, blind fish found in underground lakes.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines (Floors 20 & 60)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 50,
    sellPrice: 45,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Specialty Fish Bundle"],
    image: "images/fish/Ghostfish.png"
  },
  {
    id: "157",
    name: "White Algae",
    description: "It's super slimy.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 5,
    sellPrice: 25,
    fishTank: false,
    usedIn: ["Pale Broth", "Wild Medicine Bundle"],
    image: "images/fish/White Algae.png"
  },
  {
    id: "158",
    name: "Stonefish",
    description: "A bizarre fish that's shaped like a brick.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines (Floor 20)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 65,
    sellPrice: 300,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Stonefish.png"
  },
  {
    id: "159",
    name: "Crimsonfish",
    description: "Lives deep in the ocean but likes to lay its eggs in the warm summer water.",
    catchType: "rod",
    seasons: ["summer"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 95,
    sellPrice: 1500,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Crimsonfish.png"
  },
  {
    id: "160",
    name: "Angler",
    description: "Uses a bioluminescent dangler to attract prey.",
    catchType: "rod",
    seasons: ["fall"],
    location: "River",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 85,
    sellPrice: 900,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Angler.png"
  },
  {
    id: "161",
    name: "Ice Pip",
    description: "A rare fish that thrives in extremely cold conditions.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines (Floor 60)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 85,
    sellPrice: 500,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Ice Pip.png"
  },
  {
    id: "162",
    name: "Lava Eel",
    description: "It can somehow survive in pools of red-hot lava.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines (Floor 100), Volcano Caldera",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 90,
    sellPrice: 700,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Master Fisher's Bundle"],
    image: "images/fish/Lava Eel.png"
  },
  {
    id: "163",
    name: "Legend",
    description: "The king of all fish! They said he'd never be caught.",
    catchType: "rod",
    seasons: ["spring"],
    location: "Mountain Lake",
    weather: "rainy",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 110,
    sellPrice: 5e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Legend.png"
  },
  {
    id: "164",
    name: "Sandfish",
    description: "It tries to hide using camouflage.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Desert",
    weather: "both",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 65,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Specialty Fish Bundle"],
    image: "images/fish/Sandfish.png"
  },
  {
    id: "165",
    name: "Scorpion Carp",
    description: "It's like a regular carp but with a sharp stinger.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Desert",
    weather: "both",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 90,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Master Fisher's Bundle"],
    image: "images/fish/Scorpion Carp.png"
  },
  {
    id: "267",
    name: "Flounder",
    description: "It lives on the bottom, so both eyes are on top of its head.",
    catchType: "rod",
    seasons: ["spring", "summer"],
    location: "Ocean, Ginger Island",
    weather: "both",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 50,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Seafoam Pudding"],
    image: "images/fish/Flounder.png"
  },
  {
    id: "269",
    name: "Midnight Carp",
    description: "This shy fish only feels comfortable at night.",
    catchType: "rod",
    seasons: ["fall", "winter"],
    location: "Forest Pond, Mountain Lake, Ginger Island",
    weather: "both",
    time: "10:00 PM \u2013 2:00 AM",
    difficulty: 55,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Seafoam Pudding"],
    image: "images/fish/Midnight Carp.png"
  },
  {
    id: "372",
    name: "Clam",
    description: "There's a chewy little guy in there...",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 50,
    fishTank: true,
    usedIn: ["Chowder", "Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Clam.png"
  },
  {
    id: "682",
    name: "Mutant Carp",
    description: "The strange waters of the sewer turned this carp into a monstrosity.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Sewers",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 80,
    sellPrice: 1e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Mutant Carp.png"
  },
  {
    id: "698",
    name: "Sturgeon",
    description: "An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.",
    catchType: "rod",
    seasons: ["summer", "winter"],
    location: "Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 78,
    sellPrice: 200,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Lake Fish Bundle"],
    image: "images/fish/Sturgeon.png"
  },
  {
    id: "699",
    name: "Tiger Trout",
    description: "A rare hybrid trout that cannot bear offspring of its own.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "River",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 60,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "River Fish Bundle"],
    image: "images/fish/Tiger Trout.png"
  },
  {
    id: "700",
    name: "Bullhead",
    description: "A relative of the catfish that eats a variety of foods off the lake bottom.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 46,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Lake Fish Bundle"],
    image: "images/fish/Bullhead.png"
  },
  {
    id: "701",
    name: "Tilapia",
    description: "A primarily vegetarian fish that prefers warm water.",
    catchType: "rod",
    seasons: ["summer", "fall"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 2:00 PM",
    difficulty: 50,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Ocean Fish Bundle"],
    image: "images/fish/Tilapia.png"
  },
  {
    id: "702",
    name: "Chub",
    description: "A common freshwater fish known for its voracious appetite.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "River, Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 35,
    sellPrice: 50,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Field Research Bundle"],
    image: "images/fish/Chub.png"
  },
  {
    id: "704",
    name: "Dorado",
    description: "A fierce carnivore with brilliant orange scales.",
    catchType: "rod",
    seasons: ["summer"],
    location: "River",
    weather: "both",
    time: "6:00 AM \u2013 7:00 PM",
    difficulty: 78,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Dorado.png"
  },
  {
    id: "705",
    name: "Albacore",
    description: "Prefers temperature 'edges' where cool and warm water meet.",
    catchType: "rod",
    seasons: ["fall", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 11:00 AM, 6:00 PM \u2013 2:00 AM",
    difficulty: 60,
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Albacore.png"
  },
  {
    id: "706",
    name: "Shad",
    description: "Lives in a school at sea, but returns to the rivers to spawn.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall"],
    location: "River",
    weather: "rainy",
    time: "9:00 AM \u2013 2:00 AM",
    difficulty: 45,
    sellPrice: 60,
    fishTank: true,
    usedIn: [
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "River Fish Bundle",
      "Quality Fish Bundle"
    ],
    image: "images/fish/Shad.png"
  },
  {
    id: "707",
    name: "Lingcod",
    description: "A fearsome predator that will eat almost anything it can cram into its mouth.",
    catchType: "rod",
    seasons: ["winter"],
    location: "River, Mountain Lake",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 85,
    sellPrice: 120,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Lingcod.png"
  },
  {
    id: "708",
    name: "Halibut",
    description: "A flat fish that lives on the ocean floor.",
    catchType: "rod",
    seasons: ["spring", "summer", "winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 11:00 AM, 7:00 PM \u2013 2:00 AM",
    difficulty: 50,
    sellPrice: 80,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Halibut.png"
  },
  {
    id: "715",
    name: "Lobster",
    description: "A large ocean-dwelling crustacean with a strong tail.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 120,
    fishTank: true,
    usedIn: ["Lobster Bisque", "Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Lobster.png"
  },
  {
    id: "716",
    name: "Crayfish",
    description: "A small freshwater relative of the lobster.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Freshwater (crab pot)",
    sellPrice: 75,
    fishTank: true,
    usedIn: ["Fish Stew", "Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Crayfish.png"
  },
  {
    id: "717",
    name: "Crab",
    description: "A marine crustacean with two powerful pincers.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Crab Cakes", "Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Crab.png"
  },
  {
    id: "718",
    name: "Cockle",
    description: "A common saltwater clam.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 50,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Cockle.png"
  },
  {
    id: "719",
    name: "Mussel",
    description: "A common bivalve that often lives in clusters.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 30,
    fishTank: true,
    usedIn: ["Fish Stew", "Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Mussel.png"
  },
  {
    id: "720",
    name: "Shrimp",
    description: "A scavenger that feeds off the ocean floor. Widely prized for its meat.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 60,
    fishTank: true,
    usedIn: [
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Shrimp Cocktail",
      "Tom Kha Soup",
      "Crab Pot Bundle"
    ],
    image: "images/fish/Shrimp.png"
  },
  {
    id: "721",
    name: "Snail",
    description: "A wide-ranging mollusc that lives in a spiral shell.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Freshwater (crab pot)",
    sellPrice: 65,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Snail.png"
  },
  {
    id: "722",
    name: "Periwinkle",
    description: "A tiny freshwater snail that lives in a blue shell.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Freshwater (crab pot)",
    sellPrice: 20,
    fishTank: true,
    usedIn: [
      "Fish Stew",
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Strange Bun",
      "Crab Pot Bundle"
    ],
    image: "images/fish/Periwinkle.png"
  },
  {
    id: "723",
    name: "Oyster",
    description: "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.",
    catchType: "crab-pot",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ocean (crab pot)",
    sellPrice: 40,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Crab Pot Bundle"],
    image: "images/fish/Oyster.png"
  },
  {
    id: "734",
    name: "Woodskip",
    description: "A very sensitive fish that can only live in pools deep in the forest.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Secret Woods",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 50,
    sellPrice: 75,
    fishTank: true,
    usedIn: [
      "Maki Roll",
      "Quality Fertilizer",
      "Sashimi",
      "Lake Fish Bundle",
      "Specialty Fish Bundle"
    ],
    image: "images/fish/Woodskip.png"
  },
  {
    id: "775",
    name: "Glacierfish",
    description: "Builds a nest on the underside of glaciers.",
    catchType: "rod",
    seasons: ["winter"],
    location: "Forest (Arrowhead Island)",
    weather: "sunny",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 100,
    sellPrice: 1e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Glacierfish.png"
  },
  {
    id: "795",
    name: "Void Salmon",
    description: "A salmon, twisted by void energy. The fresh meat is jet black, but rapidly turns pink when exposed to air.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Witch's Swamp",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 80,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "The Missing Bundle"],
    image: "images/fish/Void Salmon.png"
  },
  {
    id: "796",
    name: "Slimejack",
    description: "He's coated in a very thick layer of slime. He keeps slipping out of your hands!",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mutant Bug Lair",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 55,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Slimejack.png"
  },
  {
    id: "798",
    name: "Midnight Squid",
    description: "A strange and mysterious denizen of the ocean's twilight depths.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Night Market submarine",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 55,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Midnight Squid.png"
  },
  {
    id: "799",
    name: "Spook Fish",
    description: "The huge eyes can detect the faint silhouettes of prey.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Night Market submarine",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 60,
    sellPrice: 220,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Spook Fish.png"
  },
  {
    id: "800",
    name: "Blobfish",
    description: "This odd creature floats above the ocean floor, consuming any edible material in its path.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Night Market submarine",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 75,
    sellPrice: 500,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi", "Master Fisher's Bundle"],
    image: "images/fish/Blobfish.png"
  },
  {
    id: "836",
    name: "Stingray",
    description: "Despite having a toxic stinger, these fish are shy and prefer to avoid humans.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ginger Island (Pirate Cove)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 80,
    sellPrice: 180,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Stingray.png"
  },
  {
    id: "837",
    name: "Lionfish",
    description: "An aggressive, predatory fish with venomous spines.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ginger Island",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 50,
    sellPrice: 100,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Lionfish.png"
  },
  {
    id: "838",
    name: "Blue Discus",
    description: "A brightly colored tropical fish that is popular in aquariums.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Ginger Island (freshwater)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 60,
    sellPrice: 120,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Blue Discus.png"
  },
  {
    id: "898",
    name: "Son of Crimsonfish",
    description: "He hatched in the warm summer water, and followed in the footsteps of his father.",
    catchType: "rod",
    seasons: ["winter"],
    location: "Ocean",
    weather: "both",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 95,
    sellPrice: 1500,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Son of Crimsonfish.png"
  },
  {
    id: "899",
    name: "Ms. Angler",
    description: "Uses a bioluminescent dangler to attract prey.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "River",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 85,
    sellPrice: 900,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Ms. Angler.png"
  },
  {
    id: "900",
    name: "Legend II",
    description: "The successor to the original Legend.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mountain Lake",
    weather: "rainy",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 110,
    sellPrice: 5e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Legend II.png"
  },
  {
    id: "901",
    name: "Radioactive Carp",
    description: "A carp that spent one too many years in toxic sludge.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Sewers",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    difficulty: 80,
    sellPrice: 1e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Radioactive Carp.png"
  },
  {
    id: "902",
    name: "Glacierfish Jr.",
    description: "The original Glacierfish had a son...",
    catchType: "rod",
    seasons: ["winter"],
    location: "Forest (Arrowhead Island)",
    weather: "sunny",
    time: "6:00 AM \u2013 8:00 PM",
    difficulty: 100,
    sellPrice: 1e3,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Glacierfish Jr.png"
  },
  {
    id: "Goby",
    name: "Goby",
    description: "Some types of Gobies can climb up waterfalls.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall"],
    location: "Forest (waterfalls)",
    weather: "both",
    time: "8:00 AM \u2013 6:00 PM",
    difficulty: 55,
    sellPrice: 150,
    fishTank: true,
    usedIn: ["Maki Roll", "Quality Fertilizer", "Sashimi"],
    image: "images/fish/Goby.png"
  },
  {
    id: "SeaJelly",
    name: "Sea Jelly",
    description: "A rare jelly found in the ocean.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Saltwater locations",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    sellPrice: 200,
    fishTank: false,
    usedIn: [],
    image: "images/fish/jelly/Sea Jelly.png"
  },
  {
    id: "RiverJelly",
    name: "River Jelly",
    description: "A rare jelly found in freshwater.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Freshwater locations",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    sellPrice: 125,
    fishTank: false,
    usedIn: [],
    image: "images/fish/jelly/River Jelly.png"
  },
  {
    id: "CaveJelly",
    name: "Cave Jelly",
    description: "A rare jelly found in underground lakes.",
    catchType: "rod",
    seasons: ["spring", "summer", "fall", "winter"],
    location: "Mines (levels 20, 60, and 100)",
    weather: "both",
    time: "6:00 AM \u2013 2:00 AM",
    sellPrice: 180,
    fishTank: false,
    usedIn: [],
    image: "images/fish/jelly/Cave Jelly.png"
  }
];

// src/modules/fish/index.ts
var allFishData = fish_default;
var FishQuery = class _FishQuery extends QueryBase {
  constructor(data = allFishData) {
    super(data);
  }
  /** Filter to fish available in the given season. */
  bySeason(season) {
    return new _FishQuery(this.data.filter((f) => f.seasons.includes(season)));
  }
  /** Filter by catch type (`'rod'` or `'crab-pot'`). */
  byCatchType(type) {
    return new _FishQuery(this.data.filter((f) => f.catchType === type));
  }
  /** Filter by weather condition (`'sunny'`, `'rainy'`, or `'both'`). */
  byWeather(weather2) {
    return new _FishQuery(this.data.filter((f) => f.weather === weather2));
  }
  /** Filter by location name (case-insensitive substring match). */
  byLocation(location) {
    const q = location.toLowerCase();
    return new _FishQuery(this.data.filter((f) => f.location.toLowerCase().includes(q)));
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _FishQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /** Sort by sell price. Default: `'desc'` (most valuable first). */
  sortBySellPrice(order = "desc") {
    return new _FishQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
      )
    );
  }
  /**
   * Sort by fishing difficulty (0–100). Crab-pot fish have no difficulty and sort as 0.
   * Default: `'desc'` (hardest first).
   */
  sortByDifficulty(order = "desc") {
    return new _FishQuery(
      [...this.data].sort((a, b) => {
        const da = a.difficulty ?? 0;
        const db = b.difficulty ?? 0;
        return order === "asc" ? da - db : db - da;
      })
    );
  }
};
function fish(source = allFishData) {
  return new FishQuery(source);
}

// data/footwear.json
var footwear_default = [
  {
    id: "504",
    name: "Sneakers",
    description: "A little flimsy... but fashionable!",
    defense: 1,
    immunity: 0,
    obtain: "Purchased from Adventurer's Guild after Initiation quest; Special Item drops Floors 1-39 of The Mines; Fishing Treasure Chests",
    image: "images/footwear/Sneakers.png"
  },
  {
    id: "505",
    name: "Rubber Boots",
    description: "Protection from the elements.",
    defense: 0,
    immunity: 1,
    obtain: "Special Item drops Floors 1-39 of The Mines; Fishing Treasure Chests",
    image: "images/footwear/Rubber Boots.png"
  },
  {
    id: "506",
    name: "Leather Boots",
    description: "The leather is very supple.",
    defense: 1,
    immunity: 1,
    obtain: "Reward from Chest Floor 10 of The Mines; Purchased from Adventurer's Guild after Floor 10; Fishing Treasure Chests",
    image: "images/footwear/Leather Boots.png"
  },
  {
    id: "507",
    name: "Work Boots",
    description: "Steel-toed for extra protection.",
    defense: 2,
    immunity: 0,
    obtain: "Purchased from Adventurer's Guild after Floor 10; Possible Remixed Reward Floor 10; Fishing Treasure Chests",
    image: "images/footwear/Work Boots.png"
  },
  {
    id: "508",
    name: "Combat Boots",
    description: "Reinforced with iron mesh.",
    defense: 3,
    immunity: 0,
    obtain: "Purchased from Adventurer's Guild after Floor 40; Possible Remixed Reward Floor 50; Special Item drops Floors 61-79; Fishing Treasure Chests",
    image: "images/footwear/Combat Boots.png"
  },
  {
    id: "509",
    name: "Tundra Boots",
    description: "The fuzzy lining keeps your ankles so warm.",
    defense: 2,
    immunity: 1,
    obtain: "Reward from Chest Floor 50 of The Mines; Purchased from Adventurer's Guild after Floor 50; Fishing Treasure Chests",
    image: "images/footwear/Tundra Boots.png"
  },
  {
    id: "806",
    name: "Leprechaun Shoes",
    description: "The buckle's made of solid gold.",
    defense: 2,
    immunity: 1,
    obtain: "Found on Trains",
    image: "images/footwear/Leprechaun Shoes.png"
  },
  {
    id: "510",
    name: "Thermal Boots",
    description: "Designed with extreme weather in mind.",
    defense: 1,
    immunity: 2,
    obtain: "Possible Remixed Reward Floor 50; Special Item drops Floors 41-79; Fishing Treasure Chests",
    image: "images/footwear/Thermal Boots.png"
  },
  {
    id: "515",
    name: "Cowboy Boots",
    description: "It's the height of country fashion.",
    defense: 2,
    immunity: 2,
    obtain: "Unobtainable",
    image: "images/footwear/Cowboy Boots.png"
  },
  {
    id: "511",
    name: "Dark Boots",
    description: "Made from thick black leather.",
    defense: 4,
    immunity: 2,
    obtain: "Purchased from Adventurer's Guild after Floor 80; Possible Remixed Reward Floor 80; Special Item drops Floors 81-119, Skull Cavern, Quarry Mine; Fishing Treasure Chests",
    image: "images/footwear/Dark Boots.png"
  },
  {
    id: "512",
    name: "Firewalker Boots",
    description: "It's said these can withstand the hottest magma.",
    defense: 3,
    immunity: 3,
    obtain: "Reward from Chest Floor 80 of The Mines; Purchased from Adventurer's Guild after Floor 80; Fishing Treasure Chests",
    image: "images/footwear/Firewalker Boots.png"
  },
  {
    id: "513",
    name: "Genie Shoes",
    description: "A curious energy permeates the fabric.",
    defense: 1,
    immunity: 6,
    obtain: "Special Item drops Floors 81-119, Skull Cavern, Quarry Mine; Fishing Treasure Chests",
    image: "images/footwear/Genie Shoes.png"
  },
  {
    id: "514",
    name: "Space Boots",
    description: "An iridium weave gives them a purple sheen.",
    defense: 4,
    immunity: 4,
    obtain: "Reward from Chest Floor 110 of The Mines; Purchased from Adventurer's Guild after Floor 110",
    image: "images/footwear/Space Boots.png"
  },
  {
    id: "878",
    name: "Crystal Shoes",
    description: "These sparkling shoes will keep your feet very safe.",
    defense: 3,
    immunity: 5,
    obtain: "Possible Remixed Reward Floor 110; Special Item drops in Skull Cavern and Quarry Mine",
    image: "images/footwear/Crystal Shoes.png"
  },
  {
    id: "804",
    name: "Emily's Magic Boots",
    description: "Made with love by Emily. 100% compostable!",
    defense: 4,
    immunity: 4,
    obtain: "Received during Emily's 14-heart event",
    image: "images/footwear/Emily's Magic Boots.png"
  },
  {
    id: "853",
    name: "Cinderclown Shoes",
    description: "These magic shoes belonged to a famous Dwarvish jester.",
    defense: 6,
    immunity: 5,
    obtain: "Volcano Dungeon Shop (100 Cinder Shards)",
    image: "images/footwear/Cinderclown Shoes.png"
  },
  {
    id: "854",
    name: "Mermaid Boots",
    description: "Mermaid scales give these boots a protective aura.",
    defense: 5,
    immunity: 8,
    obtain: "From a Rare Chest in the Volcano Dungeon",
    image: "images/footwear/Mermaid Boots.png"
  },
  {
    id: "855",
    name: "Dragonscale Boots",
    description: "These shimmering boots are extremely tough.",
    defense: 7,
    immunity: 0,
    obtain: "From a Rare Chest in the Volcano Dungeon",
    image: "images/footwear/Dragonscale Boots.png"
  }
];

// src/modules/footwear/index.ts
var allFootwearData = footwear_default;
var FootwearQuery = class _FootwearQuery extends QueryBase {
  constructor(data = allFootwearData) {
    super(data);
  }
  sortByName(order = "asc") {
    return new _FootwearQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  sortByDefense(order = "desc") {
    return new _FootwearQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.defense - b.defense : b.defense - a.defense
      )
    );
  }
  sortByImmunity(order = "desc") {
    return new _FootwearQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.immunity - b.immunity : b.immunity - a.immunity
      )
    );
  }
};
function footwear(source = allFootwearData) {
  return new FootwearQuery(source);
}

// data/forageables.json
var forageables_default = [
  {
    id: "410",
    name: "Blackberry",
    description: "A sharp, tangy flavor with a powerful kick.",
    seasons: ["fall"],
    locations: "Cindersap Forest, Pelican Town, Railroad; Berry bushes during Fall 8-11",
    sellPrice: 20,
    image: "images/forageables/Blackberry.png"
  },
  {
    id: "78",
    name: "Cave Carrot",
    description: "A starchy snack found in caves. It helps miners work longer.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Mines",
    sellPrice: 25,
    image: "images/forageables/Cave Carrot.png"
  },
  {
    id: "281",
    name: "Chanterelle",
    description: "A tasty mushroom with a fruity smell and a mild flavor.",
    seasons: ["fall"],
    locations: "Secret Woods, Forest Farm, Farm Cave (mushroom option)",
    sellPrice: 160,
    image: "images/forageables/Chanterelle.png"
  },
  {
    id: "88",
    name: "Coconut",
    description: "A sweet and nutritious tropical fruit.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Calico Desert (palm trees), Ginger Island",
    sellPrice: 100,
    image: "images/forageables/Coconut.png"
  },
  {
    id: "404",
    name: "Common Mushroom",
    description: "A little slimy, but still good.",
    seasons: ["spring", "summer", "fall"],
    locations: "Secret Woods, Forest Farm, Farm Cave (mushroom option)",
    sellPrice: 40,
    image: "images/forageables/Common Mushroom.png"
  },
  {
    id: "718",
    name: "Cockle",
    description: "A common saltwater clam.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Beach",
    sellPrice: 50,
    image: "images/fish/Cockle.png"
  },
  {
    id: "372",
    name: "Clam",
    description: "There's a chewy little guy in there...",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Beach",
    sellPrice: 50,
    image: "images/fish/Clam.png"
  },
  {
    id: "393",
    name: "Coral",
    description: "A rare find in the ocean.",
    seasons: ["summer"],
    locations: "The Beach",
    sellPrice: 80,
    image: "images/forageables/Coral.png"
  },
  {
    id: "418",
    name: "Crocus",
    description: "A flower that can bloom even in the snow.",
    seasons: ["winter"],
    locations: "Pelican Town, Railroad, Bus Stop, Mountain, Cindersap Forest, Backwoods",
    sellPrice: 60,
    image: "images/forageables/Crocus.png"
  },
  {
    id: "414",
    name: "Crystal Fruit",
    description: "In the harsh conditions of winter, this rare fruit grows from nutrient-rich sap.",
    seasons: ["winter"],
    locations: "Railroad, Cindersap Forest, Mountain, Bus Stop, Backwoods, Pelican Town",
    sellPrice: 150,
    image: "images/forageables/Crystal Fruit.png"
  },
  {
    id: "18",
    name: "Daffodil",
    description: "A yellow flower that blooms in the spring.",
    seasons: ["spring"],
    locations: "Pelican Town, Bus Stop, Railroad",
    sellPrice: 30,
    image: "images/forageables/Daffodil.png"
  },
  {
    id: "22",
    name: "Dandelion",
    description: "Not the prettiest flower, but the leaves make a good salad.",
    seasons: ["spring"],
    locations: "Cindersap Forest, Bus Stop, Railroad, Forest Farm",
    sellPrice: 40,
    image: "images/forageables/Dandelion.png"
  },
  {
    id: "259",
    name: "Fiddlehead Fern",
    description: "The young curled frond of a fern. Very popular in gourmet cooking.",
    seasons: ["summer"],
    locations: "Secret Woods",
    sellPrice: 90,
    image: "images/forageables/Fiddlehead Fern.png"
  },
  {
    id: "153",
    name: "Green Algae",
    description: "It's really slimy.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Everywhere but the Farm Pond of the Standard Farm",
    sellPrice: 15,
    image: "images/fish/Green Algae.png"
  },
  {
    id: "829",
    name: "Ginger",
    description: "This pungent root is used in many cooking recipes.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Ginger Island West",
    sellPrice: 60,
    image: "images/forageables/Ginger.png"
  },
  {
    id: "398",
    name: "Grape",
    description: "A sweet cluster of grapes.",
    seasons: ["summer"],
    locations: "Backwoods, Mountain, Bus Stop, Railroad, Forest Farm",
    sellPrice: 80,
    image: "images/forageables/Grape.png"
  },
  {
    id: "408",
    name: "Hazelnut",
    description: "This hazelnut is of the common variety used for making chocolate.",
    seasons: ["fall"],
    locations: "Backwoods, Mountain, Bus Stop, Railroad",
    sellPrice: 90,
    image: "images/forageables/Hazelnut.png"
  },
  {
    id: "283",
    name: "Holly",
    description: "The leaves and bright red berries make a popular winter decoration.",
    seasons: ["winter"],
    locations: "Secret Woods, Backwoods, Pelican Town, Bus Stop, Cindersap Forest, Mountain",
    sellPrice: 80,
    image: "images/forageables/Holly.png"
  },
  {
    id: "20",
    name: "Leek",
    description: "A pungent relative of the onion. Not many people grow it.",
    seasons: ["spring"],
    locations: "Backwoods, Mountain, Forest Farm, Bus Stop, Railroad",
    sellPrice: 60,
    image: "images/forageables/Leek.png"
  },
  {
    id: "851",
    name: "Magma Cap",
    description: "A very rare mushroom that lives next to pools of lava.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Volcano Dungeon",
    sellPrice: 400,
    image: "images/forageables/Magma Cap.png"
  },
  {
    id: "719",
    name: "Mussel",
    description: "A common bivalve that often lives in clusters.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Beach",
    sellPrice: 30,
    image: "images/fish/Mussel.png"
  },
  {
    id: "257",
    name: "Morel",
    description: "This rare mushroom has a pleasant nutty flavor.",
    seasons: ["spring"],
    locations: "Secret Woods, Forest Farm, Farm Cave (mushroom option)",
    sellPrice: 150,
    image: "images/forageables/Morel.png"
  },
  {
    id: "392",
    name: "Nautilus Shell",
    description: "This is a rare find, as these creatures prefer deep water.",
    seasons: ["winter"],
    locations: "The Beach",
    sellPrice: 120,
    image: "images/forageables/Nautilus Shell.png"
  },
  {
    id: "422",
    name: "Purple Mushroom",
    description: "A very rare mushroom found deep in the cave.",
    seasons: ["fall"],
    locations: "The Mines, Forest Farm, Farm Cave (mushroom option)",
    sellPrice: 250,
    image: "images/forageables/Purple Mushroom.png"
  },
  {
    id: "723",
    name: "Oyster",
    description: "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Beach",
    sellPrice: 40,
    image: "images/fish/Oyster.png"
  },
  {
    id: "394",
    name: "Rainbow Shell",
    description: "A rare find in the summer ocean.",
    seasons: ["summer"],
    locations: "The Beach",
    sellPrice: 300,
    image: "images/forageables/Rainbow Shell.png"
  },
  {
    id: "420",
    name: "Red Mushroom",
    description: "A popular culinary mushroom that can be difficult to find.",
    seasons: ["summer", "fall"],
    locations: "Secret Woods, Farm Cave (mushroom option)",
    sellPrice: 75,
    image: "images/forageables/Red Mushroom.png"
  },
  {
    id: "296",
    name: "Salmonberry",
    description: "A spring-time berry with the flavor of the forest.",
    seasons: ["spring"],
    locations: "Bushes during Salmonberry Season (Spring 15-18)",
    sellPrice: 5,
    image: "images/forageables/Salmonberry.png"
  },
  {
    id: "92",
    name: "Sap",
    description: "A fluid obtained from trees.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "From chopping trees",
    sellPrice: 2,
    image: "images/forageables/Sap.png"
  },
  {
    id: "397",
    name: "Sea Urchin",
    description: "A type of echinoderm.",
    seasons: ["summer"],
    locations: "The Beach",
    sellPrice: 160,
    image: "images/forageables/Sea Urchin.png"
  },
  {
    id: "152",
    name: "Seaweed",
    description: "It can be used in cooking.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "The Beach",
    sellPrice: 20,
    image: "images/fish/Seaweed.png"
  },
  {
    id: "416",
    name: "Snow Yam",
    description: "This little yam was hiding beneath the snow.",
    seasons: ["winter"],
    locations: "Underground artifact spots and tillable soil",
    sellPrice: 100,
    image: "images/forageables/Snow Yam.png"
  },
  {
    id: "396",
    name: "Spice Berry",
    description: "The leaves and berries are both edible. Very spicy!",
    seasons: ["summer"],
    locations: "Cindersap Forest, Backwoods, Mountain, Bus Stop, Railroad, Forest Farm",
    sellPrice: 80,
    image: "images/forageables/Spice Berry.png"
  },
  {
    id: "399",
    name: "Spring Onion",
    description: "These grow naturally in the wild, usually in groups.",
    seasons: ["spring"],
    locations: "Cindersap Forest",
    sellPrice: 8,
    image: "images/forageables/Spring Onion.png"
  },
  {
    id: "402",
    name: "Sweet Pea",
    description: "A fragrant summer flower.",
    seasons: ["summer"],
    locations: "Pelican Town, Cindersap Forest, Bus Stop, Railroad, Forest Farm",
    sellPrice: 50,
    image: "images/forageables/Sweet Pea.png"
  },
  {
    id: "16",
    name: "Wild Horseradish",
    description: "A spicy root found in the spring.",
    seasons: ["spring"],
    locations: "Cindersap Forest, Backwoods, Mountain, Forest Farm",
    sellPrice: 50,
    image: "images/forageables/Wild Horseradish.png"
  },
  {
    id: "406",
    name: "Wild Plum",
    description: "Tart and juicy with a beautiful purple color.",
    seasons: ["fall"],
    locations: "Bus Stop, Railroad, Backwoods, Mountain",
    sellPrice: 80,
    image: "images/forageables/Wild Plum.png"
  },
  {
    id: "157",
    name: "White Algae",
    description: "It's super slimy.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Mines, Sewers, Mutant Bug Lair, Witch's Swamp",
    sellPrice: 25,
    image: "images/fish/White Algae.png"
  },
  {
    id: "412",
    name: "Winter Root",
    description: "A starchy winter tuber.",
    seasons: ["winter"],
    locations: "Underground artifact spots and tillable soil",
    sellPrice: 70,
    image: "images/forageables/Winter Root.png"
  },
  {
    id: "388",
    name: "Wood",
    description: "A sturdy, yet flexible plant material with a wide variety of uses.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Felling trees and branches with an axe; Recycling Machine (from Driftwood)",
    sellPrice: 2,
    image: "images/forageables/Wood.png"
  },
  {
    id: "330",
    name: "Clay",
    description: "Used in crafting and construction.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Tilling dirt, sand, or Artifact Spots; Ginger Island Dig Site; Geodes",
    sellPrice: 20,
    image: "images/forageables/Clay.png"
  },
  {
    id: "709",
    name: "Hardwood",
    description: "A special kind of wood with superior strength and beauty.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Chopping Mahogany Trees or Large Stumps; Secret Woods (6 stumps daily); Ginger Island",
    sellPrice: 15,
    image: "images/forageables/Hardwood.png"
  },
  {
    id: "787",
    name: "Battery Pack",
    description: "It's fully charged with precious energy.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Lightning Rod during thunderstorms; Solar Panel after 7 sunny days; Iridium Bat drop (5%)",
    sellPrice: 500,
    image: "images/forageables/Battery Pack.png"
  },
  {
    id: "812",
    name: "Roe",
    description: "Fresh fish eggs. These can be aged in a preserves jar to bring out more flavor.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Fish Ponds; Fishing Treasure Chests (with Jewels of the Sea book)",
    sellPrice: 30,
    image: "images/forageables/Roe.png"
  },
  {
    id: "814",
    name: "Squid Ink",
    description: "Squid use this ink to confuse would-be predators.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Squid Kids in The Mines; Blue Squids in Dangerous Mines; Squid or Midnight Squid Fish Pond",
    sellPrice: 110,
    image: "images/forageables/Squid Ink.png"
  },
  {
    id: "815",
    name: "Tea Leaves",
    description: "The young leaves of the tea plant. Can be brewed into the popular, energizing beverage.",
    seasons: ["spring", "summer", "fall"],
    locations: "Tea Bush harvest (days 22-28 of Spring, Summer, Fall); year-round when grown indoors",
    sellPrice: 50,
    image: "images/forageables/Tea Leaves.png"
  },
  {
    id: "390",
    name: "Stone",
    description: "A common type of stone.",
    seasons: ["spring", "summer", "fall", "winter"],
    locations: "Mining rocks throughout the world",
    sellPrice: 2,
    image: "images/forageables/Stone.png"
  },
  {
    id: "Moss",
    name: "Moss",
    description: "Grows on the shaded side of trees. Has a pleasant, earthy scent.",
    seasons: ["spring", "summer", "fall"],
    locations: "Foraging from trees with moss growing on them; Green Rain events",
    sellPrice: 5,
    image: "images/forageables/Moss.png"
  }
];

// src/modules/forageables/index.ts
var allForageableData = forageables_default;
var ForageableQuery = class _ForageableQuery extends QueryBase {
  constructor(data = allForageableData) {
    super(data);
  }
  /** Filter to forageables available in the given season. */
  bySeason(season) {
    return new _ForageableQuery(this.data.filter((f) => f.seasons.includes(season)));
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _ForageableQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /** Sort by sell price. Default: `'desc'` (most valuable first). */
  sortBySellPrice(order = "desc") {
    return new _ForageableQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
      )
    );
  }
};
function forageables(source = allForageableData) {
  return new ForageableQuery(source);
}

// data/hats.json
var hats_default = [
  {
    id: "AbigailsBow",
    name: "Abigail's Bow",
    description: "It's just like Abby's.",
    obtain: "Purchase for 60 Calico Eggs from Abigail's shop at Desert Festival",
    image: "images/hats/Abigail's Bow.png"
  },
  {
    id: "60",
    name: "Arcane Hat",
    description: "The type of cowboy hat worn by a wizard.",
    obtain: "Defeat 100 Mummies (Monster Eradication Goal)",
    image: "images/hats/Arcane Hat.png"
  },
  {
    id: "35",
    name: "Archer's Cap",
    description: "Fashionable whether you're an archer or not.",
    obtain: "Cook every recipe (Gourmet Chef achievement)",
    image: "images/hats/Archer's Cap.png"
  },
  {
    id: "53",
    name: "Beanie",
    description: "A warm hat with a pretty tight fit.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Beanie.png"
  },
  {
    id: "56",
    name: "Blobfish Mask",
    description: "Just as spongy as the real thing!",
    obtain: "Tailoring",
    image: "images/hats/Blobfish Mask.png"
  },
  {
    id: "6",
    name: "Blue Bonnet",
    description: "Harken back to simpler times with this prairie bonnet.",
    obtain: "Donate 40 items to Museum (Treasure Trove achievement)",
    image: "images/hats/Blue Bonnet.png"
  },
  {
    id: "BlueBow",
    name: "Blue Bow",
    description: "This huge bow makes quite a statement!",
    obtain: "Purchase for 50 Calico Eggs from Calico Egg Merchant at Desert Festival",
    image: "images/hats/Blue Bow.png"
  },
  {
    id: "37",
    name: "Blue Cowboy Hat",
    description: "A denim cowboy hat in cool blue.",
    obtain: "Skull Cavern treasure chests",
    image: "images/hats/Blue Cowboy Hat.png"
  },
  {
    id: "BlueRibbon",
    name: "Blue Ribbon",
    description: "A lovely ribbon that sits behind the head.",
    obtain: "Get 1st place at Stardew Valley Fair competition",
    image: "images/hats/Blue Ribbon.png"
  },
  {
    id: "80",
    name: "Bluebird Mask",
    description: "Wear this to look just like your favorite island trader.",
    obtain: "Island Trader on Wednesdays for 30 Taro Roots",
    image: "images/hats/Bluebird Mask.png"
  },
  {
    id: "1",
    name: "Bowler Hat",
    description: "Made from smooth felt.",
    obtain: "Earn 1,000,000g (Millionaire achievement)",
    image: "images/hats/Bowler Hat.png"
  },
  {
    id: "69",
    name: "Bridal Veil",
    description: "The traditional headwear for a bride.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Bridal Veil.png"
  },
  {
    id: "BucketHat",
    name: "Bucket Hat",
    description: "A simple hat with a short brim.",
    obtain: "Reward from Trout Derby",
    image: "images/hats/Bucket Hat.png"
  },
  {
    id: "14",
    name: "Butterfly Bow",
    description: "This one is very soft.",
    obtain: "Reach 5-heart friendship level with someone (A New Friend achievement)",
    image: "images/hats/Butterfly Bow.png"
  },
  {
    id: "32",
    name: "Cat Ears",
    description: "Whiskers included.",
    obtain: "Reach 10-heart friendship with 8 people (The Beloved Farmer achievement)",
    image: "images/hats/Cat Ears.png"
  },
  {
    id: "61",
    name: "Chef Hat",
    description: "The traditional hat worn by a head chef.",
    obtain: "Cook every recipe (Gourmet Chef achievement)",
    image: "images/hats/Chef Hat.png"
  },
  {
    id: "10",
    name: "Chicken Mask",
    description: "You'll be sure to get them grinning with this one.",
    obtain: "Complete 40 Help Wanted requests (A Big Help achievement)",
    image: "images/hats/Chicken Mask.png"
  },
  {
    id: "concerned-ape-hat",
    name: "ConcernedApe Hat",
    description: "A hat that depicts ConcernedApe's profile picture.",
    obtain: "Interact with monkey in Volcano Caldera after 100% Perfection",
    image: "images/hats/ConcernedApe Hat.png"
  },
  {
    id: "39",
    name: "Cone Hat",
    description: "A curiosity from a distant land.",
    obtain: "Purchase from Magic Shop Boat at Night Market",
    image: "images/hats/Cone Hat.png"
  },
  {
    id: "20",
    name: "Cool Cap",
    description: "It looks really faded, but it used to be a vibrant blue.",
    obtain: "Earn 250,000g (Homesteader achievement)",
    image: "images/hats/Cool Cap.png"
  },
  {
    id: "copper-pan-hat",
    name: "Copper Pan (hat)",
    description: "You place the copper pan on your head...",
    obtain: "Place Copper Pan in hat slot in inventory",
    image: "images/hats/Copper Pan (hat).png"
  },
  {
    id: "0",
    name: "Cowboy Hat",
    description: "The leather is old and cracked, but surprisingly supple. It smells musty.",
    obtain: "Complete museum collection (A Complete Collection achievement)",
    image: "images/hats/Cowboy Hat.png"
  },
  {
    id: "33",
    name: "Cowgal Hat",
    description: "The band is studded with fake diamonds.",
    obtain: "Ship 300 of one crop (Monoculture achievement)",
    image: "images/hats/Cowgal Hat.png"
  },
  {
    id: "34",
    name: "Cowpoke Hat",
    description: "For dairy experts.",
    obtain: "Ship 15 of each crop (Polyculture achievement)",
    image: "images/hats/Cowpoke Hat.png"
  },
  {
    id: "29",
    name: "Daisy",
    description: "A fresh spring daisy to put in your hair.",
    obtain: "Craft 15 different items (D.I.Y. achievement)",
    image: "images/hats/Daisy.png"
  },
  {
    id: "DarkBallcap",
    name: "Dark Ballcap",
    description: "It fits perfectly on your head.",
    obtain: "Random from Emily's outfit services at Desert Festival",
    image: "images/hats/Dark Ballcap.png"
  },
  {
    id: "83",
    name: "Dark Cowboy Hat",
    description: "A cowboy hat in fashionable black.",
    obtain: "Skull Cavern treasure chests",
    image: "images/hats/Dark Cowboy Hat.png"
  },
  {
    id: "DarkVelvetBow",
    name: "Dark Velvet Bow",
    description: "A big, floppy bow made of dark velvet.",
    obtain: "Purchase for 75 Calico Eggs from Calico Egg Merchant at Desert Festival",
    image: "images/hats/Dark Velvet Bow.png"
  },
  {
    id: "12",
    name: "Delicate Bow",
    description: "Little pink jewels glisten as you examine it.",
    obtain: "Cook 10 different recipes (Cook achievement)",
    image: "images/hats/Delicate Bow.png"
  },
  {
    id: "81",
    name: "Deluxe Cowboy Hat",
    description: "A cowboy hat with a more extreme shape.",
    obtain: "Island Trader on Fridays for 30 Taro Roots",
    image: "images/hats/Deluxe Cowboy Hat.png"
  },
  {
    id: "76",
    name: "Deluxe Pirate Hat",
    description: "Only the most infamous pirate could pull off this look.",
    obtain: "Volcano Dungeon rare chests",
    image: "images/hats/Deluxe Pirate Hat.png"
  },
  {
    id: "43",
    name: "Dinosaur Hat",
    description: "A hat fashioned to look like a small dinosaur.",
    obtain: "Tailoring",
    image: "images/hats/Dinosaur Hat.png"
  },
  {
    id: "11",
    name: "Earmuffs",
    description: "Keep your ears toasty. Lined with artisanal velvet from Castle Village.",
    obtain: "Reach 5-heart friendship with 20 people (Popular achievement)",
    image: "images/hats/Earmuffs.png"
  },
  {
    id: "64",
    name: "Elegant Turban",
    description: "A fine black silk turban with gold trim.",
    obtain: "Earn all other achievements",
    image: "images/hats/Elegant Turban.png"
  },
  {
    id: "41",
    name: "Emily's Magic Hat",
    description: "Made with love by Emily. It's 100% organic!",
    obtain: "Obtained in Emily's 14-heart cutscene",
    image: "images/hats/Emily's Magic Hat.png"
  },
  {
    id: "24",
    name: "Eye Patch",
    description: "You can't tell if it's real or just from a costume shop.",
    obtain: "Catch every fish (Master Angler achievement)",
    image: "images/hats/Eye Patch.png"
  },
  {
    id: "47",
    name: "Fashion Hat",
    description: "A fashionable hat with a feather in the brim.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Fashion Hat.png"
  },
  {
    id: "19",
    name: "Fedora",
    description: "A city-slicker's standard.",
    obtain: "Purchase for 500 tokens at Stardew Valley Fair",
    image: "images/hats/Fedora.png"
  },
  {
    id: "55",
    name: "Fishing Hat",
    description: "The wide brim keeps you shaded when fishing on the riverbank.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Fishing Hat.png"
  },
  {
    id: "63",
    name: "Flat Topped Hat",
    description: "An old style of hat once considered very fashionable.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Flat Topped Hat.png"
  },
  {
    id: "54",
    name: "Floppy Beanie",
    description: "A warm hat with a looser fit.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Floppy Beanie.png"
  },
  {
    id: "90",
    name: "Forager's Hat",
    description: "It's a forager's delight.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Forager's Hat.png"
  },
  {
    id: "78",
    name: "Frog Hat",
    description: "A slimy friend that lives on your dome.",
    obtain: "Fish in Gourmand Frog's cave on Ginger Island",
    image: "images/hats/Frog Hat.png"
  },
  {
    id: "66",
    name: "Garbage Hat",
    description: "It's a garbage can lid 'upcycled' into a hat...",
    obtain: "0.2% chance from garbage cans after checking 20 cans",
    image: "images/hats/Garbage Hat.png"
  },
  {
    id: "GilsHat",
    name: "Gil's Hat",
    description: "It's the same hat that Gil wears.",
    obtain: "Reward for egg rating of 25-54 to Gil at Desert Festival",
    image: "images/hats/Gil's Hat.png"
  },
  {
    id: "23",
    name: "Gnome's Cap",
    description: "This gnome had a very large head.",
    obtain: "Craft every item (Craft Master achievement)",
    image: "images/hats/Gnome's Cap.png"
  },
  {
    id: "9",
    name: "Goblin Mask",
    description: "Freak out the neighborhood with this creepy mask. Rubber ear joints for effect.",
    obtain: "Ship every item (Full Shipment achievement)",
    image: "images/hats/Goblin Mask.png"
  },
  {
    id: "89",
    name: "Goggles",
    description: "These will make you look very safe.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Goggles.png"
  },
  {
    id: "gold-pan-hat",
    name: "Gold Pan (hat)",
    description: "You place the gold pan on your head...",
    obtain: "Place Gold Pan in hat slot in inventory",
    image: "images/hats/Gold Pan (hat).png"
  },
  {
    id: "75",
    name: "Golden Helmet",
    description: "It's half of a golden coconut.",
    obtain: "5% chance from opening Golden Coconuts",
    image: "images/hats/Golden Helmet.png"
  },
  {
    id: "67",
    name: "Golden Mask",
    description: "A faithful recreation of the Calico Desert relic!",
    obtain: "Tailoring",
    image: "images/hats/Golden Mask (hat).png"
  },
  {
    id: "18",
    name: "Good Ol' Cap",
    description: "A floppy old topper with a creased bill. Looks like it's been through a lot.",
    obtain: "Earn 15,000g (Greenhorn achievement)",
    image: "images/hats/Good Ol' Cap.png"
  },
  {
    id: "GovernorsHat",
    name: "Governor's Hat",
    description: "A replica of the Governor's iconic hat.",
    obtain: "Delight the Governor at Luau (An Unforgettable Soup achievement)",
    image: "images/hats/Governor's Hat.png"
  },
  {
    id: "72",
    name: "Green Turban",
    description: "A green silk turban with a gold ornament on the front.",
    obtain: "Desert Trader for 50 Omni Geodes",
    image: "images/hats/Green Turban.png"
  },
  {
    id: "49",
    name: "Hair Bone",
    description: "A prehistoric version of the hair bow.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Hair Bone.png"
  },
  {
    id: "27",
    name: "Hard Hat",
    description: "Keep your dome in one piece.",
    obtain: "Defeat 30 Duggies (Monster Eradication Goal)",
    image: "images/hats/Hard Hat.png"
  },
  {
    id: "15",
    name: "Hunter's Cap",
    description: "The wool lining should stay warm deep into the forest.",
    obtain: "Upgrade house to maximum size (Living Large achievement)",
    image: "images/hats/Hunter's Cap.png"
  },
  {
    id: "InfinityCrown",
    name: "Infinity Crown",
    description: "It's made from an exotic metal you've never seen before.",
    obtain: "Obtain most powerful weapon (Infinite Power achievement)",
    image: "images/hats/Infinity Crown.png"
  },
  {
    id: "iridium-pan-hat",
    name: "Iridium Pan (hat)",
    description: "You place the iridium pan on your head...",
    obtain: "Place Iridium Pan in hat slot in inventory",
    image: "images/hats/Iridium Pan (hat).png"
  },
  {
    id: "JesterHat",
    name: "Jester Hat",
    description: "Put your inner clown on display.",
    obtain: "See a movie (Two Thumbs Up achievement)",
    image: "images/hats/Jester Hat.png"
  },
  {
    id: "JojaCap",
    name: "Joja Cap",
    description: "An official Joja Cap. Made from 100% polyester.",
    obtain: "Random from Emily's outfit services at Desert Festival",
    image: "images/hats/Joja Cap.png"
  },
  {
    id: "JunimoHat",
    name: "Junimo Hat",
    description: "To honor our little buddies...",
    obtain: "Reach Perfection and visit the Summit",
    image: "images/hats/Junimo Hat.png"
  },
  {
    id: "50",
    name: "Knight's Helmet",
    description: "It looks just like the real thing!",
    obtain: "Defeat 50 Pepper Rex (Monster Eradication Goal)",
    image: "images/hats/Knight's Helmet.png"
  },
  {
    id: "LaurelWreathCrown",
    name: "Laurel Wreath Crown",
    description: "A garland of leaves shaped into a lovely crown.",
    obtain: "Random from Emily's outfit services at Desert Festival",
    image: "images/hats/Laurel Wreath Crown.png"
  },
  {
    id: "LeprechuanHat",
    name: "Leprechaun Hat",
    description: "The previous owner must've had a big head for a Leprechaun.",
    obtain: "Pot of gold by rainbow next to Abandoned House on Spring 17th",
    image: "images/hats/Leprechaun Hat.png"
  },
  {
    id: "40",
    name: "Living Hat",
    description: "It absorbs moisture from your scalp. No watering needed!",
    obtain: "0.001% chance finding while cutting weeds; 0.01% chance from Wilderness Golems",
    image: "images/hats/Living Hat.png"
  },
  {
    id: "45",
    name: "Logo Cap",
    description: "A pink cap with a sleek profile.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Logo Cap.png"
  },
  {
    id: "21",
    name: "Lucky Bow",
    description: "The middle is made of solid gold.",
    obtain: "Earn 50,000g (Cowpoke achievement)",
    image: "images/hats/Lucky Bow.png"
  },
  {
    id: "73",
    name: "Magic Cowboy Hat",
    description: "It's shimmering with prismatic energy.",
    obtain: "Desert Trader for 333 Omni Geodes on odd days",
    image: "images/hats/Magic Cowboy Hat.png"
  },
  {
    id: "74",
    name: "Magic Turban",
    description: "It's shimmering with prismatic energy.",
    obtain: "Desert Trader for 333 Omni Geodes on even days",
    image: "images/hats/Magic Turban.png"
  },
  {
    id: "31",
    name: "Mouse Ears",
    description: "Made from synthetic fibers.",
    obtain: "Reach 10-heart friendship with someone (Best Friends achievement)",
    image: "images/hats/Mouse Ears.png"
  },
  {
    id: "82",
    name: "Mr. Qi's Hat",
    description: "A replica of Mr. Qi's iconic hat.",
    obtain: "Purchase for 5 Qi Gems in Qi's Walnut Room",
    image: "images/hats/Mr. Qi's Hat.png"
  },
  {
    id: "MummyMask",
    name: "Mummy Mask",
    description: "A large mummy mask... frightening!",
    obtain: "Purchase for 120 Calico Eggs from Calico Egg Merchant at Desert Festival",
    image: "images/hats/Mummy Mask.png"
  },
  {
    id: "42",
    name: "Mushroom Cap",
    description: "It smells earthy.",
    obtain: "1% chance when chopping down Mushroom Tree",
    image: "images/hats/Mushroom Cap.png"
  },
  {
    id: "MysteryHat",
    name: "Mystery Hat",
    description: "Made from the leftovers of a Mystery Box.",
    obtain: "From Mystery Boxes or Golden Mystery Boxes",
    image: "images/hats/Mystery Hat.png"
  },
  {
    id: "5",
    name: "Official Cap",
    description: "Looks like it belonged to a postman or policeman. Either way, it's still very soft and smells okay.",
    obtain: "Catch 24 different fish (Ol' Mariner achievement)",
    image: "images/hats/Official Cap.png"
  },
  {
    id: "PageboyCap",
    name: "Pageboy Cap",
    description: "For some reason, it makes you want to sell newspapers.",
    obtain: "Read every book (Well-Read achievement)",
    image: "images/hats/Pageboy Cap.png"
  },
  {
    id: "36",
    name: "Panda Hat",
    description: "A lovely panda hat.",
    obtain: "WeGame exclusive content; unobtainable otherwise",
    image: "images/hats/Panda Hat.png"
  },
  {
    id: "PaperHat",
    name: "Paper Hat",
    description: "It's made out of special paper that won't disintegrate in the rain.",
    obtain: "Reach Ginger Island (A Distant Shore achievement)",
    image: "images/hats/Paper Hat.png"
  },
  {
    id: "party-hat-blue",
    name: "Party Hat (blue)",
    description: "A goofy blue hat that makes any celebration more fun.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Party Hat (blue).png"
  },
  {
    id: "party-hat-green",
    name: "Party Hat (green)",
    description: "A goofy green hat that makes any celebration more fun.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Party Hat (green).png"
  },
  {
    id: "party-hat-red",
    name: "Party Hat (red)",
    description: "A goofy red hat that makes any celebration more fun.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Party Hat (red).png"
  },
  {
    id: "77",
    name: "Pink Bow",
    description: "This huge bow makes quite a statement!",
    obtain: "Purchase for 10,000g from Dwarf Shop in Volcano Dungeon (25% chance)",
    image: "images/hats/Pink Bow.png"
  },
  {
    id: "62",
    name: "Pirate Hat",
    description: "A captain's hat with a horrible skull on the front.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Pirate Hat.png"
  },
  {
    id: "7",
    name: "Plum Chapeau",
    description: "Looks alright.",
    obtain: "Cook 25 different recipes (Sous Chef achievement)",
    image: "images/hats/Plum Chapeau.png"
  },
  {
    id: "22",
    name: "Polka Bow",
    description: "This one's sure to turn heads.",
    obtain: "Complete 10 Help Wanted requests (Gofer achievement)",
    image: "images/hats/Polka Bow.png"
  },
  {
    id: "68",
    name: "Propeller Hat",
    description: "A goofy hat with a propeller on top.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Propeller Hat.png"
  },
  {
    id: "48",
    name: "Pumpkin Mask",
    description: "This must have been a pretty big pumpkin once...",
    obtain: "Tailoring",
    image: "images/hats/Pumpkin Mask.png"
  },
  {
    id: "86",
    name: "Qi Mask",
    description: "???",
    obtain: "Tailoring",
    image: "images/hats/Qi Mask.png"
  },
  {
    id: "RaccoonHat",
    name: "Raccoon Hat",
    description: "A classic hat from the old frontier days.",
    obtain: "Fulfill third request from Raccoon at Giant Stump",
    image: "images/hats/Raccoon Hat.png"
  },
  {
    id: "84",
    name: "Radioactive Goggles",
    description: "Doesn't actually provide any protection from radiation.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Radioactive Goggles.png"
  },
  {
    id: "38",
    name: "Red Cowboy Hat",
    description: "An eye-catching cowboy hat in red suede.",
    obtain: "Skull Cavern treasure chests",
    image: "images/hats/Red Cowboy Hat.png"
  },
  {
    id: "RedFez",
    name: "Red Fez",
    description: "A unique hat made popular by the famous merchant pig.",
    obtain: "Purchase for 8,000g from Traveling Cart (10% chance)",
    image: "images/hats/Red Fez.png"
  },
  {
    id: "17",
    name: "Sailor's Cap",
    description: "It's fresh and starchy.",
    obtain: "Win fishing competition at Festival of Ice",
    image: "images/hats/Sailor's Cap.png"
  },
  {
    id: "25",
    name: "Santa Hat",
    description: "Celebrate the magical season.",
    obtain: "Reach 5-heart friendship with 10 people (Networking achievement)",
    image: "images/hats/Santa Hat.png"
  },
  {
    id: "8",
    name: "Skeleton Mask",
    description: "The red eyes are glowing mysteriously.",
    obtain: "Defeat 50 Skeletons (Monster Eradication Goal)",
    image: "images/hats/Skeleton Mask.png"
  },
  {
    id: "79",
    name: "Small Cap",
    description: "It's a more aerodynamic style of cap.",
    obtain: "Island Trader on Mondays for 30 Taro Roots",
    image: "images/hats/Small Cap.png"
  },
  {
    id: "3",
    name: "Sombrero",
    description: "A festively decorated hat made from woven straw.",
    obtain: "Earn 10,000,000g (Legend achievement)",
    image: "images/hats/Sombrero.png"
  },
  {
    id: "28",
    name: "Sou'wester",
    description: "The shape helps to keep sailors dry during storms.",
    obtain: "Catch 10 different fish (Fisherman achievement)",
    image: "images/hats/Sou'wester.png"
  },
  {
    id: "SpaceHelmet",
    name: "Space Helmet",
    description: "Warning: This helmet has not actually been tested in outer space.",
    obtain: "Reach bottom of dangerous mines (Danger In The Deep achievement)",
    image: "images/hats/Space Helmet.png"
  },
  {
    id: "SportsCap",
    name: "Sports Cap",
    description: "The cap has a vintage team logo on it.",
    obtain: "Prize Machine at Mayor's Manor",
    image: "images/hats/Sports Cap.png"
  },
  {
    id: "52",
    name: "Spotted Headscarf",
    description: "A red polka-dot scarf tied around the head.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Spotted Headscarf.png"
  },
  {
    id: "SquidHat",
    name: "Squid Hat",
    description: "It's your chance to wear a squid on the head.",
    obtain: "Reward from SquidFest",
    image: "images/hats/Squid Hat.png"
  },
  {
    id: "51",
    name: "Squire's Helmet",
    description: "The face is exposed to increase air flow.",
    obtain: "Monster drop from Metal Heads",
    image: "images/hats/Squire's Helmet.png"
  },
  {
    id: "87",
    name: "Star Helmet",
    description: "A red hat with stars on it.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Star Helmet.png"
  },
  {
    id: "steel-pan-hat",
    name: "Steel Pan (hat)",
    description: "You place the steel pan on your head...",
    obtain: "Place Steel Pan in hat slot in inventory",
    image: "images/hats/Steel Pan (hat).png"
  },
  {
    id: "4",
    name: "Straw Hat",
    description: "Light and cool, it's a farmer's delight.",
    obtain: "Win egg hunt at Egg Festival",
    image: "images/hats/Straw Hat.png"
  },
  {
    id: "88",
    name: "Sunglasses",
    description: "These give you a relaxed look.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Sunglasses.png"
  },
  {
    id: "85",
    name: "Swashbuckler Hat",
    description: "The classic swashbuckler look.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Swashbuckler Hat.png"
  },
  {
    id: "26",
    name: "Tiara",
    description: "This one has a big amethyst encircled by gold.",
    obtain: "Reach 5-heart friendship with 4 people (Cliques achievement)",
    image: "images/hats/Tiara.png"
  },
  {
    id: "91",
    name: "Tiger Hat",
    description: "Makes you look like a beautiful tiger.",
    obtain: "0.1% chance from Tiger Slimes",
    image: "images/hats/Tiger Hat.png"
  },
  {
    id: "2",
    name: "Top Hat",
    description: "A gentleman's classic.",
    obtain: "Purchase for 8,000 Qi Coins at Casino",
    image: "images/hats/Top Hat.png"
  },
  {
    id: "44",
    name: "Totem Mask",
    description: "Don't worry, it won't warp your face...",
    obtain: "Tailoring",
    image: "images/hats/Totem Mask.png"
  },
  {
    id: "TricornHat",
    name: "Tricorn Hat",
    description: "It's a traditional hat for naval officers.",
    obtain: "Purchase for 100 Calico Eggs from Elliott's shop at Desert Festival",
    image: "images/hats/Tricorn Hat.png"
  },
  {
    id: "13",
    name: "Tropiclip",
    description: "It's shaped like a little palm tree.",
    obtain: "Upgrade your house (Moving Up achievement)",
    image: "images/hats/Tropiclip.png"
  },
  {
    id: "16",
    name: "Trucker Hat",
    description: "Mesh in the back to keep your head cool.",
    obtain: "Craft 30 different items (Artisan achievement)",
    image: "images/hats/Trucker Hat.png"
  },
  {
    id: "93",
    name: "Warrior Helmet",
    description: "An Ostrich eggshell repurposed into a helmet.",
    obtain: "Tailoring",
    image: "images/hats/Warrior Helmet.png"
  },
  {
    id: "30",
    name: "Watermelon Band",
    description: "The color scheme was inspired by the beloved summer melon.",
    obtain: "Catch 100 fish (Mother Catch achievement)",
    image: "images/hats/Watermelon Band.png"
  },
  {
    id: "46",
    name: "Wearable Dwarf Helm",
    description: "A slightly larger, human sized version of helmets worn by dwarves.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Wearable Dwarf Helm.png"
  },
  {
    id: "WhiteBow",
    name: "White Bow",
    description: "A bow as white as snow.",
    obtain: "Help forest neighbors grow family (Good Neighbors achievement)",
    image: "images/hats/White Bow.png"
  },
  {
    id: "65",
    name: "White Turban",
    description: "A fine white silk turban with blue trim.",
    obtain: "Tailoring; Skull Cavern treasure chests",
    image: "images/hats/White Turban.png"
  },
  {
    id: "70",
    name: "Witch Hat",
    description: "A pointy hat popular with witches.",
    obtain: "Tailoring; random drop during various player actions",
    image: "images/hats/Witch Hat.png"
  }
];

// src/modules/hats/index.ts
var hatsData = hats_default;
var HatQuery = class _HatQuery extends QueryBase {
  constructor(data = hatsData) {
    super(data);
  }
  sortByName(order = "asc") {
    return new _HatQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function hats(source = hatsData) {
  return new HatQuery(source);
}

// data/minerals.json
var minerals_default = [
  {
    id: "80",
    name: "Quartz",
    kind: "mineral",
    description: "A clear crystal commonly found in caves and mines.",
    sellPrice: 25,
    gemologistPrice: 32,
    locations: ["The Mines (Floors 1-120)", "Garbage Can", "Stone Golem (10%)"],
    image: "images/minerals/foraged-minerals/Quartz.png"
  },
  {
    id: "86",
    name: "Earth Crystal",
    kind: "mineral",
    description: "A resinous substance found near the surface.",
    sellPrice: 50,
    gemologistPrice: 65,
    locations: ["The Mines (Floors 1-39)", "Duggy (10%)", "Geode", "Omni Geode", "Panning"],
    image: "images/minerals/foraged-minerals/Earth Crystal.png"
  },
  {
    id: "84",
    name: "Frozen Tear",
    kind: "mineral",
    description: "A crystal fabled to be the frozen tears of a yeti.",
    sellPrice: 75,
    gemologistPrice: 97,
    locations: ["The Mines (Floors 40-79)", "Frozen Geode", "Omni Geode", "Panning"],
    image: "images/minerals/foraged-minerals/Frozen Tear.png"
  },
  {
    id: "82",
    name: "Fire Quartz",
    kind: "mineral",
    description: "A glowing red crystal commonly found near hot lava.",
    sellPrice: 100,
    gemologistPrice: 130,
    locations: ["The Mines (Floors 80-120)", "Magma Geode", "Omni Geode", "Panning"],
    image: "images/minerals/foraged-minerals/Fire Quartz.png"
  },
  {
    id: "60",
    name: "Emerald",
    kind: "mineral",
    description: "A precious stone with a brilliant green color.",
    sellPrice: 250,
    gemologistPrice: 325,
    locations: [
      "Emerald Node",
      "Gem Node",
      "Dwarvish Sentry",
      "Panning",
      "Fishing Treasure Chest"
    ],
    image: "images/minerals/gems/Emerald.png"
  },
  {
    id: "62",
    name: "Aquamarine",
    kind: "mineral",
    description: "A shimmery blue-green gem.",
    sellPrice: 180,
    gemologistPrice: 234,
    locations: [
      "Aquamarine Node",
      "Gem Node",
      "Dwarvish Sentry",
      "Panning",
      "Fishing Treasure Chest"
    ],
    image: "images/minerals/gems/Aquamarine.png"
  },
  {
    id: "64",
    name: "Ruby",
    kind: "mineral",
    description: "A precious stone sought after for its rich color and beautiful luster.",
    sellPrice: 250,
    gemologistPrice: 325,
    locations: ["Ruby Node", "Gem Node", "Dwarvish Sentry", "Panning", "Fishing Treasure Chest"],
    image: "images/minerals/gems/Ruby.png"
  },
  {
    id: "66",
    name: "Amethyst",
    kind: "mineral",
    description: "A purple variant of quartz.",
    sellPrice: 100,
    gemologistPrice: 130,
    locations: ["Amethyst Node", "Gem Node", "Green Slimes", "Dwarvish Sentry", "Panning"],
    image: "images/minerals/gems/Amethyst.png"
  },
  {
    id: "68",
    name: "Topaz",
    kind: "mineral",
    description: "Fairly common but still prized for its beauty.",
    sellPrice: 80,
    gemologistPrice: 104,
    locations: ["Topaz Node", "Gem Node", "Dwarvish Sentry", "Panning", "Fishing Treasure Chest"],
    image: "images/minerals/gems/Topaz.png"
  },
  {
    id: "70",
    name: "Jade",
    kind: "mineral",
    description: "A pale green ornamental stone.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: [
      "Jade Node",
      "Gem Node",
      "Blue Slimes",
      "Dwarvish Sentry",
      "Fishing Treasure Chest"
    ],
    image: "images/minerals/gems/Jade.png"
  },
  {
    id: "72",
    name: "Diamond",
    kind: "mineral",
    description: "A rare and valuable gem.",
    sellPrice: 750,
    gemologistPrice: 974,
    locations: [
      "Diamond Node",
      "Gem Node",
      "Dwarvish Sentry",
      "Panning",
      "Monster drops (0.05%)"
    ],
    image: "images/minerals/gems/Diamond.png"
  },
  {
    id: "74",
    name: "Prismatic Shard",
    kind: "mineral",
    description: "A very rare and powerful substance with unknown origins.",
    sellPrice: 2e3,
    gemologistPrice: 2600,
    locations: [
      "Iridium Node (4%)",
      "Mystic Stone (25%)",
      "Omni Geode (0.4%)",
      "Shadow creatures",
      "Fishing Treasure Chest"
    ],
    image: "images/minerals/gems/Prismatic Shard.png"
  },
  {
    id: "562",
    name: "Tigerseye",
    kind: "mineral",
    description: "A stripe of shimmering gold gives this gem a warm luster.",
    sellPrice: 275,
    gemologistPrice: 357,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Tigerseye.png"
  },
  {
    id: "564",
    name: "Opal",
    kind: "mineral",
    description: "Its internal structure causes it to reflect a rainbow of light.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Opal.png"
  },
  {
    id: "565",
    name: "Fire Opal",
    kind: "mineral",
    description: "A rare variety of opal, named for its red spots.",
    sellPrice: 350,
    gemologistPrice: 455,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Fire Opal.png"
  },
  {
    id: "538",
    name: "Alamite",
    kind: "mineral",
    description: "Its distinctive fluorescence makes it a favorite among rock collectors.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Alamite.png"
  },
  {
    id: "539",
    name: "Bixite",
    kind: "mineral",
    description: "A dark metallic Mineral sought after for its cubic structure.",
    sellPrice: 300,
    gemologistPrice: 390,
    locations: ["Magma Geode", "Omni Geode", "Black Slime"],
    image: "images/minerals/geode-minerals/Bixite.png"
  },
  {
    id: "540",
    name: "Baryte",
    kind: "mineral",
    description: "The best specimens resemble a desert rose.",
    sellPrice: 50,
    gemologistPrice: 65,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Baryte.png"
  },
  {
    id: "541",
    name: "Aerinite",
    kind: "mineral",
    description: "These crystals are curiously light.",
    sellPrice: 125,
    gemologistPrice: 162,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Aerinite.png"
  },
  {
    id: "542",
    name: "Calcite",
    kind: "mineral",
    description: "This yellow crystal is speckled with shimmering nodules.",
    sellPrice: 75,
    gemologistPrice: 97,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Calcite.png"
  },
  {
    id: "543",
    name: "Dolomite",
    kind: "mineral",
    description: "It can occur in coral reefs, often near an underwater volcano.",
    sellPrice: 300,
    gemologistPrice: 390,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Dolomite.png"
  },
  {
    id: "544",
    name: "Esperite",
    kind: "mineral",
    description: "The crystals glow bright green when stimulated.",
    sellPrice: 100,
    gemologistPrice: 130,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Esperite.png"
  },
  {
    id: "545",
    name: "Fluorapatite",
    kind: "mineral",
    description: "Small amounts are found in human teeth.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Fluorapatite.png"
  },
  {
    id: "546",
    name: "Geminite",
    kind: "mineral",
    description: "Occurs in brilliant clusters.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Geminite.png"
  },
  {
    id: "547",
    name: "Helvite",
    kind: "mineral",
    description: "It grows in a triangular column.",
    sellPrice: 450,
    gemologistPrice: 585,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Helvite.png"
  },
  {
    id: "548",
    name: "Jamborite",
    kind: "mineral",
    description: "The crystals are so tightly packed it almost looks fuzzy.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Jamborite.png"
  },
  {
    id: "549",
    name: "Jagoite",
    kind: "mineral",
    description: "A high volume of tiny crystals makes it very glittery.",
    sellPrice: 115,
    gemologistPrice: 149,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Jagoite.png"
  },
  {
    id: "550",
    name: "Kyanite",
    kind: "mineral",
    description: "The geometric faces are as smooth as glass.",
    sellPrice: 250,
    gemologistPrice: 325,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Kyanite.png"
  },
  {
    id: "551",
    name: "Lunarite",
    kind: "mineral",
    description: "The cratered white orbs form a tight cluster.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Lunarite.png"
  },
  {
    id: "552",
    name: "Malachite",
    kind: "mineral",
    description: "A popular ornamental stone, used in sculpture and to make green paint.",
    sellPrice: 100,
    gemologistPrice: 130,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Malachite.png"
  },
  {
    id: "553",
    name: "Neptunite",
    kind: "mineral",
    description: "A jet-black crystal that is unusually reflective.",
    sellPrice: 400,
    gemologistPrice: 520,
    locations: ["Magma Geode", "Omni Geode", "Black Slime"],
    image: "images/minerals/geode-minerals/Neptunite.png"
  },
  {
    id: "554",
    name: "Lemon Stone",
    kind: "mineral",
    description: "Some claim the powdered crystal is a dwarvish delicacy.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Lemon Stone.png"
  },
  {
    id: "555",
    name: "Nekoite",
    kind: "mineral",
    description: "The delicate shards form a tiny pink meadow.",
    sellPrice: 80,
    gemologistPrice: 104,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Nekoite.png"
  },
  {
    id: "556",
    name: "Orpiment",
    kind: "mineral",
    description: "Despite its high toxicity, used widely in manufacturing and folk medicine.",
    sellPrice: 80,
    gemologistPrice: 104,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Orpiment.png"
  },
  {
    id: "557",
    name: "Petrified Slime",
    kind: "mineral",
    description: "This little guy may be 100,000 years old.",
    sellPrice: 120,
    gemologistPrice: 156,
    locations: ["Geode", "Omni Geode", "Slime Ball"],
    image: "images/minerals/geode-minerals/Petrified Slime.png"
  },
  {
    id: "558",
    name: "Thunder Egg",
    kind: "mineral",
    description: "According to legend, angry thunder spirits would throw these stones.",
    sellPrice: 100,
    gemologistPrice: 130,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Thunder Egg.png"
  },
  {
    id: "559",
    name: "Pyrite",
    kind: "mineral",
    description: `Commonly known as "Fool's Gold".`,
    sellPrice: 120,
    gemologistPrice: 156,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Pyrite.png"
  },
  {
    id: "560",
    name: "Ocean Stone",
    kind: "mineral",
    description: "An old legend claims these stones are the mosaics of ancient mermaids.",
    sellPrice: 220,
    gemologistPrice: 286,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Ocean Stone.png"
  },
  {
    id: "561",
    name: "Ghost Crystal",
    kind: "mineral",
    description: "There is an aura of coldness around this crystal.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Ghost Crystal.png"
  },
  {
    id: "563",
    name: "Jasper",
    kind: "mineral",
    description: "When polished, becomes attractively luminous. Prized by ancient peoples.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Jasper.png"
  },
  {
    id: "566",
    name: "Celestine",
    kind: "mineral",
    description: "Some early life forms had bones made from this.",
    sellPrice: 125,
    gemologistPrice: 162,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Celestine.png"
  },
  {
    id: "567",
    name: "Marble",
    kind: "mineral",
    description: "A very popular material for sculptures and construction.",
    sellPrice: 110,
    gemologistPrice: 143,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Marble.png"
  },
  {
    id: "568",
    name: "Sandstone",
    kind: "mineral",
    description: "A common type of stone with red and brown striations.",
    sellPrice: 60,
    gemologistPrice: 78,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Sandstone.png"
  },
  {
    id: "569",
    name: "Granite",
    kind: "mineral",
    description: "A speckled Mineral that is commonly used in construction.",
    sellPrice: 75,
    gemologistPrice: 97,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Granite.png"
  },
  {
    id: "570",
    name: "Basalt",
    kind: "mineral",
    description: "Forms near searing hot magma.",
    sellPrice: 175,
    gemologistPrice: 227,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Basalt.png"
  },
  {
    id: "571",
    name: "Limestone",
    kind: "mineral",
    description: "A very common type of stone. It's not worth very much.",
    sellPrice: 15,
    gemologistPrice: 19,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Limestone.png"
  },
  {
    id: "572",
    name: "Soapstone",
    kind: "mineral",
    description: "Because of its soft consistency, very popular for carving.",
    sellPrice: 120,
    gemologistPrice: 156,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Soapstone.png"
  },
  {
    id: "573",
    name: "Hematite",
    kind: "mineral",
    description: "An iron-based Mineral with interesting magnetic properties.",
    sellPrice: 150,
    gemologistPrice: 195,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Hematite.png"
  },
  {
    id: "574",
    name: "Mudstone",
    kind: "mineral",
    description: "A fine-grained rock made from ancient clay or mud.",
    sellPrice: 25,
    gemologistPrice: 32,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Mudstone.png"
  },
  {
    id: "575",
    name: "Obsidian",
    kind: "mineral",
    description: "A volcanic glass that forms when lava cools rapidly.",
    sellPrice: 200,
    gemologistPrice: 260,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Obsidian.png"
  },
  {
    id: "576",
    name: "Slate",
    kind: "mineral",
    description: "It's extremely resistant to water, making it a good roofing material.",
    sellPrice: 85,
    gemologistPrice: 110,
    locations: ["Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Slate.png"
  },
  {
    id: "577",
    name: "Fairy Stone",
    kind: "mineral",
    description: "An old miner's song suggests these are made from ancient fairy bones.",
    sellPrice: 250,
    gemologistPrice: 325,
    locations: ["Frozen Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Fairy Stone.png"
  },
  {
    id: "578",
    name: "Star Shards",
    kind: "mineral",
    description: "No one knows how these form. Microscopic structure displays unnatural regularity.",
    sellPrice: 500,
    gemologistPrice: 650,
    locations: ["Magma Geode", "Omni Geode"],
    image: "images/minerals/geode-minerals/Star Shards.png"
  },
  {
    id: "535",
    name: "Geode",
    kind: "geode",
    description: "A blacksmith can break this open for you.",
    sellPrice: 50,
    locations: ["The Mines (Floors 1-39)", "Duggy (25%)", "Tilling", "Fishing Treasure Chest"],
    image: "images/minerals/geodes/Geode.png"
  },
  {
    id: "536",
    name: "Frozen Geode",
    kind: "geode",
    description: "A blacksmith can break this open for you.",
    sellPrice: 100,
    locations: ["The Mines (Floors 41-79)", "Fishing Treasure Chest", "Winter Tilling"],
    image: "images/minerals/geodes/Frozen Geode.png"
  },
  {
    id: "537",
    name: "Magma Geode",
    kind: "geode",
    description: "A blacksmith can break this open for you.",
    sellPrice: 150,
    locations: ["The Mines (Floors 81-120)", "Skull Cavern", "Fishing Treasure Chest"],
    image: "images/minerals/geodes/Magma Geode.png"
  },
  {
    id: "749",
    name: "Omni Geode",
    kind: "geode",
    description: "A blacksmith can break this open for you. Contains a wide variety of minerals.",
    sellPrice: 0,
    locations: ["The Mines", "Skull Cavern", "Carbon Ghost", "Panning", "Oasis", "Krobus"],
    image: "images/minerals/geodes/Omni Geode.png"
  },
  {
    id: "378",
    name: "Copper Ore",
    kind: "ore",
    description: "A common ore that can be smelted into bars.",
    sellPrice: 5,
    locations: ["The Mines (Floors 2-39)", "Quarry", "Skull Cavern", "Volcano Dungeon"],
    image: "images/minerals/ore/Copper Ore.png"
  },
  {
    id: "380",
    name: "Iron Ore",
    kind: "ore",
    description: "A fairly common ore that can be smelted into bars.",
    sellPrice: 10,
    locations: ["The Mines (Floors 41-79)", "Quarry", "Skull Cavern", "Volcano Dungeon"],
    image: "images/minerals/ore/Iron Ore.png"
  },
  {
    id: "384",
    name: "Gold Ore",
    kind: "ore",
    description: "A precious ore that can be smelted into bars.",
    sellPrice: 25,
    locations: ["The Mines (Floors 80+)", "Skull Cavern", "Quarry", "Volcano Dungeon"],
    image: "images/minerals/ore/Gold Ore.png"
  },
  {
    id: "386",
    name: "Iridium Ore",
    kind: "ore",
    description: "An exotic ore with many curious properties. Can be smelted into bars.",
    sellPrice: 100,
    locations: ["Skull Cavern", "Quarry", "Volcano Dungeon", "Mystic Stone (Mines Floor 100+)"],
    image: "images/minerals/ore/Iridium Ore.png"
  },
  {
    id: "909",
    name: "Radioactive Ore",
    kind: "ore",
    description: "It's glowing with dangerous energy... Can be smelted into bars.",
    sellPrice: 300,
    locations: ["Dangerous Mines", "Dangerous Skull Cavern"],
    image: "images/minerals/ore/Radioactive Ore.png"
  },
  {
    id: "334",
    name: "Copper Bar",
    kind: "bar",
    description: "A bar of pure copper.",
    sellPrice: 60,
    smeltRecipes: [{ ore: "378", oreQty: 5, coalQty: 1, timeMinutes: 30 }],
    image: "images/minerals/bars/Copper Bar.png"
  },
  {
    id: "335",
    name: "Iron Bar",
    kind: "bar",
    description: "A bar of pure iron.",
    sellPrice: 120,
    smeltRecipes: [{ ore: "380", oreQty: 5, coalQty: 1, timeMinutes: 120 }],
    image: "images/minerals/bars/Iron Bar.png"
  },
  {
    id: "336",
    name: "Gold Bar",
    kind: "bar",
    description: "A bar of pure gold.",
    sellPrice: 250,
    smeltRecipes: [{ ore: "384", oreQty: 5, coalQty: 1, timeMinutes: 300 }],
    image: "images/minerals/bars/Gold Bar.png"
  },
  {
    id: "337",
    name: "Iridium Bar",
    kind: "bar",
    description: "A bar of pure iridium.",
    sellPrice: 1e3,
    smeltRecipes: [{ ore: "386", oreQty: 5, coalQty: 1, timeMinutes: 480 }],
    image: "images/minerals/bars/Iridium Bar.png"
  },
  {
    id: "910",
    name: "Radioactive Bar",
    kind: "bar",
    description: "Known by the Zuzu City Safety Commission to cause irreversible bodily harm.",
    sellPrice: 3e3,
    smeltRecipes: [{ ore: "909", oreQty: 5, coalQty: 1, timeMinutes: 560 }],
    image: "images/minerals/bars/Radioactive Bar.png"
  },
  {
    id: "338",
    name: "Refined Quartz",
    kind: "bar",
    description: "A more pure form of quartz.",
    sellPrice: 50,
    smeltRecipes: [
      { ore: "80", oreQty: 1, coalQty: 1, timeMinutes: 90 },
      { ore: "82", oreQty: 1, coalQty: 1, timeMinutes: 90, outputQty: 3 }
    ],
    image: "images/minerals/bars/Refined Quartz.png"
  },
  {
    id: "382",
    name: "Coal",
    kind: "resource",
    description: "A combustible rock that is useful for crafting and smelting.",
    sellPrice: 15,
    locations: [
      "Breaking rocks in The Mines",
      "Dust Sprites (50% drop, Floors 41-79)",
      "Coal Nodes (Quarry, Quarry Mine, Volcano Dungeon)",
      "Charcoal Kiln (10 Wood \u2192 1 Coal)",
      "Recycling Machine (Trash or Driftwood)",
      "Crates and barrels in Mines/Skull Cavern/Volcano Dungeon",
      "Geodes (all types)",
      "Fishing Treasure Chests",
      "Panning",
      "Blacksmith shop"
    ],
    image: "images/minerals/ore/Coal.png"
  },
  {
    id: "copper-node",
    name: "Copper Node",
    kind: "node",
    description: "Ore-bearing stone containing copper.",
    drops: [{ item: "Copper Ore", quantity: "1-3" }],
    miningXP: 5,
    locations: [
      "The Mines (any floor)",
      "Skull Cavern",
      "Quarry",
      "Quarry Mine",
      "Hill-top / Four Corners farm",
      "Volcano Dungeon"
    ],
    image: "images/minerals/nodes/Copper Node.png"
  },
  {
    id: "iron-node",
    name: "Iron Node",
    kind: "node",
    description: "Ore-bearing stone containing iron.",
    drops: [{ item: "Iron Ore", quantity: "1-3" }],
    miningXP: 12,
    locations: [
      "The Mines (Floors 40-79)",
      "Quarry",
      "Skull Cavern",
      "Quarry Mine",
      "Hill-top / Four Corners farm (Mining Level 4+)",
      "Volcano Dungeon"
    ],
    image: "images/minerals/nodes/Iron Node.png"
  },
  {
    id: "gold-node",
    name: "Gold Node",
    kind: "node",
    description: "Ore-bearing stone containing gold.",
    drops: [{ item: "Gold Ore", quantity: "1-3" }],
    miningXP: 18,
    locations: [
      "The Mines (Floor 80+)",
      "Skull Cavern",
      "Quarry",
      "Hill-top / Four Corners farm (Mining Level 7+)",
      "Volcano Dungeon"
    ],
    image: "images/minerals/nodes/Gold Node.png"
  },
  {
    id: "iridium-node",
    name: "Iridium Node",
    kind: "node",
    description: "A rare ore deposit containing iridium.",
    drops: [
      { item: "Iridium Ore", quantity: "1-3" },
      { item: "Prismatic Shard", quantity: "1", chance: "3.5%" }
    ],
    miningXP: 50,
    locations: [
      "Skull Cavern",
      "Quarry",
      "Hill-top / Four Corners farm (Mining Level 10)",
      "Volcano Dungeon"
    ],
    image: "images/minerals/nodes/Iridium Node.png"
  },
  {
    id: "radioactive-node",
    name: "Radioactive Node",
    kind: "node",
    description: "A glowing, dangerous ore deposit.",
    drops: [{ item: "Radioactive Ore", quantity: "1+" }],
    miningXP: 18,
    locations: ["Dangerous Mines", "Dangerous Skull Cavern"],
    image: "images/minerals/nodes/Radioactive Node.png"
  },
  {
    id: "amethyst-node",
    name: "Amethyst Node",
    kind: "node",
    description: null,
    drops: [{ item: "Amethyst", quantity: "1" }],
    miningXP: 16,
    locations: ["The Mines (any floor)", "Skull Cavern", "Quarry"],
    image: "images/minerals/nodes/Amethyst Node.png"
  },
  {
    id: "aquamarine-node",
    name: "Aquamarine Node",
    kind: "node",
    description: null,
    drops: [{ item: "Aquamarine", quantity: "1" }],
    miningXP: 40,
    locations: ["The Mines (Floor 40+)", "Skull Cavern", "Quarry"],
    image: "images/minerals/nodes/Aquamarine Node.png"
  },
  {
    id: "topaz-node",
    name: "Topaz Node",
    kind: "node",
    description: null,
    drops: [{ item: "Topaz", quantity: "1" }],
    miningXP: 16,
    locations: ["The Mines (any floor)", "Skull Cavern", "Quarry"],
    image: "images/minerals/nodes/Topaz Node.png"
  },
  {
    id: "jade-node",
    name: "Jade Node",
    kind: "node",
    description: null,
    drops: [{ item: "Jade", quantity: "1" }],
    miningXP: 40,
    locations: ["The Mines (Floor 40+)", "Skull Cavern", "Quarry"],
    image: "images/minerals/nodes/Jade Node.png"
  },
  {
    id: "emerald-node",
    name: "Emerald Node",
    kind: "node",
    description: null,
    drops: [{ item: "Emerald", quantity: "1" }],
    miningXP: 80,
    locations: ["The Mines (Floor 80+)", "Skull Cavern", "Quarry"],
    image: "images/minerals/nodes/Emerald Node.png"
  },
  {
    id: "ruby-node",
    name: "Ruby Node",
    kind: "node",
    description: null,
    drops: [{ item: "Ruby", quantity: "1" }],
    miningXP: 80,
    locations: ["The Mines (Floor 80+)", "Skull Cavern", "Quarry", "Volcano Dungeon"],
    image: "images/minerals/nodes/Ruby Node.png"
  },
  {
    id: "diamond-node",
    name: "Diamond Node",
    kind: "node",
    description: null,
    drops: [{ item: "Diamond", quantity: "1" }],
    miningXP: 150,
    locations: ["The Mines (Floor 50+)", "Skull Cavern", "Quarry", "Volcano Dungeon"],
    image: "images/minerals/nodes/Diamond Node.png"
  },
  {
    id: "gem-node",
    name: "Gem Node",
    kind: "node",
    description: "Contains a random gem.",
    drops: [
      {
        item: "Random gem (Amethyst, Aquamarine, Diamond, Emerald, Jade, Ruby, or Topaz)",
        quantity: "1"
      }
    ],
    miningXP: 0,
    locations: ["The Mines (any floor)", "Skull Cavern", "Quarry", "Volcano Dungeon"],
    image: "images/minerals/nodes/Gem Node.png"
  },
  {
    id: "mystic-stone",
    name: "Mystic Stone",
    kind: "node",
    description: "A rare and valuable deposit.",
    drops: [
      { item: "Iridium Ore", quantity: "1-3" },
      { item: "Gold Ore", quantity: "1-4" },
      { item: "Prismatic Shard", quantity: "1", chance: "25%" }
    ],
    miningXP: 150,
    locations: ["The Mines (Floor 100+)", "Skull Cavern", "Quarry", "Volcano Dungeon"],
    image: "images/minerals/nodes/Mystic Stone.png"
  },
  {
    id: "geode-node",
    name: "Geode Node",
    kind: "node",
    description: null,
    drops: [{ item: "Geode", quantity: "1" }],
    miningXP: 8,
    locations: ["Hill-top / Four Corners farm"],
    image: "images/minerals/nodes/Geode Node.png"
  },
  {
    id: "frozen-geode-node",
    name: "Frozen Geode Node",
    kind: "node",
    description: null,
    drops: [{ item: "Frozen Geode", quantity: "1" }],
    miningXP: 16,
    locations: ["Hill-top / Four Corners farm (Mining Level 5+)"],
    image: "images/minerals/nodes/Frozen Geode Node.png"
  },
  {
    id: "magma-geode-node",
    name: "Magma Geode Node",
    kind: "node",
    description: null,
    drops: [{ item: "Magma Geode", quantity: "1" }],
    miningXP: 32,
    locations: ["Hill-top / Four Corners farm (Mining Level 8+)"],
    image: "images/minerals/nodes/Magma Geode Node.png"
  },
  {
    id: "omni-geode-node",
    name: "Omni Geode Node",
    kind: "node",
    description: null,
    drops: [{ item: "Omni Geode", quantity: "1" }],
    miningXP: 64,
    locations: ["Volcano Dungeon"],
    image: "images/minerals/nodes/Omni Geode Node.png"
  },
  {
    id: "coal-node",
    name: "Coal Node",
    kind: "node",
    description: "A deposit of coal fuel.",
    drops: [{ item: "Coal", quantity: "1+" }],
    miningXP: 10,
    locations: ["Quarry", "Quarry Mine", "Volcano Dungeon"],
    image: "images/minerals/nodes/Coal Node 1.png"
  },
  {
    id: "cinder-shard-node",
    name: "Cinder Shard Node",
    kind: "node",
    description: null,
    drops: [{ item: "Cinder Shard", quantity: "1+" }],
    miningXP: 12,
    locations: ["Volcano Dungeon"],
    image: "images/minerals/nodes/Cinder Shard Node 1.png"
  },
  {
    id: "clay-node",
    name: "Clay Node",
    kind: "node",
    description: null,
    drops: [{ item: "Clay", quantity: "1" }],
    miningXP: 6,
    locations: ["Ginger Island Dig Site"],
    image: "images/minerals/nodes/Clay Node.png"
  },
  {
    id: "bone-node",
    name: "Bone Node",
    kind: "node",
    description: "Contains bone fragments and fossil artifacts.",
    drops: [
      { item: "Bone Fragment", quantity: "1+" },
      { item: "Fossil artifact", quantity: "1", chance: "varies" }
    ],
    miningXP: 6,
    locations: ["Ginger Island Dig Site"],
    image: "images/minerals/nodes/Bone Node 1.png"
  },
  {
    id: "mussel-node",
    name: "Mussel Node",
    kind: "node",
    description: null,
    drops: [{ item: "Mussel", quantity: "1+" }],
    miningXP: 5,
    locations: ["Ginger Island West (beach)"],
    image: "images/minerals/nodes/Mussel Node.png"
  },
  {
    id: "calico-egg-node",
    name: "Calico Egg Node",
    kind: "node",
    description: null,
    drops: [{ item: "Calico Egg", quantity: "1+" }],
    miningXP: 50,
    locations: ["Skull Cavern (Desert Festival only)"],
    image: "images/minerals/nodes/Calico Egg Node 1.png"
  },
  {
    id: "rock",
    name: "Rock",
    kind: "node",
    description: "A standard breakable rock found outdoors.",
    drops: [
      { item: "Stone", quantity: "1+" },
      { item: "Coal", quantity: "1", chance: "~5%" }
    ],
    miningXP: 1,
    locations: ["The Farm", "Various outdoor areas"],
    image: "images/minerals/nodes/Rock 1.png"
  },
  {
    id: "stone-node",
    name: "Stone Node",
    kind: "node",
    description: "A standard breakable rock inside the mines.",
    drops: [
      { item: "Stone", quantity: "1+" },
      { item: "Coal", quantity: "1", chance: "small" }
    ],
    miningXP: 0,
    locations: ["The Mines (any floor)", "Volcano Dungeon"],
    image: "images/minerals/nodes/Stone 1.png"
  },
  {
    id: "848",
    name: "Cinder Shard",
    kind: "resource",
    description: "You can feel a warm glow from within this stone.",
    sellPrice: 50,
    locations: [
      "Volcano Dungeon (Cinder Shard Nodes)",
      "Magma Sprite, Magma Sparker, Magma Duggy, False Magma Cap drops",
      "Stingray Fish Pond (population 7+)",
      "Skull Cavern treasure rooms"
    ],
    image: "images/minerals/foraged-minerals/Cinder Shard.png"
  },
  {
    id: "881",
    name: "Bone Fragment",
    kind: "resource",
    description: "A small piece of bone.",
    sellPrice: 12,
    locations: [
      "Skeleton and Lava Lurk drops",
      "Bone Nodes on Ginger Island",
      "Skull Cavern (crates and barrels)",
      "Panning",
      "Artifact Spots"
    ],
    image: "images/minerals/resources/Bone Fragment.png"
  }
];

// src/modules/minerals/index.ts
var allMineralData = minerals_default;
var MineralQuery = class _MineralQuery extends QueryBase {
  constructor(data = allMineralData) {
    super(data);
  }
  /** Filter to donatable minerals only (excludes geode containers). */
  mineralItems() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "mineral"));
  }
  /** Filter to geode containers only (Geode, Frozen Geode, Magma Geode, Omni Geode). */
  geodes() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "geode"));
  }
  /** Filter to ore items only (Copper Ore, Iron Ore, Gold Ore, Iridium Ore, Radioactive Ore). */
  ores() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "ore"));
  }
  /** Filter to smelted bar items only (Copper Bar, Iron Bar, Gold Bar, Iridium Bar, Radioactive Bar, Refined Quartz). */
  bars() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "bar"));
  }
  /** Filter to mining node entries only. */
  nodes() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "node"));
  }
  /** Filter to resource items (Coal and similar raw materials). */
  resources() {
    return new _MineralQuery(this.data.filter((m) => m.kind === "resource"));
  }
  /** Filter to minerals found in a specific geode type (e.g. 'Frozen Geode'). */
  fromGeode(geodeType) {
    return new _MineralQuery(
      this.data.filter(
        (m) => m.kind !== "bar" && m.locations.some((l) => l.toLowerCase().includes(geodeType.toLowerCase()))
      )
    );
  }
  /** Sort alphabetically by name. Default: 'asc'. */
  sortByName(order = "asc") {
    return new _MineralQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /** Sort by sell price. Default: 'desc' (highest first). Items without a sell price (nodes) sort as 0. */
  sortBySellPrice(order = "desc") {
    return new _MineralQuery(
      [...this.data].sort((a, b) => {
        const aPrice = "sellPrice" in a ? a.sellPrice : 0;
        const bPrice = "sellPrice" in b ? b.sellPrice : 0;
        return order === "asc" ? aPrice - bPrice : bPrice - aPrice;
      })
    );
  }
};
function minerals(source = allMineralData) {
  return new MineralQuery(source);
}

// data/rings.json
var rings_default = [
  {
    id: "516",
    name: "Small Glow Ring",
    description: "Emits 5 radius circle of light.",
    sellPrice: 50,
    image: "images/rings/Small Glow Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Fishing treasure chests", "Slime drops (Mines floors 1-39)"]
  },
  {
    id: "517",
    name: "Glow Ring",
    description: "Emits 10 radius circle of light.",
    sellPrice: 100,
    image: "images/rings/Glow Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: [
      "Night Fishing Bundle reward",
      "Slime drops (Mines floors 40+)",
      "Skeleton drops (Mines floors 70-79)",
      "Mine barrels and crates"
    ]
  },
  {
    id: "518",
    name: "Small Magnet Ring",
    description: "Increases Magnetism by one tile.",
    sellPrice: 50,
    image: "images/rings/Small Magnet Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Adventurer's Bundle reward", "Fishing treasure chests", "Mine barrels and crates"]
  },
  {
    id: "519",
    name: "Magnet Ring",
    description: "Increases Magnetism by two tiles.",
    sellPrice: 100,
    image: "images/rings/Magnet Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Enemy drops (Mines floors 40-79)", "Mine barrels and crates"]
  },
  {
    id: "520",
    name: "Slime Charmer Ring",
    description: "Prevents damage from Slimes and prevents the Slimed Buff.",
    sellPrice: 350,
    image: "images/rings/Slime Charmer Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 25e3,
    sources: ["Adventurer's Guild (kill 1,000 Slimes)"]
  },
  {
    id: "521",
    name: "Warrior Ring",
    description: "Has a chance of giving the Warrior Energy buff after slaying a monster.",
    sellPrice: 750,
    image: "images/rings/Warrior Ring.png",
    craftingLevel: 4,
    craftingSkill: "combat",
    ingredients: [
      { name: "Iron Bar", id: "335", quantity: 10 },
      { name: "Coal", id: "382", quantity: 25 },
      { name: "Frozen Tear", id: "84", quantity: 10 }
    ],
    purchasePrice: null,
    sources: []
  },
  {
    id: "522",
    name: "Vampire Ring",
    description: "Restores 2 health after slaying a monster.",
    sellPrice: 750,
    image: "images/rings/Vampire Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 15e3,
    sources: ["Adventurer's Guild (kill 200 Bats)"]
  },
  {
    id: "523",
    name: "Savage Ring",
    description: "Gives a 3-second Speed (+2) buff after slaying a monster.",
    sellPrice: 750,
    image: "images/rings/Savage Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 25e3,
    sources: ["Adventurer's Guild (kill 150 Void Spirits)"]
  },
  {
    id: "524",
    name: "Ring of Yoba",
    description: "Has a chance of giving Yoba's Blessing buff after taking damage.",
    sellPrice: 750,
    image: "images/rings/Ring of Yoba.png",
    craftingLevel: 7,
    craftingSkill: "combat",
    ingredients: [
      { name: "Gold Bar", id: "336", quantity: 5 },
      { name: "Iron Bar", id: "335", quantity: 5 },
      { name: "Diamond", id: "72", quantity: 1 }
    ],
    purchasePrice: null,
    sources: []
  },
  {
    id: "525",
    name: "Sturdy Ring",
    description: "The duration of negative buffs are cut in half.",
    sellPrice: 750,
    image: "images/rings/Sturdy Ring.png",
    craftingLevel: 1,
    craftingSkill: "combat",
    ingredients: [
      { name: "Copper Bar", id: "334", quantity: 2 },
      { name: "Bug Meat", id: "684", quantity: 25 },
      { name: "Slime", id: "766", quantity: 25 }
    ],
    purchasePrice: null,
    sources: []
  },
  {
    id: "526",
    name: "Burglar's Ring",
    description: "Monsters drop items more often. The game rolls twice on the monster's drop table.",
    sellPrice: 750,
    image: "images/rings/Burglar's Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 2e4,
    sources: ["Adventurer's Guild (kill 500 Dust Sprites)"]
  },
  {
    id: "527",
    name: "Iridium Band",
    description: "Combines the effects of the Glow Ring, Magnet Ring, and Ruby Ring.",
    sellPrice: 1e3,
    image: "images/rings/Iridium Band.png",
    craftingLevel: 9,
    craftingSkill: "combat",
    ingredients: [
      { name: "Iridium Bar", id: "337", quantity: 5 },
      { name: "Solar Essence", id: "768", quantity: 50 },
      { name: "Void Essence", id: "769", quantity: 50 }
    ],
    purchasePrice: null,
    sources: ["Fishing treasure chests"]
  },
  {
    id: "528",
    name: "Jukebox Ring",
    description: "Plays a random assortment of music you've heard.",
    sellPrice: 100,
    image: "images/rings/Jukebox Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Unobtainable"]
  },
  {
    id: "529",
    name: "Amethyst Ring",
    description: "Increases knockback by 10%.",
    sellPrice: 100,
    image: "images/rings/Amethyst Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 1e3,
    sources: ["Adventurer's Guild", "Fishing treasure chests"]
  },
  {
    id: "530",
    name: "Topaz Ring",
    description: "Increases Defense by +1.",
    sellPrice: 100,
    image: "images/rings/Topaz Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 1e3,
    sources: ["Adventurer's Guild", "Fishing treasure chests"]
  },
  {
    id: "531",
    name: "Aquamarine Ring",
    description: "Increases critical strike chance by 10%.",
    sellPrice: 200,
    image: "images/rings/Aquamarine Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 2500,
    sources: ["Adventurer's Guild (Mines floor 40+)", "Fishing treasure chests"]
  },
  {
    id: "532",
    name: "Jade Ring",
    description: "Increases Critical Strike Power by 10%.",
    sellPrice: 200,
    image: "images/rings/Jade Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 2500,
    sources: ["Adventurer's Guild (Mines floor 40+)", "Fishing treasure chests"]
  },
  {
    id: "533",
    name: "Emerald Ring",
    description: "Increases Weapon Speed by 10%.",
    sellPrice: 300,
    image: "images/rings/Emerald Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 5e3,
    sources: ["Adventurer's Guild (Mines floor 80+)", "Fishing treasure chests"]
  },
  {
    id: "534",
    name: "Ruby Ring",
    description: "Increases Attack by 10%.",
    sellPrice: 300,
    image: "images/rings/Ruby Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 5e3,
    sources: [
      "Adventurer's Guild (Mines floor 80+)",
      "Fishing treasure chests",
      "Haunted Skull drops"
    ]
  },
  {
    id: "801",
    name: "Wedding Ring",
    description: "Allows you to propose marriage to another player in multiplayer.",
    sellPrice: 1e3,
    image: "images/rings/Wedding Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [
      { name: "Iridium Bar", id: "337", quantity: 5 },
      { name: "Prismatic Shard", id: "74", quantity: 1 }
    ],
    purchasePrice: null,
    sources: ["Recipe from Traveling Cart (500g)"]
  },
  {
    id: "810",
    name: "Crabshell Ring",
    description: "Increases Defense by +5.",
    sellPrice: 1e3,
    image: "images/rings/Crabshell Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 15e3,
    sources: ["Adventurer's Guild (kill 60 Rock Crabs)"]
  },
  {
    id: "811",
    name: "Napalm Ring",
    description: "Slain monsters will explode, damaging nearby enemies.",
    sellPrice: 1e3,
    image: "images/rings/Napalm Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: 3e4,
    sources: ["Adventurer's Guild (kill 250 Serpents)"]
  },
  {
    id: "839",
    name: "Thorns Ring",
    description: "Monsters take damage equal to the unmitigated damage done to the player.",
    sellPrice: 100,
    image: "images/rings/Thorns Ring.png",
    craftingLevel: 7,
    craftingSkill: "combat",
    ingredients: [
      { name: "Bone Fragment", id: "881", quantity: 50 },
      { name: "Stone", id: "390", quantity: 50 },
      { name: "Gold Bar", id: "336", quantity: 1 }
    ],
    purchasePrice: null,
    sources: []
  },
  {
    id: "859",
    name: "Lucky Ring",
    description: "Increases Luck by +1.",
    sellPrice: 100,
    image: "images/rings/Lucky Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Skull Cavern special item drop", "Panning (rare)"]
  },
  {
    id: "860",
    name: "Hot Java Ring",
    description: "Increases the chance to find Coffee when slaying monsters.",
    sellPrice: 100,
    image: "images/rings/Hot Java Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Volcano Dungeon chests"]
  },
  {
    id: "861",
    name: "Protection Ring",
    description: "Increases invincibility time after taking damage by 0.4 seconds.",
    sellPrice: 100,
    image: "images/rings/Protection Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Volcano Dungeon chests"]
  },
  {
    id: "862",
    name: "Soul Sapper Ring",
    description: "Gain 4 Energy after slaying a monster.",
    sellPrice: 100,
    image: "images/rings/Soul Sapper Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Volcano Dungeon chests"]
  },
  {
    id: "863",
    name: "Phoenix Ring",
    description: "Once a day, be restored to 50% health after being knocked out.",
    sellPrice: 100,
    image: "images/rings/Phoenix Ring.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Volcano Dungeon chests"]
  },
  {
    id: "887",
    name: "Immunity Band",
    description: "Increases Immunity by +4.",
    sellPrice: 250,
    image: "images/rings/Immunity Band.png",
    craftingLevel: null,
    craftingSkill: null,
    ingredients: [],
    purchasePrice: null,
    sources: ["Skull Cavern special item drop", "Mines floor 100+ special item drop"]
  },
  {
    id: "888",
    name: "Glowstone Ring",
    description: "Emits 10 radius circle of light and increases Magnetism by two tiles.",
    sellPrice: 100,
    image: "images/rings/Glowstone Ring.png",
    craftingLevel: 4,
    craftingSkill: "mining",
    ingredients: [
      { name: "Solar Essence", id: "768", quantity: 5 },
      { name: "Iron Bar", id: "335", quantity: 5 }
    ],
    purchasePrice: null,
    sources: []
  }
];

// src/modules/rings/index.ts
var ringsData = rings_default;
var RingQuery = class _RingQuery extends QueryBase {
  constructor(data = ringsData) {
    super(data);
  }
  /** Filter to rings that have crafting ingredients (craftable at the Forge or crafting table). */
  craftable() {
    return new _RingQuery(this.data.filter((r) => r.ingredients.length > 0));
  }
  /** Filter to rings available for purchase (have a `purchasePrice`). */
  purchasable() {
    return new _RingQuery(this.data.filter((r) => r.purchasePrice !== null));
  }
  /** Sort by sell price. Default: `'desc'` (most valuable first). */
  sortBySellPrice(order = "desc") {
    return new _RingQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
      )
    );
  }
};
function rings(source = ringsData) {
  return new RingQuery(source);
}

// data/tackle.json
var tackle_default = [
  {
    id: "691",
    name: "Barbed Hook",
    description: "Makes your catch more secure, causing the 'fishing bar' to cling to your catch. Works best on slow, weak fish.",
    sellPrice: 500,
    image: "images/fish/tackle/Barbed Hook.png"
  },
  {
    id: "695",
    name: "Cork Bobber",
    description: "Slightly increases the size of your 'fishing bar'.",
    sellPrice: 250,
    image: "images/fish/tackle/Cork Bobber.png"
  },
  {
    id: "856",
    name: "Curiosity Lure",
    description: "Increases your chance to catch rare fish.",
    sellPrice: 500,
    image: "images/fish/tackle/Curiosity Lure.png"
  },
  {
    id: "687",
    name: "Dressed Spinner",
    description: "The metal tab and colorful streamers create an enticing spectacle for fish. Increases the bite-rate when fishing.",
    sellPrice: 500,
    image: "images/fish/tackle/Dressed Spinner.png"
  },
  {
    id: "692",
    name: "Lead Bobber",
    description: "Adds weight to your 'fishing bar', preventing it from bouncing along the bottom.",
    sellPrice: 150,
    image: "images/fish/tackle/Lead Bobber.png"
  },
  {
    id: "877",
    name: "Quality Bobber",
    description: "Boosts the quality of fish that you catch.",
    sellPrice: 300,
    image: "images/fish/tackle/Quality Bobber.png"
  },
  {
    id: "SonarBobber",
    name: "Sonar Bobber",
    description: "Shows what fish is on the line before it's caught.",
    sellPrice: 250,
    image: "images/fish/tackle/Sonar Bobber.png"
  },
  {
    id: "686",
    name: "Spinner",
    description: "The shape makes it spin around in the water. Slightly increases the bite-rate when fishing.",
    sellPrice: 250,
    image: "images/fish/tackle/Spinner.png"
  },
  {
    id: "694",
    name: "Trap Bobber",
    description: "Causes fish to escape slower when you aren't reeling them in.",
    sellPrice: 200,
    image: "images/fish/tackle/Trap Bobber.png"
  },
  {
    id: "693",
    name: "Treasure Hunter",
    description: "Fish don't escape while collecting treasures. Also slightly increases the chance to find treasures.",
    sellPrice: 250,
    image: "images/fish/tackle/Treasure Hunter.png"
  }
];

// src/modules/tackle/index.ts
var allTackleData = tackle_default;
var TackleQuery = class _TackleQuery extends QueryBase {
  constructor(data = allTackleData) {
    super(data);
  }
  sortByName(order = "asc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return new _TackleQuery(sorted);
  }
  sortBySellPrice(order = "desc") {
    const sorted = [...this.data].sort(
      (a, b) => order === "asc" ? a.sellPrice - b.sellPrice : b.sellPrice - a.sellPrice
    );
    return new _TackleQuery(sorted);
  }
};
function tackle(source = allTackleData) {
  return new TackleQuery(source);
}

// data/tools.json
var tools_default = [
  {
    id: "hoe",
    type: "upgradeable",
    name: "Hoe",
    description: "Till soil for planting and dig up artifact spots. Higher upgrades allow charging to till multiple tiles at once.",
    canEnchant: true,
    levels: [
      {
        level: "basic",
        image: "images/tools/hoe/Hoe.png",
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "Tills 1 tile of soil."
      },
      {
        level: "copper",
        image: "images/tools/hoe/Copper Hoe.png",
        upgradeCost: 2e3,
        materialName: "Copper Bar",
        materialQuantity: 5,
        description: "Tills 3 tiles in a straight line when charged."
      },
      {
        level: "steel",
        image: "images/tools/hoe/Steel Hoe.png",
        upgradeCost: 5e3,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "Tills 5 tiles in a straight line when charged."
      },
      {
        level: "gold",
        image: "images/tools/hoe/Gold Hoe.png",
        upgradeCost: 1e4,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "Tills a 3\xD73 area when charged."
      },
      {
        level: "iridium",
        image: "images/tools/hoe/Iridium Hoe.png",
        upgradeCost: 25e3,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "Tills a 6\xD73 area when charged."
      }
    ]
  },
  {
    id: "pickaxe",
    type: "upgradeable",
    name: "Pickaxe",
    description: "Break rocks and mine ore. Higher upgrades break tougher rocks and allow picking up placed items.",
    canEnchant: true,
    levels: [
      {
        level: "basic",
        image: "images/tools/pickaxe/Pickaxe.png",
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "Breaks small rocks. Effective in mine floors 1\u201339."
      },
      {
        level: "copper",
        image: "images/tools/pickaxe/Copper Pickaxe.png",
        upgradeCost: 2e3,
        materialName: "Copper Bar",
        materialQuantity: 5,
        description: "Breaks all rocks in mine floors 1\u201339 in one hit."
      },
      {
        level: "steel",
        image: "images/tools/pickaxe/Steel Pickaxe.png",
        upgradeCost: 5e3,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "Breaks farm boulders. Effective in mine floors 40\u201379."
      },
      {
        level: "gold",
        image: "images/tools/pickaxe/Gold Pickaxe.png",
        upgradeCost: 1e4,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "Breaks meteorites. Effective in mine floors 80\u2013120."
      },
      {
        level: "iridium",
        image: "images/tools/pickaxe/Iridium Pickaxe.png",
        upgradeCost: 25e3,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "Breaks Quarry and Skull Cavern rocks in one hit."
      }
    ]
  },
  {
    id: "axe",
    type: "upgradeable",
    name: "Axe",
    description: "Chop trees for wood and sap. Higher upgrades reduce hits required and unlock chopping hardwood stumps and logs.",
    canEnchant: true,
    levels: [
      {
        level: "basic",
        image: "images/tools/axe/Axe.png",
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "10 hits to fell a tree, 5 hits to chop a stump."
      },
      {
        level: "copper",
        image: "images/tools/axe/Copper Axe.png",
        upgradeCost: 2e3,
        materialName: "Copper Bar",
        materialQuantity: 5,
        description: "8 hits to fell a tree, 4 hits to chop a stump."
      },
      {
        level: "steel",
        image: "images/tools/axe/Steel Axe.png",
        upgradeCost: 5e3,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "6 hits to fell a tree, 3 hits to chop a stump. Can chop large stumps for hardwood."
      },
      {
        level: "gold",
        image: "images/tools/axe/Gold Axe.png",
        upgradeCost: 1e4,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "4 hits to fell a tree, 2 hits to chop a stump."
      },
      {
        level: "iridium",
        image: "images/tools/axe/Iridium Axe.png",
        upgradeCost: 25e3,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "2 hits to fell a tree, 1 hit to chop a stump."
      }
    ]
  },
  {
    id: "watering-can",
    type: "upgradeable",
    name: "Watering Can",
    description: "Water crops each day. Higher upgrades increase water capacity and allow watering multiple tiles at once when charged.",
    canEnchant: true,
    levels: [
      {
        level: "basic",
        image: "images/tools/watering-can/Watering Can.png",
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "40 water charges. Waters 1 tile."
      },
      {
        level: "copper",
        image: "images/tools/watering-can/Copper Watering Can.png",
        upgradeCost: 2e3,
        materialName: "Copper Bar",
        materialQuantity: 5,
        description: "55 water charges. Waters 3 tiles in a line when charged."
      },
      {
        level: "steel",
        image: "images/tools/watering-can/Steel Watering Can.png",
        upgradeCost: 5e3,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "70 water charges. Waters 5 tiles in a line when charged."
      },
      {
        level: "gold",
        image: "images/tools/watering-can/Gold Watering Can.png",
        upgradeCost: 1e4,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "85 water charges. Waters a 3\xD73 area when charged."
      },
      {
        level: "iridium",
        image: "images/tools/watering-can/Iridium Watering Can.png",
        upgradeCost: 25e3,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "100 water charges. Waters a 6\xD73 area when charged."
      }
    ]
  },
  {
    id: "trash-can",
    type: "upgradeable",
    name: "Trash Can",
    description: "Discard items from your inventory. Higher upgrades refund a percentage of the item's sell value.",
    canEnchant: true,
    levels: [
      {
        level: "basic",
        image: null,
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "Discards items. No sell value refunded."
      },
      {
        level: "copper",
        image: "images/tools/trash-can/Copper Trash Can.png",
        upgradeCost: 1e3,
        materialName: "Copper Bar",
        materialQuantity: 5,
        description: "Refunds 15% of an item's sell value when trashed."
      },
      {
        level: "steel",
        image: "images/tools/trash-can/Steel Trash Can.png",
        upgradeCost: 2500,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "Refunds 30% of an item's sell value when trashed."
      },
      {
        level: "gold",
        image: "images/tools/trash-can/Gold Trash Can.png",
        upgradeCost: 5e3,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "Refunds 45% of an item's sell value when trashed."
      },
      {
        level: "iridium",
        image: "images/tools/trash-can/Iridium Trash Can.png",
        upgradeCost: 12500,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "Refunds 60% of an item's sell value when trashed."
      }
    ]
  },
  {
    id: "pan",
    type: "upgradeable",
    name: "Copper Pan",
    description: "Gather ore, gems, and other items from shimmering spots in water. Higher upgrades increase yield and chance for special items.",
    canEnchant: true,
    levels: [
      {
        level: "copper",
        image: "images/tools/pan/Copper Pan.png",
        upgradeCost: null,
        materialName: null,
        materialQuantity: null,
        description: "Yields 3\u20139 ore from shimmering water spots."
      },
      {
        level: "steel",
        image: "images/tools/pan/Steel Pan.png",
        upgradeCost: 5e3,
        materialName: "Iron Bar",
        materialQuantity: 5,
        description: "Yields 4\u201310 ore. Up to 2 special items per use."
      },
      {
        level: "gold",
        image: "images/tools/pan/Gold Pan.png",
        upgradeCost: 1e4,
        materialName: "Gold Bar",
        materialQuantity: 5,
        description: "Yields 5\u201311 ore. Up to 3 special items per use."
      },
      {
        level: "iridium",
        image: "images/tools/pan/Iridium Pan.png",
        upgradeCost: 25e3,
        materialName: "Iridium Bar",
        materialQuantity: 5,
        description: "Yields 6\u201312 ore. Up to 4 special items per use."
      }
    ]
  },
  {
    id: "bamboo-pole",
    type: "fishing-rod",
    name: "Bamboo Pole",
    description: "A basic fishing rod. Cannot use bait or tackle.",
    image: "images/tools/fishing-rod/Bamboo Pole.png",
    cost: 500,
    fishingLevelRequired: null,
    bait: false,
    tackleSlots: 0,
    canEnchant: false,
    obtain: "Purchased from Willy's Fish Shop."
  },
  {
    id: "training-rod",
    type: "fishing-rod",
    name: "Training Rod",
    description: "Simplifies the fishing minigame and only catches common fish. Good for beginners.",
    image: "images/tools/fishing-rod/Training Rod.png",
    cost: 25,
    fishingLevelRequired: null,
    bait: false,
    tackleSlots: 0,
    canEnchant: false,
    obtain: "Purchased from Willy's Fish Shop."
  },
  {
    id: "fiberglass-rod",
    type: "fishing-rod",
    name: "Fiberglass Rod",
    description: "A mid-tier fishing rod that supports bait to attract fish faster.",
    image: "images/tools/fishing-rod/Fiberglass Rod.png",
    cost: 1800,
    fishingLevelRequired: 2,
    bait: true,
    tackleSlots: 0,
    canEnchant: false,
    obtain: "Purchased from Willy's Fish Shop."
  },
  {
    id: "iridium-rod",
    type: "fishing-rod",
    name: "Iridium Rod",
    description: "A high-end fishing rod that supports both bait and one tackle attachment.",
    image: "images/tools/fishing-rod/Iridium Rod.png",
    cost: 7500,
    fishingLevelRequired: 6,
    bait: true,
    tackleSlots: 1,
    canEnchant: true,
    obtain: "Purchased from Willy's Fish Shop."
  },
  {
    id: "advanced-iridium-rod",
    type: "fishing-rod",
    name: "Advanced Iridium Rod",
    description: "The ultimate fishing rod with two tackle slots and bait support.",
    image: "images/tools/fishing-rod/Advanced Iridium Rod.png",
    cost: null,
    fishingLevelRequired: null,
    bait: true,
    tackleSlots: 2,
    canEnchant: true,
    obtain: "Reward for achieving Fishing Mastery."
  },
  {
    id: "scythe",
    type: "simple",
    name: "Scythe",
    description: "Cuts grass into hay when a Silo is present. Harvests some crops.",
    image: "images/tools/Scythe.png",
    cost: null,
    obtain: "Starter tool given at the beginning of the game."
  },
  {
    id: "golden-scythe",
    type: "simple",
    name: "Golden Scythe",
    description: "More powerful scythe that collects more hay per swing and harvests a wider range of crops.",
    image: "images/tools/Golden Scythe.png",
    cost: null,
    obtain: "Found in the chest at level 120 of the Quarry Mine."
  },
  {
    id: "iridium-scythe",
    type: "simple",
    name: "Iridium Scythe",
    description: "Automatically harvests any mature crop in its path.",
    image: "images/tools/Iridium Scythe.png",
    cost: null,
    obtain: "Reward for achieving Farming Mastery."
  },
  {
    id: "milk-pail",
    type: "simple",
    name: "Milk Pail",
    description: "Collect milk from cows and goats.",
    image: "images/tools/Milk Pail.png",
    cost: 1e3,
    obtain: "Purchased from Marnie's Ranch."
  },
  {
    id: "shears",
    type: "simple",
    name: "Shears",
    description: "Collect wool from sheep and rabbits.",
    image: "images/tools/Shears.png",
    cost: 1e3,
    obtain: "Purchased from Marnie's Ranch."
  },
  {
    id: "heater",
    type: "simple",
    name: "Heater",
    description: "Keeps animals warm in winter, maintaining their mood without needing a pet.",
    image: "images/tools/Heater.png",
    cost: 2e3,
    obtain: "Purchased from Marnie's Ranch."
  },
  {
    id: "auto-grabber",
    type: "simple",
    name: "Auto-Grabber",
    description: "Automatically collects animal products in a coop or barn each morning.",
    image: "images/tools/Auto-Grabber.png",
    cost: 25e3,
    obtain: "Purchased from Marnie's Ranch."
  },
  {
    id: "auto-petter",
    type: "simple",
    name: "Auto-Petter",
    description: "Keeps animals content by automatically petting them each day when placed in a coop or barn.",
    image: "images/tools/Auto-Petter.png",
    cost: 5e4,
    obtain: "Purchased from Marnie's Ranch, or found in Skull Cavern."
  },
  {
    id: "large-pack",
    type: "backpack",
    name: "Large Pack",
    description: "Expands your inventory to 24 slots.",
    image: "images/tools/backpack/Large Pack.png",
    cost: 2e3,
    slots: 24
  },
  {
    id: "deluxe-pack",
    type: "backpack",
    name: "Deluxe Pack",
    description: "Expands your inventory to 36 slots.",
    image: "images/tools/backpack/Deluxe Pack.png",
    cost: 1e4,
    slots: 36
  }
];

// src/modules/tools/index.ts
var toolsData = tools_default;
var ToolQuery = class _ToolQuery extends QueryBase {
  constructor(data = toolsData) {
    super(data);
  }
  /** Filter by tool type string. Use the convenience methods below for type-narrowed results. */
  byType(type) {
    return new _ToolQuery(this.data.filter((t) => t.type === type));
  }
  /** Filter to upgradeable tools (Hoe, Watering Can, Pickaxe, Axe, Trash Can). */
  upgradeable() {
    return new _ToolQuery(this.data.filter((t) => t.type === "upgradeable"));
  }
  /** Filter to fishing rods. */
  fishingRods() {
    return new _ToolQuery(this.data.filter((t) => t.type === "fishing-rod"));
  }
  /** Filter to simple tools (no upgrades). */
  simple() {
    return new _ToolQuery(this.data.filter((t) => t.type === "simple"));
  }
  /** Filter to backpacks. */
  backpacks() {
    return new _ToolQuery(this.data.filter((t) => t.type === "backpack"));
  }
  /** Filter to tools that can be enchanted at the Forge. */
  canEnchant() {
    return new _ToolQuery(
      this.data.filter(
        (t) => t.type !== "simple" && t.type !== "backpack" && t.canEnchant
      )
    );
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _ToolQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function tools(source = toolsData) {
  return new ToolQuery(source);
}

// data/trees.json
var trees_default = [
  {
    type: "fruit-tree",
    id: "629",
    name: "Apricot Tree",
    saplingId: "629",
    saplingName: "Apricot Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 2e3 },
      { place: "JojaMart", price: 2500 }
    ],
    saplingSellPrice: 500,
    seasons: ["spring"],
    daysToMature: 28,
    description: "A sweet, fleshy fruit with a delicate flavor. One of the first fruits of spring.",
    image: "images/trees/apricot/harvest.png",
    saplingImage: "images/trees/apricot/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/apricot/stage-1.png" },
      { name: "stage 2", image: "images/trees/apricot/stage-2.png" },
      { name: "stage 3", image: "images/trees/apricot/stage-3.png" },
      { name: "stage 4", image: "images/trees/apricot/stage-4.png" },
      { name: "mature", image: "images/trees/apricot/stage-5.png" }
    ],
    produce: {
      id: "634",
      name: "Apricot",
      sellPrice: 50,
      image: "images/trees/apricot/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "fruit-tree",
    id: "628",
    name: "Cherry Tree",
    saplingId: "628",
    saplingName: "Cherry Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 3400 },
      { place: "JojaMart", price: 4250 }
    ],
    saplingSellPrice: 850,
    seasons: ["spring"],
    daysToMature: 28,
    description: "This sweet, bright red fruit makes a wonderful preserve.",
    image: "images/trees/cherry/harvest.png",
    saplingImage: "images/trees/cherry/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/cherry/stage-1.png" },
      { name: "stage 2", image: "images/trees/cherry/stage-2.png" },
      { name: "stage 3", image: "images/trees/cherry/stage-3.png" },
      { name: "stage 4", image: "images/trees/cherry/stage-4.png" },
      { name: "mature", image: "images/trees/cherry/stage-5.png" }
    ],
    produce: {
      id: "638",
      name: "Cherry",
      sellPrice: 80,
      image: "images/trees/cherry/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "fruit-tree",
    id: "630",
    name: "Orange Tree",
    saplingId: "630",
    saplingName: "Orange Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 4e3 },
      { place: "JojaMart", price: 5e3 }
    ],
    saplingSellPrice: 1e3,
    seasons: ["summer"],
    daysToMature: 28,
    description: "A fragrant, tangy citrus fruit.",
    image: "images/trees/orange/harvest.png",
    saplingImage: "images/trees/orange/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/orange/stage-1.png" },
      { name: "stage 2", image: "images/trees/orange/stage-2.png" },
      { name: "stage 3", image: "images/trees/orange/stage-3.png" },
      { name: "stage 4", image: "images/trees/orange/stage-4.png" },
      { name: "mature", image: "images/trees/orange/stage-5.png" }
    ],
    produce: {
      id: "635",
      name: "Orange",
      sellPrice: 100,
      image: "images/trees/orange/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "fruit-tree",
    id: "631",
    name: "Peach Tree",
    saplingId: "631",
    saplingName: "Peach Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 6e3 },
      { place: "JojaMart", price: 7500 }
    ],
    saplingSellPrice: 1500,
    seasons: ["summer"],
    daysToMature: 28,
    description: "A fuzzy fruit of exceptional sweetness.",
    image: "images/trees/peach/harvest.png",
    saplingImage: "images/trees/peach/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/peach/stage-1.png" },
      { name: "stage 2", image: "images/trees/peach/stage-2.png" },
      { name: "stage 3", image: "images/trees/peach/stage-3.png" },
      { name: "stage 4", image: "images/trees/peach/stage-4.png" },
      { name: "mature", image: "images/trees/peach/stage-5.png" }
    ],
    produce: {
      id: "636",
      name: "Peach",
      sellPrice: 140,
      image: "images/trees/peach/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "fruit-tree",
    id: "69",
    name: "Banana Tree",
    saplingId: "69",
    saplingName: "Banana Sapling",
    saplingBuyPrices: [],
    saplingSellPrice: 850,
    seasons: ["summer"],
    daysToMature: 28,
    description: "This delicious tropical fruit smells wonderful, too.",
    image: "images/trees/banana/harvest.png",
    saplingImage: "images/trees/banana/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/banana/stage-1.png" },
      { name: "stage 2", image: "images/trees/banana/stage-2.png" },
      { name: "stage 3", image: "images/trees/banana/stage-3.png" },
      { name: "stage 4", image: "images/trees/banana/stage-4.png" },
      { name: "mature", image: "images/trees/banana/stage-5.png" }
    ],
    produce: {
      id: "91",
      name: "Banana",
      sellPrice: 150,
      image: "images/trees/banana/crop.png",
      energyHealth: { energy: 75, health: 33 }
    }
  },
  {
    type: "fruit-tree",
    id: "835",
    name: "Mango Tree",
    saplingId: "835",
    saplingName: "Mango Sapling",
    saplingBuyPrices: [],
    saplingSellPrice: 850,
    seasons: ["summer"],
    daysToMature: 28,
    description: "A sweet and tangy tropical fruit.",
    image: "images/trees/mango/harvest.png",
    saplingImage: "images/trees/mango/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/mango/stage-1.png" },
      { name: "stage 2", image: "images/trees/mango/stage-2.png" },
      { name: "stage 3", image: "images/trees/mango/stage-3.png" },
      { name: "stage 4", image: "images/trees/mango/stage-4.png" },
      { name: "mature", image: "images/trees/mango/stage-5.png" }
    ],
    produce: {
      id: "834",
      name: "Mango",
      sellPrice: 130,
      image: "images/trees/mango/crop.png",
      energyHealth: { energy: 100, health: 45 }
    }
  },
  {
    type: "fruit-tree",
    id: "633",
    name: "Apple Tree",
    saplingId: "633",
    saplingName: "Apple Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 4e3 },
      { place: "JojaMart", price: 5e3 }
    ],
    saplingSellPrice: 1e3,
    seasons: ["fall"],
    daysToMature: 28,
    description: "A crisp fruit that pairs nicely with autumn flavors.",
    image: "images/trees/apple/harvest.png",
    saplingImage: "images/trees/apple/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/apple/stage-1.png" },
      { name: "stage 2", image: "images/trees/apple/stage-2.png" },
      { name: "stage 3", image: "images/trees/apple/stage-3.png" },
      { name: "stage 4", image: "images/trees/apple/stage-4.png" },
      { name: "mature", image: "images/trees/apple/stage-5.png" }
    ],
    produce: {
      id: "613",
      name: "Apple",
      sellPrice: 100,
      image: "images/trees/apple/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "fruit-tree",
    id: "632",
    name: "Pomegranate Tree",
    saplingId: "632",
    saplingName: "Pomegranate Sapling",
    saplingBuyPrices: [
      { place: "Pierre's", price: 6e3 },
      { place: "JojaMart", price: 7500 }
    ],
    saplingSellPrice: 1500,
    seasons: ["fall"],
    daysToMature: 28,
    description: "This fruit has ancient roots. It's bursting with seeds.",
    image: "images/trees/pomegranate/harvest.png",
    saplingImage: "images/trees/pomegranate/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/pomegranate/stage-1.png" },
      { name: "stage 2", image: "images/trees/pomegranate/stage-2.png" },
      { name: "stage 3", image: "images/trees/pomegranate/stage-3.png" },
      { name: "stage 4", image: "images/trees/pomegranate/stage-4.png" },
      { name: "mature", image: "images/trees/pomegranate/stage-5.png" }
    ],
    produce: {
      id: "637",
      name: "Pomegranate",
      sellPrice: 140,
      image: "images/trees/pomegranate/crop.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "wild-tree",
    id: "1",
    name: "Oak Tree",
    seedId: "309",
    seedName: "Acorn",
    description: "A sturdy deciduous tree common throughout the valley. Can be tapped for Oak Resin.",
    image: "images/trees/oak/stage-5.png",
    seedImage: "images/trees/oak/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/oak/stage-1.png" },
      { name: "stage 2", image: "images/trees/oak/stage-2.png" },
      { name: "stage 3", image: "images/trees/oak/stage-3.png" },
      { name: "stage 4", image: "images/trees/oak/stage-4.png" },
      { name: "mature", image: "images/trees/oak/stage-5.png" }
    ],
    tapper: {
      id: "725",
      name: "Oak Resin",
      sellPrice: 150,
      image: "images/forageables/Oak Resin.png"
    }
  },
  {
    type: "wild-tree",
    id: "2",
    name: "Maple Tree",
    seedId: "310",
    seedName: "Maple Seed",
    description: "A beautiful tree with vibrant fall colors. Produces a sweet, valuable syrup.",
    image: "images/trees/maple/stage-5.png",
    seedImage: "images/trees/maple/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/maple/stage-1.png" },
      { name: "stage 2", image: "images/trees/maple/stage-2.png" },
      { name: "stage 3", image: "images/trees/maple/stage-3.png" },
      { name: "stage 4", image: "images/trees/maple/stage-4.png" },
      { name: "mature", image: "images/trees/maple/stage-5.png" }
    ],
    tapper: {
      id: "724",
      name: "Maple Syrup",
      sellPrice: 200,
      image: "images/forageables/Maple Syrup.png",
      energyHealth: { energy: 50, health: 22 }
    }
  },
  {
    type: "wild-tree",
    id: "3",
    name: "Pine Tree",
    seedId: "311",
    seedName: "Pine Cone",
    description: "A resilient evergreen that stays green throughout the year.",
    image: "images/trees/pine/stage-5.png",
    seedImage: "images/trees/pine/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/pine/stage-1.png" },
      { name: "stage 2", image: "images/trees/pine/stage-2.png" },
      { name: "stage 3", image: "images/trees/pine/stage-3.png" },
      { name: "stage 4", image: "images/trees/pine/stage-4.png" },
      { name: "mature", image: "images/trees/pine/stage-5.png" }
    ],
    tapper: {
      id: "726",
      name: "Pine Tar",
      sellPrice: 100,
      image: "images/forageables/Pine Tar.png"
    }
  },
  {
    type: "wild-tree",
    id: "8",
    name: "Mahogany Tree",
    seedId: "292",
    seedName: "Mahogany Seed",
    description: "A rare hardwood tree. When tapped, it produces sap every day.",
    image: "images/trees/mahogany/stage-5.png",
    seedImage: "images/trees/mahogany/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/mahogany/stage-1.png" },
      { name: "stage 2", image: "images/trees/mahogany/stage-2.png" },
      { name: "stage 3", image: "images/trees/mahogany/stage-3.png" },
      { name: "stage 4", image: "images/trees/mahogany/stage-4.png" },
      { name: "mature", image: "images/trees/mahogany/stage-5.png" }
    ],
    tapper: {
      id: "92",
      name: "Sap",
      sellPrice: 2,
      image: "images/forageables/Sap.png",
      energyHealth: { energy: -2, health: -1 }
    }
  },
  {
    type: "wild-tree",
    id: "7",
    name: "Mushroom Tree",
    seedId: "891",
    seedName: "Mushroom Tree Seed",
    description: "A peculiar tree covered in fungi. Produces mushrooms when tapped.",
    image: "images/trees/mushroom/stage-5.png",
    seedImage: "images/trees/mushroom/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/mushroom/stage-1.png" },
      { name: "stage 2", image: "images/trees/mushroom/stage-2.png" },
      { name: "stage 3", image: "images/trees/mushroom/stage-3.png" },
      { name: "stage 4", image: "images/trees/mushroom/stage-4.png" },
      { name: "mature", image: "images/trees/mushroom/stage-5.png" }
    ],
    tapper: {
      id: "404",
      name: "Common Mushroom",
      sellPrice: 40,
      image: "images/forageables/Common Mushroom.png",
      energyHealth: { energy: 38, health: 17 }
    }
  },
  {
    type: "wild-tree",
    id: "13",
    name: "Mystic Tree",
    seedId: "MysticTreeSeed",
    seedName: "Mystic Tree Seed",
    description: "Not native to the valley. This otherworldly tree produces a powerful mystic syrup.",
    image: "images/trees/mystic/stage-5.png",
    seedImage: "images/trees/mystic/seed.png",
    stages: [
      { name: "stage 1", image: "images/trees/mystic/stage-1.png" },
      { name: "stage 2", image: "images/trees/mystic/stage-2.png" },
      { name: "stage 3", image: "images/trees/mystic/stage-3.png" },
      { name: "stage 4", image: "images/trees/mystic/stage-4.png" },
      { name: "mature", image: "images/trees/mystic/stage-5.png" }
    ],
    tapper: {
      id: "MysticSyrup",
      name: "Mystic Syrup",
      sellPrice: 1e3,
      image: "images/forageables/Mystic Syrup.png",
      energyHealth: { energy: 500, health: 225 }
    }
  }
];

// src/modules/trees/index.ts
var treeData = trees_default;
var TreeQuery = class _TreeQuery extends QueryBase {
  constructor(data = treeData) {
    super(data);
  }
  /** Filter to fruit trees only (`type === 'fruit-tree'`). */
  fruitTrees() {
    return new _TreeQuery(this.data.filter((t) => t.type === "fruit-tree"));
  }
  /** Filter to wild trees only (`type === 'wild-tree'`). */
  wildTrees() {
    return new _TreeQuery(this.data.filter((t) => t.type === "wild-tree"));
  }
  /** Filter fruit trees by season they produce in. Wild trees are excluded. */
  bySeason(season) {
    return new _TreeQuery(
      this.data.filter((t) => t.type === "fruit-tree" && t.seasons.includes(season))
    );
  }
  /** Filter to wild trees that can be tapped (have a `tapper` product). */
  tappable() {
    return new _TreeQuery(
      this.data.filter((t) => t.type === "wild-tree" && t.tapper !== void 0)
    );
  }
  /**
   * Sort by produce sell price. For fruit trees uses `produce.sellPrice`;
   * for wild trees uses `tapper.sellPrice` (or 0 if untappable). Default: `'desc'`.
   */
  sortByProduceSellPrice(order = "desc") {
    return new _TreeQuery(
      [...this.data].sort((a, b) => {
        const aPrice = a.type === "fruit-tree" ? a.produce.sellPrice : a.tapper?.sellPrice ?? 0;
        const bPrice = b.type === "fruit-tree" ? b.produce.sellPrice : b.tapper?.sellPrice ?? 0;
        return order === "desc" ? bPrice - aPrice : aPrice - bPrice;
      })
    );
  }
};
function trees(source = treeData) {
  return new TreeQuery(source);
}

// data/weapons.json
var weapons_default = [
  {
    id: "0",
    type: "sword",
    name: "Rusty Sword",
    image: "images/weapons/swords/Rusty Sword.png",
    damageMin: 2,
    damageMax: 5,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 1,
    obtain: "Given at The Mines entrance.",
    sellPrice: 50,
    canEnchant: false
  },
  {
    id: "12",
    type: "sword",
    name: "Wooden Blade",
    image: "images/weapons/swords/Wooden Blade.png",
    damageMin: 3,
    damageMax: 7,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 1,
    obtain: "The Mines floor 10 chest, or purchased from the Adventurer's Guild.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "11",
    type: "sword",
    name: "Steel Smallsword",
    image: "images/weapons/swords/Steel Smallsword.png",
    damageMin: 4,
    damageMax: 8,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 1,
    obtain: "The Mines floor 20 chest, or purchased from the Adventurer's Guild for 750g.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "43",
    type: "sword",
    name: "Pirate's Sword",
    image: "images/weapons/swords/Pirate's Sword.png",
    damageMin: 8,
    damageMax: 14,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 2,
    obtain: "The Mines floor 50 chest, or purchased from the Adventurer's Guild for 850g.",
    sellPrice: 100,
    canEnchant: true
  },
  {
    id: "1",
    type: "sword",
    name: "Silver Saber",
    image: "images/weapons/swords/Silver Saber.png",
    damageMin: 8,
    damageMax: 15,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 1,
    knockback: 0,
    level: 2,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 100,
    canEnchant: true
  },
  {
    id: "44",
    type: "sword",
    name: "Cutlass",
    image: "images/weapons/swords/Cutlass.png",
    damageMin: 9,
    damageMax: 17,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 3,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 150,
    canEnchant: true
  },
  {
    id: "15",
    type: "sword",
    name: "Forest Sword",
    image: "images/weapons/swords/Forest Sword.png",
    damageMin: 8,
    damageMax: 18,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 1,
    knockback: 0,
    level: 3,
    obtain: "The Mines floors 20\u201360.",
    sellPrice: 150,
    canEnchant: true
  },
  {
    id: "6",
    type: "sword",
    name: "Iron Edge",
    image: "images/weapons/swords/Iron Edge.png",
    damageMin: 12,
    damageMax: 25,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 1,
    knockback: 3,
    level: 3,
    obtain: "The Mines floors 41\u201359.",
    sellPrice: 150,
    canEnchant: true
  },
  {
    id: "65",
    type: "sword",
    name: "Meowmere",
    image: "images/weapons/swords/Meowmere.png",
    damageMin: 20,
    damageMax: 20,
    speed: 4,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 2,
    level: 4,
    obtain: "Wizard's Tower basement.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "5",
    type: "sword",
    name: "Bone Sword",
    image: "images/weapons/swords/Bone Sword.png",
    damageMin: 20,
    damageMax: 30,
    speed: 4,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 2,
    level: 5,
    obtain: "The Mines floors 75+, or dropped by Skeletons.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "10",
    type: "sword",
    name: "Claymore",
    image: "images/weapons/swords/Claymore.png",
    damageMin: 20,
    damageMax: 32,
    speed: -4,
    critChance: 0.02,
    critPower: 0,
    defense: 2,
    knockback: 3,
    level: 5,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "14",
    type: "sword",
    name: "Neptune's Glaive",
    image: "images/weapons/swords/Neptune's Glaive.png",
    damageMin: 18,
    damageMax: 35,
    speed: -1,
    critChance: 0.02,
    critPower: 0,
    defense: 2,
    knockback: 4,
    level: 5,
    obtain: "Fishing Treasure Chests.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "7",
    type: "sword",
    name: "Templar's Blade",
    image: "images/weapons/swords/Templar's Blade.png",
    damageMin: 22,
    damageMax: 29,
    speed: 0,
    critChance: 0,
    critPower: 0,
    defense: 1,
    knockback: 0,
    level: 5,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "13",
    type: "sword",
    name: "Insect Head",
    image: "images/weapons/swords/Insect Head.png",
    damageMin: 20,
    damageMax: 30,
    speed: 2,
    critChance: 0.04,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 6,
    obtain: "Adventurer's Guild reward for killing 80 bug-type monsters.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "8",
    type: "sword",
    name: "Obsidian Edge",
    image: "images/weapons/swords/Obsidian Edge.png",
    damageMin: 30,
    damageMax: 45,
    speed: -1,
    critChance: 0.02,
    critPower: 10,
    defense: 0,
    knockback: 0,
    level: 6,
    obtain: "The Mines floor 90 chest.",
    sellPrice: 300,
    canEnchant: true
  },
  {
    id: "60",
    type: "sword",
    name: "Ossified Blade",
    image: "images/weapons/swords/Ossified Blade.png",
    damageMin: 26,
    damageMax: 42,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 1,
    knockback: 2,
    level: 6,
    obtain: "The Mines floor 90, or from a Mystery Box.",
    sellPrice: 300,
    canEnchant: true
  },
  {
    id: "42",
    type: "sword",
    name: "Haley's Iron",
    image: "images/weapons/swords/Haley's Iron.png",
    damageMin: 30,
    damageMax: 45,
    speed: -1,
    critChance: 0.02,
    critPower: 10,
    defense: 0,
    knockback: 0,
    level: 6,
    obtain: "Haley's stall at the Desert Festival.",
    sellPrice: 300,
    canEnchant: true
  },
  {
    id: "39",
    type: "sword",
    name: "Leah's Whittler",
    image: "images/weapons/swords/Leah's Whittler.png",
    damageMin: 30,
    damageMax: 45,
    speed: -1,
    critChance: 0.02,
    critPower: 10,
    defense: 0,
    knockback: 0,
    level: 6,
    obtain: "Leah's stall at the Desert Festival.",
    sellPrice: 300,
    canEnchant: true
  },
  {
    id: "3",
    type: "sword",
    name: "Holy Blade",
    image: "images/weapons/swords/Holy Blade.png",
    damageMin: 20,
    damageMax: 27,
    speed: 4,
    critChance: 0.02,
    critPower: 0,
    defense: 2,
    knockback: 0,
    level: 7,
    obtain: "The Mines after floor 80.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "52",
    type: "sword",
    name: "Tempered Broadsword",
    image: "images/weapons/swords/Tempered Broadsword.png",
    damageMin: 29,
    damageMax: 44,
    speed: -3,
    critChance: 0.02,
    critPower: 0,
    defense: 3,
    knockback: 3,
    level: 7,
    obtain: "The Mines, or Skull Cavern.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "48",
    type: "sword",
    name: "Yeti Tooth",
    image: "images/weapons/swords/Yeti Tooth.png",
    damageMin: 26,
    damageMax: 42,
    speed: 0,
    critChance: 0.02,
    critPower: 10,
    defense: 4,
    knockback: 0,
    level: 7,
    obtain: "The Mines floors 81\u201399.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "50",
    type: "sword",
    name: "Steel Falchion",
    image: "images/weapons/swords/Steel Falchion.png",
    damageMin: 28,
    damageMax: 46,
    speed: 4,
    critChance: 0.02,
    critPower: 20,
    defense: 0,
    knockback: 0,
    level: 8,
    obtain: "The Mines, or Skull Cavern.",
    sellPrice: 400,
    canEnchant: true
  },
  {
    id: "2",
    type: "sword",
    name: "Dark Sword",
    image: "images/weapons/swords/Dark Sword.png",
    damageMin: 30,
    damageMax: 45,
    speed: -5,
    critChance: 0.04,
    critPower: 0,
    defense: 0,
    knockback: 5,
    level: 9,
    obtain: "Dropped by Haunted Skulls.",
    sellPrice: 450,
    canEnchant: true
  },
  {
    id: "9",
    type: "sword",
    name: "Lava Katana",
    image: "images/weapons/swords/Lava Katana.png",
    damageMin: 55,
    damageMax: 64,
    speed: 0,
    critChance: 0.015,
    critPower: 25,
    defense: 3,
    knockback: 3,
    level: 10,
    obtain: "Purchased from the Adventurer's Guild for 25,000g after reaching The Mines floor 120.",
    sellPrice: 500,
    canEnchant: true
  },
  {
    id: "57",
    type: "sword",
    name: "Dragontooth Cutlass",
    image: "images/weapons/swords/Dragontooth Cutlass.png",
    damageMin: 75,
    damageMax: 90,
    speed: 0,
    critChance: 0.02,
    critPower: 50,
    defense: 0,
    knockback: 0,
    level: 13,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 650,
    canEnchant: true
  },
  {
    id: "54",
    type: "sword",
    name: "Dwarf Sword",
    image: "images/weapons/swords/Dwarf Sword.png",
    damageMin: 65,
    damageMax: 75,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 4,
    knockback: 0,
    level: 13,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 650,
    canEnchant: true
  },
  {
    id: "4",
    type: "sword",
    name: "Galaxy Sword",
    image: "images/weapons/swords/Galaxy Sword.png",
    damageMin: 60,
    damageMax: 80,
    speed: 4,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 13,
    obtain: "Bring a Prismatic Shard to the Three Pillars in the Calico Desert.",
    sellPrice: 650,
    canEnchant: true
  },
  {
    id: "62",
    type: "sword",
    name: "Infinity Blade",
    image: "images/weapons/swords/Infinity Blade.png",
    damageMin: 80,
    damageMax: 100,
    speed: 4,
    critChance: 0.02,
    critPower: 0,
    defense: 2,
    knockback: 0,
    level: 17,
    obtain: "Forge the Galaxy Sword with 3 Galaxy Souls and 60 Cinder Shards.",
    sellPrice: 850,
    canEnchant: true
  },
  {
    id: "16",
    type: "dagger",
    name: "Carving Knife",
    image: "images/weapons/daggers/Carving Knife.png",
    damageMin: 1,
    damageMax: 3,
    speed: 0,
    critChance: 0.04,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 1,
    obtain: "The Mines floors 1\u201319.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "17",
    type: "dagger",
    name: "Iron Dirk",
    image: "images/weapons/daggers/Iron Dirk.png",
    damageMin: 2,
    damageMax: 4,
    speed: 0,
    critChance: 0.03,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 1,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "22",
    type: "dagger",
    name: "Wind Spire",
    image: "images/weapons/daggers/Wind Spire.png",
    damageMin: 1,
    damageMax: 5,
    speed: 0,
    critChance: 0.02,
    critPower: 10,
    defense: 0,
    knockback: 5,
    level: 1,
    obtain: "The Mines floors 21\u201339.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "20",
    type: "dagger",
    name: "Elf Blade",
    image: "images/weapons/daggers/Elf Blade.png",
    damageMin: 3,
    damageMax: 5,
    speed: 0,
    critChance: 0.04,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 2,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 100,
    canEnchant: true
  },
  {
    id: "18",
    type: "dagger",
    name: "Burglar's Shank",
    image: "images/weapons/daggers/Burglar's Shank.png",
    damageMin: 7,
    damageMax: 12,
    speed: 0,
    critChance: 0.04,
    critPower: 25,
    defense: 0,
    knockback: 0,
    level: 4,
    obtain: "The Mines, or Skull Cavern.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "21",
    type: "dagger",
    name: "Crystal Dagger",
    image: "images/weapons/daggers/Crystal Dagger.png",
    damageMin: 4,
    damageMax: 10,
    speed: 0,
    critChance: 0.03,
    critPower: 50,
    defense: 0,
    knockback: 5,
    level: 4,
    obtain: "The Mines floor 60.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "19",
    type: "dagger",
    name: "Shadow Dagger",
    image: "images/weapons/daggers/Shadow Dagger.png",
    damageMin: 10,
    damageMax: 20,
    speed: 0,
    critChance: 0.04,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 4,
    obtain: "The Mines floors 61\u201379 and 101\u2013119.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "51",
    type: "dagger",
    name: "Broken Trident",
    image: "images/weapons/daggers/Broken Trident.png",
    damageMin: 15,
    damageMax: 26,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 5,
    obtain: "Fishing Treasure Chests.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "45",
    type: "dagger",
    name: "Wicked Kris",
    image: "images/weapons/daggers/Wicked Kris.png",
    damageMin: 24,
    damageMax: 30,
    speed: 0,
    critChance: 0.06,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 8,
    obtain: "The Mines, or Skull Cavern.",
    sellPrice: 400,
    canEnchant: true
  },
  {
    id: "40",
    type: "dagger",
    name: "Abby's Planchette",
    image: "images/weapons/daggers/Abby's Planchette.png",
    damageMin: 24,
    damageMax: 30,
    speed: 0,
    critChance: 0.06,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 8,
    obtain: "Abigail's stall at the Desert Festival.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "35",
    type: "dagger",
    name: "Elliott's Pencil",
    image: "images/weapons/daggers/Elliott's Pencil.png",
    damageMin: 24,
    damageMax: 30,
    speed: 0,
    critChance: 0.06,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 8,
    obtain: "Elliott's stall at the Desert Festival.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "23",
    type: "dagger",
    name: "Galaxy Dagger",
    image: "images/weapons/daggers/Galaxy Dagger.png",
    damageMin: 30,
    damageMax: 40,
    speed: 1,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 5,
    level: 8,
    obtain: "Purchased from the Adventurer's Guild for 35,000g after obtaining the Galaxy Sword.",
    sellPrice: 400,
    canEnchant: true
  },
  {
    id: "56",
    type: "dagger",
    name: "Dwarf Dagger",
    image: "images/weapons/daggers/Dwarf Dagger.png",
    damageMin: 32,
    damageMax: 38,
    speed: 1,
    critChance: 0.03,
    critPower: 0,
    defense: 6,
    knockback: 5,
    level: 11,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 550,
    canEnchant: true
  },
  {
    id: "59",
    type: "dagger",
    name: "Dragontooth Shiv",
    image: "images/weapons/daggers/Dragontooth Shiv.png",
    damageMin: 40,
    damageMax: 50,
    speed: 0,
    critChance: 0.05,
    critPower: 100,
    defense: 0,
    knockback: 5,
    level: 12,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 600,
    canEnchant: true
  },
  {
    id: "61",
    type: "dagger",
    name: "Iridium Needle",
    image: "images/weapons/daggers/Iridium Needle.png",
    damageMin: 20,
    damageMax: 35,
    speed: 0,
    critChance: 0.1,
    critPower: 200,
    defense: 0,
    knockback: 0,
    level: 12,
    obtain: "14% chance drop from special slimes when the Shrine of Challenge is active.",
    sellPrice: 600,
    canEnchant: true
  },
  {
    id: "64",
    type: "dagger",
    name: "Infinity Dagger",
    image: "images/weapons/daggers/Infinity Dagger.png",
    damageMin: 50,
    damageMax: 70,
    speed: 1,
    critChance: 0.06,
    critPower: 0,
    defense: 3,
    knockback: 5,
    level: 16,
    obtain: "Forge the Galaxy Dagger with 3 Galaxy Souls and 60 Cinder Shards.",
    sellPrice: 800,
    canEnchant: true
  },
  {
    id: "31",
    type: "club",
    name: "Femur",
    image: "images/weapons/clubs/Femur.png",
    damageMin: 6,
    damageMax: 11,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 2,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 100,
    canEnchant: true
  },
  {
    id: "24",
    type: "club",
    name: "Wood Club",
    image: "images/weapons/clubs/Wood Club.png",
    damageMin: 9,
    damageMax: 16,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 2,
    obtain: "The Mines floors 1\u201339.",
    sellPrice: 100,
    canEnchant: true
  },
  {
    id: "27",
    type: "club",
    name: "Wood Mallet",
    image: "images/weapons/clubs/Wood Mallet.png",
    damageMin: 15,
    damageMax: 24,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 2,
    level: 3,
    obtain: "The Mines, or purchased from the Adventurer's Guild.",
    sellPrice: 150,
    canEnchant: true
  },
  {
    id: "26",
    type: "club",
    name: "Lead Rod",
    image: "images/weapons/clubs/Lead Rod.png",
    damageMin: 18,
    damageMax: 27,
    speed: -4,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 4,
    obtain: "The Mines floors 41\u201379.",
    sellPrice: 200,
    canEnchant: true
  },
  {
    id: "46",
    type: "club",
    name: "Kudgel",
    image: "images/weapons/clubs/Kudgel.png",
    damageMin: 27,
    damageMax: 40,
    speed: -1,
    critChance: 0.02,
    critPower: 50,
    defense: 0,
    knockback: 2,
    level: 5,
    obtain: "The Mines floors 101+.",
    sellPrice: 250,
    canEnchant: true
  },
  {
    id: "25",
    type: "club",
    name: "Alex's Bat",
    image: "images/weapons/clubs/Alex's Bat.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Alex's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "37",
    type: "club",
    name: "Harvey's Mallet",
    image: "images/weapons/clubs/Harvey's Mallet.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Harvey's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "36",
    type: "club",
    name: "Maru's Wrench",
    image: "images/weapons/clubs/Maru's Wrench.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Maru's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "38",
    type: "club",
    name: "Penny's Fryer",
    image: "images/weapons/clubs/Penny's Fryer.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Penny's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "30",
    type: "club",
    name: "Sam's Old Guitar",
    image: "images/weapons/clubs/Sam's Old Guitar.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Sam's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "41",
    type: "club",
    name: "Seb's Lost Mace",
    image: "images/weapons/clubs/Seb's Lost Mace.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "Sebastian's stall at the Desert Festival.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "28",
    type: "club",
    name: "The Slammer",
    image: "images/weapons/clubs/The Slammer.png",
    damageMin: 40,
    damageMax: 55,
    speed: -2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 0,
    level: 7,
    obtain: "The Mines floors 81\u201399, or Skull Cavern.",
    sellPrice: 350,
    canEnchant: true
  },
  {
    id: "29",
    type: "club",
    name: "Galaxy Hammer",
    image: "images/weapons/clubs/Galaxy Hammer.png",
    damageMin: 70,
    damageMax: 90,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 0,
    knockback: 5,
    level: 12,
    obtain: "Purchased from the Adventurer's Guild for 75,000g after obtaining the Galaxy Sword.",
    sellPrice: 600,
    canEnchant: true
  },
  {
    id: "55",
    type: "club",
    name: "Dwarf Hammer",
    image: "images/weapons/clubs/Dwarf Hammer.png",
    damageMin: 75,
    damageMax: 85,
    speed: 0,
    critChance: 0.02,
    critPower: 0,
    defense: 2,
    knockback: 5,
    level: 13,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 650,
    canEnchant: true
  },
  {
    id: "58",
    type: "club",
    name: "Dragontooth Club",
    image: "images/weapons/clubs/Dragontooth Club.png",
    damageMin: 80,
    damageMax: 100,
    speed: 0,
    critChance: 0.02,
    critPower: 50,
    defense: 0,
    knockback: 3,
    level: 14,
    obtain: "Volcano Dungeon chest.",
    sellPrice: 700,
    canEnchant: true
  },
  {
    id: "63",
    type: "club",
    name: "Infinity Gavel",
    image: "images/weapons/clubs/Infinity Gavel.png",
    damageMin: 100,
    damageMax: 120,
    speed: 2,
    critChance: 0.02,
    critPower: 0,
    defense: 1,
    knockback: 5,
    level: 17,
    obtain: "Forge the Galaxy Hammer with 3 Galaxy Souls and 60 Cinder Shards.",
    sellPrice: 850,
    canEnchant: true
  },
  {
    id: "32",
    type: "slingshot",
    name: "Slingshot",
    image: "images/weapons/slingshots/Slingshot.png",
    obtain: "The Mines floor 40 chest.",
    sellPrice: 50,
    canEnchant: true
  },
  {
    id: "33",
    type: "slingshot",
    name: "Master Slingshot",
    image: "images/weapons/slingshots/Master Slingshot.png",
    obtain: "The Mines floor 70 chest.",
    sellPrice: 50,
    canEnchant: true
  }
];

// src/modules/weapons/index.ts
var weaponsData = weapons_default;
var WeaponQuery = class _WeaponQuery extends QueryBase {
  constructor(data = weaponsData) {
    super(data);
  }
  /** Filter by weapon type string. Use the convenience methods below for type-narrowed results. */
  byType(type) {
    return new _WeaponQuery(this.data.filter((w) => w.type === type));
  }
  /** Filter to swords only. */
  swords() {
    return new _WeaponQuery(this.data.filter((w) => w.type === "sword"));
  }
  /** Filter to daggers only. */
  daggers() {
    return new _WeaponQuery(this.data.filter((w) => w.type === "dagger"));
  }
  /** Filter to clubs only. */
  clubs() {
    return new _WeaponQuery(this.data.filter((w) => w.type === "club"));
  }
  /** Filter to slingshots only. */
  slingshots() {
    return new _WeaponQuery(this.data.filter((w) => w.type === "slingshot"));
  }
  /** Filter to all melee weapons (swords, daggers, clubs). */
  melee() {
    return new _WeaponQuery(
      this.data.filter(
        (w) => w.type === "sword" || w.type === "dagger" || w.type === "club"
      )
    );
  }
  /** Filter to weapons that can be enchanted at the Forge. */
  canEnchant() {
    return new _WeaponQuery(this.data.filter((w) => w.canEnchant));
  }
  /**
   * Filter to melee weapons at or above the given level threshold.
   * Slingshots are excluded as they have no level.
   */
  byMinLevel(level) {
    return new _WeaponQuery(
      this.data.filter((w) => w.type !== "slingshot" && w.level >= level)
    );
  }
  /**
   * Filter to melee weapons at or below the given level threshold.
   * Slingshots are excluded as they have no level.
   */
  byMaxLevel(level) {
    return new _WeaponQuery(
      this.data.filter((w) => w.type !== "slingshot" && w.level <= level)
    );
  }
  /**
   * Sort by max damage. Slingshots sort as 0 since they have no `damageMax`.
   * Default: `'desc'` (highest damage first).
   */
  sortByDamage(order = "desc") {
    return new _WeaponQuery(
      [...this.data].sort((a, b) => {
        const aMax = "damageMax" in a ? a.damageMax : 0;
        const bMax = "damageMax" in b ? b.damageMax : 0;
        return order === "asc" ? aMax - bMax : bMax - aMax;
      })
    );
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _WeaponQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /**
   * Sort by level. Slingshots sort as 0 since they have no level.
   * Default: `'asc'` (lowest level first).
   */
  sortByLevel(order = "asc") {
    return new _WeaponQuery(
      [...this.data].sort((a, b) => {
        const aLevel = "level" in a ? a.level : 0;
        const bLevel = "level" in b ? b.level : 0;
        return order === "asc" ? aLevel - bLevel : bLevel - aLevel;
      })
    );
  }
};
function weapons(source = weaponsData) {
  return new WeaponQuery(source);
}

// src/modules/search/index.ts
function matches(query, id, name) {
  const q = query.toLowerCase();
  return id.toLowerCase() === q || name.toLowerCase().includes(q);
}
function dedupe(raw) {
  const seen = /* @__PURE__ */ new Map();
  for (const { parent, ...rest } of raw) {
    const key = `${rest.kind}:${rest.id}`;
    if (seen.has(key)) {
      if (parent) seen.get(key).parents.push(parent);
    } else {
      seen.set(key, { ...rest, parents: parent ? [parent] : void 0 });
    }
  }
  return Array.from(seen.values());
}
function search(query, kinds) {
  const raw = [];
  function add(result) {
    if (!kinds || kinds.includes(result.kind)) {
      raw.push(result);
    }
  }
  for (const crop of crops().get()) {
    if (matches(query, crop.id, crop.name)) {
      add({
        kind: "crop",
        id: crop.id,
        name: crop.name,
        image: crop.image,
        sellPrice: crop.cropSellPrice
      });
    }
    if (matches(query, crop.seedId, crop.seedName)) {
      add({
        kind: "crop-seed",
        id: crop.seedId,
        name: crop.seedName,
        image: crop.seedImage,
        sellPrice: crop.seedSellPrice
      });
    }
  }
  for (const tree of trees().get()) {
    if (tree.type === "fruit-tree") {
      if (matches(query, tree.id, tree.name)) {
        add({
          kind: "fruit-tree",
          id: tree.id,
          name: tree.name,
          image: tree.image,
          sellPrice: null
        });
      }
      if (matches(query, tree.produce.id, tree.produce.name)) {
        add({
          kind: "fruit-tree-produce",
          id: tree.produce.id,
          name: tree.produce.name,
          image: tree.produce.image,
          sellPrice: tree.produce.sellPrice,
          parent: { id: tree.id, name: tree.name }
        });
      }
    } else {
      if (matches(query, tree.id, tree.name)) {
        add({
          kind: "wild-tree",
          id: tree.id,
          name: tree.name,
          image: tree.image,
          sellPrice: null
        });
      }
      if (matches(query, tree.seedId, tree.seedName)) {
        add({
          kind: "wild-tree-seed",
          id: tree.seedId,
          name: tree.seedName,
          image: tree.seedImage,
          sellPrice: null
        });
      }
      if (tree.tapper && matches(query, tree.tapper.id, tree.tapper.name)) {
        add({
          kind: "wild-tree-tapper",
          id: tree.tapper.id,
          name: tree.tapper.name,
          image: tree.tapper.image,
          sellPrice: tree.tapper.sellPrice,
          parent: { id: tree.id, name: tree.name }
        });
      }
    }
  }
  for (const animal of animals().get()) {
    if (matches(query, animal.id, animal.name)) {
      add({
        kind: "animal",
        id: animal.id,
        name: animal.name,
        image: animal.image,
        sellPrice: null
      });
    }
    if (isFarmAnimal(animal)) {
      if (matches(query, animal.produce.id, animal.produce.name)) {
        add({
          kind: "animal-produce",
          id: animal.produce.id,
          name: animal.produce.name,
          image: animal.produce.image,
          sellPrice: animal.produce.sellPrice,
          parent: { id: animal.id, name: animal.name }
        });
      }
      if (animal.deluxeProduce && matches(query, animal.deluxeProduce.id, animal.deluxeProduce.name)) {
        add({
          kind: "animal-produce",
          id: animal.deluxeProduce.id,
          name: animal.deluxeProduce.name,
          image: animal.deluxeProduce.image,
          sellPrice: animal.deluxeProduce.sellPrice,
          parent: { id: animal.id, name: animal.name }
        });
      }
    }
  }
  for (const monster of monsters().get()) {
    if (matches(query, monster.id, monster.name)) {
      add({
        kind: "monster",
        id: monster.id,
        name: monster.name,
        image: monster.image,
        sellPrice: null
      });
    }
  }
  for (const loot of monsterLoot().get()) {
    if (matches(query, loot.id, loot.name)) {
      for (const monsterId of loot.droppedBy) {
        const monster = monsters().find(monsterId);
        add({
          kind: "monster-loot",
          id: loot.id,
          name: loot.name,
          image: loot.image,
          sellPrice: loot.sellPrice,
          parent: monster ? { id: monster.id, name: monster.name } : void 0
        });
      }
    }
  }
  for (const ring of rings().get()) {
    if (matches(query, ring.id, ring.name)) {
      add({
        kind: "ring",
        id: ring.id,
        name: ring.name,
        image: ring.image,
        sellPrice: ring.sellPrice
      });
    }
  }
  for (const tool of tools().get()) {
    if (tool.type === "upgradeable") {
      if (matches(query, tool.id, tool.name)) {
        const image = tool.levels.find((l) => l.image !== null)?.image;
        if (image) {
          add({ kind: "tool", id: tool.id, name: tool.name, image, sellPrice: null });
        }
      }
    } else {
      if (matches(query, tool.id, tool.name)) {
        add({ kind: "tool", id: tool.id, name: tool.name, image: tool.image, sellPrice: null });
      }
    }
  }
  for (const weapon of weapons().get()) {
    if (matches(query, weapon.id, weapon.name)) {
      add({
        kind: "weapon",
        id: weapon.id,
        name: weapon.name,
        image: weapon.image,
        sellPrice: weapon.sellPrice
      });
    }
  }
  for (const good of artisanGoods().get()) {
    if (matches(query, good.id, good.name)) {
      add({
        kind: "artisan-good",
        id: good.id,
        name: good.name,
        image: good.image,
        sellPrice: good.sellPrice
      });
    }
  }
  for (const hat of hats().get()) {
    if (matches(query, hat.id, hat.name)) {
      add({ kind: "hat", id: hat.id, name: hat.name, image: hat.image, sellPrice: null });
    }
  }
  for (const item of footwear().get()) {
    if (matches(query, item.id, item.name)) {
      add({ kind: "footwear", id: item.id, name: item.name, image: item.image, sellPrice: null });
    }
  }
  for (const item of forageables().get()) {
    if (matches(query, item.id, item.name)) {
      add({
        kind: "forageable",
        id: item.id,
        name: item.name,
        image: item.image,
        sellPrice: item.sellPrice
      });
    }
  }
  for (const item of fish().get()) {
    if (matches(query, item.id, item.name)) {
      add({
        kind: "fish",
        id: item.id,
        name: item.name,
        image: item.image,
        sellPrice: item.sellPrice
      });
    }
  }
  for (const item of bait().get()) {
    if (matches(query, item.id, item.name)) {
      add({
        kind: "bait",
        id: item.id,
        name: item.name,
        image: item.image,
        sellPrice: item.sellPrice
      });
    }
  }
  for (const item of tackle().get()) {
    if (matches(query, item.id, item.name)) {
      add({
        kind: "tackle",
        id: item.id,
        name: item.name,
        image: item.image,
        sellPrice: item.sellPrice
      });
    }
  }
  for (const dish of cooking().get()) {
    if (matches(query, dish.id, dish.name)) {
      add({
        kind: "cooked-dish",
        id: dish.id,
        name: dish.name,
        image: dish.image,
        sellPrice: dish.sellPrice
      });
    }
  }
  for (const artifact of artifacts().get()) {
    if (matches(query, artifact.id, artifact.name)) {
      add({
        kind: "artifact",
        id: artifact.id,
        name: artifact.name,
        image: artifact.image,
        sellPrice: artifact.sellPrice
      });
    }
  }
  for (const recipe of crafting().get()) {
    if (matches(query, recipe.id, recipe.name)) {
      add({
        kind: "crafting-recipe",
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        sellPrice: null
      });
    }
  }
  for (const mineral of minerals().get()) {
    if (matches(query, mineral.id, mineral.name)) {
      if (mineral.kind === "geode") {
        add({
          kind: "geode",
          id: mineral.id,
          name: mineral.name,
          image: mineral.image,
          sellPrice: mineral.sellPrice
        });
      } else if (mineral.kind === "node") {
        add({
          kind: "mining-node",
          id: mineral.id,
          name: mineral.name,
          image: mineral.image,
          sellPrice: null
        });
      } else if (mineral.kind === "resource") {
        add({
          kind: "mineral-resource",
          id: mineral.id,
          name: mineral.name,
          image: mineral.image,
          sellPrice: mineral.sellPrice
        });
      } else {
        add({
          kind: "mineral",
          id: mineral.id,
          name: mineral.name,
          image: mineral.image,
          sellPrice: mineral.sellPrice
        });
      }
    }
  }
  return dedupe(raw);
}

// data/skills.json
var skills_default = [
  {
    id: "farming",
    name: "Farming",
    description: "Gained by harvesting crops and caring for animals.",
    toolBonus: "Each level grants +1 hoe and watering can proficiency",
    image: "images/skills/Farming.png",
    levels: [
      {
        level: 1,
        xpRequired: 100,
        totalXp: 100,
        recipes: { crafting: ["Scarecrow"], cooking: [] }
      },
      {
        level: 2,
        xpRequired: 280,
        totalXp: 380,
        recipes: {
          crafting: ["Basic Fertilizer", "Mayonnaise Machine", "Stone Fence"],
          cooking: []
        }
      },
      {
        level: 3,
        xpRequired: 390,
        totalXp: 770,
        recipes: {
          crafting: ["Bee House", "Sprinkler", "Speed-Gro"],
          cooking: ["Farmer's Lunch"]
        }
      },
      {
        level: 4,
        xpRequired: 530,
        totalXp: 1300,
        recipes: {
          crafting: ["Preserves Jar", "Basic Retaining Soil", "Iron Fence"],
          cooking: []
        }
      },
      {
        level: 5,
        xpRequired: 850,
        totalXp: 2150,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 6,
        xpRequired: 1150,
        totalXp: 3300,
        recipes: {
          crafting: ["Cheese Press", "Hardwood Fence", "Quality Sprinkler"],
          cooking: []
        }
      },
      {
        level: 7,
        xpRequired: 1500,
        totalXp: 4800,
        recipes: { crafting: ["Loom", "Quality Retaining Soil", "Oil Maker"], cooking: [] }
      },
      {
        level: 8,
        xpRequired: 2100,
        totalXp: 6900,
        recipes: { crafting: ["Keg", "Deluxe Speed-Gro", "Seed Maker"], cooking: [] }
      },
      {
        level: 9,
        xpRequired: 3100,
        totalXp: 1e4,
        recipes: { crafting: ["Iridium Sprinkler", "Quality Fertilizer"], cooking: [] }
      },
      {
        level: 10,
        xpRequired: 5e3,
        totalXp: 15e3,
        recipes: { crafting: [], cooking: [] }
      }
    ],
    mastery: {
      unlocks: [
        {
          name: "Iridium Scythe",
          description: "Can harvest any crops and is excellent at gathering hay"
        },
        {
          name: "Statue of Blessings",
          description: "Recipe unlocked \u2014 provides a unique blessing daily"
        },
        {
          name: "Golden Animal Crackers",
          description: "Permanently doubles farm animal produce (except pigs)"
        }
      ]
    }
  },
  {
    id: "mining",
    name: "Mining",
    description: "Increased by breaking rocks.",
    toolBonus: "Each level adds +1 to pickaxe proficiency",
    image: "images/skills/Mining.png",
    levels: [
      {
        level: 1,
        xpRequired: 100,
        totalXp: 100,
        recipes: { crafting: ["Cherry Bomb"], cooking: [] }
      },
      {
        level: 2,
        xpRequired: 280,
        totalXp: 380,
        recipes: { crafting: ["Staircase"], cooking: [] }
      },
      {
        level: 3,
        xpRequired: 390,
        totalXp: 770,
        recipes: {
          crafting: ["Glowstone Ring", "Transmute (Fe)"],
          cooking: ["Miner's Treat"]
        }
      },
      {
        level: 4,
        xpRequired: 530,
        totalXp: 1300,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 5,
        xpRequired: 850,
        totalXp: 2150,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 6,
        xpRequired: 1150,
        totalXp: 3300,
        recipes: { crafting: ["Bomb"], cooking: [] }
      },
      {
        level: 7,
        xpRequired: 1500,
        totalXp: 4800,
        recipes: { crafting: ["Transmute (Au)", "Mega Bomb"], cooking: [] }
      },
      {
        level: 8,
        xpRequired: 2100,
        totalXp: 6900,
        recipes: { crafting: ["Crystalarium"], cooking: [] }
      },
      {
        level: 9,
        xpRequired: 3100,
        totalXp: 1e4,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 10,
        xpRequired: 5e3,
        totalXp: 15e3,
        recipes: { crafting: [], cooking: [] }
      }
    ],
    mastery: {
      unlocks: [
        {
          name: "Statue of The Dwarf King",
          description: "Recipe unlocked \u2014 choose from two mining powers daily"
        },
        {
          name: "Heavy Furnace",
          description: "Recipe unlocked \u2014 more efficient smelting (25 ore + 3 coal per batch)"
        },
        { name: "Doubled Gem Yield", description: "Gem-bearing rocks now grant twice the gems" }
      ]
    }
  },
  {
    id: "foraging",
    name: "Foraging",
    description: "Increased by gathering forage items and chopping trees with an axe.",
    toolBonus: "Each level adds +1 axe proficiency",
    image: "images/skills/Foraging.png",
    levels: [
      {
        level: 1,
        xpRequired: 100,
        totalXp: 100,
        recipes: { crafting: ["Wild Seeds (Spring)"], cooking: ["Field Snack"] }
      },
      {
        level: 2,
        xpRequired: 280,
        totalXp: 380,
        recipes: { crafting: ["Charcoal Kiln"], cooking: [] }
      },
      {
        level: 3,
        xpRequired: 390,
        totalXp: 770,
        recipes: { crafting: ["Cookout Kit"], cooking: ["Moss Soup"] }
      },
      {
        level: 4,
        xpRequired: 530,
        totalXp: 1300,
        recipes: { crafting: ["Wild Seeds (Summer)", "Tapper", "Mushroom Log"], cooking: [] }
      },
      {
        level: 5,
        xpRequired: 850,
        totalXp: 2150,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 6,
        xpRequired: 1150,
        totalXp: 3300,
        recipes: { crafting: ["Lightning Rod", "Wild Seeds (Fall)"], cooking: [] }
      },
      {
        level: 7,
        xpRequired: 1500,
        totalXp: 4800,
        recipes: { crafting: ["Warp Totem: Beach"], cooking: [] }
      },
      {
        level: 8,
        xpRequired: 2100,
        totalXp: 6900,
        recipes: {
          crafting: ["Wild Seeds (Winter)", "Warp Totem: Mountains", "Tree Fertilizer"],
          cooking: []
        }
      },
      {
        level: 9,
        xpRequired: 3100,
        totalXp: 1e4,
        recipes: { crafting: ["Warp Totem: Farm", "Tent Kit"], cooking: ["Survival Burger"] }
      },
      {
        level: 10,
        xpRequired: 5e3,
        totalXp: 15e3,
        recipes: { crafting: [], cooking: [] }
      }
    ],
    mastery: {
      unlocks: [
        { name: "Mystic Tree Seed", description: "Recipe unlocked \u2014 grows a special tree" },
        {
          name: "Treasure Totem",
          description: "Recipe unlocked \u2014 summons a ring of treasure spots"
        },
        {
          name: "Golden Mystery Box",
          description: "Superior mystery boxes added to the loot table"
        }
      ]
    }
  },
  {
    id: "fishing",
    name: "Fishing",
    description: "Increased by catching fish and using crab pots.",
    toolBonus: "Each level grants +1 fishing rod proficiency, increases minimum fish size and bobber bar height, and decreases max time before fish bite",
    image: "images/skills/Fishing.png",
    levels: [
      {
        level: 1,
        xpRequired: 100,
        totalXp: 100,
        recipes: { crafting: ["Bait"], cooking: [] }
      },
      {
        level: 2,
        xpRequired: 280,
        totalXp: 380,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 3,
        xpRequired: 390,
        totalXp: 770,
        recipes: { crafting: ["Crab Pot"], cooking: ["Dish O' The Sea"] }
      },
      {
        level: 4,
        xpRequired: 530,
        totalXp: 1300,
        recipes: { crafting: ["Deluxe Bait", "Worm Bin", "Recycling Machine"], cooking: [] }
      },
      {
        level: 5,
        xpRequired: 850,
        totalXp: 2150,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 6,
        xpRequired: 1150,
        totalXp: 3300,
        recipes: {
          crafting: ["Bait Maker", "Spinner", "Trap Bobber", "Sonar Bobber"],
          cooking: []
        }
      },
      {
        level: 7,
        xpRequired: 1500,
        totalXp: 4800,
        recipes: { crafting: ["Cork Bobber", "Treasure Hunter"], cooking: [] }
      },
      {
        level: 8,
        xpRequired: 2100,
        totalXp: 6900,
        recipes: {
          crafting: ["Deluxe Worm Bin", "Barbed Hook", "Dressed Spinner"],
          cooking: []
        }
      },
      {
        level: 9,
        xpRequired: 3100,
        totalXp: 1e4,
        recipes: { crafting: ["Magnet"], cooking: ["Seafoam Pudding"] }
      },
      {
        level: 10,
        xpRequired: 5e3,
        totalXp: 15e3,
        recipes: { crafting: [], cooking: [] }
      }
    ],
    mastery: {
      unlocks: [
        {
          name: "Advanced Iridium Rod",
          description: "Accepts up to two bobbers simultaneously"
        },
        {
          name: "Challenge Bait",
          description: "Recipe unlocked \u2014 perfect catch yields triple fish, but reduced catch per escape"
        },
        {
          name: "Golden Fishing Treasure Chest",
          description: "Superior fishing treasure chests added to the loot table"
        }
      ]
    }
  },
  {
    id: "combat",
    name: "Combat",
    description: "Increased by fighting monsters. Some levels increase total HP.",
    toolBonus: "Some levels increase max HP",
    image: "images/skills/Combat.png",
    levels: [
      {
        level: 1,
        xpRequired: 100,
        totalXp: 100,
        recipes: { crafting: ["Sturdy Ring"], cooking: ["Bug Steak"] }
      },
      {
        level: 2,
        xpRequired: 280,
        totalXp: 380,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 3,
        xpRequired: 390,
        totalXp: 770,
        recipes: { crafting: ["Life Elixir"], cooking: [] }
      },
      {
        level: 4,
        xpRequired: 530,
        totalXp: 1300,
        recipes: { crafting: [], cooking: ["Roots Platter"] }
      },
      {
        level: 5,
        xpRequired: 850,
        totalXp: 2150,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 6,
        xpRequired: 1150,
        totalXp: 3300,
        recipes: { crafting: ["Warrior Ring"], cooking: [] }
      },
      {
        level: 7,
        xpRequired: 1500,
        totalXp: 4800,
        recipes: { crafting: [], cooking: [] }
      },
      {
        level: 8,
        xpRequired: 2100,
        totalXp: 6900,
        recipes: { crafting: ["Slime Egg-Press"], cooking: [] }
      },
      {
        level: 9,
        xpRequired: 3100,
        totalXp: 1e4,
        recipes: {
          crafting: ["Oil of Garlic", "Ring of Yoba", "Thorns Ring", "Slime Incubator"],
          cooking: []
        }
      },
      {
        level: 10,
        xpRequired: 5e3,
        totalXp: 15e3,
        recipes: { crafting: [], cooking: [] }
      }
    ],
    mastery: {
      unlocks: [
        {
          name: "Anvil",
          description: "Recipe unlocked \u2014 re-forge trinkets with randomized stats (costs 3 iridium bars)"
        },
        {
          name: "Mini-Forge",
          description: "Recipe unlocked \u2014 home furnace access without visiting the blacksmith"
        },
        {
          name: "Trinket Slot",
          description: "New equipment slot unlocked \u2014 trinkets grant special combat powers"
        }
      ]
    }
  }
];

// data/professions.json
var professions_default = [
  {
    id: "0",
    name: "Rancher",
    skill: "Farming",
    level: 5,
    parentProfession: null,
    description: "Animal products worth 20% more."
  },
  {
    id: "1",
    name: "Tiller",
    skill: "Farming",
    level: 5,
    parentProfession: null,
    description: "Crops worth 10% more."
  },
  {
    id: "2",
    name: "Coopmaster",
    skill: "Farming",
    level: 10,
    parentProfession: "0",
    description: "Befriend coop animals quicker. Incubation time cut in half."
  },
  {
    id: "3",
    name: "Shepherd",
    skill: "Farming",
    level: 10,
    parentProfession: "0",
    description: "Befriend barn animals quicker. Sheep produce wool faster."
  },
  {
    id: "4",
    name: "Artisan",
    skill: "Farming",
    level: 10,
    parentProfession: "1",
    description: "Artisan goods worth 40% more."
  },
  {
    id: "5",
    name: "Agriculturist",
    skill: "Farming",
    level: 10,
    parentProfession: "1",
    description: "All crops grow 10% faster."
  },
  {
    id: "6",
    name: "Fisher",
    skill: "Fishing",
    level: 5,
    parentProfession: null,
    description: "Fish worth 25% more."
  },
  {
    id: "7",
    name: "Trapper",
    skill: "Fishing",
    level: 5,
    parentProfession: null,
    description: "Resources required to craft crab pots reduced."
  },
  {
    id: "8",
    name: "Angler",
    skill: "Fishing",
    level: 10,
    parentProfession: "6",
    description: "Fish worth 50% more."
  },
  {
    id: "9",
    name: "Pirate",
    skill: "Fishing",
    level: 10,
    parentProfession: "6",
    description: "Chance to find treasure doubled."
  },
  {
    id: "10",
    name: "Mariner",
    skill: "Fishing",
    level: 10,
    parentProfession: "7",
    description: "Crab pots no longer produce junk items."
  },
  {
    id: "11",
    name: "Luremaster",
    skill: "Fishing",
    level: 10,
    parentProfession: "7",
    description: "Crab pots no longer require bait."
  },
  {
    id: "12",
    name: "Forester",
    skill: "Foraging",
    level: 5,
    parentProfession: null,
    description: "Gain 25% more wood when chopping."
  },
  {
    id: "13",
    name: "Gatherer",
    skill: "Foraging",
    level: 5,
    parentProfession: null,
    description: "Chance for double harvest of foraged items."
  },
  {
    id: "14",
    name: "Lumberjack",
    skill: "Foraging",
    level: 10,
    parentProfession: "12",
    description: "All trees have a chance to drop hardwood."
  },
  {
    id: "15",
    name: "Tapper",
    skill: "Foraging",
    level: 10,
    parentProfession: "12",
    description: "Syrups worth 25% more."
  },
  {
    id: "16",
    name: "Botanist",
    skill: "Foraging",
    level: 10,
    parentProfession: "13",
    description: "Foraged items are always highest quality."
  },
  {
    id: "17",
    name: "Tracker",
    skill: "Foraging",
    level: 10,
    parentProfession: "13",
    description: "Location of forageable items revealed."
  },
  {
    id: "18",
    name: "Miner",
    skill: "Mining",
    level: 5,
    parentProfession: null,
    description: "+1 ore per vein."
  },
  {
    id: "19",
    name: "Geologist",
    skill: "Mining",
    level: 5,
    parentProfession: null,
    description: "Chance for gems to appear in pairs."
  },
  {
    id: "20",
    name: "Blacksmith",
    skill: "Mining",
    level: 10,
    parentProfession: "18",
    description: "Metal bars worth 50% more."
  },
  {
    id: "21",
    name: "Prospector",
    skill: "Mining",
    level: 10,
    parentProfession: "18",
    description: "Chance to find coal doubled."
  },
  {
    id: "22",
    name: "Excavator",
    skill: "Mining",
    level: 10,
    parentProfession: "19",
    description: "Chance to find geodes doubled."
  },
  {
    id: "23",
    name: "Gemologist",
    skill: "Mining",
    level: 10,
    parentProfession: "19",
    description: "Gems worth 30% more."
  },
  {
    id: "24",
    name: "Fighter",
    skill: "Combat",
    level: 5,
    parentProfession: null,
    description: "All attacks deal 10% more damage. +15 HP."
  },
  {
    id: "25",
    name: "Scout",
    skill: "Combat",
    level: 5,
    parentProfession: null,
    description: "Critical strike chance increased by 50%."
  },
  {
    id: "26",
    name: "Brute",
    skill: "Combat",
    level: 10,
    parentProfession: "24",
    description: "Deal 15% more damage."
  },
  {
    id: "27",
    name: "Defender",
    skill: "Combat",
    level: 10,
    parentProfession: "24",
    description: "+25 HP."
  },
  {
    id: "28",
    name: "Acrobat",
    skill: "Combat",
    level: 10,
    parentProfession: "25",
    description: "Cooldown on special moves cut in half."
  },
  {
    id: "29",
    name: "Desperado",
    skill: "Combat",
    level: 10,
    parentProfession: "25",
    description: "Critical strikes are deadlier."
  }
];

// src/modules/professions/index.ts
var allProfessions = professions_default;
var ProfessionQuery = class _ProfessionQuery extends QueryBase {
  constructor(data = allProfessions) {
    super(data);
  }
  /** Filter by skill name. */
  bySkill(skill) {
    return new _ProfessionQuery(this.data.filter((p) => p.skill === skill));
  }
  /** Filter by level (5 or 10). */
  byLevel(level) {
    return new _ProfessionQuery(this.data.filter((p) => p.level === level));
  }
  /** Filter to professions that branch from a given parent profession ID. */
  byParent(parentId) {
    return new _ProfessionQuery(this.data.filter((p) => p.parentProfession === parentId));
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.name.localeCompare(b.name));
    return new _ProfessionQuery(order === "desc" ? sorted.reverse() : sorted);
  }
};
function professions(source = allProfessions) {
  return new ProfessionQuery(source);
}

// src/modules/skills/index.ts
var skillData = skills_default;
var SKILL_TITLES = [
  { minScore: 30, title: "Farm King" },
  { minScore: 29, title: "Cropmaster" },
  { minScore: 27, title: "Agriculturist" },
  { minScore: 25, title: "Farmer" },
  { minScore: 23, title: "Rancher" },
  { minScore: 21, title: "Planter" },
  { minScore: 19, title: "Granger" },
  { minScore: 17, title: "Farmgirl / Farmboy" },
  { minScore: 15, title: "Sodbuster" },
  { minScore: 13, title: "Smallholder" },
  { minScore: 11, title: "Tiller" },
  { minScore: 9, title: "Farmhand" },
  { minScore: 7, title: "Cowpoke" },
  { minScore: 5, title: "Bumpkin" },
  { minScore: 3, title: "Greenhorn" },
  { minScore: 0, title: "Newcomer" }
];
var MASTERY_LEVELS = [
  { level: 1, xpRequired: 1e4, totalXp: 1e4 },
  { level: 2, xpRequired: 15e3, totalXp: 25e3 },
  { level: 3, xpRequired: 2e4, totalXp: 45e3 },
  { level: 4, xpRequired: 25e3, totalXp: 7e4 },
  { level: 5, xpRequired: 3e4, totalXp: 1e5 }
];
function getTitleScore(farming, fishing, foraging, mining, combat) {
  return Math.floor((farming + fishing + foraging + mining + combat) / 2);
}
function getTitle(farming, fishing, foraging, mining, combat) {
  const score = getTitleScore(farming, fishing, foraging, mining, combat);
  const match = SKILL_TITLES.find((t) => score >= t.minScore);
  return match?.title ?? "Newcomer";
}
function getMasteryLevel(masteryXp) {
  let level = 0;
  for (const ml of MASTERY_LEVELS) {
    if (masteryXp >= ml.totalXp) level = ml.level;
  }
  return level;
}
var SkillQuery = class extends QueryBase {
  constructor(data = skillData) {
    super(data);
  }
};
function skills(source = skillData) {
  return new SkillQuery(source);
}
function getProfessionOptions(skillName, level5Profession) {
  const skillProfs = professions().bySkill(skillName);
  const level5 = skillProfs.byLevel(5).get().find((p) => p.name.toLowerCase() === level5Profession.toLowerCase());
  if (!level5) return [];
  return skillProfs.byParent(level5.id).get();
}

// data/mixed-seeds.json
var mixed_seeds_default = [
  {
    id: "770",
    name: "Mixed Seeds",
    sellPrice: 0,
    description: "There's a little bit of everything here. Plant them and see what grows!",
    image: "images/mixed-seeds/mixed-seeds.png",
    buyPrices: [{ place: "Krobus", price: 30 }],
    produces: {
      spring: ["24", "190", "192"],
      summer: ["270", "260", "264", "262"],
      fall: ["274", "270", "272", "276"],
      winter: ["24", "190", "192", "270", "260", "264", "262", "274", "272", "276"],
      island: ["258", "254", "832", "252"]
    }
  },
  {
    id: "MixedFlowerSeeds",
    name: "Mixed Flower Seeds",
    sellPrice: 0,
    description: "An assortment of flower seeds. Plant them and see what grows!",
    image: "images/mixed-seeds/mixed-flower-seeds.png",
    buyPrices: [],
    produces: {
      spring: ["591", "597"],
      summer: ["421", "593", "376"],
      fall: ["421", "595"],
      winter: ["591", "597", "421", "593", "376", "595"],
      island: ["421", "593", "376"]
    }
  }
];

// src/modules/mixed-seeds/index.ts
var mixedSeedData = mixed_seeds_default;
var MixedSeedQuery = class _MixedSeedQuery extends QueryBase {
  constructor(data = mixedSeedData) {
    super(data);
  }
  /** Filter to mixed seeds that can produce crops in the given season. */
  byProduces(season) {
    return new _MixedSeedQuery(this.data.filter((s) => s.produces[season] !== void 0));
  }
  /** Filter to mixed seeds that have at least one purchase price listed. */
  withBuyPrices() {
    return new _MixedSeedQuery(this.data.filter((s) => s.buyPrices.length > 0));
  }
};
function mixedSeeds(source = mixedSeedData) {
  return new MixedSeedQuery(source);
}

// data/seasons.json
var seasons_default = [
  {
    id: "spring",
    name: "Spring",
    totalDays: 28,
    image: "images/seasons/Spring.png",
    festivals: [
      {
        name: "Egg Festival",
        startDay: 13,
        endDay: 13,
        image: "images/seasons/festivals/Egg Festival.png",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      },
      {
        name: "Desert Festival",
        startDay: 15,
        endDay: 17,
        image: "images/seasons/festivals/Desert Festival.png",
        calendarIcon: "images/seasons/calendar-icons/Special Event.png"
      },
      {
        name: "Flower Dance",
        startDay: 24,
        endDay: 24,
        image: "images/seasons/festivals/Flower Dance.jpg",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      }
    ]
  },
  {
    id: "summer",
    name: "Summer",
    totalDays: 28,
    image: "images/seasons/Summer.png",
    festivals: [
      {
        name: "Luau",
        startDay: 11,
        endDay: 11,
        image: "images/seasons/festivals/Luau.png",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      },
      {
        name: "Trout Derby",
        startDay: 20,
        endDay: 21,
        image: "images/seasons/festivals/Trout Derby.png",
        calendarIcon: "images/seasons/calendar-icons/Fishing Event.png"
      },
      {
        name: "Dance of the Moonlight Jellies",
        startDay: 28,
        endDay: 28,
        image: "images/seasons/festivals/Dance of the Moonlight Jellies.jpg",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      }
    ]
  },
  {
    id: "fall",
    name: "Fall",
    totalDays: 28,
    image: "images/seasons/Fall.png",
    festivals: [
      {
        name: "Stardew Valley Fair",
        startDay: 16,
        endDay: 16,
        image: "images/seasons/festivals/Stardew Valley Fair.png",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      },
      {
        name: "Spirit's Eve",
        startDay: 27,
        endDay: 27,
        image: "images/seasons/festivals/Spirit's Eve.png",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      }
    ]
  },
  {
    id: "winter",
    name: "Winter",
    totalDays: 28,
    image: "images/seasons/Winter.png",
    festivals: [
      {
        name: "Festival of Ice",
        startDay: 8,
        endDay: 8,
        image: "images/seasons/festivals/Festival of Ice.jpg",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      },
      {
        name: "SquidFest",
        startDay: 12,
        endDay: 13,
        image: "images/seasons/festivals/SquidFest.png",
        calendarIcon: "images/seasons/calendar-icons/Fishing Event.png"
      },
      {
        name: "Night Market",
        startDay: 15,
        endDay: 17,
        image: "images/seasons/festivals/Night Market.jpg",
        calendarIcon: "images/seasons/calendar-icons/Special Event.png"
      },
      {
        name: "Feast of the Winter Star",
        startDay: 25,
        endDay: 25,
        image: "images/seasons/festivals/Feast of the Winter Star.png",
        calendarIcon: "images/seasons/calendar-icons/Festival Flag.gif"
      }
    ]
  }
];

// src/modules/seasons/index.ts
var seasonData = seasons_default;
var SeasonQuery = class _SeasonQuery extends QueryBase {
  constructor(data = seasonData) {
    super(data);
  }
  /** Filter to seasons that have at least one festival. */
  withFestivals() {
    return new _SeasonQuery(this.data.filter((s) => s.festivals.length > 0));
  }
};
function findFestival(name) {
  const q = name.toLowerCase();
  const results = [];
  for (const season of seasonData) {
    for (const festival of season.festivals) {
      if (festival.name.toLowerCase().includes(q)) {
        results.push({ season, festival });
      }
    }
  }
  return results;
}
function seasons(source = seasonData) {
  return new SeasonQuery(source);
}

// data/universal-gifts.json
var universal_gifts_default = {
  loves: [
    "Golden Pumpkin",
    "Magic Rock Candy",
    "Pearl",
    "Prismatic Shard",
    "Rabbit's Foot",
    "Stardrop Tea"
  ],
  likes: [
    "All Artisan Goods (except Oil and Void Mayonnaise)",
    "All Cooking (except Bread, Fried Egg, Seafoam Pudding, Strange Bun)",
    "All Flowers (except Poppy)",
    "All Foraged Minerals (except Quartz)",
    "All Fruit Tree Fruits (except Banana & Mango)",
    "All Gems (except Prismatic Shard)",
    "All Vegetables (except Hops, Tea Leaves, Unmilled Rice, Wheat)",
    "Life Elixir",
    "Maple Syrup",
    "Pi\xF1a Colada",
    "Rainbow Shell",
    "Treasure Chest"
  ],
  neutrals: [
    "All Books (except Price Catalogue)",
    "Bread",
    "Coral",
    "Duck Feather",
    "Fried Egg",
    "Hops",
    "Mystic Syrup",
    "Nautilus Shell",
    "Roe",
    "Squid Ink",
    "Sweet Gem Berry",
    "Tea Leaves",
    "Truffle",
    "Wheat",
    "Wool"
  ],
  dislikes: [
    "All Artifacts",
    "All Bombs",
    "All Building Materials",
    "All Crafted Floors & Paths",
    "All Fences",
    "All Fertilizer",
    "All Fish (except Carp & Snail)",
    "All Geode Minerals",
    "All Geodes",
    "All Seeds",
    "All Sprinklers",
    "All Tackle",
    "All Trinkets",
    "Cave Carrot",
    "Driftwood",
    "Field Snack",
    "Fireworks",
    "Jack-O-Lantern",
    "Oak Resin",
    "Oil",
    "Pine Tar",
    "Price Catalogue",
    "Qi Fruit",
    "Solar Essence",
    "Spring Onion",
    "Tea Set",
    "Unmilled Rice",
    "Vinegar",
    "Void Egg",
    "Void Essence",
    "Wheat Flour"
  ],
  hates: [
    "All Bait",
    "All Fossils",
    "All Monster Loot",
    "All Trash",
    "Carp",
    "Copper Ore",
    "Dragon Tooth",
    "Green Algae",
    "Hay",
    "Iron Ore",
    "Monster Musk",
    "Poppy",
    "Radioactive Bar",
    "Radioactive Ore",
    "Red Mushroom",
    "Sap",
    "Sea Urchin",
    "Seafoam Pudding",
    "Seaweed",
    "Snail",
    "Strange Bun",
    "Sugar",
    "Void Mayonnaise",
    "White Algae"
  ]
};

// src/modules/universal-gifts/index.ts
function universalGifts() {
  return universal_gifts_default;
}

// data/quests.json
var quests_default = [
  {
    id: "9",
    name: "Introductions",
    text: "It would be a nice gesture to introduce yourself around town.",
    providedBy: "Introductory quest",
    requirements: "Greet 28 people",
    rewards: "100 Friendship points with every known NPC"
  },
  {
    id: "25",
    name: "How to Win Friends",
    text: "Giving gifts is a great way to build friendships.",
    providedBy: 'Complete "Introductions"',
    requirements: "Give anyone a gift",
    rewards: "100g"
  },
  {
    id: "132",
    name: "Getting Started",
    text: "If you want to become a farmer, you have to start with the basics.",
    providedBy: "Package in room at start",
    requirements: "Cultivate and harvest a Parsnip",
    rewards: "100g"
  },
  {
    id: "132",
    name: "Getting Started (Animals)",
    text: "Feed your chickens each day by letting them eat grass outside.",
    providedBy: "Package in room at start (Meadowlands Farm)",
    requirements: "Harvest an egg from chickens",
    rewards: "None"
  },
  {
    id: "13",
    name: "To The Beach",
    text: "Someone named Willy invited you to visit the beach south of town.",
    providedBy: "Mail, Spring 2",
    requirements: "Visit the beach before 5:00pm",
    rewards: "Bamboo Pole"
  },
  {
    id: "7",
    name: "Raising Animals",
    text: "Robin, the local carpenter, lives north of town.",
    providedBy: 'Complete "Getting Started"',
    requirements: "Build a Coop",
    rewards: "100g"
  },
  {
    id: "133",
    name: "Feeding Animals",
    text: "Robin, the local carpenter, lives north of town.",
    providedBy: 'Complete "Getting Started" (Meadowlands Farm)',
    requirements: "Build a Silo",
    rewards: "100g"
  },
  {
    id: "8",
    name: "Advancement",
    text: "As you gain experience you'll discover new crafting recipes.",
    providedBy: 'Complete "Getting Started"',
    requirements: "Reach Farming level 1 and craft a Scarecrow",
    rewards: "100g"
  },
  {
    id: "14",
    name: "Explore The Mine",
    text: "There's an old mine shaft in the mountains north of town.",
    providedBy: "Triggered by entering the mines",
    requirements: "Reach level 5 in the mines",
    rewards: 'Unlocks "Deeper In The Mine"'
  },
  {
    id: "17",
    name: "Deeper In The Mine",
    text: "It seems that the mine elevator is still functional.",
    providedBy: 'Complete "Explore The Mine"',
    requirements: "Reach level 40 in the mines",
    rewards: 'Unlocks "To The Bottom?"'
  },
  {
    id: "18",
    name: "To The Bottom?",
    text: "So far, there's no sign of the bottom.",
    providedBy: 'Complete "Deeper In The Mine"',
    requirements: "Reach the bottom of the mine (floor 120)",
    rewards: "Unlocks the Skull Key quest"
  },
  {
    id: "24",
    name: "Archaeology",
    text: "Gunther asked if you'd consider donating any new artifacts you find to the Museum.",
    providedBy: "Enter the Museum with a mineral or artifact",
    requirements: "Donate an item to the Museum",
    rewards: "250g"
  },
  {
    id: "26",
    name: "Rat Problem",
    text: "There's something odd going on in the Community Center.",
    providedBy: "Trigger initial Community Center cutscene",
    requirements: "Enter Community Center and examine the Golden Scroll",
    rewards: 'Letter from the Wizard triggering "Meet The Wizard"'
  },
  {
    id: "1",
    name: "Meet The Wizard",
    text: "You received a letter from the local wizard.",
    providedBy: "Morning after examining first golden scroll",
    requirements: "Enter the wizard's tower",
    rewards: "Potion allowing you to read Junimo language"
  },
  {
    id: "11",
    name: "Forging Ahead",
    text: "If you're going to keep mining you should build a furnace.",
    providedBy: "Morning after collecting Copper Ore",
    requirements: "Craft a Furnace",
    rewards: 'Unlocks "Smelting"'
  },
  {
    id: "12",
    name: "Smelting",
    text: "Now that you've built a furnace, you can smelt some metal.",
    providedBy: 'Complete "Forging Ahead"',
    requirements: "Use furnace to smelt a Copper Bar",
    rewards: "None"
  },
  {
    id: "16",
    name: "Initiation",
    text: "If you can slay 10 slimes, you'll have earned your place in the Adventurer's Guild.",
    providedBy: "Mailbox, morning after reaching floor 5 in the Mines",
    requirements: "Slay 10 Slimes",
    rewards: "Access to Adventurer's Guild"
  },
  {
    id: "100",
    name: "Robin's Lost Axe",
    text: "Robin lost her favorite axe.",
    providedBy: "Mail, Spring 11",
    requirements: "Find Robin's axe in Cindersap Forest",
    rewards: "250g, 1 Friendship heart with Robin"
  },
  {
    id: "101",
    name: "Jodi's Request",
    text: "Jodi needs a fresh cauliflower for a recipe she's making.",
    providedBy: "Mail, Spring 19",
    requirements: "Bring Jodi a Cauliflower",
    rewards: "350g, 1 Friendship heart with Jodi"
  },
  {
    id: "102",
    name: `Mayor's "Shorts"`,
    text: "Mayor Lewis has lost his purple shorts.",
    providedBy: "Mail, Summer 3",
    requirements: "Find and return Mayor Lewis' purple shorts",
    rewards: "750g, 1 Friendship heart with Mayor Lewis"
  },
  {
    id: "107",
    name: "Blackberry Basket",
    text: "It's blackberry season, but Linus can't find his basket!",
    providedBy: "Mail, Fall 8",
    requirements: "Find Linus' basket in the Backwoods",
    rewards: "1 Friendship heart with Linus"
  },
  {
    id: "21",
    name: "Marnie's Request",
    text: "Marnie came by the farm and asked if you'd bring her a cave carrot.",
    providedBy: "She visits farm after 3 Friendship hearts",
    requirements: "Bring a Cave Carrot into Marnie's shop",
    rewards: "100 Friendship points with Marnie"
  },
  {
    id: "103",
    name: "Pam Is Thirsty",
    text: "Pam is hankerin' for a pale ale.",
    providedBy: "Mail, Summer 14",
    requirements: "Bring Pam a Pale Ale",
    rewards: "350g, 1 Friendship heart with Pam"
  },
  {
    id: "111",
    name: "A Dark Reagent",
    text: "The wizard wants you to descend into the mines and fetch him a Void Essence.",
    providedBy: "Mail, Winter 12",
    requirements: "Bring the Wizard a Void Essence",
    rewards: "1,000g, 1 Friendship heart with the Wizard"
  },
  {
    id: "106",
    name: "Cow's Delight",
    text: "Marnie wants to give her cows a special treat.",
    providedBy: "Mail, Fall 3",
    requirements: "Bring Marnie one bunch of Amaranth",
    rewards: "500g, 1 Friendship heart with Marnie"
  },
  {
    id: "19",
    name: "The Skull Key",
    text: "You found a strange looking key in the bottom of the mines.",
    providedBy: "Reach the bottom floor of the Mines",
    requirements: "Discover the purpose of the Skull Key",
    rewards: "Access to Skull Cavern"
  },
  {
    id: "104",
    name: "Crop Research",
    text: "Demetrius needs a fresh melon for his research.",
    providedBy: "Mail, Summer 20",
    requirements: "Bring Demetrius a Melon",
    rewards: "550g, 1 Friendship heart with Demetrius"
  },
  {
    id: "105",
    name: "Knee Therapy",
    text: "George needs a hot pepper to soothe his aching knee.",
    providedBy: "Mail, Summer 25",
    requirements: "Bring George a Hot Pepper",
    rewards: "200g, 1 Friendship heart with George"
  },
  {
    id: "113",
    name: "Robin's Request",
    text: "Robin needs 10 pieces of Hardwood.",
    providedBy: "Mail, Winter 21",
    requirements: "Bring Robin 10 Hardwood",
    rewards: "500g, 1 Friendship heart with Robin"
  },
  {
    id: "20",
    name: "Qi's Challenge",
    text: "You've been challenged to reach level 25 in the Skull Cavern.",
    providedBy: "Mail, day after entering Skull Cavern",
    requirements: "Reach level 25 in the Skull Cavern",
    rewards: "10,000g (by mail next day)"
  },
  {
    id: "2",
    name: "The Mysterious Qi (Part 1)",
    text: "Within a secret lock-box, you found a note with peculiar instructions.",
    providedBy: "Put Battery Pack in lock-box by bus stop",
    requirements: "Leave a Rainbow Shell in the box at the train platform",
    rewards: "Continues to Part 2"
  },
  {
    id: "3",
    name: "The Mysterious Qi (Part 2)",
    text: "You found another note with a strange request.",
    providedBy: 'Complete "The Mysterious Qi (Part 1)"',
    requirements: "Place 10 Beets in Mayor Lewis' fridge",
    rewards: "Continues to Part 3"
  },
  {
    id: "4",
    name: "The Mysterious Qi (Part 3)",
    text: "Another cryptic note has appeared.",
    providedBy: 'Complete "The Mysterious Qi (Part 2)"',
    requirements: "Put Solar Essence in the sand dragon's mouth on the beach",
    rewards: "Continues to Part 4"
  },
  {
    id: "5",
    name: "The Mysterious Qi (Part 4)",
    text: "You found another note in the sand dragon's eye.",
    providedBy: 'Complete "The Mysterious Qi (Part 3)"',
    requirements: "Inspect the lumber pile beside the Farmhouse",
    rewards: "Club Card (Casino access)"
  },
  {
    id: "108",
    name: "Carving Pumpkins",
    text: "Caroline wants to carve a pumpkin with her daughter.",
    providedBy: "Mail, Fall 19",
    requirements: "Bring Caroline a Pumpkin",
    rewards: "500g, 1 Friendship heart with Caroline"
  },
  {
    id: "31",
    name: "A Winter Mystery",
    text: "You encountered a suspicious looking figure by the bus stop.",
    providedBy: "Enter Bus Stop during Winter between 6am and 4pm",
    requirements: "Interact with the bush to the right of the playground",
    rewards: "Magnifying Glass"
  },
  {
    id: "29",
    name: "Strange Note",
    text: "You found a note, barely legible, asking you to bring may-pal serrup to the woods.",
    providedBy: "After reading Secret Note #23",
    requirements: "Enter Secret Woods between 6am and 7pm with Maple Syrup",
    rewards: "Bear's Knowledge"
  },
  {
    id: "30",
    name: "Cryptic Note",
    text: "You found a note that reads, someone is waiting for you on level 100 of the Skull Cavern.",
    providedBy: "After reading Secret Note #10",
    requirements: "Reach level 100 in the Skull Cavern",
    rewards: "Iridium Snake Milk (+25 max health)"
  },
  {
    id: "115",
    name: "Fresh Fruit",
    text: "Emily wants a taste of spring. She's asking for a fresh apricot.",
    providedBy: "Mail, Spring 6, Year 2",
    requirements: "Bring Emily an Apricot",
    rewards: "600g, 1 Friendship heart with Emily"
  },
  {
    id: "118",
    name: "Aquatic Research",
    text: "Demetrius is studying the toxin levels of the local pufferfish.",
    providedBy: "Mail, Summer 6, Year 2",
    requirements: "Bring Demetrius a Pufferfish",
    rewards: "1,000g, 1 Friendship heart with Demetrius"
  },
  {
    id: "119",
    name: "A Soldier's Star",
    text: "Kent wants to give his wife a starfruit for their anniversary.",
    providedBy: "Mail, Summer 15, Year 2",
    requirements: "Bring Kent a Starfruit",
    rewards: "500g, 1 Friendship heart with Kent"
  },
  {
    id: "120",
    name: "Mayor's Need",
    text: "Mayor Lewis wants truffle oil.",
    providedBy: "Mail, Summer 21, Year 2",
    requirements: "Bring Lewis a bottle of Truffle Oil",
    rewards: "750g, 1 Friendship heart with Mayor Lewis"
  },
  {
    id: "121",
    name: "Wanted: Lobster",
    text: "Gus put out a notice requesting a fresh lobster.",
    providedBy: "Mail, Fall 6, Year 2",
    requirements: "Bring Gus a Lobster",
    rewards: "500g, 1 Friendship heart with Gus"
  },
  {
    id: "122",
    name: "Pam Needs Juice",
    text: "Pam's TV remote is dead.",
    providedBy: "Mail, Fall 19, Year 2",
    requirements: "Bring Pam a Battery Pack",
    rewards: "400g, 1 Friendship heart with Pam"
  },
  {
    id: "22",
    name: "Fish Casserole",
    text: "Jodi swung by the farm to ask you to dinner at 7:00 PM.",
    providedBy: "Jodi at 4 Hearts; exit Farmhouse Monday 6am\u20139:30am",
    requirements: "Enter Jodi's house with a Largemouth Bass at 7pm",
    rewards: "Event scene"
  },
  {
    id: "109",
    name: "Catch a Squid",
    text: "Willy is challenging you to catch a squid.",
    providedBy: "Mail, Winter 2",
    requirements: "Bring Willy a Squid",
    rewards: "800g, 1 Friendship heart with Willy"
  },
  {
    id: "114",
    name: "Fish Stew",
    text: "Gus wants to make fish stew, but he needs an albacore.",
    providedBy: "Mail, Winter 26",
    requirements: "Bring Gus an Albacore",
    rewards: "400g, 1 Friendship heart with Gus"
  },
  {
    id: "117",
    name: "Pierre's Notice",
    text: "Pierre will pay top coin to whoever brings him a plate of sashimi.",
    providedBy: "Mail, Spring 21, Year 2",
    requirements: "Bring Pierre some Sashimi",
    rewards: "1,000g, 1 Friendship heart with Pierre"
  },
  {
    id: "110",
    name: "Clint's Attempt",
    text: "Clint wants you to give Emily an amethyst.",
    providedBy: "Mail, Winter 6",
    requirements: "Bring Emily an Amethyst",
    rewards: "1 Friendship heart with Emily"
  },
  {
    id: "112",
    name: "A Favor For Clint",
    text: "Clint got a new hammer and he wants to test it out.",
    providedBy: "Mail, Winter 17",
    requirements: "Bring Clint an Iron Bar",
    rewards: "500g, 1 Friendship heart with Clint"
  },
  {
    id: "123",
    name: "Staff of Power",
    text: "The Wizard is creating a staff of phenomenal power.",
    providedBy: "Mail, Winter 5, Year 2",
    requirements: "Bring the Wizard an Iridium Bar",
    rewards: "5,000g, 1 Friendship heart with the Wizard"
  },
  {
    id: "116",
    name: "Granny's Gift",
    text: "Evelyn wants to surprise her husband with a gift.",
    providedBy: "Mail, Spring 15, Year 2",
    requirements: "Bring Evelyn a Leek",
    rewards: "500g, 1 Friendship heart with Evelyn"
  },
  {
    id: "125",
    name: "Exotic Spirits",
    text: "Gus wants to make a Coco-no-no, but he's missing the main ingredient.",
    providedBy: "Mail, Winter 19, Year 2",
    requirements: "Bring Gus a Coconut",
    rewards: "600g, 1 Friendship heart with Gus"
  },
  {
    id: "124",
    name: "Catch a Lingcod",
    text: "Willy is challenging you to catch a Lingcod.",
    providedBy: "Mail, Winter 13, Year 2",
    requirements: "Bring Willy a Lingcod",
    rewards: "550g, 1 Friendship heart with Willy"
  },
  {
    id: "28",
    name: "Dark Talisman",
    text: "The Wizard asked me to retrieve the magic ink from his ex-wife's house.",
    providedBy: "Railroad cutscene after completing Community Center or Joja Warehouse",
    requirements: "Speak to Krobus and retrieve dark talisman from Mutant Bug Lair",
    rewards: "Access to Witch's Swamp"
  },
  {
    id: "27",
    name: "Goblin Problem",
    text: "There's a goblin blocking the path to the Witch's Hut.",
    providedBy: "Through cave by Railroad after Dark Talisman quest",
    requirements: "Give Henchman Void Mayonnaise and retrieve Magic Ink from Witch's Hut",
    rewards: "Wizard buildings unlocked; dark shrines accessible"
  },
  {
    id: "130",
    name: "The Pirate's Wife",
    text: "An old lady living on Ginger Island is asking you to find a keepsake belonging to her late husband.",
    providedBy: "Speak to Birdie on Ginger Island",
    requirements: "Distribute 7 keepsake items to various villagers",
    rewards: "Fairy Dust recipe, 5 Golden Walnuts"
  },
  {
    id: "134",
    name: "The Giant Stump",
    text: "The big tree to the south of my farm blew down.",
    providedBy: "Giant Stump in Cindersap Forest after wind storm cutscene",
    requirements: "Fix giant stump with 100 Hardwood",
    rewards: "Access to Raccoon quests"
  }
];

// src/modules/quests/index.ts
var questsData = quests_default;
var QuestQuery = class _QuestQuery extends QueryBase {
  constructor(data = questsData) {
    super(data);
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _QuestQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function quests(source = questsData) {
  return new QuestQuery(source);
}

// data/villagers.json
var villagers_default = [
  {
    id: "abigail",
    name: "Abigail",
    birthday: { day: 13, season: "fall" },
    address: "Pierre's General Store",
    occupation: "Adventurer",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Abigail.png",
    spouseImage: "images/villagers/spouse-portraits/Abigail.png",
    loves: [
      "Amethyst",
      "Banana Pudding",
      "Blackberry Cobbler",
      "Chocolate Cake",
      "Monster Compendium",
      "Pufferfish",
      "Pumpkin",
      "Spicy Eel"
    ],
    likes: ["Ancient Sword", "Basilisk Paw", "Bone Flute", "Combat Quarterly", "Quartz"],
    neutrals: [
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: [
      "All Eggs",
      "All Fruits (except Fruit Tree Fruit)",
      "All Vegetables (except Hops, Pumpkin, Tea Leaves, Wheat)",
      "Sugar",
      "Wild Horseradish"
    ],
    hates: ["Clay", "Holly"]
  },
  {
    id: "alex",
    name: "Alex",
    birthday: { day: 13, season: "summer" },
    address: "1 River Road",
    occupation: "Aspiring gridball player",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Alex.png",
    spouseImage: "images/villagers/spouse-portraits/Alex.png",
    loves: ["Complete Breakfast", "Jack Be Nimble Jack Be Thick", "Salmon Dinner"],
    likes: ["Dinosaur Egg", "Field Snack", "Parrot Egg"],
    neutrals: [
      "All Fruits (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Frog Egg",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: [
      "All Books (except Jack Be Nimble, Jack Be Thick)",
      "Salmonberry",
      "Void Egg",
      "Wild Horseradish"
    ],
    hates: ["Holly", "Quartz"]
  },
  {
    id: "caroline",
    name: "Caroline",
    birthday: { day: 7, season: "winter" },
    address: "Pierre's General Store",
    occupation: "Homemaker",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Caroline.png",
    loves: ["Fish Taco", "Green Tea", "Summer Spangle", "Tropical Curry"],
    likes: ["Daffodil", "Tea Leaves", "Wild Horseradish"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk"
    ],
    dislikes: [
      "Amaranth",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Duck Mayonnaise",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Mayonnaise",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    hates: ["Quartz", "Salmonberry"]
  },
  {
    id: "clint",
    name: "Clint",
    birthday: { day: 26, season: "winter" },
    address: "The Blacksmith",
    occupation: "Blacksmith",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Clint.png",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Artichoke Dip",
      "Emerald",
      "Fiddlehead Risotto",
      "Gold Bar",
      "Iridium Bar",
      "Jade",
      "Omni Geode",
      "Ruby",
      "Topaz"
    ],
    likes: ["Copper Bar", "Iron Bar", "Mining Monthly"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Chanterelle",
      "Coal",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Gold Ore",
      "Hazelnut",
      "Iridium Ore",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Refined Quartz",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["All Flowers (except Poppy)", "Quartz", "Salmonberry", "Wild Horseradish"],
    hates: ["Holly"]
  },
  {
    id: "demetrius",
    name: "Demetrius",
    birthday: { day: 19, season: "summer" },
    address: "24 Mountain Road",
    occupation: "Scientist",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Demetrius.png",
    loves: ["Bean Hotpot", "Ice Cream", "Rice Pudding", "Strawberry"],
    likes: ["Dinosaur Egg", "Purple Mushroom"],
    neutrals: [
      "All Fish (except Carp & Snail)",
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    dislikes: ["Quartz"],
    hates: ["Holly"]
  },
  {
    id: "dwarf",
    name: "Dwarf",
    birthday: { day: 22, season: "summer" },
    address: "The Mines",
    occupation: "Shopkeeper",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Dwarf.png",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Emerald",
      "Jade",
      "Lava Eel",
      "Lemon Stone",
      "Omni Geode",
      "Ruby",
      "Topaz"
    ],
    likes: ["Cave Carrot", "Quartz"],
    neutrals: [
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Solar Essence",
      "Void Essence"
    ],
    dislikes: [
      "All Eggs",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: []
  },
  {
    id: "elliott",
    name: "Elliott",
    birthday: { day: 5, season: "fall" },
    address: "Elliott's Cabin",
    occupation: "Writer",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Elliott.png",
    spouseImage: "images/villagers/spouse-portraits/Elliott.png",
    loves: ["Crab Cakes", "Duck Feather", "Lobster", "Pomegranate", "Squid Ink", "Tom Kha Soup"],
    likes: ["Octopus", "Squid"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fish (except Carp, Lobster, Octopus, Sea Cucumber, Snail, Squid)",
      "Rainbow Shell",
      "Sea Urchin"
    ],
    dislikes: [
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Pizza",
      "Purple Mushroom",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: ["Amaranth", "Quartz", "Salmonberry", "Sea Cucumber", "Super Cucumber"]
  },
  {
    id: "emily",
    name: "Emily",
    birthday: { day: 27, season: "spring" },
    address: "2 Willow Lane",
    occupation: "Tailor",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Emily.png",
    spouseImage: "images/villagers/spouse-portraits/Emily.png",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Cloth",
      "Emerald",
      "Jade",
      "Parrot Egg",
      "Ruby",
      "Survival Burger",
      "Topaz",
      "Wool"
    ],
    likes: ["Daffodil", "Quartz"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    dislikes: ["Fried Eel", "Ice Cream", "Rice Pudding", "Salmonberry", "Spicy Eel"],
    hates: ["Fish Taco", "Holly", "Maki Roll", "Salmon Dinner", "Sashimi"]
  },
  {
    id: "evelyn",
    name: "Evelyn",
    birthday: { day: 20, season: "winter" },
    address: "1 River Road",
    occupation: "Gardener",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Evelyn.png",
    loves: ["Beet", "Chocolate Cake", "Diamond", "Fairy Rose", "Raisins", "Stuffing", "Tulip"],
    likes: [
      "Broken Glasses",
      "Clam",
      "Cockle",
      "Coral",
      "Daffodil",
      "Mussel",
      "Nautilus Shell",
      "Oyster",
      "Sea Urchin"
    ],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruits (except Fruit Tree Fruit, Salmonberry & Spice Berry)",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["Quartz", "Wild Horseradish"],
    hates: [
      "All Fish (except Clam, Cockle, Mussel & Oyster)",
      "Clay",
      "Fried Eel",
      "Garlic",
      "Holly",
      "Maki Roll",
      "Salmonberry",
      "Sashimi",
      "Spice Berry",
      "Spicy Eel",
      "Trout Soup"
    ]
  },
  {
    id: "george",
    name: "George",
    birthday: { day: 24, season: "fall" },
    address: "1 River Road",
    occupation: "Retired",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/George.png",
    loves: ["Fried Mushroom", "Leek"],
    likes: ["Daffodil"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Ginger",
      "Hazelnut",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["All Flowers (except Poppy)", "Salmonberry", "Wild Horseradish"],
    hates: ["Clay", "Dandelion", "Holly", "Quartz"]
  },
  {
    id: "gus",
    name: "Gus",
    birthday: { day: 8, season: "summer" },
    address: "The Stardrop Saloon",
    occupation: "Saloon owner and chef",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Gus.png",
    loves: ["Diamond", "Escargot", "Fish Taco", "Orange", "Tropical Curry"],
    likes: ["Daffodil", "Truffle"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["Salmonberry", "Wild Horseradish"],
    hates: ["Coleslaw", "Holly", "Quartz"]
  },
  {
    id: "haley",
    name: "Haley",
    birthday: { day: 14, season: "spring" },
    address: "2 Willow Lane",
    occupation: "Photographer",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Haley.png",
    spouseImage: "images/villagers/spouse-portraits/Haley.png",
    loves: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"],
    likes: ["Daffodil"],
    neutrals: [],
    dislikes: [
      "All Eggs",
      "All Fruit (except Coconut)",
      "All Milk",
      "All Vegetables (except Hops, Tea Leaves & Wheat)",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Mystic Syrup",
      "Purple Mushroom",
      "Quartz",
      "Snow Yam",
      "Winter Root"
    ],
    hates: ["All Fish", "Clay", "Prismatic Shard", "Wild Horseradish"]
  },
  {
    id: "harvey",
    name: "Harvey",
    birthday: { day: 14, season: "winter" },
    address: "Medical Clinic",
    occupation: "Doctor",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Harvey.png",
    spouseImage: "images/villagers/spouse-portraits/Harvey.png",
    loves: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"],
    likes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Duck Egg",
      "Duck Feather",
      "Goat Milk",
      "Hazelnut",
      "Holly",
      "Large Goat Milk",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Winter Root"
    ],
    neutrals: ["Large Milk", "Milk"],
    dislikes: [
      "Blueberry Tart",
      "Bread",
      "Cheese",
      "Chocolate Cake",
      "Cookie",
      "Cranberry Sauce",
      "Fried Mushroom",
      "Glazed Yams",
      "Goat Cheese",
      "Hashbrowns",
      "Ice Cream",
      "Pancakes",
      "Pink Cake",
      "Pizza",
      "Rhubarb Pie",
      "Rice Pudding"
    ],
    hates: ["Coral", "Nautilus Shell", "Rainbow Shell", "Salmonberry", "Spice Berry"]
  },
  {
    id: "jas",
    name: "Jas",
    birthday: { day: 4, season: "summer" },
    address: "Marnie's Ranch",
    occupation: "Child",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Jas.png",
    loves: [
      "Ancient Doll",
      "Fairy Box",
      "Fairy Rose",
      "Pink Cake",
      "Plum Pudding",
      "Strange Doll (green)",
      "Strange Doll (yellow)"
    ],
    likes: ["Coconut", "Daffodil"],
    neutrals: [],
    dislikes: [
      "All Eggs",
      "All Fruits (except Coconut & Fruit Tree Fruit)",
      "All Vegetables (except Hops & Wheat)",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Snow Yam",
      "Winter Root"
    ],
    hates: [
      "All Artisan Goods (except Honey, Jelly & Oil)",
      "Beer",
      "Clay",
      "Coffee",
      "Mead",
      "Pale Ale",
      "Pi\xF1a Colada",
      "Triple Shot Espresso",
      "Wild Horseradish",
      "Wine"
    ]
  },
  {
    id: "jodi",
    name: "Jodi",
    birthday: { day: 11, season: "fall" },
    address: "1 Willow Lane",
    occupation: "Homemaker",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Jodi.png",
    loves: [
      "Chocolate Cake",
      "Crispy Bass",
      "Diamond",
      "Eggplant Parmesan",
      "Fried Eel",
      "Pancakes",
      "Rhubarb Pie",
      "Vegetable Medley"
    ],
    likes: [],
    neutrals: [],
    dislikes: [
      "Chanterelle",
      "Common Mushroom",
      "Garlic",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: ["Daffodil", "Dandelion", "Spice Berry"]
  },
  {
    id: "kent",
    name: "Kent",
    birthday: { day: 4, season: "spring" },
    address: "1 Willow Lane",
    occupation: "Soldier",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Kent.png",
    loves: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
    likes: ["Daffodil", "Dwarvish Safety Manual"],
    neutrals: [
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Wild Horseradish",
      "Winter Root"
    ],
    dislikes: ["Pi\xF1a Colada", "Quartz", "Snow Yam"],
    hates: ["Algae Soup", "All Milk", "Holly", "Sashimi", "Tortilla"]
  },
  {
    id: "krobus",
    name: "Krobus",
    birthday: { day: 1, season: "winter" },
    address: "The Sewers",
    occupation: "Shadow merchant",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Krobus.png",
    spouseImage: "images/villagers/spouse-portraits/Krobus.png",
    loves: [
      "Diamond",
      "Iridium Bar",
      "Monster Compendium",
      "Monster Musk",
      "Pumpkin",
      "Void Egg",
      "Void Mayonnaise",
      "Wild Horseradish"
    ],
    likes: ["Gold Bar", "Quartz", "Seafoam Pudding", "Strange Bun"],
    neutrals: [],
    dislikes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Life Elixir",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Winter Root"
    ],
    hates: []
  },
  {
    id: "leah",
    name: "Leah",
    birthday: { day: 23, season: "winter" },
    address: "Leah's Cottage",
    occupation: "Artist",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Leah.png",
    spouseImage: "images/villagers/spouse-portraits/Leah.png",
    loves: [
      "Goat Cheese",
      "Poppyseed Muffin",
      "Salad",
      "Stir Fry",
      "Truffle",
      "Vegetable Medley",
      "Wine"
    ],
    likes: ["Chanterelle", "Daffodil", "Dandelion", "Driftwood"],
    neutrals: [],
    dislikes: [
      "All Foraged Minerals (except Earth Crystal)",
      "All Gems (except Diamond & Prismatic Shard)",
      "Carp Surprise",
      "Cookie",
      "Ice Cream",
      "Pink Cake",
      "Rice Pudding",
      "Survival Burger",
      "Tortilla"
    ],
    hates: ["Bread", "Hashbrowns", "Pancakes", "Pizza", "Void Egg"]
  },
  {
    id: "leo",
    name: "Leo",
    birthday: { day: 26, season: "summer" },
    address: "Ginger Island",
    occupation: "Islander",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Leo.png",
    loves: ["Duck Feather", "Mango", "Ostrich Egg", "Parrot Egg", "Poi"],
    likes: [
      "Dragon Tooth",
      "Mango Sticky Rice",
      "Nautilus Shell",
      "Quartz",
      "Sea Urchin",
      "Spice Berry"
    ],
    neutrals: [
      "All Eggs (except Ostrich Egg & Void Egg)",
      "All Fish (except Carp & Snail)",
      "All Fruit (except Fruit Tree Fruit, Mango, Salmonberry & Spice Berry)",
      "Coffee"
    ],
    dislikes: [
      "All Cooked Dishes (except Bread, Fried Egg, Mango Sticky Rice, Poi & Triple Shot Espresso)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Life Elixir",
      "Magma Cap",
      "Pickles",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: [
      "Beer",
      "Holly",
      "Hops",
      "Mead",
      "Morel",
      "Oil",
      "Pale Ale",
      "Pi\xF1a Colada",
      "Triple Shot Espresso",
      "Unmilled Rice",
      "Wine"
    ]
  },
  {
    id: "lewis",
    name: "Lewis",
    birthday: { day: 7, season: "spring" },
    address: "Mayor's Manor",
    occupation: "Mayor",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Lewis.png",
    loves: ["Autumn's Bounty", "Glazed Yams", "Green Tea", "Hot Pepper", "Vegetable Medley"],
    likes: ["Blueberry", "Cactus Fruit", "Coconut"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruit (except Blueberry, Cactus Fruit, Coconut, Fruit Tree Fruit, Hot Pepper & Salmonberry)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["All Milk", "Salmonberry", "Wild Horseradish"],
    hates: ["Holly", "Quartz"]
  },
  {
    id: "linus",
    name: "Linus",
    birthday: { day: 3, season: "winter" },
    address: "Mountain Tent",
    occupation: "Hermit",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Linus.png",
    loves: [
      "Blueberry Tart",
      "Cactus Fruit",
      "Coconut",
      "Dish O' The Sea",
      "The Alleyway Buffet",
      "Yam"
    ],
    likes: [],
    neutrals: ["All Fish (except Snail)", "Wild Bait"],
    dislikes: ["Treasure Chest"],
    hates: []
  },
  {
    id: "marnie",
    name: "Marnie",
    birthday: { day: 18, season: "fall" },
    address: "Marnie's Ranch",
    occupation: "Rancher",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Marnie.png",
    loves: ["Diamond", "Farmer's Lunch", "Pink Cake", "Pumpkin Pie"],
    likes: ["Quartz", "Stardew Valley Almanac"],
    neutrals: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["Salmonberry", "Seaweed", "Wild Horseradish"],
    hates: ["Clay", "Holly"]
  },
  {
    id: "maru",
    name: "Maru",
    birthday: { day: 10, season: "summer" },
    address: "24 Mountain Road",
    occupation: "Nurse and inventor",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Maru.png",
    spouseImage: "images/villagers/spouse-portraits/Maru.png",
    loves: [
      "Battery Pack",
      "Cauliflower",
      "Cheese Cauliflower",
      "Diamond",
      "Dwarf Gadget",
      "Gold Bar",
      "Iridium Bar",
      "Miner's Treat",
      "Pepper Poppers",
      "Radioactive Bar",
      "Rhubarb Pie",
      "Strawberry"
    ],
    likes: [
      "Chanterelle",
      "Copper Bar",
      "Iron Bar",
      "Magma Cap",
      "Morel",
      "Oak Resin",
      "Pine Tar",
      "Purple Mushroom",
      "Quartz",
      "Radioactive Ore"
    ],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruits (except Blackberry, Crystal Fruit, Fruit Tree Fruit, Salmonberry & Strawberry)",
      "All Milk",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Wild Horseradish",
      "Winter Root"
    ],
    dislikes: ["Blackberry", "Common Mushroom", "Crystal Fruit", "Maple Syrup", "Salmonberry"],
    hates: ["Holly", "Honey", "Pickles", "Snow Yam", "Truffle"]
  },
  {
    id: "pam",
    name: "Pam",
    birthday: { day: 18, season: "spring" },
    address: "Trailer",
    occupation: "Bus driver",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Pam.png",
    loves: [
      "Beer",
      "Cactus Fruit",
      "Glazed Yams",
      "Mead",
      "Pale Ale",
      "Parsnip",
      "Parsnip Soup",
      "Pi\xF1a Colada"
    ],
    likes: ["Daffodil"],
    neutrals: [
      "All Fish (except Carp, Octopus, Snail & Squid)",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Joja Cola",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["All Eggs", "Quartz", "Wild Horseradish"],
    hates: ["Holly", "Octopus", "Squid"]
  },
  {
    id: "penny",
    name: "Penny",
    birthday: { day: 2, season: "fall" },
    address: "Trailer",
    occupation: "Tutor",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Penny.png",
    spouseImage: "images/villagers/spouse-portraits/Penny.png",
    loves: [
      "Diamond",
      "Emerald",
      "Melon",
      "Poppy",
      "Poppyseed Muffin",
      "Red Plate",
      "Roots Platter",
      "Sandfish",
      "Tom Kha Soup"
    ],
    likes: ["Dandelion", "Leek"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fruits (except Fruit Tree Fruit, Grape, Melon & Salmonberry)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Ginger",
      "Hazelnut",
      "Magma Cap",
      "Morel",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    dislikes: [
      "Algae Soup",
      "Duck Feather",
      "Pale Broth",
      "Purple Mushroom",
      "Quartz",
      "Red Mushroom",
      "Salmonberry",
      "Wool"
    ],
    hates: [
      "Beer",
      "Grape",
      "Holly",
      "Hops",
      "Mead",
      "Pale Ale",
      "Pi\xF1a Colada",
      "Rabbit's Foot",
      "Wine"
    ]
  },
  {
    id: "pierre",
    name: "Pierre",
    birthday: { day: 26, season: "spring" },
    address: "Pierre's General Store",
    occupation: "General store owner",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Pierre.png",
    loves: ["Fried Calamari", "Price Catalogue", "Stardrop Tea"],
    likes: ["Daffodil", "Dandelion"],
    neutrals: ["All Fruits (except Fruit Tree Fruit & Salmonberry)"],
    dislikes: [
      "All Foraged Minerals",
      "All Gems (except Diamond & Prismatic Shard)",
      "Chanterelle",
      "Common Mushroom",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: ["All Fish", "Corn", "Garlic", "Parsnip Soup", "Tortilla"]
  },
  {
    id: "robin",
    name: "Robin",
    birthday: { day: 21, season: "fall" },
    address: "24 Mountain Road",
    occupation: "Carpenter",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Robin.png",
    loves: ["Goat Cheese", "Peach", "Spaghetti", "Woody's Secret"],
    likes: ["Hardwood", "Quartz", "Woodcutter's Weekly"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Winter Root"
    ],
    dislikes: ["Wild Horseradish"],
    hates: ["Holly"]
  },
  {
    id: "sam",
    name: "Sam",
    birthday: { day: 17, season: "summer" },
    address: "1 Willow Lane",
    occupation: "Musician",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Sam.png",
    spouseImage: "images/villagers/spouse-portraits/Sam.png",
    loves: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"],
    likes: ["Joja Cola"],
    neutrals: ["All Fruits (except Cactus Fruit, Fruit Tree Fruit & Salmonberry)", "All Milk"],
    dislikes: [
      "All Vegetables (except Hops, Tea Leaves & Wheat)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Salmonberry",
      "Seaweed",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: [
      "Bone Fragment",
      "Cinder Shard",
      "Coal",
      "Copper Bar",
      "Duck Mayonnaise",
      "Gold Bar",
      "Gold Ore",
      "Iridium Bar",
      "Iridium Ore",
      "Iron Bar",
      "Mayonnaise",
      "Pickles",
      "Refined Quartz"
    ]
  },
  {
    id: "sandy",
    name: "Sandy",
    birthday: { day: 15, season: "fall" },
    address: "The Oasis",
    occupation: "Desert shopkeeper",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Sandy.png",
    loves: ["Crocus", "Daffodil", "Mango Sticky Rice", "Sweet Pea"],
    likes: ["Quartz", "Wool"],
    neutrals: [],
    dislikes: [],
    hates: ["Holly"]
  },
  {
    id: "sebastian",
    name: "Sebastian",
    birthday: { day: 10, season: "winter" },
    address: "24 Mountain Road",
    occupation: "Freelance programmer",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Sebastian.png",
    spouseImage: "images/villagers/spouse-portraits/Sebastian.png",
    loves: ["Frog Egg", "Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi", "Void Egg"],
    likes: ["Combat Quarterly", "Flounder", "Monster Compendium", "Quartz"],
    neutrals: [
      "All Fish (except Carp, Flounder & Snail)",
      "All Fruit (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Jack Be Nimble, Jack Be Thick"
    ],
    dislikes: [
      "All Flowers (except Poppy)",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: [
      "All Artisan Goods (except Coffee, Green Tea & Oil)",
      "All Eggs (except Void Egg)",
      "Clay",
      "Complete Breakfast",
      "Farmer's Lunch",
      "Omelet",
      "Pi\xF1a Colada"
    ]
  },
  {
    id: "shane",
    name: "Shane",
    birthday: { day: 20, season: "spring" },
    address: "Marnie's Ranch",
    occupation: "JojaMart employee",
    marriageable: true,
    hearts: { max: 8, bouquetIncrease: 2, spouseIncrease: 4 },
    image: "images/villagers/Shane.png",
    spouseImage: "images/villagers/spouse-portraits/Shane.png",
    loves: ["Beer", "Hot Pepper", "Pepper Poppers", "Pizza"],
    likes: [],
    neutrals: ["All Milk", "Strange Bun"],
    dislikes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Seaweed",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: ["Pickles", "Quartz"]
  },
  {
    id: "vincent",
    name: "Vincent",
    birthday: { day: 10, season: "spring" },
    address: "1 Willow Lane",
    occupation: "Child",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Vincent.png",
    loves: ["Cranberry Candy", "Frog Egg", "Ginger Ale", "Grape", "Pink Cake", "Snail"],
    likes: ["Coconut", "Daffodil"],
    neutrals: [],
    dislikes: [
      "All Eggs",
      "All Fruit (except Coconut, Grape & Fruit Tree Fruit)",
      "All Vegetables (except Hops, Tea Leaves & Wheat)",
      "Chanterelle",
      "Common Mushroom",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Snow Yam",
      "Winter Root"
    ],
    hates: [
      "All Artisan Goods (except Honey, Jelly & Oil)",
      "Beer",
      "Clay",
      "Coffee",
      "Mead",
      "Pale Ale",
      "Pi\xF1a Colada",
      "Triple Shot Espresso",
      "Wild Horseradish",
      "Wine"
    ]
  },
  {
    id: "willy",
    name: "Willy",
    birthday: { day: 24, season: "summer" },
    address: "The Beach",
    occupation: "Fisher and shopkeeper",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Willy.png",
    loves: [
      "Catfish",
      "Diamond",
      "Gold Bar",
      "Iridium Bar",
      "Jewels of the Sea",
      "Mead",
      "Octopus",
      "Pumpkin",
      "Sea Cucumber",
      "Sturgeon",
      "The Art O' Crabbing"
    ],
    likes: ["Coffee", "Quartz"],
    neutrals: [
      "All Eggs (except Void Egg)",
      "All Fish (except Carp, Catfish, Lingcod, Octopus, Sea Cucumber, Snail, Sturgeon & Tiger Trout)",
      "All Fruits (except Fruit Tree Fruit & Salmonberry)",
      "All Milk",
      "Dish O' The Sea",
      "Maki Roll",
      "Mutant Carp",
      "Sashimi"
    ],
    dislikes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Life Elixir",
      "Magma Cap",
      "Morel",
      "Most Cooked Dishes (except Baked Fish, Bread, Carp Surprise, Chowder, Crab Cakes, Crispy Bass, Dish O' The Sea, Escargot, Fish Stew, Fish Taco, Fried Calamari, Fried Eel, Fried Egg, Lobster Bisque, Maki Roll, Salmon Dinner, Sashimi, Strange Bun & Trout Soup)",
      "Purple Mushroom",
      "Salmonberry",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: []
  },
  {
    id: "wizard",
    name: "Wizard",
    birthday: { day: 17, season: "winter" },
    address: "Wizard's Tower",
    occupation: "Wizard",
    marriageable: false,
    hearts: { max: 10, bouquetIncrease: 0, spouseIncrease: 0 },
    image: "images/villagers/Wizard.png",
    loves: [
      "Book of Mysteries",
      "Purple Mushroom",
      "Solar Essence",
      "Super Cucumber",
      "Void Essence"
    ],
    likes: ["Iridium Bar", "Quartz"],
    neutrals: ["All Fruits (except Fruit Tree Fruit & Salmonberry)"],
    dislikes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Ginger",
      "Hazelnut",
      "Holly",
      "Leek",
      "Magma Cap",
      "Morel",
      "Salmonberry",
      "Slime",
      "Snow Yam",
      "Wild Horseradish",
      "Winter Root"
    ],
    hates: []
  }
];

// src/modules/villagers/index.ts
var villagersData = villagers_default;
var VillagerQuery = class _VillagerQuery extends QueryBase {
  constructor(data = villagersData) {
    super(data);
  }
  /** Filter to villagers who can be married or become roommates. */
  marriageable() {
    return new _VillagerQuery(this.data.filter((v) => v.marriageable));
  }
  /** Filter to villagers with a birthday in the given season. Excludes `'ginger island'`. */
  byBirthdaySeason(season) {
    return new _VillagerQuery(this.data.filter((v) => v.birthday.season === season));
  }
  /** Sort alphabetically by name. Default: `'asc'`. */
  sortByName(order = "asc") {
    return new _VillagerQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
  /** Sort by birthday in calendar order (spring → winter, day 1 → 28). */
  sortByBirthday() {
    const seasonOrder = { spring: 0, summer: 1, fall: 2, winter: 3 };
    return new _VillagerQuery(
      [...this.data].sort((a, b) => {
        const seasonDiff = seasonOrder[a.birthday.season] - seasonOrder[b.birthday.season];
        return seasonDiff !== 0 ? seasonDiff : a.birthday.day - b.birthday.day;
      })
    );
  }
};
function villagers(source = villagersData) {
  return new VillagerQuery(source);
}

// data/weather.json
var weather_default = [
  {
    id: "sunny",
    name: "Sunny",
    description: "It's going to be clear and sunny all day.",
    seasons: ["spring", "summer", "fall", "winter"],
    image: "images/weather/Sun.png",
    watersCrops: false,
    special: false
  },
  {
    id: "rain",
    name: "Rain",
    description: "It's going to rain all day tomorrow.",
    seasons: ["spring", "summer", "fall"],
    image: "images/weather/Rain.png",
    watersCrops: true,
    special: false
  },
  {
    id: "storm",
    name: "Storm",
    description: "Looks like a storm is approaching. Thunder and lightning is expected.",
    seasons: ["spring", "summer", "fall"],
    image: "images/weather/Storm.png",
    watersCrops: true,
    special: false
  },
  {
    id: "snow",
    name: "Snow",
    description: "Expect a few inches of snow tomorrow.",
    seasons: ["winter"],
    image: "images/weather/Snow.png",
    watersCrops: false,
    special: false
  },
  {
    id: "wind-spring",
    name: "Wind (Spring)",
    description: "Partially cloudy with a light breeze. Expect lots of pollen!",
    seasons: ["spring"],
    image: "images/weather/Wind Spring.png",
    watersCrops: false,
    special: false
  },
  {
    id: "wind-fall",
    name: "Wind (Fall)",
    description: "It's going to be cloudy, with gusts of wind throughout the day.",
    seasons: ["fall"],
    image: "images/weather/Wind Fall.png",
    watersCrops: false,
    special: false
  },
  {
    id: "green-rain",
    name: "Green Rain",
    description: "Um... There appears to be some kind of... anomalous reading... I... don't know what this means...",
    seasons: ["summer"],
    image: "images/weather/Green Rain.png",
    watersCrops: true,
    special: true
  },
  {
    id: "festival",
    name: "Festival",
    description: "It's going to be clear and sunny tomorrow... perfect weather for the Festival!",
    seasons: ["spring", "summer", "fall", "winter"],
    image: "images/weather/Festival.png",
    watersCrops: false,
    special: true
  },
  {
    id: "wedding",
    name: "Wedding",
    description: "It's going to be a beautiful day for a wedding!",
    seasons: ["spring", "summer", "fall", "winter"],
    image: "images/weather/Wedding.png",
    watersCrops: false,
    special: true
  }
];

// src/modules/weather/index.ts
var weatherData = weather_default;
var WeatherQuery = class _WeatherQuery extends QueryBase {
  constructor(data = weatherData) {
    super(data);
  }
  bySeason(season) {
    return new _WeatherQuery(this.data.filter((w) => w.seasons.includes(season)));
  }
  watersCrops() {
    return new _WeatherQuery(this.data.filter((w) => w.watersCrops));
  }
  special() {
    return new _WeatherQuery(this.data.filter((w) => w.special));
  }
};
function weather(source = weatherData) {
  return new WeatherQuery(source);
}

// data/weapon-stats.json
var weapon_stats_default = [
  {
    id: "speed",
    name: "Speed",
    description: "Speed is separate from player speed. This speed only influences Attack Frequency. The displayed speed is applied as a modifier to the weapon's base speed, which varies by weapon type.",
    image: "images/weapons/stats/Speed.png"
  },
  {
    id: "defense",
    name: "Defense",
    description: "Defense is a statistic that affects how much damage the player takes.",
    image: "images/weapons/stats/Defense.png"
  },
  {
    id: "weight",
    name: "Weight",
    description: "The Weight of a weapon affects how far an enemy will be knocked back.",
    image: "images/weapons/stats/Weight.png"
  },
  {
    id: "crit-chance",
    name: "Crit. Chance",
    description: "The Crit. Chance of a weapon affects the likelihood to perform a critical strike with increased damage.",
    image: "images/weapons/stats/Crit. Chance.png"
  },
  {
    id: "crit-power",
    name: "Crit. Power",
    description: "When you hit a critical strike, this statistic will add additional damage to your enemy.",
    image: "images/weapons/stats/Crit. Power.png"
  }
];

// src/modules/weapon-stats/index.ts
var weaponStatsData = weapon_stats_default;
var WeaponStatQuery = class _WeaponStatQuery extends QueryBase {
  constructor(data = weaponStatsData) {
    super(data);
  }
  sortByName(order = "asc") {
    return new _WeaponStatQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  }
};
function weaponStats(source = weaponStatsData) {
  return new WeaponStatQuery(source);
}

// data/collections.json
var collections_default = {
  itemsShipped: [
    "16",
    "18",
    "20",
    "22",
    "24",
    "78",
    "88",
    "90",
    "91",
    "92",
    "174",
    "176",
    "180",
    "182",
    "184",
    "186",
    "188",
    "190",
    "192",
    "248",
    "250",
    "252",
    "254",
    "256",
    "257",
    "258",
    "259",
    "260",
    "262",
    "264",
    "266",
    "268",
    "270",
    "271",
    "272",
    "274",
    "276",
    "278",
    "280",
    "281",
    "282",
    "283",
    "284",
    "289",
    "296",
    "300",
    "pale-ale",
    "304",
    "305",
    "mayonnaise",
    "duck-mayonnaise",
    "void-mayonnaise",
    "330",
    "334",
    "335",
    "336",
    "337",
    "338",
    "honey",
    "pickles",
    "jelly",
    "beer",
    "wine",
    "juice",
    "376",
    "378",
    "380",
    "382",
    "384",
    "386",
    "388",
    "390",
    "392",
    "393",
    "394",
    "396",
    "397",
    "398",
    "399",
    "400",
    "402",
    "404",
    "406",
    "408",
    "410",
    "412",
    "414",
    "416",
    "417",
    "418",
    "420",
    "421",
    "422",
    "cheese",
    "goat-cheese",
    "cloth",
    "430",
    "truffle-oil",
    "433",
    "436",
    "438",
    "440",
    "442",
    "444",
    "caviar",
    "446",
    "aged-roe",
    "454",
    "mead",
    "591",
    "593",
    "595",
    "597",
    "613",
    "green-tea",
    "634",
    "635",
    "636",
    "637",
    "638",
    "684",
    "709",
    "724",
    "725",
    "726",
    "766",
    "767",
    "768",
    "769",
    "771",
    "787",
    "dinosaur-mayonnaise",
    "812",
    "814",
    "815",
    "829",
    "830",
    "832",
    "834",
    "848",
    "851",
    "881",
    "909",
    "910",
    "smoked-fish",
    "Moss",
    "MysticSyrup",
    "raisins",
    "dried-fruit",
    "dried-mushrooms",
    "Carrot",
    "SummerSquash",
    "Broccoli",
    "Powdermelon"
  ],
  fish: [
    "128",
    "129",
    "130",
    "131",
    "132",
    "136",
    "137",
    "138",
    "139",
    "140",
    "141",
    "142",
    "143",
    "144",
    "145",
    "146",
    "147",
    "148",
    "149",
    "150",
    "151",
    "152",
    "153",
    "154",
    "155",
    "156",
    "157",
    "158",
    "159",
    "160",
    "161",
    "162",
    "163",
    "164",
    "165",
    "267",
    "269",
    "372",
    "682",
    "698",
    "699",
    "700",
    "701",
    "702",
    "704",
    "705",
    "706",
    "707",
    "708",
    "715",
    "716",
    "717",
    "718",
    "719",
    "720",
    "721",
    "722",
    "723",
    "734",
    "775",
    "795",
    "796",
    "798",
    "799",
    "800",
    "836",
    "837",
    "838",
    "RiverJelly",
    "CaveJelly",
    "SeaJelly",
    "Goby"
  ],
  artifacts: [
    "96",
    "97",
    "98",
    "99",
    "100",
    "101",
    "103",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "110",
    "111",
    "112",
    "113",
    "114",
    "115",
    "116",
    "117",
    "118",
    "119",
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "579",
    "580",
    "581",
    "582",
    "583",
    "584",
    "585",
    "586",
    "587",
    "588",
    "589"
  ],
  minerals: [
    "60",
    "62",
    "64",
    "66",
    "68",
    "70",
    "72",
    "74",
    "80",
    "82",
    "84",
    "86",
    "538",
    "539",
    "540",
    "541",
    "542",
    "543",
    "544",
    "545",
    "546",
    "547",
    "548",
    "549",
    "550",
    "551",
    "552",
    "553",
    "554",
    "555",
    "556",
    "557",
    "558",
    "559",
    "560",
    "561",
    "562",
    "563",
    "564",
    "565",
    "566",
    "567",
    "568",
    "569",
    "570",
    "571",
    "572",
    "573",
    "574",
    "575",
    "576",
    "577",
    "578"
  ],
  cooking: [
    "194",
    "195",
    "196",
    "197",
    "198",
    "199",
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "211",
    "212",
    "213",
    "214",
    "215",
    "216",
    "218",
    "219",
    "220",
    "221",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "230",
    "231",
    "232",
    "233",
    "234",
    "235",
    "236",
    "237",
    "238",
    "239",
    "240",
    "241",
    "242",
    "243",
    "244",
    "253",
    "265",
    "456",
    "457",
    "604",
    "605",
    "606",
    "607",
    "608",
    "609",
    "610",
    "611",
    "612",
    "648",
    "649",
    "651",
    "618",
    "727",
    "728",
    "729",
    "730",
    "731",
    "732",
    "733",
    "903",
    "904",
    "905",
    "906",
    "907",
    "921",
    "MossSoup"
  ],
  crafting: [
    "287",
    "286",
    "288",
    "325",
    "298",
    "324",
    "323",
    "322",
    "BigChest",
    "BigStoneChest",
    "130",
    "232",
    "39",
    "38",
    "TextSign",
    "37",
    "10",
    "163",
    "16",
    "Dehydrator",
    "FishSmoker",
    "12",
    "17",
    "24",
    "19",
    "15",
    "BaitMaker",
    "90",
    "114",
    "21",
    "DeluxeWormBin",
    "13",
    "182",
    "HeavyFurnace",
    "264",
    "9",
    "MushroomLog",
    "254",
    "20",
    "25",
    "158",
    "156",
    "105",
    "154",
    "645",
    "621",
    "599",
    "150",
    "146",
    "148",
    "145",
    "153",
    "746",
    "151",
    "149",
    "144",
    "147",
    "93",
    "152",
    "143",
    "167",
    "62",
    "275",
    "8",
    "108",
    "83",
    "463",
    "464",
    "888",
    "527",
    "524",
    "525",
    "839",
    "521",
    "685",
    "691",
    "ChallengeBait",
    "695",
    "710",
    "DeluxeBait",
    "687",
    "908",
    "703",
    "877",
    "SonarBobber",
    "686",
    "694",
    "693",
    "774",
    "293",
    "333",
    "840",
    "329",
    "841",
    "401",
    "331",
    "328",
    "411",
    "409",
    "407",
    "415",
    "405",
    "499",
    "368",
    "370",
    "BlueGrassStarter",
    "919",
    "920",
    "466",
    "885",
    "297",
    "918",
    "MysticTreeSeed",
    "369",
    "371",
    "465",
    "251",
    "805",
    "497",
    "495",
    "496",
    "498",
    "926",
    "681",
    "TentKit",
    "TreasureTotem",
    "690",
    "261",
    "688",
    "886",
    "689",
    "403",
    "874",
    "441",
    "872",
    "773",
    "879",
    "772",
    "Anvil",
    "239",
    "MiniForge",
    "209",
    "238",
    "231",
    "71",
    "StatueOfBlessings",
    "StatueOfTheDwarfKing",
    "336",
    "335"
  ]
};

// src/modules/collections/index.ts
function buildLookup() {
  const map = /* @__PURE__ */ new Map();
  const add = (item) => {
    if (!map.has(item.id)) map.set(item.id, { id: item.id, name: item.name, image: item.image });
  };
  for (const item of artifacts_default) add(item);
  for (const item of minerals_default) add(item);
  for (const item of fish_default) add(item);
  for (const item of cooking_default) add(item);
  for (const item of forageables_default) add(item);
  for (const item of crops_default) add(item);
  for (const item of artisan_goods_default) add(item);
  for (const item of monster_loot_default) add(item);
  for (const recipe of crafting_default) {
    add({ id: recipe.output.id, name: recipe.output.name, image: recipe.image });
  }
  for (const animal of animals_default) {
    if (animal.type !== "farm-animal") continue;
    if (animal.produce) add(animal.produce);
    if (animal.deluxeProduce) add(animal.deluxeProduce);
  }
  for (const tree of trees_default) {
    if (tree.produce) add(tree.produce);
    if (tree.tapper) add(tree.tapper);
  }
  return map;
}
var lookup = buildLookup();
var CollectionItemQuery = class extends QueryBase {
  constructor(data) {
    super(data);
  }
};
var CollectionsQuery = class {
  resolve(ids) {
    const items = [];
    for (const id of ids) {
      const item = lookup.get(id);
      if (item) items.push(item);
    }
    return new CollectionItemQuery(items);
  }
  /** Items that appear in the Items Shipped collection tab. */
  itemsShipped() {
    return this.resolve(collections_default.itemsShipped);
  }
  /** Items that appear in the Fish collection tab. */
  fish() {
    return this.resolve(collections_default.fish);
  }
  /** Items that appear in the Artifacts collection tab (museum donations). */
  artifacts() {
    return this.resolve(collections_default.artifacts);
  }
  /** Items that appear in the Minerals collection tab (museum donations). */
  minerals() {
    return this.resolve(collections_default.minerals);
  }
  /** Items that appear in the Cooking collection tab. */
  cooking() {
    return this.resolve(collections_default.cooking);
  }
  /** Items that appear in the Crafting collection tab. */
  crafting() {
    return this.resolve(collections_default.crafting);
  }
};
function collections() {
  return new CollectionsQuery();
}

// data/perfection.json
var perfection_default = [
  {
    id: "produce-forage-shipped",
    name: "Produce & Forage Shipped",
    requirement: "Ship one of every item in the Items Shipped (Farm & Forage) tab",
    count: 154,
    unit: "items",
    weight: 15
  },
  {
    id: "obelisks-on-farm",
    name: "Obelisks on Farm",
    requirement: "Build Earth Obelisk, Water Obelisk, Desert Obelisk, and Island Obelisk on the farm",
    count: 4,
    unit: "obelisks",
    weight: 4
  },
  {
    id: "golden-clock-on-farm",
    name: "Golden Clock on Farm",
    requirement: "Build the Gold Clock on the farm",
    count: 1,
    unit: "building",
    weight: 10
  },
  {
    id: "monster-slayer-hero",
    name: "Monster Slayer Hero",
    requirement: "Complete all monster eradication goals for the Adventurer's Guild",
    count: 12,
    unit: "goals",
    weight: 10
  },
  {
    id: "great-friends",
    name: "Great Friends",
    requirement: "Reach maximum hearts with every villager (including Kent)",
    count: 34,
    unit: "villagers",
    weight: 11
  },
  {
    id: "farmer-level",
    name: "Farmer Level",
    requirement: "Reach level 10 in every skill",
    count: 25,
    unit: "skill levels",
    weight: 5
  },
  {
    id: "found-all-stardrops",
    name: "Found All Stardrops",
    requirement: "Find all Stardrops",
    count: 7,
    unit: "stardrops",
    weight: 10
  },
  {
    id: "cooking-recipes-made",
    name: "Cooking Recipes Made",
    requirement: "Cook every recipe at least once",
    count: 81,
    unit: "recipes",
    weight: 10
  },
  {
    id: "crafting-recipes-made",
    name: "Crafting Recipes Made",
    requirement: "Craft every item at least once (Wedding Ring not required)",
    count: 149,
    unit: "items",
    weight: 10
  },
  {
    id: "fish-caught",
    name: "Fish Caught",
    requirement: "Catch every fish species in the Fish tab in the Collections menu",
    count: 72,
    unit: "species",
    weight: 10
  },
  {
    id: "golden-walnuts-found",
    name: "Golden Walnuts Found",
    requirement: "Find all Golden Walnuts on Ginger Island",
    count: 130,
    unit: "walnuts",
    weight: 5
  }
];

// src/modules/perfection/index.ts
var allPerfectionData = perfection_default;
var PerfectionQuery = class extends QueryBase {
  constructor(data = allPerfectionData) {
    super(data);
  }
  /** Returns the sum of all category weights in the current query. For the full dataset this equals 100. */
  totalWeight() {
    return this.data.reduce((sum, c) => sum + c.weight, 0);
  }
};
function perfection(source = allPerfectionData) {
  return new PerfectionQuery(source);
}

// data/qi-shop.json
var qi_shop_default = [
  {
    id: "256",
    name: "Junimo Chest",
    cost: 15,
    currency: "qi-gem",
    quantity: 1,
    description: "Through the power of forest magic, every Junimo Chest links to the same stash.",
    image: "images/shop/Junimo Chest.png",
    isRecipe: false,
    note: "First purchase requires two (30 Qi Gems total)."
  },
  {
    id: "911",
    name: "Horse Flute",
    cost: 50,
    currency: "qi-gem",
    quantity: 1,
    description: "Playing this flute will summon your horse. Only works outdoors.",
    image: "images/shop/Horse Flute.png",
    isRecipe: false
  },
  {
    id: "897",
    name: "Pierre's Missing Stocklist",
    cost: 50,
    currency: "qi-gem",
    quantity: 1,
    description: "Pierre might be interested in this.",
    image: "images/shop/Pierre's Missing Stocklist.png",
    isRecipe: false
  },
  {
    id: "275",
    name: "Hopper",
    cost: 10,
    currency: "qi-gem",
    quantity: 1,
    description: "Items placed inside will automatically be loaded into the machine in front of it.",
    image: "images/craftable/misc/Hopper.png",
    isRecipe: false
  },
  {
    id: "913",
    name: "Enricher",
    cost: 20,
    currency: "qi-gem",
    quantity: 4,
    description: "Place on a sprinkler and load with fertilizer to automatically apply it when planting seeds nearby.",
    image: "images/shop/Enricher.png",
    isRecipe: false
  },
  {
    id: "915",
    name: "Pressure Nozzle",
    cost: 20,
    currency: "qi-gem",
    quantity: 4,
    description: "Place on a sprinkler to increase its watering range.",
    image: "images/shop/Pressure Nozzle.png",
    isRecipe: false
  },
  {
    id: "265",
    name: "Deconstructor",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Destroys crafted items, but salvages their most valuable material.",
    image: "images/shop/Deconstructor.png",
    isRecipe: false
  },
  {
    id: "SHOP_TOWN_KEY",
    name: "Key To The Town",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Allows access to all buildings in town, at any time of day.",
    image: "images/special-items/Key To The Town.png",
    isRecipe: false
  },
  {
    id: "896",
    name: "Galaxy Soul",
    cost: 40,
    currency: "qi-gem",
    quantity: 1,
    description: "Forge 3 of these into a Galaxy weapon to unleash its final form.",
    image: "images/shop/Galaxy Soul.png",
    isRecipe: false
  },
  {
    id: "891",
    name: "Mushroom Tree Seed",
    cost: 5,
    currency: "qi-gem",
    quantity: 1,
    description: "Place this on your farm to plant a mushroom tree.",
    image: "images/shop/Mushroom Tree Seed.png",
    isRecipe: false
  },
  {
    id: "908",
    name: "Magic Bait",
    cost: 5,
    currency: "qi-gem",
    quantity: 20,
    description: "Allows you to catch fish from any season, time, or weather, from whichever type of water you cast into.",
    image: "images/fish/bait/Magic Bait.png",
    isRecipe: false
  },
  {
    id: "917",
    name: "Qi Seasoning",
    cost: 10,
    currency: "qi-gem",
    quantity: 10,
    description: "Just a dash will elevate any dish to extraordinary heights. Automatically applied when cooking.",
    image: "images/shop/Qi Seasoning.png",
    isRecipe: false
  },
  {
    id: "82",
    name: "Mr. Qi's Hat",
    cost: 5,
    currency: "qi-gem",
    quantity: 1,
    description: "A replica of Mr. Qi's iconic hat.",
    image: "images/hats/Mr. Qi's Hat.png",
    isRecipe: false
  },
  {
    id: "2400",
    name: "Aquatic Sanctuary",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Can be placed inside your house.",
    image: "images/shop/Aquatic Sanctuary.png",
    isRecipe: false
  },
  {
    id: "recipe-heavy-tapper",
    name: "Heavy Tapper Recipe",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for the Heavy Tapper.",
    image: "images/craftable/refining-equipment/Heavy Tapper.png",
    isRecipe: true
  },
  {
    id: "recipe-hyper-speed-gro",
    name: "Hyper Speed-Gro Recipe",
    cost: 30,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for Hyper Speed-Gro.",
    image: "images/craftable/fertilizer/Hyper Speed-Gro.png",
    isRecipe: true
  },
  {
    id: "recipe-deluxe-fertilizer",
    name: "Deluxe Fertilizer Recipe",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for Deluxe Fertilizer.",
    image: "images/craftable/fertilizer/Deluxe Fertilizer.png",
    isRecipe: true
  },
  {
    id: "recipe-hopper",
    name: "Hopper Recipe",
    cost: 50,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for the Hopper.",
    image: "images/craftable/misc/Hopper.png",
    isRecipe: true
  },
  {
    id: "recipe-magic-bait",
    name: "Magic Bait Recipe",
    cost: 20,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for Magic Bait.",
    image: "images/fish/bait/Magic Bait.png",
    isRecipe: true
  },
  {
    id: "248",
    name: "Mini-Shipping Bin",
    cost: 60,
    currency: "qi-gem",
    quantity: 1,
    description: "Items placed in it will be included in the nightly shipment.",
    image: "images/shop/Mini-Shipping Bin.png",
    isRecipe: false
  },
  {
    id: "2514",
    name: "Exotic Double Bed",
    cost: 50,
    currency: "qi-gem",
    quantity: 1,
    description: "Can be placed inside your house.",
    image: "images/shop/Exotic Double Bed.png",
    isRecipe: false
  },
  {
    id: "recipe-blue-grass-starter",
    name: "Blue Grass Starter Recipe",
    cost: 40,
    currency: "qi-gem",
    quantity: 1,
    description: "Unlocks the crafting recipe for Blue Grass Starter.",
    image: "images/craftable/seeds/Blue Grass Starter.png",
    isRecipe: true
  },
  {
    id: "893",
    name: "Fireworks (Red)",
    cost: 1,
    currency: "qi-gem",
    quantity: 1,
    description: "An old tradition for celebrations and festivities. Handle with care!",
    image: "images/shop/Fireworks (Red).png",
    isRecipe: false
  },
  {
    id: "894",
    name: "Fireworks (Purple)",
    cost: 1,
    currency: "qi-gem",
    quantity: 1,
    description: "An old tradition for celebrations and festivities. Handle with care!",
    image: "images/shop/Fireworks (Purple).png",
    isRecipe: false
  },
  {
    id: "895",
    name: "Fireworks (Green)",
    cost: 1,
    currency: "qi-gem",
    quantity: 1,
    description: "An old tradition for celebrations and festivities. Handle with care!",
    image: "images/shop/Fireworks (Green).png",
    isRecipe: false
  },
  {
    id: "858",
    name: "Qi Gem",
    cost: 1,
    currency: "golden-walnut",
    quantity: 2,
    description: "Special currency honored by Mr. Qi.",
    image: "images/shop/Qi Gem.png",
    isRecipe: false,
    availability: "After fully upgrading Ginger Island"
  },
  {
    id: "928",
    name: "Golden Egg",
    cost: 100,
    currency: "qi-gem",
    quantity: 1,
    description: "A very rare and special egg with a solid gold shell.",
    image: "images/animals/produce/Golden Egg.png",
    isRecipe: false,
    availability: "After achieving 100% perfection"
  }
];

// src/modules/qi-shop/index.ts
var allQiStockData = qi_shop_default;
var QiStockQuery = class _QiStockQuery extends QueryBase {
  constructor(data = allQiStockData) {
    super(data);
  }
  /** Filter to items purchased with the given currency. */
  byCurrency(currency) {
    return new _QiStockQuery(this.data.filter((item) => item.currency === currency));
  }
  /** Filter to recipe unlocks only. */
  recipes() {
    return new _QiStockQuery(this.data.filter((item) => item.isRecipe));
  }
  /** Filter to non-recipe items only. */
  items() {
    return new _QiStockQuery(this.data.filter((item) => !item.isRecipe));
  }
  /** Filter to items that are always available (no special availability condition). */
  alwaysAvailable() {
    return new _QiStockQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by cost ascending or descending. */
  sortByCost(order = "asc") {
    return new _QiStockQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.cost - b.cost : b.cost - a.cost)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _QiStockQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function qiStock(source = allQiStockData) {
  return new QiStockQuery(source);
}

// data/medical-supplies-shop.json
var medical_supplies_shop_default = [
  {
    id: "349",
    name: "Energy Tonic",
    price: 1e3,
    description: "Restores a lot of energy.",
    energy: 500,
    health: 0,
    image: "images/medical-supplies/Energy Tonic.png"
  },
  {
    id: "351",
    name: "Muscle Remedy",
    price: 1e3,
    description: "When you've pushed your body too hard, drink this to remove 'Exhaustion.'",
    energy: 50,
    health: 22,
    image: "images/medical-supplies/Muscle Remedy.png"
  }
];

// src/modules/medical-supplies-shop/index.ts
var allMedicalSuppliesData = medical_supplies_shop_default;
var MedicalSupplyQuery = class _MedicalSupplyQuery extends QueryBase {
  constructor(data = allMedicalSuppliesData) {
    super(data);
  }
  /** Sort by purchase price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _MedicalSupplyQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _MedicalSupplyQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function medicalSupplies(source = allMedicalSuppliesData) {
  return new MedicalSupplyQuery(source);
}

// data/blacksmith-shop.json
var blacksmith_shop_default = [
  {
    id: "378",
    name: "Copper Ore",
    description: "A common ore that can be smelted into bars.",
    priceYear1: 75,
    priceYear2: 150,
    image: "images/minerals/ore/Copper Ore.png"
  },
  {
    id: "380",
    name: "Iron Ore",
    description: "A fairly common ore that can be smelted into bars.",
    priceYear1: 150,
    priceYear2: 250,
    image: "images/minerals/ore/Iron Ore.png"
  },
  {
    id: "382",
    name: "Coal",
    description: "A combustible rock that is useful for crafting and smelting.",
    priceYear1: 150,
    priceYear2: 250,
    image: "images/minerals/ore/Coal.png"
  },
  {
    id: "384",
    name: "Gold Ore",
    description: "A precious ore that can be smelted into bars.",
    priceYear1: 400,
    priceYear2: 750,
    image: "images/minerals/ore/Gold Ore.png"
  }
];

// src/modules/blacksmith-shop/index.ts
var allBlacksmithData = blacksmith_shop_default;
var BlacksmithQuery = class _BlacksmithQuery extends QueryBase {
  constructor(data = allBlacksmithData) {
    super(data);
  }
  /** Sort by price for the given year (1 or 2+) ascending or descending. */
  sortByPrice(year = 1, order = "asc") {
    const key = year === 1 ? "priceYear1" : "priceYear2";
    return new _BlacksmithQuery(
      [...this.data].sort((a, b) => order === "asc" ? a[key] - b[key] : b[key] - a[key])
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _BlacksmithQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function blacksmith(source = allBlacksmithData) {
  return new BlacksmithQuery(source);
}

// data/joja-shop.json
var joja_shop_default = [
  {
    id: "167",
    name: "Joja Cola",
    price: 75,
    description: "The flagship product of Joja corporation.",
    image: "images/shop/Joja Cola.png",
    seasons: []
  },
  {
    id: "JojaCatalogue",
    name: "Joja Furniture Catalogue",
    price: 25e3,
    description: "Grants one (1) lifetime subscription to the Official Joja THRIVE Collection, featuring 40 exclusive furniture pieces!",
    image: "images/shop/Joja Furniture Catalogue.png",
    seasons: []
  },
  {
    id: "22",
    name: "Joja Wallpaper",
    price: 20,
    description: "Decorates the walls of one room.",
    image: "images/shop/Joja Wallpaper.png",
    seasons: []
  },
  {
    id: "1609",
    name: "J. Cola Light",
    price: 500,
    description: "Can be placed inside your house.",
    image: "images/shop/J. Cola Light.png",
    seasons: []
  },
  {
    id: "297",
    name: "Grass Starter",
    price: 125,
    description: "Place this on your farm to start a new patch of grass.",
    image: "images/craftable/seeds/Grass Starter.png",
    seasons: []
  },
  {
    id: "245",
    name: "Sugar",
    price: 125,
    description: "Adds sweetness to pastries and candies. Too much can be unhealthy.",
    image: "images/shop/Sugar.png",
    seasons: []
  },
  {
    id: "246",
    name: "Wheat Flour",
    price: 125,
    description: "A common cooking ingredient made from crushed wheat seeds.",
    image: "images/shop/Wheat Flour.png",
    seasons: []
  },
  {
    id: "423",
    name: "Rice",
    price: 250,
    description: "A basic grain often served under vegetables.",
    image: "images/shop/Rice.png",
    seasons: []
  },
  {
    id: "272",
    name: "Auto-Petter",
    price: 5e4,
    description: "Joja Co. patented technology for coops and barns. Keeps your animals content, but can't replace the full benefit of human touch.",
    image: "images/tools/Auto-Petter.png",
    seasons: [],
    availability: "Joja Warehouse route completed"
  },
  {
    id: "472",
    name: "Parsnip Seeds",
    price: 25,
    description: "Plant these in the spring. Takes 4 days to mature.",
    image: "images/crops/parsnip/seed.png",
    seasons: ["spring"]
  },
  {
    id: "473",
    name: "Bean Starter",
    price: 75,
    description: "Plant these in the spring. Takes 10 days to mature, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/green-bean/seed.png",
    seasons: ["spring"]
  },
  {
    id: "474",
    name: "Cauliflower Seeds",
    price: 100,
    description: "Plant these in the spring. Takes 12 days to produce a large cauliflower.",
    image: "images/crops/cauliflower/seed.png",
    seasons: ["spring"]
  },
  {
    id: "475",
    name: "Potato Seeds",
    price: 62,
    description: "Plant these in the spring. Takes 6 days to mature, and has a chance of yielding multiple potatoes at harvest.",
    image: "images/crops/potato/seed.png",
    seasons: ["spring"]
  },
  {
    id: "427",
    name: "Tulip Bulb",
    price: 25,
    description: "Plant in spring. Takes 6 days to produce a colorful flower. Assorted colors.",
    image: "images/crops/tulip/seed.png",
    seasons: ["spring"]
  },
  {
    id: "477",
    name: "Kale Seeds",
    price: 87,
    description: "Plant these in the spring. Takes 6 days to mature. Harvest with the scythe.",
    image: "images/crops/kale/seed.png",
    seasons: ["spring"]
  },
  {
    id: "429",
    name: "Jazz Seeds",
    price: 37,
    description: "Plant in spring. Takes 7 days to produce a blue puffball flower.",
    image: "images/crops/blue-jazz/seed.png",
    seasons: ["spring"]
  },
  {
    id: "480",
    name: "Tomato Seeds",
    price: 62,
    description: "Plant these in the summer. Takes 11 days to mature, and continues to produce after first harvest.",
    image: "images/crops/tomato/seed.png",
    seasons: ["summer"]
  },
  {
    id: "482",
    name: "Pepper Seeds",
    price: 50,
    description: "Plant these in the summer. Takes 5 days to mature, and continues to produce after first harvest.",
    image: "images/crops/hot-pepper/seed.png",
    seasons: ["summer"]
  },
  {
    id: "484",
    name: "Radish Seeds",
    price: 50,
    description: "Plant these in the summer. Takes 6 days to mature.",
    image: "images/crops/radish/seed.png",
    seasons: ["summer"]
  },
  {
    id: "479",
    name: "Melon Seeds",
    price: 100,
    description: "Plant these in the summer. Takes 12 days to mature.",
    image: "images/crops/melon/seed.png",
    seasons: ["summer"]
  },
  {
    id: "302",
    name: "Hops Starter",
    price: 75,
    description: "Plant these in the summer. Takes 11 days to grow, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/hops/seed.png",
    seasons: ["summer"]
  },
  {
    id: "453",
    name: "Poppy Seeds",
    price: 125,
    description: "Plant in summer. Produces a bright red flower in 7 days.",
    image: "images/crops/poppy/seed.png",
    seasons: ["summer"]
  },
  {
    id: "455",
    name: "Spangle Seeds",
    price: 62,
    description: "Plant in summer. Takes 8 days to produce a vibrant tropical flower. Assorted colors.",
    image: "images/crops/summer-spangle/seed.png",
    seasons: ["summer"]
  },
  {
    id: "483",
    name: "Wheat Seeds",
    price: 12,
    description: "Plant these in the summer or fall. Takes 4 days to mature. Harvest with the scythe.",
    image: "images/crops/wheat/seed.png",
    seasons: ["summer", "fall"]
  },
  {
    id: "431",
    name: "Sunflower Seeds",
    price: 125,
    description: "Plant in summer or fall. Takes 8 days to produce a large sunflower. Yields more seeds at harvest.",
    image: "images/crops/sunflower/seed.png",
    seasons: ["summer", "fall"]
  },
  {
    id: "487",
    name: "Corn Seeds",
    price: 187,
    description: "Plant these in the summer or fall. Takes 14 days to mature, and continues to produce after first harvest.",
    image: "images/crops/corn/seed.png",
    seasons: ["summer", "fall"]
  },
  {
    id: "488",
    name: "Eggplant Seeds",
    price: 25,
    description: "Plant these in the fall. Takes 5 days to mature, and continues to produce after first harvest.",
    image: "images/crops/eggplant/seed.png",
    seasons: ["fall"]
  },
  {
    id: "490",
    name: "Pumpkin Seeds",
    price: 125,
    description: "Plant these in the fall. Takes 13 days to mature.",
    image: "images/crops/pumpkin/seed.png",
    seasons: ["fall"]
  },
  {
    id: "299",
    name: "Amaranth Seeds",
    price: 87,
    description: "Plant these in the fall. Takes 7 days to grow. Harvest with the scythe.",
    image: "images/crops/amaranth/seed.png",
    seasons: ["fall"]
  },
  {
    id: "301",
    name: "Grape Starter",
    price: 75,
    description: "Plant these in the fall. Takes 10 days to grow, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/grape/seed.png",
    seasons: ["fall"]
  },
  {
    id: "492",
    name: "Yam Seeds",
    price: 75,
    description: "Plant these in the fall. Takes 10 days to mature.",
    image: "images/crops/yam/seed.png",
    seasons: ["fall"]
  },
  {
    id: "491",
    name: "Bok Choy Seeds",
    price: 62,
    description: "Plant these in the fall. Takes 4 days to mature.",
    image: "images/crops/bok-choy/seed.png",
    seasons: ["fall"]
  },
  {
    id: "493",
    name: "Cranberry Seeds",
    price: 300,
    description: "Plant these in the fall. Takes 7 days to mature, and continues to produce after first harvest.",
    image: "images/crops/cranberries/seed.png",
    seasons: ["fall"]
  },
  {
    id: "425",
    name: "Fairy Seeds",
    price: 250,
    description: "Plant in fall. Takes 12 days to produce a mysterious flower. Assorted colors.",
    image: "images/crops/fairy-rose/seed.png",
    seasons: ["fall"]
  }
];

// src/modules/joja-shop/index.ts
var allJojaData = joja_shop_default;
var JojaQuery = class _JojaQuery extends QueryBase {
  constructor(data = allJojaData) {
    super(data);
  }
  /** Filter to items available in the given season (includes permanent and multi-season items). */
  bySeason(season) {
    return new _JojaQuery(
      this.data.filter((item) => item.seasons.length === 0 || item.seasons.includes(season))
    );
  }
  /** Filter to year-round permanent stock only (no seasonal seeds). */
  permanent() {
    return new _JojaQuery(this.data.filter((item) => item.seasons.length === 0));
  }
  /** Filter to seasonal seed stock only (items with at least one season). */
  seeds() {
    return new _JojaQuery(this.data.filter((item) => item.seasons.length > 0));
  }
  /** Filter to items that are always available (no special purchase condition). */
  alwaysAvailable() {
    return new _JojaQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _JojaQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _JojaQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function joja(source = allJojaData) {
  return new JojaQuery(source);
}

// data/pierre-shop.json
var pierre_shop_default = [
  {
    id: "245",
    name: "Sugar",
    price: 100,
    description: "Adds sweetness to pastries and candies. Too much can be unhealthy.",
    image: "images/shop/Sugar.png",
    seasons: [],
    category: "ingredient"
  },
  {
    id: "246",
    name: "Wheat Flour",
    price: 100,
    description: "A common cooking ingredient made from crushed wheat seeds.",
    image: "images/shop/Wheat Flour.png",
    seasons: [],
    category: "ingredient"
  },
  {
    id: "423",
    name: "Rice",
    price: 200,
    description: "A basic grain often served under vegetables.",
    image: "images/shop/Rice.png",
    seasons: [],
    category: "ingredient"
  },
  {
    id: "247",
    name: "Oil",
    price: 200,
    description: "All-purpose cooking oil.",
    image: "images/artisan-goods/Oil.png",
    seasons: [],
    category: "ingredient"
  },
  {
    id: "419",
    name: "Vinegar",
    price: 200,
    description: "A common cooking ingredient.",
    image: "images/artisan-goods/Vinegar.png",
    seasons: [],
    category: "ingredient"
  },
  {
    id: "297",
    name: "Grass Starter",
    price: 200,
    description: "Place this on your farm to start a new patch of grass.",
    image: "images/craftable/seeds/Grass Starter.png",
    seasons: [],
    category: "fertilizer"
  },
  {
    id: "368",
    name: "Basic Fertilizer",
    price: 100,
    description: "Improves soil quality a little, increasing your chance to grow quality crops. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Basic Fertilizer.png",
    seasons: [],
    category: "fertilizer",
    availability: "After Day 15"
  },
  {
    id: "370",
    name: "Basic Retaining Soil",
    price: 100,
    description: "This soil has a chance of staying watered overnight. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Basic Retaining Soil.png",
    seasons: [],
    category: "fertilizer",
    availability: "After Day 15"
  },
  {
    id: "465",
    name: "Speed-Gro",
    price: 100,
    description: "Stimulates leaf production. Guaranteed to reduce the number of days it takes for a crop to reach maturity by 10%. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Speed-Gro.png",
    seasons: [],
    category: "fertilizer",
    availability: "After Day 15"
  },
  {
    id: "369",
    name: "Quality Fertilizer",
    price: 150,
    description: "Improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Quality Fertilizer.png",
    seasons: [],
    category: "fertilizer",
    availability: "Year 2+"
  },
  {
    id: "371",
    name: "Quality Retaining Soil",
    price: 150,
    description: "This soil has a good chance of staying watered overnight. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Quality Retaining Soil.png",
    seasons: [],
    category: "fertilizer",
    availability: "Year 2+"
  },
  {
    id: "466",
    name: "Deluxe Speed-Gro",
    price: 150,
    description: "Stimulates leaf production. Guaranteed to reduce the number of days it takes for a crop to reach maturity by 25%. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Deluxe Speed-Gro.png",
    seasons: [],
    category: "fertilizer",
    availability: "Year 2+"
  },
  {
    id: "1308",
    name: "Catalogue",
    price: 3e4,
    description: "A collection of wallpaper and flooring options for your home.",
    image: "images/shop/Catalogue.png",
    seasons: [],
    category: "special"
  },
  {
    id: "458",
    name: "Bouquet",
    price: 200,
    description: "A gift to show your affection. Give to a bachelor or bachelorette to start a romantic relationship.",
    image: "images/shop/Bouquet.png",
    seasons: [],
    category: "special",
    availability: "8+ hearts with a marriage candidate"
  },
  {
    id: "large-pack",
    name: "Large Pack",
    price: 2e3,
    description: "Upgrades your backpack to hold 24 items.",
    image: "images/tools/backpack/Large Pack.png",
    seasons: [],
    category: "special"
  },
  {
    id: "deluxe-pack",
    name: "Deluxe Pack",
    price: 1e4,
    description: "Upgrades your backpack to hold 36 items.",
    image: "images/tools/backpack/Deluxe Pack.png",
    seasons: [],
    category: "special",
    availability: "Requires Large Pack"
  },
  {
    id: "recipe-grass-starter",
    name: "Grass Starter Recipe",
    price: 2e3,
    description: "Recipe for crafting Grass Starter.",
    image: "images/craftable/seeds/Grass Starter.png",
    seasons: [],
    category: "recipe"
  },
  {
    id: "recipe-dehydrator",
    name: "Dehydrator Recipe",
    price: 1e4,
    description: "Recipe for crafting a Dehydrator.",
    image: "images/craftable/artisan-equipment/Dehydrator.png",
    seasons: [],
    category: "recipe"
  },
  {
    id: "628",
    name: "Cherry Sapling",
    price: 3400,
    description: "Plant in fall or spring. Takes 28 days to produce a mature cherry tree.",
    image: "images/trees/cherry/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "629",
    name: "Apricot Sapling",
    price: 2e3,
    description: "Plant in fall or spring. Takes 28 days to produce a mature apricot tree.",
    image: "images/trees/apricot/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "630",
    name: "Orange Sapling",
    price: 4e3,
    description: "Plant in fall or spring. Takes 28 days to produce a mature orange tree.",
    image: "images/trees/orange/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "631",
    name: "Peach Sapling",
    price: 6e3,
    description: "Plant in fall or spring. Takes 28 days to produce a mature peach tree.",
    image: "images/trees/peach/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "632",
    name: "Pomegranate Sapling",
    price: 6e3,
    description: "Plant in fall or spring. Takes 28 days to produce a mature pomegranate tree.",
    image: "images/trees/pomegranate/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "633",
    name: "Apple Sapling",
    price: 4e3,
    description: "Plant in fall or spring. Takes 28 days to produce a mature apple tree.",
    image: "images/trees/apple/seed.png",
    seasons: [],
    category: "sapling"
  },
  {
    id: "472",
    name: "Parsnip Seeds",
    price: 20,
    description: "Plant these in the spring. Takes 4 days to mature.",
    image: "images/crops/parsnip/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "427",
    name: "Tulip Bulb",
    price: 20,
    description: "Plant in spring. Takes 6 days to produce a colorful flower. Assorted colors.",
    image: "images/crops/tulip/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "429",
    name: "Jazz Seeds",
    price: 30,
    description: "Plant in spring. Takes 7 days to produce a blue puffball flower.",
    image: "images/crops/blue-jazz/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "473",
    name: "Bean Starter",
    price: 60,
    description: "Plant these in the spring. Takes 10 days to mature, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/green-bean/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "475",
    name: "Potato Seeds",
    price: 50,
    description: "Plant these in the spring. Takes 6 days to mature, and has a chance of yielding multiple potatoes at harvest.",
    image: "images/crops/potato/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "477",
    name: "Kale Seeds",
    price: 70,
    description: "Plant these in the spring. Takes 6 days to mature. Harvest with the scythe.",
    image: "images/crops/kale/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "474",
    name: "Cauliflower Seeds",
    price: 80,
    description: "Plant these in the spring. Takes 12 days to produce a large cauliflower.",
    image: "images/crops/cauliflower/seed.png",
    seasons: ["spring"],
    category: "seed"
  },
  {
    id: "476",
    name: "Garlic Seeds",
    price: 40,
    description: "Plant in spring. Takes 4 days to mature.",
    image: "images/crops/garlic/seed.png",
    seasons: ["spring"],
    category: "seed",
    availability: "Year 2+"
  },
  {
    id: "273",
    name: "Rice Shoot",
    price: 40,
    description: "Plant these in the spring. Takes 6 days to mature. Must be planted near water.",
    image: "images/crops/unmilled-rice/seed.png",
    seasons: ["spring"],
    category: "seed",
    availability: "Year 2+"
  },
  {
    id: "483",
    name: "Wheat Seeds",
    price: 10,
    description: "Plant these in the summer or fall. Takes 4 days to mature. Harvest with the scythe.",
    image: "images/crops/wheat/seed.png",
    seasons: ["summer", "fall"],
    category: "seed"
  },
  {
    id: "482",
    name: "Pepper Seeds",
    price: 40,
    description: "Plant these in the summer. Takes 5 days to mature, and continues to produce after first harvest.",
    image: "images/crops/hot-pepper/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "484",
    name: "Radish Seeds",
    price: 40,
    description: "Plant these in the summer. Takes 6 days to mature.",
    image: "images/crops/radish/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "480",
    name: "Tomato Seeds",
    price: 50,
    description: "Plant these in the summer. Takes 11 days to mature, and continues to produce after first harvest.",
    image: "images/crops/tomato/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "455",
    name: "Spangle Seeds",
    price: 50,
    description: "Plant in summer. Takes 8 days to produce a vibrant tropical flower. Assorted colors.",
    image: "images/crops/summer-spangle/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "302",
    name: "Hops Starter",
    price: 60,
    description: "Plant these in the summer. Takes 11 days to grow, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/hops/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "481",
    name: "Blueberry Seeds",
    price: 80,
    description: "Plant these in the summer. Takes 13 days to mature, and continues to produce after first harvest.",
    image: "images/crops/blueberry/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "479",
    name: "Melon Seeds",
    price: 80,
    description: "Plant these in the summer. Takes 12 days to mature.",
    image: "images/crops/melon/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "453",
    name: "Poppy Seeds",
    price: 100,
    description: "Plant in summer. Produces a bright red flower in 7 days.",
    image: "images/crops/poppy/seed.png",
    seasons: ["summer"],
    category: "seed"
  },
  {
    id: "487",
    name: "Corn Seeds",
    price: 150,
    description: "Plant these in the summer or fall. Takes 14 days to mature, and continues to produce after first harvest.",
    image: "images/crops/corn/seed.png",
    seasons: ["summer", "fall"],
    category: "seed"
  },
  {
    id: "431",
    name: "Sunflower Seeds",
    price: 200,
    description: "Plant in summer or fall. Takes 8 days to produce a large sunflower. Yields more seeds at harvest.",
    image: "images/crops/sunflower/seed.png",
    seasons: ["summer", "fall"],
    category: "seed"
  },
  {
    id: "485",
    name: "Red Cabbage Seeds",
    price: 100,
    description: "Plant these in the summer. Takes 9 days to mature.",
    image: "images/crops/red-cabbage/seed.png",
    seasons: ["summer"],
    category: "seed",
    availability: "Year 2+"
  },
  {
    id: "488",
    name: "Eggplant Seeds",
    price: 20,
    description: "Plant these in the fall. Takes 5 days to mature, and continues to produce after first harvest.",
    image: "images/crops/eggplant/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "299",
    name: "Amaranth Seeds",
    price: 70,
    description: "Plant these in the fall. Takes 7 days to grow. Harvest with the scythe.",
    image: "images/crops/amaranth/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "301",
    name: "Grape Starter",
    price: 60,
    description: "Plant these in the fall. Takes 10 days to grow, but keeps producing after that. Grows on a trellis.",
    image: "images/crops/grape/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "491",
    name: "Bok Choy Seeds",
    price: 50,
    description: "Plant these in the fall. Takes 4 days to mature.",
    image: "images/crops/bok-choy/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "492",
    name: "Yam Seeds",
    price: 60,
    description: "Plant these in the fall. Takes 10 days to mature.",
    image: "images/crops/yam/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "490",
    name: "Pumpkin Seeds",
    price: 100,
    description: "Plant these in the fall. Takes 13 days to mature.",
    image: "images/crops/pumpkin/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "425",
    name: "Fairy Seeds",
    price: 200,
    description: "Plant in fall. Takes 12 days to produce a mysterious flower. Assorted colors.",
    image: "images/crops/fairy-rose/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "493",
    name: "Cranberry Seeds",
    price: 240,
    description: "Plant these in the fall. Takes 7 days to mature, and continues to produce after first harvest.",
    image: "images/crops/cranberries/seed.png",
    seasons: ["fall"],
    category: "seed"
  },
  {
    id: "489",
    name: "Artichoke Seeds",
    price: 30,
    description: "Plant these in the fall. Takes 8 days to mature.",
    image: "images/crops/artichoke/seed.png",
    seasons: ["fall"],
    category: "seed",
    availability: "Year 2+"
  }
];

// src/modules/pierre-shop/index.ts
var allPierreData = pierre_shop_default;
var PierreQuery = class _PierreQuery extends QueryBase {
  constructor(data = allPierreData) {
    super(data);
  }
  /** Filter to items available in the given season (includes permanent and multi-season items). */
  bySeason(season) {
    return new _PierreQuery(
      this.data.filter((item) => item.seasons.length === 0 || item.seasons.includes(season))
    );
  }
  /** Filter to year-round permanent stock only (no seasonal seeds). */
  permanent() {
    return new _PierreQuery(this.data.filter((item) => item.seasons.length === 0));
  }
  /** Filter to seasonal seed stock only (items with at least one season). */
  seeds() {
    return new _PierreQuery(this.data.filter((item) => item.category === "seed"));
  }
  /** Filter to fruit tree saplings only. */
  saplings() {
    return new _PierreQuery(this.data.filter((item) => item.category === "sapling"));
  }
  /** Filter to cooking ingredients only. */
  ingredients() {
    return new _PierreQuery(this.data.filter((item) => item.category === "ingredient"));
  }
  /** Filter to fertilizers and farming supplies only. */
  fertilizers() {
    return new _PierreQuery(this.data.filter((item) => item.category === "fertilizer"));
  }
  /** Filter to recipe items only. */
  recipes() {
    return new _PierreQuery(this.data.filter((item) => item.category === "recipe"));
  }
  /** Filter by category. */
  byCategory(category) {
    return new _PierreQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to items that are always available (no special purchase condition). */
  alwaysAvailable() {
    return new _PierreQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _PierreQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _PierreQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function pierre(source = allPierreData) {
  return new PierreQuery(source);
}

// data/saloon-shop.json
var saloon_shop_default = [
  {
    id: "346",
    name: "Beer",
    price: 400,
    description: "Drink in moderation.",
    image: "images/artisan-goods/Beer.png",
    category: "food"
  },
  {
    id: "395",
    name: "Coffee",
    price: 300,
    description: "It smells delicious. This is sure to give you a boost.",
    image: "images/artisan-goods/Coffee.png",
    category: "food"
  },
  {
    id: "216",
    name: "Bread",
    price: 120,
    description: "A crusty baguette.",
    image: "images/cooking/Bread.png",
    category: "food"
  },
  {
    id: "196",
    name: "Salad",
    price: 220,
    description: "A healthy garden salad.",
    image: "images/cooking/Salad.png",
    category: "food"
  },
  {
    id: "224",
    name: "Spaghetti",
    price: 240,
    description: "An old favorite.",
    image: "images/cooking/Spaghetti.png",
    category: "food"
  },
  {
    id: "206",
    name: "Pizza",
    price: 600,
    description: "It's popular for all the right reasons.",
    image: "images/cooking/Pizza.png",
    category: "food"
  },
  {
    id: "732",
    name: "Crab Cakes",
    price: 550,
    description: "Crab, bread crumbs, and egg formed into patties then fried to golden brown.",
    image: "images/cooking/Crab Cakes.png",
    category: "food",
    availability: "After Willy's 6-heart event"
  },
  {
    id: "recipe-hashbrowns",
    name: "Hashbrowns Recipe",
    price: 50,
    description: "Crispy and golden-brown!",
    image: "images/cooking/Hashbrowns.png",
    category: "recipe"
  },
  {
    id: "recipe-omelet",
    name: "Omelet Recipe",
    price: 100,
    description: "It's super fluffy.",
    image: "images/cooking/Omelet.png",
    category: "recipe"
  },
  {
    id: "recipe-pancakes",
    name: "Pancakes Recipe",
    price: 100,
    description: "A double stack of fluffy, soft pancakes.",
    image: "images/cooking/Pancakes.png",
    category: "recipe"
  },
  {
    id: "recipe-bread",
    name: "Bread Recipe",
    price: 100,
    description: "A crusty baguette.",
    image: "images/cooking/Bread.png",
    category: "recipe"
  },
  {
    id: "recipe-tortilla",
    name: "Tortilla Recipe",
    price: 100,
    description: "Can be used as a vessel for food or eaten by itself.",
    image: "images/cooking/Tortilla.png",
    category: "recipe"
  },
  {
    id: "recipe-pizza",
    name: "Pizza Recipe",
    price: 150,
    description: "It's popular for all the right reasons.",
    image: "images/cooking/Pizza.png",
    category: "recipe"
  },
  {
    id: "recipe-maki-roll",
    name: "Maki Roll Recipe",
    price: 300,
    description: "Fish and rice wrapped in seaweed.",
    image: "images/cooking/Maki Roll.png",
    category: "recipe"
  },
  {
    id: "recipe-cookie",
    name: "Cookie Recipe",
    price: 300,
    description: "Very chewy.",
    image: "images/cooking/Cookie.png",
    category: "recipe",
    availability: "After Evelyn's 4-heart event"
  },
  {
    id: "recipe-triple-shot-espresso",
    name: "Triple Shot Espresso Recipe",
    price: 5e3,
    description: "It's more potent than regular coffee!",
    image: "images/cooking/Triple Shot Espresso.png",
    category: "recipe"
  }
];

// src/modules/saloon-shop/index.ts
var allSaloonData = saloon_shop_default;
var SaloonQuery = class _SaloonQuery extends QueryBase {
  constructor(data = allSaloonData) {
    super(data);
  }
  /** Filter to food and drink items only. */
  food() {
    return new _SaloonQuery(this.data.filter((item) => item.category === "food"));
  }
  /** Filter to cooking recipe items only. */
  recipes() {
    return new _SaloonQuery(this.data.filter((item) => item.category === "recipe"));
  }
  /** Filter by category. */
  byCategory(category) {
    return new _SaloonQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to items that are always available (no special purchase condition). */
  alwaysAvailable() {
    return new _SaloonQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _SaloonQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _SaloonQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function saloon(source = allSaloonData) {
  return new SaloonQuery(source);
}

// data/krobus-shop.json
var krobus_shop_default = [
  {
    id: "769",
    name: "Void Essence",
    price: 100,
    description: "A shimmering, purple ball of energy emitted from void spirits.",
    image: "images/monsters/monster-loot/Void Essence.png",
    stockType: "permanent",
    stockLimit: 10,
    isRecipe: false
  },
  {
    id: "768",
    name: "Solar Essence",
    price: 80,
    description: "The glowing face is warm to the touch.",
    image: "images/monsters/monster-loot/Solar Essence.png",
    stockType: "permanent",
    stockLimit: 10,
    isRecipe: false
  },
  {
    id: "305",
    name: "Void Egg",
    price: 5e3,
    description: "A jet-black egg with flecks of red. It's warm to the touch.",
    image: "images/animals/produce/Void Egg.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false
  },
  {
    id: "BC34",
    name: "Sign Of The Vessel",
    price: 350,
    description: "A shadow-people decoration placed in a home to bring fortune and fertility.",
    image: "images/shop/Sign Of The Vessel.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false
  },
  {
    id: "F1800",
    name: "Monster Fireplace",
    price: 2e4,
    description: "A warm and welcoming shadow fireplace.",
    image: "images/shop/Monster Fireplace.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false
  },
  {
    id: "434",
    name: "Stardrop",
    price: 2e4,
    description: "A mysterious fruit that empowers those who eat it. The flavor reminds you of something... but you can't remember what.",
    image: "images/shop/Stardrop.png",
    stockType: "permanent",
    stockLimit: 1,
    isRecipe: false,
    availability: "One-time purchase"
  },
  {
    id: "recipe-crystal-floor",
    name: "Crystal Floor Recipe",
    price: 500,
    description: "Tile-like crystal placed on the ground.",
    image: "images/craftable/decor/Crystal Floor.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: true
  },
  {
    id: "recipe-wicked-statue",
    name: "Wicked Statue Recipe",
    price: 1e3,
    description: "It seems to be making a rude gesture.",
    image: "images/craftable/furniture/Wicked Statue.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: true
  },
  {
    id: "ButterflyPowder",
    name: "Butterfly Powder",
    price: 2e4,
    description: "A rare Void ingredient.",
    image: "images/shop/Butterfly Powder.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false
  },
  {
    id: "WizardCatalogue",
    name: "Wizard Catalogue",
    price: 15e4,
    description: "Unlocks the Wizard's complete furniture collection for purchase.",
    image: "images/shop/Wizard Catalogue.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false
  },
  {
    id: "ReturnScepter",
    name: "Return Scepter",
    price: 2e6,
    description: "Wave the scepter to instantly return to your farm.",
    image: "images/shop/Return Scepter.png",
    stockType: "permanent",
    stockLimit: -1,
    isRecipe: false,
    availability: "One-time purchase"
  },
  {
    id: "766",
    name: "Slime",
    price: 10,
    description: "A wad of sticky slime.",
    image: "images/monsters/monster-loot/Slime.png",
    stockType: "daily",
    day: "Monday",
    stockLimit: 50,
    isRecipe: false
  },
  {
    id: "749",
    name: "Omni Geode",
    price: 300,
    description: "A pungent mass that contains a rainbow of crystals. A geologist can crack it open for you.",
    image: "images/minerals/geodes/Omni Geode.png",
    stockType: "daily",
    day: "Tuesday",
    stockLimit: 1,
    isRecipe: false
  },
  {
    id: "770",
    name: "Mixed Seeds",
    price: 30,
    description: "There's a little bit of everything here. Plant them and see what grows!",
    image: "images/mixed-seeds/mixed-seeds.png",
    stockType: "daily",
    day: "Thursday",
    stockLimit: 10,
    isRecipe: false
  },
  {
    id: "645",
    name: "Iridium Sprinkler",
    price: 1e4,
    description: "Waters the 24 adjacent tiles every morning.",
    image: "images/craftable/sprinklers/Iridium Sprinkler.png",
    stockType: "daily",
    day: "Friday",
    stockLimit: 1,
    isRecipe: false
  },
  {
    id: "767",
    name: "Bat Wing",
    price: 30,
    description: "A delicate membrane used for crafting and potion-making.",
    image: "images/monsters/monster-loot/Bat Wing.png",
    stockType: "daily",
    day: "Sunday",
    stockLimit: 10,
    isRecipe: false
  }
];

// src/modules/krobus-shop/index.ts
var allKrobusData = krobus_shop_default;
var KrobusQuery = class _KrobusQuery extends QueryBase {
  constructor(data = allKrobusData) {
    super(data);
  }
  /** Filter to year-round permanent stock only. */
  permanent() {
    return new _KrobusQuery(this.data.filter((item) => item.stockType === "permanent"));
  }
  /** Filter to daily rotating items only. */
  daily() {
    return new _KrobusQuery(this.data.filter((item) => item.stockType === "daily"));
  }
  /** Filter to items available on the given day of the week. */
  byDay(day) {
    return new _KrobusQuery(
      this.data.filter((item) => item.stockType === "permanent" || item.day === day)
    );
  }
  /** Filter to crafting or building recipe items only. */
  recipes() {
    return new _KrobusQuery(this.data.filter((item) => item.isRecipe));
  }
  /** Filter to items that are always available (no special purchase condition). */
  alwaysAvailable() {
    return new _KrobusQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _KrobusQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _KrobusQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function krobus(source = allKrobusData) {
  return new KrobusQuery(source);
}

// data/marnie-shop.json
var marnie_shop_default = [
  {
    id: "178",
    name: "Hay",
    price: 50,
    description: "Feed for your animals. Keep a bin stocked or they'll go hungry.",
    image: "images/shop/Hay.png",
    category: "animal-supply"
  },
  {
    id: "BC104",
    name: "Heater",
    price: 2e3,
    description: "Warms the barn or coop during winter, keeping animals happy despite the cold.",
    image: "images/tools/Heater.png",
    category: "animal-supply"
  },
  {
    id: "TMilkPail",
    name: "Milk Pail",
    price: 1e3,
    description: "Use it on a cow or goat to collect milk.",
    image: "images/tools/Milk Pail.png",
    category: "tool",
    availability: "Unowned only"
  },
  {
    id: "TShears",
    name: "Shears",
    price: 1e3,
    description: "Use these to collect wool from sheep.",
    image: "images/tools/Shears.png",
    category: "tool",
    availability: "Unowned only"
  },
  {
    id: "BC165",
    name: "Auto-Grabber",
    price: 25e3,
    description: "Automatically collects animal products each morning.",
    image: "images/tools/Auto-Grabber.png",
    category: "animal-supply",
    availability: "Farming level 10+"
  },
  {
    id: "BC45",
    name: "Ornamental Hay Bale",
    price: 250,
    description: "A charming hay bale decoration for your farm.",
    image: "images/shop/Ornamental Hay Bale.png",
    category: "furniture"
  },
  {
    id: "BookAnimalCatalogue",
    name: "Animal Catalogue",
    price: 5e3,
    description: "Unlocks a wide selection of animal-themed furniture and decor for purchase.",
    image: "images/special-items/Animal Catalogue.png",
    category: "catalogue",
    availability: "Year 2+"
  },
  {
    id: "928",
    name: "Golden Egg",
    price: 1e5,
    description: "A very rare egg from a very happy chicken.",
    image: "images/animals/produce/Golden Egg.png",
    category: "special",
    availability: "Secret Note #44"
  },
  {
    id: "FCowDecal",
    name: "Cow Decal",
    price: 1e4,
    description: "A decorative cow painting for your home.",
    image: "images/shop/Cow Decal.png",
    category: "furniture",
    availability: "17+ ticket prizes claimed"
  },
  {
    id: "FDoghouse",
    name: "Doghouse",
    price: 1e4,
    description: "A cozy home for your dog.",
    image: "images/shop/Doghouse.png",
    category: "furniture"
  },
  {
    id: "FDarkDoghouse",
    name: "Dark Doghouse",
    price: 1e4,
    description: "A darkly elegant house for your dog.",
    image: "images/shop/Dark Doghouse.png",
    category: "furniture"
  },
  {
    id: "FCatTree",
    name: "Cat Tree",
    price: 1e4,
    description: "A scratching post and perch your cat will love.",
    image: "images/shop/Cat Tree.png",
    category: "furniture"
  },
  {
    id: "FDarkCatTree",
    name: "Dark Cat Tree",
    price: 1e4,
    description: "A dark-themed cat tree for feline elegance.",
    image: "images/shop/Dark Cat Tree.png",
    category: "furniture"
  },
  {
    id: "FBirdHouse",
    name: "Bird House",
    price: 5e3,
    description: "Invites wild birds to nest on your farm.",
    image: "images/shop/Bird House.png",
    category: "furniture"
  }
];

// src/modules/marnie-shop/index.ts
var allMarnieData = marnie_shop_default;
var MarnieQuery = class _MarnieQuery extends QueryBase {
  constructor(data = allMarnieData) {
    super(data);
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _MarnieQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to animal supply items (Hay, Heater, Auto-Grabber). */
  animalSupplies() {
    return new _MarnieQuery(this.data.filter((item) => item.category === "animal-supply"));
  }
  /** Filter to tools (Milk Pail, Shears). */
  tools() {
    return new _MarnieQuery(this.data.filter((item) => item.category === "tool"));
  }
  /** Filter to furniture and decor items. */
  furniture() {
    return new _MarnieQuery(this.data.filter((item) => item.category === "furniture"));
  }
  /** Filter to items with no special purchase condition. */
  alwaysAvailable() {
    return new _MarnieQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _MarnieQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _MarnieQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function marnie(source = allMarnieData) {
  return new MarnieQuery(source);
}

// data/wizard-shop.json
var wizard_shop_default = [
  {
    id: "earth-obelisk",
    name: "Earth Obelisk",
    buildCost: 5e5,
    materials: [
      {
        itemId: "337",
        itemName: "Iridium Bar",
        amount: 10,
        image: "images/minerals/bars/Iridium Bar.png"
      },
      {
        itemId: "86",
        itemName: "Earth Crystal",
        amount: 10,
        image: "images/minerals/foraged-minerals/Earth Crystal.png"
      }
    ],
    description: "Instantly teleports you to the mountain near the mines.",
    image: "images/buildings/obelisks/Earth Obelisk.png"
  },
  {
    id: "water-obelisk",
    name: "Water Obelisk",
    buildCost: 5e5,
    materials: [
      {
        itemId: "337",
        itemName: "Iridium Bar",
        amount: 5,
        image: "images/minerals/bars/Iridium Bar.png"
      },
      { itemId: "372", itemName: "Clam", amount: 10, image: "images/fish/Clam.png" },
      {
        itemId: "393",
        itemName: "Coral",
        amount: 10,
        image: "images/forageables/Coral.png"
      }
    ],
    description: "Instantly teleports you to the beach.",
    image: "images/buildings/obelisks/Water Obelisk.png"
  },
  {
    id: "desert-obelisk",
    name: "Desert Obelisk",
    buildCost: 1e6,
    materials: [
      {
        itemId: "337",
        itemName: "Iridium Bar",
        amount: 20,
        image: "images/minerals/bars/Iridium Bar.png"
      },
      {
        itemId: "88",
        itemName: "Coconut",
        amount: 10,
        image: "images/forageables/Coconut.png"
      },
      {
        itemId: "90",
        itemName: "Cactus Fruit",
        amount: 10,
        image: "images/crops/cactus-fruit/crop.png"
      }
    ],
    description: "Instantly teleports you to the Calico Desert.",
    image: "images/buildings/obelisks/Desert Obelisk.png"
  },
  {
    id: "island-obelisk",
    name: "Island Obelisk",
    buildCost: 1e6,
    materials: [
      {
        itemId: "337",
        itemName: "Iridium Bar",
        amount: 10,
        image: "images/minerals/bars/Iridium Bar.png"
      },
      {
        itemId: "852",
        itemName: "Dragon Tooth",
        amount: 10,
        image: "images/minerals/Dragon Tooth.png"
      },
      {
        itemId: "91",
        itemName: "Banana",
        amount: 10,
        image: "images/trees/banana/harvest.png"
      }
    ],
    description: "Instantly teleports you to Ginger Island.",
    image: "images/buildings/obelisks/Island Obelisk.png",
    availability: "After visiting Ginger Island"
  },
  {
    id: "junimo-hut",
    name: "Junimo Hut",
    buildCost: 2e4,
    materials: [
      {
        itemId: "390",
        itemName: "Stone",
        amount: 200,
        image: "images/forageables/Stone.png"
      },
      {
        itemId: "268",
        itemName: "Starfruit",
        amount: 9,
        image: "images/crops/starfruit/crop.png"
      },
      {
        itemId: "771",
        itemName: "Fiber",
        amount: 100,
        image: "images/crops/fiber/crop.png"
      }
    ],
    description: "Junimos live here and harvest any ripe crops within a wide radius each day.",
    image: "images/buildings/Junimo Hut.png"
  },
  {
    id: "gold-clock",
    name: "Gold Clock",
    buildCost: 1e7,
    materials: [],
    description: "Prevents your farm from accumulating debris and stops fences from decaying.",
    image: "images/buildings/Gold Clock.png"
  }
];

// src/modules/wizard-shop/index.ts
var allWizardData = wizard_shop_default;
var WizardQuery = class _WizardQuery extends QueryBase {
  constructor(data = allWizardData) {
    super(data);
  }
  /** Filter to buildings with no special availability condition. */
  alwaysAvailable() {
    return new _WizardQuery(this.data.filter((b) => b.availability === void 0));
  }
  /** Sort by build cost ascending or descending. */
  sortByCost(order = "asc") {
    return new _WizardQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.buildCost - b.buildCost : b.buildCost - a.buildCost
      )
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _WizardQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function wizard(source = allWizardData) {
  return new WizardQuery(source);
}

// data/willy-shop.json
var willy_shop_default = [
  {
    id: "TBambooPole",
    name: "Bamboo Pole",
    price: 0,
    description: "The most basic fishing rod. Can only use bait.",
    image: "images/tools/fishing-rod/Bamboo Pole.png",
    category: "rod"
  },
  {
    id: "TTrainingRod",
    name: "Training Rod",
    price: 25,
    description: "Limits the fish you can catch, but makes the catching mini-game easier. Incompatible with tackle and bait.",
    image: "images/tools/fishing-rod/Training Rod.png",
    category: "rod"
  },
  {
    id: "219",
    name: "Trout Soup",
    price: 250,
    description: "It's a little bland.",
    image: "images/cooking/Trout Soup.png",
    category: "equipment"
  },
  {
    id: "685",
    name: "Bait",
    price: 5,
    description: "Causes fish to bite faster. Must first be attached to a fishing rod.",
    image: "images/fish/bait/Bait.png",
    category: "bait",
    fishingLevelRequired: 2
  },
  {
    id: "DeluxeBait",
    name: "Deluxe Bait",
    price: 100,
    description: "Causes fish to bite even faster and increases the size of the fishing bar.",
    image: "images/fish/bait/Deluxe Bait.png",
    category: "bait",
    fishingLevelRequired: 4
  },
  {
    id: "TFiberglassRod",
    name: "Fiberglass Rod",
    price: 1800,
    description: "Can use bait. A big upgrade from the bamboo pole.",
    image: "images/tools/fishing-rod/Fiberglass Rod.png",
    category: "rod",
    fishingLevelRequired: 2
  },
  {
    id: "710",
    name: "Crab Pot",
    price: 1500,
    description: "Place it in the water and check back the next day to see what you've trapped.",
    image: "images/craftable/fishing/Crab Pot.png",
    category: "equipment",
    fishingLevelRequired: 3
  },
  {
    id: "686",
    name: "Spinner",
    price: 500,
    description: "The shape makes it spin around in the water. Slightly increases the bite-rate when fishing.",
    image: "images/fish/tackle/Spinner.png",
    category: "tackle",
    fishingLevelRequired: 6
  },
  {
    id: "694",
    name: "Trap Bobber",
    price: 500,
    description: "Causes fish to escape slower when you aren't reeling them in.",
    image: "images/fish/tackle/Trap Bobber.png",
    category: "tackle",
    fishingLevelRequired: 6
  },
  {
    id: "692",
    name: "Lead Bobber",
    price: 200,
    description: "Adds weight to your 'fishing bar', preventing it from bouncing along the bottom.",
    image: "images/fish/tackle/Lead Bobber.png",
    category: "tackle",
    fishingLevelRequired: 6
  },
  {
    id: "SonarBobber",
    name: "Sonar Bobber",
    price: 500,
    description: "Shows what fish is on the line before it's caught.",
    image: "images/fish/tackle/Sonar Bobber.png",
    category: "tackle",
    fishingLevelRequired: 6
  },
  {
    id: "TIridiumRod",
    name: "Iridium Rod",
    price: 7500,
    description: "Can use both bait and tackle.",
    image: "images/tools/fishing-rod/Iridium Rod.png",
    category: "rod",
    fishingLevelRequired: 6
  },
  {
    id: "693",
    name: "Treasure Hunter",
    price: 750,
    description: "Fish don't escape while collecting treasures. Also slightly increases the chance to find treasures.",
    image: "images/fish/tackle/Treasure Hunter.png",
    category: "tackle",
    fishingLevelRequired: 7
  },
  {
    id: "695",
    name: "Cork Bobber",
    price: 750,
    description: "Slightly increases the size of your 'fishing bar'.",
    image: "images/fish/tackle/Cork Bobber.png",
    category: "tackle",
    fishingLevelRequired: 7
  },
  {
    id: "691",
    name: "Barbed Hook",
    price: 1e3,
    description: "Makes your catch more secure, causing the 'fishing bar' to cling to your catch. Works best on slow, weak fish.",
    image: "images/fish/tackle/Barbed Hook.png",
    category: "tackle",
    fishingLevelRequired: 8
  },
  {
    id: "687",
    name: "Dressed Spinner",
    price: 1e3,
    description: "The metal tab and colorful streamers create an enticing spectacle for fish. Increases the bite-rate when fishing.",
    image: "images/fish/tackle/Dressed Spinner.png",
    category: "tackle",
    fishingLevelRequired: 8
  },
  {
    id: "703",
    name: "Magnet",
    price: 1e3,
    description: "Increases the chance of finding treasure while fishing.",
    image: "images/fish/bait/Magnet.png",
    category: "bait",
    fishingLevelRequired: 9
  },
  {
    id: "877",
    name: "Quality Bobber",
    price: 300,
    description: "Boosts the quality of fish that you catch.",
    image: "images/fish/tackle/Quality Bobber.png",
    category: "tackle",
    fishingLevelRequired: 6
  },
  {
    id: "TPan",
    name: "Copper Pan",
    price: 2500,
    description: "Use it in the water to sift for precious ore.",
    image: "images/tools/pan/Copper Pan.png",
    category: "equipment",
    availability: "After completing the Fish Tank bundle"
  },
  {
    id: "BCFishSmoker",
    name: "Fish Smoker",
    price: 1e4,
    description: "Turns fish into smoked fish, which sells for more.",
    image: "images/craftable/artisan-equipment/Fish Smoker.png",
    category: "recipe"
  },
  {
    id: "TAdvancedIridiumRod",
    name: "Advanced Iridium Rod",
    price: 25e3,
    description: "The finest fishing rod available. Can use bait and two tackle at once.",
    image: "images/tools/fishing-rod/Advanced Iridium Rod.png",
    category: "rod",
    availability: "Fishing mastery"
  },
  {
    id: "F2304",
    name: "Large Fish Tank",
    price: 2e3,
    description: "A spacious aquarium to display your prized catches.",
    image: "images/shop/Large Fish Tank.png",
    category: "furniture"
  },
  {
    id: "F2322",
    name: "Small Fish Tank",
    price: 500,
    description: "A compact aquarium for displaying fish.",
    image: "images/shop/Small Fish Tank.png",
    category: "furniture"
  },
  {
    id: "F2502",
    name: "Fisher Double Bed",
    price: 25e3,
    description: "A nautical-themed double bed with a fish motif.",
    image: "images/shop/Fisher Double Bed.png",
    category: "furniture"
  }
];

// src/modules/willy-shop/index.ts
var allWillyData = willy_shop_default;
var WillyQuery = class _WillyQuery extends QueryBase {
  constructor(data = allWillyData) {
    super(data);
  }
  /** Filter to fishing rods only. */
  rods() {
    return new _WillyQuery(this.data.filter((item) => item.category === "rod"));
  }
  /** Filter to bait items only. */
  bait() {
    return new _WillyQuery(this.data.filter((item) => item.category === "bait"));
  }
  /** Filter to tackle items only. */
  tackle() {
    return new _WillyQuery(this.data.filter((item) => item.category === "tackle"));
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _WillyQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to items requiring the given fishing level or lower. */
  byFishingLevel(level) {
    return new _WillyQuery(
      this.data.filter(
        (item) => item.fishingLevelRequired === void 0 || item.fishingLevelRequired <= level
      )
    );
  }
  /** Filter to items with no special purchase condition. */
  alwaysAvailable() {
    return new _WillyQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _WillyQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _WillyQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
  /** Sort by fishing level required (ascending by default). */
  sortByFishingLevel(order = "asc") {
    return new _WillyQuery(
      [...this.data].sort((a, b) => {
        const la = a.fishingLevelRequired ?? 0;
        const lb = b.fishingLevelRequired ?? 0;
        return order === "asc" ? la - lb : lb - la;
      })
    );
  }
};
function willy(source = allWillyData) {
  return new WillyQuery(source);
}

// data/guild-shop.json
var guild_shop_default = [
  {
    id: "W0",
    name: "Rusty Sword",
    price: 250,
    description: "An old, battered sword. It's seen better days.",
    image: "images/weapons/swords/Rusty Sword.png",
    category: "weapon",
    weaponType: "sword"
  },
  {
    id: "W12",
    name: "Wooden Blade",
    price: 250,
    description: "A training weapon made of hardwood.",
    image: "images/weapons/swords/Wooden Blade.png",
    category: "weapon",
    weaponType: "sword"
  },
  {
    id: "W31",
    name: "Femur",
    price: 350,
    description: "A large bone that can be used as a club. Not exactly dignified.",
    image: "images/weapons/clubs/Femur.png",
    category: "weapon",
    weaponType: "club",
    mineLevel: 10
  },
  {
    id: "B507",
    name: "Work Boots",
    price: 700,
    description: "Steel-toed for extra protection.",
    image: "images/footwear/Work Boots.png",
    category: "boots",
    mineLevel: 10
  },
  {
    id: "W17",
    name: "Iron Dirk",
    price: 500,
    description: "A small iron dagger. Quick in a fight.",
    image: "images/weapons/daggers/Iron Dirk.png",
    category: "weapon",
    weaponType: "dagger",
    mineLevel: 15
  },
  {
    id: "W1",
    name: "Silver Saber",
    price: 750,
    description: "A curved sword with a gleaming silver edge.",
    image: "images/weapons/swords/Silver Saber.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 20
  },
  {
    id: "W20",
    name: "Elf Blade",
    price: 750,
    description: "A dainty blade with impressive reach.",
    image: "images/weapons/daggers/Elf Blade.png",
    category: "weapon",
    weaponType: "dagger",
    mineLevel: 20
  },
  {
    id: "W11",
    name: "Steel Smallsword",
    price: 750,
    description: "A sturdy steel sword favored by knights.",
    image: "images/weapons/swords/Steel Smallsword.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 20
  },
  {
    id: "B506",
    name: "Leather Boots",
    price: 500,
    description: "The leather is very supple.",
    image: "images/footwear/Leather Boots.png",
    category: "boots",
    mineLevel: 10
  },
  {
    id: "W43",
    name: "Pirate's Sword",
    price: 850,
    description: "A sword favored by ruthless pirates.",
    image: "images/weapons/swords/Pirate's Sword.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 25
  },
  {
    id: "W44",
    name: "Cutlass",
    price: 1500,
    description: "A broad, curved blade. Light and fast.",
    image: "images/weapons/swords/Cutlass.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 25
  },
  {
    id: "529",
    name: "Amethyst Ring",
    price: 1e3,
    description: "Increases knockback by 10%.",
    image: "images/rings/Amethyst Ring.png",
    category: "ring"
  },
  {
    id: "530",
    name: "Topaz Ring",
    price: 1e3,
    description: "Increases Defense by +1.",
    image: "images/rings/Topaz Ring.png",
    category: "ring"
  },
  {
    id: "W27",
    name: "Wood Mallet",
    price: 2e3,
    description: "A heavy wooden mallet that deals crushing blows.",
    image: "images/weapons/clubs/Wood Mallet.png",
    category: "weapon",
    weaponType: "club",
    mineLevel: 40
  },
  {
    id: "B508",
    name: "Combat Boots",
    price: 1250,
    description: "Reinforced with iron mesh.",
    image: "images/footwear/Combat Boots.png",
    category: "boots",
    mineLevel: 40
  },
  {
    id: "531",
    name: "Aquamarine Ring",
    price: 2500,
    description: "Increases critical strike chance by 10%.",
    image: "images/rings/Aquamarine Ring.png",
    category: "ring",
    mineLevel: 40
  },
  {
    id: "532",
    name: "Jade Ring",
    price: 2500,
    description: "Increases Critical Strike Power by 10%.",
    image: "images/rings/Jade Ring.png",
    category: "ring",
    mineLevel: 40
  },
  {
    id: "W32",
    name: "Slingshot",
    price: 500,
    description: "A simple slingshot. Load it with stones or other ammo.",
    image: "images/weapons/slingshots/Slingshot.png",
    category: "slingshot",
    mineLevel: 40
  },
  {
    id: "W10",
    name: "Claymore",
    price: 2e3,
    description: "A large two-handed sword. Slow but powerful.",
    image: "images/weapons/swords/Claymore.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 45
  },
  {
    id: "B509",
    name: "Tundra Boots",
    price: 750,
    description: "The fuzzy lining keeps your ankles so warm.",
    image: "images/footwear/Tundra Boots.png",
    category: "boots",
    mineLevel: 50
  },
  {
    id: "W7",
    name: "Templar's Blade",
    price: 4e3,
    description: "A sword blessed by an ancient order.",
    image: "images/weapons/swords/Templar's Blade.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 55
  },
  {
    id: "W21",
    name: "Crystal Dagger",
    price: 4500,
    description: "Made from a rare, incredibly sharp crystal.",
    image: "images/weapons/daggers/Crystal Dagger.png",
    category: "weapon",
    weaponType: "dagger",
    mineLevel: 60
  },
  {
    id: "W33",
    name: "Master Slingshot",
    price: 1e3,
    description: "A reinforced slingshot with superior range and power.",
    image: "images/weapons/slingshots/Master Slingshot.png",
    category: "slingshot",
    mineLevel: 70
  },
  {
    id: "W5",
    name: "Bone Sword",
    price: 6e3,
    description: "Fashioned from the bones of a fearsome creature.",
    image: "images/weapons/swords/Bone Sword.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 75
  },
  {
    id: "B511",
    name: "Dark Boots",
    price: 2500,
    description: "Made from thick black leather.",
    image: "images/footwear/Dark Boots.png",
    category: "boots",
    mineLevel: 80
  },
  {
    id: "B512",
    name: "Firewalker Boots",
    price: 2e3,
    description: "It's said these can withstand the hottest magma.",
    image: "images/footwear/Firewalker Boots.png",
    category: "boots",
    mineLevel: 80
  },
  {
    id: "533",
    name: "Emerald Ring",
    price: 5e3,
    description: "Increases Weapon Speed by 10%.",
    image: "images/rings/Emerald Ring.png",
    category: "ring",
    mineLevel: 80
  },
  {
    id: "534",
    name: "Ruby Ring",
    price: 5e3,
    description: "Increases Attack by 10%.",
    image: "images/rings/Ruby Ring.png",
    category: "ring",
    mineLevel: 80
  },
  {
    id: "W50",
    name: "Steel Falchion",
    price: 9e3,
    description: "A fast, curved steel blade.",
    image: "images/weapons/swords/Steel Falchion.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 90
  },
  {
    id: "W8",
    name: "Obsidian Edge",
    price: 9e3,
    description: "The volcanic glass edge is frighteningly sharp.",
    image: "images/weapons/swords/Obsidian Edge.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 90
  },
  {
    id: "B514",
    name: "Space Boots",
    price: 5e3,
    description: "An iridium weave gives them a purple sheen.",
    image: "images/footwear/Space Boots.png",
    category: "boots",
    mineLevel: 110
  },
  {
    id: "W9",
    name: "Lava Katana",
    price: 25e3,
    description: "Forged in the deepest reaches of the volcano.",
    image: "images/weapons/swords/Lava Katana.png",
    category: "weapon",
    weaponType: "sword",
    mineLevel: 120
  },
  {
    id: "441",
    name: "Explosive Ammo",
    price: 300,
    description: "Fired from a Slingshot. Explodes on impact.",
    image: "images/craftable/misc/Explosive Ammo.png",
    category: "ammo",
    availability: "Explosive Ammo recipe known"
  },
  {
    id: "W4",
    name: "Galaxy Sword",
    price: 5e4,
    description: "Crafted from rare extraterrestrial materials.",
    image: "images/weapons/swords/Galaxy Sword.png",
    category: "weapon",
    weaponType: "sword",
    availability: "After obtaining the Galaxy Sword"
  },
  {
    id: "W23",
    name: "Galaxy Dagger",
    price: 35e3,
    description: "A razor-sharp dagger forged from galaxy ore.",
    image: "images/weapons/daggers/Galaxy Dagger.png",
    category: "weapon",
    weaponType: "dagger",
    availability: "After obtaining the Galaxy Sword"
  },
  {
    id: "W29",
    name: "Galaxy Hammer",
    price: 75e3,
    description: "A massive hammer forged from galaxy ore.",
    image: "images/weapons/clubs/Galaxy Hammer.png",
    category: "weapon",
    weaponType: "club",
    availability: "After obtaining the Galaxy Sword"
  },
  {
    id: "FWallSword",
    name: "Wall Sword",
    price: 2e3,
    description: "A decorative sword mounted on a wall plaque.",
    image: "images/shop/Wall Sword.png",
    category: "furniture"
  },
  {
    id: "FDecorativeSword",
    name: "Decorative Sword",
    price: 1e4,
    description: "An ornate sword displayed for its beauty rather than function.",
    image: "images/shop/Decorative Sword.png",
    category: "furniture"
  }
];

// src/modules/guild-shop/index.ts
var allGuildData = guild_shop_default;
var GuildQuery = class _GuildQuery extends QueryBase {
  constructor(data = allGuildData) {
    super(data);
  }
  /** Filter to weapons only. */
  weapons() {
    return new _GuildQuery(this.data.filter((item) => item.category === "weapon"));
  }
  /** Filter to boots only. */
  boots() {
    return new _GuildQuery(this.data.filter((item) => item.category === "boots"));
  }
  /** Filter to rings only. */
  rings() {
    return new _GuildQuery(this.data.filter((item) => item.category === "ring"));
  }
  /** Filter to slingshots only. */
  slingshots() {
    return new _GuildQuery(this.data.filter((item) => item.category === "slingshot"));
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _GuildQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter weapons by weapon type (sword, dagger, or club). */
  byWeaponType(type) {
    return new _GuildQuery(this.data.filter((item) => item.weaponType === type));
  }
  /** Filter to items that unlock at or below the given mine level. */
  byMineLevel(level) {
    return new _GuildQuery(
      this.data.filter((item) => item.mineLevel === void 0 || item.mineLevel <= level)
    );
  }
  /** Filter to items with no special purchase condition. */
  alwaysAvailable() {
    return new _GuildQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _GuildQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _GuildQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
  /** Sort by mine level required (ascending by default). */
  sortByMineLevel(order = "asc") {
    return new _GuildQuery(
      [...this.data].sort((a, b) => {
        const la = a.mineLevel ?? 0;
        const lb = b.mineLevel ?? 0;
        return order === "asc" ? la - lb : lb - la;
      })
    );
  }
};
function guild(source = allGuildData) {
  return new GuildQuery(source);
}

// data/carpenter-shop.json
var carpenter_shop_default = [
  {
    id: "388",
    name: "Wood",
    price: 2,
    description: "A sturdy, fibrous plant material useful in many crafting recipes.",
    image: "images/forageables/Wood.png",
    category: "material",
    isRecipe: false
  },
  {
    id: "390",
    name: "Stone",
    price: 2,
    description: "A common resource used for building and crafting.",
    image: "images/forageables/Stone.png",
    category: "material",
    isRecipe: false
  },
  {
    id: "328",
    name: "Wood Floor",
    price: 100,
    description: "Place on the ground to create a path or flooring.",
    image: "images/craftable/decor/Wood Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "840",
    name: "Rustic Plank Floor",
    price: 200,
    description: "Worn wooden planks give this floor a rustic charm.",
    image: "images/craftable/decor/Rustic Plank Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "329",
    name: "Stone Floor",
    price: 100,
    description: "A stone tile floor. Durable and easy to clean.",
    image: "images/craftable/decor/Stone Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "293",
    name: "Brick Floor",
    price: 500,
    description: "Traditional brick laid in a herringbone pattern.",
    image: "images/craftable/decor/Brick Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "841",
    name: "Stone Walkway Floor",
    price: 200,
    description: "Flat stones arranged into a neat walkway.",
    image: "images/craftable/decor/Stone Walkway Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "415",
    name: "Stepping Stone Path",
    price: 100,
    description: "Irregularly-shaped stepping stones for a natural look.",
    image: "images/craftable/decor/Stepping Stone Path.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "401",
    name: "Straw Floor",
    price: 200,
    description: "A woven straw mat for rustic farm paths.",
    image: "images/craftable/decor/Straw Floor.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "409",
    name: "Crystal Path",
    price: 200,
    description: "A shimmering crystal path that glows softly at night.",
    image: "images/craftable/decor/Crystal Path.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC152",
    name: "Wood Lamp-post",
    price: 50,
    description: "Provides light on your farm at night.",
    image: "images/craftable/lighting/Wood Lamp-post.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC153",
    name: "Iron Lamp-post",
    price: 100,
    description: "An iron lamp-post that provides reliable nighttime lighting.",
    image: "images/craftable/lighting/Iron Lamp-post.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC143",
    name: "Wooden Brazier",
    price: 25,
    description: "A simple wooden torch stand.",
    image: "images/craftable/lighting/Wooden Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC144",
    name: "Stone Brazier",
    price: 40,
    description: "A stone torch stand.",
    image: "images/craftable/lighting/Stone Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC150",
    name: "Barrel Brazier",
    price: 80,
    description: "A burning barrel for rustic outdoor lighting.",
    image: "images/craftable/lighting/Barrel Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC147",
    name: "Stump Brazier",
    price: 80,
    description: "A glowing stump that lights up the night.",
    image: "images/craftable/lighting/Stump Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC145",
    name: "Gold Brazier",
    price: 100,
    description: "A gold-plated torch stand for a touch of luxury.",
    image: "images/craftable/lighting/Gold Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC148",
    name: "Carved Brazier",
    price: 200,
    description: "An intricately carved torch stand.",
    image: "images/craftable/lighting/Carved Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC149",
    name: "Skull Brazier",
    price: 300,
    description: "A skull-shaped torch holder for the daring decorator.",
    image: "images/craftable/lighting/Skull Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BC151",
    name: "Marble Brazier",
    price: 500,
    description: "An elegant marble torch stand.",
    image: "images/craftable/lighting/Marble Brazier.png",
    category: "recipe",
    isRecipe: true
  },
  {
    id: "BCBigChest",
    name: "Big Chest",
    price: 5e3,
    description: "A large chest with more storage than the regular chest.",
    image: "images/craftable/storage/Big Chest.png",
    category: "recipe",
    isRecipe: true
  }
];

// src/modules/carpenter-shop/index.ts
var allCarpenterData = carpenter_shop_default;
var CarpenterQuery = class _CarpenterQuery extends QueryBase {
  constructor(data = allCarpenterData) {
    super(data);
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _CarpenterQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to crafting recipe items only. */
  recipes() {
    return new _CarpenterQuery(this.data.filter((item) => item.isRecipe));
  }
  /** Filter to materials (Wood and Stone). */
  materials() {
    return new _CarpenterQuery(this.data.filter((item) => item.category === "material"));
  }
  /** Filter to items available on the given day of the week. Permanent items (no day set) are always included. */
  byDay(day) {
    return new _CarpenterQuery(
      this.data.filter((item) => item.day === void 0 || item.day === day)
    );
  }
  /** Filter to items always available (not day-specific). */
  permanent() {
    return new _CarpenterQuery(this.data.filter((item) => item.day === void 0));
  }
  /** Filter to items with no special purchase condition. */
  alwaysAvailable() {
    return new _CarpenterQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _CarpenterQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _CarpenterQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function carpenter(source = allCarpenterData) {
  return new CarpenterQuery(source);
}

// data/casino-shop.json
var casino_shop_default = [
  {
    id: "H2",
    name: "Top Hat",
    price: 8e3,
    description: "A distinguished top hat. Very classy.",
    image: "images/hats/Top Hat.png",
    category: "hat"
  },
  {
    id: "BC126",
    name: "Rarecrow",
    price: 1e4,
    description: "This one's shaped like a rare alien. It works just like a regular scarecrow.",
    image: "images/scarecrows/Rarecrow 7.png",
    category: "scarecrow"
  },
  {
    id: "298",
    name: "Hardwood Fence",
    price: 100,
    description: "Lasts much longer than a regular wood fence.",
    image: "images/craftable/fences/Hardwood Fence.png",
    category: "consumable"
  },
  {
    id: "703",
    name: "Magnet",
    price: 1e3,
    description: "Increases the chance of finding treasure while fishing.",
    image: "images/fish/bait/Magnet.png",
    category: "consumable"
  },
  {
    id: "688",
    name: "Warp Totem: Farm",
    price: 1e3,
    description: "Warp directly to your farm. Consumed on use.",
    image: "images/craftable/consumables/Warp Totem Farm.png",
    category: "consumable"
  },
  {
    id: "893",
    name: "Fireworks (Red)",
    price: 200,
    description: "A red firework. Launch into the sky for a dazzling display.",
    image: "images/shop/Fireworks (Red).png",
    category: "consumable"
  },
  {
    id: "894",
    name: "Fireworks (Purple)",
    price: 200,
    description: "A purple firework. Launch into the sky for a dazzling display.",
    image: "images/shop/Fireworks (Purple).png",
    category: "consumable"
  },
  {
    id: "895",
    name: "Fireworks (Green)",
    price: 200,
    description: "A green firework. Launch into the sky for a dazzling display.",
    image: "images/shop/Fireworks (Green).png",
    category: "consumable"
  },
  {
    id: "F1552",
    name: "Primal Motion",
    price: 5e3,
    description: "A vibrant abstract painting full of raw energy.",
    image: "images/shop/Primal Motion.png",
    category: "furniture"
  },
  {
    id: "F1545",
    name: "Burnt Offering",
    price: 4e3,
    description: "An evocative painting with warm, fiery tones.",
    image: "images/shop/Burnt Offering.png",
    category: "furniture"
  },
  {
    id: "F1563",
    name: "Highway 89",
    price: 4e3,
    description: "A painting of an open road stretching into the horizon.",
    image: "images/shop/Highway 89.png",
    category: "furniture"
  },
  {
    id: "F1561",
    name: "Spires",
    price: 3e3,
    description: "A painting of towering spires reaching into the sky.",
    image: "images/shop/Spires.png",
    category: "furniture"
  },
  {
    id: "F2192",
    name: "Modern Double Bed",
    price: 8e3,
    description: "A sleek, modern double bed with a minimalist design.",
    image: "images/shop/Modern Double Bed.png",
    category: "furniture"
  }
];

// src/modules/casino-shop/index.ts
var allCasinoData = casino_shop_default;
var CasinoQuery = class _CasinoQuery extends QueryBase {
  constructor(data = allCasinoData) {
    super(data);
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _CasinoQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to furniture and decoration items. */
  furniture() {
    return new _CasinoQuery(this.data.filter((item) => item.category === "furniture"));
  }
  /** Filter to consumable items (fireworks, magnet, warp totem, hardwood fence). */
  consumables() {
    return new _CasinoQuery(this.data.filter((item) => item.category === "consumable"));
  }
  /** Sort by price in Qi Coins ascending or descending. */
  sortByPrice(order = "asc") {
    return new _CasinoQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _CasinoQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function casino(source = allCasinoData) {
  return new CasinoQuery(source);
}

// data/desert-trader-shop.json
var desert_trader_shop_default = [
  {
    id: "275",
    name: "Artifact Trove",
    description: "The merchant says this came from a distant land... It seems to contain something.",
    image: "images/minerals/geodes/Artifact Trove.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 5
  },
  {
    id: "261",
    name: "Warp Totem: Desert",
    description: "Warp directly to the Calico Desert. Consumed on use.",
    image: "images/craftable/consumables/Warp Totem Desert.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 3
  },
  {
    id: "253",
    name: "Triple Shot Espresso",
    description: "You'll be running all day.",
    image: "images/cooking/Triple Shot Espresso.png",
    tradeItemId: "72",
    tradeItemName: "Diamond",
    tradeItemImage: "images/minerals/gems/Diamond.png",
    tradeAmount: 1
  },
  {
    id: "226",
    name: "Spicy Eel",
    description: "It's really spicy! Be careful.",
    image: "images/cooking/Spicy Eel.png",
    tradeItemId: "64",
    tradeItemName: "Ruby",
    tradeItemImage: "images/minerals/gems/Ruby.png",
    tradeAmount: 1
  },
  {
    id: "288",
    name: "Mega Bomb",
    description: "A powerful bomb with a very large radius.",
    image: "images/craftable/bombs/Mega Bomb.png",
    tradeItemId: "386",
    tradeItemName: "Iridium Ore",
    tradeItemImage: "images/minerals/ore/Iridium Ore.png",
    tradeAmount: 5
  },
  {
    id: "287",
    name: "Bomb",
    description: "Blows up rocks and debris, but watch out.",
    image: "images/craftable/bombs/Bomb.png",
    tradeItemId: "80",
    tradeItemName: "Quartz",
    tradeItemImage: "images/minerals/foraged-minerals/Quartz.png",
    tradeAmount: 5
  },
  {
    id: "recipe-warp-totem-desert",
    name: "Warp Totem: Desert (Recipe)",
    description: "Learn to craft the Warp Totem: Desert.",
    image: "images/craftable/consumables/Warp Totem Desert.png",
    tradeItemId: "337",
    tradeItemName: "Iridium Bar",
    tradeItemImage: "images/minerals/bars/Iridium Bar.png",
    tradeAmount: 10,
    isRecipe: true
  },
  {
    id: "808",
    name: "Void Ghost Pendant",
    description: "A gift for the shadow creature living in your sewer.",
    image: "images/shop/Void Ghost Pendant.png",
    tradeItemId: "769",
    tradeItemName: "Void Essence",
    tradeItemImage: "images/monsters/monster-loot/Void Essence.png",
    tradeAmount: 200,
    availability: "10+ hearts with Krobus; farmhouse upgraded; unengaged/unmarried"
  },
  {
    id: "F1971",
    name: "Butterfly Hutch",
    description: "A magical hutch that attracts colorful butterflies to your home.",
    image: "images/shop/Butterfly Hutch.png",
    tradeItemId: "767",
    tradeItemName: "Bat Wing",
    tradeItemImage: "images/monsters/monster-loot/Bat Wing.png",
    tradeAmount: 200
  },
  {
    id: "H72",
    name: "Green Turban",
    description: "A traditional turban in a deep green color.",
    image: "images/hats/Green Turban.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 50
  },
  {
    id: "H73",
    name: "Magic Cowboy Hat",
    description: "A fanciful cowboy hat with a mystical glow.",
    image: "images/hats/Magic Cowboy Hat.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 333,
    availability: "Odd days of the month"
  },
  {
    id: "H74",
    name: "Magic Turban",
    description: "A turban imbued with ancient magic.",
    image: "images/hats/Magic Turban.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 333,
    availability: "Even days of the month"
  },
  {
    id: "F2508",
    name: "Birch Double Bed",
    description: "A light and airy double bed made from birch wood.",
    image: "images/shop/Birch Double Bed.png",
    tradeItemId: "797",
    tradeItemName: "Pearl",
    tradeItemImage: "images/minerals/Pearl.png",
    tradeAmount: 1
  },
  {
    id: "FMidnightBeachBed",
    name: "Midnight Beach Bed",
    description: "A single bed with a tranquil midnight beach theme.",
    image: "images/shop/Midnight Beach Bed.png",
    tradeItemId: "337",
    tradeItemName: "Iridium Bar",
    tradeItemImage: "images/minerals/bars/Iridium Bar.png",
    tradeAmount: 15
  },
  {
    id: "FMidnightBeachDoubleBed",
    name: "Midnight Beach Double Bed",
    description: "A double bed with a tranquil midnight beach theme.",
    image: "images/shop/Midnight Beach Double Bed.png",
    tradeItemId: "337",
    tradeItemName: "Iridium Bar",
    tradeItemImage: "images/minerals/bars/Iridium Bar.png",
    tradeAmount: 30
  },
  {
    id: "FDarkPiano",
    name: "Dark Piano",
    description: "An elegant piano in matte black. It plays a haunting melody.",
    image: "images/shop/Dark Piano.png",
    tradeItemId: "382",
    tradeItemName: "Coal",
    tradeItemImage: "images/minerals/ore/Coal.png",
    tradeAmount: 999
  },
  {
    id: "178",
    name: "Hay",
    description: "Feed for your animals. Keep a bin stocked or they'll go hungry.",
    image: "images/shop/Hay.png",
    tradeItemId: "749",
    tradeItemName: "Omni Geode",
    tradeItemImage: "images/minerals/geodes/Omni Geode.png",
    tradeAmount: 1,
    day: "Monday"
  },
  {
    id: "771",
    name: "Fiber",
    description: "Raw plant material with a wide variety of uses.",
    image: "images/crops/fiber/crop.png",
    tradeItemId: "390",
    tradeItemName: "Stone",
    tradeItemImage: "images/forageables/Stone.png",
    tradeAmount: 5,
    day: "Tuesday"
  },
  {
    id: "428",
    name: "Cloth",
    description: "A bolt of fine cloth.",
    image: "images/artisan-goods/Cloth.png",
    tradeItemId: "62",
    tradeItemName: "Aquamarine",
    tradeItemImage: "images/minerals/gems/Aquamarine.png",
    tradeAmount: 3,
    day: "Wednesday"
  },
  {
    id: "279",
    name: "Magic Rock Candy",
    description: "Gives a powerful set of buffs for 8 minutes and 24 seconds.",
    image: "images/shop/Magic Rock Candy.png",
    tradeItemId: "74",
    tradeItemName: "Prismatic Shard",
    tradeItemImage: "images/minerals/gems/Prismatic Shard.png",
    tradeAmount: 3,
    day: "Thursday"
  },
  {
    id: "424",
    name: "Cheese",
    description: "It smells great.",
    image: "images/artisan-goods/Cheese.png",
    tradeItemId: "60",
    tradeItemName: "Emerald",
    tradeItemImage: "images/minerals/gems/Emerald.png",
    tradeAmount: 1,
    day: "Friday"
  },
  {
    id: "495",
    name: "Spring Seeds",
    description: "A random assortment of seeds that grow in spring.",
    image: "images/craftable/seeds/Spring Seeds.png",
    tradeItemId: "496",
    tradeItemName: "Summer Seeds",
    tradeItemImage: "images/craftable/seeds/Summer Seeds.png",
    tradeAmount: 2,
    day: "Saturday"
  },
  {
    id: "496",
    name: "Summer Seeds",
    description: "A random assortment of seeds that grow in summer.",
    image: "images/craftable/seeds/Summer Seeds.png",
    tradeItemId: "497",
    tradeItemName: "Fall Seeds",
    tradeItemImage: "images/craftable/seeds/Fall Seeds.png",
    tradeAmount: 2,
    day: "Saturday"
  },
  {
    id: "497",
    name: "Fall Seeds",
    description: "A random assortment of seeds that grow in fall.",
    image: "images/craftable/seeds/Fall Seeds.png",
    tradeItemId: "498",
    tradeItemName: "Winter Seeds",
    tradeItemImage: "images/craftable/seeds/Winter Seeds.png",
    tradeAmount: 2,
    day: "Saturday"
  },
  {
    id: "498",
    name: "Winter Seeds",
    description: "A random assortment of seeds that grow in winter.",
    image: "images/craftable/seeds/Winter Seeds.png",
    tradeItemId: "495",
    tradeItemName: "Spring Seeds",
    tradeItemImage: "images/craftable/seeds/Spring Seeds.png",
    tradeAmount: 2,
    day: "Saturday"
  },
  {
    id: "BC71",
    name: "Staircase",
    description: "Can be placed inside the mines to quickly descend one floor.",
    image: "images/craftable/misc/Staircase.png",
    tradeItemId: "70",
    tradeItemName: "Jade",
    tradeItemImage: "images/minerals/gems/Jade.png",
    tradeAmount: 1,
    day: "Sunday"
  }
];

// src/modules/desert-trader-shop/index.ts
var allDesertTraderData = desert_trader_shop_default;
var DesertTraderQuery = class _DesertTraderQuery extends QueryBase {
  constructor(data = allDesertTraderData) {
    super(data);
  }
  /** Filter to items always in stock (no day restriction). */
  permanent() {
    return new _DesertTraderQuery(this.data.filter((item) => item.day === void 0));
  }
  /** Filter to day-specific rotating items only. */
  daily() {
    return new _DesertTraderQuery(this.data.filter((item) => item.day !== void 0));
  }
  /** Filter to all items available on the given day (permanent + that day's item). */
  byDay(day) {
    return new _DesertTraderQuery(
      this.data.filter((item) => item.day === void 0 || item.day === day)
    );
  }
  /** Filter to recipe items only. */
  recipes() {
    return new _DesertTraderQuery(this.data.filter((item) => item.isRecipe === true));
  }
  /** Filter to items traded for the specified trade item (by item ID). */
  byTradeItem(tradeItemId) {
    return new _DesertTraderQuery(this.data.filter((item) => item.tradeItemId === tradeItemId));
  }
  /** Filter to items with no special availability condition. */
  alwaysAvailable() {
    return new _DesertTraderQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by trade amount ascending or descending. */
  sortByTradeAmount(order = "asc") {
    return new _DesertTraderQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.tradeAmount - b.tradeAmount : b.tradeAmount - a.tradeAmount
      )
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _DesertTraderQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function desertTrader(source = allDesertTraderData) {
  return new DesertTraderQuery(source);
}

// data/oasis-shop.json
var oasis_shop_default = [
  {
    id: "802",
    name: "Cactus Seeds",
    price: 150,
    description: "Plant these in a pot inside or outside during any season.",
    image: "images/crops/cactus-fruit/seed.png",
    category: "seed"
  },
  {
    id: "478",
    name: "Rhubarb Seeds",
    price: 100,
    description: "Plant in spring. Takes 13 days to mature.",
    image: "images/crops/rhubarb/seed.png",
    category: "seed"
  },
  {
    id: "486",
    name: "Starfruit Seeds",
    price: 400,
    description: "Plant in summer. Takes 13 days to mature.",
    image: "images/crops/starfruit/seed.png",
    category: "seed"
  },
  {
    id: "494",
    name: "Beet Seeds",
    price: 20,
    description: "Plant in fall. Takes 6 days to mature.",
    image: "images/crops/beet/seed.png",
    category: "seed"
  },
  {
    id: "FWallCactus",
    name: "Wall Cactus",
    price: 700,
    description: "A small potted cactus that mounts on the wall.",
    image: "images/shop/Wall Cactus.png",
    category: "furniture"
  },
  {
    id: "FCoatStand",
    name: "Coat Stand",
    price: 2e3,
    description: "A freestanding coat rack to organize your outerwear.",
    image: "images/shop/Coat Stand.png",
    category: "furniture"
  },
  {
    id: "FClothesline",
    name: "Clothesline",
    price: 5e3,
    description: "String up some laundry for that homey outdoor feel.",
    image: "images/shop/Clothesline.png",
    category: "furniture"
  },
  {
    id: "MMannequinMale",
    name: "Mannequin (Male)",
    price: 12e3,
    description: "Display your clothing on a male-presenting mannequin.",
    image: "images/shop/Mannequin (Male).png",
    category: "special"
  },
  {
    id: "P0",
    name: "Farmer Pants",
    price: 1e3,
    description: "Comfortable denim overalls with plenty of pockets.",
    image: "images/clothing/Farmer Pants.png",
    category: "clothing"
  },
  {
    id: "88",
    name: "Coconut",
    price: 200,
    description: "A delicious coconut. Very popular.",
    image: "images/forageables/Coconut.png",
    category: "food",
    day: "Monday"
  },
  {
    id: "90",
    name: "Cactus Fruit",
    price: 150,
    description: "The sweet fruit of a cactus. Eaten by the natives of the Calico Desert.",
    image: "images/crops/cactus-fruit/crop.png",
    category: "food",
    day: "Tuesday"
  },
  {
    id: "749",
    name: "Omni Geode",
    price: 500,
    description: "A pungent mass that contains a rainbow of crystals. A geologist can crack it open for you.",
    image: "images/minerals/geodes/Omni Geode.png",
    category: "special",
    day: "Wednesday"
  },
  {
    id: "466",
    name: "Deluxe Speed-Gro",
    price: 80,
    description: "Stimulates crop growth. 25% faster than regular Speed-Gro.",
    image: "images/craftable/fertilizer/Deluxe Speed-Gro.png",
    category: "special",
    day: "Thursday"
  },
  {
    id: "340",
    name: "Honey",
    price: 200,
    description: "It's a sweet syrup produced by bees.",
    image: "images/artisan-goods/Honey.png",
    category: "food",
    day: "Friday"
  },
  {
    id: "371",
    name: "Quality Retaining Soil",
    price: 200,
    description: "This soil has a good chance of staying watered overnight. Mix into tilled soil.",
    image: "images/craftable/fertilizer/Quality Retaining Soil.png",
    category: "special",
    day: "Saturday"
  },
  {
    id: "233",
    name: "Ice Cream",
    price: 240,
    description: "It's the perfect treat on a hot summer day.",
    image: "images/cooking/Ice Cream.png",
    category: "food",
    day: "Sunday"
  }
];

// src/modules/oasis-shop/index.ts
var allOasisData = oasis_shop_default;
var OasisQuery = class _OasisQuery extends QueryBase {
  constructor(data = allOasisData) {
    super(data);
  }
  /** Filter to seeds only. */
  seeds() {
    return new _OasisQuery(this.data.filter((item) => item.category === "seed"));
  }
  /** Filter to food items only. */
  food() {
    return new _OasisQuery(this.data.filter((item) => item.category === "food"));
  }
  /** Filter to clothing items only. */
  clothing() {
    return new _OasisQuery(this.data.filter((item) => item.category === "clothing"));
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _OasisQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to items always in stock (no day restriction). */
  permanent() {
    return new _OasisQuery(this.data.filter((item) => item.day === void 0));
  }
  /** Filter to day-specific rotating items only. */
  daily() {
    return new _OasisQuery(this.data.filter((item) => item.day !== void 0));
  }
  /** Filter to all items available on the given day (permanent + that day's item). */
  byDay(day) {
    return new _OasisQuery(this.data.filter((item) => item.day === void 0 || item.day === day));
  }
  /** Filter to items with no special purchase condition. */
  alwaysAvailable() {
    return new _OasisQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _OasisQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _OasisQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function oasis(source = allOasisData) {
  return new OasisQuery(source);
}

// data/volcano-shop.json
var volcano_shop_default = [
  {
    id: "B853",
    name: "Cinderclown Shoes",
    price: 100,
    currency: "cinder-shard",
    description: "These magic shoes belonged to a famous Dwarvish jester.",
    image: "images/footwear/Cinderclown Shoes.png",
    category: "footwear"
  },
  {
    id: "Book_Diamonds",
    name: "The Diamond Hunter",
    price: 10,
    currency: "diamond",
    description: "All stones have a chance to drop a diamond when mined by hand.",
    image: "images/special-items/The Diamond Hunter.png",
    category: "book",
    availability: "Once per save"
  },
  {
    id: "286",
    name: "Cherry Bomb",
    price: 450,
    currency: "gold",
    description: "Generates a small explosion. Stand back!",
    image: "images/craftable/bombs/Cherry Bomb.png",
    category: "consumable"
  },
  {
    id: "287",
    name: "Bomb",
    price: 1e3,
    currency: "gold",
    description: "Generates an explosion. Watch out!",
    image: "images/craftable/bombs/Bomb.png",
    category: "consumable"
  },
  {
    id: "288",
    name: "Mega Bomb",
    price: 1600,
    currency: "gold",
    description: "Generates a powerful explosion. Use with extreme caution.",
    image: "images/craftable/bombs/Mega Bomb.png",
    category: "consumable"
  },
  {
    id: "244",
    name: "Roots Platter",
    price: 1200,
    currency: "gold",
    description: "This'll stick to your ribs.",
    image: "images/cooking/Roots Platter.png",
    category: "food",
    availability: "50% daily chance"
  },
  {
    id: "237",
    name: "Super Meal",
    price: 1200,
    currency: "gold",
    description: "The name says it all.",
    image: "images/cooking/Super Meal.png",
    category: "food",
    availability: "50% daily chance"
  },
  {
    id: "H77",
    name: "Pink Bow",
    price: 1e4,
    currency: "gold",
    description: "This huge bow makes quite a statement!",
    image: "images/hats/Pink Bow.png",
    category: "hat"
  },
  {
    id: "886",
    name: "Warp Totem: Island",
    price: 1e4,
    currency: "gold",
    description: "Warps you to your island farm. Consumed on use.",
    image: "images/craftable/consumables/Warp Totem Island.png",
    category: "consumable"
  },
  {
    id: "903",
    name: "Ginger Ale",
    price: 1e3,
    currency: "gold",
    description: "The carbonated ginger creates a unique sensation.",
    image: "images/cooking/Ginger Ale.png",
    category: "food"
  }
];

// src/modules/volcano-shop/index.ts
var allVolcanoShopData = volcano_shop_default;
var VolcanoShopQuery = class _VolcanoShopQuery extends QueryBase {
  constructor(data = allVolcanoShopData) {
    super(data);
  }
  /** Filter to items purchased with the specified currency. */
  byCurrency(currency) {
    return new _VolcanoShopQuery(this.data.filter((item) => item.currency === currency));
  }
  /** Filter to items purchased with gold. */
  goldItems() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.currency === "gold"));
  }
  /** Filter to items purchased with Cinder Shards. */
  cinderShardItems() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.currency === "cinder-shard"));
  }
  /** Filter to items purchased with Diamonds. */
  diamondItems() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.currency === "diamond"));
  }
  /** Filter by item category. */
  byCategory(category) {
    return new _VolcanoShopQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to consumable items only. */
  consumables() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.category === "consumable"));
  }
  /** Filter to food items only. */
  food() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.category === "food"));
  }
  /** Filter to items with no special availability condition. */
  alwaysAvailable() {
    return new _VolcanoShopQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _VolcanoShopQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _VolcanoShopQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function volcanoShop(source = allVolcanoShopData) {
  return new VolcanoShopQuery(source);
}

// data/island-trader-shop.json
var island_trader_shop_default = [
  {
    id: "688",
    name: "Warp Totem: Farm",
    description: "Warps you to your farm. Consumed on use.",
    image: "images/craftable/consumables/Warp Totem Farm.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 5
  },
  {
    id: "831",
    name: "Taro Tuber",
    description: "Plant in spring, summer, or fall. Takes 10 days to mature.",
    image: "images/crops/taro-root/seed.png",
    tradeItemId: "881",
    tradeItemName: "Bone Fragment",
    tradeItemImage: "images/minerals/resources/Bone Fragment.png",
    tradeAmount: 2
  },
  {
    id: "833",
    name: "Pineapple Seeds",
    description: "Plant in summer. Takes 14 days to mature.",
    image: "images/crops/pineapple/seed.png",
    tradeItemId: "851",
    tradeItemName: "Magma Cap",
    tradeItemImage: "images/forageables/Magma Cap.png",
    tradeAmount: 1
  },
  {
    id: "791",
    name: "Golden Coconut",
    description: "A perfectly round coconut. It may contain something special.",
    image: "images/minerals/geodes/Golden Coconut.png",
    tradeItemId: "88",
    tradeItemName: "Coconut",
    tradeItemImage: "images/forageables/Coconut.png",
    tradeAmount: 10,
    availability: "After cracking a Golden Coconut"
  },
  {
    id: "F2326",
    name: "Tropical TV",
    description: "A television set with a tropical theme.",
    image: "images/shop/Tropical TV.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 30
  },
  {
    id: "F2331",
    name: "Jungle Torch",
    description: "A torch made from island materials.",
    image: "images/shop/Jungle Torch.png",
    tradeItemId: "848",
    tradeItemName: "Cinder Shard",
    tradeItemImage: "images/minerals/foraged-minerals/Cinder Shard.png",
    tradeAmount: 5
  },
  {
    id: "69",
    name: "Banana Sapling",
    description: "Plant this sapling to grow a Banana Tree. Takes 28 days to mature.",
    image: "images/trees/banana/seed.png",
    tradeItemId: "852",
    tradeItemName: "Dragon Tooth",
    tradeItemImage: "images/minerals/Dragon Tooth.png",
    tradeAmount: 5
  },
  {
    id: "835",
    name: "Mango Sapling",
    description: "Plant this sapling to grow a Mango Tree. Takes 28 days to mature.",
    image: "images/trees/mango/seed.png",
    tradeItemId: "719",
    tradeItemName: "Mussel",
    tradeItemImage: "images/fish/Mussel.png",
    tradeAmount: 75
  },
  {
    id: "F2496",
    name: "Wild Double Bed",
    description: "A rustic double bed crafted from island materials.",
    image: "images/shop/Wild Double Bed.png",
    tradeItemId: "848",
    tradeItemName: "Cinder Shard",
    tradeItemImage: "images/minerals/foraged-minerals/Cinder Shard.png",
    tradeAmount: 100
  },
  {
    id: "F2176",
    name: "Tropical Bed",
    description: "A cozy tropical bed.",
    image: "images/shop/Tropical Bed.png",
    tradeItemId: "829",
    tradeItemName: "Ginger",
    tradeItemImage: "images/forageables/Ginger.png",
    tradeAmount: 20
  },
  {
    id: "292",
    name: "Mahogany Seed",
    description: "Plant this to grow a Mahogany Tree.",
    image: "images/trees/mahogany/seed.png",
    tradeItemId: "836",
    tradeItemName: "Stingray",
    tradeItemImage: "images/fish/Stingray.png",
    tradeAmount: 1
  },
  {
    id: "P7",
    name: "Luau Skirt",
    description: "A colorful skirt perfect for island festivities.",
    image: "images/clothing/Luau Skirt.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 50
  },
  {
    id: "904",
    name: "Banana Pudding",
    description: "It smells like paradise.",
    image: "images/cooking/Banana Pudding.png",
    tradeItemId: "881",
    tradeItemName: "Bone Fragment",
    tradeItemImage: "images/minerals/resources/Bone Fragment.png",
    tradeAmount: 30,
    isRecipe: true
  },
  {
    id: "920",
    name: "Deluxe Retaining Soil",
    description: "This soil has a good chance of staying watered overnight.",
    image: "images/craftable/fertilizer/Deluxe Retaining Soil.png",
    tradeItemId: "848",
    tradeItemName: "Cinder Shard",
    tradeItemImage: "images/minerals/foraged-minerals/Cinder Shard.png",
    tradeAmount: 50,
    isRecipe: true
  },
  {
    id: "F134",
    name: "Tropical Chair",
    description: "A comfortable chair with a tropical design.",
    image: "images/shop/Tropical Chair.png",
    tradeItemId: "837",
    tradeItemName: "Lionfish",
    tradeItemImage: "images/fish/Lionfish.png",
    tradeAmount: 1,
    availability: "Even days of month"
  },
  {
    id: "H79",
    name: "Small Cap",
    description: "It's a more aerodynamic style of cap.",
    image: "images/hats/Small Cap.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 30,
    day: "Monday"
  },
  {
    id: "F2393",
    name: "Palm Wall Ornament",
    description: "A decorative wall piece made from island materials.",
    image: "images/shop/Palm Wall Ornament.png",
    tradeItemId: "832",
    tradeItemName: "Pineapple",
    tradeItemImage: "images/crops/pineapple/crop.png",
    tradeAmount: 1,
    day: "Tuesday"
  },
  {
    id: "H80",
    name: "Bluebird Mask",
    description: "Wear this to look just like your favorite island trader.",
    image: "images/hats/Bluebird Mask.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 30,
    day: "Wednesday"
  },
  {
    id: "F2329",
    name: "'Volcano' Photo",
    description: "A framed photo of the volcano.",
    image: "images/shop/'Volcano' Photo.png",
    tradeItemId: "834",
    tradeItemName: "Mango",
    tradeItemImage: "images/trees/mango/crop.png",
    tradeAmount: 5,
    day: "Thursday"
  },
  {
    id: "H81",
    name: "Deluxe Cowboy Hat",
    description: "A cowboy hat with a more extreme shape.",
    image: "images/hats/Deluxe Cowboy Hat.png",
    tradeItemId: "830",
    tradeItemName: "Taro Root",
    tradeItemImage: "images/crops/taro-root/crop.png",
    tradeAmount: 30,
    day: "Friday"
  },
  {
    id: "F1228",
    name: "Oceanic Rug",
    description: "A beautiful rug with an ocean pattern.",
    image: "images/shop/Oceanic Rug.png",
    tradeItemId: "838",
    tradeItemName: "Blue Discus",
    tradeItemImage: "images/fish/Blue Discus.png",
    tradeAmount: 3,
    day: "Saturday"
  },
  {
    id: "F2180",
    name: "Tropical Double Bed",
    description: "A cozy tropical double bed.",
    image: "images/shop/Tropical Double Bed.png",
    tradeItemId: "91",
    tradeItemName: "Banana",
    tradeItemImage: "images/trees/banana/crop.png",
    tradeAmount: 5,
    day: "Sunday"
  },
  {
    id: "896",
    name: "Galaxy Soul",
    description: "A shard of the galaxy. Can be used to upgrade weapons.",
    image: "images/shop/Galaxy Soul.png",
    tradeItemId: "910",
    tradeItemName: "Radioactive Bar",
    tradeItemImage: "images/minerals/bars/Radioactive Bar.png",
    tradeAmount: 10,
    availability: "Last day of season"
  }
];

// src/modules/island-trader-shop/index.ts
var allIslandTraderData = island_trader_shop_default;
var IslandTraderQuery = class _IslandTraderQuery extends QueryBase {
  constructor(data = allIslandTraderData) {
    super(data);
  }
  /** Filter to items always in stock (no day restriction and no special availability). */
  permanent() {
    return new _IslandTraderQuery(
      this.data.filter((item) => item.day === void 0 && item.availability === void 0)
    );
  }
  /** Filter to day-specific rotating items only. */
  daily() {
    return new _IslandTraderQuery(this.data.filter((item) => item.day !== void 0));
  }
  /** Filter to all items available on the given day (permanent + that day's item). */
  byDay(day) {
    return new _IslandTraderQuery(
      this.data.filter((item) => item.day === void 0 || item.day === day)
    );
  }
  /** Filter to recipe items only. */
  recipes() {
    return new _IslandTraderQuery(this.data.filter((item) => item.isRecipe === true));
  }
  /** Filter to items traded for the specified trade item (by item ID). */
  byTradeItem(tradeItemId) {
    return new _IslandTraderQuery(this.data.filter((item) => item.tradeItemId === tradeItemId));
  }
  /** Filter to items with no special availability condition. */
  alwaysAvailable() {
    return new _IslandTraderQuery(this.data.filter((item) => item.availability === void 0));
  }
  /** Sort by trade amount ascending or descending. */
  sortByTradeAmount(order = "asc") {
    return new _IslandTraderQuery(
      [...this.data].sort(
        (a, b) => order === "asc" ? a.tradeAmount - b.tradeAmount : b.tradeAmount - a.tradeAmount
      )
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _IslandTraderQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function islandTrader(source = allIslandTraderData) {
  return new IslandTraderQuery(source);
}

// data/field-office.json
var field_office_default = [
  {
    id: "large-animal",
    name: "Large Animal",
    reward: {
      goldenWalnuts: 6,
      item: {
        id: "69",
        name: "Banana Sapling",
        image: "images/trees/banana/seed.png"
      }
    },
    donations: [
      {
        id: "820",
        name: "Fossilized Skull",
        description: "The skull of a large, ancient creature.",
        image: "images/artifacts/field-office/Fossilized Skull.png",
        collection: "large-animal",
        quantity: 1
      },
      {
        id: "821",
        name: "Fossilized Spine",
        description: "A fossilized spinal segment from a large ancient creature.",
        image: "images/artifacts/field-office/Fossilized Spine.png",
        collection: "large-animal",
        quantity: 1
      },
      {
        id: "824",
        name: "Fossilized Ribs",
        description: "Large rib bones from an ancient creature.",
        image: "images/artifacts/field-office/Fossilized Ribs.png",
        collection: "large-animal",
        quantity: 1
      },
      {
        id: "823",
        name: "Fossilized Leg",
        description: "Part of a fossilized leg from a large, ancient creature.",
        image: "images/artifacts/field-office/Fossilized Leg.png",
        collection: "large-animal",
        quantity: 2
      },
      {
        id: "822",
        name: "Fossilized Tail",
        description: "The fossilized tail of a large, ancient creature.",
        image: "images/artifacts/field-office/Fossilized Tail.png",
        collection: "large-animal",
        quantity: 1
      }
    ]
  },
  {
    id: "snake",
    name: "Snake",
    reward: {
      goldenWalnuts: 3,
      item: {
        id: "835",
        name: "Mango Sapling",
        image: "images/trees/mango/seed.png"
      }
    },
    donations: [
      {
        id: "825",
        name: "Snake Skull",
        description: "The skull of a large, ancient snake.",
        image: "images/artifacts/field-office/Snake Skull.png",
        collection: "snake",
        quantity: 1
      },
      {
        id: "826",
        name: "Snake Vertebrae",
        description: "A fossilized vertebra from a large snake.",
        image: "images/artifacts/field-office/Snake Vertebrae.png",
        collection: "snake",
        quantity: 2
      }
    ]
  },
  {
    id: "mummified-frog",
    name: "Mummified Frog",
    reward: {
      goldenWalnuts: 1
    },
    donations: [
      {
        id: "828",
        name: "Mummified Frog",
        description: "An ancient frog preserved in a mysterious way.",
        image: "images/artifacts/field-office/Mummified Frog.png",
        collection: "mummified-frog",
        quantity: 1
      }
    ]
  },
  {
    id: "mummified-bat",
    name: "Mummified Bat",
    reward: {
      goldenWalnuts: 1
    },
    donations: [
      {
        id: "827",
        name: "Mummified Bat",
        description: "An ancient bat preserved in a mysterious way.",
        image: "images/artifacts/field-office/Mummified Bat.png",
        collection: "mummified-bat",
        quantity: 1
      }
    ]
  }
];

// src/modules/field-office/index.ts
var allFieldOfficeData = field_office_default;
var allDonations = allFieldOfficeData.flatMap((c) => c.donations);
var FieldOfficeQuery = class _FieldOfficeQuery extends QueryBase {
  constructor(data = allFieldOfficeData) {
    super(data);
  }
  /** Filter to a specific collection by ID. */
  byCollection(id) {
    return new _FieldOfficeQuery(this.data.filter((c) => c.id === id));
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _FieldOfficeQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
var FieldOfficeDonationQuery = class _FieldOfficeDonationQuery extends QueryBase {
  constructor(data = allDonations) {
    super(data);
  }
  /** Filter to donations belonging to the specified collection. */
  byCollection(id) {
    return new _FieldOfficeDonationQuery(this.data.filter((d) => d.collection === id));
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _FieldOfficeDonationQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function fieldOffice(source = allFieldOfficeData) {
  return new FieldOfficeQuery(source);
}
function fieldOfficeDonations(source = allDonations) {
  return new FieldOfficeDonationQuery(source);
}

// src/modules/grandpa/index.ts
var MAX_SCORE = 21;
var EARNINGS_TIERS = [
  { threshold: 1e6, points: 7 },
  { threshold: 5e5, points: 5 },
  { threshold: 3e5, points: 4 },
  { threshold: 2e5, points: 3 },
  { threshold: 1e5, points: 2 },
  { threshold: 5e4, points: 1 }
];
function candlesForScore(score) {
  if (score >= 12) return 4;
  if (score >= 8) return 3;
  if (score >= 4) return 2;
  return 1;
}
function entry(criterion, points, maxPoints, category) {
  return { criterion, points, maxPoints, category };
}
var GrandpaEvaluator = class {
  /**
   * Calculate the Grandpa evaluation result for the given input.
   * Returns the total score (0–21), candle count (1–4), and a full breakdown
   * of points earned per criterion.
   */
  evaluate(input) {
    const breakdown = [];
    const earningsTier = EARNINGS_TIERS.find((t) => input.totalEarnings >= t.threshold);
    breakdown.push(entry("Total Earnings", earningsTier?.points ?? 0, 7, "earnings"));
    breakdown.push(
      entry("Total Skill Levels \u226530", input.totalSkillLevels >= 30 ? 1 : 0, 1, "skills")
    );
    breakdown.push(
      entry("Total Skill Levels \u226550", input.totalSkillLevels >= 50 ? 1 : 0, 1, "skills")
    );
    breakdown.push(
      entry("A Complete Collection", input.museumCompleted ? 1 : 0, 1, "achievements")
    );
    breakdown.push(entry("Master Angler", input.masterAngler ? 1 : 0, 1, "achievements"));
    breakdown.push(entry("Full Shipment", input.fullShipment ? 1 : 0, 1, "achievements"));
    breakdown.push(entry("Married with Kitchen & Nursery", input.married ? 1 : 0, 1, "friendship"));
    breakdown.push(
      entry("5+ Villagers at 8 Hearts", input.villagersAt8Hearts >= 5 ? 1 : 0, 1, "friendship")
    );
    breakdown.push(
      entry("10+ Villagers at 8 Hearts", input.villagersAt8Hearts >= 10 ? 1 : 0, 1, "friendship")
    );
    breakdown.push(entry("Pet at Max Friendship", input.petFriendship ? 1 : 0, 1, "friendship"));
    breakdown.push(
      entry(
        "Community Center Completed",
        input.communityCenterCompleted ? 1 : 0,
        1,
        "community-center"
      )
    );
    breakdown.push(
      entry(
        "Community Center Ceremony Attended",
        input.communityCenterCeremonyAttended ? 2 : 0,
        2,
        "community-center"
      )
    );
    breakdown.push(entry("Skull Key Obtained", input.skullKeyObtained ? 1 : 0, 1, "exploration"));
    breakdown.push(entry("Rusty Key Obtained", input.rustyKeyObtained ? 1 : 0, 1, "exploration"));
    const score = breakdown.reduce((sum, e) => sum + e.points, 0);
    return {
      score,
      maxScore: MAX_SCORE,
      candles: candlesForScore(score),
      breakdown
    };
  }
};
function grandpaEvaluator() {
  return new GrandpaEvaluator();
}

// data/dwarf-shop.json
var dwarf_shop_default = [
  {
    id: "286",
    name: "Cherry Bomb",
    description: "Generates a small explosion. Stand back!",
    price: 450,
    image: "images/craftable/bombs/Cherry Bomb.png",
    category: "explosive"
  },
  {
    id: "331",
    name: "Weathered Floor",
    description: "It's a recipe for Weathered Floor.",
    price: 500,
    image: "images/craftable/decor/Weathered Floor.png",
    category: "recipe"
  },
  {
    id: "32",
    name: "Stone Cairn",
    description: "A decorative piece for your farm.",
    price: 200,
    image: "images/craftable/decor/Stone Cairn.png",
    category: "decoration"
  },
  {
    id: "243",
    name: "Miner's Treat",
    description: "This should keep your energy up.",
    price: 1e3,
    image: "images/cooking/Miner's Treat.png",
    category: "food"
  },
  {
    id: "287",
    name: "Bomb",
    description: "Generates an explosion. Watch out!",
    price: 1e3,
    image: "images/craftable/bombs/Bomb.png",
    category: "explosive"
  },
  {
    id: "288",
    name: "Mega Bomb",
    description: "Generates a powerful explosion. Use with extreme caution.",
    price: 1600,
    image: "images/craftable/bombs/Mega Bomb.png",
    category: "explosive"
  },
  {
    id: "773",
    name: "Life Elixir",
    description: "Restores health to full.",
    price: 2e3,
    image: "images/craftable/edible-items/Life Elixir.png",
    category: "consumable"
  },
  {
    id: "138",
    name: "Rarecrow #6",
    description: "Collect 8 rarecrows to get a gift from Mayor Lewis.",
    price: 2500,
    image: "images/scarecrows/Rarecrow 6.png",
    category: "scarecrow"
  },
  {
    id: "772",
    name: "Oil of Garlic",
    description: "Drink this and weaker monsters will avoid you.",
    price: 3e3,
    image: "images/craftable/edible-items/Oil of Garlic.png",
    category: "consumable"
  },
  {
    id: "Book_Bombs",
    name: "Dwarvish Safety Manual",
    description: "Bombs deal 25% less damage to you.",
    price: 4e3,
    image: "images/special-items/Dwarvish Safety Manual.png",
    category: "book"
  },
  {
    id: "BigStoneChest",
    name: "Big Stone Chest",
    description: "A large stone chest for extra storage space.",
    price: 5e3,
    image: "images/craftable/storage/Big Stone Chest.png",
    category: "recipe"
  }
];

// src/modules/dwarf-shop/index.ts
var allDwarfShopData = dwarf_shop_default;
var DwarfShopQuery = class _DwarfShopQuery extends QueryBase {
  constructor(data = allDwarfShopData) {
    super(data);
  }
  /** Filter to items in the given category. */
  byCategory(category) {
    return new _DwarfShopQuery(this.data.filter((item) => item.category === category));
  }
  /** Filter to explosive items (Cherry Bomb, Bomb, Mega Bomb). */
  explosives() {
    return new _DwarfShopQuery(this.data.filter((item) => item.category === "explosive"));
  }
  /** Filter to consumable items (Life Elixir, Oil of Garlic). */
  consumables() {
    return new _DwarfShopQuery(this.data.filter((item) => item.category === "consumable"));
  }
  /** Filter to crafting recipe items. */
  recipes() {
    return new _DwarfShopQuery(this.data.filter((item) => item.category === "recipe"));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _DwarfShopQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort by name alphabetically. */
  sortByName(order = "asc") {
    return new _DwarfShopQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function dwarfShop(source = allDwarfShopData) {
  return new DwarfShopQuery(source);
}

// data/locations.json
var locations_default = [
  {
    id: "pelican-town",
    name: "Pelican Town",
    type: "location",
    category: "The Valley",
    image: "images/locations/Pelican Town.png",
    openHours: null,
    closed: [],
    address: null,
    occupants: [
      "Pierre",
      "Caroline",
      "Abigail",
      "Harvey",
      "Maru",
      "Gus",
      "Emily",
      "Haley",
      "Sam",
      "Alex",
      "Jodi",
      "Clint",
      "Morris",
      "Lewis",
      "Penny",
      "Vincent",
      "Jas",
      "George",
      "Evelyn"
    ],
    shop: null
  },
  {
    id: "blacksmith",
    name: "Blacksmith",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Blacksmith.png",
    openHours: {
      open: "9:00",
      close: "4:00"
    },
    closed: ["Friday"],
    address: "Southeast Pelican Town",
    occupants: ["Clint"],
    shop: "blacksmith-shop"
  },
  {
    id: "community-center",
    name: "Community Center",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Community Center.png",
    openHours: null,
    closed: [],
    address: "North Pelican Town",
    occupants: ["Junimos"],
    shop: null
  },
  {
    id: "harveys-clinic",
    name: "Harvey's Clinic",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Harvey's Clinic.png",
    openHours: {
      open: "9:00",
      close: "3:00"
    },
    closed: [],
    address: "Center Pelican Town",
    occupants: ["Harvey", "Maru"],
    shop: "medical-supplies-shop"
  },
  {
    id: "bookseller",
    name: "Bookseller",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Bookseller.png",
    openHours: null,
    closed: [],
    address: "Across the river, above JojaMart",
    occupants: ["Marcello"],
    shop: "bookseller-shop"
  },
  {
    id: "jojamart",
    name: "JojaMart",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/JojaMart.png",
    openHours: {
      open: "9:00",
      close: "11:00"
    },
    closed: [],
    address: "Northeast Pelican Town",
    occupants: ["Morris", "Shane", "Sam"],
    shop: "joja-shop"
  },
  {
    id: "museum",
    name: "Museum",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Museum.png",
    openHours: {
      open: "8:00",
      close: "6:00"
    },
    closed: [],
    address: "East Pelican Town",
    occupants: ["Gunther"],
    shop: null
  },
  {
    id: "pierres-general-store",
    name: "Pierre's General Store",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/Pierre's General Store.png",
    openHours: {
      open: "9:00",
      close: "5:00"
    },
    closed: ["Wednesday"],
    address: "North Pelican Town",
    occupants: ["Pierre", "Caroline", "Abigail"],
    shop: "pierre-shop"
  },
  {
    id: "the-stardrop-saloon",
    name: "The Stardrop Saloon",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/The Stardrop Saloon.png",
    openHours: {
      open: "12:00",
      close: "12:00"
    },
    closed: [],
    address: "Center Pelican Town",
    occupants: ["Gus"],
    shop: "saloon-shop"
  },
  {
    id: "the-sewers",
    name: "The Sewers",
    type: "building",
    category: "Pelican Town",
    image: "images/locations/The Sewers.png",
    openHours: null,
    closed: [],
    address: "South Pelican Town (sewer cover) or south Cindersap Forest (grates)",
    occupants: ["Krobus"],
    shop: "krobus-shop"
  },
  {
    id: "cindersap-forest",
    name: "Cindersap Forest",
    type: "location",
    category: "The Valley",
    image: "images/locations/Cindersap Forest.png",
    openHours: null,
    closed: [],
    address: "West of Pelican Town",
    occupants: ["Marnie", "Jas", "Shane", "Leah", "Wizard", "Hat Mouse", "Traveling Merchant"],
    shop: null
  },
  {
    id: "marnies-ranch",
    name: "Marnie's Ranch",
    type: "building",
    category: "Cindersap Forest",
    image: "images/locations/Marnie's Ranch.png",
    openHours: {
      open: "9:00",
      close: "4:00"
    },
    closed: ["Monday", "Tuesday"],
    address: "Northeast Cindersap Forest",
    occupants: ["Marnie", "Jas", "Shane"],
    shop: "marnie-shop"
  },
  {
    id: "abandoned-house",
    name: "Abandoned House",
    type: "building",
    category: "Cindersap Forest",
    image: "images/locations/Abandoned House.png",
    openHours: null,
    closed: [],
    address: "Cindersap Forest",
    occupants: ["Hat Mouse"],
    shop: "hats"
  },
  {
    id: "secret-woods",
    name: "Secret Woods",
    type: "location",
    category: "Cindersap Forest",
    image: "images/locations/Secret Woods.png",
    openHours: null,
    closed: [],
    address: "Northwest Cindersap Forest",
    occupants: [],
    shop: null
  },
  {
    id: "traveling-cart",
    name: "Traveling Cart",
    type: "building",
    category: "Cindersap Forest",
    image: "images/locations/Traveling Cart.png",
    openHours: {
      open: "6:00",
      close: "8:00"
    },
    closed: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    address: "South Cindersap Forest",
    occupants: ["Traveling Merchant"],
    shop: null
  },
  {
    id: "wizards-tower",
    name: "Wizard's Tower",
    type: "building",
    category: "Cindersap Forest",
    image: "images/locations/Wizard's Tower.png",
    openHours: {
      open: "6:00",
      close: "11:00"
    },
    closed: [],
    address: "West Cindersap Forest",
    occupants: ["Wizard"],
    shop: "wizard-shop"
  },
  {
    id: "the-beach",
    name: "The Beach",
    type: "location",
    category: "Beyond the Valley",
    image: "images/locations/The Beach.png",
    openHours: null,
    closed: [],
    address: "South of Pelican Town",
    occupants: ["Elliott", "Willy", "Old Mariner"],
    shop: null
  },
  {
    id: "fish-shop",
    name: "Fish Shop",
    type: "building",
    category: "The Beach",
    image: "images/locations/Fish Shop.png",
    openHours: {
      open: "9:00",
      close: "5:00"
    },
    closed: ["Saturday"],
    address: "Docks, south of Pelican Town",
    occupants: ["Willy"],
    shop: "willy-shop"
  },
  {
    id: "the-mountain",
    name: "The Mountain",
    type: "location",
    category: "Beyond the Valley",
    image: "images/locations/The Mountain.png",
    openHours: null,
    closed: [],
    address: "North of Pelican Town",
    occupants: ["Robin", "Demetrius", "Maru", "Sebastian", "Marlon", "Gil", "Linus", "Leo"],
    shop: null
  },
  {
    id: "adventurers-guild",
    name: "Adventurer's Guild",
    type: "building",
    category: "The Mountain",
    image: "images/locations/Adventurer's Guild.png",
    openHours: {
      open: "2:00",
      close: "2:00"
    },
    closed: [],
    address: "East Mountain",
    occupants: ["Marlon", "Gil"],
    shop: "guild-shop"
  },
  {
    id: "carpenters-shop",
    name: "Carpenter's Shop",
    type: "building",
    category: "The Mountain",
    image: "images/locations/Carpenter's Shop.png",
    openHours: {
      open: "9:00",
      close: "5:00"
    },
    closed: ["Tuesday"],
    address: "24 Mountain Road",
    occupants: ["Robin", "Demetrius", "Sebastian", "Maru"],
    shop: "carpenter-shop"
  },
  {
    id: "the-mines",
    name: "The Mines",
    type: "location",
    category: "The Mountain",
    image: "images/locations/The Mines.png",
    openHours: null,
    closed: [],
    address: "Northeast Mountain",
    occupants: ["Dwarf"],
    shop: "dwarf-shop"
  },
  {
    id: "railroad",
    name: "Railroad",
    type: "location",
    category: "Beyond the Valley",
    image: "images/locations/Railroad.png",
    openHours: null,
    closed: [],
    address: "North of The Mountain",
    occupants: [],
    shop: null
  },
  {
    id: "spa",
    name: "Spa",
    type: "building",
    category: "Railroad",
    image: "images/locations/Spa.png",
    openHours: null,
    closed: [],
    address: "Southwest Railroad",
    occupants: [],
    shop: null
  },
  {
    id: "quarry",
    name: "Quarry",
    type: "location",
    category: "The Mountain",
    image: "images/locations/Quarry.png",
    openHours: null,
    closed: [],
    address: "East Mountain",
    occupants: [],
    shop: null
  },
  {
    id: "quarry-mine",
    name: "Quarry Mine",
    type: "location",
    category: "Quarry",
    image: "images/locations/Quarry Mine.png",
    openHours: null,
    closed: [],
    address: "Inside the Quarry",
    occupants: [],
    shop: null
  },
  {
    id: "mutant-bug-lair",
    name: "Mutant Bug Lair",
    type: "location",
    category: "The Sewers",
    image: "images/locations/Mutant Bug Lair.png",
    openHours: null,
    closed: [],
    address: "Connected to the Sewers",
    occupants: [],
    shop: null
  },
  {
    id: "witchs-hut",
    name: "Witch's Hut",
    type: "building",
    category: "Railroad",
    image: "images/locations/Witch's Hut.png",
    openHours: null,
    closed: [],
    address: "Witch's Swamp, north of Railroad",
    occupants: ["Witch", "Henchman"],
    shop: null
  },
  {
    id: "the-desert",
    name: "The Desert",
    type: "location",
    category: "Beyond the Valley",
    image: "images/locations/The Desert.png",
    openHours: null,
    closed: [],
    address: "Northwest, accessible by bus from Pelican Town",
    occupants: ["Sandy", "Desert Trader", "Mr. Qi"],
    shop: null
  },
  {
    id: "casino",
    name: "Casino",
    type: "building",
    category: "The Desert",
    image: "images/locations/Casino.png",
    openHours: {
      open: "9:00",
      close: "11:50"
    },
    closed: [],
    address: "Back of the Oasis, Calico Desert",
    occupants: ["Mr. Qi"],
    shop: "casino-shop"
  },
  {
    id: "desert-trader",
    name: "Desert Trader",
    type: "building",
    category: "The Desert",
    image: "images/locations/Desert Trader.png",
    openHours: null,
    closed: [],
    address: "East Calico Desert",
    occupants: ["Desert Trader"],
    shop: "desert-trader-shop"
  },
  {
    id: "oasis",
    name: "Oasis",
    type: "building",
    category: "The Desert",
    image: "images/locations/Oasis.png",
    openHours: {
      open: "9:00",
      close: "11:50"
    },
    closed: [],
    address: "Southwest Calico Desert",
    occupants: ["Sandy"],
    shop: "oasis-shop"
  },
  {
    id: "skull-cavern",
    name: "Skull Cavern",
    type: "location",
    category: "The Desert",
    image: "images/locations/Skull Cavern.png",
    openHours: null,
    closed: [],
    address: "Northwest Calico Desert",
    occupants: [],
    shop: null
  },
  {
    id: "ginger-island",
    name: "Ginger Island",
    type: "location",
    category: "Beyond the Valley",
    image: "images/locations/Ginger Island.png",
    openHours: null,
    closed: [],
    address: "Accessible via boat from Willy's Fish Shop",
    occupants: ["Leo", "Birdie", "Professor Snail", "Island Trader", "Mr. Qi"],
    shop: null
  },
  {
    id: "island-field-office",
    name: "Island Field Office",
    type: "building",
    category: "Ginger Island",
    image: "images/locations/Island Field Office.png",
    openHours: null,
    closed: [],
    address: "North Ginger Island",
    occupants: ["Professor Snail"],
    shop: "field-office"
  },
  {
    id: "island-trader",
    name: "Island Trader",
    type: "building",
    category: "Ginger Island",
    image: "images/locations/Island Trader.png",
    openHours: null,
    closed: [],
    address: "North Ginger Island",
    occupants: ["Island Trader"],
    shop: "island-trader-shop"
  },
  {
    id: "qis-walnut-room",
    name: "Qi's Walnut Room",
    type: "building",
    category: "Ginger Island",
    image: "images/locations/Qi's Walnut Room.png",
    openHours: null,
    closed: [],
    address: "West Ginger Island (requires 100 Golden Walnuts)",
    occupants: ["Mr. Qi"],
    shop: "qi-shop"
  },
  {
    id: "volcano-dungeon",
    name: "Volcano Dungeon",
    type: "location",
    category: "Ginger Island",
    image: "images/locations/Volcano Dungeon.png",
    openHours: null,
    closed: [],
    address: "North Ginger Island, inside the volcano",
    occupants: ["Dwarf", "Parrot"],
    shop: "volcano-shop"
  }
];

// src/modules/locations/index.ts
var allLocations = locations_default;
var LocationQuery = class _LocationQuery extends QueryBase {
  constructor(data = allLocations) {
    super(data);
  }
  /** Filter to entries of the given type ("location" or "building"). */
  byType(type) {
    return new _LocationQuery(this.data.filter((l) => l.type === type));
  }
  /** Filter to locations in the given category. */
  byCategory(category) {
    return new _LocationQuery(this.data.filter((l) => l.category === category));
  }
  /** Filter to locations that have a linked shop data file. */
  withShop() {
    return new _LocationQuery(this.data.filter((l) => l.shop !== null));
  }
  /** Filter to locations that are always accessible (no operating hours). */
  alwaysOpen() {
    return new _LocationQuery(this.data.filter((l) => l.openHours === null));
  }
  /** Filter to locations closed on the given day. */
  closedOn(day) {
    return new _LocationQuery(this.data.filter((l) => l.closed.includes(day)));
  }
  /** Filter to locations that have the given NPC as an occupant (case-insensitive). */
  byOccupant(name) {
    const lower = name.toLowerCase();
    return new _LocationQuery(
      this.data.filter((l) => l.occupants.some((o) => o.toLowerCase() === lower))
    );
  }
  /** Sort locations by name alphabetically. */
  sortByName(order = "asc") {
    return new _LocationQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function locations(source = allLocations) {
  return new LocationQuery(source);
}

// data/special-items.json
var special_items_default = [
  {
    id: "forest-magic",
    name: "Forest Magic",
    type: "special-item",
    effect: "Unlocks the ability to read the language of the Junimos",
    obtainedFrom: '"Meet The Wizard" quest reward after examining the first golden scroll in the Community Center',
    image: "images/special-items/Forest Magic.png",
    mailFlags: ["canReadJunimoText"]
  },
  {
    id: "dwarvish-translation-guide",
    name: "Dwarvish Translation Guide",
    type: "special-item",
    effect: "Unlocks the ability to speak to the Dwarf in the mines and volcano dungeon",
    obtainedFrom: "Museum donation reward: all 4 Dwarf Scrolls",
    image: "images/special-items/Dwarvish Translation Guide.png",
    mailFlags: ["HasDwarvishTranslationGuide"]
  },
  {
    id: "rusty-key",
    name: "Rusty Key",
    type: "special-item",
    effect: "Grants access to The Sewers",
    obtainedFrom: "Reward from Gunther after donating 60 museum items",
    image: "images/special-items/Rusty Key.png",
    mailFlags: ["HasRustyKey", "ccBoilerRoom"]
  },
  {
    id: "club-card",
    name: "Club Card",
    type: "special-item",
    effect: "Enables entry to the Casino",
    obtainedFrom: '"The Mysterious Qi" quest completion',
    image: "images/special-items/Club Card.png",
    mailFlags: ["HasClubCard"]
  },
  {
    id: "special-charm",
    name: "Special Charm",
    type: "special-item",
    effect: "Permanently increases daily luck",
    obtainedFrom: "Truck driver near JojaMart/Movie Theater with Secret Note #20 and a Rabbit's Foot",
    image: "images/special-items/Special Charm.png",
    mailFlags: ["HasSpecialCharm"]
  },
  {
    id: "skull-key",
    name: "Skull Key",
    type: "special-item",
    effect: "Unlocks Skull Cavern and enables the Junimo Kart machine",
    obtainedFrom: "Chest on floor 120 of The Mines",
    image: "images/special-items/Skull Key.png",
    mailFlags: ["HasSkullKey"]
  },
  {
    id: "magnifying-glass",
    name: "Magnifying Glass",
    type: "special-item",
    effect: "Unlocks the ability to find Secret Notes",
    obtainedFrom: '"A Winter Mystery" quest completion',
    image: "images/special-items/Magnifying Glass.png",
    mailFlags: ["HasMagnifyingGlass"]
  },
  {
    id: "dark-talisman",
    name: "Dark Talisman",
    type: "special-item",
    effect: "Quest item used to open the passage to the Witch's Swamp",
    obtainedFrom: "Chest in the Mutant Bug Lair",
    image: "images/special-items/Dark Talisman.png",
    mailFlags: ["HasDarkTalisman"]
  },
  {
    id: "magic-ink",
    name: "Magic Ink",
    type: "special-item",
    effect: "Quest item returned to the Wizard to restore his magic",
    obtainedFrom: "Table in the Witch's Hut",
    image: "images/special-items/Magic Ink.png",
    mailFlags: ["HasMagicInk"]
  },
  {
    id: "bears-knowledge",
    name: "Bear's Knowledge",
    type: "special-item",
    effect: "Increases sell price of Blackberries and Salmonberries by 3x",
    obtainedFrom: "Secret Woods \u2014 bring Maple Syrup after reading Secret Note #23",
    image: "images/special-items/Bear's Knowledge.png",
    mailFlags: ["bearsKnowledge"]
  },
  {
    id: "spring-onion-mastery",
    name: "Spring Onion Mastery",
    type: "special-item",
    effect: "Increases sell price of Spring Onions by 5x",
    obtainedFrom: "Vincent and Jas' 8-heart event",
    image: "images/special-items/Spring Onion Mastery.png",
    eventFlags: ["3910979"]
  },
  {
    id: "key-to-the-town",
    name: "Key To The Town",
    type: "special-item",
    effect: "Allows access to all buildings in town at any time",
    obtainedFrom: "Qi's Walnut Room \u2014 20 Qi Gems",
    image: "images/special-items/Key To The Town.png",
    mailFlags: ["HasTownKey"]
  },
  {
    id: "price-catalogue",
    name: "Price Catalogue",
    type: "book",
    effect: "You can now see the value of your items",
    obtainedFrom: "Bookseller: 3,000g",
    image: "images/special-items/Price Catalogue.png"
  },
  {
    id: "mapping-cave-systems",
    name: "Mapping Cave Systems",
    type: "book",
    effect: "50% discount on Marlon's item retrieval service",
    obtainedFrom: "Adventurer's Guild (1,000+ monster kills) or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Mapping Cave Systems.png"
  },
  {
    id: "way-of-the-wind-pt-1",
    name: "Way Of The Wind pt. 1",
    type: "book",
    effect: "Permanently increases running speed",
    obtainedFrom: "Bookseller: 15,000g",
    image: "images/special-items/Way Of The Wind pt. 1.png"
  },
  {
    id: "way-of-the-wind-pt-2",
    name: "Way Of The Wind pt. 2",
    type: "book",
    effect: "Additional running speed boost (requires Way Of The Wind pt. 1)",
    obtainedFrom: "Bookseller: 35,000g (after pt. 1 read)",
    image: "images/special-items/Way Of The Wind pt. 2.png"
  },
  {
    id: "monster-compendium",
    name: "Monster Compendium",
    type: "book",
    effect: "Monsters have a small chance to drop double loot",
    obtainedFrom: "Drop from slain monsters or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Monster Compendium.png"
  },
  {
    id: "friendship-101",
    name: "Friendship 101",
    type: "book",
    effect: "You become friends with people a little faster",
    obtainedFrom: "Lewis' house prize machine or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Friendship 101.png"
  },
  {
    id: "jack-be-nimble-jack-be-thick",
    name: "Jack Be Nimble, Jack Be Thick",
    type: "book",
    effect: "Gain +1 Defense",
    obtainedFrom: "Artifact Spots or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Jack Be Nimble, Jack Be Thick.png"
  },
  {
    id: "woodys-secret",
    name: "Woody's Secret",
    type: "book",
    effect: "Felled trees have a 5% chance to yield double wood",
    obtainedFrom: "Chopping trees or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Woody's Secret.png"
  },
  {
    id: "ways-of-the-wild",
    name: "Ways Of The Wild",
    type: "book",
    effect: "Weeds have a greater chance to yield mixed seeds",
    obtainedFrom: "Second raccoon quest reward (Giant Stump); Raccoon Wife's Shop: 999 Fiber; Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Ways Of The Wild.png"
  },
  {
    id: "jewels-of-the-sea",
    name: "Jewels Of The Sea",
    type: "book",
    effect: "Fishing treasure chests have a chance to yield roe",
    obtainedFrom: "Fishing Treasure Chest or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Jewels Of The Sea.png"
  },
  {
    id: "dwarvish-safety-manual",
    name: "Dwarvish Safety Manual",
    type: "book",
    effect: "Bombs deal 25% less damage to you",
    obtainedFrom: "Dwarf: 4,000g or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Dwarvish Safety Manual.png"
  },
  {
    id: "the-art-o-crabbing",
    name: "The Art O' Crabbing",
    type: "book",
    effect: "Crab pots have a 25% chance to yield double catch",
    obtainedFrom: "SquidFest Iridium tier reward or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/The Art O' Crabbing.png"
  },
  {
    id: "the-alleyway-buffet",
    name: "The Alleyway Buffet",
    type: "book",
    effect: "Greater chance to find items in trash cans",
    obtainedFrom: "Gold trash can (Blacksmith/JojaMart area) or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/The Alleyway Buffet.png"
  },
  {
    id: "the-diamond-hunter",
    name: "The Diamond Hunter",
    type: "book",
    effect: "All stones have a chance to drop a diamond when mined",
    obtainedFrom: "Volcano Dungeon Dwarf: 10 Diamonds",
    image: "images/special-items/The Diamond Hunter.png"
  },
  {
    id: "book-of-mysteries",
    name: "Book of Mysteries",
    type: "book",
    effect: "Slightly greater chance to find Mystery Boxes",
    obtainedFrom: "Found in Mystery Boxes or Golden Mystery Boxes",
    image: "images/special-items/Book of Mysteries.png"
  },
  {
    id: "horse-the-book",
    name: "Horse: The Book",
    type: "book",
    effect: "Gain a little extra speed when riding your horse",
    obtainedFrom: "Bookseller: 25,000g",
    image: "images/special-items/Horse The Book.png"
  },
  {
    id: "treasure-appraisal-guide",
    name: "Treasure Appraisal Guide",
    type: "book",
    effect: "Fetch a better price when selling artifacts",
    obtainedFrom: "Artifact Troves or Bookseller: 20,000g (Year 3+)",
    image: "images/special-items/Treasure Appraisal Guide.png"
  },
  {
    id: "ol-slitherlegs",
    name: "Ol' Slitherlegs",
    type: "book",
    effect: "Run a lot faster through grass and crops",
    obtainedFrom: "Bookseller: 25,000g",
    image: "images/special-items/Ol' Slitherlegs.png"
  },
  {
    id: "animal-catalogue",
    name: "Animal Catalogue",
    type: "book",
    effect: "Access Marnie's shop when she's not around",
    obtainedFrom: "Marnie: 5,000g (Year 2+)",
    image: "images/special-items/Animal Catalogue.png"
  },
  {
    id: "bait-and-bobber",
    name: "Bait And Bobber",
    type: "skill-book",
    effect: "Grants 250 Fishing XP",
    obtainedFrom: "Bookseller; Fishing Treasure Chest; Mystery Box; monster drops; Traveling Cart; Prize Machine",
    image: "images/special-items/Bait And Bobber.png"
  },
  {
    id: "combat-quarterly",
    name: "Combat Quarterly",
    type: "skill-book",
    effect: "Grants 250 Combat XP",
    obtainedFrom: "Bookseller; Fishing Treasure Chest; Mystery Box; monster drops; Traveling Cart; Prize Machine",
    image: "images/special-items/Combat Quarterly.png"
  },
  {
    id: "mining-monthly",
    name: "Mining Monthly",
    type: "skill-book",
    effect: "Grants 250 Mining XP",
    obtainedFrom: "Bookseller; Fishing Treasure Chest; Mystery Box; monster drops; Traveling Cart; Prize Machine",
    image: "images/special-items/Mining Monthly.png"
  },
  {
    id: "stardew-valley-almanac",
    name: "Stardew Valley Almanac",
    type: "skill-book",
    effect: "Grants 250 Farming XP",
    obtainedFrom: "Bookseller; Fishing Treasure Chest; Mystery Box; monster drops; Traveling Cart; Prize Machine",
    image: "images/special-items/Stardew Valley Almanac.png"
  },
  {
    id: "woodcutters-weekly",
    name: "Woodcutter's Weekly",
    type: "skill-book",
    effect: "Grants 250 Foraging XP",
    obtainedFrom: "Bookseller; 100 Calico Eggs at Desert Festival; Fishing Treasure Chest; Mystery Box; monster drops; Traveling Cart; Prize Machine",
    image: "images/special-items/Woodcutter's Weekly.png"
  },
  {
    id: "farming-mastery",
    name: "Farming Mastery",
    type: "mastery",
    skill: "farming",
    effect: "Golden Animal Crackers can now be found, which permanently double a farm animal's produce (excludes pigs)",
    obtainedFrom: "Mastery Cave pedestal (reach level 10 in all five skills)",
    image: "images/special-items/Mastery Icon.png"
  },
  {
    id: "mining-mastery",
    name: "Mining Mastery",
    type: "mastery",
    skill: "mining",
    effect: "Gem-bearing rocks now grant twice the gems",
    obtainedFrom: "Mastery Cave pedestal (reach level 10 in all five skills)",
    image: "images/special-items/Mastery Icon.png"
  },
  {
    id: "foraging-mastery",
    name: "Foraging Mastery",
    type: "mastery",
    skill: "foraging",
    effect: "Golden Mystery Boxes can now be found, which contain superior items",
    obtainedFrom: "Mastery Cave pedestal (reach level 10 in all five skills)",
    image: "images/special-items/Mastery Icon.png"
  },
  {
    id: "fishing-mastery",
    name: "Fishing Mastery",
    type: "mastery",
    skill: "fishing",
    effect: "Golden Fishing Treasure Chests can now appear",
    obtainedFrom: "Mastery Cave pedestal (reach level 10 in all five skills)",
    image: "images/special-items/Mastery Icon.png"
  },
  {
    id: "combat-mastery",
    name: "Combat Mastery",
    type: "mastery",
    skill: "combat",
    effect: "Unlocks a new equipment slot for trinkets with special powers",
    obtainedFrom: "Mastery Cave pedestal (reach level 10 in all five skills)",
    image: "images/special-items/Mastery Icon.png"
  }
];

// src/modules/special-items/index.ts
var allSpecialItems = special_items_default;
var SpecialItemQuery = class _SpecialItemQuery extends QueryBase {
  constructor(data = allSpecialItems) {
    super(data);
  }
  /** Filter to entries of the given type ("special-item", "book", "skill-book", or "mastery"). */
  byType(type) {
    return new _SpecialItemQuery(this.data.filter((s) => s.type === type));
  }
  /** Filter mastery items by associated skill. */
  bySkill(skill) {
    return new _SpecialItemQuery(this.data.filter((s) => s.skill === skill));
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    return new _SpecialItemQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function specialItems(source = allSpecialItems) {
  return new SpecialItemQuery(source);
}

// data/bookseller-shop.json
var bookseller_shop_default = {
  items: [
    {
      id: "price-catalogue",
      name: "Price Catalogue",
      availability: "always",
      price: 3e3,
      image: "images/special-items/Price Catalogue.png"
    },
    {
      id: "way-of-the-wind-pt-1",
      name: "Way Of The Wind pt. 1",
      availability: "always",
      price: 15e3,
      image: "images/special-items/Way Of The Wind pt. 1.png"
    },
    {
      id: "way-of-the-wind-pt-2",
      name: "Way Of The Wind pt. 2",
      availability: "always",
      price: 35e3,
      image: "images/special-items/Way Of The Wind pt. 2.png"
    },
    {
      id: "horse-the-book",
      name: "Horse: The Book",
      availability: "always",
      price: 25e3,
      image: "images/special-items/Horse The Book.png"
    },
    {
      id: "ol-slitherlegs",
      name: "Ol' Slitherlegs",
      availability: "always",
      price: 25e3,
      image: "images/special-items/Ol' Slitherlegs.png"
    },
    {
      id: "stardew-valley-almanac",
      name: "Stardew Valley Almanac",
      availability: "rotating-skill",
      price: 1e4,
      priceTiers: [1e4, 8e3, 5e3],
      image: "images/special-items/Stardew Valley Almanac.png"
    },
    {
      id: "bait-and-bobber",
      name: "Bait And Bobber",
      availability: "rotating-skill",
      price: 1e4,
      priceTiers: [1e4, 8e3, 5e3],
      image: "images/special-items/Bait And Bobber.png"
    },
    {
      id: "mining-monthly",
      name: "Mining Monthly",
      availability: "rotating-skill",
      price: 1e4,
      priceTiers: [1e4, 8e3, 5e3],
      image: "images/special-items/Mining Monthly.png"
    },
    {
      id: "combat-quarterly",
      name: "Combat Quarterly",
      availability: "rotating-skill",
      price: 1e4,
      priceTiers: [1e4, 8e3, 5e3],
      image: "images/special-items/Combat Quarterly.png"
    },
    {
      id: "woodcutters-weekly",
      name: "Woodcutter's Weekly",
      availability: "rotating-skill",
      price: 1e4,
      priceTiers: [1e4, 8e3, 5e3],
      image: "images/special-items/Woodcutter's Weekly.png"
    },
    {
      id: "book-of-stars",
      name: "Book Of Stars",
      availability: "chance",
      price: 15e3,
      image: "images/special-items/Book Of Stars.png"
    },
    {
      id: "the-alleyway-buffet",
      name: "The Alleyway Buffet",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/The Alleyway Buffet.png"
    },
    {
      id: "the-art-o-crabbing",
      name: "The Art O' Crabbing",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/The Art O' Crabbing.png"
    },
    {
      id: "dwarvish-safety-manual",
      name: "Dwarvish Safety Manual",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Dwarvish Safety Manual.png"
    },
    {
      id: "jewels-of-the-sea",
      name: "Jewels Of The Sea",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Jewels Of The Sea.png"
    },
    {
      id: "ways-of-the-wild",
      name: "Ways Of The Wild",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Ways Of The Wild.png"
    },
    {
      id: "woodys-secret",
      name: "Woody's Secret",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Woody's Secret.png"
    },
    {
      id: "jack-be-nimble-jack-be-thick",
      name: "Jack Be Nimble, Jack Be Thick",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Jack Be Nimble, Jack Be Thick.png"
    },
    {
      id: "friendship-101",
      name: "Friendship 101",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Friendship 101.png"
    },
    {
      id: "monster-compendium",
      name: "Monster Compendium",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Monster Compendium.png"
    },
    {
      id: "mapping-cave-systems",
      name: "Mapping Cave Systems",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Mapping Cave Systems.png"
    },
    {
      id: "treasure-appraisal-guide",
      name: "Treasure Appraisal Guide",
      availability: "rotating-year3",
      price: 2e4,
      image: "images/special-items/Treasure Appraisal Guide.png"
    },
    {
      id: "queen-of-sauce-cookbook",
      name: "Queen Of Sauce Cookbook",
      availability: "golden-walnut",
      price: 5e4,
      image: "images/special-items/Queen Of Sauce Cookbook.png"
    }
  ],
  trades: [
    {
      bookId: "book-of-stars",
      bookName: "Book Of Stars",
      bookImage: "images/special-items/Book Of Stars.png",
      receiveItems: ["Fairy Dust"],
      receiveQuantity: 8
    },
    {
      bookId: "stardew-valley-almanac",
      bookName: "Stardew Valley Almanac",
      bookImage: "images/special-items/Stardew Valley Almanac.png",
      receiveItems: ["Pepper Poppers"],
      receiveQuantity: 2
    },
    {
      bookId: "bait-and-bobber",
      bookName: "Bait And Bobber",
      bookImage: "images/special-items/Bait And Bobber.png",
      receiveItems: ["Deluxe Bait"],
      receiveQuantity: 30
    },
    {
      bookId: "woodcutters-weekly",
      bookName: "Woodcutter's Weekly",
      bookImage: "images/special-items/Woodcutter's Weekly.png",
      receiveItems: ["Wood"],
      receiveQuantity: 100
    },
    {
      bookId: "mining-monthly",
      bookName: "Mining Monthly",
      bookImage: "images/special-items/Mining Monthly.png",
      receiveItems: ["Coal"],
      receiveQuantity: 20
    },
    {
      bookId: "combat-quarterly",
      bookName: "Combat Quarterly",
      bookImage: "images/special-items/Combat Quarterly.png",
      receiveItems: ["Monster Musk"],
      receiveQuantity: 1
    },
    {
      bookId: "jewels-of-the-sea",
      bookName: "Jewels Of The Sea",
      bookImage: "images/special-items/Jewels Of The Sea.png",
      receiveItems: ["Cave Jelly", "River Jelly", "Sea Jelly"],
      receiveQuantity: 3
    },
    {
      bookId: "woodys-secret",
      bookName: "Woody's Secret",
      bookImage: "images/special-items/Woody's Secret.png",
      receiveItems: ["Hardwood"],
      receiveQuantity: 20
    },
    {
      bookId: "jack-be-nimble-jack-be-thick",
      bookName: "Jack Be Nimble, Jack Be Thick",
      bookImage: "images/special-items/Jack Be Nimble, Jack Be Thick.png",
      receiveItems: ["Stuffing"],
      receiveQuantity: 3
    },
    {
      bookId: "monster-compendium",
      bookName: "Monster Compendium",
      bookImage: "images/special-items/Monster Compendium.png",
      receiveItems: ["Slime Egg-Press", "Slime Incubator"],
      receiveQuantity: 1
    },
    {
      bookId: "book-of-mysteries",
      bookName: "Book of Mysteries",
      bookImage: "images/special-items/Book of Mysteries.png",
      receiveItems: ["Mystery Box"],
      receiveQuantity: 7
    },
    {
      bookId: "treasure-appraisal-guide",
      bookName: "Treasure Appraisal Guide",
      bookImage: "images/special-items/Treasure Appraisal Guide.png",
      receiveItems: ["Spicy Eel", "Artifact Trove"],
      receiveQuantity: 3
    }
  ]
};

// src/modules/bookseller-shop/index.ts
var allItems = bookseller_shop_default.items;
var allTrades = bookseller_shop_default.trades;
var BooksellerItemQuery = class _BooksellerItemQuery extends QueryBase {
  constructor(data = allItems) {
    super(data);
  }
  /** Filter to items with the given availability. */
  byAvailability(availability) {
    return new _BooksellerItemQuery(this.data.filter((i) => i.availability === availability));
  }
  /** Filter to items always in stock. */
  alwaysAvailable() {
    return this.byAvailability("always");
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _BooksellerItemQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    return new _BooksellerItemQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
var BooksellerTradeQuery = class {
  constructor(data = allTrades) {
    this.data = data;
  }
  /** All trade-in offers. */
  get() {
    return this.data;
  }
  /** Number of trade-in offers. */
  count() {
    return this.data.length;
  }
  /** Find a trade-in offer by the book ID being traded. */
  findByBookId(bookId) {
    return this.data.find((t) => t.bookId === bookId);
  }
};
function booksellerShop(source = allItems) {
  return new BooksellerItemQuery(source);
}
function booksellerTrades(source = allTrades) {
  return new BooksellerTradeQuery(source);
}

// data/concessions.json
var concessions_default = [
  {
    id: "cotton-candy",
    name: "Cotton Candy",
    price: 50,
    tags: ["sweet", "candy"],
    image: "images/concessions/Cotton Candy.png"
  },
  {
    id: "jasmine-tea",
    name: "Jasmine Tea",
    price: 50,
    tags: ["drink", "hot", "healthy"],
    image: "images/concessions/Jasmine Tea.png"
  },
  {
    id: "joja-cola",
    name: "Joja Cola",
    price: 40,
    tags: ["drink", "cold", "joja"],
    image: "images/concessions/Joja Cola.png"
  },
  {
    id: "sour-slimes",
    name: "Sour Slimes",
    price: 80,
    tags: ["sour", "candy"],
    image: "images/concessions/Sour Slimes.png"
  },
  {
    id: "personal-pizza",
    name: "Personal Pizza",
    price: 150,
    tags: ["hot", "fatty"],
    image: "images/concessions/Personal Pizza.png"
  },
  {
    id: "nachos",
    name: "Nachos",
    price: 100,
    tags: ["hot", "salty", "fatty"],
    image: "images/concessions/Nachos.png"
  },
  {
    id: "salmon-burger",
    name: "Salmon Burger",
    price: 150,
    tags: ["sandwich", "burger"],
    image: "images/concessions/Salmon Burger.png"
  },
  {
    id: "ice-cream-sandwich",
    name: "Ice Cream Sandwich",
    price: 150,
    tags: ["sandwich", "sweet", "cold"],
    image: "images/concessions/Ice Cream Sandwich.png"
  },
  {
    id: "popcorn",
    name: "Popcorn",
    price: 120,
    tags: ["hot", "salty"],
    image: "images/concessions/Popcorn.png"
  },
  {
    id: "fries",
    name: "Fries",
    price: 100,
    tags: ["hot", "salty", "fatty"],
    image: "images/concessions/Fries.png"
  },
  {
    id: "chocolate-popcorn",
    name: "Chocolate Popcorn",
    price: 130,
    tags: ["hot", "sweet"],
    image: "images/concessions/Chocolate Popcorn.png"
  },
  {
    id: "black-licorice",
    name: "Black Licorice",
    price: 25,
    tags: [],
    image: "images/concessions/Black Licorice.png"
  },
  {
    id: "star-cookie",
    name: "Star Cookie",
    price: 150,
    tags: ["sweet"],
    image: "images/concessions/Star Cookie.png"
  },
  {
    id: "jawbreaker",
    name: "Jawbreaker",
    price: 250,
    tags: ["sweet", "candy"],
    image: "images/concessions/Jawbreaker.png"
  },
  {
    id: "salted-peanuts",
    name: "Salted Peanuts",
    price: 120,
    tags: ["salty"],
    image: "images/concessions/Salted Peanuts.png"
  },
  {
    id: "hummus-snack-pack",
    name: "Hummus Snack Pack",
    price: 90,
    tags: ["healthy"],
    image: "images/concessions/Hummus Snack Pack.png"
  },
  {
    id: "kale-smoothie",
    name: "Kale Smoothie",
    price: 120,
    tags: ["drink", "healthy"],
    image: "images/concessions/Kale Smoothie.png"
  },
  {
    id: "apple-slices",
    name: "Apple Slices",
    price: 100,
    tags: ["sweet", "healthy"],
    image: "images/concessions/Apple Slices.png"
  },
  {
    id: "panzanella-salad",
    name: "Panzanella Salad",
    price: 200,
    tags: ["gourmet", "healthy"],
    image: "images/concessions/Panzanella Salad.png"
  },
  {
    id: "truffle-popcorn",
    name: "Truffle Popcorn",
    price: 180,
    tags: ["gourmet", "salty"],
    image: "images/concessions/Truffle Popcorn.png"
  },
  {
    id: "cappuccino-mousse-cake",
    name: "Cappuccino Mousse Cake",
    price: 220,
    tags: ["sweet", "gourmet"],
    image: "images/concessions/Cappuccino Mousse Cake.png"
  },
  {
    id: "joja-corn",
    name: "JojaCorn",
    price: 10,
    tags: ["joja"],
    image: "images/concessions/JojaCorn.png"
  },
  {
    id: "stardrop-sorbet",
    name: "Stardrop Sorbet",
    price: 1250,
    tags: ["sweet", "gourmet"],
    image: "images/concessions/Stardrop Sorbet.png"
  },
  {
    id: "rock-candy",
    name: "Rock Candy",
    price: 90,
    tags: ["sweet", "candy"],
    image: "images/concessions/Rock Candy.png"
  }
];

// src/modules/concessions/index.ts
var allConcessions = concessions_default;
var ConcessionQuery = class _ConcessionQuery extends QueryBase {
  constructor(data = allConcessions) {
    super(data);
  }
  /** Filter to items that include the given tag. */
  byTag(tag) {
    return new _ConcessionQuery(this.data.filter((item) => item.tags.includes(tag)));
  }
  /** Sort by price ascending or descending. */
  sortByPrice(order = "asc") {
    return new _ConcessionQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price)
    );
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    return new _ConcessionQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function concessions(source = allConcessions) {
  return new ConcessionQuery(source);
}

// data/farmhouse.json
var farmhouse_default = {
  upgrades: [
    {
      id: "starting-farmhouse",
      name: "Starting Farmhouse",
      tier: 1,
      cost: 0,
      materials: [],
      description: "The initial farmhouse. One room with a bed. No kitchen.",
      image: "images/buildings/house/House (tier 1).png",
      prerequisite: null
    },
    {
      id: "upgrade-1",
      name: "Farmhouse Upgrade 1",
      tier: 2,
      cost: 1e4,
      materials: [{ item: "Wood", quantity: 450 }],
      description: "Adds a kitchen with a cooking counter and refrigerator, enabling cooking. The bedroom is separated and the bed is upgraded to a double, enabling marriage.",
      image: "images/buildings/house/House (tier 2).png",
      prerequisite: "starting-farmhouse"
    },
    {
      id: "upgrade-2",
      name: "Farmhouse Upgrade 2",
      tier: 3,
      cost: 65e3,
      materials: [{ item: "Hardwood", quantity: 100 }],
      description: "Adds two new rooms (one empty, one with a crib and child beds) and a larger layout. Unlocks house renovations and house painting from Robin.",
      image: "images/buildings/house/House (tier 3).png",
      prerequisite: "upgrade-1"
    },
    {
      id: "cellar",
      name: "Cellar",
      tier: 4,
      cost: 1e5,
      materials: [],
      description: "Adds a cellar accessible via the kitchen. Contains casks for aging Cheese and Wine to higher quality.",
      image: "images/buildings/house/indoor-images/Cellar Inside.png",
      prerequisite: "upgrade-2"
    }
  ],
  renovations: [
    {
      id: "remove-crib",
      name: "Remove Crib",
      cost: 0,
      description: "Removes the crib from the children's room, preventing any additional children.",
      image: "images/buildings/house/renovations/Removed crib.png",
      prerequisite: null
    },
    {
      id: "open-bedroom",
      name: "Open Bedroom",
      cost: 1e4,
      description: "Opens up the bedroom by removing the wall between it and the main room.",
      image: "images/buildings/house/renovations/Opened bedroom.png",
      prerequisite: null
    },
    {
      id: "add-southern-room",
      name: "Add Southern Room",
      cost: 3e4,
      description: "Adds a new room to the south side of the farmhouse.",
      image: "images/buildings/house/renovations/Add southern room.png",
      prerequisite: null
    },
    {
      id: "add-corner-room",
      name: "Add Corner Room",
      cost: 2e4,
      description: "Adds a corner room addition to the farmhouse.",
      image: "images/buildings/house/renovations/Add corner room.png",
      prerequisite: null
    },
    {
      id: "expand-corner-room",
      name: "Expand Corner Room",
      cost: 1e5,
      description: "Expands the corner room into a larger space.",
      image: "images/buildings/house/renovations/Expand corner room.png",
      prerequisite: "add-corner-room"
    },
    {
      id: "add-attic",
      name: "Add Attic",
      cost: 6e4,
      description: "Adds an attic space above the farmhouse.",
      image: "images/buildings/house/renovations/Farmhouse with Attic.png",
      prerequisite: null
    },
    {
      id: "cubby",
      name: "Cubby",
      cost: 1e4,
      description: "Adds a small cubby space to the farmhouse.",
      image: "images/buildings/house/renovations/Farmhouse with Cubby.png",
      prerequisite: null
    },
    {
      id: "dining-room",
      name: "Dining Room",
      cost: 15e4,
      description: "Adds a formal dining room to the farmhouse.",
      image: "images/buildings/house/renovations/Dining room.png",
      prerequisite: null
    },
    {
      id: "open-dining-room",
      name: "Open Dining Room",
      cost: 1e4,
      description: "Opens up the dining room by removing the wall between it and the adjacent area.",
      image: "images/buildings/house/renovations/Open dining room.png",
      prerequisite: null
    }
  ]
};

// src/modules/farmhouse/index.ts
var allUpgrades = farmhouse_default.upgrades;
var allRenovations = farmhouse_default.renovations;
var HouseUpgradeQuery = class _HouseUpgradeQuery extends QueryBase {
  constructor(data = allUpgrades) {
    super(data);
  }
  /** Filter to upgrades at the given tier. */
  byTier(tier) {
    return new _HouseUpgradeQuery(this.data.filter((u) => u.tier === tier));
  }
  /** Sort by tier ascending or descending. */
  sortByTier(order = "asc") {
    return new _HouseUpgradeQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.tier - b.tier : b.tier - a.tier)
    );
  }
};
var HouseRenovationQuery = class _HouseRenovationQuery extends QueryBase {
  constructor(data = allRenovations) {
    super(data);
  }
  /** Filter to free renovations (cost === 0). */
  free() {
    return new _HouseRenovationQuery(this.data.filter((r) => r.cost === 0));
  }
  /** Filter to renovations that require another renovation to be completed first. */
  withPrerequisite() {
    return new _HouseRenovationQuery(this.data.filter((r) => r.prerequisite !== null));
  }
  /** Sort by cost ascending or descending. */
  sortByPrice(order = "asc") {
    return new _HouseRenovationQuery(
      [...this.data].sort((a, b) => order === "asc" ? a.cost - b.cost : b.cost - a.cost)
    );
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    return new _HouseRenovationQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function houseUpgrades(source = allUpgrades) {
  return new HouseUpgradeQuery(source);
}
function houseRenovations(source = allRenovations) {
  return new HouseRenovationQuery(source);
}

// data/secret-notes.json
var secret_notes_default = [
  {
    id: "1",
    name: "Secret Note #1",
    type: "secret-note",
    description: "It's a page from Abigail's Diary 'Things I love: the smell of carved pumpkin, keeping an amethyst under my pillow, chocolate cake, the thrill of spicy eel, and the comfort of Mom's blackberry cobbler (I like to eat!)'"
  },
  {
    id: "2",
    name: "Secret Note #2",
    type: "secret-note",
    description: "It's Sam's holiday shopping list Everyone's favorites Sebastian: Frozen Tear, Sashimi Penny: Emerald, Poppy Vincent: Grape, Cranberry Candy Mom: Crispy Bass, Pancakes Dad: Risotto, Roasted Hazelnuts Me: Cactus, Maple Bar, Pizza"
  },
  {
    id: "3",
    name: "Secret Note #3",
    type: "secret-note",
    description: "It's written in Leah's handwriting My idea of a perfect dinner would be salad, goat cheese, truffle, and wine. For dessert I'd need a poppyseed muffin. Yum! If someone gave me one of those things, I'd melt."
  },
  {
    id: "4",
    name: "Secret Note #4",
    type: "secret-note",
    description: "It's a note of Maru's Parts still needed for my greatest invention yet! *Gold Bar *Iridium Bar *Battery Pack *Diamond *Strawberries"
  },
  {
    id: "5",
    name: "Secret Note #5",
    type: "secret-note",
    description: "It's Penny's handwriting: I want to get everyone something they love! Mom: Parsnip, Glazed Yams, NO BEER! Jas: Fairy Rose, Plum Pudding Vincent: Pink Cake, Grape Mr. Mullner: Leek, Fried Mushroom Granny Mullner: Beet, Tulip"
  },
  {
    id: "6",
    name: "Secret Note #6",
    type: "secret-note",
    description: "Stardrop Saloon Special Orders Mayor Lewis: Autumn's Bounty (Double order of high-fiber bread on the side) Marnie: Pumpkin Pie (extra whipped cream!) Demetrius: Bean Hotpot (Make it spicy) Caroline: Fish Taco (she wants triple the sauce! Better throw in a few extra napkins...)"
  },
  {
    id: "7",
    name: "Secret Note #7",
    type: "secret-note",
    description: "It's a page from someone's diary... ...There are only a few 'older' bachelors in town, and none of them are perfect! Harvey is really anxious and weak, but I know he would make a loyal and devoted husband. He likes coffee and pickles. Elliott is a bit foppish and melodramatic, but he does have a nice chin. He likes crab cakes and pomegranates. Shane is messy and anti-social. But I think his gruff exterior is a defense mechanism, insulating his softness from the world. He likes Beer, Pizza, and Pepper Poppers."
  },
  {
    id: "8",
    name: "Secret Note #8",
    type: "secret-note",
    description: "To Haley and Emily Hope you two are doing well! We've sent you your favorite gifts: Pink Cake and Sunflowers for Haley, Gemstones and Wool for Emily! -Love Mom and Dad"
  },
  {
    id: "9",
    name: "Secret Note #9",
    type: "secret-note",
    description: "Alex's Strength Training Diet: *Complete Breakfast *Salmon Dinner (I've learned to love this food... I can feel the protein!!)"
  },
  {
    id: "10",
    name: "Secret Note #10",
    type: "secret-note",
    description: "Someone is waiting for you on level 100 in the skull cavern..."
  },
  {
    id: "11",
    name: "Secret Note #11",
    type: "secret-note",
    description: "An image-only note depicting a crow standing on a doormat in front of a house."
  },
  {
    id: "12",
    name: "Secret Note #12",
    type: "secret-note",
    description: "I've found some good things by looking in the garbage cans, on lucky days. Sometimes you'll find the 'dish of the day' behind the saloon... usually fresh! For dessert, I'll check the Mullners' can for cookies. For treasures, check the cans by the blacksmith and museum."
  },
  {
    id: "13",
    name: "Secret Note #13",
    type: "secret-note",
    description: "12 o'clock noon SHARP. Last day of the season. Check the bush above the playground."
  },
  {
    id: "14",
    name: "Secret Note #14",
    type: "secret-note",
    description: "I hid something behind the community center."
  },
  {
    id: "15",
    name: "Secret Note #15",
    type: "secret-note",
    description: "Mermaid Show: 1-5-4-2-3"
  },
  {
    id: "16",
    name: "Secret Note #16",
    type: "secret-note",
    description: "An image-only note showing a series of fishing illustrations."
  },
  {
    id: "17",
    name: "Secret Note #17",
    type: "secret-note",
    description: "An image-only note showing crop growth stages."
  },
  {
    id: "18",
    name: "Secret Note #18",
    type: "secret-note",
    description: "An image-only note showing a mining sequence."
  },
  {
    id: "19",
    name: "Secret Note #19",
    type: "secret-note",
    description: "An image-only note depicting a puzzle scene."
  },
  {
    id: "20",
    name: "Secret Note #20",
    type: "secret-note",
    description: "An image-only note depicting a puzzle scene."
  },
  {
    id: "21",
    name: "Secret Note #21",
    type: "secret-note",
    description: "An image-only note depicting a puzzle scene."
  },
  {
    id: "22",
    name: "Secret Note #22",
    type: "secret-note",
    description: "Greetings, farmer... Have you found my 'secret' in the dark tunnel? I look forward to meeting you! -Qi"
  },
  {
    id: "23",
    name: "Secret Note #23",
    type: "secret-note",
    description: "If yoo can reed dis... come to seecrit wuds. Pleez bring may-pal serrup."
  },
  {
    id: "24",
    name: "Secret Note #24",
    type: "secret-note",
    description: `It's a page from M. Jasper's book: ...the creatures, known by some as "Forest Spirits" or "Junimos", are said to appear in abandoned buildings after they've "gone to seed". As a general rule... when humans leave, and nature begins to reclaim her territory, the Junimos will undoubtedly appear. Folk wisdom holds that the Junimos display some kind of resonant affinity with gemstones that are placed inside their little huts... Also, it's said that raisins are their favorite food, but they are too shy to take them directly from the hand. Of course, all these claims come from dubious, unverified sources... As far as I know, even the mere existence of these creatures has never been proven!`
  },
  {
    id: "25",
    name: "Secret Note #25",
    type: "secret-note",
    description: "I 'borrowed' a necklace from Mom, but lost it somewhere near the bath house... She's going to freak out if she notices it's missing!"
  },
  {
    id: "26",
    name: "Secret Note #26",
    type: "secret-note",
    description: "Ancient Farming Secrets, line 37: There's no better helper than a raisin-fed Junimo..."
  },
  {
    id: "27",
    name: "Secret Note #27",
    type: "secret-note",
    description: "My dear grandchild, By the time you find this note, I expect you'll have been living in the valley for quite some time. I hope things are going well! I'm honored that you're continuing the family tradition of farming, and through that noble endeavor, bringing greater life and abundance to all of Stardew Valley... a place very dear to my heart. Keep up the good work! -Grandpa P.S. ...I've hidden a very special secret for you somewhere in the valley. You might think of it as a compendium of my greatest discoveries. Someday, when you're ready, you'll find it."
  },
  {
    id: "1001",
    name: "Journal Scrap #1",
    type: "journal-scrap",
    description: "Day 1 ...My ship is lost... Shattered by a tempest in the unforgiving sea. I find myself stranded now, on these strange shores. My crew has perished, but I still live. Perhaps lady luck has blessed these wicked bones of mine... Or has her own designs for my fate... At any rate, I've no choice but to make a life for myself here. There's fresh water in abundance, food to forage, and fertile soil to work. First I'll build a shelter... (There are some pages missing)"
  },
  {
    id: "1002",
    name: "Journal Scrap #2",
    type: "journal-scrap",
    description: "Day 6 I won't go hungry here... the waters are full of edible (nay, delicious!) fish. I even caught a stingray in the caves by the southeast shore. I haven't a clue what to do with it, though! The other day, I even fished up a couple of golden walnuts. They seem to be all over the island. The local parrots go crazy for them!"
  },
  {
    id: "1003",
    name: "Journal Scrap #3",
    type: "journal-scrap",
    description: "Day 14 After half a month on this island, I've learned a thing or two about finding these golden nuts. One must keep their eyes peeled for subtle clues. If something looks unusual, there may be a hidden nut nearby. I've noticed signs in the sand... and signs in the leaves... I even saw a nut up in a tree near the volcano. If only I had a way of shooting it down... Whenever I've spotted a nut plant, I've always found a way to reach it."
  },
  {
    id: "1004",
    name: "Journal Scrap #4",
    type: "journal-scrap",
    description: "An image-only journal scrap showing a map of the island."
  },
  {
    id: "1005",
    name: "Journal Scrap #5",
    type: "journal-scrap",
    description: `Day 23 The local volcano holds many secrets. I've seen little men with glowing eyes, skittering about in the dark... like cats in the night. (Could these be the fabled dwarf-men, mentioned by M. Jasper in his 'Famous Journeys'?) Strange machines, too. Uncanny... not like anything known to man. At the top, I found a passage to the caldera of the volcano. And, half submerged in the bubbling lava, a peculiar machine... a kind of "forge". I'll investigate further tomorrow.`
  },
  {
    id: "1006",
    name: "Journal Scrap #6",
    type: "journal-scrap",
    description: "An image-only journal scrap showing a map of the island."
  },
  {
    id: "1007",
    name: "Journal Scrap #7",
    type: "journal-scrap",
    description: "--Forging Table-- Topaz -- Defense Emerald -- Speed Jade -- Critical Strike Power Aquamarine -- Critical Strike Chance Amethyst -- Knockback Ruby -- Damage Prismatic Shard -- Enchantment Note: Weapons can be forged up to 3 times with gems, and can also be enchanted once with a prismatic shard. Note 2: 'Innate Enchantments', (meaning those powers that sometimes appear on weapons when you first acquire them), can also be added or re-discovered using a Dragon Tooth. It's theorized that this cannot be done to weapons above a certain caliber. Tools can only be enchanted, not forged."
  },
  {
    id: "1008",
    name: "Journal Scrap #8",
    type: "journal-scrap",
    description: '--Weapon Enchantments-- Artful: Allows you to do "special moves" more rapidly Bug Killer: Do more damage to bugs. Vampiric: Occasionally siphon health from a monster. Crusader: Do more damage to "unholy" monsters. Haymaker: When cutting weeds, you get more fiber, and also a chance to collect hay. --Tool Enchantments-- Powerful: Do more tool damage to stones, trees, and the like. Reaching: Increases your charge-up capacity, for a greater area of effect. Shaving: Chance to peel off additional wood when chopping. Bottomless: Watering can will never run dry. Generous: Dig up more from beneath the earth. Archaeologist: Greater chance to find artifacts and bones. Efficient: Takes no energy to use. Swift: Swing the tool faster. Master: Increases fishing level. Auto-Hook: Automatically hooks fish when they bite. Preserving: Bait and tackle have a 50% chance to not be consumed.'
  },
  {
    id: "1009",
    name: "Journal Scrap #9",
    type: "journal-scrap",
    description: "'Twas a rain drenched day, and upon a lonely rock a beautiful maiden saw I Tales I'd heard of sea-born maidens singing siren's songs, Yet nary a note could she muster... The next morning I spied an arrangement of stone upon the foamy bank... ----------------- Aye... stones as big as 'ones' and stones as big as 'fives' were they... ----------------- If but this harried sea dog a tune could howl, perhaps to Blackgull's treasure would she lead..."
  },
  {
    id: "1010",
    name: "Journal Scrap #10",
    type: "journal-scrap",
    description: "An image-only journal scrap showing a stone arrangement puzzle."
  },
  {
    id: "1011",
    name: "Journal Scrap #11",
    type: "journal-scrap",
    description: "Day 37 When I was a boy of ten years old, my father gave me a glow ring and a magnet ring. They've never left my fingers since. However, when I was standing on top of the volcano... a strange idea came over me. I took my two rings, and cast them into the forge. Lo and behold! They combined into one! Now I've got one glowing magnet ring... I hope old pappy doesn't mind, rest his soul..."
  }
];

// src/modules/secret-notes/index.ts
var allSecretNotes = secret_notes_default;
var SecretNoteQuery = class _SecretNoteQuery extends QueryBase {
  constructor(data = allSecretNotes) {
    super(data);
  }
  /** Filter to notes of the given type. */
  byType(type) {
    return new _SecretNoteQuery(this.data.filter((n) => n.type === type));
  }
  /** Filter to Secret Notes only (found in The Valley). */
  notes() {
    return this.byType("secret-note");
  }
  /** Filter to Journal Scraps only (found on Ginger Island). */
  journalScraps() {
    return this.byType("journal-scrap");
  }
};
function secretNotes(source = allSecretNotes) {
  return new SecretNoteQuery(source);
}

// data/trinkets.json
var trinkets_default = [
  {
    id: "basilisk-paw",
    name: "Basilisk Paw",
    effect: "You are immune to debuffs.",
    source: "combat-drop",
    forgeable: false,
    sellPrice: 1e3,
    image: "images/trinkets/Basilisk Paw.png"
  },
  {
    id: "fairy-box",
    name: "Fairy Box",
    effect: "Summons a fairy companion that heals you in combat situations. Can be re-forged to change the fairy's level (1\u20135), which affects healing interval and power.",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Fairy Box.png"
  },
  {
    id: "frog-egg",
    name: "Frog Egg",
    effect: "Summons a hungry frog companion that eats nearby enemies. Can be re-forged to change the frog's color (8 variants).",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Frog Egg.png"
  },
  {
    id: "golden-spur",
    name: "Golden Spur",
    effect: "Critical strikes give you a speed boost. Can be re-forged to change the duration (5\u201310 seconds).",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Golden Spur.png"
  },
  {
    id: "ice-rod",
    name: "Ice Rod",
    effect: "Shoots an orb of ice that freezes any enemies in its path. Deals no damage. Can be re-forged to change the fire rate and freeze duration.",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Ice Rod.png"
  },
  {
    id: "magic-hair-gel",
    name: "Magic Hair Gel",
    effect: "Your hair shimmers with all the colors of a prismatic shard. Cosmetic only.",
    source: "desert-festival",
    forgeable: false,
    sellPrice: 1e3,
    image: "images/trinkets/Magic Hair Gel.png"
  },
  {
    id: "magic-quiver",
    name: "Magic Quiver",
    effect: "Shoots a magic arrow at nearby enemies automatically. Can be re-forged to change the arrow type (Standard, Perfect, Rapid, or Heavy).",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Magic Quiver.png"
  },
  {
    id: "parrot-egg",
    name: "Parrot Egg",
    effect: "Summons a parrot companion that grants a chance to find gold coins when slaying monsters. Can be re-forged to change the parrot's level (1\u20134), which affects the coin drop chance.",
    source: "combat-drop",
    forgeable: true,
    sellPrice: 1e3,
    image: "images/trinkets/Parrot Egg.png"
  }
];

// src/modules/trinkets/index.ts
var allTrinkets = trinkets_default;
var TrinketQuery = class _TrinketQuery extends QueryBase {
  constructor(data = allTrinkets) {
    super(data);
  }
  /** Filter to trinkets from the given source. */
  bySource(source) {
    return new _TrinketQuery(this.data.filter((t) => t.source === source));
  }
  /** Filter to trinkets that can be re-forged at the Forge. */
  forgeable() {
    return new _TrinketQuery(this.data.filter((t) => t.forgeable));
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    return new _TrinketQuery(
      [...this.data].sort((a, b) => {
        const cmp = a.name.localeCompare(b.name);
        return order === "asc" ? cmp : -cmp;
      })
    );
  }
};
function trinkets(source = allTrinkets) {
  return new TrinketQuery(source);
}

// data/lost-books.json
var lost_books_default = [
  {
    id: "1",
    name: "Tips on Farming",
    description: "Use fertilizer to improve quality, reduce workload, or hasten crop growth. Fruit trees take a whole season to grow, but they require very little maintenance. Keep the area directly around your new sapling clear, or else it may not grow properly. Crops will die as soon as the season ends, unless they grow in multiple seasons (e.g., Corn). Some crops, such as kale and wheat, need to be harvested with the scythe. ...This is a book by Marnie.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "2",
    name: "Animals",
    description: "Animals are very sensitive. They like to be pet every day, and prefer to eat grass outdoors than dry hay. They don't like being outside in the rain, though. Happy animals produce higher quality products!",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "3",
    name: "On Foraging",
    description: "The local woods and mountains are great places to find wild produce! A good forager will clear out any weeds, stumps, or stones from these areas, so the wild produce has plenty of space to grow! Expert foragers know the secret to cultivating wild food so that it can be grown on the farm. Isn't that amazing?",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "4",
    name: "The Fisherman, Act I",
    description: "Tex: Gordy, how do you catch so many fish? For me, it takes forever! Gordy: You must take the choice to become a true fisherman... and over time your fishing speed will increase! Tex: So you're saying that improving my fishing skill will make me fish faster? Gordy: Correct. One day you may even learn the secret to creating your very own bobbers, improving your mastery even more. Now, begone!",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "5",
    name: "How Deep Do The Mines Go?",
    description: "This question has been pondered by many Stardew Valley explorers over the years... The truth is, no one really knows. Or at least, they aren't telling anyone. Unfortunately, many of those who venture deep into the mines never return... However, there have been a few bold adventurers who have traveled deep into the mines, and have resurfaced with interesting reports. Apparently, there are three distinct areas in the mine, each with unique monsters and treasures. Some adventurers speak of gigantic underground lakes and strange creatures... But none of these claims have been proven.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "6",
    name: "An Old Farmer's Journal",
    description: "I've been here for a year now, and I've started to make friends with the local townspeople. It sure feels great! And they're sending me gifts and secret family recipes in the mail, too! That's really helpful.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "7",
    name: "Scarecrows",
    description: "Once you start growing a lot of crops on your farm, you can expect to be visited by crows. In the morning, you might discover that a crow has made breakfast out of your hard work! One way to prevent those bothersome crows from eating your crops is to set up scarecrows near your crops. Be aware that scarecrows have limited range, so you'll need multiple if your farm is large. Scarecrows keep track of how many crows they've diverted. You can use that to tell they're in a useful spot. 'Collectible Scarecrows' aren't just for looks! They work just the same as the regular model.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "8",
    name: "The Secret of the Stardrop",
    description: `For thousands of years, people have been intrigued by the mysterious powers from the stardrop... but no one knows where they come from! Professor R. J. Kutler, a leading researcher on strange fruit, says this: "We've discovered traces of genetic material on meteorites that closely resemble the Stardrop, but it's not a proven match". Regardless of where they come from, the peculiar fruit is said to be uncommonly delicious... and some even claim they grant special power to those who eat them.`,
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "9",
    name: "Journey of the Prairie King",
    description: "-- The Smash Hit Video Game! Did you know? Anyone who beats 'Journey of the Prairie King' is automatically entered into a drawing for a special prize? Did you know? The developer has stated that the protagonist is based on a real-life character... A true cowboy hero from the prairie-island in the Gem Sea!",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "10",
    name: "A Study on Diamond Yields",
    description: "After years of research in the mines, I believe I've learned something about diamond frequency. My research involved only the stones that are scattered about the mines... The ones that are broken with a pickaxe. Mineral yields from other sources require more research. Diamonds seem to only form at mine level 50 or greater. At level 50, approximately 1 in 500 stones will be diamond-rich. After level 50, the frequency of diamond formation seems to increase by about .000016 per level. Quite a rare gem! -M. Jasper",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "11",
    name: "Brewmaster's Guide",
    description: "Ah... to brew! The rich smell of yeast wafting through a cedar loft... The floral overtones of freshly cut hops on a winter's eve... but I digress. You are probably more interested in the practical side of brewing... To brew, you will need a keg. I'll leave it up to you to devise blueprints for a keg. Kegs can be used to make several kinds of product. If vegetables are placed inside, the keg will produce juice. Juice takes the least amount of time to brew. If wheat is placed in the keg, it will produce beer. Beer takes a while to brew, but it is quite profitable. Placing hops in a keg will produced the beloved 'Pale Ale'. Place fruit in the keg to make wine. Wine takes the longest of all to make, but a wine made from the finest fruit is worth quite a bit! Be patient with your keg... you'll know it's finished when it's perfectly still. And only drink in moderation, or you'll surely regret it!",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "12",
    name: "Mysteries of the Dwarves",
    description: "The Dwarves call themselves 'Smoluanu'... which translates to 'sky people'. An odd name for a group that lives deep underground, isn't it? Another mystery of the dwarves is the advanced technology they supposedly possess. Evidence such as this had led me, despite the ridicule of my colleagues, to propose a new theory: I believe the dwarves are the remnants of a once advanced civilization whos interplanetary vehicle crashed on this planet long ago. I propose that this dwarvish spaceship bore down, deep underground... and over time, the dwarves became adapted to their new underground environment. My colleagues ask, 'Why didn't they come above ground and live on the surface?' ...Perhaps their old planet had a thicker atmosphere that protected them from stellar radiation, and they simply could not survive in our sunlight. That would explain why they only surface at night to take what they need from our houses... -M. Jasper",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "13",
    name: "Highlights From The Book of Yoba",
    description: "Before time there was only the endless golden light. The light called out to itself...'Yoba'. Yoba wanted more. Yoba swirled the golden light into a vortex. Yoba swirled and swirled until a hole formed in the eye of the vortex. From this hole sprung a seed. Yoba smoothed the golden light. Yoba smoothed and smoothed, and the light became soil. Into this soil, Yoba planted the seed. The seed sprouted, and behold! A vine sprung skyward, twisting and probing, casting a writhing shadow onto the golden void. After 11 days, the vine bore fruit. Yoba, with knowing wisdom, peeled the tough skin off the fruit and saw that the world was inside. And so that is how the world came to be.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "14",
    name: "Marriage Guide for Farmers",
    description: "Before you ask someone to marry you, you'll have to date them for a while first (Ask someone to date you with a bouquet from Pierre's). When you're ready to pop the big question, you'll need to give them a 'Mermaid's Pendant'. Everyone knows what it means when you present them with one of those. It's rumored that on stormy days, the ghost of an old mariner appears in Stardew Valley, clutching just such a pendant. After the wedding ceremony, your partner will move in with you. Remember to treat your spouse well... They still like gifts even after marriage! (Paid for by Pierre)",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "15",
    name: "The Fisherman, Act II",
    description: "Tex: Gordy, tell me your best fisherman's story. Gordy: -deep sigh-... I've caught a lot of big fish in my time... And some that are very rare and difficult... But there was one that I struggled to catch for three days and three nights. Gordy: I call this fish... 'The Legend'. He was a huge beast... And the harder I tugged on the line, the harder he tugged back. I let my guard down for a moment and he snapped my boat in two. I've never fished since. Tex: Do you think anyone will ever catch him? Gordy: Hmm... If this person were a master at fishing, and caught all other rare fish first, and made sure they ate the correct kind of food... then maybe. Above all you've got to have respect for the water, son. Tex: ...son? Do you mean... you're... f...father? Gordy: Yes, my boy. --Dramatic Music as the curtains fall--",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "16",
    name: "Technology Report!",
    description: "The blueprints for an advanced piece of machinery called a 'Crystalarium' have recently been published. This machine can grow crystals from almost nothing, providing their owners with endless supplies of valuable gems! Here's how it works: Place a gem of your choice inside the crystalarium... now be patient, it can take up to several days... but eventually the crystalarium will grow a copy of whatever you placed inside! You'll know it's ready when it stops wiggling. Once you remove your gem the crystalarium will start working on yet another clone... You'll never need to restock it unless you want to change the kind of gem it produces! Unfortunately, the crystalarium doesn't work with the extremely rare gemstone known as 'Prismatic Shard'... For some reason, the EMF from the shard interacts negatively with the crystalarium.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "17",
    name: "Secrets of the Legendary Fish",
    description: "Fisherman speak of five rare and unique fish that can only be caught by skilled anglers. Once caught, they will never appear again. The Crimsonfish lives in the warm ocean waters of summer. It's been sighted on the far eastern side of the beach. The Glacierfish, which only appears in winter, can be caught off the southern tip of arrowhead island in Cindersap Forest... near where the river meets the ocean. The Anglerfish has been spotted in fall, north of town where the river flows down from the mountains. There's rumor of a strange, twisted fish that lives in the sewer. The final fish, of a species never before caught, is known simply as 'Legend'. It is rumored that he lives in a log submerged in the mountain lake, and only ventures out on rainy spring days to nibble at the frog's eggs. Only the most skilled fisherman can hope to catch this one. Train at fishing and be persistent, and eventually you will catch these elusive fish. Make sure to respect the water and don't remove too many fish from the ecosystem.",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "18",
    name: "Gunther's Tunnel Note",
    description: "...Saw something weird in the tunnel leading out from Pelican Town. There's a little door hidden in the dark. Couldn't get it open, though. -Gunther",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "19",
    name: "Note From Gunther",
    description: "Wow, this library has really become great, thanks to your help! Thanks a bunch!",
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "20",
    name: "Goblins",
    description: `The species commonly known as "Goblin" seems to have originated in the forests of the far northeast, beyond the Bluemire Hills. Characterized by their green skin, bright red eyes, and foul smell, initial encounters with Goblins can be frightening for unexperienced travellers. Despite their unsettling appearance, Goblins possess an intellectual and emotional capacity akin to humans, and have no trouble learning our customs and languages. The goblins I've met have been rather friendly and amiable, once I've shown that I mean no harm. Unfortunately, centuries of distrust and ill-treatment from humans has led many Goblins to pursue careers in the employment of witches, warlocks, necromancers, and other unsavory types. A traditional Goblin diet consists of grub meat, typically from the large and juicy grub varieties native to the Goblin home-forest. On special occasions, Goblins will indulge in an item called 'void mayonnaise'... considered perhaps the finest delicacy in all Goblin cuisine. -M. Jasper`,
    image: "images/lost-books/Lost Book.png"
  },
  {
    id: "21",
    name: "The Secret Book",
    description: "Solok Ulan Paa Eno Ra Coto Ulan Coto Ulan Mabo Bel Eno Ra Teba Omi Walo Nemo Dop Ulan Coto Kui Mabo Awa Yoba Omi Solok Awa Lon Omi Omi Nemo Solok Teba Ra Awa Nemo Gawa Eno Bel Ulan Nemo Teba Omi Yoba Bel Omi Xi",
    image: "images/lost-books/Lost Book.png"
  }
];

// src/modules/lost-books/index.ts
var allLostBooks = lost_books_default;
var LostBookQuery = class extends QueryBase {
  constructor(data = allLostBooks) {
    super(data);
  }
};
function lostBooks(source = allLostBooks) {
  return new LostBookQuery(source);
}

// data/stardrops.json
var stardrops_default = [
  {
    id: "CF_Fair",
    name: "Fair Stardrop",
    description: "Purchased at the Stardew Valley Fair for 2,000 star tokens.",
    source: "purchase",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "CF_Mines",
    name: "Mines Stardrop",
    description: "Found in the treasure chest on floor 100 of the Mines.",
    source: "exploration",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "CF_Spouse",
    name: "Spouse Stardrop",
    description: "Given by the player's spouse or roommate when friendship reaches 12.5 hearts.",
    source: "friendship",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "CF_Sewer",
    name: "Sewers Stardrop",
    description: "Purchased from Krobus in the Sewers for 20,000g.",
    source: "purchase",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "CF_Statue",
    name: "Secret Woods Stardrop",
    description: "Received from Old Master Cannoli in the Secret Woods after giving him a Sweet Gem Berry.",
    source: "exploration",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "CF_Fish",
    name: "Master Angler Stardrop",
    description: "Mailed by Willy after earning the Master Angler Achievement.",
    source: "achievement",
    image: "images/stardrops/Stardrop.png"
  },
  {
    id: "museumComplete",
    name: "Museum Stardrop",
    description: "Reward for donating all 95 items to the Museum.",
    source: "collection",
    image: "images/stardrops/Stardrop.png"
  }
];

// src/modules/stardrops/index.ts
var allStarDrops = stardrops_default;
var StarDropQuery = class _StarDropQuery extends QueryBase {
  constructor(data = allStarDrops) {
    super(data);
  }
  /** Filter by acquisition source category. */
  bySource(source) {
    return new _StarDropQuery(this.data.filter((s) => s.source === source));
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.name.localeCompare(b.name));
    return new _StarDropQuery(order === "desc" ? sorted.reverse() : sorted);
  }
};
function starDrops(source = allStarDrops) {
  return new StarDropQuery(source);
}

// data/golden-walnuts.json
var golden_walnuts_default = [
  {
    id: "Bush_IslandEast_17_37",
    name: "Island Jungle Bush",
    amount: 1,
    location: "Island East",
    hint: "In open center area (17,37)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandShrine_23_34",
    name: "Island Jungle Shrine Bush",
    amount: 1,
    location: "Island East",
    hint: "Along Southern edge (23,34)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandSouth_31_5",
    name: "Island South Bush",
    amount: 1,
    location: "Island South",
    hint: "Accessed from hidden path East of stairs on Island North map (31,5)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_9_84",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Hidden clearing in trees West of stairs from dock area (9,84)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_20_26",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Hidden clearing in trees on West side in front of Volcano (20,26)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_56_27",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Behind coconut tree on East side in front of Volcano (56,27)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_4_42",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Grassy area above Dig Site (4,42)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_45_38",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Grassy area above Field Office (45,38)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_47_40",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Grassy area above Field Office (47,40)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_13_33",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Along river accessed via secret passage from Volcano entrance (13,33)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandNorth_5_30",
    name: "Island North Bush",
    amount: 1,
    location: "Island North",
    hint: "Along river accessed via secret passage from Volcano entrance (5,39)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_Caldera_28_36",
    name: "Volcano Caldera Bush",
    amount: 1,
    location: "Caldera",
    hint: "Along Southern edge (28,36)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_Caldera_9_34",
    name: "Volcano Caldera Bush",
    amount: 1,
    location: "Caldera",
    hint: "Along Southern edge (9,34)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_CaptainRoom_2_4",
    name: "Island West Shipwreck Bush",
    amount: 1,
    location: "Island West",
    hint: "Shipwreck is enterable from left side (2,4)",
    trackingType: "all-at-once"
  },
  {
    id: "TreeNut",
    name: "Tree in Leo's Hut",
    amount: 1,
    location: "Island East",
    hint: "Hit the tree with an axe",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_19_39",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "At top of stairs from Dig Site, marked by a circle of small rocks (19,39)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_19_13",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "Cliff edge West of Volcano, marked by a circle of small rocks (19,13)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_57_79",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "Sand patch within grass patch in SE corner, marked by a circle of small rocks (57,79)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_54_21",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "Along Eastern edge of Volcano, between rocks and plants (54,21)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_42_77",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "Dark grassy area just NE of stairs from dock, between tufts of long grass (42,77)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_62_54",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "NE corner of path between docks and Field Office, marked by slightly raised sand (62,54)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandNorth_26_81",
    name: "Island North Buried",
    amount: 1,
    location: "Island North",
    hint: "Beneath curved tree West of stairs from dock, marked by a circle of small rocks (26,81)",
    trackingType: "all-at-once"
  },
  {
    id: "IslandLeftPlantRestored",
    name: "Field Office Plant Survey Reward",
    amount: 1,
    location: "Island North",
    hint: "Correct count is 22 plants",
    trackingType: "all-at-once"
  },
  {
    id: "IslandRightPlantRestored",
    name: "Field Office Starfish Survey Reward",
    amount: 1,
    location: "Island North",
    hint: "Correct count is 18 starfish",
    trackingType: "all-at-once"
  },
  {
    id: "IslandBatRestored",
    name: "Field Office Mummified Bat Reward",
    amount: 1,
    location: "Island North",
    hint: "Found by breaking non-ore rocks in the Volcano",
    trackingType: "all-at-once"
  },
  {
    id: "IslandFrogRestored",
    name: "Field Office Mummified Frog Reward",
    amount: 1,
    location: "Island North",
    hint: "Found by cutting weeds in Jungle",
    trackingType: "all-at-once"
  },
  {
    id: "IslandCenterSkeletonRestored",
    name: "Field Office Mammal Skeleton Reward",
    amount: 6,
    location: "Island North",
    hint: "Skull from Golden Coconuts; Spine from fishing Island North; Legs from fossil stones (high chance); Ribs from fossil stones (low chance); Tail from panning Island North",
    trackingType: "all-at-once"
  },
  {
    id: "IslandSnakeRestored",
    name: "Field Office Snake Skeleton Reward",
    amount: 3,
    location: "Island North",
    hint: "Skull from digging artifact spots Island North/West and fishing Island West; Vertebra from digging artifact spots Island West",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_104_3",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "End of hidden path through dense trees in NE part of map (104,3)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_31_24",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Behind Mahogany tree in Tiger Slime area (31,24)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_38_56",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Behind palm tree near pond West of Birdie's hut (38,56)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_75_29",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "In front of the trees above farmhouse (75,29)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_64_30",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Elevated area on West side of river; follow path counter-clockwise from Tiger Slimes (64,30)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_54_18",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Obscured by dense trees along path between Tiger Slimes and suspension bridge (54,18)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_25_30",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Along wall SE of walnut door (25,30)",
    trackingType: "all-at-once"
  },
  {
    id: "Bush_IslandWest_15_3",
    name: "Island West Bush",
    amount: 1,
    location: "Island West",
    hint: "Follow coastline N past walnut door (15,3)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_21_81",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "In dark sand on SW coast, between circular indentations (21,81)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_62_76",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "Among debris pile S of farm, between blue starfish (62,76)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_39_24",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "In Tiger Slime area, between tufts of long grass (39,24)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_88_14",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "In grass in NE corner, between animated tiles (88,14)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_43_74",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "Near tidal pools between blue and yellow starfish, initially blocked by boulder (43,74)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandWest_30_75",
    name: "Island West Buried",
    amount: 1,
    location: "Island West",
    hint: "Between tidal pools, marked by X (30,75)",
    trackingType: "all-at-once"
  },
  {
    id: "IslandWestCavePuzzle",
    name: "Island West Cave Puzzle",
    amount: 3,
    location: "Island West",
    hint: "Simon Says musical crystals in hidden cave N of suspension bridge",
    trackingType: "all-at-once"
  },
  {
    id: "SandDuggy",
    name: "Island West Sand Duggy",
    amount: 1,
    location: "Island West",
    hint: "Can place items to block other holes",
    trackingType: "all-at-once"
  },
  {
    id: "TreeNutShot",
    name: "Island North Palm Tree",
    amount: 1,
    location: "Island North",
    hint: "Can use slingshot to knock walnut from tree",
    trackingType: "all-at-once"
  },
  {
    id: "Mermaid",
    name: "Island Cove Mermaid Puzzle",
    amount: 5,
    location: "Island Southeast",
    hint: "Use flute blocks to play Mermaid's song; stones provide tuning clues",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandSouthEastCave_36_26",
    name: "Island Cove Cave Buried",
    amount: 1,
    location: "Island Southeast",
    hint: "Among the barrels across from the dock (36,26)",
    trackingType: "all-at-once"
  },
  {
    id: "Buried_IslandSouthEast_25_17",
    name: "Island Cove Buried",
    amount: 1,
    location: "Island Southeast",
    hint: "NE of star pool, between yellow starfish (25,17)",
    trackingType: "all-at-once"
  },
  {
    id: "StardropPool",
    name: "Island Cove Star Pool",
    amount: 1,
    location: "Island Southeast",
    hint: "Fish a walnut out of the pool",
    trackingType: "all-at-once"
  },
  {
    id: "BananaShrine",
    name: "Island Jungle Banana Shrine Reward",
    amount: 3,
    location: "Island East",
    hint: "Place a banana on the shrine",
    trackingType: "all-at-once"
  },
  {
    id: "IslandGourmand1",
    name: "Island Farm Cave Gourmand Reward #1",
    amount: 5,
    location: "Island West",
    hint: "Grow some melons for the Gourmand",
    trackingType: "all-at-once"
  },
  {
    id: "IslandGourmand2",
    name: "Island Farm Cave Gourmand Reward #2",
    amount: 5,
    location: "Island West",
    hint: "Grow some wheat for the Gourmand",
    trackingType: "all-at-once"
  },
  {
    id: "IslandGourmand3",
    name: "Island Farm Cave Gourmand Reward #3",
    amount: 5,
    location: "Island West",
    hint: "Grow some garlic for the Gourmand",
    trackingType: "all-at-once"
  },
  {
    id: "IslandShrinePuzzle",
    name: "Island Jungle Gem Shrine Reward",
    amount: 5,
    location: "Island East",
    hint: "Place gems (amethyst, aquamarine, emerald, ruby, topaz) dropped by birds on appropriate pedestals",
    trackingType: "all-at-once"
  },
  {
    id: "GoldenCoconut",
    name: "Break a Golden Coconut",
    amount: 1,
    location: "Ginger Island",
    hint: "Break open a Golden Coconut at Clint's",
    trackingType: "extra"
  },
  {
    id: "Birdie",
    name: "Birdie's Quest Reward",
    amount: 5,
    location: "Island West",
    hint: "Complete Birdie's quest chain",
    trackingType: "limited"
  },
  {
    id: "Darts",
    name: "Winning Darts Minigame",
    amount: 3,
    location: "Island Southeast",
    hint: "Win the Darts minigame in the pirate cove",
    trackingType: "limited"
  },
  {
    id: "TigerSlimeNut",
    name: "Killing Island West Tiger Slimes",
    amount: 1,
    location: "Island West",
    hint: "Dropped by Tiger Slimes",
    trackingType: "limited"
  },
  {
    id: "VolcanoNormalChest",
    name: "Looting Volcano Common Chests",
    amount: 1,
    location: "Volcano",
    hint: "Open common chests in the Volcano Dungeon",
    trackingType: "limited"
  },
  {
    id: "VolcanoRareChest",
    name: "Looting Volcano Rare Chests",
    amount: 1,
    location: "Volcano",
    hint: "Open rare chests in the Volcano Dungeon",
    trackingType: "limited"
  },
  {
    id: "VolcanoBarrel",
    name: "Breaking Volcano Barrels",
    amount: 5,
    location: "Volcano",
    hint: "Break barrels in the Volcano Dungeon",
    trackingType: "limited"
  },
  {
    id: "VolcanoMining",
    name: "Mining Stones in Volcano",
    amount: 5,
    location: "Volcano",
    hint: "Break rocks in the Volcano Dungeon",
    trackingType: "limited"
  },
  {
    id: "VolcanoMonsterDrop",
    name: "Killing Monsters in Volcano",
    amount: 5,
    location: "Volcano",
    hint: "Kill monsters in the Volcano Dungeon",
    trackingType: "limited"
  },
  {
    id: "IslandFarming",
    name: "Harvesting Crops on Island Farm",
    amount: 5,
    location: "Island West",
    hint: "Harvest crops grown on the Island Farm",
    trackingType: "limited"
  },
  {
    id: "MusselStone",
    name: "Breaking Shell Stones on Island Farm Beach",
    amount: 5,
    location: "Island West",
    hint: "Break mussel nodes on the beach South of the Island Farm",
    trackingType: "limited"
  },
  {
    id: "IslandFishing",
    name: "Fishing on the Island",
    amount: 5,
    location: "Ginger Island",
    hint: "Fish anywhere on Ginger Island",
    trackingType: "limited"
  },
  {
    id: "Island_N_BuriedTreasureNut",
    name: "Journal Scrap #10 Buried Treasure",
    amount: 1,
    location: "Island North",
    hint: "By curved tree just SW of Volcano entrance (27,28); must have read journal scrap",
    trackingType: "limited"
  },
  {
    id: "Island_W_BuriedTreasureNut",
    name: "Journal Scrap #4 Buried Treasure",
    amount: 1,
    location: "Island West",
    hint: "Between the bush clumps on beach N of Birdie's hut (18,42); must have read journal scrap",
    trackingType: "limited"
  },
  {
    id: "Island_W_BuriedTreasureNut2",
    name: "Journal Scrap #6 Buried Treasure",
    amount: 1,
    location: "Island West",
    hint: "Against wall on beach in SE corner of farm (104,74); must have read journal scrap",
    trackingType: "limited"
  }
];

// src/modules/golden-walnuts/index.ts
var allGoldenWalnuts = golden_walnuts_default;
var GoldenWalnutQuery = class _GoldenWalnutQuery extends QueryBase {
  constructor(data = allGoldenWalnuts) {
    super(data);
  }
  /** Filter by location (case-insensitive substring match). */
  byLocation(location) {
    const q = location.toLowerCase();
    return new _GoldenWalnutQuery(this.data.filter((w) => w.location.toLowerCase().includes(q)));
  }
  /** Filter by tracking type. */
  byTrackingType(type) {
    return new _GoldenWalnutQuery(this.data.filter((w) => w.trackingType === type));
  }
  /** Sort alphabetically by location. */
  sortByLocation(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.location.localeCompare(b.location));
    return new _GoldenWalnutQuery(order === "desc" ? sorted.reverse() : sorted);
  }
  /** Sort by walnut amount. */
  sortByAmount(order = "desc") {
    const sorted = [...this.data].sort((a, b) => a.amount - b.amount);
    return new _GoldenWalnutQuery(order === "desc" ? sorted.reverse() : sorted);
  }
  /** Total number of walnuts across all entries in the current query. */
  totalAmount() {
    return this.data.reduce((sum, w) => sum + w.amount, 0);
  }
};
function goldenWalnuts(source = allGoldenWalnuts) {
  return new GoldenWalnutQuery(source);
}

// data/special-orders.json
var special_orders_default = [
  {
    id: "Robin",
    name: "Robin's Project",
    requester: "Robin",
    type: "town",
    text: "I have an idea for a new style of bed. I just need some extra hardwood.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Collect 80 Hardwood",
    rewards: "2,000g; 250 Friendship points with Robin; cutscene at Robin's house; Deluxe Red Double Bed available",
    repeatable: false
  },
  {
    id: "Robin2",
    name: "Robin's Resource Rush",
    requester: "Robin",
    type: "town",
    text: "I'm putting on a little promotion, just for fun. Whoever brings me the most resources wins a prize.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Collect 1,000 of: Wood or Stone",
    rewards: "2,500g, Stone Chest recipe",
    repeatable: true
  },
  {
    id: "Demetrius",
    name: "Aquatic Overpopulation",
    requester: "Demetrius",
    type: "town",
    text: "For unknown reasons, the local population of fish has grown to an unsustainable level. Can you help restore balance?",
    prerequisites: null,
    timeframe: 7,
    requirements: "Catch 10 seasonal fish",
    rewards: "Gold (fish sell value), Farm Computer recipe",
    repeatable: true
  },
  {
    id: "Demetrius2",
    name: "Biome Balance",
    requester: "Demetrius",
    type: "town",
    text: "For unknown reasons, the local population of fish has grown to an unsustainable level. A broader variety is needed.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Catch 20 of: River Fish, Ocean Fish, or Lake Fish",
    rewards: "1,500g, Farm Computer recipe",
    repeatable: true
  },
  {
    id: "Linus",
    name: "Community Cleanup",
    requester: "Linus",
    type: "town",
    text: "I have an idea. There's a lot of trash in the water around town. Want to help clean it up?",
    prerequisites: null,
    timeframe: 7,
    requirements: "Gather 20 trash items and dump them in the bin at the train platform",
    rewards: "500g; 250 Friendship points with Linus; Fiber Seeds recipe; cutscene at Mountain Lake",
    repeatable: false
  },
  {
    id: "Emily",
    name: "Rock Rejuvenation",
    requester: "Emily",
    type: "town",
    text: "I'm going to invite some friends over to do a rock rejuvenation ceremony. I need some special gems.",
    prerequisites: "Access to Sewing Machine in Emily's house",
    timeframe: 7,
    requirements: "Deliver 1 each of: Ruby, Topaz, Emerald, Jade, Amethyst",
    rewards: "1,000g; 250 Friendship points with Emily; Sewing Machine; ceremony cutscene",
    repeatable: false
  },
  {
    id: "Gunther",
    name: "Fragments of the Past",
    requester: "Gunther",
    type: "town",
    text: "Calling all amateur paleontologists! Bring any bone-related artifacts or items to the Museum.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Collect 100 bone items and deposit them in the Museum box",
    rewards: "3,500g, Bone Mill recipe",
    repeatable: false
  },
  {
    id: "Pam",
    name: "Pam Needs Juice",
    requester: "Pam",
    type: "town",
    text: "Heard there's a spirit made out of potatoes. Think you could bring me some potato juice?",
    prerequisites: "Spring season",
    timeframe: 14,
    requirements: "Place 12 Potato Juice in Pam's kitchen",
    rewards: "3,000g; 250 Friendship points with Pam; Potato Juice cutscene; F.I.B.S. TV channel",
    repeatable: false
  },
  {
    id: "Gus",
    name: "Gus' Famous Omelet",
    requester: "Gus",
    type: "town",
    text: "I've got the urge to make my famous giant omelet. I'll need a lot of eggs.",
    prerequisites: null,
    timeframe: 14,
    requirements: "Place 24 Eggs into Stardrop Saloon fridge",
    rewards: "3,000g; Mini-Fridge (first time); Giant Omelet cutscene (first time)",
    repeatable: true
  },
  {
    id: "Pierre",
    name: "Pierre's Prime Produce",
    requester: "Pierre",
    type: "town",
    text: "For an upcoming promotion, I'm thinking of offering some high-quality vegetables.",
    prerequisites: null,
    timeframe: 28,
    requirements: "Dump 25 Gold-quality vegetables in the bin at General Store",
    rewards: "2,500g, cutscene at General Store, Mini-Shipping Bin by mail",
    repeatable: false
  },
  {
    id: "Lewis",
    name: "Crop Order",
    requester: "Lewis",
    type: "town",
    text: "Crops are in high demand this year. Ship a large batch of a seasonal crop.",
    prerequisites: "Not Winter season",
    timeframe: 28,
    requirements: "Ship 100 of a seasonal crop",
    rewards: "Gold (50% base quality crop price); Mini-Shipping Bin by mail (first time)",
    repeatable: true
  },
  {
    id: "Willy",
    name: "Juicy Bugs Wanted!",
    requester: "Willy",
    type: "town",
    text: "I'm looking for a big wad o' bug guts to use as fishing bait.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Gather 100 Bug Meat and dump it in the bin next to the fish shop",
    rewards: "3,000g, Quality Bobber recipe, cutscene at The Beach",
    repeatable: false
  },
  {
    id: "Willy2",
    name: "Tropical Fish",
    requester: "Willy",
    type: "town",
    text: "There's nothin' like tropical fishing. I'd love some fresh catches from Ginger Island.",
    prerequisites: "Ginger Island unlocked; Island Resort built",
    timeframe: 7,
    requirements: "Catch 5 each of: Stingray, Blue Discus, Lionfish",
    rewards: "2,500g, Deluxe Fish Tank",
    repeatable: false
  },
  {
    id: "Wizard",
    name: "A Curious Substance",
    requester: "Wizard",
    type: "town",
    text: "I seek an extremely rare and powerful goop, known as ectoplasm. Bring it to me.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Collect 1 Ectoplasm",
    rewards: "2,500g, Mini-Obelisk recipe",
    repeatable: false
  },
  {
    id: "Wizard2",
    name: "Prismatic Jelly",
    requester: "Wizard",
    type: "town",
    text: "I require assistance in tracking down the rare and dangerous prismatic slime.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Collect 1 Prismatic Jelly",
    rewards: "5,000g, Monster Musk recipe",
    repeatable: false
  },
  {
    id: "Caroline",
    name: "Island Ingredients",
    requester: "Caroline",
    type: "town",
    text: "I want to experiment with tropical cooking. Could you ship me some ingredients from Ginger Island?",
    prerequisites: "Ginger Island unlocked",
    timeframe: 28,
    requirements: "Ship 100 of: Taro Root, Ginger, or Pineapple",
    rewards: "Gold (50% base crop price), Solar Panel recipe",
    repeatable: true
  },
  {
    id: "Clint",
    name: "Cave Patrol",
    requester: "Clint",
    type: "town",
    text: "The number of monsters in the local caves have made mining dangerous. Would you help thin out their numbers?",
    prerequisites: null,
    timeframe: 7,
    requirements: "Slay 50 of: Bats, Dust Sprites, Skeletons, or Grubs",
    rewards: "6,000g; Geode Crusher recipe (first time); Explosives and food by letter (subsequent times)",
    repeatable: true
  },
  {
    id: "Evelyn",
    name: "Gifts for George",
    requester: "Evelyn",
    type: "town",
    text: "George thinks no one in town cares about him. Let's show him that isn't true.",
    prerequisites: "Spring season",
    timeframe: 28,
    requirements: "Collect and place 12 Leeks onto Evelyn's stove",
    rewards: "2,000g, Coffee Maker, cutscene at George's house",
    repeatable: false
  },
  {
    id: "QiChallenge2",
    name: "Qi's Crop",
    requester: "Qi",
    type: "qi",
    text: "I've hidden Qi Beans throughout the world. Find them, grow them, propagate them, and ship the results.",
    prerequisites: null,
    timeframe: 28,
    requirements: "Ship 500 Qi Fruit using the Shipping Bin",
    rewards: "100 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge3",
    name: "Let's Play A Game",
    requester: "Qi",
    type: "qi",
    text: "Think you can score 50,000 points in Junimo Kart endless mode? Impress me.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Score 50,000 points in Junimo Kart endless mode",
    rewards: "20 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge4",
    name: "Four Precious Stones",
    requester: "Qi",
    type: "qi",
    text: "Find 4 prismatic shards. Place them in my collection box.",
    prerequisites: null,
    timeframe: 28,
    requirements: "Collect 4 Prismatic Shards (must be collected while quest is active)",
    rewards: "40 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge5",
    name: "Skull Cavern Invasion",
    requester: "Qi",
    type: "qi",
    text: "The Skull Cavern has been invaded by powerful monsters. Make it to floor 100.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Make it to floor 100 of the Skull Cavern (Staircases allowed)",
    rewards: "40 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge6",
    name: "The Strong Stuff",
    requester: "Qi",
    type: "qi",
    text: "Ship quality items worth a total of at least 100,000g.",
    prerequisites: null,
    timeframe: 14,
    requirements: "Ship items with quality stars worth a total of at least 100,000g",
    rewards: "25 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge7",
    name: "Qi's Kindness",
    requester: "Qi",
    type: "qi",
    text: "Give 50 loved gifts in one week.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Give 50 loved gifts to villagers within one week",
    rewards: "40 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge8",
    name: "Extended Family",
    requester: "Qi",
    type: "qi",
    text: "Family members of the legendary fish have returned to the valley. Catch them all.",
    prerequisites: null,
    timeframe: 3,
    requirements: "Catch Ms. Angler, Glacierfish Jr., Son of Crimsonfish, Radioactive Carp, and Legend II",
    rewards: "20 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge9",
    name: "Danger In The Deep",
    requester: "Qi",
    type: "qi",
    text: "The mine elevator system has been reset, and new dangers have emerged. Reach the bottom again.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Reach the bottom of the Mines (Staircases allowed); resets unlocked Adventurer's Guild gear",
    rewards: "50 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge10",
    name: "Qi's Hungry Challenge",
    requester: "Qi",
    type: "qi",
    text: "Your task is to make it to level 100 in the Skull Cavern without consuming any food or drink.",
    prerequisites: null,
    timeframe: 7,
    requirements: "Reach floor 100 of Skull Cavern without consuming food or drink (Staircases allowed)",
    rewards: "25 Qi Gems",
    repeatable: true
  },
  {
    id: "QiChallenge12",
    name: "Qi's Prismatic Grange",
    requester: "Qi",
    type: "qi",
    text: "Find 100 each of red, orange, yellow, green, blue, and purple items and place them in my collection box.",
    prerequisites: null,
    timeframe: 14,
    requirements: "Place 100 each of red, orange, yellow, green, blue, and purple items in Qi's collection box (600 items total)",
    rewards: "35 Qi Gems",
    repeatable: true
  }
];

// src/modules/special-orders/index.ts
var allSpecialOrders = special_orders_default;
var SpecialOrderQuery = class _SpecialOrderQuery extends QueryBase {
  constructor(data = allSpecialOrders) {
    super(data);
  }
  /** Filter by order type (town or qi). */
  byType(type) {
    return new _SpecialOrderQuery(this.data.filter((o) => o.type === type));
  }
  /** Filter by requester NPC name (case-insensitive exact match). */
  byRequester(requester) {
    const q = requester.toLowerCase();
    return new _SpecialOrderQuery(this.data.filter((o) => o.requester.toLowerCase() === q));
  }
  /** Filter to repeatable special orders. */
  repeatable() {
    return new _SpecialOrderQuery(this.data.filter((o) => o.repeatable));
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.name.localeCompare(b.name));
    return new _SpecialOrderQuery(order === "desc" ? sorted.reverse() : sorted);
  }
};
function specialOrders(source = allSpecialOrders) {
  return new SpecialOrderQuery(source);
}

// data/events.json
var events_default = [
  { id: "20", villager: "Alex", hearts: 2, description: "Alex on the beach." },
  { id: "2481135", villager: "Alex", hearts: 4, description: "Alex playing with Dusty." },
  { id: "21", villager: "Alex", hearts: 5, description: "Alex talks about his dreams." },
  {
    id: "2119820",
    villager: "Alex",
    hearts: 6,
    description: "Alex working out shirtless."
  },
  { id: "288847", villager: "Alex", hearts: 8, description: "Alex crying on the beach." },
  {
    id: "911526",
    villager: "Alex",
    hearts: 10,
    description: "Dinner at the saloon with Alex."
  },
  {
    id: "3917587",
    villager: "Alex",
    hearts: 14,
    description: "Alex asks for 5,000g for a secret project."
  },
  {
    id: "1",
    villager: "Abigail",
    hearts: 2,
    description: "Prairie King co-op game in her room."
  },
  {
    id: "2",
    villager: "Abigail",
    hearts: 4,
    description: "Abigail playing flute on the bridge in the rain."
  },
  {
    id: "4",
    villager: "Abigail",
    hearts: 6,
    description: "Abigail in the graveyard at night."
  },
  {
    id: "3",
    villager: "Abigail",
    hearts: 8,
    description: "Spirit board session with Abigail."
  },
  {
    id: "901756",
    villager: "Abigail",
    hearts: 10,
    description: "Find Abigail crying in the mines."
  },
  {
    id: "6963327",
    villager: "Abigail",
    hearts: 14,
    description: "Abigail's 14-heart event."
  },
  { id: "39", villager: "Elliott", hearts: 2, description: "Visit Elliott's cabin." },
  { id: "40", villager: "Elliott", hearts: 4, description: "Elliott at the saloon." },
  {
    id: "423502",
    villager: "Elliott",
    hearts: 6,
    description: "Catch Elliott playing piano."
  },
  {
    id: "1848481",
    villager: "Elliott",
    hearts: 8,
    description: "Elliott's book reading at the library."
  },
  {
    id: "43",
    villager: "Elliott",
    hearts: 10,
    description: "Elliott on the beach, boat ride."
  },
  {
    id: "3912125",
    villager: "Elliott",
    hearts: 14,
    description: "Elliott receives exciting news."
  },
  {
    id: "471942",
    villager: "Emily",
    hearts: 2,
    description: "Emily asks why you're visiting."
  },
  {
    id: "463391",
    villager: "Emily",
    hearts: 4,
    description: "Emily enjoying a beautiful day."
  },
  {
    id: "917409",
    villager: "Emily",
    hearts: 6,
    description: "Emily's gem meditation dream."
  },
  {
    id: "2123243",
    villager: "Emily",
    hearts: 8,
    description: "Emily's clothing therapy event."
  },
  {
    id: "2123343",
    villager: "Emily",
    hearts: 10,
    description: "Camping under the stars with Emily."
  },
  {
    id: "3917600",
    villager: "Emily",
    hearts: 14,
    description: "Emily working on something special."
  },
  {
    id: "11",
    villager: "Haley",
    hearts: 2,
    description: "Haley and Emily arguing about cleaning."
  },
  { id: "12", villager: "Haley", hearts: 4, description: "Haley can't open a jar." },
  {
    id: "13",
    villager: "Haley",
    hearts: 6,
    description: "Haley at the beach, lost bracelet."
  },
  {
    id: "14",
    villager: "Haley",
    hearts: 8,
    description: "Haley surprised to see you in the forest."
  },
  {
    id: "15",
    villager: "Haley",
    hearts: 10,
    description: "Haley's dark room photography."
  },
  { id: "6184643", villager: "Haley", hearts: 14, description: "Haley's 14-heart event." },
  { id: "56", villager: "Harvey", hearts: 2, description: "Harvey examining George." },
  {
    id: "57",
    villager: "Harvey",
    hearts: 4,
    description: "Harvey about to write you a letter."
  },
  { id: "58", villager: "Harvey", hearts: 6, description: "Harvey at aerobics class." },
  {
    id: "571102",
    villager: "Harvey",
    hearts: 8,
    description: "Harvey calling for help on the radio."
  },
  {
    id: "528052",
    villager: "Harvey",
    hearts: 10,
    description: "Harvey's hot air balloon ride."
  },
  {
    id: "3917626",
    villager: "Harvey",
    hearts: 14,
    description: "Harvey setting the table for dinner."
  },
  {
    id: "50",
    villager: "Leah",
    hearts: 2,
    description: "Visit Leah's cottage, see her art."
  },
  { id: "51", villager: "Leah", hearts: 4, description: "Leah on phone with ex." },
  { id: "52", villager: "Leah", hearts: 6, description: "Leah foraging, startled by you." },
  { id: "55", villager: "Leah", hearts: 8, description: "Leah's art show announcement." },
  { id: "54", villager: "Leah", hearts: 10, description: "Leah's surprise in the forest." },
  {
    id: "3911124",
    villager: "Leah",
    hearts: 14,
    description: "Leah invites you to paint."
  },
  { id: "6", villager: "Maru", hearts: 2, description: "Meet Maru in Robin's house." },
  { id: "7", villager: "Maru", hearts: 4, description: "Maru sick of preparing samples." },
  { id: "8", villager: "Maru", hearts: 6, description: "Maru stargazing late at night." },
  {
    id: "9",
    villager: "Maru",
    hearts: 8,
    description: "Maru invites you in for robot project."
  },
  { id: "10", villager: "Maru", hearts: 10, description: "Maru's big project reveal." },
  {
    id: "3917666",
    villager: "Maru",
    hearts: 14,
    description: "Maru's comet watching event."
  },
  {
    id: "34",
    villager: "Penny",
    hearts: 2,
    description: "George struggling with a letter, Penny helps."
  },
  {
    id: "35",
    villager: "Penny",
    hearts: 4,
    description: "Penny upset about dirty trailer."
  },
  { id: "36", villager: "Penny", hearts: 6, description: "Penny cooking a new recipe." },
  {
    id: "181928",
    villager: "Penny",
    hearts: 8,
    description: "Penny teaching the kids in the forest."
  },
  { id: "38", villager: "Penny", hearts: 10, description: "Penny at the spa." },
  { id: "4325434", villager: "Penny", hearts: 14, description: "Penny welcomes you home." },
  { id: "44", villager: "Sam", hearts: 2, description: "Sam and Sebastian jam session." },
  { id: "733330", villager: "Sam", hearts: 3, description: "Sam at the beach." },
  { id: "46", villager: "Sam", hearts: 4, description: "Sam about to have a snack." },
  {
    id: "45",
    villager: "Sam",
    hearts: 6,
    description: "Sam skateboarding, Lewis scolds him."
  },
  { id: "47", villager: "Sam", hearts: 8, description: "Sam's band playing in Zuzu City." },
  {
    id: "233104",
    villager: "Sam",
    hearts: 10,
    description: "Sam wants to talk in private."
  },
  { id: "3918600", villager: "Sam", hearts: 14, description: "Sam greets you after work." },
  {
    id: "2794460",
    villager: "Sebastian",
    hearts: 2,
    description: "Sebastian programming."
  },
  {
    id: "384883",
    villager: "Sebastian",
    hearts: 4,
    description: "Sebastian on the mountain."
  },
  { id: "27", villager: "Sebastian", hearts: 6, description: "Sebastian in his room." },
  {
    id: "29",
    villager: "Sebastian",
    hearts: 8,
    description: "Sebastian at the beach at night."
  },
  {
    id: "384882",
    villager: "Sebastian",
    hearts: 10,
    description: "Sebastian motorcycle ride."
  },
  {
    id: "9333219",
    villager: "Sebastian",
    hearts: 14,
    description: "Sebastian's 14-heart event."
  },
  {
    id: "611944",
    villager: "Shane",
    hearts: 2,
    description: "Shane drinking alone late at night."
  },
  { id: "3910674", villager: "Shane", hearts: 4, description: "Marnie checks on Shane." },
  {
    id: "3910975",
    villager: "Shane",
    hearts: 6,
    description: "Shane at the cliffs, emotional breakdown."
  },
  {
    id: "3900074",
    villager: "Shane",
    hearts: 8,
    description: "Shane shows you blue chickens in the barn."
  },
  { id: "2128292", villager: "Shane", hearts: 10, description: "Shane visits the farm." },
  {
    id: "3917584",
    villager: "Shane",
    hearts: 14,
    description: "Shane's 14-heart spouse event."
  },
  {
    id: "7771191",
    villager: "Krobus",
    hearts: 14,
    description: "Krobus 14-heart event at the beach."
  },
  {
    id: "17",
    villager: "Caroline",
    hearts: 6,
    description: "Abigail and Caroline arguing about lifestyle."
  },
  {
    id: "97",
    villager: "Clint",
    hearts: 3,
    description: "Clint asks you to join him at the saloon."
  },
  {
    id: "101",
    villager: "Clint",
    hearts: 6,
    description: "Catch Clint outside Emily's house."
  },
  {
    id: "25",
    villager: "Demetrius",
    hearts: 6,
    description: "Robin and Demetrius argue about tomatoes."
  },
  { id: "19", villager: "Evelyn", hearts: 4, description: "Evelyn baking cookies." },
  {
    id: "18",
    villager: "George",
    hearts: 6,
    description: "George can't reach something from wheelchair."
  },
  { id: "96", villager: "Gus", hearts: 4, description: "Gus greeting you at the saloon." },
  { id: "980558", villager: "Gus", hearts: 5, description: "Gus visits your farm." },
  {
    id: "3910979",
    villager: "Jas",
    hearts: 8,
    description: "Vincent and Jas playing together."
  },
  { id: "93", villager: "Jodi", hearts: 4, description: "Jodi visits the farm." },
  {
    id: "100",
    villager: "Kent",
    hearts: 3,
    description: "Kent flashback while Jodi makes popcorn."
  },
  {
    id: "6497423",
    villager: "Leo",
    hearts: 2,
    description: "Leo curious about what you're doing."
  },
  { id: "6497421", villager: "Leo", hearts: 4, description: "Leo apologizes." },
  { id: "6497428", villager: "Leo", hearts: 6, description: "Linus meets Leo." },
  {
    id: "8959199",
    villager: "Leo",
    hearts: 9,
    description: "Leo reminiscing about a great day."
  },
  {
    id: "639373",
    villager: "Lewis",
    hearts: 6,
    description: "Lewis and Marnie's secret relationship."
  },
  {
    id: "502969",
    villager: "Linus",
    hearts: 0,
    description: "George complains about raccoons."
  },
  { id: "26", villager: "Linus", hearts: 4, description: "Linus by the firepit." },
  { id: "371652", villager: "Linus", hearts: 8, description: "Robin encounters Linus." },
  {
    id: "91",
    villager: "Marnie",
    hearts: 3,
    description: "Marnie asks about training goats."
  },
  { id: "503180", villager: "Pam", hearts: 9, description: "Pam heart-to-heart." },
  { id: "16", villager: "Pierre", hearts: 6, description: "Find Pierre's secret stash." },
  { id: "33", villager: "Robin", hearts: 6, description: "Robin cleaning her saw." },
  {
    id: "3910979",
    villager: "Vincent",
    hearts: 8,
    description: "Vincent and Jas playing together."
  },
  {
    id: "711130",
    villager: "Willy",
    hearts: 6,
    description: "Willy needs help with something."
  }
];

// src/modules/events/index.ts
var allEvents = events_default.map((e) => ({
  ...e,
  name: `${e.villager} ${e.hearts}-Heart`
}));
var EventQuery = class _EventQuery extends QueryBase {
  constructor(data = allEvents) {
    super(data);
  }
  /** Filter by villager name (case-insensitive exact match). */
  byVillager(villager) {
    const q = villager.toLowerCase();
    return new _EventQuery(this.data.filter((e) => e.villager.toLowerCase() === q));
  }
  /** Filter by heart level. */
  byHearts(hearts) {
    return new _EventQuery(this.data.filter((e) => e.hearts === hearts));
  }
  /** Filter to only marriage candidate events (hearts 2, 4, 6, 8, 10, 14). */
  marriageEvents() {
    const marriageHearts = [2, 4, 6, 8, 10, 14];
    return new _EventQuery(this.data.filter((e) => marriageHearts.includes(e.hearts)));
  }
  /** Sort by heart level. */
  sortByHearts(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.hearts - b.hearts);
    return new _EventQuery(order === "desc" ? sorted.reverse() : sorted);
  }
  /** Sort alphabetically by villager name. */
  sortByVillager(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.villager.localeCompare(b.villager));
    return new _EventQuery(order === "desc" ? sorted.reverse() : sorted);
  }
};
function events(source) {
  return new EventQuery(source ?? allEvents);
}

// data/buildings.json
var buildings_default = [
  {
    id: "coop",
    name: "Coop",
    description: "A small building that houses chickens. Feed them with hay from a silo.",
    builder: "Robin",
    buildCost: 4e3,
    buildDays: 3,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 300
      },
      {
        id: "2",
        item: "Stone",
        quantity: 100
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/coop/Coop.png"
  },
  {
    id: "big-coop",
    name: "Big Coop",
    description: "An upgraded coop with more space. Houses up to 8 animals including ducks and dinosaurs. Includes an incubator.",
    builder: "Robin",
    buildCost: 1e4,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 400
      },
      {
        id: "2",
        item: "Stone",
        quantity: 150
      }
    ],
    upgradeFrom: "coop",
    magical: false,
    image: "images/buildings/coop/Big Coop.png"
  },
  {
    id: "deluxe-coop",
    name: "Deluxe Coop",
    description: "The best coop. Houses up to 12 animals including rabbits. Has an auto-feed system.",
    builder: "Robin",
    buildCost: 2e4,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 500
      },
      {
        id: "2",
        item: "Stone",
        quantity: 200
      }
    ],
    upgradeFrom: "big-coop",
    magical: false,
    image: "images/buildings/coop/Deluxe Coop.png"
  },
  {
    id: "barn",
    name: "Barn",
    description: "A building that houses cows and goats. Feed them with hay from a silo.",
    builder: "Robin",
    buildCost: 6e3,
    buildDays: 3,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 350
      },
      {
        id: "2",
        item: "Stone",
        quantity: 150
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/barn/Barn.png"
  },
  {
    id: "big-barn",
    name: "Big Barn",
    description: "An upgraded barn with more space. Houses up to 8 animals including sheep and pigs.",
    builder: "Robin",
    buildCost: 12e3,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 450
      },
      {
        id: "2",
        item: "Stone",
        quantity: 200
      }
    ],
    upgradeFrom: "barn",
    magical: false,
    image: "images/buildings/barn/Big Barn.png"
  },
  {
    id: "deluxe-barn",
    name: "Deluxe Barn",
    description: "The best barn. Houses up to 12 animals including ostriches. Has an auto-feed system.",
    builder: "Robin",
    buildCost: 25e3,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 550
      },
      {
        id: "2",
        item: "Stone",
        quantity: 300
      }
    ],
    upgradeFrom: "big-barn",
    magical: false,
    image: "images/buildings/barn/Deluxe Barn.png"
  },
  {
    id: "well",
    name: "Well",
    description: "Place a well to refill your watering can without having to travel to a pond or river.",
    builder: "Robin",
    buildCost: 1e3,
    buildDays: 2,
    materials: [
      {
        id: "2",
        item: "Stone",
        quantity: 75
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Well.png"
  },
  {
    id: "silo",
    name: "Silo",
    description: "Stores hay from cut grass. Capacity: 240 hay per silo.",
    builder: "Robin",
    buildCost: 100,
    buildDays: 2,
    materials: [
      {
        id: "2",
        item: "Stone",
        quantity: 100
      },
      {
        id: "330",
        item: "Clay",
        quantity: 10
      },
      {
        id: "334",
        item: "Copper Bar",
        quantity: 5
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Silo.png"
  },
  {
    id: "mill",
    name: "Mill",
    description: "Place crops inside to make Flour, Sugar, Rice, and Wheat Flour.",
    builder: "Robin",
    buildCost: 2500,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 150
      },
      {
        id: "2",
        item: "Stone",
        quantity: 50
      },
      {
        id: "428",
        item: "Cloth",
        quantity: 4
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Mill.png"
  },
  {
    id: "shed",
    name: "Shed",
    description: "An empty building where you can place crafting machines, kegs, preserves jars, etc.",
    builder: "Robin",
    buildCost: 15e3,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 300
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/shed/Shed.png"
  },
  {
    id: "big-shed",
    name: "Big Shed",
    description: "An upgraded shed with more interior space for machines and storage.",
    builder: "Robin",
    buildCost: 2e4,
    buildDays: 2,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 550
      },
      {
        id: "2",
        item: "Stone",
        quantity: 300
      }
    ],
    upgradeFrom: "shed",
    magical: false,
    image: "images/buildings/shed/Big Shed.png"
  },
  {
    id: "fish-pond",
    name: "Fish Pond",
    description: "Place fish in a pond to raise them. Produces roe and other items.",
    builder: "Robin",
    buildCost: 5e3,
    buildDays: 2,
    materials: [
      {
        id: "2",
        item: "Stone",
        quantity: 200
      },
      {
        id: "152",
        item: "Seaweed",
        quantity: 5
      },
      {
        id: "153",
        item: "Green Algae",
        quantity: 5
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Fish Pond.png"
  },
  {
    id: "stable",
    name: "Stable",
    description: "Allows you to keep and ride a horse. The horse can be used to travel around the map faster.",
    builder: "Robin",
    buildCost: 1e4,
    buildDays: 2,
    materials: [
      {
        id: "709",
        item: "Hardwood",
        quantity: 100
      },
      {
        id: "335",
        item: "Iron Bar",
        quantity: 5
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Horse Stable.png"
  },
  {
    id: "slime-hutch",
    name: "Slime Hutch",
    description: "Raise slimes in this building. Fill the water troughs and collect slime balls.",
    builder: "Robin",
    buildCost: 1e4,
    buildDays: 2,
    materials: [
      {
        id: "2",
        item: "Stone",
        quantity: 500
      },
      {
        id: "338",
        item: "Refined Quartz",
        quantity: 10
      },
      {
        id: "337",
        item: "Iridium Bar",
        quantity: 1
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/Slime Hutch.png"
  },
  {
    id: "cabin",
    name: "Cabin",
    description: "A small cabin for multiplayer. Another player can use this as their home.",
    builder: "Robin",
    buildCost: 100,
    buildDays: 0,
    materials: [],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/cabin/log/Log Cabin Stage 1.png"
  },
  {
    id: "pet-bowl",
    name: "Pet Bowl",
    description: "A bowl for your pet. Fill it with water daily to keep your pet happy.",
    builder: "Robin",
    buildCost: 5e3,
    buildDays: 0,
    materials: [
      {
        id: "709",
        item: "Hardwood",
        quantity: 25
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/pet_bowl/Pet Bowl Wood.png"
  },
  {
    id: "shipping-bin",
    name: "Shipping Bin",
    description: "An additional shipping bin for selling items. Place items inside and they'll be collected overnight.",
    builder: "Robin",
    buildCost: 250,
    buildDays: 0,
    materials: [
      {
        id: "388",
        item: "Wood",
        quantity: 150
      }
    ],
    upgradeFrom: null,
    magical: false,
    image: "images/buildings/ShippingBox.png"
  },
  {
    id: "junimo-hut",
    name: "Junimo Hut",
    description: "Junimos will harvest crops within a certain radius of the hut. Place it near your crops.",
    builder: "Wizard",
    buildCost: 2e4,
    buildDays: 0,
    materials: [
      {
        id: "2",
        item: "Stone",
        quantity: 200
      },
      {
        id: "268",
        item: "Starfruit",
        quantity: 9
      },
      {
        id: "771",
        item: "Fiber",
        quantity: 100
      }
    ],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/Junimo Hut.png"
  },
  {
    id: "earth-obelisk",
    name: "Earth Obelisk",
    description: "Warp to the mountains. Interact to teleport instantly.",
    builder: "Wizard",
    buildCost: 5e5,
    buildDays: 0,
    materials: [
      {
        id: "337",
        item: "Iridium Bar",
        quantity: 10
      },
      {
        id: "86",
        item: "Earth Crystal",
        quantity: 10
      }
    ],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/obelisks/Earth Obelisk.png"
  },
  {
    id: "water-obelisk",
    name: "Water Obelisk",
    description: "Warp to the beach. Interact to teleport instantly.",
    builder: "Wizard",
    buildCost: 5e5,
    buildDays: 0,
    materials: [
      {
        id: "337",
        item: "Iridium Bar",
        quantity: 5
      },
      {
        id: "372",
        item: "Clam",
        quantity: 10
      },
      {
        id: "393",
        item: "Coral",
        quantity: 10
      }
    ],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/obelisks/Water Obelisk.png"
  },
  {
    id: "desert-obelisk",
    name: "Desert Obelisk",
    description: "Warp to the desert. Interact to teleport instantly.",
    builder: "Wizard",
    buildCost: 1e6,
    buildDays: 0,
    materials: [
      {
        id: "337",
        item: "Iridium Bar",
        quantity: 20
      },
      {
        id: "88",
        item: "Coconut",
        quantity: 10
      },
      {
        id: "90",
        item: "Cactus Fruit",
        quantity: 10
      }
    ],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/obelisks/Desert Obelisk.png"
  },
  {
    id: "island-obelisk",
    name: "Island Obelisk",
    description: "Warp to Ginger Island. Interact to teleport instantly.",
    builder: "Wizard",
    buildCost: 1e6,
    buildDays: 0,
    materials: [
      {
        id: "337",
        item: "Iridium Bar",
        quantity: 10
      },
      {
        id: "852",
        item: "Dragon Tooth",
        quantity: 10
      },
      {
        id: "91",
        item: "Banana",
        quantity: 10
      }
    ],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/obelisks/Island Obelisk.png"
  },
  {
    id: "gold-clock",
    name: "Gold Clock",
    description: "Prevents debris from appearing on the farm. Fences never decay.",
    builder: "Wizard",
    buildCost: 1e7,
    buildDays: 0,
    materials: [],
    upgradeFrom: null,
    magical: true,
    image: "images/buildings/Gold Clock.png"
  }
];

// src/modules/buildings/index.ts
var allBuildings = buildings_default;
var BuildingQuery = class _BuildingQuery extends QueryBase {
  constructor(data = allBuildings) {
    super(data);
  }
  /** Filter by builder (Robin or Wizard). */
  byBuilder(builder) {
    return new _BuildingQuery(this.data.filter((b) => b.builder === builder));
  }
  /** Filter to magical buildings only (Wizard buildings constructed instantly). */
  magical() {
    return new _BuildingQuery(this.data.filter((b) => b.magical));
  }
  /** Filter to buildings that are upgrades of another building. */
  upgrades() {
    return new _BuildingQuery(this.data.filter((b) => b.upgradeFrom !== null));
  }
  /** Filter to base buildings (not upgrades). */
  base() {
    return new _BuildingQuery(this.data.filter((b) => b.upgradeFrom === null));
  }
  /** Sort by build cost. Default: `'asc'`. */
  sortByCost(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.buildCost - b.buildCost);
    return new _BuildingQuery(order === "desc" ? sorted.reverse() : sorted);
  }
  /** Sort alphabetically by name. */
  sortByName(order = "asc") {
    const sorted = [...this.data].sort((a, b) => a.name.localeCompare(b.name));
    return new _BuildingQuery(order === "desc" ? sorted.reverse() : sorted);
  }
};
function buildings(source = allBuildings) {
  return new BuildingQuery(source);
}

// src/save-file/index.ts
var import_fast_xml_parser = require("fast-xml-parser");

// src/save-file/parsers/util.ts
function normalizeItemId(raw) {
  return String(raw).replace(/^\([A-Z]+\)/, "");
}
function num(value) {
  if (value === void 0 || value === null) return 0;
  const n = Number(value);
  return isNaN(n) ? 0 : n;
}
function str(value, fallback = "") {
  if (value === void 0 || value === null) return fallback;
  return String(value);
}
function ensureArray(value) {
  if (value === void 0 || value === null) return [];
  return Array.isArray(value) ? value : [value];
}
function extractDictItems(dict) {
  if (!dict || typeof dict !== "object") return [];
  const d = dict;
  return ensureArray(d.item);
}

// src/save-file/parsers/v1/achievements.ts
function parseAchievements(achievements2) {
  return ensureArray(achievements2?.int).map(num);
}

// src/save-file/parsers/v1/animals.ts
function parseAnimals(root) {
  const result = [];
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    if (str(l.name) !== "Farm") continue;
    const buildings2 = ensureArray(l.buildings?.Building);
    for (const building of buildings2) {
      const b = building;
      const indoors = b.indoors;
      if (!indoors) continue;
      const animals2 = ensureArray(indoors.animals?.item);
      for (const animalItem of animals2) {
        const ai = animalItem;
        const a = ai.value;
        const faRaw = a?.FarmAnimal;
        const fa = Array.isArray(faRaw) ? faRaw[0] : faRaw;
        if (!fa) continue;
        result.push({
          id: str(fa.myID),
          name: str(fa.name),
          type: str(fa.type),
          buildingType: str(fa.buildingTypeILiveIn),
          friendship: num(fa.friendshipTowardFarmer),
          happiness: num(fa.happiness),
          age: num(fa.age),
          hasAnimalCracker: fa.hasEatenAnimalCracker === true || fa.hasEatenAnimalCracker === "true"
        });
      }
    }
    break;
  }
  return result;
}

// src/save-file/parsers/v1/buildings.ts
function parseBuildings(root) {
  const result = [];
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    if (str(l.name) !== "Farm") continue;
    const buildings2 = ensureArray(l.buildings?.Building);
    for (const building of buildings2) {
      const b = building;
      result.push({
        type: str(b.buildingType),
        tileX: num(b.tileX),
        tileY: num(b.tileY),
        animalCount: num(b.currentOccupants)
      });
    }
    break;
  }
  return result;
}

// src/save-file/parsers/item-names.ts
function buildItemNameMap() {
  const map = /* @__PURE__ */ new Map();
  const add = (id, name) => {
    if (id && name && !map.has(id)) map.set(id, name);
  };
  for (const item of crops_default) add(item.id, item.name);
  for (const item of fish_default) add(item.id, item.name);
  for (const item of forageables_default)
    add(item.id, item.name);
  for (const item of artisan_goods_default)
    add(item.id, item.name);
  for (const item of minerals_default) add(item.id, item.name);
  for (const item of cooking_default) add(item.id, item.name);
  for (const item of rings_default) add(item.id, item.name);
  for (const item of bait_default) add(item.id, item.name);
  for (const item of tackle_default) add(item.id, item.name);
  for (const item of crops_default) {
    if (item.seedId && item.seedName) add(item.seedId, item.seedName);
  }
  for (const tree of trees_default) {
    if (tree.produce) add(tree.produce.id, tree.produce.name);
  }
  for (const animal of animals_default) {
    if (animal.produce) add(animal.produce.id, animal.produce.name);
    if (animal.deluxeProduce) add(animal.deluxeProduce.id, animal.deluxeProduce.name);
  }
  for (const recipe of crafting_default) {
    if (!recipe.output.isBigCraftable) add(recipe.output.id, recipe.output.name);
    for (const ing of recipe.ingredients) add(ing.id, ing.name);
  }
  return map;
}
function buildBigCraftableNameMap() {
  const map = /* @__PURE__ */ new Map();
  for (const recipe of crafting_default) {
    if (recipe.output.isBigCraftable && !map.has(recipe.output.id)) {
      map.set(recipe.output.id, recipe.output.name);
    }
  }
  return map;
}
var itemNames = null;
var bigCraftableNames = null;
function resolveItemName(itemId) {
  if (!itemNames) itemNames = buildItemNameMap();
  return itemNames.get(itemId) ?? `Item ${itemId}`;
}
function resolveBigCraftableName(itemId) {
  if (!bigCraftableNames) bigCraftableNames = buildBigCraftableNameMap();
  return bigCraftableNames.get(itemId) ?? `BigCraftable ${itemId}`;
}
function resolveRewardName(type, itemId) {
  if (type === "BO") return resolveBigCraftableName(itemId);
  return resolveItemName(itemId);
}

// src/save-file/parsers/v1/bundles.ts
var JOJA_MAIL_FLAGS = [
  "jojaBoilerRoom",
  "jojaCraftsRoom",
  "jojaFishTank",
  "jojaPantry",
  "jojaVault"
];
var AREA_NAMES = {
  0: "Pantry",
  1: "Crafts Room",
  2: "Fish Tank",
  3: "Boiler Room",
  4: "Vault",
  5: "Bulletin Board",
  6: "Abandoned Joja Mart"
};
var ROOM_KEY_TO_AREA = {
  Pantry: 0,
  "Crafts Room": 1,
  "Fish Tank": 2,
  "Boiler Room": 3,
  Vault: 4,
  "Bulletin Board": 5,
  "Abandoned Joja Mart": 6
};
var QUALITY_NAMES = {
  0: "Normal",
  1: "Silver",
  2: "Gold",
  4: "Iridium"
};
var REWARD_TYPES = {
  O: "Object",
  BO: "Big Craftable",
  F: "Furniture",
  H: "Hat",
  C: "Clothing",
  R: "Ring"
};
function parseBundleDef(key, value) {
  const [roomKey, indexStr] = key.split("/");
  const bundleIndex = parseInt(indexStr, 10);
  const areaIndex = ROOM_KEY_TO_AREA[roomKey] ?? -1;
  const room = AREA_NAMES[areaIndex] ?? roomKey;
  const parts = value.split("/");
  const internalName = parts[0];
  const displayName = parts[6] || internalName;
  let reward = null;
  const rewardStr = parts[1]?.trim();
  if (rewardStr) {
    const rewardParts = rewardStr.split(" ");
    if (rewardParts.length >= 3) {
      const type = rewardParts[0];
      const itemId = rewardParts[1];
      const quantity = parseInt(rewardParts[2], 10);
      reward = {
        type: REWARD_TYPES[type] ?? type,
        itemId,
        name: resolveRewardName(type, itemId),
        quantity
      };
    }
  }
  const itemsStr = parts[2]?.trim() ?? "";
  const itemTokens = itemsStr.split(" ");
  const items = [];
  for (let i = 0; i + 2 < itemTokens.length; i += 3) {
    const itemId = itemTokens[i];
    const quantity = parseInt(itemTokens[i + 1], 10);
    const quality = parseInt(itemTokens[i + 2], 10);
    items.push({ itemId, quantity, quality });
  }
  const itemsRequiredStr = parts[4]?.trim();
  const itemsRequired = itemsRequiredStr ? parseInt(itemsRequiredStr, 10) : items.length;
  return {
    bundleIndex,
    room,
    areaIndex,
    name: displayName,
    items,
    itemsRequired: itemsRequired || items.length,
    reward
  };
}
function parseBundles(root, mail) {
  const bundleDefs = /* @__PURE__ */ new Map();
  const bundleDataItems = extractDictItems(root.bundleData);
  for (const item of bundleDataItems) {
    const key = item.key;
    const val = item.value;
    const keyStr = String(key?.string ?? "");
    const valStr = String(val?.string ?? "");
    if (keyStr && valStr) {
      const def = parseBundleDef(keyStr, valStr);
      bundleDefs.set(def.bundleIndex, def);
    }
  }
  const slotMap = /* @__PURE__ */ new Map();
  let areasComplete = [];
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    if (l.name !== "CommunityCenter") continue;
    const bundleItems = extractDictItems(l.bundles);
    for (const item of bundleItems) {
      const key = item.key;
      const val = item.value;
      const booleans = ensureArray(val?.ArrayOfBoolean?.boolean);
      const slots = booleans.map((b) => b === true || b === "true");
      slotMap.set(num(key?.int), slots);
    }
    const areasBooleans = ensureArray(l.areasComplete?.boolean);
    areasComplete = areasBooleans.map((b) => b === true || b === "true");
    break;
  }
  const bundles2 = [];
  for (const [index, def] of bundleDefs) {
    const slots = slotMap.get(index) ?? [];
    const items = def.items.map((reqItem, i) => {
      const isGold = reqItem.itemId === "-1";
      return {
        itemId: reqItem.itemId,
        name: isGold ? `${reqItem.quantity.toLocaleString()}g` : resolveItemName(reqItem.itemId),
        quantity: reqItem.quantity,
        quality: reqItem.quality,
        qualityName: QUALITY_NAMES[reqItem.quality] ?? `Quality ${reqItem.quality}`,
        completed: slots[i] === true
      };
    });
    const itemsCompleted = items.filter((it) => it.completed).length;
    bundles2.push({
      bundleIndex: index,
      name: def.name,
      room: def.room,
      items,
      itemsRequired: def.itemsRequired,
      itemsCompleted,
      complete: itemsCompleted >= def.itemsRequired,
      reward: def.reward
    });
  }
  bundles2.sort((a, b) => a.bundleIndex - b.bundleIndex);
  const roomMap = /* @__PURE__ */ new Map();
  for (const bundle of bundles2) {
    const def = bundleDefs.get(bundle.bundleIndex);
    const existing = roomMap.get(def.areaIndex) ?? [];
    existing.push(bundle);
    roomMap.set(def.areaIndex, existing);
  }
  const rooms = [];
  for (const [areaIndex, roomBundles] of roomMap) {
    rooms.push({
      name: AREA_NAMES[areaIndex] ?? `Area ${areaIndex}`,
      areaIndex,
      complete: areasComplete[areaIndex] === true,
      bundles: roomBundles
    });
  }
  rooms.sort((a, b) => a.areaIndex - b.areaIndex);
  const isJojaRoute = JOJA_MAIL_FLAGS.some((f) => mail.has(f));
  const isCCComplete = mail.has("ccIsComplete");
  return { bundles: bundles2, rooms, isJojaRoute, isCCComplete };
}

// src/save-file/parsers/v1/date.ts
function getStatDaysPlayed(player) {
  const stats = player.stats;
  if (!stats) return 0;
  const values = stats.Values;
  if (!values) return 0;
  const items = Array.isArray(values.item) ? values.item : [values.item];
  for (const item of items) {
    const i = item;
    const key = i.key?.string;
    if (key === "daysPlayed") {
      return num(i.value?.unsignedInt);
    }
  }
  return 0;
}
function parseDate(player, root) {
  return {
    year: num(root.year),
    season: str(root.currentSeason),
    day: num(root.dayOfMonth),
    totalDaysPlayed: getStatDaysPlayed(player)
  };
}

// src/save-file/parsers/v1/family.ts
function parseChildren(root) {
  const result = [];
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    const name = str(l.name);
    if (name !== "FarmHouse") continue;
    const characters = ensureArray(l.characters?.NPC);
    for (const npc of characters) {
      const n = npc;
      const xsiType = n["@_xsi:type"] ?? n["@_type"] ?? "";
      if (xsiType !== "Child") continue;
      result.push({
        name: str(n.name),
        age: num(n.daysOld),
        gender: str(n.Gender, "Unknown")
      });
    }
    break;
  }
  return result;
}
function parsePet(root) {
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    const name = str(l.name);
    if (name !== "Farm" && name !== "FarmHouse") continue;
    const characters = ensureArray(l.characters?.NPC);
    for (const npc of characters) {
      const n = npc;
      const xsiType = str(
        n["@_xsi:type"] ?? n["@_type"]
      );
      if (xsiType !== "Pet" && xsiType !== "Cat" && xsiType !== "Dog") continue;
      return {
        name: str(n.name),
        type: str(n.petType, xsiType),
        breed: num(n.whichBreed),
        friendship: num(n.friendshipTowardFarmer)
      };
    }
  }
  return null;
}

// src/save-file/parsers/v1/fish.ts
function parseFishCaught(fishCaught) {
  const result = [];
  for (const item of extractDictItems(fishCaught)) {
    const key = item.key;
    const val = item.value;
    const id = normalizeItemId(str(key?.string));
    if (!id) continue;
    const ints = ensureArray(val?.ArrayOfInt?.int).map(num);
    result.push({
      id,
      timesCaught: ints[0] ?? 0,
      largestSize: ints[1] ?? -1
    });
  }
  return result;
}

// src/save-file/parsers/v1/friendships.ts
function parseFriendships(friendshipData) {
  const result = [];
  for (const item of extractDictItems(friendshipData)) {
    const key = item.key;
    const val = item.value;
    const name = str(key?.string);
    if (!name) continue;
    const friendship = val?.Friendship;
    const points = num(friendship?.Points);
    result.push({
      name,
      points,
      hearts: Math.floor(points / 250),
      status: str(friendship?.Status, "Friendly"),
      giftsThisWeek: num(friendship?.GiftsThisWeek)
    });
  }
  return result.sort((a, b) => b.points - a.points);
}

// src/save-file/parsers/v1/inventory.ts
function parseInventory(items) {
  const result = [];
  for (const item of ensureArray(items?.Item)) {
    const i = item;
    const name = str(i.name);
    if (!name) continue;
    const xsiType = str(
      i["@_xsi:type"] ?? i["@_type"]
    );
    result.push({
      id: normalizeItemId(str(i.itemId)),
      name,
      type: xsiType,
      stack: num(i.stack) || 1,
      quality: num(i.quality)
    });
  }
  return result;
}

// src/save-file/parsers/v1/island-upgrades.ts
function parseIslandUpgrades(mail) {
  return {
    firstParrot: mail.has("Island_FirstParrot"),
    turtle: mail.has("Island_Turtle"),
    house: mail.has("Island_UpgradeHouse"),
    resort: mail.has("Island_Resort"),
    trader: mail.has("Island_UpgradeTrader"),
    bridge: mail.has("Island_UpgradeBridge"),
    parrotPlatforms: mail.has("Island_UpgradeParrotPlatform"),
    mailbox: mail.has("Island_UpgradeHouse_Mailbox"),
    obelisk: mail.has("Island_W_Obelisk"),
    volcanoBridge: mail.has("Island_VolcanoBridge"),
    volcanoShortcut: mail.has("Island_VolcanoShortcutOut")
  };
}

// src/save-file/parsers/v1/mail.ts
var QI_ORDER_IDS = new Set(
  special_orders_default.filter((o) => o.type === "qi").map((o) => o.id)
);
function parseMail(mailReceived) {
  return ensureArray(mailReceived?.string).map((m) => str(m)).filter(Boolean);
}
function parseSpecialOrders(root) {
  const completed = ensureArray(root.completedSpecialOrders?.string).map((m) => str(m)).filter(Boolean);
  const townCompleted = completed.filter((id) => !QI_ORDER_IDS.has(id));
  const qiCompleted = completed.filter((id) => QI_ORDER_IDS.has(id));
  return { completed, townCompleted, qiCompleted };
}
function parseBooksRead(player) {
  const books = [];
  const items = ensureArray(player.stats?.Values?.item);
  for (const item of items) {
    const key = String(item.key?.string ?? "");
    if (key.startsWith("Book_")) {
      books.push(key.replace("Book_", ""));
    }
  }
  return books;
}

// src/save-file/parsers/v1/mine-progress.ts
function parseMineProgress(player, root, mail) {
  const deepest = num(player.deepestMineLevel);
  return {
    deepestMineLevel: Math.min(deepest, 120),
    deepestSkullCavernLevel: deepest > 120 ? deepest - 120 : 0,
    hasRustyKey: mail.has("HasRustyKey") || mail.has("ccBoilerRoom") || num(root.mine_lowestLevelReached) >= 120,
    hasSkullKey: mail.has("HasSkullKey") || deepest >= 120
  };
}

// src/save-file/parsers/v1/monsters.ts
function parseMonstersKilled(player) {
  const result = [];
  const items = extractDictItems(player.stats?.specificMonstersKilled);
  for (const item of items) {
    const key = item.key;
    const val = item.value;
    const name = str(key?.string);
    if (!name) continue;
    result.push({
      name,
      count: num(val?.int)
    });
  }
  return result.sort((a, b) => b.count - a.count);
}

// src/save-file/parsers/v1/museum.ts
function parseDonations(root) {
  const locations2 = ensureArray(root.locations?.GameLocation);
  for (const loc of locations2) {
    const l = loc;
    if (str(l.name) !== "ArchaeologyHouse") continue;
    const pieces = ensureArray(l.museumPieces?.item);
    return pieces.map((p) => {
      const item = p;
      const val = item.value;
      return str(val?.string);
    }).filter(Boolean);
  }
  return [];
}
function parseFoundItems(data) {
  const result = [];
  for (const item of extractDictItems(data)) {
    const key = item.key;
    const val = item.value;
    const id = str(key?.string);
    if (!id) continue;
    let count;
    const arr = val?.ArrayOfInt;
    if (arr) {
      const ints = ensureArray(arr.int).map(num);
      count = ints[0] ?? 0;
    } else {
      count = num(val?.int);
    }
    result.push({ id, count });
  }
  return result;
}
function parseMuseum(root, player) {
  return {
    donations: parseDonations(root),
    artifactsFound: parseFoundItems(player.archaeologyFound),
    mineralsFound: parseFoundItems(player.mineralsFound)
  };
}

// src/save-file/parsers/v1/perfection.ts
var OBELISK_TYPES = ["Earth Obelisk", "Water Obelisk", "Desert Obelisk", "Island Obelisk"];
function parsePerfection(root) {
  const locations2 = ensureArray(root.locations?.GameLocation);
  let hasGoldClock = false;
  const obelisks = [];
  for (const loc of locations2) {
    const l = loc;
    if (str(l.name) !== "Farm") continue;
    const buildings2 = ensureArray(l.buildings?.Building);
    for (const building of buildings2) {
      const b = building;
      const btype = str(b.buildingType);
      if (btype === "Gold Clock") hasGoldClock = true;
      if (OBELISK_TYPES.includes(btype) && !obelisks.includes(btype)) {
        obelisks.push(btype);
      }
    }
    break;
  }
  return {
    farmPerfect: root.farmPerfect === true || root.farmPerfect === "true",
    waivers: num(root.perfectionWaivers),
    hasGoldClock,
    obelisks
  };
}

// src/save-file/parsers/v1/player.ts
var XP_THRESHOLDS = [0, 100, 380, 770, 1300, 2150, 3300, 4800, 6900, 1e4, 15e3];
function xpToLevel(xp) {
  let level = 0;
  for (let i = XP_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= XP_THRESHOLDS[i]) {
      level = i;
      break;
    }
  }
  return level;
}
function parseSkills(xpArray) {
  const xpValues = ensureArray(xpArray);
  const xp = xpValues.map(num);
  return {
    farming: { level: xpToLevel(xp[0] ?? 0), xp: xp[0] ?? 0 },
    fishing: { level: xpToLevel(xp[1] ?? 0), xp: xp[1] ?? 0 },
    foraging: { level: xpToLevel(xp[2] ?? 0), xp: xp[2] ?? 0 },
    mining: { level: xpToLevel(xp[3] ?? 0), xp: xp[3] ?? 0 },
    combat: { level: xpToLevel(xp[4] ?? 0), xp: xp[4] ?? 0 }
  };
}
function getStatValue(stats, key) {
  const items = ensureArray(stats?.Values?.item);
  for (const item of items) {
    const k = item.key?.string;
    if (k === key) {
      return num(item.value?.unsignedInt);
    }
  }
  return 0;
}
var MASTERY_PERKS = [
  { statKey: "mastery_0", id: "farming", name: "Farming Mastery" },
  { statKey: "mastery_1", id: "fishing", name: "Fishing Mastery" },
  { statKey: "mastery_2", id: "foraging", name: "Foraging Mastery" },
  { statKey: "mastery_3", id: "mining", name: "Mining Mastery" },
  { statKey: "mastery_4", id: "combat", name: "Combat Mastery" }
];
function parseMastery(stats) {
  const perks = MASTERY_PERKS.map(({ statKey, id, name }) => ({
    id,
    name,
    unlocked: getStatValue(stats, statKey) > 0
  }));
  return {
    xp: getStatValue(stats, "MasteryExp"),
    levelsSpent: getStatValue(stats, "masteryLevelsSpent"),
    perks
  };
}
function parsePlayer(player, root) {
  return {
    name: str(player.name),
    farmName: str(player.farmName),
    favoriteThing: str(player.favoriteThing),
    gender: str(player.Gender),
    money: num(player.money),
    totalMoneyEarned: num(player.totalMoneyEarned),
    spouse: player.spouse ? str(player.spouse) : null,
    houseUpgradeLevel: num(player.houseUpgradeLevel),
    maxHealth: num(player.maxHealth),
    maxStamina: num(player.maxStamina),
    skills: parseSkills(player.experiencePoints?.int),
    mastery: parseMastery(player.stats),
    gameVersion: str(root.gameVersion)
  };
}

// src/save-file/parsers/v1/powers.ts
var POWER_ITEMS = special_items_default.filter(
  (item) => item.type === "special-item"
);
var EXTRA_POWERS = [
  { id: "prairie-king-victory", name: "Prairie King Victory", check: (m) => m.has("Beat_PK") },
  { id: "junimo-kart-victory", name: "Junimo Kart Victory", check: (m) => m.has("JunimoKart") }
];
function parsePowers(mail, events2) {
  const specialItems2 = POWER_ITEMS.map((item) => {
    const mailMatch = item.mailFlags?.some((f) => mail.has(f)) ?? false;
    const eventMatch = item.eventFlags?.some((f) => events2.has(f)) ?? false;
    return {
      id: item.id,
      name: item.name,
      acquired: mailMatch || eventMatch
    };
  });
  for (const extra of EXTRA_POWERS) {
    specialItems2.push({
      id: extra.id,
      name: extra.name,
      acquired: extra.check(mail)
    });
  }
  return { specialItems: specialItems2 };
}

// src/save-file/parsers/v1/professions.ts
var PROFESSION_NAMES = new Map(
  professions_default.map((p) => [parseInt(p.id, 10), p.name])
);
function parseProfessions(professions2) {
  return ensureArray(professions2?.int).map((raw) => {
    const id = num(raw);
    return { id, name: PROFESSION_NAMES.get(id) ?? `Unknown(${id})` };
  });
}

// src/save-file/parsers/v1/quests.ts
function parseQuests(questLog) {
  const result = [];
  for (const quest of ensureArray(questLog?.Quest)) {
    const q = quest;
    result.push({
      id: str(q.id),
      title: str(q.questTitle),
      description: str(q._questDescription),
      type: num(q.questType),
      completed: q.completed === true || q.completed === "true"
    });
  }
  return result;
}

// src/save-file/parsers/v1/raccoons.ts
function parseRaccoons(root, mail) {
  return {
    timesFed: num(root.timesFedRaccoons),
    daysPlayedWhenLastFinished: num(root.daysPlayedWhenLastRaccoonBundleWasFinished),
    treeFallen: mail.has("raccoonTreeFallen"),
    movedIn: mail.has("raccoonMovedIn")
  };
}

// src/save-file/parsers/v1/recipes.ts
function parseRecipes(data) {
  const result = [];
  for (const item of extractDictItems(data)) {
    const key = item.key;
    const val = item.value;
    const name = str(key?.string);
    if (!name) continue;
    result.push({
      name,
      timesMade: num(val?.int)
    });
  }
  return result;
}
function parseCookingRecipes(data) {
  return parseRecipes(data);
}
function parseCraftingRecipes(data) {
  return parseRecipes(data);
}

// src/save-file/parsers/v1/secret-notes.ts
function parseSecretNotes(player, mail) {
  const allNotes = ensureArray(player.secretNotesSeen?.int).map(num);
  return {
    notesFound: allNotes.filter((n) => n < 1e3),
    journalScrapsFound: allNotes.filter((n) => n >= 1e3).map((n) => n - 1e3),
    hasMagnifyingGlass: mail.has("HasMagnifyingGlass") || player.hasMagnifyingGlass === true || player.hasMagnifyingGlass === "true"
  };
}

// src/save-file/parsers/v1/shipping.ts
function parseShipped(basicShipped) {
  const result = [];
  for (const item of extractDictItems(basicShipped)) {
    const key = item.key;
    const val = item.value;
    const id = normalizeItemId(str(key?.string));
    if (!id) continue;
    result.push({
      id,
      count: num(val?.int)
    });
  }
  return result;
}

// src/save-file/parsers/v1/stardrops.ts
function parseStardrops(mailReceived) {
  const mail = new Set(ensureArray(mailReceived?.string).map((m) => str(m)));
  return stardrops_default.map((stardrop) => ({
    id: stardrop.id,
    name: stardrop.name,
    collected: mail.has(stardrop.id)
  }));
}

// src/save-file/parsers/v1/stats.ts
function parseStats(player) {
  const raw = {};
  const items = ensureArray(player.stats?.Values?.item);
  for (const item of items) {
    const key = item.key?.string;
    const val = num(item.value?.unsignedInt);
    if (key) raw[key] = val;
  }
  return {
    daysPlayed: raw.daysPlayed ?? 0,
    stepsTaken: raw.stepsTaken ?? 0,
    fishCaught: raw.fishCaught ?? 0,
    itemsShipped: raw.itemsShipped ?? 0,
    itemsForaged: raw.itemsForaged ?? 0,
    itemsCrafted: raw.itemsCrafted ?? 0,
    itemsCooked: raw.itemsCooked ?? 0,
    monstersKilled: raw.monstersKilled ?? 0,
    questsCompleted: raw.questsCompleted ?? 0,
    geodesCracked: raw.geodesCracked ?? 0,
    giftsGiven: raw.giftsGiven ?? 0,
    timesFished: raw.timesFished ?? 0,
    timesUnconscious: raw.timesUnconscious ?? 0,
    seedsSown: raw.seedsSown ?? 0,
    treesChopped: raw.TreesChopped ?? 0,
    rocksCrushed: raw.rocksCrushed ?? 0,
    raw
  };
}

// src/save-file/parsers/v1/walnuts.ts
function parseWalnuts(root) {
  const collected = ensureArray(root.collectedNutTracker?.string).map((s) => str(s)).filter(Boolean);
  return {
    found: num(root.goldenWalnutsFound),
    collected
  };
}

// src/save-file/parser-registry.ts
var v1 = (ctx) => ({
  player: parsePlayer(ctx.player, ctx.root),
  farm: { type: ctx.root.whichFarm, name: ctx.player.farmName },
  date: parseDate(ctx.player, ctx.root),
  inventory: parseInventory(ctx.player.items),
  fishCaught: parseFishCaught(ctx.player.fishCaught),
  itemsShipped: parseShipped(ctx.player.basicShipped),
  museum: parseMuseum(ctx.root, ctx.player),
  friendships: parseFriendships(ctx.player.friendshipData),
  achievements: parseAchievements(ctx.player.achievements),
  activeQuests: parseQuests(ctx.player.questLog),
  stardrops: parseStardrops(ctx.player.mailReceived),
  stats: parseStats(ctx.player),
  animals: parseAnimals(ctx.root),
  buildings: parseBuildings(ctx.root),
  cookingRecipes: parseCookingRecipes(ctx.player.cookingRecipes),
  craftingRecipes: parseCraftingRecipes(ctx.player.craftingRecipes),
  bundles: parseBundles(ctx.root, ctx.mailSet),
  monstersKilled: parseMonstersKilled(ctx.player),
  mail: ctx.mailArray,
  specialOrders: parseSpecialOrders(ctx.root),
  professions: parseProfessions(ctx.player.professions),
  booksRead: parseBooksRead(ctx.player),
  eventsSeen: ctx.eventsSeen,
  secretNotes: parseSecretNotes(ctx.player, ctx.mailSet),
  walnuts: parseWalnuts(ctx.root),
  islandUpgrades: parseIslandUpgrades(ctx.mailSet),
  children: parseChildren(ctx.root),
  pet: parsePet(ctx.root),
  powers: parsePowers(ctx.mailSet, ctx.eventsSet),
  raccoons: parseRaccoons(ctx.root, ctx.mailSet),
  perfection: parsePerfection(ctx.root),
  mineProgress: parseMineProgress(ctx.player, ctx.root, ctx.mailSet)
});
var PARSER_SETS = {
  1: v1
};
function getParserSet(apiVersion) {
  return PARSER_SETS[apiVersion] ?? PARSER_SETS[Math.max(...Object.keys(PARSER_SETS).map(Number))];
}

// src/save-file/parsers/v1/events.ts
function parseEventsSeen(player) {
  return ensureArray(player.eventsSeen?.int).map((e) => str(e)).filter(Boolean);
}

// src/save-file/versions.ts
var VERSION_RANGES = [
  { minVersion: "1.0.0", maxVersion: null, apiVersion: 1 }
];
var LATEST_API_VERSION = 1;
function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const na = pa[i] ?? 0;
    const nb = pb[i] ?? 0;
    if (na < nb) return -1;
    if (na > nb) return 1;
  }
  return 0;
}
function resolveApiVersion(gameVersion) {
  for (const range of VERSION_RANGES) {
    const aboveMin = compareVersions(gameVersion, range.minVersion) >= 0;
    const belowMax = range.maxVersion === null || compareVersions(gameVersion, range.maxVersion) <= 0;
    if (aboveMin && belowMax) {
      return range.apiVersion;
    }
  }
  return LATEST_API_VERSION;
}

// src/save-file/index.ts
var ARRAY_TAG_NAMES = [
  "item",
  "Item",
  "int",
  "Quest",
  "Building",
  "FarmAnimal",
  "GameLocation",
  "SpecialOrder",
  "NPC"
];
function isArrayTag(name) {
  return ARRAY_TAG_NAMES.includes(name);
}
var parserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  isArray: isArrayTag
};
function parseSaveFile(xml) {
  const parser = new import_fast_xml_parser.XMLParser(parserOptions);
  const doc = parser.parse(xml);
  const root = doc.SaveGame;
  const player = root.player;
  const mailArray = parseMail(player.mailReceived);
  const mailSet = new Set(mailArray);
  const eventsSeen = parseEventsSeen(player);
  const eventsSet = new Set(eventsSeen);
  const gameVersion = String(root.gameVersion ?? "");
  const apiVersion = resolveApiVersion(gameVersion);
  const ctx = { root, player, mailArray, mailSet, eventsSeen, eventsSet };
  const parserSet = getParserSet(apiVersion);
  return {
    apiVersion,
    ...parserSet(ctx)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AchievementQuery,
  AnimalQuery,
  ArtifactQuery,
  ArtisanGoodQuery,
  BaitQuery,
  BlacksmithQuery,
  BooksellerItemQuery,
  BooksellerTradeQuery,
  BuildingQuery,
  BundleQuery,
  CarpenterQuery,
  CasinoQuery,
  CollectionItemQuery,
  CollectionsQuery,
  ConcessionQuery,
  CookingQuery,
  CraftingQuery,
  CropQuery,
  DesertTraderQuery,
  DwarfShopQuery,
  EventQuery,
  FarmMapQuery,
  FieldOfficeDonationQuery,
  FieldOfficeQuery,
  FishQuery,
  FootwearQuery,
  ForageableQuery,
  GoldenWalnutQuery,
  GrandpaEvaluator,
  GuildQuery,
  HatQuery,
  HouseRenovationQuery,
  HouseUpgradeQuery,
  IslandTraderQuery,
  JojaQuery,
  KrobusQuery,
  LATEST_API_VERSION,
  LocationQuery,
  LostBookQuery,
  MASTERY_LEVELS,
  MarnieQuery,
  MedicalSupplyQuery,
  MineralQuery,
  MixedSeedQuery,
  MonsterLootQuery,
  MonsterQuery,
  MonsterSlayerGoalQuery,
  OasisQuery,
  PerfectionQuery,
  PierreQuery,
  ProfessionQuery,
  QiStockQuery,
  QualityCalculator,
  QuestQuery,
  RingQuery,
  SKILL_TITLES,
  SaloonQuery,
  SeasonQuery,
  SecretNoteQuery,
  SkillQuery,
  SpecialItemQuery,
  SpecialOrderQuery,
  StarDropQuery,
  TackleQuery,
  ToolQuery,
  TreeQuery,
  TrinketQuery,
  VillagerQuery,
  VolcanoShopQuery,
  WeaponQuery,
  WeaponStatQuery,
  WeatherQuery,
  WillyQuery,
  WizardQuery,
  achievements,
  animals,
  applyPriceFormula,
  artifacts,
  artisanGoods,
  bait,
  blacksmith,
  booksellerShop,
  booksellerTrades,
  buildings,
  bundles,
  calculateArtisanPrice,
  carpenter,
  casino,
  collections,
  concessions,
  cooking,
  crafting,
  crops,
  desertTrader,
  dwarfShop,
  events,
  fieldOffice,
  fieldOfficeDonations,
  findFestival,
  fish,
  footwear,
  forageables,
  getMasteryLevel,
  getProfessionOptions,
  getTitle,
  getTitleScore,
  goldenWalnuts,
  grandpaEvaluator,
  guild,
  hats,
  houseRenovations,
  houseUpgrades,
  isFarmAnimal,
  isPet,
  islandTrader,
  joja,
  krobus,
  locations,
  lostBooks,
  maps,
  marnie,
  medicalSupplies,
  minerals,
  mixedSeeds,
  monsterLoot,
  monsterSlayerGoals,
  monsters,
  oasis,
  parseSaveFile,
  perfection,
  pierre,
  professions,
  qiStock,
  qualityCalculator,
  quests,
  resolveApiVersion,
  rings,
  saloon,
  search,
  seasons,
  secretNotes,
  skills,
  specialItems,
  specialOrders,
  starDrops,
  tackle,
  tools,
  trees,
  trinkets,
  universalGifts,
  villagers,
  volcanoShop,
  weaponStats,
  weapons,
  weather,
  willy,
  wizard
});
//# sourceMappingURL=index.js.map