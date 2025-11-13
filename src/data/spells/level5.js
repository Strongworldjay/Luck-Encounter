import { spellImgUrl, slugify } from "../../features/spells/utils";

export const LEVEL5 = [
    {
        slug: slugify("Aether Storm"),
        name: "Aether Storm",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "10-ft.-radius, 40-ft.-high cylinder",
        tags: ["Control"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a storm of aether erupting from a point within range. When the storm appears, each creature in the area takes 8d4 Force damage (Dexterity save for half).\n\nA creature takes 1d4 Force damage for each 5 feet it moves through the storm. A creature that ends its turn in the storm takes 8d4 Force damage. On your turn, you can move the storm 10 feet in any direction as a bonus action.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 6th level or higher, the damage increases by 1d4 for each slot level above 5th.",
        imagePath: spellImgUrl("aetherstorm")
    },
    {
        slug: slugify("Acid Rain"),
        name: "Acid Rain",
        classes: ["Bard", "Druid", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "300 feet",
        area: "40-ft.-radius, 60-ft.-high cylinder",
        tags: ["Control"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Acid"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Acid rain falls within a 40-foot-radius, 60-foot-high cylinder centered on a point within range. When a creature enters the area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw, taking 6d4 Acid damage on a failed save, or half as much on a success. On a failed save, the creature is also covered in acid.\n\nA creature covered in acid takes 3d4 Acid damage if it ends its turn while still covered. The target or a creature within 5 feet of it can end this ongoing damage by using its action to clear away the acid.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 6th level or higher, the initial damage increases by 1d4 for each slot level above 5th.",
        imagePath: spellImgUrl("acidrain")
    },
    {
        slug: slugify("Birth Sky"),
        name: "Birth Sky",
        classes: ["Cleric", "Druid", "Wizard",],
        spellLevel: 5,
        school: "Divination",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Detection", "Information"],
        saveRequired: "CHA",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You attempt to gaze upon a creature’s star of birth. The target must make a Charisma saving throw. On a failure, its origins are revealed, and you learn all of the creature’s ability scores, skill and saving throw proficiencies, weapon and armor proficiencies, and its alignment.",
        scalingMd: "",
        imagePath: spellImgUrl("birthsky")
    },
    {
        slug: slugify("Blink Step"),
        name: "Blink Step",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self (teleport up to 60 feet)",
        tags: ["Teleportation", "Movement"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport again in this way.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The range increases by 10 feet for every spell slot level above 5th.",
        imagePath: spellImgUrl("blinkstep")
    },
    {
        slug: slugify("Bone Armor"),
        name: "Bone Armor",
        classes: ["Cleric", "Druid", "Paladin", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "20-ft. radius (corpse sweep) and 20-ft. burst (eruption)",
        tags: ["Biomancy"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "the bones of at least one non-animated corpse, which the spell consumes" },
        concentration: false,
        ritual: false,
        descriptionMd: "You draw the bones from all corpses within range, forming a carapace of ribcages and femurs. You gain temporary hit points for each Small or larger corpse wholly or partly within range, according to its size, that last for the duration.\n\n" +
            "As an action on a subsequent turn, you can cause your armour of bones to erupt, expending all remaining temporary hit points. Each other creature within range must make a Dexterity saving throw, taking piercing damage equal to your expended temporary hit points on a failure, or half as much damage on a success. Whatever the manner in which the temporary hit points are lost, the bones shatter and can’t be used in this way again.",
        tableHtml: `
  <div class="rules-table">
    <table>
      <thead>
        <tr>
          <th>Size</th>
          <th>Temporary Hit Points Gained</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Small</td>
          <td>1d6 + 1</td>
        </tr>
        <tr>
          <td>Medium</td>
          <td>1d8 + 2</td>
        </tr>
        <tr>
          <td>Large</td>
          <td>1d10 + 5</td>
        </tr>
        <tr>
          <td>Huge</td>
          <td>1d12 + 12</td>
        </tr>
        <tr>
          <td>Gargantuan</td>
          <td>1d20 + 25</td>
        </tr>
      </tbody>
    </table>
  </div>
`,
        scalingMd:
            "**At Higher Levels.** For each slot level above 5th, the radius increases by 10 feet.",
        imagePath: spellImgUrl("bonearmor")
    },
    {
        slug: slugify("Conjure Anomaly"),
        name: "Conjure Anomaly",
        classes: ["Warlock", "Wizard",],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "Concentration, up to 1 hour",
        range: "90 feet",
        area: "1 aberration (CR 5 or lower)",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an aberration component" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You call forth an aberration from the Anomalies, CR 5 or lower (GM’s choice), in an unoccupied space. It rolls its own initiative, is friendly, and obeys your verbal commands (no action). If given no commands, it defends itself only. If your concentration breaks, it does not disappear—instead it becomes hostile to you and your companions and can’t be dismissed; it vanishes 1 hour after you summoned it.",
        scalingMd:
            "Using a Higher-Level Spell Slot. For each slot level above 5th, the maximum CR increases by 1.",
        imagePath: spellImgUrl("conjureanomaly")
    },
    {
        slug: slugify("Control Winds"),
        name: "Control Winds",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "300 feet",
        area: "100-foot cube",
        tags: ["Control", "Battlefield"],
        saveRequired: "STR",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Prone", "Disadvantage"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell’s duration. You can use a Magic Action while this spell is active on a later turn to switch to a different effect. You can alternatively use a Magic Action to temporarily halt the effect or to restart one you’ve halted.\n\n" +
            "**Gusts.** A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.\n\n" +
            "**Downdraft.** You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.\n\n" +
            "**Updraft.** You cause a sustained updraft within the cube, rising upward from the cube’s bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
        scalingMd: "",
        imagePath: spellImgUrl("controlwinds")
    },
    {
        slug: slugify("Create Thrall"),
        name: "Create Thrall",
        classes: ["Wizard"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "10 minutes",
        duration: "Until dispelled or triggered",
        range: "Touch",
        area: "1 intact humanoid corpse",
        tags: ["Necromancy", "Ritual-like", "Summoning"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Charmed", "Vulnerable"],
        components: { verbal: true, somatic: true, material: true, materialText: "expensive incense worth at least 100 gp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Perform a ritual over an intact humanoid. If its level/CR is 5 or lower, it rises as your thrall: an Undead that can’t regain Hit Points, is vulnerable to Radiant, retains its mind but is under your command and Charmed by you and your allies, retains its stats (but can’t rest or regain features that require rests), doesn’t need food/sleep/drink, and can’t use cleric/paladin class features. It has disadvantage on Charisma checks to interact with humanoids. When it dies, its body turns to magical ash and can’t be revived. You may have only one thrall at a time.",
        scalingMd:
            "Using a Higher-Level Spell Slot. The maximum eligible level/CR increases by 1 per slot level above 5th.",
        imagePath: spellImgUrl("createthrall")
    },
    {
        slug: slugify("Curse of Impotence"),
        name: "Curse of Impotence",
        classes: ["Blood Hunter", "Druid"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Debuff"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "something from the target (blood, hair, or scales), consumed" },
        concentration: true,
        ritual: false,
        descriptionMd: "You curse a creature with overwhelming powerlessness. Whenever the target attempts to attack, cast a damage-dealing spell, or use an action that deals damage, it must make a Wisdom saving throw. On a success, it acts normally. On a failure, it completes the action, but it deals no damage to any target.",
        scalingMd: "",
        imagePath: spellImgUrl("curseofimpotence")
    },
    {
        slug: slugify("Dawn"),
        name: "Dawn",
        classes: ["Cleric", "Druid", "Paladin", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "30-foot-radius, 40-foot-high cylinder (sunlight)",
        tags: ["Damage", "Utility"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a sunburst pendant worth at least 100 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "Brilliant sunlight shines in a 30-foot-radius, 40-foot-high cylinder. When it appears, each creature in it makes a Constitution save, taking 4d10 Radiant damage on a failure, or half on a success. A creature must also save when it ends its turn in the cylinder. If you are within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The damage increases by 1d10 for each slot level above 5th.",
        imagePath: spellImgUrl("dawn")
    },
    {
        slug: slugify("Deglove Creature"),
        name: "Deglove Creature",
        classes: ["Wizard"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous (plus 24 hours control on kill)",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Summoning"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a finger bone" },
        concentration: false,
        ritual: false,
        descriptionMd: "You point at a creature within range and attempt to make its skeleton rip free of its body. The creature must make a Constitution saving throw. The target takes 7d10 Necrotic damage on a failed save, or half as much damage on a successful one.\n\n" +
            "If this damage kills the target creature, its flesh falls off its skeleton, collapsing into a pile, and the skeleton becomes a Skeleton (Basic Rules, pg. 152) under your control for 24 hours as if by the Animate Dead spell.",
        scalingMd: "",
        imagePath: spellImgUrl("deglovecreature")
    },
    {
        slug: slugify("Devouring Darkness"),
        name: "Devouring Darkness",
        classes: ["Warlock", "Wizard"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "20-foot radius",
        tags: ["Damage", "Control", "Sustain"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Dark tendrils burst from you. Creatures of your choice within 20 feet must make a Constitution save. On a failure, a creature takes 6d8 Necrotic damage and you can pull it in a straight line to within 5 feet of you if space is available; on a success, it takes half damage and isn’t moved. You regain hit points equal to one quarter (rounded down) of the total Necrotic damage dealt by this spell.",
        scalingMd: "**At Higher Levels.** The damage increases by 1d8 for each slot level above 5th.",
        imagePath: spellImgUrl("devouringdarkness")
    },
    {
        slug: slugify("Divide Self"),
        name: "Divide Self",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self (30 feet to place duplicate)",
        area: "Self and duplicate",
        tags: ["Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create an exact duplicate of yourself in an empty space you can see within 30 feet of you. When you cast this spell at the start of each of your turns for the duration, you can switch places with your duplicate.\n\n" +
            "The duplicate has all of your stats, abilities, and equipment (including magic items). It acts on your initiative, and has its own actions, though it shares its concentration on this spell, and if either of you lose concentration, the spell ends.\n\n" +
            "Your current hit points are divided between you and the duplicate and shares all other resources and abilities with you (including limited use magic items), with any usage by either you or the duplicate depleting the resource for both of you.\n\n" +
            "Your duplicate can take any action you can take, but it can deal a maximum of 15 damage on its turn (any additional damage dealt deals no further damage, when dealing area of effect damage, damage is split between all targets equally up to the maximum).\n\n" +
            "If either you or the duplicate is reduced to zero hit points, the spell ends and you become the copy that was not reduced to zero hit points. When the spell ends, if both you and the duplicate are still present, decide which is you, and the other vanishes. Anything that was copied during the spell has the copied version vanish.",
        scalingMd: "**Using a Higher-Level Spell Slot.** With a 6th-level slot or higher, both you and the duplicate’s starting hit points increase by 15 (up to, but not exceeding, your current hit points) and the duplicate’s per-turn damage cap increases by 10, for each slot level above 5th.",
        imagePath: spellImgUrl("divideself")
    },
    {
        slug: slugify("Familiar Location"),
        name: "Familiar Location",
        classes: ["Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Unlimited (same plane; familiar required)",
        area: "You and your familiar",
        tags: ["Utility", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You and your summoned, living familiar (on the same plane) **swap places**. If your familiar’s space is too small to contain you, you are shunted to the nearest unoccupied space within 5 feet of the familiar’s location.",
        scalingMd: "",
        imagePath: spellImgUrl("familiarlocation")
    },
    {
        slug: slugify("Field of Reaping"),
        name: "Field of Reaping",
        classes: ["Cleric", "Druid", "Warlock"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "30-foot cube",
        tags: ["Damage", "Sustain"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Cursed (field)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a dried corn husk or wheat hull" },
        concentration: true,
        ritual: false,
        descriptionMd: "A shadowy field reaps escaping life force in a **30-foot cube** at a point within range. A hostile creature in the field when it appears, or that enters for the first time on a turn or ends its turn there, is **cursed** until the end of its next turn. While cursed, the first time it takes damage each turn it takes an extra **1d6 Necrotic**, and one creature of your choice in the field that isn’t cursed by it regains HP equal to that Necrotic damage.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The extra damage increases by 1d6 per slot level above 5th.",
        imagePath: spellImgUrl("fieldofreaping")
    },
    {
        slug: slugify("Field of Stars"),
        name: "Field of Stars",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self (60 feet)",
        area: "Up to 5 star-like motes (10 ft. apart)",
        tags: ["Damage", "Control"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create **5 motes** of star-light at points you can see within 60 feet (each at least 10 feet from any other). Each sheds bright light 10 ft./dim 10 ft. If a creature moves within **5 feet** of a mote or ends its turn there, the mote detonates; creatures within 5 feet make a Dexterity save, taking **4d12 Radiant** on a failure, or half on a success, then the mote disappears. As an action, you can **rearrange** remaining motes anywhere within range (this movement can’t cause detonation).",
        scalingMd: "**At Higher Levels.** With a slot of 6th level or higher, the range increases by 10 feet and you create **one additional mote** per slot level above 5th.",
        imagePath: spellImgUrl("fieldofstars")
    },
    {
        slug: slugify("Fissure"),
        name: "Fissure",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (60-foot line)",
        area: "60-foot-long, 5-foot-wide line (ground 10+ ft. deep)",
        tags: ["Damage"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Buried (rubble)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You rend the ground in a **60-foot line** (5 feet wide) through at least 10 feet of dirt, sand, or rock. Creatures in the line make a Dexterity save. On a failure, a creature falls into the sudden crevice as it snaps shut, taking **6d10 Bludgeoning** damage and becoming **buried in 10 feet of rubble**. Creatures without a burrow speed need **25 feet of movement** to extract themselves back to their failure space, and they take **1d10 Bludgeoning** at the end of any turn they remain buried.",
        scalingMd: "",
        imagePath: spellImgUrl("fissure")
    },
    {
        slug: slugify("Flickering Strikes"),
        name: "Flickering Strikes",
        classes: ["Ranger", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (30 feet)",
        area: "Up to 5 creatures within 30 feet",
        tags: ["Damage", "Mobility"],
        saveRequired: "None",
        attackType: "Melee Weapon Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee weapon you are proficient with worth at least 1 sp" },
        concentration: false,
        ritual: false,
        descriptionMd: "You flourish a weapon and vanish, instantly teleporting to strike up to five targets within 30 feet. Make a melee weapon attack against each. On a hit, the target takes normal weapon damage **+ 6d6 Force**. Then you can teleport to an unoccupied space within 5 feet of any target you attacked.",
        scalingMd: "",
        imagePath: spellImgUrl("flickeringstrikes")
    },
    {
        slug: slugify("Forced Mortality"),
        name: "Forced Mortality",
        classes: ["Sorcerer", "Wizard",],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "1 creature (Aberration, Celestial, Elemental, Fey, or Fiend)",
        tags: ["Sangromancy", "Debuff"],
        saveRequired: "CHA",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a gem-encrusted humanoid skull worth 200+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend five Hit Point Dice or the spell automatically fails. Roll the Hit Point Dice expended, then choose an Aberration, Celestial, Elemental, Fey, or Fiend within range and condemn it to a taste of mortality. The creature must succeed on a Charisma saving throw or its Hit Point maximum and current Hit Points are reduced by the amount rolled on the Hit Point Dice expended to cast the spell.\n\n" +
            "For the duration of the spell, a creature that fails the saving throw loses all damage Immunities and Resistances, its creature type changes to Humanoid, and it takes an additional 1d4 Necrotic damage each time it takes damage.\n\n" +
            "If a creature affected by this spell is reduced to 0 Hit Points, these changes become permanent and the creature dies. This final effect of the spell can only be reversed if the creature is restored to life and targeted by a Remove Curse spell or similar magic.",
        scalingMd: "",
        imagePath: spellImgUrl("forcedmortality")
    },
    {
        slug: slugify("Immolation"),
        name: "Immolation",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "1 creature",
        tags: ["Damage"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: ["Burning (ongoing damage; sheds light)"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 Fire damage on a failed save, or half as much on a success. On a failed save, the target also burns for the spell’s duration, shedding bright light in a 30-foot radius and dim light for 30 more. At the end of each of its turns, the target repeats the save, taking 4d6 Fire damage on a failure; the spell ends on a success. These magical flames can’t be extinguished by nonmagical means. If damage from this spell kills a target, it is turned to ash.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The initial and ongoing damage each increase by 1d6 for every two slot levels above 5th.",
        imagePath: spellImgUrl("immolation")
    },
    {
        slug: slugify("Internal Immolation"),
        name: "Internal Immolation",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self (melee spell attack each turn)",
        tags: ["Biomancy", "Damage", "Mobility", "Sustain"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a red hot chili pepper, which the spell consumes" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You link your soul to the Elemental Plane of Fire. Your skin smolders. Immediately make a melee spell attack against a creature within reach; on a hit, it takes 6d6 Fire damage. Until the spell ends, you can use a Magic action on subsequent turns to repeat the attack. Your walking speed increases by 15 feet, and you gain 2d6 Temporary Hit Points at the start of each of your turns.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 5th.",
        imagePath: spellImgUrl("internalimmolation")
    },
    {
        slug: slugify("Intrepid Hero"),
        name: "Intrepid Hero",
        classes: ["Bard", "Cleric", "Paladin"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Immune to Frightened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A willing creature you touch is imbued with bravery. It is Immune to the Frightened condition, its walking speed increases by 10 feet, and it gains Temporary Hit Points at the start of each of its turns equal to the spell’s slot level + your spellcasting modifier.",
        scalingMd: "",
        imagePath: spellImgUrl("intrepidhero")
    },
    {
        slug: slugify("Killing Curse"),
        name: "Killing Curse",
        classes: ["Blood Hunter"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Curse", "Damage", "Debuff"],
        saveRequired: "CHA",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: ["No natural healing (see text)", "Death save results count as 1"],
        components: { verbal: true, somatic: true, material: true, materialText: "a token from the target (blood, hair, or scales), which the spell consumes" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You curse a target to die. Its current and maximum hit points are reduced by 3d10 + 10. If this reduces it to 0 HP, it dies. For the duration, the target cannot regain hit points unless from a spell cast with a higher-level slot than this spell, and any death saving throw it rolls is treated as a natural 1. When you cast this spell and at the start of each of the target’s turns, it makes a Charisma saving throw. On a failure, its current and maximum hit points are reduced by 1d10 + 10. On a success, the spell ends. Maximum hit points are restored after a long rest.",
        scalingMd: "",
        imagePath: spellImgUrl("killingcurse")
    },
    {
        slug: slugify("Form of Venom"),
        name: "Form of Venom",
        classes: ["Druid", "Ranger"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self (15-foot line option)",
        area: "Self; 15-foot line (Magic action)",
        tags: ["Buff", "Damage", "Control"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Poison"],
        conditions: ["Poisoned (line, on failed save)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "Until the spell ends, your veins bulge and become visibly green beneath your skin, your eyes weep constantly with liquid poison, and you gain the following benefits:\n\n" +
            "You are Immune to Poison damage and the Poisoned condition.\n\n" +
            "You can determine if creatures you can see within 30 feet of you have Resistance or Immunity to Poison damage or Immunity to the Poisoned condition.\n\n" +
            "As a Bonus Action, choose a creature you can see within 30 feet of you. That creature makes a Constitution saving throw against your spell save DC. On a failed save, the creature loses Resistance to Poison damage, Immunity to Poison damage, or Immunity to the Poisoned condition until the end of your next turn, you choose when you use this ability.\n\n" +
            "As a Magic action, a Line of venom 15 feet long and 5 feet wide blasts from you in a direction you choose. Each creature in the Line must make a Constitution saving throw. On a failed save, the creature takes 4d6 Poison damage and has the Poisoned condition until the end of your next turn. On a successful save, the creature takes half as much damage only.",
        scalingMd: "",
        imagePath: spellImgUrl("formofvenom")
    },
    {
        slug: slugify("Lucky Charm"),
        name: "Lucky Charm",
        classes: ["Bard", "Paladin", "Ranger", "Warlock"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 Tiny nonmagical object",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Advantage/Disadvantage trade (see text)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a four-leaf clover and a shard of broken mirror" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You infuse a Tiny, nonmagical object with a portion of your luck. **While another creature carries the object, that creature has Advantage on d20 Tests, and you have Disadvantage on d20 Tests.**",
        scalingMd: "",
        imagePath: spellImgUrl("luckycharm")
    },
    {
        slug: slugify("Maelstrom"),
        name: "Maelstrom",
        classes: ["Druid"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "30-foot-radius, 5-foot-deep mass of water",
        tags: ["Damage", "Control"],
        saveRequired: "STR",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Difficult Terrain", "Pulled 10 feet toward center (on failed save)"],
        components: { verbal: true, somatic: true, material: true, materialText: "paper or leaf in the shape of a funnel" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a swirling mass of water at a point you can see on the ground or in a body of water. The 30-foot-radius, 5-foot-deep area is **difficult terrain**. A creature that starts its turn there or enters it must make a Strength save or take **6d6 Bludgeoning** damage and be **pulled 10 feet** toward the center (half damage and no pull on a success).",
        scalingMd: "",
        imagePath: spellImgUrl("maelstrom")
    },
    {
        slug: slugify("Magic Mirror"),
        name: "Magic Mirror",
        classes: ["Sorcerer"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "Self",
        area: "Self; redirects to a creature within 60 feet",
        tags: ["Defense"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a polished silver marble" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "**Trigger:** You are targeted by a spell. A bubble of iridescent energy shimmers between you and your foe and you redirect the spell to a creature you can see within 60 feet. If the triggering spell is level **5 or lower**, you are no longer a target and the chosen creature is instead. If the spell is **6th level or higher**, make an ability check using your spellcasting ability (DC **10 + the spell’s level**). On a success, the spell targets the chosen creature instead; on a failure, you remain the target.",
        scalingMd: "",
        imagePath: spellImgUrl("magicmirror")
    },
    {
        slug: slugify("Martial Steel Wind Strike"),
        name: "Martial Steel Wind Strike",
        classes: ["Ranger", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "Up to 5 creatures",
        tags: ["Teleportation", "Damage", "Combat"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee weapon worth at least 1 sp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You flourish the weapon used to cast the spell and vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target; on a hit, a target takes **6d10 Force** damage. You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed.",
        scalingMd: "",
        imagePath: spellImgUrl("martialsteelwindstrike")
    },
    {
        slug: slugify("Mirrored Agony"),
        name: "Mirrored Agony",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature (the triggerer)",
        tags: ["Damage", "Protection"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pin or needle" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "**Trigger:** A creature you can see within **60 ft** damages your ally. The creature makes a Wisdom save, taking **Psychic damage equal to the damage it just dealt** on a failed save, or **half as much** on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("mirroredagony"),
    },
    {
        slug: slugify("Portal"),
        name: "Portal",
        classes: ["Bard", "Sorcerer", "Wizard",],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "Self",
        area: "Self or 1 Tiny object",
        tags: ["Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "This spell creates a portal large enough just for you, when you step through the portal it instantly transports you, or a single object that you can see within range, to a destination you select and the portal instantly closes. If you target an object, it must be of the tiny size or smaller.\n\n" +
            "The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The GM rolls d100 and consults the table.\n\n" +
            "Familiarity. \"Permanent circle\" means a permanent teleportation circle whose sigil sequence you know. \"Associated object\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb.\n\n" +
            "\"Very familiar\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. \"Seen casually\" is someplace you have seen more than once but with which you aren't very familiar. \"Viewed once\" is a place you have seen once, possibly using magic. \"Description\" is a place whose location and appearance you know through someone else's description, perhaps from a map. \"False destination\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.\n\n" +
            "On Target. You (or the target object) appear where you want to.\n\n" +
            "Off Target. You (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 × 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The GM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.\n\n" +
            "Similar Area. You (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.\n\n" +
            "Mishap. The spell's unpredictable magic results in a difficult journey. You (or the target object) take 3d10 force damage, and the GM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).",
        tableHtml: `
  <div class="rules-table">
    <table>
      <thead>
        <tr>
          <th>Familiarity</th>
          <th>Mishap</th>
          <th>Similar Area</th>
          <th>Off Target</th>
          <th>On Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Permanent circle</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>01–100</td>
        </tr>
        <tr>
          <td>Associated object</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>01–100</td>
        </tr>
        <tr>
          <td>Very familiar</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>01–100</td>
        </tr>
        <tr>
          <td>Seen casually</td>
          <td>01–33</td>
          <td>34–43</td>
          <td>44–53</td>
          <td>54–100</td>
        </tr>
        <tr>
          <td>Viewed once</td>
          <td>01–43</td>
          <td>44–53</td>
          <td>54–73</td>
          <td>74–100</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>01–43</td>
          <td>44–53</td>
          <td>54–73</td>
          <td>74–100</td>
        </tr>
        <tr>
          <td>False destination</td>
          <td>01–50</td>
          <td>51–100</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
`,
        scalingMd: "",
        imagePath: spellImgUrl("portal"),
    },
    {
        slug: slugify("Pressure Cutter"),
        name: "Pressure Cutter",
        classes: ["Druid", "Sorcerer", "Wizard",],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (60 feet)",
        area: "60-foot line, 5 feet wide",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A razor jet of pressurized water cleaves a **60-ft by 5-ft** line. Creatures in the line make a Dexterity save, taking **10d6 Slashing** damage on a failure, or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 6th level or higher, damage increases by **1d6** per slot level above 5th.",
        imagePath: spellImgUrl("pressurecutter"),
    },
    {
        slug: slugify("Promise of Vengeance"),
        name: "Promise of Vengeance",
        classes: ["Warlock", "Wizard",],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "10 feet",
        area: "1 humanoid corpse",
        tags: ["Creation", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target a **humanoid corpse** slain by another. It rises as a **Zombie of Vengeance** or **Skeletal Avenger** (as appropriate) under your control for **7 days**. If you fail to slay its killer in time, the body turns to ash and an **Avenging Wraith** rises, **hostile to you**. You can control only **one** such creature at a time.",
        scalingMd: "",
        imagePath: spellImgUrl("promiseofvengeance"),
    },
    {
        slug: slugify("Pull of Singularity"),
        name: "Pull of Singularity",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1 creature near the node",
        tags: ["Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a small magnet" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create a tiny gravity node at a point you see within range, then choose a creature within **120 ft** of it. The target is **pulled in a straight line** to the node’s space (STR save negates), then the node vanishes. The target has **resistance to falling damage** until the start of its next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 6th level or higher, target **one additional creature** per slot level above 5th, pulled to the **same** node.",
        imagePath: spellImgUrl("pullofsingularity"),
    },
    {
        slug: slugify("Riot Rampage"),
        name: "Riot Rampage",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "Any number of creatures you choose that can see you",
        tags: ["Control", "Charmed"],
        saveRequired: "WIS Save (advantage if you’re fighting it)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed (Friendly; compels unarmed attacks vs nearest non-allies)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a red handkerchief" },
        concentration: true,
        ritual: false,
        descriptionMd: "When you cast this spell, you wave the red handkerchief used as the material component and choose any number of creatures within range that can see you. Each chosen creature makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you and your allies. While Charmed, it must use its action to make Unarmed Strikes against the nearest creature (other than you or your allies) or use its turn to move toward the nearest target.\n\n" +
            "At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("riotrampage"),
    },
    {
        slug: slugify("Shroud of Shadow"),
        name: "Shroud of Shadow",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self (20 feet)",
        area: "Up to six creatures of your choice",
        tags: ["Invisible"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible (see description)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You exude a wave of shadowy mist that envelops up to six targets of your choice within a 20 foot radius. All of the effected creature's gain the invisible condition and their walking speed increases by 10 ft. for the duration. The spell ends early immediately after an affected creature makes an attack roll, deals damage, or casts a spell. If you fail a concentration check on this spell or a creature ends its invisibility voluntarily or accidentally every creature effected by this spell loses invisibility.",
        scalingMd: "",
        imagePath: spellImgUrl("shroudofshadow"),
    },
    {
        slug: slugify("Sky Burst"),
        name: "Sky Burst",
        classes: ["Druid", "Sorcerer",],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "Five 5-foot-radius points (creatures within 5 feet)",
        tags: ["Damage"],
        saveRequired: "DEX Save (half on success)",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Call down **five lightning bolts** at points you choose within range. Creatures within **5 ft** of each point make a **DEX save**; on a fail, they take **4d12 Lightning**, or **half** on a success. A creature in overlapping areas is affected **only once**.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each slot level above 5th, call **one additional bolt**.",
        imagePath: spellImgUrl("skyburst"),
    },
    {
        slug: slugify("Spirit Projection"),
        name: "Spirit Projection",
        classes: ["Cleric", "Warlock"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Self",
        area: "Self",
        tags: [],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: true, materialText: "a sentimental personal item (≥ 1 sp)" },
        concentration: false,
        ritual: false,
        descriptionMd: "When you cast this spell, you drop to 0 Hit Points and die. At the start of your next turn, you become a Ghost occupying the same space as your corpse. Your game statistics are replaced by the Ghost’s stat block, but you retain your Hit Points; Hit Point Dice; Intelligence, Wisdom, and Charisma scores; and languages.\n\n" +
            "While you are a Ghost, you can only use abilities detailed in the Ghost’s stat block. In addition, you add your Proficiency Bonus to your attack rolls and the DC of your Ghost abilities.\n\n" +
            "Your GM secretly rolls 1d8 when you cast the spell. After a number of hours equal to the number rolled, the spell ends. The spell ends early if you are reduced to 0 Hit Points as a Ghost or you take the Magic action to end the spell. If the material component used to cast this spell remains on your corpse, you return to life with a number of Hit Points equal to half your Hit Point maximum. If the material component used to cast this spell is no longer on your corpse, you make Death Saving Throws as normal.\n\n" +
            "If your body is destroyed or damaged beyond the capacity to survive while you are under the effects of this spell, its duration becomes permanent and you remain a Ghost until you are reduced to 0 Hit Points or your body is targeted by an effect that returns the living to the dead such as Raise Dead or Resurrection.",
        scalingMd: "",
        imagePath: spellImgUrl("spiritprojection"),
    },
    {
        slug: slugify("Splattering Smite"),
        name: "Splattering Smite",
        classes: ["Paladin", "Blood Hunter"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 reaction",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Sangromancy"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "Your strikes drink the splattered blood of your foes. As part of casting this spell, you must expend five Hit Dice or the spell automatically fails. Once on each of your turns when you hit a creature with an attack roll using a Melee weapon or Unarmed Strike, roll the Hit Point Dice expended to cast the spell and regain a number of Hit Points equal to the numbered rolled.",
        scalingMd: "",
        imagePath: spellImgUrl("splatteringsmite"),
    },
    {
        slug: slugify("Sonic Shriek"),
        name: "Sonic Shriek",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (120 feet)",
        area: "120-foot cone",
        tags: ["Damage"],
        saveRequired: "CON Save (half; auto-success if >60 ft)",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: ["Deafened (on failed save)"],
        components: { verbal: true, somatic: true, material: true, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You emit a sonic blast covering a huge area. Each creature in a 120-foot cone must make a Constitution saving throw. On a failed save, a creature takes 6d8 thunder damage and is deafened. On a successful save, a creature takes half as much damage and no additional effects. A creature automatically succeeds on its saving throw if it is more than 60 feet from you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** **+1d8** damage per slot above 5th.",
        imagePath: spellImgUrl("sonicshriek"),
    },
    {
        slug: slugify("Spirit Swarm"),
        name: "Spirit Swarm",
        classes: ["Cleric", "Druid", "Wizard"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "CHA Save (half on success)",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Frightened (on failed save)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You invite spirits to take their revenge upon a target. A creature you can see within range must make a Charisma saving throw. The target must have a Charisma of 3 or higher. On a failed save, the target takes 8d8 Psychic damage and has the Frightened condition until the spell ends. On a successful save, the creature takes half as much damage only.",
        scalingMd: "",
        imagePath: spellImgUrl("spiritswarm"),
    },
    {
        slug: slugify("Temporal Shunt"),
        name: "Temporal Shunt",
        classes: ["Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 reaction",
        duration: "1 round",
        range: "120 feet",
        area: "1 creature",
        tags: ["Banishment", "Dunamancy"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You target the triggering creature, which must succeed on a Charisma saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn’t remember you casting the spell or being affected by it.\n\n*Trigger:* taken when a creature you can see makes an attack roll or starts to cast a spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of **6th level or higher**, you can target **one additional creature** for each slot level above 5th. All targets must be within **30 feet** of each other."
    },
    {
        slug: slugify("Tornado"),
        name: "Tornado",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "20-foot-radius, 40-foot-high cylinder",
        tags: ["Damage", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A whirling tornado erupts, filling a **20-foot-radius, 40-foot-high cylinder** centered on a point within range.\n\nAny creature that starts its turn within the tornado must make a Strength saving throw. On a failed save, the creature takes **4d8 Bludgeoning** damage and is pulled in and **40 feet up**. On a successful save, the creature takes half as much damage and isn't pulled in. A creature repeats the saving throw at the end of each of their turns taking an additional **4d8 Bludgeoning** damage on a failure. If a creature succeeds this saving throw while already trapped within they are launched **10 feet** out of the tornado and fall **40 feet**.\n\nAs a bonus action, you can move the tornado up to **30 feet** in any direction. Any ranged weapon attack against a target within **20 feet** of the tornado has disadvantage, and any ranged attack that passes through it automatically misses.",
        scalingMd: ""
    },
    {
        slug: slugify("Vital Surge"),
        name: "Vital Surge",
        classes: ["Cleric"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of a cloth bandage" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a creature within range. The creature has a surge of healing vitality course throughout their body. At the start of each of the effected creature's turn, they heal **2d8** and for the duration of the spell their movement speed is increased by **10 ft**.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The healing increases by **1d8** for each spell slot level above 5."
    },
    {
        slug: slugify("Vorpal Shot"),
        name: "Vorpal Shot",
        classes: ["Artificer", "Ranger"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Touch",
        area: "1 piece of ammunition or thrown weapon",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a piece of ammunition or weapon with the thrown property, imbuing it with the ultimate edge. The first time a creature attacks with the empowered item, it adds **+3** to attack and damage rolls, and ignores all resistances and immunities to the weapon’s damage type. On a hit, the creature takes **6d8** additional damage. If this damage reduces the target to zero hit points, it is killed by a mortal wound.\n\nOnce an attack has been made with the piece of ammunition or weapon, the spell ends.",
        scalingMd: ""
    },
    {
        slug: slugify("Vorpal Weapon"),
        name: "Vorpal Weapon",
        classes: ["Artificer", "Paladin"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 weapon",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a weapon worth atleast 1 cp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You touch a weapon and imbue it with power. Until the spell ends, the weapon becomes indescribably sharp, ignoring resistance to slashing damage, and gains the **Siege** property, dealing double damage to inanimate objects such as structures. If a weapon has a modifier of less than **+3** to attack and damage rolls, its modifier becomes **+3** to attack and damage rolls for the duration of the spell.\n\nAdditionally, if a critical strike of this weapon would leave a creature with less than **50 hit points**, the target creature is decapitated, killing it.",
        scalingMd: ""
    },
    {
        slug: slugify("Animate Objects"),
        name: "Animate Objects",
        classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "Up to your ability modifier objects",
        tags: ["Creation", "Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose nonmagical, unattended objects in range that aren’t fixed and aren’t Gargantuan, up to a total number equal to your **spellcasting ability modifier** (Medium or smaller = 1 object; **Large = 2**; **Huge = 3**). Each animates into a Construct using the **Animated Object** stat block and acts on your initiative (immediately after you). As a **Bonus Action**, command any you created within **500 feet** (you can issue the same command to all). If you issue no command, they **Dodge** and avoid harm. A creature reduced to **0 HP** reverts to object form, carrying over excess damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Each creature’s **Slam** damage increases by **1d4** (Medium or smaller), **1d6** (Large), or **1d12** (Huge) per slot level above 5.\n\n**Animated Object (summary).** AC **15**; HP **10** (Med/smaller), **20** (Large), **40** (Huge); Speed **30 ft.**; Stats STR 16, DEX 10, CON 10, INT 3, WIS 3, CHA 1; **Immunities** Poison, Psychic; **Condition Immunities** Charmed, Exhaustion, Frightened, Paralyzed, Poisoned; **Blindsight 30 ft.**; understands your languages. **Slam**: melee attack using your spell attack; Hit = **1d4+3** Force (Med/smaller), **2d6+3+ability mod** Force (Large), **2d12+3+ability mod** Force (Huge).",
        imagePath: spellImgUrl("animateobjects")
    },
    {
        slug: slugify("Antilife Shell"),
        name: "Antilife Shell",
        classes: ["Druid"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Self (10 feet)",
        area: "10-foot emanation",
        tags: ["Control", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "An aura extends **10 feet** from you. **Creatures other than Constructs and Undead** can’t pass or reach through it. They can still cast spells or make **ranged/reach** attacks through the barrier. If you move so a creature would be forced through the barrier, the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("antilifeshell")
    },
    {
        slug: slugify("Awaken"),
        name: "Awaken",
        classes: ["Bard", "Druid"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "8 hours",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 Beast/Plant or natural plant",
        tags: ["Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: true, materialText: "an agate worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Trace pathways in a gemstone, then touch a target **Beast or Plant creature (INT ≤ 3)**, or a **natural plant**. The target gains **INT 10** and can **speak one language** you know. A natural plant becomes a **Plant creature** with motile limbs and senses; DM chooses appropriate statistics (e.g., *awakened shrub/tree*). The awakened target is **Charmed** by you for **30 days** or until you or your allies damage it; when this ends, it chooses its attitude toward you.",
        scalingMd: "",
        imagePath: spellImgUrl("awaken")
    },
    {
        slug: slugify("Banishing Smite"),
        name: "Banishing Smite",
        classes: ["Paladin"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Damage", "Control", "Banishment"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: ["Incapacitated"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Your next hit with a **melee weapon or Unarmed Strike** deals an extra **5d10 Force**. If this reduces the target to **50 HP or fewer**, it must make a **Charisma** save or be sent to a **harmless demiplane** for the duration and is **Incapacitated** there. When the spell ends, it reappears where it left (or nearest unoccupied space).",
        scalingMd:
            "*Cast immediately after hitting a creature.*",
        imagePath: spellImgUrl("banishingsmite")
    },
    {
        slug: slugify("Bigby's Hand"),
        name: "Bigby's Hand",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "Large spectral hand",
        tags: ["Damage", "Control"],
        saveRequired: "Varies",
        attackType: "Melee/Ranged Spell Attack",
        damageTypes: ["Force", "Bludgeoning"],
        conditions: ["Grappled"],
        components: { verbal: true, somatic: true, material: true, materialText: "an eggshell and a glove" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a Large hand of shimmering magical energy in an unoccupied space that you can see within range. The hand lasts for the duration, and it moves at your command, mimicking the movements of your own hand.\n\n" +
            "The hand is an object that has AC 20 and Hit Points equal to your Hit Point maximum. If it drops to 0 Hit Points, the spell ends. The hand doesn’t occupy its space.\n\n" +
            "When you cast the spell and as a Bonus Action on your later turns, you can move the hand up to 60 feet and then cause one of the following effects:\n\n" +
            "**Clenched Fist.** The hand strikes a target within 5 feet of it. Make a melee spell attack. On a hit, the target takes 5d8 Force damage.\n\n" +
            "**Forceful Hand.** The hand attempts to push a Huge or smaller creature within 5 feet of it. The target must succeed on a Strength saving throw, or the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target, remaining within 5 feet of it.\n\n" +
            "**Grasping Hand.** The hand attempts to grapple a Huge or smaller creature within 5 feet of it. The target must succeed on a Dexterity saving throw, or the target has the Grappled condition, with an escape DC equal to your spell save DC. While the hand grapples the target, you can take a Bonus Action to cause the hand to crush it, dealing Bludgeoning damage to the target equal to 4d6 plus your spellcasting ability modifier.\n\n" +
            "**Interposing Hand.** The hand grants you Half Cover against attacks and other effects that originate from its space or that pass through it. In addition, its space counts as Difficult Terrain for your enemies.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** **Clenched Fist** damage +**2d8** and **Grasping Hand crush** damage +**2d6** per slot above 5.",
        imagePath: spellImgUrl("bigbyshand")
    },
    {
        slug: slugify("Circle of Power"),
        name: "Circle of Power",
        classes: ["Cleric", "Paladin", "Wizard"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self (30 feet)",
        area: "30-foot emanation",
        tags: ["Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "An aura radiates **30 ft.** from you. You and allies in the aura have **Advantage on saves** against spells and magical effects. If such an effect allows **half damage on a success**, an affected creature instead takes **no damage** on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("circleofpower")
    },
    {
        slug: slugify("Cloudkill"),
        name: "Cloudkill",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "120 feet",
        area: "20-foot-radius sphere",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A **20-foot-radius** sphere of yellow-green fog appears; the area is **Heavily Obscured**. Each creature in it makes a **Constitution** save, taking **5d8 Poison** on a failure or half on a success. A creature must also save when the sphere **moves into its space**, **enters** it, or **ends its turn** there (max **once per turn**). The sphere **moves 10 ft. away from you** at the start of each of your turns. Strong wind (e.g., *gust of wind*) disperses it, ending the spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by **1d8** per slot above 5.",
        imagePath: spellImgUrl("cloudkill")
    },
    {
        slug: slugify("Commune"),
        name: "Commune",
        classes: ["Cleric"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "1 minute",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "incense" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Contact a deity or divine proxy and ask **up to three yes/no questions** before the spell ends. You receive **correct answers**; if beyond the deity’s knowledge, the answer may be **“unclear.”** If a one-word answer would mislead, the DM may give a short phrase. Casting more than once before a **Long Rest** adds a **cumulative 25%** chance of **no answer** after the first.",
        scalingMd: "",
        imagePath: spellImgUrl("commune")
    },
    {
        slug: slugify("Commune with Nature"),
        name: "Commune with Nature",
        classes: ["Druid", "Ranger"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "Self",
        area: "Up to 3 miles (or 300 ft. underground)",
        tags: ["Utility", "Environment", "Exploration", "Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Gain knowledge from nature spirits about the surrounding area — **3 miles outdoors**, or **300 ft.** in caves/underground. Doesn’t function where nature is replaced by construction. Choose **three facts** to learn (e.g., **settlements**, **portals**, **one CR 10+** Celestial/Elemental/Fey/Fiend/Undead location, most prevalent **plant/mineral/Beast**, **bodies of water**).",
        scalingMd: "",
        imagePath: spellImgUrl("communewithnature")
    },
    {
        slug: slugify("Cone of Cold"),
        name: "Cone of Cold",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (60 feet)",
        area: "60-foot cone",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Cold"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a small crystal or glass cone" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Blast a **60-foot cone** of frigid air. Creatures make a **Constitution** save, taking **8d8 Cold** on a failure or half on a success. A creature **killed** by this spell becomes a **frozen statue** until it thaws.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +**1d8** per slot above 5.",
        imagePath: spellImgUrl("coneofcold")
    },
    {
        slug: slugify("Conjure Elemental"),
        name: "Conjure Elemental",
        classes: ["Druid", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "60 feet",
        area: "Large elemental spirit",
        tags: ["Summoning"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Lightning", "Thunder", "Fire", "Cold"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Conjure a **Large, intangible elemental spirit** in an unoccupied space. Choose **Air (Lightning)**, **Earth (Thunder)**, **Fire (Fire)**, or **Water (Cold)**. When a creature you can see **enters** the spirit’s space or **starts its turn within 5 ft.** and the spirit has no one **Restrained**, you can force a **DEX save**; on a fail, the target takes **8d8** of the spirit’s damage type and becomes **Restrained** until the spell ends. At the start of each of its turns, the target repeats the save: on a **fail** it takes **4d8** more; on a **success** it is no longer Restrained.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by **1d8** per slot above 5.",
        imagePath: spellImgUrl("conjureelemental")
    },
    {
        slug: slugify("Conjure Volley"),
        name: "Conjure Volley",
        classes: ["Ranger"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "40-foot-radius, 20-foot-high cylinder",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee or ranged weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Brandish the casting weapon and choose a point in range. **Spectral weapons/ammo** rain in a **40-foot-radius, 20-foot-high** cylinder. Each creature of your choice in the area makes a **Dexterity** save, taking **8d8 Force** on a fail or half on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("conjurevolley")
    },
    {
        slug: slugify("Contact Other Plane"),
        name: "Contact Other Plane",
        classes: ["Warlock", "Wizard"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "1 minute",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Communication", "Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Incapacitated"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Mentally contact an extraplanar intelligence. When you cast, make a **DC 15 Intelligence** saving throw. On a **success**, ask **up to five questions**; the entity answers with one word (or a brief phrase if a single word would be misleading). On a **failure**, you take **6d6 Psychic** damage and are **Incapacitated** until you finish a **Long Rest** (or until **greater restoration** ends the effect).",
        scalingMd: "",
        imagePath: spellImgUrl("contactotherplane")
    },
    {
        slug: slugify("Contagion"),
        name: "Contagion",
        classes: ["Cleric", "Druid"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "7 days",
        range: "Touch",
        area: "1 creature",
        tags: ["Debuff"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Your touch inflicts a magical disease. The target makes a **Constitution** save or takes **11d8 Necrotic** and is **Poisoned**. Choose one ability; while Poisoned, the target has **Disadvantage on saves** using that ability. At the end of each of its turns, it repeats the save until it gets **three successes** (spell ends) or **three failures** (spell lasts **7 days**). If an effect would end **Poisoned**, the target must make a **CON save** or the condition **doesn’t end**.",
        scalingMd: "",
        imagePath: spellImgUrl("contagion")
    },
    {
        slug: slugify("Creation"),
        name: "Creation",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 minute",
        duration: "Special",
        range: "30 feet",
        area: "Up to a 5-foot cube",
        tags: ["Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a paintbrush" },
        concentration: false,
        ritual: false,
        descriptionMd: "You pull wisps of shadow material from the Shadowfell to create an object within range. It is either an object of vegetable matter (soft goods, rope, wood, and the like) or mineral matter (stone, crystal, metal, and the like). The object must be no larger than a 5-foot Cube, and the object must be of a form and material that you have seen.\n\n" +
            "The spell’s duration depends on the object’s material, as shown in the Materials table. If the object is composed of multiple materials, use the shortest duration. Using any object created by this spell as another spell’s Material component causes the other spell to fail.",
        tableHtml: `
  <div class="rules-table">
    <table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vegetable matter</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Stone or crystal</td>
          <td>12 hours</td>
        </tr>
        <tr>
          <td>Precious metals</td>
          <td>1 hour</td>
        </tr>
        <tr>
          <td>Gems</td>
          <td>10 minutes</td>
        </tr>
        <tr>
          <td>Adamantine or mithral</td>
          <td>1 minute</td>
        </tr>
      </tbody>
    </table>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Cube size increases by **5 feet** per slot above 5.",
        imagePath: spellImgUrl("creation")
    },
    {
        slug: slugify("Destructive Wave"),
        name: "Destructive Wave",
        classes: ["Paladin"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (30 feet)",
        area: "30-foot emanation",
        tags: ["Damage", "Control"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Thunder", "Radiant", "Necrotic"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A pulse of energy ripples **30 ft.** from you. Each creature you choose makes a **Constitution** save, taking **5d6 Thunder** and **5d6 Radiant or Necrotic** (your choice) and is **Knocked Prone** on a fail; on a success, it takes **half damage only**.",
        scalingMd: "",
        imagePath: spellImgUrl("destructivewave")
    },
    {
        slug: slugify("Dispel Evil and Good"),
        name: "Dispel Evil and Good",
        classes: ["Cleric", "Paladin"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Control", "Debuff"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "powdered silver and iron" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "For the duration, **Celestials, Elementals, Fey, Fiends, and Undead** have **Disadvantage** on attack rolls against you. You can end the spell early using one of the following:\n\n**Break Enchantment.** **Magic action**; touch a creature possessed by, or **Charmed/Frightened** by, one of the listed types; the effect ends.\n**Dismissal.** **Magic action**; target a listed creature within **5 ft.**; on a **Charisma** save failure, it’s **banished to its home plane** (Undead → Shadowfell; Fey → Feywild if not already on their home planes).",
        scalingMd: "",
        imagePath: spellImgUrl("dispelevilandgood")
    },
    {
        slug: slugify("Dominate Person"),
        name: "Dominate Person",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 Humanoid",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "One Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\n\n" +
            "You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\n" +
            "You can command the target to take a Reaction but must take your own Reaction to do so.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Concentration can last longer: slot **6** (up to **10 minutes**), **7** (up to **1 hour**), **8+** (up to **8 hours**).",
        imagePath: spellImgUrl("dominateperson")
    },
    {
        slug: slugify("Dream"),
        name: "Dream",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 minute",
        duration: "Special",
        range: "10 feet",
        area: "1 creature you know (same plane)",
        tags: ["Damage", "Communication"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Incapacitated"],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of sand" },
        concentration: false,
        ritual: false,
        descriptionMd: "You target a creature you know on the same plane of existence. You or a willing creature you touch enters a trance state to act as a dream messenger. While in the trance, the messenger is Incapacitated and has a Speed of 0.\n\n" +
            "If the target is asleep, the messenger appears in the target’s dreams and can converse with the target as long as it remains asleep, through the spell’s duration. The messenger can also shape the dream’s environment, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the spell. The target recalls the dream perfectly upon waking.\n\n" +
            "If the target is awake when you cast the spell, the messenger knows it and can either end the trance (and the spell) or wait for the target to sleep, at which point the messenger enters its dreams.\n\n" +
            "You can make the messenger terrifying to the target. If you do so, the messenger can deliver a message of no more than ten words, and then the target makes a Wisdom saving throw. On a failed save, the target gains no benefit from its rest, and it takes 3d6 Psychic damage when it wakes up.",
        scalingMd: "",
        imagePath: spellImgUrl("dream")
    },
    {
        slug: slugify("Flame Strike"),
        name: "Flame Strike",
        classes: ["Cleric"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "10-foot-radius, 40-foot-high cylinder",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Fire", "Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of sulfur" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A vertical column of divine fire roars down. Each creature in a **10-foot-radius, 40-foot-high** cylinder makes a **Dexterity** save, taking **5d6 Fire** and **5d6 Radiant** on a failure, or half of each on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both **Fire** and **Radiant** damage increase by **1d6** per slot above 5.",
        imagePath: spellImgUrl("flamestrike")
    },
    {
        slug: slugify("Geas"),
        name: "Geas",
        classes: ["Bard", "Cleric", "Druid", "Paladin", "Wizard", "Warlock"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 minute",
        duration: "30 days",
        range: "60 feet",
        area: "1 creature",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You give a verbal command to a creature that you can see within range, ordering it to carry out some service or refrain from an action or a course of activity as you decide. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target automatically succeeds if it can’t understand your command.\n\n" +
            "While Charmed, the creature takes 5d10 Psychic damage if it acts in a manner directly counter to your command. It takes this damage no more than once each day.\n\n" +
            "You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.\n\n" +
            "A Remove Curse, Greater Restoration, or Wish spell ends this spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Slot **7–8**: duration **365 days**. Slot **9**: lasts **until ended** by *remove curse*, *greater restoration*, or *wish*.",
        imagePath: spellImgUrl("geas")
    },
    {
        slug: slugify("Greater Restoration"),
        name: "Greater Restoration",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Exhaustion", "Charmed", "Petrified", "Cursed"],
        components: { verbal: true, somatic: true, material: true, materialText: "diamond dust worth 100+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a creature and remove **one** of the following: **1 level of Exhaustion**; the **Charmed** or **Petrified** condition; a **curse** (including attunement to a cursed magic item); **any reduction** to one ability score; or **any reduction** to the target’s **Hit Point maximum**.",
        scalingMd: "",
        imagePath: spellImgUrl("greaterrestoration")
    },
    {
        slug: slugify("Hallow"),
        name: "Hallow",
        classes: ["Cleric"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "24 hours",
        duration: "Until dispelled",
        range: "Touch",
        area: "Up to 60-foot radius area",
        tags: ["Control", "Buff", "Debuff", "Environment"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Frightened (varies)"],
        components: { verbal: true, somatic: true, material: true, materialText: "incense worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You touch a point and infuse an area around it with holy or unholy power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect of Hallow. The affected area has the following effects.\n\n" +
            "**Hallowed Ward.** Choose any of these creature types: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Creatures of the chosen types can’t willingly enter the area, and any creature that is possessed by or that has the Charmed or Frightened condition from such creatures isn’t possessed, Charmed, or Frightened by them while in the area.\n\n" +
            "**Extra Effect.** You bind an extra effect to the area from the list below:\n\n" +
            "**Courage.** Creatures of any types you choose can’t gain the Frightened condition while in the area.\n\n" +
            "**Darkness.** Darkness fills the area. Normal light, as well as magical light created by spells of a level lower than this spell, can’t illuminate the area.\n\n" +
            "**Daylight.** Bright light fills the area. Magical Darkness created by spells of a level lower than this spell can’t extinguish the light.\n\n" +
            "**Peaceful Rest.** Dead bodies interred in the area can’t be turned into Undead.\n\n" +
            "**Extradimensional Interference.** Creatures of any types you choose can’t enter or exit the area using teleportation or interplanar travel.\n\n" +
            "**Fear.** Creatures of any types you choose have the Frightened condition while in the area.\n\n" +
            "**Resistance.** Creatures of any types you choose have Resistance to one damage type of your choice while in the area.\n\n" +
            "**Silence.** No sound can emanate from within the area, and no sound can reach into it.\n\n" +
            "**Tongues.** Creatures of any types you choose can communicate with any other creature in the area even if they don’t share a common language.\n\n" +
            "**Vulnerability.** Creatures of any types you choose have Vulnerability to one damage type of your choice while in the area.",
        scalingMd: "",
        imagePath: spellImgUrl("hallow")
    },
    {
        slug: slugify("Hold Monster"),
        name: "Hold Monster",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard",],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "1 creature",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Paralyzed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a straight piece of iron" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a creature you can see within range. It makes a **Wisdom** saving throw or becomes **Paralyzed** for the duration. At the **end of each of its turns**, the target repeats the save, ending the effect on itself on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target **one additional creature** per slot level above 5.",
        imagePath: spellImgUrl("holdmonster")
    },
    {
        slug: slugify("Insect Plague"),
        name: "Insect Plague",
        classes: ["Cleric", "Druid", "Sorcerer"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "300 feet",
        area: "20-foot-radius sphere",
        tags: ["Damage", "Control"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a locust" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Swarming locusts fill a **20-foot-radius sphere** you can see. The area is **Lightly Obscured** and **Difficult Terrain**. When the swarm appears, each creature in it makes a **Constitution** save, taking **4d10 Piercing** on a fail or half on a success. A creature also saves when it **enters** the area for the first time on a turn or **ends its turn** there (**once per turn**).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by **1d10** per slot above 5.",
        imagePath: spellImgUrl("insectplague")
    },
    {
        slug: slugify("Jallarzi's Storm of Radiance"),
        name: "Jallarzi's Storm of Radiance",
        classes: ["Warlock", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "10-foot-radius, 40-foot-high cylinder",
        tags: ["Damage", "Control"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Radiant", "Thunder"],
        conditions: ["Blinded", "Deafened"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of phosphorus" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A storm of flashing light and thunder rages in a **10-foot-radius, 40-foot-high** cylinder. Creatures in the area have the **Blinded** and **Deafened** conditions and **can’t cast spells with Verbal components**. When the storm appears, each creature in it makes a **Constitution** save, taking **2d10 Radiant** and **2d10 Thunder** on a fail or half on a success. A creature also saves when it **enters** the area or **ends its turn** there (**once per turn**).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both **Radiant** and **Thunder** damage increase by **1d10** per slot above 5.",
        imagePath: spellImgUrl("stormofradiance")
    },
    {
        slug: slugify("Legend Lore"),
        name: "Legend Lore",
        classes: ["Bard", "Cleric", "Wizard"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "incense worth 250+ GP (consumed) and four ivory strips worth 50+ GP each" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Name or describe a **famous** person, place, or object to receive a brief summary of significant lore. The more you already know, the more precise the information. The DM may couch facts in figurative language. If the thing isn’t actually famous, a **sad trombone** sounds and the spell **fails**.",
        scalingMd: "",
        imagePath: spellImgUrl("legendlore")
    },
    {
        slug: slugify("Mass Cure Wounds"),
        name: "Mass Cure Wounds",
        classes: ["Bard", "Cleric", "Druid"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "30-foot-radius sphere",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Healing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A wave of healing energy washes from a point you can see within range. Choose **up to six creatures** in a **30-foot-radius sphere** centered on that point. Each target regains **5d8 + your spellcasting ability modifier** Hit Points.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Healing increases by **1d8** per slot above 5.",
        imagePath: spellImgUrl("masscurewounds")
    },
    {
        slug: slugify("Mislead"),
        name: "Mislead",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Self",
        area: "Self",
        tags: ["Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You become **Invisible** while an **illusory double** appears where you were. The double persists for the duration, but your invisibility ends if you **make an attack roll, deal damage, or cast a spell**. As a **Magic action**, move the double up to **twice your Speed** and make it gesture, speak, and act. It’s **intangible** and **invulnerable**. You can **see and hear through** it as though you were there.",
        scalingMd: "",
        imagePath: spellImgUrl("mislead")
    },
    {
        slug: slugify("Modify Memory"),
        name: "Modify Memory",
        classes: ["Bard", "Wizard"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "1 creature",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed", "Incapacitated"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You attempt to reshape another creature’s memories. One creature that you can see within range makes a Wisdom saving throw. If you are fighting the creature, it has Advantage on the save. On a failed save, the target has the Charmed condition for the duration. While Charmed in this way, the target also has the Incapacitated condition and is unaware of its surroundings, though it can hear you. If it takes any damage or is targeted by another spell, this spell ends, and no memories are modified.\n\n" +
            "While this charm lasts, you can affect the target’s memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, change its memory of the event’s details, or create a memory of some other event.\n\n" +
            "You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you finish describing the modified memories, the creature’s memory isn’t altered. Otherwise, the modified memories take hold when the spell ends.\n\n" +
            "A modified memory doesn’t necessarily affect how a creature behaves, particularly if the memory contradicts the creature’s natural inclinations, alignment, or beliefs. An illogical modified memory, such as a false memory of how much the creature enjoyed swimming in acid, is dismissed as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature.\n\n" +
            "A Remove Curse or Greater Restoration spell cast on the target restores the creature’s true memory.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Alter events up to **7 days** ago (slot 6), **30 days** (slot 7), **365 days** (slot 8), or **any time** in the target’s past (slot 9).",
        imagePath: spellImgUrl("modifymemory")
    },
    {
        slug: slugify("Passwall"),
        name: "Passwall",
        classes: ["Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "30 feet",
        area: "Opening up to 5 ft. × 8 ft. × 20 ft.",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of sesame seeds" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create a passage on a **wooden, plaster, or stone** surface you can see within range. The opening can be up to **5 ft. wide, 8 ft. tall, 20 ft. deep** and causes no structural instability. When it ends, creatures or objects in the passage are **safely ejected** to the nearest unoccupied space adjacent to the surface.",
        scalingMd: "",
        imagePath: spellImgUrl("passwall")
    },
    {
        slug: slugify("Planar Binding"),
        name: "Planar Binding",
        classes: ["Bard", "Cleric", "Druid", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Abjuration",
        castingTime: "1 hour",
        duration: "24 hours",
        range: "60 feet",
        area: "1 Celestial, Elemental, Fey, or Fiend",
        tags: ["Control"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a jewel worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You attempt to bind a Celestial, an Elemental, a Fey, or a Fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of the inverted version of the Magic Circle spell to trap it while this spell is cast.) At the completion of the casting, the target must succeed on a Charisma saving throw or be bound to serve you for the duration. If the creature was summoned or created by another spell, that spell’s duration is extended to match the duration of this spell.\n\n" +
            "A bound creature must follow your commands to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. If the creature is Hostile, it strives to twist your commands to achieve its own objectives. If the creature carries out your commands completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane, it returns to the place where you bound it and remains there until the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration increases: slot **6** (10 days), **7** (30 days), **8** (180 days), **9** (366 days).",
        imagePath: spellImgUrl("planarbinding")
    },
    {
        slug: slugify("Raise Dead"),
        name: "Raise Dead",
        classes: ["Bard", "Cleric", "Paladin"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature dead ≤ 10 days",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Healing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond worth 500+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "With a touch, you revive a dead creature if it has been dead no longer than 10 days and it wasn’t Undead when it died.\n\n" +
            "The creature returns to life with 1 Hit Point. This spell also neutralizes any poisons that affected the creature at the time of death.\n\n" +
            "This spell closes all mortal wounds, but it doesn’t restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.\n\n" +
            "Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.",
        scalingMd: "",
        imagePath: spellImgUrl("raisedead")
    },
    {
        slug: slugify("Rary's Telepathic Bond"),
        name: "Rary's Telepathic Bond",
        classes: ["Bard", "Wizard"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "1 action (ritual)",
        duration: "1 hour",
        range: "30 feet",
        area: "Up to 8 willing creatures",
        tags: ["Communication"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "two eggs" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Forge a **telepathic link** among up to **eight willing creatures** within range. Targets can communicate telepathically with each other for the duration regardless of language, over **any distance** on the same plane (**not** across planes). Creatures unable to communicate in languages aren’t affected.",
        scalingMd: "",
        imagePath: spellImgUrl("rarystelepathicbond")
    },
    {
        slug: slugify("Reincarnate"),
        name: "Reincarnate",
        classes: ["Druid"],
        spellLevel: 5,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 dead Humanoid",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Healing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "rare oils worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You touch a dead Humanoid or a piece of one. If the creature has been dead no longer than 10 days, the spell forms a new body for it and calls the soul to enter that body. Roll 1d10 and consult the table below to determine the body’s species, or the DM chooses another playable species.\n\n" +
            "The reincarnated creature makes any choices that a species’ description offers, and the creature recalls its former life. It retains the capabilities it had in its original form, except it loses the traits of its previous species and gains the traits of its new one.",
        tableHtml: `
  <div class="rules-table">
    <table>
      <thead>
        <tr>
          <th>1d10</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Aasimar</td></tr>
        <tr><td>2</td><td>Dragonborn</td></tr>
        <tr><td>3</td><td>Dwarf</td></tr>
        <tr><td>4</td><td>Elf</td></tr>
        <tr><td>5</td><td>Gnome</td></tr>
        <tr><td>6</td><td>Goliath</td></tr>
        <tr><td>7</td><td>Halfling</td></tr>
        <tr><td>8</td><td>Human</td></tr>
        <tr><td>9</td><td>Orc</td></tr>
        <tr><td>10</td><td>Tiefling</td></tr>
      </tbody>
    </table>
  </div>
`,
        scalingMd: "",
        imagePath: spellImgUrl("reincarnate")
    },
    {
        slug: slugify("Scrying"),
        name: "Scrying",
        classes: ["Bard", "Cleric", "Druid", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Divination",
        castingTime: "10 minutes",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "Sensor within 10 feet of target",
        tags: ["Detection"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a focus worth 1,000+ GP (crystal ball, mirror, or water-filled font)" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You see and hear a target on the same plane. The target makes a **Wisdom** save, modified by your knowledge and connections:\n\n**Knowledge:** Secondhand **+5**, Firsthand **+0**, Extensive **−5**.\n**Connection:** Likeness **−2**; Possession **−4**; Body part/lock of hair **−10**.\n\nOn a success, the target isn’t affected and can’t be targeted again for **24 hours**. On a failure, an **Invisible, intangible sensor** appears within **10 ft.** of the target and moves with it. If seen, it appears as a **fist-sized luminous orb**. You can instead target a **location** you’ve seen; the sensor stays there.",
        scalingMd: "",
        imagePath: spellImgUrl("scrying")
    },
    {
        slug: slugify("Seeming"),
        name: "Seeming",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Illusion",
        castingTime: "1 action",
        duration: "8 hours",
        range: "30 feet",
        area: "Any number of creatures of your choice",
        tags: ["Control"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You give an illusory appearance to each creature of your choice that you can see within range. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.\n\n" +
            "You can give the same appearance or different ones to the targets. The spell can change the appearance of the targets’ bodies and equipment. You can make each creature seem 1 foot shorter or taller and appear heavier or lighter. A target’s new appearance must have the same basic arrangement of limbs as the target, but the extent of the illusion is otherwise up to you. The spell lasts for the duration.\n\n" +
            "The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature’s outfit, objects pass through the hat.\n\n" +
            "A creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
        scalingMd: "",
        imagePath: spellImgUrl("seeming")
    },
    {
        slug: slugify("Steel Wind Strike"),
        name: "Steel Wind Strike",
        classes: ["Ranger", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "Up to 5 creatures",
        tags: ["Teleportation", "Damage", "Combat"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: false, somatic: true, material: true, materialText: "a melee weapon worth 1+ sp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Flourish the casting weapon and **vanish**, striking like the wind. Choose **up to five** creatures you can see within range; make a **melee spell attack** against each. On a hit, a target takes **6d10 Force**. You then **teleport** to an unoccupied space you can see within **5 feet** of one target.",
        scalingMd: "",
        imagePath: spellImgUrl("steelwindstrike")
    },
    {
        slug: slugify("Summon Celestial"),
        name: "Summon Celestial",
        classes: ["Cleric", "Paladin", "Warlock"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "90 feet",
        area: "1 celestial spirit",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a reliquary worth 500+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a Celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range and uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>CELESTIAL SPIRIT</h2>
    <hr>
    <p><em>Large Celestial, Neutral</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level + 2 <em>(Defender only)</em><br>
      <strong>HP</strong> 40 + 10 for each spell level above 5<br>
      <strong>Speed</strong> 30 ft., Fly 40 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>INT</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>WIS</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>CHA</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Resistances</strong> Radiant<br>
      <strong>Senses</strong> Darkvision 60 ft.; Passive Perception 12<br>
      <strong>Languages</strong> Celestial, understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <p><strong>Immunities</strong> <em>Charmed, Frightened</em></p>

    <hr>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of attacks equal to half this spell’s level (round down).</p>

    <p><strong>Radiant Bow (Avenger Only).</strong>
      <em>Ranged Attack Roll:</em> Bonus equals your spell attack modifier, range 600 ft.
      <em>Hit:</em> 2d6 + 2 + the spell’s level Radiant damage.</p>

    <p><strong>Radiant Mace (Defender Only).</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
      <em>Hit:</em> 1d10 + 3 + the spell’s level Radiant damage, and the spirit can choose itself or another creature it can see within 10 feet of the target. The chosen creature gains 1d10 <a href="#">Temporary Hit Points</a>.</p>

    <p><strong>Healing Touch (1/Day).</strong>
      The spirit touches another creature. The target regains Hit Points equal to 2d8 + the spell’s level.</p>
  </div>
`
        ,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the **slot’s level** for the stat block’s level-based values.",
        imagePath: spellImgUrl("summoncelestial")
    },
    {
        slug: slugify("Summon Dragon"),
        name: "Summon Dragon",
        classes: ["Wizard", "Sorcerer"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "60 feet",
        area: "1 draconic spirit",
        tags: [],
        saveRequired: "DEX Save",
        attackType: "Melee Spell Attack",
        damageTypes: ["Piercing", "Acid", "Cold", "Fire", "Lightning", "Poison"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an object engraved with a dragon worth 500+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: Chromatic, Gem, or Metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>DRACONIC SPIRIT</h2>
    <hr>
    <p><em>Large Dragon, Neutral</em></p>

    <p>
      <strong>AC</strong> 14 + the spell’s level (natural armor)<br>
      <strong>HP</strong> 50 + 10 for each spell level above 5th
      <em>(the dragon has a number of Hit Dice [d10s] equal to the spell’s level)</em><br>
      <strong>Speed</strong> 30 ft., Fly 60 ft., Swim 30 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 19</td><td>+4</td><td>+4</td>
          <td><strong>INT</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>WIS</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 17</td><td>+3</td><td>+3</td>
          <td><strong>CHA</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances (Chromatic and Metallic Only)</strong> acid, cold, fire, lightning, poison<br>
      <strong>Damage Resistances (Gem Only)</strong> force, necrotic, psychic, radiant, thunder<br>
      <strong>Condition Immunities</strong> <a href="#">charmed</a>, <a href="#">frightened</a>, <a href="#">poisoned</a><br>
      <strong>Senses</strong> <a href="#">blindsight</a> 30 ft., <a href="#">darkvision</a> 60 ft.; Passive Perception 12<br>
      <strong>Languages</strong> Draconic, understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Shared Resistances.</strong> When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The dragon makes a number of Rend attacks equal to half the spell’s level (rounded down), and it uses Breath Weapon.</p>

    <p><strong>Rend.</strong> <em>Melee Weapon Attack:</em> your spell attack modifier to hit, reach 10 ft., one target.
       <em>Hit:</em> 1d6 + 4 + the spell’s level Piercing damage.</p>

    <p><strong>Breath Weapon.</strong> The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a
       <em>Dexterity Saving Throw</em> against your spell save DC.
       A creature takes 3d6 + 1d6 more for every level cast above 5th, of a type this spirit has resistance to (your choice when you cast the spell), on a failed save, or half as much on a successful one.</p>
  </div>
`
        ,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the **slot’s level** for the stat block’s level-based values.",
        imagePath: spellImgUrl("summondragon")
    },
    {
        slug: slugify("Swift Quiver"),
        name: "Swift Quiver",
        classes: ["Ranger"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a Quiver worth 1+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast the spell **and as a Bonus Action each turn** until it ends, you can make **two attacks** with a weapon that fires **Arrows or Bolts** (e.g., longbow, light crossbow). The spell **magically creates the ammunition** for each attack; each piece deals normal **nonmagical** damage of its kind and **disintegrates** on a hit or miss.",
        scalingMd: "",
        imagePath: spellImgUrl("swiftquiver")
    },
    {
        slug: slugify("Synaptic Static"),
        name: "Synaptic Static",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous (debuff 1 minute)",
        range: "120 feet",
        area: "20-foot-radius sphere",
        tags: ["Damage", "Debuff"],
        saveRequired: "INT Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Psychic energy erupts at a point within range. Each creature in a **20-foot-radius sphere** makes an **Intelligence** save, taking **8d6 Psychic** on a failed save or half as much on a success.\n\n**On a failed save**, the target’s thoughts are **muddled for 1 minute**: it subtracts **1d6** from **attack rolls**, **ability checks**, and **Constitution saves to maintain Concentration**. It repeats an **Intelligence** save at the end of each of its turns, ending the effect on itself on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("synapticstatic")
    },
    {
        slug: slugify("Telekinesis"),
        name: "Telekinesis",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "60 feet",
        area: "1 creature or object",
        tags: ["Control", "Movement"],
        saveRequired: "STR Save (varies)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You move creatures or objects with thought. When you cast and as a **Magic action** on later turns, target **one creature or object** you can see within range.\n\n**Creature.** Try to move a **Huge or smaller** creature: **STR save** or you move it **up to 30 ft.** in any direction. Until the **end of your next turn**, it is **Restrained**; if lifted, it hangs suspended and falls when the effect ends unless you continue it and it fails again.\n\n**Object (unattended).** Automatically move a **Huge or smaller** object **up to 30 ft.** in any direction.\n\n**Object (worn or carried).** The creature holding it makes a **STR save** or you pull it **up to 30 ft.** in any direction.\n\nYou can perform **fine manipulation** (open doors, pour vials, stow/retrieve from open containers, use simple tools). Switching targets ends the effect on the prior one.",
        scalingMd: "",
        imagePath: spellImgUrl("telekinesis")
    },
    {
        slug: slugify("Teleportation Circle"),
        name: "Teleportation Circle",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "1 round",
        range: "10 feet",
        area: "5-foot-radius circle",
        tags: ["Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: true, materialText: "rare inks worth 50+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You inscribe a **5-foot-radius circle** linking to a **permanent teleportation circle** whose **sigil sequence** you know on the same plane. A portal opens within the drawn circle and lasts **until the end of your next turn**. Any creature entering appears within **5 feet** of the destination circle (or nearest unoccupied space if occupied).\n\nWhen you first gain this spell, you **learn two** Material Plane sigil sequences (DM’s choice). You can memorize others by studying a sequence for **1 minute**. Casting this spell **daily on the same spot for 365 days** creates a **permanent circle** there.",
        scalingMd: "",
        imagePath: spellImgUrl("teleportationcircle")
    },
    {
        slug: slugify("Tree Stride"),
        name: "Tree Stride",
        classes: ["Druid", "Ranger",],
        spellLevel: 5,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Teleportation", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Enter a **living tree** and move from it to another **tree of the same kind within 500 feet**. You must spend **5 feet of movement** to enter and **5 feet** to exit. On entering, you instantly sense all eligible trees within **500 feet**, and as part of the same move you may step out or pass to one of them. You can do this **once per turn**, and you must **end each turn outside** a tree.",
        scalingMd: "",
        imagePath: spellImgUrl("treestride")
    },
    {
        slug: slugify("Wall of Force"),
        name: "Wall of Force",
        classes: ["Wizard",],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "120 feet",
        area: "Up to ten 10×10 panels or a dome/globe (10-ft. radius)",
        tags: ["Control", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a shard of glass" },
        concentration: true,
        ritual: false,
        descriptionMd: "An Invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick and lasts for the duration. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (you choose which side).\n\n" +
            "Nothing can physically pass through the wall. It is immune to all damage and can’t be dispelled by Dispel Magic. A Disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane and blocks ethereal travel through the wall.",
        scalingMd: "",
        imagePath: spellImgUrl("wallofforce")
    },
    {
        slug: slugify("Wall of Stone"),
        name: "Wall of Stone",
        classes: ["Artificer", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 5,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "120 feet",
        area: "Ten 10×10 panels (6 in. thick) or ten 10×20 panels (3 in. thick)",
        tags: ["Control"],
        saveRequired: "DEX Save (special)",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a cube of granite" },
        concentration: true,
        ritual: false,
        descriptionMd: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.\n\n" +
            "If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (you choose which side). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its Reaction to move up to its Speed so that it is no longer enclosed by the wall.\n\n" +
            "The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on a firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.\n\n" +
            "If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create battlements and the like.\n\n" +
            "The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 Hit Points per inch of thickness, and it has Immunity to Poison and Psychic damage. Reducing a panel to 0 Hit Points destroys it and might cause connected panels to collapse at the DM’s discretion.\n\n" +
            "If you maintain your Concentration on this spell for its full duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("wallofstone")
    },
    {
        slug: slugify("Yolande's Regal Presence"),
        name: "Yolande's Regal Presence",
        classes: ["Bard", "Wizard",],
        spellLevel: 5,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self (10 feet)",
        area: "10-foot emanation",
        tags: ["Damage", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature tiara" },
        concentration: true,
        ritual: false,
        descriptionMd: "You surround yourself with unearthly majesty in a 10-foot Emanation. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. On a failed save, the target takes 4d6 Psychic damage and has the Prone condition, and you can push it up to 10 feet away. On a successful save, the target takes half as much damage only. A creature makes this save only once per turn.",
        scalingMd: "",
        imagePath: spellImgUrl("yolandesregalpresence")
    },
    {
    slug: slugify("Alustriel’s Mooncloak"),
    name: "Alustriel’s Mooncloak",
    classes: ["Bard", "Druid", "Ranger", "Wizard"],
    spellLevel: 5,
    school: "Abjuration",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "Self",
    area: "20-foot Emanation",
    tags: ["Buff", "Defense", "Healing"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: { verbal: true, somatic: true, material: true, materialText: "a moonstone worth 50+ gp" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "For the duration, moonlight fills a 20-foot Emanation originating from you with Dim Light. While in that area, you and your allies have Half Cover and Resistance to Cold, Lightning, and Radiant damage.\n\n" +
        "While the spell lasts, you can use one of the following options; doing so ends the spell immediately.\n\n" +
        "**Liberation.** When you fail a saving throw to avoid or end the Frightened, Grappled, or Restrained condition, you can use your Reaction to succeed on the save instead.\n\n" +
        "**Respite.** As a Magic action, you or an ally within the area regains Hit Points equal to 4d10 + your spellcasting ability modifier.",
    scalingMd: "",
    imagePath: spellImgUrl("alustrielsmooncloak")
},
{
    slug: slugify("Songal’s Elemental Suffusion"),
    name: "Songal’s Elemental Suffusion",
    classes: ["Druid", "Sorcerer", "Wizard"],
    spellLevel: 5,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "Self",
    area: "15-foot Emanation",
    tags: ["Damage", "Buff", "Defense", "Control", "Mobility"],
    saveRequired: "DEX",
    attackType: "Spell",
    damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
    conditions: ["Prone"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a pearl worth 100+ gp"
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You imbue yourself with the elemental power of genies. You gain the following benefits until the spell ends:\n\n" +
        "**Elemental Immunity.** When you cast this spell, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. You have Resistance to the chosen damage type.\n\n" +
        "**Elemental Pulse.** When you cast this spell and at the start of each of your subsequent turns, you release a burst of elemental energy in a 15-foot Emanation originating from yourself. Each creature of your choice in that area must make a Dexterity saving throw. On a failed save, the creature takes 2d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice) and has the Prone condition. On a successful save, the creature takes half as much damage only.\n\n" +
        "**Flight.** You gain a Fly Speed of 30 feet and can hover.",
    scalingMd: "",
    imagePath: spellImgUrl("songalselementalsuffusion")
},
{
    slug: slugify("Pyroclastic Lance"),
    name: "Pyroclastic Lance",
    classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 5,
    school: "Conjuration",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "120 feet",
    area: "1 creature; 10-foot-radius Sphere",
    tags: ["Damage", "Control"],
    saveRequired: "CON",
    attackType: "Ranged Spell Attack",
    damageTypes: ["Fire"],
    conditions: ["Blinded"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You conjure a lance of blazing lava before hurling it at a target within range. Make a ranged spell attack. On a hit, the target takes 8d6 Fire damage. Hit or miss, the lance then explodes in a 10-foot-radius Sphere of heavily obscuring pyroclastic ash around the target until the start of your next turn.\n\n" +
        "Any creature that starts its turn within the ash cloud must make a Constitution saving throw or take 4d6 Fire damage and be Blinded until the start of its next turn.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The initial damage increases by 1d6 for each spell slot level above 5th.",
    imagePath: spellImgUrl("pyroclasticlance")
},
{
    slug: slugify("Greater Haste"),
    name: "Greater Haste",
    classes: ["Artificer", "Paladin", "Sorcerer", "Wizard"],
    spellLevel: 5,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "30 feet",
    area: "1 willing creature",
    tags: ["Buff"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: ["Paralyzed"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a shaving of quicksilver powder"
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Choose a willing creature that you can see within range. Until the spell ends, the target’s Speed is multiplied by 2.5, it gains a +3 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (two attacks only if the target has the Extra Attack feature), Dash, Disengage, Hide, or Utilize action.\n\n" +
        "When the spell ends, the target is Paralyzed and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
    scalingMd: "",
    imagePath: spellImgUrl("greaterhaste")
},

];