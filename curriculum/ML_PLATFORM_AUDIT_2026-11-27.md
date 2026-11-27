# ML platform curriculum audit — 2026-11-27

Status: catalog-level evidence audit and provisional curriculum design. Not a curriculum freeze. Source: learner-supplied platform catalog snapshots (six Deep-ML text exports and TensorTonic interface excerpts); public URLs https://www.deep-ml.com/deep-path and https://www.tensortonic.com/roadmap. Raw exports and proprietary problem text are deliberately not republished.

## Deep-ML snapshot
All six exports were read (9,377 lines). Parsed 112 Deep-Path concepts, 861 math cards, 130 intuition puzzles, 120 labs (9 easy/41 medium/70 hard, 19 datasets), 157 projects (3,840 project-step occurrences, not independent problems), and collection overview (86 paper, 5 book, 28 video, 10 library, 6 role, 13 topic sets; not all collection titles exposed). Math cards each advertise one worked example and three practice problems; 188 easy, 561 medium, 112 hard. Main tags: DL theory 317, probabilistic ML 149, probability/statistics for ML 62, RL theory 54, inference engineering 49, ML fundamentals 37, CV 24, statistical modeling 24, statistical inference 20, linear algebra 20, compilers 18, experiments/causal inference 17, RL 16, calculus 13, MoE 12, GNN 9; remaining smaller tags 20. These are labels, not a comprehensive coverage measure.

Deep-Path Everything: 3,185 step occurrences, consisting of 130 puzzles, 605 math cards, 2,214 problems, 120 projects, 116 labs. The path is not the entire current standalone catalog. Essentials (620 steps/71 concepts) was previously observed, not exported here. Treasure explicitly unlocks on completion of Everything; contents unknown.

| Part | Concepts | Steps |
|---|---:|---:|
| Classical ML | 23 | 811 |
| Deep learning | 19 | 561 |
| LLMs | 24 | 729 |
| Diffusion/world models | 2 | 100 |
| RL | 10 | 297 |
| GNN | 3 | 39 |
| Inference | 10 | 195 |
| CUDA/Triton | 4 | 54 |
| Compilers | 3 | 54 |
| Safety/governance | 1 | 11 |
| SQL/pandas | 4 | 78 |
| Algorithms/data structures | 5 | 150 |
| Robotics/control | 1 | 8 |
| Math drills | 3 | 98 |

Deep-Path already links intuition, math, implementation, projects and labs, but not every concept has all modalities. Reorder explicit prerequisites: Part 5 policy gradients and actor-critic before Part 3 LLM RL. It includes interpretability (60), continual learning (61), recurrent-depth (62), lattice deduction (63), H-Net (64), diffusion (67), world models (68), search/self-play (77), GNN message passing (80). Part 12 already contains 150 algorithm drills, so LeetCode need not be a mandatory second introductory bank. Courses: Neural Nets to GPT (15 episodes/492 questions), Post-Training (21 episodes/697 questions). Book collections include Murphy probabilistic ML (858 problems), ISL (149), Hands-On ML (214), Sutton/Barto (226); shared exercises likely. Projects include autodiff, LSTM, full Transformer, AlphaGo/AlphaZero, numerical linear algebra, Bayesian inference, GPs, optimization, information theory, interpretability induction circuits, JEPA, recurrent-depth reasoning, lattice deduction, continual pretraining, compiler and CUDA. Labs include honest splits, uncertainty, distribution shift/length extrapolation, noisy labels, sparse labels, novel activations/optimizers, grokking, inference and kernel optimization. These are opportunities for controlled experiments, not independently verified paper replications. Intuition consists of 130 feedback-driven puzzles in 16 parts from descriptive statistics to RL, attention, graphs and systems. Guided rediscovery is not original scientific invention.

## TensorTonic snapshot
1,551 problems in earlier dashboard screenshot; 21 study plans with 651 assignment occurrences: build-from-scratch 131, foundations 105, systems/GPU 130, math 115, specializations 170. Eleven project categories/31 projects (including 1 MechInt, 6 RL, 6 systems/GPU, 5 LLM engineering, 3 agentic, 1 graph). 29 paper-track entries (13 transformer/LLM, 5 CNN, 7 sequence/embedding, 4 generative). Transformer track has 8 steps; no assumption that it reproduces original experimental claims. 37 ML system design topics and 21 cases, with scientific value in leakage, retrieval metrics, evaluation, drift, serving and distributed training; commercial design cases not default. 67 math articles and 20 LLM internals articles. Visible beta lab: Weight-Space Programming (claimed small weight edit to address reasoning loops; independently verify controls before believing causal/generalization claims). Roadmap: 13 modules, 122 listed assignments (not unique). Exact individual problem inventory and inner project/paper steps not supplied except representative examples.

## Provisional allocation of roles
Use a single competency registry rather than two completion targets. Deep-Path is the default ML navigation spine; TensorTonic is a complementary source of alternative tests, specific implementations and systems practice. For each concept use one primary explanation, one written derivation, one independently coded exercise, selected variant, and delayed unseen assessment. Projects/labs are chosen by scientific capability, not badges. A successful test suite is not proof of numerical correctness, statistical validity or mastery.
- Foundations: Deep-Path math/puzzles and numerical implementations; TensorTonic math articles as alternate explanations. Independent written exams from university sources.
- Classical/statistical ML: Deep-Path and Murphy/ISL collections as aligned references, not parallel completion requirements.
- DL: backprop/autodiff, optimization, CNN, recurrent nets, attention. Pick one Micrograd/autograd build, one full Transformer or GPT; distinguish full encoder-decoder from decoder-only LM.
- RL/reasoning: tabular RL/MDP, planning, policy gradient, MCTS/self-play, then post-training, recurrent depth, lattice deduction and world models. This is a candidate pathway conditional on resolving legacy scope deferral; no change to AVOID.md in this audit.
- Interpretability: Deep-Path 60, induction circuit project, then independent causal interventions; TensorTonic weight-space lab and MechInt project; external ARENA when needed.
- Systems: choose GPU/inference/compiler paths when research requires them; alternative backends only for useful transfer.
- Scientific AI: GNN, diffusion, uncertainty, honest evaluation; add domain biology, geometry/equivariance, sequence/structure and scientific benchmark protocols.
- Algorithms: Deep-Path 104–108 plus independent MIT 6.006 correctness and complexity; use LeetCode/CSES for gaps and unseen problems, not duplicate grind.
- Contest: relevant ML contests for unaided timed assessment and post-contest analysis; Codeforces optional for concrete algorithmic gaps, not rating target.
- Scope: retain existing exclusions of finance and irrelevant commercial ML, distinguish transferable math from application context.

## External mathematics: gap-driven, not wholesale duplication
Retain MIT 6.042J for logic, proof, induction, invariants, discrete structures and combinatorics; MIT 18.06 for independent linear algebra proofs/exams; MIT 18.02 for multivariable integration and vector calculus where gaps appear; Harvard Stat 110 for non-routine probability; Stanford EE364A for convexity, duality, KKT proofs; advanced analysis/numerical methods, statistical learning theory, information/algorithmic information theory and computability according to diagnostics/research. MathNet/AoPS/OTIS/Putnam are selected sources of proof discovery, not a second complete math curriculum. Treat platform tag/title coverage as exposure rather than proof-level mastery; external exams are also independent assessment. Deep-ML math includes research-specific mathematical arguments, empirical result reading, numerical tasks, not exclusively formal proofs.

## Learning protocol and evidence
Dunlosky et al. (2013) https://doi.org/10.1177/1529100612453266 : retrieval and distributed practice. Sinha & Kapur (2021) https://doi.org/10.3102/00346543211019105 : problem solving before instruction can support learning under appropriate design, not universal. Pan & Rickard (2018) https://pubmed.ncbi.nlm.nih.gov/29733621/ : transfer depends on task characteristics. Kalyuga (2009) https://doi.org/10.1007/s11251-009-9102-0 : guidance should adapt to prior knowledge. Bastani et al. (2025) https://doi.org/10.1073/pnas.2422633122 : unrestricted AI assistance harmed subsequent unaided math performance in a high-school setting; hints mitigated harm; do not generalize effect sizes directly to adult research training.
Use written math (paper, stylus or typed) for derivations/proofs; editor for implementation; original paper for claims; local notebooks for experiments. Attempt unaided first when prerequisites exist; study worked examples when novice; fade guidance; use hints rather than full AI solutions; retest after ~1 and ~3 weeks (initial scheduling heuristic). Track independent accuracy, explanation, numerical tests, transfer and focused time. For reproduction, state claim, data, compute, seeds and deviations, compare controls, quantify uncertainty. No platform-level causal comparison is established.

## Remaining gaps before freeze
1. Complete item ID inventories and expanded Deep-Path Essentials and TensorTonic exercises/projects; compare objectives and task demands, not titles alone.
2. Learner baseline with independent exams and research tasks; classify core/transferable/defer/exclude/duplicate.
3. Resolve legacy RL scope in AVOID.md with owner approval; update roadmap without silently overriding.
4. Pilot one compact learning block; calibrate workload and delayed mastery before scaling. No universal optimal curriculum or contest performance guarantee.
