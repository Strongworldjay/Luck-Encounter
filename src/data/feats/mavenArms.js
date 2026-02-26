// src/data/feats/weaponFeats.js
export const mavenArms = [
  {
    name: "Blowgun Ghost",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Blowguns",
    prerequisites: ["Level 4+", "Proficiency with Blowguns"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double range; add prof to damage; BA Hide; poison rider.",
    benefits: [
      {
        title: "Big Blow",
        text: "Attacks with Blowguns now have double the range and add your proficiency to the damage.",
      },
      {
        title: "Pop Out",
        text: "After making an attack with a Blowgun, you can take the Hide (Stealth) action as a Bonus Action.",
      },
      {
        title: "Pre Poisoned",
        text:
          "Once per turn on a hit, force a Constitution saving throw. On a failure, the target becomes Poisoned until the start of your next turn. If the creature is already Poisoned, it instead takes additional damage equal to your proficiency bonus.",
      },
    ],
  },

  {
    name: "Club Bruiser",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Clubs",
    prerequisites: ["Level 4+", "Proficiency with Clubs"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Advantage on Shoves; extra die vs Prone; add prof to club damage.",
    benefits: [
      {
        title: "Primal Fighting",
        text: "While wielding a club, you have Advantage on checks when making a Shove action.",
      },
      {
        title: "Beat ’em While Down",
        text: "If you hit a Prone creature with a club, roll one additional weapon damage die.",
      },
      {
        title: "Club Mastery",
        text: "You add your proficiency bonus to the club’s damage.",
      },
    ],
  },

  {
    name: "Dart Viper",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Darts",
    prerequisites: ["Level 4+", "Proficiency with Darts"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double throwing range; bonus dart on attack; add prof to dart damage.",
    benefits: [
      {
        title: "Quick Flick",
        text: "When making a ranged weapon attack with darts, your throwing range is doubled.",
      },
      {
        title: "Quick Barrage",
        text: "When you take the Attack action, you may draw and throw one additional dart as a Bonus Action (requires a free hand).",
      },
      {
        title: "Dart Mastery",
        text: "You add your proficiency bonus to the dart’s damage.",
      },
    ],
  },

  {
    name: "Flail Tempest",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Flails",
    prerequisites: ["Level 4+", "Proficiency with Flails"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Ignore shield AC bonuses; redirect misses; add prof to damage; conc checks at disadvantage.",
    benefits: [
      {
        title: "Breakthrough",
        text: "Your attacks with flails ignore AC bonuses caused by a Shield or the Shield spell.",
      },
      {
        title: "Redirect",
        text: "When you miss an attack with a flail, you can redirect the head to a different creature within 5 feet of the original target; make a new attack against that creature (once per turn).",
      },
      {
        title: "Flail Mastery",
        text: "You add your proficiency bonus to the flail’s damage.",
      },
      {
        title: "Brutal Focus Shatter",
        text: "When you hit a creature using a flail, if it is concentrating on a spell or feature, damage from the flail causes the Concentration check to be made at Disadvantage.",
      },
    ],
  },

  {
    name: "Handaxe Headsman",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Handaxes",
    prerequisites: ["Level 4+", "Proficiency with Handaxes"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double throw range; add prof to damage; dual-wield handaxes gain Nick for you.",
    benefits: [
      {
        title: "Tomahawk Throw",
        text: "Your thrown weapon attacks with handaxes have double the range.",
      },
      {
        title: "Handaxe Mastery",
        text: "You add your proficiency bonus to the handaxe’s damage.",
      },
      {
        title: "Berserk",
        text: "Handaxes, when dual wielded, have the Nick property for you.",
      },
    ],
  },

  {
    name: "Javelin Stormcaller",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Javelins",
    prerequisites: ["Level 4+", "Proficiency with Javelins"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double throw range; pin to surfaces; add prof to damage; line piercer splash hit.",
    benefits: [
      {
        title: "Power Shoulder",
        text: "Your thrown weapon attacks with javelins have twice the range.",
      },
      {
        title: "Pinned Throw",
        text: "If the target is adjacent to a surface (wall, floor, tree), it makes a Strength saving throw or is Restrained until the start of your next turn (escape uses the save DC). Large+ creatures have Advantage on this save.",
      },
      {
        title: "Javelin Mastery",
        text: "You add your proficiency bonus to the javelin’s damage.",
      },
      {
        title: "Line Piercer",
        text:
          "Once per turn when you throw a javelin and hit, you may trace a 10-foot line behind the target; one creature in that line makes a Dexterity saving throw or takes the javelin’s damage (but you don’t add your proficiency bonus or Strength modifier to this damage). It takes no damage on a success.",
      },
    ],
  },

  {
    name: "Light Hammer Skirmisher",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Light Hammers",
    prerequisites: ["Level 4+", "Proficiency with Light Hammers"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "3 hits stun rider; conc checks at disadvantage on hit; add prof to damage.",
    benefits: [
      {
        title: "Concussive Beatdown",
        text: "If you hit the same creature three times in a turn with light hammers, it must succeed on a Constitution saving throw or be Stunned until the start of your next turn.",
      },
      {
        title: "Bell Ringer",
        text: "On a hit, the target has Disadvantage on Concentration checks until the start of your next turn.",
      },
      {
        title: "Light Hammer Mastery",
        text: "You add your proficiency bonus to the light hammer’s damage.",
      },
    ],
  },

  {
    name: "Mace Inquisitor",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Maces",
    prerequisites: ["Level 4+", "Proficiency with Maces"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Bonus damage vs heavy armor; Sap stacks twice; add prof to damage; conc fail adds psychic.",
    benefits: [
      {
        title: "Armor Denter",
        text: "Your attacks with maces add your proficiency bonus onto the damage again when making an attack against a creature wearing heavy armor or a plated carapace.",
      },
      {
        title: "Slowly Crippling",
        text: "Your Sap property with a mace can stack twice.",
      },
      {
        title: "Mace Mastery",
        text: "You add your proficiency bonus to the mace’s damage.",
      },
      {
        title: "Ringing Head",
        text: "When a creature fails a Concentration check due to your mace damage, it also takes 1d6 psychic damage.",
      },
    ],
  },

  {
    name: "Net Dominator",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Nets",
    prerequisites: ["Level 4+", "Proficiency with Nets"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Extra net-only attack; restrain Large; tougher nets & new escape DC; BA attack on restrain.",
    benefits: [
      {
        title: "Readied Thrower",
        text: "When you take the Attack action on your turn, you gain an additional attack that may only be used to throw a net.",
      },
      {
        title: "Large Netter",
        text: "Nets thrown by you can restrain Large creatures as well.",
      },
      {
        title: "Redirect",
        text: "When a creature attempts to break free of your net, the new saving throw DC equals 8 + your proficiency bonus + your Dexterity modifier, and nets have twice as much Hit Points.",
      },
      {
        title: "Opportune Beat Down",
        text: "When you restrain a creature with a net on your turn, you can use a Bonus Action to make one weapon attack against the creature.",
      },
    ],
  },

  {
    name: "Pick King",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with War Picks",
    prerequisites: ["Level 4+", "Proficiency with War Picks"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Smash objects/constructs; advantage vs heavy armor users; add prof to damage; AC shred rider.",
    benefits: [
      {
        title: "Wall Breaker",
        text: "Attacks with war picks deal double damage to Constructs and Objects. If the war pick already does this, it instead does triple.",
      },
      {
        title: "Armor Piercer",
        text: "You have Advantage on attack rolls against creatures relying on heavy armor, shields, or scaled-like hide.",
      },
      {
        title: "Pick Mastery",
        text: "You add your proficiency bonus to the war pick’s damage.",
      },
      {
        title: "Sunder",
        text: "Once per turn on a hit, force a Constitution saving throw. On a failure, the target’s AC is reduced by 1 until the start of your next turn (−2 on a Critical Hit). This can’t stack with itself beyond −2.",
      },
    ],
  },

  {
    name: "Sickle Reaper",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Sickles",
    prerequisites: ["Level 4+", "Proficiency with Sickles"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Add prof to damage; crit reduces max HP; disarm/shield strip rider.",
    benefits: [
      {
        title: "Sickle Mastery",
        text: "Attacks with this weapon add your proficiency bonus to the damage.",
      },
      {
        title: "Deep Cuts",
        text: "When you land a Critical Hit with a sickle, the damage you deal reduces the target’s Hit Point maximum by the same amount until a Long Rest.",
      },
      {
        title: "Hook & Strip",
        text: "Once per turn on a hit, you can attempt to Disarm a creature, forcing it to make a Strength saving throw. On a failure, the item drops at the target’s feet; if the item is a shield, the target also loses its shield AC until it picks it back up.",
      },
    ],
  },

  {
    name: "Sling Savant",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Slings",
    prerequisites: ["Level 4+", "Proficiency with Slings"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Sling die becomes d6 + prof; ignore long range disadvantage; ricochet rider.",
    benefits: [
      {
        title: "Pull Back",
        text: "When you make an attack roll with a sling, the damage die becomes a d6 and you add your proficiency bonus to the damage.",
      },
      {
        title: "Far Shot",
        text: "You ignore long range disadvantage made with slings.",
      },
      {
        title: "Ricochet",
        text: "Once per turn when you hit, choose another creature within 10 feet of the original target and make a separate attack against it. On a hit, it takes bludgeoning damage equal to your proficiency bonus + your Strength modifier.",
      },
    ],
  },

  {
    name: "Spear Hoplite",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Spears",
    prerequisites: ["Level 4+", "Proficiency with Spears"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double throw range + knockback; add prof to damage (d8 two-handed); spear+shield grants +1 AC & anti-dash.",
    benefits: [
      {
        title: "Spiral Chuck",
        text: "Your thrown weapon attacks with spears have double the range. If a creature you hit with a spear is no larger than one size greater than you, it must succeed on a Strength saving throw or be knocked back 10 feet.",
      },
      {
        title: "Spear Mastery",
        text: "You add your proficiency bonus to the spear’s damage. Additionally, if wielded with two hands, the damage die becomes a d8.",
      },
      {
        title: "Shield Wall",
        text: "While you wield a shield and a spear, you gain +1 AC, and creatures you hit can’t take the Dash action until the start of your next turn.",
      },
    ],
  },

  {
    name: "Staff Sentinel",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Quarterstaffs",
    prerequisites: ["Level 4+", "Proficiency with Quarterstaffs"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Staff gains finesse; 2H reach +1 AC; add prof to attacks; cleave Topple; deflect & riposte.",
    benefits: [
      {
        title: "Nimble Grace",
        text: "Your attacks with staffs benefit from the Finesse property. Additionally, when wielded with two hands, it gains the Reach property and increases your Armor Class by 1.",
      },
      {
        title: "Staff Mastery",
        text: "You add your proficiency bonus to attacks made with staffs.",
      },
      {
        title: "Wide Sweep",
        text: "When you use your Topple property with this weapon, you can target one other creature within 5 feet, forcing it to make the saving throw as well.",
      },
      {
        title: "Deflect & Riposte",
        text: "When a creature you can see hits you with a melee attack, you can use your Reaction to reduce the damage by 1d6 + your proficiency bonus. If reduced to 0, you may make one quarterstaff attack against that creature.",
      },
    ],
  },

  {
    name: "Trident Harpooner",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Tridents",
    prerequisites: ["Level 4+", "Proficiency with Tridents"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Double throw range; harpoon slow/no-dash + optional reel.",
    benefits: [
      {
        title: "Far Launcher",
        text: "Thrown weapon attacks with tridents now have double the range.",
      },
      {
        title: "Harpoon",
        text: "Once per turn on a hit (melee or thrown), the target makes a Strength saving throw. On a failure, it’s harpooned: its speed is reduced by 10 feet and it can’t take the Dash action until the end of your next turn. If you are within 20 feet, you can reel it 10 feet as a Bonus Action (contest Strength if the target is larger than you).",
      },
    ],
  },

  {
    name: "Whip Master",
    source: "Homebrew",
    type: "Weapon Feat",
    prerequisiteLine: "Prerequisite: Level 4+, Proficiency with Whips",
    prerequisites: ["Level 4+", "Proficiency with Whips"],
    tags: ["Weapon", "Arms Maven"],
    summaryLine: "Reach +5 ft; harder to resist trips/push/pull; add prof to damage; lash grapple rider.",
    benefits: [
      {
        title: "Reach",
        text: "Your whip’s reach increases by 5 feet for a total of 15 feet.",
      },
      {
        title: "Quick Trip",
        text: "Creatures have Disadvantage on any save or ability check to avoid being tripped, pushed, or pulled by your whip.",
      },
      {
        title: "Whip Mastery",
        text: "You add your proficiency bonus to the whip’s damage.",
      },
      {
        title: "Lash Grapple",
        text: "Once per turn when you hit a Large or smaller creature, you can attempt a Lash Grapple (no hands required): the target makes a Strength saving throw. On a failure, it’s Grappled (escape DC = 8 + your proficiency bonus + your Dexterity modifier) until the start of your next turn; if it was Prone, you can also drag it up to 10 feet toward you.",
      },
    ],
  },
];
