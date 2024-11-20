import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import WeaponArts from './WeaponArts';
import MagicArts from './MagicArts';
import PassiveArts from './PassiveArts';
import BoostArts from './BoostArts';
import SkillPointUsage from './SkillPointUsage';
import './App.css';
import appBackground from './assets/app-background.jpg';
import deckImage from './assets/card-design.jpg';
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
  'Grimoire', 'SpellScroll', 'PermanentSpell', 'WeaponArt', 'MagicArt',
  'PassiveArt', 'BoostArt', 'SkillPoints', 'ExperiencePoints', 'Robe', 'Ring', 'LightArmor',
  'MediumArmor', 'WondrousItem'
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [luck, setLuck] = useState(0);
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

  const adjustLuck = (value) => {
    setLuck(luck + value);
  };

  const generateCards = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setSelectedCard(null);

    const newCards = Array.from({ length: 3 }, (_, index) => {
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const totalRoll = baseRoll + luck;
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

    // Log card details for now
    console.log(
      `You have obtained the ${selected.rarity.name} ${selected.itemType}: ${selected.item}`
    );
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
            <label>
              Total Luck:
              <input
                type="number"
                value={luck}
                onChange={(e) => setLuck(parseInt(e.target.value) || 0)}
                placeholder="Enter luck modifier"
              />
            </label>
            <div className="luck-buttons">
              <button onClick={() => adjustLuck(-50)}>Rudimentary</button>
              <button onClick={() => adjustLuck(-25)}>Simple</button>
              <button onClick={() => adjustLuck(0)}>Standard</button>
              <button onClick={() => adjustLuck(3)}>Adept</button>
              <button onClick={() => adjustLuck(5)}>Intermediate</button>
              <button onClick={() => adjustLuck(10)}>Expert</button>
              <button onClick={() => adjustLuck(20)}>Master</button>
              <button onClick={() => adjustLuck(30)}>Legendary</button>
            </div>
          </div>
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
        </div>
      )}
      {currentSection === 'WeaponArts' && <WeaponArts />}
      {currentSection === 'MagicArts' && <MagicArts />}
      {currentSection === 'PassiveArts' && <PassiveArts />}
      {currentSection === 'BoostArts' && <BoostArts />}
      {currentSection === 'SkillPointUsage' && <SkillPointUsage />}
    </div>
  );
};

export default App;
