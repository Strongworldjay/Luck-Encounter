import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import appBackground from './assets/app-background.png';
import darkmodeBackground from './assets/darkmode.png';
import mobileLightBackground from './assets/mobilelight.png';
import mobileDarkBackground from './assets/mobiledark.png';
import deckImage from './assets/card-design.png';
import darkDeck1 from './assets/darkmodecard1.png';
import darkDeck2 from './assets/darkmodecard2.png';
import darkDeck3 from './assets/darkmodecard3.png';
import darkDeck4 from './assets/darkmodecard4.png';
import blackholeImage from './assets/blackhole.png';
import whiteholeImage from './assets/whitehole.png';
import Navbar from './components/layout/Navbar.jsx';
import Card from './components/rewards/Card.jsx';
import LoadingScreen from './components/feedback/LoadingScreen.jsx';
import { DUNGEON_DIFFICULTIES, REWARD_ITEM_TYPES, getRewardRarity } from './config/rewards.js';
import { useIOSInputZoomLock } from './hooks/useIOSInputZoomLock.js';
import { useMediaQuery } from './hooks/useMediaQuery.js';
import { useTheme } from './hooks/useTheme.js';

const DARK_DECKS = [darkDeck1, darkDeck2, darkDeck3, darkDeck4];
const BountyBoard = lazy(() => import('./features/bounty/BountyBoard.jsx'));
const MagicBingo = lazy(() => import('./features/bingo/MagicBingo.jsx'));
const CharacterSheets = lazy(() => import('./features/character-sheets/CharacterSheets.jsx'));
const FeatPageLoader = lazy(() => import('./features/feats/FeatPageLoader.jsx'));
const JumpCalculator = lazy(() => import('./features/jump/JumpCalculator.jsx'));
const SkillPointPlanner = lazy(() => import('./features/planner/SkillPointPlanner.jsx'));
const Chests = lazy(() => import('./features/rewards/Chests.jsx'));
const RandomWheel = lazy(() => import('./features/rewards/RandomWheel.jsx'));
const ShopInventory = lazy(() => import('./features/shop/ShopInventory.jsx'));
const SpellsPage = lazy(() => import('./features/spells/SpellsPage.jsx'));
const FEAT_SECTION_IDS = new Set(['OriginFeats', 'GeneralFeats', 'MasteryFeats', 'RacialFeats', 'EpicBoons', 'MavenArms']);

function useStoredSet(key) {
  const [value, setValue] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
    catch { return new Set(); }
  });
  const update = (next) => {
    setValue(next);
    localStorage.setItem(key, JSON.stringify([...next]));
  };
  return [value, update];
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('DungeonCompletion');
  const [cards, setCards] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [characterLuck, setCharacterLuck] = useState(0);
  const [selectedDungeon, setSelectedDungeon] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [enabledTypes, setEnabledTypes] = useStoredSet('enabledTypes');
  const isMobile = useMediaQuery('(max-width: 720px)');
  const { isDark, preference, setThemePreference } = useTheme();

  useIOSInputZoomLock();

  useEffect(() => {
    if (!filtersOpen) return undefined;
    const closeOnEscape = ({ key }) => key === 'Escape' && setFiltersOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [filtersOpen]);

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(id);
  }, []);

  const selectedDifficulty = DUNGEON_DIFFICULTIES.find(({ id }) => id === selectedDungeon);
  const totalLuck = characterLuck + (selectedDifficulty?.luck ?? 0);
  const filterOptions = REWARD_ITEM_TYPES;
  const filteredItemTypes = enabledTypes.size
    ? REWARD_ITEM_TYPES.filter((type) => enabledTypes.has(type))
    : REWARD_ITEM_TYPES;
  const deckArt = useMemo(() => isDark ? DARK_DECKS[Math.floor(Math.random() * DARK_DECKS.length)] : deckImage, [isDark]);
  const background = isMobile
    ? (isDark ? mobileDarkBackground : mobileLightBackground)
    : (isDark ? darkmodeBackground : appBackground);

  const drawCards = async () => {
    if (isDrawing) return;
    setIsDrawing(true);
    try {
      const { getRandomItem } = await import('./utils/items.js');
      const pool = filteredItemTypes.length ? filteredItemTypes : REWARD_ITEM_TYPES;
      setCards(Array.from({ length: 3 }, (_, index) => {
        const rarity = getRewardRarity(Math.floor(Math.random() * 100) + 1 + totalLuck);
        const itemType = pool[Math.floor(Math.random() * pool.length)];
        return {
          id: `${Date.now()}-${index}`,
          rarity,
          itemType,
          item: getRandomItem(itemType, null, rarity.name),
          revealed: false,
          fadeAway: false,
        };
      }));
    } finally {
      setTimeout(() => setIsDrawing(false), 450);
    }
  };

  const revealCard = (selectedIndex) => {
    setCards((current) => current.map((card, index) => ({
      ...card,
      revealed: index === selectedIndex,
      fadeAway: index !== selectedIndex,
    })));
  };

  const clearCards = () => {
    setCards((current) => current.map((card) => ({ ...card, fadeAway: true })));
    setTimeout(() => setCards([]), 450);
  };

  const toggleFilter = (type) => {
    const next = new Set(enabledTypes);
    next.has(type) ? next.delete(type) : next.add(type);
    setEnabledTypes(next);
  };

  const renderSection = () => {
    if (FEAT_SECTION_IDS.has(currentSection)) return <FeatPageLoader section={currentSection} />;
    const sections = {
      RandomWheel: <RandomWheel compact={isMobile} totalLuck={totalLuck} itemTypes={filteredItemTypes} />,
      Chests: <Chests />,
      MagicBingo: <MagicBingo />,
      SPPlanner: <SkillPointPlanner />,
      CharacterSheets: <CharacterSheets />,
      Spells: <SpellsPage />,
      JumpCalc: <JumpCalculator />,
      ShopInventory: <ShopInventory />,
      BountyBoard: <BountyBoard />,
    };
    return sections[currentSection] ?? null;
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className={`app-shell ${isMobile ? 'is-mobile' : 'is-desktop'}`} style={{ '--bg-url': `url(${background})` }}>
      <div className="app-bg-fixed" aria-hidden />
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} themePreference={preference} onThemePreferenceChange={setThemePreference} />

      <main className="app-content">
        {currentSection === 'DungeonCompletion' ? (
          <section className="rewards-page" aria-label="Dungeon rewards">
            <header className="rewards-header panel">
              <h1>Congratulations, you have survived the Dungeon!</h1>
              <div className="rewards-toolbar">
                <button className="app-btn" type="button" onClick={() => setFiltersOpen(true)}>Filters</button>
                {enabledTypes.size > 0 && <span>{enabledTypes.size} enabled</span>}
              </div>
              <div className="rewards-luck-row">
                <label className="rewards-luck-input">
                  Character&apos;s Luck
                  <input
                    inputMode="numeric"
                    value={characterLuck}
                    onChange={({ target }) => setCharacterLuck(Number(target.value.replace(/\D/g, '')) || 0)}
                  />
                </label>
                <strong>Total Luck: {totalLuck}</strong>
              </div>
              <div className="dungeon-difficulty">
                {DUNGEON_DIFFICULTIES.map(({ id, label, luck }) => (
                  <button
                    key={id}
                    type="button"
                    className={selectedDungeon === id ? 'selected' : ''}
                    onClick={() => setSelectedDungeon(id)}
                  >
                    {label} ({luck >= 0 ? '+' : ''}{luck} Luck)
                  </button>
                ))}
              </div>
            </header>

            <button className="deck-container deck-stack" type="button" onClick={drawCards} aria-label="Draw reward cards">
              {Array.from({ length: 5 }, (_, index) => (
                <img key={index} src={deckArt} alt="" className={`deck-image deck-slice ${index === 4 ? 'top' : ''}`} style={{ top: index * 2, left: index * 2 }} />
              ))}
            </button>

            <div className={`card-container ${isDrawing ? 'drawing' : ''}`}>
              {cards.map((card, index) => <Card key={card.id} card={card} isDark={isDark} onClick={() => revealCard(index)} />)}
            </div>

            <button className="deck-container second-deck" type="button" onClick={clearCards} aria-label="Clear reward cards">
              <img src={isDark ? blackholeImage : whiteholeImage} alt="" className="deck-image blackhole-spin" />
            </button>

            {filtersOpen && (
              <div className="filter-drawer" role="dialog" aria-modal="true" aria-label="Item filters">
                <button className="filter-drawer__backdrop" type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters" />
                <div className="filter-drawer__panel">
                  <header className="filter-drawer__header"><h2>Item Filters</h2><button className="icon-btn" type="button" onClick={() => setFiltersOpen(false)}>✕</button></header>
                  <div className="filter-actions">
                    <button className="app-btn" type="button" onClick={() => setEnabledTypes(new Set(filterOptions))}>Select all</button>
                    <button className="app-btn" type="button" onClick={() => setEnabledTypes(new Set())}>Clear</button>
                  </div>
                  <div className="filter-list">
                    {filterOptions.map((type) => (
                      <label className="filter-row" key={type}><input type="checkbox" checked={enabledTypes.has(type)} onChange={() => toggleFilter(type)} />{type}</label>
                    ))}
                  </div>
                  <footer className="filter-footer"><button className="app-btn app-btn--primary" type="button" onClick={() => setFiltersOpen(false)}>Done</button></footer>
                </div>
              </div>
            )}
          </section>
        ) : <Suspense fallback={<div className="section-loading">Loading tool…</div>}>{renderSection()}</Suspense>}
      </main>
    </div>
  );
}
