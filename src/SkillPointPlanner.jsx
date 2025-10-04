import React, { useMemo, useState } from "react";
import "./SkillPointPlanner.css";

/** ===============================
 *  Data (from your rules)
 *  =============================== */
const TIER_ORDER = ["F", "D", "C", "B", "A", "S"];
const WORLD_ART_RULES = {
  F: { levelUp: 2, evolve: 3 },
  D: { levelUp: 3, evolve: 5 },
  C: { levelUp: 4, evolve: 7 },
  B: { levelUp: 5, evolve: 10 },
  A: { levelUp: 6, evolve: 15 },
  S: { levelUp: 15, evolve: null }, // cannot evolve normally
};

function tierIndex(t) { return TIER_ORDER.indexOf(t); }

/** Ability score per-step cost */
function abilityPointCost(from) {
  if (from >= 20) return 75;
  if (from === 19) return 50;
  if (from === 18) return 45;
  if (from === 17) return 35;
  if (from === 16) return 27;
  if (from === 15) return 20;
  if (from === 14) return 15;
  if (from === 13) return 12;
  if (from === 12) return 10;
  if (from === 11) return 7;
  if (from >= 6 && from <= 10) return 5;
  // If someone enters <6 we still charge 5 up to 11
  return 5;
}

/** Skill value per-step cost */
function skillPointCost(current) {
  if (current <= 5) return 2;
  if (current <= 10) return 3;
  if (current <= 15) return 5;
  if (current <= 20) return 10;
  return 20; // 21+
}

/** ===============================
 *  Calculators
 *  =============================== */

/** World Art: each tier has levels 1 → 2 → 3, then evolve to next tier level 1 */
function calcWorldArtCost(fromTier, fromLevel, toTier, toLevel) {
  // Normalize/guard
  const fi = tierIndex(fromTier);
  const ti = tierIndex(toTier);
  if (fi === -1 || ti === -1) return { total: 0, steps: [], warning: "Invalid tier." };

  // If target is before source, we can’t go backwards.
  if (ti < fi || (ti === fi && toLevel < fromLevel)) {
    return { total: 0, steps: [], warning: "Target must be ahead of current (no downgrades)." };
  }

  // Helper to push step lines
  const steps = [];
  let total = 0;

  // Walk tier by tier
  let curTier = fromTier;
  let curLevel = fromLevel;

  while (true) {
    const rules = WORLD_ART_RULES[curTier];
    const atTargetTier = curTier === toTier;

    // Level up inside this tier until we hit tier cap (3) or target level (if same tier)
    const targetLevelThisTier = atTargetTier ? toLevel : 3;
    while (curLevel < targetLevelThisTier) {
      total += rules.levelUp;
      steps.push(`${curTier} ${curLevel} → ${curTier} ${curLevel + 1}: ${rules.levelUp} SP`);
      curLevel += 1;
    }

    if (atTargetTier) break;

    // Evolve to next tier (if allowed)
    if (rules.evolve == null) {
      steps.push(`Cannot evolve from ${curTier} tier normally.`);
      break;
    }
    const nextTier = TIER_ORDER[tierIndex(curTier) + 1];
    total += rules.evolve;
    steps.push(`${curTier} 3 → ${nextTier} 1 (Evolve): ${rules.evolve} SP`);
    curTier = nextTier;
    curLevel = 1;

    // Safety: if somehow we walked past the last tier
    if (curTier === undefined) break;
  }

  return { total, steps, warning: null };
}

/** Ability scores: sum per-step cost for each +1 */
function calcAbilityScoreCost(fromScore, toScore) {
  if (toScore <= fromScore) return { total: 0, steps: [], warning: "Target must be greater than current." };
  const steps = [];
  let total = 0;
  for (let s = fromScore; s < toScore; s++) {
    const c = abilityPointCost(s);
    steps.push(`${s} → ${s + 1}: ${c} SP`);
    total += c;
  }
  return { total, steps, warning: null };
}

/** Skills: sum per-step cost for each +1 */
function calcSkillValueCost(fromValue, toValue) {
  if (toValue <= fromValue) return { total: 0, steps: [], warning: "Target must be greater than current." };
  const steps = [];
  let total = 0;
  for (let v = fromValue; v < toValue; v++) {
    const c = skillPointCost(v);
    steps.push(`${v} → ${v + 1}: ${c} SP`);
    total += c;
  }
  return { total, steps, warning: null };
}

/** ===============================
 *  UI
 *  =============================== */

export default function SkillPointPlanner() {
  const [tab, setTab] = useState("worldart");

  // World Art state
  const [waFromTier, setWaFromTier] = useState("B");
  const [waFromLvl, setWaFromLvl] = useState(1);
  const [waToTier, setWaToTier] = useState("A");
  const [waToLvl, setWaToLvl] = useState(1);

  // Ability score state
  const [abFrom, setAbFrom] = useState(12);
  const [abTo, setAbTo] = useState(16);

  // Skill state
  const [skFrom, setSkFrom] = useState(10);
  const [skTo, setSkTo] = useState(18);

  const worldArtResult = useMemo(
    () => calcWorldArtCost(waFromTier, waFromLvl, waToTier, waToLvl),
    [waFromTier, waFromLvl, waToTier, waToLvl]
  );
  const abilityResult = useMemo(
    () => calcAbilityScoreCost(Number(abFrom), Number(abTo)),
    [abFrom, abTo]
  );
  const skillResult = useMemo(
    () => calcSkillValueCost(Number(skFrom), Number(skTo)),
    [skFrom, skTo]
  );

  return (
    <div className="sp-planner">
      <div className="sp-tabs">
        <button
          className={`sp-tab ${tab === "worldart" ? "active" : ""}`}
          onClick={() => setTab("worldart")}
        >
          World Art
        </button>
        <button
          className={`sp-tab ${tab === "ability" ? "active" : ""}`}
          onClick={() => setTab("ability")}
        >
          Ability Score
        </button>
        <button
          className={`sp-tab ${tab === "skill" ? "active" : ""}`}
          onClick={() => setTab("skill")}
        >
          Skill Value
        </button>
      </div>

      {/* WORLD ART */}
      {tab === "worldart" && (
        <div className="sp-card">
          <h2>World Art Planner</h2>
          <div className="sp-grid">
            <div className="sp-field">
              <label>Current Tier</label>
              <select value={waFromTier} onChange={(e) => setWaFromTier(e.target.value)}>
                {TIER_ORDER.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="sp-field">
              <label>Current Level</label>
              <select value={waFromLvl} onChange={(e) => setWaFromLvl(Number(e.target.value))}>
                {[1,2,3].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="sp-field">
              <label>Target Tier</label>
              <select value={waToTier} onChange={(e) => setWaToTier(e.target.value)}>
                {TIER_ORDER.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="sp-field">
              <label>Target Level</label>
              <select value={waToLvl} onChange={(e) => setWaToLvl(Number(e.target.value))}>
                {[1,2,3].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          {worldArtResult.warning && <div className="sp-warning">{worldArtResult.warning}</div>}

          <div className="sp-result">
            <div className="sp-total">Total SP Required: <strong>{worldArtResult.total}</strong></div>
            <ul className="sp-steps">
              {worldArtResult.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <details className="sp-notes">
            <summary>Tier Costs</summary>
            <ul>
              {TIER_ORDER.map(t => (
                <li key={t}>
                  <strong>{t}</strong>: Level Up {WORLD_ART_RULES[t].levelUp} SP
                  {WORLD_ART_RULES[t].evolve != null ? `, Evolve ${WORLD_ART_RULES[t].evolve} SP` : ", Evolve: N/A"}
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}

      {/* ABILITY SCORE */}
      {tab === "ability" && (
        <div className="sp-card">
          <h2>Ability Score Planner</h2>
          <div className="sp-grid two">
            <div className="sp-field">
              <label>Current Score</label>
              <input
                type="number"
                value={abFrom}
                onChange={(e) => setAbFrom(Number(e.target.value))}
              />
            </div>
            <div className="sp-field">
              <label>Target Score</label>
              <input
                type="number"
                value={abTo}
                onChange={(e) => setAbTo(Number(e.target.value))}
              />
            </div>
          </div>

          {abilityResult.warning && <div className="sp-warning">{abilityResult.warning}</div>}

          <div className="sp-result">
            <div className="sp-total">Total SP Required: <strong>{abilityResult.total}</strong></div>
            <ul className="sp-steps">
              {abilityResult.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <details className="sp-notes">
            <summary>Cost Table</summary>
            <ul>
              <li>6–11: 5 SP each (per +1)</li>
              <li>11→12: 7, 12→13: 10, 13→14: 12, 14→15: 15, 15→16: 20</li>
              <li>16→17: 27, 17→18: 35, 18→19: 45, 19→20: 50</li>
              <li>20+: 75 SP each</li>
            </ul>
          </details>
        </div>
      )}

      {/* SKILL VALUE */}
      {tab === "skill" && (
        <div className="sp-card">
          <h2>Skill Value Planner</h2>
          <div className="sp-grid two">
            <div className="sp-field">
              <label>Current Value</label>
              <input
                type="number"
                value={skFrom}
                onChange={(e) => setSkFrom(Number(e.target.value))}
              />
            </div>
            <div className="sp-field">
              <label>Target Value</label>
              <input
                type="number"
                value={skTo}
                onChange={(e) => setSkTo(Number(e.target.value))}
              />
            </div>
          </div>

          {skillResult.warning && <div className="sp-warning">{skillResult.warning}</div>}

          <div className="sp-result">
            <div className="sp-total">Total SP Required: <strong>{skillResult.total}</strong></div>
            <ul className="sp-steps">
              {skillResult.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <details className="sp-notes">
            <summary>Cost Table</summary>
            <ul>
              <li>0–5: 2 SP each</li>
              <li>6–10: 3 SP each</li>
              <li>11–15: 5 SP each</li>
              <li>16–20: 10 SP each</li>
              <li>21+: 20 SP each</li>
            </ul>
          </details>
        </div>
      )}
    </div>
  );
}
