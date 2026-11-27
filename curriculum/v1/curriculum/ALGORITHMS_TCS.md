# Algorithms and theoretical computer science

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Deep-Path D104–108 already contains 150 algorithm/design problem occurrences in the supplied export. Use it for representative implementation practice; add MIT 6.006 for correctness, complexity and independent problems. Do not require another full LeetCode introductory sequence. Scientific algorithms, search, program synthesis and computability receive explicit coverage because implementation fluency alone does not supply them. Start Python, lists, simple scans and pattern finding alongside elementary algebra; formal proofs, recurrences and language theory deepen when needed. Entry and depth dependencies are separate in the registry.

## Prerequisite-aware sequence

| Order | Competencies | Primary selection | Exact practice/output | Independent gate |
|---|---|---|---|---|
| 1 | C01,C03: programming and tests | Python official tutorial: functions, control flow, containers, exceptions; Git/environment basics | ALG-SOFT sheet | Optional DX-B1/DX-B2 after relevant coding is taught; independent debug/reproduce task |
| 2 | C04: correctness and asymptotics | MIT 6.006 introduction/data-structure analysis; invariants/induction from MIT 6.042J | State model of computation, invariant, termination, recurrence | DX-F1 plus an unfamiliar invariant proof |
| 3 | C05: arrays/hash/heap/tree/trie | D104–106; MIT 6.006 notes by topic: sorting, hashing, binary trees, AVL trees, heaps | One representative task per missing structure, not every variant | Choose and justify a structure under new operations/memory constraints |
| 4 | C06,M17: graph algorithms | D107; MIT 6.006 BFS, DFS, weighted shortest paths, Bellman–Ford, Dijkstra | BFS/DFS, cycle/topological ordering, shortest path; DSU if connectivity task needs it | DX-F2; negative/weighted/disconnected counterexample |
| 5 | C07: dynamic programming | D107; MIT 6.006 DP notes; selected alignment application | State, recurrence, base, order, witness reconstruction; compare memoization/tabulation | DX-F3 and an unseen sequence-alignment recurrence |
| 6 | C08: search/planning/CSP | D077 plus ALG-SEARCH sheet | Tiny backtracking/CSP and heuristic search with measurable limits | Compare brute force/oracle, prune correctly, explain completeness/optimality assumptions |
| 7 | C09: computability and complexity | MIT 6.045J selected automata/computability/complexity material; ALG-TCS sheet | Halting/recognition distinction, reductions, P/NP, pseudo-polynomial cost | DX-F4 plus one reduction proof and complexity model |
| 8 | C10,C17: synthesis and verification | ALG-SYN and ALG-VERIFY sheets; DreamCoder and OOPS as branch papers | Enumerative DSL, equivalence classes, search prior, counterexample-guided refinement | Held-out task families and explicit proof/trusted-base boundaries |
| Parallel | C02,C11,M13–M14: numerical algorithms | NumPy/autodiff and MAT-NUM | Stable solvers, graph-based reverse mode, computational cost | Analytical/reference/finite-difference checks with edge cases |
| Triggered | C13–C15,C18: architecture/systems | Profiling → one CUDA/Triton kernel → distributed/compiler work only if needed | Measure a real bottleneck, preserve numerical/semantic correctness | Hardware/budget-matched reference and end-to-end measurement |

Keep graphs and DP early enough to support RL/planning, and proof/complexity early enough to support algorithm invention. A whole automata course is unnecessary before fitting a classifier; formal computation is necessary before interpreting universal-search or RSI guarantees.

## Original practice sheets

**ALG-SOFT — independent software.** Write a small command-line program that reads a local table, checks required columns and types, reports missing/duplicate entity IDs and calculates a specified aggregate. Create deterministic synthetic fixtures, including an empty table, malformed row and duplicate key. Commit locally or retain a code revision and environment file. Then deliberately introduce a bug, write a failing test and repair it. Do not use an AI-generated implementation for independent evidence. This artifact comes after basic variables/loops; it is not the first Python lesson.

**ALG-SEARCH — search and constraints.** (1) Solve a small grid shortest-path problem by BFS, with walls, no-solution and start=goal cases; reconstruct the path. (2) Add nonuniform nonnegative costs and demonstrate where BFS fails; implement Dijkstra and compare with an exhaustive small oracle. (3) Formulate a tiny CSP with domains/constraints, implement backtracking plus one sound pruning rule, and prove that pruning never removes a valid solution. (4) Explain A*'s heuristic and graph-search reopening assumptions before claiming optimality. Report expanded nodes and runtime as measured, not inferred.

**ALG-TCS — TCS and feasibility.** (1) Explain recognizer versus decider with a halting example. (2) Prove one simple reduction: a decider for program equivalence would decide whether a program halts, using a carefully specified construction or a suitably restricted equivalent formulation. State semantic assumptions. (3) Distinguish polynomial time in numeric magnitude from bit length using subset sum. (4) State P, NP, NP-hard and NP-complete correctly; a problem being NP-hard does not establish that no practical structured instances can be solved. (5) Explain how exponential search, uncomputability and implementation inefficiency are different obstacles.

**ALG-SYN — program synthesis.** Define a finite typed DSL with constants, input variables, addition and multiplication with an explicit size limit. Enumerate programs fitting a few integer examples; canonicalize or track equivalent candidates to avoid obvious duplicates. Hold out both input values and task families. Construct two programs fitting the training examples but disagreeing elsewhere, then choose a discriminating query. Compare a plain search with a stated reuse/prior scheme under a matched evaluation budget. This is a toy synthesis experiment, not a reproduction of DreamCoder's full empirical results.

**ALG-VERIFY — specification and verification.** Specify pre/postconditions for binary search, prove the loop invariant and termination, and identify the assumptions the proof needs (sorted order, immutable input, integer indexing). Add property-based tests on small generated arrays and compare to a simple linear oracle. Distinguish finite tests, mathematical proof, proof-assistant checking and the trusted implementation/runtime. A formal proof applies to its model, not automatically to every compiled execution.

## Selective supplemental problem queue

Use these named task families only if absent or already exposed on Deep-Path. A title is a source locator, not evidence that the exact unseen prompt is unchanged. Inspect the current official task before assigning it and keep solutions hidden.

| Skill gap | Supplementary locator | Select only when |
|---|---|---|
| Hashing and invariants | LeetCode Two Sum, Valid Anagram | Need independent transfer from list scans to hash-based design |
| Stack invariants | LeetCode Valid Parentheses | Need parsing/invariant practice |
| Lower bound | LeetCode Binary Search or a new lower-bound variant | Haven't demonstrated boundary/duplicate cases independently |
| Graph search | CSES Message Route; Building Roads | Need reconstruction or components beyond a practiced grid |
| Dependency DAG | CSES Course Schedule | Need cycle detection/topological-order proof |
| Weighted paths | CSES Shortest Routes I | Need heap/Dijkstra correctness and complexity |
| DP | CSES Edit Distance; Book Shop | Need changed recurrence or pseudo-polynomial analysis |

Official catalogues: [LeetCode](https://leetcode.com/problemset/), [CSES](https://cses.fi/problemset/). These are selective locators from established catalogues, not a newly re-audited exhaustive inventory. If a locator is unavailable, use an original changed task with the same skill and an independent oracle. No numerical overlap rate with Deep-Path is claimed.

Codeforces is OPTIONAL for a concrete speed/algorithm gap and a bounded session. Rating ladders, exhaustive contest archives and unrelated tricks are deferred. A contest score is evidence of performance on those tasks; it is not a comprehensive research measure. A solved LeetCode task is not automatically a proof of algorithmic creativity.

## Research transfer and stopping rule

After a representative task, derive its recurrence/invariant/complexity, implement without copying, generate an adversarial case and solve a changed task later. Move on when that evidence is sound; add practice only when the next task exposes a gap. Prefer scientific transfer such as sequence alignment, ontology DAG propagation, memory-aware retrieval and program search when prerequisites are ready.

For an algorithms claim, report the computational model and whether bounds are worst-case, average or expected. State memory, input representation and numerical assumptions. For empirical performance, separate theoretical complexity from measured constant factors and include a correct reference. For a theoretical negative result, check its scope before using it to dismiss a practical restricted problem.

Sources: [MIT 6.006 Spring 2020 notes](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/), [MIT 6.042J Spring 2015](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/), [MIT 6.045J Spring 2011](https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/). The first two were rechecked during recovery; inspect the exact relevant 6.045J lecture before assigning it. The original ALG worksheets remain executable learning tasks if an external resource changes.


## Corrective coverage: analysis, language and synthesis

The following precise local sheets strengthen existing C04/C09/C10/C17 and add C19 abstractions. They do not add a second whole CS degree. START-01–07 teaches programming from arithmetic before these larger tasks become active.

**ALG-AMORT — worst-case, expected and amortized work.** Start a dynamic array at capacity 1. On an append to a full array, allocate twice the capacity, copy existing entries, then append. (1) List capacity and actual copies for the first 10 appends. (2) Bound total copies over n appends by summing the geometric growth sizes, and include ordinary writes. (3) Prove O(1) amortized append by an aggregate or valid potential argument. (4) Explain why one append can cost Θ(n), why no random input assumption is needed, and why an expected hash-table bound is a different statement. Add a divide-and-conquer recurrence and a greedy exchange argument only as the selected algorithm demands. Use MAT-REC for generating functions, not a calculus entrance gate.

**ALG-LANG — abstraction, formal languages and semantics in levels.** Begin with (1) write one pure function and one list-mutating function, predict aliasing effects, and repair a test that confuses returned value with side effects; (2) define a recursive list-sum with base case and compare it with a loop. Later, (3) define an expression AST for integer constants, one variable, addition and multiplication; implement evaluation without using unrestricted `eval`; state types and size limits. (4) Give a finite automaton for binary strings ending in 01 and test empty/short strings. (5) Define a grammar for balanced parentheses and explain why its recognition problem differs from the finite automaton example. (6) Connect recognizer/decider, Turing-complete computation and reductions only when that theoretical depth is active. Python's [tutorial functions/control flow](https://docs.python.org/3/tutorial/controlflow.html) and [data structures](https://docs.python.org/3/tutorial/datastructures.html) are the initial source; MIT 6.045J supplies selected formal-language topics later. No C/OCaml/Racket course is a universal prerequisite.

**ALG-SYN enhancement — DSL, SAT/SMT and counterexamples.** For the existing bounded typed arithmetic DSL, distinguish syntactic programs, denotational behavior on inputs, search order/prior and an examples-consistent version space. Translate a small finite constraint into Boolean conditions and enumerate a truth table. Then inspect one official [Z3 logical-modeling example](https://microsoft.github.io/z3guide/docs/logic/intro/) or an equivalent locally checked solver task. Compare enumeration with constraint-guided candidate search under the same candidate/evaluation budget. A returned model must be checked against the original examples; additional examples should discriminate remaining candidate programs. Do not claim that a timeout proves absence of a solution.

**ALG-VERIFY enhancement — formal verification and solver semantics.** Over integer x, encode 0≤x≤2 and x>1; verify a satisfying model by substitution. Add x<1 and explain unsatisfiability. Distinguish integers from reals and bounded machine integers, `sat` from `unsat` from `unknown`, and a proof/counterexample about an encoding from correctness of the original intended program. Write pre/postconditions and a small loop invariant, then compare an exhaustive finite oracle, unit tests and a mathematical proof. Solver libraries are optional for this first finite example; no installation or platform build is required. Later logical fixed-point/diagonal reasoning belongs to the computability/RSI branch, not numerical fixed-point iteration.

## Concurrent entry and proof progression

Elementary algebra and programming are concurrent. A first list scan requires only variables, conditionals and loops, which can be learned directly; it need not wait for calculus, formal induction or asymptotic proof mastery. Once the algorithm is understood, add the correctness argument and cost model, then a fresh transfer task. Similarly, a tiny DSL can be explored before a full undecidability course, while universal-search and formal guarantees still require the relevant theory.

All worksheet identifiers are globally unique in [WORKSHEET_INDEX](WORKSHEET_INDEX.md). Diagnostic questions use `DX-` labels and are optional local samples, not an entrance exam. Preserve meaningful practice with different constraints or reasoning demands even when the topic tag overlaps another exercise.


**ALG-SYSTEMS — minimum computational systems literacy.** For one small existing Python/data task: (1) explain CPU execution, RAM versus disk, numeric representation/precision and references versus copied values; (2) trace file paths, process/environment and code/data revision needed to reproduce it; (3) explain why parallel workers, shared mutable state and random-number state can introduce nondeterminism; (4) measure or correctly estimate one memory/work bound and distinguish it from a measured runtime. Use C03/C13 and a tiny checked example, not a full OS/architecture/networking course. For scientific entity tables, also verify C16 primary keys, join cardinality and temporal cutoff before computing a metric. Do not execute an untrusted notebook/tool command just because an AI proposes it; apply existing provenance/permission standards.
