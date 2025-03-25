import React, { useState } from "react";
import { getRandomItem } from "./ItemGenerator";
import { itemNames } from "./itemsData";
import treasureChestIcon from "./assets/treasurechest.png";

// Chest settings: defines the gold range and which magical rarities are allowed.
const chestSettings = {
  wooden: {
    goldRange: [10, 20],
    magicAllowed: [] // For wooden chests, if no magical rarity is allowed, we'll default to "Uncommon"
  },
  steel: {
    goldRange: [20, 40],
    magicAllowed: ["Uncommon"]
  },
  bronze: {
    goldRange: [30, 60],
    magicAllowed: ["Uncommon", "Rare"]
  },
  silver: {
    goldRange: [40, 80],
    magicAllowed: ["Rare", "Very Rare"]
  },
  gold: {
    goldRange: [50, 100],
    magicAllowed: ["Very Rare"]
  },
  platinum: {
    goldRange: [80, 150],
    magicAllowed: ["Legendary"]
  },
  emerald: {
    goldRange: [100, 200],
    magicAllowed: ["Unique"]
  }
};

// Returns a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Available item types for magical items (from your card system)
const itemTypes = [
  "Helmet", "HeavyArmor", "Gauntlet", "Boots", "Necklace", "Cloak", "Potion",
  "Sword", "Bow", "Axe", "Hammer", "Glaive", "Dagger", "Staff", "Rod", "Wand",
  "Grimoire", "Gems", "WeaponArt",
  "PassiveArt", "BoostArt", "SkillPoints", "ExperiencePoints", "Robe", "Ring", "LightArmor",
  "MediumArmor", "WondrousItem", "Shield", "Crossbow", "Spear", "Halberd", "Club", "Whip", "Mace",
  "Warpick", "Lance", "Pike"
];

const Chests = () => {
  const [loot, setLoot] = useState(null);
  const [selectedChest, setSelectedChest] = useState("");

  const openChest = (chestType) => {
    setSelectedChest(chestType);
    const settings = chestSettings[chestType];

    // Generate 1–5 random items from the "Misc" category
    const miscCount = getRandomInt(1, 5);
    const miscLoot = [];
    if (itemNames.Misc && itemNames.Misc.Common && itemNames.Misc.Common.length > 0) {
      for (let i = 0; i < miscCount; i++) {
        const arr = itemNames.Misc.Common;
        const randomItem = arr[getRandomInt(0, arr.length - 1)];
        miscLoot.push({ name: randomItem, rarity: "Common", category: "Misc" });
      }
    } else {
      console.error("No Misc items found in itemsData.");
    }

    // Generate exactly one magical item.
    let allowedMagic = settings.magicAllowed;
    // If no magical rarities are allowed, default to "Uncommon"
    if (!allowedMagic || allowedMagic.length === 0) {
      allowedMagic = ["Uncommon"];
    }
    const chosenMagicRarity = allowedMagic[getRandomInt(0, allowedMagic.length - 1)];
    const randomType = itemTypes[getRandomInt(0, itemTypes.length - 1)];
    // Remove spaces from rarity for consistency if needed.
    const magicItemName = getRandomItem(randomType, null, chosenMagicRarity.replace(" ", ""));
    const magicalLoot = {
      itemType: randomType,
      name: magicItemName,
      rarity: chosenMagicRarity
    };

    // Determine gold amount based on chest settings.
    const gold = getRandomInt(settings.goldRange[0], settings.goldRange[1]);

    // Combine misc loot with the magical loot.
    setLoot({ items: [...miscLoot, magicalLoot], gold });
  };

  return (
    <div className="chests-container" style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="chest-title">Chest Loot</h1>
      <img
        src={treasureChestIcon}
        alt="Treasure Chest"
        className="chest-icon"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <div className="chest-buttons" style={{ marginBottom: "20px" }}>
        {Object.keys(chestSettings).map((chestType) => (
          <button
            key={chestType}
            onClick={() => openChest(chestType)}
            style={{ margin: "5px", padding: "10px 15px", cursor: "pointer" }}
          >
            {chestType.charAt(0).toUpperCase() + chestType.slice(1)}
          </button>
        ))}
      </div>
      {loot && (
        <div className="loot-section" style={{ marginTop: "20px" }}>
          <h2>
            Loot from {selectedChest.charAt(0).toUpperCase() + selectedChest.slice(1)} Chest
          </h2>
          <ul className="loot-list" style={{ listStyleType: "none", padding: 0 }}>
            {loot.items.map((item, index) => (
              <li key={index} style={{ margin: "5px 0", padding: "5px 10px", display: "inline-block", border: "1px solid #ddd", borderRadius: "4px" }}>
                {item.name} <em>({item.rarity}) {item.category ? `- ${item.category}` : `- ${item.itemType}`}</em>
              </li>
            ))}
          </ul>
          <p className="loot-gold" style={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: "10px" }}>
            <strong>Gold: </strong> {loot.gold}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chests;
