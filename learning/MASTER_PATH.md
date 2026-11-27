# Comprehensive master learning path — frozen V1

The path develops independent research competence for PhD preparation under Professor Jürgen Schmidhuber; AGI, RSI, reasoning, mechanistic interpretability and AI for Science; ARC, CASP and CAFA; and original mathematics, algorithms, architectures and experiments. This is the existing approved scope, not a new curriculum investigation.

**Daily entry:** [NOW](NOW.md). You do not need to read this whole map before learning. Use ChatGPT Web to teach the next selected task, keep a few private evidence lines, and use Anki for atomic retrieval. No software installation or agentic dependency.

## Concurrent progression

| Stage | Mathematics | Computing / ML / science | Exact route and evidence |
|---|---|---|---|
| Start now | Fraction meaning/equivalence; then each fraction operation, decimals, ratios/percent, negatives, powers/order | Existing Python assignment/output can start concurrently | NOW, then approved START-01–07; one local check after teaching, immediate repair |
| Foundations | Elementary/intermediate algebra, equations/inequalities, functions/notation, exponents/logs, geometry/trig, sequences/series, logic/proof | Programming abstractions, scans/maps, correctness/complexity; accessible Deep-Path activities | MAT-ARITH, MAT-ALG, MAT-LOG, MAT-GEO, MAT-REC, MAT-PROOF; exact sections in approved mathematics |
| Shared university core | Linear algebra, single/multivariable calculus, finite→continuous probability, inference, numerics | DSA, classical ML, baselines, reliable experiments, tensor semantics, autodiff | 109-row registry below; primary Deep-Path Everything and selected complementary resources |
| Deeper AI methods | Taylor/error, Jacobians/Hessians, coordinate transformations, concentration, optimization, information, MC/importance sampling, VI, fixed points | Neural architectures, sequence/attention/LMs, tabular→approximate RL, planning/world models, GNNs, generation separately from SSL, post-training/reward/preferences/verifiers | Relevant approved worksheets and concept activities; independent derivation, implementation and transfer |
| One active frontier question | Analysis, geometry, dynamics, AIT/MDL or domain science required by that question | Five retained frontier branches; the rest remain accessible reference queues | One selected mechanism/paper, strongest alternative, controlled test and independent criticism |

Entry prerequisites mean the needed operation, often teachable inline; conditional research-depth dependencies are not cumulative global gates. Do not wait for every foundational mathematics module before beginning Deep-ML, TensorTonic, programming or DSA. Accelerate through independently demonstrated subskills; preserve later retention/transfer checks.

## Fixed resource allocation

- **Deep-Path Everything:** all [112 concepts](../tracking/DEEP_PATH_EVERYTHING.md) and relevant activities by default, with actual task curation as encountered. D001 is the first ML concept; START-07's D003 toy is an accessible parallel activity, not an exemption from concepts 1–2.
- **Deep-ML Mathematics / Intuition:** understanding, derivation and discovery. **Labs / Projects:** independent implementation and scientific experimentation. Check identity across Problems, Courses, Learning Paths and Collections rather than assuming overlap from titles.
- **TensorTonic:** selected complementary mathematics, architectures, systems and transfer. Add a meaningful variation or named missing competency, not another full introductory course by default.
- **Rigorous mathematics:** [exact chapters/sections and original sheets](../curriculum/v1/curriculum/MATHEMATICS.md). **TCS/algorithms:** [exact selected coverage and problem choices](../curriculum/v1/curriculum/ALGORITHMS_TCS.md), including recurrences/generating functions, amortized analysis, formal languages/computability, synthesis/DSLs, SAT/SMT and verification. LeetCode/CSES remain selective.
- **Mathematical creativity:** recurring counterexample/proof discovery, with selected MathNet/AoPS/OTIS/Putnam at local readiness. No separate contest-preparation syllabus is added.
- **Research papers:** [retained specialization sequence](../curriculum/v1/research/RESEARCH_SPECIALISATIONS.md); [worksheet definitions](../curriculum/v1/curriculum/WORKSHEET_INDEX.md). Read/derive/implement only at the required depth for the active mechanism. Reading is not a reproduction claim.

## Frontier refinements already included

| Existing branch | Narrow refinements / evidence |
|---|---|
| AGI / world models | Composition on held-out task combinations; hierarchical planning; compare reuse and generalization at matched budgets |
| RSI | Learned optimization and checked self-generated training signals; meta-train/test separation, total cost and independent evaluation |
| Reasoning | Neural-symbolic proposals/constraints, synthesis/DSLs, formal verifiers and inference-time computation; separate valid proof from plausible text |
| Mechanistic interpretability | Superposition, sparse autoencoders, feature decomposition, causal controls and basis nonuniqueness |
| AI for Science | Protein language models and MSA; homology/time/structure leakage, scientific validity, CASP/CAFA evaluation and uncertainty |

All 11 targeted refinements remain in [subcompetencies.json](../data/subcompetencies.json), under existing IDs. No new mandatory course/paper list. Studying agents, autonomy and RSI remains part of research competence; using agent software is not a prerequisite for this learning system.

## Assessments and durable evidence

Use [independent checkpoints](../assessment/CHALLENGE_PROTOCOL.md) when their own local readiness is met. Begin with a short local fraction check, progress to research-aligned original IMO/IOI/ICPC/Putnam tasks, and retain the full unmodified IOAI edition track. IOAI scope is not filtered toward the five research domains. Competition work must not displace foundations or frontier research.

[Activity records](../tracking/ACTIVITY_LOG_TEMPLATE.md) capture completion and assistance. [Competency records](../tracking/COMPETENCIES.md) capture independent reasoning, actual execution, later retrieval and transfer. Public checkboxes are organizational records, not credentials. Save real private evidence separately; have the tutor return one next action rather than redesigning your day.

## Complete 109-competency resource map

This is a transcription of retained primary resources and evidence goals. Consult the [approved entry/depth registry](../curriculum/v1/curriculum/COMPETENCY_REGISTRY.md) for precise dependencies and the exact worksheet/section definition. No whole-course completion is implied by a resource name.

| ID | Competency | Primary selected resource | Independent evidence target |
|---|---|---|---|
| F01 | Four basic operations and arithmetic extensions, scored separately | OpenStax Prealgebra 2e selected §§4.1–4.5,5.1–5.3,5.6,6.1,3.1–3.4,2.1; MAT-ARITH | Only F01.basic_ops assumed by self-report; every extension starts new; local drawings/explanations/calculations after teaching |
| F02 | Algebra, equations and inequalities | After the opening arithmetic queue: OpenStax Elementary Algebra 2e §§1.2,1.9,2.1–2.3,2.7 | Local notation/equality/inequality checks separately; optional DX-A1 after teaching, not DX-A4 |
| F03 | Functions, exponents and logarithms | OpenStax College Algebra 2e §3.1, then selected function/exponent/log units | Local function/domain/logarithm checks separately; DX-A2 only when logs are studied |
| F04 | Geometry, coordinates and trigonometry | MAT-GEO learning sheet | Compute norm, dot product and sine/cosine on a right triangle; explain angle invariance |
| F05 | Sequences, series, recurrences and generating functions | MAT-GEO learning sheet | Solve a recurrence directly and via a generating function; distinguish formal power series from analytic convergence |
| F06 | Sets, functions, logic and quantifiers | MIT 6.042J selected readings | DX-A3; negate nested quantifiers and construct a counterexample |
| F07 | Proof construction and discovery | MIT 6.042J proofs/induction | Prove an induction claim, refute a false converse, and explain where the proof idea came from |
| F08 | Counting and discrete probability | Stat 110 counting/conditioning | Count constrained arrangements with a justified sample space |
| M01 | Vectors, matrices and linear systems | MIT 18.06 lectures 1–4,6–8 | DX-C1; multiply compatible matrices, solve a singular system and interpret solution sets |
| M02 | Spaces, rank, nullspace and linear maps | MIT 18.06 lectures 9–10,30–31 | DX-C2; prove a rank/nullity example and distinguish injectivity from surjectivity |
| M03 | Orthogonality, least squares and QR | MIT 18.06 lectures 14–17 | Derive normal equations and a projection; compare QR with explicit inverse |
| M04 | Eigenvalues, PSD matrices and SVD | MIT 18.06 lectures 21–22,25,27,29,33 | DX-C3; construct rank-k approximation and explain a PSD quadratic form |
| M05 | Single-variable calculus and integration | MAT-CALC sheet plus selected MIT 18.01SC units | DX-D1; differentiate compositions, interpret integral accumulation and check a limit |
| M06 | Jacobians, Hessians, matrix calculus and Taylor approximation | MIT 18.02SC Unit 2 A–C | Derive gradient/Jacobian/Hessian with shapes; state smoothness and check Taylor remainder bounds |
| M07 | Finite and continuous probability, conditioning and conditional expectation | Stat 110 selected topics; MAT-PROB | Finite Bayes/expectation first; later total expectation, conditional-density and Jacobian transfer |
| M08 | Likelihood, estimation and Bayesian inference | MML Ch.8–9 selected sections | DX-E3; derive MLE/MAP and distinguish posterior from confidence interval |
| M09 | Uncertainty, resampling and dependence | Inference sheet MAT-UNC | Design cluster bootstrap, justify unit of analysis and compare paired methods |
| M10 | Testing, power, multiplicity and selection | Inference sheet MAT-EXP | DX-G2; expose adaptive tuning bias and specify a controlled confirmatory analysis |
| M11 | Convexity, constraints, duality and KKT | Boyd–Vandenberghe Ch.2–5,9 selected | Derive primal/dual KKT for a small constrained quadratic; explain when conditions suffice |
| M12 | Stochastic and nonconvex optimization | Optimization sheet MAT-SGD | Derive SGD expectation under stated sampling; diagnose conditioning and biased gradients |
| M13 | Floating point, conditioning and stability | Numerical sheet MAT-NUM | DX-H1; construct cancellation and ill-conditioned examples; report residual versus error |
| M14 | Numerical solvers, factorizations and differentiation | Deep-ML Numerical Linear Algebra project | Implement stable least squares and gradient checks; explain failure near nondifferentiable points |
| M15 | Entropy, KL and mutual information | D015 Information Theory | Derive nonnegativity under valid support assumptions; distinguish cross-entropy and entropy |
| M16 | Markov, Chebyshev, Hoeffding, union bounds and learning guarantees | MAT-BOUND; selected MIT 18.657 | Choose a valid bound, state independence/boundedness assumptions, and expose adaptive-selection failure |
| M17 | Graphs, relations and discrete structures | MIT 6.042J graphs/state machines | Prove a graph invariant and distinguish adjacency from incidence matrices |
| M18 | Markov chains and stochastic-process basics | Stat 110 Markov-chain material | Find a finite-chain stationary law and test irreducibility; distinguish stationarity from convergence |
| M19 | Real analysis and rigorous convergence | Analysis sheet MAT-ANALYSIS with a suitable analysis text | Prove a limit statement with quantifiers and identify missing interchange assumptions |
| M20 | Groups, symmetry and geometric invariance | Geometry sheet MAT-SYM | Prove a rigid-motion invariant; distinguish SO(3), O(3), SE(3), chirality and equivariance |
| M21 | ODEs, stability and dynamical systems | Dynamics sheet MAT-DYN | Solve a linear ODE and test a time-step stability condition |
| M22 | SDEs, PDEs and inverse problems | Active-paper mathematical prerequisites | Derive the needed operator/sampler and verify a toy case before large computation |
| M23 | MDL, algorithmic probability, universal search and self-reference | MAT-MDL; OOPS P06 and Gödel machine P07 as relevant | Calculate a two-part codelength; distinguish computable MDL practice from uncomputable universal algorithmic probability |
| M24 | Causal inference and identifiability | Causal sheet MAT-CAUS | Construct observationally equivalent causal models; distinguish prediction from intervention |
| C01 | Python independent programming | Python tutorial §3.1 and selected §4; START-01–07 | Fresh assignment/loop/function task after instruction; DX-B1/DX-B2 only when dict/list skills are studied |
| C02 | NumPy and tensor/broadcast semantics | D024 Tensor Puzzles | DX-B3; vectorize a calculation and catch a silent broadcast error |
| C03 | Testing, debugging, Git and environments | Software sheet ALG-SOFT | Debug a failing edge case; recreate an environment and trace a result to code/data versions |
| C04 | Correctness, recurrences, worst-case, expected and amortized analysis | MIT 6.006 lectures 1–2 and relevant notes | Loop invariant and bound; analyze a geometric-growth array with a potential/aggregate argument |
| C05 | Arrays, hashing, heaps, trees and tries | D104–106 selected task families | Choose a structure for a new workload; justify correctness and memory/time tradeoffs |
| C06 | Graph traversal and shortest paths | D107 graph tasks | DX-F2; BFS path correctness, disconnected cases and weighted-edge limitation |
| C07 | Dynamic programming and sequence alignment | D107 DP tasks | DX-F3; derive state, recurrence, base cases, reconstruction and complexity |
| C08 | Search, planning and CSP | Search sheet ALG-SEARCH; D077 | Implement bounded search/CSP; explain admissibility and search-space failure |
| C09 | Formal languages, automata, computability, reductions and complexity | TCS sheet ALG-TCS; MIT 6.045 selected notes | Specify a tiny grammar/automaton and distinguish recognition, decidability, NP-hardness and numerical input size |
| C10 | Program synthesis, typed DSLs and constraint-guided search | ALG-SYN | Evaluate/enumerate a typed DSL; compare two consistent programs, request a discriminating example, audit solver results |
| C11 | Autodiff implementation and checks | One Deep-ML autodiff build | Implement reverse mode on a DAG with reused nodes; compare analytic and finite-difference gradients |
| C12 | PyTorch training and data pipelines | D027,D032 | Build train/eval loop with correct masking, seeds, no_grad and checkpoint reload |
| C13 | CPU/memory/process literacy, profiling and compute architecture | ALG-SYSTEMS; D082 profiling basics | Explain data representation/memory/process state, diagnose nondeterminism, and measure one real bottleneck |
| C14 | CUDA and Triton kernel construction | D092–095 one relevant kernel family | Correctness against a reference and measured end-to-end speed under fixed conditions |
| C15 | Distributed training and inference systems | D053,D082–087 selected | Explain sharding/communication tradeoffs; test one small bottleneck rather than simulate unmeasured speedups |
| C16 | SQL/pandas and data provenance | D100,D103 minimal research subset | Join entity tables without multiplying observations; validate keys and temporal boundaries |
| C17 | SAT/SMT, formal specification, verification and trusted bases | ALG-VERIFY; official Z3 logical-modeling guide | Encode a small property; distinguish sat/unsat/unknown/timeout; interpret model/counterexample under stated semantics |
| C18 | Alternative frameworks and compilers | D028 or D096–098 only after trigger | Port one operation and test semantics; enter only for a measured research blocker |
| L01 | Data-generating process, splits and baselines | D003 Data, Splits and Baselines; START-07 observation task | Explain training versus new-data evaluation early; later independent split/leakage/uncertainty design |
| L02 | Linear and probabilistic regression | Prediction-first line examples; then D002,D006,D013 | Compare fixed line predictions without calculus, then derive/implement least squares and uncertainty at deeper level |
| L03 | Classification, metrics and calibration | D010–012 | Compute proper scoring metrics, diagnose imbalance, calibrate on held-out validation |
| L04 | Regularization and generalization | D005 | Show train/test gap and select regularization without test reuse |
| L05 | Trees and ensembles | D014,D016 | Implement a split and a bagging/boosting comparison with controlled tuning |
| L06 | Kernels and Gaussian processes | D017; Gaussian Processes project | Derive a kernel prediction on tiny data; diagnose PSD failure and compute cost |
| L07 | Clustering, mixtures and density estimation | D019 | Derive one EM step and construct an initialization/identifiability failure |
| L08 | PCA and representation compression | D020 | Implement PCA with train-only centering; distinguish variance from task signal |
| L09 | Retrieval, ranking and embeddings | D022,D058 selected | Explain top-k metrics and query/candidate shift; evaluate on held-out entities |
| L10 | Backpropagation, MLPs and neural computation | D025–027 | DX-H2; derive backward equations, check gradients and fit a small task independently |
| L11 | Optimization, normalization and training mechanics | D029–032,D042 | Separate initialization, optimizer and regularization effects under controlled tuning |
| L12 | CNNs, residual models and scientific vision | D033; D034–035 selected | Implement convolution/residual block; validate independent entities and explain invariances |
| L13 | Recurrent networks, BPTT and LSTM | D036; LSTM project | DX-H2; analyze gradient propagation; distinguish original cell from later forget-gate variants |
| L14 | Attention and Transformers | D037–038 | DX-H3; derive attention dimensions, masking and causality; test a tiny block |
| L15 | Tokenization, small LMs and decoding | D043–048 | Train tiny LM, evaluate proper perplexity and distinguish encoder-decoder from decoder-only |
| L16 | Generative objectives, latent models and diffusion | D039,D067 selected; ML-GEN | Derive a normalized toy generator or ELBO and evaluate generation; SSL is assessed separately in L26 |
| L17 | GNNs, message passing and limitations | D079–081 | Prove permutation equivariance of aggregation and construct a distinguishing-limit example |
| L18 | Bandits, MDPs and Bellman equations | D069–070; Sutton/Barto Ch.2–4 | Solve a finite MDP exactly; distinguish exploration, exploitation and off-policy evaluation |
| L19 | TD, function approximation and off-policy risk | D071 tabular MC/TD first; D072–073 selected later | Hand-compute and implement TD versus exact values before opening function approximation/off-policy failure analysis |
| L20 | Policy gradients and actor–critic | D075; Sutton/Barto Ch.13 | Derive score-function gradient and a baseline identity; test a toy policy |
| L21 | Planning, model-based RL and world models | D074 tabular planning first; D077,D068 selected later | Tabular Dyna/model-error check first; neural rollout and representation controls when those subskills are active |
| L22 | Continual learning and meta-learning | D061; MAML P05 | Measure forgetting/transfer with disjoint tasks and matched compute; distinguish tuning from meta-learning |
| L23 | Agent/tool-use evaluation and autonomy | D057,D059,D099 selected | Evaluate tool failures, provenance, permissions, adaptive test leakage and no-agent baseline |
| L24 | Mechanistic interpretability foundations | D060 | Distinguish a probe correlation from a causal intervention; design controls |
| L25 | Predictive uncertainty, shift and robustness | D011,D040 relevant labs | Separate aleatoric/epistemic descriptions, evaluate calibration under shift and state limitations |
| S01 | Question formulation and literature criticism | Research question sheet RES-QUESTION | State a falsifiable question, strongest alternative and a meaningful null result |
| S02 | Measurement and data-generating process | Scientific sheet MAT-UNC | Trace labels/features to measurement; identify selection and construct-validity threats |
| S03 | Experimental design and controlled comparisons | Scientific sheet MAT-EXP | Predefine estimand, controls, split, tuning budget and analysis unit |
| S04 | Ablation, negative controls and causal claims | Causal sheet MAT-CAUS | Construct a confounded ablation and a more discriminating intervention |
| S05 | Effect size, uncertainty and adaptive analysis | Scientific sheet MAT-EXP | Give intervals and practical meaning; disclose selection, multiple testing and failed runs |
| S06 | Provenance, licensing and reproducible artifacts | Artifact sheet RES-ARTIFACT | Recreate a result from config/data/code revision; inspect licenses and missing steps |
| S07 | Scientific communication and oral defense | Communication sheet RES-COMM | Write an accurate claim/limitations paragraph and defend a derivation aloud |
| S08 | Reproduction versus implementation | Research reproduction contract | Identify exact claim, deviations, compute and evidence; label toy work correctly |
| S09 | Original hypotheses and creative transfer | One bounded extension protocol | Generate competing mechanisms and a low-cost discriminating experiment |
| S10 | Ethics, privacy and benchmark integrity | Competition and research standards | Find disallowed data/protocol use; document permissions and test boundaries |
| S11 | Resource accounting and efficiency claims | Efficiency sheet RES-EFF | Report hardware, wall time, memory and tuning budget under comparable conditions |
| S12 | Collaboration and independent criticism | External review checklist | Respond to a substantive counterargument with evidence and record unresolved points |
| R01 | AGI, generalization and intelligence measurement | P04,P09 selected sequence | Compare acquisition efficiency on held-out task families with fixed priors/compute |
| R02 | RSI and meta-learning theory/experiments | P05–P07 | Audit utility/provability assumptions; test iterative improvement against frozen held-out tasks |
| R03 | Mathematical and machine reasoning | P09,P10 | Build a tiny synthesis/search solver and separate memorization, search and generalization |
| R04 | Causal circuit analysis | P11,P12; D060 induction project | Use matched clean/corrupt inputs, interventions and multiple controls; test off-distribution artifacts |
| R05 | AI for Science modeling and inverse inference | P13–P16 plus active domain | Prespecify scientific target, physical/domain checks, leakage-safe split and uncertainty |
| B01 | Molecular/cell biology and evolution | Domain sheet BIO-FOUND with authoritative textbook | Explain sequence→expression→function and limits; distinguish evolutionary from causal explanations |
| B02 | Protein chemistry and structure | EMBL-EBI Foundations of Protein Structure | Explain primary–quaternary structure, bonding, chirality, domains and experimental limitations |
| B03 | Thermodynamics, kinetics and biophysics | Domain sheet BIO-PHYS and selected physical chemistry | Distinguish energy/free energy, equilibrium/kinetics, conformations and physical validity |
| B04 | Sequences, alignment, homology and phylogeny | Alignment sheet; selected Rosalind task | Compute an alignment; define sequence clusters and detect family leakage |
| B05 | Chemical representations and molecular graphs | Domain sheet BIO-REP; P13,P14 | Check atom/bond/chirality/charge encodings and invariance; separate identical graph from conformer |
| B06 | Structural data, confidence and CASP evaluation | P15; official CASP methods | Evaluate structure on held-out families/time; explain lDDT/GDT scope and confidence limits |
| B07 | Function ontologies and CAFA evaluation | P16; official GO/CAFA documentation | Propagate child→ancestor scores without cycles; handle unknown labels and annotation time |
| B08 | Scientific domain shift and biological leakage | BIO-LEAK | Identify repeated-entity/date leakage from a simple table first; add homolog/template/ontology analysis for the active domain |
| B09 | Scientific imaging, 3D and inverse problems | One active imaging method and dataset protocol | Split by patient/specimen/site, compare reconstruction/segmentation metrics and uncertainty |
| B10 | Experimental collaboration and domain validation | Domain validation contract | Distinguish computational prediction from experimentally established biological evidence |
| M25 | Monte Carlo, importance sampling and effective sampling limits | MAT-MC | Estimate a finite expectation exactly and by sampling; verify proposal support, weights and uncertainty limitations |
| M26 | Variational inference and amortized inference | MAT-VI | Derive ELBO plus posterior-KL identity on a tiny latent model; distinguish approximation bias from Monte Carlo error |
| M27 | Fixed-point reasoning and iterative solution | MAT-FIX | Find and verify a fixed point, distinguish existence/uniqueness/convergence, and bound error under valid contraction assumptions |
| C19 | Programming abstractions, recursion, types and semantics | ALG-LANG | Explain mutation versus pure functions, recursive base cases, typed AST evaluation and integer versus floating-point semantics |
| L26 | Self-supervised representations and contrastive/predictive objectives | D039–040 selected; ML-SSL | Define target construction and augmentations; detect collapse/leakage and evaluate held-out representation utility |
| L27 | LLM post-training, reward modeling and preference optimization | D054–056 selected; ML-POST | Separate SFT, reward-model learning, DPO and RL optimization; derive pairwise logistic/DPO losses and test held-out preference validity |
| L28 | Verifier-guided reasoning and search-time learning | ML-VERIFY; D057,D059,D062–063 selected | Distinguish outcome/process feedback and a checked verifier from a learned judge; compare search under matched token/compute budgets |
