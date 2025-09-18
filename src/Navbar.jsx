import React, { useMemo, useState } from 'react';
import './Navbar.css';

/**
 * Props:
 * - onNavClick(sectionId: string)
 * - currentSection: string
 * - compact?: boolean            // pass isMobile from App (true on phones)
 * - mobileHiddenItems?: string[] // e.g. ['CharacterSheets','SkillPointUsage']
 * - moveHiddenToMore?: boolean   // if true, shows mobileHiddenItems in a "More" menu instead of fully hiding
 */
const Navbar = ({
  onNavClick,
  currentSection,
  compact = false,
  mobileHiddenItems = [],
  moveHiddenToMore = false,
}) => {
  const [open, setOpen] = useState(false);        // hamburger open/close
  const [moreOpen, setMoreOpen] = useState(false);// "More" submenu

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
    if (moveHiddenToMore) {
      // show all except hidden; hidden go to "More"
      return items.filter(i => !mobileHiddenItems.includes(i.id));
    }
    // fully hide the specified items on mobile
    return items.filter(i => !mobileHiddenItems.includes(i.id));
  }, [items, compact, mobileHiddenItems, moveHiddenToMore]);

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
         
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`navbar-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
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

          {/* Optional "More" menu on mobile */}
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
};

export default Navbar;
