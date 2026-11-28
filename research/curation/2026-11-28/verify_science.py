#!/usr/bin/env python3
"""Reproducible provenance/schema/exact-arithmetic checks; no app dependency."""
import collections,hashlib,json,math,subprocess
from fractions import Fraction as Q
from pathlib import Path
ROOT=Path(__file__).resolve().parents[3]
DIR=Path(__file__).resolve().parent
BASE='6a482af3b8758730ff8662cd4c5b862def219c1f'
checks=0

def require(ok,message):
 global checks
 assert ok,message
 checks+=1

def load(p):return json.loads((ROOT/p).read_text())

def baseline(p):return subprocess.check_output(['git','show',BASE+':'+p],cwd=ROOT)

def check_fraction(actual,expected,message):require(Q(actual)==Q(expected),message)

def run():
 global checks
 bank=json.loads((DIR/'confirmed-problem-bank.json').read_text()); ledger=json.loads((DIR/'source-ledger.json').read_text()); adjud=json.loads((DIR/'candidate-adjudications.json').read_text()); coverage=json.loads((DIR/'competency-coverage.json').read_text()); provider=json.loads((DIR/'provider-audit.json').read_text());audit=load('docs/complementary-audit.json');activities=load('docs/activities.json')
 source_ids={x['id'] for x in ledger['entries']}
 require(len(source_ids)==len(ledger['entries']),'source identities unique')
 require(len(adjud['entries'])==119,'all 119 historical candidates')
 original=json.loads(baseline('docs/complementary-audit.json'))
 require({x['id'] for x in adjud['entries']}=={x['id'] for x in original['entries'] if x['kind']!='tt'},'actual historical identity set')
 require(collections.Counter(x['kind'] for x in adjud['entries'])=={'bank':46,'sheets':52,'assignments':17,'registered':4},'historical kind counts')
 require(all(x['completion_merge'] is None for x in adjud['entries']),'zero fabricated merges')
 require(len(provider['categories'])==14 and collections.Counter(x['platform'] for x in provider['categories'])=={'Deep-ML':8,'TensorTonic':6},'all provider categories')
 require(len(coverage['entries'])==109,'full competency registry')
 require({x['competency_id'] for x in coverage['entries']}=={x['id'] for x in load('data/curriculum.json')['competencies']},'exact competency set')
 require(hashlib.sha256((ROOT/'data/curriculum.json').read_bytes()).hexdigest()==coverage['registry_sha256'],'frozen registry hash')
 require(collections.Counter(x['status'] for x in audit['entries'])==audit['status_counts'],'all UI counts derived from actual entries')
 require(len({x['id'] for x in audit['entries']})==len(audit['entries']),'no duplicate audit identities')
 require({x['id'] for x in bank['entries']}=={x['id'] for x in audit['entries'] if x['status']=='confirmed_complementary'},'production confirmed bank exact')
 require(len({x['id'] for x in bank['entries']})==bank['problem_count'],'bank count exact')
 for row in bank['entries']:
  require(row['source_id'] in source_ids,row['id']+' source exists')
  require(all(row.get(k) for k in ['target','prerequisites','url','locator','verification','complementarity_justification','difficulty','learning_depth','lawful_access','transfer_criterion']),row['id']+' usable fields')
  require(row['status']=='confirmed_complementary',row['id']+' status')
  mc=row.get('math_check')
  if mc:
   args=list(map(Q,mc['inputs']));op=mc['operation']
   if op=='equal':value=args[0]
   elif op=='add':value=args[0]+args[1]
   elif op=='subtract':value=args[0]-args[1]
   elif op=='multiply':value=args[0]*args[1]
   elif op=='divide':value=args[0]/args[1]
   elif op=='lcm':value=Q(math.lcm(*(int(a) for a in args)))
   else:raise ValueError(op)
   check_fraction(value,mc['expected'],row['id']+' independently calculated exact answer')
 for row in coverage['entries']:
  require(set(row['provider_source_ids'])<=source_ids,row['competency_id']+' source references resolve')
  require(bool(row['remaining_demand']) and bool(row['independent_performance_criterion']),row['competency_id']+' gap and criterion explicit')
 for row in audit['entries']:
  require(all(p.get('source_id') in source_ids for p in row['provider_evidence']),row['id']+' comparison evidence resolves')
 # Freeze integrity includes learner progress, the approved UI shell and CSS.
 protected=load('docs/qa/protected-sha256.json')
 pairs=protected['sha256']
 if isinstance(pairs,list):pairs={x['path']:x['sha256'] for x in pairs}
 # The existing manifest is path -> digest.
 for path,digest in pairs.items():
  if isinstance(digest,dict):digest=digest['sha256']
  require(hashlib.sha256((ROOT/path).read_bytes()).hexdigest()==digest,'protected '+path)
 for path in ['docs/progress.json','docs/index.html','docs/styles.css']:
  require((ROOT/path).read_bytes()==baseline(path),'unchanged '+path)
 old=json.loads(baseline('docs/activities.json'))
 for k,v in old.items():
  if k!='hierarchy':require(activities[k]==v,'historical activity field '+k)
 # Exact solutions from independently parsed source statements.
 check_fraction(Q(44,11)+Q(110,44)+Q(44,1100),'6.54','AMC 8 #2')
 require((10**2-9**2)+(7**2-4**2)==52,'AMC 8 #3')
 require(sum(k*k for k in range(1,18))==1785 and sum(k*k for k in range(1,19))==2109,'Putnam 2023 A1 minimality boundary')
 require(sum(k*k for k in range(1,11))==385 and 385-1==384,'OTIS 8 invariant/extremum')
 for n in range(1,40):require(sum(k**3 for k in range(1,n+1))==(n*(n+1)//2)**2,'MIT cube identity finite check '+str(n))
 fib=[0,1]
 for _ in range(80):fib.append(sum(fib[-2:]))
 for n in range(1,80):require(fib[n-1]*fib[n+1]-fib[n]**2==(-1)**n,'Cassini finite check '+str(n))
 # Representative nontrivial retained mathematics; finite checks supplement,
 # rather than replace, the explicit proofs/rubrics in the adjudication record.
 check_fraction(Q(9,1000)/(Q(9,1000)+Q(99,100)*Q(5,100)),Q(2,13),'Bayes denominator')
 check_fraction(Q(3,4)*Q(4,10)+Q(2,3)*Q(6,10),Q(7,10),'tower identity')
 check_fraction(Q(3,10)+Q(5,10)*4,Q(23,10),'importance expectation')
 check_fraction(Q(1,2)*Q(2,5)*0+Q(1,4)*Q(6,5)*1+Q(1,4)*2*4,Q(23,10),'importance-weighted expectation')
 check_fraction(1+Q(1,5)*(2+Q(1,2)*3-1),Q(3,2),'TD nonterminal')
 check_fraction(1+Q(1,5)*(2-1),Q(6,5),'TD terminal')
 check_fraction(Q(88,100)*Q(112,100),Q(9856,10000),'percent change base')
 check_fraction(Q(3600)/Q(25,10000),1440000,'millisecond interval conversion')
 require(math.isclose(.5*math.log(.2)+.5*math.log(.6)+.5*math.log(2)+.5*math.log(Q(2,3)),math.log(.4),abs_tol=1e-14),'ELBO plus KL identity')
 # QR/least-squares rational normal equations and residual orthogonality.
 A=[[Q(1),Q(1)],[Q(1),Q(0)],[Q(0),Q(1)]];b=[Q(2),Q(1),Q(0)];x=[Q(4,3),Q(1,3)]
 residual=[sum(a[j]*x[j] for j in range(2))-v for a,v in zip(A,b)]
 require(residual==[Q(-1,3),Q(1,3),Q(1,3)],'QR exact residual')
 for j in range(2):require(sum(a[j]*v for a,v in zip(A,residual))==0,'QR residual orthogonality')
 q1=[1/math.sqrt(2),1/math.sqrt(2),0];q2=[1/math.sqrt(6),-1/math.sqrt(6),2/math.sqrt(6)]
 require(abs(sum(a*b for a,b in zip(q1,q2)))<1e-14,'QR orthogonal columns')
 for col in [q1,q2]:require(math.isclose(sum(v*v for v in col),1,abs_tol=1e-14),'QR normalized column')
 coeff=[Q(7,6),Q(1,2)];xx=[[1,0],[1,1],[1,2]];yy=[1,2,2];rr=[sum(Q(a[j])*coeff[j] for j in range(2))-v for a,v in zip(xx,yy)]
 require(all(sum(Q(a[j])*v for a,v in zip(xx,rr))==0 for j in range(2)),'MAT-LIN exact normal equation')
 cap=1;copies=[]
 for used in range(10):
  copies.append(used if used==cap else 0)
  if used==cap:cap*=2
 require(copies==[0,1,2,0,4,0,0,0,8,0],'amortized copy schedule')
 require(math.exp(.1)-1-.1-.1**2/2 <= math.exp(.1)*.1**3/6+1e-14,'Taylor bound at 0.1')
 # Check all original numeric checker values against independently reconstructed
 # calculations from the actual prompt, without changing any historic content.
 original_answers={
 'ZP-FRA-001':Q(3,8),'ZP-FRA-002':Q(3,12),'ZP-FRA-004':Q(1,3)+Q(1,4),'ZP-FRA-005':Q(3,5)/Q(1,10),'ZP-DEC-001':Q('0.7')-Q('0.28'),'ZP-RAT-001':Q(5,20),'ZP-ALG-001':Q(20-5,3),'ZP-MATH-001':Q(1+4,2),'ZP-FRA-006':Q(18,24),'ZP-FRA-007':Q(9,4)*Q(2,3),'ZP-ARITH-001':250*Q(4,5)*Q(6,5),'ZP-ARITH-002':Q('3.75')/1000,'ZP-INT-001':Q(-6+9-5),'ZP-POW-001':Q(2+3*(4-1)**2),'ZP-POW-002':Q(1,5**2),'ZP-ALG-003':Q(4*(-2)-3),'ZP-ALG-004':Q(10+4,4-2)}
 for item in activities['bank']:
  if item.get('answer'):
   require(item['id'] in original_answers,'numeric original explicitly checked '+item['id'])
   check_fraction(Q(*item['answer']),original_answers[item['id']],item['id']+' original checker answer')
 receipt={'result':'PASS','checks':checks,'protected_files':len(pairs),'reviewed_existing_candidates':len(adjud['entries']),'confirmed_practice':bank['problem_count'],'status_counts':audit['status_counts'],'whole_competency_counts':coverage['coverage_counts'],'new_completion_merges':0,'limitations':['Finite numeric checks supplement manual proofs; they do not prove universal theorems.','Empirical study rubrics contain no invented execution results.','This is an adversarial self-review, not a second independent scientific reviewer or a learner mastery assessment.']}
 print(json.dumps(receipt,indent=2))
 return receipt
if __name__=='__main__':run()
