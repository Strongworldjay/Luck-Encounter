import React, { useState, useEffect, useRef, useMemo } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import RandomWheel from './RandomWheel';
import Magic from './MagicBingo';
import CharacterSheets from './CharacterSheets';
import Chests from './Chests';
import BountyBoard from './BountyBoard';
import './App.css';
import appBackground from './assets/app-background.jpg';
import darkmodeBackground from './assets/darkmode.jpg';
import deckImage from './assets/card-design.png';
import darkDeck1 from './assets/darkmodecard1.png';
import darkDeck2 from './assets/darkmodecard2.png';
import darkDeck3 from './assets/darkmodecard3.png';
import darkDeck4 from './assets/darkmodecard4.png';
import blackholeImage from './assets/blackhole.png';
import whiteholeImage from './assets/whitehole.png';
import { getRandomItem } from './ItemGenerator';
import { useBreakpoint } from './hooks/useBreakpoint';
import SkillPointPlanner from './SkillPointPlanner';
import SpellsPage from "./pages/SpellsPage";
import JumpCalculator from "./pages/JumpCalculator";
import ShopInventory from "./pages/ShopInventory";
import Feats from "./feats/Feats";
import { originFeats } from "./data/feats/originFeats";
import { generalFeats } from "./data/feats/generalFeats";
import { masteryFeats } from "./data/feats/masteryFeats";
import { racialFeats } from "./data/feats/racialFeats";
import { mavenArms } from "./data/feats/mavenArms";
import { epicBoons } from "./data/feats/epicBoons";

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
  'Warpick','Lance','Pike','Mana','Sword','Stamina'
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

  // ✅ Feat page routing (matches Navbar ids)
  const FEAT_SECTIONS = useMemo(() => ({
    OriginFeats:  { title: "Origin Feats",  data: originFeats },
    GeneralFeats: { title: "General Feats", data: generalFeats },
    MasteryFeats: { title: "Mastery Feats", data: masteryFeats },
    RacialFeats:  { title: "Racial Feats",  data: racialFeats },
    EpicBoons:    { title: "Epic Boons",    data: epicBoons },
    MavenArms:    { title: "Maven Arms",    data: mavenArms },
  }), []);

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

  // 🔒 iOS input-zoom lock
  useEffect(() => {
    const isiOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!isiOS) return;

    const vp = document.querySelector('meta#viewport');
    if (!vp) return;

    const lockZoom = () => {
      const cur =
        vp.getAttribute('content') ||
        'width=device-width, initial-scale=1, viewport-fit=cover';
      if (!/maximum-scale=1/.test(cur)) {
        vp.setAttribute('content', `${cur}, maximum-scale=1, user-scalable=no`);
      }
    };

    const unlockZoom = () => {
      const cur = vp.getAttribute('content') || '';
      const next = cur
        .replace(/,\s*maximum-scale=1/g, '')
        .replace(/,\s*user-scalable=no/g, '')
        .trim();
      if (next) vp.setAttribute('content', next);
    };

    const onFocusIn = (e) => {
      const t = e.target;
      if (!t) return;
      const isEditable =
        t.tagName === 'INPUT' ||
        t.tagName === 'TEXTAREA' ||
        t.isContentEditable;
      if (isEditable) lockZoom();
    };

    const onFocusOut = (e) => {
      const t = e.target;
      if (!t) return;
      const wasEditable =
        t.tagName === 'INPUT' ||
        t.tagName === 'TEXTAREA' ||
        t.isContentEditable;
      if (wasEditable) setTimeout(unlockZoom, 250);
    };

    document.addEventListener('focusin', onFocusIn, true);
    document.addEventListener('focusout', onFocusOut, true);

    return () => {
      document.removeEventListener('focusin', onFocusIn, true);
      document.removeEventListener('focusout', onFocusOut, true);
      unlockZoom();
    };
  }, []);

  // ---------- Filters state ----------
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [enabledTypes, setEnabledTypes] = useState(() => {
    try {
      const raw = localStorage.getItem('enabledTypes');
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });

  // Alphabetized, de-duplicated options for the filter UI
  const filterOptions = useMemo(
    () => Array.from(new Set(itemTypes)).sort((a, b) => a.localeCompare(b)),
    []
  );

  // Persist filters
  useEffect(() => {
    localStorage.setItem('enabledTypes', JSON.stringify([...enabledTypes]));
  }, [enabledTypes]);

  // Loading splash
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  // Keyboard: close drawer on ESC (only when open)
  useEffect(() => {
    if (!filtersOpen) return;
    const onKey = (e) => e.key === 'Escape' && setFiltersOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [filtersOpen]);

  const totalLuck = characterLuck + dungeonLuck;
  const filteredItemTypes = enabledTypes.size
    ? itemTypes.filter(t => enabledTypes.has(t))
    : itemTypes;

  const generateCards = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setSelectedCard(null);

    const pool = filteredItemTypes.length ? filteredItemTypes : itemTypes;
    const count = 3;

    const newCards = Array.from({ length: count }, (_, index) => {
      const baseRoll = Math.floor(Math.random() * 100) + 1;
      const totalRoll = baseRoll + totalLuck;
      const rarity =
        rarities.find(r => totalRoll >= r.range[0] && totalRoll <= r.range[1]) || rarities[0];
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
    setCards(prev =>
      prev.map((c, i) => (i === index ? { ...c, revealed: true } : { ...c, fadeAway: true }))
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

  // Deck image logic
  const darkDecks = [darkDeck1, darkDeck2, darkDeck3, darkDeck4];
  const deckArt = isDark ? darkDecks[Math.floor(Math.random() * darkDecks.length)] : deckImage;

  // Fixed background: choose image
  const bgUrl = isDark ? darkmodeBackground : appBackground;

  // ✅ MUST be above the early return so hooks count stays constant
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-url', `url(${bgUrl})`);
    return () => document.documentElement.style.removeProperty('--bg-url');
  }, [bgUrl]);

  // Void deck art: blackhole in dark mode, whitehole in light mode
  const voidArt = isDark ? blackholeImage : whiteholeImage;

  // ✅ NOW it’s safe to early-return
  if (isLoading) return <LoadingScreen />;

  return (
    <div className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}>
      {/* Fixed background layer that never scrolls */}
      <div className="app-bg-fixed" aria-hidden />

      <Navbar
        onNavClick={handleNavClick}
        currentSection={currentSection}
        compact={isMobile}
        mobileHiddenItems={['SkillPointUsage', 'MagicBingo', 'RandomWheel']}
      />

      {currentSection === 'DungeonCompletion' && (
        <>
          <div className="top-center-container panel">
            <h1>Congratulations, you have survived the Dungeon!</h1>

            {/* Filters bar */}
            <div className="filters-bar">
              <button className="btn btn-filters" onClick={() => setFiltersOpen(true)}>
                Filters
                {enabledTypes.size > 0 && (
                  <span className="filters-badge" aria-label={`${enabledTypes.size} filters enabled`}>
                    {enabledTypes.size}
                  </span>
                )}
              </button>
            </div>

            <div className="luck-section">
              <div className="luck-row">
                <div className="luck-input">
                  <label>
                    Character&apos;s Luck:
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
                <button
                  onClick={() => { setDungeonLuck(-50); setSelectedDungeon('F'); }}
                  className={selectedDungeon === 'F' ? 'selected' : ''}
                >
                  F Class Dungeon (-50 Luck)
                </button>
                <button
                  onClick={() => { setDungeonLuck(-25); setSelectedDungeon('D'); }}
                  className={selectedDungeon === 'D' ? 'selected' : ''}
                >
                  D Class Dungeon (-25 Luck)
                </button>
                <button
                  onClick={() => { setDungeonLuck(0); setSelectedDungeon('C'); }}
                  className={selectedDungeon === 'C' ? 'selected' : ''}
                >
                  C Class Dungeon (0 Luck)
                </button>
                <button
                  onClick={() => { setDungeonLuck(25); setSelectedDungeon('B'); }}
                  className={selectedDungeon === 'B' ? 'selected' : ''}
                >
                  B Class Dungeon (+25 Luck)
                </button>
                <button
                  onClick={() => { setDungeonLuck(45); setSelectedDungeon('A'); }}
                  className={selectedDungeon === 'A' ? 'selected' : ''}
                >
                  A Class Dungeon (+45 Luck)
                </button>
                <button
                  onClick={() => { setDungeonLuck(75); setSelectedDungeon('S'); }}
                  className={selectedDungeon === 'S' ? 'selected' : ''}
                >
                  S Class Dungeon (+75 Luck)
                </button>
              </div>
            </div>
          </div>

          {/* Filters Drawer */}
          {filtersOpen && (
            <div className="filter-drawer" role="dialog" aria-modal="true" onClick={() => setFiltersOpen(false)}>
              <div className="filter-drawer__panel" onClick={(e) => e.stopPropagation()}>
                <div className="filter-drawer__header">
                  <h3>Item Filters</h3>
                  <button className="icon-btn" onClick={() => setFiltersOpen(false)} aria-label="Close">✕</button>
                </div>

                <div className="filter-actions">
                  <button className="btn small" onClick={() => setEnabledTypes(new Set(filterOptions))}>
                    Select all
                  </button>
                  <button className="btn small" onClick={() => setEnabledTypes(new Set())}>
                    Clear
                  </button>
                </div>

                <div className="filter-list">
                  {filterOptions.map((t) => {
                    const checked = enabledTypes.has(t);
                    return (
                      <label key={t} className="filter-row">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            setEnabledTypes(prev => {
                              const next = new Set(prev);
                              if (next.has(t)) next.delete(t);
                              else next.add(t);
                              return next;
                            })
                          }
                        />
                        <span>{t}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="filter-footer">
                  <button className="btn primary" onClick={() => setFiltersOpen(false)}>Done</button>
                </div>
              </div>

              <div className="filter-drawer__backdrop" />
            </div>
          )}

          {/* Draw Deck */}
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
         <div className={`card-container ${isDrawing ? 'drawing' : ''} ${cards.length ? 'has-cards' : ''}`}>
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

          {/* Void Deck */}
          <div className="deck-container second-deck" onClick={resetCards} role="button" aria-label="Reset cards">
            <img src={voidArt} alt="Void Deck" className="deck-image blackhole-spin" />
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
      {currentSection === 'BountyBoard' && <BountyBoard />}

      {FEAT_SECTIONS[currentSection] && (
        <Feats
          title={FEAT_SECTIONS[currentSection].title}
          feats={FEAT_SECTIONS[currentSection].data}
        />
      )}
    </div>
  );
}