// Vite scans public/ at startup/build. Restart dev after adding new artwork.
const available = new Set(typeof __PUBLIC_ART__ === 'undefined' ? [] : __PUBLIC_ART__);
const base = import.meta.env?.BASE_URL || '/';
export function publicArtwork(path, fallback = '') {
  const relative = String(path).replace(/^\//, '');
  return available.has(relative) ? `${base}${relative}` : fallback;
}
