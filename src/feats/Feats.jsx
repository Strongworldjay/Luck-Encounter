// Feats.jsx
import React, { useMemo, useState } from "react";
import FeatRow from "./FeatRow";
import FeatModal from "./FeatModal";
import "./Feats.css";

/* Normalize for stable grouping + lookup */
const normType = (t) =>
  String(t ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();

/* Map whatever the data says -> the canonical key we use for headers/blurbs */
const TYPE_ALIAS = {
  // Origin
  origin: "Origin",
  "origin feat": "Origin",
  "origin feats": "Origin",

  // General
  general: "General",
  "general feat": "General",
  "general feats": "General",

  // Epic Boons
  "epic boon": "Epic Boon",
  "epic boons": "Epic Boon",
  boon: "Epic Boon",
  boons: "Epic Boon",

  // Mastery
  mastery: "Mastery",
  "mastery feat": "Mastery",
  "mastery feats": "Mastery",

  // Racial
  racial: "Racial",
  "racial feat": "Racial",
  "racial feats": "Racial",

  // Maven Arms
  "maven arms": "Maven Arms",
  "maven arm": "Maven Arms",
  "weapon feat": "Maven Arms",
"weapon feats": "Maven Arms",
};

export default function Feats({ feats = [], title = "Feats", typeDescriptions: typeDescriptionsProp }) {
  const [activeFeat, setActiveFeat] = useState(null);

  // ✅ Type blurbs (canonical keys)
  const typeDescriptions = useMemo(
    () => ({
      Origin:
        "Origin Feats come bundled with your Background—your character’s first mechanical identity. They do not grant stat boosts; instead, they provide a baseline feature that refines your playstyle. These can also be selected via Lessons of the First One (Eldritch Invocation).",

      General:
        "General Feats are open to anyone meeting the prerequisites. Each grants a unique feature and a +1 to a specific ability score.",

      "Epic Boon":
        "Epic Boons are chosen at level 19+. These are extraordinary, character-defining powers that significantly elevate your build.",

      Mastery:
        "Mastery Feats are specialized, high-impact feats with sharper restrictions—often requiring prior feats, fighting styles, or extreme stat minimums.",

      Racial:
        "Racial Feats are powerful and gravely unique feats limited to specific races (primarily core ancestries), representing biology or culture that others simply can’t replicate.",

      "Maven Arms":
        "Maven Arms are feats designed to specialize in a singular type of weapon—dedicated craftsmanship and devotion to one fighting style—granting stronger buffs the less popular the weapon is.",

      ...(typeDescriptionsProp || {}),
    }),
    [typeDescriptionsProp]
  );

  // ✅ Legacy filter + stable sort (by canonical Type then Name)
  const sorted = useMemo(() => {
    const base = feats.filter((f) => !f.legacy);
    return [...base].sort((a, b) => {
      const aRaw = (a.type || a.categoryLine || "Other").toString();
      const bRaw = (b.type || b.categoryLine || "Other").toString();

      const aType = TYPE_ALIAS[normType(aRaw)] || aRaw.trim();
      const bType = TYPE_ALIAS[normType(bRaw)] || bRaw.trim();

      const tcmp = aType.localeCompare(bType);
      if (tcmp) return tcmp;
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [feats]);

  // ✅ Inject headers when canonical type changes
  const renderRows = useMemo(() => {
    const rows = [];
    let lastType = null;

    for (const f of sorted) {
      const rawType = (f.type || f.categoryLine || "Other").toString();
      const keyType = TYPE_ALIAS[normType(rawType)] || rawType.trim();

      if (keyType !== lastType) {
        rows.push({
          kind: "header",
          key: `header:${keyType}`,
          type: keyType,
          desc: typeDescriptions[keyType] || "",
        });
        lastType = keyType;
      }

      rows.push({
        kind: "feat",
        key: f.id || f.slug || f.name,
        feat: f,
      });
    }

    return rows;
  }, [sorted, typeDescriptions]);

  return (
    <div className="feats-page">
      <div className="feats-scroll">
        <div className="feats-headerbar">
          <h2 className="feats-title">{title}</h2>
        </div>

        <div className="feat-list">
          <div className="feat-list__header">
            <div>Type</div>
            <div>Name</div>
            <div>Prerequisite</div>
            <div>Summary</div>
            <div>Tags</div>
          </div>

          {renderRows.map((row) => {
            if (row.kind === "header") {
              return (
                <div className="feat-typeheader" key={row.key}>
                  <div className="feat-typeheader__kicker">Feat Category</div>
                  <div className="feat-typeheader__title">{row.type}</div>
                  {row.desc ? <div className="feat-typeheader__desc">{row.desc}</div> : null}
                </div>
              );
            }

            return (
              <FeatRow
                key={row.key}
                feat={row.feat}
                onOpenModal={(f) => setActiveFeat(f)}
              />
            );
          })}
        </div>
      </div>

      {activeFeat && <FeatModal feat={activeFeat} onClose={() => setActiveFeat(null)} />}
    </div>
  );
}