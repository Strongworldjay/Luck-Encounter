import React, { useState } from "react";
import "./UniqueSkill.css";
import dragonImage from "./assets/dragoncard.jpg";
import scrollImage from "./assets/scrollcard.png";
import blackImage from "./assets/blackcard.png";
import cosmicImage from "./assets/cosmiccard.png";
import magicCoinImage from "./assets/magiccoin.avif";

const cardBacks = [
  { className: "dragon", image: dragonImage },
  { className: "scroll", image: scrollImage },
  { className: "black", image: blackImage },
];

// Mocked data for Unique Skills
const uniqueSkills = [
    {
        name: "Firebrand D",
        description: "This unique skill causes your weapon attacks to ignite with flames, dealing an additional amount of fire damage equal to your proficiency bonus.",
      },
      {
        name: "Earthshaker D",
        description: "This unique skill allows you to slam the ground, creating a shockwave in a 10-foot radius that deals bludgeoning damage equal to twice your proficiency bonus to all creatures within range.",
      },
      {
        name: "Frost Weaver D",
        description: "This unique skill imbues your attacks with frost, reducing the speed of hit targets by 10 feet and dealing cold damage equal to your proficiency bonus.",
      },
      {
        name: "Wind Dancer D",
        description: "This unique skill increases your agility, allowing you to add your proficiency bonus to Dexterity saving throws and gain an additional 10 feet of movement speed for 1 minute.",
      },
      {
        name: "Shadow Step D",
        description: "This unique skill allows you to teleport to a shadow you can see within 30 feet. After teleporting, gain advantage on your next attack roll before the end of your turn.",
      },
      {
        name: "Iron Will D",
        description: "This unique skill grants you temporary hit points equal to your proficiency bonus whenever you succeed on a Constitution saving throw.",
      },
      {
        name: "Celestial Aegis D",
        description: "This unique skill surrounds you with a radiant shield, reducing radiant damage taken by an amount equal to your proficiency bonus and dealing the same amount to attackers as retaliation.",
      },
      {
        name: "Arcane Barrage D",
        description: "This unique skill allows you to fire three bolts of magical energy as an action, each dealing damage equal to your proficiency bonus. You can target different creatures with each bolt.",
      },
      {
        name: "Storm Caller D",
        description: "This unique skill lets you summon a storm cloud that strikes a target within 30 feet with lightning. The target takes lightning damage equal to your proficiency bonus.",
      },
      {
        name: "Venom Fang D",
        description: "This unique skill causes your melee attacks to poison enemies, dealing additional poison damage equal to your proficiency bonus at the start of their turn for 1 minute.",
      },
      {
        name: "Stone Wall D",
        description: "This unique skill allows you to conjure a 5-foot-wide, 5-foot-tall wall of stone as a reaction, which lasts for a number of rounds equal to your proficiency bonus.",
      },
      {
        name: "Illusion Master D",
        description: "This unique skill lets you create a silent, moving illusion of yourself within 15 feet. The illusion lasts for 1 minute and grants you advantage on Dexterity saving throws while active.",
      },
      {
        name: "Phoenix Heart D",
        description: "This unique skill allows you to heal an ally within 30 feet for an amount equal to your proficiency bonus as a bonus action. If the target is at 0 hit points, they are stabilized.",
      },
      {
        name: "Soul Harvester D",
        description: "This unique skill causes you to regain hit points equal to your proficiency bonus whenever you reduce a creature to 0 hit points.",
      },
      {
        name: "Gravity Pulse D",
        description: "This unique skill lets you create a 15-foot sphere of gravitational force. All creatures within the sphere must succeed on a Strength saving throw or take force damage equal to your proficiency bonus and be pulled 10 feet toward the center.",
      },
      {
        name: "Mirror Blade D",
        description: "This unique skill creates an ethereal copy of your melee weapon that strikes alongside your attacks, dealing psychic damage equal to your proficiency bonus.",
      },
      {
        name: "Beast Tamer D",
        description: "This unique skill allows you to calm and communicate with beasts. Beasts within 30 feet must succeed on a Wisdom saving throw or become non-hostile for 1 hour.",
      },
      {
        name: "Bloodletting Strike D",
        description: "This unique skill causes your melee attacks to inflict a bleeding wound, dealing additional damage equal to your proficiency bonus at the start of the target's next turn.",
      },
      {
        name: "Time Walker D",
        description: "This unique skill lets you briefly manipulate time. As a reaction, you can add or subtract your proficiency bonus from an attack roll or saving throw within 30 feet.",
      },
      {
        name: "Thunderclap D",
        description: "This unique skill lets you create a deafening sound wave, forcing all creatures within 15 feet to make a Constitution saving throw or take thunder damage equal to your proficiency bonus and be deafened for 1 minute.",
      },
      {
        name: "Runic Barrier D",
        description: "This unique skill creates a magical barrier around you or an ally within 15 feet, absorbing an amount of damage equal to your proficiency bonus for 1 minute.",
      },
      {
        name: "Spectral Chains D",
        description: "This unique skill conjures spectral chains that bind a creature within 30 feet, reducing its speed to 0 for a number of rounds equal to your proficiency bonus.",
      },
      {
        name: "Blazing Speed D",
        description: "This unique skill doubles your movement speed and allows you to Dash as a bonus action for a number of rounds equal to your proficiency bonus.",
      },
      {
        name: "Void Shield D",
        description: "This unique skill surrounds you with a void-like aura that reduces all damage taken by an amount equal to your proficiency bonus for 1 minute.",
      },
      {
        name: "Body Changer D",
        description: "This unique skill allows you to physically change your appearance to another humanoid based look. You maintain this form for 1 hour and cannot change your appearance to differ more than 1 foot in height and you must still contain the same amount of limbs.",
      },
  ];
  

const UniqueSkill = () => {
  const [card, setCard] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [backClass, setBackClass] = useState(cardBacks[0]);
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    setIsFlipping(true); // Start coin flip animation
    setTimeout(() => {
      // Wait for animation to finish before drawing card
      const randomSkill = uniqueSkills[Math.floor(Math.random() * uniqueSkills.length)];
      const randomBack = cardBacks[Math.floor(Math.random() * cardBacks.length)];
      setCard(randomSkill);
      setBackClass(randomBack); // Randomize card back
      setRevealed(false);
      setIsFlipping(false); // Stop coin flip animation
    }, 800); // Match the duration of the animation (0.8s)
  };

  const revealCard = () => {
    setRevealed(true);
  };

  return (
    <div className="unique-skill-container">
      <h1>Unique Skill Card Draw</h1>
      <p>At Birth One Is Born With a Unique Skill. What pechance is yours?</p>
      <div className="deck-area" onClick={drawCard}>
        <img
          src={magicCoinImage}
          alt="Magic Coin"
          className={`magic-coin ${isFlipping ? "flipping" : ""}`}
        />
      </div>
      {card && (
        <div className="card-area">
          <div
            className={`card ${revealed ? "revealed" : ""}`}
            onClick={revealCard}
          >
            <div
              className="card-back"
              style={{ backgroundImage: `url(${backClass.image})` }}
            ></div>
            <div
              className="card-front"
              style={{ backgroundImage: `url(${cosmicImage})` }}
            >
              <p className="skill-name">{card.name}</p>
              <p className="skill-description">{card.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniqueSkill;
