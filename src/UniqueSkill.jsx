import React, { useState, useEffect } from "react";
import "./UniqueSkill.css";

// Mock data for unique skills
const uniqueSkills = [
  { name: "Firebrand", description: "Your weapon attacks ignite with flames, dealing fire damage equal to your proficiency bonus." },
  { name: "Earthshaker", description: "Slam the ground, creating a shockwave in a 10-foot radius, dealing bludgeoning damage." },
  { name: "Frost Weaver", description: "Your attacks imbue frost, slowing hit targets by 10 feet and dealing cold damage." },
  { name: "Wind Dancer", description: "Gain additional agility, increasing movement speed and Dexterity saving throws." },
  { name: "Shadow Step", description: "Teleport to a shadow you see within 30 feet and gain advantage on your next attack." },
  { name: "Phoenix Heart", description: "Heal an ally within 30 feet for an amount equal to your proficiency bonus as a bonus action." },
  { name: "Thunderclap", description: "Create a deafening sound wave, forcing creatures within 15 feet to make a Constitution save or take thunder damage." },
  { name: "Soul Harvester", description: "Regain hit points equal to your proficiency bonus whenever you reduce a creature to 0 hit points." },
  { name: "Gravity Pulse", description: "Create a 15-foot sphere of gravitational force, pulling creatures 10 feet toward the center." },
  { name: "Mirror Blade", description: "Conjure an ethereal copy of your melee weapon that strikes alongside your attacks, dealing psychic damage." },
  {
    name: "Chaos Bloom",
    description: "When you take damage, unleash a 10-foot aura that deals 1d8 random damage type to all creatures in range.",
  },
  {
    name: "Void Blink",
    description: "Teleport 60 feet to an unoccupied space you can see, leaving behind a void that pulls creatures 10 feet toward its center.",
  },
  {
    name: "Echo Strike",
    description: "Your melee attack creates a phantom strike that repeats your attack for half damage.",
  },
  {
    name: "Starfall Barrage",
    description: "Call down three meteors to hit up to three creatures, each dealing 2d10 radiant damage.",
  },
  {
    name: "Fatebinder",
    description: "Once per long rest, reroll a saving throw or force an enemy to reroll an attack roll against you.",
  },
  {
    name: "Infernal Pact",
    description: "Sacrifice hit points equal to your proficiency bonus to deal twice that amount in fire damage to a creature within 30 feet.",
  },
  {
    name: "Gilded Armor",
    description: "Gain resistance to nonmagical bludgeoning, piercing, and slashing damage for 1 minute.",
  },
  {
    name: "Spectral Vanguard",
    description: "Summon a spectral knight that protects you, imposing disadvantage on the first attack against you each turn.",
  },
  {
    name: "Blood Mirage",
    description: "When you take damage, create a duplicate of yourself within 15 feet. The duplicate lasts for 1 minute and can attack as a bonus action.",
  },
  {
    name: "Dusk Shroud",
    description: "You create a 20-foot radius of magical darkness. Creatures inside cannot benefit from invisibility.",
  },
  {
    name: "Shardstorm",
    description: "Summon a flurry of razor-sharp shards in a 15-foot cone, dealing slashing damage and causing creatures to bleed for 1 minute.",
  },
  {
    name: "Ethereal Conduit",
    description: "For the next minute, any healing spell you cast also heals you for the same amount.",
  },
  {
    name: "Arctic Grasp",
    description: "Target a creature within 30 feet. Its movement speed is reduced to 0 for 1 round as frost locks its joints.",
  },
  {
    name: "Luminous Burst",
    description: "Emit a blinding light in a 15-foot radius. Creatures must succeed on a Constitution saving throw or be blinded for 1 minute.",
  },
  {
    name: "Overcharge",
    description: "Your next spell deals double damage but causes you to take force damage equal to half the spell's level.",
  },
  {
    name: "Shadow Warden",
    description: "You gain immunity to necrotic damage for 1 minute and deal additional necrotic damage equal to your proficiency bonus on all attacks.",
  },
  {
    name: "Temporal Echo",
    description: "Reverse time for a single creature. Undo the last damage it took within the past round.",
  },
  {
    name: "Venomous Step",
    description: "Your footsteps leave a toxic trail. Creatures that start their turn in your path take poison damage equal to your proficiency bonus.",
  },
  {
    name: "Graviton Collapse",
    description: "Create a gravity well at a point within 60 feet. Creatures in a 20-foot radius are pulled 10 feet closer and take force damage.",
  },
  {
    name: "Pyroclasm",
    description: "Unleash a fiery explosion in a 20-foot radius. Creatures take fire damage and must succeed on a Dexterity saving throw or be knocked prone.",
  },
  {
    name: "Aetherial Shield",
    description: "Absorb the next spell cast at you. You can release the absorbed energy as force damage on your next turn.",
  },
  {
    name: "Sonic Scream",
    description: "Release a high-pitched scream in a 30-foot cone, dealing thunder damage and deafening creatures for 1 minute.",
  },
  {
    name: "Shadow Chains",
    description: "Chains of shadow erupt from the ground, restraining up to three creatures within 15 feet for 1 minute.",
  },
  {
    name: "Glacial Bastion",
    description: "Summon a massive wall of ice in a 10-foot radius around you, granting full cover to creatures behind it.",
  },
  {
    name: "Vortex Punch",
    description: "Your punch creates a vortex that pulls creatures in a 10-foot radius toward the target and deals bludgeoning damage.",
  },
  {
    name: "Prismatic Shield",
    description: "Surround yourself with a prismatic barrier. Roll a d6 to determine a damage type you gain immunity to for 1 minute.",
  },
  {
    name: "Static Surge",
    description: "Electrify your weapon. Your next attack deals additional lightning damage and stuns the target for 1 round.",
  },
  {
    name: "Celestial Resonance",
    description: "Gain temporary hit points and radiate an aura of healing that restores 1d4 hit points to allies within 10 feet each turn.",
  },
  {
    name: "Feral Instincts",
    description: "Your senses sharpen. Gain advantage on Perception checks and detect invisible creatures within 30 feet for 10 minutes.",
  },
  {
    name: "Astral Grasp",
    description: "Pull a creature toward you with spectral tendrils. If it ends within 5 feet, it is grappled and takes psychic damage.",
  },
  {
    name: "Phantom Rush",
    description: "Dash 30 feet in a straight line. Enemies in your path take psychic damage equal to your proficiency bonus.",
  },
  {
    name: "Meteor Fist",
    description: "Your next unarmed strike creates a small crater, dealing bludgeoning damage to all creatures within 10 feet.",
  },
  {
    name: "Serpent's Coil",
    description: "Constrict a creature within 15 feet with spectral serpents, restraining it and dealing poison damage each turn.",
  },
  {
    name: "Eclipse Veil",
    description: "Surround yourself with shadows for 1 minute, making you invisible in dim light or darkness.",
  },
  {
    name: "Blazing Trail",
    description: "Your movement leaves a path of flames. Creatures entering your path take fire damage and must succeed on a Dexterity save or be ignited.",
  },
  {
    name: "Thunderous Charge",
    description: "Rush forward 20 feet. The first creature in your path takes thunder damage and is pushed 10 feet back.",
  },
  {
    name: "Winds of Renewal",
    description: "Summon a gentle breeze in a 10-foot radius that heals allies for 1d6 hit points per turn for 3 turns.",
  },
  {
    name: "Runeblade",
    description: "Imbue your weapon with arcane runes for 1 minute. Your attacks deal an additional 1d6 force damage.",
  },
  {
    name: "Soulbind",
    description: "Link your soul to an ally. Half of the damage they take is redirected to you for 1 minute.",
  },
  {
    name: "Lava Surge",
    description: "Erupt molten lava in a 15-foot cone, dealing fire damage and creating difficult terrain for 1 minute.",
  },
  {
    name: "Frost Nova",
    description: "Unleash a burst of frost in a 10-foot radius, dealing cold damage and freezing creatures in place for 1 turn.",
  },
  {
    name: "Shadow Rift",
    description: "Create a rift to the Shadowfell at a point within 60 feet. Creatures in a 15-foot radius are frightened for 1 minute.",
  },
  {
    name: "Radiant Smite",
    description: "Your next melee attack deals radiant damage equal to twice your proficiency bonus and blinds the target.",
  },
  {
    name: "Iron Fortress",
    description: "Gain resistance to all damage types for 1 round, but you cannot move during this time.",
  },
  {
    name: "Shatterstrike",
    description: "Your next melee attack deals double damage and shatters any non-magical armor or shields worn by the target.",
  },
  {
    name: "Etherial Surge",
    description: "You can move through walls and creatures until the end of your turn. You cannot end your movement inside an object.",
  },
  {
    name: "Solar Spear",
    description: "Hurl a spear of sunlight at a creature within 60 feet, dealing radiant damage and piercing through additional enemies in a line.",
  },
  {
    name: "Glimmerstep",
    description: "Teleport up to 15 feet and leave a radiant mark at your starting position. Enemies entering the mark take radiant damage.",
  },
  {
    name: "Nether Grasp",
    description: "Target a creature within 30 feet. It must succeed on a Strength save or be pulled into a spectral cage for 1 minute.",
  },
  {
    name: "Blade Dance",
    description: "Your next attack allows you to strike all enemies within 5 feet, dealing weapon damage to each.",
  },
  {
    name: "Stormcaller's Fury",
    description: "Summon a lightning storm for 1 minute. Each turn, a bolt of lightning strikes a random enemy within 30 feet.",
  },
  {
    name: "Chilling Touch",
    description: "Touch a creature, dealing cold damage and reducing its attack rolls by your proficiency bonus for 1 minute.",
  },
  {
    name: "Seismic Roar",
    description: "Release a powerful roar that creates tremors in a 20-foot radius, knocking prone all creatures that fail a Strength save.",
  },
  {
    name: "Crimson Pact",
    description: "Sacrifice half your current hit points to heal all allies within 30 feet by twice that amount.",
  },
  {
    name: "Arcane Tempest",
    description: "Unleash a storm of arcane energy in a 15-foot radius. Roll 1d8 to determine the damage type for each creature struck.",
  },
  {
    name: "Starshield",
    description: "Create a protective aura of starlight. Allies within 10 feet gain temporary hit points at the start of their turns for 1 minute.",
  },
  {
    name: "Voidwalker",
    description: "Step into a void portal and reappear in an unoccupied space within 60 feet. Creatures near your reappearance take psychic damage.",
  },
  {
    name: "Plague Wave",
    description: "Release a wave of necrotic energy in a 15-foot cone. Creatures hit are poisoned for 1 minute and take necrotic damage.",
  },
  {
    name: "Glacial Collapse",
    description: "Summon a glacier to crash down on a 10-foot radius. Creatures in the area must make a Dexterity save or be restrained by ice.",
  },
  {
    name: "Phoenix Rebirth",
    description: "When you drop to 0 hit points, you burst into flames, dealing fire damage to nearby enemies, and regain half your hit points.",
  },
  {
    name: "Titan’s Grasp",
    description: "You can lift and throw an object or creature up to two sizes larger than you. Thrown targets take bludgeoning damage on impact.",
  },
  {
    name: "Astral Barrage",
    description: "Unleash a barrage of astral arrows, targeting up to three creatures within 60 feet. Each takes 2d8 force damage.",
  },
  {
    name: "Elemental Ward",
    description: "Gain resistance to one damage type of your choice (fire, cold, lightning, or acid) for 1 minute.",
  },
  {
    name: "Nightmare Touch",
    description: "Touch a creature and force it to relive its worst nightmare, dealing psychic damage and incapacitating it for 1 round.",
  },
  {
    name: "Gravity Shift",
    description: "Reverse gravity in a 10-foot radius, causing creatures to fall upward 20 feet and take falling damage when the effect ends.",
  },
  {
    name: "Vampiric Strike",
    description: "Your next attack heals you for half the damage dealt to the target.",
  },
  {
    name: "Seraphic Wings",
    description: "Sprout radiant wings for 1 minute, granting you a flying speed equal to twice your walking speed.",
  },
  {
    name: "Chaos Step",
    description: "Teleport up to 60 feet to an unoccupied space. The area you leave explodes, dealing random elemental damage to creatures within 10 feet.",
  },
  {
    name: "Mirror Cage",
    description: "Trap a creature in a prison of reflective glass. The creature can only target itself with attacks for 1 minute.",
  },
  {
    name: "Burning Halo",
    description: "Summon a ring of fire that orbits you for 1 minute, dealing fire damage to creatures that end their turn within 5 feet.",
  },
  {
    name: "Time Fracture",
    description: "Create a temporal bubble that slows all creatures within 10 feet, halving their movement and reaction speeds.",
  },
  {
    name: "Abyssal Howl",
    description: "Let out a bone-chilling howl that frightens all enemies within 30 feet who fail a Wisdom saving throw.",
  },
  {
    name: "Thunderstep",
    description: "Teleport up to 30 feet to an unoccupied space. All creatures within 10 feet of your starting location take thunder damage.",
  },
  {
    name: "Frost Armor",
    description: "Coat yourself in ice, granting temporary hit points and reducing melee attackers’ speed by 10 feet until your next turn.",
  },
  {
    name: "Solar Pulse",
    description: "Emit a burst of radiant energy in a 20-foot radius, healing allies and damaging undead within the area.",
  },
  {
    name: "Blight Bloom",
    description: "Create a zone of decay in a 15-foot radius. Creatures entering or starting their turn in the zone take necrotic damage.",
  },
  {
    name: "Ethereal Cloak",
    description: "Turn partially incorporeal, allowing attacks to pass through you. You gain resistance to all physical damage for 1 minute.",
  },
  {
    name: "Crimson Echo",
    description: "Your next attack creates an echo that repeats the attack on the same target, dealing half the original damage.",
  },
  {
    name: "Flamebound Leap",
    description: "Leap up to 30 feet. Creatures within 5 feet of your landing spot take fire damage and are knocked prone.",
  },
  {
    name: "Void Eruption",
    description: "Summon a void explosion in a 10-foot radius. Creatures in the area take force damage and are pulled toward the center.",
  },
  {
    name: "Spectral Step",
    description: "Move through creatures and objects for 1 turn. You cannot be targeted by opportunity attacks during this movement.",
  },
  {
    name: "Siphon Life",
    description: "Drain life energy from all creatures within 15 feet, healing yourself for half the damage dealt.",
  },
  {
    name: "Iron Chains",
    description: "Conjure chains that bind a creature within 30 feet. The creature is restrained and must make a Strength saving throw to escape.",
  },
  {
    name: "Lightning Surge",
    description: "Channel lightning through your body. Your next melee attack deals additional lightning damage and arcs to another target within 10 feet.",
  },
  {
    name: "Shimmerstrike",
    description: "Your next attack teleports you to a location within 10 feet of the target after striking, avoiding opportunity attacks.",
  },
  {
    name: "Plasma Lash",
    description: "Create a whip of plasma that extends 15 feet. Creatures hit take fire and lightning damage and must make a Dexterity save or be disarmed.",
  },
  {
    name: "Lunar Beacon",
    description: "Call down a beam of moonlight on a target within 60 feet. The target takes radiant damage and has disadvantage on saving throws for 1 round.",
  },
  {
    name: "Storm Ward",
    description: "Create a protective sphere of swirling wind. Ranged attacks against you have disadvantage for 1 minute.",
  },
  {
    name: "Necrotic Brand",
    description: "Mark a creature within 30 feet. It takes additional necrotic damage whenever it takes damage for the next minute.",
  },
  {
    name: "Ashen Vortex",
    description: "Summon a swirling vortex of ash in a 15-foot cone. Creatures in the cone take fire damage and must succeed on a Constitution saving throw or be blinded.",
  },
];

const UniqueSkill = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(uniqueSkills[0]); // Skill displayed during spinning

  const rollSlotMachine = () => {
    setSpinning(true);

    let spinCount = 0;
    const totalSpins = 30; // Number of times the skill changes before stopping

    const interval = setInterval(() => {
      spinCount++;
      const randomSkill = uniqueSkills[Math.floor(Math.random() * uniqueSkills.length)];
      setCurrentSkill(randomSkill);

      if (spinCount === totalSpins) {
        clearInterval(interval);
        const finalSkill = uniqueSkills[Math.floor(Math.random() * uniqueSkills.length)];
        setSelectedSkill(finalSkill);
        setCurrentSkill(finalSkill);
        setSpinning(false);
      }
    }, 100); // Speed of spinning (100ms)
  };

  return (
    <div className="unique-skill-container">
      <h1>Unique Skill Slot Machine</h1>
      <p>Discover your unique skill by rolling the slot machine!</p>

      {selectedSkill && !spinning && (
        <div className="congratulations">
          <h2>Congratulations!</h2>
        </div>
      )}

      <div className={`slot-machine ${spinning ? "spinning" : ""}`}>
        <div className="slot">
          <p className="slot-skill-name">{currentSkill.name}</p>
          <p className="slot-skill-description">{currentSkill.description}</p>
        </div>
      </div>

      <button className="spin-button" onClick={rollSlotMachine} disabled={spinning}>
        {spinning ? "Rolling..." : "Roll for Unique Skill"}
      </button>
    </div>
  );
};

export default UniqueSkill;
