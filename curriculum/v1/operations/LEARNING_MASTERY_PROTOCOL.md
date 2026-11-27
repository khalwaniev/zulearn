# Learning and mastery protocol

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Use the evidence register's distinctions: empirical support for a learning mechanism, a conditional inference about this curriculum, and a local operational choice are different claims. The protocol follows the recovered synthesis; all exact timings, sample sizes and gates below are newly authored starting rules.

## A learning cycle — teach first, check locally

1. **Begin the queued lesson.** Only basic addition, subtraction, multiplication and division are provisionally fluent; teach fractions/Python from START-01. Use a relevant worked example when new, not a comprehensive entrance assessment. A short check may replace repeated instruction if the learner asks to accelerate or prior independent evidence is available.
2. **Explain and predict.** Motivate the operation, state conditions and connect it to a concrete example. Ask one focused prediction/reasoning question when the learner has the pieces; explain directly when they do not. Avoid unguided floundering or forced questioning after repeated failure.
3. **Detect the exact misconception.** Inspect a small after-learning check; distinguish calculation, notation, concept, implementation and proof/interpretation. Remediate that operation immediately and try a changed example. Do not treat a whole course as failed.
4. **Practise and construct.** Derive/explain or implement as the current task requires. For code use small analytic cases, edge cases, invariants, finite differences or checked references. Platform harness success alone is not proof of broad correctness/mastery.
5. **Discover and transfer.** Generate an example, conjecture, counterexample or invariant each session; use a longer level-appropriate non-routine problem weekly. Preserve meaningful variation even when topics overlap. Distinguish a numerical example from a proof.
6. **Retrieve and record lightly.** Use a short next-session recall and later fresh sample, adjusting to errors/retention needs. Save help/evidence/next action in a few lines of Markdown. Exact intervals are heuristics; no fixed universal schedule is asserted.

The [AI learning engine](AI_LEARNING_ENGINE.md) implements this with existing tools and a small state record. Its source mechanisms are useful design ideas, not independent educational validation. No new platform or repeated approval step is needed.

## Tool choices

| Tool | Use | Evidence to retain |
|---|---|---|
| Pen/paper, stylus or typed mathematics | Definitions, derivations, proof search, dimensions, toy cases | Complete reasoning with assumptions and counterexamples |
| Whiteboard | Dependency maps, alternative proof approaches, oral explanations | A readable final argument; a photo is optional |
| Mental calculation | Small sanity checks and approximate scales | Written confirmation for consequential results |
| Computer/editor | Algorithms, numerical experiments, simulations, profiling | Source, tests, environment, configs and measured outputs |
| Anki | Definitions, conditions, diagnostic misconceptions, short derivations | Small prompts requiring recall; delete low-value cards |
| Textbook/course | Repair a defined gap or obtain rigorous assessment | Exact section and solved output, not viewing time |
| Primary paper | Evaluate a claim, method, assumptions and evidence | Claim ledger, derivation and reproduction feasibility |
| AI | Hints, explanation, critique, debugging feedback after an independent attempt | Assistance type and which parts remain unverified |
| Closed-book assessment | Establish independent competence | Unseen prompt, unaided work, rubric and later retest |

No evidence establishes that handwriting is universally better than a stylus or typed derivation for this learner. Choose a medium that exposes reasoning. Anki is not a substitute for proofs, program construction or experiments.

## Assistance ladder

Record `none → conceptual hint → next-step hint → worked example → full solution`. Only `none` counts as independent assessment. A solution learned with help can later become independent competence after a changed unseen task; immediate retyping does not establish it. AI-generated tests are suggestions until their oracle is checked. Never use an AI-written answer to certify a theorem or report an unexecuted experiment as a measurement.

## Local evidence and deeper mastery

Local scores are per subskill: 0 not demonstrated, 1 partial/assisted, 2 independently sound on the observed task. Keep actual reasoning/code and assistance. Do not total unrelated subparts into a global “pass.” A later derivative or domain error does not erase an independently learned simpler operation. States are `new`, `assisted`, `independent_now`, `retained`, `needs_repair`, with `assumed_self_report` for F01.basic_ops only initially.

The registry distinguishes entry operations from deeper research requirements. Begin a topic once the small required operation can be explained or taught locally; do not wait for complete mastery of every parent module. As depth increases, require the relevant unseen changed task, explanation/assumptions, proof or implementation, failure case and delayed retention. A substantive research claim additionally requires appropriate controlled evidence and external criticism.

Two varied independent examples may justify accelerating routine work, with a later retention sample; this is a local rule rather than a psychometric threshold. Recognition, subjective obviousness, copied code and AI-assisted answers are not independent competence. The optional DX bank's original four-point rubric is coverage reference only. Its corrected labels and separate subskill interpretation are in the diagnostic protocol/key.

## Feedback and workload

Feedback should identify the error, its consequence, a repair strategy and a new test. Avoid identity judgments and generic praise. Check whether feedback actually changes the next independent performance. Interleave confusable methods after initial instruction; do not constantly switch among unfamiliar topics. Alternate easier retrieval with difficult construction to keep the queue sustainable.

Protect adequate sleep and recovery. The recovered evidence supports avoiding chronic restriction; it does not estimate this person's optimal sleep or prescribe a clinical regimen. Do not obtain extra study blocks by shortening sleep. If errors, attention or retention deteriorate, reduce optional work and review workload before adding resources.

## Research gate and evidence vocabulary

Keep `read`, `derived`, `implemented`, `claim reproduced`, `extended`, and `externally reviewed` separate. A toy architecture implementation is valuable but does not reproduce a paper's dataset-scale result. A reproduction identifies the exact claim, method/data revision, environment, deviations, baseline, split, seeds, metrics, uncertainty, negative controls and failure cases. An extension requires a new falsifiable question, controlled comparison and honest novelty assessment.

Optional tutor-side weekly note: retain the exact next task, recurring errors and meaningful independent/retention evidence; record artifacts/help or workload observations only when useful. The learner need not maintain a dashboard. Do not optimize solve counts, streaks or cards created. Comparisons of platforms in one learner are useful operational observations, not causal proof of superiority.
