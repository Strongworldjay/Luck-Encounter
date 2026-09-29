import { itemNames } from '../src/data/itemsData.js';

const issues = [];
let categories = 0;
let pools = 0;
let entries = 0;
let duplicates = 0;

const visit = (value, path = []) => {
  if (Array.isArray(value)) {
    pools += 1;
    const cleaned = value.filter((entry) => entry !== null && entry !== undefined && entry !== '');
    entries += cleaned.length;

    if (cleaned.length !== value.length) {
      issues.push(`${path.join(' > ')} contains ${value.length - cleaned.length} empty entries.`);
    }

    const seen = new Map();
    for (const entry of cleaned) seen.set(String(entry), (seen.get(String(entry)) ?? 0) + 1);
    for (const [entry, count] of seen) {
      if (count > 1) {
        duplicates += count - 1;
        issues.push(`${path.join(' > ')} repeats “${entry}” ${count} times. Confirm whether this is intentional weighting.`);
      }
    }
    return;
  }

  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) visit(child, [...path, key]);
  }
};

for (const [category, data] of Object.entries(itemNames)) {
  categories += 1;
  visit(data, [category]);
}

console.log(`Item categories: ${categories}`);
console.log(`Rarity/subtype pools: ${pools}`);
console.log(`Usable weighted entries: ${entries}`);
console.log(`Repeated weighted entries: ${duplicates}`);
console.log(`Review notes: ${issues.length}`);

if (issues.length) {
  console.log('\nReview notes:');
  for (const issue of issues) console.log(`- ${issue}`);
}
