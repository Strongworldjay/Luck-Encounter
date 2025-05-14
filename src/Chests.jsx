// Chests.jsx

import React, { useState } from "react";
import { getRandomItem } from "./ItemGenerator";
import { itemNames } from "./itemsData";
import treasureChestIcon from "./assets/treasurechest.png";
import "./Chests.css";

// 1) Rarity settings (with weighted chances for the “extra” item)
const chestSettings = {
  wooden:   { goldRange: [10, 20],  rarityWeights: { Common: 1.0 } },
  steel:    { goldRange: [20, 40],  rarityWeights: { Common: 0.9, Uncommon: 0.1 } },
  bronze:   { goldRange: [30, 60],  rarityWeights: { Common: 0.6, Uncommon: 0.3, Rare: 0.1 } },
  silver:   { goldRange: [40, 80],  rarityWeights: { Uncommon: 0.6, Rare: 0.35, VeryRare: 0.05 } },
  gold:     { goldRange: [50, 100], rarityWeights: { Uncommon: 0.25, Rare: 0.55, VeryRare: 0.15, Legendary: 0.05 } },
  platinum: { goldRange: [80, 150], rarityWeights: { Rare: 0.1, VeryRare: 0.35, Legendary: 0.45, Unique: 0.1 } },
  emerald:  { goldRange: [100, 200],rarityWeights: { Legendary: 0.7, Unique: 0.3 } }
};

// Helper: uniform random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: pick a key by its weight
function getWeightedRarity(weights) {
  const entries = Object.entries(weights);
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  let roll = Math.random() * total;
  for (let [rarity, w] of entries) {
    if (roll < w) return rarity;
    roll -= w;
  }
  return entries[0][0];
}

// 2) Define the “types” of chest content and their allowed itemTypes
const chestTypes = {
  Random:         null,  // all categories
  "Melee Weapon": [
    "Sword","Axe","Hammer","Glaive","Dagger","Mace","Warpick","Lance","Pike","Whip"
  ],
  "Ranged Weapon": [
    "Bow","Crossbow"
  ],
  "Light Armor":   ["LightArmor"],
  "Medium Armor":  ["MediumArmor"],
  "Heavy Armor":   ["HeavyArmor","Shield"],
  "Wondrous Item": ["WondrousItem","Grimoire","Gems"],
  "Magic Focus":   ["Staff","Rod","Wand"],
  Jewelry:         ["Necklace","Ring","Gems"],
  Accessories:     ["Helmet","Boots","Cloak","Gauntlet"],
  Supplies:        ["Potion"]
};

export default function Chests() {
  const [selectedRarity, setSelectedRarity]       = useState("");
  const [selectedChestType, setSelectedChestType] = useState("");
  const [loot, setLoot]                           = useState(null);

  function openChest(rarity, chestType) {
    const { goldRange, rarityWeights } = chestSettings[rarity];

    // 1) pick 1–5 misc commons
    const miscCount = getRandomInt(1, 5);
    const miscArr   = itemNames.Misc?.Common || [];
    const miscLoot  = Array.from({ length: miscCount }, () => ({
      name: miscArr[getRandomInt(0, miscArr.length - 1)],
      rarity: "Common",
      category: "Misc"
    }));

    // 2) pick one “extra” item with weighted rarity
    const chosenRarity = getWeightedRarity(rarityWeights);
    const allowedTypes = chestTypes[chestType] || Object.keys(itemNames);
    const poolTypes    = allowedTypes
      ? allowedTypes
      : Object.keys(itemNames);
    const randomType   = poolTypes[getRandomInt(0, poolTypes.length - 1)];
    const itemName     = getRandomItem(randomType, null, chosenRarity);
    const extraLoot    = {
      name: itemName,
      rarity: chosenRarity,
      itemType: randomType
    };

    // 3) gold only for Random chestType
    const gold = chestType === "Random"
      ? getRandomInt(goldRange[0], goldRange[1])
      : null;

    setLoot({ items: [...miscLoot, extraLoot], gold });
  }

  function handleOpen() {
    if (!selectedRarity || !selectedChestType) {
      alert("Please select both a rarity and a chest type first.");
      return;
    }
    openChest(selectedRarity, selectedChestType);
  }

  return (
    <div className="chests-container">
      <h1 className="chest-title">Chest Loot</h1>
      <img src={treasureChestIcon} className="chest-icon" alt="Chest" />

      {/* Rarity buttons */}
      <div className="chest-buttons">
        {Object.keys(chestSettings).map((r) => {
          const key = r.toLowerCase();
          return (
            <button
              key={r}
              className={`rarity-button ${key} ${r === selectedRarity ? "selected" : ""}`}
              onClick={() => setSelectedRarity(r)}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Type buttons */}
      <div className="chest-buttons">
        {Object.keys(chestTypes).map((type) => (
          <button
            key={type}
            className={type === selectedChestType ? "selected" : ""}
            onClick={() => setSelectedChestType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Open action */}
      <div style={{ margin: "20px 0" }}>
        <button className="open-chest-btn" onClick={handleOpen}>
          Open Chest
        </button>
      </div>

      {/* Loot display */}
      {loot && (
        <div className="loot-section">
          <h2>
            Loot from {selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1)} –{" "}
            {selectedChestType} Chest
          </h2>
          <ul className="loot-list">
            {loot.items.map((it, i) => (
              <li key={i} className={`loot-item ${it.rarity.toLowerCase()}`}>
                {it.name} <em>({it.rarity})</em>{" "}
                {it.category
                  ? <span>- {it.category}</span>
                  : <span>- {it.itemType}</span>}
              </li>
            ))}
          </ul>
          {loot.gold != null && (
            <p className="loot-gold">Gold: {loot.gold}</p>
          )}
        </div>
      )}
    </div>
  );
}
