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
        descriptionMd: "You harden a willing creature’s flesh like stone. Until the spell ends, the target has resistance to Bludgeoning, Piercing, and Slashing damage.",
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
        descriptionMd: "You assume draconic features of a chosen dragon type (gem, chromatic, or metallic). You gain: **Blindsight 30 ft**; **Draconic Resistance** to one of Acid, Cold, Fire, Force, Lightning, Poison, or Thunder (choose on casting); **Breath Weapon**—when you cast this spell and as a bonus action on later turns, exhale energy in a 60-foot cone; creatures in the area make a Dexterity save, taking 6d8 damage of your resistance type on a failure, or half on a success; **Intimidating Presence**—at the start of your turn, force creatures who can see you to make a Wisdom save against your spell save DC; on a failure they are Frightened (repeat save at end of each turn); **Wings**—a flying speed of 60 feet.",
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
        descriptionMd: "With a touch, you revive a dead creature that has been dead for no more than a century, didn’t die of old age, and wasn’t Undead when it died.\n\n" +
            "The creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts.\n\n" +
            "Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.\n\n" +
            "Casting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can’t cast spells again, and you have Disadvantage on D20 Tests.",
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
        imagePath: spellImgUrl("delayedblastfireball")
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
        descriptionMd:
            "Step into the **Border Ethereal** for the duration. You can move in any direction (vertical movement costs +1 ft/ft). You **perceive** your original plane in gray out to **60 ft**. You and your effects **only interact** with the Ethereal Plane. When the spell ends, you return to the corresponding spot (or nearest unoccupied, taking **Force 2× feet shunted**). Ends instantly if cast on a plane not bordering the Ethereal.",
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
        descriptionMd:
            "Create an **Invisible prison of force**: either a **cage** (up to **20 ft** on a side, ½-inch bars, ½-inch gaps) or a **solid box** (up to **10 ft** on a side). Creatures entirely inside are **trapped**; partials are pushed out. **No nonmagical exit**. To teleport or use interplanar travel out, the creature must **succeed a CHA save** or the magic is wasted. Extends into the **Ethereal**, blocking ethereal travel. **Not dispellable** by *dispel magic*.",
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
        descriptionMd:
            "Transform the **appearance and feel** of terrain in up to a **1-mile square**: visuals, sounds, smells, and **tactile** elements (can create **difficult terrain** or ease it). Can alter or **add structures** (not creatures). Items removed from the area **vanish**. **Truesight** sees true terrain but can still **physically interact** with illusory elements.",
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
        descriptionMd:
            "Transport yourself and up to **8 willing creatures** (hand-linked) to **another plane**. Specify a **general destination** (DM places you in/near it) or go directly to a **known teleportation circle’s sigil sequence** on that plane (appearing in/near it if cramped).",
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
        descriptionMd:
            "Return a creature **dead ≤ 100 years**, not Undead and not of old age, to life with **all HP**. **Neutralizes poisons**, closes mortal wounds, and **restores missing parts**. The creature suffers **−4 to d20 tests**, reduced by **1 per Long Rest**. If dead **≥ 365 days**, casting **exhausts** you: until a Long Rest, you **can’t cast spells** and have **Disadvantage on d20 tests**.",
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
        descriptionMd:
            "Touch an object or willing creature to **hide it from magic**: it becomes **Invisible**, **untargetable by divinations**, and **undetectable** by magic. If a creature, it enters **suspended animation** (**Unconscious**, no aging, no food/water/air). Set a **condition** within 1 mile that ends the spell early (or it ends if the target takes damage).",
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
        descriptionMd:
            "Create a **Construct** duplicate from **snow/ice** of a Beast or Humanoid you touch (the original must stay within **10 ft** for the casting). It uses the original’s stats at that moment, but is a **Construct**, has **half HP max**, and **can’t cast this spell**. It’s **Friendly** to you and acts on **your turn**. It **can’t gain levels** or take **rests**. Repairs require **100 GP/HP** during **your Long Rest** with the sim within **5 ft**. Casting *simulacrum* again **destroys** the prior one.",
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
        descriptionMd:
            "Inscribe a **nearly imperceptible glyph** on a surface or within a closable object (must remain in place). Set a **trigger** and choose one effect: **Death (CON; 10d10 Necrotic)**, **Discord (WIS; bickering, Disadvantage on attacks/checks, 1 min)**, **Fear (WIS; Frightened, must move 30 ft away each turn, 1 min)**, **Pain (CON; Incapacitated, 1 min)**, **Sleep (WIS; Unconscious, 10 min; ends on damage/shaken)**, **Stunning (WIS; Stunned, 1 min)**. On trigger, the glyph glows and fills a **60-ft-radius sphere** with dim light for **10 minutes**, targeting creatures **in, entering, or ending their turn** there (**once per turn** each).",
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
        descriptionMd:
            "Instantly transport **you and up to eight willing creatures** you can see within range, **or** a **Large-or-smaller object** not held by an unwilling creature, to a destination **on your current plane** that is **known to you**. The DM rolls **1d100** using the **Teleportation Outcome** table based on your **familiarity**:\n\n- **On Target**: You arrive exactly where intended.\n- **Off Target**: Arrive **2d12 miles** away in a random direction (1d8 compass).\n- **Similar Area**: Arrive at the closest **visually/thematically similar** location.\n- **Mishap**: Each creature/object takes **3d10 Force**, then **re-roll** on the table (can chain).\n\n**Familiarity categories**: *Permanent circle* (known sigils), *Linked object* (taken from destination within 6 months), *Very familiar*, *Seen casually*, *Viewed once or described*, *False destination* (place doesn’t exist).",
        scalingMd: "",
        imagePath: spellImgUrl("teleport")
    }
];