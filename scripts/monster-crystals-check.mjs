import assert from 'node:assert/strict';
import fs from 'node:fs';
import { chromium } from 'playwright';
import { createServer } from 'vite';
import { CRYSTAL_ITEM_CATEGORIES } from '../src/config/monsterCrystals.js';
// Temporary valid images verify the intact/broken filename swap without shipping placeholder art.
const fixtures = ['aberrationcrystal.png', 'aberrationcrystalbroken.png', 'dragoncrystal.png', 'dragoncrystalbroken.png'].map(name => `public/assets/${name}`).filter(path => !fs.existsSync(path));
for (const path of fixtures) fs.copyFileSync('public/assets/bounty1.png', path);
const server = await createServer({server:{host:'127.0.0.1',port:5176,strictPort:true}});
await server.listen();
const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
const errors = [];
const screenshots = process.env.QA_SCREENSHOTS;
if (screenshots) fs.mkdirSync(screenshots,{recursive:true});
try {
  const page = await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto('http://127.0.0.1:5176');
  await page.getByRole('button',{name:'Toggle navigation'}).click();
  await page.getByRole('button',{name:'Player Tools',exact:true}).click();
  await page.getByRole('button',{name:'Monster Crystals',exact:true}).click();
  await page.locator('.monster-crystals-page').waitFor();
  assert.equal(await page.getByRole('button',{name:'Toggle navigation'}).getAttribute('aria-expanded'),'false');
  assert.equal(await page.getByLabel('Monster type').locator('option').count(),13);
  assert.equal(await page.getByLabel('Monster type').locator('option').filter({hasText:'Humanoid'}).count(),0);
  assert.equal(await page.getByLabel('Theme (optional)').count(),0);
  assert.equal(await page.getByLabel('Crystal rarity').locator('option').count(),6);
  await page.getByLabel('Quantity',{exact:true}).fill('3');
  await page.getByRole('button',{name:'Add to queue'}).click();
  await page.getByLabel('Monster type').selectOption('Dragon');
  await page.getByLabel('Crystal rarity').selectOption('Legendary');
  await page.getByLabel('Quantity',{exact:true}).fill('2');
  await page.getByRole('button',{name:'Add to queue'}).click();
  assert.equal(await page.locator('.mc-entry--pending').count(),5);
  assert.match(await page.locator('.mc-entry').first().locator('img.mc-crystal--image').getAttribute('src'), /aberrationcrystal\.png$/);
  await page.evaluate(()=>Math.random=()=>0);
  await page.getByRole('button',{name:'Open crystal 1',exact:true}).click();
  assert.equal(await page.locator('.mc-entry--destroyed').count(),1);
  assert.match(await page.locator('.mc-entry').first().locator('img.mc-crystal--image').getAttribute('src'), /aberrationcrystalbroken\.png$/);
  await page.evaluate(()=>Math.random=()=>0.99999);
  await page.getByRole('button',{name:'Open crystal 2',exact:true}).click();
  await page.evaluate(()=>Math.random=()=>0.5);
  await page.getByRole('button',{name:'Open crystal 4',exact:true}).click();
  assert.equal(await page.locator('.mc-entry--reward').count(),2);
  assert.match(await page.locator('.mc-entry').nth(3).locator('img.mc-crystal--image').getAttribute('src'), /dragoncrystalbroken\.png$/);
  assert.equal(await page.locator('.mc-entry--pending').count(),2);
  const saved = await page.evaluate(()=>localStorage.getItem('hoard-monster-crystals-v1'));
  const queue = JSON.parse(saved);
  assert.equal(queue[1].affinity,'neutral');
  assert.equal(queue[3].affinity,'type');
  assert(queue[3].item.types.includes('Dragon'));
  for (const entry of queue.filter(e=>e.status==='reward')) assert(CRYSTAL_ITEM_CATEGORIES.includes(entry.item.category));
  await page.reload();await page.locator('.monster-crystals-page').waitFor();
  assert.equal(await page.evaluate(()=>localStorage.getItem('hoard-monster-crystals-v1')),saved);
  assert.equal(await page.getByRole('button',{name:'Open crystal 1',exact:true}).count(),0);
  await page.evaluate(()=>location.hash='DungeonCompletion');await page.locator('.rewards-page').waitFor();
  await page.evaluate(()=>location.hash='MonsterCrystals');await page.locator('.monster-crystals-page').waitFor();
  assert.equal(await page.locator('.mc-entry--reward').count(),2);
  for(const width of [320,390,1366]) {
    await page.setViewportSize({width,height:900});
    for(const theme of ['light','dark']) {
      await page.getByRole('button',{name:theme==='light'?'Use daytime theme':'Use nighttime theme'}).click();
      await page.waitForFunction(mode => document.documentElement.dataset.theme === mode && getComputedStyle(document.querySelector('.monster-crystals-page h1')).color === (mode === 'light' ? 'rgb(35, 59, 67)' : 'rgb(228, 239, 237)'), theme);
      for(const expanded of [false,true]) {
        await page.locator('.mc-odds').evaluate((el,open)=>el.open=open,expanded);
        const scroll = await page.evaluate(()=>document.documentElement.scrollWidth);
        assert(scroll<=width+1,`${width}/${theme}/${expanded} overflow ${scroll}`);
      }
      await page.locator('.mc-odds').evaluate(el=>el.open=false);
      if(screenshots) await page.screenshot({path:`${screenshots}/crystals-${width}-${theme}.png`,fullPage:true});
    }
  }
  await page.getByRole('button',{name:'Clear opened',exact:true}).click();
  assert.equal(await page.locator('.mc-entry').count(),2);
  assert.equal(await page.locator('.mc-entry--pending').count(),2);
  await page.getByRole('button',{name:'Remove crystal 1',exact:true}).click();
  assert.equal(await page.locator('.mc-entry').count(),1);
  await page.getByLabel('Monster type').selectOption('Dragon');
  await page.getByLabel('Crystal rarity').selectOption('Legendary');
  await page.getByLabel('Quantity',{exact:true}).fill('1');
  await page.getByRole('button',{name:'Add to queue'}).click();
  await page.evaluate(()=>Math.random=()=>0.5);
  await page.getByRole('button',{name:'Open crystal 2',exact:true}).click();
  const opened = await page.evaluate(()=>JSON.parse(localStorage.getItem('hoard-monster-crystals-v1')).at(-1));
  assert.equal(opened.status,'reward');
  assert(opened.affinity==='neutral'||opened.item.types.includes('Dragon'));
  assert.deepEqual(errors,[]);
  const report={status:'passed',layoutChecks:12,viewports:[320,390,1366],themes:['light','dark'],workflows:['Player Tools navigation','mixed five-crystal queue','individual destruction and reward','Neutral and Dragon matching','reload and navigation persistence','no repeat opening','clear opened preserves pending','remove pending','13 types with no theme or Humanoid','intact and broken type artwork swap'],browserErrors:errors};
  fs.writeFileSync('docs/monster-crystals-check.json',JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
} finally {await browser.close();await server.close();for (const path of fixtures) fs.rmSync(path);}
