import { spellImgUrl, slugify } from "../../features/spells/utils";

export const LEVEL7 = [
    {
        slug: slugify("Arcanist's Sword"),
        name: "Arcanist's Sword",
        classes: ["Bard", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 floating sword (plane of force)",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You create a glowing sword-shaped plane of force that hovers within range. When it appears and as a bonus action on subsequent turns, you command it to Attack, Guard, or Spin:\n\n• Attack. The sword moves up to 20 feet toward a creature and makes a melee spell attack, dealing 3d10 + your spellcasting ability modifier Force damage on a hit.\n• Guard. The sword moves up to 20 feet to share a creature’s space, granting it half cover. The first time a hostile creature comes within 5 feet of the sword, it makes a melee spell attack for 3d10 + modifier Force damage on a hit. It can’t attack again until you issue a new command.\n• Spin. The sword moves up to 20 feet to a point and begins to whirl. Creatures that start their turn or enter within 5 feet of it must make a Dexterity saving throw, taking 4d10 Force damage on a failed save, or half as much on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("arcanistssword")
    },
    {
        slug: slugify("Arboreal Curse"),
        name: "Arboreal Curse",
        classes: ["Druid"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "60 feet",
        area: "1 creature",
        tags: ["Control", "Debuff"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Restrained", "Petrified"],
        components: { verbal: true, somatic: true, material: true, materialText: "a cup of sap" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You attempt to turn a creature you can see into wood. The target makes a Constitution saving throw. On a failure, it becomes Restrained as its flesh hardens into bark. On a success, its speed becomes 0 until the start of your next turn.\n\nA creature Restrained by this spell repeats the Constitution saving throw at the end of each of its turns. On three successes, the effect ends. On three failures, the creature becomes a tree and gains the Petrified condition. Track successes and failures until one set reaches three. If the petrified tree is destroyed, the creature dies.\n\nThe transformation remains unless reversed within 1 year by [spells]greater restoration[/spells], [spells]wish[/spells], or similar magic. After 1 year and 1 day, the change becomes permanent.",
        scalingMd: "",
        imagePath: spellImgUrl("arborealcurse")
    },
    {
        slug: slugify("Ceaseless Torment"),
        name: "Ceaseless Torment",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "120-ft radius",
        tags: ["Damage", "Control"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A roaring cacophony of maddening laughter floods minds in a 120-foot radius. Each hostile creature makes a Wisdom save, taking 8d8 Psychic on a failed save or half on a success. A creature that is Frightened makes this save with disadvantage and instead takes 12d8 Psychic.",
        scalingMd: "",
        imagePath: spellImgUrl("ceaselesstorment")
    },
    {
        slug: slugify("Create Magen"),
        name: "Create Magen",
        classes: ["Wizard"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 hour",
        duration: "Instantaneous (permanent creature)",
        range: "Touch",
        area: "1 life-sized doll",
        tags: ["Creation", "Summoning"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of quicksilver (500 gp) and a life-sized human doll (both consumed) and a crystal rod worth 1,500 gp (not consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Place quicksilver inside a life-sized human doll, stitch it, drip your blood, then tap it with a crystal rod to transform it into a magen (type chosen during casting; see appendix for stat blocks). When it appears, your Hit Point maximum decreases by an amount equal to the magen’s CR (minimum 1); only Wish can undo this reduction. The magen obeys your commands without question.",
        scalingMd: "",
        imagePath: spellImgUrl("createmagen")
    },
    {
        slug: slugify("Crown of Stars"),
        name: "Crown of Stars",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self (orbiting motes; attacks up to 120 feet)",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Seven star-like motes orbit your head. As a bonus action, send one mote to strike a creature or object within 120 feet; make a ranged spell attack. On a hit, the target takes 4d12 Radiant; hit or miss, that mote is expended. The spell ends early if you expend the last mote. With 4+ motes remaining, you shed bright light 30 ft and dim 30 ft; with 1–3 motes, you shed dim light 30 ft.",
        scalingMd:
            "Using a Higher-Level Spell Slot. Create two additional motes per slot level above 7th.",
        imagePath: spellImgUrl("crownofstars")
    },
    {
        slug: slugify("Diamondskin"),
        name: "Diamondskin",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "diamond dust worth 1000 gp, consumed" },
        concentration: true,
        ritual: false,
        descriptionMd: "This spell turns the flesh of a willing creature you touch into unbreakable diamond. Until the spell ends, the target has resistance to Bludgeoning, Piercing, and Slashing damage.",
        scalingMd: "",
        imagePath: spellImgUrl("diamondskin")
    },
    {
        slug: slugify("Divine Arrow"),
        name: "Divine Arrow",
        classes: ["Bard", "Cleric", "Warlock",],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Damage", "Debuff"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Force"],
        conditions: ["Vulnerability/Resistance modification (chosen type)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pearl worth 100 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "A bow of light forms and fires an angelic arrow. Make a ranged spell attack against a creature within range. On a hit, it takes 4d10 Force damage, and until the spell ends it becomes Vulnerable to one damage type you choose: Acid, Cold, Fire, Lightning, Necrotic, Radiant, or Thunder. If it was Immune to that type, it instead has Resistance; if it had Resistance, it loses it.",
        scalingMd: "",
        imagePath: spellImgUrl("divinearrow")
    },
    {
        slug: slugify("Draconic Transformation"),
        name: "Draconic Transformation",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self (60-foot cone breath)",
        tags: ["Buff", "Damage", "Control"],
        saveRequired: "DEX",
        attackType: "None",
        damageTypes: ["Varies"],
        conditions: ["Frightened (on failed WIS save vs presence)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a statuette of a dragon worth at least 500 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features of any type of gem, chromatic, or metallic dragon. You gain the following benefits until the spell ends:\n\n" +
            "**Blindsight.** You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn’t behind total cover, even if you’re blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you.\n\n" +
            "**Draconic Resistance.** You gain resistance to acid, cold, fire, force, lightning, poison, or thunder damage upon casting this spell.\n\n" +
            "**Breath Weapon.** When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 damage of the same type as your resistance on a failed save, or half as much damage on a successful one.\n\n" +
            "**Intimidating Presence.** At the start of your turn you can force all creatures who can see you to succeed a Wisdom saving throw against your spellcasting DC. On a failure they are frightened and can repeat the save at the end of each of their turns. On a success they are immune to this feature.\n\n" +
            "**Wings.** Incorporeal wings sprout from your back, giving you a flying speed of 60 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("draconictransformation")
    },
    {
        slug: slugify("Crush"),
        name: "Crush",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous (speed 0 until start of your next turn on failure)",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "STR",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone", "Speed 0 (until start of your next turn)"],
        components: { verbal: true, somatic: true, material: true, materialText: "bone powder" },
        concentration: false,
        ritual: false,
        descriptionMd: "You target one creature within range. It must succeed on a Strength saving throw or be trapped in a field of gravity that compresses it and forces it to fold in on itself.\n\n" +
            "**On a failed save.** The target takes 12d10 Bludgeoning damage, falls Prone, and its Speed is reduced to 0 until the start of your next turn as it reels from the pain.\n\n" +
            "**On a successful save.** The target takes half as much damage and no additional effects.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Target one additional creature within range for each slot level above 7th.",
        imagePath: spellImgUrl("crush")
    },
    {
        slug: slugify("Fleshcrawl"),
        name: "Fleshcrawl",
        classes: ["Warlock", "Wizard"],
        spellLevel: 7,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "100 feet",
        area: "1 creature; summons Fleshling Construct",
        tags: ["Damage", "Summoning", "Control"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "A creature you can see makes a Constitution save. On a failure, it takes **8d10 Necrotic** and is **flayed**, its skin animating into a **Fleshling Construct** (see stat block) that acts immediately after you, obeying your verbal commands (no action). On a success, it takes half damage only. The construct disappears at 0 HP or when the spell ends.",
        statblockHtml: `
  <div class="statblock">
    <h2>FLESHLING CONSTRUCT</h2>
    <hr>
    <p><em>Medium construct, Unaligned</em></p>

    <p>
      <strong>Armor Class</strong> 11 + the level of the spell (natural armor)<br>
      <strong>Hit Points</strong> 70 + 10 for each spell level above 7<br>
      <strong>Speed</strong> 30 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 14</td><td>+2</td>
          <td><strong>INT</strong> 14</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 18</td><td>+4</td>
          <td><strong>WIS</strong> 14</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 18</td><td>+4</td>
          <td><strong>CHA</strong> 4</td><td>−3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Psychic<br>
      <strong>Senses</strong> darkvision 60 ft.; passive Perception 11<br>
      <strong>Languages</strong> Understands the languages known by the target<br>
      <strong>Challenge</strong> — 0
    </p>

    <h3>Actions</h3>

    <p>
      <strong>Strangle.</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft., one target.
      <em>Hit:</em> 2d8 + the spell’s level Bludgeoning damage, and the target has the
      <em>Grappled</em> condition (escape DC equals your spell save DC) and can’t speak.
      Until the grapple ends, the target has the <em>Restrained</em> condition and is suffocating.
    </p>

    <p>
      <strong>Constrict.</strong>
      The fleshling construct constricts a target that it is grappling, dealing
      2d8 + the spell’s level Bludgeoning damage.
    </p>
  </div>
`,
        scalingMd: "**Using a Higher-Level Spell Slot.** Use the spell slot’s level wherever the spell’s level appears in the Fleshling Construct stat block.",
        imagePath: spellImgUrl("fleshcrawl")
    },
    {
        slug: slugify("Power Word Maim"),
        name: "Power Word Maim",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Debuff"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Prone (on HP threshold)"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Command the target’s body to twist. If it has **125 HP or fewer**, it takes **8d10 Necrotic** damage and falls **Prone**. Otherwise, its **Speed is 0** until the start of your next turn. A Prone target repeats a **CON save** at the end of each of its turns, ending the condition on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("powerwordmaim"),
    },
    {
        slug: slugify("Power Word Pain"),
        name: "Power Word Pain",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature (100 HP or fewer)",
        tags: ["Debuff"],
        saveRequired: "CON Save (to end each turn)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Speed capped at 10 ft", "Disadvantage on attacks, checks, and saves (except CON)"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Speak a word of power wracking one creature you see with agony if it has **100 HP or fewer** (no effect otherwise; unaffected if **immune to charmed**). While in pain, its **Speed can’t exceed 10 ft**; it has **disadvantage** on **attack rolls, ability checks, and saving throws** (other than CON saves). If it tries to cast a spell, it must first succeed on a **CON save** or the spell fails. It repeats a **CON save** at the end of each of its turns, ending the pain on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("powerwordpain"),
    },
    {
        slug: slugify("Psalms of Retribution"),
        name: "Psalms of Retribution",
        classes: ["Cleric",],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self (60 feet)",
        area: "60-foot cone (on release)",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "A glowing symbol of your chosen deity forms within the palms of your hands and hovers in front of you. At the start of each of your turns while concentrating on this spell, you take 2d8 Necrotic damage (this damage cannot be reduced and ignores resistances and immunities). When the spell ends, the radiant energy is released, and each creature in a 60-foot cone centered on you makes a Constitution saving throw. A creature takes Radiant damage equal to the total accumulated damage on a failed save or half as much damage on a successful one.\n\n" +
            "The spell’s base damage is 8d8, and the damage increases by 2d8 whenever your turn ends and the spell hasn’t ended.\n\n" +
            "If a creature is Undead, it has disadvantage on saving throws against this spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Base damage increases by **1d8** per slot level above 7th.",
        imagePath: spellImgUrl("psalmsofretribution"),
    },
    {
        slug: slugify("Sanguine Fusillade"),
        name: "Sanguine Fusillade",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 target + up to seven dart targets",
        tags: ["Sangromancy", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack (for each dart)",
        damageTypes: ["Piercing"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a needle dipped in your blood",
        },
        concentration: false,
        ritual: false,
        descriptionMd: "You crystalize your foe’s blood into razor darts that burst forth to strike your enemies. As part of casting this spell, you must expend seven Hit Point Dice or the spell automatically fails. Roll the Hit Point Dice expended to cast the spell. Choose a creature that you can see within range. The target takes Piercing damage equal to the roll. When a creature takes this damage, seven crimson darts burst from it.\n\n" +
            "You can direct each dart to hit a creature within 60 feet of the original target. The darts all strike simultaneously, and you can direct them to hit one creature or several, including the original target. For each dart, make a ranged spell attack against the chosen creature. On a hit, roll one Hit Point Dice expended to cast the spell, and the creature takes Piercing damage equal to the number rolled.",
        scalingMd: "**Using a Higher-Level Spell Slot.** For each slot level above 7th, you can expend an additional Hit Die and create an extra dart.",
        imagePath: spellImgUrl("sanguinefusillade"),
    },
    {
        slug: slugify("Void Meteorites"),
        name: "Void Meteorites",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "Up to 3 creatures",
        tags: [],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You summon multiple voids above your head that emit a hail of meteorites. Select **3 creatures** that you can see within range, they must succeed on a Dexterity saving throw or take **6d6 Bludgeoning** damage. You can target a single creature multiple times, forcing it to repeat the Dexterity saving throw each time. You can use an action on subsequent turn to keep the meteorite shower going, selecting new targets within range to target with the spell. The spell ends if you use your action to do anything else. While casting this spell your movement speed becomes 0.",
        scalingMd: ""
    },
    {
        slug: slugify("Conjure Celestial"),
        name: "Conjure Celestial",
        classes: ["Cleric"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "90 feet",
        area: "10-foot-radius, 40-foot-high cylinder",
        tags: ["Healing", "Damage"],
        saveRequired: "DEX Save (for Searing Light)",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You conjure a spirit from the Upper Planes, which manifests as a pillar of light in a 10-foot-radius, 40-foot-high Cylinder centered on a point within range. For each creature you can see in the Cylinder, choose which of these lights shines on it:\n\n" +
            "**Healing Light.** The target regains Hit Points equal to 4d12 plus your spellcasting ability modifier.\n\n" +
            "**Searing Light.** The target makes a Dexterity saving throw, taking 6d12 Radiant damage on a failed save or half as much damage on a successful one.\n\n" +
            "Until the spell ends, Bright Light fills the Cylinder, and when you move on your turn, you can also move the Cylinder up to 30 feet.\n\n" +
            "Whenever the Cylinder moves into the space of a creature you can see and whenever a creature you can see enters the Cylinder or ends its turn there, you can bathe it in one of the lights. A creature can be affected by this spell only once per turn.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Healing and damage each increase by **1d12** per slot level above 7.",
        imagePath: spellImgUrl("conjurecelestial")
    },
    {
        slug: slugify("Delayed Blast Fireball"),
        name: "Delayed Blast Fireball",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "150 feet",
        area: "20-foot-radius sphere",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a ball of bat guano and sulfur" },
        concentration: true,
        ritual: false,
        descriptionMd: "A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one.\n\n" +
            "The spell’s base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn’t ended.\n\n" +
            "If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature’s space or collides with a solid object, the spell ends, and the bead explodes.\n\n" +
            "When the bead explodes, flammable objects in the explosion that aren’t being worn or carried start burning.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Base damage increases by **1d6** per slot level above 7.",
    },
    {
        slug: slugify("Divine Word"),
        name: "Divine Word",
        classes: ["Cleric"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "Creatures of your choice in range",
        tags: ["Control", "Debuff", "Banishment"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Deafened", "Blinded", "Stunned"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You utter a word imbued with power from the Upper Planes. Each creature of your choice in range makes a Charisma saving throw. On a failed save, a target that has 50 Hit Points or fewer suffers an effect based on its current Hit Points, as shown in the Divine Word Effects table. Regardless of its Hit Points, a Celestial, an Elemental, a Fey, or a Fiend target that fails its save is forced back to its plane of origin (if it isn’t there already) and can’t return to the current plane for 24 hours by any means short of a Wish spell.\n\n" +
            "**Divine Word Effects**\n" +
            "**0–20 HP:** The target dies.\n" +
            "**21–30 HP:** The target has the Blinded, Deafened, and Stunned conditions for 1 hour.\n" +
            "**31–40 HP:** The target has the Blinded and Deafened conditions for 10 minutes.\n" +
            "**41–50 HP:** The target has the Deafened condition for 1 minute.",
        scalingMd: "",
        imagePath: spellImgUrl("divineword")
    },
    {
        slug: slugify("Etherealness"),
        name: "Etherealness",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Self",
        area: "Self (and more with higher-level slot)",
        tags: ["Teleportation", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You step into the border regions of the Ethereal Plane, where it overlaps with your current plane. You remain in the Border Ethereal for the duration. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can perceive the plane you left, which looks gray, and you can’t see anything there more than 60 feet away.\n\n" +
            "While on the Ethereal Plane, you can affect and be affected only by creatures, objects, and effects on that plane. Creatures that aren’t on the Ethereal Plane can’t perceive or interact with you unless a feature gives them the ability to do so.\n\n" +
            "When the spell ends, you return to the plane you left in the spot that corresponds to your space in the Border Ethereal. If you appear in an occupied space, you are shunted to the nearest unoccupied space and take Force damage equal to twice the number of feet you are moved.\n\n" +
            "This spell ends instantly if you cast it while you are on the Ethereal Plane or a plane that doesn’t border it, such as one of the Outer Planes.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target up to **3 willing creatures** (incl. you) **per slot level above 7**; they must be within 10 ft.",
        imagePath: spellImgUrl("etherealness")
    },
    {
        slug: slugify("Finger of Death"),
        name: "Finger of Death",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Creation", "Damage", "Control"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You unleash negative energy toward a creature you can see within range. The target makes a Constitution saving throw, taking 7d8 + 30 Necrotic damage on a failed save or half as much damage on a successful one.\n\n" +
            "A Humanoid killed by this spell rises at the start of your next turn as a Zombie that follows your verbal orders.",
        scalingMd: "",
        imagePath: spellImgUrl("fingerofdeath")
    },
    {
        slug: slugify("Fire Storm"),
        name: "Fire Storm",
        classes: ["Cleric", "Druid", "Sorcerer"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "Up to ten contiguous 10-foot cubes",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create up to **ten contiguous 10-ft cubes** of raging fire within range. Creatures in the area make **DEX saves**, taking **7d10 Fire** (half on success). Unattended flammables ignite.",
        scalingMd: "",
        imagePath: spellImgUrl("firestorm")
    },
    {
        slug: slugify("Forcecage"),
        name: "Forcecage",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "100 feet",
        area: "Up to 20-ft cage or 10-ft solid box",
        tags: ["Control", "Warding"],
        saveRequired: "CHA Save (to teleport/plane shift out)",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "ruby dust worth 1,500+ GP (consumed)" },
        concentration: true,
        ritual: false,
        descriptionMd: "An immobile, Invisible, Cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.\n\n" +
            "A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.\n\n" +
            "When you cast the spell, any creature that is completely inside the cage’s area is trapped. Creatures only partially within the area, or those too large to fit inside it, are pushed away from the center of the area until they are completely outside it.\n\n" +
            "A creature inside the cage can’t leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave, it must first make a Charisma saving throw. On a successful save, the creature can use that magic to exit the cage. On a failed save, the creature doesn’t exit the cage and wastes the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.\n\n" +
            "This spell can’t be dispelled by Dispel Magic.",
        scalingMd: "",
        imagePath: spellImgUrl("forcecage")
    },
    {
        slug: slugify("Mirage Arcane"),
        name: "Mirage Arcane",
        classes: ["Bard", "Druid", "Wizard"],
        spellLevel: 7,
        school: "Illusion",
        castingTime: "10 minutes",
        duration: "10 days",
        range: "Sight",
        area: "Up to a 1-mile square",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other rough or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.\n\n" +
            "Similarly, you can alter the appearance of structures or add them where none are present. The spell doesn’t disguise, conceal, or add creatures.\n\n" +
            "The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into Difficult Terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell’s area disappears immediately.\n\n" +
            "Creatures with Truesight can see through the illusion to the terrain’s true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion’s presence, the creature can still physically interact with the illusion.",
        scalingMd: "",
        imagePath: spellImgUrl("miragearcane")
    },
    {
        slug: slugify("Mordenkainen's Magnificent Mansion"),
        name: "Mordenkainen's Magnificent Mansion",
        classes: ["Bard", "Wizard"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "24 hours",
        range: "300 feet",
        area: "Extradimensional dwelling (50 contiguous 10-ft cubes)",
        tags: ["Utility", "Exploration"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature door worth 15+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd: "You conjure a shimmering door in range that lasts for the duration. The door leads to an extradimensional dwelling and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the door remains open. You can open or close it (no action required) if you are within 30 feet of it. While closed, the door is imperceptible.\n\n" +
            "Beyond the door is a magnificent foyer with numerous chambers beyond. The dwelling’s atmosphere is clean, fresh, and warm.\n\n" +
            "You can create any floor plan you like for the dwelling, but it can’t exceed 50 contiguous 10-foot Cubes. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine-course banquet for up to 100 people. Furnishings and other objects created by this spell dissipate into smoke if removed from it.\n\n" +
            "A staff of 100 near-transparent servants attends all who enter. You determine the appearance of these servants and their attire. They are invulnerable and obey your commands. Each servant can perform tasks that a human could perform, but they can’t attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can’t leave the dwelling.\n\n" +
            "When the spell ends, any creatures or objects left inside the extradimensional space are expelled into the unoccupied spaces nearest to the entrance.", scalingMd: "",
        imagePath: spellImgUrl("magnificentmansion")
    },
    {
        slug: slugify("Mordenkainen's Sword"),
        name: "Mordenkainen's Sword",
        classes: ["Bard", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "Spectral sword within 5 ft of targets",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "Melee",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature sword worth 250+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Conjure a hovering **spectral sword**. When it appears, make a **melee spell attack** vs. a creature within **5 ft**: on hit, **4d12 + your spellcasting mod Force**. On later turns, **Bonus Action** to move it **30 ft** and repeat the attack.",
        scalingMd: "",
        imagePath: spellImgUrl("mordenkainenssword")
    },
    {
        slug: slugify("Plane Shift"),
        name: "Plane Shift",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "Up to 9 willing creatures (linked hands)",
        tags: ["Teleportation", "Banishment"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a forked, metal rod worth 250+ GP attuned to a plane" },
        concentration: false,
        ritual: false,
        descriptionMd: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination, as determined by the DM.\n\n" +
            "Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
        scalingMd: "",
        imagePath: spellImgUrl("planeshift")
    },
    {
        slug: slugify("Power Word Fortify"),
        name: "Power Word Fortify",
        classes: ["Bard", "Cleric"],
        spellLevel: 7,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "Up to six creatures",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Bestow **120 Temporary Hit Points**, divided as you choose among **up to six** creatures you can see within range.",
        scalingMd: "",
        imagePath: spellImgUrl("powerwordfortify")
    },
    {
        slug: slugify("Prismatic Spray"),
        name: "Prismatic Spray",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (60 feet)",
        area: "60-foot cone",
        tags: ["Damage", "Control"],
        saveRequired: "DEX Save (varies by ray)",
        attackType: "None",
        damageTypes: ["Fire", "Acid", "Lightning", "Poison", "Cold"],
        conditions: ["Restrained", "Petrified", "Blinded"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Eight rays of light flash from you in a 60-foot cone. Each creature in the cone makes a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it, consulting the Prismatic Rays table.\n\n" +
            "**Prismatic Rays**\n" +
            "**1. Red.** Failed Save: 12d6 Fire damage. Successful Save: Half as much damage.\n" +
            "**2. Orange.** Failed Save: 12d6 Acid damage. Successful Save: Half as much damage.\n" +
            "**3. Yellow.** Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage.\n" +
            "**4. Green.** Failed Save: 12d6 Poison damage. Successful Save: Half as much damage.\n" +
            "**5. Blue.** Failed Save: 12d6 Cold damage. Successful Save: Half as much damage.\n" +
            "**6. Indigo.** Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind.\n" +
            "**7. Violet.** Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (DM’s choice).\n" +
            "**8. Special.** The target is struck by two rays. Roll twice, rerolling any 8.",
        scalingMd: "",
        imagePath: spellImgUrl("prismaticspray")
    },
    {
        slug: slugify("Project Image"),
        name: "Project Image",
        classes: ["Bard", "Wizard"],
        spellLevel: 7,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 1 day",
        range: "500 miles",
        area: "Illusory duplicate at a known location",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a statuette of yourself worth 5+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create an **intangible duplicate** of yourself at any **location within 500 miles** that you’ve seen. You can **see/hear through it**, **move it 60 ft** (Magic action), and make it **gesture and speak**. If it takes any damage, the illusion ends. Physical interaction or **Study (Investigation vs. save DC)** reveals the illusion; discerners see through it and hear **hollow** sound.",
        scalingMd: "",
        imagePath: spellImgUrl("projectimage")
    },
    {
        slug: slugify("Regenerate"),
        name: "Regenerate",
        classes: ["Bard", "Cleric", "Druid"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a prayer wheel" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target regains **4d8 + 15 HP** and then **regains 1 HP at the start of each of its turns** for the duration. **Severed body parts** **regrow** after **2 minutes**.",
        scalingMd: "",
        imagePath: spellImgUrl("regenerate")
    },
    {
        slug: slugify("Resurrection"),
        name: "Resurrection",
        classes: ["Bard", "Cleric"],
        spellLevel: 7,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature dead ≤ 100 years",
        tags: ["Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "With a touch, you revive a dead creature that has been dead for no more than a century, didn’t die of old age, and wasn’t Undead when it died.\n\n" +
            "The creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts.\n\n" +
            "Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.\n\n" +
            "Casting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can’t cast spells again, and you have Disadvantage on D20 Tests.",
        scalingMd: "",
        imagePath: spellImgUrl("resurrection")
    },
    {
        slug: slugify("Reverse Gravity"),
        name: "Reverse Gravity",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "100 feet",
        area: "50-foot-radius, 100-foot-high cylinder",
        tags: ["Control"],
        saveRequired: "DEX Save (to grab a fixed object)",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a lodestone and iron filings" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Reverse gravity in a **50-ft-radius, 100-ft-high cylinder**. Creatures/objects not anchored **fall upward** to the top. A creature can **DEX save** to grab a fixed object. Colliding with a ceiling/anchored object deals normal fall impacts. If nothing is struck, targets **hover at the top** until the spell ends, then **fall**.",
        scalingMd: "",
        imagePath: spellImgUrl("reversegravity")
    },
    {
        slug: slugify("Sequester"),
        name: "Sequester",
        classes: ["Wizard"],
        spellLevel: 7,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "Touch",
        area: "1 willing creature or object",
        tags: ["Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible", "Unconscious"],
        components: { verbal: true, somatic: true, material: true, materialText: "gem dust worth 5,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "With a touch, you magically sequester an object or a willing creature. For the duration, the target has the Invisible condition and can’t be targeted by Divination spells, detected by magic, or viewed remotely with magic.\n\n" +
            "If the target is a creature, it enters a state of suspended animation; it has the Unconscious condition, doesn’t age, and doesn’t need food, water, or air.\n\n" +
            "You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include “after 1,000 years” or “when the tarrasque awakens.” This spell also ends if the target takes any damage.",
        scalingMd: "",
        imagePath: spellImgUrl("sequester")
    },
    {
        slug: slugify("Simulacrum"),
        name: "Simulacrum",
        classes: ["Wizard"],
        spellLevel: 7,
        school: "Illusion",
        castingTime: "12 hours",
        duration: "Until dispelled",
        range: "Touch",
        area: "1 Beast or Humanoid within 10 feet",
        tags: ["Utility", "Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "powdered ruby worth 1,500+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a simulacrum of one Beast or Humanoid that is within 10 feet of you for the entire casting of the spell. You finish the casting by touching both the creature and a pile of ice or snow that is the same size as that creature, and the pile turns into the simulacrum, which is a creature. It uses the game statistics of the original creature at the time of casting, except it is a Construct, its Hit Point maximum is half as much, and it can’t cast this spell.\n\n" +
            "The simulacrum is Friendly to you and creatures you designate. It obeys your commands and acts on your turn in combat. The simulacrum can’t gain levels, and it can’t take Short or Long Rests.\n\n" +
            "If the simulacrum takes damage, the only way to restore its Hit Points is to repair it as you take a Long Rest, during which you expend components worth 100 GP per Hit Point restored. The simulacrum must stay within 5 feet of you for the repair.\n\n" +
            "The simulacrum lasts until it drops to 0 Hit Points, at which point it reverts to snow and melts away. If you cast this spell again, any simulacrum you created with this spell is instantly destroyed.",
        scalingMd: "",
        imagePath: spellImgUrl("simulacrum")
    },
    {
        slug: slugify("Symbol"),
        name: "Symbol",
        classes: ["Bard", "Cleric", "Druid", "Wizard"],
        spellLevel: 7,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "Until dispelled or triggered",
        range: "Touch",
        area: "Glyph up to 10-foot diameter; 60-foot-radius sphere on trigger",
        tags: ["Damage", "Debuff"],
        saveRequired: "Varies (CON or WIS by effect)",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Frightened", "Incapacitated", "Unconscious", "Stunned"],
        components: { verbal: true, somatic: true, material: true, materialText: "powdered diamond worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You inscribe a harmful glyph either on a surface (such as a section of floor or wall) or within an object that can be closed (such as a book or chest). The glyph can cover an area no larger than 10 feet in diameter. If you choose an object, it must remain in place; if it is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\n" +
            "The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.\n\n" +
            "When you inscribe the glyph, you set its trigger and choose which effect the symbol bears: Death, Discord, Fear, Pain, Sleep, or Stunning. Each one is explained below.\n\n" +
            "**Set the Trigger.** You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph.\n\n" +
            "You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password.\n\n" +
            "Once triggered, the glyph glows, filling a 60-foot-radius Sphere with Dim Light for 10 minutes, after which time the spell ends. Each creature in the Sphere when the glyph activates is targeted by its effect, as is a creature that enters the Sphere for the first time on a turn or ends its turn there. A creature is targeted only once per turn.\n\n" +
            "**Death.** Each target makes a Constitution saving throw, taking 10d10 Necrotic damage on a failed save or half as much damage on a successful save.\n\n" +
            "**Discord.** Each target makes a Wisdom saving throw. On a failed save, a target argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has Disadvantage on attack rolls and ability checks.\n\n" +
            "**Fear.** Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened, the target must move at least 30 feet away from the glyph on each of its turns, if able.\n\n" +
            "**Pain.** Each target must succeed on a Constitution saving throw or have the Incapacitated condition for 1 minute.\n\n" +
            "**Sleep.** Each target must succeed on a Wisdom saving throw or have the Unconscious condition for 10 minutes. A creature awakens if it takes damage or if someone takes an action to shake it awake.\n\n" +
            "**Stunning.** Each target must succeed on a Wisdom saving throw or have the Stunned condition for 1 minute.",
        scalingMd: "",
        imagePath: spellImgUrl("symbol")
    },
    {
        slug: slugify("Teleport"),
        name: "Teleport",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 7,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "10 feet",
        area: "Up to 9 willing creatures you can see, or 1 Large-or-smaller object",
        tags: ["Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "This spell instantly transports you and up to eight willing creatures that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be Large or smaller, and it can’t be held or carried by an unwilling creature.\n\n" +
            "The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls 1d100 and consults the Teleportation Outcome table and the explanations after it.\n\n" +
            "**Familiarity.** Here are the meanings of the terms in the table’s Familiarity column:\n\n" +
            "“Permanent circle” means a permanent teleportation circle whose sigil sequence you know.\n" +
            "“Linked object” means you possess an object taken from the desired destination within the last six months, such as a book from a wizard’s library.\n" +
            "“Very familiar” is a place you have visited often, a place you have carefully studied, or a place you can see when you cast the spell.\n" +
            "“Seen casually” is a place you have seen more than once but with which you aren’t very familiar.\n" +
            "“Viewed once or described” is a place you have seen once, possibly using magic, or a place you know through someone else’s description, perhaps from a map.\n" +
            "“False destination” is a place that doesn’t exist. Perhaps you tried to scry an enemy’s sanctum but instead viewed an illusion, or you are attempting to teleport to a location that no longer exists.\n\n" +
            "**Mishap.** The spell’s unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 Force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).\n\n" +
            "**Similar Area.** You and your group (or the target object) appear in a different area that’s visually or thematically similar to the target area. You appear in the closest similar place. If you are heading for your home laboratory, for example, you might appear in another person’s laboratory in the same city.\n\n" +
            "**Off Target.** You and your group (or the target object) appear 2d12 miles away from the destination in a random direction. Roll 1d8 for the direction: 1, east; 2, southeast; 3, south; 4, southwest; 5, west; 6, northwest; 7, north; or 8, northeast.\n\n" +
            "**On Target.** You and your group (or the target object) appear where you intended.",
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
          <td>&mdash;</td>
          <td>&mdash;</td>
          <td>&mdash;</td>
          <td>01&ndash;00</td>
        </tr>
        <tr>
          <td>Linked object</td>
          <td>&mdash;</td>
          <td>&mdash;</td>
          <td>&mdash;</td>
          <td>01&ndash;00</td>
        </tr>
        <tr>
          <td>Very familiar</td>
          <td>01&ndash;05</td>
          <td>06&ndash;13</td>
          <td>14&ndash;24</td>
          <td>25&ndash;00</td>
        </tr>
        <tr>
          <td>Seen casually</td>
          <td>01&ndash;33</td>
          <td>34&ndash;43</td>
          <td>44&ndash;53</td>
          <td>54&ndash;00</td>
        </tr>
        <tr>
          <td>Viewed once or described</td>
          <td>01&ndash;43</td>
          <td>44&ndash;53</td>
          <td>54&ndash;73</td>
          <td>74&ndash;00</td>
        </tr>
        <tr>
          <td>False destination</td>
          <td>01&ndash;50</td>
          <td>51&ndash;00</td>
          <td>&mdash;</td>
          <td>&mdash;</td>
        </tr>
      </tbody>
    </table>
  </div>
`, scalingMd: "",
        imagePath: spellImgUrl("teleport")
    },
    {
  slug: slugify("Ruinous Apotheosis"),
  name: "Ruinous Apotheosis",
  classes: ["Cleric", "Warlock", "Wizard"],
  spellLevel: 7,
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "30 feet",
  area: "1 willing Undead",
  tags: ["Creation", "Control"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: ["Force"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Choose a willing Undead you can see within range. Until the spell ends, ravening power tears through the target’s form.\n\n" +
    "- The target has Advantage on attack rolls.\n" +
    "- The target’s walking Speed is doubled.\n" +
    "- When the target hits with an attack, it deals an extra 2d10 Force damage.\n" +
    "- At the start of each of the target’s turns, it gains 2d12 temporary Hit Points (these replace any temporary Hit Points it already has).\n\n" +
    "**Final Dissolution.** When this spell ends the target is destroyed as its body and animating essence disintegrate. A creature destroyed this way can’t be returned to undeath again or to life by [spells]revivify[/spells], [spells]raise dead[/spells], [spells]resurrection[/spells], or [spells]true resurrection[/spells]; only [spells]wish[/spells] or equally potent divine aid can restore it.",
  scalingMd: "",
  imagePath: spellImgUrl("ruinousapotheosis"),
},
{
    slug: slugify("Simbul’s Synostodweomer"),
    name: "Simbul’s Synostodweomer",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "1 hour",
    range: "Touch",
    area: "1 creature",
    tags: ["Healing", "Buff"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You imbue one creature you touch with magical healing energy for the duration. Whenever the target casts a spell using a spell slot, it can immediately roll a number of unexpended Hit Point Dice equal to the spell slot’s level and regain Hit Points equal to the roll’s total + your spellcasting ability modifier; those dice are then expended.",
    scalingMd: "",
    imagePath: spellImgUrl("simbulssynostodweomer")
},
{
    slug: slugify("Blade Storm"),
    name: "Blade Storm",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Conjuration",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "120 feet",
    area: "20-foot-radius, 40-foot-high Cylinder",
    tags: ["Damage", "Combat"],
    saveRequired: "DEX",
    attackType: "Spell",
    damageTypes: ["Slashing"],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: false,
    ritual: false,
    descriptionMd:
        "A rain of swords begins to fall in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature that starts its turn in the area or enters it for the first time on a turn must succeed on a Dexterity saving throw. On a failed save, the creature takes 6d10 Slashing damage. On a successful save, the creature takes half as much damage.\n\n" +
        "The swords remain plunged into the ground and can be removed and used by anyone within 5 feet of the radius; they are normal longswords. All swords vanish when the spell ends.",
    scalingMd: "",
    imagePath: spellImgUrl("bladestorm")
},
{
    slug: slugify("Glacial Crash"),
    name: "Glacial Crash",
    classes: ["Druid", "Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "300 feet",
    area: "30-foot-radius Sphere",
    tags: ["Damage", "Control"],
    saveRequired: "DEX",
    attackType: "Spell",
    damageTypes: ["Cold", "Bludgeoning"],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "A huge chunk of ice appears in the sky before crashing down at a point within range and shattering into an explosion of ice. Each creature within 30 feet of that point must make a Dexterity saving throw. On a failed save, the creature takes 6d6 Cold damage, and if it was within 10 feet of the point, it takes an additional 6d8 Bludgeoning damage. On a successful save, the creature takes half as much Cold damage, and half as much Bludgeoning damage (if applicable).\n\n" +
        "The spell’s area becomes difficult terrain until the end of your next turn.",
    scalingMd: "",
    imagePath: spellImgUrl("glacialcrash")
},
{
    slug: slugify("Mass Hold"),
    name: "Mass Hold",
    classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 7,
    school: "Enchantment",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "60 feet",
    area: "Up to six Humanoids within 60 feet",
    tags: ["Control"],
    saveRequired: "WIS",
    attackType: "Spell",
    damageTypes: [],
    conditions: ["Paralyzed"],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Choose up to six Humanoids you can see within range. Each target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, a target repeats the save, ending the spell on itself on a success.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** You can target one additional Humanoid for each spell slot level above 7th.",
    imagePath: spellImgUrl("masshold")
},
{
    slug: slugify("Pyrobrand"),
    name: "Pyrobrand",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "5 feet",
    area: "1 creature within 5 feet",
    tags: ["Damage"],
    saveRequired: "DEX",
    attackType: "Melee Spell Attack",
    damageTypes: ["Fire"],
    conditions: [],
    components: {
        verbal: true,
        somatic: false,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Make a Melee Spell Attack against one creature within your reach. On a hit, the target takes 10d10 Fire damage and ignites for the duration. At the end of each of its turns, the ignited target must make a Dexterity saving throw, taking 3d10 Fire damage on a failed save or ending the spell on itself on a success.\n\n" +
        "An ignited creature, or a creature within 5 feet of it, can take a Magic action to douse the flames (smothering them or using sufficient water), ending the spell on that target. These flames are magical and don’t spread to other creatures or objects.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The initial hit’s damage increases by 1d10 for each spell slot level above 7th.",
    imagePath: spellImgUrl("pyrobrand")
},
{
    slug: slugify("Rimebrand"),
    name: "Rimebrand",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "5 feet",
    area: "1 creature within 5 feet",
    tags: ["Damage", "Debuff"],
    saveRequired: "CON",
    attackType: "Melee Spell Attack",
    damageTypes: ["Cold"],
    conditions: [],
    components: {
        verbal: true,
        somatic: false,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Make a Melee Spell Attack against one creature within your reach. On a hit, the target takes 10d10 Cold damage, and its Speed is reduced by 15 feet while you maintain this spell’s effect. At the end of each of its turns, the target must make a Constitution saving throw, ending this effect on a success.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The initial hit’s damage increases by 1d10 for each spell slot level above 7th.",
    imagePath: spellImgUrl("rimebrand")
},
{
    slug: slugify("Venombrand"),
    name: "Venombrand",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "5 feet",
    area: "1 creature within 5 feet",
    tags: ["Damage", "Debuff"],
    saveRequired: "CON",
    attackType: "Melee Spell Attack",
    damageTypes: ["Poison"],
    conditions: ["Poisoned"],
    components: {
        verbal: true,
        somatic: false,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Make a Melee Spell Attack against one creature within your reach. On a hit, the target takes 10d10 Poison damage and has the Poisoned condition while you maintain this spell’s effect. At the end of each of its turns, the target must make a Constitution saving throw, ending this effect on a success.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The initial hit’s damage increases by 1d10 for each spell slot level above 7th.",
    imagePath: spellImgUrl("venombrand")
},
{
    slug: slugify("Flame Seed"),
    name: "Flame Seed",
    classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "60 feet",
    area: "30-foot-radius Sphere (detonates at start of your next turn)",
    tags: ["Damage"],
    saveRequired: "DEX",
    attackType: "Spell",
    damageTypes: ["Fire"],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You launch a seed of coalescing flame to a point you can see within range, where it hovers visibly until it detonates. At the start of your next turn, the seed explodes. Each creature in a 30-foot-radius Sphere centered on the seed must make a Dexterity saving throw, taking 10d12 Fire damage on a failed save, or half as much on a success.\n\n" +
        "The seed is obvious (shedding Dim Light in a 5-foot radius) and remains fixed in place until it explodes.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 for each spell slot level above 7th.",
    imagePath: spellImgUrl("flameseed")
},
{
    slug: slugify("Glacier Seed"),
    name: "Glacier Seed",
    classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "60 feet",
    area: "30-foot-radius Sphere (detonates at start of your next turn)",
    tags: ["Damage"],
    saveRequired: "CON",
    attackType: "Spell",
    damageTypes: ["Cold"],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You launch a seed of subzero frost to a point you can see within range, where it hovers visibly until it detonates. At the start of your next turn, the seed explodes. Each creature in a 30-foot-radius Sphere centered on the seed must make a Constitution saving throw, taking 10d12 Cold damage on a failed save, or half as much on a success.\n\n" +
        "The seed is obvious (shedding Dim Light in a 5-foot radius) and remains fixed in place until it explodes.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 for each spell slot level above 7th.",
    imagePath: spellImgUrl("glacierseed")
},
{
    slug: slugify("Shocking Seed"),
    name: "Shocking Seed",
    classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 7,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "60 feet",
    area: "30-foot-radius Sphere (detonates at start of your next turn)",
    tags: ["Damage"],
    saveRequired: "DEX",
    attackType: "Spell",
    damageTypes: ["Lightning"],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You launch a seed of destructive lightning to a point you can see within range, where it hovers visibly until it detonates. At the start of your next turn, the seed explodes. Each creature in a 30-foot-radius Sphere centered on the seed must make a Dexterity saving throw, taking 10d12 Lightning damage on a failed save, or half as much on a success.\n\n" +
        "The seed is obvious (shedding Dim Light in a 5-foot radius) and remains fixed in place until it explodes.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 for each spell slot level above 7th.",
    imagePath: spellImgUrl("shockingseed")
},


];