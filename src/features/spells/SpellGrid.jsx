import React, { useMemo, useState } from "react";
import SpellCard from "./SpellCard";
import SpellModal from "./SpellModal";
import SpellsFilters from "./SpellsFilters";
import { ALL_SPELLS } from "../../data/spells";
import "./spells.css";

const INITIAL_FILTERS = {
  name: "",
  classes: [],
  levels: [],
  schools: [],
  castingTime: "",
  saveRequired: "",
  attackType: "",
  components: {},
  concentration: "",
  ritual: "",
  damageTypes: [],
  conditions: [],
  tags: [],
  rangeLike: "",
  durationLike: "",
  areaLike: "",
};

export default function SpellGrid() {
    console.log("NEW SPELL GRID RUNNING");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [selectedSpell, setSelectedSpell] = useState(null);

  const options = useMemo(() => {
    const unique = (arr) => [...new Set(arr.filter(Boolean))].sort();

    return {
      classes: unique(ALL_SPELLS.flatMap((s) => s.classes || [])),
      levels: unique(ALL_SPELLS.map((s) => s.spellLevel)).sort((a, b) => a - b),
      schools: unique(ALL_SPELLS.map((s) => s.school)),
      castingTimes: unique(ALL_SPELLS.map((s) => s.castingTime)),
      saves: unique(ALL_SPELLS.map((s) => s.saveRequired)),
      attacks: unique(ALL_SPELLS.map((s) => s.attackType)),
      damages: unique(ALL_SPELLS.flatMap((s) => s.damageTypes || [])),
      conditions: unique(ALL_SPELLS.flatMap((s) => s.conditions || [])),
      tags: unique(ALL_SPELLS.flatMap((s) => s.tags || [])),
    };
  }, []);

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
  };

  const filtered = useMemo(() => {
    return ALL_SPELLS.filter((spell) => {
      const nameNeedle = filters.name.trim().toLowerCase();

      const matchesName =
        !nameNeedle ||
        spell.name?.toLowerCase().includes(nameNeedle);

      const matchesClasses =
        !filters.classes.length ||
        filters.classes.some((cls) => (spell.classes || []).includes(cls));

      const matchesLevels =
        !filters.levels.length ||
        filters.levels.includes(spell.spellLevel);

      const matchesSchools =
        !filters.schools.length ||
        filters.schools.includes(spell.school);

      const matchesCastingTime =
        !filters.castingTime ||
        spell.castingTime === filters.castingTime;

      const matchesSave =
        !filters.saveRequired ||
        spell.saveRequired === filters.saveRequired;

      const matchesAttack =
        !filters.attackType ||
        spell.attackType === filters.attackType;

      const matchesDamageTypes =
        !filters.damageTypes.length ||
        filters.damageTypes.some((type) =>
          (spell.damageTypes || []).includes(type)
        );

      const matchesConditions =
        !filters.conditions.length ||
        filters.conditions.some((condition) =>
          (spell.conditions || []).includes(condition)
        );

      const matchesTags =
        !filters.tags.length ||
        filters.tags.some((tag) =>
          (spell.tags || []).includes(tag)
        );

      const matchesRange =
        !filters.rangeLike.trim() ||
        (spell.range || "")
          .toLowerCase()
          .includes(filters.rangeLike.trim().toLowerCase());

      const matchesDuration =
        !filters.durationLike.trim() ||
        (spell.duration || "")
          .toLowerCase()
          .includes(filters.durationLike.trim().toLowerCase());

      const matchesArea =
        !filters.areaLike.trim() ||
        (spell.area || "")
          .toLowerCase()
          .includes(filters.areaLike.trim().toLowerCase());

      const matchesConcentration =
        filters.concentration === "" ||
        spell.concentration === filters.concentration;

      const matchesRitual =
        filters.ritual === "" ||
        spell.ritual === filters.ritual;

      const componentFilters = filters.components || {};
      const spellComponents = spell.components || {};

      const matchesComponents =
        (!componentFilters.V || !!spellComponents.verbal) &&
        (!componentFilters.S || !!spellComponents.somatic) &&
        (!componentFilters.M || !!spellComponents.material);

      return (
        matchesName &&
        matchesClasses &&
        matchesLevels &&
        matchesSchools &&
        matchesCastingTime &&
        matchesSave &&
        matchesAttack &&
        matchesDamageTypes &&
        matchesConditions &&
        matchesTags &&
        matchesRange &&
        matchesDuration &&
        matchesArea &&
        matchesConcentration &&
        matchesRitual &&
        matchesComponents
      );
    });
  }, [filters]);

  const sorted = useMemo(() => {
    return [...filtered].sort(
      (a, b) => (a.spellLevel - b.spellLevel) || a.name.localeCompare(b.name)
    );
  }, [filtered]);

  return (
    <div className="spells-page">
      <SpellsFilters
        values={filters}
        onChange={setFilters}
        options={options}
        onReset={handleReset}
      />

      <div className="spell-grid">
        {sorted.map((spell) => (
          <SpellCard
            key={spell.slug}
            spell={spell}
            onOpen={() => setSelectedSpell(spell)}
          />
        ))}
      </div>

      {selectedSpell && (
        <SpellModal
          spell={selectedSpell}
          onClose={() => setSelectedSpell(null)}
        />
      )}
    </div>
  );
}