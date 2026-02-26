// src/data/feats/generalFeats.js

export const generalFeats = [
  {
    name: "Actor",
    slug: "actor",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Charisma, Impersonation, Mimicry",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Charisma 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Charisma score by 1, to a maximum of 20." },
      {
        title: "Impersonation",
        text: "While you’re disguised as a real or fictional person, you have Advantage on Charisma (Deception or Performance) checks to convince others that you are that person."
      },
      {
        title: "Mimicry",
        text: "You can mimic the sounds of other creatures, including speech. A creature that hears the mimicry must succeed on a Wisdom (Insight) check to determine the effect is faked (DC 8 plus your Charisma modifier and Proficiency Bonus)."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Athlete",
    slug: "athlete",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Climb Speed, Hop Up, Jumping",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Climb Speed", text: "You gain a Climb Speed equal to your Speed." },
      { title: "Hop Up", text: "When you have the Prone condition, you can right yourself with only 5 feet of movement." },
      { title: "Jumping", text: "You can make a running Long or High Jump after moving only 5 feet." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Bloodlust",
    slug: "bloodlust",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "+1 Strength, Dexterity, or Constitution, Powerful Recovery, Sanguine Feast",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      {
        title: "Ability Score Increase",
        text: "Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20."
      },
      {
        title: "Powerful Recovery",
        text: "When you roll a Hit Point Die to regain Hit Points, you can treat any roll of 1 or 2 as a 3."
      },
      {
        title: "Sanguine Feast",
        text:
          "Once per turn when you hit a Bloodied creature that isn’t a Construct or Undead with an attack roll, you can expend a Hit Point Die, roll it, and regain a number of Hit Points equal to the number rolled plus your Constitution modifier.\n\n" +
          "You can use this feature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
      }
    ],
    tags: ["General", "Astarion's Book of Hungers"]
  },

  {
    name: "Bomber",
    slug: "bomber",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "+1 Dexterity, Far Lobber, Long Shots",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity score by 1, to a maximum of 20." },
      {
        title: "Far Lobber",
        text: "When you use the Attack action to throw a vial or flask, you can target an object or creature you can see within 40 feet of yourself."
      },
      {
        title: "Long Shots",
        text: "Attacking at long range doesn’t impose Disadvantage on your attack rolls with Thrown weapons."
      }
    ],
    tags: ["General", "Astarion's Book of Hungers"]
  },

  {
    name: "Charger",
    slug: "charger",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Improved Dash, Charge Attack",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Improved Dash", text: "When you take the Dash action, your Speed increases by 10 feet for that action." },
      {
        title: "Charge Attack",
        text:
          "If you move at least 10 feet in a straight line toward a target immediately before hitting it with a melee attack roll as part of the Attack action, choose one of the following effects: gain a 1d8 bonus to the attack’s damage roll, or push the target up to 10 feet away if it is no more than one size larger than you. You can use this benefit only once on each of your turns."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Chef",
    slug: "chef",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Constitution or Wisdom, Cook's Utensils, Replenishing Meal, Bolstering Treats",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Constitution or Wisdom score by 1, to a maximum of 20." },
      { title: "Cook’s Utensils", text: "You gain proficiency with Cook’s Utensils if you don’t already have it." },
      {
        title: "Replenishing Meal",
        text:
          "As part of a Short Rest, you can cook special food if you have ingredients and Cook’s Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points."
      },
      {
        title: "Bolstering Treats",
        text:
          "With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook’s Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },


  {
    name: "Crossbow Expert",
    slug: "crossbow-expert",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity, Ignore Loading, Firing in Melee, Dual Wielding",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity score by 1, to a maximum of 20." },
      {
        title: "Ignore Loading",
        text:
          "You ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow (all called crossbows elsewhere in this feat). If you’re holding one of them, you can load a piece of ammunition into it even if you lack a free hand."
      },
      { title: "Firing in Melee", text: "Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with crossbows." },
      {
        title: "Dual Wielding",
        text:
          "When you make the extra attack of the Light property, you can add your ability modifier to the damage of the extra attack if that attack is with a crossbow that has the Light property and you aren’t already adding that modifier to the damage."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Crusher",
    slug: "crusher",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Constitution, Push, Enhanced Critical",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Constitution score by 1, to a maximum of 20." },
      {
        title: "Push",
        text:
          "Once per turn, when you hit a creature with an attack that deals Bludgeoning damage, you can move it 5 feet to an unoccupied space if the target is no more than one size larger than you."
      },
      {
        title: "Enhanced Critical",
        text:
          "When you score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of your next turn."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Defensive Duelist",
    slug: "defensive-duelist",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity, Parry",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity score by 1, to a maximum of 20." },
      {
        title: "Parry",
        text:
          "If you’re holding a Finesse weapon and another creature hits you with a melee attack, you can take a Reaction to add your Proficiency Bonus to your Armor Class, potentially causing the attack to miss you. You gain this bonus to your AC against melee attacks until the start of your next turn."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },
  

  {
    name: "Dual Wielder",
    slug: "dual-wielder",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Enhanced Dual Wielding, Quick Draw",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Enhanced Dual Wielding",
        text:
          "When you take the Attack action on your turn and attack with a weapon that has the Light property, you can make one extra attack as a Bonus Action later on the same turn with a different weapon, which must be a Melee weapon that lacks the Two-Handed property. You don’t add your ability modifier to the extra attack’s damage unless that modifier is negative."
      },
      {
        title: "Quick Draw",
        text:
          "You can draw or stow two weapons that lack the Two-Handed property when you would normally be able to draw or stow only one."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Durable",
    slug: "durable",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Constitution, Defy Death, Speedy Recovery",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Constitution score by 1, to a maximum of 20." },
      { title: "Defy Death", text: "You have Advantage on Death Saving Throws." },
      {
        title: "Speedy Recovery",
        text: "As a Bonus Action, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the roll."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Elemental Adept",
    slug: "elemental-adept",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Energy Mastery, Repeatable",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Spellcasting or Pact Magic Feature)",
    benefits: [
      {
        title: "Ability Score Increase",
        text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."
      },
      {
        title: "Energy Mastery",
        text:
          "Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2."
      },
      {
        title: "Repeatable",
        text:
          "You can take this feat more than once, but you must choose a different damage type each time for Energy Mastery."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Fey Touched",
    slug: "fey-touched",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, Charisma, Fey Magic",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    descriptionMd: "Your exposure to the Feywild’s magic grants you the following benefits.",
    benefits: [
      {
        title: "Ability Score Increase",
        text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."
      },
      {
        title: "Fey Magic",
        text:
          "Choose one level 1 spell from the Divination or Enchantment school of magic. You always have that spell and the Misty Step spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Grappler",
    slug: "grappler",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Punch and Grab, Attack Advantage, Fast Wrestler",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Punch and Grab",
        text:
          "When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can use both the Damage and the Grapple option. You can use this benefit only once per turn."
      },
      { title: "Attack Advantage", text: "You have Advantage on attack rolls against a creature Grappled by you." },
      {
        title: "Fast Wrestler",
        text: "You don't have to spend extra movement to move a creature Grappled by you if the creature is your size or smaller."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Great Weapon Master",
    slug: "great-weapon-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength, Heavy Weapon Mastery, Hew",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength score by 1, to a maximum of 20." },
      {
        title: "Heavy Weapon Mastery",
        text:
          "When you hit a creature with a weapon that has the Heavy property as part of the Attack action on your turn, you can cause the weapon to deal extra damage to the target. The extra damage equals your Proficiency Bonus."
      },
      {
        title: "Hew",
        text:
          "Immediately after you score a Critical Hit with a Melee weapon or reduce a creature to 0 Hit Points with one, you can make one attack with the same weapon as a Bonus Action."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Heavily Armored",
    slug: "heavily-armored",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Constitution or Strength, Armor training",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Medium Armor Training)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Constitution or Strength score by 1, to a maximum of 20." },
      { title: "Armor Training", text: "You gain training with Heavy armor." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Heavy Armor Master",
    slug: "heavy-armor-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Constitution or Strength, Damage Reduction",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Heavy Armor Training)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Constitution or Strength score by 1, to a maximum of 20." },
      {
        title: "Damage Reduction",
        text:
          "When you’re hit by an attack while you’re wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Inspiring Leader",
    slug: "inspiring-leader",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Wisdom or Charisma, Bolstering Performance",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Wisdom or Charisma 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Wisdom or Charisma score by 1, to a maximum of 20." },
      {
        title: "Bolstering Performance",
        text:
          "When you finish a Short or Long Rest, you can give an inspiring performance: a speech, song, or dance. When you do so, choose up to six allies (which can include yourself) within 30 feet of yourself who witness the performance. The chosen creatures each gain Temporary Hit Points equal to your character level plus the modifier of the ability you increased with this feat."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Keen Mind",
    slug: "keen-mind",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Lore Knowledge, Quick Study",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Intelligence 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence score by 1, to a maximum of 20." },
      {
        title: "Lore Knowledge",
        text:
          "Choose one of the following skills: Arcana, History, Investigation, Nature, or Religion. If you lack proficiency in the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it."
      },
      { title: "Quick Study", text: "You can take the Study action as a Bonus Action." }
    ],
    tags: ["General", "Player’s Handbook"]
  },


  {
    name: "Lightly Armored",
    slug: "lightly-armored",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Armor Training",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Armor Training", text: "You gain training with Light armor and Shields." }
    ],
    tags: ["General", "Player’s Handbook"]
  },


  {
    name: "Mage Slayer",
    slug: "mage-slayer",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Concentration Breaker, Guarded Mind",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Concentration Breaker",
        text: "When you damage a creature that is concentrating, it has Disadvantage on the saving throw it makes to maintain Concentration."
      },
      {
        title: "Guarded Mind",
        text:
          "If you fail an Intelligence, a Wisdom, or a Charisma saving throw, you can cause yourself to succeed instead. Once you use this benefit, you can’t use it again until you finish a Short or Long Rest."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Martial Weapon Training",
    slug: "martial-weapon-training",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Weapon Proficiency",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Weapon Proficiency", text: "You gain proficiency with Martial Weapons." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Medium Armor Master",
    slug: "medium-armor-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Dexterous Wearer",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Medium armor Training)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Dexterous Wearer",
        text: "While you're wearing Medium armor, you can add 3, rather than 2 to your AC if you have a Dexterity score of 16 or higher."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Moderately Armored",
    slug: "moderately-armored",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Armor Training",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Light Armor Training)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Armor Training", text: "You gain training with Medium armor." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Mounted Combatant",
    slug: "mounted-combatant",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity or Wisdom, Mounted Strike, Leap Aside, Veer",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength, Dexterity, or Wisdom score by 1, to a maximum of 20." },
      {
        title: "Mounted Strike",
        text: "While mounted, you have Advantage on attack rolls against any unmounted creature within 5 feet of your mount that is at least one size smaller than the mount."
      },
      {
        title: "Leap Aside",
        text:
          "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw and only half damage if it fails. For your mount to gain this benefit, you must be riding it, and neither of you can have the Incapacitated condition."
      },
      {
        title: "Veer",
        text:
          "While mounted, you can force an attack that hits your mount to hit you instead if you don’t have the Incapacitated condition."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Observant",
    slug: "observant",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence or Wisdom, Keen Observer, Quick Search",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Intelligence or Wisdom 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence or Wisdom score by 1, to a maximum of 20." },
      {
        title: "Keen Observer",
        text:
          "Choose one of the following skills: Insight, Investigation, or Perception. If you lack proficiency with the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it."
      },
      { title: "Quick Search", text: "You can take the Search action as a Bonus Action." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Piercer",
    slug: "piercer",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Puncture, Enhanced Critical",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity by 1, to a maximum of 20." },
      {
        title: "Puncture",
        text:
          "Once per turn, when you hit a creature with an attack that deals Piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll."
      },
      {
        title: "Enhanced Critical",
        text:
          "When you score a Critical Hit that deals Piercing damage to a creature, you can roll one additional damage die when determining the extra Piercing damage the target takes."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Poisoner",
    slug: "poisoner",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity or Intelligence, Potent Poison, Brew Poison",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity or Intelligence score by 1, to a maximum of 20." },
      { title: "Potent Poison", text: "When you make a damage roll that deals Poison damage, it ignores Resistance to Poison damage." },
      {
        title: "Brew Poison",
        text:
          "You gain proficiency with the Poisoner’s Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, you can create a number of poison doses equal to your Proficiency Bonus. As a Bonus Action, you can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until you deal damage with the poisoned item, whichever is shorter. When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (DC 8 plus the modifier of the ability increased by this feat and your Proficiency Bonus) or take 2d8 Poison damage and have the Poisoned condition until the end of your next turn."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Polearm Master",
    slug: "polearm-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity or Strength, Pole Strike, Reactive Strike",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity or Strength score by 1, to a maximum of 20." },
      {
        title: "Pole Strike",
        text:
          "Immediately after you take the Attack action and attack with a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a melee attack with the opposite end of the weapon. The weapon deals Bludgeoning damage, and the weapon’s damage die for this attack is a d4."
      },
      {
        title: "Reactive Strike",
        text:
          "While you’re holding a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can take a Reaction to make one melee attack against a creature that enters the reach you have with that weapon."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Resilient",
    slug: "resilient",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 to Any Ability without Saving Throw Proficiency, Saving Throw Proficiency",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      {
        title: "Ability Score Increase",
        text:
          "Choose one ability in which you lack saving throw proficiency. Increase the chosen ability score by 1, to a maximum of 20."
      },
      { title: "Saving Throw Proficiency", text: "You gain saving throw proficiency with the chosen ability." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Ritual Caster",
    slug: "ritual-caster",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Ritual Spells, Quick Ritual",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+; Intelligence, Wisdom, or Charisma 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Ritual Spells",
        text:
          "Choose a number of level 1 spells equal to your Proficiency Bonus that have the Ritual tag. You always have those spells prepared, and you can cast them with any spell slots you have. The spells’ spellcasting ability is the ability increased by this feat. Whenever your Proficiency Bonus increases thereafter, you can add an additional level 1 spell with the Ritual tag to the spells always prepared with this feature."
      },
      {
        title: "Quick Ritual",
        text:
          "With this benefit, you can cast a Ritual spell that you have prepared using its regular casting time rather than the extended time for a Ritual. Doing so doesn’t require a spell slot. Once you cast the spell in this way, you can’t use this benefit again until you finish a Long Rest."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Sentinel",
    slug: "sentinel",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Guardian, Halt",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Strength or Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Guardian",
        text:
          "Immediately after a creature within 5 feet of you takes the Disengage action or hits a target other than you with an attack, you can make an Opportunity Attack against that creature."
      },
      { title: "Halt", text: "When you hit a creature with an Opportunity Attack, the creature’s Speed becomes 0 for the rest of the current turn." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Shadow Touched",
    slug: "shadow-touched",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Shadow Magic",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    descriptionMd: "Your exposure to the Shadowfell’s magic grants you the following benefits.",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Shadow Magic",
        text:
          "Choose one level 1 spell from the Illusion or Necromancy school of magic. You always have that spell and the Invisibility spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can’t cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Sharpshooter",
    slug: "sharpshooter",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity, Bypass Cover, Firing in Melee, Long Shots",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity score by 1, to a maximum of 20." },
      { title: "Bypass Cover", text: "Your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover." },
      { title: "Firing in Melee", text: "Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with Ranged weapons." },
      { title: "Long Shots", text: "Attacking at long range doesn’t impose Disadvantage on your attack rolls with Ranged weapons." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Shield Master",
    slug: "shield-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength, Shield Bash, Interpose Shield",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Shield Training)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength score by 1, to a maximum of 20." },
      {
        title: "Shield Bash",
        text:
          "If you attack a creature within 5 feet of you as part of the Attack action and hit with a Melee weapon, you can immediately bash the target with your Shield if it’s equipped, forcing the target to make a Strength saving throw (DC 8 plus your Strength modifier and Proficiency Bonus). On a failed save, you either push the target 5 feet from you or cause it to have the Prone condition (your choice). You can use this benefit only once on each of your turns."
      },
      {
        title: "Interpose Shield",
        text:
          "If you’re subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can take a Reaction to take no damage if you succeed on the saving throw and are holding a Shield."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Skill Expert",
    slug: "skill-expert",
    sourceBook: "Player’s Handbook",
    summaryLine: "Ability Score Increase, Skill Proficiency, Expertise",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase one ability score of your choice by 1, to a maximum of 20." },
      { title: "Skill Proficiency", text: "You gain proficiency in one skill of your choice." },
      { title: "Expertise", text: "Choose one skill in which you have proficiency but lack Expertise. You gain Expertise with that skill." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Skulker",
    slug: "skulker",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity, Blindsight, Fog of War, Sniper",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Dexterity 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity score by 1, to a maximum of 20." },
      { title: "Blindsight", text: "You have Blindsight with a range of 10 feet." },
      {
        title: "Fog of War",
        text: "You exploit the distractions of battle, gaining Advantage on any Dexterity (Stealth) check you make as part of the Hide action during combat."
      },
      {
        title: "Sniper",
        text: "If you make an attack roll while hidden and the roll misses, making the attack roll doesn't reveal your location."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Slasher",
    slug: "slasher",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Hamstring, Enhanced Critical",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      {
        title: "Hamstring",
        text: "Once per turn when you hit a creature with an attack that deals Slashing damage, you can reduce the Speed of that creature by 10 feet until the start of your next turn."
      },
      {
        title: "Enhanced Critical",
        text:
          "When you score a Critical Hit that deals Slashing damage to a creature, it has Disadvantage on attack rolls until the start of your next turn."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Speedy",
    slug: "speedy",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Dexterity or Constitution, Speed Increase, Dash over Difficult Terrain, Agile Movement",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Dexterity or Constitution 13+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Dexterity or Constitution score by 1, to a maximum of 20." },
      { title: "Speed Increase", text: "Your Speed increases by 10 feet." },
      { title: "Dash over Difficult Terrain", text: "When you take the Dash action on your turn, Difficult Terrain doesn't cost you extra movement for the rest of that turn." },
      { title: "Agile Movement", text: "Opportunity Attacks have Disadvantage against you." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Spell Sniper",
    slug: "spell-sniper",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Bypass Cover, Casting in Melee, Increased Range",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Spellcasting or Pact Magic Feature)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      { title: "Bypass Cover", text: "Your attack rolls for spells ignore Half Cover and Three-Quarters Cover." },
      { title: "Casting in Melee", text: "Being within 5 feet of an enemy doesn’t impose Disadvantage on your attack rolls with spells." },
      {
        title: "Increased Range",
        text:
          "When you cast a spell that has a range of at least 10 feet and requires you to make an attack roll, you can increase the spell’s range by 60 feet."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Spellfire Adept",
    slug: "spellfire-adept",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "Ability Score Increase, Fueled Spellfire, Searing Spellfire",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+, Spellfire Spark Feat or the Spellcasting or Pact Magic Feature)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Fueled Spellfire",
        text:
          "Once per turn, when a spell you cast deals Radiant damage, you can expend up to two Hit Point Dice, roll them, and add the total rolled to one damage roll of the spell."
      },
      { title: "Searing Spellfire", text: "When you make a damage roll that deals Radiant damage, it ignores Resistance to Radiant damage." }
    ],
    tags: ["General", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Street Justice",
    slug: "street-justice",
    sourceBook: "Forgotten Realms: Heroes of Faerûn",
    summaryLine: "+1 Str. or Dex., Headlock, Sturdy Knot, Tough Talk",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity score by 1, to a maximum of 20." },
      { title: "Headlock", text: "Your allies have Advantage on attack rolls against a creature Grappled by you." },
      {
        title: "Sturdy Knot",
        text:
          "When you use Chain, Manacles, or Rope to bind a creature, add your Proficiency Bonus to the DC to escape or burst the Chain, Manacles, or Rope."
      },
      { title: "Tough Talk", text: "A creature’s Hostile attitude doesn’t impose Disadvantage on your Charisma (Intimidation) checks to influence that creature." }
    ],
    tags: ["General", "Forgotten Realms: Heroes of Faerûn"]
  },

  {
    name: "Telekinetic",
    slug: "telekinetic",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Minor Telekinesis, Telekinetic Shove",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Minor Telekinesis",
        text:
          "You learn the Mage Hand spell. You can cast it without Verbal or Somatic components, you can make the spectral hand Invisible, and its range and the distance it can be away from you both increase by 30 feet when you cast it. The spell’s spellcasting ability is the ability increased by this feat."
      },
      {
        title: "Telekinetic Shove",
        text:
          "As a Bonus Action, you can telekinetically shove one creature you can see within 30 feet of yourself. When you do so, the target must succeed on a Strength saving throw (DC 8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or be moved 5 feet toward or away from you."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Telepathic",
    slug: "telepathic",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Telepathic Utterance, Detect Thoughts",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Telepathic Utterance",
        text:
          "You can speak telepathically to any creature you can see within 60 feet of yourself. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically."
      },
      {
        title: "Detect Thoughts",
        text:
          "You always have the Detect Thoughts spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Treacherous Allure",
    slug: "treacherous-allure",
    sourceBook: "Astarion's Book of Hungers",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, cast Charm Person, Advantage on attacks against Charmed creatures",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      {
        title: "Enchanting Presence",
        text:
          "You always have the Charm Person spell prepared. You can cast it without a spell slot, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat."
      },
      { title: "Inevitable Betrayal", text: "You have Advantage on attack rolls against creatures with the Charmed condition." }
    ],
    tags: ["General", "Astarion's Book of Hungers"]
  },

  {
    name: "War Caster",
    slug: "war-caster",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Intelligence, Wisdom, or Charisma, Concentration, Reactive Spell, Somatic Components",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+ Spellcasting or Pact Magic Feature)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20." },
      { title: "Concentration", text: "You have Advantage on Constitution saving throws that you make to maintain Concentration." },
      {
        title: "Reactive Spell",
        text:
          "When a creature provokes an Opportunity Attack from you by leaving your reach, you can take a Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of one action and must target only that creature."
      },
      { title: "Somatic Components", text: "You can perform the Somatic components of spells even when you have weapons or a Shield in one or both hands." }
    ],
    tags: ["General", "Player’s Handbook"]
  },

  {
    name: "Weapon Master",
    slug: "weapon-master",
    sourceBook: "Player’s Handbook",
    summaryLine: "+1 Strength or Dexterity, Mastery Property",
    type: "General",
    prerequisiteLine: "General Feat (Prerequisite: Level 4+)",
    benefits: [
      { title: "Ability Score Increase", text: "Increase your Strength or Dexterity Score by 1, to a maximum of 20." },
      {
        title: "Mastery Property",
        text:
          "Your training with weapons allows you to use the mastery property of one kind of Simple or Martial weapon of your choice, provided you have proficiency with it. Whenever you finish a Long Rest, you can change the kind of weapon to another eligible kind."
      }
    ],
    tags: ["General", "Player’s Handbook"]
  },
];
