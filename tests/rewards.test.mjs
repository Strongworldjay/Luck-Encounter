import test from 'node:test';
import assert from 'node:assert/strict';
import { ITEMS, applyTagOverrides, toEntries, filterEntries } from '../src/data/items/index.js';
import { drawItem, drawItems } from '../src/utils/items.js';
import { getRewardRarity } from '../src/config/rewards.js';
import { normalizeSpellMetadata } from '../src/data/spells/metadata.js';
const entries=toEntries();
const example=(id,rarity,category='Sword')=>({id,itemId:id,name:id,types:['Neutral'],themes:['Metal'],category,rarity,variants:[{category,rarity}]});
test('luck boundaries stay monotonic, including outside historical range',()=>{
 for(const [roll,rarity] of [[-10000,'Common'],[5,'Common'],[6,'Uncommon'],[49,'Uncommon'],[50,'Rare'],[89,'Rare'],[90,'Very Rare'],[109,'Very Rare'],[110,'Legendary'],[140,'Legendary'],[141,'Unique'],[10000,'Unique']]) assert.equal(getRewardRarity(roll).name,rarity);
});
test('draws cannot repeat one identity through different variants',()=>{
 const pool=[example('a','Common'),example('a','Rare'),example('b','Common')];
 const drawn=drawItems(pool,3,{random:()=>0});assert.equal(drawn.length,2);assert.equal(new Set(drawn.map(x=>x.itemId)).size,2);
 assert.equal(drawItems(pool,4,{allowDuplicates:true,random:()=>0}).length,4);
});
test('empty rarity uses closest real rarity, lower on ties, and discloses adjustment',()=>{
 const pool=[example('low','Common'),example('high','Rare')];
 const draw=drawItem(pool,{rarity:'Uncommon',random:()=>0});assert.equal(draw.itemId,'low');assert.equal(draw.rarityAdjusted,true);
 assert.equal(drawItem([]),null);assert.deepEqual(drawItems([],3),[]);
});
test('category/type/theme restrictions survive all reward rarities and exclude placeholders',()=>{
 const filters={categories:['Sword'],types:['Dragon'],themes:['Ancient','Sky']};
 const pool=filterEntries(entries,filters);assert(pool.length>0);
 for(const rarity of ['Common','Uncommon','Rare','VeryRare','Legendary','Unique']) {
  for(let i=0;i<30;i++) {
   const item=drawItem(pool,{rarity});assert.equal(item.category,'Sword');assert(item.types.includes('Dragon'));assert(item.themes.some(t=>filters.themes.includes(t)));assert.notEqual(item.available,false);
  }
 }
 assert(entries.every(item=>item.available!==false));
 assert.equal(filterEntries(entries,{themes:['nonexistent']}).length,0);
});
test('category and rarity must match the same item variant',()=>{
 const item={id:'v',name:'v',types:['Neutral'],themes:['Metal'],variants:[{category:'Sword',rarity:'Common'},{category:'Staff',rarity:'Rare'}]};
 assert.equal(filterEntries(toEntries([item]),{categories:['Sword'],rarities:['Rare']}).length,0);
});
test('bad stored overrides cannot crash or erase tags; reviewed tags propagate',()=>{
 const original=ITEMS.find(item=>item.available!==false); const id=original.id; const index=ITEMS.indexOf(original);
 assert.doesNotThrow(()=>applyTagOverrides({[id]:{types:'bad',themes:{}}}));
 assert.deepEqual(applyTagOverrides({[id]:{types:[],themes:[]}})[index],original);
 const modified=applyTagOverrides({[id]:{types:['Dragon','Dragon'],themes:['Stone']}})[index];
 assert.deepEqual(modified.types,['Dragon']);assert.equal(modified.tagBasis,'reviewed');assert.deepEqual(toEntries([modified])[0].themes,['Stone']);
});
test('strongworldjay references receive Homebrew source and New functional tag',()=>{
 const spell=normalizeSpellMetadata({name:'Example',tags:['strongworldjay'],sources:[]});assert(spell.sources.includes('Homebrew'));assert(spell.tags.includes('New'));assert(!spell.tags.includes('strongworldjay'));
});
