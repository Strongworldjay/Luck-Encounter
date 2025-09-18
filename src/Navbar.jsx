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
          className={`nav-item ${currentSection === 'Chests' ? 'active' : ''}`}
          onClick={() => onNavClick('Chests')}
        >
          Chests
        </li>
        <li
          className={`nav-item ${currentSection === 'SkillPointUsage' ? 'active' : ''}`}
          onClick={() => onNavClick('SkillPointUsage')}
        >
          Skill Point Usage
        </li>
        <li
          className={`nav-item ${currentSection === 'MagicBingo' ? 'active' : ''}`}
          onClick={() => onNavClick('MagicBingo')}
        >
          Magic
        </li>
         <li
          className={`nav-item ${currentSection === 'RandomWheel' ? 'active' : ''}`}
          onClick={() => onNavClick('RandomWheel')}
        >
          RandomWheel
        </li>
        <li
          className={`nav-item ${currentSection === 'CharacterSheets' ? 'active' : ''}`}
          onClick={() => onNavClick('CharacterSheets')}
        >
          Character Sheets
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
