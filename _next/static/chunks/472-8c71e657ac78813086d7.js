"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{7665:function(e,a,n){n.d(a,{ob:function(){return m},O4:function(){return y},xw:function(){return u},JU:function(){return h},sy:function(){return b},Dq:function(){return _},XU:function(){return E}});var t=n(2809);function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var o=r(r(r(r(r({},{BaseAllStats:"All Stats",BaseDamage:"Base Damage",BaseDefense:"Base Defense",BaseAccuracy:"Base Accuracy",BaseSTR:"Base STR",BaseAGI:"Base AGI",BaseWIS:"Base WIS",BaseLUK:"Base LUK",BaseHP:"Base HP",BaseMP:"Base MP",MoveSpeed:"Move Speed",WeaponPower:"Weapon Power",MinimumDamage:"% Minimum Damage"}),{FightingAfk:"% Fighting AFK Gain Rate",DoubleAfkChance:"% Double AFK Claim Chance",CritChance:"% Crit Chance",CritDamage:"% Crit Damage",TotalDamage:"% Total Damage",TotalHP:"% Total HP",TotalMP:"% Total MP",TotalDefense:"% Defense",TotalAccuracy:"% Total Accuracy",MPRegen:"% MP Regen Rate",EquipmentDefense:"% Defense from Equipment",CardChance:"% Card Drop Chance",CrystalChance:"% Crystal Mob Spawn Chance",FoodEffect:"% Food Effect",BoostFoodEffect:"% Boost Food Effect",NoFoodConsume:"% To not consume Food",DropRate:"% Total Drop Rate"}),{ClassExp:"% Class Exp",ExpConversion:"% EXP Conversion (Talent)",MonsterExpActive:"% Monster EXP (Active)",MonsterExp:"% Monster EXP",MonsterMoney:"% Money from Monsters",BossDamage:"% Boss Damage",MobRespawn:"% Mob Respawn Rate"}),{SkillAfk:"% Skill AFK Gain Rate",SkillExp:"% Skill EXP",SkillProwess:"% Skill Prowess",SmithingEfficiency:"% Total Smithing Efficiency",SmithingExp:"% Smithing EXP",MiningAfk:"% Mining Away Gains",MiningBase:"Base Mining Power",MiningEfficiency:"% Total Mining Efficiency",MiningExp:"% Mining EXP",MiningMultiOre:"% Multi-Ore Chance",MiningPower:"% Mining Power",MiningSpeed:"% Mining Speed",ChoppinAfk:"% Choppin Away Gains",ChoppinBase:"Base Choppin Power",ChoppinEfficiency:"% Total Choppin Efficiency",ChoppinExp:"% Choppin EXP",ChoppinMultiLog:"% Multi-Log Chance",ChoppinPower:"% Choppin Power",ChoppinSpeed:"% Choppin Speed",FishingAfk:"% Fishing Away Gains",FishingBase:"Base Fishing Power",FishingEfficiency:"% Total Fishing Efficiency",FishingExp:"% Fishing EXP",FishingMultiFish:"% Multi-Fish Chance",FishingPower:"% Fishing Power",WorshipCharge:"% Worship Max Charge",WorshipChargeRate:"% Worship Charge Rate",WorshipBase:"Base Worship Power",WorshipPoints:"Starting Points in Worship",TrappingShiny:"% Trapping Shiny Critter Chance",TrappingEfficiency:"% Trapping Efficiency",TrappingExp:"% Trapping EXP",TrappingBase:"Base Trapping Power",CatchingAfk:"% Catching Away Gains",CatchingBase:"Base Catching Power",CatchingEfficiency:"% Total Catching Efficiency",CatchingExp:"% Catching EXP",CatchingMultiCatch:"% Multi-Catch Chance",CatchingPower:"% Catching Power"}),{ProductionSpeed:"% Total Production Speed",TownSkillSpeed:"% Speed in Town Skills",AlchemyExp:"% Alchemy EXP",CogSpeed:"% Cog Build Spd (Passive)",ConstructionExp:"% Construction Exp",ShrineEffect:"% Shrine Effects"}),g="Blunder Hills",c="Yum Yum Desert",f="Easy Resources",s="Medium Resources",p="Hard Resources",l="Frostbite Tundra",C="Bosses",d="Events",m={BlunderHills:[{img:"Green_Mushroom_Card.png",effect:o.BaseHP,category:g,base:12},{img:"Red_Mushroom_Card.png",effect:o.BaseLUK,category:g,base:3,alsoEffect:[o.DropRate]},{img:"Frog_Card.png",effect:o.BaseMP,category:g,base:10},{img:"Bored_Bean_Card.png",effect:o.BaseDamage,category:g,base:7},{img:"Slime_Card.png",effect:o.BaseWIS,category:g,base:2,alsoEffect:[o.ChoppinEfficiency]},{img:"Baby_Boa_Card.png",effect:o.MoveSpeed,category:g,base:1},{img:"Carrotman_Card.png",effect:o.BaseAGI,category:g,base:2,alsoEffect:[o.SmithingEfficiency]},{img:"Glublin_Card.png",effect:o.TotalHP,category:g,base:2},{img:"Wode_Board_Card.png",effect:o.BaseSTR,category:g,base:2,alsoEffect:[o.FishingEfficiency,o.MiningEfficiency]},{img:"Gigafrog_Card.png",effect:o.CardChance,category:g,base:5},{img:"Poop_Card.png",effect:o.CrystalChance,category:g,base:10},{img:"Rat_Card.png",effect:o.CritChance,category:g,base:1,alsoEffect:[o.TotalDamage]},{img:"Walking_Stick_Card.png",effect:o.BaseWIS,category:g,base:5,alsoEffect:[o.ChoppinEfficiency]},{img:"Nutto_Card.png",effect:o.MonsterMoney,category:g,base:5},{img:"Crystal_Carrot_Card.png",effect:o.DropRate,category:g,base:5},{img:"Wood_Mushroom_Card.png",effect:o.TotalAccuracy,category:g,base:5}],YumYumDesert:[{img:"Sandy_Pot_Card.png",effect:o.ExpConversion,category:c,base:12},{img:"Mimic_Card.png",effect:o.DropRate,category:c,base:3},{img:"Crabcake_Card.png",effect:o.NoFoodConsume,category:c,base:5},{img:"Mafioso_Card.png",effect:o.BaseAGI,category:c,base:5,alsoEffect:[o.SmithingEfficiency]},{img:"Sand_Castle_Card.png",effect:o.TotalAccuracy,category:c,base:4},{img:"Pincermin_Card.png",effect:o.WeaponPower,category:c,base:1,alsoEffect:[o.TotalDamage]},{img:"Mashed_Potato_Card.png",effect:o.CritDamage,category:c,base:3},{img:"Tyson_Card.png",effect:o.BaseSTR,category:c,base:5,alsoEffect:[o.FishingEfficiency,o.MiningEfficiency]},{img:"Moonmoon_Card.png",effect:o.MonsterExpActive,category:c,base:8},{img:"Sand_Giant_Card.png",effect:o.MinimumDamage,category:c,base:2},{img:"Snelbie_Card.png",effect:o.CardChance,category:c,base:8},{img:"Dig_Doug_Card.png",effect:o.BaseLUK,category:c,base:6,alsoEffect:[o.DropRate]},{img:"Crystal_Crabal_Card.png",effect:o.MonsterExp,category:c,base:2},{img:"Bandit_Bob_Card.png",effect:o.MonsterMoney,category:c,base:1}],EasyResources:[{img:"Copper_Ore_Card.png",effect:o.BaseAccuracy,category:f,base:4},{img:"Iron_Ore_Card.png",effect:o.MiningEfficiency,category:f,base:5},{img:"Gold_Ore_Card.png",effect:o.MiningExp,category:f,base:5},{img:"Fire_Forge_Card.png",effect:o.SmithingExp,category:f,base:4},{img:"Oak_Logs_Card.png",effect:o.BaseDefense,category:f,base:3},{img:"Bleach_Logs_Card.png",effect:o.ChoppinEfficiency,category:f,base:5},{img:"Jungle_Logs_Card.png",effect:o.ChoppinExp,category:f,base:5},{img:"Forest_Fibres_Card.png",effect:o.ExpConversion,category:f,base:8},{img:"Goldfish_Card.png",effect:o.TotalMP,category:f,base:3},{img:"Hermit_Can_Card.png",effect:o.FishingEfficiency,category:f,base:5},{img:"Jellyfish_Card.png",effect:o.FishingExp,category:f,base:5},{img:"Fly_Card.png",effect:o.MonsterExpActive,category:f,base:4},{img:"Butterfly_Card.png",effect:o.CatchingEfficiency,category:f,base:5}],MediumResources:[{img:"Platinum_Ore_Card.png",effect:o.MiningAfk,category:s,base:2},{img:"Dementia_Ore_Card.png",effect:o.MiningSpeed,category:s,base:4},{img:"Void_Ore_Card.png",effect:o.CardChance,category:s,base:6},{img:"Cinder_Forge_Card.png",effect:o.SmithingExp,category:s,base:7},{img:"Tropilogs_Card.png",effect:o.ChoppinAfk,category:s,base:2},{img:"Potty_Rolls_Card.png",effect:o.ChoppinSpeed,category:s,base:4},{img:"Veiny_Logs_Card.png",effect:o.TotalAccuracy,category:s,base:3},{img:"Bloach_Card.png",effect:o.FishingAfk,category:s,base:2},{img:"Sentient_Cereal_Card.png",effect:o.CatchingExp,category:s,base:5},{img:"Fruitfly_Card.png",effect:o.CatchingAfk,category:s,base:2},{img:"Forest_Soul_Card.png",effect:o.EquipmentDefense,category:s,base:3},{img:"Dune_Soul_Card.png",effect:o.WorshipPoints,category:s,base:4},{img:"Froge_Card.png",effect:o.TrappingShiny,category:s,base:3},{img:"Crabbo_Card.png",effect:o.TrappingEfficiency,category:s,base:5},{img:"Scorpie_Card.png",effect:o.TrappingExp,category:s,base:5}],FrostbiteTundra:[{img:"Sheepie_Card.png",effect:o.EquipmentDefense,category:l,base:3},{img:"Frost_Flake_Card.png",effect:o.BaseSTR,category:l,base:7,alsoEffect:[o.FishingEfficiency,o.MiningEfficiency]},{img:"Sir_Stache_Card.png",effect:o.CardChance,category:l,base:8},{img:"Bloque_Card.png",effect:o.BaseAGI,category:l,base:7,alsoEffect:[o.SmithingEfficiency]},{img:"Mamooth_Card.png",effect:o.TotalHP,category:l,base:3.5},{img:"Snowman_Card.png",effect:o.TotalDamage,category:l,base:3},{img:"Penguin_Card.png",effect:o.BaseWIS,category:l,base:7,alsoEffect:[o.ChoppinEfficiency]},{img:"Thermister_Card.png",effect:o.CritDamage,category:l,base:4},{img:"Quenchie_Card.png",effect:o.BaseLUK,category:l,base:7,alsoEffect:[o.DropRate]},{img:"Cryosnake_Card.png",effect:o.MPRegen,category:l,base:5},{img:"Bop_Box_Card.png",effect:o.DropRate,category:l,base:3},{img:"Neyeptune_Card.png",effect:o.TotalAccuracy,category:l,base:5},{img:"Dedotated_Ram_Card.png",effect:o.WeaponPower,category:l,base:2,alsoEffect:[o.TotalDamage]},{img:"Xylobone_Card.png",effect:o.CritChance,category:l,base:1,alsoEffect:[o.TotalDamage]},{img:"Bloodbone_Card.png",effect:o.TotalDamage,category:l,base:3},{img:"Crystal_Cattle_Card.png",effect:o.MonsterExp,category:l,base:3}],HardResources:[{img:"Lustre_Ore_Card.png",effect:o.BaseLUK,category:p,base:4,alsoEffect:[o.DropRate]},{img:"Rooted_Soul_Card.png",effect:o.WorshipPoints,category:p,base:6},{img:"Frigid_Soul_Card.png",effect:o.WorshipCharge,category:p,base:7},{img:"Squiddy_Soul_Card.png",effect:o.WorshipChargeRate,category:p,base:5},{img:"Mousey_Card.png",effect:o.TrappingShiny,category:p,base:2.5},{img:"Owlio_Card.png",effect:o.MonsterExp,category:p,base:1.25},{img:"Pingy_Card.png",effect:o.TrappingShiny,category:p,base:6},{img:"Bunny_Card.png",effect:o.SkillAfk,alsoEffect:[o.ChoppinAfk,o.MiningAfk,o.CatchingAfk,o.FishingAfk,o.TrappingEfficiency,o.SmithingEfficiency],category:p,base:1},{img:"Tundra_Logs_Card.png",effect:o.ChoppinAfk,category:p,base:2.5},{img:"Wispy_Lumber_Card.png",effect:o.ChoppinSpeed,category:p,base:6},{img:"Mosquisnow_Card.png",effect:o.CatchingEfficiency,category:p,base:7},{img:"Flycicle_Card.png",effect:o.CatchingAfk,category:p,base:2.5}],Bosses:[{img:"Baba_Yaga_Card.png",effect:o.MonsterMoney,category:C,base:10},{img:"Dr_Defecaus_Card.png",effect:o.TotalDamage,category:C,base:5},{img:"Boop_Card.png",effect:o.FightingAfk,category:C,base:1},{img:"Amarok_Card.png",effect:o.SkillAfk,alsoEffect:[o.ChoppinAfk,o.MiningAfk,o.CatchingAfk,o.FishingAfk,o.TrappingEfficiency,o.SmithingEfficiency],category:C,base:2.5},{img:"Chaotic_Amarok_Card.png",effect:o.FightingAfk,category:C,base:2.5},{img:"Biggie_Hours_Card.png",effect:o.DoubleAfkChance,category:C,base:3},{img:"King_Doot_Card.png",effect:o.DropRate,category:C,base:6},{img:"Efaunt_Card.png",effect:o.MonsterExp,category:C,base:5},{img:"Chaotic_Efaunt_Card.png",effect:o.SkillExp,category:C,base:3.75},{img:"Chaotic_Chizoar_Card.png",effect:o.ShrineEffect,category:C,base:8},{img:"Chizoar_Card.png",effect:o.CogSpeed,category:C,base:5}],Events:[{img:"Ghost_Card.png",effect:o.MonsterExpActive,category:d,base:3},{img:"Giftmas_Blobulyte_Card.png",effect:o.DropRate,category:d,base:3},{img:"Meaning_of_Giftmas_Card.png",effect:o.MonsterMoney,category:d,base:3},{img:"Valentslime_Card.png",effect:o.EquipmentDefense,category:d,base:3},{img:"Loveulyte_Card.png",effect:o.TotalHp,category:d,base:5},{img:"Choco_Box_Card.png",effect:o.BoostFoodEffect,category:d,base:4},{img:"Floofie_Card.png",effect:o.MPRegen,category:d,base:3},{img:"Shell_Snake_Card.png",effect:o.BaseLUK,category:d,base:3,alsoEffect:[o.DropRate]},{img:"Egggulyte_Card.png",effect:o.CardChance,category:d,base:1},{img:"Egg_Capsule_Card.png",effect:o.CritDamage,category:d,base:1},{img:"Plasti_Doug_Card.png",effect:o.BaseDefense,category:d,base:2},{img:"Mr_Blueberry_Card.png",effect:o.DropRate,category:d,base:3},{img:"Coastiolyte_Card.png",effect:o.FishingAfk,category:d,base:1},{img:"Summer_Spirit_Card.png",effect:o.CatchingExp,category:d,base:4}]},y="/IdleonToolbox/",u=["InvBag1","InvBag2","InvBag3","InvBag4","InvBag5","InvBag6","InvBag7","InvBag8","InvBag9","InvBag21","InvBag22","InvBag23","InvBag24","InvBag25","InvBag26","InvBag100","InvBag101","InvBag102","InvBag103","InvBag104","InvBag105","InvBag106","InvBag107","InvBag108","InvBag109","InvBag110"],h={Archer:"#51e406",Hunter:"#51e406",Bowman:"#51e406",Mage:"#dc3cdc",Shaman:"#dc3cdc",Wizard:"#dc3cdc",Warrior:"#ff9900",Barbarian:"#ff9900",Squire:"#ff9900",Beginner:"yellow",Journeyman:"yellow",Maestro:"yellow"},b=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],t=/\.0+$|(\.[0-9]*[1-9])0+$/,i=n.slice().reverse().find((function(a){return e>=a.value}));return i?(e/i.value).toFixed(a).replace(t,"$1")+i.symbol:"0"},_=function(e){return e?null===e||void 0===e?void 0:e.replace(/_/g," "):""},E=[{name:"Equipment",selected:!0},{name:"Talents",selected:!0},{name:"Skills",selected:!0},{name:"Bags",selected:!0},{name:"Obols",selected:!0},{name:"Cards",selected:!0},{name:"Star Sign",selected:!0},{name:"Anvil Products",selected:!0},{name:"Printer Products",selected:!0},{name:"Equipped Bubbles",selected:!0},{name:"Prayers",selected:!0}]},9009:function(e,a,n){var t=n(2209),i=n(5893),r=n(7294),o=n(9163),g=n(1163),c=n(7665);function f(){var e=(0,t.Z)(["\n  //margin-right: 15px;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding: 4px 0;\n  color: white;\n  text-decoration: none;\n  text-transform: capitalize;\n  transition: 0.5s;\n\n  ","\n  ",'\n  &::after {\n    position: absolute;\n    content: "";\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background: white;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 0.5s;\n  }\n\n  &:hover {\n  }\n\n  &:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n\n    &:visited {\n      color: black;\n    }\n  }\n']);return f=function(){return e},e}function s(){var e=(0,t.Z)(["\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 10px;\n  background-color: #5454547a;\n  border-radius: 5px;\n\n  > span {\n    color: white;\n    margin: 0 10px;\n  }\n"]);return s=function(){return e},e}var p=o.ZP.ul(s()),l=o.ZP.li(f(),(function(e){return e.active?"border-bottom: 1px solid white;":""}),(function(e){return e.active?"font-weight: bold;":""}));a.Z=function(){var e=(0,g.useRouter)(),a=[{label:"Card Search",path:c.O4?c.O4:"/"},{label:"Family",path:"".concat(c.O4,"family")}];return(0,i.jsx)(p,{children:a.map((function(n,t){var o=n.label,g=n.path;return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(l,{active:null===e||void 0===e?void 0:e.pathname.endsWith(g),onClick:function(a){return function(a,n){a.preventDefault(),e.push(n)}(a,g)},children:o}),t!==a.length-1?(0,i.jsx)("span",{children:"|"}):null]},o+"-"+t)}))})}},163:function(e,a,n){n.d(a,{i:function(){return c},Y:function(){return f}});var t=n(2209),i=n(9163),r=n(65);function o(){var e=(0,t.Z)(["\n  && {\n    background-color: #545456;\n  }\n\n  & .MuiTabs-indicator {\n    background-color: #50ff00;\n  }\n"]);return o=function(){return e},e}function g(){var e=(0,t.Z)(["\n  width: 95%;\n  margin: 20px auto 0;\n  \n  @media (max-width: 1440px) {\n    width: 98%;\n  }\n  \n  @media (max-width: 750px) {\n    width: 100%;\n    margin: 0;\n  }\n"]);return g=function(){return e},e}var c=i.ZP.div(g()),f=(0,i.ZP)(r.Z)(o())}}]);