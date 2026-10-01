import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
const wallpapers=['wallpaperday.png','wallpaperdaymobile.png','wallpapernight.png','wallpapernightmobile.png'];
function publicFiles(dir,base=dir) {return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?publicFiles(path.join(dir,entry.name),base):[path.relative(base,path.join(dir,entry.name)).replaceAll('\\','/')]);}
// Serve test image fixtures without adding or changing the user's wallpaper files.
const server=await createServer({server:{host:'127.0.0.1',port:5175,strictPort:true},define:{__PUBLIC_ART__:JSON.stringify([...publicFiles('public'),...wallpapers.map(name=>'assets/'+name)])},plugins:[{name:'wallpaper-test-fixtures',configureServer(server){server.middlewares.use((req,res,next)=>{if(wallpapers.some(name=>req.url==='/assets/'+name)){res.setHeader('Content-Type','image/png');res.end(fs.readFileSync('public/d20favicon.png'));}else next();});}}]});
await server.listen();const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try {
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'no-preference'});page.setDefaultTimeout(10000);
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>localStorage.setItem('hoard-reward-filters',JSON.stringify({categories:['Axe'],types:[],themes:[],rarities:[]})));
 await page.goto('http://127.0.0.1:5175');await page.locator('.rewards-page').waitFor();
 let reveals=0;
 for(const width of [390,1366]) {
  await page.setViewportSize({width,height:900});
  for(const dark of [false,true]) {
   await page.getByRole('button',{name:dark?'Use nighttime theme':'Use daytime theme'}).click();
   const expected=`wallpaper${dark?'night':'day'}${width<=720?'mobile':''}.png`;
   await page.waitForFunction(name=>document.querySelector('.app-wallpaper img')?.currentSrc.endsWith(name),expected);
  }
  // The fixtures only verify source selection, not visual appearance of missing wallpapers.
  await page.addStyleTag({content:'.app-wallpaper { display:none!important; }'});
  for(const index of [0,1,2]) {
   await page.getByRole('button',{name:'Draw reward cards'}).click();
   assert.equal(await page.locator('.reward-card').count(),3);
   assert.equal(await page.getByText(/^Choose [123]$/).count(),0);
   const before=await page.locator('.reward-card').evaluateAll(cards=>cards.map(card=>card.getBoundingClientRect().x));
   await page.getByRole('button',{name:`Reveal reward card ${index+1}`}).click();
   assert.equal(await page.locator('.reward-card__content').count(),0);
   await page.waitForTimeout(730);
   assert.equal(await page.locator('.reward-card__content').count(),0,'text should wait until the flip finishes');
   await page.locator('.reward-card.is-revealed .reward-card__content').waitFor();
   await page.waitForTimeout(250);
   const geometry=await page.evaluate(()=>{
     const tray=document.querySelector('.reward-cards').getBoundingClientRect();
     const face=document.querySelector('.is-selected .reward-card__motion').getBoundingClientRect();
     return {centerError:Math.abs(face.x+face.width/2-(tray.x+tray.width/2)),width:document.documentElement.scrollWidth,dockTop:document.querySelector(".rewards-dock").getBoundingClientRect().top,faceBottom:face.bottom,positions:[...document.querySelectorAll('.reward-card')].map(card=>card.getBoundingClientRect().x)};
   });
   assert(geometry.centerError<1,`selected card not centered: ${geometry.centerError}`);assert(geometry.width<=width);assert(geometry.faceBottom<geometry.dockTop,"bottom controls overlap card");assert.deepEqual(geometry.positions,before);
   assert.equal(await page.locator('.reward-card.is-dismissed').count(),2);assert.equal(await page.locator('.reward-card .item-tags').count(),0);
   assert.match(await page.locator('.reward-card__watermark').first().getAttribute('src'),/axe/);
   assert.equal(await page.locator('.is-revealed .reward-card__category').innerText(),'Axe');
   if(process.env.QA_SCREENSHOTS && index===0) {fs.mkdirSync(process.env.QA_SCREENSHOTS,{recursive:true});await page.screenshot({path:`${process.env.QA_SCREENSHOTS}/cards-${width}.png`,fullPage:true});}
   reveals++;
  }
 }
 // Clear during a reveal must cancel the result and allow a fresh selection.
 await page.getByRole('button',{name:'Draw reward cards'}).click();await page.getByRole('button',{name:'Reveal reward card 1'}).click();await page.getByRole('button',{name:'Clear cards',exact:true}).click();await page.waitForTimeout(1500);assert.equal(await page.locator('.reward-card').count(),0);
 await page.emulateMedia({reducedMotion:'reduce'});await page.getByRole('button',{name:'Draw reward cards'}).click();await page.getByRole('button',{name:'Reveal reward card 3'}).click();await page.locator('.is-revealed').waitFor();assert.equal(await page.locator('.reward-card__content').count(),1);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({status:'passed',animatedReveals:reveals,wallpaperSources:4,checks:['delayed results','center positioning','preserved slots','no labels or tags','axe watermark','no overflow','cancel during reveal','reduced motion'],browserErrors:errors},null,2));
} finally {await browser.close();await server.close();}
