import React, { useState } from 'react';
import './CharacterSheets.css';
import solaraImage from './assets/solara.jpeg';
import kaneImage from './assets/kane.jpeg';
import wingImage from './assets/wing.jpeg';
import clovisImage from './assets/clovis.jpeg';

const characters = [
  {
    id: 1,
    image: solaraImage,
    name: 'Solara',
    level: 3,
    race: 'Human',
    maxHp: 45,
    armorClass: 17,
    age: 87,
    alignment: 'Neutral Good',
    skills: ['Athletics', 'Survival', 'Perception'],
    class: 'Ranger',
    subclass: 'Beast Master',
    exp: 3200,
    skillPoints: 3,
    stats: {
      strength: { score: 16, modifier: '+3' },
      dexterity: { score: 14, modifier: '+2' },
      constitution: { score: 14, modifier: '+2' },
      intelligence: { score: 12, modifier: '+1' },
      wisdom: { score: 15, modifier: '+2' },
      charisma: { score: 11, modifier: '+0' },
    },
    backstory: "Solara’s earliest memory is of a fellow captive, Stellis the Owlin, offering her bread after grueling experiments. She was imprisoned and tortured by Dr. Elashor Morric, a cold and calculating elven mage who performed horrific experiments on children, fusing them with monster parts and manipulating their innate magic. Solara’s own latent magical abilities made her a prime subject, enduring electrocutions and injections that amplified her power. During one experiment, she unleashed a devastating magical surge that destroyed her restraints and allowed her to escape. Wounded and disoriented, she wandered until saved by Kane, who vowed to protect her and help her find safety.",
  },
  {
    id: 2,
    image: kaneImage,
    name: 'Kane Fourhaven',
    level: 3,
    race: 'Human',
    maxHp: 45,
    armorClass: 17,
    age: 87,
    alignment: 'Neutral Good',
    skills: ['Athletics', 'Survival', 'Perception'],
    class: 'Ranger',
    subclass: 'Beast Master',
    exp: 3200,
    skillPoints: 3,
    stats: {
      strength: { score: 16, modifier: '+3' },
      dexterity: { score: 14, modifier: '+2' },
      constitution: { score: 14, modifier: '+2' },
      intelligence: { score: 12, modifier: '+1' },
      wisdom: { score: 15, modifier: '+2' },
      charisma: { score: 11, modifier: '+0' },
    },
    backstory: "ane, a seasoned former soldier of The White Tempest Dominion, was both a skilled blacksmith and an exceptional fighter. A long-time friend of Clovis and Wing, he shared many battles and memories with them. However, after a tragic attack claimed the lives of his wife and daughter, Kane retired from the military, drifting through life in search of a new purpose. Years later, he reappeared on Clovis’s doorstep, a young girl named Solara by his side, rekindling his spirit as he took on the role of her protector and guide.",
  },
  {
    id: 3,
    image: wingImage,
    name: 'Wing',
    level: 3,
    race: 'Human',
    maxHp: 45,
    armorClass: 17,
    age: 87,
    alignment: 'Neutral Good',
    skills: ['Athletics', 'Survival', 'Perception'],
    class: 'Ranger',
    subclass: 'Beast Master',
    exp: 3200,
    skillPoints: 3,
    stats: {
      strength: { score: 16, modifier: '+3' },
      dexterity: { score: 14, modifier: '+2' },
      constitution: { score: 14, modifier: '+2' },
      intelligence: { score: 12, modifier: '+1' },
      wisdom: { score: 15, modifier: '+2' },
      charisma: { score: 11, modifier: '+0' },
    },
    backstory: "Wing, a shifter named for a birthmark resembling a bird wing, was orphaned during the Dominion wars. Raised in an overburdened orphanage, Wing's life changed when he was adopted by Björn and Judy, retired Dominion heroes who also took in five other orphans: Scratch (a Harengon), Tusk (a half-orc), Troll (a goliath), Red (a tiefling), and Daisy (a young elf). Despite their struggles, the family nurtured each other, working hard to contribute and survive. At 13, Wing left home to ease the burden on his adoptive parents. He worked odd jobs and joined underground fighting rings to make a living. In his journey, he discovered Ilidion, the goddess of battle, and became a devout follower. His reputation as a skilled fighter grew, culminating in a draw against Clovis Greyward, a Dominion recruit. The encounter inspired Wing to join the military, where he reunited with Clovis and bonded with Kane Fourhaven, a healer and blacksmith.",
  },
  {
    id: 4,
    image: clovisImage,
    name: 'Clovis Greyward',
    level: 3,
    race: 'Human',
    maxHp: 45,
    armorClass: 17,
    age: 87,
    alignment: 'Neutral Good',
    skills: ['Athletics', 'Survival', 'Perception'],
    class: 'Ranger',
    subclass: 'Beast Master',
    exp: 3200,
    skillPoints: 3,
    stats: {
      strength: { score: 16, modifier: '+3' },
      dexterity: { score: 14, modifier: '+2' },
      constitution: { score: 14, modifier: '+2' },
      intelligence: { score: 12, modifier: '+1' },
      wisdom: { score: 15, modifier: '+2' },
      charisma: { score: 11, modifier: '+0' },
    },
    backstory: "Clovis Greyward, a descendant of Talo and member of the Wolf Clan, was raised by his parents, Attila and Alexandria, near the Answell Cadence territory. The six clans of Talo—Bat, Rat, Raven, Tiger, Bear, and Wolf—each embodied unique principles and fighting styles. The Wolf Clan, Clovis' heritage, valued leadership, loyalty, and the bond of family. As a rare Lycan-blooded shifter blessed by Talo, Clovis excelled in combat, winning the prestigious Pride’s Fall tournament three consecutive times. At 18, Clovis began his pilgrimage to grow stronger and bring honor to his clan. He encountered Kane Fourhaven, a Dominion blacksmith and soldier, who invited Clovis to join the White Tempest Dominion military. Training rigorously, Clovis adapted to military life and thrived as a soldier. During his time, he bonded with Kane and met Wing, a fellow shifter and fighter. Both became his closest allies.",
  },
];

const CharacterSheets = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardClick = (id) => {
    setFocusedCard(focusedCard === id ? null : id);
  };

  const focusedCharacter = characters.find((char) => char.id === focusedCard);

  return (
    <div className="character-sheets-container">
      <div className="cards-container">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character-card ${focusedCard === character.id ? 'focused' : ''} ${
              focusedCard && focusedCard !== character.id ? 'hidden' : ''
            }`}
            onClick={() => handleCardClick(character.id)}
          >
            <img src={character.image} alt={character.name} className="character-image" />
            <h2>{character.name}</h2>
            <p><strong>Level:</strong> {character.level}</p>
            <p><strong>Race:</strong> {character.race}</p>
            <p><strong>Maximum HP:</strong> {character.maxHp}</p>
            <p><strong>Armor Class:</strong> {character.armorClass}</p>
            <p><strong>Age:</strong> {character.age}</p>
            <p><strong>Alignment:</strong> {character.alignment}</p>
            <p><strong>Skills:</strong> {character.skills.join(', ')}</p>
            <p><strong>Class:</strong> {character.class}</p>
            <p><strong>Subclass:</strong> {character.subclass}</p>
            <p><strong>Experience Points:</strong> {character.exp}</p>
            <p><strong>Skill Points:</strong> {character.skillPoints}</p>
            <div className="character-stats">
              {Object.entries(character.stats).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value.score} ({value.modifier})
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {focusedCharacter && (
        <div className="backstory-container">
          <h3>Backstory</h3>
          <p>{focusedCharacter.backstory}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterSheets;
