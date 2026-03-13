import { spellImgUrl, slugify } from "../../features/spells/utils";

export const LEVEL9 = [
    {
        slug: slugify("Beckon the Fae Matron"),
        name: "Beckon the Fae Matron",
        classes: ["Druid"],
        spellLevel: 9,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "Unoccupied space within range",
        tags: ["Homebrew", "Summoning", "Fey", "Roleplay"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You whisper into the veils between realms, calling forth the Fae Matron—an ancient archfey bound by slumber and oath. She steps into the world with grace and power, her mood as fickle as the wind and her magic as old as starlight.\n\nThe Fae Matron appears in an unoccupied space within range. She is not bound by your will—you may offer suggestions, requests, and bargains, but she chooses how and when to act. She regards you and your allies as such and will not intentionally harm you unless you grievously offend her or her court. Her aid, indifference, or tests depend on her whims and judgment.\n\nThe Fae Matron rolls her own Initiative and takes independent turns, acting according to her interpretation of your intentions. She disappears if reduced to 0 HP or if your concentration ends. You may only beckon her once per long rest.",
        scalingMd: "",
        imagePath: spellImgUrl("beckonthefaematron")
    },
    {
        slug: slugify("Blank Face"),
        name: "Blank Face",
        classes: ["Grim Hollow", "Cleric", "Wizard"],
        spellLevel: 9,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Control", "Debuff"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Blinded", "Incapacitated", "Suffocating"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You curse a creature that you can see within range. The target’s face is replaced with completely smooth skin, sealing the creature’s eyes, nose, and mouth. The creature has the Blinded and Incapacitated conditions and begins suffocating.\n\n" +
            "At the end of each of its turns, the target can attempt a Constitution saving throw to end the spell. Also, the Heal spell ends the spell, while a Remove Curse spell suppresses it for 1d6 rounds. Dealing at least 15 Slashing damage to the target opens an airway allowing it to breathe, but the curse seals the opening at the start of your next turn.",
        scalingMd: "",
        imagePath: spellImgUrl("blankface")
    },
    {
        slug: slugify("Angelic Perfection"),
        name: "Angelic Perfection",
        classes: ["Bard", "Cleric"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Buff", "Healing"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Fire", "Force", "Thunder"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend eight Hit Point Dice or the spell automatically fails. Over the course of 1d6 × 5 minutes, the sky darkens and thick droplets of blood rain everywhere within 5 miles of you.\n\n" +
            "Each Beast and Plant creature in the area must succeed on a Wisdom saving throw or have the Frightened condition until it has spent 1 minute outside the area. Mundane plants exposed to the rain wither and die after 10 minutes.\n\n" +
            "For every 10 minutes that a creature of any type is directly exposed to the rain, that creature gains 1 Exhaustion level and takes 2d10 Necrotic damage. The creature’s Hit Point maximum decreases by an amount equal to the Necrotic damage dealt. This reduction lasts until the creature removes all levels of Exhaustion gained from this spell. While a creature has any Exhaustion levels from this spell, it automatically fails saving throws against removing the Poisoned condition.\n\n" +
            "When the spell ends, roll the Hit Point Dice expended to cast the spell. Beast and Plant creatures won’t return and plants won’t regrow in the area for a number of days equal to the roll’s total.",
        scalingMd: "",
        imagePath: spellImgUrl("angelicperfection")
    },
    {
        slug: slugify("Dragonskin"),
        name: "Dragonskin",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "diamond dust worth 1000 gp, which the spell consumes" },
        concentration: true,
        ritual: false,
        descriptionMd: "This spell turns the flesh of a willing creature you touch as hard as an Ancient Dragon's Scales. Until the spell ends, the target has resistance to bludgeoning, piercing, and slashing damage as well as resistance to all elemental damage (acid, cold, fire, lightning, poison, and thunder).",
        scalingMd: "",
        imagePath: spellImgUrl("dragonskin")
    },
    {
        slug: slugify("Eternal Imprisonment"),
        name: "Eternal Imprisonment",
        classes: ["Warlock", "Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "Until dispelled",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control", "Warding"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Restrained/Unconscious/Contained (by option)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a statuette of the target worth 5,000+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a magical restraint to hold a creature that you can see within range. Roll 12d6; if the total is greater than the target’s current Hit Points and the target doesn’t have a Mythic Form that has not been used yet, the target is imprisoned. While imprisoned, the target doesn’t need to breathe, eat, or drink, and it doesn’t age. Divination spells can’t locate or perceive the imprisoned target, and the target can’t teleport.\n\n" +
            "Until the spell ends, the target is also affected by one of the following effects of your choice:\n\n" +
            "**Burial.** The target is entombed beneath the earth in a hollow globe of magical force that is just large enough to contain the target. Nothing can pass into or out of the globe.\n\n" +
            "**Chaining.** Chains firmly rooted in the ground hold the target in place. The target has the Restrained condition and can’t be moved by any means.\n\n" +
            "**Hedged Prison.** The target is trapped in a demiplane that is warded against teleportation and planar travel. The demiplane is your choice of a labyrinth, a cage, a tower, or the like.\n\n" +
            "**Minimus Containment.** The target becomes 1 inch tall and is trapped inside an indestructible gemstone or a similar object. Light can pass through the gemstone (allowing the target to see out and other creatures to see in), but nothing else can pass through by any means.\n\n" +
            "**Slumber.** The target has the Unconscious condition and can’t be awoken.\n\n" +
            "Ending the Spell. When you cast the spell, specify a trigger that will end it. The trigger can be as simple or as elaborate as you choose, but the DM must agree that it has a high likelihood of happening within the next decade. The trigger must be an observable action, such as someone making a particular offering at the temple of your god, saving your true love, or defeating a specific monster.\n\n" +
            "A Dispel Magic spell can end the spell only if it is cast with a level 9 spell slot, targeting either the prison or the component used to create it.",
        scalingMd: "",
        imagePath: spellImgUrl("imprisonment")
    },
    {
        slug: slugify("Form of The Elements"),
        name: "Form of The Elements",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "Self; multiple selectable effects",
        tags: ["Homebrew", "Damage", "Shapechanging"],
        saveRequired: "Varies",
        attackType: "Spell",
        damageTypes: ["Fire", "Cold", "Bludgeoning", "Piercing"],
        conditions: ["Prone", "Difficult Terrain"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You become a conjuncture of all the elemental forms Fire, Ice, Water, Wind, and Stone, shedding bright light in a 30-foot radius and dim light for an additional 30 feet if you choose, or you can choose to be invisible by using an action to switch between the two states. Until the spell ends, you gain the following benefits:\n\n" +
            "You are immune to fire and cold damage, and the ground within a 10-foot radius around you becomes difficult terrain for others.\n\n" +
            "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n\n" +
            "You have a flying speed of 60 ft. You can move through the space of other creatures and ignore difficult terrain, as well as move through solid earth or stone as if it were air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn. The first time on your turn when you enter the space of another creature, it takes 1d6 fire damage and must make a Strength saving throw or be knocked prone.\n\n" +
            "If a creature within 5 feet hits you with a melee attack, it takes 1d6 fire damage.\n\n" +
            "Action Options. You can use your action to do one of the following:\n\n" +
            "Line of Fire. Create a line of fire 30 feet long and 5 feet wide extending from you in a direction of your choice. Each creature in the line must make a Dexterity saving throw. A creature takes 6d6 fire damage on a failed save, or half as much damage on a successful one.\n\n" +
            "Stone Spikes. Call forth spikes of stone to rise from the ground. All creatures of your choice within 15 feet of you must make a Dexterity saving throw. A creature takes 4d8 piercing damage on a failed save, or half as much on a successful one. Their space becomes difficult terrain either way.\n\n" +
            "Freezing Wind (Cone). Create a 30-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d8 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.\n\n" +
            "Crushing Gust (Cone). Unleash a powerful blast of wind in a 30-foot cone. Each creature in the cone must make a Strength saving throw. A creature takes 4d8 bludgeoning damage and is knocked 15 feet away from you on a failed save, or takes half as much damage and isn't knocked backward on a successful one.\n\n" +
            "Burst of Water (Line). Unleash a blast of water 15 feet long and 5 feet wide extending from you in a direction of your choice. Each creature in the line must make a Strength saving throw. A creature takes 5d6 bludgeoning damage and is knocked prone on a failed save, or half as much and isn't knocked prone on a successful one.\n\n" +
            "When rolling Cold or Fire damage, you can choose to maximize one of the damage dice.",
        scalingMd: "",
        imagePath: spellImgUrl("formoftheelements")
    },
    {
        slug: slugify("Invulnerability"),
        name: "Invulnerability",
        classes: ["Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a small piece of adamantine worth at least 500 gp, which the spell consumes" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You are Immune to all damage except Psychic damage until the spell ends, and you are Resistant to Psychic damage.",
        scalingMd: "",
        imagePath: spellImgUrl("invulnerability")
    },
    {
        slug: slugify("Manipulate Fate"),
        name: "Manipulate Fate",
        classes: ["Wizard"],
        spellLevel: 9,
        school: "Divination",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "60-foot radius (interactions via reaction)",
        tags: ["Homebrew", "Control", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a spool of silk thread" },
        concentration: true,
        ritual: false,
        descriptionMd: "You reach out and grasp the imperceptible threads of fate, subtly manipulating them. Whenever a creature within 60 feet of you makes an attack roll, saving throw, or ability check, you can use your reaction to tweak their fate, altering the value of the roll. You can choose to manipulate fate after the die is rolled, but before the outcome is determined.\n\n" +
            "You can alter the roll of the die to an adjacent number to the number rolled (outcomes listed on the table below).\n\n" +
            "D20 Rolled — Tweaked Fates\n" +
            "1 → 17, 13, 19\n" +
            "2 → 12, 18, 20\n" +
            "3 → 17, 16, 19\n" +
            "4 → 11, 14, 18\n" +
            "5 → 13, 15, 18\n" +
            "6 → 9, 14, 16\n" +
            "7 → 1, 15, 17\n" +
            "8 → 10, 16, 20\n" +
            "9 → 6, 11, 19\n" +
            "10 → 8, 12, 17\n" +
            "11 → 4, 19, 13\n" +
            "12 → 2, 10, 15\n" +
            "13 → 1, 5, 11\n" +
            "14 → 4, 6, 20\n" +
            "15 → 5, 7, 12\n" +
            "16 → 3, 6, 8\n" +
            "17 → 3, 7, 10\n" +
            "18 → 2, 4, 5\n" +
            "19 → 1, 3, 9\n" +
            "20 → 2, 8, 14\n\n" +
            "When you alter a roll, you can choose to cast aside subtly and yank the thread of fate, selecting any value of the d20 as the outcome of the result. The backlash causes you to take a number of d6 equal to the difference between the value selected and the value rolled as Necrotic damage. The spell immediately ends after the result is changed in this more drastic way.", scalingMd: "Editor's Note. The numbers you can pick are the adjacent sides of a d20 to the number rolled. This represents literally nudging the die of fate.",
        imagePath: spellImgUrl("manipulatefate")
    },
    {
        slug: slugify("Phoenix Flames"),
        name: "Phoenix Flames",
        classes: ["Cleric", "Druid", "Sorcerer"],
        spellLevel: 9,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous (self immolation); revival after 10 minutes",
        range: "Self (20 feet)",
        area: "20-foot radius around you",
        tags: ["Grim Hollow", "Damage", "Healing"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Exhaustion (1 level on failed save)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You immolate yourself, consuming your body in a searing cloud of holy flames. After this spell is cast, you are considered Dead and nothing remains of your body. All creatures within 20 feet of you must make a Constitution saving throw or take 30d6 Radiant damage and gain one level of Exhaustion. On a successful save, a creature takes half damage and is not exhausted. If a target is killed by this damage, its body is incinerated.\n\n" +
            "After 10 minutes, you rise from the ashes where you originally cast the spell. You are returned fully to life as if you were affected by a True Resurrection spell.", scalingMd: "",
        imagePath: spellImgUrl("phoenixflames"),
    },
    {
        slug: slugify("Psychic Scream"),
        name: "Psychic Scream",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "90 feet",
        area: "up to ten creatures you can see",
        tags: ["Xanathar's Guide to Everything", "Damage", "Debuff"],
        saveRequired: "INT Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Stunned"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Assault the minds of up to ten creatures you can see (Intelligence 2 or lower are unaffected). On a failed Intelligence save, a target takes 14d6 Psychic damage and is Stunned; on a success, half and not stunned. A Stunned target repeats the save at the end of each of its turns, ending the effect on a success. If a target is killed by this damage, its head explodes (if it has one).",
        scalingMd: "",
        imagePath: spellImgUrl("psychicscream"),
    },
    {
        slug: slugify("Forbidden Sacrament"),
        name: "Forbidden Sacrament",
        classes: ["Warlock", "Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 hour",
        duration: "7 Days",
        range: "150 feet",
        area: "Ritual circle; up to 26 participants",
        tags: ["Dungeons of Drakkenheim", "Summoning", ],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "100 gp of chalk per participant" },
        concentration: false,
        ritual: false,
        descriptionMd: "This spell may only be cast in an area where the lives of over 100 have been lost.\n\n" +
            "You perform a holy ceremony involving up to 26 faithful and willing humanoid creatures that ends when each participating creature chants the mantra and verbal components of this spell while standing in a magical circle drawn with magical chalk.\n\n" +
            "When you finish casting this spell, all the participants other than yourself begin to bleed from all orifices and eventually erupt into flames, their souls consumed and unable to be revived—not even by the Wish spell. You summon a Fiend with a Challenge Rating equal to the number of sacrifices made. This creature lasts for 7 days or until it is killed and cannot be dismissed. It retains all the original stats of the summoned creature, except its total maximum Hit Points become equal to the combined maximum Hit Points of all the sacrificed creatures.\n\n" +
            "If the summoner is killed, or if the summoner or their allies intentionally inflict harm upon the summoned devil, it becomes enraged and is no longer under control.",
        scalingMd: "",
    },
    {
        slug: slugify("Astral Projection"),
        name: "Astral Projection",
        classes: ["Cleric", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Until dispelled",
        range: "10 feet",
        area: "You and up to eight willing creatures",
        tags: ["Player's Handbook", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Unconscious (bodies)"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText:
                "for each target: a jacinth worth 1,000+ gp and a silver bar worth 100+ gp (consumed)"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell ends instantly if you are already on that plane). Each target’s body is left behind in a state of suspended animation; it has the Unconscious condition, doesn’t need food or air, and doesn’t age.\n\n" +
            "A target’s astral form resembles its body in almost every way, replicating its game statistics and possessions. The principal difference is the addition of a silvery cord that trails from between the shoulder blades of the astral form. The cord fades from view after 1 foot. If the cord is cut—which happens only when an effect states that it does so—the target’s body and astral form both die.\n\n" +
            "A target’s astral form can travel through the Astral Plane. The moment an astral form leaves that plane, the target’s body and possessions travel along the silver cord, causing the target to re-enter its body on the new plane.\n\n" +
            "Any damage or other effects that apply to an astral form have no effect on the target’s body and vice versa. If a target’s body or astral form drops to 0 Hit Points, the spell ends for that target. The spell ends for all the targets if you take a Magic action to dismiss it.\n\n" +
            "When the spell ends for a target who isn’t dead, the target reappears in its body and exits the state of suspended animation.",
        scalingMd: "",
        imagePath: spellImgUrl("astral-projection")
    },
    {
        slug: slugify("Foresight"),
        name: "Foresight",
        classes: ["Bard", "Druid", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Divination",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Touch",
        area: "One willing creature",
        tags: ["Player's Handbook", "Buff", "Debuff", "Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a hummingbird feather" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target gains Advantage on all d20 Tests, and attack rolls against it have Disadvantage for the duration. Ends early if you cast Foresight again.",
        scalingMd: "",
        imagePath: spellImgUrl("foresight")
    },
    {
        slug: slugify("Gate"),
        name: "Gate",
        classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "Circular portal (5–20 ft diameter)",
        tags: ["Player's Handbook", "Teleportation", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond worth 5,000+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration, and the portal’s destination is visible through it.\n\n" +
            "The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.\n\n" +
            "Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.\n\n" +
            "When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn’t work). If that creature is on a plane other than the one you are on, the portal opens next to the named creature and transports it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.",
        scalingMd: "",
        imagePath: spellImgUrl("gate")
    },
    {
        slug: slugify("Imprisonment"),
        name: "Imprisonment",
        classes: ["Warlock", "Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "Until dispelled",
        range: "30 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Control", "Warding"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained", "Unconscious (Slumber)"],
        components: {
            verbal: true, somatic: true, material: true,
            materialText: "a statuette of the target worth 5,000+ gp"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create a magical restraint to hold a creature that you can see within range. The target must make a Wisdom saving throw. On a successful save, the target is unaffected, and it is immune to this spell for the next 24 hours. On a failed save, the target is imprisoned. While imprisoned, the target doesn’t need to breathe, eat, or drink, and it doesn’t age. Divination spells can’t locate or perceive the imprisoned target, and the target can’t teleport.\n\n" +
            "Until the spell ends, the target is also affected by one of the following effects of your choice:\n\n" +
            "**Burial.** The target is entombed beneath the earth in a hollow globe of magical force that is just large enough to contain the target. Nothing can pass into or out of the globe.\n\n" +
            "**Chaining.** Chains firmly rooted in the ground hold the target in place. The target has the Restrained condition and can’t be moved by any means.\n\n" +
            "**Hedged Prison.** The target is trapped in a demiplane that is warded against teleportation and planar travel. The demiplane is your choice of a labyrinth, a cage, a tower, or the like.\n\n" +
            "**Minimus Containment.** The target becomes 1 inch tall and is trapped inside an indestructible gemstone or a similar object. Light can pass through the gemstone (allowing the target to see out and other creatures to see in), but nothing else can pass through by any means.\n\n" +
            "**Slumber.** The target has the Unconscious condition and can’t be awoken.\n\n" +
            "**Ending the Spell.** When you cast the spell, specify a trigger that will end it. The trigger can be as simple or as elaborate as you choose, but the DM must agree that it has a high likelihood of happening within the next decade. The trigger must be an observable action, such as someone making a particular offering at the temple of your god, saving your true love, or defeating a specific monster.\n\n" +
            "A Dispel Magic spell can end the spell only if it is cast with a level 9 spell slot, targeting either the prison or the component used to create it.",
        scalingMd: "",
        imagePath: spellImgUrl("imprisonment")
    },
    {
        slug: slugify("Mass Heal"),
        name: "Mass Heal",
        classes: ["Cleric"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "Any number of creatures you can see",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Blinded", "Deafened", "Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Distribute up to 700 HP among creatures in range; also ends Blinded, Deafened, and Poisoned on each creature healed.",
        scalingMd: "",
        imagePath: spellImgUrl("mass-heal")
    },
    {
        slug: slugify("Meteor Swarm"),
        name: "Meteor Swarm",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "1 mile",
        area: "Four 40-foot-radius spheres",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Fire", "Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each of those points makes a Dexterity saving throw. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once.\n\n" +
            "A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area, and the object starts burning if it’s flammable.",
        scalingMd: "",
        imagePath: spellImgUrl("meteor-swarm")
    },
    {
        slug: slugify("Power Word Heal"),
        name: "Power Word Heal",
        classes: ["Bard", "Cleric"],
        spellLevel: 9,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Healing", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed", "Frightened", "Paralyzed", "Poisoned", "Stunned", "Prone"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target regains all HP and ends Charmed, Frightened, Paralyzed, Poisoned, and Stunned. If Prone, it can use its Reaction to stand.",
        scalingMd: "",
        imagePath: spellImgUrl("power-word-heal")
    },
    {
        slug: slugify("Power Word Kill"),
        name: "Power Word Kill",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "If the target has 100 HP or fewer, it dies. Otherwise, it takes 12d12 Psychic.",
        scalingMd: "",
        imagePath: spellImgUrl("power-word-kill")
    },
    {
        slug: slugify("Prismatic Wall"),
        name: "Prismatic Wall",
        classes: ["Bard", "Wizard"],
        spellLevel: 9,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "Wall up to 90×30×1 inch or globe up to 30-ft diameter",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Fire", "Acid", "Lightning", "Poison", "Cold"],
        conditions: ["Blinded", "Restrained", "Petrified"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 30 feet in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect.\n\n" +
            "The wall sheds Bright Light within 100 feet and Dim Light for an additional 100 feet. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the Blinded condition for 1 minute.\n\n" +
            "The wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer’s properties as described in the Prismatic Layers table.\n\n" +
            "The wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. Antimagic Field has no effect on the wall, and Dispel Magic can affect only the violet layer.\n\n" +
            "Prismatic Layers\n" +
            "**1. Red.** Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Additional Effects: Nonmagical ranged attacks can’t pass through this layer, which is destroyed if it takes at least 25 Cold damage.\n" +
            "**2. Orange.** Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Additional Effects: Magical ranged attacks can’t pass through this layer, which is destroyed by a strong wind (such as the one created by Gust of Wind).\n" +
            "**3. Yellow.** Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 60 Force damage.\n" +
            "**4. Green.** Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. Additional Effects: A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.\n" +
            "**5. Blue.** Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 25 Fire damage.\n" +
            "**6. Indigo.** Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. Additional Effects: Spells can’t be cast through this layer, which is destroyed by Bright Light shed by the Daylight spell.\n" +
            "**7. Violet.** Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (DM’s choice). Additional Effects: This layer is destroyed by Dispel Magic.",
        scalingMd: "",
        imagePath: spellImgUrl("prismatic-wall")
    },
    {
        slug: slugify("Shapechange"),
        name: "Shapechange",
        classes: ["Druid", "Wizard"],
        spellLevel: 9,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Shapechanging"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a jade circlet worth 1,500+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You shape-shift into another creature for the duration or until you take a Magic action to shape-shift into a different eligible form. The new form must be of a creature that has a Challenge Rating no higher than your level or Challenge Rating. You must have seen the sort of creature before, and it can’t be a Construct or an Undead.\n\n" +
            "When you cast the spell, you gain a number of Temporary Hit Points equal to the Hit Points of the first form into which you shape-shift. These Temporary Hit Points vanish if any remain when the spell ends.\n\n" +
            "Your game statistics are replaced by the stat block of the chosen form, but you retain your creature type; alignment; personality; Intelligence, Wisdom, and Charisma scores; Hit Points; Hit Point Dice; proficiencies; and ability to communicate. If you have the Spellcasting feature, you retain it too.\n\n" +
            "Upon shape-shifting, you determine whether your equipment drops to the ground or changes in size and shape to fit the new form while you’re in it.",
        scalingMd: "",
        imagePath: spellImgUrl("shapechange")
    },
    {
        slug: slugify("Storm of Vengeance"),
        name: "Storm of Vengeance",
        classes: ["Druid"],
        spellLevel: 9,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "1 mile",
        area: "300-foot-radius cloud",
        tags: ["Player's Handbook", "Damage", "Control", "Debuff"],
        saveRequired: "Constitution, Dexterity",
        attackType: "None",
        damageTypes: ["Thunder", "Acid", "Lightning", "Bludgeoning", "Cold"],
        conditions: ["Deafened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A churning storm cloud forms for the duration, centered on a point within range and spreading to a radius of 300 feet. Each creature under the cloud when it appears must succeed on a Constitution saving throw or take 2d6 Thunder damage and have the Deafened condition for the duration.\n\n" +
            "At the start of each of your later turns, the storm produces different effects, as detailed below.\n\n" +
            "**Turn 2.** Acidic rain falls. Each creature and object under the cloud takes 4d6 Acid damage.\n\n" +
            "**Turn 3.** You call six bolts of lightning from the cloud to strike six different creatures or objects beneath it. Each target makes a Dexterity saving throw, taking 10d6 Lightning damage on a failed save or half as much damage on a successful one.\n\n" +
            "**Turn 4.** Hailstones rain down. Each creature under the cloud takes 2d6 Bludgeoning damage.\n\n" +
            "**Turns 5–10.** Gusts and freezing rain assail the area under the cloud. Each creature there takes 1d6 Cold damage. Until the spell ends, the area is Difficult Terrain and Heavily Obscured, ranged attacks with weapons are impossible there, and strong wind blows through the area.",
        scalingMd: "",
        imagePath: spellImgUrl("storm-of-vengeance")
    },
    {
        slug: slugify("Time Stop"),
        name: "Time Stop",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.\n\n" +
            "This spell ends if one of the actions you use during this period, or any effects that you create during it, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
        scalingMd: "",
        imagePath: spellImgUrl("time-stop")
    },
    {
        slug: slugify("True Polymorph"),
        name: "True Polymorph",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 9,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour (or until dispelled)",
        range: "30 feet",
        area: "One creature or nonmagical object",
        tags: ["Player's Handbook", "Control", "Buff", "Shapechanging"],
        saveRequired: "WIS (unwilling creature)",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true, somatic: true, material: true,
            materialText: "a drop of mercury, gum arabic, and a wisp of smoke"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose one creature or nonmagical object that you can see within range. The creature shape-shifts into a different creature or a nonmagical object, or the object shape-shifts into a creature (the object must be neither worn nor carried). The transformation lasts for the duration or until the target dies or is destroyed, but if you maintain Concentration on this spell for the full duration, the spell lasts until dispelled.\n\n" +
            "An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn’t affected by this spell.\n\n" +
            "Creature into Creature. If you turn a creature into another kind of creature, the new form can be any kind you choose that has a Challenge Rating equal to or less than the target’s Challenge Rating or level. The target’s game statistics are replaced by the stat block of the new form, but it retains its Hit Points, Hit Point Dice, alignment, and personality.\n\n" +
            "The target gains a number of Temporary Hit Points equal to the Hit Points of the new form. These Temporary Hit Points vanish if any remain when the spell ends.\n\n" +
            "The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells.\n\n" +
            "The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment.\n\n" +
            "Object into Creature. You can turn an object into any kind of creature, as long as the creature’s size is no larger than the object’s size and the creature has a Challenge Rating of 9 or lower. The creature is Friendly to you and your allies. In combat, it takes its turns immediately after yours, and it obeys your commands.\n\n" +
            "If the spell lasts more than an hour, you no longer control the creature. It might remain Friendly to you, depending on how you have treated it.\n\n" +
            "Creature into Object. If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object’s size is no larger than the creature’s size. The creature’s statistics become those of the object, and the creature has no memory of time spent in this form after the spell ends and it returns to normal.", scalingMd: "",
        imagePath: spellImgUrl("true-polymorph")
    },
    {
        slug: slugify("True Resurrection"),
        name: "True Resurrection",
        classes: ["Cleric", "Druid"],
        spellLevel: 9,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "Touch",
        area: "One creature dead ≤ 200 years (not of old age)",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true, somatic: true, material: true,
            materialText: "diamonds worth 25,000+ gp (consumed)"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. The creature is revived with all its Hit Points.\n\n" +
            "This spell closes all wounds, neutralizes any poison, cures all magical contagions, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was Undead, it is restored to its non-Undead form.\n\n" +
            "The spell can provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
        scalingMd: "",
        imagePath: spellImgUrl("true-resurrection")
    },
    {
        slug: slugify("Weird"),
        name: "Weird",
        classes: ["Warlock", "Wizard"],
        spellLevel: 9,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "30-foot-radius sphere",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Frightened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You try to create illusory terrors in others’ minds. Each creature of your choice in a 30-foot-radius Sphere centered on a point within range makes a Wisdom saving throw. On a failed save, a target takes 10d10 Psychic damage and has the Frightened condition for the duration. On a successful save, a target takes half as much damage only.\n\n" +
            "A Frightened target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes 5d10 Psychic damage. On a successful save, the spell ends on that target.",
        scalingMd: "",
        imagePath: spellImgUrl("weird")
    },
    {
        slug: slugify("Wish"),
        name: "Wish",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 9,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Creation", "Healing", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "The basic use of this spell is to duplicate any other spell of level 8 or lower. If you use it this way, you don’t need to meet any requirements to cast that spell, including costly components. The spell simply takes effect.\n\n" +
            "Alternatively, you can create one of the following effects of your choice:\n\n" +
            "**Object Creation.** You create one object of up to 25,000 GP in value that isn’t a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space that you can see on the ground.\n\n" +
            "**Instant Health.** You allow yourself and up to twenty creatures that you can see to regain all Hit Points, and you end all effects on them listed in the Greater Restoration spell.\n\n" +
            "**Resistance.** You grant up to ten creatures that you can see Resistance to one damage type that you choose. This Resistance is permanent.\n\n" +
            "**Spell Immunity.** You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours.\n\n" +
            "**Sudden Learning.** You replace one of your feats with another feat for which you are eligible. You lose all the benefits of the old feat and gain the benefits of the new one. You can’t replace a feat that is a prerequisite for any of your other feats or features.\n\n" +
            "**Roll Redo.** You undo a single recent event by forcing a reroll of any die roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a Wish spell could undo an ally’s failed saving throw or a foe’s Critical Hit. You can force the reroll to be made with Advantage or Disadvantage, and you choose whether to use the reroll or the original roll.\n\n" +
            "**Reshape Reality.** You may wish for something not included in any of the other effects. To do so, state your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong.\n\n" +
            "The stress of casting Wish to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a Long Rest, you take 1d10 Necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way.\n\n" +
            "In addition, your Strength score becomes 3 for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days.\n\n" +
            "Finally, there is a 33 percent chance that you are unable to cast Wish ever again if you suffer this stress.",
        scalingMd: "",
        imagePath: spellImgUrl("wish")
    },
    {
  slug: slugify("Enslave"),
  name: "Enslave",
  classes: ["Bard", "Cleric", "Druid", "Paladin", "Wizard"],
  spellLevel: 9,
  school: "Enchantment",
  castingTime: "1 minute",
  duration: "Until dispelled, up to 30 days",
  range: "60 feet",
  area: "1 creature",
  tags: ["Homebrew", "Control", ],
  saveRequired: "Wisdom",
  attackType: "Spell",
  damageTypes: [],
  conditions: ["Charmed"],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "Choose one creature you can see within range. You can target a creature with this spell only if the spell slot you use exceeds the creature’s Challenge Rating (if it has a CR) or the creature’s character level (if it has levels).\n\n" +
    "The target makes a Wisdom saving throw. It has Advantage on this save; if it is bloodied (half its Hit Points or fewer), it doesn’t have Advantage; if it has exactly 1 Hit Point, it has Disadvantage. On a failed save, the target is charmed by you and falls under your absolute sway until the spell ends. A creature that succeeds on the save is unaffected.\n\n" +
    "While charmed in this way, the target obeys your verbal commands (no action required). If you issue no commands, it defends itself but otherwise takes no hostile actions. On your turn, you can take a Magic action to assume direct control of the target until the end of its next turn; you decide its movement, actions, and reactions. After the save is failed, the target doesn’t make additional saving throws due to time passing or taking damage.\n\n" +
    "This spell has no effect on a creature that is immune to the charmed condition. You can have only one creature affected by this spell at a time; if you cast Enslave while another creature is under its effect, you choose whether the new casting fails or the previous effect ends.",
  scalingMd: "",
  imagePath: spellImgUrl("enslave"),
},
{
    slug: slugify("Blade of Disaster"),
    name: "Blade of Disaster",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    spellLevel: 9,
    school: "Conjuration",
    castingTime: "1 bonus action",
    duration: "Concentration, up to 1 minute",
    range: "60 feet",
    area: "5-foot reach (rift within 60 feet)",
    tags: ["Homebrew", "Damage", ],
    saveRequired: "None",
    attackType: "Melee Spell Attack",
    damageTypes: ["Force"],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You create a 3-foot-long, blade-shaped planar rift that lasts for the duration. The rift appears within range in a space of your choice, and you can immediately make up to two melee spell attacks, each one against a creature or object within 5 feet of the rift. On a hit, the target takes 10d6 Force damage. This attack scores a Critical Hit if the number on the d20 is 18 or higher.\n\n" +
        "As a Bonus Action on your later turns, you can move the rift up to 60 feet and repeat the two attacks against a creature or an object within 5 feet of it. You can direct the attacks at the same target or at different ones.\n\n" +
        "The blade can harmlessly pass through any barrier, including ones created by spells like Wall of Force.",
    scalingMd: "",
    imagePath: spellImgUrl("bladeofdisaster")
},
{
    slug: slugify("Blackhole"),
    name: "Blackhole",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 9,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "300 feet",
    area: "15-foot-radius Sphere (event horizon); 120-foot gravity field",
    tags: ["Homebrew", "Damage", "Control", "Debuff", ],
    saveRequired: "Strength",
    attackType: "Spell",
    damageTypes: ["Bludgeoning"],
    conditions: ["Blinded", "Deafened", "Restrained"],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You create a miniature black hole at a point within range. An event horizon forms in a 15-foot radius around that point, blocking anything (including light, sound, and magical effects) from passing through that space without being engulfed into the black hole.\n\n" +
        "When the black hole appears, each creature within 15 feet of the point must make a Strength saving throw to avoid being engulfed. On a successful save, the creature can immediately move up to its Speed to a space outside the event horizon. If it cannot reach a space outside the event horizon, it automatically fails the save and is engulfed.\n\n" +
        "All creatures that are engulfed are compressed into the point at the center of the spell, taking 12d12 Bludgeoning damage at the start of each of their turns while engulfed. Their Speed is 0, and they are Blinded, Deafened, and Restrained while engulfed. As an action, an engulfed creature can attempt to forcibly exit the black hole, making a Strength (Athletics) check against your spell save DC. On a success, it appears in an unoccupied space at the edge of the spell’s effect.\n\n" +
        "All spells, effects, terrain, or items that are not being worn or carried (other than those of Legendary or Artifact rarity) that are engulfed within the event horizon vanish and are destroyed. Magical items of Legendary or Artifact rarity are not destroyed; they reappear on the ground where the sphere was when the spell ends.\n\n" +
        "While the spell persists, any movement away from the black hole within 120 feet of it is treated as difficult terrain. All ranged attacks that pass within 120 feet of the black hole automatically fail. When a creature starts its turn within 120 feet of the black hole, it must succeed on a Strength saving throw or be pulled 30 feet toward the black hole. At the start of your turn, all unattended objects not attached to the ground and weighing less than 1,000 pounds within 120 feet of the black hole are pulled 20 feet toward it.",
    scalingMd: "",
    imagePath: spellImgUrl("blackhole")
},
{
    slug: slugify("Supernova"),
    name: "Supernova",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 9,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "1 mile",
    area: "60-foot-radius Sphere",
    tags: ["Homebrew", "Damage", ],
    saveRequired: "Constitution",
    attackType: "Spell",
    damageTypes: ["Radiant"],
    conditions: ["Blinded"],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You form a fist-sized point of light at a point you can see within range that then explodes into a stellar supernova, unleashing cataclysmic stellar energy. Each creature within a 60-foot radius of that point must make a Constitution saving throw. On a failed save, a creature takes 30d8 Radiant damage and is Blinded for 1 minute. On a successful save, the creature takes half as much damage and isn’t Blinded.\n\n" +
        "A Blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
    scalingMd: "",
    imagePath: spellImgUrl("supernova")
},

];