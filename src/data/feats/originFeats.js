// src/data/feats/originFeats.js

export const originFeats = [
  {
    name: "Alert",
    slug: "alert",
    sourceBook: "Player’s Handbook",
    summaryLine: "Initiative Proficiency, Initiative Swap",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Initiative Proficiency",
        text: "When you roll Initiative, you can add your Proficiency Bonus to the roll."
      },
      {
        title: "Initiative Swap",
        text: "Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can’t make this swap if you or the ally has the Incapacitated condition."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Child of the Sun",
    slug: "child-of-the-sun",
    sourceBook: "Lorwyn: First Light",
    summaryLine: "Eyes of Eirdu, Faerie Fire Spell",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Eyes of Eirdu",
        text: "You and allies within 10 feet of you have Advantage on saving throws made to avoid or end the Blinded condition."
      },
      {
        title: "Faerie Fire",
        text: "You learn the Faerie Fire spell. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have."
      },
      {
        title: "Unbroken Concentration",
        text: "When you cast Faerie Fire without a spell slot using this benefit, taking damage can’t break your Concentration on the spell."
      }
    ],
    tags: ["Origin", "Lorwyn: First Light"]
  },

  {
    name: "Crafter",
    slug: "crafter",
    sourceBook: "Player’s Handbook",
    summaryLine: "Tool Proficiency, Discount, Fast Crafting",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Tool Proficiency",
        text: "You gain proficiency with three different Artisan’s Tools of your choice from the Fast Crafting table."
      },
      {
        title: "Discount",
        text: "Whenever you buy a nonmagical item, you receive a 20 percent discount on it."
      },
      {
        title: "Fast Crafting",
        text: "When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan’s Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart."
      }
    ],
    specialMd:
      "**Fast Crafting**\n\n" +
      "| Artisan's Tools | Crafted Gear |\n" +
      "|---|---|\n" +
      "| Carpenter's Tools | Ladder, Torch |\n" +
      "| Leatherworker's Tools | Case, Pouch |\n" +
      "| Mason's Tools | Block and Tackle |\n" +
      "| Potter's Tools | Jug, Lamp |\n" +
      "| Smith's Tools | Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot |\n" +
      "| Tinker's Tools | Bell, Shovel, Tinder Box |\n" +
      "| Weaver's Tools | Basket, Rope, Net, Tent |\n" +
      "| Woodcarver's Tools | Club, Greatclub, Quarterstaff |\n",
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Cult of the Dragon Initiate",
    slug: "cult-of-the-dragon-initiate",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Dragon's Tongue, Dragon's Terror, Inspired by Fear",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Dragon’s Tongue",
        text: "You know Draconic. If you already know Draconic when you select this feat, you instead learn one language of your choice from the language tables in the Player's Handbook or Chapter 2 of this book."
      },
      {
        title: "Dragon’s Terror",
        text: "You can take a Magic action to instill terror in a creature you can see within 30 feet of yourself. The target must succeed on a Wisdom saving throw (DC 8 plus your Wisdom modifier and Proficiency Bonus) or have the Frightened condition until the end of your next turn. If the target succeeds on the save or when the effect ends for a target, the target is immune to this effect for 24 hours."
      },
      {
        title: "Inspired by Fear",
        text: "When you cause a creature to have the Frightened condition and you are the source of its fear, you can gain Heroic Inspiration if you lack it. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Emerald Enclave Fledgling",
    slug: "emerald-enclave-fledgling",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Speak with Animals, Tag Team",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Speak with Animals",
        text: "You always have the Speak with Animals spell prepared and can cast it with any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). When you cast this spell as a Ritual, its duration is 8 hours."
      },
      {
        title: "Tag Team",
        text: "When you take the Help action, you can switch places with a willing ally within 5 feet of yourself as part of that same action. This movement doesn’t provoke Opportunity Attacks. You can’t use this benefit if the ally has the Incapacitated condition."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Harper Agent",
    slug: "harper-agent",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Thieves’ Cant, Instrument Training, Distracting Melody",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      { title: "Thieves’ Cant", text: "You know Thieves’ Cant." },
      { title: "Instrument Training", text: "You gain proficiency with a Musical Instrument of your choice." },
      {
        title: "Distracting Melody",
        text: "When you take the Help action to assist an ally’s attack roll, the enemy you’re distracting can be within 30 feet of you, rather than within 5 feet of you, provided the enemy can see or hear you."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Healer",
    slug: "healer",
    sourceBook: "Player’s Handbook",
    summaryLine: "Battle Medic, Healing Rerolls",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Battle Medic",
        text: "If you have a Healer’s Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus."
      },
      {
        title: "Healing Rerolls",
        text: "Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat’s Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Lords’ Alliance Agent",
    slug: "lords-alliance-agent",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Inspiring Strike, Reassert Honor",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Inspiring Strike",
        text: "Once per turn when you score a Critical Hit against a creature, you can choose an ally within 30 feet of yourself who can see or hear you and who lacks Heroic Inspiration. That ally gains Heroic Inspiration."
      },
      {
        title: "Reassert Honor",
        text: "When an enemy you can see deals damage to an ally of yours that is within 5 feet of you, you have Advantage on your next attack roll against that enemy before the end of your next turn."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Lucky",
    slug: "lucky",
    sourceBook: "Player’s Handbook",
    summaryLine: "Luck Points, Advantage, Disadvantage",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Luck Points",
        text: "You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest."
      },
      {
        title: "Advantage",
        text: "When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll."
      },
      {
        title: "Disadvantage",
        text: "When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Magic Initiate",
    slug: "magic-initiate",
    sourceBook: "Player’s Handbook",
    summaryLine: "Two Cantrips, Level 1 Spell, Spell Change, Repeatable",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Two Cantrips",
        text: "You learn two cantrips of your choice from the Cleric, Druid, or Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat’s spells (choose when you select this feat)."
      },
      {
        title: "Level 1 Spell",
        text: "Choose a level 1 spell from the same list you selected for this feat’s cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have."
      },
      {
        title: "Spell Change",
        text: "Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list."
      },
      {
        title: "Repeatable",
        text: "You can take this feat more than once, but you must choose a different spell list each time."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Musician",
    slug: "musician",
    sourceBook: "Player’s Handbook",
    summaryLine: "Instrument Training, Encouraging Song",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      { title: "Instrument Training", text: "You gain proficiency with three Musical Instruments of your choice." },
      {
        title: "Encouraging Song",
        text: "As you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear the song. The number of allies you can affect in this way equals your Proficiency Bonus."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Purple Dragon Rook",
    slug: "purple-dragon-rook",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Entreat, Rallying Cry",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Entreat",
        text: "You gain proficiency in one of the following skills: Insight, Performance, or Persuasion."
      },
      {
        title: "Rallying Cry",
        text: "When you roll Initiative and don’t have the Incapacitated condition, you can choose a number of creatures equal to your Proficiency Bonus that you can see within 30 feet of yourself. Those creatures gain Heroic Inspiration. Once you use this benefit, you can’t do so again until you finish a Long Rest."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Savage Attacker",
    slug: "savage-attacker",
    sourceBook: "Player’s Handbook",
    summaryLine: "Roll damage twice and use either roll",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    descriptionMd:
      "You’ve trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon’s damage dice twice and use either roll against the target.",
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Shadowmoor Hexer",
    slug: "shadowmoor-hexer",
    sourceBook: "Lorwyn: First Light",
    summaryLine: "Hex Spell, Curse Magic",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    // You only pasted the header line for this one; drop the full text when you have it.
    descriptionMd: "—",
    tags: ["Origin", "Lorwyn: First Light"]
  },

  {
    name: "Skilled",
    slug: "skilled",
    sourceBook: "Player’s Handbook",
    summaryLine: "Proficiency in three skills or tools",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Skill Proficiencies",
        text: "You gain proficiency in any combination of three skills or tools of your choice."
      },
      {
        title: "Repeatable",
        text: "You can take this feat more than once."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Spellfire Spark",
    slug: "spellfire-spark",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Magic Absorption, Spellfire Flame",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Magic Absorption",
        text: "Once per turn, when you take damage from a spell or magical effect, you reduce the total damage taken by 1d4. You can’t use this benefit if you have the Incapacitated condition."
      },
      {
        title: "Spellfire Flame",
        text: "You learn the Sacred Flame cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this spell (choose when you select this feat). You can also cast this cantrip as a Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Tavern Brawler",
    slug: "tavern-brawler",
    sourceBook: "Player’s Handbook",
    summaryLine: "Enhanced Unarmed Strike, Damage Rerolls, Improvised Weaponry, Push",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Enhanced Unarmed Strike",
        text: "When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike."
      },
      {
        title: "Damage Rerolls",
        text: "Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll."
      },
      { title: "Improvised Weaponry", text: "You have proficiency with improvised weapons." },
      {
        title: "Push",
        text: "When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn."
      }
    ],
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Tireless Reveler",
    slug: "tireless-reveler",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "Gain Heroic Inspiration",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    descriptionMd:
      "When an ally you can see within 60 feet of yourself expends Heroic Inspiration, you can gain Heroic Inspiration if you lack it. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.",
    tags: ["Origin", "Astarion's Book of Hungers"]
  },

  {
    name: "Tough",
    slug: "tough",
    sourceBook: "Player’s Handbook",
    summaryLine: "HP maximum increase",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    descriptionMd:
      "Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.",
    tags: ["Origin", "Player’s Handbook"]
  },

  {
    name: "Tyro of the Gauntlet",
    slug: "tyro-of-the-gauntlet",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Stand as One, Vigilant",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Stand as One",
        text: "When an ally within 5 feet of you is subjected to an effect that would push or pull it, you can take a Reaction to prevent that ally from being pushed or pulled. To receive this benefit, the ally can’t have the Incapacitated condition."
      },
      {
        title: "Vigilant",
        text: "When you take the Ready action, the next attack roll made against you has Disadvantage before the start of your next turn."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Vampire Hunter",
    slug: "vampire-hunter",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "Advantage on escaping Grapples, mitigate Necrotic damage",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Adroit Escape",
        text: "You have Advantage on checks to escape from nonmagical restraints or the Grappled condition."
      },
      {
        title: "Vitality Ward",
        text: "When you take Necrotic damage, you can take a Reaction to mitigate the damage. Roll a number of d6s equal to your Proficiency Bonus, and add them together. Reduce the Necrotic damage you take by this total. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest."
      }
    ],
    tags: ["Origin", "Astarion's Book of Hungers"]
  },

  {
    name: "Vampire's Plaything",
    slug: "vampires-plaything",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "Create Potions of Healing and Antitoxin, Bonus Action Dash or Disengage",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Decanting",
        text: "When you finish a Long Rest, you can create one Potion of Healing or an Antitoxin, as long as you have an empty vial or flask. These liquids evaporate when you finish another Long Rest."
      },
      {
        title: "Timely Retreat",
        text: "You can take a Bonus Action to take the Dash action or the Disengage action. You can use this benefit a number of times equal to your Proficiency Bonus, and you recover all expended uses when you finish a Long Rest."
      },
      {
        title: "Vampiric Connection",
        text: "The DM determines the fate of your former vampire master. While you and your former vampire master are on the same plane of existence, the vampire can communicate with you telepathically, and you can choose to allow the vampire to perceive through your senses."
      }
    ],
    tags: ["Origin", "Astarion's Book of Hungers"]
  },

  {
    name: "Zhentarim Ruffian",
    slug: "zhentarim-ruffian",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Exploit Opening, Family First",
    type: "Origin",
    prerequisiteLine: "Origin Feat",
    benefits: [
      {
        title: "Exploit Opening",
        text: "When you roll damage for an Opportunity Attack, you can roll the damage dice twice and use either roll against the target."
      },
      {
        title: "Family First",
        text: "If you have Heroic Inspiration when you roll Initiative, you can expend it to give yourself and your allies Advantage on that Initiative roll."
      }
    ],
    tags: ["Origin", "Forgotten Realms: Heroes of Faerûn"]
  }
];
