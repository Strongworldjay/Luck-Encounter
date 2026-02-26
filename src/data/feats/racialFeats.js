// src/data/feats/racialFeats.js
export const racialFeats = [
    {
        name: "Bountiful Luck",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Halfling",
        prerequisites: ["Halfling"],
        tags: ["Buff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Loaned Luck",
                text:
                    "When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll. When you use this ability, you can’t use your Lucky racial trait before the end of your next turn.",
            },
        ],
    },

    {
        name: "Dao Heritage",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Earth Genasi",
        prerequisites: ["Genasi (Earth)"],
        tags: ["Creation", "Buff"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "One with Stone",
                text:
                    "You learn the Stone Forming cantrip and the Stone Fist spell. You may cast this spell a number of times equal to your Constitution modifier, regaining the ability to cast this spell after completing a long rest. Constitution is your spellcasting modifier for these spells.",
            },
            {
                title: "Unbreakable Defense",
                text:
                    "Your unarmored Armor Class equals 13 + your Constitution modifier. You may wield a shield and still gain this benefit.",
            },
        ],
    },

    {
        name: "Djinn Heritage",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Air Genasi",
        prerequisites: ["Genasi (Air)"],
        tags: ["Creation", "Buff"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Torrential Gust",
                text:
                    "You learn the Windborne Weapon cantrip and the Gale Bolt spell. You may cast this spell a number of times equal to your Dexterity modifier, regaining the ability to cast this spell after completing a long rest. Dexterity is your spellcasting modifier for these spells.",
            },
            {
                title: "Leaf on the Wind",
                text:
                    "Your jump height increases by an amount equal to your proficiency bonus, and the distance increases by twice your proficiency bonus.",
            },
        ],
    },

    {
        name: "Dragon Awakening",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Dragonborn",
        prerequisites: ["Dragonborn"],
        tags: ["Damage", "Warding", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Scale Hardening",
                text:
                    "While you aren’t wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
            },
            {
                title: "Armed Without Weapons",
                text:
                    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike.",
            },
        ],
    },

    {
        name: "Dragon Fear",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Dragonborn",
        prerequisites: ["Dragonborn"],
        tags: ["Control", "Buff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Frightening Roar",
                text:
                    "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw. A target automatically succeeds on the save if it can’t hear or see you. On a failed save, a target becomes frightened of you for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success.",
            },
        ],
    },

    {
        name: "Dwarven Fortitude",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Dwarf",
        prerequisites: ["Dwarf"],
        tags: ["Healing", "Buff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Enduring Warrior",
                text:
                    "Whenever you take the Dodge or Block action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).",
            },
        ],
    },

    {
        name: "Efreet Heritage",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Fire Genasi",
        prerequisites: ["Genasi (Fire)"],
        tags: ["Creation", "Buff"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Intelligence or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Raging Inferno",
                text:
                    "You learn the Control Flames cantrip and the [spells]burning hands[/spells] spell. You may cast this spell a number of times equal to your Constitution modifier, regaining the ability to cast this spell after completing a long rest. Constitution is your spellcasting modifier for these spells.",
            },
            {
                title: "Fire Within",
                text:
                    "Your darkvision extends by 60 feet, and you are able to see heat signatures of creatures, granting you the ability to see Invisible creatures who are not actively hidden.",
            },
        ],
    },

    {
        name: "Fade Away",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Gnome",
        prerequisites: ["Gnome"],
        tags: ["Buff", "Deception", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Intelligence score by 1, to a maximum of 20.",
            },
            {
                title: "Illusory Retreat",
                text:
                    "Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can’t do so again until you finish a short or long rest.",
            },
        ],
    },

    {
        name: "Feline Grace",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Tabaxi",
        prerequisites: ["Tabaxi"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity score by 1, to a maximum of 20.",
            },
            {
                title: "Overclock",
                text:
                    "You can use your Feline Agility trait twice before you must move 0 feet on one of your turns to use the trait again. You can still only use this ability once per turn when you move.",
            },
            {
                title: "Cat-Like Reflexes",
                text:
                    "You don’t take damage from falling 20 feet or less if you aren’t Incapacitated. The falling height increases with levels.",
            },
        ],
    },

    {
        name: "Firbolg Beast Magic",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Firbolg",
        prerequisites: ["Firbolg"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Wisdom or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "One with Animals",
                text:
                    "You learn the [spells]speak with animals[/spells] spell and can cast it at will, without expending a spell slot. You also learn [spells]animal friendship[/spells] and [spells]beast sense[/spells], each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest.",
            },
        ],
    },

    {
        name: "Hardened Shell",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Tortle",
        prerequisites: ["Tortle"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Thick Shelled",
                text: "Your natural armor trait now provides a base AC of 18. As normal, your Dexterity modifier doesn’t affect this number.",
            },
            {
                title: "Protective Barricade",
                text:
                    "As a reaction when you are forced to make a Dexterity saving throw, choose any number of creatures within 5 feet of you. Each chosen creature is considered to have half cover against any harmful attacks or effects while within 5 feet of you until the start of your next turn. Once you use this ability, you can’t do so again until you’ve finished a short or long rest.",
            },
        ],
    },

    {
        name: "Hellfire Awakening",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Tiefling",
        prerequisites: ["Tiefling"],
        tags: ["Damage", "Buff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Max Burn",
                text: "Once per long rest when dealing fire damage, you can choose to max out the damage dice rather than roll.",
            },
            {
                title: "Self Immolation",
                text:
                    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don’t harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
            },
        ],
    },

    {
        name: "Infernal Constitution",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Tiefling",
        prerequisites: ["Tiefling"],
        tags: ["Buff", "Warding", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Burn The Impurities",
                text: "You have resistance to cold damage and poison damage.",
            },
            {
                title: "Fiendish Blood",
                text: "You have advantage on saving throws against being poisoned.",
            },
        ],
    },

    {
        name: "Lucky Second Chance",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Halfling",
        prerequisites: ["Halfling"],
        tags: ["Buff", "Debuff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Luck of The Small",
                text:
                    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to miss. Once you use this ability, you can’t use it again until you roll initiative at the start of combat or until you finish a short or long rest.",
            },
        ],
    },

    {
        name: "Marid Heritage",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Water Genasi",
        prerequisites: ["Genasi (Water)"],
        tags: ["Creation", "Buff"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Wisdom or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "The Way of Water",
                text:
                    "You learn the Water Whip cantrip and the Water Blast spell. You may cast this spell a number of times equal to your Constitution modifier, regaining the ability to cast this spell after completing a long rest. Constitution is your spellcasting modifier for these spells.",
            },
            {
                title: "Flowing Tide",
                text: "Your swim speed increases an additional 15 feet.",
            },
        ],
    },

    {
        name: "Prehensile Tail",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Species with a Tail",
        prerequisites: ["Species with a Tail"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Improvement",
                text: "Increase your Dexterity score by 1, to a maximum of 20.",
            },
            {
                title: "Blind Spot Strike",
                text:
                    "You can perform any Dexterity check using your tail at disadvantage. Additionally, you can wield a light weapon with your tail, making a Bonus Action attack with it at Disadvantage. Upon a hit, you do not add your damage modifier onto the total.",
            },
            {
                title: "Perfect Balance",
                text: "Using your tail to right yourself, you gain advantage on Dexterity (Acrobatics) checks.",
            },
        ],
    },

    {
        name: "Prodigy",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Human, Half Human",
        prerequisites: ["Half-elf, Half-orc, or Human"],
        tags: ["Buff", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase one ability score to a maximum of 20.",
            },
            {
                title: "Versatility",
                text:
                    "You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
            },
            {
                title: "Specialization",
                text: "Choose one skill in which you have proficiency. You gain expertise with that skill.",
            },
        ],
    },

    {
        name: "Sky Warden",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Aarakocra",
        prerequisites: ["Aarakocra"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Eagle Eyes",
                text: "You gain expertise in the Perception skill.",
            },
            {
                title: "Sky Dive",
                text:
                    "Once per turn, if you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage to the target. This damage increases with levels.",
            },
        ],
    },

    {
        name: "Squat Nimbleness",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Small Species or Dwarf",
        prerequisites: ["Dwarf or a Small race"],
        tags: ["Buff", "Movement", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
            },
            {
                title: "Small and Fast",
                text: "Increase your walking speed by 5 feet.",
            },
            {
                title: "Evasive Maneuvers",
                text: "You gain proficiency in the Acrobatics or Athletics skill (your choice).",
            },
            {
                title: "Break Free",
                text:
                    "You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled.",
            },
        ],
    },

    {
        name: "Underdark Magic",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Drow or Half-Elf Drow",
        prerequisites: ["Elf (drow)"],
        tags: ["Detection", "Movement", "Warding", "Species Feat"],
        benefits: [
            {
                title: "Ability Score Increase",
                text:
                    "Increase your Dexterity, Charisma, Intelligence, Wisdom, or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Twilight Magics",
                text:
                    "You learn the [spells]detect magic[/spells] spell and can cast it at will, without expending a spell slot. You also learn [spells]levitate[/spells] (self only) and [spells]dispel magic[/spells], each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest.",
            },
        ],
    },

    {
        name: "Urd Wings",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Kobold",
        prerequisites: ["Kobold"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity score by 1, to a maximum of 20.",
            },
            {
                title: "Beautiful Wings",
                text: "You gain a flying speed of 30 feet.",
            },

        ],
    },
    {
        name: "Psionic Skittermind",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Thri-Kreen",
        prerequisites: ["Thri-Kreen"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Charisma, Intelligence, or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Extended Telepathy",
                text: "The range of your telepathy increases to 120 feet.",
            },
            {
                title: "Psionic Mobility",
                text:
                    "You can cast [spells]jump[/spells] and [spells]levitate[/spells] (self only) without a spell slot or material components once per long rest.",
            },
        ],
    },

    {
        name: "Psionic Riposte",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Githyanki or Githzerai",
        prerequisites: ["Githyanki", "Githzerai"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text:
                    "Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Mind-Punish",
                text:
                    "When a creature you can see misses you with a melee attack, you can use your reaction to deal psychic damage equal to 1d6 + your proficiency bonus. The creature is also pushed 5 feet away from you.",
            },
            {
                title: "Precision of Thought",
                text:
                    "Once per turn, you can add 1d4 to an attack roll you make after seeing the roll but before knowing the result. You can do this a number of times equal to your Proficiency Bonus per short rest.",
            },
        ],
    },

    {
        name: "Legion Drillmaster",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Hobgoblin or Boggart",
        prerequisites: ["Hobgoblin", "Boggart"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
            },
            {
                title: "Barked Orders",
                text:
                    "As a bonus action, choose one creature other than yourself within 20 feet of you who can see or hear you. Choose one order below; the target gains its benefit immediately:\n\n" +
                    "• Strike. The target gains a +1d4 bonus to the next attack roll it makes before the start of your next turn.\n" +
                    "• Brace. The target gains a +1d4 bonus to the next saving throw it makes before the start of your next turn.\n" +
                    "• Advance. The target’s speed increases by 10 feet until the end of its current turn, and it can move through allied creatures’ spaces during that movement (treated as difficult terrain).\n\n" +
                    "You can use Barked Orders a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short Rest. The order die and the range increase with levels.",
            },
        ],
    },

    {
        name: "Shipboard Bruiser",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Giff",
        prerequisites: ["Giff"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Strength or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Close-Quarters Fighting",
                text:
                    "When you hit a creature within 5 feet of you, you can shove it 5 feet (no action required) once per turn.",
            },
            {
                title: "Brace and Board",
                text:
                    "If you move at least 10 feet straight toward a creature, you have advantage on the first shove or grapple check you make against it that turn.",
            },
        ],
    },

    {
        name: "Elephantine Calm",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Loxodon",
        prerequisites: ["Loxodon"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Constitution or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Steady Mind",
                text: "You have advantage on saving throws against being Charmed or Frightened.",
            },
            {
                title: "Breath of Still Waters",
                text:
                    "As a bonus action, you can end the Charmed or Frightened condition on yourself. You can use this benefit a number of times equal to your Proficiency Bonus per long rest.",
            },
        ],
    },

    {
        name: "Circle Communion",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Myconid",
        prerequisites: ["Myconid"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Charisma or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Spore Speech",
                text:
                    "You can communicate telepathically with creatures within 30 feet if you share a language, but only in simple emotions and intent (no deep mind reading).",
            },
            {
                title: "Shared Clarity",
                text:
                    "When an ally within 30 feet fails a Wisdom saving throw, you can use your reaction to let them reroll it. You can do this a number of times equal to your Proficiency Bonus per long rest.",
            },
        ],
    },

    {
        name: "Mark and Mangle",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Goblin",
        prerequisites: ["Goblin"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Mean Advantage",
                text:
                    "Once per turn, when you hit a creature that has one of your allies within 5 feet of it, you can use your Fury of the Small feature without expending its use.",
            },
            {
                title: "Opportunist",
                text:
                    "When an ally within 30 feet hits a hostile creature, you can use your reaction to move 5 feet without provoking opportunity attacks.",
            },
        ],
    },

    {
        name: "Monstrous Ascendance",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Minotaur",
        prerequisites: ["Minotaur"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Constitution or Strength score by 1, to a maximum of 20.",
            },
            {
                title: "Goring Horns",
                text:
                    "Your horns swell into brutal, battle-ready weapons. You can now use your horns as a Bonus Action. If you hit with your horns, you deal 1d10 + your Strength modifier piercing damage.",
            },
            {
                title: "Thickened Hooves",
                text:
                    "You have advantage on saving throws and ability checks made to avoid being knocked prone.",
            },
            {
                title: "Brute Hide",
                text:
                    "While you aren’t wearing armor, your Armor Class equals 13 + your Constitution modifier. You can use a shield and still gain this benefit.",
            },
        ],
    },

    {
        name: "Trailhoof Herdspeaker",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Centaur",
        prerequisites: ["Centaur"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Rangeborn Forager",
                text:
                    "You gain proficiency in Survival. If you already have proficiency in Survival, you gain expertise in it. In addition, you can’t become lost by nonmagical means.",
            },
            {
                title: "Herdspeaker",
                text:
                    "You gain proficiency in Animal Handling. If you already have proficiency in Animal Handling, you gain expertise in it. You can also cast [spells]animal friendship[/spells] once per long rest.",
            },
        ],
    },

    {
        name: "Shedskin Survivor",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Varanthi (Lizardfolk)",
        prerequisites: ["Varanthi (Lizardfolk)"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Constitution or Wisdom score by 1, to a maximum of 20.",
            },
            {
                title: "Shed the Wound",
                text:
                    "As a bonus action, you gain temporary hit points equal to your Proficiency Bonus + your Constitution modifier. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
            },
            {
                title: "Shed the Grip",
                text:
                    "When you are grappled or restrained, you can use your reaction to surge and twist free. Until the end of your next turn, you have advantage on any ability checks you make to escape, and you have advantage on any saving throws you make to end those conditions on yourself. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
            },
            {
                title: "Predatory Regeneration",
                text:
                    "Any limbs lost naturally and not due to a curse or specific magical effect regrow at the end of a long rest.",
            },
        ],
    },

    {
        name: "Pseudopod Splitform",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Plasmoid",
        prerequisites: ["Plasmoid"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Constitution score by 1, to a maximum of 20.",
            },
            {
                title: "Autonomous Pseudo Pod",
                text:
                    "As a Magic action, you extrude and sever a portion of yourself, creating a Pseudo Pod in an unoccupied space within 5 feet of you. The pod lasts for 1 hour, until it drops to 0 hit points, or until you dismiss it (no action). You can create the pod a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.\n\n" +
                    "The pod acts on your initiative (immediately after your turn). It obeys your mental commands (no action required) while it’s within 120 feet of you. If it’s ever beyond that range, it takes the Dodge action and moves toward you by the safest route it can. You can have only one Pseudo Pod at a time. The pod is a creature (Ooze) but is clearly part of you; spells and effects that specifically target “a creature other than you” can target it.",
            },
            {
                title: "Ooze Whip",
                text:
                    "You can shape your body into a snapping tendril. You can make a special melee attack using Strength or Dexterity that deals 1d6 + your modifier acid damage. On a hit, you can pull a Large or smaller creature 5 feet closer to you.",
            },
        ],
    },

    {
        name: "Snatch Menace",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Bugbear",
        prerequisites: ["Bugbear"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Strength score by 1, to a maximum of 20.",
            },
            {
                title: "Silent Start",
                text: "Add your Proficiency Bonus to Initiative rolls.",
            },
            {
                title: "Hook and Haul",
                text:
                    "Once per turn when you hit with a melee attack or successfully grapple a target, you can pull the target 5 feet toward you (no larger than one size larger than you).",
            },
            {
                title: "Kidnapper’s Grip",
                text:
                    "You have advantage on grapple checks. A creature that breaks free of your grapple has its speed reduced by 10 feet for the remainder of the round.",
            },
        ],
    },

    {
        name: "Spring Loaded",
        source: "Homebrew",
        type: "Racial Feat",
        prerequisiteLine: "Prerequisite: Harengon",
        prerequisites: ["Harengon"],
        tags: [],
        benefits: [
            {
                title: "Ability Score Increase",
                text: "Increase your Dexterity or Strength score by 1, to a maximum of 20.",
            },
            {
                title: "Natural Spring",
                text: "Your long jump increases by 10 feet and your high jump increases by 5 feet.",
            },
            {
                title: "Backleg Kick",
                text:
                    "Your legs are natural weapons, which you can use to make unarmed strikes. If you hit with your kick, you deal 1d6 + your Strength or Dexterity modifier bludgeoning damage (choose which modifier when you gain this feat).",
            },
            {
                title: "Thumpback",
                text:
                    "When a creature you can see misses you with a melee attack, you can use your reaction to lash out. Make a kick attack against the triggering creature. On a hit, it takes your kick’s normal damage and must succeed on a Strength saving throw (DC = 8 + your Proficiency Bonus + the modifier you chose for Backleg Kick) or be pushed 5 feet away from you. You can use Thumpback a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
            },
        ],
    },
];
