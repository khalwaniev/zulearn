# Deep-ML near-exhaustive plan

Source: https://www.deep-ml.com/ (catalogue changes). The site offers problems, math, paths, labs, projects, collections, playlists, articles, contests, research challenges and other activities. Record count and metadata at each audit; **do not claim a stable exact problem count**.

## Mandatory default categories
Linear algebra, calculus, probability, statistics, optimization, ML, deep learning, PyTorch, NLP/LLMs, CV, GNNs, scientific/numerical methods, GPU/inference engineering, continual learning.

## Default skip categories
RL-specialist tasks, AI for finance. Skip unrelated marketing recommenders; retain general-purpose matrix factorization or graph tasks.

## Study process
1. Classify each problem: `core`, `transferable`, `defer`, `exclude`, `duplicate`.
2. Attempt unaided with a time cap; record whether solved before assistance.
3. Test numerics, edge cases, and computational complexity.
4. Important problems: derive method, benchmark, invent variant, add minimal Anki cards.
5. At 7–21 days, repeat a sample of previously solved problems without viewing code.

## What to capture per solved problem
`date, platform_id, link, topic, category, importance(1-5), first_attempt, self_solved, complexity, derivation_link, test_link, anki_note_id, delayed_retest, status`

## Anti-metric-gaming
- Distinguish unique conceptual skills from multiple near-identical problems.
- Quantity is a secondary metric; mastery, delayed retention and transferable research performance are primary.
- Do not redistribute paid platform problem content or copyrighted solutions against the service's terms.

## Suggested high-priority paths
Math foundations, Linear Algebra, Classical ML, Deep Learning, GNN, Tiny GPT, Inference Engineering, Neural Network Quantization, Continual Learning. Defer the RL fine-tuning path unless relevance changes.


## 2026-11-27 — Cross-platform curriculum audit and decision gate

**Status: verified public curriculum structure + user-observed interface snapshot; detailed item-level audit pending.** This addendum supersedes any characterization of either platform as merely a coding challenge bank. It does not authorize exhaustive completion or assert that either platform is superior.

### Deep-ML
- Official Deep-Path: https://www.deep-ml.com/deep-path — snapshot 14 parts, 112 concepts, 3,185 steps (Everything); 71 concepts, 620 steps (Essentials). Steps are not necessarily unique coding problems. The 14 parts cover classical ML, deep learning, LLMs, generative modeling/world models, RL, GNNs, inference engineering, GPU programming, ML compilers, AI safety/governance, SQL/pandas, algorithms/data structures, robotics/control and math drills.
- Public catalog and observed interface: 1,200+ coding problems, pen-and-paper Math, Intuition (idea discovery), Learning Path, Deep-Path, Labs, Projects, Courses, Collections, Playlists and Study Assistant. See https://www.deep-ml.com/problems and https://www.deep-ml.com/intuition .
- The site describes prerequisite-aware adaptive sequencing and review: https://www.deep-ml.com/collections/LLM%20Evaluation%20Methods . Actual scheduling behavior and efficacy remain unverified. No claim about completion rewards.
- Deep-Path is a candidate curriculum backbone, not an obligation to complete all steps.

### TensorTonic
- https://www.tensortonic.com/problems — user-observed interface on 2026-11-27 displayed 1,551 problems, with NumPy, PyTorch, JAX, CUDA, Triton, SQL, Python and Pandas filters. The public homepage advertised 700+ at retrieval; do not treat marketing counts as the current catalog size or compare them directly with Deep-Path steps.
- Interface includes Study Plans, Projects, Interview, Research Papers, ML System Design, Labs, Articles and Guides. Public sources: https://www.tensortonic.com/roadmap , https://www.tensortonic.com/guides/how-to-read-and-implement-ml-papers , https://www.tensortonic.com/guides/maths-for-machine-learning .
- Official language modeling plan: https://www.tensortonic.com/study-plans/language-modeling-from-scratch (62 exercises / 17 sections at retrieval). Dedicated math lessons and paper implementations merit explicit audit, not automatic secondary status.

### Required expansion of DR-04 before curriculum freeze
Audit both platforms at item level wherever legally accessible: stable ID/link, task type, concept, prerequisites, difficulty, backend, required depth, access, estimated effort, source/date, and uncertainty. Distinguish concept duplication from valuable variation (different derivation, backend, numerical constraints or transfer problem). Map the independent mathematical curriculum (MIT 18.06, 18.02, 6.042J, Harvard Stat 110, Stanford EE364A), mathematical problem discovery (MathNet, AoPS, OTIS, Putnam), classical algorithms (MIT 6.006/6.046, selected LeetCode/CSES), paper reading/implementation, and direct research tasks. Do not silently equate guided paper implementation with empirical reproduction.

Deliver an updated competency DAG and cross-platform registry; for each competency choose one primary learning resource, selected complementary practice, and an independent unseen assessment. Quantify overlap only after inspecting comparable inventories; record unknown/premium-only sections and changing counts. Compare candidate sequences (Deep-Path-led, TensorTonic-led, hybrid) with time/coverage/assessment trade-offs. Avoid double-counting shared concepts and platform steps. Review legacy RL deferral in AVOID.md against general AI research requirements; do not change scope policy without curriculum adjudication.

### Evidence and measurement
- Retrieval and spacing: Dunlosky et al. (2013), https://doi.org/10.1177/1529100612453266 .
- Transfer of retrieval practice: Pan & Rickard (2018), https://pubmed.ncbi.nlm.nih.gov/29733621/ .
- Productive failure and conceptual transfer: Kapur (2014), https://doi.org/10.1111/cogs.12107 .
- Evidence supports learning mechanisms, not an optimal platform or sequence for frontier scientists. Pair initial instruction or productive attempts as appropriate with feedback, unaided derivation/implementation, spaced retrieval and novel-task transfer. Test proficiency on independent problems and research artifacts, not completion counts.
- Pilot the candidate path on matched skills, track independent pass rate, delayed recall and transfer per focused hour. Keep external criticism and original research central. Record limitations; do not claim causal superiority from a single learner's observational results.
