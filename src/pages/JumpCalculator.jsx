import React, { useMemo, useState } from "react";
import "./jump.css";

// Presets
const PRESETS = {
  Braknir: { str: 20, feet: 5, inches: 9 },
  Blu:     { str: 20, feet: 5, inches: 10 },
  Tom:     { str: 11, feet: 5, inches: 5 },
  Lucky:   { str: 10, feet: 4, inches: 7 },
};

const clampInt = (v, min, max) => {
  const n = Number.parseInt(v ?? "", 10);
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
};

const toFeetFloat = (feet, inches) => (feet || 0) + (inches || 0) / 12;

const feetToFtIn = (feetFloat) => {
  const totalInches = Math.floor(feetFloat * 12);
  return { ft: Math.floor(totalInches / 12), in: totalInches % 12 };
};

export default function JumpCalculator() {
  const [str, setStr] = useState(20);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(10);
  const [runningStart, setRunningStart] = useState(true);
  const [mult, setMult] = useState(1); // 1 | 2 | 3

  const strMod = useMemo(() => Math.floor((str - 10) / 2), [str]);

  // Base distances (running start uses full values, standing halves)
  const baseLong = useMemo(() => {
    const withRun = str; // feet
    const val = runningStart ? withRun : Math.floor(withRun / 2);
    return Math.max(0, val);
  }, [str, runningStart]);

  const baseHigh = useMemo(() => {
    const withRun = Math.max(0, strMod + 3); // feet
    const val = runningStart ? withRun : Math.floor(withRun / 2);
    return Math.max(0, val);
  }, [strMod, runningStart]);

  // Multiplied (Long / High)
  const longJump = baseLong * mult;
  const highJump = baseHigh * mult;

  // Reach height uses unmultiplied high + height + 3 ft
  const reachFeet = useMemo(() => baseHigh + toFeetFloat(feet, inches) + 3, [baseHigh, feet, inches]);
  const reachFtIn = feetToFtIn(reachFeet);

  const setPreset = (name) => {
    const p = PRESETS[name];
    if (!p) return;
    setStr(p.str);
    setFeet(p.feet);
    setInches(p.inches);
  };

  return (
    <div className="jump-page">
      <div className="jump-card">
        <header className="jump-header">
          <h2>Jump Calculator</h2>
          <div className="preset-row" role="group" aria-label="Presets">
            {Object.keys(PRESETS).map((k) => (
              <button
                key={k}
                className="btn btn-chip"
                onClick={() => setPreset(k)}
                title={`Set ${k}'s stats`}
              >
                {k}
              </button>
            ))}
          </div>
        </header>

        <div className="jump-grid">
          {/* Strength */}
          <div className="field">
            <label>Strength Score</label>
            <input
              className="jump-input"
              type="number"
              inputMode="numeric"
              min={1}
              max={30}
              value={str}
              onChange={(e) => setStr(clampInt(e.target.value, 1, 30))}
            />
            <div className="hint">
              Modifier: <strong>{strMod >= 0 ? `+${strMod}` : strMod}</strong>
            </div>
          </div>

          {/* Height */}
          <div className="field">
            <label>Height</label>
            <div className="height-row">
              <input
                className="jump-input jump-input--short"
                type="number"
                inputMode="numeric"
                min={0}
                max={20}                                  /* allow up to 20 ft */
                value={feet}
                onChange={(e) => setFeet(clampInt(e.target.value, 0, 20))}
                aria-label="Height feet"
              />
              <span className="unit">ft</span>
              <input
                className="jump-input jump-input--short"
                type="number"
                inputMode="numeric"
                min={0}
                max={11}
                value={inches}
                onChange={(e) => setInches(clampInt(e.target.value, 0, 11))}
                aria-label="Height inches"
              />
              <span className="unit">in</span>
            </div>
          </div>

          {/* Running start toggle */}
          <div className="field">
            <label>Running Start (10 ft)</label>
            <div className="toggle">
              <button
                className={`btn ${runningStart ? "primary" : ""}`}
                onClick={() => setRunningStart(true)}
              >
                Yes
              </button>
              <button
                className={`btn ${!runningStart ? "primary" : ""}`}
                onClick={() => setRunningStart(false)}
              >
                No
              </button>
            </div>
            {!runningStart && (
              <div className="hint">Standing jump: distances are halved.</div>
            )}
          </div>

          {/* Multiplier */}
          <div className="field">
            <label>Show Multiplier</label>
            <div className="toggle">
              {[1, 2, 3].map((m) => (
                <button
                  key={m}
                  className={`btn ${mult === m ? "primary" : ""}`}
                  onClick={() => setMult(m)}
                >
                  ×{m}
                </button>
              ))}
            </div>
            <div className="hint">Multiplies Long &amp; High Jump values only.</div>
          </div>
        </div>

        <hr className="rule" />

        <div className="results">
          <div className="result">
            <div className="cap">Long Jump</div>
            <div className="val">
              <strong>{longJump}</strong> ft
              {mult !== 1 && <span className="sub"> (base {baseLong} ft ×{mult})</span>}
            </div>
          </div>

          <div className="result">
            <div className="cap">High Jump</div>
            <div className="val">
              <strong>{highJump}</strong> ft
              {mult !== 1 && <span className="sub"> (base {baseHigh} ft ×{mult})</span>}
            </div>
          </div>

          <div className="result">
            <div className="cap">Reach Height</div>
            <div className="val">
              <strong>{reachFtIn.ft} ft {reachFtIn.in} in</strong>
              <span className="sub"> (high jump + height + 3 ft)</span>
            </div>
          </div>
        </div>

        <footer className="footnote">
          Uses 5e-style basics: running start of 10 ft; standing jumps are halved.
        </footer>
      </div>
    </div>
  );
}
