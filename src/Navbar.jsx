import React, { useMemo, useState } from 'react';
import './Navbar.css';

/**
 * Navbar component with dropdowns:
 * - Player Tools
 * - DM Tools
 * - Character Mapping
 */
export default function Navbar({
  onNavClick,
  currentSection,
  compact = false,
  mobileHiddenItems = [],
  moveHiddenToMore = false,
}) {
  const [open, setOpen] = useState(false);       // Mobile menu toggle
  const [playerOpen, setPlayerOpen] = useState(false);
  const [dmOpen, setDmOpen] = useState(false);
  const [mappingOpen, setMappingOpen] = useState(false);

  // Define grouped items
  const playerItems = useMemo(() => ([
    { id: 'DungeonCompletion', label: 'Dungeon Completion' },
    { id: 'SPPlanner',         label: 'SP Planner' },
    { id: 'Spells',            label: 'Spells' },
    { id: 'BountyBoard',       label: 'Insamont Bounty Board' },
  ]), []);

  const dmItems = useMemo(() => ([
    { id: 'JumpCalc',      label: 'Jump Calc' },
    { id: 'ShopInventory', label: 'Shop' },
    { id: 'Chests',        label: 'Chests' },
  ]), []);

  // UPDATED: Origin Feats + General Feats, and Mastery Feats (renamed from Midan Exclusive Feats)
  const mappingItems = useMemo(() => ([
    { id: 'OriginFeats',   label: 'Origin Feats' },
    { id: 'GeneralFeats',  label: 'General Feats' },
    { id: 'EpicBoons',         label: 'Epic Boons' },
    { id: 'MasteryFeats',  label: 'Mastery Feats' },
    { id: 'RacialFeats',   label: 'Racial Feats' },
    { id: 'MavenArms',     label: 'Maven Arms' },
  ]), []);

  const go = (id) => {
    onNavClick(id);
    setOpen(false);
    setPlayerOpen(false);
    setDmOpen(false);
    setMappingOpen(false);
  };

  const parentActive = (items) => items.some(i => i.id === currentSection);

  const togglePlayer = () => {
    setPlayerOpen(v => !v);
    setDmOpen(false);
    setMappingOpen(false);
  };

  const toggleDm = () => {
    setDmOpen(v => !v);
    setPlayerOpen(false);
    setMappingOpen(false);
  };

  const toggleMapping = () => {
    setMappingOpen(v => !v);
    setPlayerOpen(false);
    setDmOpen(false);
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
          {/* PLAYER TOOLS */}
          <li className={`nav-item dropdown ${playerOpen ? 'open' : ''} ${parentActive(playerItems) ? 'active' : ''}`}>
            <button
              type="button"
              className="dropdown-trigger"
              aria-expanded={playerOpen}
              aria-controls="player-menu"
              onClick={togglePlayer}
            >
              Player Tools ▾
            </button>
            <ul id="player-menu" className={`dropdown-menu ${playerOpen ? 'open' : ''}`}>
              {playerItems.map(({ id, label }) => (
                <li
                  key={id}
                  className={`dropdown-item ${currentSection === id ? 'active' : ''}`}
                  onClick={() => go(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </li>

          {/* DM TOOLS */}
          <li className={`nav-item dropdown ${dmOpen ? 'open' : ''} ${parentActive(dmItems) ? 'active' : ''}`}>
            <button
              type="button"
              className="dropdown-trigger"
              aria-expanded={dmOpen}
              aria-controls="dm-menu"
              onClick={toggleDm}
            >
              DM Tools ▾
            </button>
            <ul id="dm-menu" className={`dropdown-menu ${dmOpen ? 'open' : ''}`}>
              {dmItems.map(({ id, label }) => (
                <li
                  key={id}
                  className={`dropdown-item ${currentSection === id ? 'active' : ''}`}
                  onClick={() => go(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </li>

          {/* CHARACTER MAPPING */}
          <li className={`nav-item dropdown ${mappingOpen ? 'open' : ''} ${parentActive(mappingItems) ? 'active' : ''}`}>
            <button
              type="button"
              className="dropdown-trigger"
              aria-expanded={mappingOpen}
              aria-controls="mapping-menu"
              onClick={toggleMapping}
            >
              Character Mapping ▾
            </button>
            <ul id="mapping-menu" className={`dropdown-menu ${mappingOpen ? 'open' : ''}`}>
              {mappingItems.map(({ id, label }) => (
                <li
                  key={id}
                  className={`dropdown-item ${currentSection === id ? 'active' : ''}`}
                  onClick={() => go(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
