# Local checks, adaptive feedback and optional diagnostic bank

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

**Learning starts first.** Only basic addition, subtraction, multiplication and division are provisionally fluent. Fractions, decimals, percentages, ratios, negative numbers, exponents and other arithmetic extensions are new until independently demonstrated. The default is START-01 fraction/Python instruction, not diagnostic packets A/B or a global entrance test. No later mastery is assumed. The preserved 31-question bank and separate key remain available for short local screening or a later milestone, never a mandatory preliminary examination.

## One local loop

1. Teach the queued concept with a short motivated explanation/worked example. When prior evidence or the learner's request supports acceleration, a brief relevant check may replace routine teaching.
2. Ask one or two questions about the specific operation just used, and inspect the reasoning. About 2–5 minutes is an initial time budget, not a validated optimum; do not escalate until failure or map every field before teaching.
3. Classify the actual error: arithmetic slip, notation/domain, concept, strategy, proof, implementation or interpretation. “Not yet studied” means teach it, not fail the learner.
4. Repair immediately using a smaller example, a contrast/counterexample, a hint or a direct worked explanation. No compulsory number of failed attempts is required.
5. Try a changed short task independently; then continue the ready lane. Revisit later with a fresh task. A local miss does not block unrelated mathematics/programming/DSA/data learning.

## Subcompetency scoring and independence

For the **active subskill**, record 0 = not yet demonstrated/important misconception, 1 = partial or assisted, 2 = independently sound on the actual task. This is an administrative shorthand, not a calibrated scale. Add exact evidence, help used and limitations. Do not derive a global mastery percentage or compensate for a critical misconception with another subpart's score.

For independence, solutions/hints are hidden during the attempt. The interpreter and self-written tests may be used for coding; AI-written solutions, copied code and solution lookup do not count as unaided implementation. A definition or syntax reference used during learning is normal assistance; record it rather than claim a closed-book result. Accessibility/time accommodations are permitted and recorded. The larger bank's original four-point key is retained as a **coverage breakdown only**; each subskill is judged separately under this protocol.

Example: separate `F02.equality` from `F02.rational_domain`, `M07.finite_conditioning` from `M07.continuous_change_of_variables`, and `M08.mle` from `M09.confidence_interpretation`. An advanced gap does not demote an earlier sound operation. Two varied independent examples may justify accelerating routine practice; a later fresh sample supports retained status. Neither count nor timing is a universal mastery boundary.

## Exact question labels and use

`DX-A1`–`DX-I5` are the original diagnostic bank; all 31 parent questions remain. `LC-01`–`LC-07` are first-week after-learning checks defined alongside START tasks in the workflow. Worksheet IDs are namespaced separately. Packet group letters are navigation only; do not open a whole packet merely because one item is relevant.

Dimensions: C calculation; U understanding; D requested mathematical derivation/proof; I actual implementation; T transfer/critique. A question's label expresses its demand, not a skill automatically earned. The label map below is aligned to actual prompts and key components. Generic explanation is not credited as executed implementation or a full formal proof.

| Bank item | Subskills actually sampled | Limit of inference |
|---|---|---|
| DX-A1 | Linear equation; rational inequality sign/domain | Does not assess geometry or all algebra |
| DX-A2 | Log domain/inverse; false-identity counterexample | Use after logs, not before basic functions |
| DX-A3 | Quantifier negation; truth/witness reasoning | Not a full proof-construction exam |
| DX-A4 | Vector length/angle; geometric-sum derivation and convergence | Does not substitute for elementary equation skills |
| DX-B1 | Dict counts, tests and expected hash-operation cost | Credit implementation only with actual code |
| DX-B2 | First-unique design/order, code and edge cases | Separate strategy, implementation and complexity |
| DX-B3 | Shape, centering expression, train/test rule | Not an implemented end-to-end pipeline |
| DX-C1 | Linear solution space, rank/nullspace, inconsistency | Sample of M01/M02 only |
| DX-C2 | Full-column-rank proof/counterexample | Assess the iff argument, not memorized wording |
| DX-C3 | SVD/rank-one error and eigenvalue distinction | Not all numerical linear algebra |
| DX-D1 | Scalar chain rule/limit | Does not certify matrix calculus |
| DX-D2 | Gradient, Hessian, dimensions, definiteness | Score each mathematical claim separately |
| DX-D3 | Constrained minimum and independent justification | Does not certify general KKT theory |
| DX-E1 | Finite Bayes, specificity, conditioning direction | No calculus required |
| DX-E2 | Expectation under dependence | Distinguish sum linearity and product factorization |
| DX-E3 | Likelihood/MLE, boundaries, confidence interpretation | Separate M08 and M09 subskills; no aggregate pass |
| DX-F1 | Binary-search invariant/termination/cost | Pseudocode suffices; implementation is a different task |
| DX-F2 | BFS/path proof, reconstruction design, weighted limitation | No executed coding certificate from explanation alone |
| DX-F3 | DP recurrence/order and pseudopolynomial complexity | Distinguish numeric T from bit-length input |
| DX-F4 | Timeout versus general halting decidability | No proof of the halting theorem requested |
| DX-G1 | Entity split, dependence, uncertainty unit, remaining threats | Not a full statistical-inference exam |
| DX-G2 | Selection optimism, test contamination and future design | Critique/design, not formal proof |
| DX-G3 | Probe/intervention/mechanism distinction and controls | A causal intervention does not uniquely identify a mechanism |
| DX-H1 | Stable log-sum-exp and conditioning explanation | Formula acceptable; no implementation label |
| DX-H2 | Scalar recurrent gradient and gated-path limitations | Does not certify general autodiff implementation |
| DX-H3 | Attention shapes, causal mask and numeric edge | Separate these from full Transformer training |
| DX-I1 | World-model failure hypotheses and controls | Branch screen only |
| DX-I2 | Empirical self-improvement versus formal assumptions | Critique, not proof of Gödel-machine optimality |
| DX-I3 | DSL ambiguity/query choice and search limits | Explanation, not a synthesized-program implementation |
| DX-I4 | Patching design, controls and bounded claims | Not a completed causal study |
| DX-I5 | Homology/time leakage, chirality, GO is_a, evidence limits | Score each domain subskill; not full protein-science mastery |

## Lightweight record and progression

Use [learner state](../templates/LEARNER_STATE.md): subskill, evidence, help, misconception, next action and a future review sample. Update a few lines at session end, not a formal report per question. Preserve existing independent evidence. Do not assume an LLM remembers prior sessions; provide the compact saved state.

Keep the [answer key](DIAGNOSTIC_KEY.md) closed before an independent attempt. This archive contains both for audit and convenience, so separation is not access control. Once a question/solution is seen, select a fresh changed task. The AI tutor can generate a variant but must verify its answer against a source or checked calculation before grading; its own confidence is not evidence.

Research-level confirmation still needs appropriate derivation/code, assumptions, transfer, delayed retention and externally defensible artifacts. None of this is required before the first fraction lesson. Only F01.basic_ops is assumed; the other arithmetic subskills in learner state are new. Follow the synchronized master/workflow, teach the precise next operation, and start learning.
