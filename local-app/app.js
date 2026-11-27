// SPDX-License-Identifier: AGPL-3.0-only
const element=(tag,content,parent,cls)=>{const n=document.createElement(tag);if(content!==undefined)n.textContent=content;if(cls)n.className=cls;if(parent)parent.append(n);return n;};
const button=(parent,label,fn,cls='')=>{const b=element('button',label,parent,cls);b.type='button';b.onclick=fn;return b;};
const input=(parent,label,{type='text',placeholder='',value=''}={})=>{const id='zl-'+Math.random().toString(36).slice(2);const l=element('label',label,parent);l.htmlFor=id;const n=element(type==='textarea'?'textarea':'input',undefined,parent);if(type!=='textarea')n.type=type;n.id=id;n.placeholder=placeholder;n.value=value;return n;};
const link=(parent,label,url)=>{const a=element('a',label,parent);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
const when=s=>new Date(s).toLocaleString('en-GB',{timeZone:'Asia/Jakarta',dateStyle:'medium',timeStyle:'short'})+' WIB';
const download=(name,data,type='application/json')=>{const url=URL.createObjectURL(new Blob([data],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};

export function mountApp(container,{call,signal:outerSignal}={}){
  const control=new AbortController(),signal=control.signal;outerSignal?.addEventListener('abort',()=>control.abort(),{once:true});
  container.classList.add('zl');let current='Today',state=null,lesson=null,timer=null,poll=null,draftTimer=null;
  let body,alerts,viewControl=new AbortController();const guard=fn=>async(...args)=>{try{alerts?.replaceChildren();return await fn(...args);}catch(e){showError(e.message);}};
  function showError(msg){if(signal.aborted)return;alerts?.replaceChildren();element('div',msg,alerts,'error');}
  function toast(msg){const n=element('div',msg,container,'toast');setTimeout(()=>n.remove(),3500);}
  function shell(locked=false){
    clearInterval(timer);clearInterval(poll);clearTimeout(draftTimer);viewControl.abort();viewControl=new AbortController();container.replaceChildren();
    const top=element('header',undefined,container,'top');const brand=element('div','Zulearn',top,'brand');element('small',locked?'Independent challenge':'Learn one thing well',brand);
    if(!locked){const nav=element('nav',undefined,top);nav.setAttribute('aria-label','Zulearn');for(const name of ['Today','Platforms','Challenges','Anki','Records']){const b=button(nav,name,guard(()=>navigate(name)));if(name===current)b.setAttribute('aria-current','page');}}
    alerts=element('div',undefined,container);alerts.setAttribute('aria-live','polite');body=element('main',undefined,container);
    element('footer',locked?'Zulearn tutoring and hints are locked. Keep other AI apps, host tutor views and live-chat assistance closed.':'Curriculum V1 · Start from the four basic operations · Assistance and independent evidence stay separate',container);
  }
  async function refresh(){state=await call('state',{});return state;}
  async function navigate(view='Today'){
    current=view;await refresh();if(state.locked){renderChallenge(state.challenge);return;}
    shell();if(view==='Today')await today();else if(view==='Platforms')await platforms();else if(view==='Challenges')await challenges();else if(view==='Anki')await anki();else await records();
  }
  function heading(kicker,title,note){element('div',kicker,body,'eyebrow');element('h1',title,body);if(note)element('p',note,body,'hero-note muted');}
  function fraction(parent,[n,d],label=true){
    const wrap=element('div',undefined,parent);const bar=element('div',undefined,wrap,'bar');bar.setAttribute('role','img');bar.setAttribute('aria-label',`${n} of ${d} equal parts shaded`);
    for(let k=0;k<d;k++)element('div',undefined,bar,'piece'+(k<n?' filled':''));
    if(label){const row=element('div',undefined,wrap,'row');const frac=element('span',undefined,row,'fraction');element('span',String(n),frac);element('span',String(d),frac);element('span',`${n} shaded out of ${d} equal parts`,row,'visual-label');}
  }
  async function openLesson(id){lesson=await call('lesson',{id});shell();await today(lesson);}
  async function today(given){
    if(!given && !state.today){heading('Next task','Distribution · MAT-ALG item 3',state.next_action);link(body,'Optional source explanation: Elementary Algebra §1.9','https://openstax.org/books/elementary-algebra-2e/pages/1-9-properties-of-real-numbers');return;}
    lesson=given||await call('lesson',{id:state.today.id});
    heading('Today · '+lesson.skill,lesson.title,'Learn → practise → check → next. There is no entrance exam.');
    if(state.reviews_due?.length){const due=state.reviews_due[0];const box=element('div',undefined,body,'card');element('p','A short fresh retrieval is due: '+due.title,box);button(box,'Try without hints',guard(async()=>{const c=await call('start_challenge',{checkpoint_id:due.checkpoint_id,unseen:true,rules_accepted:true});renderChallenge(c);}));element('p','Opening this changed task starts an 8-minute independent attempt; tutoring is locked until it ends.',box,'tiny muted');}
    const layout=element('div',undefined,body,'layout'),left=element('section',undefined,layout),side=element('aside',undefined,layout,'aside');
    const learn=element('article',undefined,left,'card lesson');element('div',lesson.why,learn,'callout');
    for(const p of lesson.explanation)element('p',p,learn);
    element('h2','Worked example',learn);element('div',lesson.worked_example.text,learn,'worked');for(const f of lesson.worked_example.fractions)fraction(learn,f);
    const practice=element('section',undefined,left,'card');element('h2','Try this on paper',practice);element('p',lesson.practice,practice);element('p','Discovery: '+lesson.discovery,practice,'muted');
    const taskArea=element('div',undefined,practice);button(practice,'Try one changed exercise',guard(async()=>{const t=await call('practice',{lesson_id:lesson.id});renderTask(taskArea,t);}), 'primary');
    const source=element('details',undefined,learn,'source');element('summary','Source and optional reading',source);element('p',lesson.source.section,source);link(source,'Open selected source',lesson.source.url);element('p','The explanation and exercises above are original Zulearn content; the source is supplementary.',source,'tiny muted');
    const next=element('div',undefined,side,'card');element('h3','Your next action',next);element('p','Read the example, make your own attempt, then check one changed task. If it is difficult, repair just that operation.',next,'tiny');
    button(next,'Next ready lesson',guard(()=>navigate('Today')),'btn-block');button(next,'Independent check',guard(()=>navigate('Challenges')),'btn-block');
    if(lesson.lane!=='programming')button(next,'Optional Python start',guard(()=>openLesson('CODE-01')),'btn-block');
    button(next,'Make 2 short Anki cards',guard(async()=>{const r=await call('cards',{lesson_id:lesson.id});toast(r.note);}), 'btn-block');
    const tutor=element('details',undefined,side,'card');element('summary','Ask for help',tutor);element('p','Worked explanations and hints are normal during learning. They do not count as independent evidence.',tutor,'tiny');
    const q=input(tutor,'One question',{type:'textarea',placeholder:'Which part is unclear?'}),consent=element('label',undefined,tutor,'checklist');const chk=element('input',undefined,consent);chk.type='checkbox';element('span','Send this lesson and question to my configured model. Provider usage may cost money.',consent,'tiny');
    const out=element('div',undefined,tutor,'text-output');
    if(state.model_available)button(tutor,'Ask configured AI tutor',guard(async()=>{out.textContent='Thinking…';const r=await call('tutor',{lesson_id:lesson.id,question:q.value,consent:chk.checked});out.textContent=r.text+'\n\n'+r.assistance;}),'btn-block');
    else element('p','No AI provider is configured. The integrated lesson works now; you can use ChatGPT during learning.',tutor,'tiny muted');
    button(tutor,'Copy ChatGPT lesson context',guard(async()=>{const r=await call('tutor_context',{lesson_id:lesson.id,question:q.value});await navigator.clipboard.writeText(r.prompt);toast('Lesson context copied. Any help remains assisted.');}),'btn-block');
    const map=element('details',undefined,side,'card');element('summary','Later lessons',map);for(const l of state.all_lessons)button(map,l.title,guard(()=>openLesson(l.id)),'btn-block tiny');
    if(state.parallel_ml){const ml=element('details',undefined,side,'card');element('summary','Optional parallel ML',ml);element('p',state.parallel_ml.id+' · '+state.parallel_ml.title,ml,'tiny');element('p','In Deep-Path Everything, open this concept and its first relevant unfinished activity. Learn the small operation it needs inline. All mathematics need not be finished first. Record actual activity identity in Platforms; completion stays separate from mastery.',ml,'tiny');link(ml,'Continue Deep-Path Everything',state.parallel_ml.url);}
  }
  function renderTask(parent,task){
    parent.replaceChildren();element('h3','A changed practice task',parent);element('p',task.prompt,parent);if(task.visual)fraction(parent,task.visual,false);
    const answer=input(parent,task.lesson_id==='CODE-01'?'Your source and observed output':'Your answer',{type:task.lesson_id==='CODE-01'?'textarea':'text'}),reason=input(parent,'Explain your reasoning',{type:'textarea'});const actions=element('div',undefined,parent,'actions');const result=element('div',undefined,parent);
    button(actions,'Check practice',guard(async()=>{const r=await call('submit',{task_id:task.id,answer:answer.value,reasoning:reason.value});result.replaceChildren();element('p',r.feedback,result,'result');if(r.expected!==null)element('p','Checked answer: '+r.expected,result,'tiny');button(result,'Continue to the next lesson',guard(()=>navigate('Today')),'primary');}),'primary');
    button(actions,'One hint',guard(async()=>{const r=await call('hint',{task_id:task.id});element('p',r.hint,result,'callout');}));
  }
  async function platforms(){
    heading('One backbone, complementary practice','Platform activity','Explore all 112 Deep-Path Everything concepts and relevant activities. Keep meaningful variations; merge only verified identical items.');
    const panel=element('section',undefined,body,'card');const controls=element('div',undefined,panel,'row');const q=input(controls,'Find a title or ID',{placeholder:'D001, fraction, attention…'});const type=element('select',undefined,controls);type.setAttribute('aria-label','Platform');for(const name of ['all','Deep-ML','TensorTonic','math','project','lab']){const o=element('option',name,type);o.value=name;}
    const curate=element('details',undefined,panel);element('summary','Record a newly inspected platform item privately',curate);const title=input(curate,'Actual item title'),url=input(curate,'Exact platform activity URL'),skills=input(curate,'Competency IDs (comma-separated)'),detail=input(curate,'Observed objective, constraints, memberships and identity evidence',{type:'textarea'});
    button(curate,'Save private item metadata',guard(async()=>{const r=await call('curate_item',{title:title.value,url:url.value,competencies:skills.value.split(',').map(s=>s.trim()).filter(Boolean),notes:detail.value});toast('Recorded '+r.id+'. Stored privately; no public inventory edit or mastery claim.');q.value=title.value;offset=0;await load();}));
    const result=element('div',undefined,panel);let offset=0;
    async function load(){
      const data=await call('catalog',{query:q.value,type:type.value,offset});result.replaceChildren();element('p',`${data.total} observed metadata records. Exact global overlap remains unresolved.`,result,'tiny muted');
      for(const row of data.items){const saved=state.activities.find(x=>x.item_id===row.id);const card=element('div',undefined,result,'list-card');element('h3',row.title||'Unidentified historical slot',card);const statusLine=element('p',row.id+' · '+(row.platform||'Deep-ML')+' · '+(saved?.status||row.exploration_status||row.initial_status),card,'tiny muted');if(row.total_occurrences)element('p',`${row.total_occurrences} activity occurrences; actual items are curated as inspected.`,card,'tiny');
        const url=row.item_url||row.source_url;if(url)link(card,'Open activity on its platform',url);
        const record=element('details',undefined,card);element('summary','Record activity',record);const status=element('select',undefined,record);status.setAttribute('aria-label','Activity status');for(const s of ['required','completed','complementary','duplicated','deferred','excluded','unresolved']){const o=element('option',s,status);o.value=s;}const assistance=element('select',undefined,record);assistance.setAttribute('aria-label','Assistance');for(const s of ['assisted','no AI/hints','unspecified']){const o=element('option',s,assistance);o.value=s;}
        const notes=input(record,'Result / evidence note',{type:'textarea',placeholder:'What did you actually do? No mastery is inferred from this status.'});const dup=input(record,'Duplicate of (only if inspected)'),proof=input(record,'Identity / constraints evidence for a duplicate');
        if(saved){status.value=saved.status;assistance.value=saved.assistance;notes.value=saved.notes;dup.value=saved.duplicate_of||'';proof.value=saved.identity_evidence||'';}
        button(record,'Save activity',guard(async()=>{const r=await call('activity',{item_id:row.id,status:status.value,assistance:assistance.value,notes:notes.value,duplicate_of:dup.value,identity_evidence:proof.value});await refresh();statusLine.textContent=row.id+' · '+(row.platform||'Deep-ML')+' · '+status.value;toast(r.mastery);}));
      }
      const paging=element('div',undefined,result,'actions');if(offset>0)button(paging,'Previous',guard(async()=>{offset-=60;await load();}));if(offset+60<data.total)button(paging,'Next 60',guard(async()=>{offset+=60;await load();}));
    }
    button(controls,'Search',guard(async()=>{offset=0;await load();}),'primary');await load();
  }
  async function challenges(){
    heading('Independent evidence','Challenge checkpoints','Start with a small local challenge. Archived contest tasks come later when their own readiness conditions are met. These are personal simulations.');
    const data=await call('checkpoints',{});
    const scope=element('details',undefined,body,'card');element('summary','IOAI 2025 · complete edition syllabus',scope);element('p',data.ioai.selection_policy,scope,'tiny');link(scope,'Original official syllabus PDF',data.ioai.original_pdf);const topics=element('div',undefined,scope,'table-wrap'),table=element('table',undefined,topics);const header=element('tr',undefined,table);for(const title of ['ID','Original topic','Theory / practice','Zulearn mapping'])element('th',title,header);for(const topic of data.ioai.topics){const row=element('tr',undefined,table);for(const value of [topic.id,topic.label,data.ioai.classifications[topic.classification],topic.competencies.join(', ')])element('td',value,row);}
    const grid=element('div',undefined,body,'grid');
    for(const cp of data.checkpoints){const card=element('article',undefined,grid,'card');element('div',cp.track+' · '+cp.difficulty,card,'eyebrow');element('h2',cp.title,card);element('p',cp.readiness,card,'tiny');element('p','Competencies: '+cp.competencies.join(', '),card,'tiny muted');
      const details=element('details',undefined,card);element('summary','Rules and scoring',details);element('p',cp.protocol,details,'tiny');for(const rule of cp.rules)element('p',rule,details,'tiny');element('p',cp.grading,details,'tiny');if(cp.track==='IOAI')element('p','All 64 topic rows of the 2025 syllabus are retained. Training and inference are allowed; AI assistant help is excluded by this personal simulation.',details,'tiny');
      const check=element('label',undefined,card,'checklist');const ack=element('input',undefined,check);ack.type='checkbox';element('span','I have not seen this task/solution, meet its local readiness, and accept the displayed independent rules.',check,'tiny');
      const minutes=input(card,'Minutes',{type:'number',value:String(cp.minutes)});minutes.min='1';minutes.max='720';
      button(card,'Start held-out attempt',guard(async()=>{const c=await call('start_challenge',{checkpoint_id:cp.id,unseen:ack.checked,rules_accepted:ack.checked,readiness_accepted:ack.checked,minutes:Number(minutes.value)});renderChallenge(c);}),'primary');
      if(cp.source_url)button(card,'Use as practice instead',guard(async()=>{await call('expose',{checkpoint_id:cp.id});window.open(cp.source_url,'_blank','noopener');toast('Marked exposed in practice. It cannot count as unseen.');}),'btn-block quiet');
    }
    const limits=element('p',data.policy,body,'tiny muted');limits.append(document.createTextNode(' The app cannot establish unseen status beyond its records and your attestation.'));
  }
  function renderChallenge(c){
    shell(true);heading('Independent challenge · '+c.checkpoint_id,c.checkpoint.title,'AI help, hints, ordinary lessons and solutions are locked until submission or expiry.');
    const panel=element('section',undefined,body,'card locked');const clock=element('div','',panel,'timer');
    const tick=()=>{const ms=Math.max(0,Date.parse(c.deadline)-Date.now());clock.textContent=`${Math.floor(ms/3600000).toString().padStart(2,'0')}:${Math.floor(ms/60000)%60<10?'0':''}${Math.floor(ms/60000)%60}:${Math.floor(ms/1000)%60<10?'0':''}${Math.floor(ms/1000)%60}`;};tick();timer=setInterval(tick,1000);
    element('p','Started '+when(c.started_at)+' · Deadline '+when(c.deadline),panel,'tiny muted');element('p',c.checkpoint.protocol,panel,'tiny');
    if(c.task){element('p',c.task.prompt,panel);if(c.task.visual)fraction(panel,c.task.visual,false);}
    else {element('p','Open only the original statement/assets below. Preserve every task condition; do not open reference solutions.',panel);if(c.checkpoint.tasks){for(const task of c.checkpoint.tasks)link(element('p',undefined,panel),task.id+' · '+task.title,task.source_url);}else link(panel,'Original problem source',c.checkpoint.source_url);element('p',c.checkpoint.source_locator,panel,'tiny');element('p',c.checkpoint.grading,panel,'callout');}
    const draft=input(panel,c.task&&c.task.lesson_id!=='CODE-01'?'Answer (integer, a/b, or decimal)':'Your working / source / original grader receipt',{type:'textarea',value:c.draft});if(!c.task||c.task.lesson_id==='CODE-01')draft.classList.add('code');
    const reason=input(panel,'Reasoning and post-attempt evidence',{type:'textarea',value:c.draft_reasoning||'',placeholder:'Explain your work. Record actual execution and evidence, not a score alone.'});
    const saved=element('p','Draft saves locally while the timer runs.',panel,'tiny muted');
    const save=()=>{clearTimeout(draftTimer);draftTimer=setTimeout(guard(async()=>{const r=await call('save_draft',{id:c.id,draft:draft.value,reasoning:reason.value});saved.textContent='Saved '+when(r.at);}),650);};
    draft.addEventListener('input',save,{signal});reason.addEventListener('input',save,{signal});
    const actions=element('div',undefined,panel,'actions');button(actions,'Submit and end attempt',guard(async()=>{clearTimeout(draftTimer);const r=await call('finish_challenge',{id:c.id,answer:draft.value,reasoning:reason.value});await navigate('Records');toast(r.feedback||r.review||'Attempt stored. Independent review is next.');}),'primary');
    button(actions,'Declare interruption / abandon',guard(async()=>{await call('integrity',{kind:'interruption_declared',note:'Learner ended the attempt; no independent pass claimed.'});await call('save_draft',{id:c.id,draft:draft.value,reasoning:reason.value});await call('abandon_challenge',{id:c.id,reason:'Declared interruption'});await navigate('Records');}),'danger');
    const visibility=()=>call('integrity',{kind:document.hidden?'window_hidden':'window_returned'}).catch(()=>{});document.addEventListener('visibilitychange',visibility,{signal:viewControl.signal});
    poll=setInterval(guard(async()=>{const s=await call('state',{});if(!s.locked){await navigate('Records');toast('Attempt ended or expired. Saved draft retained.');}}),12000);
    element('p','For an unassisted livestream, use this portable window, close host tutor views/other AI apps, hide chat, record continuously and disclose interruptions. Focus events are recorded observations, not proof of cheating.',body,'tiny muted');
  }
  async function anki(){
    heading('Recall the important pieces','Short Anki cards','One card tests one primary idea. Anki handles scheduling; Zulearn exports drafts and does not run a second card scheduler.');
    const panel=element('section',undefined,body,'card');element('p',`${state.cards} atomic card drafts saved. Add two from a lesson, then export.`,panel);
    button(panel,'Export Anki TSV',guard(async()=>{const r=await call('anki',{});download(r.filename,r.text,'text/tab-separated-values;charset=utf-8');}),'primary');
    element('p','In Anki: File → Import, select the TSV, use Basic notes and map Front / Back / Tags. Review the preview. Keep update-existing enabled to avoid repeated fronts. Your Anki scheduling stays in Anki.',panel,'tiny');
    for(const l of state.all_lessons)button(panel,'Add cards · '+l.title,guard(async()=>{await call('cards',{lesson_id:l.id});await navigate('Anki');}),'btn-block');
  }
  async function records(){
    heading('Private records','Evidence, backup and recovery','The app resumes from your saved state. Learning records and provider credentials are never part of the public curriculum.');
    const panel=element('section',undefined,body,'card');element('h2','Backup / restore',panel);button(panel,'Download private backup',guard(async()=>{const r=await call('backup',{});download('zulearn-backup-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(r,null,2));}),'primary');
    const file=input(panel,'Restore a Zulearn backup',{type:'file'});file.accept='.json';const ack=element('label',undefined,panel,'checklist'),check=element('input',undefined,ack);check.type='checkbox';element('span','Replace my local learning records from this backup. A safety copy is created first.',ack,'tiny');
    button(panel,'Restore selected backup',guard(async()=>{if(!check.checked||!file.files[0])throw Error('Select a backup and confirm replacement.');if(file.files[0].size>8*1024*1024)throw Error('Backup exceeds 8 MiB.');const backup=JSON.parse(await file.files[0].text());await call('restore',{backup});await navigate('Today');toast('Learning state restored.');}));
    const ref=element('details',undefined,panel);element('summary','Curriculum and exact competencies',ref);button(ref,'Load registry',guard(async()=>{const r=await call('curriculum',{});const area=element('div',undefined,ref,'table-wrap');const table=element('table',undefined,area);const th=element('tr',undefined,table);for(const t of ['ID','Competency','Entry operations','Conditional depth'])element('th',t,th);for(const c of r.curriculum.competencies){const tr=element('tr',undefined,table);for(const value of [c.id,c.title,c.entry_prerequisites.join(', ')||'none',c.conditional_depth])element('td',value,tr);}element('p','Only F01.basic_ops is assumed. The graph is navigation; depth dependencies are conditional.',ref,'tiny');}));
    const attempts=element('section',undefined,body,'card');element('h2','Challenge attempts',attempts);if(!state.recent.length)element('p','No attempts recorded yet.',attempts,'empty');for(const c of state.recent){const row=element('div',undefined,attempts,'list-card');element('h3',c.checkpoint_id+' · '+c.status,row);element('p',when(c.started_at),row,'tiny muted');button(row,'Inspect result and integrity notes',guard(async()=>{const r=await call('result',{id:c.id});const p=element('pre',JSON.stringify({submission:r.submission,reasoning:r.draft_reasoning,result:r.result,events:r.events},null,2),row);p.tabIndex=0;}));
      const review=element('details',undefined,row);element('summary','Record original grader / independent score',review);const reviewer=input(review,'Reviewer or grader'),metric=input(review,'Original metric / rubric'),value=input(review,'Reported result'),receipt=input(review,'Grader receipt, artifact hash or review record'),notes=input(review,'Evidence and protocol deviations',{type:'textarea'});
      button(review,'Save reported score',guard(async()=>{const r=await call('score_challenge',{id:c.id,reviewer:reviewer.value,metric:metric.value,value:value.value,receipt:receipt.value,notes:notes.value});toast(r.verification);}));
    }
    const evidence=element('section',undefined,body,'card');element('h2','Independent evidence and review',evidence);if(!state.evidence.length)element('p','No performance is assumed beyond the four basic operations.',evidence,'empty');
    for(const e of state.evidence){const row=element('div',undefined,evidence,'list-card');element('h3',e.skill_id+' · '+e.numeric_result,row);element('p',(e.independent?'Independent attempt':'Assisted/practice')+' · explanation review: '+e.review_status,row,'tiny muted');element('p',e.reasoning||'No written reasoning saved.',row,'tiny');const d=element('details',undefined,row);element('summary','Record a human review',d);const reviewer=input(d,'Reviewer'),notes=input(d,'Rubric-based review / evidence',{type:'textarea'}),verdict=element('select',undefined,d);verdict.setAttribute('aria-label','Review verdict');for(const v of ['sound','needs_repair','unverified']){const o=element('option',v,verdict);o.value=v;}button(d,'Save review',guard(async()=>{await call('review',{evidence_id:e.id,reviewer:reviewer.value,notes:notes.value,verdict:verdict.value});toast('Review saved. No whole-module mastery is inferred.');}));}
  }
  signal.addEventListener('abort',()=>{clearInterval(timer);clearInterval(poll);clearTimeout(draftTimer);viewControl.abort();container.replaceChildren();},{once:true});
  guard(()=>navigate())();
  return ()=>control.abort();
}

if(typeof document!=='undefined'&&document.querySelector('meta[name=zulearn-token]')){
  const token=document.querySelector('meta[name=zulearn-token]').content;
  const call=async(name,input={})=>{const response=await fetch('/api/'+name,{method:'POST',headers:{'Content-Type':'application/json','X-Zulearn-Token':token},body:JSON.stringify(input)});const result=await response.json();if(!response.ok)throw Error(result.error||'Request failed');return result;};
  mountApp(document.getElementById('app'),{call});
}
