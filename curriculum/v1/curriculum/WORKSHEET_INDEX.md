# Worksheet namespace and canonical locator registry

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Every learning worksheet has one globally unique identifier and canonical owning file. Diagnostic-bank questions use `DX-`, local checks use `LC-`, starter sessions use `START-`, and competencies use two-digit registry IDs such as C01. They are separate namespaces, not interchangeable assessments. Old aliases are recorded only for provenance; use the new identifiers in current queues.

| ID | Canonical definition | Purpose | Baseline alias |
|---|---|---|---|
| MAT-ARITH | [MATHEMATICS](MATHEMATICS.md), **MAT-ARITH** | Systematic arithmetic extensions after four basic operations; no entrance test | B0 |
| MAT-ALG | [MATHEMATICS](MATHEMATICS.md), **MAT-ALG** | Elementary→intermediate algebra, equality/inequality and domain progression | B1 |
| MAT-GEO | [MATHEMATICS](MATHEMATICS.md), **MAT-GEO** | Coordinate/trigonometry and geometric-series practice | B2 |
| MAT-LIN | [MATHEMATICS](MATHEMATICS.md), **MAT-LIN** | Matrices and least squares | B3 |
| MAT-CALC | [MATHEMATICS](MATHEMATICS.md), **MAT-CALC** | Derivatives, matrix gradient and integration | B4 |
| MAT-PROOF | [MATHEMATICS](MATHEMATICS.md), **MAT-PROOF** | Proof, quantifiers, induction and counterexamples | P1 |
| MAT-PROB | [MATHEMATICS](MATHEMATICS.md), **MAT-PROB** | Finite→continuous probability | Q1 |
| MAT-PROC | [MATHEMATICS](MATHEMATICS.md), **MAT-PROC** | Markov chains and dependent samples | Q2 |
| MAT-INF | [MATHEMATICS](MATHEMATICS.md), **MAT-INF** | Likelihood/Bayesian inference | S1 |
| MAT-UNC | [MATHEMATICS](MATHEMATICS.md), **MAT-UNC** | Dependence-aware uncertainty and measurement | S2 |
| MAT-EXP | [MATHEMATICS](MATHEMATICS.md), **MAT-EXP** | Experimental design/selection | S3 |
| MAT-CAUS | [MATHEMATICS](MATHEMATICS.md), **MAT-CAUS** | Causal identification and intervention | S4 |
| MAT-NUM | [MATHEMATICS](MATHEMATICS.md), **MAT-NUM** | Numerical stability and conditioning | N1 |
| MAT-CONVEX | [MATHEMATICS](MATHEMATICS.md), **MAT-CONVEX** | Convexity/KKT/duality | O1 |
| MAT-SGD | [MATHEMATICS](MATHEMATICS.md), **MAT-SGD** | Stochastic optimization and controlled comparisons | O2 |
| MAT-INFO | [MATHEMATICS](MATHEMATICS.md), **MAT-INFO** | Entropy/KL/information | I1 |
| MAT-BOUND | [MATHEMATICS](MATHEMATICS.md), **MAT-BOUND** | Concentration and adaptive-selection limits | T1 |
| MAT-ANALYSIS | [MATHEMATICS](MATHEMATICS.md), **MAT-ANALYSIS** | Research-triggered analysis | A1 |
| MAT-SYM | [MATHEMATICS](MATHEMATICS.md), **MAT-SYM** | Symmetry/equivariance/chirality | G1 |
| MAT-DYN | [MATHEMATICS](MATHEMATICS.md), **MAT-DYN** | ODE/time-step/rollout stability | Y1 |
| MAT-LOG | [MATHEMATICS](MATHEMATICS.md), **MAT-LOG** | Functions before later exponential/logarithm depth | New corrective task |
| MAT-TAYLOR | [MATHEMATICS](MATHEMATICS.md), **MAT-TAYLOR** | Taylor approximation, error conditions, Jacobian/Hessian | New corrective task |
| MAT-TRANSFORM | [MATHEMATICS](MATHEMATICS.md), **MAT-TRANSFORM** | Conditional expectation and change of variables | New corrective task |
| MAT-REC | [MATHEMATICS](MATHEMATICS.md), **MAT-REC** | Recurrences and formal generating functions | New corrective task |
| MAT-FIX | [MATHEMATICS](MATHEMATICS.md), **MAT-FIX** | Numerical/Bellman fixed-point reasoning and limits | New corrective task |
| MAT-MC | [MATHEMATICS](MATHEMATICS.md), **MAT-MC** | Monte Carlo, importance weights/support and uncertainty | New corrective task |
| MAT-VI | [MATHEMATICS](MATHEMATICS.md), **MAT-VI** | ELBO/posterior-KL and amortized inference | New corrective task |
| MAT-MDL | [MATHEMATICS](MATHEMATICS.md), **MAT-MDL** | Two-part coding and algorithmic probability distinctions | New corrective task |
| ALG-SOFT | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-SOFT** | Independent software/tests/provenance | C1 |
| ALG-SEARCH | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-SEARCH** | Graph/path/CSP and heuristic-search controls | C2 |
| ALG-TCS | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-TCS** | Computability/reductions/complexity | C3 |
| ALG-SYN | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-SYN** | Typed-DSL synthesis and constraint-guided search | C4 |
| ALG-VERIFY | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-VERIFY** | Specifications, SAT/SMT and trusted-base limits | C5 |
| ALG-AMORT | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-AMORT** | Aggregate/potential analysis and cost models | New corrective task |
| ALG-LANG | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-LANG** | Abstraction/recursion/types/AST/grammar/automata | New corrective task |
| ALG-SYSTEMS | [ALGORITHMS_TCS](ALGORITHMS_TCS.md), **ALG-SYSTEMS** | Minimal CPU/memory/process/resource literacy | New corrective task |
| RES-QUESTION | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RES-QUESTION** | Research question/claim/alternative explanation | S0 |
| RES-AGENT | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RES-AGENT** | Agent versus no-agent controlled evaluation | S5 |
| RES-ARTIFACT | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RES-ARTIFACT** | Reproducibility and artifact provenance | S6 |
| RES-COMM | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RES-COMM** | Scientific writing/oral defense | S7 |
| RES-EFF | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RES-EFF** | Measured efficiency claim | S8 |
| BIO-FOUND | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-FOUND** | Domain biology/evolution foundations | B1 |
| BIO-PHYS | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-PHYS** | Protein chemistry/biophysics | B2 |
| BIO-REP | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-REP** | Molecular/sequence/graph representation | B3 |
| BIO-STRUCT | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-STRUCT** | Structure evaluation and CASP data boundaries | B4 |
| BIO-ONTO | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-ONTO** | GO semantics/labels/function assessment | B5 |
| BIO-LEAK | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **BIO-LEAK** | Homology/time/template/annotation leakage | B6 |
| RL-R1 | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **RL-R1** | Finite MDP/value/TD/planning worksheet, now defined | R1 previously undefined |
| ML-GEN | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **ML-GEN** | Generative objective evidence | New corrective task |
| ML-SSL | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **ML-SSL** | Separate SSL representation evidence | New corrective task |
| ML-POST | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **ML-POST** | SFT/reward/preference/DPO/RL distinctions | New corrective task |
| ML-VERIFY | [RESEARCH_SPECIALISATIONS](../research/RESEARCH_SPECIALISATIONS.md), **ML-VERIFY** | Verifier-guided reasoning and matched-budget evaluation | New corrective task |


There are **52 canonical worksheets**: 28 mathematics, 8 algorithms/systems and 16 research/domain/methods units. An explicitly labelled continuation/enhancement in the same owning file is part of that worksheet, not a second ID or new obligation. First-week activities START-01–07 are defined in the workflow and local checks LC-01–07 have separate answers in the key. All 31 DX bank questions are preserved with prefixed labels.

Collision resolution examples: former mathematical B1 is MAT-ALG, former biological B1 is BIO-FOUND, and diagnostic B1 is DX-B1. Former mathematical A1 is MAT-ANALYSIS while its diagnostic counterpart is DX-A1. The undefined RL sheet R1 is now RL-R1 with a complete finite-MDP/TD/planning specification. Resource ranges refer to the named units explicitly; do not infer a stable platform ID from these local names.
