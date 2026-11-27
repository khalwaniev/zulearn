# Precisely curated mathematics

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Only basic addition, subtraction, multiplication and division are provisionally fluent. Fractions, decimals, percentages, ratios, negative numbers, exponents and other arithmetic extensions are new until independently demonstrated. **Start with fractions today**, not a placement exam. Learn notation, expressions, equality, equations and inequalities systematically; later accelerate a subtopic only after the learner independently explains and applies it. Programming, basic DSA and introductory data/model reasoning run concurrently. A whole mathematics module is never a gate to all Deep-ML/TensorTonic access.

The distinction in the registry governs every selection here: entry operations versus later depth. Finite probability precedes continuous probability; scalar SGD precedes formal convex optimization; tabular RL precedes neural approximation. Future error bounds and theorem conditions are taught when needed, without pretending they are already mastered.

The first-week resources are fixed in the [workflow](../operations/WEEKLY_DAILY_WORKFLOW.md). The arithmetic bridge below comes first; the table then orders the remaining foundations. Original worksheets are versioned local learning tasks, not university/platform problem IDs. Diagnostic-bank labels now start with `DX-`; all worksheet identifiers are unique and listed in [the worksheet index](WORKSHEET_INDEX.md).


## Arithmetic extensions — learn them, do not assume them

Only the four basic operations are provisionally fluent. “Immediately after arithmetic” in historical records must not be read as assuming fraction, decimal, percent, ratio, negative-number or exponent mastery. The fixed default is OpenStax *Prealgebra 2e* for these missing operations, then the already selected algebra sequence. This is a scoped bridge, not another whole textbook to complete.

| Subskill | Exact explanation and original practice | Independent progression |
|---|---|---|
| F01.fraction_meaning | §4.1 meaning/equivalent fractions: START-01 pictures, then 5/4 and 1 1/4 as the same quantity | Explain equal parts/reference whole; create a fresh equivalent fraction |
| F01.fraction_operations | §§4.2,4.4,4.5, one operation at a time; START-02 tasks. §4.3 mixed/complex fraction subsections only after ordinary fractions: (1 1/2)×(2/3), (1/2)/(3/4) | Explain common units, valid cancellation and reciprocal; sample a changed task for the operation just learned |
| F01.decimals | §§5.1–5.3 place value/operations/conversions; START-03; round 2.346 to hundredths and compare 0.5/0.50 | Convert a fresh terminating fraction, operate/round with explanation; recurring decimals when encountered, not assumed |
| F01.ratios_percent | §5.6,§6.1, then §6.2 basic percent change after equality is learned; START-04; compare a part:part ratio with part:whole; 20% decrease of 50 then 20% increase of the result | Correctly identify reference quantity, unit rate and percent base; never infer from basic division alone |
| F01.signed_numbers | §§3.1–3.4, START-05; order −3 and −1, compute 2−5 and (−3)×(−2); later combine signed fractions | Explain on a number line and justify the sign operation before algebra uses it |
| F01.powers_order | §2.1 exponent/order subsections, START-06; repeated multiplication, parentheses and minus sign | Separate power from multiplication; explain the different parse trees of −(2²) and (−2)² |
| F01.extended_powers_roots | After positive powers and fractions: §10.5 Integer Exponents and Scientific Notation; original tasks 2⁰,2⁻³,3.2×10⁴ and the nonnegative square root of 49. For the root definition the tutor teaches that a nonnegative square root squares back to the given nonnegative number | Verify 1,1/8,32000 and 7; distinguish √49=7 from the two solutions of x²=49. Real-domain/rational powers deepen with F03 |

The latest correction refines F01 into subskills; it does not add seven prerequisite modules or a preliminary test. The default first seven visits are in the workflow. At the end, the tutor supplies one exact next task and skips routine work only on demonstrated independent understanding. Once notation/equality is active, remaining arithmetic variations can be learned inline without stopping programming/DSA/introductory ML.

## Systematic route after the arithmetic extensions

| Sequence | Exactly what to learn | Default source selection | Local practice and progression |
|---|---|---|---|
| 1. Elementary algebra | Variables, notation, expressions versus equations, substitution, inverse operations, equality | OpenStax *Elementary Algebra 2e* §1.2, then §§2.1–2.2 | START-07; then MAT-ALG elementary items; explain each operation before changing difficulty |
| 2. Intermediate algebra | Distribution, like terms, polynomials, factoring, rational expressions and domain restrictions | Same book §1.9 and relevant polynomial/factoring/rational-expression sections from its contents | MAT-ALG; select the next operation needed, not a complete arithmetic review |
| 3. Equations and inequalities | Variables on both sides, identities/no solution, linear inequalities, sign reversal; later quadratic/rational cases | Same book §2.3 and §2.7 first; quadratic/rational-equation sections when those skills are active | MAT-ALG equation/inequality items after START-07; one changed independent example for each subskill |
| 4. Functions and notation | Input/output, domain/range, graphs, composition and inverse conditions | OpenStax *College Algebra 2e* §3.1, then selected composition/inverse sections | MAT-LOG function items after elementary notation; logarithm items later |
| 5. Exponents/logarithms | Laws with domain conditions, exponential functions, logarithms and log equations | The existing Khan exponential/logarithmic-functions unit as the single supplementary explanation when needed | MAT-LOG; finite numerical counterexamples, derivation of laws under stated conditions |
| 6. Geometry/trigonometry | Coordinates, lengths, angles, unit circle, sine/cosine, rotations and basic identities | Selected Khan coordinate/unit-circle topics already mapped in the baseline; MAT-GEO as the exact task sheet | Draw, calculate and explain; avoid a full Olympiad-geometry prerequisite |
| 7. Sequences/series/recurrences | Arithmetic/geometric sequences, finite/infinite sums, recursive definitions, generating functions | MAT-GEO series item → MAT-REC; selected MIT 6.042J material titled generating functions | A formal generating-function derivation does not require completing calculus |
| 8. Logic/proof/discovery | Quantifiers, implication, counterexample, induction, invariants and constructive reasoning | MIT 6.042J selected proofs/induction; MAT-PROOF | Begins informally with START-01 equivalence reasoning and the workflow's false fraction-addition counterexample; formal depth grows alongside algebra/DSA |
| 9. University mathematics | Linear algebra, calculus, probability, statistics, optimization, numerics, information and learning theory | Existing precise MIT/Stat 110/MML/Boyd selections below | Take the required local entry operation; deepen in parallel with its ML use |
| 10. Research mathematics | Analysis, geometry, dynamics, fixed points, VI/MC, algorithmic probability and formal self-reference | MAT-ANALYSIS/MAT-SYM/MAT-DYN/MAT-FIX/MAT-VI/MAT-MC/MAT-MDL as relevant | Advanced theorem/rigor requirements are conditional on the actual scientific claim |

Recurring creativity is part of every stage: generate an example, propose a rule, try to break it, and revise or prove it. Once a week give that reasoning move a longer non-routine problem. MathNet/AoPS/OTIS/Putnam stay selective sources as readiness increases; they are not an extra prerequisite ladder.

## Local bridges before a specific operation

| Operation needed now | Learn the minimum immediately | Deeper content later |
|---|---|---|
| First Python variable or list | Read Python tutorial §3.1; try START-01 code | No algebra-completion requirement; complexity/proof later |
| A Deep-ML/TensorTonic arithmetic/statistics example | Substitute values, compute a finite mean and explain the target | No full probability or linear algebra entrance gate |
| First line prediction | Use a two-parameter expression and compare predictions with observations | Least-squares derivation needs matrices; gradient derivation needs derivatives |
| Matrix-based learning | Work the needed MAT-LIN dimensions/linear-system example | Spaces, SVD and spectral proofs in parallel |
| Finite probability or tabular MDP | Learn a finite weighted sum and conditional proportion | Integration only for continuous densities; stochastic-process proofs later |
| Scalar optimization | Learn the derivative of the actual one-variable loss | Jacobians/Hessians for vectors; KKT for the relevant constrained/convex theorem |

These are learning interventions, not a comprehensive examination. A failed local check opens immediate explanation/practice and a fresh attempt on that operation; unrelated study lanes continue.

## Deepen in parallel with core ML

| Area | Primary selection | Internal platform role | Exact new sheet and independent gate |
|---|---|---|---|
| Logic/proof/discrete math | MIT 6.042J Spring 2015 readings on propositions, quantifiers, induction, invariants, sets/functions, graphs and counting | D104–108 and D079 supply computational contexts | MAT-PROOF; independent proof and counterexample, not memorized template |
| Linear algebra | MIT 18.06 lectures 9–10; 14–17; 21–22; 25,27,29,30–31,33 as gaps require | D001,D020,D079,D110; one numerical-linear-algebra build | MAT-NUM items 2–3; unseen official exam problems selected by an examiner |
| Multivariable/matrix calculus | MIT 18.02SC Unit 2 Parts A–C; Unit 3 Part A for double-integral probability; MML Ch.5 for matrix/autodiff connections | D025–029,D111 | MAT-CALC advanced; original gradient/Hessian transfer plus relevant Unit 2 Exam problems |
| Probability | Stat 110 topics: random variables, expectation, continuous/joint distributions, conditional expectation, inequalities/limit theorems; Markov chains when RL begins | D008,D013,D069–071,D112 | MAT-PROB and MAT-PROC; hold back fresh official strategic-practice/exam questions |
| Inference and statistical validation | MML Ch.8 When Models Meet Data and Ch.9 Linear Regression; selected ISL resampling/inference sections if needed | D006–008,D011,D013; estimation/resampling projects | MAT-INF–MAT-EXP; cluster/paired study design and unseen uncertainty task |
| Convex optimization | Boyd–Vandenberghe Ch.2 Convex Sets, Ch.3 Convex Functions, Ch.4 Convex Optimization Problems, Ch.5 Duality; Ch.9 Unconstrained Minimization | D029 and one optimization project | MAT-CONVEX; derivation, KKT and diagnostic example, not lecture completion |
| Stochastic optimization | MAT-SGD and a single optimizer build; read the active optimizer's original equations | D029,D032 | Compare unbiased SGD with biased sampling, then controlled optimizer experiment |
| Numerical analysis | MIT 18.065 numerical matrix topics selected after 18.06; one Deep-ML Numerical Linear Algebra from Scratch in NumPy project | D042 and relevant precision/training labs | MAT-NUM; residual/error/conditioning distinction and reference agreement |
| Information theory | D015 explanation/math and information-theory project; MML Ch.6 for distributions | No second full entropy bank | MAT-INFO; support/normalization conditions and unseen distribution comparison |
| Generalization/concentration | Selected MIT 18.657 Fall 2015 notes on concentration, uniform convergence and learning guarantees **after basic inference** | D005 plus original small simulations | MAT-BOUND; bound assumptions and adaptive-selection counterexample |
| Causal reasoning | MAT-CAUS plus D007 experimentation and S02–S04 research tasks | No assertion that an A/B toolkit teaches all causal identification | Draw graph, specify identification assumptions and distinguish predictive from interventional claim |

For 18.02SC, flux, Green's theorem, Stokes' theorem and full vector-field calculus are deferred unless the chosen physics/geometric problem requires them. For 18.06, determinant/cofactor calculations, Jordan form and extended FFT material are selective references, not compulsory parallel tracks. For 18.065, do not repeat 18.06 fundamentals merely because they reappear.

## After core foundations or on a research trigger

| Topic | Trigger | Required selection and stopping point |
|---|---|---|
| Real analysis M19 | A theorem depends on convergence, interchange of limits/integrals, continuity or compactness | MIT 18.100A relevant sequence/limit/continuity material and MAT-ANALYSIS; select only the theorem prerequisites, stop after an independently proved argument |
| Symmetry/geometry M20 | Equivariant graphs/protein structures, 3D vision or symmetry-based reasoning | MAT-SYM; group actions, orthogonal transformations and SE(3); then the mathematical definitions of the active EGNN/equivariant paper |
| Abstract algebra | A concrete representation/group-theoretic proof demands it | Only groups/actions/representations required by that proof; no general ring/field sequence by default |
| ODEs/dynamical systems M21 | Model-based control, neural/continuous dynamics | MIT 18.06 lecture 23 for linear systems, MAT-DYN for stability; selected ODE material for the active model |
| SDEs/PDEs M22 | A diffusion/physics/inverse-problem method actually uses them | Read the chosen primary paper's mathematical setup and selected prerequisite course units; verify a 1D case and boundary conditions before scaling; this branch requires a scoped addendum when activated |
| Algorithmic information/universal search M23 | RSI, program search or intelligence-measurement theory | OOPS, Gödel Machines and On the Measure of Intelligence; computability first; state the exact utility, prior, language and provability assumptions |
| Advanced stochastic processes | Non-Markov dependencies, continuous time or formal martingale arguments required by research | Expand MAT-PROC toward the particular process; basic RL needs finite-chain reasoning first |
| Differential geometry/topology | A manifold/geometric construction requires it | Add only definitions and proofs used in that construction; prestige is not an entry criterion |

## Original practice sheets: complete specifications

These sheets are for learning. They are not unseen mastery exams after you have practiced them. For each: show assumptions, steps and a numerical/edge-case check where meaningful. After instruction use a distinct held-back diagnostic or examiner-selected task.

**MAT-ARITH — arithmetic extensions, learned in subskills.** Start with START-01 fraction meaning/equivalence, then follow the arithmetic-bridge rows above. Original practice: (1) draw and compare 1/2,2/4,3/4 with equal reference wholes; (2) calculate 1/3+1/6, (2/3)×(3/4), (3/4)÷(1/2), stating nonzero-denominator conditions; (3) connect 1/4,0.25,25% and distinguish 2:3 from a fraction of the total; (4) add/subtract/multiply/divide simple negative numbers and explain order on a number line; (5) compare 2+3×4,(2+3)×4,−(2²),(−2)²; (6) learn zero/negative powers, roots and scientific notation from the explicit row; (7) after percent changes are taught, calculate a 12% decrease followed by a 12% increase and explain its base; (8) learn milli as one thousandth, convert 2.5 milliseconds to seconds, and estimate the count in an hour; (9) later distinguish rational from irrational representation and exact from finite-precision values. These are teaching tasks, not evidence already achieved or an admission test. Do not assume any extension from four-operation fluency.

**MAT-ALG — algebra in levels.** Start with (1) translate “three groups of x and two more” into an expression, evaluate it at two values, and distinguish an expression from an equation; (2) solve x+6=13 and 4x=20 by doing the same valid operation to both sides, then check by substitution. Next learn (3) expand 3(x+2) and compare it with 3x+2 using a counterexample; (4) solve 2(3x−1)=4x+10; (5) solve −2x+3>9 and explain sign reversal. Later, when intermediate algebra is active, (6) factor x²−5x+6 and solve its zero equation; (7) simplify (x²−1)/(x−1) with its original domain; (8) solve (x−2)/(x+1)>0 with exclusions. Do not require items 6–8 before beginning functions, programming or simple prediction.

**MAT-GEO — geometry/precalculus.** (1) For u=(3,4), v=(−4,3), find lengths, dot product, angle and projection; draw the geometry. (2) Derive sin²θ+cos²θ=1 from coordinates and compute a rotation of u by a right angle. (3) Derive the first n terms of a geometric sum, its infinite limit conditions, and the special case ratio 1. (4) Give a convergent sequence whose associated series diverges.

**MAT-LIN — matrices and first regression.** (1) Let X have rows (1,0),(1,1),(1,2) and y=(1,2,2). Solve least squares by projection/normal equations, then via a linear solver; verify residual orthogonality. (2) Replace the second column by twice the first and characterize all minimizers. (3) Explain why forming an explicit inverse is unnecessary. Implement only after deriving the equations.

**MAT-CALC — calculus bridge and transfer.** (1) Derive d/dx log(1+exp(3x)); evaluate it stably at x=1000. (2) Differentiate a composition f(g(x)) and construct a domain-boundary counterexample. (3) For f(w)=0.5‖Xw−y‖²+λ‖w‖², derive gradient/Hessian and their shapes. (4) Integrate p(x)=2x on [0,1], check normalization and compute its expectation. (5) Explain the difference between a derivative's value, a finite difference and a symbolic expression.

**MAT-PROOF — proof and discovery.** (1) Prove that the sum of the first n odd positive integers is n² using induction and a geometric argument. (2) Negate “for every ε>0 there exists N such that for every n>N, |a_n−L|<ε.” (3) Prove that a finite tree with n vertices has n−1 edges, stating what “tree” means. (4) Refute “pairwise independence implies mutual independence” with a constructed distribution. Record an abandoned proof idea and why it failed.

**MAT-PROB — probability.** (1) A disease prevalence is 1%, sensitivity 90%, specificity 95%. Derive a positive-test posterior and explain the denominator. (2) For correlated Bernoulli variables, show which expectation identities survive without independence. (3) Build a joint table, calculate marginal/conditional distributions and verify total expectation. (4) Transform a continuous random variable with an invertible map, checking support and normalization. Use different values from the diagnostic when retesting.

**MAT-PROC — processes.** (1) For transition matrix [[0.8,0.2],[0.3,0.7]], find a stationary law and verify it. (2) Give a periodic chain with a stationary law but nonconvergent state distribution from some starts. (3) Distinguish a stationary marginal from independent samples and state how autocorrelation affects inference. Activate continuous-time material only when the research method needs it.

**MAT-INF — inference.** (1) Observe 7 successes in 10 Bernoulli trials. Derive MLE and a posterior under a stated Beta prior; distinguish MAP from posterior mean. (2) Derive Gaussian regression likelihood and connect it to squared loss under stated variance assumptions. (3) Construct two mechanisms yielding similar prediction performance but different causal interpretations.

**MAT-UNC — uncertainty and measurement.** (1) Design a bootstrap comparison for two algorithms on 30 patients with 10 images each. Specify the resampling unit, pairing and estimand; contrast with an image-level bootstrap. (2) Describe when missing labels are “unknown” rather than negative. (3) Make a measurement-provenance table and identify one selection bias. No synthetic numerical result may be reported without executing the simulation.

**MAT-EXP — experiments and selection.** (1) Plan a paired model comparison with a meaningful effect threshold, interval, tuning budget and primary metric. (2) Explain why choosing the best of 100 validation configurations affects the winning estimate. (3) Contrast confirmatory, secondary and exploratory analyses; specify how multiplicity and adaptive choices will be reported. (4) Explain a confidence interval without assigning a post-data frequentist probability to a fixed parameter.

**MAT-CAUS — causal identification.** (1) Construct a latent common-cause graph with high predictive association and no direct effect. (2) State assumptions under which randomization identifies an average effect. (3) Compare intervention on a neural activation with selecting examples that correlate with it; propose a matched negative control. Explain why an ablation's performance effect alone does not fully identify a unique mechanism.

**MAT-NUM — numerical reliability.** (1) Evaluate log(exp(1000)+exp(999)) stably; compare subtraction of nearly equal numbers in two precisions. (2) Construct an ill-conditioned 2×2 system where a small residual accompanies substantial solution error. (3) Compare normal equations and QR on a nearly collinear design using condition estimates; state what was actually measured. (4) Check a smooth loss gradient by central differences across a range of step sizes and explain the U-shaped error tradeoff.

**MAT-CONVEX — convex optimization.** (1) Prove convexity of a PSD quadratic and give a nonconvex quadratic counterexample. (2) Minimize x²+y² subject to x+y=1, x,y≥0 using KKT; verify feasibility, stationarity and complementary slackness. (3) Construct a case where constraint qualification fails and explain which conclusion becomes unsafe. Read the relevant duality section rather than memorizing a universal KKT sufficiency claim.

**MAT-SGD — stochastic optimization.** (1) Derive the expected minibatch gradient for uniform sampling. (2) Bias the sampling probabilities, show what estimator changes, and construct a valid correction if probabilities are known. (3) Compare SGD/momentum/Adam on one tiny loss under equal data, initialization and tuning budget; plot learning curves only after execution. Do not generalize a single toy outcome into universal optimizer superiority.

**MAT-INFO — information.** (1) Compute entropy, cross-entropy and KL for two valid three-outcome distributions. (2) Explain the infinite-KL support case. (3) Derive nonnegativity of KL with a legitimate inequality or convexity argument. (4) Explain why high mutual information does not establish a causal direction.

**MAT-BOUND — learning theory.** (1) Apply a bounded independent-variable concentration inequality with explicit assumptions. (2) Explain how a union bound changes when selecting among finitely many models. (3) Construct a data-leakage/adaptive-testing counterexample to an unjustified independence assumption. Focus on whether the theorem applies, not just substituting numbers.

**MAT-ANALYSIS — analysis trigger.** (1) Give an ε–N proof of a sequence limit. (2) State and prove or correctly invoke the exact condition needed to interchange a limit with an expectation in the active paper. (3) Produce a counterexample when that condition is removed. Select one relevant theorem; no whole analysis sequence is imposed.

**MAT-SYM — geometry trigger.** (1) Prove preservation of pairwise distances under x↦Rx+t for RᵀR=I. (2) Show why reflection can preserve distances while changing chirality. (3) Define invariance/equivariance under permutations and rigid motions and test a simple message-passing layer. Connect the proof to actual coordinate and feature conventions.

**MAT-DYN — dynamics trigger.** (1) Solve x′=−kx and derive explicit Euler's stability region for real k>0. (2) Compare one-step prediction error with multi-step rollout error. (3) Identify what observation noise and partial observability change; do not infer a physical mechanism solely from predictive fit.

## Recurring mathematical creativity and proof discovery

At each normal learning session include one small **generate → conjecture → test → explain** move, often 5–10 minutes: construct two equivalent expressions; find a counterexample; predict the next recurrence term; design an invariant or a failing program input. This starts immediately after arithmetic. It is ordinary mathematical reasoning practice, not an optional prestige activity.

Each week reserve one bounded, non-routine problem aligned with the current level. At the start, use the original START-01 fraction-repartition task or the workflow's false fraction-addition counterexample; use MAT-ALG identity tasks once algebra is active. Later use a selected problem from [MathNet](https://mathnet.mit.edu/), [AoPS](https://artofproblemsolving.com/), the proof-writing/appropriate topic in [OTIS Excerpts](https://web.evanchen.cc/excerpts.html), or the [official Putnam archive](https://maa.org/maa-putnam-archive/). Do not assign an uninspected advanced contest task to a novice merely because the source is prestigious. The tutor selects and records one exact source locator in the queue, with solutions hidden.

For an attempt, write the representation, small cases, candidate rule, counterexample search, useful failed approach and final argument. Use a hint when progress stops, then write a new independent explanation. Evaluate discovery by the reasoning actually produced, not by claiming originality for a known theorem. Worked examples and proof construction coexist; endless cold problem solving is not required.

The local frequency/time bounds are operating choices. Evidence does not establish broad far transfer from Olympiad preparation to frontier AI research. Keep the activity recurring while adapting its difficulty and duration; reduce the task size rather than turning mathematics into an exam-only routine. A low Putnam score has no universal implication for research potential.

## Khan Academy and Math Academy decision

OpenStax is the fixed default for the systematic algebra start. Khan remains a targeted alternative explanation for a local difficulty, rather than another curriculum to complete. Math Academy's official pages describe adaptive diagnostics and prerequisite graphs. Those descriptions establish product features, not comparative causal effectiveness for this learner. A paid subscription is **not required**. If already available, use it instead of an equivalent repair track and retain independent written gates; do not run both to completion. Deep-ML math cards often include worked examples and three practice problems, but labels such as “theory” do not prove formal-proof coverage.

## Resource addresses and assessment selection

- [MIT 18.06 Spring 2010 lectures](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/resources/lecture-videos/); use the linked official assignments/exams. An examiner chooses held-back questions covering the named topics; no uninspected question number is claimed here.
- [MIT 18.02SC Fall 2010](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/); selected Unit 2 exam and double-integral practice only.
- [MIT 6.042J Spring 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/), [18.065 Spring 2018](https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/), [18.657 Fall 2015](https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/).
- [Stat 110](https://stat110.hsites.harvard.edu/), including its linked free second-edition probability text and practice/solutions. The course page's practice route may move; use its navigation rather than assuming an unverified subpath.
- [MML official contents and free book](https://mml-book.github.io/), [Boyd–Vandenberghe official book](https://web.stanford.edu/~boyd/cvxbook/), [EE364A](https://web.stanford.edu/class/ee364a/).
- [Khan algebra](https://www.khanacademy.org/math/algebra), [exponential/logarithmic functions](https://www.khanacademy.org/math/algebra-home/alg-exp-and-log), [Math Academy feature description](https://mathacademy.com/how-it-works).
- [MathNet](https://mathnet.mit.edu/), [AoPS](https://artofproblemsolving.com/), [OTIS Excerpts](https://web.evanchen.cc/excerpts.html), [Putnam archive](https://maa.org/maa-putnam-archive/).

Some advanced course landing pages and all individual future exercises were not re-fetched in this recovery. Their content is selected conditionally by topic; obtain and inspect the exact task before assigning it, record edition/revision, and use the original sheets above when access fails. This is an access limitation, not permission to invent exercise IDs.


## Explicit mathematical depth added by the corrective audit

These original tasks close named coverage gaps. Activate the relevant item when its entry operations are known; they are not additional courses to complete before ML.

**MAT-LOG — functions, exponents and logarithms.** (1) For f(x)=2x+1, evaluate f(0),f(3), state an input/output rule and distinguish f(x) from f×x. (2) Compose f with g(x)=x² and compare the two orders. (3) Derive exponential laws for positive bases and explain which extensions need conditions. (4) For f(x)=ln(2x+1), give the real domain and inverse. (5) Refute ln(a+b)=ln a+ln b with positive a,b and justify ln(ab)=ln a+ln b under valid conditions. Start items 1–2 before items 3–5.

**MAT-TAYLOR — Taylor approximation, Jacobians, Hessians and error.** (1) For exp(x), derive its degree-two polynomial at zero and a Lagrange-form remainder; for |x|≤a, bound the absolute remainder by exp(a)a³/6 under the needed differentiability. Evaluate the bound at x=0.1 and compare with actual error. (2) For f(x,y)=x²+xy+3y², derive gradient and Hessian; write the second-order Taylor expression about a point and show it is exact. (3) For a vector-valued map, state the Jacobian's input/output dimensions; distinguish a Hessian of a scalar function from a Jacobian. State conditions before exchanging derivatives or invoking an error theorem. MML Ch.5/selected MIT 18.02SC supports the calculus; full real analysis is not the first lesson.

**MAT-TRANSFORM — conditional expectation and change of variables.** (1) Let joint probabilities for (X,Y)=(0,0),(0,1),(1,0),(1,1) be 0.1,0.2,0.3,0.4. Compute E[X|Y=0], E[X|Y=1], and verify E[E[X|Y]]=E[X]. (2) After basic integration, transform X uniform on (0,1) to Y=X²; derive the support/density, including the inverse derivative, and check normalization. (3) After Jacobians, transform uniform (X,Y) on the unit square by U=X+Y,V=X−Y; derive the image region and absolute inverse-Jacobian determinant. Distinguish probability mass, density, conditional expectation and a point estimate.

**MAT-REC — recurrences and generating functions.** For a₀=0, aₙ₊₁=2aₙ+1: (1) generate values and guess a formula; (2) prove aₙ=2ⁿ−1 by induction; (3) derive A(z)=Σₙ≥₀aₙzⁿ=z/[(1−z)(1−2z)] as a formal power series; (4) if discussing analytic convergence, state its radius instead of silently using a formal identity numerically. Compare with the operation counts of a recursive algorithm. This requires algebra/induction, not a completed calculus course.

**MAT-FIX — fixed points and their different meanings.** (1) Find the fixed point of g(x)=(x+2)/3 and compute iterations from x₀=0. Show contraction factor 1/3 and bound |xₙ−x*|. (2) Give a map with a fixed point but divergent iteration from some starts, such as g(x)=2x. (3) When studying finite discounted MDPs, prove the Bellman optimality operator is a γ-contraction in the sup norm for 0≤γ<1 and bounded rewards. Existence, uniqueness and convergence are separate assertions with assumptions. Logical fixed-point/self-reference results in C09/C17 are a later, different topic; a numerical contraction is not a Gödel-machine theorem.

**MAT-MC — Monte Carlo and importance sampling.** Let p=(0.2,0.3,0.5), h=(0,1,4), and proposal q=(0.5,0.25,0.25). (1) Calculate the exact expectation. (2) Estimate it from IID p samples and report Monte Carlo variability without inventing runs. (3) Derive the ordinary importance estimator using p/q and check its expectation exactly under q. (4) Replace q by a proposal missing positive-p support and explain failure. (5) Compare ordinary with self-normalized importance sampling: the latter is generally biased at finite sample size; consistency/variance require conditions. Treat effective-sample-size summaries as diagnostics, not automatic confidence guarantees. Begin with finite cases; continuous integrals enter after M05.

**MAT-VI — variational and amortized inference.** A model assigns p(x,z=0)=0.1 and p(x,z=1)=0.3 for the observed x. With q(z)=(0.5,0.5), compute evidence, posterior, ELBO=E_q[log p(x,z)−log q(z)] and KL(q||p(z|x)); verify log p(x)=ELBO+KL under valid support/finite-value conditions. Repeat using q equal to the posterior. Explain approximation-family bias versus sampling/optimization error and how q_φ(z|x) shares inference across inputs. Use the [Blei–Kucukelbir–McAuliffe review](https://arxiv.org/abs/1601.00670) only for the relevant definitions/ELBO section, not as an additional full-paper reproduction obligation.

**MAT-MDL — codes, algorithmic probability and model choice.** Given valid two-part coding schemes with model/data lengths (2,14) and (10,3) bits, compare total description lengths and explain why “choose the simplest model” is incomplete without residual-data coding. State the codebook assumptions. Distinguish a computable MDL scheme from universal algorithmic probability over prefix programs, which gives a semimeasure with important uncomputability/constant/prior limits. Relate to entropy, generalization and OOPS only after the relevant topics are active; no claim that practical compression achieves a universal intelligence guarantee.

**MAT-BOUND enhancement.** In addition to the existing sheet, derive Markov's inequality for nonnegative variables and Chebyshev from it; apply Hoeffding only under its bounded independent-sample assumptions. Compare a single-model bound with a finite union bound and an adaptively selected score. Distinguish expectations, high-probability guarantees and empirical confidence procedures. This is concentration literacy before advanced empirical-process theory.

## Advancement without prerequisite bureaucracy

For any active subskill: study a short example, explain the move, try a varied task independently, repair the precise error and continue. Acceleration requires actual independent work, not a degree or AI-generated proof. A later delayed sample checks retention. Do not require full geometry to add vectors, full calculus to count outcomes, full KKT theory to apply scalar SGD, or all foundational mathematics to enter an accessible platform activity.
