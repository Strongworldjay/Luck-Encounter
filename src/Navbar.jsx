import React, { useMemo, useState } from 'react';
import './Navbar.css';

/**
 * Props:
 * - onNavClick(sectionId: string)
 * - currentSection: string
 * - compact?: boolean              // pass isMobile from App (true on phones)
 * - mobileHiddenItems?: string[]   // e.g. ['CharacterSheets','SkillPointUsage']
 * - moveHiddenToMore?: boolean     // put hidden items under "More" on mobile
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

  const items = useMemo(() => ([
    { id: 'DungeonCompletion', label: 'Dungeon Completion' },
    { id: 'Chests',            label: 'Chests' },
    { id: 'SkillPointUsage',   label: 'Skill Point Usage' },
    { id: 'MagicBingo',        label: 'Magic' },
    { id: 'RandomWheel',       label: 'RandomWheel' },
    { id: 'CharacterSheets',   label: 'Character Sheets' },
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
        </ul>
      </div>
    </nav>
  );
}
