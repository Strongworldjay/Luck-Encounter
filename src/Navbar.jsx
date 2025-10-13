import React, { useEffect, useMemo, useState } from 'react';
import './Navbar.css';

/**
 * Props:
 * - onNavClick(sectionId: string)
 * - currentSection: string
 * - compact?: boolean
 * - mobileHiddenItems?: string[]
 * - moveHiddenToMore?: boolean
 */
export default function Navbar({
  onNavClick,
  currentSection,
  compact = false,
  mobileHiddenItems = [],
  moveHiddenToMore = false,
}) {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // --- THEME TOGGLE STATE ---
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  // Apply/remove class on <html> and persist
  useEffect(() => {
    document.documentElement.classList.toggle('theme-dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Keep in sync with system changes (only if user hasn't chosen explicitly)
  useEffect(() => {
    if (localStorage.getItem('theme')) return; // user choice wins
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const handler = (e) => setIsDark(e.matches);
    mq?.addEventListener('change', handler);
    return () => mq?.removeEventListener('change', handler);
  }, []);

  const items = useMemo(() => ([
    { id: 'DungeonCompletion', label: 'Dungeon Completion' },
    { id: 'Chests',            label: 'Chests' },
    { id: 'SPPlanner',         label: 'SP Planner' },  
    { id: 'MagicBingo',        label: 'Magic' },
    { id: 'RandomWheel',       label: 'RandomWheel' },
    { id: 'Spells',            label: 'Spells' },
    { id: 'JumpCalc', label: 'Jump Calc' },
  ]), []);

  const visibleItems = useMemo(() => {
    if (!compact) return items;
    return items.filter(i => !mobileHiddenItems.includes(i.id));
  }, [items, compact, mobileHiddenItems]);

  const moreItems = useMemo(() => {
    if (!compact || !moveHiddenToMore) return [];
    return items.filter(i => mobileHiddenItems.includes(i.id));
  }, [items, compact, mobileHiddenItems, moveHiddenToMore]);

  const go = (id) => {
    onNavClick(id);
    setOpen(false);
    setMoreOpen(false);
  };

  const toggleTheme = () => setIsDark(v => !v);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div
          className="navbar-brand"
          onClick={() => go('DungeonCompletion')}
          role="button"
          aria-label="Home"
        >
          Dungeon Rewards
        </div>

        {/* Theme toggle (desktop visible; also appears in mobile menu below) */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDark}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? (
            // Sun icon
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.04 2.46l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM17 13h3v-2h-3v2zm-5 8h2v-3h-2v3zM4.96 17.54l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM12 6a6 6 0 100 12A6 6 0 0012 6z"/>
            </svg>
          ) : (
            // Moon icon
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M21.75 15.5A9 9 0 1110.5 2.25a.75.75 0 01.82 1.09A7.5 7.5 0 0020.66 14.7a.75.75 0 011.09.8z"/>
            </svg>
          )}
        </button>

        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-list ${open ? 'open' : ''}`}>
          {visibleItems.map(({ id, label }) => (
            <li
              key={id}
              className={`nav-item ${currentSection === id ? 'active' : ''}`}
              onClick={() => go(id)}
            >
              {label}
            </li>
          ))}

          {compact && moveHiddenToMore && moreItems.length > 0 && (
            <li
              className={`nav-item more ${moreOpen ? 'open' : ''}`}
              onClick={() => setMoreOpen(v => !v)}
            >
              More ▾
              <ul className={`dropdown-menu ${moreOpen ? 'open' : ''}`}>
                {moreItems.map(({ id, label }) => (
                  <li
                    key={id}
                    className="dropdown-item"
                    onClick={(e) => { e.stopPropagation(); go(id); }}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </li>
          )}

          {/* Theme toggle also inside the mobile menu */}
          <li className="nav-item nav-item--theme" onClick={toggleTheme}>
            {isDark ? 'Light mode' : 'Dark mode'}
          </li>
        </ul>
      </div>
    </nav>
  );
}
