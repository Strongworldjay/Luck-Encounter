import React from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick, currentSection }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li
          className={`nav-item ${currentSection === 'DungeonCompletion' ? 'active' : ''}`}
          onClick={() => onNavClick('DungeonCompletion')}
        >
          Dungeon Completion
        </li>
        <li
          className={`nav-item ${currentSection === 'WeaponArts' ? 'active' : ''}`}
          onClick={() => onNavClick('WeaponArts')}
        >
          Weapon Arts
        </li>
        <li
          className={`nav-item ${currentSection === 'MagicArts' ? 'active' : ''}`}
          onClick={() => onNavClick('MagicArts')}
        >
          Magic Arts
        </li>
        <li
          className={`nav-item ${currentSection === 'PassiveArts' ? 'active' : ''}`}
          onClick={() => onNavClick('PassiveArts')}
        >
          Passive Arts
        </li>
        <li
          className={`nav-item ${currentSection === 'BoostArts' ? 'active' : ''}`}
          onClick={() => onNavClick('BoostArts')}
        >
          Boost Arts
        </li>
        <li
          className={`nav-item ${currentSection === 'SkillPointUsage' ? 'active' : ''}`}
          onClick={() => onNavClick('SkillPointUsage')}
        >
          Skill Point Usage
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
