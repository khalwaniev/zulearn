// SPDX-License-Identifier: AGPL-3.0-only
'use strict';
const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const os=require('node:os');const path=require('node:path');const crypto=require('node:crypto');
const {createEngine,rational,equal}=require('../engine.cjs');const {createServer,providerFromEnvironment}=require('../server.cjs');const {install}=require('../../scripts/install-learnharness-plugin.cjs');
const root=path.resolve(__dirname,'../..');
function fixture(t,options={}){const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zulearn-test-'));const engine=createEngine({dataDirectory:dir,...options});t.after(()=>{try{engine.close();}catch{}fs.rmSync(dir,{recursive:true,force:true});});return {dir,engine};}
const answer=t=>t.visual?`${t.visual[0]}/${t.visual[1]}`:null;
test('exact rational comparisons handle equivalent values, signs, decimal scale and invalid input',()=>{
  assert(equal('2/4','0.50'));assert(equal('−4/2','-2'));assert.equal(rational('-0.00').toString(),'0');
  assert(!equal('1/3','0.333'));for(const s of ['1/0','1+2','process.exit()','NaN','1e300','<script>'])assert.throws(()=>rational(s));
});
test('new learner starts fractions; no later arithmetic or programming mastery is fabricated',async t=>{
  const {engine}=fixture(t);const s=await engine.call('state');assert.equal(s.today.id,'FRA-01');assert.deepEqual(s.skills.map(x=>x.skill_id),['F01.basic_ops']);assert.equal(s.skills[0].state,'assumed_self_report');assert.equal(s.evidence.length,0);
  const l=await engine.call('lesson',{id:s.today.id});assert(l.explanation.join(' ').includes('denominator'));assert(!l.explanation.join(' ').includes('take this diagnostic'));
});
test('assisted practice can advance instruction without being counted as independent mastery',async t=>{
  const {engine}=fixture(t);await engine.call('lesson',{id:'FRA-01'});const task=await engine.call('practice',{lesson_id:'FRA-01'});
  assert(!Object.hasOwn(task,'expected'));await engine.call('hint',{task_id:task.id});const r=await engine.call('submit',{task_id:task.id,answer:answer(task),reasoning:'Equal-sized pieces; the denominator counts the whole.'});assert(r.correct);assert.equal(r.independent,false);
  const s=await engine.call('state');assert.equal(s.today.id,'FRA-02');assert.equal(s.skills.find(x=>x.skill_id==='F01.fraction_meaning').state,'assisted');assert.equal(s.evidence[0].independent,0);
  await assert.rejects(engine.call('submit',{task_id:task.id,answer:answer(task)}),/already submitted/);
});
test('specific fraction reversal receives a bounded misconception hypothesis and local repair',async t=>{
  const {engine}=fixture(t);await engine.call('lesson',{id:'FRA-01'});const x=await engine.call('practice',{lesson_id:'FRA-01'});const r=await engine.call('submit',{task_id:x.id,answer:`${x.visual[1]}/${x.visual[0]}`,reasoning:'I reversed them.'});assert.equal(r.correct,false);assert.match(r.feedback,/Possible numerator/);assert.equal((await engine.call('state')).today.id,'FRA-01');
});
test('held-out variant is fresh; lock is server-side and survives a restart with exact draft',async t=>{
  const {engine,dir}=fixture(t);await engine.call('lesson',{id:'FRA-01'});const p=await engine.call('practice',{lesson_id:'FRA-01'});
  const c=await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});assert.notDeepEqual(c.task.visual,p.visual);
  for(const op of ['tutor','hint','lesson','backup','restore','catalog','anki','tutor_context','curriculum'])await assert.rejects(engine.call(op,{}),e=>e.status===423);
  const draft='  unfinished working\n  preserved whitespace\n';await engine.call('save_draft',{id:c.id,draft,reasoning:'Preserved reasoning before submission.'});engine.close();
  const restarted=createEngine({dataDirectory:dir});t.after(()=>restarted.close());const s=await restarted.call('state');assert(s.locked);assert.equal(s.challenge.id,c.id);assert.equal(s.challenge.draft,draft);assert.equal(s.challenge.draft_reasoning,'Preserved reasoning before submission.');
  const result=await restarted.call('finish_challenge',{id:c.id,answer:answer(c.task),reasoning:'I counted equal pieces of the same reference whole.'});assert(result.correct);assert(result.independent);assert.equal((await restarted.call('state')).locked,false);
  const evidence=(await restarted.call('state')).evidence[0];assert.equal(evidence.independent,1);assert.equal(evidence.review_status,'pending');
});
test('local challenge templates repeat only with fresh content; archived exposure cannot be relabelled unseen',async t=>{
  const {engine}=fixture(t);await engine.call('lesson',{id:'FRA-01'});let c=await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});const first=c.task;await engine.call('abandon_challenge',{id:c.id});c=await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});assert.notDeepEqual(c.task.visual,first.visual);await engine.call('abandon_challenge',{id:c.id});
  await engine.call('expose',{checkpoint_id:'IMO-1959-P1'});await assert.rejects(engine.call('start_challenge',{checkpoint_id:'IMO-1959-P1',unseen:true,rules_accepted:true,readiness_accepted:true}),/already exposed/);
});
test('server deadlines expire attempts and preserve drafts without inventing scores',async t=>{
  let now=Date.now();const {engine}=fixture(t,{clock:()=>now});await engine.call('lesson',{id:'FRA-01'});const c=await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true,minutes:1});await engine.call('save_draft',{id:c.id,draft:'My partial work'});now+=61000;assert.equal((await engine.call('state')).locked,false);const r=await engine.call('result',{id:c.id});assert.equal(r.status,'expired');assert.equal(r.submission,'My partial work');assert.equal(r.result.automatic_score,null);
});
test('delayed fresh retrieval is narrow retained evidence, not Anki scheduling or whole-topic mastery',async t=>{
  let now=Date.now();const {engine}=fixture(t,{clock:()=>now});await engine.call('lesson',{id:'FRA-01'});let c=await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});await engine.call('finish_challenge',{id:c.id,answer:answer(c.task),reasoning:'Equal parts count.'});now+=86400001;const s=await engine.call('state');assert(s.reviews_due.some(x=>x.lesson_id==='FRA-01'));c=await engine.call('start_challenge',{checkpoint_id:'RETRIEVE-FRA-01',unseen:true,rules_accepted:true});await engine.call('finish_challenge',{id:c.id,answer:answer(c.task),reasoning:'A fresh independent count.'});const skill=(await engine.call('state')).skills.find(x=>x.skill_id==='F01.fraction_meaning');assert.equal(skill.state,'retained');assert.match(skill.scope,/calculation/);
});
test('backup/restore preserves next action, evidence and cards; rejects corruption and unknown schema atomically',async t=>{
  const {engine}=fixture(t);await engine.call('lesson',{id:'FRA-01'});const task=await engine.call('practice',{lesson_id:'FRA-01'});await engine.call('submit',{task_id:task.id,answer:answer(task),reasoning:'Counted parts.'});await engine.call('cards',{lesson_id:'FRA-01'});const saved=await engine.call('backup');
  const {engine:other}=fixture(t);const before=await other.call('state');const corrupt=structuredClone(saved);corrupt.payload.schema_version=2;await assert.rejects(other.call('restore',{backup:corrupt}),/checksum/);assert.deepEqual((await other.call('state')).skills,before.skills);
  await other.call('restore',{backup:saved});const restored=await other.call('state');assert.equal(restored.today.id,'FRA-02');assert.equal(restored.cards,2);assert.equal(restored.evidence.length,1);
  const future=structuredClone(saved);future.payload.schema_version=50;future.sha256=crypto.createHash('sha256').update(JSON.stringify(future.payload)).digest('hex');await assert.rejects(other.call('restore',{backup:future}),/schema/);
});
test('Anki export is atomic cards, UTF-8 TSV with safe fields and stable deduplication',async t=>{
  const {engine}=fixture(t);await engine.call('cards',{lesson_id:'FRA-01'});await engine.call('cards',{lesson_id:'FRA-01'});const a=await engine.call('anki');const rows=a.text.split('\n').filter(x=>x&&!x.startsWith('#'));assert.equal(rows.length,2);assert(rows.every(x=>x.split('\t').length===3));assert.match(a.text,/#html:false/);assert(rows.every(x=>x.split('\t')[0].length<180));assert.equal((await engine.call('state')).cards,2);
});
test('platform activity never upgrades mastery; duplicate elimination requires explicit identity evidence',async t=>{
  const {engine}=fixture(t);assert.equal((await engine.call('state')).parallel_ml.id,'D001');await engine.call('activity',{item_id:'D001',status:'completed',assistance:'assisted',notes:'Completed a guided activity.'});assert.equal((await engine.call('state')).skills.length,1);assert.equal((await engine.call('state')).parallel_ml.id,'D002');
  await assert.rejects(engine.call('activity',{item_id:'D001',status:'duplicated',duplicate_of:'D002',identity_evidence:'same topic'}),/identity/);
  await engine.call('activity',{item_id:'D001',status:'duplicated',duplicate_of:'D002',identity_evidence:'Synthetic fixture: same explicit canonical item ID and inspected constraints/oracle.'});assert.equal((await engine.call('state')).activities[0].status,'duplicated');
});
test('progressive private curation survives backup/restore without inventing public item identities or competence',async t=>{
  const {engine}=fixture(t);const item=await engine.call('curate_item',{title:'Synthetic test metadata',url:'https://www.deep-ml.com/problems/synthetic-test-only',competencies:['C01'],notes:'Fixture only; not a real platform item.'});
  assert(item.private);assert.match(item.id,/^local:/);await engine.call('activity',{item_id:item.id,status:'unresolved',assistance:'unspecified'});
  const saved=await engine.call('backup');const {engine:other}=fixture(t);await other.call('restore',{backup:saved});
  const found=await other.call('catalog',{query:'Synthetic test metadata'});assert.equal(found.items.length,1);assert.equal(found.items[0].platform_item_id,null);assert.equal((await other.call('state')).skills.length,1);
  await assert.rejects(engine.call('curate_item',{title:'Bad URL',url:'https://www.deep-ml.com/test?api_key=private'}),/credential/);
});
test('original contest results remain ungraded until a reported external review, never an app-certified medal',async t=>{
  const {engine}=fixture(t);const c=await engine.call('start_challenge',{checkpoint_id:'IOAI-2025-DAY1',unseen:true,rules_accepted:true,readiness_accepted:true});assert.equal(c.checkpoint.tasks.length,3);assert.match(c.checkpoint.protocol,/stricter no-AI/);assert.equal(c.checkpoint.minutes,360);
  const result=await engine.call('finish_challenge',{id:c.id,answer:'Synthetic source/working only',reasoning:'The original hidden evaluator was unavailable.'});assert.equal(result.automatic_score,null);
  await engine.call('score_challenge',{id:c.id,reviewer:'Synthetic test reviewer',metric:'Original metric',value:'not available',receipt:'fixture-review-record',notes:'The sample was inspected, but original hidden tests are unavailable.'});const stored=await engine.call('result',{id:c.id});assert.match(stored.result.external_review.verification,/not independently verified/);
});
test('AI adapter receives bounded lesson context and cannot disclose results after a challenge starts',async t=>{
  let release,seen;const pending=new Promise(resolve=>release=resolve);const {engine}=fixture(t,{modelAdapter:async req=>{seen=req;await pending;return 'One guided question.';}});await engine.call('lesson',{id:'FRA-01'});const req=engine.call('tutor',{lesson_id:'FRA-01',question:'Why equal parts?',consent:true});
  assert.equal(seen.maxTokens,500);assert.match(seen.system,/Only basic addition/);await engine.call('start_challenge',{checkpoint_id:'ZC-FRA-01',unseen:true,rules_accepted:true});release();await assert.rejects(req,e=>e.status===423);
});
test('HTTP startup, local token, origin checks and asset allowlist work through a real listening server',async t=>{
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zl-http-'));const app=createServer({dataDirectory:dir,port:0,modelAdapter:null});await app.listen();t.after(async()=>{await app.close();fs.rmSync(dir,{recursive:true,force:true});});const base='http://127.0.0.1:'+app.server.address().port;
  const page=await fetch(base);assert.equal(page.status,200);assert.match(await page.text(),/zulearn-token/);assert.equal((await fetch(base+'/engine.cjs')).status,404);
  assert.equal((await fetch(base+'/api/state',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).status,403);
  const headers={'Content-Type':'application/json','X-Zulearn-Token':app.token};const r=await fetch(base+'/api/state',{method:'POST',headers,body:'{}'});assert.equal(r.status,200);assert.equal((await r.json()).today.id,'FRA-01');
  assert.equal((await fetch(base+'/api/state',{method:'POST',headers:{...headers,Origin:'https://evil.invalid'},body:'{}'})).status,403);
});
test('optional custom model transport is verified with a local fake endpoint, not a paid/live-model claim',async t=>{
  let request;const server=require('node:http').createServer(async(req,res)=>{const chunks=[];for await(const c of req)chunks.push(c);request=JSON.parse(Buffer.concat(chunks));res.setHeader('Content-Type','application/json');res.end(JSON.stringify({choices:[{finish_reason:'stop',message:{content:'A verified fake response.'}}]}));});await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));
  const adapter=providerFromEnvironment({ZULEARN_AI_BASE_URL:'http://127.0.0.1:'+server.address().port+'/v1',ZULEARN_AI_MODEL:'fake-fixture'});assert.equal(await adapter({system:'Lesson',messages:[{role:'user',text:'Question'}],maxTokens:500}),'A verified fake response.');assert.equal(request.max_tokens,500);assert.equal(request.model,'fake-fixture');assert.equal(providerFromEnvironment({}),null);
});
test('plugin installation preserves sibling private data and the adapter uses the public LearnHarness contract',async t=>{
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zl-plugin-'));const target=path.join(tmp,'zulearn-local');fs.mkdirSync(path.join(target,'data'),{recursive:true});fs.writeFileSync(path.join(target,'data','keep.txt'),'private fixture');const dist=install(target);t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));
  assert.equal(fs.readFileSync(path.join(target,'data','keep.txt'),'utf8'),'private fixture');const handlers={},cleanups=[];let request;
  const ctx={directory:dist,dataDirectory:path.join(target,'data'),signal:new AbortController().signal,handle:(n,fn)=>handlers[n]=fn,cleanup:fn=>cleanups.push(fn),inference:{catalog:async()=>({defaults:{model:{provider:'fixture',id:'fake'}}}),complete:async r=>{request=r;return {stopReason:'stop',content:[{type:'text',text:'One guided question.'}]};}}};
  require(path.join(dist,'backend.cjs')).activate(ctx);t.after(()=>cleanups.forEach(fn=>fn()));
  const s=await handlers.zulearn({name:'state',input:{}});assert.equal(s.today.id,'FRA-01');await handlers.zulearn({name:'tutor',input:{lesson_id:'FRA-01',question:'Explain equal parts',consent:true}});assert.equal(request.purpose,'user');assert.equal(request.options.maxTokens,500);assert.equal(request.model.id,'fake');assert(request.context.systemPrompt.includes('Zulearn tutor'));
});
