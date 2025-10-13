// SpellGrid.jsx
import React, { useMemo, useState } from "react";
import SpellCard from "./SpellCard";
import { ALL_SPELLS, SPELLS_BY_LEVEL } from "../../data/spells";
import "./spells.css";

export default function SpellGrid() {

  const [q, setQ] = useState("");
  const [lvl, setLvl] = useState("all");

  const filtered = useMemo(() => {
    const base = lvl === "all" ? ALL_SPELLS : (SPELLS_BY_LEVEL[Number(lvl)] || []);
    const t = q.trim().toLowerCase();
    if (!t) return base;
    return base.filter((s) =>
      (s.name + " " + s.school + " " + s.classes.join(" ") + " " + s.tags.join(" "))
        .toLowerCase()
        .includes(t)
    );
  }, [q, lvl]);

  // NEW: sort by spellLevel asc, then name A→Z
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) =>
      (a.spellLevel - b.spellLevel) || a.name.localeCompare(b.name)
    );
  }, [filtered]);

  return (
    <div>
      <div className="spells-toolbar">
        <input
          placeholder="Search spells…"
          className="input"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
        />
        <select className="select" value={lvl} onChange={(e)=>setLvl(e.target.value)}>
          <option value="all">All levels</option>
          <option value="0">Cantrips (0)</option>
          <option value="1">1st level</option>
          {/* add 2..9 */}
        </select>
      </div>

      <div className="spell-grid">
        {sorted.map((s) => <SpellCard key={s.slug} spell={s} />)}
      </div>
    </div>
  );
}
