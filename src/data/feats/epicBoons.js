// src/data/feats/epicBoons.js
// NOTE: Excludes Partnered Content (Grim Hollow, etc.) and any incomplete entries from the paste.
export const epicBoons = [
  {
    name: "Boon of Blazing Dawn",
    source: "Astarion's Book of Hungers",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Beloved of the Sun", text: "You have Immunity to Radiant damage." },
      { title: "Blazing Strike", text: "When you hit a creature with a weapon attack, the damage can be Radiant or the weapon’s normal damage type (your choice)." },
      {
        title: "Burst of Sunlight",
        text:
          "Once per turn when you hit a creature with an attack that deals Radiant damage, you can emit Bright Light in a 30-foot radius from yourself and Dim Light for an additional 30 feet until the start of your next turn. This light is sunlight.",
      },
    ],
  },

  {
    name: "Boon of Bloodshed",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Killer's Fortune", text: "When an enemy you can see is reduced to 0 Hit Points, you gain Advantage on the next attack roll you make before the end of your next turn." },
      {
        title: "Power from Pain",
        text:
          "Once per turn, when you make an attack roll while Bloodied, you can deal extra damage to the target equal to your Proficiency Bonus. The extra damage’s type is the same as the attack’s type.",
      },
    ],
  },

  {
    name: "Boon of Bountiful Health",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Augmented Health", text: "When you gain Temporary Hit Points, increase the number of Temporary Hit Points you gain by 5." },
      { title: "Superior Recuperation", text: "When you spend one or more Hit Point Dice to regain Hit Points, you can instead use the highest number possible for each die." },
    ],
  },

  {
    name: "Boon of Combat Prowess",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Peerless Aim", text: "When you miss with an attack roll, you can hit instead. Once you use this benefit, you can’t use it again until the start of your next turn." },
    ],
  },

  {
    name: "Boon of Communication",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      { title: "Cunning Speaker", text: "You don't have Disadvantage on ability checks to influence Hostile creatures." },
      { title: "Gifted Interpreter", text: "You understand the literal meaning of any language you hear or see signed, and you can understand the literal meaning of any written language you see." },
      { title: "Mental Communication", text: "You gain telepathy with a range of 120 feet." },
    ],
  },

  {
    name: "Boon of Desperate Resilience",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Constitution score by 1, to a maximum of 30." },
      { title: "Defense of Body and Mind", text: "While you are Bloodied, you have Resistance to every damage type except Force." },
    ],
  },

  {
    name: "Boon of Dimensional Travel",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Blink Steps", text: "Immediately after you take the Attack action or the Magic action, you can teleport up to 30 feet to an unoccupied space you can see." },
    ],
  },

  {
    name: "Boon of Energy Resistance",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Energy Resistances",
        text:
          "You gain Resistance to two of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder. Whenever you finish a Long Rest, you can change your choices.",
      },
      {
        title: "Energy Redirection",
        text:
          "When you take damage of one of the types chosen for the Energy Resistances benefit, you can take a Reaction to direct damage of the same type toward another creature you can see within 60 feet of yourself that isn’t behind Total Cover. If you do so, that creature must succeed on a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus) or take damage equal to 2d12 plus your Constitution modifier.",
      },
    ],
  },

  {
    name: "Boon of Exquisite Radiance",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Eternal Rest", text: "Creatures you reduce to 0 Hit Points can't become Undead." },
      {
        title: "Powerful Radiance",
        text:
          "When you make a damage roll that deals Radiant damage, you can instead use the highest number possible for each damage die. Once you use this benefit, you can't do so again until you finish a Long Rest.",
      },
    ],
  },

  {
    name: "Boon of Fate",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Improve Fate",
        text:
          "When you or another creature within 60 feet of you succeeds on or fails a D20 Test, you can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. Once you use this benefit, you can’t use it again until you roll Initiative or finish a Short or Long Rest.",
      },
    ],
  },

  {
    name: "Boon of Fluid Forms",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      {
        title: "Shapechanger",
        text:
          "You can take a Magic action to shape-shift into a Beast, Humanoid, or Monstrosity with a Challenge Rating no higher than 10. When you shape-shift, you gain Temporary Hit Points equal to the Hit Points of the form. The shape-shifting effect lasts for 1 hour, and it ends early if you have no Temporary Hit Points left or if you take a Magic action to return to your true form.\n\n" +
          "Your game statistics are replaced by the stat block of the chosen form, but you retain your creature type; alignment; personality; Intelligence, Wisdom, and Charisma scores; Hit Points; Hit Point Dice; proficiencies; and ability to communicate. If you have the Spellcasting or Pact Magic feature, you retain it too. Upon shape-shifting, you determine whether your equipment drops to the ground or changes in size and shape to fit the new form while you’re in it.\n\n" +
          "Once you use this benefit, you can’t do so again until you finish a Long Rest.",
      },
      { title: "Hardy Transformation", text: "When you gain Temporary Hit Points when you shape-shift, increase that number of Temporary Hit Points by 20." },
    ],
  },

  {
    name: "Boon of Fortitude",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Fortified Health",
        text:
          "Your Hit Point maximum increases by 40. In addition, whenever you regain Hit Points, you can regain additional Hit Points equal to your Constitution modifier. Once you’ve regained these additional Hit Points, you can’t do so again until the start of your next turn.",
      },
    ],
  },

  {
    name: "Boon of Fortune's Favor",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Saving Throw Reroll", text: "When you fail a saving throw, you can reroll it and must use the new roll. Once you use this benefit, you can’t do so again until the start of your next turn." },
    ],
  },

  {
    name: "Boon of Irresistible Offense",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 30." },
      { title: "Overcome Defenses", text: "The Bludgeoning, Piercing, and Slashing damage you deal always ignores Resistance." },
      {
        title: "Overwhelming Strike",
        text:
          "When you roll a 20 on the d20 for an attack roll, you can deal extra damage to the target equal to the ability score increased by this feat. The extra damage’s type is the same as the attack’s type.",
      },
    ],
  },

  {
    name: "Boon of Looming Shadows",
    source: "Astarion's Book of Hungers",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Shadowy Stretch", text: "When you take the Attack action, your reach for your melee weapon attacks increases by 10 feet until the end of your turn." },
      { title: "Dancing Silhouette", text: "You can take the Dodge action as a Bonus Action." },
    ],
  },

  {
    name: "Boon of Misty Escape",
    source: "Astarion's Book of Hungers",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      {
        title: "Gaseous Form",
        text:
          "If you drop to 0 Hit Points but aren’t killed outright, you can instead drop to 1 Hit Point and cast [spells]gaseous form[/spells] without expending a spell slot (no action required). When you cast the spell this way, you can target only yourself, your Fly Speed is 20 feet, and you regain 10 Hit Points at the start of each of your turns for the spell’s duration. The spell’s spellcasting ability is the ability increased by this feat.\n\n" +
          "Once you use this benefit, you can’t do so again until you finish a Long Rest.",
      },
    ],
  },

  {
    name: "Boon of Poison Mastery",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Antitoxic", text: "You have Immunity to Poison damage and the Poisoned condition." },
      {
        title: "Perfect Poisoner",
        text:
          "Once per turn, when you roll dice to determine Poison damage a creature takes from your attack, spell, or feature, you can instead use the highest number possible for each die.",
      },
    ],
  },

  {
    name: "Boon of Recovery",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Last Stand",
        text:
          "When you would be reduced to 0 Hit Points, you can drop to 1 Hit Point instead and regain a number of Hit Points equal to half your Hit Point maximum. Once you use this benefit, you can’t use it again until you finish a Long Rest.",
      },
      {
        title: "Recover Vitality",
        text:
          "You have a pool of ten d10s. As a Bonus Action, you can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll’s total. You regain all the expended dice when you finish a Long Rest.",
      },
    ],
  },

  {
    name: "Boon of Revelry",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      {
        title: "Inspire Dance",
        text:
          "You always have [spells]otto’s irresistible dance[/spells] prepared. You can cast it once without a spell slot, and you regain the ability to cast it that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.\n\nWhen you cast the spell, it requires no spell components, and taking damage doesn’t break your Concentration on it.",
      },
      {
        title: "Sing Out",
        text:
          "While a creature that failed its saving throw against your [spells]otto’s irresistible dance[/spells] has the Charmed condition from that spell, it can’t cast spells with Verbal components, and it sings delightful nonsense if it can sing.",
      },
    ],
  },

  {
    name: "Boon of Siberys (Dragonmark Spell)",
    source: "Eberron: Forge of the Artificer",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+, Eberron Campaign",
    prerequisites: ["Level 19+", "Eberron Campaign"],
    tags: ["Epic Boon", "Dragonmark"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Aberrant Magic",
        text:
          "Choose a spell from the Siberys Dragonmark Spells table. You always have that spell prepared. You can cast it once without a spell slot or spell components, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast this spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you gain this feat).",
      },
    ],
  },

  {
    name: "Boon of Siberys (Sorcerer Spell)",
    source: "Eberron: Forge of the Artificer",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+, Eberron Campaign",
    prerequisites: ["Level 19+", "Eberron Campaign"],
    tags: ["Epic Boon", "Dragonmark"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Aberrant Magic",
        text:
          "Choose a level 8 or lower spell from the Sorcerer spell list or a spell from the Siberys Dragonmark Spells table. You always have that spell prepared. You can cast it once without a spell slot or spell components, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast this spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you gain this feat).",
      },
    ],
  },

  {
    name: "Boon of Skill",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "All-Around Adept", text: "You gain proficiency in all skills." },
      { title: "Expertise", text: "Choose one skill in which you lack Expertise. You gain Expertise in that skill." },
    ],
  },

  {
    name: "Boon of Speed",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Escape Artist", text: "As a Bonus Action, you can take the Disengage action, which also ends the Grappled condition on you." },
      { title: "Quickness", text: "Your Speed increases by 30 feet." },
    ],
  },

  {
    name: "Boon of Spell Recall",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      { title: "Free Casting", text: "Whenever you cast a spell with a level 1–4 spell slot, roll 1d4. If the number you roll is the same as the slot’s level, the slot isn’t expended." },
    ],
  },

  {
    name: "Boon of Terror",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Charisma score by 1, to a maximum of 30." },
      { title: "Fearless", text: "You have Immunity to the Frightened condition." },
      {
        title: "Flee, Fools!",
        text:
          "When a creature with the Frightened condition starts its turn within 60 feet of you, you can take a Reaction to stoke its terror, provided you can see the creature and it isn’t behind Total Cover. If you do so, the creature must succeed on a Wisdom saving throw (DC 8 plus your Charisma modifier and your Proficiency Bonus) or spend its turn moving away from you by the fastest available means. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest.",
      },
      {
        title: "Intimidating",
        text:
          "You gain Proficiency in the Intimidation skill if you don’t already have it. You also gain Expertise in Intimidation.",
      },
    ],
  },

  {
    name: "Boon of the Bright Sun",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Constitution, Wisdom, or Charisma score by 1, to a maximum of 30." },
      {
        title: "Daylight Presence",
        text:
          "As a Bonus Action, you radiate a 30-foot Emanation of Bright Light that is sunlight. If any of the Emanation’s area overlaps with an area of Darkness created by a spell, that spell is dispelled. The Emanation lasts until you dismiss it (no action required), die, or have the Incapacitated condition.",
      },
      {
        title: "Fortifying Light",
        text:
          "When your Daylight Presence is active, at the start of each of your turns, you and allies you can see in your Daylight Presence gain 10 Temporary Hit Points.",
      },
    ],
  },

  {
    name: "Boon of the Furious Storm",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+, Spellcasting or Pact Magic Feature",
    prerequisites: ["Level 19+", "Spellcasting or Pact Magic Feature"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30." },
      { title: "Eye of the Storm", text: "You have Resistance to Lightning and Thunder damage. While you are Bloodied, you have Immunity to Lightning and Thunder damage." },
      { title: "Storm's Strength", text: "Creatures have Disadvantage on saving throws against your spells that deal Lightning or Thunder damage." },
    ],
  },

  {
    name: "Boon of the Night Spirit",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      {
        title: "Merge with Shadows",
        text:
          "While within Dim Light or Darkness, you can give yourself the Invisible condition as a Bonus Action. The condition ends on you immediately after you take an action, a Bonus Action, or a Reaction.",
      },
      { title: "Shadowy Form", text: "While within Dim Light or Darkness, you have Resistance to all damage except Psychic and Radiant." },
    ],
  },

  {
    name: "Boon of the Soul Drinker",
    source: "Forgotten Realms: Heroes of Faerûn",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Grave Resistance", text: "You have Resistance to Cold damage and Necrotic damage." },
      {
        title: "Siphon Life",
        text:
          "When an enemy within 120 feet of you is reduced to 0 Hit Points, you can take a Reaction to regain 50 Hit Points. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest.",
      },
    ],
  },

  {
    name: "Boon of Truesight",
    source: "Player’s Handbook",
    type: "Epic Boon",
    prerequisiteLine: "Prerequisite: Level 19+",
    prerequisites: ["Level 19+"],
    tags: ["Epic Boon"],
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 30." },
      { title: "Truesight", text: "You have Truesight with a range of 60 feet." },
    ],
  },
];