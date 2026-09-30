import { useMemo, useSyncExternalStore } from 'react';
import { applyTagOverrides, toEntries } from '../data/items/index.js';
import { readStorage, writeStorage } from '../utils/storage.js';
const KEY = 'luck-encounter-item-tags-v1';
const validOverrides = (value) => value && !Array.isArray(value) && typeof value === 'object' ? value : {};
let overrides = validOverrides(readStorage(KEY, {}));
const listeners = new Set();
const subscribe = (listener) => { listeners.add(listener); return () => listeners.delete(listener); };
const getSnapshot = () => overrides;
function publish() { listeners.forEach((listener) => listener()); }
if (typeof window !== 'undefined') window.addEventListener('storage', (event) => {
  if (event.key === KEY) { overrides = validOverrides(readStorage(KEY, {})); publish(); }
});
export function useItemCatalog() {
  const current = useSyncExternalStore(subscribe, getSnapshot);
  const items = useMemo(() => applyTagOverrides(current), [current]);
  const entries = useMemo(() => toEntries(items), [items]);
  const saveTags = (id, tags) => {
    overrides = { ...overrides, [id]: tags };
    const persisted = writeStorage(KEY, overrides); publish(); return persisted;
  };
  return { items, entries, overrides: current, saveTags };
}
