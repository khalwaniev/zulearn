// SPDX-License-Identifier: AGPL-3.0-only
// Optional real-host integration proof; uses a disposable profile, never learner credentials.
'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict'),{spawn}=require('node:child_process');
const {install}=require('../../scripts/install-learnharness-plugin.cjs');
const wait=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  const upstream=path.resolve(process.env.ZULEARN_LEARNHARNESS_DIR||'');if(!process.env.ZULEARN_LEARNHARNESS_DIR||!fs.existsSync(path.join(upstream,'node_modules/next/dist/bin/next')))throw Error('Set ZULEARN_LEARNHARNESS_DIR to the installed pinned LearnHarness checkout.');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zulearn-host-')),data=path.join(dir,'data');install(path.join(data,'plugins','zulearn-local'));
  const port=Number(process.env.ZULEARN_HOST_TEST_PORT||38333),url='http://127.0.0.1:'+port;
  const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','-H','127.0.0.1','-p',String(port)],{cwd:upstream,env:{...process.env,LH_DATA_DIR:data,LH_AUTH_FILE:path.join(dir,'auth.json'),NEXT_TELEMETRY_DISABLED:'1'},stdio:['ignore','pipe','pipe']});let log='';child.stdout.on('data',b=>log+=b);child.stderr.on('data',b=>log+=b);let browser;
  const outputDir=process.env.ZULEARN_SCREENSHOT_DIR;
  async function request(route,method,body){const r=await fetch(url+route,{method,headers:{'Content-Type':'application/json',Origin:url},body:body===undefined?undefined:JSON.stringify(body)});const raw=await r.text();assert.equal(r.status,200,route+': '+raw.slice(0,800));return JSON.parse(raw);}
  const rpc=async(name,input={})=>(await request('/api/plugins/zulearn-local/call','POST',{operation:'zulearn',input:{name,input}})).result;
  try {
    let ready=false;for(let i=0;i<80;i++){if(child.exitCode!==null)throw Error('Host exited before startup: '+log.slice(-1500));try{const r=await fetch(url,{signal:AbortSignal.timeout(2000)});if(r.ok){ready=true;break;}}catch{}await wait(500);}assert(ready,'Host did not start');
    const listing=await request('/api/plugins','GET');const found=listing.plugins.find(x=>x.id==='zulearn-local');assert(found);assert.equal(found.enabled,false);
    await request('/api/plugins/zulearn-local','PUT',{enabled:true});let s=await rpc('state');assert.equal(s.today.id,'FRA-01');
    for(const f of ['main.js','assets/app.js','styles.css']){const r=await fetch(url+'/api/plugins/zulearn-local/assets/'+f);assert.equal(r.status,200,f);}
    const lesson=await rpc('lesson',{id:'FRA-01'});assert.match(lesson.title,/fraction/);const task=await rpc('practice',{lesson_id:'FRA-01'});const r=await rpc('submit',{task_id:task.id,answer:task.visual.join('/'),reasoning:'Synthetic host smoke: equal whole and equal pieces.'});assert(r.correct);assert(!r.independent);
    const c=await rpc('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});const forbidden=await fetch(url+'/api/plugins/zulearn-local/call',{method:'POST',headers:{'Content-Type':'application/json',Origin:url},body:JSON.stringify({operation:'zulearn',input:{name:'hint',input:{task_id:task.id}}})});assert(!forbidden.ok);await rpc('abandon_challenge',{id:c.id,reason:'Synthetic smoke complete'});
    const backup=await rpc('backup');assert.equal(backup.format,'zulearn-backup-v1');assert(fs.existsSync(path.join(data,'plugins/zulearn-local/data/zulearn.sqlite')));
    if(process.env.ZULEARN_CHROMIUM){const {chromium}=require(process.env.ZULEARN_PLAYWRIGHT||'playwright');browser=await chromium.launch({headless:true,executablePath:process.env.ZULEARN_CHROMIUM,args:['--no-sandbox']});const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url);await page.getByRole('button',{name:'Continue Zulearn',exact:true}).click();await page.getByRole('heading',{name:'Adding and subtracting fractions',exact:true}).waitFor();assert.equal(await page.locator('.zl').getByRole('img').count(),3);if(outputDir){fs.mkdirSync(outputDir,{recursive:true});await page.screenshot({path:path.join(outputDir,'learnharness-plugin.png'),fullPage:true});}assert.deepEqual(errors,[]);await browser.close();browser=null;}
    await request('/api/plugins/zulearn-local','PUT',{enabled:false});assert(fs.existsSync(path.join(data,'plugins/zulearn-local/data/zulearn.sqlite')));await request('/api/plugins/zulearn-local','PUT',{enabled:true});s=await rpc('state');assert.equal(s.today.id,'FRA-02');
    console.log('PASS actual LearnHarness host: disabled discovery → enable → backend state/lesson/practice → held-out assistance lock → backup → optional UI view → disable/re-enable persistence. No model called.');
  } finally {if(browser)await browser.close();child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),wait(3000)]);if(child.exitCode===null)child.kill('SIGKILL');if(outputDir){fs.mkdirSync(outputDir,{recursive:true});fs.writeFileSync(path.join(outputDir,'learnharness-host-smoke.log'),log);}fs.rmSync(dir,{recursive:true,force:true});}
})().catch(e=>{console.error(e);process.exitCode=1;});
