import React, { useMemo, useState } from 'react';
import './Navbar.css';

/**
 * Navbar component with two dropdowns: Player Tools and DM Tools.
 * - Player Tools: Dungeon Completion, SP Planner, Spells
 * - DM Tools: Jump Calc, Wheel, Magic, Shop, Chests
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

  // Define grouped items
  const playerItems = useMemo(() => ([
    { id: 'DungeonCompletion', label: 'Dungeon Completion' },
    { id: 'SPPlanner',         label: 'SP Planner' },
    { id: 'Spells',            label: 'Spells' },
  ]), []);

  const dmItems = useMemo(() => ([
    { id: 'JumpCalc',      label: 'Jump Calc' },
    { id: 'RandomWheel',   label: 'Wheel' },
    { id: 'MagicBingo',    label: 'Magic' },
    { id: 'ShopInventory', label: 'Shop' },
    { id: 'Chests',        label: 'Chests' },
  ]), []);

  const go = (id) => {
    onNavClick(id);
    setOpen(false);
    setPlayerOpen(false);
    setDmOpen(false);
  };

  const parentActive = (items) => items.some(i => i.id === currentSection);

  const togglePlayer = () => {
    setPlayerOpen(v => !v);
    setDmOpen(false);
  };
  const toggleDm = () => {
    setDmOpen(v => !v);
    setPlayerOpen(false);
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
        </ul>
      </div>
    </nav>
  );
}
