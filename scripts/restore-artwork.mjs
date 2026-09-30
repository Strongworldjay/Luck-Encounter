// Optional recovery of missing original public artwork from the existing live site.
// Existing local files are never overwritten. Run before replacing that deployment.
import { ALL_SPELLS } from '../src/data/spells/index.js';
import { featSlug } from '../src/utils/text.js';
import { slugify } from '../src/features/spells/utils.js';
import { existsSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname } from 'node:path';
const all = process.argv.includes('--all');
const source = 'https://luck-encounter.vercel.app/';
const paths = new Set(['abjuration','conjuration','divination','enchantment','evocation','illusion','necromancy','transmutation'].map((name)=>`assets/spells/schools/${name}.png`));
if(all) {
  for(const spell of ALL_SPELLS) paths.add(`assets/spells/${slugify(spell.slug||spell.name)}.png`);
  for(const file of readdirSync(new URL('../src/data/feats/',import.meta.url))) {
    const module=await import(new URL('../src/data/feats/'+file,import.meta.url));
    for(const list of Object.values(module)) if(Array.isArray(list)) for(const feat of list) paths.add(`assets/feats/${featSlug(feat.name)}.png`);
  }
}
let cursor=0;let downloaded=0;let skipped=0;const missing=[];const errors=[];const queue=[...paths];
async function worker() {
  while(cursor<queue.length) {
    const path=queue[cursor++];const destination=`public/${path}`;
    if(existsSync(destination)){skipped++;continue;}
    try {
      const response=await fetch(new URL(path,source),{signal:AbortSignal.timeout(30000)});
      if(response.status===404){missing.push(path);continue;}
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const bytes=Buffer.from(await response.arrayBuffer());
      if(!bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))throw new Error('Expected PNG image');
      mkdirSync(dirname(destination),{recursive:true});writeFileSync(destination,bytes);downloaded++;
      if(downloaded%25===0)console.log(`Downloaded ${downloaded}; checked ${cursor}/${queue.length}`);
    } catch(error) { errors.push({path,error:error.message}); }
  }
}
await Promise.all(Array.from({length:4},worker));
const report={downloaded,alreadyPresent:skipped,unavailable:missing,failed:errors};
mkdirSync('docs',{recursive:true});writeFileSync('docs/artwork-recovery.json',JSON.stringify(report,null,2)+'\n');
console.log(`Downloaded ${downloaded}, retained ${skipped}, unavailable ${missing.length}, failed ${errors.length}. Restart Vite or rebuild.`);
if(errors.length)process.exitCode=1;
