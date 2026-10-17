// Arcana Unleashed versions, transcribed from the supplied spell text.
export const ARCANA_UNLEASHED_SPELLS = [
  {
    "slug": "aura-of-evasion",
    "name": "Aura of Evasion",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 7,
    "school": "Abjuration",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Dexterity",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [
      "Incapacitated"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "An aura of alacrity radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Advantage on Dexterity saving throws. When an affected creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it takes no damage if it succeeds on the save and only half damage if it fails. A creature with the Incapacitated condition doesn’t gain any benefit from being in the aura.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "battle-familiar",
    "name": "Battle Familiar",
    "classes": [
      "Druid",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 2,
    "school": "Conjuration",
    "castingTime": "Action",
    "duration": "1 hour",
    "range": "10 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "Spell Attack",
    "damageTypes": [
      "Force"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a diamond worth 25+ GP"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You conjure a familiar imbued with magical might. The familiar appears in an unoccupied space within range; resembles an animal of your choice but is a Celestial, Fey, or Fiend (your choice); and uses the Battle Familiar stat block. When you cast this spell, choose the Brute, Flyer, or Stalker form. The choice determines certain details in the stat block.\n\nCombat. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn.\n\nDisappearance of the Familiar. The battle familiar disappears when the spell ends, if it drops to 0 Hit Points, or if you die. When it disappears, it leaves behind in its space anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the familiar that disappeared or a different one.\n\nBattle Familiar\nMedium Celestial, Fey, or Fiend (Your Choice); Neutral\n\nAC 11 + the spell’s level + 2 (Brute only) Initiative +3 (13)\n\nHP 30 (Brute only) or 20 (Flyer or Stalker only) + 5 for each spell level above 2\n\nSpeed 40 ft., Fly 30 ft. hover; Flyer only, Swim 30 ft.\n\nMod\tSave\nStr\t16\t+3\t+3\nDex\t16\t+3\t+3\nCon\t12\t+1\t+1\nMod\tSave\nInt\t8\t−1\t−1\nWis\t13\t+1\t+1\nCha\t10\t+0\t+0\nImmunities Charmed, Frightened\n\nSenses Passive Perception 11\n\nLanguages Understands the languages you know\n\nTraits\n\nFlyby (Flyer Only). The familiar doesn’t provoke an Opportunity Attack when it flies out of an enemy’s reach.\n\nTalented. Add half the spell’s level (round down) to any ability check or saving throw the familiar makes.\n\nActions\n\nMultiattack. The familiar makes a number of Rend attacks equal to half this spell’s level (round down). The familiar can replace one of these attacks with Prowl if available.\n\nRend. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 3 plus the spell’s level Force damage.\n\nProwl (Stalker Only). The familiar moves up to half its Speed without provoking Opportunity Attacks. At the end of this movement, the familiar can take the Hide action.\n\n\nOne Familiar at a Time. You can’t have more than one familiar at a time. If you cast this spell while you already have a familiar from this spell, that familiar is replaced by the new one.\n\nIf you have a familiar from the Find Familiar spell when you cast this spell, you empower your existing familiar rather than conjuring a new one. For the duration, your familiar can attack in addition to taking other actions as normal, and your familiar’s game statistics are replaced by the Battle Familiar stat block, but it retains its creature type, alignment, Hit Points, Hit Point Dice, and any features granted by the Find Familiar spell. Your familiar gains a number of Temporary Hit Points equal to the Hit Points of the battle familiar. Battle Familiar ends early if the familiar has no more Temporary Hit Points left, and these Temporary Hit Points vanish if any remain when Battle Familiar ends. Your familiar reverts to its previous form when Battle Familiar ends.",
    "scalingMd": "Using a Higher-Level Spell Slot. Use the spell slot’s level for the spell’s level in the stat block.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "catnap",
    "name": "Catnap",
    "classes": [
      "Artificer",
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "spellLevel": 3,
    "school": "Enchantment",
    "castingTime": "Action",
    "duration": "10 minutes",
    "range": "30 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [
      "Unconscious"
    ],
    "components": {
      "verbal": false,
      "somatic": true,
      "material": true,
      "materialText": "a pinch of sand"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You make a calming gesture, and up to three willing creatures of your choice that you can see within range have the Unconscious condition for the spell’s duration. The spell ends on a target if it takes damage or another creature takes an action to shake it awake. If a target has the Unconscious condition from this spell for the full duration, that target gains the benefits of finishing a Short Rest, and it can’t be affected by this spell again until it finishes a Long Rest.",
    "scalingMd": "Using a Higher-Level Spell Slot. You can target one additional willing creature for each spell slot level above 3.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "detonate",
    "name": "Detonate",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 9,
    "school": "Evocation",
    "castingTime": "Action",
    "duration": "Instantaneous",
    "range": "500 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Multiple",
    "attackType": "None",
    "damageTypes": [
      "Fire"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a piece of tinder"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You create a magical, explosive seed inside a creature you can see within range. The target makes a Constitution saving throw, taking 10d10 Fire damage on a failed save or half as much damage on a successful one.\n\nAn explosion then originates from the target. Each creature in a 60-foot Emanation originating from the target (not including the target) makes a Dexterity saving throw, with Disadvantage if this spell reduced the target to 0 Hit Points. A creature takes 10d10 Fire damage on a failed save or half as much damage on a successful one.\n\nA nonmagical object that isn’t being worn or carried also takes the damage if it’s in the Emanation, and the object starts burning if it’s flammable.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "disruptive-tune",
    "name": "Disruptive Tune",
    "classes": [
      "Bard",
      "Sorcerer",
      "Wizard"
    ],
    "spellLevel": 2,
    "school": "Abjuration",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "A distracting melody momentarily fills a 20-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a target loses Concentration, and it has Disadvantage on Constitution saving throws to maintain Concentration for the spell’s duration.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "distorted-distance",
    "name": "Distorted Distance",
    "classes": [
      "Artificer",
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 4,
    "school": "Illusion",
    "castingTime": "Action",
    "duration": "Concentration, up to 10 minutes",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Intelligence",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You create an illusory spatial dilation that fills a 60-foot-radius Sphere centered on a point within range. For each creature you can see in the Sphere, you can choose one of the following effects for it:\n\nDizzying Elongation. The creature makes an Intelligence saving throw. On a failed save, the creature takes 2d10 Psychic damage, and the Sphere is Difficult Terrain for it until the end of its turn.\nShortened Space. The creature’s Speed increases by 20 feet until the end of its next turn.\nUntil the spell ends, whenever a creature enters the Sphere or ends its turn there, you can choose for it to receive one of these effects. A creature can be affected by this spell only once per turn.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "dueling-ground",
    "name": "Dueling Ground",
    "classes": [
      "Artificer",
      "Bard",
      "Cleric",
      "Druid",
      "Paladin",
      "Ranger",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 2,
    "school": "Abjuration",
    "castingTime": "10 minutes or Ritual",
    "duration": "1 hour",
    "range": "Touch",
    "area": "Touch",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [
      "Unconscious"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a silk flag worth 100+ GP"
    },
    "concentration": false,
    "ritual": true,
    "descriptionMd": "You create a magical dueling ground bounded by a glowing, rune-scribed circle in a 15-foot-radius Sphere centered on a point on the ground you touch.\n\nAs part of creating the dueling ground, you designate two willing creatures within the Sphere as the targets. The spell ends early if a creature other than one of the targets enters the Sphere.\n\nIf a target drops to 0 Hit Points while in the dueling ground, the target is Stable and teleports to the nearest unoccupied space outside the dueling ground. If a target is subjected to an effect that would kill it instantly without dealing damage while in the dueling ground, the target doesn’t die and instead has 0 Hit Points and the Unconscious condition, is Stable, and teleports to the nearest unoccupied space outside the dueling ground.\n\nWhen only one target remains in the dueling ground, runes matching those on the ground around the Sphere briefly flash around the remaining target’s head like a crown.",
    "scalingMd": "Using a Higher-Level Spell Slot. You can target one additional willing creature for each spell slot level above 2.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "enervation",
    "name": "Enervation",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Dexterity",
    "attackType": "None",
    "damageTypes": [
      "Necrotic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "A tendril of inky darkness reaches out from you to drain life from a creature you can see within range.\n\nThe target makes a Dexterity saving throw. On a failed save, the target takes 6d8 Necrotic damage. On each of your subsequent turns, you can take a Bonus Action to deal 2d8 Necrotic damage to the target automatically. The spell ends if the target is ever outside the spell’s range or it has Total Cover from you.\n\nOn a successful save, the target takes half the initial damage only, and the spell ends.\n\nWhenever this spell deals damage to a target, you regain Hit Points equal to half the amount of Necrotic damage dealt.",
    "scalingMd": "Using a Higher-Level Spell Slot. The initial damage increases by 1d8 for each spell slot level above 5.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "entrancing-mirrors",
    "name": "Entrancing Mirrors",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 8,
    "school": "Illusion",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "90 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Intelligence",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [
      "Stunned"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a mirror shard"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You create dozens of illusory mirrors to confuse up to three creatures of your choice that you can see within range.\n\nEach target makes an Intelligence saving throw. On a failed save, a target takes 7d6 Psychic damage and has the Stunned condition. While the target is Stunned, its Speed is halved. On a successful save, a target takes half as much damage only.\n\nA Stunned target repeats the Intelligence saving throw at the end of each of its turns, ending the spell on itself on a success.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "festering-blast",
    "name": "Festering Blast",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 4,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "1 minute",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Necrotic",
      "Poison"
    ],
    "conditions": [
      "Poisoned"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "A 60-foot-long, 10-foot-wide Line of miasma blasts from you in a direction you choose. Each creature in the Line must make a Constitution saving throw. On a failed save, a target takes 4d10 Necrotic damage and has the Poisoned condition for the duration.\n\nA creature Poisoned by this spell takes 2d10 Poison damage at the start of each of its turns. At the end of each of its turns, a Poisoned target repeats the save, ending the spell on itself on a success.",
    "scalingMd": "Using a Higher-Level Spell Slot. The initial damage increases by 1d10 for each spell slot level above 4.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "fractured-awareness",
    "name": "Fractured Awareness",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 7,
    "school": "Divination",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Intelligence",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You cause a creature to receive conflicting visions of multiple possible futures. Choose a creature you can see within range. The target makes an Intelligence saving throw. On a failed save, the target takes 12d10 Psychic damage and has Disadvantage on D20 Tests for the duration. On a successful save, the target takes half as much damage only, and the spell ends.\n\nAt the end of each of its turns, an affected target repeats the save, ending the spell on a success.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "grave-ground",
    "name": "Grave Ground",
    "classes": [
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Strength",
    "attackType": "None",
    "damageTypes": [
      "Necrotic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a handful of grave dirt"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "Skeletal hands burst from an area on the ground within range. The area consists of up to four 10-foot squares, which you arrange as you like. Each square must be contiguous with at least one other square. That area is Difficult Terrain for your enemies.\n\nAny enemy in that area when the skeletal hands appear makes a Strength saving throw. On a failed save, a creature takes 6d6 Necrotic damage, and until the end of its next turn, the creature subtracts 1d6 from all its damage rolls. An enemy also makes this save if it enters the area or ends its turn there. A creature makes this save only once per turn.",
    "scalingMd": "Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 5.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "hindsight",
    "name": "Hindsight",
    "classes": [
      "Wizard"
    ],
    "spellLevel": 9,
    "school": "Divination",
    "castingTime": "10 minutes",
    "duration": "Concentration, up to 1 hour",
    "range": "500 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a tiny hourglass worth 500+ GP, which the spell consumes"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You peer backward through the fabric of time. You see visions of events that occurred within range throughout the past 10 years, racing by at approximately 1 day per second. Throughout the spell’s duration, you can freely slow down, pause, rewind, or fast-forward through these visions.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "illusory-dragon",
    "name": "Illusory Dragon",
    "classes": [
      "Wizard"
    ],
    "spellLevel": 8,
    "school": "Illusion",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Multiple",
    "attackType": "None",
    "damageTypes": [
      "Poison"
    ],
    "conditions": [
      "Frightened"
    ],
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell’s duration and occupies its space as if it were a creature. The illusion is tangible because of the shadow material used to create it but has Immunity to all damage and conditions.\n\nWhen the illusion appears, any enemy that can see it makes a Wisdom saving throw. On a failed save, the creature drops whatever it’s holding and has the Frightened condition for the duration. If a creature Frightened in this way ends its turn in a space where it doesn’t have line of sight to the illusion, the creature repeats the saving throw, ending the condition on itself on a success.\n\nAs a Bonus Action, you can move the illusion up to 60 feet. At any point during its movement, you can cause the shadowy dragon to exhale a blast of energy in a 60-foot Cone. Each creature in the Cone makes an Intelligence saving throw, taking 6d6 Acid, Cold, Fire, Lightning, Necrotic, or Poison damage (your choice when you create the dragon) on a failed save or half as much damage on a successful one.\n\nA creature that takes a Study action to examine the dragon can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image and has Advantage on saving throws to end the Frightened condition it caused and to resist its exhalation.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "inflict-doubt",
    "name": "Inflict Doubt",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 3,
    "school": "Enchantment",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Wisdom",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You inflict self-doubt on a creature you can see within range. The target must succeed on a Wisdom saving throw or have Disadvantage on D20 Tests for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "invulnerability",
    "name": "Invulnerability",
    "classes": [
      "Wizard"
    ],
    "spellLevel": 9,
    "school": "Abjuration",
    "castingTime": "Action",
    "duration": "Concentration, up to 10 minutes",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a piece of adamantine worth 500+ GP, which the spell consumes"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You have Immunity to all damage until the spell ends.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "iron-body",
    "name": "Iron Body",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 8,
    "school": "Transmutation",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 hour",
    "range": "Touch",
    "area": "Touch",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [
      "Slashing",
      "Poison"
    ],
    "conditions": [
      "Poisoned"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "diamond dust worth 250+ GP, which the spell consumes"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "One willing creature you touch transforms into living metal. Until the spell ends, the target’s Exhaustion level can’t increase; the target has Resistance to Bludgeoning, Fire, Piercing, and Slashing damage; and it has Immunity to Poison damage and the Paralyzed, Petrified, and Poisoned conditions. If the target is Paralyzed, Petrified, or Poisoned when you cast the spell, those conditions immediately end for the target.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "lightning-ring",
    "name": "Lightning Ring",
    "classes": [
      "Druid",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 8,
    "school": "Evocation",
    "castingTime": "Bonus Action",
    "duration": "Concentration, up to 10 minutes",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Multiple",
    "attackType": "None",
    "damageTypes": [
      "Lightning",
      "Thunder"
    ],
    "conditions": [
      "Deafened"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a bit of fur and a glass ring"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "A ring of crackling electricity fills a 10-foot Emanation originating from you. Whenever the Emanation enters a creature’s space and whenever a creature enters the Emanation or ends its turn there, you can force that creature to make a Constitution saving throw. On a failed save, the creature takes 3d6 Lightning damage plus 3d6 Thunder damage, and it has the Deafened condition for 1 minute. On a successful save, the creature takes half as much damage only.\n\nAs a Magic action while the spell is active, you can emit a 60-foot-long, 5-foot-wide Line out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 6d6 Lightning damage on a failed save or half as much damage on a successful one.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "moment-of-prescience",
    "name": "Moment of Prescience",
    "classes": [
      "Wizard"
    ],
    "spellLevel": 8,
    "school": "Divination",
    "castingTime": "Reaction, which you take when you fail a D20 Test or when a creature hits you with an attack roll",
    "duration": "Instantaneous",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You have a powerful sixth sense that guides you at just the right time. Turn the roll of your failed D20 Test into a 20, or turn the roll of the triggering attack roll into a 1.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "mordenkainen-s-lucubration",
    "name": "Mordenkainen’s Lucubration",
    "classes": [
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Divination",
    "castingTime": "Action",
    "duration": "Instantaneous",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You recover up to two expended spell slots of level 2 or lower.",
    "scalingMd": "Using a Higher-Level Spell Slot. The maximum level of spell slots you can recover increases to level 3 (if cast with a level 6–7 spell slot) or level 4 (if cast with a level 8+ spell slot).",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "negative-energy-flood",
    "name": "Negative Energy Flood",
    "classes": [
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "Instantaneous",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Necrotic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialText": "a broken bone and a square of black silk"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You send ribbons of negative energy at one creature you can see within range. If the target isn’t Undead, it makes a Constitution saving throw, taking 3d10 + 25 Necrotic damage on a failed save or half as much damage on a successful one. A Humanoid killed by this spell rises at the start of your next turn as a Zombie that follows your verbal orders for 24 hours, after which it acts according to its nature.\n\nIf the target is Undead, it gains 3d10 Temporary Hit Points.",
    "scalingMd": "Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 5.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "power-word-pain",
    "name": "Power Word Pain",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 7,
    "school": "Enchantment",
    "castingTime": "Action",
    "duration": "1 minute",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Force"
    ],
    "conditions": [
      "Charmed"
    ],
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 Hit Points or fewer, it takes 6d8 Force damage and has the Charmed condition for the duration. Otherwise, it takes 6d8 Force damage only.\n\nWhile the target is Charmed, its Speed can be no more than 10 feet, and it has Disadvantage on D20 Tests except Constitution saving throws. In addition, when the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.\n\nAt the end of each of its turns, the Charmed target makes a Constitution saving throw, ending the spell on itself on a successful save.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "reweave-fate",
    "name": "Reweave Fate",
    "classes": [
      "Bard",
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 7,
    "school": "Divination",
    "castingTime": "Reaction, which you take when a creature you can see within 60 feet of you fails a D20 Test",
    "duration": "Instantaneous",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You untangle a single thread of fate to encourage a different result. The creature that failed the D20 Test can reroll it with Advantage, and the creature must use the new roll. If the D20 Test is successful, the creature gains 6d10 Temporary Hit Points from its strengthened fate.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "spirit-lantern",
    "name": "Spirit Lantern",
    "classes": [
      "Artificer",
      "Cleric",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "10 minutes",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Necrotic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a black lantern"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You conjure a floating, ghostly black lantern that hovers above you and sheds Dim Light in a 60-foot radius. When an enemy dies within this Dim Light, a fragment of the creature’s soul flies into the lantern. The lantern can hold a number of soul fragments equal to your spellcasting ability modifier, and those fragments dissipate when the spell ends.\n\nAs a Bonus Action, you can expend a soul fragment to create one of the following effects.\n\nDrain Life. The soul fragment darts at a creature of your choice that you can see within 60 feet of yourself. The target makes a Constitution saving throw, taking Necrotic damage equal to 4d8 plus your spellcasting ability modifier on a failed save or half as much damage on a successful one.\n\nRepair Undead. The soul fragment flies into an Undead creature of your choice that you can see within 60 feet of yourself. That creature regains Hit Points equal to 4d8 plus your spellcasting ability modifier.\n\nWard Ally. The soul fragment darts around a creature of your choice that you can see within 60 feet of yourself. Other creatures have Disadvantage on attack rolls against the chosen creature until the start of your next turn.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "summon-dinosaur",
    "name": "Summon Dinosaur",
    "classes": [
      "Druid"
    ],
    "spellLevel": 6,
    "school": "Conjuration",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 hour",
    "range": "90 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "Spell Attack",
    "damageTypes": [
      "Piercing",
      "Bludgeoning"
    ],
    "conditions": [
      "Grappled",
      "Restrained",
      "Prone"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "polished scale worth 600+ GP"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You call forth the spirit of a primeval dinosaur. It manifests in an unoccupied space that you can see within range and uses the Dinosaur Spirit stat block. When you cast the spell, choose Ankylosaur, Triceratops, or Tyrannosaur. The creature resembles a dinosaur of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\nThe creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, the creature takes the Dodge action and uses its movement to avoid danger.\n\nDinosaur Spirit\nHuge Beast (Dinosaur), Neutral\n\nAC 11 + the spell’s level + 2 (Ankylosaur only) Initiative +0 (10)\n\nHP 60 + 10 for each spell level above 6\n\nSpeed 40 ft.\n\nMod\tSave\nStr\t21\t+5\t+5\nDex\t11\t+0\t+0\nCon\t15\t+2\t+2\nMod\tSave\nInt\t4\t−3\t−3\nWis\t12\t+1\t+1\nCha\t9\t−1\t−1\nSenses Passive Perception 11\n\nLanguages Understands the languages you know\n\nTraits\n\nSiege Monster (Ankylosaur Only). The spirit deals double damage to objects and structures.\n\nTough. Add half the spell’s level (round down) to any Strength or Constitution saving throw the spirit makes.\n\nActions\n\nMultiattack. The spirit makes a number of attacks equal to half this spell’s level (round down).\n\nBite (Tyrannosaur Only). Melee Attack Roll: Bonus equals your spell attack modifier, reach 10 ft. Hit: 2d10 + 5 plus the spell’s level Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape DC equal to your spell save DC), and it has the Restrained condition until the grapple ends.\n\nGore (Triceratops Only). Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d10 + 5 plus the spell’s level Piercing damage. If the target is a Huge or smaller creature and the spirit moved 20+ feet straight toward it immediately before the hit, the target takes an extra 1d10 Piercing damage and has the Prone condition.\n\nSlam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 10 ft. Hit: 1d10 + 5 plus the spell’s level Bludgeoning damage.",
    "scalingMd": "Using a Higher-Level Spell Slot. Use the spell slot’s level for the spell’s level in the stat block.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "summon-plant",
    "name": "Summon Plant",
    "classes": [
      "Druid",
      "Ranger"
    ],
    "spellLevel": 5,
    "school": "Conjuration",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 hour",
    "range": "90 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "Spell Attack",
    "damageTypes": [
      "Bludgeoning",
      "Poison"
    ],
    "conditions": [
      "Poisoned"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "herbs worth 500+ GP"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You call forth the spirit of an animated plant. It manifests in an unoccupied space that you can see within range and uses the Plant Spirit stat block. When you cast the spell, choose Fungus, Tree, or Vine. The creature resembles a plant of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\nThe creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.\n\nPlant Spirit\nLarge Plant, Neutral\n\nAC 11 + the spell’s level + 2 (Tree only) Initiative +1 (11)\n\nHP 50 + 10 for each spell level above 5\n\nSpeed 40 ft., Climb 40 ft. Vine only\n\nMod\tSave\nStr\t17\t+3\t+3\nDex\t13\t+1\t+1\nCon\t14\t+2\t+2\nMod\tSave\nInt\t10\t+0\t+0\nWis\t13\t+1\t+1\nCha\t10\t+0\t+0\nVulnerabilities Fire (Tree only), Slashing (Fungus or Vine only)\n\nSenses Passive Perception 11\n\nLanguages Understands the languages you know\n\nTraits\n\nSiege Monster (Tree Only). The spirit deals double damage to objects and structures.\n\nActions\n\nMultiattack. The spirit makes a number of attacks equal to half this spell’s level (round down).\n\nSlam (Tree or Vine Only). Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d10 + 3 plus the spell’s level Bludgeoning damage.\n\nSpore Spray (Fungus Only). Melee or Ranged Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. or range 30 ft. Hit: 1d4 plus the spell’s level Poison damage, and the target has the Poisoned condition until the end of its next turn. If the target already has the Poisoned condition, it instead takes an extra 3d4 Poison damage.\n\nBonus Actions\n\nTwist Away (Vine Only). The spirit takes the Dash or Disengage action.",
    "scalingMd": "Using a Higher-Level Spell Slot. Use the spell slot’s level for the spell’s level in the stat block.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "transfix",
    "name": "Transfix",
    "classes": [
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 7,
    "school": "Enchantment",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Charisma",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [
      "Charmed",
      "Incapacitated"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "For the duration, your appearance becomes otherworldly and alluring. One creature of your choice that you can see within 60 feet of you must succeed on a Charisma saving throw or have the Charmed condition for the duration.\n\nWhile Charmed, the target has the Incapacitated condition, and if the target is more than 5 feet away from you, it moves on its turn toward you by the most direct route, trying to get within 5 feet of you. If the Charmed creature ends its turn within 5 feet of you, it takes 4d8 Psychic damage.\n\nThe target doesn’t avoid Opportunity Attacks when moving toward you, but before moving into damaging terrain (such as lava or a pit), the target repeats the save, ending the spell on itself on a success.\n\nUntil the spell ends, you can take a Magic action on subsequent turns to target another creature, but you can’t target a creature again if it has succeeded on a save against this casting of the spell.",
    "scalingMd": "Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 7.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "uncertain-footing",
    "name": "Uncertain Footing",
    "classes": [
      "Artificer",
      "Bard",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 2,
    "school": "Illusion",
    "castingTime": "Action",
    "duration": "Concentration, up to 1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Intelligence",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a distorted lens"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You create illusory obstacles such as rocks or spikes in an attempt to confuse up to three creatures you can see within range, affecting their ability to move. Each target makes an Intelligence saving throw. On a failed save, a target’s Speed is halved, and it can’t take the Dash action. A hampered target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "vision-of-elapsing-eons",
    "name": "Vision of Elapsing Eons",
    "classes": [
      "Bard",
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 9,
    "school": "Illusion",
    "castingTime": "Action",
    "duration": "1 minute",
    "range": "120 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Intelligence",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [
      "Paralyzed"
    ],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You trick a creature you can see within range into believing it is watching itself and its surroundings crumble away, as if eons were passing in moments. The target must succeed on an Intelligence saving throw or take 10d12 Psychic damage and have the Paralyzed condition for the duration.\n\nWhile Paralyzed, the target repeats the save at the end of each of its turns. On a failed save, it gains 1 Exhaustion level. On a successful save, the spell ends. The spell ends early if someone within 5 feet of the target takes an action to shake it free from the illusion.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "wail-of-the-banshee",
    "name": "Wail of the Banshee",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 9,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "Instantaneous",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Psychic"
    ],
    "conditions": [
      "Deafened"
    ],
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You emit a terrible scream that can kill those who hear it. Choose up to ten creatures within range. Each target with 50 Hit Points or fewer dies. Targets with more than 50 Hit Points make a Constitution saving throw. On a failed save, a target takes 12d10 Psychic damage and has the Deafened condition for 1 hour. On a successful save, a target takes half as much damage only. A target is unaffected by the spell if it can’t hear you.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "waves-of-exhaustion",
    "name": "Waves of Exhaustion",
    "classes": [
      "Sorcerer",
      "Warlock",
      "Wizard"
    ],
    "spellLevel": 5,
    "school": "Necromancy",
    "castingTime": "Bonus Action",
    "duration": "Concentration, up to 1 minute",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a piece of dried meat"
    },
    "concentration": true,
    "ritual": false,
    "descriptionMd": "You evoke a nimbus of flickering gray light around your body. For the duration, you can take a Magic action to emit a wave of gray light in a 60-foot Cone. Creatures in that area must succeed on a Constitution saving throw or gain 1 Exhaustion level. This spell can’t increase a creature’s Exhaustion level above 4.\n\nExhaustion levels gained from this spell are removed when the spell ends.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "wither-and-bloom",
    "name": "Wither and Bloom",
    "classes": [
      "Druid",
      "Sorcerer",
      "Wizard"
    ],
    "spellLevel": 2,
    "school": "Necromancy",
    "castingTime": "Action",
    "duration": "Instantaneous",
    "range": "60 feet",
    "area": "See description",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "Constitution",
    "attackType": "None",
    "damageTypes": [
      "Necrotic"
    ],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialText": "a withered vine twisted into a loop"
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "You invoke both death and life in a 10-foot-radius Sphere centered on a point within range. Each creature of your choice in that area makes a Constitution saving throw, taking 3d6 Necrotic damage on a failed save or half as much damage on a successful one. Nonmagical plants in that area that aren’t creatures, such as trees and shrubs, wither.\n\nIn addition, one creature of your choice in that area can roll one of its unexpended Hit Point Dice and regain a number of Hit Points equal to the roll plus your spellcasting ability modifier. That die is then expended.",
    "scalingMd": "Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2. The number of Hit Point Dice that can be rolled and expended increases by one for each spell slot level above 2. You add your spellcasting modifier to the number of Hit Points regained by this spell only once, regardless of the number of Hit Point Dice rolled and expended.",
    "imagePath": "/assets/spell-placeholder.svg"
  },
  {
    "slug": "zone-of-amicability",
    "name": "Zone of Amicability",
    "classes": [
      "Bard",
      "Warlock"
    ],
    "spellLevel": 4,
    "school": "Enchantment",
    "castingTime": "Action",
    "duration": "10 minutes",
    "range": "Self",
    "area": "Self",
    "tags": [
      "Arcana Unleashed"
    ],
    "sources": [
      "Arcana Unleashed"
    ],
    "saveRequired": "None",
    "attackType": "None",
    "damageTypes": [],
    "conditions": [],
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false,
      "materialText": ""
    },
    "concentration": false,
    "ritual": false,
    "descriptionMd": "A magical zone of amicability radiates from you in a 60-foot Emanation for the duration. When you make an ability check to influence a creature in that area, you can treat a d20 roll of 9 or lower as a 10.",
    "scalingMd": "",
    "imagePath": "/assets/spell-placeholder.svg"
  }
];
