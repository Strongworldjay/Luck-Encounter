import React, { useState } from "react";

/**
 * props:
 * - values: { name, classes[], levels[], schools[], castingTime, ...advanced }
 * - onChange(nextValues)
 * - options: { classes[], levels[], schools[], castingTimes[], saves[], attacks[], damages[], conditions[], tags[] }
 * - onApply() optional
 * - onReset() optional
 */
export default function SpellsFilters({ values, onChange, options, onApply, onReset }) {
  const [openClass, setOpenClass] = useState(false);
  const [openLevel, setOpenLevel] = useState(false);
  const [openSchool, setOpenSchool] = useState(false);
  const [openAdvanced, setOpenAdvanced] = useState(false);

  const toggle = (key, val) => {
    const set = new Set(values[key] || []);
    set.has(val) ? set.delete(val) : set.add(val);
    onChange({ ...values, [key]: [...set] });
  };
  const clearKey = (key) => onChange({ ...values, [key]: [] });

  return (
    <div className="spells-filters">
      {/* ===== Primary row (5 fields) ===== */}
      <div className="spells-filters__row">
        {/* Spell name */}
        <div>
          <label>SPELL NAME</label>
          <input
            className="spell-input"
            placeholder="Search Spell Names"
            value={values.name || ""}
            onChange={(e) => onChange({ ...values, name: e.target.value })}
          />
        </div>

        {/* Classes (pillbox multiselect) */}
        <div className="dropdown">
          <label>CLASS</label>
          <div className="pillbox" onClick={() => setOpenClass((v) => !v)}>
            {(values.classes || []).length ? (
              values.classes.map((c) => (
                <span className="pill" key={c}>
                  {c}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle("classes", c);
                    }}
                    aria-label={`Remove ${c}`}
                  >
                    ×
                  </button>
                </span>
              ))
            ) : (
              <span style={{ opacity: 0.7 }}>Select Classes</span>
            )}
          </div>
          {openClass && (
            <div className="dropdown__panel" onMouseLeave={() => setOpenClass(false)}>
              {options.classes.map((c) => (
                <label
                  key={c}
                  style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 4px" }}
                >
                  <input
                    type="checkbox"
                    checked={(values.classes || []).includes(c)}
                    onChange={() => toggle("classes", c)}
                  />
                  {c}
                </label>
              ))}
              <button
                className="btn-link"
                onClick={() => {
                  clearKey("classes");
                  setOpenClass(false);
                }}
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Levels (pillbox multiselect) */}
        <div className="dropdown">
          <label>SPELL LEVEL</label>
          <div className="pillbox" onClick={() => setOpenLevel((v) => !v)}>
            {(values.levels || []).length ? (
              values.levels.map((l) => (
                <span className="pill" key={l}>{l === 0 ? "Cantrip" : `${l}`}</span>
              ))
            ) : (
              <span style={{ opacity: 0.7 }}>Select Levels</span>
            )}
          </div>
          {openLevel && (
            <div className="dropdown__panel" onMouseLeave={() => setOpenLevel(false)}>
              {options.levels.map((l) => (
                <label
                  key={l}
                  style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 4px" }}
                >
                  <input
                    type="checkbox"
                    checked={(values.levels || []).includes(l)}
                    onChange={() => toggle("levels", l)}
                  />
                  {l === 0 ? "Cantrip" : `${l}`}
                </label>
              ))}
              <button
                className="btn-link"
                onClick={() => {
                  clearKey("levels");
                  setOpenLevel(false);
                }}
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Schools (pillbox multiselect) */}
        <div className="dropdown">
          <label>SPELL SCHOOL</label>
          <div className="pillbox" onClick={() => setOpenSchool((v) => !v)}>
            {(values.schools || []).length ? (
              values.schools.map((s) => <span className="pill" key={s}>{s}</span>)
            ) : (
              <span style={{ opacity: 0.7 }}>Select Schools</span>
            )}
          </div>
          {openSchool && (
            <div className="dropdown__panel" onMouseLeave={() => setOpenSchool(false)}>
              {options.schools.map((s) => (
                <label
                  key={s}
                  style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 4px" }}
                >
                  <input
                    type="checkbox"
                    checked={(values.schools || []).includes(s)}
                    onChange={() => toggle("schools", s)}
                  />
                  {s}
                </label>
              ))}
              <button
                className="btn-link"
                onClick={() => {
                  clearKey("schools");
                  setOpenSchool(false);
                }}
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Casting time */}
        <div>
          <label>CASTING TIME</label>
          <select
            className="spell-select"
            value={values.castingTime || ""}
            onChange={(e) => onChange({ ...values, castingTime: e.target.value })}
          >
            <option value="">Any</option>
            {options.castingTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ===== Actions row (separate, wraps cleanly) ===== */}
      <div className="spells-filters__actions">
        <button className="btn-primary" onClick={onApply}>FILTER SPELLS</button>
        <button className="btn-link" onClick={onReset}>RESET ALL FILTERS</button>
      </div>

      {/* ===== Advanced ===== */}
      <div className="advanced">
        <button className="btn-link" onClick={() => setOpenAdvanced((v) => !v)}>
          {openAdvanced ? "Hide advanced filters" : "Show advanced filters"}
        </button>

        {openAdvanced && (
          <div className="advanced__grid">
            <div>
              <label>SAVE</label>
              <select
                className="spell-select"
                value={values.saveRequired || ""}
                onChange={(e) => onChange({ ...values, saveRequired: e.target.value })}
              >
                <option value="">Any</option>
                {options.saves.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label>ATTACK TYPE</label>
              <select
                className="spell-select"
                value={values.attackType || ""}
                onChange={(e) => onChange({ ...values, attackType: e.target.value })}
              >
                <option value="">Any</option>
                {options.attacks.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <label>COMPONENTS</label>
              <div className="pillbox" style={{ cursor: "default" }}>
                {["V", "S", "M"].map((c) => (
                  <label key={c} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <input
                      type="checkbox"
                      checked={!!values.components?.[c]}
                      onChange={() => {
                        const next = { ...(values.components || {}), [c]: !values.components?.[c] };
                        onChange({ ...values, components: next });
                      }}
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label>CONCENTRATION</label>
              <select
                className="spell-select"
                value={values.concentration ?? ""}
                onChange={(e) =>
                  onChange({
                    ...values,
                    concentration: e.target.value === "" ? "" : e.target.value === "true",
                  })
                }
              >
                <option value="">Any</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div>
              <label>RITUAL</label>
              <select
                className="spell-select"
                value={values.ritual ?? ""}
                onChange={(e) =>
                  onChange({
                    ...values,
                    ritual: e.target.value === "" ? "" : e.target.value === "true",
                  })
                }
              >
                <option value="">Any</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div>
              <label>DAMAGE TYPE</label>
              <input
                className="spell-input"
                placeholder="e.g. Fire"
                value={values.damageType || ""}
                onChange={(e) => onChange({ ...values, damageType: e.target.value })}
              />
            </div>

            <div>
              <label>CONDITIONS</label>
              <input
                className="spell-input"
                placeholder="e.g. Prone"
                value={values.condition || ""}
                onChange={(e) => onChange({ ...values, condition: e.target.value })}
              />
            </div>

            <div>
              <label>TAGS</label>
              <input
                className="spell-input"
                placeholder="e.g. Healing"
                value={values.tag || ""}
                onChange={(e) => onChange({ ...values, tag: e.target.value })}
              />
            </div>

            <div>
              <label>RANGE CONTAINS</label>
              <input
                className="spell-input"
                value={values.rangeLike || ""}
                onChange={(e) => onChange({ ...values, rangeLike: e.target.value })}
              />
            </div>

            <div>
              <label>DURATION CONTAINS</label>
              <input
                className="spell-input"
                value={values.durationLike || ""}
                onChange={(e) => onChange({ ...values, durationLike: e.target.value })}
              />
            </div>

            <div>
              <label>AREA CONTAINS</label>
              <input
                className="spell-input"
                value={values.areaLike || ""}
                onChange={(e) => onChange({ ...values, areaLike: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
