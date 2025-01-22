import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import WeaponArts from './WeaponArts';
import SacredArts from './SacredArts';
import PassiveArts from './PassiveArts';
import BoostArts from './BoostArts';
import SkillPointUsage from './SkillPointUsage';
import CharacterSheets from './CharacterSheets';
import UniqueSkill from './UniqueSkill';
import './App.css';
import appBackground from './assets/app-background.jpg';
import deckImage from './assets/card-design.jpg';
import voidImage from './assets/void.webp'; // Importing the new image
import { getRandomItem } from './ItemGenerator';

const rarities = [
  { name: 'Common', color: 'white', range: [-100, 50] },
  { name: 'Uncommon', color: 'green', range: [51, 70] },
  { name: 'Rare', color: 'blue', range: [71, 81] },
  { name: 'Very Rare', color: 'purple', range: [82, 90] },
  { name: 'Legendary', color: 'orange', range: [91, 99] },
  { name: 'Unique', color: 'red', range: [100, 200] },
];

const itemTypes = [
  'Helmet', 'HeavyArmor', 'Gauntlet', 'Boots', 'Necklace', 'Cloak', 'Potion',
  'Sword', 'Bow', 'Axe', 'Hammer', 'Glaive', 'Dagger', 'Staff', 'Rod', 'Wand',
  'Grimoire', 'Gems', 'WeaponArt',
  'PassiveArt', 'BoostArt', 'SkillPoints', 'ExperiencePoints', 'Robe', 'Ring', 'LightArmor',
  'MediumArmor', 'WondrousItem', 'Shield', 'Crossbow', 'Spear', 'Halberd', 'Club', 'Whip', 'Mace',
  'Warpick', 'Lance', 'Pike',
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [resetDeck, setResetDeck] = useState(false); // State for the second deck reset
  const [characterLuck, setCharacterLuck] = useState(0); // Character's Luck
  const [dungeonLuck, setDungeonLuck] = useState(0); // Dungeon Difficulty Luck
  const [selectedDungeon, setSelectedDungeon] = useState(null); // Track selected button
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentSection, setCurrentSection] = useState('DungeonCompletion');
  const cardRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const totalLuck = characterLuck + dungeonLuck; // Combine the luck values

  const generateCards = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setSelectedCard(null);

    const newCards = Array.from({ length: 3 }, (_, index) => {
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const totalRoll = baseRoll + totalLuck;
      const rarity = rarities.find((r) => totalRoll >= r.range[0] && totalRoll <= r.range[1]) || rarities[0];
      const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
      const itemName = getRandomItem(itemType, null, rarity.name.replace(' ', ''));
      return { id: index, rarity, itemType, item: itemName, revealed: false, fadeAway: false };
    });

    setCards(newCards);
    setTimeout(() => setIsDrawing(false), 1000);
  };

  const revealCard = (index) => {
    const selected = cards[index];
    setSelectedCard(selected);
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index
          ? { ...card, revealed: true }
          : { ...card, fadeAway: true }
      )
    );

    console.log(
      `You have obtained the ${selected.rarity.name} ${selected.itemType}: ${selected.item}`
    );
  };

  const resetCards = () => {
    // Apply the fade-away class to all cards
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, fadeAway: true }))
    );

    // Delay clearing the cards to allow animation to finish
    setTimeout(() => {
      setCards([]);
      setSelectedCard(null);
      setResetDeck((prev) => !prev); // Toggle resetDeck to trigger state change
    }, 500); // Match the animation duration
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container" style={{ backgroundImage: `url(${appBackground})` }}>
      <Navbar onNavClick={handleNavClick} currentSection={currentSection} />
      {currentSection === 'DungeonCompletion' && (
        <div>
          <div className="top-center-container">
            <h1>Why Not Test Your Luck?</h1>
            <div className="luck-section">
              {/* Character's Luck Input and Total Luck in the same row */}
              <div className="luck-row">
                <div className="luck-input">
                  <label>
                    Character's Luck:
                    <input
                      type="number"
                      value={characterLuck}
                      onChange={(e) => setCharacterLuck(parseInt(e.target.value) || 0)}
                      placeholder="Enter character's luck"
                    />
                  </label>
                </div>
                {/* Display Total Luck */}
                <div className="total-luck">
                  <h3>Total Luck: {totalLuck}</h3>
                </div>
              </div>

              {/* Dungeon Difficulty Buttons */}
              <div className="dungeon-difficulty">
                <button
                  onClick={() => {
                    setDungeonLuck(-50);
                    setSelectedDungeon('Rudimentary');
                  }}
                  className={selectedDungeon === 'Rudimentary' ? 'selected' : ''}
                >
                  Rudimentary
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(-25);
                    setSelectedDungeon('Simple');
                  }}
                  className={selectedDungeon === 'Simple' ? 'selected' : ''}
                >
                  Simple
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(0);
                    setSelectedDungeon('Standard');
                  }}
                  className={selectedDungeon === 'Standard' ? 'selected' : ''}
                >
                  Standard
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(10);
                    setSelectedDungeon('Adept');
                  }}
                  className={selectedDungeon === 'Adept' ? 'selected' : ''}
                >
                  Adept
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(20);
                    setSelectedDungeon('Intermediate');
                  }}
                  className={selectedDungeon === 'Intermediate' ? 'selected' : ''}
                >
                  Intermediate
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(40);
                    setSelectedDungeon('Expert');
                  }}
                  className={selectedDungeon === 'Expert' ? 'selected' : ''}
                >
                  Expert
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(60);
                    setSelectedDungeon('Master');
                  }}
                  className={selectedDungeon === 'Master' ? 'selected' : ''}
                >
                  Master
                </button>
                <button
                  onClick={() => {
                    setDungeonLuck(100);
                    setSelectedDungeon('Legendary');
                  }}
                  className={selectedDungeon === 'Legendary' ? 'selected' : ''}
                >
                  Legendary
                </button>
              </div>
            </div>
          </div>
          {/* First Deck */}
          <div className="deck-container" onClick={generateCards}>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={deckImage}
                alt="Deck of Cards"
                className="deck-image"
                style={{ top: `${i * 2}px`, left: `${i * 2}px`, position: 'absolute' }}
              />
            ))}
          </div>
          <div className={`card-container ${isDrawing ? 'drawing' : ''}`}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => revealCard(index)}
                className={`card ${card.revealed ? 'revealed' : ''} ${card.fadeAway ? 'fade-away' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>

          {/* Second Deck */}
          <div className="deck-container second-deck" onClick={resetCards}>
            <img
              src={voidImage}
              alt="Void Deck"
              className="deck-image"
            />
          </div>
        </div>
      )}
      {currentSection === 'WeaponArts' && <WeaponArts />}
      {currentSection === 'SacredArts' && <SacredArts />}
      {currentSection === 'PassiveArts' && <PassiveArts />}
      {currentSection === 'BoostArts' && <BoostArts />}
      {currentSection === 'SkillPointUsage' && <SkillPointUsage />}
      {currentSection === 'CharacterSheets' && <CharacterSheets />}
      {currentSection === 'UniqueSkill' && <UniqueSkill />}
    </div>
  );
};

export default App;
