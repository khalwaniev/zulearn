# Diagnostic answer key — examiner copy

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Keep this examiner file closed during an independent attempt. The human reports conditional independent approval of the baseline; this revision corrects labels/routing and retains the mathematical answers. Equivalent valid solutions earn credit. The original four-point breakdowns below are **reference coverage**, not a whole-question or whole-competency pass rule. Score each active subskill separately as 0 (not demonstrated), 1 (partial/assisted) or 2 (independently sound), recording help and the actual evidence. Do not add these into a global entrance score. An answer to one subpart cannot mask a different misconception. The finite bank is used locally after learning; it does not certify general research mastery.

## Packet A

**DX-A1.** x=15, since 6x−8=5x+7. For the inequality, the critical points are −2 and 1: the solution is (−2,1], with x=−2 excluded. One point each: equation derivation/result, substitution, correct sign intervals, correct boundary/domain.

**DX-A2.** Domain x>2. Inverse f⁻¹(y)=exp(y)+2 for y∈R. a=b=1 disproves the proposed identity: ln2≠0. One point each: domain, inverse derivation, valid counterexample, explanation distinguishing log of product from log of sum with domain conditions.

**DX-A3.** Negation: there exists x∈R such that for every y∈R, y≤x. Original true (choose y=x+1); negation false because R is unbounded above. Points: 2 for correct quantifier/order/inequality negation, 1 for original witness, 1 for evaluating negation with reason.

**DX-A4.** (a) Norm 2 and angle π/3 (60°). (b) For r≠1, S_n=(1−r^n)/(1−r), obtained from S_n−rS_n=1−r^n; for r=1, S_n=n. Infinite sum is 1/(1−r) for |r|<1; otherwise the partial sums do not converge. Points: 1 geometry, 1 finite derivation, 1 r=1 treatment, 1 infinite-sum conditions. At r=−1 the terms do not tend to zero and the partial sums oscillate.

## Packet B

**DX-B1.** Valid reference:

```python
def frequencies(items):
    counts = {}
    for value in items:
        counts[value] = counts.get(value, 0) + 1
    return counts

assert frequencies([]) == {}
assert frequencies([2, 2, 1]) == {2: 2, 1: 1}
assert frequencies(['a', 'b', 'a']) == {'a': 2, 'b': 1}
```

Expected O(n) time under standard expected constant-time hash operations, O(k) space for k distinct values. Pathological hashing can violate the constant-time assumption. Points: correct counts 2; tests/empty/repeats 1; complexity with assumptions 1.

**DX-B2.** A two-pass solution counts first, then scans original order:

```python
def first_unique(items):
    seq = list(items)
    counts = {}
    for x in seq:
        counts[x] = counts.get(x, 0) + 1
    for x in seq:
        if counts[x] == 1:
            return x
    return None

assert first_unique([]) is None
assert first_unique([4, 2, 4, 3, 2]) == 3
assert first_unique([7, 7]) is None
```

Expected O(n) time, O(n+k) space with iterable materialization; O(k) additional space if input is already an indexable sequence and no copy is made. Points: global frequency logic 1; original order 1; empty/no-unique tests 1; complexity/assumptions 1. Sorting can change the required order; nested counting is valid but slower and must be analyzed honestly.

**DX-B3.** X@w has shape (m,). Compute `mu=X_train.mean(axis=0, keepdims=True)` then `X_train-mu`, and apply the **same** mu to test data. The displayed centered array is [[−1,−1],[1,1]]. w[:,None] has shape (d,1) and is not a feature-mean row; it can fail to broadcast or silently subtract along the wrong dimension when sizes happen to align. Fitting preprocessing using test data changes the intended estimator and can leak information in ordinary held-out evaluation; any explicitly transductive protocol must be declared. Points: shapes 1, correct expression/numbers 1, fixed train mean 1, broadcast/estimator critique 1.

## Packet C

**DX-C1.** x₁+2x₂=3, so solutions are (3−2t,t). Rank 1. Nullspace span{(−2,1)}. The second right-hand side is inconsistent because row 2 requires twice the first equation's right side; 7≠6. Points: solution family 1, inconsistency 1, rank/nullspace 1, geometric explanation 1.

**DX-C2.** m≥n is necessary for full column rank but not sufficient; a zero or duplicate column is a counterexample. zᵀAᵀAz=‖Az‖², so null(AᵀA)=null(A). AᵀA is invertible iff null(A)={0}, equivalently rank(A)=n. Points: valid counterexample 1, quadratic-form identity 1, iff proof 1, clear condition/interpretation 1.

**DX-C3.** Singular values 3,1,0. One best rank-one approximation is diag(3,0,0), with Frobenius error 1 (squared error 1 too). Singular values are nonnegative square roots of eigenvalues of AᵀA; general eigenvalues may be negative or complex, e.g. diag(−1,2) already differs in sign. Points: values 1, approximation 1, optimal-error justification 1, distinction/counterexample 1. Exact formal low-rank optimality theorem may be stated with its scope.

## Packet D

**DX-D1.** 2exp(2x)/(1+exp(2x))=2σ(2x), tending to 2 as x→+∞. The outer log derivative and inner exponential derivative must both appear. Points: derivative 2; chain explanation 1; limit 1.

**DX-D2.** ∇L=(2/m)Xᵀ(Xw−y)+2λw, shape d; Hessian H=(2/m)XᵀX+2λI, shape d×d, assuming m>0. For λ>0 it is positive definite. For λ=0 it is positive definite iff X has full column rank. Otherwise it is PSD with null directions. Points: gradient 1; Hessian/shapes 1; λ>0 argument 1; λ=0 rank condition 1.

**DX-D3.** Lagrangian x²+y²+μ(x+y−2), so 2x+μ=2y+μ=0 and x=y=1; μ=−2; value 2. Alternatively x²+y²≥(x+y)²/2=2, equality x=y. Strict convexity or the inequality establishes the global unique solution on this affine constraint. One point each: stationarity, constraint/result, independent argument, global justification.

## Packet E

**DX-E1.** Positive true mass 0.02×0.8=0.016; false-positive mass 0.98×0.1=0.098. Posterior 0.016/0.114=8/57≈0.14035. Specificity=P(negative | no condition)=0.9. Sensitivity conditions on the condition and reverses the desired conditioning. Points: true mass 1, false mass 1, normalized posterior 1, conceptual distinction 1.

**DX-E2.** E[X+Y]=1, E[XY]=E[X²]=1/2, E[X]E[Y]=1/4. Linearity of expectation does not require independence; factorization of product expectation is not generally valid without appropriate conditions. Independence is sufficient, but equality of product expectation alone does not imply independence in general. Points: sums 1; product quantities 1; linearity explanation 1; factorization qualification 1.

**DX-E3.** Log likelihood k log p+(n−k)log(1−p); interior derivative k/p−(n−k)/(1−p)=0 gives p̂=k/n=0.8; concavity establishes the maximum. All-success gives boundary p̂=1, all-failure gives p̂=0. A valid 95% confidence procedure covers the fixed true p in 95% of repeated samples under its assumptions; the realized interval alone does not supply a Bayesian 95% posterior probability for p. Points: likelihood 1; derivative/max 1; boundary logic 1; coverage interpretation 1. Approximate procedures may not have exact nominal coverage; reward that qualification.

## Packet F

**DX-F1.** Lower-bound algorithm with half-open interval:

```python
def lower_bound(a, q):
    lo, hi = 0, len(a)
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < q:
            lo = mid + 1
        else:
            hi = mid
    return lo
```

Invariant: all indices below lo have values <q; all indices at/above hi have values ≥q; answer boundary lies in [lo,hi]. Interval shrinks, returns n if none, 0 for empty. O(log(n+1)) time and O(1) extra space in random-access model. Points: algorithm/edge behavior 1; invariant 1; termination/correctness 1; complexity assumptions 1.

**DX-F2.** BFS queue, visit once, record parent on discovery; distances grow layer by layer. Stop on discovery/processing of t with consistent implementation and reconstruct parents backwards. Return no path if unreachable; s=t returns [s]. O(V+E) time and O(V) additional memory excluding graph/path. Weighted costs need a suitable method such as Dijkstra for nonnegative weights; fewest edges can have greater weight. Points: BFS implementation/design 1; layer proof 1; parent/edge cases 1; complexity/weighted limitation 1.

**DX-F3.** dp[i,t] means achievable sum t using first i weights. dp[0,0]=True and dp[0,t>0]=False. dp[i,t]=dp[i−1,t] or (t≥a_i and dp[i−1,t−a_i]). O(nT) time, O(nT) space or O(T) with descending t per item so the same positive item is not reused. Zero weights do not change reachability and need not cause infinite loops. O(nT) is pseudopolynomial because T's binary encoding has O(log(T+1)) bits. Points: state/base 1; recurrence 1; update/complexity 1; bit-length explanation 1.

**DX-F4.** A program may halt after more than a billion steps, so timeout establishes only “not observed halting within budget.” The general halting problem for unrestricted sufficiently expressive programs is undecidable; no larger fixed timeout repairs that. Restricted finite state spaces or bounded executions may admit decision procedures, but that changes the problem. Points: false-negative example 1; resource versus nonexistence distinction 1; undecidability scope 1; restriction qualification 1.

## Packet G

**DX-G1.** Same patient in both splits lets patient-specific information inflate new-patient estimates; correlated images are not 2,000 independent patients. Split by patient for new-patient target; pair model results and resample patients or use an appropriate dependence-aware method. Site/scanner/family/time overlap, duplicate images, label leakage or preprocessing fit across test can persist. Points: dependency mechanism 1; appropriate target split 1; paired cluster uncertainty 1; remaining threat 1.

**DX-G2.** Selecting the validation winner creates selection optimism; repeated test access contaminates the purported independent test. Future evaluation: freeze method/tuning, reserve genuinely untouched data or appropriately nested evaluation, specify metric/estimand and report multiplicity/adaptive history. Existing numbers cannot be made untouched by renaming or retroactive preregistration. They remain exploratory evidence with disclosed selection; new independent evidence may be needed. Points: selection 1; test contamination 1; future design 1; retrospective limitation 1.

**DX-G3.** Probe prediction is correlational. Removal can change many features or introduce distribution shift; performance loss is an intervention effect under that manipulation, not unique mechanism identification. Controls: matched/random directions or norm/energy-matched interventions, unrelated tasks, clean/corrupt resampling/patching, counterfactual inputs, rescue experiments, alternative causal hypotheses. Points: correlation distinction 1; ablation ambiguity 1; two meaningful controls 1; bounded claim/unique-mechanism limit 1.

## Packet H

**DX-H1.** 1000+log1p(exp(−1))≈1000.3132616875, using max-shift log-sum-exp. Direct exponentials overflow in common floating-point types. For Ax=b, residual r=b−Ax̂ relates to error through A⁻¹; a large condition number can amplify residual/perturbations, so small residual alone is insufficient. Points: stable formula 1; approximate/checkable value 1; overflow reason 1; conditioning distinction 1.

**DX-H2.** ∂h_T/∂h_0=a^T. Magnitude vanishes for |a|<1, is 1 for |a|=1 (sign may alternate at a=−1), and grows for |a|>1, excluding trivial details at T=0. Gated additive memory may provide a controlled gradient path; a modern forget gate multiplies that path by products of its values. Saturation, gate values, optimization and other paths still matter. Points: derivative 1; three cases 1; additive/gate explanation 1; no universal guarantee 1.

**DX-H3.** softmax(QKᵀ/√d_k+M)V with row-wise softmax, output (n,d_v). M_ij=0 for allowed j≤i and −∞ for j>i; apply before softmax. Without masking, future target tokens can enter a supposedly causal prediction. Stable softmax uses max shifting; an all-masked row requires explicit handling because normalization is undefined. Points: equation/shapes 1; mask definition/placement 1; leakage 1; numerical edge 1.

## Packet I — screening rubrics

**DX-I1.** Credit distinct explanations such as compounding rollout error, unobserved state, reward/model mismatch, distribution shift under a new policy, and planner exploitation of model errors. Compare an oracle/true-dynamics planner, learned-model planner, and model-free or representation-only baseline with matched interactions/tuning. Report real held-out return and uncertainty, not only prediction loss. Points: two explanations 1; discriminating controls 1; equal budget/held-out protocol 1; bounded interpretation 1.

**DX-I2.** Fixed public tasks permit overfitting, evaluator exploitation or resource inflation. Gödel-machine guarantees depend on formal axioms, specified utility/hardware/code and provable utility of rewriting versus continuing search; empirical score increases are not that theorem. Use disjoint held-out task families, hidden evaluation, compute/data accounting, frozen baselines and ablations across improvement rounds. Points: overfit/metric concern 1; theoretical assumptions 1; held-out design 1; distinguish narrow measured improvement from broad RSI 1.

**DX-I3.** Data identify an equivalence class of programs, not necessarily a unique rule. Search order/DSL/prior affects the selected program. Choose a legal query where plausible programs disagree, measure resulting information gain if a prior is specified, and retain ambiguity when no discriminating query is allowed. Timeout is a resource observation. Points: identifiability 1; prior/search 1; useful query 1; timeout limitation 1.

**DX-I4.** A valid protocol defines matched clean/corrupt inputs, a specific site/token/layer intervention, a preregistered output/logit measure, clean/corrupt and random/unrelated-site controls, and possible off-manifold mixtures. It can support a causal contribution under the tested intervention, not unique or universal explanation. Points: setup/site 1; measure 1; control/distribution threat 1; bounded claim 1.

**DX-I5.** Homologous train/test sequences can inflate family generalization, and post-cutoff annotations/templates/sequence databases can leak future knowledge. Distance-only features are invariant to reflection and may omit chirality. For the stated GO `is_a` child→parent relation, scores should generally satisfy p(parent)≥p(child) under the intended logical prediction semantics; distinguish that design rule from calibrated joint probabilities, and do not extend the rule to all GO relation types without checking semantics. Unknown annotation is often missing evidence, not verified absence. Computational structure/association evidence alone does not establish biological function experimentally. Points: homology/time 1; chirality 1; ontology/unknown labels 1; structural-versus-functional evidence distinction 1.

## Key limitations

The baseline underwent human-reported conditional independent audit; this corrective revision is checked for mathematical consistency, rubric alignment and executable references. No new independent review of the corrective patch is claimed. Do not reuse this exposed question set indefinitely. Before exempting a major topic, require a changed task, complete reasoning and a delayed unaided sample; research branches additionally require an implementation/experimental artifact and external criticism.



## First-week local checks — separate answers and subskill rubrics

These answers match the latest four-basic-operations starting point and START-01–07. Keep them closed during independent checks. Score only the just-taught subskill; the learner need not complete every subpart of a row in one sitting. Paper meaning, calculation and executed code remain separate. After exposure use changed tasks.

**LC-01.** A valid 1/4 picture divides a declared whole into four equal parts and shades one. The bottom 4 counts those equal parts; top 1 counts those selected. 1/2=2/4 because each half can be repartitioned into two equal quarters. Unequal parts or different-sized reference wholes do not establish equivalence. The coding outputs are 8 then 15; require actual learner code, not just these numbers. Reference:

```python
amount = 6
assert amount + 2 == 8
amount = 5
assert amount * 3 == 15
```

**LC-02.** In order: 1/2; 1/2; 1/2; 3/2. Show same-unit/common-denominator reasoning for sums and differences, and multiplication/reciprocal reasoning for products/division. Division by zero is undefined: no number multiplied by zero can give 3. Do not award fraction meaning or division understanding solely from a memorized algorithm. No negative-number fluency is presumed here.

**LC-03.** 1/4=0.25; 0.4+0.35=0.75; 0.6×0.5=0.3; 0.9÷0.3=3. Explain decimal place value as parts in powers of ten (introduce the words tenths/hundredths without assuming exponent notation). The sum program returns 9. Decimal arithmetic and loop implementation are separate evidence; machine floating-point details are later numerics. Reference:

```python
total = 0
for item in [1, 3, 5]:
    total = total + item
assert total == 9
```

**LC-04.** Red:blue=2:3, while red/total=2/5. 1/5=0.2=20%; 25% of 80 is 20. The requested function returns 9 at x=4. Require the learner's function and distinguish returning a result from printing only. Compare quantities explicitly; 2:3 does not mean 2/3 of all tokens.

**LC-05.** Answers: 2; −3; 6; −4; −5<−2 (so −2 is larger). A valid own `if` example recognizes 5>3 and follows the intended branch. Number-line order, addition/subtraction and sign rules are independent subskills. A sign-rule mistake does not erase a correct fraction picture.

**LC-06.** 3²=9; 2+3×4=14; (2+3)×4=20; −(2²)=−4 and (−2)²=4. Teach the location of the negative sign and parentheses. The optional mean is (2+4+9)/3=5. A correct mean does not establish later probability mastery. Require actual independent code for the implementation:

```python
def nonempty_mean(values):
    total = 0
    for value in values:
        total = total + value
    return total / len(values)

assert nonempty_mean([2, 4, 9]) == 5
```

**LC-07.** 5z+1 is an expression; 5z+1=16 is an equation. At z=3 the expression is 16. t=8 follows by subtracting 3 from both sides, and checking 8+3=11. The count of values exceeding 3 in [1,4,6] is 2. Optional prediction toy: at (3,7), A predicts 7 (absolute error 0), B predicts 6 (error 1); one artificial new point establishes no broad generalization guarantee. Do not combine equation, implementation and evaluation reasoning into one score. Count reference:

```python
def count_over_three(values):
    count = 0
    for value in values:
        if value > 3:
            count = count + 1
    return count

assert count_over_three([1, 4, 6]) == 2
assert count_over_three([]) == 0
```

## Label/rubric alignment corrections

DX-A1 covers equations/sign/domain, whereas DX-A4 covers geometry and geometric sums; neither should be used interchangeably to certify F02. DX-E3 decomposes likelihood/MLE, boundary behavior and confidence-procedure interpretation; success on the first does not establish the last. DX-B3 tests a NumPy expression/shape explanation, not a complete implemented pipeline. DX-F2, DX-I3 and DX-H1 carry no implementation claim. DX-G2/DX-G3/DX-I2/DX-I4 are scientific/theoretical critique prompts, not formal-proof certificates. Implementation credit needs actual code where the question asks it.

For example, record `M08.bernoulli_mle: independently sound` and `M09.interval_interpretation: needs_repair` for different DX-E3 subparts if that is what the work shows. Immediately teach the failed interpretation rather than restarting calculus or the whole diagnostic. The baseline point allocations support coverage checking; they are not the current advancement rule.
