import React, { useState } from "react";

/**
 * props:
 * - values: {
 *    name: "",
 *    classes: [],
 *    levels: [],
 *    schools: [],
 *    castingTime: "",
 *    saveRequired: "",
 *    attackType: "",
 *    components: { V?: boolean, S?: boolean, M?: boolean },
 *    concentration: "",
 *    ritual: "",
 *    damageTypes: [],
 *    conditions: [],
 *    tags: [],
 *    ranges: [],
 *    durations: [],
 *    areas: [],
 *   }
 *
 * - onChange(nextValues)
 *
 * - options: {
 *    classes: [],
 *    levels: [],
 *    schools: [],
 *    castingTimes: [],
 *    saves: [],
 *    attacks: [],
 *    damages: [],
 *    conditions: [],
 *    tags: [],
 *    ranges: [],
 *    durations: [],
 *    areas: [],
 *   }
 *
 * - onApply() optional
 * - onReset() optional
 */

function MultiSelectDropdown({
  label,
  value = [],
  options = [],
  placeholder = "Select options",
  onToggle,
  onClear,
  formatLabel = (v) => v,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="spell-dropdown">
      <label>{label}</label>

      <div
        className="spell-pillbox"
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
      >
        {value.length ? (
          value.map((item) => (
            <span className="spell-pill" key={item}>
              {formatLabel(item)}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(item);
                }}
                aria-label={`Remove ${item}`}
              >
                ×
              </button>
            </span>
          ))
        ) : (
          <span className="spell-pillbox__placeholder">{placeholder}</span>
        )}
      </div>

      {open && (
        <div className="spell-dropdown__panel" onMouseLeave={() => setOpen(false)}>
          {options.length ? (
            options.map((item) => (
              <label key={item} className="spell-dropdown__option">
                <input
                  type="checkbox"
                  checked={value.includes(item)}
                  onChange={() => onToggle(item)}
                />
                {formatLabel(item)}
              </label>
            ))
          ) : (
            <div className="spell-dropdown__empty">No options</div>
          )}

          <button
            type="button"
            className="btn-link"
            onClick={() => {
              onClear();
              setOpen(false);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default function SpellsFilters({
  values,
  onChange,
  options,
  onReset,
}) {
  const [openAdvanced, setOpenAdvanced] = useState(false);

  const toggle = (key, val) => {
    const set = new Set(values[key] || []);
    if (set.has(val)) {
      set.delete(val);
    } else {
      set.add(val);
    }
    onChange({ ...values, [key]: [...set] });
  };

  const clearKey = (key) => {
    onChange({ ...values, [key]: [] });
  };

  return (
    <div className="spells-filters">
      <div className="spells-filters__row">
        <div>
          <label>SPELL NAME</label>
          <input
            className="spell-input"
            placeholder="Search Spell Names"
            value={values.name || ""}
            onChange={(e) => onChange({ ...values, name: e.target.value })}
          />
        </div>

        <MultiSelectDropdown
          label="CLASS"
          value={values.classes || []}
          options={options.classes || []}
          placeholder="Select Classes"
          onToggle={(val) => toggle("classes", val)}
          onClear={() => clearKey("classes")}
        />

        <MultiSelectDropdown
          label="SPELL LEVEL"
          value={values.levels || []}
          options={options.levels || []}
          placeholder="Select Levels"
          onToggle={(val) => toggle("levels", val)}
          onClear={() => clearKey("levels")}
          formatLabel={(l) => (l === 0 ? "Cantrip" : `${l}`)}
        />

        <MultiSelectDropdown
          label="SPELL SCHOOL"
          value={values.schools || []}
          options={options.schools || []}
          placeholder="Select Schools"
          onToggle={(val) => toggle("schools", val)}
          onClear={() => clearKey("schools")}
        />

        <div>
          <label>CASTING TIME</label>
          <select
            className="spell-select"
            value={values.castingTime || ""}
            onChange={(e) =>
              onChange({ ...values, castingTime: e.target.value })
            }
          >
            <option value="">Any</option>
            {(options.castingTimes || []).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="spells-filters__actions">
        <button type="button" className="btn-link" onClick={onReset}>
          RESET ALL FILTERS
        </button>
      </div>

      <div className="advanced">
        <button
          type="button"
          className="btn-link"
          onClick={() => setOpenAdvanced((v) => !v)}
        >
          {openAdvanced ? "Hide advanced filters" : "Show advanced filters"}
        </button>

        {openAdvanced && (
          <div className="advanced__grid">
            <div>
              <label>SAVE</label>
              <select
                className="spell-select"
                value={values.saveRequired || ""}
                onChange={(e) =>
                  onChange({ ...values, saveRequired: e.target.value })
                }
              >
                <option value="">Any</option>
                {(options.saves || []).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>ATTACK TYPE</label>
              <select
                className="spell-select"
                value={values.attackType || ""}
                onChange={(e) =>
                  onChange({ ...values, attackType: e.target.value })
                }
              >
                <option value="">Any</option>
                {(options.attacks || []).map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>COMPONENTS</label>
              <div
                className="spell-pillbox spell-pillbox--static"
                style={{ cursor: "default" }}
              >
                {["V", "S", "M"].map((c) => (
                  <label key={c} className="spell-components__option">
                    <input
                      type="checkbox"
                      checked={!!values.components?.[c]}
                      onChange={() => {
                        const next = {
                          ...(values.components || {}),
                          [c]: !values.components?.[c],
                        };
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
                    concentration:
                      e.target.value === "" ? "" : e.target.value === "true",
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
                    ritual:
                      e.target.value === "" ? "" : e.target.value === "true",
                  })
                }
              >
                <option value="">Any</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <MultiSelectDropdown
              label="DAMAGE TYPES"
              value={values.damageTypes || []}
              options={options.damages || []}
              placeholder="Select Damage Types"
              onToggle={(val) => toggle("damageTypes", val)}
              onClear={() => clearKey("damageTypes")}
            />

            <MultiSelectDropdown
              label="CONDITIONS"
              value={values.conditions || []}
              options={options.conditions || []}
              placeholder="Select Conditions"
              onToggle={(val) => toggle("conditions", val)}
              onClear={() => clearKey("conditions")}
            />

            <MultiSelectDropdown
              label="TAGS"
              value={values.tags || []}
              options={options.tags || []}
              placeholder="Select Tags"
              onToggle={(val) => toggle("tags", val)}
              onClear={() => clearKey("tags")}
            />

            <MultiSelectDropdown
              label="RANGE"
              value={values.ranges || []}
              options={options.ranges || []}
              placeholder="Select Ranges"
              onToggle={(val) => toggle("ranges", val)}
              onClear={() => clearKey("ranges")}
            />

            <MultiSelectDropdown
              label="DURATION"
              value={values.durations || []}
              options={options.durations || []}
              placeholder="Select Durations"
              onToggle={(val) => toggle("durations", val)}
              onClear={() => clearKey("durations")}
            />

            <MultiSelectDropdown
              label="AREA"
              value={values.areas || []}
              options={options.areas || []}
              placeholder="Select Areas"
              onToggle={(val) => toggle("areas", val)}
              onClear={() => clearKey("areas")}
            />
          </div>
        )}
      </div>
    </div>
  );
}