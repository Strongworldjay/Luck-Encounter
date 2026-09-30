import React, { useEffect, useMemo, useState } from "react";
import { readStorage, writeStorage } from '../../utils/storage.js';
import styles from "./MagicBingo.module.css";

/**
 * Magic Bingo — JSX + CSS Modules
 * --------------------------------------
 * - 5x5 grid (optional FREE center)
 * - Shuffle new card (seeded/random)
 * - Print-friendly output
 * - LocalStorage persistence per card seed
 */

// ---- Pool: Common D&D Table Occurrences ----
const OCCURRENCES = [
  "Long Snack Break",
  "Side-quest hijack",
  "Not following the quest",
  "Murder Hobo",
  "Near TPK",
  "Rule Lookup",
  "Nat 20",
  "Nat 1",
  "Disadvantage Nat 20",
  "Shopping session explodes",
  "Over-prep for a goblin",
  "Forgotten Ability",
  "Table pun so bad it's good",
  "Wild Magic surprises",
  "New Party Pet",
  "We forgot the map",
  "NPC gets a new voice",
  "'Are we the baddies?'",
  "Mimic paranoia",
  "Split the party",
  "Dungeon detour",
  "Player arrives late",
  "DM sip-of-water cliffhanger",
  "Unexpected stealth fails",
  "Loot distribution debate",
  "Secret note passed",
  "We short-rest again",
  "Overthinking a simple door",
  "Quest-giver facepalm",
  "Party adopts a goblin",
  "Homebrew rule invoked",
  "Schedule talk mid-game",
  "We forgot rations",
  "Comically overkill damage",
  "New catchphrase born",
  "Big bad monologues",
  "Crit fail on persuasion",
  "Chaotic good strikes again",
  "Help action amnesia",
  "Friendly fire oops",
  "Someone draws the scene",
  "Battle map improv",
  "Bard Flirts",
  "Animal companion steals show",
  "Identify? Never heard of her",
  "Player tries to dual-wield snacks",
  "Accidental long rest",
  "Argument about marching order",
  "Cleric says 'no' to healing",
  "Rogue checks every square",
  "Paladin smites... the door",
  "Wizard misreads spell range",
  "Barbarian negotiates (poorly)",
  "Warlock makes a new pact (maybe)",
  "Ranger forgets favored enemy",
  "Monk deflects the plot",
  "Busts out in Song",
  "Dr. Tenno Mentioned",
  "Roll for initiative",
  "Shillelagh",
  "We name the random horse",
  "Everyone talks at once",
  "2 Hour Long Combat",
  "Cloud of Daggers",
  "Bathroom Breaks",
  "Switches Dice from Frustration",
  "Someone quotes the handbook",
  "Can I ready a bonus action?"
];

// ---- Utilities ----
function sampleUnique(pool, count, rng) {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getLines() {
  const L = [];
  for (let r = 0; r < 5; r++) L.push([0, 1, 2, 3, 4].map((c) => r * 5 + c));
  for (let c = 0; c < 5; c++) L.push([0, 1, 2, 3, 4].map((r) => r * 5 + c));
  L.push([0, 6, 12, 18, 24]);
  L.push([4, 8, 12, 16, 20]);
  return L;
}

const BINGO_KEY = 'magic-bingo-v2';
const freshCard = () => ({ seed: Math.floor(Math.random() * 1e9), includeFree: true, marks: Array(25).fill(false) });
export default function MagicBingo() {
  const [saved, setSaved] = useState(() => {
    const data = readStorage(BINGO_KEY, null);
    return data && Number.isInteger(data.seed) && typeof data.includeFree === 'boolean'
      && Array.isArray(data.marks) && data.marks.length === 25 && data.marks.every((mark) => typeof mark === 'boolean') ? data : freshCard();
  });
  const { seed, includeFree, marks } = saved;
  const setSeed = (next) => setSaved((previous) => ({ ...previous, seed: next, marks: Array(25).fill(false) }));
  const setIncludeFree = (next) => setSaved((previous) => ({ ...previous, includeFree: next, marks: Array(25).fill(false) }));
  const card = useMemo(() => {
    const picks = sampleUnique(OCCURRENCES, includeFree ? 24 : 25, mulberry32(seed));
    return Array.from({length:25}, (_, index) => includeFree && index === 12 ? 'FREE SPACE' : picks[includeFree && index > 12 ? index - 1 : index]);
  }, [seed, includeFree]);
  useEffect(() => { writeStorage(BINGO_KEY, saved); }, [saved]);
  const toggle = (index) => setSaved((previous) => ({ ...previous, marks: previous.marks.map((mark, i) => i === index ? !mark : mark) }));
  const shuffle = () => setSeed(Math.floor(Math.random() * 1e9));
  const printCard = () => window.print();

  const lines = useMemo(() => getLines(), []);
  const bingos = useMemo(
    () => lines.filter((line) => line.every((i) => marks[i] || (includeFree && i === 12))),
    [lines, marks, includeFree]
  );

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header className={styles.noPrint + " " + styles.header}>
          <div>
            <h1 className={styles.title}>Magic — Table Bingo</h1>
            <p className={styles.subtitle}>Common D&amp;D table shenanigans, now in glorious bingo form.</p>
          </div>
          <div className={styles.actions}>
            <button onClick={shuffle} className={styles.btnPrimary}>Shuffle Card</button>
            <button onClick={printCard} className={styles.btnSecondary}>Print</button>
          </div>
        </header>

        <section className={styles.noPrint + " " + styles.controls}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" checked={includeFree} onChange={(e) => setIncludeFree(e.target.checked)} />
            <span>Include Free Center</span>
          </label>

          <div className={styles.seed}>
            <span>Seed:</span>
            <code className={styles.seedCode}>{seed}</code>
            <button onClick={() => setSeed(Math.floor(Math.random() * 1e9))} className={styles.rerollBtn}>Reroll</button>
          </div>

          {bingos.length > 0 && (
            <div className={styles.indicator}>BINGO! ({bingos.length} line{bingos.length > 1 ? "s" : ""})</div>
          )}
        </section>

        <div className={styles.cardWrap}>
          <div className={styles.card}>
            {/* MAGIC header row */}
            <div className={styles.letters}>
              {["M", "A", "G", "I", "C"].map((ch) => (
                <div key={ch} className={styles.letter}>{ch}</div>
              ))}
            </div>

            {/* 5x5 grid */}
            <div className={styles.grid}>
              {card.map((text, i) => (
                <Square
                  key={i}
                  text={text}
                  marked={marks[i] || (includeFree && i === 12)}
                  onClick={() => { if (!(includeFree && i === 12)) toggle(i); }}
                  isCenter={i === 12}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className={styles.noPrint + " " + styles.footer}>
          Tip: Click squares to mark them. Your marks are saved for this card.
        </footer>
      </div>
    </div>
  );
}

function Square({ text, marked, onClick, isCenter }) {
  const className = [
    styles.square,
    marked ? styles.squareMarked : "",
    isCenter ? styles.squareCenter : "",
  ].filter(Boolean).join(" ");

  return (
    <button onClick={onClick} className={className} aria-pressed={marked}>
      <span className={styles.squareText}>
        {isCenter && text === "Natural 20!" ? (
          <>
            Natural 20! <small>(Natual 20!)</small>
          </>
        ) : (
          text
        )}
      </span>
      <div className={styles.gloss} />
    </button>
  );
}
