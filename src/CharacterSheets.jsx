import React, { useState } from 'react';
import './CharacterSheets.css';
import solaraImage from './assets/Ryun.jpeg';
import kaneImage from './assets/Lucky.jpeg';
import wingImage from './assets/Blu.jpeg';
import clovisImage from './assets/Braknir.jpeg';

const characters = [
  {
    id: 1,
    image: solaraImage,
    name: 'Ryun Nacht',
    level: 7,
    race: 'Aasimar',
    maxHp: 74,
    armorClass: 14,
    age: 17,
    alignment: 'Lawful Neutral',
    skills: ['Arcana', 'Intimidation', 'Investigation', 'Perception', 'Persuasion', 'Stealth', 'Alchemist Tools'],
    languages: ['Common', 'Dwarvish', 'Elvish', 'Goblin', 'Orc'],
    class: 'Warlock',
    subclass: 'Undead',
    exp: 30098,
    skillPoints: 1,
    stats: {
      strength: { score: 11, modifier: '+0' },
      dexterity: { score: 16, modifier: '+3' },
      constitution: { score: 14, modifier: '+2' },
      intelligence: { score: 11, modifier: '+1' },
      wisdom: { score: 12, modifier: '+1' },
      charisma: { score: 20, modifier: '+5' },
    },
    backstory:
      "I never really fit in—not at school, not at home. While others were out living, I buried myself in stories, anime, and games, always dreaming of another world. So when I graduated, I picked up a new game that caught my eye: The Architect’s System: Grasp of True Power. It promised something unique, something immersive. I didn’t expect it to actually take me. One moment I was choosing my path, the next I was waking up somewhere else entirely—somewhere real. A voice welcomed me to the true game, and the System became part of my reality. Thrown into a tutorial dungeon with two strangers who clearly weren’t from Earth, I had no time to panic. Instinct—or maybe fate—pushed me forward. I chose the path of cultivation, the one thing that felt like it truly resonated with who I wanted to be. This world is dangerous, vast, and full of things I don’t understand—but for once, I feel like I belong. Whether this is a dream or some twisted gift, I’m not wasting the chance. I’ll rise, not just to survive, but to seize the power I was always meant for."
  },
  {
    id: 2,
    image: kaneImage,
    name: 'Wyn Lucky Vayne',
    level: 7,
    race: 'Air Genasi',
    maxHp: 55,
    armorClass: 15,
    age: 11,
    alignment: 'Chaotic Evil',
    skills: ['Acrobatics', 'Deception', 'Investigation', 'Perception', 'Sleight of Hand', 'Stealth', 'Luck', 'Thieves Tools', 'Dragonchess'],
    languages: ['Celestial', 'Common', 'Elvish', 'Goblin', 'Halfling', 'Thieves’ Cant'],
    class: 'Rogue',
    subclass: 'Veilblade',
    exp: 30646,
    skillPoints: 5,
    stats: {
      strength: { score: 10, modifier: '+0' },
      dexterity: { score: 18, modifier: '+4' },
      constitution: { score: 12, modifier: '+1' },
      intelligence: { score: 12, modifier: '+1' },
      wisdom: { score: 13, modifier: '+1' },
      charisma: { score: 14, modifier: '+2' },
    },
    backstory:
      "Wyn Vayne was born under drifting skies and raised in the alleys of Zephyrhaven, a street orphan shaped by chance and charm. Growing up among gamblers, thieves, and fortune-seekers, he quickly became known for his uncanny luck—slipping past guards, finding coin purses at the perfect moment, and always rolling the right number. Taught by the old rogues of the Windswept Den, Wyn mastered card tricks, sleight of hand, and the one rule that mattered: “Fortune favors the bold.” But Wyn wants more than just back-alley fame. He dreams of joining the legendary Thieves’ Guild—the shadowy power behind Midan’s underworld. Armed with loaded dice, a quick tongue, and a gambler’s grin, he’s set out to prove he’s more than just lucky—he’s worthy. Whether fate, luck, or the wind itself guides him, Wyn Vayne is ready to take his biggest gamble yet."
  },
  {
    id: 3,
    image: wingImage,
    name: 'Blu Ironmolt',
    level: 7,
    race: 'Half-Dragon',
    maxHp: 90,
    armorClass: 19,
    age: 14,
    alignment: 'Chaotic Neutral',
    skills: ['Acrobatics', 'Arcana', 'Athletics', 'Investigation', 'Perception', 'Survival', 'Smiths Tools'],
    languages: ['Common', 'Draconic', 'Dwarvish', 'Giant', 'Orc', 'Undercommon'],
    class: 'Barbarian',
    subclass: 'Path of the Winter-Wyrm',
    exp: 29586,
    skillPoints: 17,
    stats: {
      strength: { score: 20, modifier: '+5' },
      dexterity: { score: 14, modifier: '+2' },
      constitution: { score: 17, modifier: '+3' },
      intelligence: { score: 16, modifier: '+2' },
      wisdom: { score: 12, modifier: '+1' },
      charisma: { score: 14, modifier: '+2' },
    },
    backstory:
      "Bludrin Ironmolt’s earliest memories are of a deadly blizzard—the same one that left him orphaned and buried in a ruined caravan, his silver-dusted scales shielding his small body from the cold. Found and adopted by blacksmiths Bram and Tilda Ironmolt, Blu grew up in the forge, where he discovered a natural talent and passion for crafting steel and etching runes..."
  },
  {
    id: 4,
    image: clovisImage,
    name: 'Braknir',
    level: 8,
    race: 'Leonin',
    maxHp: 86,
    armorClass: 16,
    age: 23,
    alignment: 'Lawful Neutral',
    skills: ['Acrobatics', 'Athletics', 'Insight', 'Perception', 'Survival'],
    languages: ['Common', 'Halfling', 'Leonin', 'Orc'],
    class: 'Fighter',
    subclass: 'Blade Breaker',
    exp: 31050,
    skillPoints: 7,
    stats: {
      strength: { score: 20, modifier: '+5' },
      dexterity: { score: 16, modifier: '+3' },
      constitution: { score: 22, modifier: '+6' },
      intelligence: { score: 7, modifier: '-2' },
      wisdom: { score: 12, modifier: '+1' },
      charisma: { score: 14, modifier: '+2' },
    },
    backstory:
      'Braknir was born without a mane, a shameful mark among the leonin, where strength and status were tied to physical traits...'
  },
];

export default function CharacterSheets() {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardClick = (id) => {
    setFocusedCard(focusedCard === id ? null : id);
  };

  const focusedCharacter = characters.find((c) => c.id === focusedCard);

  return (
    <div className="character-sheets-container">
      <div className="cards-container">
        {characters.map((character) => (
          <div
            key={character.id}
            role="button"
            tabIndex={0}
            className={`character-card ${focusedCard === character.id ? 'focused' : ''} ${
              focusedCard && focusedCard !== character.id ? 'hidden' : ''
            }`}
            onClick={() => handleCardClick(character.id)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(character.id)}
          >
            <img src={character.image} alt={character.name} className="character-image" />
            <h2>{character.name}</h2>
            <p><strong>Level:</strong> {character.level}</p>
            <p><strong>Race:</strong> {character.race}</p>
            <p><strong>Age:</strong> {character.age}</p>
            <p><strong>Alignment:</strong> {character.alignment}</p>
            <p><strong>Skills:</strong> {character.skills.join(', ')}</p>
            <p><strong>Languages:</strong> {character.languages.join(', ')}</p>
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
}
