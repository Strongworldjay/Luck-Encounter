// src/MagicArts.jsx
import React from 'react';
import './TableStyles.css';

const MagicArts = () => {
  return (
    <div className="table-container">
      <h2>Magic Arts</h2>
      <table className="arts-table">
        <thead>
          <tr>
            <th>Art Name</th>
            <th>Art Specialty</th>
            <th>Level 1-10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cleave D Tier</td>
            <td>Heavy Weapon Users</td>
            <td>
              <strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.<br />
              <strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.<br />
              <strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.<br />
              {/* Repeat for levels 4-10 as needed */}
            </td>
          </tr>
          {/* Add more arts as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default MagicArts;
