// src/data/feats/masteryFeats.js
export const masteryFeats = [
  {
    name: "Body Guard",
    source: "Homebrew",
    type: "Mastery Feat",
    prerequisiteLine: "Prerequisite: Level 8+, Interception or Protection Fighting Style",
    prerequisites: ["Level 8+", "Interception or Protection Fighting Style"],
    tags: ["Buff", "Combat"],
    benefits: [
      {
        title: "Ability Score Increase",
        text: "Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.",
      },
      {
        title: "Tactical Reposition",
        text:
          "When you use a reaction on a Fighting Style to defend an allied creature, you can swap positions with that ally after the attack completes.",
      },
      {
        title: "Heroic Intervention",
        text:
          "As a reaction, when an allied creature within range of your movement speed takes damage, you can move to them and into their space. They move to an unoccupied space of their choice within 5 feet, or the closest unoccupied space if there are no unoccupied spaces within 5 feet. You and the target creature have resistance to all damage until the start of your next turn. Once you use this feature, you can’t use it again until you complete a short or long rest.",
      },
    ],
  },

 // Patch: update Flowing Striker inside src/data/feats/masteryFeats.js
// Replace ONLY the Flowing Striker object with this version.

{
  name: "Flowing Striker",
  source: "Homebrew",
  type: "Mastery Feat",
  prerequisiteLine: "Prerequisite: Level 8+, Proficiency with Martial Weapons",
  prerequisites: ["Level 8+", "Proficiency with Martial Weapons"],
  tags: ["Buff", "Combat"],
  descriptionMd:
    "You master a never ending series of movements and attacks. You are an epitome of a flowing warrior.",
  benefits: [
    {
      title: "Ability Score Increase",
      text: "Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.",
    },
    {
      title: "Flowing Movement",
      text:
        "Immediately before or after making a weapon attack with a melee weapon, you can move 5 feet without provoking opportunity attacks. This movement still requires movement speed.",
    },
    {
      title: "Flowing Strikes",
      text:
        "As an action, you can move up to half your movement speed. Each time you move into range of a new creature, you can make one melee weapon attack against that creature. A creature can be hit by this feature only once per turn, and each time you move you can make only one attack (even if moving into reach of multiple new creatures). You can make a maximum number of attacks this way equal to your proficiency bonus. If you are wielding two weapons with the Light property, you can use your Bonus Action to make one additional attack in this way. Once you use this feature, you can’t use it again until you complete a short or long rest.",
    },
  ],
  specialMd:
    "The Flowing Striker feat allows you to move 5 feet before or after making an attack, meaning you can move an additional 5 feet every time you make an attack with the Flowing Striker active ability.",
},
{
  name: "One Man Stampede",
  source: "Homebrew",
  type: "Mastery Feat",
  prerequisiteLine: "Prerequisite: Level 8+, Charger Feat",
  prerequisites: ["Level 8+", "Charger Feat"],
  tags: ["Buff", "Combat"],
  descriptionMd: "You master the reckless rush of smashing into the enemy line.",
  benefits: [
    {
      title: "Ability Score Increase",
      text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
    },
    {
      title: "Unstoppable Momentum",
      text:
        "When you take the Dash action, you can move through the space of hostile creatures your size or smaller. When doing so, each creature whose space you move through must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be knocked Prone. On a success, it takes half as much damage and suffers no additional condition. A creature can be affected by this feature only once per turn. The number of d6s equals your proficiency bonus.",
    },
    {
      title: "Destructive Rampage",
      text:
        "As an action, you (or a mount you are controlling) move in a straight line up to twice your movement speed. All creatures in the line must succeed on a Strength saving throw or take 3d10 bludgeoning damage, be knocked back 10 feet, and be knocked Prone. On a success, a creature takes half as much damage and isn’t pushed or knocked prone. Objects, structures, and Constructs in the line take triple damage. Once you use this feature, you can’t use it again until you complete a short or long rest. The number of d10s equals your proficiency bonus.",
    },
  ],
},

  {
    name: "Poison Master",
    source: "Homebrew",
    type: "Mastery Feat",
    prerequisiteLine: "Prerequisite: Level 8+, Poisoner Feat",
    prerequisites: ["Level 8+", "Poisoner Feat"],
    tags: ["Buff", "Combat"],
    benefits: [
      {
        title: "Lethal Poisoner",
        text:
          "By expending 200 gp worth of ingredients and a Short Rest, you can create a vial of lethal poison. A single vial has a number of uses equal to your proficiency bonus. When applied to a weapon, the poison lasts for 1 hour or until your next successful hit with the weapon. A creature hit with the poison must make a Constitution saving throw (DC = 8 + your Proficiency Bonus + your Wisdom or Intelligence modifier). On a failure, the creature takes 3d10 poison damage and is Poisoned for 1 minute, repeating the save at the end of each of its turns. On a success, it takes half as much damage and isn’t Poisoned.",
      },
      {
        title: "Self Test",
        text: "You are immune to Poison damage and the Poisoned condition.",
      },
      {
        title: "Unnatural Toxicity",
        text:
          "Poisons you craft ignore resistance to poison damage and treat immunity as resistance. This does not affect the Poisoned condition.",
      },
    ],
  },

  {
  name: "Ring Savant",
  source: "Homebrew",
  type: "Mastery Feat",
  prerequisiteLine: "Prerequisite: Level 8+, Grappler Feat",
  prerequisites: ["Level 8+", "Grappler Feat"],
  tags: ["Buff", "Combat"],
  descriptionMd: "You master grappling and leverage to pin and fling your foes.",
  benefits: [
    {
      title: "Ability Score Increase",
      text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
    },
    {
      title: "Pin 'em Down",
      text:
        "While you have a creature grappled, you can attempt to make another Grapple attack to pin it. On a success, the creature is Restrained while you maintain the pin and your Speed becomes 0. On the pinned creature’s turn, if it attempts to break the pin by making a contested Athletics check, on a success it is still Grappled but is no longer Restrained.",
    },
    {
      title: "Martial Toss",
      text:
        "As an action, you attempt to lift a creature or object your size or smaller within reach. The target must make a Strength saving throw (a creature or object you are grappling automatically fails). On a success, you can move 5 feet in a direction and then throw the target an additional 15 feet in that same direction as part of the same action.\n\n" +
        "The target’s movement ends early if it collides with another creature or obstacle. The thrown creature and anything it collides with take 3d10 + your Strength modifier bludgeoning damage and fall prone, unless it collides with something larger than it, in which case only the thrown creature falls prone. The number of d10s equals your proficiency bonus (it increases by 1 each time your proficiency bonus increases).",
    },
  ],
},
{
  name: "Superior Physicality",
  source: "Homebrew",
  type: "Mastery Feat",
  prerequisiteLine: "Prerequisite: Level 8+, Athlete Feat",
  prerequisites: ["Level 8+", "Athlete Feat"],
  tags: ["Buff", "Combat"],
  descriptionMd: "You can accomplish mythical feats of athletic prowess.",
  benefits: [
    {
      title: "Ability Score Increase",
      text: "Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.",
    },
    {
      title: "Perfect Lifeform",
      text:
        "Your jump distance is doubled, you gain a swim speed equal to your walking speed, and you can hold your breath for up to 1 hour.",
    },
    {
      title: "Impossible Feat",
      text:
        "As a bonus action, you gain one of the following benefits for 1 turn:\n\n" +
        "• Jump distance is tripled instead of doubled.\n" +
        "• You are considered one size larger for carrying, pushing, or shoving.\n" +
        "• Your Speed increases by 5 × your proficiency bonus.\n" +
        "• You immediately can make a saving throw or contested check against an ongoing effect if that save or check uses Strength, Dexterity, or Constitution. For the next minute, you can do this as a bonus action on any of your turns.\n" +
        "• Your throwing distance is tripled and thrown weapons gain advantage on all attack rolls.\n\n" +
        "Once you use this feature, you can’t use it again until you complete a short or long rest. You can use it again before completing a rest by taking a level of exhaustion.",
    },
  ],
},

  {
    name: "Titan Grip",
    source: "Homebrew",
    type: "Mastery Feat",
    prerequisiteLine: "Prerequisite: Level 8+, Strength 25+",
    prerequisites: ["Level 8+", "Strength 25+"],
    tags: ["Buff", "Combat"],
    benefits: [
      {
        title: "Ability Score Increase",
        text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
      },
      {
        title: "Titan Grip",
        text:
          "You can wield a Heavy melee weapon you are proficient with in one hand. While wielding a Heavy weapon in one hand, it still counts as a Heavy weapon for all purposes.",
      },
      {
        title: "Colossus Control",
        text:
          "If you are wielding a Heavy weapon in one hand, you can still use your other hand to grapple, carry, climb, or interact with objects normally unless you are dual wielding.",
      },
    ],
  },

  {
  name: "Will Breaker",
  source: "Homebrew",
  type: "Mastery Feat",
  prerequisiteLine: "Prerequisite: Level 8+, Cruel Feat",
  prerequisites: ["Level 8+", "Cruel Feat"],
  tags: ["Buff", "Combat"],
  descriptionMd: "You master the breaking of any creature within your grasp.",
  benefits: [
    {
      title: "Ability Score Increase",
      text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
    },
    {
      title: "Combo Strike",
      text:
        "When you take the Attack action on your turn, you can make one unarmed strike or attempt to grapple as a bonus action.",
    },
    {
      title: "Merciless Break",
      text:
        "As an action, you inflict a debilitating injury on a creature you are grappling. The creature takes 3d8 + your Strength or Dexterity modifier damage and suffers an injury for 1 minute. The number of d8s equals your proficiency bonus.\n\n" +
        "While suffering this injury:\n" +
        "• The creature subtracts 1d8 from all attack rolls and ability checks.\n" +
        "• The creature must succeed on a Constitution saving throw against your Martial Maneuver DC to cast a spell; on a failure, the spell fails and the spell slot is wasted.\n" +
        "• The creature has disadvantage on Concentration checks.\n\n" +
        "At the end of each of its turns, the creature can make a Constitution saving throw against your Martial Maneuver DC, ending the injury on a success.\n\n" +
        "Once you use this feature, you can’t use it again until you complete a short or long rest. You gain an additional use of this feature at 13th level.",
    },
  ],
},
];