// src/Navbar.jsx
import React from 'react';
import './Navbar.css'; // You will need to create this CSS file for styling

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => onNavClick('DungeonCompletion')}>
          Dungeon Completion
        </li>
        <li className="nav-item" onClick={() => onNavClick('WeaponArts')}>
          Weapon Arts
        </li>
        <li className="nav-item" onClick={() => onNavClick('MagicArts')}>
          Magic Arts
        </li>
        <li className="nav-item" onClick={() => onNavClick('PassiveArts')}>
          Passive Arts
        </li>
        <li className="nav-item" onClick={() => onNavClick('BoostArts')}>
          Boost Arts
        </li>
        <li className="nav-item" onClick={() => onNavClick('SkillPointUsage')}>
          Skill Point Usage
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
