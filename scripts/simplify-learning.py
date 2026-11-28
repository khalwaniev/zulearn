#!/usr/bin/env python3
"""Rebuild the learner-facing projection; never edit frozen scientific sources."""
import collections
import hashlib
import json
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = '0dd9efc2960ece62712b2df753663197ee7934ac'

def read(path):
    return json.loads((ROOT / path).read_text())

def write(path, value):
    (ROOT / path).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')

def local_id(prefix, text):
    return 'UNIT-' + prefix + '-' + hashlib.sha256(text.encode()).hexdigest()[:12].upper()

def rebuild():
    # Always regenerate from the reviewed baseline, so repeated runs are identical.
    a = json.loads(subprocess.check_output(['git', 'show', BASE + ':docs/activities.json'], cwd=ROOT))
    old = a['hierarchy']
    inv = read('data/catalogue/inventory.json')['items']
    deep = read('data/deep_path.json')['concepts']
    aggregate = {x['id']: x for x in a['aggregates']}
    platforms = []
    branches = []

    def platform(name, note, cats):
        p = {'name': name, 'note': note, 'categories': []}
        platforms.append(p)
        for key, title, url in cats:
            p['categories'].append({'id': key, 'title': title, 'url': url, 'branches': [], 'note': ''})
        return {c['id']: c for c in p['categories']}

    def branch(cat, title, *, id=None, url=None, source=None, selected=False, mode='provider_full', scope=None, note='', count=None, content=None, identity='named resource', trackable=True, pending=False):
        b = {'id': id or local_id(cat['id'].upper(), title), 'title': title,
             'url': url, 'source_url': source or cat['url'], 'link_kind': 'resource' if url else 'category',
             'default_selected': selected, 'selection': 'primary' if cat['id']=='dml-everything' else 'selected_complementary' if selected else 'pending_complementary' if pending else 'optional_catalogue',
             'scope_mode': mode, 'completion_scope': scope or ('Complete the named provider resource and its relevant required work. Confirm the named resource at the provider before reporting completion.'),
             'scope_ids': content or [], 'note': note, 'observed_count': count, 'identity': identity,
             'trackable': trackable, 'complementary_status': 'pending_verification' if pending else 'conditional' if cat['id']!='dml-everything' else 'primary',
             'platform': next(p['name'] for p in platforms if cat in p['categories']), 'category': cat['title'], 'category_id': cat['id']}
        cat['branches'].append(b)
        branches.append(b)
        return b

    D = 'https://www.deep-ml.com/'
    T = 'https://www.tensortonic.com/'
    GH = 'https://github.com/khalwaniev/zulearn/blob/main/'
    d = platform('Deep-ML', 'Primary ML backbone. Choose other resources when useful.', [
        ('dml-everything','Deep-Path Everything',D+'deep-path'),('dml-paths','Learning Paths',D+'paths'),
        ('dml-labs','Labs',D+'labs'),('dml-projects','Projects',D+'projects'),('dml-collections','Collections',D+'collections'),
        ('dml-courses','Courses',D),('dml-math','Math',D+'math'),('dml-intuition','Intuition',D+'intuition')])
    for i in range(1,15):
        x = aggregate[f'UNIT-DP-{i:02}']; concepts=[c for c in deep if c['part']==i]
        branch(d['dml-everything'], x['title'] if i!=5 else 'Reinforcement Learning', id=x['id'], url=x['url'], selected=True, mode='relevant_selection',
               scope='Self-reported completion of this part’s relevant learning scope, retaining established exclusions and deferrals with reasons. No concept, individual activity or mastery record is inferred.',
               count=f"{len(concepts)} {'concept' if len(concepts)==1 else 'concepts'} · {sum(c['total_occurrences'] for c in concepts):,} observed occurrences",content=[c['id'] for c in concepts])
    d['dml-everything']['note']='14 parts · 112 concepts · 3,185 observed activity occurrences. One checkbox per part.'
    paths=next(c for c in old['optionalCatalogue'] if c['category']=='Thematic learning paths')
    for x in paths['entries']:
        branch(d['dml-paths'], x['title'], note=x['note'], identity='learner snapshot title; current direct identity unresolved', count=re.search(r'(\d+) step occurrences', x['note'])[1]+' observed steps', mode='relevant_selection')
    x=aggregate['UNIT-DML-ESSENTIALS']
    branch(d['dml-paths'],x['title'],id=x['id'],note='Earlier snapshot only; full constituent identities unresolved.',count='71 concepts · 620 observed steps',mode='relevant_selection')
    # All current named observations survive. Historic observations remain in the immutable source inventory.
    for kind,key in [('lab','dml-labs'),('project','dml-projects'),('collection','dml-collections')]:
        rows=[x for x in inv if x['platform']=='Deep-ML' and x['kind']==kind]
        for x in rows:
            m=x['metadata']; count=f"{m['steps']} observed steps" if 'steps' in m else f"{m['activity_occurrences']} observed {m.get('count_unit','occurrences')}" if 'activity_occurrences' in m else None
            id=None; url=x.get('item_url')
            for special in ['UNIT-OPT-DML-LAB-23','UNIT-OPT-DML-LAB-SPLIT']:
                if aggregate[special]['title']==x['title']: id=special; url=aggregate[special]['url']
            b=branch(d[key],x['title'],id=id,url=url,note='Snapshot observation; source category link where an individual URL was not exposed. Cross-interface identity unresolved.',count=count,identity=x['id'])
            b['observation_ids']=[x['id']]
        d[key]['note']=f'{len(rows)} named observations from the retained snapshot; counts are not unique activities across interfaces.'
    for id, count in [('UNIT-DML-NNET-GPT','15 episodes · 492 observed questions'),('UNIT-DML-POSTTRAIN','21 episodes · 697 observed questions')]:
        x=aggregate[id];branch(d['dml-courses'],x['title'],id=id,source=D,note='Retained course title; direct course URL and constituent identities unresolved.',count=count,mode='relevant_selection')
    for kind,key,field in [('math','dml-math','category'),('intuition','dml-intuition','part_title')]:
        groups=collections.defaultdict(list)
        for x in inv:
            if x['platform']=='Deep-ML' and x['kind']==kind:groups[x['metadata'][field]].append(x)
        for title, rows in groups.items():
            b=branch(d[key],title,count=f'{len(rows)} observed '+('cards' if kind=='math' else 'puzzles'),content=[],mode='local_selection',scope=f'A learner-bounded thematic selection within {title}; state the chosen subset before tracking. This does not report the entire provider category complete.',identity='snapshot thematic group')
            b['observation_ids']=[x['id'] for x in rows]
            b['contents']=[{'title':x['title'],'observation_id':x['id']} for x in rows]

    t=platform('TensorTonic','Complementary learning. Select a scope that adds something useful.',[
        ('tt-plans','Study Plans & Roadmap',T+'study-plans'),('tt-projects','Projects',T+'projects'),('tt-papers','Research Paper Tracks',T+'research'),
        ('tt-labs','Labs',T+'labs'),('tt-design','ML System Design',T+'ml-design'),('tt-articles','Articles',T+'articles')])
    plan_counts=[62,25,18,26,25,25,30,25,35,30,30,35,30,30,30,25,35,35,35,30,35]
    plans=[aggregate['UNIT-TT-CS336']]+[x for x in a['aggregates'] if x['id'].startswith('UNIT-TT-PLAN-')]
    selected_tt=[x['id'] for x in a['tt'] if 'bootstrap-mean' not in x['id']]
    for x,count in zip(plans,plan_counts):
        chosen=x['id']=='UNIT-TT-CS336'
        b=branch(t['tt-plans'],x['title'],id=x['id'],url=x['url'],selected=chosen,mode='local_selection' if chosen else 'provider_full',
            scope='Ten previously curated conditional transfer tasks only; choose each if its stated gap remains after Deep-ML. This is NOT completion of the full 62-problem, 17-quiz provider plan.' if chosen else None,
            content=selected_tt if chosen else [],count=f'{count} provider problem occurrences',note='Selected complement, not full provider plan.' if chosen else 'Optional alternative; not an additional compulsory ML route.')
        if chosen:
            b['contents']=[{'title':x['title'],'id':x['id'],'url':x['url'],'scope':x['task']} for x in a['tt'] if x['id'] in selected_tt]
            b['provider_sections']=[{'title':x['title'],'observation_ids':old['scopeAudit'][x['id']]['observationIds']} for x in a['aggregates'] if x.get('section')]
    roadmap=read('docs/activities.json')['library']['summary']['tensortonic']['roadmap_groups']
    boot=next(x for x in a['tt'] if 'bootstrap-mean' in x['id'])
    for i,x in enumerate(roadmap):
        chosen=i==0
        branch(t['tt-plans'],x['title']+' · roadmap selection',url=None,source=T+'roadmap',selected=chosen,mode='local_selection',
            scope='Conditional bootstrap transfer only: '+boot['task']+'. Not completion of the full roadmap module.' if chosen else 'Select an explicitly bounded complementary subset of this roadmap module; do not repeat a covered Deep-ML route.',
            content=[boot['id']] if chosen else [],count=f"{x['assignments']} observed assignments",note='Roadmap snapshot: visible total 122 versus 125 branding remains unresolved.')
    t['tt-plans']['note']='21 plans / 651 problem occurrences, plus 13 roadmap modules. These scopes overlap; do not add them as unique problems.'
    for id in ['UNIT-OPT-TT-SAE','UNIT-OPT-TT-WSP']:
        x=aggregate[id];branch(t['tt-labs' if id.endswith('WSP') else 'tt-projects'],x['title'],id=id,url=x['url'],note='Optional named resource; inspect its controls and scope before selecting.')
    projects=next(c for c in old['optionalCatalogue'] if c['platform']=='TensorTonic' and c['category']=='Projects and labs')
    t['tt-projects']['catalogue_sections']=[{'title':x['title'],'url':x['url'],'note':x['note']} for x in projects['entries'] if x.get('category')=='Provider category']
    for x in projects['entries']:
        if x.get('category')=='Provider category':continue
        b=branch(t['tt-projects'],x['title'],url=x.get('url'),source=projects['source'] if x.get('url') else projects['releaseSource'],note=x['note'],mode='local_selection' if not x.get('url') else 'provider_full',identity='release observation; relationship unresolved' if not x.get('url') else 'observed provider destination')
    t['tt-projects']['note']='31 projects / 11 categories reported in the snapshot; 8 direct named projects and 20 release observations retained here. Release observations may overlap; they are not 28 verified unique projects.'
    for x in next(c for c in old['optionalCatalogue'] if c['category']=='Research paper implementation tracks')['entries']:
        branch(t['tt-papers'],x['title'],note=x['category']+' · '+x['note'],identity='named index track; direct identity unresolved',mode='local_selection')
    system=['What is ML system design?','When machine learning is the right tool','Training and prediction','Clarifying requirements','From business goal to ML task','Scale and latency estimates','Uber ETA Prediction','Airbnb Smart Pricing','Logging training examples','Labels and delayed outcomes','Rare events and class imbalance','Data splits and leakage','People who adapt to the model','Stripe Real-Time Fraud Detection','X Trending Topics Detection','Gmail Spam Filter','Choosing features','Feature stores and consistency','Embeddings and similarity search','New users and new items','Pinterest Visual Search','Instagram Visual Product Tagging','LinkedIn People You May Know','Building a baseline','Choosing a model and loss','Reusing pretrained models','Training pipelines and versioning','OpenAI Distributed Training','Tesla Autopilot Perception','Classification metrics and thresholds','Retrieval and ranking metrics','Evaluating generated answers','Error analysis and evaluation slices','A/B testing and safe rollout','Meta Ad Click Prediction','Apple Notification Ranking','Batch, online, and streaming inference','Retrieval and ranking pipelines','Latency, throughput, and cost','Fallbacks and model rollouts','LLM serving and RAG','Amazon Product Recommendation','YouTube Video Recommendation System','Google Autocomplete','Anthropic RAG System','ByteDance Cost-Optimize Pipeline','Monitoring and drift','When and how to retrain','Feedback loops and exposure bias','Spotify Music Recommendation','Netflix Recommendation System','Facebook News Feed Ranking','TikTok Content Moderation','Approaching the interview','A framework for the 45 minutes','Walkthrough, content moderation','Walkthrough, video recommendation','Common mistakes and what each level shows']
    cases={7,8,14,15,16,21,22,23,28,29,35,36,42,43,44,45,46,50,51,52,53}
    for i,title in enumerate(system,1):branch(t['tt-design'],title,url=T+'ml-design/leakage' if i==12 else None,note=('Design case' if i in cases else 'Topic')+' · official index inspected 2026-11-28; select only a relevant gap.',mode='local_selection')
    t['tt-design']['note']='37 topics · 21 design cases; all 58 names recovered from the official index.'
    article_modules=[('Statistics',15),('Probability',10),('Linear Algebra',11),('Calculus',9),('Optimization',9),('Graph Theory',6),('Information Theory',7)]
    for title,n in article_modules:branch(t['tt-articles'],title+' · ML mathematics',source=T+'ml-math',count=f'{n} lessons',mode='local_selection',scope=f'An explicitly chosen subset of the {title} articles; not the entire 67-lesson series.')
    branch(t['tt-articles'],'LLM Internals',url=T+'llm-internals',count='20 published guides · 31 listed topics',mode='local_selection',scope='A chosen complementary group of published LLM Internals articles; upcoming topics are excluded.',note='Current article hub and series both show 20 published guides, resolving the previous cached 19-versus-20 discrepancy for this retrieval.')

    z=platform('Zulearn','Selected foundations, deeper study, and research reading.',[
        ('zul-lessons','Lessons',GH+'learning/LESSONS.md'),('zul-bank','Problem Bank','#bank'),
        ('zul-courses','Selected Courses',GH+'reading/COURSES.md'),('zul-papers','Research Papers',GH+'reading/PAPERS.md')])
    for id in ['UNIT-OPEN-F','UNIT-OPEN-C']:
        x=aggregate[id];branch(z['zul-lessons'],x['title'],id=id,url=GH+'learning/LESSONS.md',selected=True,mode='local_selection',scope='Relevant lessons and reviewed local checks in this bounded opening chapter. The lesson sources remain in GitHub; no constituent completion or mastery is inferred.',content=x['scope'])
    for x in a['aggregates']:
        if x['kind']=='selected course sections':
            branch(z['zul-courses'],x['title'],id=x['id'],url=x['url'],selected=True,mode='local_selection',scope=old['scopeAudit'][x['id']]['detail']+' Completion is only this selected scope, not the full provider course.')
        elif x['kind']=='thematic problem set' or x['id'].startswith('UNIT-LC-'):
            branch(z['zul-bank'],x['title'],id=x['id'],source='#bank',mode='local_selection',scope='Only independently verified complementary items in this thematic set. No confirmed unique gap has yet been established; retained candidates are pending review.',content=x['scope'],trackable=False,pending=True,note='Pending complementary verification. Preserved and discoverable in Problem Bank; no completion obligation.')
    for x in a['papers']:
        branch(z['zul-papers'],x['title'],id=x['id'],url=x['url'],selected=True,mode='local_selection',scope=x['task']+'. '+x['limit']+'. Paper reading/derivation is distinct from a provider implementation track.',content=[])

    resources={'schema_version':1,'baseline':BASE,'snapshot_date':'2026-11-28','platforms':platforms,
        'limitations':['Catalogue titles and counts do not establish full task coverage or unique identities.', 'No cross-platform exact-duplicate pair is verified. Existing canonical URL aliases are preserved.', 'Deep-ML individual URLs remain unavailable for most snapshot observations. Source-category links are labelled.', 'TensorTonic project catalogue remains partially identified; release observations are not unique-project counts.', 'All local problem candidates remain pending complementary verification; no new original exercises were created.'],
        'selection_policy':'Primary parts and existing curated course/paper/transfer scopes start selected. Other catalogue resources are optional. Selection and completion changes are staged, explicitly authorized, conflict-checked and committed to docs/progress.json; no constituent completion is inferred.'}
    manual={b['id']:{'platform':b['platform'],'category':b['category'],'scope':b['scope_ids'],'mode':b['selection'],'completion_scope':b['completion_scope']} for b in branches if b['default_selected'] and b['trackable']}
    a['hierarchy']={'schema_version':2,'baseline':BASE,'manual':manual,'derived':{'UNIT-PATH-D':{'children':[f'UNIT-DP-{i:02}' for i in range(1,15)],'note':'Derived from the fourteen manually reported parts; never inferred from concept or historical parent records.'}},'aliases':old['aliases'],'duplicatePairs':old['duplicatePairs'],'relationshipPolicy':old['relationshipPolicy'],'historical_hierarchy':'git:'+BASE+':docs/activities.json#hierarchy','scopeAudit':old['scopeAudit']}
    write('docs/activities.json',a)
    write('docs/resources.json',resources)

    # A same-origin, hash-checked projection removes a dependency on cross-origin raw GitHub fetches.
    files={}; hashes={}
    for path in ['data/curriculum.json','data/deep_path.json','data/lessons.json','data/checkpoints.json','data/subcompetencies.json']:
        files[path]=read(path);hashes[path]=hashlib.sha256((ROOT/path).read_bytes()).hexdigest()
    write('docs/syllabus.json',{'schema_version':1,'baseline':BASE,'files':files,'source_sha256':hashes})

    # Audit every retained exercise/worksheet/source locator and every conditional native task.
    candidates=[]
    corpus=[{'id':x['id'],'title':x['title'] or '', 'url':x.get('item_url') or x.get('source_url'), 'level':'catalogue metadata only'} for x in inv if not x['kind'].startswith('historical')]
    def tokens(s):return set(re.findall(r'[a-z]{5,}',s.lower()))-{'learning','practice','selected','source','original','problem','machine','research'}
    def lane(x,kind):
        if kind=='sheets':return 'C' if x['id'].startswith('ALG-') else 'B' if x['id'].startswith('BIO-') else 'R' if x['id'].startswith(('ML-','RL-')) else 'S' if x['id'].startswith('RES-') else 'M' if x['id'] not in ['MAT-ARITH','MAT-ALG','MAT-PROOF','MAT-GEO'] else 'F'
        if kind=='registered':return 'C'
        value = str(x.get('skill') or x.get('skills') or 'M')
        return value[0] if value[0] in 'FCMLSRB' else 'M'
    for kind in ['bank','sheets','assignments','registered','tt']:
        for x in a[kind]:
            native=kind=='tt'; words=tokens(x['title']+' '+x.get('purpose','')+' '+x.get('task',''))
            ranked=sorted(corpus,key=lambda y:len(words & tokens(y['title'])),reverse=True)
            matches=[y for y in ranked[:5] if words & tokens(y['title'])]
            mapped=[c['id'] for c in read('data/curriculum.json')['competencies'] if x['id'] in (c['primary_resource']+' '+c['complement'])] if kind=='sheets' else []
            target=x.get('skill') or x.get('skills') or mapped or x['title']
            candidates.append({'id':x['id'],'kind':kind,'theme':lane(x,kind),'title':x['title'],'target':target,
                'status':'native_referral' if native else 'pending_complementary_verification',
                'gap':x.get('purpose') or x.get('task') or x['title'],
                'provider_evidence':matches,
                'inspection_limit':'Related retained activity metadata inspected; constituent prompts/graders and cross-platform equivalence are not exhaustively verified. A shared title is not equivalence.',
                'why_insufficient':'No insufficiency finding established. Inspect relevant provider tasks before assigning this as a unique complementary gap.' if not native else 'Use the provider task for this conditional transfer demand; do not recreate it in Zulearn.',
                'provenance':x.get('provenance') or (x.get('url','')+' · '+x.get('locator','') if kind=='assignments' else x.get('identity_evidence') or 'Existing conditional TensorTonic assignment; exact provider URL retained.'),
                'verification':x.get('solution') or ('Use the original provider grader and inspect its contract; passing it does not certify mastery.' if kind in ['tt','registered'] else 'Review the complete written derivation or implementation against the frozen worksheet criteria with an independent reviewer; no automatic arbitrary-proof grading.' if kind=='sheets' else 'Use the original source’s authorized solution if available, or an independent mathematical reviewer checking every step and assumptions. No solution is copied.'),
                'url':x.get('url') or (GH+x['file'] if kind=='sheets' else GH+'docs/activities.json')})
    write('docs/complementary-audit.json',{'schema_version':1,'baseline':BASE,'review_date':'2026-11-28','confirmed_unique_gap_count':0,'native_referral_count':11,'pending_count':len(candidates)-11,'entries':candidates,
        'decision':'No global uniqueness or coverage claim is justified. Retain all candidates behind an explicit pending-review disclosure; no pending candidate enters the confirmed complementary workload.',
        'direct_inspections':[
            {'url':T+'problems/bootstrap-mean?roadmap=tt100&step=16','finding':'Resampling scalar observations and percentile bounds; no inference of clustered-transfer coverage.'},
            {'url':T+'problems/cs336-l12-multiple-choice-likelihood?studyPlan=language-modeling-from-scratch','finding':'Masked summed log-likelihood, empty-mask and tie conventions; native task should be referenced.'},
            {'url':T+'ml-design/leakage','finding':'Time boundaries, entity splits, near-duplicates, train-only fitting and test reuse are already addressed; generic leakage is not a unique Zulearn gap.'},
            {'url':D+'labs/3d26c3f9-cb73-4ab1-bc4d-86cfab2af6d1','finding':'Named lab visible, task body not rendered; adequacy unresolved.'},
            {'url':D+'intuition','finding':'130 puzzles in 16 parts, including causal/statistical/evaluation reasoning; do not assume elementary or scientific reasoning is absent.'}],
        'copyright':'Local original text and approved worksheet display copies remain unchanged. External exercises are exact source locators only; proprietary provider bodies and solutions are not reproduced.'})
    print('Default checklist:',len(manual),collections.Counter(v['platform'] for v in manual.values()))
    for p in platforms:print(p['name'],[(c['title'],len(c['branches']),sum(b['default_selected'] for b in c['branches'])) for c in p['categories']])
    print('Problem audit:',len(candidates),'entries;',len(candidates)-11,'pending; 11 native referrals; 0 confirmed unique gaps')

if __name__=='__main__':rebuild()
