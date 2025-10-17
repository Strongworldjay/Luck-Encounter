import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import RandomWheel from './RandomWheel';
import Magic from './MagicBingo';
import CharacterSheets from './CharacterSheets';
import Chests from './Chests';
import './App.css';
import appBackground from './assets/app-background.jpg';
import darkmodeBackground from './assets/darkmode.jpg';
import deckImage from './assets/card-design.jpg';
import darkDeck1 from './assets/darkmodecard1.png';
import darkDeck2 from './assets/darkmodecard2.png';
import darkDeck3 from './assets/darkmodecard3.png';
import darkDeck4 from './assets/darkmodecard4.png';
import blackholeImage from './assets/blackhole.png';
import { getRandomItem } from './ItemGenerator';
import { useBreakpoint } from './hooks/useBreakpoint';
import SkillPointPlanner from './SkillPointPlanner';
import SpellsPage from "./pages/SpellsPage";
import JumpCalculator from "./pages/JumpCalculator";
import ShopInventory from "./pages/ShopInventory"; 

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

  // 🌙 Detect system dark mode
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(darkQuery.matches);
    update();
    darkQuery.addEventListener('change', update);
    return () => darkQuery.removeEventListener('change', update);
  }, []);

  // Apply theme class to <html> so CSS variables cascade app-wide
  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', isDark);
  }, [isDark]);

  // Filters
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [enabledTypes, setEnabledTypes] = useState(() => {
    try {
      const raw = localStorage.getItem('enabledTypes');
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem('enabledTypes', JSON.stringify([...enabledTypes]));
  }, [enabledTypes]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const totalLuck = characterLuck + dungeonLuck;
  const filteredItemTypes = enabledTypes.size ? itemTypes.filter(t => enabledTypes.has(t)) : itemTypes;

  const generateCards = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setSelectedCard(null);

    const pool = filteredItemTypes.length ? filteredItemTypes : itemTypes;
    const count = 3;

    const newCards = Array.from({ length: count }, (_, index) => {
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const totalRoll = baseRoll + totalLuck;
      const rarity = rarities.find(r => totalRoll >= r.range[0] && totalRoll <= r.range[1]) || rarities[0];
      const itemType = pool[Math.floor(Math.random() * pool.length)];
      const itemName = getRandomItem(itemType, null, rarity.name.replace(' ', ''));
      return { id: index, rarity, itemType, item: itemName, revealed: false, fadeAway: false };
    });

    setCards(newCards);
    setTimeout(() => setIsDrawing(false), 1000);
  };

  const revealCard = (index) => {
    const selected = cards[index];
    setSelectedCard(selected);
    setCards(prev => prev.map((c, i) => (i === index ? { ...c, revealed: true } : { ...c, fadeAway: true })));
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

  // Deck image logic
  const darkDecks = [darkDeck1, darkDeck2, darkDeck3, darkDeck4];
  const deckArt = isDark ? darkDecks[Math.floor(Math.random() * darkDecks.length)] : deckImage;

  return (
    <div
      className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}
      style={{
        backgroundImage: `url(${isDark ? darkmodeBackground : appBackground})`,
      }}
    >
      <Navbar
        onNavClick={handleNavClick}
        currentSection={currentSection}
        compact={isMobile}
        mobileHiddenItems={['SkillPointUsage', 'MagicBingo', 'RandomWheel']}
      />

      {currentSection === 'DungeonCompletion' && (
        <>
          <div className="top-center-container panel">
            <h1>Why Not Test Your Luck?</h1>
            <div className="luck-section">
              <div className="luck-row">
                <div className="luck-input">
                  <label>
                    Character's Luck:
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      enterKeyHint="done"
                      autoComplete="off"
                      value={String(characterLuck)}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D+/g, '');
                        setCharacterLuck(v === '' ? 0 : parseInt(v, 10));
                      }}
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
                <button onClick={() => { setDungeonLuck(45); setSelectedDungeon('A'); }}
                        className={selectedDungeon === 'A' ? 'selected' : ''}>
                  A Class Dungeon (+45 Luck)
                </button>
                <button onClick={() => { setDungeonLuck(75); setSelectedDungeon('S'); }}
                        className={selectedDungeon === 'S' ? 'selected' : ''}>
                  S Class Dungeon (+75 Luck)
                </button>
              </div>
            </div>
          </div>

          {/* Draw Deck (stacked look; hover only top slice) */}
          <div className="deck-container deck-stack" onClick={generateCards} role="button" aria-label="Draw cards">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={deckArt}
                alt="Deck of Cards"
                className={`deck-image deck-slice ${i === 4 ? 'top' : ''}`}
                style={{
                  top: `${i * 2}px`,
                  left: `${i * 2}px`,
                  position: 'absolute',
                }}
              />
            ))}
          </div>

          {/* Cards */}
          <div className={`card-container ${isDrawing ? 'drawing' : ''}`}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                isDark={isDark}
                onClick={() => revealCard(index)}
                className={`card ${card.revealed ? 'revealed' : ''} ${card.fadeAway ? 'fade-away' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>

          {/* Void Deck (single, slow rotating image) */}
          <div className="deck-container second-deck" onClick={resetCards} role="button" aria-label="Reset cards">
            <img src={blackholeImage} alt="Void Deck" className="deck-image blackhole-spin" />
          </div>
        </>
      )}

      {currentSection === 'RandomWheel' && (
        <RandomWheel compact={isMobile} totalLuck={totalLuck} itemTypes={filteredItemTypes} />
      )}

      {currentSection === 'Chests' && <Chests />}
      {currentSection === 'MagicBingo' && <Magic />}
      {currentSection === 'SPPlanner' && <SkillPointPlanner />}
      {currentSection === 'CharacterSheets' && <CharacterSheets />}
      {currentSection === "Spells" && <SpellsPage />}
      {currentSection === 'JumpCalc' && <JumpCalculator />}
      {currentSection === 'ShopInventory' && <ShopInventory />}
    </div>
  );
}
