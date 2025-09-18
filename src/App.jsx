import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import RandomWheel from './RandomWheel';
import SacredArts from './SacredArts';
import Magic from './MagicBingo';
import SkillPointUsage from './SkillPointUsage';
import CharacterSheets from './CharacterSheets';
import UniqueSkill from './UniqueSkill';
import Chests from './Chests';
import './App.css';
import appBackground from './assets/app-background.jpg';
import deckImage from './assets/card-design.jpg';
import voidImage from './assets/void.webp';
import { getRandomItem } from './ItemGenerator';
import { useBreakpoint } from './hooks/useBreakpoint';

const rarities = [
  { name: 'Common',    color: 'white',  range: [-100, 5] },
  { name: 'Uncommon',  color: 'green',  range: [6, 49] },
  { name: 'Rare',      color: 'blue',   range: [50, 89] },
  { name: 'Very Rare', color: 'purple', range: [90, 109] },
  { name: 'Legendary', color: 'orange', range: [110, 140] },
  { name: 'Unique',    color: 'red',    range: [141, 200] },
];

const itemTypes = [
  'Helmet','HeavyArmor','Gauntlet','Boots','Necklace','Cloak',
  'Sword','Bow','Axe','Hammer','Glaive','Dagger','Staff','Rod','Wand',
  'Grimoire','WeaponArt','Scythe','Dagger','Sword',
  'PassiveArt','BoostArt','SkillPoints','Robe','Ring','LightArmor',
  'MediumArmor','WondrousItem','Shield','Crossbow','Spear','Halberd','Club','Whip','Mace',
  'Warpick','Lance','Pike','Mana','Sword'
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [resetDeck, setResetDeck] = useState(false);
  const [characterLuck, setCharacterLuck] = useState(0);
  const [dungeonLuck, setDungeonLuck] = useState(0);
  const [selectedDungeon, setSelectedDungeon] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentSection, setCurrentSection] = useState('DungeonCompletion');
  const cardRefs = useRef([]);

  const isMobile = useBreakpoint('(max-width: 640px)');

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const totalLuck = characterLuck + dungeonLuck;

  const generateCards = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setSelectedCard(null);

    const count = 3; // ← always draw 3 (mobile + desktop)
    const newCards = Array.from({ length: count }, (_, index) => {
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const totalRoll = baseRoll + totalLuck;
      const rarity = rarities.find(r => totalRoll >= r.range[0] && totalRoll <= r.range[1]) || rarities[0];
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
    setCards(prev =>
      prev.map((card, i) => (i === index ? { ...card, revealed: true } : { ...card, fadeAway: true }))
    );
    console.log(`You have obtained the ${selected.rarity.name} ${selected.itemType}: ${selected.item}`);
  };

  const resetCards = () => {
    setCards(prev => prev.map(card => ({ ...card, fadeAway: true })));
    setTimeout(() => {
      setCards([]);
      setSelectedCard(null);
      setResetDeck(prev => !prev);
    }, 500);
  };

  const handleNavClick = (section) => setCurrentSection(section);

  if (isLoading) return <LoadingScreen />;

  return (
    <div
      className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}
      style={{ backgroundImage: `url(${appBackground})` }}
    >
      <Navbar
        onNavClick={handleNavClick}
        currentSection={currentSection}
        compact={isMobile}
        mobileHiddenItems={['SkillPointUsage','MagicBingo','RandomWheel','CharacterSheets']}
      />

      {currentSection === 'DungeonCompletion' && (
        <div className="content-wrap">
          <div className="top-center-container panel">
            <h1>Why Not Test Your Luck?</h1>

            <div className="luck-section">
              <div className="luck-row">
                <div className="luck-input">
                  <label>
                    Character's Luck:
                    <input
                      type="number"
                      inputMode="numeric"
                      value={characterLuck}
                      onChange={(e) => setCharacterLuck(parseInt(e.target.value) || 0)}
                      placeholder="Enter character's luck"
                    />
                  </label>
                </div>

                <div className="total-luck">
                  <h3>Total Luck: {totalLuck}</h3>
                </div>
              </div>

              <div className="dungeon-difficulty">
                <button onClick={() => { setDungeonLuck(-50); setSelectedDungeon('F'); }}
                        className={selectedDungeon === 'F' ? 'selected' : ''}>
                  F Class Dungeon (-50 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(-25); setSelectedDungeon('D'); }}
                        className={selectedDungeon === 'D' ? 'selected' : ''}>
                  D Class Dungeon (-25 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(0); setSelectedDungeon('C'); }}
                        className={selectedDungeon === 'C' ? 'selected' : ''}>
                  C Class Dungeon (0 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(25); setSelectedDungeon('B'); }}
                        className={selectedDungeon === 'B' ? 'selected' : ''}>
                  B Class Dungeon (+25 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(35); setSelectedDungeon('A'); }}
                        className={selectedDungeon === 'A' ? 'selected' : ''}>
                  A Class Dungeon (+35 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(50); setSelectedDungeon('S'); }}
                        className={selectedDungeon === 'S' ? 'selected' : ''}>
                  S Class Dungeon (+50 Luck)
                </button>
              </div>
            </div>
          </div>

          {/* Left deck (draw) */}
          <div className="deck-container" onClick={generateCards} role="button" aria-label="Draw cards">
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

          {/* Cards */}
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

          {/* Right deck (reset) */}
          <div className="deck-container second-deck" onClick={resetCards} role="button" aria-label="Reset cards">
            <img src={voidImage} alt="Void Deck" className="deck-image" />
          </div>
        </div>
      )}

      {currentSection === 'Wheel' && (
        <RandomWheel
          totalLuck={totalLuck}
          itemTypes={itemTypes}
          compact={isMobile}
          onReward={(payload) => console.log('Wheel Reward:', payload)}
        />
      )}

      {currentSection === 'RandomWheel' && <RandomWheel compact={isMobile} />}
      {currentSection === 'SacredArts' && <SacredArts />}
      {currentSection === 'Chests' && <Chests />}
      {currentSection === 'MagicBingo' && <Magic />}
      {currentSection === 'SkillPointUsage' && <SkillPointUsage />}
      {currentSection === 'CharacterSheets' && <CharacterSheets />}
      {currentSection === 'UniqueSkill' && <UniqueSkill />}
    </div>
  );
}
