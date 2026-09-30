import assert from 'node:assert/strict';
import { ITEMS, RARITIES } from '../src/data/items/index.js';
import { ITEM_THEMES, CREATURE_TYPES, ITEM_CATEGORIES } from '../src/data/items/taxonomy.js';
import { ALL_SPELLS } from '../src/data/spells/index.js';
import { readdirSync } from 'node:fs';
const normalized = (name) => String(name).normalize('NFKC').replace(/[’‘]/g, "'").trim().replace(/\s+/g,' ').toLowerCase();
const names = new Set(); const ids = new Set(); let variants = 0;
for (const item of ITEMS) {
  assert(item.name?.trim(), 'Empty name');
  assert(!names.has(normalized(item.name)), `Duplicate name: ${item.name}`); names.add(normalized(item.name));
  assert(item.id && !ids.has(item.id), `Duplicate/missing id: ${item.name}`); ids.add(item.id);
  for (const [field,allowed] of [['themes',ITEM_THEMES],['types',CREATURE_TYPES]]) {
    assert(Array.isArray(item[field]) && item[field].length, `${item.name}: missing ${field}`);
    assert.equal(new Set(item[field]).size,item[field].length,`${item.name}: repeated ${field}`);
    assert(item[field].every((tag)=>allowed.includes(tag)),`${item.name}: invalid ${field}`);
  }
  assert(item.variants.length,`${item.name}: no variants`); const seen=new Set();
  for (const variant of item.variants) {
    assert(ITEM_CATEGORIES.includes(variant.category),`${item.name}: unknown category`);
    assert(RARITIES.includes(variant.rarity),`${item.name}: unknown rarity`);
    const key=variant.category+':'+variant.rarity; assert(!seen.has(key),`${item.name}: repeated variant`);seen.add(key);
    assert(Number.isFinite(variant.weight ?? 1) && (variant.weight ?? 1)>0,`${item.name}: invalid weight`);variants++;
  }
}
function checkReference(list,label) {
  const seen = new Set();
  for (const entry of list) {
    assert(entry?.name, `${label}: empty record`); const key=entry.slug||entry.id||entry.name;
    assert(!seen.has(key),`${label}: duplicate ${key}`);seen.add(key);
  }
}
checkReference(ALL_SPELLS,'spells');
let featCount=0;
for(const file of readdirSync(new URL('../src/data/feats/',import.meta.url))) {
  const module=await import(new URL('../src/data/feats/'+file,import.meta.url));
  for(const [name,list] of Object.entries(module)) if(Array.isArray(list)){checkReference(list,name);featCount+=list.length;}
}
console.log(JSON.stringify({items:ITEMS.length,available:ITEMS.filter(x=>x.available!==false).length,variants,themes:ITEM_THEMES.length,types:CREATURE_TYPES.length,spells:ALL_SPELLS.length,feats:featCount,integrity:'passed'},null,2));
