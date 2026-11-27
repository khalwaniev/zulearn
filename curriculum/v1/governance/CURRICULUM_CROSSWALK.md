# Bounded AI-relevant curriculum coverage crosswalk

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

This is a **bounded coverage check**, dated 2026-11-27, against selected official program descriptions and OSSU's own curriculum. It is not a claim of degree equivalence, an exhaustive current accreditation audit or a reason to enroll in five curricula. The criterion is an essential capability for the stated AI/scientific objectives that is missing or too implicit in Zulearn. University credit, enrollment and course-sequence rules are not automatically logical prerequisites for this learner.

## Sources and limits

| Reference | Primary source inspected | Coverage lens and access boundary |
|---|---|---|
| MIT | [EECS 6-4 program](https://www.eecs.mit.edu/academics/undergraduate-programs/curriculum/6-4-artificial-intelligence-and-decision-making/), plus the already verified 6.042J/6.006/18.06 sources | Integrated computation, probability/statistics, modeling, decisions and interaction. The dynamic current requirements list did not fully render; detailed catalogue data was search-visible, so no exact current credit/course equivalence is asserted |
| Stanford | [BS degree requirements](https://www.cs.stanford.edu/bs-degree-requirements) and [department track synopsis](https://www.cs.stanford.edu/academics-overview/academics-bachelors-program) | Programming/math foundations, algorithms/theory, systems, AI and computational biology; no claim that every sample track course is mandatory |
| Berkeley | [Official CS lower-division requirements](https://eecs.berkeley.edu/resources/undergrads/cs/degree-reqs-lowerdiv/) | Program abstraction, data structures, machine structures, discrete probability and mathematical foundations; the page identifies CS61A/B/C and CS70 with descriptions. New catalogue redirects were resolved through the department source |
| Carnegie Mellon | [Official CS sample curriculum PDF](https://www.csd.cmu.edu/sites/default/files/2024-04/CS_Sample_Curriculum_Schedule.pdf) | Imperative/functional computation, sequential/parallel algorithms, systems, theory, approximation/matrices/probability and communication. This is a sample schedule, not a complete current degree audit; newer full-catalogue fetch timed out |
| OSSU | [Own README at commit 8f8272b1d378d31494240aa1d667aa6b045c6552](https://github.com/ossu/computer-science/blob/8f8272b1d378d31494240aa1d667aa6b045c6552/README.md) | Programming/math/tools/systems/theory/security/data/ethics/project breadth. OSSU is a self-study curriculum, not a university or proof of optimality. Its complete-course and ordering policies are not imported into Zulearn |

The references are used at capability level. Failed/redirected old URLs and limited dynamic content are recorded rather than repaired by inventing detailed requirements. Current program requirements may change; these sources do not establish Professor Schmidhuber's private interview syllabus or admissions policy.

## Crosswalk and disposition

| AI-relevant capability | Signal in comparison set | Baseline status | Minimum v1 correction / evidence |
|---|---|---|---|
| Independent programming, abstractions and semantics | Stanford/Berkeley/CMU/OSSU programming emphasis | Python/testing present, abstraction/functional/state semantics too implicit | C19 + ALG-LANG: mutation, pure functions, recursion, typed AST; no new language-course obligation |
| Correctness, DSA, recurrences, randomized/amortized work | Algorithms/theory across comparison set | Core DSA/proofs present; amortized analysis and generating-function practice implicit | Expand C04/F05 with ALG-AMORT/MAT-REC and exact local tests |
| Formal languages, computability, synthesis and verification | Theory/logic/abstraction across comparison set | Computability and synthesis present; automata/grammar and SAT/SMT demands not explicit enough | Expand C09/C10/C17; finite grammar/automaton, typed DSL, solver model/unknown semantics; no full compiler/logic curriculum |
| Calculus, approximation, linear algebra and optimization | Mathematics/modeling across comparison set | Strong selected courses, but some named operations lacked explicit local tasks | M06 + MAT-TAYLOR/MAT-TRANSFORM: Jacobian/Hessian, conditions/error bounds and coordinate changes |
| Probability, inference, simulation and model comparison | Probability/statistics/modeling emphasis | Broad probability/inference present; continuous entry overconstrained, MC/VI/MDL too implicit | Finite-first M07; M25/M26 and M23 updates; exact expectation, sampling/ELBO/code-length tasks |
| Systems and resource literacy | Berkeley machine structures, CMU systems, Stanford/OSSU systems | Profiling/GPU present; CPU/process/memory/basic concurrency not explicit enough | C13/C03 + ALG-SYSTEMS: representation, memory, files/processes and nondeterminism; full OS/network/compiler courses stay triggered |
| Data modeling and integrity | Stanford/OSSU data and existing scientific needs | C16 joins/keys/provenance already present | Retain and make one entity-key/duplicate join test explicit; no extra database course |
| Security, ethics, reliable engineering and communication | Professional/research breadth across comparison set | S06/S07/S10 and C03 already address it | Retain artifact/licensing/privacy and checked tool/code boundaries; no full cybersecurity specialization |
| ML foundations, sequential decisions and structured reasoning | MIT/Stanford AI/modeling and existing target objectives | Broad shared ML/RL/graphs core present | Remove false entry gates; split generation/SSL; add explicit post-training/verifier nodes tied to active targets |
| Independent project and scientific defense | Project/communication emphasis and research objectives | Research contracts already present | Retain one bounded artifact, controls, uncertainty and criticism; a project need not wait for every course |

## Scope-control result

Only **seven registry nodes** are added (M25–M27, C19, L26–L28). Most corrections specify tasks within existing topics. C19 is the main new foundational coverage node identified by this crosswalk; systems/data/ethics additions deepen existing C13/C16/S10 without creating a second university program. The other six nodes make explicitly requested mathematical/ML objectives independently assessable.

Do not add full web development, business analytics, compiler construction, operating systems, networking, cryptography, general education or robotics simply because a reference program includes them. Their relevant minimum ideas are covered or activated by a concrete scientific/systems blocker. Do not adopt OSSU's calculus-before-discrete-course schedule as a mathematical necessity; simple logic/counting/DSA can begin concurrently with algebra.

This crosswalk is sufficient for the present bounded corrective pass. Its open limits are declared, not a reason to postpone START-01. Later expansion requires demonstrated missing competence, actual research requirements or stronger evidence.
