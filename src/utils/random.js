export function randomInt(min, max, random = Math.random) {
  return Math.floor(random() * (max - min + 1)) + min;
}
export function weightedChoice(entries, weight = (entry) => entry.weight ?? 1, random = Math.random) {
  const valid = entries.filter((entry) => Number.isFinite(weight(entry)) && weight(entry) > 0);
  let roll = random() * valid.reduce((sum, entry) => sum + weight(entry), 0);
  for (const entry of valid) { roll -= weight(entry); if (roll < 0) return entry; }
  return valid.at(-1) ?? null;
}
export function weightedKey(weights, random = Math.random) {
  return weightedChoice(Object.entries(weights), ([, weight]) => weight, random)?.[0] ?? null;
}
