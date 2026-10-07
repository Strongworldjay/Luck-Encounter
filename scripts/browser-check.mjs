import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';
import { createServer } from 'vite';
const server=await createServer({server:{host:'127.0.0.1',port:5174,strictPort:true}});
await server.listen();
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const errors=[];const checks=[];const layoutErrors=[];const screenshots=process.env.QA_SCREENSHOTS;
if(screenshots)fs.mkdirSync(screenshots,{recursive:true});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,deviceScaleFactor:1,reducedMotion:'reduce'});
 const page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const routes=['DungeonCompletion','MonsterCrystals','ItemCatalog','ShopInventory','Chests','Spells','OriginFeats','GeneralFeats','EpicBoons','MasteryFeats','RacialFeats','MavenArms','SPPlanner','JumpCalc','BountyBoard'];
 await page.goto('http://127.0.0.1:5174');await page.locator('.rewards-page').waitFor();
 async function goto(route){await page.evaluate(x=>location.hash=x,route);await page.waitForFunction(()=>!document.querySelector('.section-loading'));await page.waitForTimeout(100);assert.equal(await page.getByText('This tool could not load.').count(),0);}
 async function screenshot(name){if(screenshots)await page.screenshot({path:`${screenshots}/${name}.png`,fullPage:true});}
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:1366,height:900}]){
  await page.setViewportSize(viewport);
  for(const mode of ['light','dark']){
   await page.getByRole('button',{name:mode==='dark'?'Use nighttime theme':'Use daytime theme'}).click();
   for(const route of routes){
    await goto(route);
    const dimensions=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,bg:getComputedStyle(document.body).backgroundColor,viewport:innerWidth}));
    if(dimensions.scroll>viewport.width+1) layoutErrors.push(`${route} ${mode} ${viewport.width}: overflow ${dimensions.scroll}`);
    assert.equal(dimensions.bg,mode==='dark'?'rgb(7, 23, 29)':'rgb(238, 243, 240)',`${route}: theme leaked`);
    checks.push(`${route}/${mode}/${viewport.width}`);
    if(viewport.width===390&&['DungeonCompletion','Spells','Chests'].includes(route))await screenshot(`${route}-${mode}-mobile`);
   }
  }
 }
 await page.setViewportSize({width:390,height:844});await goto('DungeonCompletion');
 await page.getByLabel('Character’s Luck').fill('22');
 await page.getByRole('group',{name:'Dungeon class'}).getByRole('button',{name:'S +75 Luck',exact:true}).click();
 assert.equal(await page.locator('.rewards-total strong').innerText(),'+97');
 await page.getByRole('button',{name:'Draw reward cards'}).click();assert.equal(await page.locator('.reward-card').count(),3);
 await page.getByRole('button',{name:'Reveal reward card 2'}).click();await page.locator('.reward-card.is-revealed').waitFor();assert.equal(await page.locator('.reward-card:not(.is-dismissed)').count(),1);assert.equal(await page.locator('.reward-card .item-tags').count(),0);
 await screenshot('reward-revealed-mobile');
 await goto('ShopInventory');await page.getByRole('button',{name:'Generate inventory'}).click();assert.equal(await page.locator('.shop-item').count(),10);
 const names=await page.locator('.shop-item h2').allTextContents();assert.equal(new Set(names).size,10);
 await page.getByRole('button',{name:'Filters',exact:true}).click();
 const shopFilters=page.getByRole('dialog');
 await shopFilters.getByLabel('Find categories').fill('Skill Book');assert.equal(await shopFilters.getByLabel('Skill Book',{exact:true}).count(),1);
 await shopFilters.getByLabel('Find categories').fill('Attack Art');assert.equal(await shopFilters.getByLabel('Attack Art · Weapon',{exact:true}).count(),0);
 await shopFilters.getByLabel('Find categories').fill('');
 await shopFilters.getByLabel('Find themes').fill('Obsidian');await shopFilters.getByLabel('Obsidian',{exact:true}).check();await page.getByRole('button',{name:'Done',exact:true}).click();
 await page.getByRole('button',{name:'Generate inventory'}).click();for(const tags of await page.locator('.shop-item .item-tags').allTextContents())assert(tags.includes('Obsidian'));
 await goto('Chests');await page.getByRole('button',{name:'Open chest',exact:true}).click();assert(await page.locator('.chest-loot__item').count()>=2);await screenshot('chest-open-mobile');
 await page.getByRole('button',{name:'Item filters'}).click();
 const chestFilters=page.getByRole('dialog');
 await chestFilters.getByLabel('Sword',{exact:true}).check();
 await chestFilters.getByLabel('Dragon',{exact:true}).check();
 await chestFilters.getByLabel('Find themes').fill('Obsidian');
 await chestFilters.getByLabel('Obsidian',{exact:true}).check();
 await chestFilters.getByRole('button',{name:'Done'}).click();
 await page.getByLabel('Chest type').selectOption('Melee Weapon');
 await page.evaluate(()=>{window.originalChestRandom=Math.random;});
 for(const [roll,category] of [[0,'Potion'],[.12,'Scrolls'],[.16,'Gems'],[.21,'Skill Book']]){
  await page.evaluate(value=>{Math.random=()=>value;},roll);
  await page.getByRole('button',{name:'Open chest',exact:true}).click();
  const categories=await page.locator('.chest-loot__item p').allTextContents();
  assert(categories.some(value=>value.startsWith(`${category} ·`)),`${category} should remain eligible`);
  assert(categories.every(value=>value.startsWith('Sword ·')||value.startsWith(`${category} ·`)));
 }
 await page.evaluate(()=>{Math.random=window.originalChestRandom;delete window.originalChestRandom;});
 await goto('ItemCatalog');await page.getByRole('searchbox',{name:'Search items'}).fill('Dragon Slayer Longsword');assert.equal(await page.locator('.catalog-item').count(),1);
 await page.getByRole('button',{name:'Edit tags for Dragon Slayer Longsword'}).click();await page.getByRole('dialog').getByLabel('Find themes').fill('Obsidian');await page.getByRole('dialog').getByLabel('Obsidian',{exact:true}).check();await page.getByRole('button',{name:'Save tags'}).click();assert.match(await page.locator('.catalog-item .item-tags').innerText(),/Obsidian/);
 await page.reload();await page.locator('.catalog-page').waitFor();await page.getByRole('searchbox',{name:'Search items'}).fill('Dragon Slayer Longsword');assert.match(await page.locator('.catalog-item .item-tags').innerText(),/Obsidian/);
 await goto('Spells');await page.getByRole('button',{name:'Open Acid Splash',exact:true}).click();assert.equal(await page.getByRole('dialog').count(),1);await page.keyboard.press('Escape');assert.equal(await page.getByRole('dialog').count(),0);
 await page.getByRole('button',{name:'Compact List',exact:true}).click();await page.locator('.spell-row__summary').first().click();assert.equal(await page.locator('.spell-row[open]').count(),1);
 await goto('OriginFeats');await page.locator('.feat-row__summary').first().click();assert.equal(await page.locator('.feat-row[open]').count(),1);await page.locator('.feat-row .icon').first().click();assert.equal(await page.getByRole('dialog').count(),1);await page.keyboard.press('Escape');
 await goto('JumpCalc');assert.equal(await page.getByRole('group',{name:'Presets'}).count(),0);
 await goto('DungeonCompletion');await page.getByRole('button',{name:'Toggle navigation'}).click();await page.getByRole('button',{name:'Player Tools'}).click();await page.getByRole('button',{name:'Item Catalog',exact:true}).click();await page.locator('.catalog-page').waitFor();assert.equal(await page.getByRole('button',{name:'Toggle navigation'}).getAttribute('aria-expanded'),'false');
 assert.deepEqual(errors,[],'browser errors'); assert.deepEqual(layoutErrors,[],'layout overflow');
 const report={layoutChecks:checks.length,viewports:[320,390,1366],themes:['light','dark'],sections:routes.length,workflows:['reward draw/reveal','unique shop inventory and Skill Book picker','strict theme filter','chest loot','filtered sword plus potion/scroll/gem/Skill Book bonus','tag editing and reload','spell dialog and list','feat dialog and list','mobile navigation'],browserErrors:errors,status:'passed'};
 console.log(JSON.stringify(report,null,2));fs.writeFileSync('docs/browser-check.json',JSON.stringify(report,null,2)+'\n');
 await context.close();
} finally { await browser.close();await server.close(); }
