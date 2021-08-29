const baseEffects = {
  BaseAllStats: "All Stats",
  BaseDamage: "Base Damage",
  BaseDefense: "Base Defense",
  BaseAccuracy: "Base Accuracy",
  BaseSTR: "Base STR",
  BaseAGI: "Base AGI",
  BaseWIS: "Base WIS",
  BaseLUK: "Base LUK",
  BaseHP: "Base HP",
  BaseMP: "Base MP",
  MoveSpeed: "Move Speed",
  WeaponPower: "Weapon Power",
  MinimumDamage: "% Minimum Damage",
};

const MultiplierEffects = {
  FightingAfk: "% Fighting AFK Gain Rate",
  DoubleAfkChance: "% Double AFK Claim Chance",
  CritChance: "% Crit Chance",
  CritDamage: "% Crit Damage",
  TotalDamage: "% Total Damage",
  TotalHP: "% Total HP",
  TotalMP: "% Total MP",
  TotalDefense: "% Defense",
  TotalAccuracy: "% Total Accuracy",
  MPRegen: "% MP Regen Rate",
  EquipmentDefense: "% Defense from Equipment",
  CardChance: "% Card Drop Chance",
  CrystalChance: "% Crystal Mob Spawn Chance",
  FoodEffect: "% Food Effect",
  BoostFoodEffect: "% Boost Food Effect",
  NoFoodConsume: "% To not consume Food",
  DropRate: "% Total Drop Rate",
};

const ClassAndMonsterEffects = {
  ClassExp: "% Class Exp",
  ExpConversion: "% EXP Conversion (Talent)",
  MonsterExpActive: "% Monster EXP (Active)",
  MonsterExp: "% Monster EXP",
  MonsterMoney: "% Money from Monsters",
  BossDamage: "% Boss Damage",
  MobRespawn: "% Mob Respawn Rate",
};

const SkillEffect = {
  SkillAfk: "% Skill AFK Gain Rate",
  SkillExp: "% Skill EXP",
  SkillProwess: "% Skill Prowess",
  SmithingEfficiency: "% Total Smithing Efficiency",
  SmithingExp: "% Smithing EXP",
  MiningAfk: "% Mining Away Gains",
  MiningBase: "Base Mining Power",
  MiningEfficiency: "% Total Mining Efficiency",
  MiningExp: "% Mining EXP",
  MiningMultiOre: "% Multi-Ore Chance",
  MiningPower: "% Mining Power",
  MiningSpeed: "% Mining Speed",
  ChoppinAfk: "% Choppin Away Gains",
  ChoppinBase: "Base Choppin Power",
  ChoppinEfficiency: "% Total Choppin Efficiency",
  ChoppinExp: "% Choppin EXP",
  ChoppinMultiLog: "% Multi-Log Chance",
  ChoppinPower: "% Choppin Power",
  ChoppinSpeed: "% Choppin Speed",
  FishingAfk: "% Fishing Away Gains",
  FishingBase: "Base Fishing Power",
  FishingEfficiency: "% Total Fishing Efficiency",
  FishingExp: "% Fishing EXP",
  FishingMultiFish: "% Multi-Fish Chance",
  FishingPower: "% Fishing Power",
  WorshipCharge: "% Worship Max Charge",
  WorshipChargeRate: "% Worship Charge Rate",
  WorshipBase: "Base Worship Power",
  WorshipPoints: "Starting Points in Worship",
  TrappingShiny: "% Trapping Shiny Critter Chance",
  TrappingEfficiency: "% Trapping Efficiency",
  TrappingExp: "% Trapping EXP",
  TrappingBase: "Base Trapping Power",
  // FishingSpeed: "% Fishing Speed",
  CatchingAfk: "% Catching Away Gains",
  CatchingBase: "Base Catching Power",
  CatchingEfficiency: "% Total Catching Efficiency",
  CatchingExp: "% Catching EXP",
  CatchingMultiCatch: "% Multi-Catch Chance",
  CatchingPower: "% Catching Power",
};

const PassiveEffects = {
  ProductionSpeed: "% Total Production Speed",
  TownSkillSpeed: "% Speed in Town Skills",
  AlchemyExp: "% Alchemy EXP",
  CogSpeed: "% Cog Build Spd (Passive)",
  ConstructionExp: "% Construction Exp",
  ShrineEffect: "% Shrine Effects",
};

const effects = {
  ...baseEffects,
  ...MultiplierEffects,
  ...ClassAndMonsterEffects,
  ...SkillEffect,
  ...PassiveEffects,
};

const cardCategory = {
  BlunderHills: "Blunder Hills",
  YumYumDesert: "Yum Yum Desert",
  EasyResources: "Easy Resources",
  MediumResources: "Medium Resources",
  HardResources: "Hard Resources",
  FrostbiteTundra: "Frostbite Tundra",
  Bosses: "Bosses",
  Events: "Events",
};

export const cardsObject = {
  BlunderHills: [
    {
      img: "Green_Mushroom_Card.png",
      effect: effects.BaseHP,
      category: cardCategory.BlunderHills,
      base: 12,
    },
    {
      img: "Red_Mushroom_Card.png",
      effect: effects.BaseLUK,
      category: cardCategory.BlunderHills,
      base: 3,
      alsoEffect: [effects.DropRate],
    },
    {
      img: "Frog_Card.png",
      effect: effects.BaseMP,
      category: cardCategory.BlunderHills,
      base: 10,
    },
    {
      img: "Bored_Bean_Card.png",
      effect: effects.BaseDamage,
      category: cardCategory.BlunderHills,
      base: 7,
    },
    {
      img: "Slime_Card.png",
      effect: effects.BaseWIS,
      category: cardCategory.BlunderHills,
      base: 2,
      alsoEffect: [effects.ChoppinEfficiency],
    },
    {
      img: "Baby_Boa_Card.png",
      effect: effects.MoveSpeed,
      category: cardCategory.BlunderHills,
      base: 1,
    },
    {
      img: "Carrotman_Card.png",
      effect: effects.BaseAGI,
      category: cardCategory.BlunderHills,
      base: 2,
      alsoEffect: [effects.SmithingEfficiency],
    },
    {
      img: "Glublin_Card.png",
      effect: effects.TotalHP,
      category: cardCategory.BlunderHills,
      base: 2,
    },
    {
      img: "Wode_Board_Card.png",
      effect: effects.BaseSTR,
      category: cardCategory.BlunderHills,
      base: 2,
      alsoEffect: [effects.FishingEfficiency, effects.MiningEfficiency],
    },
    {
      img: "Gigafrog_Card.png",
      effect: effects.CardChance,
      category: cardCategory.BlunderHills,
      base: 5,
    },
    {
      img: "Poop_Card.png",
      effect: effects.CrystalChance,
      category: cardCategory.BlunderHills,
      base: 10,
    },

    {
      img: "Rat_Card.png",
      effect: effects.CritChance,
      category: cardCategory.BlunderHills,
      base: 1,
      alsoEffect: [effects.TotalDamage],
    },

    {
      img: "Walking_Stick_Card.png",
      effect: effects.BaseWIS,
      category: cardCategory.BlunderHills,
      base: 5,
      alsoEffect: [effects.ChoppinEfficiency],
    },
    {
      img: "Nutto_Card.png",
      effect: effects.MonsterMoney,
      category: cardCategory.BlunderHills,
      base: 5,
    },

    {
      img: "Crystal_Carrot_Card.png",
      effect: effects.DropRate,
      category: cardCategory.BlunderHills,
      base: 5,
    },
    {
      img: "Wood_Mushroom_Card.png",
      effect: effects.TotalAccuracy,
      category: cardCategory.BlunderHills,
      base: 5,
    },
  ],
  YumYumDesert: [
    {
      img: "Sandy_Pot_Card.png",
      effect: effects.ExpConversion,
      category: cardCategory.YumYumDesert,
      base: 12,
    },
    {
      img: "Mimic_Card.png",
      effect: effects.DropRate,
      category: cardCategory.YumYumDesert,
      base: 3,
    },
    {
      img: "Crabcake_Card.png",
      effect: effects.NoFoodConsume,
      category: cardCategory.YumYumDesert,
      base: 5,
    },
    {
      img: "Mafioso_Card.png",
      effect: effects.BaseAGI,
      category: cardCategory.YumYumDesert,
      base: 5,
      alsoEffect: [effects.SmithingEfficiency],
    },
    {
      img: "Sand_Castle_Card.png",
      effect: effects.TotalAccuracy,
      category: cardCategory.YumYumDesert,
      base: 4,
    },
    {
      img: "Pincermin_Card.png",
      effect: effects.WeaponPower,
      category: cardCategory.YumYumDesert,
      base: 1,
      alsoEffect: [effects.TotalDamage],
    },
    {
      img: "Mashed_Potato_Card.png",
      effect: effects.CritDamage,
      category: cardCategory.YumYumDesert,
      base: 3,
    },
    {
      img: "Tyson_Card.png",
      effect: effects.BaseSTR,
      category: cardCategory.YumYumDesert,
      base: 5,
      alsoEffect: [effects.FishingEfficiency, effects.MiningEfficiency],
    },
    {
      img: "Moonmoon_Card.png",
      effect: effects.MonsterExpActive,
      category: cardCategory.YumYumDesert,
      base: 8,
    },
    {
      img: "Sand_Giant_Card.png",
      effect: effects.MinimumDamage,
      category: cardCategory.YumYumDesert,
      base: 2,
    },
    {
      img: "Snelbie_Card.png",
      effect: effects.CardChance,
      category: cardCategory.YumYumDesert,
      base: 8,
    },
    {
      img: "Dig_Doug_Card.png",
      effect: effects.BaseLUK,
      category: cardCategory.YumYumDesert,
      base: 6,
      alsoEffect: [effects.DropRate],
    },
    {
      img: "Crystal_Crabal_Card.png",
      effect: effects.MonsterExp,
      category: cardCategory.YumYumDesert,
      base: 2,
    },
    {
      img: "Bandit_Bob_Card.png",
      effect: effects.MonsterMoney,
      category: cardCategory.YumYumDesert,
      base: 1,
    },
  ],
  EasyResources: [
    {
      img: "Copper_Ore_Card.png",
      effect: effects.BaseAccuracy,
      category: cardCategory.EasyResources,
      base: 4,
    },
    {
      img: "Iron_Ore_Card.png",
      effect: effects.MiningEfficiency,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Gold_Ore_Card.png",
      effect: effects.MiningExp,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Fire_Forge_Card.png",
      effect: effects.SmithingExp,
      category: cardCategory.EasyResources,
      base: 4,
    },
    {
      img: "Oak_Logs_Card.png",
      effect: effects.BaseDefense,
      category: cardCategory.EasyResources,
      base: 3,
    },
    {
      img: "Bleach_Logs_Card.png",
      effect: effects.ChoppinEfficiency,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Jungle_Logs_Card.png",
      effect: effects.ChoppinExp,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Forest_Fibres_Card.png",
      effect: effects.ExpConversion,
      category: cardCategory.EasyResources,
      base: 8,
    },
    {
      img: "Goldfish_Card.png",
      effect: effects.TotalMP,
      category: cardCategory.EasyResources,
      base: 3,
    },
    {
      img: "Hermit_Can_Card.png",
      effect: effects.FishingEfficiency,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Jellyfish_Card.png",
      effect: effects.FishingExp,
      category: cardCategory.EasyResources,
      base: 5,
    },
    {
      img: "Fly_Card.png",
      effect: effects.MonsterExpActive,
      category: cardCategory.EasyResources,
      base: 4,
    },
    {
      img: "Butterfly_Card.png",
      effect: effects.CatchingEfficiency,
      category: cardCategory.EasyResources,
      base: 5,
    },
  ],
  MediumResources: [
    {
      img: "Platinum_Ore_Card.png",
      effect: effects.MiningAfk,
      category: cardCategory.MediumResources,
      base: 2,
    },
    {
      img: "Dementia_Ore_Card.png",
      effect: effects.MiningSpeed,
      category: cardCategory.MediumResources,
      base: 4,
    },
    {
      img: "Void_Ore_Card.png",
      effect: effects.CardChance,
      category: cardCategory.MediumResources,
      base: 6,
    },
    {
      img: "Cinder_Forge_Card.png",
      effect: effects.SmithingExp,
      category: cardCategory.MediumResources,
      base: 7,
    },
    {
      img: "Tropilogs_Card.png",
      effect: effects.ChoppinAfk,
      category: cardCategory.MediumResources,
      base: 2,
    },
    {
      img: "Potty_Rolls_Card.png",
      effect: effects.ChoppinSpeed,
      category: cardCategory.MediumResources,
      base: 4,
    },
    {
      img: "Veiny_Logs_Card.png",
      effect: effects.TotalAccuracy,
      category: cardCategory.MediumResources,
      base: 3,
    },
    {
      img: "Bloach_Card.png",
      effect: effects.FishingAfk,
      category: cardCategory.MediumResources,
      base: 2,
    },
    {
      img: "Sentient_Cereal_Card.png",
      effect: effects.CatchingExp,
      category: cardCategory.MediumResources,
      base: 5,
    },
    {
      img: "Fruitfly_Card.png",
      effect: effects.CatchingAfk,
      category: cardCategory.MediumResources,
      base: 2,
    },
    {
      img: "Forest_Soul_Card.png",
      effect: effects.EquipmentDefense,
      category: cardCategory.MediumResources,
      base: 3,
    },
    {
      img: "Dune_Soul_Card.png",
      effect: effects.WorshipPoints,
      category: cardCategory.MediumResources,
      base: 4,
    },
    {
      img: "Froge_Card.png",
      effect: effects.TrappingShiny,
      category: cardCategory.MediumResources,
      base: 3,
    },
    {
      img: "Crabbo_Card.png",
      effect: effects.TrappingEfficiency,
      category: cardCategory.MediumResources,
      base: 5,
    },
    {
      img: "Scorpie_Card.png",
      effect: effects.TrappingExp,
      category: cardCategory.MediumResources,
      base: 5,
    },
  ],
  FrostbiteTundra: [
    {
      img: "Sheepie_Card.png",
      effect: effects.EquipmentDefense,
      category: cardCategory.FrostbiteTundra,
      base: 3,
    },
    {
      img: "Frost_Flake_Card.png",
      effect: effects.BaseSTR,
      category: cardCategory.FrostbiteTundra,
      base: 7,
      alsoEffect: [effects.FishingEfficiency, effects.MiningEfficiency],
    },
    {
      img: "Sir_Stache_Card.png",
      effect: effects.CardChance,
      category: cardCategory.FrostbiteTundra,
      base: 8,
    },
    {
      img: "Bloque_Card.png",
      effect: effects.BaseAGI,
      category: cardCategory.FrostbiteTundra,
      base: 7,
      alsoEffect: [effects.SmithingEfficiency],
    },
    {
      img: "Mamooth_Card.png",
      effect: effects.TotalHP,
      category: cardCategory.FrostbiteTundra,
      base: 3.5,
    },
    {
      img: "Snowman_Card.png",
      effect: effects.TotalDamage,
      category: cardCategory.FrostbiteTundra,
      base: 3,
    },
    {
      img: "Penguin_Card.png",
      effect: effects.BaseWIS,
      category: cardCategory.FrostbiteTundra,
      base: 7,
      alsoEffect: [effects.ChoppinEfficiency],
    },
    {
      img: "Thermister_Card.png",
      effect: effects.CritDamage,
      category: cardCategory.FrostbiteTundra,
      base: 4,
    },
    {
      img: "Quenchie_Card.png",
      effect: effects.BaseLUK,
      category: cardCategory.FrostbiteTundra,
      base: 7,
      alsoEffect: [effects.DropRate],
    },
    {
      img: "Cryosnake_Card.png",
      effect: effects.MPRegen,
      category: cardCategory.FrostbiteTundra,
      base: 5,
    },
    {
      img: "Bop_Box_Card.png",
      effect: effects.DropRate,
      category: cardCategory.FrostbiteTundra,
      base: 3,
    },
    {
      img: "Neyeptune_Card.png",
      effect: effects.TotalAccuracy,
      category: cardCategory.FrostbiteTundra,
      base: 5,
    },
    {
      img: "Dedotated_Ram_Card.png",
      effect: effects.WeaponPower,
      category: cardCategory.FrostbiteTundra,
      base: 2,
      alsoEffect: [effects.TotalDamage],
    },
    {
      img: "Xylobone_Card.png",
      effect: effects.CritChance,
      category: cardCategory.FrostbiteTundra,
      base: 1,
      alsoEffect: [effects.TotalDamage],
    },
    {
      img: "Bloodbone_Card.png",
      effect: effects.TotalDamage,
      category: cardCategory.FrostbiteTundra,
      base: 3,
    },
    {
      img: "Crystal_Cattle_Card.png",
      effect: effects.MonsterExp,
      category: cardCategory.FrostbiteTundra,
      base: 3,
    },
  ],
  HardResources: [
    {
      img: "Lustre_Ore_Card.png",
      effect: effects.BaseLUK,
      category: cardCategory.HardResources,
      base: 4,
      alsoEffect: [effects.DropRate],
    },
    {
      img: "Rooted_Soul_Card.png",
      effect: effects.WorshipPoints,
      category: cardCategory.HardResources,
      base: 6,
    },
    {
      img: "Frigid_Soul_Card.png",
      effect: effects.WorshipCharge,
      category: cardCategory.HardResources,
      base: 7,
    },
    {
      img: "Squiddy_Soul_Card.png",
      effect: effects.WorshipChargeRate,
      category: cardCategory.HardResources,
      base: 5,
    },
    {
      img: "Mousey_Card.png",
      effect: effects.TrappingShiny,
      category: cardCategory.HardResources,
      base: 2.5,
    },
    {
      img: "Owlio_Card.png",
      effect: effects.MonsterExp,
      category: cardCategory.HardResources,
      base: 1.25,
    },
    {
      img: "Pingy_Card.png",
      effect: effects.TrappingShiny,
      category: cardCategory.HardResources,
      base: 6,
    },
    {
      img: "Bunny_Card.png",
      effect: effects.SkillAfk,
      alsoEffect: [
        effects.ChoppinAfk,
        effects.MiningAfk,
        effects.CatchingAfk,
        effects.FishingAfk,
        effects.TrappingEfficiency,
        effects.SmithingEfficiency,
      ],
      category: cardCategory.HardResources,
      base: 1,
    },
    {
      img: "Tundra_Logs_Card.png",
      effect: effects.ChoppinAfk,
      category: cardCategory.HardResources,
      base: 2.5,
    },
    {
      img: "Wispy_Lumber_Card.png",
      effect: effects.ChoppinSpeed,
      category: cardCategory.HardResources,
      base: 6,
    },
    {
      img: "Mosquisnow_Card.png",
      effect: effects.CatchingEfficiency,
      category: cardCategory.HardResources,
      base: 7,
    },
    {
      img: "Flycicle_Card.png",
      effect: effects.CatchingAfk,
      category: cardCategory.HardResources,
      base: 2.5,
    },
  ],
  Bosses: [
    {
      img: "Baba_Yaga_Card.png",
      effect: effects.MonsterMoney,
      category: cardCategory.Bosses,
      base: 10,
    },
    {
      img: "Dr_Defecaus_Card.png",
      effect: effects.TotalDamage,
      category: cardCategory.Bosses,
      base: 5,
    },
    {
      img: "Boop_Card.png",
      effect: effects.FightingAfk,
      category: cardCategory.Bosses,
      base: 1,
    },
    {
      img: "Amarok_Card.png",
      effect: effects.SkillAfk,
      alsoEffect: [
        effects.ChoppinAfk,
        effects.MiningAfk,
        effects.CatchingAfk,
        effects.FishingAfk,
        effects.TrappingEfficiency,
        effects.SmithingEfficiency,
      ],
      category: cardCategory.Bosses,
      base: 2.5,
    },
    {
      img: "Chaotic_Amarok_Card.png",
      effect: effects.FightingAfk,
      category: cardCategory.Bosses,
      base: 2.5,
    },
    {
      img: "Biggie_Hours_Card.png",
      effect: effects.DoubleAfkChance,
      category: cardCategory.Bosses,
      base: 3,
    },
    {
      img: "King_Doot_Card.png",
      effect: effects.DropRate,
      category: cardCategory.Bosses,
      base: 6,
    },
    {
      img: "Efaunt_Card.png",
      effect: effects.MonsterExp,
      category: cardCategory.Bosses,
      base: 5,
    },
    {
      img: "Chaotic_Efaunt_Card.png",
      effect: effects.SkillExp,
      category: cardCategory.Bosses,
      base: 3.75,
    },
    {
      img: "Chaotic_Chizoar_Card.png",
      effect: effects.ShrineEffect,
      category: cardCategory.Bosses,
      base: 8,
    },
    {
      img: "Chizoar_Card.png",
      effect: effects.CogSpeed,
      category: cardCategory.Bosses,
      base: 5,
    },
  ],
  Events: [
    {
      img: "Ghost_Card.png",
      effect: effects.MonsterExpActive,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Giftmas_Blobulyte_Card.png",
      effect: effects.DropRate,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Meaning_of_Giftmas_Card.png",
      effect: effects.MonsterMoney,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Valentslime_Card.png",
      effect: effects.EquipmentDefense,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Loveulyte_Card.png",
      effect: effects.TotalHp,
      category: cardCategory.Events,
      base: 5,
    },
    {
      img: "Choco_Box_Card.png",
      effect: effects.BoostFoodEffect,
      category: cardCategory.Events,
      base: 4,
    },
    {
      img: "Floofie_Card.png",
      effect: effects.MPRegen,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Shell_Snake_Card.png",
      effect: effects.BaseLUK,
      category: cardCategory.Events,
      base: 3,
      alsoEffect: [effects.DropRate],
    },
    {
      img: "Egggulyte_Card.png",
      effect: effects.CardChance,
      category: cardCategory.Events,
      base: 1,
    },
    {
      img: "Egg_Capsule_Card.png",
      effect: effects.CritDamage,
      category: cardCategory.Events,
      base: 1,
    },
    {
      img: "Plasti_Doug_Card.png",
      effect: effects.BaseDefense,
      category: cardCategory.Events,
      base: 2,
    },
    {
      img: "Mr_Blueberry_Card.png",
      effect: effects.DropRate,
      category: cardCategory.Events,
      base: 3,
    },
    {
      img: "Coastiolyte_Card.png",
      effect: effects.FishingAfk,
      category: cardCategory.Events,
      base: 1,
    },
    {
      img: "Summer_Spirit_Card.png",
      effect: effects.CatchingExp,
      category: cardCategory.Events,
      base: 4,
    },
  ],
};

const isProd = process.env.NODE_ENV === "production";
export const prefix = isProd ? "/IdleonToolbox/" : "";
// Totally_Normal_and_not_fake_Bag
// Totally_Normal_and_not_fake_Bag.png
export const constantBags = [
  "InvBag1",
  "InvBag2",
  "InvBag3",
  "InvBag4",
  "InvBag5",
  "InvBag6",
  "InvBag7",
  "InvBag8",
  "InvBag9",
  "InvBag21",
  "InvBag22",
  "InvBag23",
  "InvBag24",
  "InvBag25",
  "InvBag26",
  "InvBag100",
  "InvBag101",
  "InvBag102",
  "InvBag103",
  "InvBag104",
  "InvBag105",
  "InvBag106",
  "InvBag107",
  "InvBag108",
  "InvBag109",
  "InvBag110",
]

export const classColors = {
  Archer: '#51e406',
  Hunter: '#51e406',
  Bowman: '#51e406',
  Mage: '#dc3cdc',
  Shaman: '#dc3cdc',
  Wizard: '#dc3cdc',
  Warrior: '#ff9900',
  Barbarian: '#ff9900',
  Squire: '#ff9900',
  Beginner: 'yellow',
  Journeyman: 'yellow',
  Maestro: 'yellow'
};

export const kFormatter = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export const cleanUnderscore = (str) => {
  if (!str) return '';
  return str?.replace(/_/g, " ");
}

export const fields = [
  {
    "name": "Equipment",
    "selected": true
  },
  {
    "name": "Talents",
    "selected": true
  },
  {
    "name": "Skills",
    "selected": true
  },
  {
    "name": "Bags",
    "selected": true
  },
  {
    "name": "Obols",
    "selected": true
  },
  {
    "name": "Cards",
    "selected": true
  },
  {
    "name": "Star Sign",
    "selected": true
  },
  {
    "name": "Anvil Products",
    "selected": true
  },
  {
    "name": "Printer Products",
    "selected": true
  },
  {
    "name": "Equipped Bubbles",
    "selected": true
  },
  {
    "name": "Prayers",
    "selected": true
  },
];
