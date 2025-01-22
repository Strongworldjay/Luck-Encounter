import React from 'react';
import './NewCharacterSheets.css';

const CharacterSheet = ({ sheetNumber }) => {
  return (
    <div className="character-sheet">
      <h1>Character Sheet {sheetNumber}</h1>
      <div className="sheet-container">
        {/* Basic Information */}
        <section className="basic-info">
          <div className="info-row">
            <div className="info-item">
              <label>Character Name</label>
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="info-item">
              <label>Class & Level</label>
              <input type="text" placeholder="Class & Level" />
            </div>
            <div className="info-item">
              <label>Background</label>
              <input type="text" placeholder="Background" />
            </div>
            <div className="info-item">
              <label>Player Name</label>
              <input type="text" placeholder="Player Name" />
            </div>
            <div className="info-item">
              <label>Race</label>
              <input type="text" placeholder="Race" />
            </div>
            <div className="info-item">
              <label>Alignment</label>
              <input type="text" placeholder="Alignment" />
            </div>
          </div>
        </section>

        {/* Ability Scores */}
        <section className="ability-scores">
          <h2>Ability Scores</h2>
          <div className="abilities">
            {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map((ability) => (
              <div key={ability} className="ability">
                <label>{ability}</label>
                <input type="number" placeholder="Score" />
                <input type="number" placeholder="Modifier" readOnly />
              </div>
            ))}
          </div>
        </section>

        {/* Saving Throws */}
        <section className="saving-throws">
          <h2>Saving Throws</h2>
          <div className="saves">
            {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map((save) => (
              <div key={save} className="save">
                <input type="checkbox" />
                <label>{save}</label>
                <input type="number" placeholder="Bonus" />
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {[
              'Acrobatics (Dex)',
              'Animal Handling (Wis)',
              'Arcana (Int)',
              'Athletics (Str)',
              'Deception (Cha)',
              'History (Int)',
              'Insight (Wis)',
              'Intimidation (Cha)',
              'Investigation (Int)',
              'Medicine (Wis)',
              'Nature (Int)',
              'Perception (Wis)',
              'Performance (Cha)',
              'Persuasion (Cha)',
              'Religion (Int)',
              'Sleight of Hand (Dex)',
              'Stealth (Dex)',
              'Survival (Wis)',
            ].map((skill) => (
              <div key={skill} className="skill">
                <input type="checkbox" />
                <label>{skill}</label>
                <input type="number" placeholder="Bonus" />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section className="additional-info">
          <h2>Additional Information</h2>
          <textarea placeholder="Features, traits, and other notes"></textarea>
        </section>
      </div>
    </div>
  );
};

const CharacterSheets = () => {
  return (
    <div className="character-sheets-container">
      {Array.from({ length: 12 }, (_, i) => (
        <CharacterSheet key={i + 1} sheetNumber={i + 1} />
      ))}
    </div>
  );
};

export default CharacterSheets;
