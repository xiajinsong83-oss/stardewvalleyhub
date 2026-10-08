interface Achievement {
    id: string;
    name: string;
    description: string;
    image: string;
    icon: string | null;
    reward: string | null;
    secret: boolean;
}

type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'ginger island';
type Quality = 'silver' | 'gold' | 'iridium';
type ItemQuality = 'base' | Quality;
interface EnergyHealth {
    energy?: number;
    health?: number;
    poison?: boolean;
}
interface SeedBuyPrice {
    place: string;
    price: number;
}
interface Ingredient {
    name: string;
    id: string;
    quantity: number;
}
interface Stage {
    name: string;
    image: string;
}
interface GiftPreferences {
    loves: string[];
    likes: string[];
    neutrals: string[];
    dislikes: string[];
    hates: string[];
}
type KnowledgeBonus = 'spring-onion-mastery' | 'bears-knowledge';
type ProfessionBonus = 'artisan' | 'rancher' | 'tiller' | 'blacksmith' | 'gemologist' | 'tapper' | 'fisher' | 'angler';
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
interface Buff {
    stat: string;
    value: number;
}
interface ArtisanUses {
    honey: boolean;
    wine: boolean;
    juice: boolean;
    pickles: boolean;
    jelly: boolean;
    driedMushrooms: boolean;
    driedFruit: boolean;
}
interface TraderShopItem {
    id: string;
    name: string;
    description: string;
    image: string;
    tradeItemId: string;
    tradeItemName: string;
    tradeItemImage: string;
    tradeAmount: number;
    day?: DayOfWeek;
    isRecipe?: boolean;
    availability?: string;
}

interface AnimalProduce {
    id: string;
    name: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    maxQuality: ItemQuality;
    image: string;
}
interface Pet {
    type: 'pet';
    id: string;
    name: string;
    variant?: number;
    purchasePrice: number | null;
    image: string;
}
interface FarmAnimal {
    type: 'farm-animal';
    id: string;
    name: string;
    description: string;
    building: string;
    purchasePrice: number | null;
    sellPrice: number;
    daysToMature: number;
    daysToProduce: number;
    harvestMethod: 'drop' | 'tool' | 'dig';
    harvestTool: string | null;
    produce: AnimalProduce;
    deluxeProduce: AnimalProduce | null;
    image: string;
}
type Animal = Pet | FarmAnimal;

type BundleRoom = 'crafts-room' | 'pantry' | 'fish-tank' | 'boiler-room' | 'bulletin-board' | 'vault' | 'abandoned-joja-mart';
interface BundleItem {
    name: string;
    quantity: number;
    quality?: Quality;
}
interface BundleReward {
    name: string;
    quantity: number;
}
interface ItemBundle {
    id: string;
    type: 'items';
    name: string;
    room: BundleRoom;
    bundleGroup: number;
    image: string;
    items: BundleItem[];
    itemsRequired: number;
    itemsChosenRandom: boolean;
    numItemsAvailable: number;
    reward: BundleReward;
    remixBundle: boolean;
}
interface GoldBundle {
    id: string;
    type: 'gold';
    name: string;
    room: BundleRoom;
    bundleGroup: number;
    image: string;
    goldCost: number;
    reward: BundleReward;
    remixBundle: boolean;
}
interface JojaBundle {
    id: string;
    type: 'joja mart';
    name: string;
    description: string;
    goldCost: number;
    unlock: string;
}
type Bundle = ItemBundle | GoldBundle | JojaBundle;

type ArtisanGoodBuff = Buff;
interface ArtisanIngredient {
    name: string;
    id: string | null;
    quantity: number | null;
}
interface CaskAging {
    silverDays: number;
    goldDays: number;
    iridiumDays: number;
}
interface PriceFormula {
    multiplier: number;
    addend: number;
}
interface ArtisanGood {
    id: string;
    name: string;
    description: string;
    equipment: string;
    ingredients: ArtisanIngredient[];
    processingMinutes: number;
    processingDays: number;
    sellPrice: number | null;
    profession: ProfessionBonus[];
    sellPriceFormula: string | null;
    priceFormula: PriceFormula | null;
    qualityLevels: boolean;
    cask: CaskAging | null;
    energyHealthFormula: string | null;
    energyHealth?: EnergyHealth | null;
    buffs: ArtisanGoodBuff[];
    buffDuration: number | null;
    maxQuality: ItemQuality;
    image: string;
}

interface QualityPrice {
    quality: Quality;
    icon: string;
    value: number;
}
interface QualityEnergyHealth {
    quality: Quality;
    icon: string;
    energy: number;
    health: number;
}
interface ArtisanResult {
    sellPrice: number;
}
interface ArtisanEnergyResult {
    sellPrice: number;
    energy: number;
    health: number;
}

interface HarvestQuantity {
    min: number;
    max: number;
}
interface Crop {
    id: string;
    name: string;
    category: string;
    seasons: Season[];
    growDays: number;
    regrowDays: number | null;
    seedId: string;
    seedName: string;
    seedBuyPrices: SeedBuyPrice[];
    seedSellPrice: number;
    cropSellPrice: number;
    profession: ProfessionBonus[];
    harvestQuantity: HarvestQuantity;
    trellis: boolean;
    giant: boolean;
    description: string;
    image: string;
    seedImage: string;
    giantImage?: string;
    stages: Stage[];
    energyHealth?: EnergyHealth;
    maxQuality: ItemQuality;
    artisanUses: ArtisanUses;
    farmingXP?: number;
}

interface FarmMap {
    id: string;
    name: string;
    description: string;
    skills: string[];
    tillableTiles: number;
    features: string[];
    startingItems: string[];
    image: string;
    icon: string;
}

type MixedSeedProduces = Partial<Record<Season, string[]>>;
interface MixedSeed {
    id: string;
    name: string;
    sellPrice: number;
    description: string;
    image: string;
    buyPrices: SeedBuyPrice[];
    produces: MixedSeedProduces;
}

interface MonsterLoot {
    id: string;
    name: string;
    sellPrice: number;
    image: string;
    droppedBy: string[];
}
interface MonsterVariant {
    name: string;
    hp: number;
    damage: number;
    speed: number;
    xp: number;
    image: string;
    locations: string[];
    lootIds: string[];
    dangerous: boolean;
}
interface Monster {
    id: string;
    name: string;
    hp: number;
    damage: number;
    speed: number;
    xp: number;
    image: string;
    locations: string[];
    lootIds: string[];
    dangerous: boolean;
    variants?: MonsterVariant[];
}

interface SlayerReward {
    name: string;
    itemId: string | null;
    image: string | null;
}
interface MonsterSlayerGoal {
    id: string;
    name: string;
    killTarget: number;
    monsters: string[];
    reward: SlayerReward;
}

type SearchResultKind = 'crop' | 'crop-seed' | 'fruit-tree' | 'fruit-tree-produce' | 'wild-tree' | 'wild-tree-seed' | 'wild-tree-tapper' | 'animal' | 'animal-produce' | 'artisan-good' | 'monster' | 'monster-loot' | 'ring' | 'tool' | 'weapon' | 'hat' | 'footwear' | 'forageable' | 'fish' | 'bait' | 'tackle' | 'cooked-dish' | 'artifact' | 'mineral' | 'geode' | 'mining-node' | 'mineral-resource' | 'crafting-recipe' | 'rarecrow';
interface SearchResult {
    kind: SearchResultKind;
    id: string;
    name: string;
    image: string;
    sellPrice: number | null;
    parents?: {
        id: string;
        name: string;
    }[];
}

interface SkillLevelRecipes {
    crafting: string[];
    cooking: string[];
    additional: string[];
}
interface SkillLevel {
    level: number;
    xpRequired: number;
    totalXp: number;
    recipes: SkillLevelRecipes;
}
interface MasteryUnlock {
    name: string;
    description: string;
}
interface SkillMastery {
    unlocks: MasteryUnlock[];
}
interface Skill {
    id: string;
    name: string;
    description: string;
    toolBonus: string;
    image: string;
    levels: SkillLevel[];
    mastery: SkillMastery;
}
interface TitleThreshold {
    minScore: number;
    title: string;
}
interface MasteryLevel {
    level: number;
    xpRequired: number;
    totalXp: number;
}

interface Festival {
    name: string;
    startDay: number;
    endDay: number;
    image: string;
    calendarIcon: string;
}
interface SeasonData {
    id: 'spring' | 'summer' | 'fall' | 'winter';
    name: string;
    totalDays: number;
    image: string;
    festivals: Festival[];
    bookseller: number[];
}

interface ChoppedTreeProduce {
    id: string;
    name: string;
    image?: string;
}
interface FruitTreeProduce {
    id: string;
    name: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    image: string;
    energyHealth?: EnergyHealth;
    artisanUses: ArtisanUses;
}
interface FruitTree {
    type: 'fruit-tree';
    id: string;
    name: string;
    saplingId: string;
    saplingName: string;
    saplingBuyPrices: SeedBuyPrice[];
    saplingSellPrice: number;
    seasons: Season[];
    daysToMature: number;
    description: string;
    image: string;
    saplingImage: string;
    stages: Stage[];
    produce: FruitTreeProduce;
    choppedProduce: ChoppedTreeProduce[];
}
interface WildTreeTapper {
    id: string;
    name: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    image: string;
    energyHealth?: EnergyHealth;
}
interface WildTree {
    type: 'wild-tree';
    id: string;
    name: string;
    seedId?: string;
    seedName?: string;
    description: string;
    image: string;
    seedImage?: string;
    stages: Stage[];
    tapper?: WildTreeTapper;
    choppedProduce: ChoppedTreeProduce[];
}
type Tree = FruitTree | WildTree;

interface Ring {
    id: string;
    name: string;
    description: string;
    sellPrice: number;
    image: string;
    craftingLevel: number | null;
    craftingSkill: 'combat' | 'mining' | null;
    ingredients: Ingredient[];
    purchasePrice: number | null;
    sources: string[];
}

type UniversalGifts = GiftPreferences;

interface Quest {
    id: string;
    name: string;
    text: string;
    providedBy: string;
    requirements: string;
    rewards: string;
}

interface HeartEvent {
    heart: number;
    id: number | number[] | null;
    description: string;
    details: string;
}
interface Villager extends GiftPreferences {
    id: string;
    name: string;
    birthday: {
        day: number;
        season: Exclude<Season, 'ginger island'>;
    };
    address: string;
    occupation: string;
    description: string;
    marriageable: boolean;
    hearts: {
        max: number;
        bouquetIncrease: number;
        spouseIncrease: number;
    };
    events: HeartEvent[];
    image: string;
    spouseImage?: string;
}

interface Weather {
    id: string;
    name: string;
    description: string;
    seasons: Season[];
    image: string;
    watersCrops: boolean;
    special: boolean;
}

type ToolLevel = 'basic' | 'copper' | 'steel' | 'gold' | 'iridium';
interface UpgradeLevel {
    level: ToolLevel;
    image: string | null;
    upgradeCost: number | null;
    materialName: string | null;
    materialQuantity: number | null;
    description: string;
}
interface UpgradeableTool {
    id: string;
    type: 'upgradeable';
    name: string;
    description: string;
    canEnchant: boolean;
    levels: UpgradeLevel[];
}
interface FishingRodLevel {
    name: string;
    image: string;
    cost: number | null;
    fishingLevelRequired: number | null;
    bait: boolean;
    tackleSlots: number;
    canEnchant: boolean;
    obtain: string;
    description: string;
}
interface FishingRod {
    id: string;
    type: 'fishing-rod';
    name: string;
    description: string;
    canEnchant: boolean;
    levels: FishingRodLevel[];
}
interface SimpleTool {
    id: string;
    type: 'simple';
    name: string;
    description: string;
    image: string;
    cost: number | null;
    obtain: string;
}
interface Backpack {
    id: string;
    type: 'backpack';
    name: string;
    description: string;
    image: string;
    cost: number;
    slots: number;
}
type Tool = UpgradeableTool | FishingRod | SimpleTool | Backpack;
type ToolType = Tool['type'];

type WeaponType = 'sword' | 'dagger' | 'club' | 'slingshot';
interface MeleeWeapon {
    id: string;
    type: 'sword' | 'dagger' | 'club';
    name: string;
    image: string;
    damageMin: number;
    damageMax: number;
    speed: number;
    critChance: number;
    critPower: number;
    defense: number;
    knockback: number;
    level: number;
    obtain: string;
    sellPrice: number;
    canEnchant: boolean;
}
interface Slingshot {
    id: string;
    type: 'slingshot';
    name: string;
    image: string;
    obtain: string;
    sellPrice: number;
    canEnchant: boolean;
}
type Weapon = MeleeWeapon | Slingshot;

interface WeaponStat {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface Hat {
    id: string;
    name: string;
    description: string;
    obtain: string;
    image: string;
    price?: number;
}

interface Footwear {
    id: string;
    name: string;
    description: string;
    defense: number;
    immunity: number;
    obtain: string;
    sellPrice: number;
    image: string;
}

interface Forageable {
    id: string;
    name: string;
    description: string;
    seasons: Season[];
    locations: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    knowledge: KnowledgeBonus[];
    energyHealth?: EnergyHealth;
    maxQuality: ItemQuality;
    artisanUses: ArtisanUses;
    image: string;
}

type FishCatchType = 'rod' | 'crab-pot';
type FishWeather = 'sunny' | 'rainy' | 'both';
type FishRoe = 'roe' | 'caviar';
type FishCategory = 'regular' | 'crab-pot' | 'night-market' | 'legendary' | 'legendary-2' | 'other';
interface FishPondProduce {
    product: string;
    minPopulation: number;
}
interface FishPond {
    produce: FishPondProduce[];
}
interface Fish {
    id: string;
    name: string;
    description: string;
    catchType: FishCatchType;
    category: FishCategory;
    seasons: Season[];
    location: string;
    weather?: FishWeather;
    time?: string;
    difficulty?: number;
    sellPrice: number;
    profession: ProfessionBonus[];
    fishTank: boolean;
    canSmoke: boolean;
    roe: FishRoe | null;
    fishPond: FishPond | null;
    usedIn: string[];
    energyHealth?: EnergyHealth;
    maxQuality: ItemQuality;
    image: string;
}

interface Bait {
    id: string;
    name: string;
    description: string;
    sellPrice: number;
    image: string;
}

interface Tackle {
    id: string;
    name: string;
    description: string;
    sellPrice: number;
    image: string;
}

type CookingBuff = Buff;
type RecipeSource = {
    type: 'default';
} | {
    type: 'friendship';
    villager: string;
    hearts: number;
} | {
    type: 'skill';
    skill: string;
    level: number;
} | {
    type: 'queen-of-sauce';
    season: Season;
    day: number;
    year: number;
} | {
    type: 'purchase';
    from: string;
    price: number;
    currency: string;
} | {
    type: 'cutscene';
    description: string;
};
interface CookedDish {
    id: string;
    name: string;
    description: string;
    sellPrice: number;
    energyHealth: EnergyHealth;
    ingredients: Ingredient[];
    image: string;
    buffs: CookingBuff[];
    buffDuration: number | null;
    recipeSources: RecipeSource[];
}

interface Artifact {
    id: string;
    name: string;
    description: string;
    sellPrice: number;
    locations: string[];
    donationNotes: string | null;
    image: string;
}

interface CollectionItem {
    id: string;
    name: string;
    image: string;
}

type CraftingIngredient = Ingredient;
interface CraftingOutput {
    id: string;
    name: string;
    quantity: number;
    isBigCraftable: boolean;
}
interface CraftingRecipe {
    id: string;
    name: string;
    description: string;
    category: string;
    source: string;
    output: CraftingOutput;
    ingredients: CraftingIngredient[];
    image: string;
}

interface SmeltRecipe {
    ore: string;
    oreQty: number;
    coalQty: number;
    timeMinutes: number;
    outputQty?: number;
}
interface MineralItem {
    id: string;
    name: string;
    kind: 'mineral';
    description: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    gemologistPrice: number;
    locations: string[];
    image: string;
}
interface GeodeContent {
    name: string;
    image?: string;
    quantity?: string;
    chance?: string;
}
interface GeodeContainer {
    id: string;
    name: string;
    kind: 'geode';
    description: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    locations: string[];
    image: string;
    contents?: GeodeContent[];
}
interface OreItem {
    id: string;
    name: string;
    kind: 'ore';
    description: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    locations: string[];
    image: string;
}
interface BarItem {
    id: string;
    name: string;
    kind: 'bar';
    description: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    smeltRecipes: SmeltRecipe[];
    image: string;
}
interface NodeDrop {
    item: string;
    quantity: string;
    chance?: string;
}
interface NodeItem {
    id: string;
    name: string;
    kind: 'node';
    description: string | null;
    drops: NodeDrop[];
    miningXP: number;
    locations: string[];
    image: string;
}
interface ResourceItem {
    id: string;
    name: string;
    kind: 'resource';
    description: string;
    sellPrice: number;
    profession: ProfessionBonus[];
    locations: string[];
    image: string;
}
type Mineral = MineralItem | GeodeContainer | OreItem | BarItem | NodeItem | ResourceItem;

interface PerfectionCategory {
    id: string;
    name: string;
    requirement: string;
    count: number;
    unit: string;
    weight: number;
}

type QiCurrency = 'qi-gem' | 'golden-walnut';
interface QiStockItem {
    id: string;
    name: string;
    cost: number;
    currency: QiCurrency;
    quantity: number;
    description: string;
    image: string;
    isRecipe: boolean;
    availability?: string;
    note?: string;
}

interface MedicalSupply {
    id: string;
    name: string;
    price: number;
    description: string;
    energy: number;
    health: number;
    image: string;
}

interface BlacksmithItem {
    id: string;
    name: string;
    description: string;
    priceYear1: number;
    priceYear2: number;
    image: string;
}

interface JojaItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    seasons: Season[];
    availability?: string;
}

type PierreCategory = 'seed' | 'sapling' | 'ingredient' | 'fertilizer' | 'recipe' | 'special';
interface PierreItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    seasons: Season[];
    category: PierreCategory;
    availability?: string;
}

type SaloonCategory = 'food' | 'recipe';
interface SaloonItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: SaloonCategory;
    availability?: string;
}

type KrobusStockType = 'permanent' | 'daily';
type KrobusDay = 'Monday' | 'Tuesday' | 'Thursday' | 'Friday' | 'Sunday';
interface KrobusItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    stockType: KrobusStockType;
    day?: KrobusDay;
    stockLimit: number;
    isRecipe: boolean;
    availability?: string;
}

type MarnieCategory = 'animal-supply' | 'tool' | 'furniture' | 'catalogue' | 'special';
interface MarnieItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: MarnieCategory;
    availability?: string;
}

interface WizardBuildingMaterial {
    itemId: string;
    itemName: string;
    amount: number;
    image: string;
}
interface WizardBuilding {
    id: string;
    name: string;
    buildCost: number;
    materials: WizardBuildingMaterial[];
    description: string;
    image: string;
    availability?: string;
}

type WillyCategory = 'rod' | 'bait' | 'tackle' | 'equipment' | 'recipe' | 'furniture';
interface WillyItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: WillyCategory;
    fishingLevelRequired?: number;
    availability?: string;
}

type GuildCategory = 'weapon' | 'boots' | 'ring' | 'slingshot' | 'ammo' | 'furniture';
type GuildWeaponType = 'sword' | 'dagger' | 'club';
interface GuildItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: GuildCategory;
    weaponType?: GuildWeaponType;
    mineLevel?: number;
    availability?: string;
}

type CarpenterCategory = 'material' | 'recipe' | 'furniture' | 'craftable';
type CarpenterDay = DayOfWeek;
interface CarpenterItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: CarpenterCategory;
    day?: CarpenterDay;
    isRecipe: boolean;
    availability?: string;
}

type CasinoCategory = 'furniture' | 'hat' | 'scarecrow' | 'consumable' | 'decoration';
interface CasinoItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: CasinoCategory;
}

type DesertTraderDay = DayOfWeek;
type DesertTraderItem = TraderShopItem;

type OasisCategory = 'seed' | 'food' | 'furniture' | 'clothing' | 'special';
type OasisDay = DayOfWeek;
interface OasisItem {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: OasisCategory;
    day?: OasisDay;
    availability?: string;
}

type VolcanoShopCurrency = 'gold' | 'cinder-shard' | 'diamond';
type VolcanoShopCategory = 'footwear' | 'book' | 'consumable' | 'hat' | 'food';
interface VolcanoShopItem {
    id: string;
    name: string;
    price: number;
    currency: VolcanoShopCurrency;
    description: string;
    image: string;
    category: VolcanoShopCategory;
    availability?: string;
}

type IslandTraderDay = DayOfWeek;
type IslandTraderItem = TraderShopItem;

type FieldOfficeCollection = 'large-animal' | 'snake' | 'mummified-frog' | 'mummified-bat';
interface FieldOfficeReward {
    goldenWalnuts: number;
    item?: {
        id: string;
        name: string;
        image: string;
    };
}
interface FieldOfficeDonation {
    id: string;
    name: string;
    description: string;
    image: string;
    collection: FieldOfficeCollection;
    quantity: number;
}
interface FieldOfficeCollectionData {
    id: FieldOfficeCollection;
    name: string;
    reward: FieldOfficeReward;
    donations: FieldOfficeDonation[];
}

interface GrandpaInput {
    totalEarnings: number;
    totalSkillLevels: number;
    museumCompleted: boolean;
    masterAngler: boolean;
    fullShipment: boolean;
    married: boolean;
    villagersAt8Hearts: number;
    petFriendship: boolean;
    communityCenterCompleted: boolean;
    communityCenterCeremonyAttended: boolean;
    skullKeyObtained: boolean;
    rustyKeyObtained: boolean;
}
interface GrandpaScoreEntry {
    criterion: string;
    points: number;
    maxPoints: number;
    category: GrandpaCategory;
}
type GrandpaCategory = 'earnings' | 'skills' | 'achievements' | 'friendship' | 'community-center' | 'exploration';
interface GrandpaResult {
    score: number;
    maxScore: number;
    candles: 1 | 2 | 3 | 4;
    breakdown: GrandpaScoreEntry[];
}

type DwarfShopCategory = 'explosive' | 'food' | 'consumable' | 'recipe' | 'decoration' | 'scarecrow' | 'book';
interface DwarfShopItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: DwarfShopCategory;
}

type LocationCategory = 'The Valley' | 'Beyond the Valley' | 'Pelican Town' | 'Cindersap Forest' | 'The Sewers' | 'The Beach' | 'The Mountain' | 'Railroad' | 'Quarry' | 'The Desert' | 'Ginger Island';
type LocationDay = DayOfWeek;
interface LocationHours {
    open: string;
    close: string;
}
type LocationType = 'location' | 'building';
interface GameLocation {
    id: string;
    name: string;
    type: LocationType;
    category: LocationCategory;
    image: string;
    openHours: LocationHours | null;
    closed: LocationDay[];
    address: string | null;
    occupants: string[];
    shop: string | null;
}

type SpecialItemType = 'special-item' | 'book' | 'skill-book' | 'mastery';
type MasterySkill = 'farming' | 'mining' | 'foraging' | 'fishing' | 'combat';
interface SpecialItem {
    id: string;
    name: string;
    type: SpecialItemType;
    effect: string;
    obtainedFrom: string;
    image: string;
    skill?: MasterySkill;
    mailFlags?: string[];
    eventFlags?: string[];
}

type BooksellerAvailability = 'always' | 'rotating-skill' | 'rotating-year3' | 'chance' | 'golden-walnut';
interface BooksellerItem {
    id: string;
    name: string;
    availability: BooksellerAvailability;
    price: number;
    priceTiers?: [number, number, number];
    image: string;
}
interface BooksellerTrade {
    bookId: string;
    bookName: string;
    bookImage: string;
    receiveItems: string[];
    receiveQuantity: number;
}

type ConcessionTag = 'sweet' | 'candy' | 'drink' | 'hot' | 'healthy' | 'sour' | 'fatty' | 'sandwich' | 'burger' | 'cold' | 'salty' | 'gourmet' | 'joja';
interface Concession {
    id: string;
    name: string;
    price: number;
    tags: ConcessionTag[];
    image: string;
}

interface HouseUpgradeMaterial {
    item: string;
    quantity: number;
}
interface HouseUpgrade {
    id: string;
    name: string;
    tier: number;
    cost: number;
    materials: HouseUpgradeMaterial[];
    description: string;
    image: string;
    prerequisite: string | null;
}
interface HouseRenovation {
    id: string;
    name: string;
    cost: number;
    description: string;
    image: string;
    prerequisite: string | null;
}

type SecretNoteType = 'secret-note' | 'journal-scrap';
interface SecretNote {
    id: string;
    name: string;
    type: SecretNoteType;
    description: string;
}

type TrinketSource = 'combat-drop' | 'desert-festival';
interface Trinket {
    id: string;
    name: string;
    effect: string;
    source: TrinketSource;
    forgeable: boolean;
    sellPrice: number;
    image: string;
}

interface LostBook {
    id: string;
    name: string;
    description: string;
    image: string;
}

type StarDropSource = 'purchase' | 'exploration' | 'friendship' | 'achievement' | 'collection';
interface StarDrop {
    id: string;
    name: string;
    description: string;
    source: StarDropSource;
    image: string;
}

type GoldenWalnutTrackingType = 'all-at-once' | 'limited' | 'extra';
interface GoldenWalnut {
    id: string;
    name: string;
    amount: number;
    location: string;
    hint: string;
    trackingType: GoldenWalnutTrackingType;
}

type ProfessionSkill = 'Farming' | 'Fishing' | 'Foraging' | 'Mining' | 'Combat';
interface ProfessionData {
    id: string;
    name: string;
    skill: ProfessionSkill;
    level: 5 | 10;
    parentProfession: string | null;
    description: string;
}

type SpecialOrderCategory = 'town' | 'qi';
interface SpecialOrderData {
    id: string;
    name: string;
    requester: string;
    type: SpecialOrderCategory;
    text: string;
    prerequisites: string | null;
    timeframe: number;
    requirements: string;
    rewards: string;
    repeatable: boolean;
}

interface GameEvent {
    id: string;
    name: string;
    villager: string;
    hearts: number;
    description: string;
}

interface BuildingMaterial {
    id: string;
    item: string;
    quantity: number;
}
type BuildingBuilder = 'Robin' | 'Wizard' | 'Community Center' | 'Joja';
interface Building {
    id: string;
    name: string;
    description: string;
    builder: BuildingBuilder;
    buildCost: number;
    buildDays: number;
    materials: BuildingMaterial[];
    upgradeFrom: string | null;
    magical: boolean;
    animalCapacity?: number;
    image: string;
}

interface Rarecrow {
    id: string;
    number: number;
    name: string;
    image: string;
    obtain: string;
}

/**
 * Abstract base class providing the five standard terminal methods shared by all query builders.
 * Subclasses hold a typed data array and implement domain-specific filter and sort methods.
 */
declare abstract class QueryBase<T extends {
    id: string;
    name: string;
}> {
    protected readonly data: T[];
    constructor(data: T[]);
    /** Return all results as an array. */
    get(): T[];
    /** Return the first result, or `undefined` if there are none. */
    first(): T | undefined;
    /** Find an item by its exact ID. */
    find(id: string): T | undefined;
    /** Find an item by name (case-insensitive exact match). */
    findByName(name: string): T | undefined;
    /** Return the number of results. */
    count(): number;
}

/** Query builder for achievement data. All filter and sort methods return a new AchievementQuery for chaining. */
declare class AchievementQuery extends QueryBase<Achievement> {
    constructor(data?: Achievement[]);
    /** Filter to secret achievements (hidden until unlocked). */
    secret(): AchievementQuery;
    /**
     * Filter to in-game achievements (those with an in-game icon).
     * Excludes platform-only achievements that only appear in Steam/GOG.
     */
    inGame(): AchievementQuery;
    /** Filter to achievements that grant an in-game reward (hat, title, etc.). */
    withReward(): AchievementQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): AchievementQuery;
}
/** Returns an AchievementQuery for all achievement data. Pass `source` to wrap a pre-filtered array. */
declare function achievements(source?: Achievement[]): AchievementQuery;

/** Type guard: narrows an Animal to Pet. */
declare function isPet(animal: Animal): animal is Pet;
/** Type guard: narrows an Animal to FarmAnimal. */
declare function isFarmAnimal(animal: Animal): animal is FarmAnimal;
/**
 * Query builder for animal data (pets and farm animals).
 * All filter methods return a new AnimalQuery for chaining.
 * Use `.pets()` or `.farmAnimals()` to narrow to a specific subtype.
 */
declare class AnimalQuery extends QueryBase<Animal> {
    constructor(data?: Animal[]);
    /** Filter to pets only. */
    pets(): AnimalQuery;
    /** Filter to a specific pet breed by name (case-insensitive). Only matches pets. */
    byPetName(name: string): AnimalQuery;
    /** Filter to farm animals only. */
    farmAnimals(): AnimalQuery;
    /** Filter farm animals by their required building (e.g. `'Coop'`, `'Barn'`). */
    byBuilding(building: string): AnimalQuery;
    /** Filter farm animals by harvest method (`'tool'` or `'auto'`). */
    byHarvestMethod(method: FarmAnimal['harvestMethod']): AnimalQuery;
    /** Filter to farm animals with a purchase price (excludes animals obtained by other means). */
    purchasable(): AnimalQuery;
}
/** Returns an AnimalQuery for all animal data. Pass `source` to wrap a pre-filtered array. */
declare function animals(source?: Animal[]): AnimalQuery;

/**
 * Query builder for Community Center bundle data.
 * Covers item bundles, gold bundles, and the Joja Mart restoration.
 * All filter and sort methods return a new BundleQuery for chaining.
 */
declare class BundleQuery extends QueryBase<Bundle> {
    constructor(data?: Bundle[]);
    /** Filter to bundles in the given room. Joja bundles (no room) are excluded. */
    byRoom(room: BundleRoom): BundleQuery;
    /**
     * Return the active remix bundle selection: for each bundle group, returns the
     * remix variant if one exists, otherwise falls back to the non-remix entry.
     * Joja bundles are excluded.
     */
    remix(): BundleQuery;
    /** Filter to standard (non-remix) Community Center bundles. Joja bundles are excluded. */
    standard(): BundleQuery;
    /** Filter to item bundles (type `'items'`). */
    itemBundles(): BundleQuery;
    /** Filter to gold bundles (type `'gold'`). */
    goldBundles(): BundleQuery;
    /** Filter to Joja Mart restoration bundles. */
    jojaBundles(): BundleQuery;
    /** Sort by room order (as they appear in the Community Center), then by bundle group number within each room. */
    sortByRoomAndBundleGroup(): BundleQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): BundleQuery;
}
/** Returns a BundleQuery for all bundle data. Pass `source` to wrap a pre-filtered array. */
declare function bundles(source?: Bundle[]): BundleQuery;

/** Query builder for artisan good data. All filter methods return a new ArtisanGoodQuery for chaining. */
declare class ArtisanGoodQuery extends QueryBase<ArtisanGood> {
    constructor(data?: ArtisanGood[]);
    /** Filter by the equipment that produces the good (case-insensitive, e.g. `'Keg'`, `'Preserves Jar'`). */
    byEquipment(equipment: string): ArtisanGoodQuery;
    /** Filter to goods that can be aged in a Cask (have `cask` data). */
    caskAgeable(): ArtisanGoodQuery;
    /** Filter to goods that can achieve Silver/Gold/Iridium quality. */
    withQualityLevels(): ArtisanGoodQuery;
    /** Filter to goods with a fixed sell price (not formula-based). */
    fixedPrice(): ArtisanGoodQuery;
    /** Filter to goods whose sell price is calculated from an ingredient (formula-based). */
    formulaPrice(): ArtisanGoodQuery;
}
/** Returns an ArtisanGoodQuery for all artisan good data. Pass `source` to wrap a pre-filtered array. */
declare function artisanGoods(source?: ArtisanGood[]): ArtisanGoodQuery;
/**
 * Calculate the sell price of an artisan good given the ingredient's base sell price.
 * Formula: Math.floor(ingredientBasePrice * multiplier) + addend
 * Returns null if the good has no price formula (fixed-price items).
 */
declare function calculateArtisanPrice(good: ArtisanGood, ingredientBasePrice: number): number | null;
/**
 * Apply a PriceFormula directly to an ingredient base price.
 * Useful when you already have a formula object.
 */
declare function applyPriceFormula(formula: PriceFormula, ingredientBasePrice: number): number;

/**
 * Calculates quality-scaled sell prices and energy/health values.
 * Mirrors the game's item quality formulas for Silver, Gold, and Iridium tiers.
 */
declare class QualityCalculator {
    /**
     * Calculate sell prices for Silver, Gold, and Iridium quality.
     * Calculation: Math.floor(basePrice * multiplier)
     * Multipliers: Silver ×1.25, Gold ×1.5, Iridium ×2
     */
    sellPrices(basePrice: number): QualityPrice[];
    /**
     * Calculate energy and health for Silver, Gold, and Iridium quality.
     * The same multiplier is applied independently to each base value.
     * Multipliers: Silver ×1.4, Gold ×1.8, Iridium ×2.6
     */
    energyHealth(baseEnergy: number, baseHealth: number): QualityEnergyHealth[];
}
/** Returns a QualityCalculator instance for computing quality-scaled prices and energy/health values. */
declare function qualityCalculator(): QualityCalculator;
/**
 * Calculates sell prices and energy/health values for artisan goods.
 * Each method accepts pre-computed base values for the source ingredient.
 */
declare class ArtisanCalculator {
    /** Roe sell price: `30 + Math.floor(baseFishPrice / 2)` */
    roe(baseFishPrice: number): ArtisanResult;
    /** Aged Roe sell price: `60 + baseFishPrice` */
    agedRoe(baseFishPrice: number): ArtisanResult;
    /**
     * Honey sell price: `100 + (baseFlowerPrice * 2)`.
     * Pass `0` for wild honey (no nearby flower).
     */
    honey(baseFlowerPrice: number): ArtisanResult;
    /** Wine sell price (`Math.floor(baseFruitPrice * 3)`) and energy/health (`×1.75`). */
    wine(baseFruitPrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Juice sell price (`Math.floor(basePrice * 2.25)`) and energy/health (`×2`). */
    juice(basePrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Pickles sell price (`Math.floor(basePrice * 2) + 50`) and energy/health (`×1.75`). */
    pickles(basePrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Jelly sell price (`Math.floor(baseFruitPrice * 2) + 50`) and energy/health (`×2`). */
    jelly(baseFruitPrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Dried Mushrooms sell price (`Math.floor(baseMushroomPrice * 7.5) + 25`) and energy/health (`×3`). */
    driedMushrooms(baseMushroomPrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Dried Fruit sell price (`Math.floor(baseFruitPrice * 7.5)`) and energy/health (`×3`). */
    driedFruit(baseFruitPrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
    /** Smoked Fish sell price (`Math.floor(baseFishPrice * 2)`) and energy/health (`×1.5`). */
    smokedFish(baseFishPrice: number, baseEnergy: number, baseHealth: number): ArtisanEnergyResult;
}
/** Returns an ArtisanCalculator instance for computing artisan good sell prices and energy/health values. */
declare function artisanCalculator(): ArtisanCalculator;
/**
 * Calculates sell prices with profession bonuses applied.
 * Each method takes a base sell price and returns the adjusted value.
 */
declare class ProfessionCalculator {
    /** Artisan profession bonus: `Math.floor(price * 1.4)` */
    artisan(price: number): number;
    /** Rancher profession bonus: `Math.floor(price * 1.2)` */
    rancher(price: number): number;
    /** Tiller profession bonus: `Math.floor(price * 1.1)` */
    tiller(price: number): number;
    /** Blacksmith profession bonus: `Math.floor(price * 1.5)` */
    blacksmith(price: number): number;
    /** Gemologist profession bonus: `Math.floor(price * 1.3)` */
    gemologist(price: number): number;
    /** Tapper profession bonus: `Math.floor(price * 1.25)` */
    tapper(price: number): number;
    /** Fisher profession bonus: `Math.floor(price * 1.25)` */
    fisher(price: number): number;
    /** Angler profession bonus: `Math.floor(price * 1.5)` */
    angler(price: number): number;
}
/** Returns a ProfessionCalculator instance for computing profession-adjusted sell prices. */
declare function professionCalculator(): ProfessionCalculator;
/**
 * Calculates sell prices with special knowledge bonuses applied.
 * Each method takes a base sell price and returns the adjusted value.
 */
declare class KnowledgeCalculator {
    /** Spring Onion Mastery bonus: `Math.floor(price * 5)` */
    springOnionMastery(price: number): number;
    /** Bear's Knowledge bonus: `Math.floor(price * 3)` */
    bearsKnowledge(price: number): number;
}
/** Returns a KnowledgeCalculator instance for computing knowledge bonus sell prices. */
declare function knowledgeCalculator(): KnowledgeCalculator;
/**
 * Calculates the cost to purchase remaining Golden Walnuts from the Joja Parrot.
 * Each unfound walnut costs 10,000g. All remaining walnuts are delivered after sleeping.
 */
declare class JojaParrotCalculator {
    /** Calculate the gold cost to buy all remaining walnuts. */
    cost(walnutsFound: number): number;
    /** Returns how many walnuts are still unfound. */
    remaining(walnutsFound: number): number;
    /** The total number of Golden Walnuts available in the game. */
    get total(): number;
    /** The cost per individual unfound walnut (10,000g). */
    get costPerWalnut(): number;
}
/** Returns a JojaParrotCalculator instance for computing Golden Walnut purchase costs. */
declare function jojaParrotCalculator(): JojaParrotCalculator;

/** Query builder for crop data. All filter and sort methods return a new CropQuery for chaining. */
declare class CropQuery extends QueryBase<Crop> {
    constructor(data?: Crop[]);
    /** Filter to crops available in the given season. */
    bySeason(season: Season): CropQuery;
    /** Filter by category string (e.g. `'Vegetable'`, `'Fruit'`). */
    byCategory(category: string): CropQuery;
    /** Filter to crops whose seed is sold at the given shop (case-insensitive). */
    byShop(shop: string): CropQuery;
    /** Filter to crops that regrow after harvesting (have a `regrowDays` value). */
    regrowing(): CropQuery;
    /** Filter to crops that can grow into giant crops. */
    giant(): CropQuery;
    /** Filter to crops that require a trellis. */
    trellis(): CropQuery;
    /** Filter to crops available in more than one season. */
    multiSeason(): CropQuery;
    /** Filter to crops with a variable harvest that can yield more than 1 item. */
    extraHarvest(): CropQuery;
    /** Filter to crops whose seeds are purchasable somewhere. */
    availableInShop(): CropQuery;
    /** Filter to crops with energy/health values (edible when consumed). */
    eatable(): CropQuery;
    /** Filter to crops that can be used to produce the given artisan good (e.g. `'wine'`, `'honey'`). */
    byArtisanUse(use: keyof ArtisanUses): CropQuery;
    /** Sort by crop sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): CropQuery;
    /** Sort by grow days. Default: `'asc'` (fastest first). */
    sortByGrowDays(order?: 'asc' | 'desc'): CropQuery;
}
/** Returns a CropQuery for all crop data. Pass `source` to wrap a pre-filtered array. */
declare function crops(source?: Crop[]): CropQuery;

/** Query builder for farm map data. All filter methods return a new FarmMapQuery for chaining. */
declare class FarmMapQuery extends QueryBase<FarmMap> {
    constructor(data?: FarmMap[]);
    /** Filter to maps that grant a bonus to the given skill (case-insensitive). */
    bySkill(skill: string): FarmMapQuery;
}
/** Returns a FarmMapQuery for all farm map data. Pass `source` to wrap a pre-filtered array. */
declare function maps(source?: FarmMap[]): FarmMapQuery;

/** Query builder for monster data. All filter and sort methods return a new MonsterQuery for chaining. */
declare class MonsterQuery extends QueryBase<Monster> {
    constructor(data?: Monster[]);
    /** Filter to monsters that spawn in the given location (case-insensitive substring match). */
    byLocation(location: string): MonsterQuery;
    /** Filter to monsters that drop the given loot item ID. */
    dropsLoot(lootId: string): MonsterQuery;
    /** Filter to Dangerous mode variants only. */
    dangerous(): MonsterQuery;
    /** Filter to standard (non-Dangerous) variants only. */
    standard(): MonsterQuery;
    /** Sort by XP rewarded on kill. Default: `'desc'` (most XP first). */
    sortByXp(order?: 'asc' | 'desc'): MonsterQuery;
    /** Sort by max HP. Default: `'desc'` (tankiest first). */
    sortByHp(order?: 'asc' | 'desc'): MonsterQuery;
}
/** Query builder for monster loot data. Filter methods return a new MonsterLootQuery for chaining. */
declare class MonsterLootQuery extends QueryBase<MonsterLoot> {
    constructor(data?: MonsterLoot[]);
    /** Filter to loot items dropped by the given monster ID. */
    droppedBy(monsterId: string): MonsterLootQuery;
}
/** Returns a MonsterQuery for all monster data. Pass `source` to wrap a pre-filtered array. */
declare function monsters(source?: Monster[]): MonsterQuery;
/** Returns a MonsterLootQuery for all monster loot data. Pass `source` to wrap a pre-filtered array. */
declare function monsterLoot(source?: MonsterLoot[]): MonsterLootQuery;

/** Query builder for monster slayer goal data. All filter and sort methods return a new MonsterSlayerGoalQuery for chaining. */
declare class MonsterSlayerGoalQuery extends QueryBase<MonsterSlayerGoal> {
    constructor(data?: MonsterSlayerGoal[]);
    /** Sort by kill target. Default: `'asc'` (easiest first). */
    sortByKillTarget(order?: 'asc' | 'desc'): MonsterSlayerGoalQuery;
}
/** Returns a MonsterSlayerGoalQuery for all monster slayer goal data. Pass `source` to wrap a pre-filtered array. */
declare function monsterSlayerGoals(source?: MonsterSlayerGoal[]): MonsterSlayerGoalQuery;

/**
 * Search for any item across all data modules by name (substring) or ID (exact match).
 * Includes nested items: crop seeds, fruit tree produce, wild tree tappers,
 * animal produce, and deluxe animal produce.
 *
 * Results are deduplicated by kind + ID. Nested items shared across multiple
 * parents (e.g. Egg from White Chicken and Blue Chicken) are merged into one
 * result with a `parents` array listing all sources.
 *
 * @param query - Name substring or exact ID to search for (case-insensitive)
 * @param kinds - Optional filter to restrict results to specific kinds
 */
declare function search(query: string, kinds?: SearchResultKind[]): SearchResult[];

declare const SKILL_TITLES: TitleThreshold[];
declare const MASTERY_LEVELS: MasteryLevel[];
/**
 * Calculate the player's title score.
 * Formula: floor((farming + fishing + foraging + mining + combat) / 2)
 */
declare function getTitleScore(farming: number, fishing: number, foraging: number, mining: number, combat: number): number;
/**
 * Get the player's title based on their combined skill levels.
 * Uses the same formula as the game: floor(sum of all skills / 2)
 */
declare function getTitle(farming: number, fishing: number, foraging: number, mining: number, combat: number): string;
/**
 * Get the current mastery level for a given total mastery XP amount.
 * Returns 0 if the player has not reached mastery level 1.
 */
declare function getMasteryLevel(masteryXp: number): number;
/** Query builder for skill data. Terminal methods only — use utility functions for calculations. */
declare class SkillQuery extends QueryBase<Skill> {
    constructor(data?: Skill[]);
}
/** Returns a SkillQuery for all skill data. Pass `source` to wrap a pre-filtered array. */
declare function skills(source?: Skill[]): SkillQuery;
/**
 * Get the level 10 profession options available for a given skill and level 5 profession choice.
 * Uses the professions module to look up data. Returns an empty array if not found.
 */
declare function getProfessionOptions(skillName: string, level5Profession: string): ProfessionData[];

/**
 * Query builder for tree data (fruit trees and wild trees).
 * All filter and sort methods return a new TreeQuery for chaining.
 * Use `.fruitTrees()` or `.wildTrees()` to narrow to a specific subtype.
 */
declare class TreeQuery extends QueryBase<Tree> {
    constructor(data?: Tree[]);
    /** Filter to fruit trees only (`type === 'fruit-tree'`). */
    fruitTrees(): TreeQuery;
    /** Filter to wild trees only (`type === 'wild-tree'`). */
    wildTrees(): TreeQuery;
    /** Filter fruit trees by season they produce in. Wild trees are excluded. */
    bySeason(season: Season): TreeQuery;
    /** Filter to fruit trees whose produce can be used for the given artisan good. Wild trees always return false for all uses. */
    byArtisanUse(use: keyof ArtisanUses): TreeQuery;
    /** Filter to wild trees that can be tapped (have a `tapper` product). */
    tappable(): TreeQuery;
    /**
     * Sort by produce sell price. For fruit trees uses `produce.sellPrice`;
     * for wild trees uses `tapper.sellPrice` (or 0 if untappable). Default: `'desc'`.
     */
    sortByProduceSellPrice(order?: 'asc' | 'desc'): TreeQuery;
}
/** Returns a TreeQuery for all tree data (fruit + wild). Pass `source` to wrap a pre-filtered array. */
declare function trees(source?: Tree[]): TreeQuery;

/** Query builder for mixed seed data. All filter methods return a new MixedSeedQuery for chaining. */
declare class MixedSeedQuery extends QueryBase<MixedSeed> {
    constructor(data?: MixedSeed[]);
    /** Filter to mixed seeds that can produce crops in the given season. */
    byProduces(season: Season): MixedSeedQuery;
    /** Filter to mixed seeds that have at least one purchase price listed. */
    withBuyPrices(): MixedSeedQuery;
}
/** Returns a MixedSeedQuery for all mixed seed data. Pass `source` to wrap a pre-filtered array. */
declare function mixedSeeds(source?: MixedSeed[]): MixedSeedQuery;

/** Query builder for season data. Filter methods return a new SeasonQuery for chaining. */
declare class SeasonQuery extends QueryBase<SeasonData> {
    constructor(data?: SeasonData[]);
    /** Filter to seasons that have at least one festival. */
    withFestivals(): SeasonQuery;
}
/**
 * Find a festival by name across all seasons (case-insensitive substring match).
 * Returns an array of matching festivals with their season.
 */
declare function findFestival(name: string): {
    season: SeasonData;
    festival: Festival;
}[];
/** Returns a SeasonQuery for all season data. Pass `source` to wrap a pre-filtered array. */
declare function seasons(source?: SeasonData[]): SeasonQuery;

/** Query builder for ring data. All filter and sort methods return a new RingQuery for chaining. */
declare class RingQuery extends QueryBase<Ring> {
    constructor(data?: Ring[]);
    /** Filter to rings that have crafting ingredients (craftable at the Forge or crafting table). */
    craftable(): RingQuery;
    /** Filter to rings available for purchase (have a `purchasePrice`). */
    purchasable(): RingQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): RingQuery;
}
/** Returns a RingQuery for all ring data. Pass `source` to wrap a pre-filtered array. */
declare function rings(source?: Ring[]): RingQuery;

/**
 * Returns the universal gift preferences shared across all villagers:
 * loved, liked, neutral, disliked, and hated item lists.
 */
declare function universalGifts(): UniversalGifts;

/** Query builder for quest data. All filter and sort methods return a new QuestQuery for chaining. */
declare class QuestQuery extends QueryBase<Quest> {
    constructor(data?: Quest[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): QuestQuery;
}
/** Returns a QuestQuery for all quest data. Pass `source` to wrap a pre-filtered array. */
declare function quests(source?: Quest[]): QuestQuery;

/** Query builder for villager data. All filter and sort methods return a new VillagerQuery for chaining. */
declare class VillagerQuery extends QueryBase<Villager> {
    constructor(data?: Villager[]);
    /** Filter to villagers who can be married or become roommates. */
    marriageable(): VillagerQuery;
    /** Filter to villagers with a birthday in the given season. Excludes `'ginger island'`. */
    byBirthdaySeason(season: Exclude<Season, 'ginger island'>): VillagerQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): VillagerQuery;
    /** Sort by birthday in calendar order (spring → winter, day 1 → 28). */
    sortByBirthday(): VillagerQuery;
}
/** Returns a VillagerQuery for all villager data. Pass `source` to wrap a pre-filtered array. */
declare function villagers(source?: Villager[]): VillagerQuery;

/** Query builder for weather data. All filter methods return a new WeatherQuery for chaining. */
declare class WeatherQuery extends QueryBase<Weather> {
    constructor(data?: Weather[]);
    /** Filter to weather events that can occur in the given season. */
    bySeason(season: Season): WeatherQuery;
    /** Filter to weather events that water crops when they occur. */
    watersCrops(): WeatherQuery;
    /** Filter to special weather events (e.g. Green Rain, Storm). */
    special(): WeatherQuery;
}
/** Returns a WeatherQuery for all weather data. Pass `source` to wrap a pre-filtered array. */
declare function weather(source?: Weather[]): WeatherQuery;

/**
 * Query builder for tool data (upgradeable tools, fishing rods, simple tools, backpacks).
 * All filter and sort methods return a new ToolQuery for chaining.
 */
declare class ToolQuery extends QueryBase<Tool> {
    constructor(data?: Tool[]);
    /** Filter by tool type string. Use the convenience methods below for type-narrowed results. */
    byType(type: ToolType): ToolQuery;
    /** Filter to upgradeable tools (Hoe, Watering Can, Pickaxe, Axe, Trash Can). */
    upgradeable(): ToolQuery;
    /** Filter to fishing rods. */
    fishingRods(): ToolQuery;
    /** Filter to simple tools (no upgrades). */
    simple(): ToolQuery;
    /** Filter to backpacks. */
    backpacks(): ToolQuery;
    /** Filter to tools that can be enchanted at the Forge. */
    canEnchant(): ToolQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): ToolQuery;
}
/** Returns a ToolQuery for all tool data. Pass `source` to wrap a pre-filtered array. */
declare function tools(source?: Tool[]): ToolQuery;

/**
 * Query builder for weapon data (swords, daggers, clubs, slingshots).
 * All filter and sort methods return a new WeaponQuery for chaining.
 */
declare class WeaponQuery extends QueryBase<Weapon> {
    constructor(data?: Weapon[]);
    /** Filter by weapon type string. Use the convenience methods below for type-narrowed results. */
    byType(type: WeaponType): WeaponQuery;
    /** Filter to swords only. */
    swords(): WeaponQuery;
    /** Filter to daggers only. */
    daggers(): WeaponQuery;
    /** Filter to clubs only. */
    clubs(): WeaponQuery;
    /** Filter to slingshots only. */
    slingshots(): WeaponQuery;
    /** Filter to all melee weapons (swords, daggers, clubs). */
    melee(): WeaponQuery;
    /** Filter to weapons that can be enchanted at the Forge. */
    canEnchant(): WeaponQuery;
    /**
     * Filter to melee weapons at or above the given level threshold.
     * Slingshots are excluded as they have no level.
     */
    byMinLevel(level: number): WeaponQuery;
    /**
     * Filter to melee weapons at or below the given level threshold.
     * Slingshots are excluded as they have no level.
     */
    byMaxLevel(level: number): WeaponQuery;
    /**
     * Sort by max damage. Slingshots sort as 0 since they have no `damageMax`.
     * Default: `'desc'` (highest damage first).
     */
    sortByDamage(order?: 'asc' | 'desc'): WeaponQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): WeaponQuery;
    /**
     * Sort by level. Slingshots sort as 0 since they have no level.
     * Default: `'asc'` (lowest level first).
     */
    sortByLevel(order?: 'asc' | 'desc'): WeaponQuery;
}
/** Returns a WeaponQuery for all weapon data. Pass `source` to wrap a pre-filtered array. */
declare function weapons(source?: Weapon[]): WeaponQuery;

/** Query builder for weapon stat data (Speed, Defense, Weight, Crit. Chance, Crit. Power). All sort methods return a new WeaponStatQuery for chaining. */
declare class WeaponStatQuery extends QueryBase<WeaponStat> {
    constructor(data?: WeaponStat[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): WeaponStatQuery;
}
/** Returns a WeaponStatQuery for all weapon stat data. Pass `source` to wrap a pre-filtered array. */
declare function weaponStats(source?: WeaponStat[]): WeaponStatQuery;

/** Query builder for hat data. All sort methods return a new HatQuery for chaining. */
declare class HatQuery extends QueryBase<Hat> {
    constructor(data?: Hat[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): HatQuery;
}
/** Returns a HatQuery for all hat data. Pass `source` to wrap a pre-filtered array. */
declare function hats(source?: Hat[]): HatQuery;

/** Query builder for footwear data. All sort methods return a new FootwearQuery for chaining. */
declare class FootwearQuery extends QueryBase<Footwear> {
    constructor(data?: Footwear[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): FootwearQuery;
    /** Sort by defense value. Default: `'desc'` (highest first). */
    sortByDefense(order?: 'asc' | 'desc'): FootwearQuery;
    /** Sort by immunity value. Default: `'desc'` (highest first). */
    sortByImmunity(order?: 'asc' | 'desc'): FootwearQuery;
}
/** Returns a FootwearQuery for all footwear data. Pass `source` to wrap a pre-filtered array. */
declare function footwear(source?: Footwear[]): FootwearQuery;

/** Query builder for forageable item data. All filter and sort methods return a new ForageableQuery for chaining. */
declare class ForageableQuery extends QueryBase<Forageable> {
    constructor(data?: Forageable[]);
    /** Filter to forageables available in the given season. */
    bySeason(season: Season): ForageableQuery;
    /** Filter to forageables that can be used to produce the given artisan good (e.g. `'wine'`, `'driedMushrooms'`). */
    byArtisanUse(use: keyof ArtisanUses): ForageableQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): ForageableQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): ForageableQuery;
}
/** Returns a ForageableQuery for all forageable data. Pass `source` to wrap a pre-filtered array. */
declare function forageables(source?: Forageable[]): ForageableQuery;

/** Query builder for fish data. All filter and sort methods return a new FishQuery for chaining. */
declare class FishQuery extends QueryBase<Fish> {
    constructor(data?: Fish[]);
    /** Filter to fish available in the given season. */
    bySeason(season: Season): FishQuery;
    /** Filter by category (`'regular'`, `'crab-pot'`, `'night-market'`, `'legendary'`, `'legendary-2'`, or `'other'`). */
    byCategory(category: FishCategory): FishQuery;
    /** Filter by catch type (`'rod'` or `'crab-pot'`). */
    byCatchType(type: FishCatchType): FishQuery;
    /** Filter by weather condition (`'sunny'`, `'rainy'`, or `'both'`). */
    byWeather(weather: 'sunny' | 'rainy' | 'both'): FishQuery;
    /** Filter by location name (case-insensitive substring match). */
    byLocation(location: string): FishQuery;
    /** Filter to fish that can be smoked in a Fish Smoker. */
    smokeable(): FishQuery;
    /** Filter by roe type. Use `'roe'` for standard roe producers, `'caviar'` for Sturgeon. */
    byRoe(type: FishRoe): FishQuery;
    /** Filter to fish that can be placed in a Fish Pond (excludes algae and jellies). */
    pondEligible(): FishQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): FishQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): FishQuery;
    /**
     * Sort by fishing difficulty (0–100). Crab-pot fish have no difficulty and sort as 0.
     * Default: `'desc'` (hardest first).
     */
    sortByDifficulty(order?: 'asc' | 'desc'): FishQuery;
}
/** Returns a FishQuery for all fish data. Pass `source` to wrap a pre-filtered array. */
declare function fish(source?: Fish[]): FishQuery;

/** Query builder for fishing bait data. All sort methods return a new BaitQuery for chaining. */
declare class BaitQuery extends QueryBase<Bait> {
    constructor(data?: Bait[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): BaitQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): BaitQuery;
}
/** Returns a BaitQuery for all bait data. Pass `source` to wrap a pre-filtered array. */
declare function bait(source?: Bait[]): BaitQuery;

/** Query builder for fishing tackle data. All sort methods return a new TackleQuery for chaining. */
declare class TackleQuery extends QueryBase<Tackle> {
    constructor(data?: Tackle[]);
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): TackleQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): TackleQuery;
}
/** Returns a TackleQuery for all tackle data. Pass `source` to wrap a pre-filtered array. */
declare function tackle(source?: Tackle[]): TackleQuery;

/** Query builder for cooked dish data. All filter and sort methods return a new CookingQuery for chaining. */
declare class CookingQuery extends QueryBase<CookedDish> {
    constructor(data?: CookedDish[]);
    /** Filter to dishes that require a specific ingredient by ID. */
    withIngredient(ingredientId: string): CookingQuery;
    /** Sort alphabetically by name. Default: `'asc'`. */
    sortByName(order?: 'asc' | 'desc'): CookingQuery;
    /** Sort by sell price. Default: `'desc'` (most valuable first). */
    sortBySellPrice(order?: 'asc' | 'desc'): CookingQuery;
    /**
     * Sort by energy restored. Dishes with no energy value sort as 0.
     * Default: `'desc'` (most energising first).
     */
    sortByEnergy(order?: 'asc' | 'desc'): CookingQuery;
}
/** Returns a CookingQuery for all cooked dish data. Pass `source` to wrap a pre-filtered array. */
declare function cooking(source?: CookedDish[]): CookingQuery;

/** Query builder for artifact data. All filter and sort methods return a new ArtifactQuery for chaining. */
declare class ArtifactQuery extends QueryBase<Artifact> {
    constructor(data?: Artifact[]);
    /** Filter to artifacts with donation notes (most artifacts can be donated; these have additional reward notes). */
    withDonationNotes(): ArtifactQuery;
    /** Filter to artifacts found via fishing treasure chests. */
    fromFishing(): ArtifactQuery;
    /** Sort alphabetically by name. Default: 'asc'. */
    sortByName(order?: 'asc' | 'desc'): ArtifactQuery;
    /** Sort by sell price. Default: 'desc' (highest first). */
    sortBySellPrice(order?: 'asc' | 'desc'): ArtifactQuery;
}
/** Returns an ArtifactQuery for all artifact data. Pass `source` to wrap a pre-filtered array. */
declare function artifacts(source?: Artifact[]): ArtifactQuery;

/**
 * Query result for a single collection type.
 * Inherits get(), first(), find(), findByName(), count() from QueryBase.
 */
declare class CollectionItemQuery extends QueryBase<CollectionItem> {
    constructor(data: CollectionItem[]);
}
/**
 * Query builder for in-game Collections.
 * Call a collection accessor to get its items resolved to { id, name, image }.
 * Items whose IDs are not found in any loaded data module are excluded.
 */
declare class CollectionsQuery {
    private resolve;
    /** Items that appear in the Items Shipped collection tab. */
    itemsShipped(): CollectionItemQuery;
    /** Items that appear in the Fish collection tab. */
    fish(): CollectionItemQuery;
    /** Items that appear in the Artifacts collection tab (museum donations). */
    artifacts(): CollectionItemQuery;
    /** Items that appear in the Minerals collection tab (museum donations). */
    minerals(): CollectionItemQuery;
    /** Items that appear in the Cooking collection tab. */
    cooking(): CollectionItemQuery;
    /** Items that appear in the Crafting collection tab. */
    crafting(): CollectionItemQuery;
}
/** Returns a CollectionsQuery. Use a collection accessor to get resolved items. */
declare function collections(): CollectionsQuery;

/** Query builder for crafting recipe data. All filter and sort methods return a new CraftingQuery for chaining. */
declare class CraftingQuery extends QueryBase<CraftingRecipe> {
    constructor(data?: CraftingRecipe[]);
    /** Filter recipes by category (case-insensitive). */
    byCategory(category: string): CraftingQuery;
    /** Filter recipes by source string (partial match, case-insensitive). */
    bySource(source: string): CraftingQuery;
    /** Find a recipe by its output item ID. */
    findByOutputId(id: string): CraftingRecipe | undefined;
    sortByName(order?: 'asc' | 'desc'): CraftingQuery;
    sortByCategory(order?: 'asc' | 'desc'): CraftingQuery;
}
/** Returns a CraftingQuery for all crafting recipe data. Pass `source` to wrap a pre-filtered array. */
declare function crafting(source?: CraftingRecipe[]): CraftingQuery;

/**
 * Query builder for mineral data (gems, geode minerals, foraged crystals, and geode containers).
 * Use mineralItems() / geodes() to narrow to specific variants.
 * All filter and sort methods return a new MineralQuery for chaining.
 */
declare class MineralQuery extends QueryBase<Mineral> {
    constructor(data?: Mineral[]);
    /** Filter to donatable minerals only (excludes geode containers). */
    mineralItems(): MineralQuery;
    /** Filter to geode containers only (Geode, Frozen Geode, Magma Geode, Omni Geode). */
    geodes(): MineralQuery;
    /** Filter to ore items only (Copper Ore, Iron Ore, Gold Ore, Iridium Ore, Radioactive Ore). */
    ores(): MineralQuery;
    /** Filter to smelted bar items only (Copper Bar, Iron Bar, Gold Bar, Iridium Bar, Radioactive Bar, Refined Quartz). */
    bars(): MineralQuery;
    /** Filter to mining node entries only. */
    nodes(): MineralQuery;
    /** Filter to resource items (Coal and similar raw materials). */
    resources(): MineralQuery;
    /** Filter to minerals found in a specific geode type (e.g. 'Frozen Geode'). */
    fromGeode(geodeType: string): MineralQuery;
    /** Sort alphabetically by name. Default: 'asc'. */
    sortByName(order?: 'asc' | 'desc'): MineralQuery;
    /** Sort by sell price. Default: 'desc' (highest first). Items without a sell price (nodes) sort as 0. */
    sortBySellPrice(order?: 'asc' | 'desc'): MineralQuery;
}
/** Returns a MineralQuery for all mineral data. Pass `source` to wrap a pre-filtered array. */
declare function minerals(source?: Mineral[]): MineralQuery;

/** Query builder for Perfection Tracker categories. All filter and sort methods return a new PerfectionQuery for chaining. */
declare class PerfectionQuery extends QueryBase<PerfectionCategory> {
    constructor(data?: PerfectionCategory[]);
    /** Returns the sum of all category weights in the current query. For the full dataset this equals 100. */
    totalWeight(): number;
}
/** Returns a PerfectionQuery for all Perfection Tracker categories. Pass `source` to wrap a pre-filtered array. */
declare function perfection(source?: PerfectionCategory[]): PerfectionQuery;

/** Query builder for Qi's Walnut Room shop stock. All filter and sort methods return a new QiStockQuery for chaining. */
declare class QiStockQuery extends QueryBase<QiStockItem> {
    constructor(data?: QiStockItem[]);
    /** Filter to items purchased with the given currency. */
    byCurrency(currency: QiCurrency): QiStockQuery;
    /** Filter to recipe unlocks only. */
    recipes(): QiStockQuery;
    /** Filter to non-recipe items only. */
    items(): QiStockQuery;
    /** Filter to items that are always available (no special availability condition). */
    alwaysAvailable(): QiStockQuery;
    /** Sort by cost ascending or descending. */
    sortByCost(order?: 'asc' | 'desc'): QiStockQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): QiStockQuery;
}
/** Returns a QiStockQuery for all items in Qi's Walnut Room shop. Pass `source` to wrap a pre-filtered array. */
declare function qiStock(source?: QiStockItem[]): QiStockQuery;

/** Query builder for Harvey's Clinic medical supplies. All filter and sort methods return a new MedicalSupplyQuery for chaining. */
declare class MedicalSupplyQuery extends QueryBase<MedicalSupply> {
    constructor(data?: MedicalSupply[]);
    /** Sort by purchase price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): MedicalSupplyQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): MedicalSupplyQuery;
}
/** Returns a MedicalSupplyQuery for all items sold at Harvey's Clinic. Pass `source` to wrap a pre-filtered array. */
declare function medicalSupplies(source?: MedicalSupply[]): MedicalSupplyQuery;

/** Query builder for items sold at the Blacksmith (Clint's shop). All filter and sort methods return a new BlacksmithQuery for chaining. */
declare class BlacksmithQuery extends QueryBase<BlacksmithItem> {
    constructor(data?: BlacksmithItem[]);
    /** Sort by price for the given year (1 or 2+) ascending or descending. */
    sortByPrice(year?: 1 | 2, order?: 'asc' | 'desc'): BlacksmithQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): BlacksmithQuery;
}
/** Returns a BlacksmithQuery for all items sold at the Blacksmith. Pass `source` to wrap a pre-filtered array. */
declare function blacksmith(source?: BlacksmithItem[]): BlacksmithQuery;

/** Query builder for JojaMart shop stock. All filter and sort methods return a new JojaQuery for chaining. */
declare class JojaQuery extends QueryBase<JojaItem> {
    constructor(data?: JojaItem[]);
    /** Filter to items available in the given season (includes permanent and multi-season items). */
    bySeason(season: Season): JojaQuery;
    /** Filter to year-round permanent stock only (no seasonal seeds). */
    permanent(): JojaQuery;
    /** Filter to seasonal seed stock only (items with at least one season). */
    seeds(): JojaQuery;
    /** Filter to items that are always available (no special purchase condition). */
    alwaysAvailable(): JojaQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): JojaQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): JojaQuery;
}
/** Returns a JojaQuery for all items sold at JojaMart. Pass `source` to wrap a pre-filtered array. */
declare function joja(source?: JojaItem[]): JojaQuery;

/** Query builder for Pierre's General Store stock. All filter and sort methods return a new PierreQuery for chaining. */
declare class PierreQuery extends QueryBase<PierreItem> {
    constructor(data?: PierreItem[]);
    /** Filter to items available in the given season (includes permanent and multi-season items). */
    bySeason(season: Season): PierreQuery;
    /** Filter to year-round permanent stock only (no seasonal seeds). */
    permanent(): PierreQuery;
    /** Filter to seasonal seed stock only (items with at least one season). */
    seeds(): PierreQuery;
    /** Filter to fruit tree saplings only. */
    saplings(): PierreQuery;
    /** Filter to cooking ingredients only. */
    ingredients(): PierreQuery;
    /** Filter to fertilizers and farming supplies only. */
    fertilizers(): PierreQuery;
    /** Filter to recipe items only. */
    recipes(): PierreQuery;
    /** Filter by category. */
    byCategory(category: PierreCategory): PierreQuery;
    /** Filter to items that are always available (no special purchase condition). */
    alwaysAvailable(): PierreQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): PierreQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): PierreQuery;
}
/** Returns a PierreQuery for all items sold at Pierre's General Store. Pass `source` to wrap a pre-filtered array. */
declare function pierre(source?: PierreItem[]): PierreQuery;

/** Query builder for The Stardrop Saloon shop stock. All filter and sort methods return a new SaloonQuery for chaining. */
declare class SaloonQuery extends QueryBase<SaloonItem> {
    constructor(data?: SaloonItem[]);
    /** Filter to food and drink items only. */
    food(): SaloonQuery;
    /** Filter to cooking recipe items only. */
    recipes(): SaloonQuery;
    /** Filter by category. */
    byCategory(category: SaloonCategory): SaloonQuery;
    /** Filter to items that are always available (no special purchase condition). */
    alwaysAvailable(): SaloonQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): SaloonQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): SaloonQuery;
}
/** Returns a SaloonQuery for all items sold at The Stardrop Saloon. Pass `source` to wrap a pre-filtered array. */
declare function saloon(source?: SaloonItem[]): SaloonQuery;

/** Query builder for Krobus's shop stock. All filter and sort methods return a new KrobusQuery for chaining. */
declare class KrobusQuery extends QueryBase<KrobusItem> {
    constructor(data?: KrobusItem[]);
    /** Filter to year-round permanent stock only. */
    permanent(): KrobusQuery;
    /** Filter to daily rotating items only. */
    daily(): KrobusQuery;
    /** Filter to items available on the given day of the week. */
    byDay(day: KrobusDay): KrobusQuery;
    /** Filter to crafting or building recipe items only. */
    recipes(): KrobusQuery;
    /** Filter to items that are always available (no special purchase condition). */
    alwaysAvailable(): KrobusQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): KrobusQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): KrobusQuery;
}
/** Returns a KrobusQuery for all items sold by Krobus. Pass `source` to wrap a pre-filtered array. */
declare function krobus(source?: KrobusItem[]): KrobusQuery;

/** Query builder for Marnie's Ranch shop stock. All filter and sort methods return a new MarnieQuery for chaining. */
declare class MarnieQuery extends QueryBase<MarnieItem> {
    constructor(data?: MarnieItem[]);
    /** Filter to items in the given category. */
    byCategory(category: MarnieCategory): MarnieQuery;
    /** Filter to animal supply items (Hay, Heater, Auto-Grabber). */
    animalSupplies(): MarnieQuery;
    /** Filter to tools (Milk Pail, Shears). */
    tools(): MarnieQuery;
    /** Filter to furniture and decor items. */
    furniture(): MarnieQuery;
    /** Filter to items with no special purchase condition. */
    alwaysAvailable(): MarnieQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): MarnieQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): MarnieQuery;
}
/** Returns a MarnieQuery for all items sold at Marnie's Ranch. Pass `source` to wrap a pre-filtered array. */
declare function marnie(source?: MarnieItem[]): MarnieQuery;

/** Query builder for the Wizard's magical constructions. All sort methods return a new WizardQuery for chaining. */
declare class WizardQuery extends QueryBase<WizardBuilding> {
    constructor(data?: WizardBuilding[]);
    /** Filter to buildings with no special availability condition. */
    alwaysAvailable(): WizardQuery;
    /** Sort by build cost ascending or descending. */
    sortByCost(order?: 'asc' | 'desc'): WizardQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): WizardQuery;
}
/** Returns a WizardQuery for all magical constructions at the Wizard's Tower. Pass `source` to wrap a pre-filtered array. */
declare function wizard(source?: WizardBuilding[]): WizardQuery;

/** Query builder for Willy's Fish Shop stock. All filter and sort methods return a new WillyQuery for chaining. */
declare class WillyQuery extends QueryBase<WillyItem> {
    constructor(data?: WillyItem[]);
    /** Filter to fishing rods only. */
    rods(): WillyQuery;
    /** Filter to bait items only. */
    bait(): WillyQuery;
    /** Filter to tackle items only. */
    tackle(): WillyQuery;
    /** Filter to items in the given category. */
    byCategory(category: WillyCategory): WillyQuery;
    /** Filter to items requiring the given fishing level or lower. */
    byFishingLevel(level: number): WillyQuery;
    /** Filter to items with no special purchase condition. */
    alwaysAvailable(): WillyQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): WillyQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): WillyQuery;
    /** Sort by fishing level required (ascending by default). */
    sortByFishingLevel(order?: 'asc' | 'desc'): WillyQuery;
}
/** Returns a WillyQuery for all items sold at Willy's Fish Shop. Pass `source` to wrap a pre-filtered array. */
declare function willy(source?: WillyItem[]): WillyQuery;

/** Query builder for the Adventurer's Guild shop stock. All filter and sort methods return a new GuildQuery for chaining. */
declare class GuildQuery extends QueryBase<GuildItem> {
    constructor(data?: GuildItem[]);
    /** Filter to weapons only. */
    weapons(): GuildQuery;
    /** Filter to boots only. */
    boots(): GuildQuery;
    /** Filter to rings only. */
    rings(): GuildQuery;
    /** Filter to slingshots only. */
    slingshots(): GuildQuery;
    /** Filter to items in the given category. */
    byCategory(category: GuildCategory): GuildQuery;
    /** Filter weapons by weapon type (sword, dagger, or club). */
    byWeaponType(type: GuildWeaponType): GuildQuery;
    /** Filter to items that unlock at or below the given mine level. */
    byMineLevel(level: number): GuildQuery;
    /** Filter to items with no special purchase condition. */
    alwaysAvailable(): GuildQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): GuildQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): GuildQuery;
    /** Sort by mine level required (ascending by default). */
    sortByMineLevel(order?: 'asc' | 'desc'): GuildQuery;
}
/** Returns a GuildQuery for all items sold at the Adventurer's Guild. Pass `source` to wrap a pre-filtered array. */
declare function guild(source?: GuildItem[]): GuildQuery;

/** Query builder for Robin's Carpenter Shop stock. All filter and sort methods return a new CarpenterQuery for chaining. */
declare class CarpenterQuery extends QueryBase<CarpenterItem> {
    constructor(data?: CarpenterItem[]);
    /** Filter to items in the given category. */
    byCategory(category: CarpenterCategory): CarpenterQuery;
    /** Filter to crafting recipe items only. */
    recipes(): CarpenterQuery;
    /** Filter to materials (Wood and Stone). */
    materials(): CarpenterQuery;
    /** Filter to items available on the given day of the week. Permanent items (no day set) are always included. */
    byDay(day: CarpenterDay): CarpenterQuery;
    /** Filter to items always available (not day-specific). */
    permanent(): CarpenterQuery;
    /** Filter to items with no special purchase condition. */
    alwaysAvailable(): CarpenterQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): CarpenterQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): CarpenterQuery;
}
/** Returns a CarpenterQuery for all items sold at Robin's Carpenter Shop. Pass `source` to wrap a pre-filtered array. */
declare function carpenter(source?: CarpenterItem[]): CarpenterQuery;

/** Query builder for the Casino shop stock. All prices are in Qi Coins. All filter and sort methods return a new CasinoQuery for chaining. */
declare class CasinoQuery extends QueryBase<CasinoItem> {
    constructor(data?: CasinoItem[]);
    /** Filter to items in the given category. */
    byCategory(category: CasinoCategory): CasinoQuery;
    /** Filter to furniture and decoration items. */
    furniture(): CasinoQuery;
    /** Filter to consumable items (fireworks, magnet, warp totem, hardwood fence). */
    consumables(): CasinoQuery;
    /** Sort by price in Qi Coins ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): CasinoQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): CasinoQuery;
}
/** Returns a CasinoQuery for all items sold at the Casino. All prices are in Qi Coins. Pass `source` to wrap a pre-filtered array. */
declare function casino(source?: CasinoItem[]): CasinoQuery;

/** Query builder for the Desert Trader's barter stock. Items are traded for goods rather than gold. All filter and sort methods return a new DesertTraderQuery for chaining. */
declare class DesertTraderQuery extends QueryBase<DesertTraderItem> {
    constructor(data?: DesertTraderItem[]);
    /** Filter to items always in stock (no day restriction). */
    permanent(): DesertTraderQuery;
    /** Filter to day-specific rotating items only. */
    daily(): DesertTraderQuery;
    /** Filter to all items available on the given day (permanent + that day's item). */
    byDay(day: DesertTraderDay): DesertTraderQuery;
    /** Filter to recipe items only. */
    recipes(): DesertTraderQuery;
    /** Filter to items traded for the specified trade item (by item ID). */
    byTradeItem(tradeItemId: string): DesertTraderQuery;
    /** Filter to items with no special availability condition. */
    alwaysAvailable(): DesertTraderQuery;
    /** Sort by trade amount ascending or descending. */
    sortByTradeAmount(order?: 'asc' | 'desc'): DesertTraderQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): DesertTraderQuery;
}
/** Returns a DesertTraderQuery for all barter trades at the Desert Trader. Pass `source` to wrap a pre-filtered array. */
declare function desertTrader(source?: DesertTraderItem[]): DesertTraderQuery;

/** Query builder for Sandy's Oasis shop stock. All filter and sort methods return a new OasisQuery for chaining. */
declare class OasisQuery extends QueryBase<OasisItem> {
    constructor(data?: OasisItem[]);
    /** Filter to seeds only. */
    seeds(): OasisQuery;
    /** Filter to food items only. */
    food(): OasisQuery;
    /** Filter to clothing items only. */
    clothing(): OasisQuery;
    /** Filter to items in the given category. */
    byCategory(category: OasisCategory): OasisQuery;
    /** Filter to items always in stock (no day restriction). */
    permanent(): OasisQuery;
    /** Filter to day-specific rotating items only. */
    daily(): OasisQuery;
    /** Filter to all items available on the given day (permanent + that day's item). */
    byDay(day: OasisDay): OasisQuery;
    /** Filter to items with no special purchase condition. */
    alwaysAvailable(): OasisQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): OasisQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): OasisQuery;
}
/** Returns an OasisQuery for all items sold at Sandy's Oasis. Pass `source` to wrap a pre-filtered array. */
declare function oasis(source?: OasisItem[]): OasisQuery;

/** Query builder for the Volcano Dungeon Dwarf shop. Uses mixed currencies (gold, Cinder Shards, Diamonds). All filter and sort methods return a new VolcanoShopQuery for chaining. */
declare class VolcanoShopQuery extends QueryBase<VolcanoShopItem> {
    constructor(data?: VolcanoShopItem[]);
    /** Filter to items purchased with the specified currency. */
    byCurrency(currency: VolcanoShopCurrency): VolcanoShopQuery;
    /** Filter to items purchased with gold. */
    goldItems(): VolcanoShopQuery;
    /** Filter to items purchased with Cinder Shards. */
    cinderShardItems(): VolcanoShopQuery;
    /** Filter to items purchased with Diamonds. */
    diamondItems(): VolcanoShopQuery;
    /** Filter by item category. */
    byCategory(category: VolcanoShopCategory): VolcanoShopQuery;
    /** Filter to consumable items only. */
    consumables(): VolcanoShopQuery;
    /** Filter to food items only. */
    food(): VolcanoShopQuery;
    /** Filter to items with no special availability condition. */
    alwaysAvailable(): VolcanoShopQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): VolcanoShopQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): VolcanoShopQuery;
}
/** Returns a VolcanoShopQuery for all items at the Volcano Dungeon Dwarf shop. Pass `source` to wrap a pre-filtered array. */
declare function volcanoShop(source?: VolcanoShopItem[]): VolcanoShopQuery;

/** Query builder for the Island Trader's barter stock. Items are traded for goods rather than gold. All filter and sort methods return a new IslandTraderQuery for chaining. */
declare class IslandTraderQuery extends QueryBase<IslandTraderItem> {
    constructor(data?: IslandTraderItem[]);
    /** Filter to items always in stock (no day restriction and no special availability). */
    permanent(): IslandTraderQuery;
    /** Filter to day-specific rotating items only. */
    daily(): IslandTraderQuery;
    /** Filter to all items available on the given day (permanent + that day's item). */
    byDay(day: IslandTraderDay): IslandTraderQuery;
    /** Filter to recipe items only. */
    recipes(): IslandTraderQuery;
    /** Filter to items traded for the specified trade item (by item ID). */
    byTradeItem(tradeItemId: string): IslandTraderQuery;
    /** Filter to items with no special availability condition. */
    alwaysAvailable(): IslandTraderQuery;
    /** Sort by trade amount ascending or descending. */
    sortByTradeAmount(order?: 'asc' | 'desc'): IslandTraderQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): IslandTraderQuery;
}
/** Returns an IslandTraderQuery for all barter trades at the Island Trader. Pass `source` to wrap a pre-filtered array. */
declare function islandTrader(source?: IslandTraderItem[]): IslandTraderQuery;

/** Query builder for Island Field Office fossil collection data. All filter and sort methods return a new FieldOfficeQuery for chaining. */
declare class FieldOfficeQuery extends QueryBase<FieldOfficeCollectionData> {
    constructor(data?: FieldOfficeCollectionData[]);
    /** Filter to a specific collection by ID. */
    byCollection(id: FieldOfficeCollection): FieldOfficeQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): FieldOfficeQuery;
}
/** Query builder for individual Island Field Office donation items. All filter and sort methods return a new FieldOfficeDonationQuery for chaining. */
declare class FieldOfficeDonationQuery extends QueryBase<FieldOfficeDonation> {
    constructor(data?: FieldOfficeDonation[]);
    /** Filter to donations belonging to the specified collection. */
    byCollection(id: FieldOfficeCollection): FieldOfficeDonationQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): FieldOfficeDonationQuery;
}
/** Returns a FieldOfficeQuery for all Island Field Office collections. Pass `source` to wrap a pre-filtered array. */
declare function fieldOffice(source?: FieldOfficeCollectionData[]): FieldOfficeQuery;
/** Returns a FieldOfficeDonationQuery for all individual fossil donation items. Pass `source` to wrap a pre-filtered array. */
declare function fieldOfficeDonations(source?: FieldOfficeDonation[]): FieldOfficeDonationQuery;

/** Calculates Grandpa's evaluation score based on end-of-Year-2 progress. */
declare class GrandpaEvaluator {
    /**
     * Calculate the Grandpa evaluation result for the given input.
     * Returns the total score (0–21), candle count (1–4), and a full breakdown
     * of points earned per criterion.
     */
    evaluate(input: GrandpaInput): GrandpaResult;
}
/** Returns a GrandpaEvaluator for calculating Grandpa's end-of-Year-2 evaluation score. */
declare function grandpaEvaluator(): GrandpaEvaluator;

/** Query builder for items sold at the Dwarf's shop in the Mines. All filter and sort methods return a new DwarfShopQuery for chaining. */
declare class DwarfShopQuery extends QueryBase<DwarfShopItem> {
    constructor(data?: DwarfShopItem[]);
    /** Filter to items in the given category. */
    byCategory(category: DwarfShopCategory): DwarfShopQuery;
    /** Filter to explosive items (Cherry Bomb, Bomb, Mega Bomb). */
    explosives(): DwarfShopQuery;
    /** Filter to consumable items (Life Elixir, Oil of Garlic). */
    consumables(): DwarfShopQuery;
    /** Filter to crafting recipe items. */
    recipes(): DwarfShopQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): DwarfShopQuery;
    /** Sort by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): DwarfShopQuery;
}
/** Returns a DwarfShopQuery for all items sold at the Dwarf's shop. Pass `source` to wrap a pre-filtered array. */
declare function dwarfShop(source?: DwarfShopItem[]): DwarfShopQuery;

/** Query builder for Stardew Valley location data. All filter and sort methods return a new LocationQuery for chaining. */
declare class LocationQuery extends QueryBase<GameLocation> {
    constructor(data?: GameLocation[]);
    /** Filter to entries of the given type ("location" or "building"). */
    byType(type: LocationType): LocationQuery;
    /** Filter to locations in the given category. */
    byCategory(category: LocationCategory): LocationQuery;
    /** Filter to locations that have a linked shop data file. */
    withShop(): LocationQuery;
    /** Filter to locations that are always accessible (no operating hours). */
    alwaysOpen(): LocationQuery;
    /** Filter to locations closed on the given day. */
    closedOn(day: LocationDay): LocationQuery;
    /** Filter to locations that have the given NPC as an occupant (case-insensitive). */
    byOccupant(name: string): LocationQuery;
    /** Sort locations by name alphabetically. */
    sortByName(order?: 'asc' | 'desc'): LocationQuery;
}
/** Returns a LocationQuery for all Stardew Valley location data. Pass `source` to wrap a pre-filtered array. */
declare function locations(source?: GameLocation[]): LocationQuery;

/** Query builder for Special Items & Powers data. All filter and sort methods return a new SpecialItemQuery for chaining. */
declare class SpecialItemQuery extends QueryBase<SpecialItem> {
    constructor(data?: SpecialItem[]);
    /** Filter to entries of the given type ("special-item", "book", "skill-book", or "mastery"). */
    byType(type: SpecialItemType): SpecialItemQuery;
    /** Filter mastery items by associated skill. */
    bySkill(skill: MasterySkill): SpecialItemQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): SpecialItemQuery;
}
/** Returns a SpecialItemQuery for all Special Items & Powers data. Pass `source` to wrap a pre-filtered array. */
declare function specialItems(source?: SpecialItem[]): SpecialItemQuery;

/** Query builder for Bookseller shop item data. All filter and sort methods return a new BooksellerItemQuery for chaining. */
declare class BooksellerItemQuery extends QueryBase<BooksellerItem> {
    constructor(data?: BooksellerItem[]);
    /** Filter to items with the given availability. */
    byAvailability(availability: BooksellerAvailability): BooksellerItemQuery;
    /** Filter to items always in stock. */
    alwaysAvailable(): BooksellerItemQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): BooksellerItemQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): BooksellerItemQuery;
}
/** Accessor for Bookseller trade-in data. */
declare class BooksellerTradeQuery {
    private readonly data;
    constructor(data?: BooksellerTrade[]);
    /** All trade-in offers. */
    get(): BooksellerTrade[];
    /** Number of trade-in offers. */
    count(): number;
    /** Find a trade-in offer by the book ID being traded. */
    findByBookId(bookId: string): BooksellerTrade | undefined;
}
/** Returns a BooksellerItemQuery for all Bookseller shop items. Pass `source` to wrap a pre-filtered array. */
declare function booksellerShop(source?: BooksellerItem[]): BooksellerItemQuery;
/** Returns a BooksellerTradeQuery for all Bookseller trade-in offers. Pass `source` to wrap a pre-filtered array. */
declare function booksellerTrades(source?: BooksellerTrade[]): BooksellerTradeQuery;

/** Query builder for Movie Theater concession stand data. All filter and sort methods return a new ConcessionQuery for chaining. */
declare class ConcessionQuery extends QueryBase<Concession> {
    constructor(data?: Concession[]);
    /** Filter to items that include the given tag. */
    byTag(tag: ConcessionTag): ConcessionQuery;
    /** Sort by price ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): ConcessionQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): ConcessionQuery;
}
/** Returns a ConcessionQuery for all Movie Theater concession stand items. Pass `source` to wrap a pre-filtered array. */
declare function concessions(source?: Concession[]): ConcessionQuery;

/** Query builder for farmhouse upgrade data. Upgrades are sequential (tier 1–4). All filter and sort methods return a new HouseUpgradeQuery for chaining. */
declare class HouseUpgradeQuery extends QueryBase<HouseUpgrade> {
    constructor(data?: HouseUpgrade[]);
    /** Filter to upgrades at the given tier. */
    byTier(tier: number): HouseUpgradeQuery;
    /** Sort by tier ascending or descending. */
    sortByTier(order?: 'asc' | 'desc'): HouseUpgradeQuery;
}
/** Query builder for farmhouse renovation data. Renovations are available after Upgrade 2 and are completed instantly. All filter and sort methods return a new HouseRenovationQuery for chaining. */
declare class HouseRenovationQuery extends QueryBase<HouseRenovation> {
    constructor(data?: HouseRenovation[]);
    /** Filter to free renovations (cost === 0). */
    free(): HouseRenovationQuery;
    /** Filter to renovations that require another renovation to be completed first. */
    withPrerequisite(): HouseRenovationQuery;
    /** Sort by cost ascending or descending. */
    sortByPrice(order?: 'asc' | 'desc'): HouseRenovationQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): HouseRenovationQuery;
}
/** Returns a HouseUpgradeQuery for all farmhouse upgrade tiers. Pass `source` to wrap a pre-filtered array. */
declare function houseUpgrades(source?: HouseUpgrade[]): HouseUpgradeQuery;
/** Returns a HouseRenovationQuery for all farmhouse renovations. Pass `source` to wrap a pre-filtered array. */
declare function houseRenovations(source?: HouseRenovation[]): HouseRenovationQuery;

/** Query builder for secret note and journal scrap data. All filter and sort methods return a new SecretNoteQuery for chaining. */
declare class SecretNoteQuery extends QueryBase<SecretNote> {
    constructor(data?: SecretNote[]);
    /** Filter to notes of the given type. */
    byType(type: SecretNoteType): SecretNoteQuery;
    /** Filter to Secret Notes only (found in The Valley). */
    notes(): SecretNoteQuery;
    /** Filter to Journal Scraps only (found on Ginger Island). */
    journalScraps(): SecretNoteQuery;
}
/** Returns a SecretNoteQuery for all secret notes and journal scraps. Pass `source` to wrap a pre-filtered array. */
declare function secretNotes(source?: SecretNote[]): SecretNoteQuery;

/** Query builder for trinket data. All filter and sort methods return a new TrinketQuery for chaining. */
declare class TrinketQuery extends QueryBase<Trinket> {
    constructor(data?: Trinket[]);
    /** Filter to trinkets from the given source. */
    bySource(source: TrinketSource): TrinketQuery;
    /** Filter to trinkets that can be re-forged at the Forge. */
    forgeable(): TrinketQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): TrinketQuery;
}
/** Returns a TrinketQuery for all trinkets. Pass `source` to wrap a pre-filtered array. */
declare function trinkets(source?: Trinket[]): TrinketQuery;

/** Query builder for Lost Books found in Stardew Valley. All filter and sort methods return a new LostBookQuery for chaining. */
declare class LostBookQuery extends QueryBase<LostBook> {
    constructor(data?: LostBook[]);
}
/** Returns a LostBookQuery for all Lost Books. Pass `source` to wrap a pre-filtered array. */
declare function lostBooks(source?: LostBook[]): LostBookQuery;

/** Query builder for StarDrop data. All filter and sort methods return a new StarDropQuery for chaining. */
declare class StarDropQuery extends QueryBase<StarDrop> {
    constructor(data?: StarDrop[]);
    /** Filter by acquisition source category. */
    bySource(source: StarDropSource): StarDropQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): StarDropQuery;
}
/** Returns a StarDropQuery for all StarDrops. Pass `source` to wrap a pre-filtered array. */
declare function starDrops(source?: StarDrop[]): StarDropQuery;

/** Query builder for Golden Walnut data. All filter and sort methods return a new GoldenWalnutQuery for chaining. */
declare class GoldenWalnutQuery extends QueryBase<GoldenWalnut> {
    constructor(data?: GoldenWalnut[]);
    /** Filter by location (case-insensitive substring match). */
    byLocation(location: string): GoldenWalnutQuery;
    /** Filter by tracking type. */
    byTrackingType(type: GoldenWalnutTrackingType): GoldenWalnutQuery;
    /** Sort alphabetically by location. */
    sortByLocation(order?: 'asc' | 'desc'): GoldenWalnutQuery;
    /** Sort by walnut amount. */
    sortByAmount(order?: 'asc' | 'desc'): GoldenWalnutQuery;
    /** Total number of walnuts across all entries in the current query. */
    totalAmount(): number;
}
/** Returns a GoldenWalnutQuery for all Golden Walnut data. Pass `source` to wrap a pre-filtered array. */
declare function goldenWalnuts(source?: GoldenWalnut[]): GoldenWalnutQuery;

/** Query builder for Profession data. All filter and sort methods return a new ProfessionQuery for chaining. */
declare class ProfessionQuery extends QueryBase<ProfessionData> {
    constructor(data?: ProfessionData[]);
    /** Filter by skill name. */
    bySkill(skill: ProfessionSkill): ProfessionQuery;
    /** Filter by level (5 or 10). */
    byLevel(level: 5 | 10): ProfessionQuery;
    /** Filter to professions that branch from a given parent profession ID. */
    byParent(parentId: string): ProfessionQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): ProfessionQuery;
}
/** Returns a ProfessionQuery for all Profession data. Pass `source` to wrap a pre-filtered array. */
declare function professions(source?: ProfessionData[]): ProfessionQuery;

/** Query builder for Special Order data. All filter and sort methods return a new SpecialOrderQuery for chaining. */
declare class SpecialOrderQuery extends QueryBase<SpecialOrderData> {
    constructor(data?: SpecialOrderData[]);
    /** Filter by order type (town or qi). */
    byType(type: SpecialOrderCategory): SpecialOrderQuery;
    /** Filter by requester NPC name (case-insensitive exact match). */
    byRequester(requester: string): SpecialOrderQuery;
    /** Filter to repeatable special orders. */
    repeatable(): SpecialOrderQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): SpecialOrderQuery;
}
/** Returns a SpecialOrderQuery for all Special Order data. Pass `source` to wrap a pre-filtered array. */
declare function specialOrders(source?: SpecialOrderData[]): SpecialOrderQuery;

/**
 * Query builder for heart event data. All filter and sort methods return a new EventQuery for chaining.
 * Each event has a generated `name` field in the format "Villager N-Heart" for QueryBase compatibility.
 */
declare class EventQuery extends QueryBase<GameEvent> {
    constructor(data?: GameEvent[]);
    /** Filter by villager name (case-insensitive exact match). */
    byVillager(villager: string): EventQuery;
    /** Filter by heart level. */
    byHearts(hearts: number): EventQuery;
    /** Filter to only marriage candidate events (hearts 2, 4, 6, 8, 10, 14). */
    marriageEvents(): EventQuery;
    /** Sort by heart level. */
    sortByHearts(order?: 'asc' | 'desc'): EventQuery;
    /** Sort alphabetically by villager name. */
    sortByVillager(order?: 'asc' | 'desc'): EventQuery;
}
/** Returns an EventQuery for all heart event data. Pass `source` to wrap a pre-filtered array. */
declare function events(source?: GameEvent[]): EventQuery;

/**
 * Query builder for building data. All filter and sort methods return a new BuildingQuery for chaining.
 * Farmhouse upgrades/renovations are in the separate `farmhouse` module.
 */
declare class BuildingQuery extends QueryBase<Building> {
    constructor(data?: Building[]);
    /** Filter by builder (Robin or Wizard). */
    byBuilder(builder: BuildingBuilder): BuildingQuery;
    /** Filter to magical buildings only (Wizard buildings constructed instantly). */
    magical(): BuildingQuery;
    /** Filter to buildings that are upgrades of another building. */
    upgrades(): BuildingQuery;
    /** Filter to base buildings (not upgrades). */
    base(): BuildingQuery;
    /** Sort by build cost. Default: `'asc'`. */
    sortByCost(order?: 'asc' | 'desc'): BuildingQuery;
    /** Sort alphabetically by name. */
    sortByName(order?: 'asc' | 'desc'): BuildingQuery;
}
/** Returns a BuildingQuery for all building data. Pass `source` to wrap a pre-filtered array. */
declare function buildings(source?: Building[]): BuildingQuery;

/** Query builder for rarecrow data. All sort methods return a new RarecrowQuery for chaining. */
declare class RarecrowQuery extends QueryBase<Rarecrow> {
    constructor(data?: Rarecrow[]);
    /** Sort by rarecrow number. Default: `'asc'`. */
    sortByNumber(order?: 'asc' | 'desc'): RarecrowQuery;
}
/** Returns a RarecrowQuery for all rarecrow data. Pass `source` to wrap a pre-filtered array. */
declare function rarecrows(source?: Rarecrow[]): RarecrowQuery;

/** Top-level parsed save file containing all extracted game data. */
interface SaveData {
    apiVersion: number;
    player: SavePlayer;
    farm: SaveFarm;
    date: SaveDate;
    inventory: SaveItem[];
    fishCaught: SaveFishEntry[];
    itemsShipped: SaveShippedEntry[];
    museum: SaveMuseum;
    friendships: SaveFriendship[];
    achievements: number[];
    activeQuests: SaveQuest[];
    stardrops: SaveStardropEntry[];
    stats: SaveStats;
    animals: SaveAnimal[];
    fishPonds: SaveFishPond[];
    buildings: SaveBuilding[];
    cookingRecipes: SaveRecipeEntry[];
    craftingRecipes: SaveRecipeEntry[];
    bundles: SaveBundleData;
    monstersKilled: SaveMonsterKillEntry[];
    mail: string[];
    specialOrders: SaveSpecialOrders;
    professions: SaveProfession[];
    booksRead: string[];
    eventsSeen: string[];
    secretNotes: SaveSecretNotes;
    walnuts: SaveWalnuts;
    islandUpgrades: SaveIslandUpgrades;
    children: SaveChild[];
    pets: SavePet[];
    horse: SaveHorse | null;
    powers: SavePowers;
    raccoons: SaveRaccoons;
    rarecrows: SaveRarecrows;
    perfection: SavePerfection;
    mineProgress: SaveMineProgress;
    communityCenter: SaveCommunityCenter;
    joja: SaveJoja;
}
/** Core player profile including name, money, skills, and mastery progress. */
interface SavePlayer {
    name: string;
    farmName: string;
    favoriteThing: string;
    gender: string;
    money: number;
    totalMoneyEarned: number;
    spouse: string | null;
    houseUpgradeLevel: number;
    luckLevel: number;
    maxItems: number;
    maxHealth: number;
    maxStamina: number;
    skills: SaveSkills;
    mastery: SaveMastery;
    toolLevels: SaveToolLevels;
    willyBackRoomInvitation: boolean;
    lostBooksFound: number;
    helpWantedQuests: number;
    gameVersion: string;
    millisecondsPlayed: number;
}
/** A tool currently being upgraded at the blacksmith. */
interface SaveUpgradingTool {
    tool: 'wateringCan' | 'pan' | 'pickaxe' | 'axe' | 'hoe';
    name: string;
}
/** Level and active enchantment for a single tool. Enchantment is null when none is applied. */
interface SaveToolLevel {
    level: number;
    enchantment: string | null;
}
/** Upgrade levels and enchantments for the player's tools (level 0 = base, 1 = copper, 2 = steel, 3 = gold, 4 = iridium). */
interface SaveToolLevels {
    wateringCan: SaveToolLevel;
    pan: SaveToolLevel;
    pickaxe: SaveToolLevel;
    axe: SaveToolLevel;
    hoe: SaveToolLevel;
    trashCan: SaveToolLevel;
    fishingRod: SaveToolLevel;
    /** The tool currently at the blacksmith being upgraded, or null if none. */
    currentlyUpgrading: SaveUpgradingTool | null;
}
/** Mastery system progress including XP, levels spent, and unlocked perks. */
interface SaveMastery {
    xp: number;
    levelsSpent: number;
    perks: SaveMasteryPerk[];
}
/** A single mastery perk and whether it has been unlocked. */
interface SaveMasteryPerk {
    id: string;
    name: string;
    unlocked: boolean;
}
/** Current in-game date with year, season, day, and total days played. */
interface SaveDate {
    year: number;
    season: Season;
    day: number;
    totalDaysPlayed: number;
}
/** Player skill levels across all five skill categories. */
interface SaveSkills {
    farming: SaveSkillLevel;
    fishing: SaveSkillLevel;
    foraging: SaveSkillLevel;
    mining: SaveSkillLevel;
    combat: SaveSkillLevel;
}
/** A single skill's current level and accumulated XP. */
interface SaveSkillLevel {
    level: number;
    xp: number;
}
/** Farm type and name. */
interface SaveFarm {
    type: number;
    name: string;
}
/** An item in the player's inventory with stack size and quality. */
interface SaveItem {
    id: string;
    name: string;
    type: string;
    stack: number;
    quality: number;
}
/** A caught fish entry with times caught and largest size recorded. */
interface SaveFishEntry {
    id: string;
    timesCaught: number;
    largestSize: number;
}
/** A shipped item entry with total count shipped. */
interface SaveShippedEntry {
    id: string;
    count: number;
}
/** Museum donation progress including donated items, artifacts found, and minerals found. */
interface SaveMuseum {
    donations: string[];
    artifactsFound: SaveCollectionEntry[];
    mineralsFound: SaveCollectionEntry[];
}
/** A collected item entry with ID and count found. */
interface SaveCollectionEntry {
    id: string;
    count: number;
}
/** Friendship data for a single NPC including hearts, points, and relationship status. */
interface SaveFriendship {
    name: string;
    points: number;
    hearts: number;
    status: string;
    giftsThisWeek: number;
}
/** A farm animal with friendship, happiness, and housing details. */
interface SaveAnimal {
    id: string;
    name: string;
    type: string;
    buildingId: string;
    buildingType: string;
    friendship: number;
    happiness: number;
    age: number;
    hasAnimalCracker: boolean;
}
/** A fish pond building with the fish species and population. */
interface SaveFishPond {
    buildingId: string;
    fishType: number;
    currentOccupants: number;
    maxOccupants: number;
}
/** A farm building with its type, position, and current animal count. */
interface SaveBuilding {
    id: string;
    type: string;
    animalCount: number;
}
/** An active or completed quest with its title, description, and completion status. */
interface SaveQuest {
    id: string;
    title: string;
    description: string;
    type: number;
    completed: boolean;
}
/** A stardrop source and whether it has been collected. */
interface SaveStardropEntry {
    id: string;
    name: string;
    collected: boolean;
}
/** A known recipe and the number of times it has been made. */
interface SaveRecipeEntry {
    name: string;
    timesMade: number;
}
/** Community Center bundle data including rooms with nested bundles and Joja route status. */
interface SaveBundleData {
    rooms: SaveBundleRoom[];
    isJojaRoute: boolean;
    isCCComplete: boolean;
}
/** A Community Center room with its bundles and completion status. */
interface SaveBundleRoom {
    name: string;
    areaIndex: number;
    complete: boolean;
    bundles: SaveBundleStatus[];
}
/** A single bundle with its required items, completion progress, and reward. */
interface SaveBundleStatus {
    id: string;
    bundleIndex: number;
    name: string;
    items: SaveBundleItem[];
    itemsRequired: number;
    itemsCompleted: number;
    complete: boolean;
    reward: SaveBundleReward | null;
}
/** A required bundle item with its quantity, quality, and whether it has been donated. */
interface SaveBundleItem {
    itemId: string;
    name: string;
    quantity: number;
    quality: number;
    qualityName: string;
    completed: boolean;
}
/** The reward granted for completing a bundle. */
interface SaveBundleReward {
    type: string;
    itemId: string;
    name: string;
    quantity: number;
}
/** A monster type and the total number killed. */
interface SaveMonsterKillEntry {
    name: string;
    count: number;
}
/** A chosen profession with its internal ID and display name. */
interface SaveProfession {
    id: number;
    name: string;
}
/** Completed special orders split by town board and Qi's Walnut Room. */
interface SaveSpecialOrders {
    completed: string[];
    qiCompleted: string[];
}
/** Secret notes and journal scraps found, plus magnifying glass ownership. */
interface SaveSecretNotes {
    notesFound: number[];
    journalScrapsFound: number[];
    hasMagnifyingGlass: boolean;
    hasSeenKrobus: boolean;
}
/** Golden walnut collection progress with total found and tracker entries. */
interface SaveWalnuts {
    found: number;
    collected: string[];
}
/** A single Ginger Island parrot upgrade with unlock status. */
interface SaveIslandUpgrade {
    id: string;
    unlocked: boolean;
}
/** Ginger Island upgrade and unlock status for each parrot-purchasable feature. */
type SaveIslandUpgrades = SaveIslandUpgrade[];
/** A player's child with name, age stage, and gender. */
interface SaveChild {
    name: string;
    age: number;
    gender: string;
}
/** A pet owned by the player. `starter` is true for the pet chosen at game start. */
interface SavePet {
    name: string;
    type: string;
    breed: number;
    friendship: number;
    starter: boolean;
}
/** The player's horse with name and unique ID. */
interface SaveHorse {
    name: string;
    type: 'horse';
    id: string;
}
/** Powers and special items collection with acquisition status. */
interface SavePowers {
    specialItems: SavePowerEntry[];
}
/** A single power or special item and whether it has been acquired. */
interface SavePowerEntry {
    id: string;
    name: string;
    acquired: boolean;
}
/** Placed rarecrow item IDs found across all game locations. */
interface SaveRarecrows {
    placed: string[];
}
/** Raccoon quest progress including times fed and unlock milestones. */
interface SaveRaccoons {
    timesFed: number;
    daysPlayedWhenLastFinished: number;
    treeFallen: boolean;
    movedIn: boolean;
}
/** Perfection tracker status including farm perfection, waivers, and obelisks owned. */
interface SavePerfection {
    farmPerfect: boolean;
    waivers: number;
    hasGoldClock: boolean;
    obelisks: string[];
}
/** Community Center completion status including individual room progress. */
interface SaveCommunityCenterRooms {
    boilerRoom: boolean;
    craftsRoom: boolean;
    pantry: boolean;
    fishTank: boolean;
    vault: boolean;
    bulletin: boolean;
}
/** Community Center unlock, completion, and Joja route status. */
interface SaveCommunityCenter {
    unlocked: boolean;
    bundlesActive: boolean;
    completed: boolean;
    ceremonyAttended: boolean;
    jojaAbandoned: boolean;
    rooms: SaveCommunityCenterRooms;
}
/** A single Joja development project with purchase status. */
interface SaveJojaDevelopment {
    id: string;
    purchased: boolean;
}
/** Joja membership, development project completion, and route status. */
interface SaveJoja {
    isMember: boolean;
    completed: boolean;
    developments: SaveJojaDevelopment[];
}
/** Mine and Skull Cavern progress including deepest levels reached and key ownership. */
interface SaveMineProgress {
    deepestMineLevel: number;
    deepestSkullCavernLevel: number;
    hasRustyKey: boolean;
    hasSkullKey: boolean;
}
/** Lifetime gameplay statistics with named fields and the full raw stats dictionary. */
interface SaveStats {
    daysPlayed: number;
    stepsTaken: number;
    fishCaught: number;
    itemsShipped: number;
    itemsForaged: number;
    itemsCrafted: number;
    itemsCooked: number;
    monstersKilled: number;
    questsCompleted: number;
    geodesCracked: number;
    giftsGiven: number;
    timesFished: number;
    timesUnconscious: number;
    seedsSown: number;
    treesChopped: number;
    rocksCrushed: number;
    raw: Record<string, number>;
}

/** A mapping from a game version range to an API version. */
interface VersionRange {
    minVersion: string;
    maxVersion: string | null;
    apiVersion: number;
}
/** The latest API version supported by this package. */
declare const LATEST_API_VERSION = 1;
/**
 * Resolve a game version string to the corresponding API version number.
 * Returns the API version for the first matching range, or the latest API version
 * if no range matches (forward-compatible default).
 */
declare function resolveApiVersion(gameVersion: string): number;

/**
 * Parse a Stardew Valley XML save file and return structured game data.
 * The API version is resolved from the game version in the save file,
 * and the appropriate versioned parser set is used.
 */
declare function parseSaveFile(xml: string): SaveData;

export { type Achievement, AchievementQuery, type Animal, type AnimalProduce, AnimalQuery, type Artifact, ArtifactQuery, ArtisanCalculator, type ArtisanEnergyResult, type ArtisanGood, type ArtisanGoodBuff, ArtisanGoodQuery, type ArtisanIngredient, type ArtisanResult, type ArtisanUses, type Backpack, type Bait, BaitQuery, type BarItem, type BlacksmithItem, BlacksmithQuery, type BooksellerAvailability, type BooksellerItem, BooksellerItemQuery, type BooksellerTrade, BooksellerTradeQuery, type Buff, type Building, type BuildingBuilder, type BuildingMaterial, BuildingQuery, type Bundle, type BundleItem, BundleQuery, type BundleReward, type BundleRoom, type CarpenterCategory, type CarpenterDay, type CarpenterItem, CarpenterQuery, type CasinoCategory, type CasinoItem, CasinoQuery, type CaskAging, type ChoppedTreeProduce, type CollectionItem, CollectionItemQuery, CollectionsQuery, type Concession, ConcessionQuery, type ConcessionTag, type CookedDish, type CookingBuff, CookingQuery, type CraftingIngredient, type CraftingOutput, CraftingQuery, type CraftingRecipe, type Crop, CropQuery, type DayOfWeek, type DesertTraderDay, type DesertTraderItem, DesertTraderQuery, type DwarfShopCategory, type DwarfShopItem, DwarfShopQuery, type EnergyHealth, EventQuery, type FarmAnimal, type FarmMap, FarmMapQuery, type Festival, type FieldOfficeCollection, type FieldOfficeCollectionData, type FieldOfficeDonation, FieldOfficeDonationQuery, FieldOfficeQuery, type FieldOfficeReward, type Fish, type FishCatchType, type FishCategory, type FishPond, type FishPondProduce, FishQuery, type FishRoe, type FishWeather, type FishingRod, type FishingRodLevel, type Footwear, FootwearQuery, type Forageable, ForageableQuery, type FruitTree, type FruitTreeProduce, type GameEvent, type GameLocation, type GeodeContainer, type GeodeContent, type GiftPreferences, type GoldBundle, type GoldenWalnut, GoldenWalnutQuery, type GoldenWalnutTrackingType, type GrandpaCategory, GrandpaEvaluator, type GrandpaInput, type GrandpaResult, type GrandpaScoreEntry, type GuildCategory, type GuildItem, GuildQuery, type GuildWeaponType, type HarvestQuantity, type Hat, HatQuery, type HeartEvent, type HouseRenovation, HouseRenovationQuery, type HouseUpgrade, type HouseUpgradeMaterial, HouseUpgradeQuery, type Ingredient, type IslandTraderDay, type IslandTraderItem, IslandTraderQuery, type ItemBundle, type ItemQuality, type JojaBundle, type JojaItem, JojaParrotCalculator, JojaQuery, type KnowledgeBonus, KnowledgeCalculator, type KrobusDay, type KrobusItem, KrobusQuery, type KrobusStockType, LATEST_API_VERSION, type LocationCategory, type LocationDay, type LocationHours, LocationQuery, type LocationType, type LostBook, LostBookQuery, MASTERY_LEVELS, type MarnieCategory, type MarnieItem, MarnieQuery, type MasteryLevel, type MasterySkill, type MasteryUnlock, type MedicalSupply, MedicalSupplyQuery, type MeleeWeapon, type Mineral, type MineralItem, MineralQuery, type MixedSeed, type MixedSeedProduces, MixedSeedQuery, type Monster, type MonsterLoot, MonsterLootQuery, MonsterQuery, type MonsterSlayerGoal, MonsterSlayerGoalQuery, type MonsterVariant, type NodeDrop, type NodeItem, type OasisCategory, type OasisDay, type OasisItem, OasisQuery, type OreItem, type PerfectionCategory, PerfectionQuery, type Pet, type PierreCategory, type PierreItem, PierreQuery, type PriceFormula, type ProfessionBonus, ProfessionCalculator, type ProfessionData, ProfessionQuery, type ProfessionSkill, type QiCurrency, type QiStockItem, QiStockQuery, type Quality, QualityCalculator, type QualityEnergyHealth, type QualityPrice, type Quest, QuestQuery, type Rarecrow, RarecrowQuery, type RecipeSource, type ResourceItem, type Ring, RingQuery, SKILL_TITLES, type SaloonCategory, type SaloonItem, SaloonQuery, type SaveAnimal, type SaveBuilding, type SaveBundleData, type SaveBundleItem, type SaveBundleReward, type SaveBundleRoom, type SaveBundleStatus, type SaveChild, type SaveCollectionEntry, type SaveData, type SaveDate, type SaveFarm, type SaveFishEntry, type SaveFriendship, type SaveIslandUpgrades, type SaveItem, type SaveMastery, type SaveMasteryPerk, type SaveMineProgress, type SaveMonsterKillEntry, type SaveMuseum, type SavePerfection, type SavePet, type SavePlayer, type SavePowerEntry, type SavePowers, type SaveProfession, type SaveQuest, type SaveRaccoons, type SaveRarecrows, type SaveRecipeEntry, type SaveSecretNotes, type SaveShippedEntry, type SaveSkillLevel, type SaveSkills, type SaveSpecialOrders, type SaveStardropEntry, type SaveStats, type SaveWalnuts, type SearchResult, type SearchResultKind, type Season, type SeasonData, SeasonQuery, type SecretNote, SecretNoteQuery, type SecretNoteType, type SeedBuyPrice, type SimpleTool, type Skill, type SkillLevel, type SkillLevelRecipes, type SkillMastery, SkillQuery, type SlayerReward, type Slingshot, type SmeltRecipe, type SpecialItem, SpecialItemQuery, type SpecialItemType, type SpecialOrderCategory, type SpecialOrderData, SpecialOrderQuery, type Stage, type StarDrop, StarDropQuery, type StarDropSource, type Tackle, TackleQuery, type TitleThreshold, type Tool, type ToolLevel, ToolQuery, type ToolType, type TraderShopItem, type Tree, TreeQuery, type Trinket, TrinketQuery, type TrinketSource, type UniversalGifts, type UpgradeLevel, type UpgradeableTool, type VersionRange, type Villager, VillagerQuery, type VolcanoShopCategory, type VolcanoShopCurrency, type VolcanoShopItem, VolcanoShopQuery, type Weapon, WeaponQuery, type WeaponStat, WeaponStatQuery, type WeaponType, type Weather, WeatherQuery, type WildTree, type WildTreeTapper, type WillyCategory, type WillyItem, WillyQuery, type WizardBuilding, type WizardBuildingMaterial, WizardQuery, achievements, animals, applyPriceFormula, artifacts, artisanCalculator, artisanGoods, bait, blacksmith, booksellerShop, booksellerTrades, buildings, bundles, calculateArtisanPrice, carpenter, casino, collections, concessions, cooking, crafting, crops, desertTrader, dwarfShop, events, fieldOffice, fieldOfficeDonations, findFestival, fish, footwear, forageables, getMasteryLevel, getProfessionOptions, getTitle, getTitleScore, goldenWalnuts, grandpaEvaluator, guild, hats, houseRenovations, houseUpgrades, isFarmAnimal, isPet, islandTrader, joja, jojaParrotCalculator, knowledgeCalculator, krobus, locations, lostBooks, maps, marnie, medicalSupplies, minerals, mixedSeeds, monsterLoot, monsterSlayerGoals, monsters, oasis, parseSaveFile, perfection, pierre, professionCalculator, professions, qiStock, qualityCalculator, quests, rarecrows, resolveApiVersion, rings, saloon, search, seasons, secretNotes, skills, specialItems, specialOrders, starDrops, tackle, tools, trees, trinkets, universalGifts, villagers, volcanoShop, weaponStats, weapons, weather, willy, wizard };
