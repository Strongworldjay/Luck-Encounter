// Chests.jsx
import React, { useState } from "react";
import { getRandomItem } from "./ItemGenerator";
import { itemNames } from "./itemsData";

import treasureChestIcon from "./assets/wooden2.jpeg";
import woodenChestIcon from "./assets/wooden2.jpeg";
import steelChestIcon from "./assets/steel2.jpeg";
import bronzeChestIcon from "./assets/bronze2.png";
import silverChestIcon from "./assets/silver2.jpeg";
import goldChestIcon from "./assets/gold2.jpeg";
import platinumChestIcon from "./assets/platinum2.jpeg";
import emeraldChestIcon from "./assets/emerald2.jpeg";

import "./Chests.css";

const chestIcons = {
  wooden: woodenChestIcon,
  steel: steelChestIcon,
  bronze: bronzeChestIcon,
  silver: silverChestIcon,
  gold: goldChestIcon,
  platinum: platinumChestIcon,
  emerald: emeraldChestIcon,
};

const chestSettings = {
  wooden:   { goldRange: [10, 20],  rarityWeights: { Common: 0.95, Uncommon: 0.05 } },
  steel:    { goldRange: [20, 40],  rarityWeights: { Common: 0.75, Uncommon: 0.25 } },
  bronze:   { goldRange: [30, 60],  rarityWeights: { Common: 0.20, Uncommon: 0.65, Rare: 0.15 } },
  silver:   { goldRange: [40, 80],  rarityWeights: { Uncommon: 0.6, Rare: 0.35, VeryRare: 0.05 } },
  gold:     { goldRange: [50, 100], rarityWeights: { Uncommon: 0.25, Rare: 0.55, VeryRare: 0.15, Legendary: 0.05 } },
  platinum: { goldRange: [80, 150], rarityWeights: { Rare: 0.1, VeryRare: 0.35, Legendary: 0.45, Unique: 0.1 } },
  emerald:  { goldRange: [100, 200],rarityWeights: { Legendary: 0.7, Unique: 0.3 } }
};

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
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

const chestTypes = {
  Random: [
    "Helmet","HeavyArmor","Gauntlet","Boots","Necklace","Cloak","Potion",
    "Sword","Bow","Axe","Hammer","Glaive","Dagger","Staff","Rod","Wand",
    "Grimoire","Gems","Scrolls","Keys","TreasureMap","Ammunition",
    "Robe","Ring","LightArmor","MediumArmor","WondrousItem","Shield",
    "Crossbow","Spear","Halberd","Club","Whip","Mace","Warpick","Lance","Pike"
  ],
  "Melee Weapon": ["Sword","Axe","Hammer","Glaive","Dagger","Mace","Warpick","Lance","Pike","Whip"],
  "Ranged Weapon": ["Bow","Crossbow"],
  "Light Armor":   ["LightArmor"],
  "Medium Armor":  ["MediumArmor"],
  "Heavy Armor":   ["HeavyArmor","Shield"],
  "Wondrous Item": ["WondrousItem","Grimoire","Gems"],
  "Magic Focus":   ["Staff","Rod","Wand"],
  Jewelry:         ["Necklace","Ring","Gems"],
  Accessories:     ["Helmet","Boots","Cloak","Gauntlet"],
  Supplies:        ["Potion","Ammunition"]
};

const specialDropConfig = {
  enabledForChestType: "Random",
  chances: { Potion: 0.05, Ammunition: 0.05, Scrolls: 0.05, Gems: 0.04 },
  rarityWeights: {
    Potion:  { Common: 0.60, Uncommon: 0.25, Rare: 0.10, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Ammunition:  { Common: 0.60, Uncommon: 0.25, Rare: 0.10, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Scrolls: { Common: 0.50, Uncommon: 0.30, Rare: 0.15, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 },
    Gems:    { Common: 0.40, Uncommon: 0.35, Rare: 0.20, VeryRare: 0.04, Legendary: 0.009, Unique: 0.001 }
  }
};

function maybePickSpecialCategory(chestType) {
  if (chestType !== specialDropConfig.enabledForChestType) return null;
  const entries = Object.entries(specialDropConfig.chances);
  const total   = entries.reduce((s, [, c]) => s + c, 0);
  const roll    = Math.random();
  if (roll >= total) return null;
  let acc = 0;
  for (const [cat, chance] of entries) {
    acc += chance;
    if (roll < acc) return cat;
  }
  return null;
}

export default function Chests() {
  const [selectedRarity, setSelectedRarity]       = useState("");
  const [selectedChestType, setSelectedChestType] = useState("");
  const [loot, setLoot]                           = useState(null);

  function openChest(rarity, chestType) {
    const { goldRange, rarityWeights } = chestSettings[rarity];

    const miscCount = getRandomInt(1, 3);
    const miscArr   = itemNames.Misc?.Common || [];
    const miscLoot  = Array.from({ length: miscCount }, () => ({
      name: miscArr[getRandomInt(0, miscArr.length - 1)],
      rarity: "Common",
      category: "Misc"
    }));

    const pool       = chestTypes[chestType] || Object.keys(itemNames);
    const baseType   = pool[getRandomInt(0, pool.length - 1)];
    const baseRarity = getWeightedRarity(rarityWeights);
    const baseName   = getRandomItem(baseType, null, baseRarity);
    const baseExtra  = { name: baseName, rarity: baseRarity, itemType: baseType };

    const items = [...miscLoot, baseExtra];

    if (chestType === "Random") {
      const specialCat = maybePickSpecialCategory(chestType);
      if (specialCat) {
        const specWeights = specialDropConfig.rarityWeights[specialCat];
        const specRarity  = getWeightedRarity(specWeights);
        const specName    = getRandomItem(specialCat, null, specRarity);
        items.push({ name: specName, rarity: specRarity, category: specialCat });
      }
    }

    const gold = chestType === "Random" ? getRandomInt(goldRange[0], goldRange[1]) : null;
    setLoot({ items, gold });
  }

  function handleOpen() {
    if (!selectedRarity || !selectedChestType) {
      alert("Please select both a rarity and a chest type first.");
      return;
    }
    openChest(selectedRarity, selectedChestType);
  }

  const currentChestIcon = chestIcons[selectedRarity] || treasureChestIcon;

  return (
    <div className="chests-container">
      <h1 className="chest-title">Chest Loot</h1>

      <img
        src={currentChestIcon}
        className={`chest-icon ${selectedRarity || ""}`}
        alt={`${selectedRarity ? `${selectedRarity} chest` : "Chest"}`}
      />

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

      <div className="chests-actions">
        <button className="open-chest-btn" onClick={handleOpen}>
          Open Chest
        </button>
      </div>

      {loot && (
        <div className="loot-section">
          <h2>
            Loot from {selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1)} – {selectedChestType} Chest
          </h2>
          <ul className="loot-list">
            {loot.items.map((it, i) => (
              <li key={i} className={`loot-item ${(it.rarity || "").toLowerCase()}`}>
                {it.name}
              </li>
            ))}
          </ul>
          {loot.gold != null && <p className="loot-gold">Gold: {loot.gold}</p>}
        </div>
      )}
    </div>
  );
}
