import { useEffect, useRef, useState } from 'react';
import { NAV_GROUPS } from '../../config/navigation.js';
import './Navbar.css';

const THEME_OPTIONS = [
  { id: 'system', label: 'Auto', compact: 'A', title: 'Follow device theme' },
  { id: 'light', label: 'Day', compact: '☀', title: 'Use daytime theme' },
  { id: 'dark', label: 'Night', compact: '☾', title: 'Use nighttime theme' },
];

export default function Navbar({
  currentSection,
  onNavigate,
  themePreference,
  onThemePreferenceChange,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const close = ({ target }) => {
      if (!navRef.current?.contains(target)) setOpenGroup(null);
    };
    const onKey = ({ key }) => {
      if (key === 'Escape') {
        setMobileOpen(false);
        setOpenGroup(null);
      }
    };
    document.addEventListener('pointerdown', close);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', close);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const navigate = (section) => {
    onNavigate(section);
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <nav className="navbar" ref={navRef} aria-label="Primary navigation">
      <div className="navbar-inner">
        <button className="navbar-brand" type="button" onClick={() => navigate('DungeonCompletion')}>
          Dungeon Rewards
        </button>

        <div className="theme-switch" role="group" aria-label="Color theme">
          {THEME_OPTIONS.map(({ id, label, compact, title }) => (
            <button
              className={`theme-switch__button ${themePreference === id ? 'active' : ''}`}
              type="button"
              key={id}
              title={title}
              aria-label={title}
              aria-pressed={themePreference === id}
              onClick={() => onThemePreferenceChange(id)}
            >
              <span className="theme-switch__compact" aria-hidden>{compact}</span>
              <span className="theme-switch__label">{label}</span>
            </button>
          ))}
        </div>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-list ${mobileOpen ? 'open' : ''}`}>
          {NAV_GROUPS.map((group) => {
            const isOpen = openGroup === group.id;
            const isActive = group.items.some(({ id }) => id === currentSection);
            return (
              <li className={`nav-item dropdown ${isActive ? 'active' : ''}`} key={group.id}>
                <button
                  type="button"
                  className="dropdown-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`${group.id}-menu`}
                  onClick={() => setOpenGroup((current) => current === group.id ? null : group.id)}
                >
                  {group.label} <span aria-hidden>▾</span>
                </button>
                <ul id={`${group.id}-menu`} className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                  {group.items.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        type="button"
                        className={`dropdown-item ${currentSection === id ? 'active' : ''}`}
                        onClick={() => navigate(id)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
