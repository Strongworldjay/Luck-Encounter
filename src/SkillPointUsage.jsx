import React from 'react';
import './SkillPointUsage.css';

const SkillPointUsage = () => {
  return (
    <div className="skill-point-container">
      <h2 className="header-title">Skill Point Usage</h2>
      <div className="table-section">
        {/* Arts Tier Table */}
        <div className="table-wrapper">
          <h3 className="table-title">Arts Tier Upgrades</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Skill Points Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Increase F Tier Art Level</td>
                <td>2 Skill Points</td>
              </tr>
              <tr>
                <td>Evolve F Tier Art (Max Level)</td>
                <td>3 Skill Points</td>
              </tr>
              <tr>
                <td>Increase D Tier Art Level</td>
                <td>3 Skill Points</td>
              </tr>
              <tr>
                <td>Evolve D Tier Art (Max Level)</td>
                <td>5 Skill Points</td>
              </tr>
              <tr>
                <td>Increase C Tier Art Level</td>
                <td>4 Skill Points</td>
              </tr>
              <tr>
                <td>Evolve C Tier Art (Max Level)</td>
                <td>7 Skill Points</td>
              </tr>
              <tr>
                <td>Increase B Tier Art Level</td>
                <td>5 Skill Points</td>
              </tr>
              <tr>
                <td>Evolve B Tier Art (Max Level)</td>
                <td>10 Skill Points</td>
              </tr>
              <tr>
                <td>Increase A Tier Art Level</td>
                <td>6 Skill Points</td>
              </tr>
              <tr>
                <td>Evolve A Tier Art (Max Level)</td>
                <td>15 Skill Points</td>
              </tr>
              <tr>
                <td>Increase S Tier Art Level</td>
                <td>15 Skill Points</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ability Score Table */}
        <div className="table-wrapper">
          <h3 className="table-title">Ability Score Upgrades</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Skill Points Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Increase Ability Score (6 to 11)</td>
                <td>5 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (11 to 12)</td>
                <td>7 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (12 to 13)</td>
                <td>10 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (13 to 14)</td>
                <td>12 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (14 to 15)</td>
                <td>15 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (15 to 16)</td>
                <td>20 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (16 to 17)</td>
                <td>27 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (17 to 18)</td>
                <td>35 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (18 to 19)</td>
                <td>45 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (19 to 20)</td>
                <td>50 Skill Points</td>
              </tr>
              <tr>
                <td>Increase Ability Score (20+)</td>
                <td>75 Skill Points</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Skill Upgrades Table */}
        <div className="table-wrapper">
          <h3 className="table-title">Skill Upgrades</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Skill Points Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Upgrade Skill (+0 - +5)</td>
                <td>2 Skill Points</td>
              </tr>
              <tr>
                <td>Upgrade Skill (+5 - +10)</td>
                <td>3 Skill Points</td>
              </tr>
              <tr>
                <td>Upgrade Skill (+10 - +15)</td>
                <td>5 Skill Points</td>
              </tr>
              <tr>
                <td>Upgrade Skill (+15 - +20)</td>
                <td>10 Skill Points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillPointUsage;
