import { Component, lazy, Suspense, useEffect, useState } from 'react';
import Wallpaper from './components/layout/Wallpaper.jsx';
import Navbar from './components/layout/Navbar.jsx';
import { NAV_GROUPS } from './config/navigation.js';
import { useTheme } from './hooks/useTheme.js';
import { readStorage, writeStorage } from './utils/storage.js';
const pages = {
  MonsterCrystals: lazy(() => import('./features/monster-crystals/MonsterCrystals.jsx')),
  DungeonCompletion: lazy(() => import('./features/rewards/DungeonRewards.jsx')),
  BountyBoard: lazy(() => import('./features/bounty/BountyBoard.jsx')),
  JumpCalc: lazy(() => import('./features/jump/JumpCalculator.jsx')),
  SPPlanner: lazy(() => import('./features/planner/SkillPointPlanner.jsx')),
  Chests: lazy(() => import('./features/rewards/Chests.jsx')),
  ShopInventory: lazy(() => import('./features/shop/ShopInventory.jsx')),
  Spells: lazy(() => import('./features/spells/SpellsPage.jsx')),
  ItemCatalog: lazy(() => import('./features/items/ItemCatalog.jsx')),
};
const FeatPageLoader = lazy(() => import('./features/feats/FeatPageLoader.jsx'));
const validPages = new Set(NAV_GROUPS.flatMap((group) => group.items.map((item) => item.id)));
function sectionFromHash() { const section = window.location.hash.slice(1); return validPages.has(section) ? section : 'DungeonCompletion'; }
class PageErrorBoundary extends Component {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    return this.state.error ? <div className="empty-state"><h1>This tool could not load.</h1><p>Reload to try again.</p><button className="app-btn" onClick={() => window.location.reload()}>Reload</button></div> : this.props.children;
  }
}
export default function App() {
  const [section, setSection] = useState(sectionFromHash);
  const [rewardState, setRewardState] = useState(() => ({ luck: readStorage('hoard-luck', 0), dungeon: readStorage('hoard-dungeon', 'C'), cards: [], selected: null }));
  const { preference, setThemePreference, isDark } = useTheme();
  useEffect(() => { const sync = () => { setSection(sectionFromHash()); window.scrollTo(0, 0); }; window.addEventListener('hashchange', sync); return () => window.removeEventListener('hashchange', sync); }, []);
  useEffect(() => { writeStorage('hoard-luck', rewardState.luck); writeStorage('hoard-dungeon', rewardState.dungeon); }, [rewardState.luck, rewardState.dungeon]);
  useEffect(() => { document.title = `${NAV_GROUPS.flatMap((g) => g.items).find((item) => item.id === section)?.label ?? 'Dungeon Rewards'} · The Remarkable Hoard`; }, [section]);
  const Page = pages[section];
  return <div className="app-shell">
    <Wallpaper dark={isDark} />
    <a className="skip-link" href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById("main-content").focus(); }}>Skip to content</a>
    <Navbar currentSection={section} onNavigate={(next) => { window.location.hash = next; setSection(next); window.scrollTo(0, 0); }} themePreference={preference} onThemePreferenceChange={setThemePreference} />
    <main id="main-content" tabIndex={-1} className="app-content">
      <PageErrorBoundary key={section}><Suspense fallback={<div className="section-loading" role="status">Loading tool…</div>}>
        {Page ? <Page state={rewardState} onStateChange={setRewardState} /> : <FeatPageLoader section={section} />}
      </Suspense></PageErrorBoundary>
    </main>
  </div>;
}
