// src/SkillPointUsage.jsx
import React from 'react';
import './TableStyles.css';

const SkillPointUsage = () => {
  return (
    <div className="table-container">
      <td>Skill Point Usage</td>
      <table className="skill-points-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Skill Points Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Increase D Tier Art Level</td>
            <td>3 Skill Points</td>
          </tr>
          <tr>
            <td>Evolve D Tier Art (Max Level)</td>
            <td>10 Skill Points</td>
          </tr>
          <tr>
            <td>Increase Ability Score (12 to 13)</td>
            <td>3 Skill Points</td>
          </tr>
          <tr>
            <td>Increase Ability Score (13 to 14)</td>
            <td>5 Skill Points</td>
          </tr>
          <tr>
            <td>Increase Ability Score (17 to 18)</td>
            <td>10 Skill Points</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillPointUsage;
