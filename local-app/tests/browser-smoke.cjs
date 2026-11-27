// SPDX-License-Identifier: AGPL-3.0-only
// Optional developer verification. The learning app itself has no Playwright dependency.
'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.ZULEARN_PLAYWRIGHT||'playwright');
const {createServer}=require('../server.cjs');
(async()=>{
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zulearn-browser-'));let app=createServer({dataDirectory:dir,port:0,modelAdapter:null});await app.listen();let browser;
  try {
    browser=await chromium.launch({headless:true,args:['--no-sandbox'],executablePath:process.env.ZULEARN_CHROMIUM||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined)});const page=await browser.newPage({viewport:{width:1360,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const url='http://127.0.0.1:'+app.server.address().port;await page.goto(url);
    await page.getByRole('heading',{name:'What a fraction means',exact:true}).waitFor();assert.equal(await page.getByRole('img').count(),2);
    if(process.env.ZULEARN_SCREENSHOT_DIR){fs.mkdirSync(process.env.ZULEARN_SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.ZULEARN_SCREENSHOT_DIR,'first-fraction-lesson.png'),fullPage:true});}
    await page.getByRole('button',{name:'Try one changed exercise'}).click();await page.getByRole('heading',{name:'A changed practice task',exact:true}).waitFor();const visual=page.getByRole('img').last();const label=await visual.getAttribute('aria-label');const [,n,d]=label.match(/(\d+) of (\d+)/);
    await page.getByLabel('Your answer',{exact:true}).fill(`${n}/${d}`);await page.getByLabel('Explain your reasoning',{exact:true}).fill('I counted equal-sized pieces of the same whole.');await page.getByRole('button',{name:'Check practice',exact:true}).click();await page.getByText('Calculation matches.',{exact:false}).waitFor();
    await page.getByRole('button',{name:'Continue to the next lesson',exact:true}).click();await page.getByRole('heading',{name:'Adding and subtracting fractions',exact:true}).waitFor();
    await page.getByRole('button',{name:'Challenges',exact:true}).click();const card=page.getByRole('article').filter({has:page.getByRole('heading',{name:'Fresh equal-parts challenge',exact:true})});await card.getByRole('checkbox').check();await card.getByRole('button',{name:'Start held-out attempt',exact:true}).click();
    await page.locator('section.locked').waitFor();await page.getByRole('heading',{name:'Fresh equal-parts challenge',exact:true}).waitFor();assert.equal(await page.getByRole('button',{name:'Today',exact:true}).count(),0);assert.equal(await page.getByRole('button',{name:'One hint',exact:true}).count(),0);
    const v=await page.getByRole('img').getAttribute('aria-label');const [,hn,hd]=v.match(/(\d+) of (\d+)/);const task=await page.evaluate(async()=>{const token=document.querySelector('meta[name=zulearn-token]').content;const r=await fetch('/api/hint',{method:'POST',headers:{'Content-Type':'application/json','X-Zulearn-Token':token},body:'{}'});return {status:r.status,body:await r.json()};});assert.equal(task.status,423);
    await page.getByLabel('Answer (integer, a/b, or decimal)',{exact:true}).fill(`${hn}/${hd}`);await page.waitForTimeout(800);await page.reload();await page.getByRole('heading',{name:'Fresh equal-parts challenge',exact:true}).waitFor();assert.equal(await page.getByLabel('Answer (integer, a/b, or decimal)',{exact:true}).inputValue(),`${hn}/${hd}`);
    await page.getByLabel('Reasoning and post-attempt evidence').fill('The denominator counts every equal piece.');await page.getByRole('button',{name:'Submit and end attempt',exact:true}).click();await page.getByRole('heading',{name:'Evidence, backup and recovery',exact:true}).waitFor();
    const backupDownload=page.waitForEvent('download');await page.getByRole('button',{name:'Download private backup',exact:true}).click();const backup=await backupDownload;const backupFile=path.join(dir,'browser-backup.json');await backup.saveAs(backupFile);assert.equal(JSON.parse(fs.readFileSync(backupFile)).format,'zulearn-backup-v1');
    await page.getByLabel('Restore a Zulearn backup').setInputFiles(backupFile);await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Restore selected backup',exact:true}).click();await page.getByRole('heading',{name:'Adding and subtracting fractions',exact:true}).waitFor();
    await page.getByRole('button',{name:'Make 2 short Anki cards',exact:true}).click();await page.getByRole('button',{name:'Anki',exact:true}).click();const ankiDownload=page.waitForEvent('download');await page.getByRole('button',{name:'Export Anki TSV',exact:true}).click();const ad=await ankiDownload;const af=path.join(dir,'anki.tsv');await ad.saveAs(af);assert.match(fs.readFileSync(af,'utf8'),/#separator:Tab/);
    await page.getByRole('button',{name:'Today',exact:true}).click();await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2));
    if(process.env.ZULEARN_SCREENSHOT_DIR)await page.screenshot({path:path.join(process.env.ZULEARN_SCREENSHOT_DIR,'mobile-learning.png'),fullPage:true});
    assert.deepEqual(errors,[]);await browser.close();browser=null;await app.close();app=null;
    const resumed=createServer({dataDirectory:dir,port:0,modelAdapter:null});await resumed.listen();assert.equal((await resumed.engine.call('state')).today.id,'FRA-02');await resumed.close();
    console.log('PASS browser: fraction lesson, practice, next action, held-out lock, reload/draft, submission, backup/restore, Anki export, mobile layout, restart persistence; no page errors.');
  }finally{if(browser)await browser.close();if(app)await app.close();fs.rmSync(dir,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
