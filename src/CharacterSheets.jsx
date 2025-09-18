import React, { useState } from 'react';
import './CharacterSheets.css';
import solaraImage from './assets/Ryun.png';
import kaneImage from './assets/Lucky.png';
import wingImage from './assets/Blu.png';
import clovisImage from './assets/Braknir.png';

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
      "Wyn Vayne was born beneath the drifting skies, his existence as fleeting as the wind and as unpredictable as a roll of the dice. A street orphan from the small town of Zephyrhaven, he grew up among thieves, gamblers, and fortune-seekers. Unlike many who struggled to survive, Wyn always had luck on his side—whether it was slipping past guards unnoticed, finding a misplaced coin purse at just the right time, or rolling the perfect number to win a game of dice. Though he was small, his quick hands and silver tongue earned him a reputation among the city's back-alley gamblers and pickpockets. The old conmen at the Windswept Den, a notorious tavern where the city's lowlifes mingaled, took a liking to the boy. They taught him card tricks, sleight of hand, and the golden rule of rogues: “The biggest risk is taking none at all—fortune favors the bold.” But Wyn doesn’t just want to scrape by in the shadows—he dreams of something bigger. He has heard whispers of the legendary Thieves’ Guild said to control Midan’s underworld. They only recruit the best—those who prove themselves worthy through skill, cunning, and an audacity that borders on foolishness. To Wyn, it sounds like the perfect place for someone like him. So, armed with little more than his wits, a set of loaded dice, and a knack for getting into (and out of) trouble, Wyn has set out on his journey. Whether it’s luck, fate, or the winds of adventure guiding him, he’s ready to take the biggest gamble of his life."
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
      "The couple who found him were blacksmiths—Bram and Tilda Ironmolt—traveling to a remote settlement to deliver enchanted blades. But in the forge, he bloomed. Where others saw soot and sweat, Blu saw art. Where others felt exhaustion, he felt excitement. Despite his age, he learned to temper steel, shape alloys, and etch runes far beyond his years. He was eager to prove himself—not to the world, but to the lingering mystery in his blood. The warhammer he trained with, twice his size, was a symbol: he would not let the legacy of his ancestry be buried beneath snow and silence. The System recognized his potential. Even before setting foot in a dungeon, Blu was regarded by the local Artisan’s Guild as a prodigy in waiting. His own silvery scales, his breath that danced with ice, and his recurring dreams of flying through mountain storms—not falling, but soaring—all hinted at a connection to that ancient line. He began secretly collecting stories, scraps of lore about the silver dragons—guardians, it was said, who once watched over the skies before the rise of the Architect. Perhaps, he thought, one had loved a mortal. Perhaps that story ended with him. Blu made a vow. He would join the Artisan’s Guild not just to master his craft but to earn access to the rarest materials, the oldest forges, and the guarded knowledge only high-ranking artisans could access. His goal was not just to become the greatest blacksmith in Midan, but to forge something worthy of awakening his lineage—something that could call to the skies themselves. He dreams of venturing to the edge of the System’s reach, to the Frostspire Wastes, where rumors speak of slumbering silver wyrms entombed beneath ancient ice. There, perhaps, he could uncover where his kind once ruled, and why they vanished. Some nights, Blu stares into the fire of the forge and sees visions—wings wrapped in clouds, ancient voices speaking in a tongue older than the System, and a face like his own… older, wiser, draconic."
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
      'Braknir, born without a mane, was an oddity among the leonin. In a society where a male’s strength was often judged by the fullness of his mane, his lack of one marked him as weak—an outcast before he could even stand. The warriors of his pride barely acknowledged him, and he was left to be raised among the females, learning their ways instead of the battle training that was his birthright. But Braknir refused to accept his fate. He watched the warriors from the shadows, mimicking their movements, practicing in secret with crude weapons he carved from bone and wood. He wrestled the young hunters of the pridesisters, sharpening his instincts. Yet no matter how much he trained, he was never accepted. When he came of age, he challenged a warrior of his pride, hoping to prove his worth. The fight was a disaster. His opponent didn’t see him as a real challenger—only an insult. The warrior tore into him without restraint, leaving Braknir bloodied and broken. The left side of his face was ruined, permanently scarred. He was mocked, shunned, and left with no choice but to leave the pride behind. With nothing but scavenged leather armor—too tight around his growing frame—and a battered weapon, Braknir set out into the world, determined to forge himself into a true warrior. He took whatever work he could find—guarding caravans, brawling for coin, hunting dangerous beasts. He studies every fighting style he encounters, determined to master them all. Magic, however, he despises, seeing it as a crutch for the weak.'
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
