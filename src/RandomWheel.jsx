import React, { useEffect, useMemo, useRef, useState } from "react";
import "./RandomWheel.css";
import { getRandomItem } from "./ItemGenerator";

/**
 * RandomWheel (all-SVG, with inline luck controls)
 * ------------------------------------------------
 * - No gold outcomes
 * - Longer spin duration via SPIN_MS (kept in sync with CSS)
 */

const SPIN_MS = 4200; // ← change this for longer/shorter spins

const BASE_OPTIONS = [
  { key: "Common Item",   type: "item", rarity: "Common",    color: "#9e9e9e" },
  { key: "Uncommon Item", type: "item", rarity: "Uncommon",  color: "#4caf50" },
  { key: "Rare Item",     type: "item", rarity: "Rare",      color: "#2196f3" },
  { key: "Very Rare Item",type: "item", rarity: "Very Rare", color: "#9c27b0" },
  { key: "Legendary Item",type: "item", rarity: "Legendary", color: "#ff9800" },
  { key: "Unique Item",   type: "item", rarity: "Unique",    color: "#f44336" },
  { key: "Skill Points",  type: "sp",                        color: "#607d8b" },
  { key: "Curse",         type: "curse",                     color: "#000000" },
];

// Weights without gold options
const LOW_WEIGHTS = {
  "Common Item": 38,
  "Uncommon Item": 24,
  "Rare Item": 14,
  "Very Rare Item": 7,
  "Legendary Item": 2,
  "Unique Item": 1,
  "Skill Points": 4,
  "Curse": 10,
};

const HIGH_WEIGHTS = {
  "Common Item": 9,
  "Uncommon Item": 16,
  "Rare Item": 22,
  "Very Rare Item": 17,
  "Legendary Item": 12,
  "Unique Item": 7,
  "Skill Points": 17,
  "Curse": 4,
};

const CURSES = [
  "Hex of Misfortune (-10 Total Luck on next roll)",
  "Fragile Shell (-1 AC for next dungeon)",
  "Withering Touch (first heal next session is halved)",
  "Blunted Edge (first weapon attack next combat rolls with disadvantage)",
  "Reliquary Tax (-100 gp immediately; otherwise next 100 gp earned is lost)",
];

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function secureRandom() {
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    const a = new Uint32Array(1);
    window.crypto.getRandomValues(a);
    return a[0] / 2 ** 32;
  }
  return Math.random();
}
function weightedPick(weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = secureRandom() * total;
  for (let i = 0; i < weights.length; i++) {
    if (r < weights[i]) return i;
    r -= weights[i];
  }
  return weights.length - 1;
}
function interpolateWeights(lowMap, highMap, t) {
  const out = {};
  Object.keys(lowMap).forEach((k) => {
    const a = lowMap[k] ?? 0;
    const b = highMap[k] ?? 0;
    out[k] = a + (b - a) * t;
  });
  return out;
}

// SVG helpers (0° = 12 o’clock)
function degToRadFromTop(deg) { return (deg - 90) * (Math.PI / 180); }
function polar(cx, cy, r, degFromTop) {
  const th = degToRadFromTop(degFromTop);
  return { x: cx + r * Math.cos(th), y: cy + r * Math.sin(th) };
}
function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const sweep = 1, largeArc = ((endDeg - startDeg + 360) % 360) > 180 ? 1 : 0;
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} ${sweep} ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}
function sectorPath(cx, cy, r, startDeg, endDeg) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const sweep = 1, largeArc = ((endDeg - startDeg + 360) % 360) > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} ${sweep} ${e.x.toFixed(2)} ${e.y.toFixed(2)} Z`;
}

export default function RandomWheel({
  totalLuck = 0,          // from App (optional)
  itemTypes = [],
  onReward,
  inlineLuckControls = true,
}) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const rotorRef = useRef(null);

  // Inline luck controls
  const [useCustomLuck, setUseCustomLuck] = useState(true);
  const [charLuck, setCharLuck] = useState(0);
  const [dunLuck, setDunLuck] = useState(0);
  const [selectedDungeon, setSelectedDungeon] = useState(null);

  const effectiveLuck = useMemo(
    () => (inlineLuckControls && useCustomLuck ? charLuck + dunLuck : totalLuck),
    [inlineLuckControls, useCustomLuck, charLuck, dunLuck, totalLuck]
  );

  // Luck scale to [0..1]  (-50 worst .. +150 best)
  const t = useMemo(() => clamp((effectiveLuck + 50) / 200, 0, 1), [effectiveLuck]);

  const options = useMemo(() => {
    const weightsMap = interpolateWeights(LOW_WEIGHTS, HIGH_WEIGHTS, t);
    return BASE_OPTIONS.map((o) => ({ ...o, weight: weightsMap[o.key] ?? 0 }))
      .filter((o) => o.weight > 0);
  }, [t]);

  const segments = useMemo(() => {
    const total = options.reduce((s, o) => s + o.weight, 0);
    let acc = 0;
    return options.map((o) => {
      const frac = o.weight / (total || 1);
      const start = acc;
      const end = acc + frac;
      acc = end;
      return {
        ...o,
        start, end,
        startDeg: start * 360,
        endDeg: end * 360,
        midDeg: ((start + end) / 2) * 360,
        angleDeg: (end - start) * 360,
      };
    });
  }, [options]);

  useEffect(() => {
    const el = rotorRef.current;
    if (!el) return;
    const onEnd = () => setIsSpinning(false);
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, []);

  function spin() {
    if (isSpinning || segments.length === 0) return;
    setIsSpinning(true);
    setResult(null);

    const weights = segments.map((s) => s.weight);
    const winnerIndex = weightedPick(weights);
    const winner = segments[winnerIndex];

    const mid = winner.midDeg;
    const segSize = winner.angleDeg;
    const jitter = (secureRandom() - 0.5) * (segSize / 3);
    const spins = 6 + Math.floor(secureRandom() * 4); // 6–9 spins for drama
    const final = rotation + spins * 360 + (360 - (mid + jitter));

    setRotation(final);

    setTimeout(() => {
      const reward = resolveReward(winner);
      setResult(reward);
      if (typeof onReward === "function") onReward(reward);
    }, SPIN_MS + 200); // little buffer past CSS duration
  }

  function resolveReward(winner) {
    const base = { label: winner.key, type: winner.type };
    if (winner.type === "item") {
      const safe = itemTypes.length ? itemTypes : [
        "Helmet","HeavyArmor","Gauntlet","Boots","Necklace","Cloak",
        "Sword","Axe","Hammer","Dagger","Staff","Wand","Ring","Shield"
      ];
      const randType = safe[Math.floor(secureRandom() * safe.length)];
      const rarityArg = winner.rarity.replace(" ", "");
      const itemName = getRandomItem(randType, null, rarityArg);
      return { ...base, rarity: winner.rarity, itemType: randType, itemName,
        message: `Won ${winner.rarity} ${randType}: ${itemName}` };
    }
    if (winner.type === "sp") {
      const sp = 1 + Math.floor(clamp(Math.round(t * 3), 1, 3));
      return { ...base, amount: sp, message: `Won ${sp} Skill Point${sp > 1 ? "s" : ""}` };
    }
    if (winner.type === "curse") {
      const curse = CURSES[Math.floor(secureRandom() * CURSES.length)];
      return { ...base, effect: curse, message: `⚠️ Curse acquired: ${curse}` };
    }
    return { ...base, message: `Won: ${winner.key}` };
  }

  // SVG canvas
  const VB = 1000;
  const CX = 500, CY = 500;
  const R_WEDGE = 485;
  const R_DIV = 485;
  const R_LABEL = 420;

  return (
    <div className="wheel-root">
      <div className="wheel-panel">
        <div className="luck-readout">
          <span>Total Luck:</span>
          <strong>{effectiveLuck}</strong>
          <small>(weight scale {Math.round(t * 100)}%)</small>
        </div>

        {inlineLuckControls && (
          <div className="inline-luck">
            <label className="switch">
              <input
                type="checkbox"
                checked={useCustomLuck}
                onChange={(e) => setUseCustomLuck(e.target.checked)}
              />
              <span>Use custom luck here</span>
            </label>

            {useCustomLuck ? (
              <>
                <div className="luck-row">
                  <div className="luck-input">
                    <label>
                      Character Luck
                      <input
                        type="number"
                        value={charLuck}
                        onChange={(e) => setCharLuck(parseInt(e.target.value) || 0)}
                      />
                    </label>
                  </div>
                  <div className="total-luck-inline">
                    <span>Combined:</span>
                    <b>{charLuck + dunLuck}</b>
                  </div>
                </div>

                <div className="wheel-dungeon-buttons">
                  <button onClick={() => { setDunLuck(-50); setSelectedDungeon("F"); }} className={selectedDungeon === "F" ? "selected" : ""}>F (-50)</button>
                  <button onClick={() => { setDunLuck(-25); setSelectedDungeon("D"); }} className={selectedDungeon === "D" ? "selected" : ""}>D (-25)</button>
                  <button onClick={() => { setDunLuck(0); setSelectedDungeon("C"); }}  className={selectedDungeon === "C" ? "selected" : ""}>C (0)</button>
                  <button onClick={() => { setDunLuck(20); setSelectedDungeon("B"); }} className={selectedDungeon === "B" ? "selected" : ""}>B (+20)</button>
                  <button onClick={() => { setDunLuck(35); setSelectedDungeon("A"); }} className={selectedDungeon === "A" ? "selected" : ""}>A (+35)</button>
                  <button onClick={() => { setDunLuck(60); setSelectedDungeon("S"); }} className={selectedDungeon === "S" ? "selected" : ""}>S (+60)</button>
                </div>
              </>
            ) : (
              <div className="using-app-luck">Using App luck: <b>{totalLuck}</b></div>
            )}
          </div>
        )}

        <div className="wheel-stage">
          <div className="wheel-pointer" aria-hidden />
          <div
            className={`wheel-rotor ${isSpinning ? "spinning" : ""}`}
            style={{ transform: `rotate(${rotation}deg)` }}
            ref={rotorRef}
          >
            <svg className="wheel-svg" viewBox={`0 0 ${VB} ${VB}`} aria-hidden>
              {/* wedges */}
              <g className="wheel-wedges">
                {segments.map((s, i) => (
                  <path key={`w-${i}`} d={sectorPath(CX, CY, R_WEDGE, s.startDeg, s.endDeg)} fill={s.color} />
                ))}
              </g>

              {/* ring & dividers */}
              <circle cx={CX} cy={CY} r={R_WEDGE} className="wheel-ring" fill="none" />
              <g className="wheel-dividers">
                {segments.map((s, i) => {
                  if (i === 0) return null;
                  const p = polar(CX, CY, R_DIV, s.startDeg);
                  return <line key={`d-${i}`} x1={CX} y1={CY} x2={p.x} y2={p.y} className="divider-line" />;
                })}
              </g>

              {/* label paths */}
              <defs>
                {segments.map((s, i) => (
                  <path key={`p-${i}`} id={`seg-arc-${i}`} d={arcPath(CX, CY, R_LABEL, s.startDeg, s.endDeg)} />
                ))}
              </defs>

              {/* labels */}
              <g className="wheel-labels">
                {segments.map((s, i) => {
                  const fontSize = Math.max(14, Math.min(24, 12 + s.angleDeg / 6));
                  return (
                    <text key={`t-${i}`} className="label-text" style={{ fontSize, fontWeight: 800 }}>
                      <textPath href={`#seg-arc-${i}`} startOffset="50%" textAnchor="middle">
                        {s.key}
                      </textPath>
                    </text>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <button className="wheel-btn" onClick={spin} disabled={isSpinning}>
          {isSpinning ? "Spinning..." : "Spin the Wheel"}
        </button>

        <div className="wheel-result" aria-live="polite">
          {result ? (
            <>
              <h3>Result</h3>
              <p>{result.message}</p>
            </>
          ) : (
            <p>Spin to test your fate.</p>
          )}
        </div>

        <details className="wheel-legend">
          <summary>Show current weights</summary>
          <ul>
            {segments.map((s, i) => (
              <li key={i}>
                <span className="legend-swatch" style={{ background: s.color }} />
                {s.key}: {s.weight.toFixed(2)}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
