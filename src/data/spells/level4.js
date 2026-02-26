import { spellImgUrl, slugify } from "../../features/spells/utils";

export const LEVEL4 = [
    {
        slug: slugify("Aero Barrage"),
        name: "Aero Barrage",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "Up to 4 lances (targets within range)",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Slashing"],
        conditions: ["Pushed 10 ft."],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create four lances of rapidly spinning, condensed wind and hurl them at targets within range. You can direct them at one target or several. Make a ranged spell attack for each lance. On a hit, a lance deals 2d8 Slashing damage and pushes the target 10 feet away.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 5th level or higher, you create one additional lance for each slot level above 4th.",
        imagePath: spellImgUrl("aerobarrage")
    },
    {
        slug: slugify("Aura of Desecration"),
        name: "Aura of Desecration",
        classes: ["Cleric", "Paladin"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "30-ft. radius aura",
        tags: ["Damage", "Warding"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Life-defiling energy radiates from you in a 30-foot radius. Creatures of your choice that enter the area for the first time on a turn or start their turn there must make a Constitution saving throw. On a failure, a creature takes 4d6 Necrotic damage and can’t regain hit points until the start of its next turn; on a success, it takes half damage and suffers no other effect.",
        scalingMd: "",
        imagePath: spellImgUrl("auraofdesecration")
    },
    {
        slug: slugify("Aura of Impurity"),
        name: "Aura of Impurity",
        classes: ["Paladin", "Warlock"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "30-ft. radius aura",
        tags: ["Debuff", "Warding"],
        saveRequired: "CHA",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Drained"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Enervating energy radiates from you in a 30-foot radius. Each creature of your choice that enters the aura for the first time on its turn or starts its turn there must succeed on a Charisma saving throw or become drained until the end of its next turn. While drained, a creature rolls a d4 and subtracts it from each ability check, attack roll, and saving throw it makes, and any hit points it regains are halved.",
        scalingMd: "",
        imagePath: spellImgUrl("auraofimpurity")
    },
    {
        slug: slugify("Blinding Radiance"),
        name: "Blinding Radiance",
        classes: ["Cleric", "Paladin", "Sorcerer", "Warlock"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "10-ft. radius around self (bright light 50 ft., dim light +50 ft.)",
        tags: ["Damage", "Control", "Warding"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a strip of magnesium" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Bright, searing light erupts from your form, dazzling those around you. For the duration, you emit bright light in a 50-foot radius and dim light for an additional 50 feet.\n\nEach creature that moves within 10 feet of you for the first time on its turn or starts its turn there must make a Constitution saving throw. On a failed save, a creature takes 3d10 Radiant damage and is Blinded until the start of its next turn. On a successful save, it takes half as much damage and is not blinded.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
        imagePath: spellImgUrl("blindingradiance")
    },
    {
        slug: slugify("Buried Alive"),
        name: "Buried Alive",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature standing on the ground",
        tags: ["Control"],
        saveRequired: "STR",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Restrained", "Blinded", "Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of grave dirt" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You open the ground beneath a creature you can see that is standing on the earth. The target makes a Strength saving throw. On a failure, it is buried up to 10 feet deep: it has total cover, is Restrained and Blinded, and can’t breathe. On a success, it is Prone and its speed is 0 until the end of its next turn.\n\nA buried creature can use its action to make a DC 15 Strength (Athletics) check, digging 5 feet closer to the surface on a success (or reaching the surface if it succeeds by 5 or more, emerging Prone).\n\nImmunity. The target automatically succeeds if standing on any thickness of stone or metal, or at least 2 inches of wood.",
        scalingMd: "",
        imagePath: spellImgUrl("buriedalive")
    },

    {
        slug: slugify("Call of the Wild"),
        name: "Call of the Wild",
        classes: ["Bard", "Druid", "Ranger", "Warlock"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "100-ft emanation (Beasts only)",
        tags: ["Control"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of animal fur or hide" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You unleash a primal howl. Each Beast in a 100-foot emanation centered on you makes a Wisdom save. On a failed save, the target is Charmed, can understand your commands, and follows them on its next turn to the best of its ability. On subsequent turns, you can take a Magic action to issue a new command. On a successful save, the creature is Charmed until the start of your next turn only, with no compulsion to obey. The howl is audible within 300 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("callofthewild")
    },
    {
        slug: slugify("Carnivorous Garden"),
        name: "Carnivorous Garden",
        classes: ["Druid"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "Up to four 5-ft cubes (unoccupied spaces)",
        tags: ["Damage", "Control"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a dried carnivorous plant" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "From up to four unoccupied spaces you can see, rooted carnivorous plants erupt (each a 5-foot cube). Ground within 5 feet of them is difficult terrain. When the plants appear, each makes a melee spell attack against a creature of your choice within 5 feet, dealing 2d8 Piercing on a hit (roll separately).\n\nIf a creature ends its turn within 5 feet of one or more plants, they automatically attack it unless you use your reaction to prevent it (still 2d8 Piercing on a hit). Each plant: AC 14, 30 HP, vulnerable to fire and slashing, regains all HP at the start of your turn if it has at least 1 HP, and dies at 0 HP. When the spell ends, living plants wither, leaving difficult terrain unless killed by fire.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each slot level above 4th, summon 1 additional plant.",
        imagePath: spellImgUrl("carnivorousgarden")
    },
    {
        slug: slugify("Consume Mind"),
        name: "Consume Mind",
        classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Exploration"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a 1-oz fresh or preserved portion of another creature’s brain" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You consume the brain of a non-Undead corpse (dead ≤ 3 days unless preserved) to gain its memories and knowledge. Until the spell ends, you can attempt to recall important facts the creature knew (familial ties, routes, passwords, events, cause of death, etc.). To recall a fact, make an ability check using your spellcasting modifier against DC = the corpse’s Intelligence score. Once you roll for a particular fact, you can’t attempt it again and related details are blocked.",
        scalingMd: "",
        imagePath: spellImgUrl("consumemind")
    },
    {
        slug: slugify("Consuming Pyre"),
        name: "Consuming Pyre",
        classes: ["Druid", "Paladin", "Warlock",],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "1 creature",
        tags: ["Damage", "Debuff"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Fire", "Necrotic", "Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Set a creature ablaze with relentless flames. It makes a Dexterity save. Failed: it takes 2d8 Fire and 2d8 Necrotic or Radiant (choose when you cast), and the radiant flames linger. Success: half damage only. While the flames linger, the creature takes the same damage again at the start of each of its turns. The target or a creature within reach can use an action to allow a repeat save, ending the spell on a success. A creature killed by this spell is reduced to ash, along with any nonmagical gear it wears or carries.",
        scalingMd: "",
        imagePath: spellImgUrl("consumingpyre")
    },
    {
        slug: slugify("Dark Sacrament"),
        name: "Dark Sacrament",
        classes: ["Warlock", "Wizard", "Blood Hunter"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous (blessing up to 10 minutes for Unerring)",
        range: "Self",
        area: "5 feet (melee attack)",
        tags: ["Sangromancy", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a dagger encrusted in jewels worth 100+ gp" },
        concentration: false,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend four Hit Point Dice or the spell automatically fails. Make a melee spell attack against a creature within 5 feet using the Material component of this spell. On a hit, roll the Hit Point Dice expended to cast the spell plus 4d8. You deal Necrotic damage equal to the roll’s total. If this damage causes the creature to be reduced to 0 Hit Points, it immediately dies and you gain one of the following dark blessings of your choice. When you take Radiant damage while you have a dark blessing, you take an extra 1d4 Radiant damage.\n\n" +
            "Unassailable. You have Advantage on all saving throws.\n\n" +
            "Unbreakable. Your size increases by one category (from Medium to Large, for example), you gain a number of Temporary Hit Points equal to your Constitution modifier (minimum 1) at the start of each of your turns, and your weapon attacks deal an extra 1d4 damage.\n\n" +
            "Unerring. Your Proficiency Bonus increases by 2. Your dark blessing ends after 10 minutes or when you are reduced to 0 Hit Points, whichever happens first.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The initial damage increases by 1d8 for each slot level above 4th.",
        imagePath: spellImgUrl("darksacrament")
    },
    {
        slug: slugify("Echoing Lance"),
        name: "Echoing Lance",
        classes: ["Bard", "Sorcerer", "Wizard",],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Thunder"],
        conditions: ["Stunned (save ends)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You emit a targeted burst of sonic energy at a creature within range. The target makes a Constitution save, taking 3d8 Thunder damage and becoming Stunned on a failure, or half damage and not Stunned on a success. At the end of each of its turns, the target repeats the save; on a success, the spell ends, on a failure, it takes an additional 1d8 Thunder damage from the echoes.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The initial damage increases by 1d8 for each slot level above 4th.",
        imagePath: spellImgUrl("echoinglance")
    },
    {
        slug: slugify("Elemental Bane"),
        name: "Elemental Bane",
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "1 creature",
        tags: ["Damage", "Debuff"],
        saveRequired: "CON",
        attackType: "Spell",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
        conditions: ["Loses Resistance (chosen type)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "Choose a creature you can see and a damage type: Acid, Cold, Fire, Lightning, or Thunder. The target makes a Constitution save or is affected for the duration. The first time each turn it takes damage of the chosen type, it takes an extra 2d6 of that type, and it loses any Resistance to that type.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 4th (targets must be within 30 feet of each other).",
        imagePath: spellImgUrl("elementalbane")
    },
    {
        slug: slugify("Elemental Courier"),
        name: "Elemental Courier",
        classes: ["Warlock", "Wizard", "Druid"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "10 feet",
        area: "Small air elemental courier",
        tags: ["Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "25 gp, which the spell consumes" },
        concentration: false,
        ritual: false,
        descriptionMd: "You summon a Small, intangible air elemental bearing an open chest (interior 3 feet per side). While the spell lasts, you can load items into the chest, then name a creature you’ve met or for which you possess a body part or similar token. The elemental and chest appear adjacent to the target; the target knows the chest’s contents and remaining duration. Only the target can open the chest. When the spell ends or the chest is emptied, the elemental disappears; any items not taken reappear at your feet. If the target is on another plane or warded from detection/location, the contents return to you immediately.",
        scalingMd: "**Using a Higher-Level Spell Slot.** With an 8th-level slot, you can send the chest to a creature on a different plane.",
        imagePath: spellImgUrl("elementalcourier")
    },
    {
        slug: slugify("Find Greater Steed"),
        name: "Find Greater Steed",
        classes: ["Paladin"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 summoned steed",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You summon a majestic otherworldly being that takes the form of a superior, loyal steed. It appears in an unoccupied space within range and uses the Greater Otherworldly Steed stat block. If you already have a steed from this spell, the previous one vanishes and is replaced.\n\n" +
            "The steed resembles a Large, rideable beast such as a griffon, dire lion, celestial stag, or even a draconic creature. You choose the steed’s creature type—Celestial, Fey, or Fiend—when casting the spell, which determines certain traits in the stat block.\n\n" +
            "Combat. The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you.\n\n" +
            "Disappearance of the Steed. The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one.",
        statblockHtml: `
  <div class="statblock">
    <h2>GREATER OTHERWORLDLY STEED</h2>
    <hr>
    <p><em>Large Celestial, Fey, or Fiend (your choice), Unaligned</em></p>

    <p>
      <strong>AC</strong> 13 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 35 + 15 × the level of the spell<br>
      <strong>Speed</strong> 80 ft.; Fly 80 ft.<br>
      <strong>Initiative</strong> +2
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 22</td><td>+6</td><td>+6</td>
          <td><strong>INT</strong> 8</td><td>−1</td><td>−1</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>WIS</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 18</td><td>+4</td><td>+4</td>
          <td><strong>CHA</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Immunities</strong> —<br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft., <a href="#">Tremorsense</a> 30 ft. <em>(burrower only)</em>; Passive Perception 13<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>Challenge</strong> — Proficiency Bonus equals your bonus
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Greater Life Bond.</strong> When you regain HP from a spell of 1st level or higher, the steed regains the same number of HP if it’s within 30 feet of you.</p>
    <p><strong>Magic Resistance.</strong> The steed has Advantage on saving throws against spells and other magical effects.</p>
    <p><strong>Surefooted Mount.</strong> The steed has Advantage on saving throws against being knocked Prone. While mounted, you cannot be dismounted except by magic or by falling Unconscious.</p>

    <h3>Actions</h3>
    <p><strong>Mythic Slam.</strong> <em>Melee weapon attack:</em> your spell attack modifier, reach 5 ft., one target.
       <em>Hit:</em> 2d10 + PB Force damage + 1d10 of the origin type — Radiant <em>(Celestial)</em>, Psychic <em>(Fey)</em>, or Necrotic <em>(Fiend)</em>.</p>

    <h3>Bonus Actions</h3>
    <p><strong>Celestial Surge (Celestial only; Recharge after a Long Rest).</strong>
       The steed heals itself or a creature within 10 feet for 4d8 + your spellcasting modifier HP.</p>

    <p><strong>Fey Step (Fey only; Recharge 5–6).</strong>
       The steed teleports itself and its rider up to 90 feet to an unoccupied space it can see.</p>

    <p><strong>Fiendish Roar (Fiend only; Recharge 5–6).</strong>
       Each creature of your choice within 30 feet must succeed on a Wisdom saving throw (DC = your spell save DC) or become Frightened until the end of your next turn.</p>
  </div>
`,
        scalingMd: "**Using a Higher-Level Spell Slot.** Use the higher slot level wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("findgreatersteed")
    },
    {
        slug: slugify("Force Blade"),
        name: "Force Blade",
        classes: ["Sorcerer", "Wizard",],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self (melee reach)",
        tags: ["Creation", "Damage"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "An oversized blade of scintillating force forms in your hand. For the duration, as an action you can sweep the blade through one creature within reach, making a melee spell attack for 2d12 Force damage on a hit.",
        scalingMd: "**Using a Higher-Level Spell Slot.** With a 5th–6th-level slot the attack deals 3d12; with a 7th-level slot or higher, 4d12.",
        imagePath: spellImgUrl("forceblade")
    },
    {
        slug: slugify("Game of Fate"),
        name: "Game of Fate",
        classes: ["Bard", "Wizard",],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "You and 1 creature",
        tags: ["Enchantment", "Social", "Ritual", "Damage"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a Gaming Set" },
        concentration: false,
        ritual: true,
        descriptionMd: "You magically compel a creature within range that can hear and understand you to a nonmagical game with vital consequences. An unwilling creature must succeed on a Wisdom saving throw or be compelled to join you in the game.\n\n" +
            "The loser of the game takes 6d6 Psychic damage. If no player has won or lost by the end of the spell’s duration, both you and the target take this damage. If you or one of your allies harms the target, you forfeit the game, and vice versa if the target or one of its allies harms you.\n\n" +
            "Additionally, you and the target creature can negotiate for greater stakes. You can wager for higher Psychic damage (up to a maximum of 12d6), currency, property, or more esoteric rewards, such as bestowal of a noble title. The spell reveals if a creature attempts to place a bet it can’t fulfill. A bet is finalized when you and the target agree on the bet, solidifying the bet with a handshake or similar gesture. Property or currency bet on the game is teleported to the winner at the game’s conclusion. The loser is also magically compelled to take any action (such as bestowing a noble title) wagered as part of a bet.\n\n" +
            "Lastly, no spell, magical effect, or creature other than you and the target can influence the game’s outcome.",
        scalingMd: "",
        imagePath: spellImgUrl("gameoffate")
    },
    {
        slug: slugify("Geyser"),
        name: "Geyser",
        classes: ["Druid", "Sorcerer", "Wizard",],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "10-foot radius (eruption point)",
        tags: ["Control", "Damage"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Launched upward (60 ft on fail)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Water erupts from the ground at a point you can see. Creatures within 10 feet make a DEX save. On a failure: 4d6 Bludgeoning and flung 60 feet upward. On a success: half damage and the creature chooses to be pushed 10 feet away or 10 feet up.",
        scalingMd: "",
        imagePath: spellImgUrl("geyser")
    },
    {
        slug: slugify("Gravity Barrier"),
        name: "Gravity Barrier",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "60 feet",
        area: "Wall up to 30×10×1 ft, or ring up to 20-ft diameter, 20 ft high, 1 ft thick",
        tags: ["Control", "Damage"],
        saveRequired: "STR",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone (on failed pass-through save)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a wall of increased gravity on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall’s space is difficult terrain. Any ranged weapon attack that passes through the wall’s space automatically fails, and other ranged attacks have disadvantage. Any creature that tries to pass through the wall’s space must succeed on a Strength saving throw or take 4d8 bludgeoning damage and be knocked prone. On a success half as much and not knocked prone.",
        scalingMd: "",
        imagePath: spellImgUrl("gravitybarrier")
    },
    {
        slug: slugify("Guardian of Nature"),
        name: "Guardian of Nature",
        classes: ["Druid", "Ranger"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Buff", "Shapechanging"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Difficult Terrain aura (Great Tree)"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.\n\n" +
            "Primal Beast. Bestial fur covers your body, your facial features become feral, and you gain the following benefits:\n\n" +
            "• Your walking speed increases by 10 feet.\n" +
            "• You gain Blindsight with a range of 90 feet.\n" +
            "• You make Strength-based attack rolls with Advantage.\n" +
            "• Your melee weapon attacks deal an extra 1d8 Force damage on a hit.\n\n" +
            "Great Tree. Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:\n\n" +
            "• You gain 10 Temporary Hit Points at the start of each of your turns.\n" +
            "• You make Constitution saving throws with Advantage.\n" +
            "• You make Dexterity- and Wisdom-based attack rolls with Advantage.\n" +
            "• While you are on the ground, the ground within 15 feet of you is Difficult Terrain for your enemies.",
        scalingMd: "",
        imagePath: spellImgUrl("guardianofnature")
    },
    {
        slug: slugify("Ice Spike"),
        name: "Ice Spike",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature per spike",
        tags: ["Damage"],
        saveRequired: "DEX",
        attackType: "Spell",
        damageTypes: ["Piercing", "Cold"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create a lance of ice that shoots up from the ground to impale a creature within range. The target must make a Dexterity saving throw. On a failed save, it takes 4d8 Piercing damage and 4d8 Cold damage. On a success, it takes only the 4d8 Cold damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 6th or 7th level, you can create a second spike. At 8th or 9th level, you can create a third spike. Additional spikes can target the same or different creatures.",
        imagePath: spellImgUrl("icespike")
    },
    {
        slug: slugify("Intrusive Despair"),
        name: "Intrusive Despair",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "1 creature",
        tags: ["Debuff", "Control"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Wastes actions on failed saves"],
        components: { verbal: true, somatic: true, material: true, materialText: "a devil’s trumpet blossom" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You curse a creature with paranoia and despair. Whenever it takes the Attack or Magic action, it must succeed on a Wisdom saving throw or waste the action. Once it has succeeded on three saving throws against this spell, the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("intrusivedespair")
    },
    {
        slug: slugify("Jumping Jolt"),
        name: "Jumping Jolt",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "1 creature (chains up to 5 jumps, 20 ft between targets)",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Release an arc of lightning at a creature within range. Make a ranged spell attack. On a hit, the target takes 4d12 Lightning damage, and the spell can jump to another target within 20 feet of the last target (new attack roll). It cannot hit the same creature twice or exceed the spell’s range, and can jump at most five times. On a miss, the target takes half damage and the spell does not jump.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Starting damage increases by 1d12 per slot level above 4th.",
        imagePath: spellImgUrl("jumpingjolt")
    },
    {
        slug: slugify("Madness Incarnate"),
        name: "Madness Incarnate",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard",],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Control"],
        saveRequired: "WIS",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Charmed", "Compelled to attack commanded target (see text)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "One creature that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The creature has Disadvantage on the saving throw if it is already in a state of Anger (such as Rage, Frenzy, or Wild Shape with an Anger feat).\n\n" +
            "The eyes of the affected creature glow red and a sense of ferocity overtakes them. On their turn, they target a creature that the caster has mentally commanded them to attack. If the commanded target moves out of range, the Charmed creature instead moves toward the nearest hostile creature (to the caster) and makes a round of attacks. The target repeats the saving throw at the end of each of its turns, ending the spell on itself on a success.\n\n" +
            "On your later turns, you must take the Magic action to maintain control of the target, or the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("madnessincarnate")
    },
    {
        slug: slugify("Mirror Army"),
        name: "Mirror Army",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self (30 feet)",
        area: "Allies of your choice within 30 feet",
        tags: ["Defense"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a decorative mirror" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Illusory duplicates of each chosen ally within 30 ft appear and mirror their movements. When a creature targets an affected ally with an attack, roll a d6 for each duplicate that ally has; on 3+ on any die, the attack targets a duplicate instead. Duplicates are destroyed when hit. Unaffected if the attacker can’t see, relies on non-sight senses (e.g., blindsight), or perceives illusions as false (e.g., truesight). The spell ends when all duplicates are destroyed.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For every 2 slot levels above 4th, each ally gains one additional duplicate.",
        imagePath: spellImgUrl("mirrorarmy"),
    },
    {
        slug: slugify("Murder of Crows"),
        name: "Murder of Crows",
        classes: ["Druid", "Ranger", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (30 feet)",
        area: "30-foot cone",
        tags: ["Damage", "Control"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: ["Blinded (save ends; ends early if it regains HP)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a crow feather" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You release a rending cloud of spectral crows in a 30-ft cone. Each creature makes a Dexterity save, taking 5d6 Force damage on a fail (half on success). On a failure, it is Blinded and repeats the save at the end of each of its turns, ending the effect on a success or if it regains any HP. A creature is affected only once.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 4th.",
        imagePath: spellImgUrl("murderofcrows"),
    },
    {
        slug: slugify("Orbital Stones"),
        name: "Orbital Stones",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self; stones within 10 feet",
        tags: ["Damage", "Defense"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack (bonus action)",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You raise three Small or Medium stones within 10 ft to orbit you. With all three, you have three-quarters cover; with at least one, you have half cover. As a bonus action, fling a stone at a target within 60 ft: make a ranged spell attack for 3d10 Bludgeoning damage and push the target 5 ft on a hit. Stones are expended as they’re flung.",
        scalingMd: "",
        imagePath: spellImgUrl("orbitalstones"),
    },
    {
        slug: slugify("Platinum Carnage"),
        name: "Platinum Carnage",
        classes: ["Paladin", "Sorcerer", "Wizard",],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous; area hazards persist 1 minute",
        range: "Self (20 feet)",
        area: "20-foot emanation around you; difficult/hostile terrain for 1 minute",
        tags: ["Damage", "Control"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Platinum spikes erupt in a 20-ft emanation. Creatures in the area make a Dexterity save, taking 6d8 Piercing damage and their Speed becomes 0 until the end of their next turn on a failure (half damage and no Speed reduction on success). For 1 minute, the ground remains spiked: when a creature moves into or within the area, it takes 1d10 Piercing damage for every 5 ft it travels.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The initial damage increases by 1d8 for each slot level above 4th.",
        imagePath: spellImgUrl("platinumcarnage"),
    },
    {
        slug: slugify("Poison Puff"),
        name: "Poison Puff",
        classes: ["Druid", "Ranger", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 round",
        range: "Self (30 feet)",
        area: "30-foot cone",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: ["Poisoned (until start of next turn on failed save)"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You exhale a toxic cone. Creatures in a 30-ft cone make a Constitution save. On a failure, a target takes 4d12 Poison damage and is Poisoned until the start of its next turn; on a success, it takes half and isn’t poisoned. The area is lightly obscured until your next turn; any creature that ends its turn in the area takes 2d4 Poison damage.",
        scalingMd: "",
        imagePath: spellImgUrl("poisonpuff"),
    },
    {
        slug: slugify("Primordial Power"),
        name: "Primordial Power",
        classes: ["Druid", "Ranger"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of clay" },
        concentration: true,
        ritual: false,
        descriptionMd: "When you cast this spell, grant a creature in range a portion of the power of the elementals. For the duration, the creature can speak and understand Primordial and gains additional benefits based on the element you choose when you cast the spell:\n\n" +
            "Air. The target has Resistance to Lightning and Thunder damage. In addition, it has a Fly Speed of 30 feet.\n\n" +
            "Coldfire. The target has Resistance to Cold damage. In addition, it can use a Bonus Action to expend a Hit Point Die, regaining a number of Hit Points equal to the number rolled plus its Constitution modifier. When the target takes Fire damage, it can’t use this Bonus Action on its next turn.\n\n" +
            "Earth. The target has Advantage on saving throws against being moved or knocked Prone. In addition, it has Tremorsense with a range of 30 feet.\n\n" +
            "Fire. The target has Resistance to Fire damage. In addition, when the target takes damage from a creature that is within 5 feet of it, it can take a Reaction to make one melee attack against that creature, using a weapon or an Unarmed Strike.\n\n" +
            "Water. The target has Resistance to Acid damage. In addition, it can breathe underwater and has a Swim Speed of 60 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("primordialpower"),
    },
    {
        slug: slugify("Psychic Lance"),
        name: "Psychic Lance",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1 creature (or named target in range)",
        tags: ["Damage", "Debuff"],
        saveRequired: "INT Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Stunned (until end of your next turn on failed save)"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A shimmering lance of thought strikes a creature you see in range, or a named creature if within range. On a failed Intelligence save, it takes 7d6 Psychic damage and is Stunned until the end of its next turn. On a success, it takes half and isn’t stunned.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 4th.",
        imagePath: spellImgUrl("psychiclance"),
    },
    {
        slug: slugify("Redeemer's Shield"),
        name: "Redeemer's Shield",
        classes: ["Cleric", "Paladin", "Wizard"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Self",
        area: "Self",
        tags: ["Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A radiant shield wraps you: +3 AC and advantage on saving throws vs spells and magical effects. You can’t stack other magical AC increases (e.g., shield of faith, shield, Fizban’s Platinum Shield). Ends early after you take damage twice.",
        scalingMd: "",
        imagePath: spellImgUrl("redeemersshield"),
    },
    {
        slug: slugify("Repair"),
        name: "Repair",
        classes: ["Artificer"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 construct or inanimate object",
        tags: ["Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Touch a construct or object to restore 10d6 HP and reattach broken parts. If damage was due to age, you may instead revert wear by 10d6 years (only improves condition).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase HP restored (or years reversed) by 2d6 per slot above 4th.",
        imagePath: spellImgUrl("repair"),
    },
    {
        slug: slugify("Ride the Lightning"),
        name: "Ride the Lightning",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (60 feet)",
        area: "Line between start and destination (5 feet wide)",
        tags: ["Damage", "Mobility"],
        saveRequired: "DEX Save (half)",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a length of copper wire" },
        concentration: false,
        ritual: false,
        descriptionMd: "You transform yourself into a bolt of lightning and teleport up to 60 feet to an unoccupied space you can see. Each creature within 5 feet of the line created between your starting point and final destination makes a Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much on a successful one.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each slot level above 4th, +1d6 damage and +10 ft teleport distance.",
        imagePath: spellImgUrl("ridethelightning"),
    },
    {
        slug: slugify("Sanctum of the Shepherd"),
        name: "Sanctum of the Shepherd",
        classes: ["Cleric", "Paladin", "Wizard",],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "24 hours",
        range: "5 feet",
        area: "20-foot-radius sphere",
        tags: ["Warding", "Rest"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "adamantine or diamond powder worth 200+ gp, consumed",
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A faint, shimmering 20-ft-radius sphere forms. You and up to your spellcasting mod creatures can draw protective magic by finishing a Short Rest inside: the sphere vanishes and those creatures gain +1 AC for the remainder of the duration. Creatures that don’t finish a Long Rest in the sphere gain no benefit.",
        scalingMd: "",
        imagePath: spellImgUrl("sanctumoftheshepherd"),
    },
    {
        slug: slugify("Scarlet Cylinder"),
        name: "Scarlet Cylinder",
        classes: ["Sorcerer", "Warlock",],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "20-foot-radius, 100-foot-high cylinder",
        tags: ["Sangromancy", "Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "parchment with a circle drawn in human blood",
        },
        concentration: false,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend four Hit Point Dice or the spell automatically fails. A crimson pillar erupts from the ground in a 20-foot-radius, 100-foot-high Cylinder centered on a point within range. Each creature within the Cylinder makes a Constitution saving throw.\n\n" +
            "On a failed save, the creature takes Necrotic damage equal to a roll of the Hit Point Dice expended on the spell plus your spellcasting ability modifier. On a successful save, the creature takes half as much damage.\n\n" +
            "For each creature that fails the saving throw against this spell, you gain 10 Temporary Hit Points.",
        scalingMd: "",
        imagePath: spellImgUrl("scarletcylinder"),
    },
    {
        slug: slugify("Shadow of Moil"),
        name: "Shadow of Moil",
        classes: ["Warlock"],
        spellLevel: 4,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self (10-foot light suppression)",
        tags: ["Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Heavily obscured to others"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "an undead eyeball in a gem worth ≥150 gp",
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Flame-like shadows wreathe you; you are heavily obscured to others. Within 10 ft, bright light becomes dim and dim becomes darkness. You gain resistance to Radiant. When a creature within 10 ft hits you, it takes 2d8 Necrotic.",
        scalingMd: "",
        imagePath: spellImgUrl("shadowofmoil"),
    },
    {
        slug: slugify("Shared Judgement"),
        name: "Shared Judgement",
        classes: ["Cleric", "Paladin"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self; reactive blast within 60 feet",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Once on each of your turns when you reduce an Undead to 0 HP, you can deal 5d6 Radiant damage to a creature you can see within 60 ft.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d6 per slot level above 4th.",
        imagePath: spellImgUrl("sharedjudgement"),
    },
    {
        slug: slugify("Sickening Radiance"),
        name: "Sickening Radiance",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "120 feet",
        area: "30-foot-radius sphere (spreads around corners)",
        tags: ["Damage", "Debuff"],
        saveRequired: "CON Save (on entry/turn start)",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: ["Exhaustion (levels fade when spell ends)", "Revealed (glow; no Invisible benefit)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Dim, greenish light fills a 30-ft-radius sphere. When a creature enters the area or starts its turn there, it makes a CON save or takes 4d10 poison damage, suffers 1 level of Exhaustion, and glows (cannot benefit from being Invisible). The light and Exhaustion from this spell end when the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("sickeningradiance"),
    },
    {
        slug: slugify("Spatial Tear"),
        name: "Spatial Tear",
        classes: ["Ranger",],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self (30 feet)",
        area: "30-foot line, 5 feet wide",
        tags: ["Damage"],
        saveRequired: "DEX Save (half on success)",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee weapon you’re proficient with (≥ 1 cp)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Sweep a weapon to slash space itself. Creatures in a 30-ft × 5-ft line make a DEX save; on a failure, they take 6d6 Force (half on success).",
        scalingMd: "",
        imagePath: spellImgUrl("spatialtear"),
    },
    {
        slug: slugify("Spirit of Death"),
        name: "Spirit of Death",
        classes: ["Sorcerer", "Warlock", "Wizard",],
        spellLevel: 4,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "Summoned Reaper Spirit (within 10 feet of target)",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a gilded card depicting an avatar of death (≥ 400 gp)",
        },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a spirit that embodies death itself. Choose a creature you can see within range. The spirit manifests in an unoccupied space that you can see within 10 feet of the target, and the target becomes haunted by the spirit. The spirit uses the Reaper Spirit stat block. The spirit disappears when it or the haunted creature is reduced to 0 Hit Points, or when the spell ends.\n\n" +
            "The Reaper Spirit is an ally to you and your companions. In combat, the spirit shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you), but it will only attack the haunted creature. If you don’t issue the spirit any commands, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>REAPER SPIRIT</h2>
    <hr>
    <p><em>Medium undead</em></p>

    <p>
      <strong>AC</strong> 11 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 40 + 10 for each spell level above 4th<br>
      <strong>Speed</strong> 30 ft.; fly 30 ft. (hover)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td>
          <td><strong>INT</strong> 16</td><td>+3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td>
          <td><strong>WIS</strong> 16</td><td>+3</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 16</td><td>+3</td>
          <td><strong>CHA</strong> 16</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Immunities</strong> necrotic, poison<br>
      <strong>Condition Immunities</strong> charmed, frightened, paralyzed, poisoned<br>
      <strong>Senses</strong> darkvision 60 ft., passive Perception 10<br>
      <strong>Languages</strong> understands the languages you speak<br>
      <strong>Challenge — Proficiency Bonus</strong> equals your bonus
    </p>

    <p><strong>Incorporeal Movement.</strong> The reaper can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes 1d10 force damage for every 5 feet traveled.</p>

    <p><strong>Haunting Tracker.</strong> You and the reaper can sense the direction and distance to the haunted creature if it’s on the same plane of existence as you.</p>

    <hr>

    <h3>Actions</h3>

    <p><strong>Multiattack.</strong> The reaper makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Reaping Scythe.</strong>
      <em>Melee Weapon Attack:</em> your spell attack modifier to hit (with advantage), reach 5 ft., one target.
      <em>Hit:</em> 1d10 + 3 + the spell’s level necrotic damage.
    </p>

    <p>
      <strong>Paralyzing Fear (1/Day).</strong> The reaper attempts to instill fear into a creature it can see within 60 feet. The creature must succeed on a Wisdom saving throw against your spell save DC or be frightened of the reaper for 1 minute. While frightened this way, the creature’s speed is 0, and it can’t benefit from any bonus to its speed. The frightened creature can repeat the saving throw at the end of each of its turns, or immediately after it takes damage, ending the effect on itself on a success.
    </p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the higher level wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("spiritofdeath"),
    },
    {
        slug: slugify("Starfall"),
        name: "Starfall",
        classes: ["Druid", "Sorcerer", "Wizard",],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self (30 feet)",
        area: "30-foot radius centered on you (others only)",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When cast and as a bonus action each turn, raining stars deal 1d4 + 1 Radiant to all other creatures within 30 ft of you.",
        scalingMd: "",
        imagePath: spellImgUrl("starfall"),
    },
    {
        slug: slugify("Stinging Swarm"),
        name: "Stinging Swarm",
        classes: ["Druid", "Ranger", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "5-foot cube (moves up to 30 feet/bonus action)",
        tags: ["Damage"],
        saveRequired: "CON Save (Poison rider)",
        attackType: "None",
        damageTypes: ["Piercing", "Poison"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You conjure a magical swarm of flying insects that fill a 5-foot Cube within range. For the duration of the spell, the swarm is magically replenished and cannot be destroyed.\n\n" +
            "As a Bonus Action, you can direct the swarm to move up to 30 feet. If the swarm enters another creature's space, it stops and swarms them, stinging repeatedly, and cannot be moved until the start of your next turn. The creature takes 2d4 Piercing damage and must make a Constitution saving throw, taking 2d12 Poison damage on a failed save or half as much damage on a successful one.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** +2d4 Piercing per slot above 4th.",
        imagePath: spellImgUrl("stingingswarm"),
    },
    {
        slug: slugify("Storm Sphere"),
        name: "Storm Sphere",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "150 feet",
        area: "20-foot-radius sphere (difficult terrain)",
        tags: ["Damage", "Control", "Debuff"],
        saveRequired: "STR Save (bludgeoning on entry/turn end)",
        attackType: "Ranged Spell Attack (bonus action lightning)",
        damageTypes: ["Bludgeoning", "Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A whirling air sphere appears. Creatures there on create or at turn end make STR save or take 2d6 Bludgeoning. As a bonus action, hurl a lightning bolt from the center at a target within 60 ft (ranged spell attack, advantage if target is in the sphere) for 4d6 Lightning. Within 30 ft of the sphere, creatures have disadvantage on Wis (Perception) checks to listen.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** +1d6 to each damage type per slot above 4th.",
        imagePath: spellImgUrl("stormsphere"),
    },
    {
        slug: slugify("Suffocate"),
        name: "Suffocate",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "CON Save (repeat via caster’s action)",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: ["Disadvantage (ability checks)", "Incapacitated (on 3 consecutive fails)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a whirling sphere of air around a creature that causes them to struggle to breathe. The target must make a Constitution saving throw. On a failure, the target loses 5d8 hit points due to lack of air, has Disadvantage on all ability checks, and cannot speak. On a success, the target takes half as much damage and suffers no other effects.\n\n" +
            "For the duration, as an action, you can force the creature to make a saving throw against this effect again. If a target fails their saving throw against this spell three times in a row, they become Incapacitated until they succeed on a save or the spell ends. If you don’t use your action to force the target to make a save, it counts as a success.\n\n" +
            "A creature that does not need to breathe is unaffected by this spell.",
        scalingMd: "",
        imagePath: spellImgUrl("suffocate"),
    },
    {
        slug: slugify("Summon Greater Demon"),
        name: "Summon Greater Demon",
        classes: ["Warlock", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "60 feet",
        area: "1 demon (CR ≤ 5; higher with slot)",
        tags: ["Summoning"],
        saveRequired: "CHA Save (demon control each turn end)",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "fresh humanoid blood (past 24h) or preserved humanoid heart (consumed if used as warding circle)",
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Summon a CR 5 or lower demon (e.g., barlgura, shadow demon). It acts on its own initiative. Each of its turn ends with a CHA save (disadvantage if you speak its true name): on fail it still obeys; on success, it breaks free and attacks the nearest non-demons. Warding blood circle can prevent it from crossing/targeting within.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** CR cap +1 per slot above 4th.",
        imagePath: spellImgUrl("summongreaterdemon"),
    },
    {
        slug: slugify("Storm Shot (Ranger)"),
        name: "Storm Shot",
        classes: ["Ranger"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Touch",
        area: "1 ammo/thrown weapon",
        tags: ["Damage", "Buff"],
        saveRequired: "None",
        attackType: "Ranged",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "ammo or thrown weapon (≥ 1 cp)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You touch a piece of ammunition or weapon with the thrown property, imbuing it with the power of a hurricane for the duration. The first time you attack with the empowered item, it unleashes a blasting gale force, greatly empowering the shot. On a hit, the target takes an additional 4d8 damage from the attack, and is knocked backwards 30 feet. Any creature the target is knocked into by this movement takes 2d8 bludgeoning damage. On a miss, the target takes half as much damage and is not knocked back.\n\n" +
            "Once an attack has been made with the piece of ammunition or weapon, the spell ends.",
        scalingMd: "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 5th level, the shot deals an additional 1d8 damage and the target is knocked backwards an additional 10 feet.",
        imagePath: spellImgUrl("stormshot"),
    },
    {
        slug: slugify("Superior Darkvision"),
        name: "Superior Darkvision",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Buff", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a willing creature, granting them darkvision that pierces through even magical darkness. For the duration, the target gains darkvision out to 120 feet, and can see through nonmagical and magical darkness as if it were dim light.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 6th level or higher, the creature also gains advantage on saving throws against blindness for the duration."
    },
    {
        slug: slugify("Supernal Smite"),
        name: "Supernal Smite",
        classes: ["Paladin"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "Self",
        area: "Self",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon shatters the ambient magic surrounding the creature, and the attack deals an extra 4d6 Force damage. If the creature is concentrating on a spell, that concentration is broken.\n\nIn addition, any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spells’ level. On a successful check, the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The spell level of a spell automatically dispelled by this smite is increased by 1 for every slot level above 4th, and the force damage increases by 1d6 per slot level above 4th."
    },
    {
        slug: slugify("Transmute"),
        name: "Transmute",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch (5 feet)",
        area: "Up to one 5-foot cube of material",
        tags: ["Control", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "nonmagical material" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "By touching a natural nonmagical material you can cause its base material to change: any metal can become any other metal or any wood can become any other type of wood, with limitations. When casting this spell on water you may change the liquid into another form of liquid but not into a solid unless into ice, and this spell is unable to affect gems. When casting this spell you can affect up to a 5-foot cube worth of materials.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The area you can affect increases by a 5-foot cube for every spell slot above 4th."
    },
    {
        slug: slugify("Viscous Sheath"),
        name: "Viscous Sheath",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Sangromancy"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Grappled"],
        components: { verbal: true, somatic: true, material: true, materialText: "a bloody funerary shroud" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend seven Hit Dice or the spell automatically fails. Your body is wrapped in clotted blood. Whenever a creature within 5 feet of you hits you with a melee attack roll, the attacker takes Necrotic damage. To determine this damage, roll the Hit Point Dice expended to cast the spell plus your spellcasting ability modifier.\n\nIf a creature hits you with a Melee weapon, you can take a Reaction to have clots form around the weapon, entrapping it. The attacker must succeed on a Strength saving throw or the weapon sticks to you. If the attacker doesn’t release the weapon, the creature has the Grappled condition while the weapon is stuck. While stuck, the weapon can’t be used. The target can take an action to make a Strength (Athletics) check against your spell save DC, freeing the weapon on a success. The creature can also release the weapon to end the Grappled condition.\n\nYou can trap a number of weapons equal to the number of Hit Dice expended to cast the spell. When the spell ends, the weapons are released.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can trap one additional weapon for each spell slot level above 4."
    },
    {
        slug: slugify("Watery Sphere"),
        name: "Watery Sphere",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "5-foot-radius sphere",
        tags: ["Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained", "Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a droplet of water" },
        concentration: true,
        ritual: false,
        descriptionMd: "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell’s duration.\n\n" +
            "Any creature in the sphere’s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature’s choice outside the sphere. A Huge or larger creature automatically succeeds on the saving throw. On a failed save, a creature is restrained by the sphere and is engulfed by the water, beginning to Suffocate. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.\n\n" +
            "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.\n\n" +
            "As a Magic Action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.\n\n" +
            "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
    },
    {
        slug: slugify("Word of Despair"),
        name: "Word of Despair",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Frightened", "Stunned"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A soul-crushing word robs the target of hope.\n\n• If the target has 70 HP or fewer, it becomes Frightened and Stunned for 1 round, then Frightened for 1 minute.\n• Otherwise, it must make a Wisdom saving throw or be Frightened for 1 minute (repeat the save at the end of each of its turns).",
        scalingMd: ""
    },
    {
        slug: slugify("Word of Fire"),
        name: "Word of Fire",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You speak a word that ignites the soul.\n\n• If the target has 40 HP or fewer, it erupts in flame, taking 6d10 Fire damage and catching fire, taking 1d10 Fire at the start of each of its turns for 1 minute or until it uses an action to extinguish the flames.\n• Otherwise, the target takes 4d10 Fire damage and does not catch fire.",
        scalingMd: ""
    },
    {
        slug: slugify("Word of Weakness"),
        name: "Word of Weakness",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You utter a frail, withering word.\n\n• If the target has 60 HP or fewer, it takes 4d8 Necrotic damage and is weakened: its weapon attacks deal half damage for the duration.\n• Otherwise, it takes 4d8 Necrotic damage and must succeed on a Constitution saving throw or be weakened until the end of its next turn.",
        scalingMd: ""
    },
    {
        slug: slugify("Arcane Eye"),
        name: "Arcane Eye",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Divination",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "30 feet",
        area: "Invisible eye",
        tags: ["Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of bat fur" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You create an Invisible, invulnerable eye within range that hovers for the duration. You mentally receive visual information from the eye, which can see in every direction and has Darkvision 30 ft. As a Bonus Action, you can move the eye up to 30 feet in any direction. Solid barriers block movement, but it can pass through an opening as small as 1 inch.",
        scalingMd:
            "",
        imagePath: spellImgUrl("arcaneeye")
    },
    {
        slug: slugify("Aura of Life"),
        name: "Aura of Life",
        classes: ["Cleric", "Paladin"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self (30 feet)",
        area: "30-foot emanation",
        tags: ["Healing", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "An aura radiates from you in a 30-foot emanation for the duration. While in the aura, you and your allies have Resistance to Necrotic damage, and your Hit Point maximums can’t be reduced. If an ally at 0 HP starts its turn in the aura, that ally regains 1 HP.",
        scalingMd:
            "",
        imagePath: spellImgUrl("auraoflife")
    },
    {
        slug: slugify("Aura of Purity"),
        name: "Aura of Purity",
        classes: ["Cleric", "Paladin"],
        spellLevel: 4,
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
            "An aura radiates from you in a 30-foot emanation. While in the aura, you and your allies have Resistance to Poison damage and Advantage on saving throws to avoid or end effects that include the Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, or Stunned conditions.",
        scalingMd:
            "",
        imagePath: spellImgUrl("auraofpurity")
    },
    {
        slug: slugify("Banishment"),
        name: "Banishment",
        classes: ["Cleric", "Paladin", "Sorcerer", "Warlock", "Wizard", "Illrigger"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "1 creature",
        tags: ["Control", "Banishment"],
        saveRequired: "CHA Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Incapacitated"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pentacle" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "One creature you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target is Incapacitated. When the spell ends, it reappears in the space it left (or the nearest unoccupied space).\n\nIf the target is an Aberration, Celestial, Elemental, Fey, or Fiend and the spell lasts 1 minute, it doesn’t return; instead it is sent to a location on a plane associated with its type (DM’s choice).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can target one additional creature for each slot level above 4.",
        imagePath: spellImgUrl("banishment")
    },
    {
        slug: slugify("Blight"),
        name: "Blight",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard", "Illrigger"],
        spellLevel: 4,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature or plant",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A creature you can see makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save, or half as much on a success. Plant creatures automatically fail the save. You can also target a nonmagical plant (not a creature), which simply withers and dies.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each slot level above 4.",
        imagePath: spellImgUrl("blight")
    },
    {
        slug: slugify("Charm Monster"),
        name: "Charm Monster",
        classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "30 feet",
        area: "1 creature",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "One creature you can see makes a Wisdom saving throw, with Advantage if you or your allies are fighting it. On a failed save, the target is Charmed until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 4.",
        imagePath: spellImgUrl("charmmonster")
    },
    {
        slug: slugify("Compulsion"),
        name: "Compulsion",
        classes: ["Bard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "Creatures of your choice",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Each creature of your choice that you can see within range must succeed on a Wisdom saving throw or be Charmed. For the duration, as a Bonus Action, designate a horizontal direction; each Charmed target must use as much movement as possible to move that way on its next turn (safest route). After moving, the target repeats the save, ending the spell on itself on a success.",
        scalingMd:
            "",
        imagePath: spellImgUrl("compulsion")
    },
    {
        slug: slugify("Confusion"),
        name: "Confusion",
        classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "10-foot-radius sphere",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "three nut shells" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Each creature in a 10-foot-radius sphere centered on a point you choose must make a Wisdom saving throw. On a failure, the target can’t take Bonus Actions or Reactions and must roll 1d10 at the start of each of its turns to determine behavior:\n\n" +
            "1 – The target uses all movement to move in a random cardinal direction (1–4 = N/E/S/W) and takes no action.\n" +
            "2–6 – The target doesn’t move or take actions.\n" +
            "7–8 – The target doesn’t move and makes one melee attack against a random creature within reach; if none, it takes no action.\n" +
            "9–10 – The target chooses its behavior.\n\n" +
            "At the end of each of its turns, an affected target repeats the save, ending the effect on itself on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The sphere’s radius increases by 5 feet for each slot level above 4.",
        imagePath: spellImgUrl("confusion")
    },
    {
        slug: slugify("Conjure Minor Elementals"),
        name: "Conjure Minor Elementals",
        classes: ["Druid", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "15-foot emanation",
        tags: ["Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure elemental spirits that flit around you in a 15-foot emanation. Until the spell ends, any attack you make deals an extra 2d8 damage (Acid, Cold, Fire, or Lightning; your choice when you make the attack) to creatures in the emanation. The ground in the area is Difficult Terrain for your enemies.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The bonus damage increases by 1d8 for each slot level above 4.",
        imagePath: spellImgUrl("conjureminorelementals")
    },
    {
        slug: slugify("Conjure Woodland Beings"),
        name: "Conjure Woodland Beings",
        classes: ["Druid", "Ranger"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "10-foot emanation",
        tags: ["Summoning"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Nature spirits flit around you in a 10-foot emanation. Whenever the emanation enters a creature’s space, or when a creature enters or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save, or half on a success. A creature makes this save only once per turn. You can also take the Disengage action as a Bonus Action for the duration.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each slot level above 4.",
        imagePath: spellImgUrl("conjurewoodlandbeings")
    },
    {
        slug: slugify("Control Water"),
        name: "Control Water",
        classes: ["Cleric", "Druid", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "300 feet",
        area: "Up to a 100-foot cube",
        tags: ["Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a mixture of water and dust" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You control water in an area up to a 100-foot cube, choosing one effect and changing it on later turns with a Magic action:\n\n" +
            "Flood. Raise standing water by up to 20 feet, or create a 20-foot-tall wave that traverses the area (vehicles carried; 25% chance to capsize Huge or smaller). The wave repeats at the start of your next turn while this effect lasts.\n\n" +
            "Part Water. Create a trench across the area; water forms walls to either side until the effect ends, then refills over the next round.\n\n" +
            "Redirect Flow. Make flowing water move in a direction you choose; it resumes natural flow once beyond the area.\n\n" +
            "Whirlpool. In water at least 50 feet square and 25 feet deep, create a whirlpool (5-ft. base, up to 50-ft. top, 25-ft. tall). Creatures within 25 feet are pulled 10 feet toward it. When a creature enters or ends its turn there, it makes a Strength save, taking 2d8 Bludgeoning on a fail or half on a success. Escaping requires an action and a successful Strength (Athletics) check vs. your save DC.",
        scalingMd:
            "",
        imagePath: spellImgUrl("controlwater")
    },
    {
        slug: slugify("Death Ward"),
        name: "Death Ward",
        classes: ["Cleric", "Paladin", "Illrigger"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1 creature",
        tags: ["Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a creature and ward it against death. The first time the target would drop to 0 HP before the spell ends, it instead drops to 1 HP, and the spell ends. If still active when the target would be instantly killed without taking damage, that effect is negated and the spell ends.",
        scalingMd:
            "",
        imagePath: spellImgUrl("deathward")
    },
    {
        slug: slugify("Dimension Door"),
        name: "Dimension Door",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "500 feet",
        area: "Self (and 1 willing creature)",
        tags: ["Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You teleport to a location within range—somewhere you can see, visualize, or describe precisely (e.g., “200 feet straight downward” or “300 feet northwest, 45° up”). You can also bring one willing creature within 5 feet, who appears within 5 feet of your destination.\n\nIf you (or your passenger) would arrive in an occupied or completely filled space, each affected creature takes 4d6 Force damage and the teleport fails.",
        scalingMd:
            "",
        imagePath: spellImgUrl("dimensiondoor")
    },
    {
        slug: slugify("Divination"),
        name: "Divination",
        classes: ["Cleric", "Druid", "Wizard"],
        spellLevel: 4,
        school: "Divination",
        castingTime: "1 action (ritual)",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "incense worth 25+ GP (consumed)" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You contact a god or its servants to ask one question about a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply (often a short phrase or cryptic rhyme). The spell doesn’t account for circumstances that might change the answer. If you cast this more than once before finishing a Long Rest, each casting after the first has a cumulative 25% chance of no answer.",
        scalingMd:
            "",
        imagePath: spellImgUrl("divination")
    },
    {
        slug: slugify("Dominate Beast"),
        name: "Dominate Beast",
        classes: ["Druid", "Ranger", "Sorcerer"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "1 Beast",
        tags: ["Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "One Beast you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\n\n" +
            "You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\n" +
            "You can command the target to take a Reaction but must take your own Reaction to do so.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Your Concentration can last longer: slot 5 (up to 10 minutes), slot 6 (up to 1 hour), slot 7+ (up to 8 hours).",
        imagePath: spellImgUrl("dominatebeast")
    },
    {
        slug: slugify("Evard's Black Tentacles"),
        name: "Evard's Black Tentacles",
        classes: ["Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "90 feet",
        area: "20-foot square",
        tags: ["Damage", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a tentacle" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Squirming ebony tentacles fill a 20-foot square on ground you can see. The area becomes Difficult Terrain. Each creature in the area makes a Strength saving throw. On a fail, it takes 3d6 Bludgeoning damage and is Restrained until the spell ends. A creature also makes the save if it enters the area or ends its turn there (only once per turn). A Restrained creature can use an action to make a Strength (Athletics) check vs. your spell save DC, ending the condition on a success.",
        scalingMd:
            "",
        imagePath: spellImgUrl("evardsblacktentacles")
    },
    {
        slug: slugify("Fabricate"),
        name: "Fabricate",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "120 feet",
        area: "Up to Large object (or Medium if mineral)",
        tags: ["Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, or clothes from flax or wool.\n\n" +
            "Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot Cube or eight connected 5-foot Cubes) given a sufficient quantity of material. If you’re working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a 5-foot Cube). The quality of any fabricated objects is based on the quality of the raw materials.\n\n" +
            "Creatures and magic items can’t be created by this spell. You also can’t use it to create items that require a high degree of skill—such as weapons and armor—unless you have proficiency with the type of Artisan’s Tools used to craft such objects.",
        scalingMd:
            "",
        imagePath: spellImgUrl("fabricate")
    },
    {
        slug: slugify("Fire Shield"),
        name: "Fire Shield",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Fire", "Cold"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of phosphorus or a firefly" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Wispy flames wreathe your body, shedding bright light 10 ft. and dim light 10 ft. Choose warm (Resistance to Cold) or chill (Resistance to Fire). Whenever a creature within 5 feet hits you with a melee attack, the shield erupts, dealing 2d8 Fire damage (warm) or 2d8 Cold damage (chill) to the attacker.",
        scalingMd:
            "",
        imagePath: spellImgUrl("fireshield")
    },
    {
        slug: slugify("Fount of Moonlight"),
        name: "Fount of Moonlight",
        classes: ["Bard", "Druid"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Damage"],
        saveRequired: "CON Save",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A cool lunar glow wreathes you, emitting bright light 20 ft. and dim light 20 ft. You gain Resistance to Radiant damage, and your melee attacks deal an extra 2d6 Radiant damage on a hit. Immediately after you take damage from a creature you can see within 60 feet, you can use your Reaction to force it to make a Constitution save; on a failure, it is Blinded until the end of your next turn.",
        scalingMd:
            "",
        imagePath: spellImgUrl("fountofmoonlight")
    },
    {
        slug: slugify("Freedom of Movement"),
        name: "Freedom of Movement",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Ranger"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Buff", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a leather strap" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a willing creature. For the duration, the target’s movement is unaffected by Difficult Terrain, and magic can’t reduce its Speed or impose Paralyzed or Restrained on it. The target also gains a Swim Speed equal to its Speed. In addition, it can spend 5 feet of movement to automatically escape nonmagical restraints (such as manacles or a creature grappling it).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 4.",
        imagePath: spellImgUrl("freedomofmovement")
    },
    {
        slug: slugify("Giant Insect"),
        name: "Giant Insect",
        classes: ["Druid"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 10 minutes",
        range: "60 feet",
        area: "1 summoned creature",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You summon a giant centipede, spider, or wasp (chosen when you cast the spell). It manifests in an unoccupied space you can see within range and uses the Giant Insect stat block. The form you choose determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>GIANT INSECT</h2>
    <hr>
    <p><em>Large Beast, Unaligned</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level<br>
      <strong>HP</strong> 30 + 10 for each spell level above 4<br>
      <strong>Speed</strong> 40 ft., Climb 40 ft., Fly 40 ft. (Wasp only)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 17</td><td>+3</td>
          <td><strong>INT</strong> 4</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 13</td><td>+1</td>
          <td><strong>WIS</strong> 14</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 15</td><td>+2</td>
          <td><strong>CHA</strong> 3</td><td>−4</td>
        </tr>
      </tbody>
    </table>

    <table class="saves">
      <tbody>
        <tr>
          <td><strong>SAVE</strong></td>
          <td>+3</td><td>+1</td><td>+2</td><td>−3</td><td>+2</td><td>−4</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Senses</strong> Darkvision 60 ft., Passive Perception 12<br>
      <strong>Languages</strong> Understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <h3>Traits</h3>
    <p><strong>Spider Climb.</strong> The insect can climb difficult surfaces, including along ceilings, without needing to make an ability check.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The insect makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Poison Jab.</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 10 ft., one target.
      <em>Hit:</em> 1d6 + 3 + the spell’s level Piercing damage plus 1d4 Poison damage.
    </p>

    <p>
      <strong>Web Bolt (Spider Only).</strong>
      <em>Ranged Attack Roll:</em> Bonus equals your spell attack modifier, range 60 ft., one target.
      <em>Hit:</em> 1d10 + 3 + the spell’s level Bludgeoning damage, and the target’s Speed is reduced to 0 until the start of the insect’s next turn.
    </p>

    <h3>Bonus Actions</h3>
    <p>
      <strong>Venomous Spew (Centipede Only).</strong>
      <em>Constitution Saving Throw:</em> Your spell save DC, one creature the insect can see within 10 ft.
      <em>Failure:</em> The target has the <em>Poisoned</em> condition until the start of the insect’s next turn.
    </p>
  </div>
`
        ,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot’s level for the stat block’s level-based values.",
        imagePath: spellImgUrl("giantinsect")
    },
    {
        slug: slugify("Grasping Vine"),
        name: "Grasping Vine",
        classes: ["Druid", "Ranger"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "Concentration, up to 1 minute",
        range: "60 feet",
        area: "One conjured vine",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Bludgeoning"],
        conditions: ["Grappled"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You conjure a vine that sprouts from a surface in an unoccupied space that you can see within range. The vine lasts for the duration.\n\n" +
            "Make a melee spell attack against a creature within 30 feet of the vine. On a hit, the target takes 4d8 Bludgeoning damage and is pulled up to 30 feet toward the vine; if the target is Huge or smaller, it has the Grappled condition (escape DC equal to your spell save DC). The vine can grapple only one creature at a time, and you can cause the vine to release a Grappled creature (no action required).\n\n" +
            "As a Bonus Action on your later turns, you can repeat the attack against a creature within 30 feet of the vine.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The vine can grapple one additional creature per slot level above 4.",
        imagePath: spellImgUrl("graspingvine")
    },
    {
        slug: slugify("Greater Invisibility"),
        name: "Greater Invisibility",
        classes: ["Bard", "Sorcerer", "Wizard", "Illrigger"],
        spellLevel: 4,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "Touch",
        area: "1 creature",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A creature you touch gains the Invisible condition until the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("greaterinvisibility")
    },
    {
        slug: slugify("Guardian of Faith"),
        name: "Guardian of Faith",
        classes: ["Cleric", "Paladin", "Warlock"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "30 feet",
        area: "10-foot radius around guardian",
        tags: ["Summoning", "Damage", "Control"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A Large spectral guardian appears in an unoccupied space within range and hovers for the duration. Only enemies are affected. When an enemy enters within 10 ft. of the guardian or starts its turn there, it makes a Dexterity save, taking 20 Radiant on a fail or half on a success. The guardian vanishes after dealing 60 total damage.",
        scalingMd: "",
        imagePath: spellImgUrl("guardianoffaith")
    },
    {
        slug: slugify("Hallucinatory Terrain"),
        name: "Hallucinatory Terrain",
        classes: ["Bard", "Druid", "Warlock", "Wizard", "Illrigger"],
        spellLevel: 4,
        school: "Illusion",
        castingTime: "10 minutes",
        duration: "24 hours",
        range: "300 feet",
        area: "150-foot cube",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a mushroom" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Natural terrain in a 150-foot cube appears to be another kind of natural terrain (sight, sound, smell). Manufactured structures, equipment, and creatures aren’t changed. Tactile qualities remain unchanged, so contact can reveal the ruse. A creature can Study the area to make an Intelligence (Investigation) check against your DC to disbelieve. Those who discern it see a vague overlay of the true terrain.",
        scalingMd: "",
        imagePath: spellImgUrl("hallucinatoryterrain")
    },
    {
        slug: slugify("Ice Storm"),
        name: "Ice Storm",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "300 feet",
        area: "20-foot-radius, 40-foot-high cylinder",
        tags: ["Damage", "Control"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Bludgeoning", "Cold"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a mitten" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Hail crashes in a 20-ft-radius, 40-ft-high cylinder centered on a point you choose. Each creature makes a Dexterity save, taking 2d10 Bludgeoning and 4d6 Cold on a fail, or half the initial damage on a success. The ground in the area becomes Difficult Terrain until the end of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The Bludgeoning damage increases by 1d10 per slot level above 4.",
        imagePath: spellImgUrl("icestorm")
    },
    {
        slug: slugify("Leomund's Secret Chest"),
        name: "Leomund's Secret Chest",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "Touch",
        area: "1 chest and replica",
        tags: ["Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a 3×2×2 ft. chest of rare materials (worth 5,000+ GP) and a Tiny replica (worth 50+ GP)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You hide a chest and its contents on the Ethereal Plane by touching it and its Tiny replica. While stored, you can take a Magic action and touch the replica to recall the chest into an adjacent space, or touch both to banish it back. After 60 days, there is a cumulative 5% daily chance the spell ends. If it ends while the chest is Ethereal, it remains there.",
        scalingMd: "",
        imagePath: spellImgUrl("leomundssecretchest")
    },
   {
    slug: slugify("Locate Creature"),
    name: "Locate Creature",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Wizard", "Illrigger"],
    spellLevel: 4,
    school: "Divination",
    castingTime: "1 action",
    duration: "Concentration, up to 1 hour",
    range: "Self",
    area: "1,000-foot radius",
    tags: ["Detection"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "fur from a bloodhound"
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Describe or name a creature that is familiar to you. You sense the direction to the creature’s location if that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\n\n" +
        "The spell can locate a specific creature known to you or the nearest creature of a specific kind (such as a Human or a Unicorn) if you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as under the effects of a flesh to stone or polymorph spell, this spell doesn’t locate the creature.\n\n" +
        "This spell can’t locate a creature if any thickness of lead blocks a direct path between you and the creature.",
    scalingMd: "",
    imagePath: spellImgUrl("locatecreature")
},
    {
        slug: slugify("Mordenkainen's Faithful Hound"),
        name: "Mordenkainen's Faithful Hound",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "30 feet",
        area: "30-foot watch radius",
        tags: ["Damage", "Warding"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a silver whistle" },
        concentration: false,
        ritual: false,
        descriptionMd: "You conjure a phantom watchdog in an unoccupied space that you can see within range. The hound remains for the duration or until the two of you are more than 300 feet apart from each other.\n\n" +
            "No one but you can see the hound, and it is intangible and invulnerable. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound has Truesight with a range of 30 feet.\n\n" +
            "At the start of each of your turns, the hound attempts to bite one enemy within 5 feet of it. That enemy must succeed on a Dexterity saving throw or take 4d8 Force damage.\n\n" +
            "On your later turns, you can take a Magic action to move the hound up to 30 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("mordenkainensfaithfulhound")
    },
    {
        slug: slugify("Mordenkainen's Private Sanctum"),
        name: "Mordenkainen's Private Sanctum",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "24 hours",
        range: "120 feet",
        area: "Cube up to 100 feet per side",
        tags: ["Control", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a thin sheet of lead" },
        concentration: false,
        ritual: false,
        descriptionMd: "You make an area within range magically secure. The area is a Cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration.\n\n" +
            "When you cast the spell, you decide what sort of security the spell provides, choosing any of the following properties:\n\n" +
            "• Sound can’t pass through the barrier at the edge of the warded area.\n" +
            "• The barrier of the warded area appears dark and foggy, preventing vision (including Darkvision) through it.\n" +
            "• Sensors created by Divination spells can’t appear inside the protected area or pass through the barrier at its perimeter.\n" +
            "• Creatures in the area can’t be targeted by Divination spells.\n" +
            "• Nothing can teleport into or out of the warded area.\n" +
            "• Planar travel is blocked within the warded area.\n\n" +
            "Casting this spell on the same spot every day for 365 days makes the spell last until dispelled.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the cube size by 100 ft. per slot level above 4.",
        imagePath: spellImgUrl("mordenkainensprivatesanctum")
    },
    {
        slug: slugify("Otiluke's Resilient Sphere"),
        name: "Otiluke's Resilient Sphere",
        classes: ["Artificer", "Cleric", "Wizard"],
        spellLevel: 4,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "30 feet",
        area: "1 Large or smaller creature or object",
        tags: ["Control", "Warding"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a glass sphere" },
        concentration: true,
        ritual: false,
        descriptionMd: "A shimmering sphere encloses a Large or smaller creature or object within range. An unwilling creature must succeed on a Dexterity saving throw or be enclosed for the duration.\n\n" +
            "Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can’t be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.\n\n" +
            "The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can take an action to push against the sphere’s walls and thus roll the sphere at up to half the creature’s Speed. Similarly, the globe can be picked up and moved by other creatures.\n\n" +
            "A Disintegrate spell targeting the globe destroys it without harming anything inside.",
        scalingMd: "",
        imagePath: spellImgUrl("resilientsphere")
    },
    {
        slug: slugify("Phantasmal Killer"),
        name: "Phantasmal Killer",
        classes: ["Bard", "Wizard", "Illrigger"],
        spellLevel: 4,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Damage", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You manifest a target’s nightmare, visible only to it. The creature makes a Wisdom save; on a fail it takes 4d10 Psychic and has Disadvantage on ability checks and attack rolls for the duration; on a success it takes half the damage and the spell ends. At the end of each of its turns, it repeats the save, taking the damage on a fail or ending the spell on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 4.",
        imagePath: spellImgUrl("phantasmalkiller")
    },
    {
        slug: slugify("Polymorph"),
        name: "Polymorph",
        classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "60 feet",
        area: "1 creature",
        tags: ["Control", "Shapechanging"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a caterpillar cocoon" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Transform a creature you can see into a Beast on a failed Wisdom save. Choose any Beast with CR ≤ target’s CR/level. The target’s stats are replaced by the Beast’s, but it retains alignment, personality, creature type, HP, and Hit Dice. It gains Temporary HP = Beast’s HP (lost when the spell ends). The target is limited by the new form’s anatomy and can’t speak or cast spells. Its gear melds and provides no benefit.",
        scalingMd: "",
        imagePath: spellImgUrl("polymorph")
    },
    {
        slug: slugify("Staggering Smite"),
        name: "Staggering Smite",
        classes: ["Paladin"],
        spellLevel: 4,
        school: "Enchantment",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Damage", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You empower your next melee weapon or Unarmed Strike. On a hit, the target takes an extra 4d6 Psychic damage and must make a Wisdom save or be Stunned until the end of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The extra damage increases by 1d6 per slot level above 4.",
        imagePath: spellImgUrl("staggeringsmite")
    },
    {
        slug: slugify("Stone Shape"),
        name: "Stone Shape",
        classes: ["Artificer", "Cleric", "Druid", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "Medium object or 5-foot section",
        tags: ["Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "soft clay" },
        concentration: false,
        ritual: false,
        descriptionMd: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape you like. For example, you could shape a large rock into a weapon, statue, or coffer, or you could make a small passage through a wall that is 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn’t possible.",
        scalingMd: "",
        imagePath: spellImgUrl("stoneshape")
    },
    {
        slug: slugify("Stoneskin"),
        name: "Stoneskin",
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "diamond dust worth 100+ GP (consumed)" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "One willing creature you touch gains Resistance to Bludgeoning, Piercing, and Slashing damage for the duration.",
        scalingMd: "",
        imagePath: spellImgUrl("stoneskin")
    },
    {
        slug: slugify("Summon Aberration"),
        name: "Summon Aberration",
        classes: ["Warlock", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "90 feet",
        area: "1 aberrant spirit",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic", "Slashing"],
        conditions: ["Poisoned (on feature)", "Can't Regain Hit Points (on feature)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pickled tentacle and an eyeball in a platinum-inlaid vial worth 400+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range and uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Mind Flayer, or Slaad. The creature resembles an Aberration of that kind, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>ABERRANT SPIRIT</h2>
    <hr>
    <p><em>Medium Aberration, Neutral</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level<br>
      <strong>HP</strong> 40 + 10 for each spell level above 4<br>
      <strong>Speed</strong> 30 ft.; Fly 30 ft. (hover; <em>Beholderkin only</em>)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>INT</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 10</td><td>+0</td><td>+0</td>
          <td><strong>WIS</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 15</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 6</td><td>−2</td><td>−2</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Immunities</strong> Psychic<br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 10<br>
      <strong>Languages</strong> Deep Speech, understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Regeneration (Slaad Only).</strong> The spirit regains 5 Hit Points at the start of its turn if it has at least 1 Hit Point.</p>

    <p><strong>Whispering Aura (Mind Flayer Only).</strong> At the start of each of the spirit’s turns, the spirit emits psionic energy if it doesn’t have the <a href="#">Incapacitated</a> condition.
       <em>Wisdom Saving Throw:</em> DC equals your spell save DC, each creature (other than you) within 5 feet of the spirit.
       <em>Failure:</em> 2d6 Psychic damage.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of attacks equal to half this spell’s level (round down).</p>

    <p><strong>Claw (Slaad Only).</strong>
       <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d10 + 3 + the spell’s level Slashing damage, and the target can’t regain Hit Points until the start of the spirit’s next turn.</p>

    <p><strong>Eye Ray (Beholderkin Only).</strong>
       <em>Ranged Attack Roll:</em> Bonus equals your spell attack modifier, range 150 ft.
       <em>Hit:</em> 1d8 + 3 + the spell’s level Psychic damage.</p>

    <p><strong>Psychic Slam (Mind Flayer Only).</strong>
       <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d8 + 3 + the spell’s level Psychic damage.</p>
  </div>
`,
        scalingMd: "**Using a Higher-Level Spell Slot.** Use the slot’s level for the stat block’s level-based values.",
        imagePath: spellImgUrl("summonaberration")
    },
    {
        slug: slugify("Summon Construct"),
        name: "Summon Construct",
        classes: ["Artificer", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "90 feet",
        area: "1 construct spirit",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Bludgeoning", "Fire"],
        conditions: ["Poisoned (immunity)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a lockbox worth 400+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth the spirit of a Construct. It manifests in an unoccupied space that you can see within range and uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles an animate statue (you determine the appearance) made of the chosen material, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>CONSTRUCT SPIRIT</h2>
    <hr>
    <p><em>Medium Construct, Neutral</em></p>
    <p><strong>AC</strong> 13 + the spell’s level<br>
       <strong>HP</strong> 40 + 15 for each spell level above 4<br>
       <strong>Speed</strong> 30 ft.</p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>STR</strong> 18</td><td>+4</td><td>+4</td>
            <td><strong>INT</strong> 14</td><td>+2</td><td>+2</td></tr>
        <tr><td><strong>DEX</strong> 10</td><td>+0</td><td>+0</td>
            <td><strong>WIS</strong> 11</td><td>+0</td><td>+0</td></tr>
        <tr><td><strong>CON</strong> 18</td><td>+4</td><td>+4</td>
            <td><strong>CHA</strong> 5</td><td>−3</td><td>−3</td></tr>
      </tbody>
    </table>

    <p><strong>Resistances</strong> Poison<br>
       <strong>Immunities</strong> <em>Charmed, Exhaustion, Frightened, Paralyzed, Poisoned</em><br>
       <strong>Senses</strong> Darkvision 60 ft.; Passive Perception 10<br>
       <strong>Languages</strong> Understands the languages you know<br>
       <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)</p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Heated Body (Metal Only).</strong> A creature that hits the spirit with a melee attack or that starts its turn in a grapple with the spirit takes 1d10 Fire damage.</p>
    <p><strong>Stony Lethargy (Stone Only).</strong> When a creature starts its turn within 10 feet of the spirit, the spirit can target it with magical energy if the spirit can see it.
       <em>Wisdom Saving Throw:</em> DC equals your spell save DC, the target. <em>Failure:</em> Until the start of its next turn, the target can’t make
       <a href="#">Opportunity Attacks</a>, and its Speed is halved.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of Slam attacks equal to half this spell’s level (round down).</p>
    <p><strong>Slam.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d8 + 4 + the spell’s level Bludgeoning damage.</p>

    <h3>Reactions</h3>
    <p><strong>Berserk Lashing (Clay Only).</strong> <em>Trigger:</em> The spirit takes damage from a creature.
       <em>Response:</em> The spirit makes a Slam attack against that creature if possible, or the spirit moves up to half its Speed toward that creature without provoking
       <a href="#">Opportunity Attacks</a>.</p>
  </div>
  `,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot’s level for the stat block’s level-based values.",
        imagePath: spellImgUrl("summonconstruct")
    },
    {
        slug: slugify("Summon Elemental"),
        name: "Summon Elemental",
        classes: ["Druid", "Ranger", "Wizard"],
        spellLevel: 4,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Concentration, up to 1 hour",
        range: "90 feet",
        area: "1 elemental spirit",
        tags: ["Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Bludgeoning", "Cold", "Lightning", "Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "air, a pebble, ash, and water inside a gold-inlaid vial worth 400+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth an Elemental spirit. It manifests in an unoccupied space that you can see within range and uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>ELEMENTAL SPIRIT</h2>
    <hr>
    <p><em>Medium Elemental, Neutral</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level<br>
      <strong>HP</strong> 50 + 10 for each spell level above 4<br>
      <strong>Speed</strong> 40 ft.; Burrow 40 ft. <em>(Earth only)</em>; Fly 40 ft. (hover; <em>Air only</em>); Swim 40 ft. <em>(Water only)</em>
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 18</td><td>+4</td><td>+4</td>
          <td><strong>INT</strong> 4</td><td>−3</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 15</td><td>+2</td><td>+2</td>
          <td><strong>WIS</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 17</td><td>+3</td><td>+3</td>
          <td><strong>CHA</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Resistances</strong> Acid <em>(Water only)</em>, Lightning and Thunder <em>(Air only)</em>, Piercing and Slashing <em>(Earth only)</em><br>
      <strong>Immunities</strong> Fire <em>(Fire only)</em>, Poison; <em>Exhaustion, Paralyzed, Petrified, Poisoned</em><br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 10<br>
      <strong>Languages</strong> Primordial, understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Amorphous Form (Air, Fire, and Water Only).</strong>
       The spirit can move through a space as narrow as 1 inch wide without it counting as
       <a href="#">Difficult Terrain</a>.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of Slam attacks equal to half this spell’s level (round down).</p>

    <p><strong>Slam.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d10 + 4 + the spell’s level
       Bludgeoning <em>(Earth only)</em>, Cold <em>(Water only)</em>, Lightning <em>(Air only)</em>, or Fire <em>(Fire only)</em> damage.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot’s level for the stat block’s level-based values.",
        imagePath: spellImgUrl("summonelemental")
    },
    {
        slug: slugify("Vitriolic Sphere"),
        name: "Vitriolic Sphere",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "20-foot-radius sphere",
        tags: ["Damage"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Acid"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of bile" },
        concentration: false,
        ritual: false,
        descriptionMd: "You point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The initial damage increases by 2d4 per slot level above 4.",
        imagePath: spellImgUrl("vitriolicsphere")
    },
    {
        slug: slugify("Wall of Fire"),
        name: "Wall of Fire",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 4,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Concentration, up to 1 minute",
        range: "120 feet",
        area: "Wall up to 60 ft. long, 20 ft. high, 1 ft. thick (or ring up to 20-ft. diameter, 20 ft. high, 1 ft. thick)",
        tags: ["Damage", "Control"],
        saveRequired: "DEX Save",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of charcoal" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\n\n" +
            "When the wall appears, each creature in its area makes a Dexterity saving throw, taking 5d8 Fire damage on a failed save or half as much damage on a successful one.\n\n" +
            "One side of the wall, selected by you when you cast this spell, deals 5d8 Fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each slot level above 4.",
        imagePath: spellImgUrl("walloffire")
    },
    {
  slug: slugify("Flame Kindle"),
  name: "Flame Kindle",
  classes: ["Druid", "Sorcerer", "Wizard"],
  spellLevel: 4,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "Self",
  area: "Self",
  tags: ["Damage", "New"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: ["Fire"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Your body kindles with elemental flame, aligning you to fire. For the duration, you can take a Magic action to cast fire bolt (even if you don’t know it). In addition, on each of your turns you can use a Bonus Action to cast fire bolt. You can cast fire bolt with both your Magic action and your Bonus Action on the same turn.\n\n" +
    "These flames are under your control and don’t ignite unattended objects.",
  scalingMd: "",
  imagePath: spellImgUrl("flamekindle"),
},
{
  slug: slugify("Glacial Kindle"),
  name: "Glacial Kindle",
  classes: ["Druid", "Sorcerer", "Wizard"],
  spellLevel: 4,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "Self",
  area: "Self",
  tags: ["Damage", "New"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: ["Cold"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Your body sheathes in elemental rime, aligning you to ice. For the duration, you can take a Magic action to cast ray of frost (even if you don’t know it). In addition, on each of your turns you can use a Bonus Action to cast ray of frost. You can cast ray of frost with both your Magic action and your Bonus Action on the same turn.",
  scalingMd: "",
  imagePath: spellImgUrl("glacialkindle"),
},
{
  slug: slugify("Static Kindle"),
  name: "Static Kindle",
  classes: ["Druid", "Sorcerer", "Wizard"],
  spellLevel: 4,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "Self",
  area: "Self",
  tags: ["Damage", "New"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: ["Lightning"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Your body crackles with caged lightning, aligning you to storm. For the duration, you can take a Magic action to cast shocking grasp (even if you don’t know it). In addition, on each of your turns you can use a Bonus Action to cast shocking grasp. You can cast shocking grasp with both your Magic action and your Bonus Action on the same turn.\n\n" +
    "These sparks are under your control and don’t harm unattended objects.",
  scalingMd: "",
  imagePath: spellImgUrl("statickindle"),
},
{
  slug: slugify("Torrential Kindle"),
  name: "Torrential Kindle",
  classes: ["Druid", "Sorcerer", "Wizard"],
  spellLevel: 4,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "Self",
  area: "Self",
  tags: ["Damage", "New"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: [],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Your body swirls with rapid waters. For the duration, you can take a Magic action to cast water blast (even if you don’t know it). In addition, on each of your turns you can use a Bonus Action to cast water blast. You can cast water blast with both your Magic action and your Bonus Action on the same turn.",
  scalingMd: "",
  imagePath: spellImgUrl("torrentialkindle"),
},
{
  slug: slugify("Gravefeast"),
  name: "Gravefeast",
  classes: ["Cleric", "Druid", "Warlock"],
  spellLevel: 4,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "Touch",
  area: "1 corpse",
  tags: ["Healing", "New"],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: [],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You touch the corpse of a non-Undead, non-Construct creature that is mostly intact. The remains crumble to ash and are destroyed, and vital essence flows into you. You regain Hit Points based on the corpse’s size:\n\n" +
    "Tiny: 1d8\n" +
    "Small: 2d8\n" +
    "Medium: 3d8\n" +
    "Large: 5d8\n" +
    "Huge: 8d8\n" +
    "Gargantuan: 12d8\n\n" +
    "A corpse can’t be affected by this spell more than once. Destroying the corpse in this way prevents the creature from being returned to life by revivify or raise dead. More powerful magic, such as resurrection, true resurrection, or wish, can still restore it.",
  scalingMd: "",
  imagePath: spellImgUrl("gravefeast"),
},
{
  slug: slugify("Mind Fog"),
  name: "Mind Fog",
  classes: ["Bard", "Wizard"],
  spellLevel: 4,
  school: "Enchantment",
  castingTime: "1 action",
  duration: "Concentration, up to 1 minute",
  range: "60 feet",
  area: "1 creature",
  tags: ["Debuff", "New"],
  saveRequired: "WIS",
  attackType: "Spell",
  damageTypes: [],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "Choose one creature you can see within range. Until the spell ends, whenever the target attempts to cast a spell (using an Action, Bonus Action, or Reaction) or takes the Magic action, it must first make a Wisdom saving throw.\n\n" +
    "On a failed save, the attempt fizzles: the spell has no effect, and the creature expends the Action, Bonus Action, or Reaction it used for the attempt. The spell slot or prepared use isn’t expended.\n\n" +
    "On a successful save, the attempt proceeds normally, and the target records one success against this spell. After the target accumulates three such successes, the spell ends.\n\n" +
    "A creature that doesn’t cast spells is affected only if it takes the Magic action. This saving throw is made at most once per casting attempt; rerolls or advantage/disadvantage apply to that single save.",
  scalingMd: "",
  imagePath: spellImgUrl("mindfog"),
},
{
    slug: slugify("Backlash"),
    name: "Backlash",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 4,
    school: "Abjuration",
    castingTime: "1 reaction (taken in response to taking damage)",
    duration: "Instantaneous",
    range: "60 feet",
    area: "Self; 1 creature within 60 feet",
    tags: ["Damage", "Defense", "New"],
    saveRequired: "CON",
    attackType: "Spell",
    damageTypes: ["Force"],
    conditions: [],
    components: { verbal: true, somatic: false, material: false, materialText: "" },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You ward yourself against destructive energy, reducing the triggering damage by 4d6 + your spellcasting ability modifier.\n\n" +
        "If the triggering damage was from a creature within range, you can force that creature to make a Constitution saving throw. The creature takes 4d6 Force damage on a failed save, or half as much damage on a successful one.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage reduction and Force damage from this spell both increase by 1d6 for each spell slot level above 4th.",
    imagePath: spellImgUrl("backlash")
},
{
    slug: slugify("Doomtide"),
    name: "Doomtide",
    classes: ["Bard", "Cleric", "Warlock"],
    spellLevel: 4,
    school: "Conjuration",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "120 feet",
    area: "20-foot-radius Sphere",
    tags: ["Damage", "Control", "Debuff", "New"],
    saveRequired: "WIS",
    attackType: "Spell",
    damageTypes: ["Psychic"],
    conditions: [],
    components: { verbal: true, somatic: true, material: true, materialText: "soot and a dried eel" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You create a 20-foot-radius Sphere of inky fog within range. The fog is magical Darkness and lasts for the duration or until a strong wind (such as the one created by the gust of wind spell) disperses it, ending the spell.\n\n" +
        "Each creature in the Sphere when it appears makes a Wisdom saving throw. On a failed save, the creature takes 5d6 Psychic damage and subtracts 1d6 from its saving throws until the end of its next turn. On a successful save, the creature takes half as much damage only. A creature also makes this save when the Sphere moves into its space, when it enters the Sphere, or when it ends its turn inside the Sphere. A creature makes this save only once per turn.\n\n" +
        "The Sphere moves 10 feet away from you at the start of each of your turns.",
    scalingMd: "",
    imagePath: spellImgUrl("doomtide")
},
{
    slug: slugify("Spellfire Storm"),
    name: "Spellfire Storm",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 4,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "60 feet",
    area: "20-foot-radius, 20-foot-high Cylinder",
    tags: ["Damage", "Control", "Anti-Magic", "New"],
    saveRequired: "CON",
    attackType: "Spell",
    damageTypes: ["Radiant"],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You conjure a pillar of spellfire in a 20-foot-radius, 20-foot-high Cylinder centered on a point within range. The area of the Cylinder is Bright Light, and each creature in it when it appears must make a Constitution saving throw, taking 4d10 Radiant damage on a failed save, or half as much damage on a successful one. A creature also makes this save when it enters the spell’s area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.\n\n" +
        "In addition, whenever a creature in the Cylinder casts a spell, that creature must make a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.\n\n" +
        "When you cast this spell, you can designate creatures to be unaffected by it.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d10 for each spell slot level above 4th.",
    imagePath: spellImgUrl("spellfirestorm")
},
{
    slug: slugify("Quicksilver Step"),
    name: "Quicksilver Step",
    classes: ["Bard", "Ranger", "Sorcerer", "Wizard"],
    spellLevel: 4,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "Self",
    area: "Self",
    tags: ["Buff", "Mobility", "Defense", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "For the duration, your movement does not provoke Opportunity Attacks, and you can move up to 10 feet each time another creature you can see or hear ends its turn (no action required). You can move in this way up to 4 times per round, and you regain all expended uses at the start of your turn. The first attack made against you each time you move in this way has Disadvantage.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** You can move in this way one additional time per round for each spell slot level above 4th.",
    imagePath: spellImgUrl("quicksilverstep")
},
{
    slug: slugify("Detect Life"),
    name: "Detect Life",
    classes: ["Cleric", "Druid", "Paladin", "Ranger"],
    spellLevel: 4,
    school: "Divination",
    castingTime: "1 action (ritual)",
    duration: "Concentration, up to 10 minutes",
    range: "Self (120 feet)",
    area: "120-foot radius",
    tags: ["Detection", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: true,
    descriptionMd:
        "While you concentrate, you perceive the faint life-aura of living creatures within 120 feet of you—even through walls and total cover. Each living creature (neither Undead nor Construct) appears to you as a softly outlined silhouette in its space. You learn each outlined creature’s exact location and size category, and you can tell whether it is moving.\n\n" +
        "This perception does not grant line of sight and can’t be used to target a creature with an effect that requires you to see it or that can’t target a creature behind total cover. The spell doesn’t reveal identity, creature type, or hit points, and it doesn’t outline nonliving objects or creatures that aren’t alive.",
    scalingMd: "",
    imagePath: spellImgUrl("detectlife")
},
{
    slug: slugify("Wildfire"),
    name: "Wildfire",
    classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 4,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "60 feet",
    area: "1 creature; hopping flame within 30 feet",
    tags: ["Damage", "New"],
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
    concentration: true,
    ritual: false,
    descriptionMd:
        "You launch a condensed, living flame at a creature you can see within range. The target must make a Dexterity saving throw, taking 6d6 Fire damage on a failed save, or half as much damage on a success. On a failed save, the flame latches onto the target and remains attached while you maintain Concentration. On a successful save, it deals half damage and falls to the ground in the target’s space, remaining there as a fist-sized ember.\n\n" +
        "Hopping Blaze. At the start of each of your turns, the flame (whether attached to a creature or resting on the ground) chooses one other random creature within 30 feet of its current location and leaps to that creature’s space. The new creature then makes a Dexterity saving throw, taking 6d6 Fire damage on a failed save, or half as much damage on a success. On a failed save, the flame latches onto that creature; on a success, it deals half damage and falls to the ground in that creature’s space. If there is no other creature within 30 feet, the flame stays where it is (remaining attached to its current bearer, if any). If the flame is attached to a creature, at the start of that creature’s turn it takes 3d6 Fire damage.\n\n" +
        "Tearing It Free. A creature that has the flame attached, or a creature within 5 feet of it, can use an Action to make a Strength saving throw. On a success, the flame is torn free and falls to the ground in the creature’s space.\n\n" +
        "The flame is magical, sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet, and doesn’t ignite unattended objects.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The flame’s initial damage increases by 1d6 for each spell slot level above 4th.",
    imagePath: spellImgUrl("wildfire")
},
{
    slug: slugify("Cure"),
    name: "Cure",
    classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Warlock", "Sorcerer"],
    spellLevel: 4,
    school: "Abjuration",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "60 feet",
    area: "1 creature",
    tags: ["Healing", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: ["Poisoned"],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "Choose a creature you can see within range. Positive energy washes through the target, restoring 35 Hit Points. The spell also ends the Poisoned condition on the target and ends one disease affecting it.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The healing increases by 5 Hit Points for each spell slot level above 4th.",
    imagePath: spellImgUrl("cure")
},
{
    slug: slugify("Destructive Echo"),
    name: "Destructive Echo",
    classes: ["Bard", "Sorcerer", "Wizard"],
    spellLevel: 4,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Concentration, up to 1 minute",
    range: "Self",
    area: "Self",
    tags: ["Damage", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "When you cast this spell, choose a 1st-level Evocation spell you have prepared or that you know. The chosen spell must have a casting time of 1 action and can’t require Concentration. For the duration, on each of your turns you can take a Magic action to cast the chosen spell at 1st level without expending a spell slot. You must provide the spell’s components as normal.\n\n" +
        "You can’t change the chosen spell after you cast Destructive Echo.",
    scalingMd: "",
    imagePath: spellImgUrl("destructiveecho")
},


];