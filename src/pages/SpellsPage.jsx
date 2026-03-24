import React, { useEffect, useMemo, useState } from "react";
import { ALL_SPELLS } from "../data/spells";
import SpellsFilters from "../features/spells/SpellsFilters";
import SpellCard from "../features/spells/SpellCard";
import SpellModal from "../features/spells/SpellModal";
import SpellRow from "../features/spells/SpellRow";
import "../features/spells/spells.css";

const uniq = (arr) => [...new Set(arr)].sort();
const PAGE_SIZE = 16;

const INITIAL_FILTERS = {
  name: "",
  classes: [],
  levels: [],
  schools: [],
  castingTime: "",
  saveRequired: "",
  attackType: "",
  components: { V: false, S: false, M: false },
  concentration: "",
  ritual: "",
  damageTypes: [],
  conditions: [],
  tags: [],
  ranges: [],
  durations: [],
  areas: [],
};

export default function SpellsPage() {
  const options = useMemo(() => {
    const classes = uniq(ALL_SPELLS.flatMap((s) => s.classes || []));
    const levels = uniq(ALL_SPELLS.map((s) => Number(s.spellLevel))).sort(
      (a, b) => a - b
    );
    const schools = uniq(ALL_SPELLS.map((s) => s.school).filter(Boolean));
    const castingTimes = uniq(
      ALL_SPELLS.map((s) => s.castingTime).filter(Boolean)
    );
    const saves = uniq(ALL_SPELLS.map((s) => s.saveRequired).filter(Boolean));
    const attacks = uniq(ALL_SPELLS.map((s) => s.attackType).filter(Boolean));
    const damages = uniq(ALL_SPELLS.flatMap((s) => s.damageTypes || []));
    const conditions = uniq(ALL_SPELLS.flatMap((s) => s.conditions || []));
    const tags = uniq(ALL_SPELLS.flatMap((s) => s.tags || []));
    const ranges = uniq(ALL_SPELLS.map((s) => s.range).filter(Boolean));
    const durations = uniq(ALL_SPELLS.map((s) => s.duration).filter(Boolean));
    const areas = uniq(ALL_SPELLS.map((s) => s.area).filter(Boolean));

    return {
      classes,
      levels,
      schools,
      castingTimes,
      saves,
      attacks,
      damages,
      conditions,
      tags,
      ranges,
      durations,
      areas,
    };
  }, []);

  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const resetFilters = () => setFilters(INITIAL_FILTERS);

  const compMap = { V: "verbal", S: "somatic", M: "material" };

  const fullList = useMemo(() => {
    const f = filters;
    const hasComp = (s, key) =>
      !f.components?.[key] || !!(s.components && s.components[compMap[key]]);

    return ALL_SPELLS
      .filter((s) => !f.name || s.name.toLowerCase().includes(f.name.toLowerCase()))
      .filter(
        (s) => !f.classes.length || f.classes.some((c) => (s.classes || []).includes(c))
      )
      .filter((s) => !f.levels.length || f.levels.includes(Number(s.spellLevel)))
      .filter((s) => !f.schools.length || f.schools.includes(s.school))
      .filter((s) => !f.castingTime || s.castingTime === f.castingTime)
      .filter((s) => !f.saveRequired || s.saveRequired === f.saveRequired)
      .filter((s) => !f.attackType || s.attackType === f.attackType)
      .filter((s) => hasComp(s, "V") && hasComp(s, "S") && hasComp(s, "M"))
      .filter((s) => f.concentration === "" || !!s.concentration === f.concentration)
      .filter((s) => f.ritual === "" || !!s.ritual === f.ritual)
      .filter(
        (s) =>
          !f.damageTypes.length ||
          f.damageTypes.some((type) => (s.damageTypes || []).includes(type))
      )
      .filter(
        (s) =>
          !f.conditions.length ||
          f.conditions.some((condition) => (s.conditions || []).includes(condition))
      )
      .filter(
        (s) => !f.tags.length || f.tags.some((tag) => (s.tags || []).includes(tag))
      )
      .filter((s) => !f.ranges.length || f.ranges.includes(s.range))
      .filter((s) => !f.durations.length || f.durations.includes(s.duration))
      .filter((s) => !f.areas.length || f.areas.includes(s.area))
      .sort((a, b) => a.spellLevel - b.spellLevel || a.name.localeCompare(b.name));
  }, [filters]);

  const [viewMode, setViewMode] = useState("cards");
  const [activeSpell, setActiveSpell] = useState(null);

  const [page, setPage] = useState(1);
  const total = fullList.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const list = fullList.slice(startIdx, endIdx);

  useEffect(() => {
    setPage(1);
  }, [filters, viewMode]);

  const pagesToShow = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const set = new Set([
      1,
      2,
      totalPages - 1,
      totalPages,
      safePage - 1,
      safePage,
      safePage + 1,
    ]);

    return Array.from(set)
      .filter((n) => n >= 1 && n <= totalPages)
      .sort((a, b) => a - b);
  }, [totalPages, safePage]);

  return (
    <div className="spells-page">
      <div className="spells-scroll">
        <SpellsFilters
          values={filters}
          onChange={setFilters}
          options={options}
          onReset={resetFilters}
        />

        <div className="view-toggle">
          <button
            className={`view-btn ${viewMode === "cards" ? "active" : ""}`}
            onClick={() => setViewMode("cards")}
          >
            Cards
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            Compact List
          </button>
        </div>

        <Pagination
          page={safePage}
          total={total}
          totalPages={totalPages}
          pages={pagesToShow}
          onPage={setPage}
        />

        {viewMode === "cards" ? (
          <div className="spell-grid">
            {list.map((s) => (
              <SpellCard key={s.slug} spell={s} onOpen={() => setActiveSpell(s)} />
            ))}
          </div>
        ) : (
          <div className="spell-list">
            <div className="spell-list__header">
              <div>Level</div>
              <div>Name</div>
              <div>Casting Time</div>
              <div>Duration</div>
              <div>Range/Area</div>
              <div>Attack/Save</div>
              <div>Damage/Effect</div>
            </div>
            {list.map((s) => (
              <SpellRow key={s.slug} spell={s} onOpen={() => setActiveSpell(s)} />
            ))}
          </div>
        )}

        <Pagination
          page={safePage}
          total={total}
          totalPages={totalPages}
          pages={pagesToShow}
          onPage={setPage}
        />
      </div>

      {activeSpell && (
        <SpellModal spell={activeSpell} onClose={() => setActiveSpell(null)} />
      )}
    </div>
  );
}

function Pagination({ page, total, totalPages, pages, onPage }) {
  const start = total ? (page - 1) * PAGE_SIZE + 1 : 0;
  const end = Math.min(total, page * PAGE_SIZE);

  const items = [];
  for (let i = 0; i < pages.length; i++) {
    const n = pages[i];
    items.push(
      <button
        key={`p-${n}`}
        className={`page-btn ${page === n ? "active" : ""}`}
        onClick={() => onPage(n)}
        aria-current={page === n ? "page" : undefined}
      >
        {n}
      </button>
    );

    if (i < pages.length - 1 && pages[i + 1] !== n + 1) {
      items.push(
        <span key={`dots-${n}`} className="page-ellipsis">
          …
        </span>
      );
    }
  }

  return (
    <div className="pagination">
      <div className="pagination__status">
        Showing <strong>{start}-{end}</strong> of <strong>{total}</strong>
      </div>

      <div className="pagination__controls" role="navigation" aria-label="Pagination">
        <button
          className="page-btn"
          onClick={() => onPage(Math.max(1, page - 1))}
          disabled={page <= 1}
        >
          ‹ Prev
        </button>

        {items}

        <button
          className="page-btn"
          onClick={() => onPage(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}