import test from 'node:test';
import assert from 'node:assert/strict';
import { toEntries, RARITIES } from '../src/data/items/index.js';
import { crystalPools, openMonsterCrystal } from '../src/utils/monsterCrystals.js';
import { MONSTER_CRYSTAL_RULES, MONSTER_CRYSTAL_TYPES, CRYSTAL_ITEM_CATEGORIES, crystalImageName } from '../src/config/monsterCrystals.js';
const item=(id,type='Dragon',rarity='Common',category='Sword',themes=['Stone'])=>({id,itemId:id,name:id,types:[type],themes,rarity,category,variants:[{category,rarity}]});
const sequence=(...values)=>{let index=0;return ()=>values[index++]??0;};
test('all six exact destruction thresholds consume nothing below the boundary and award at the boundary',()=>{
 const expected=[.9,.75,.5,.25,.05,.001];
 for(const [index,rarity] of RARITIES.entries()){
  assert.equal(MONSTER_CRYSTAL_RULES[rarity].destructionChance,expected[index]);
  const crystal={type:'Dragon',rarity};const pool=[item('a')];
  assert.equal(openMonsterCrystal(pool,crystal,sequence(expected[index]-1e-8)).status,'destroyed');
  assert.equal(openMonsterCrystal(pool,crystal,sequence(expected[index])).status,'reward');
 }
});
test('78 crystal combinations only produce capped dungeon gear of matching type or neutral',()=>{
 const entries=toEntries();assert.equal(MONSTER_CRYSTAL_TYPES.length,13);assert(!MONSTER_CRYSTAL_TYPES.includes('Humanoid'));
 for(const type of MONSTER_CRYSTAL_TYPES) for(const rarity of RARITIES){
  const result=openMonsterCrystal(entries,{type,rarity},()=>.99999);assert.equal(result.status,'reward',`${type}/${rarity}`);
  assert(CRYSTAL_ITEM_CATEGORIES.includes(result.item.category));assert(RARITIES.indexOf(result.item.rarity)<=RARITIES.indexOf(rarity));
  assert(result.item.types.includes(type)||(result.item.types.length===1&&result.item.types[0]==='Neutral'));
 }
});
test('forbidden arts, resource rewards, filler, gold-equivalents and unrelated monster items never qualify',()=>{
 const categories=['WeaponArt','BoostArt','PassiveArt','SkillPoints','Experience','EXP','Mana','Stamina','Misc','Gems','Scrolls','Potion','Ammunition','TreasureMap'];
 const entries=categories.map(category=>item(category,'Dragon','Common',category));entries.push(item('wrong','Fiend'),item('too-rare','Dragon','Unique'),{...item('redacted'),available:false});
 const crystal={type:'Dragon',rarity:'Common'};assert.deepEqual(crystalPools(entries,crystal),{matching:[],neutral:[]});
 assert.equal(openMonsterCrystal(entries,crystal,()=>0).status,'unavailable');
});
test('matching type has an 85/15 preference; sole available branch still gives a reward',()=>{
 const pool=[item('typed'),item('neutral','Neutral')];const crystal={type:'Dragon',rarity:'Unique'};
 assert.equal(openMonsterCrystal(pool,crystal,sequence(.9,.849999)).affinity,'type');
 assert.equal(openMonsterCrystal(pool,crystal,sequence(.9,.85)).affinity,'neutral');
 assert.equal(openMonsterCrystal([pool[0]],crystal,()=>.99).affinity,'type');
 assert.equal(openMonsterCrystal([pool[1]],crystal,()=>.99).affinity,'neutral');
});
test('old theme values no longer constrain typed or neutral rewards',()=>{
 const crystal={type:'Dragon',rarity:'Unique',theme:'Ice'};
 const pool=[item('stone'),item('ice','Dragon','Common','Sword',['Ice']),item('n-stone','Neutral'),item('n-ice','Neutral','Common','Sword',['Ice']),item('wrong','Fiend','Common','Sword',['Ice'])];
 const groups=crystalPools(pool,crystal);assert.deepEqual(groups.matching.map(x=>x.name),['stone','ice']);assert.deepEqual(groups.neutral.map(x=>x.name),['n-stone','n-ice']);
 const fallback=openMonsterCrystal([pool[0],pool[2]],crystal,()=>.99);assert.equal(fallback.item.name,'n-stone');assert(!Object.hasOwn(fallback,'themeMatched'));
});
test('each crystal type has its own intact and broken filename',()=>{
 assert.equal(crystalImageName('Beast'),'beastcrystal.png');
 assert.equal(crystalImageName('Beast',true),'beastcrystalbroken.png');
 const names=MONSTER_CRYSTAL_TYPES.flatMap(type=>[crystalImageName(type),crystalImageName(type,true)]);
 assert.equal(new Set(names).size,26);
});
test('previously queued Humanoid crystals can still open though they cannot be newly selected',()=>{
 assert(!MONSTER_CRYSTAL_TYPES.includes('Humanoid'));
 const result=openMonsterCrystal([item('legacy','Humanoid')],{type:'Humanoid',rarity:'Unique'},()=>.99);
 assert.equal(result.item.name,'legacy');
});
test('successful item rarity weights sum to 100 and omit above-tier drops',()=>{
 for(const [tier,{itemWeights}] of Object.entries(MONSTER_CRYSTAL_RULES)){
  assert.equal(Object.values(itemWeights).reduce((sum,value)=>sum+value,0),100);
  assert(Object.keys(itemWeights).every(rarity=>RARITIES.indexOf(rarity)<=RARITIES.indexOf(tier)));
 }
});
test('missing low rarities redistribute within the crystal cap without changing destruction chance',()=>{
 const pool=[item('only-rare','Dragon','Rare')];const crystal={type:'Dragon',rarity:'Rare'};
 assert.equal(openMonsterCrystal(pool,crystal,sequence(.5,0)).item.rarity,'Rare');
 assert.equal(openMonsterCrystal(pool,crystal,sequence(.4999)).status,'destroyed');
 assert.equal(openMonsterCrystal(pool,{...crystal,rarity:'Common'},sequence(.99)).status,'unavailable');
});
