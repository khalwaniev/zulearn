# Optional local question bank — learner copy

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Start the ordinary fraction/Python lesson in the workflow first. For any later optional bank item, save your unaided work before looking at the separate key. State assumptions, give reasoning and identify uncertainty. Select only a locally relevant item after the topic has been taught; do not sit the full bank before learning. Suggested durations are workload guides, not speed qualifications. These are original reconstructed questions; none is claimed to be an official platform/university problem.

## Packet A — foundations

**DX-A1 [C,U].** Solve 2(3x−4)=5x+7 and verify your solution. Solve (x−1)/(x+2)≤0 over the reals, stating exclusions.

**DX-A2 [C,U,T].** Let f(x)=ln(x−2). Give its real domain and inverse. Is ln(a+b)=ln a+ln b valid for all positive a,b? Justify with a counterexample.

**DX-A3 [U,T].** Negate: “For every real x there exists a real y such that y>x.” Decide whether the original statement and its negation are true. Do not replace the quantifiers with an informal slogan.

**DX-A4 [C,D,T].** (a) For u=(1,√3), find its length and its angle with the positive first coordinate axis. (b) Derive a formula for 1+r+…+r^(n−1), including r=1, and state when the infinite sum exists.

## Packet B — programming

**DX-B1 [I,U].** In plain Python, implement `frequencies(items)` returning a dictionary mapping each hashable value to its count. Include empty input and repeated values. State time/memory assumptions and show at least three self-written tests.

**DX-B2 [I,T].** Implement `first_unique(items)` returning the first value in original order occurring exactly once, or `None` if no such value exists. Inputs are hashable values; for this task the values themselves are never `None`. Do not assume sorting preserves original order. Explain your algorithm and complexity, and test an input with no unique value.

**DX-B3 [C,U,T].** Let X be a NumPy array of shape (m,d) and w of shape (d,). State the shape of X@w. Write an expression centering each feature using the training-sample mean. For X=[[1,2],[3,4]], give the centered array. Explain why centering separately on test data changes the fitted preprocessing rule and why X−w[:,None] is generally wrong.

## Packet C — linear algebra

**DX-C1 [C,U].** Let A=[[1,2],[2,4]]. Solve Ax=(3,6)ᵀ. Does Ax=(3,7)ᵀ have a solution? Explain geometrically and give rank and nullspace.

**DX-C2 [D,T].** A is a real m×n matrix. Is AᵀA invertible whenever m≥n? Prove the valid condition or give a counterexample. State the relationship to the nullspace of A.

**DX-C3 [C,U,T].** Let A=diag(3,1,0). Give its singular values and a best rank-one approximation in Frobenius norm, with approximation error. Explain why a matrix's eigenvalues need not equal its singular values in general.

## Packet D — calculus and optimization

**DX-D1 [C,U].** Differentiate ln(1+exp(2x)). Explain the role of the chain rule and the limiting derivative as x tends to positive infinity.

**DX-D2 [D,C,T].** For real X∈R^(m×d), y∈R^m, w∈R^d and λ≥0, let L(w)=‖Xw−y‖²/m+λ‖w‖². Derive gradient and Hessian, give their shapes, and state when the Hessian is positive definite. Do not assume X has full rank.

**DX-D3 [D,T].** Minimize x²+y² subject to x+y=2 over real x,y. Give a Lagrange-multiplier solution and an independent geometric or inequality argument. State why this is the global minimum.

## Packet E — probability and inference

**DX-E1 [C,U].** A condition has prevalence 0.02. A binary test has sensitivity 0.8 and specificity 0.9. Compute P(condition | positive test). State what specificity means and why sensitivity is not the requested posterior.

**DX-E2 [C,U,T].** X and Y are Bernoulli variables with Y=X and P(X=1)=1/2. Compute E[X+Y], E[XY] and E[X]E[Y]. Which equality involving E[X+Y] would still hold without independence? What about E[XY]?

**DX-E3 [D,U,T].** Observe 8 successes in 10 independent Bernoulli trials. Derive the maximum-likelihood estimate of p, including boundary logic for all-success or all-failure data. Explain what a 95% frequentist confidence procedure guarantees, and what a single realized interval does not imply without additional interpretation. You need not calculate an interval.

## Packet F — algorithms and theoretical CS

**DX-F1 [D,U].** Describe binary search for the first array element at least q in a sorted nondecreasing array. Give a loop invariant, termination argument, worst-case complexity and behavior for empty arrays or no qualifying element. Pseudocode is allowed.

**DX-F2 [D,T].** Design an algorithm returning the shortest path by edge count from s to t in a finite unweighted graph represented by adjacency lists. Explain correctness, reconstruct the path, handle disconnected graphs, and give time/space complexity. Would the same algorithm minimize total cost for arbitrary positive edge weights? Explain.

**DX-F3 [D,T].** Given nonnegative integer weights a₁,…,aₙ and nonnegative target T, each weight usable at most once, design a dynamic program deciding whether some subset sums to T. Give state, recurrence, base cases and complexity. If using a 1D table, justify update order. Is O(nT) polynomial in input bit length?

**DX-F4 [U,T].** A colleague proposes deciding whether any Python program halts by running it for a billion steps, reporting “halts” if it stops and “does not halt” otherwise. Explain precisely why this is not a general decision procedure. Distinguish finite resource limits from undecidability.

## Packet G — scientific reasoning

**DX-G1 [U,T].** A dataset contains 100 patients, each with 20 images. A model is evaluated by randomly splitting images into train/test. It obtains high accuracy. Explain the strongest leakage/dependence concern, propose a more relevant split for a new-patient target, and specify the unit for an uncertainty calculation comparing two models. Give at least one situation in which patient-level splitting alone is still insufficient.

**DX-G2 [U,T].** A researcher trains 100 variants and reports the best validation score as “an unbiased estimate of improvement.” The final test set has been opened repeatedly during development. Identify two distinct problems and propose a defensible future evaluation. Discuss what can and cannot be repaired retrospectively.

**DX-G3 [U,T].** A linear probe predicts a semantic property from a hidden representation. Removing one activation direction reduces benchmark accuracy. Does this establish a unique causal mechanism for the property? Propose at least two controls and distinguish correlation, intervention effects and mechanism identification.

## Packet H — numerical and neural readiness

**DX-H1 [C,U,T].** Give a numerically stable way to compute log(exp(1000)+exp(999)). Explain overflow, and explain why a tiny linear-system residual does not always guarantee tiny solution error.

**DX-H2 [D,C,T].** For scalar recurrence h_t=a h_(t−1), derive ∂h_T/∂h_0. Describe the cases |a|<1, =1 and >1 as T increases. Explain how a gated additive memory path changes the argument and why it does not guarantee perfect long-range learning in every LSTM.

**DX-H3 [C,D,T].** Q and K have shape (n,d_k), V has shape (n,d_v). Give scaled dot-product self-attention and output shape. Specify a causal mask and its placement relative to softmax. Explain how a missing causal mask can invalidate next-token evaluation. Describe one edge case needing numerical care.

## Packet I — choose one specialization screen

**DX-I1 — AGI/world models [U,T].** A learned dynamics model predicts one-step observations accurately. An agent planning inside it performs poorly in the real environment. Give two explanations and design a comparison separating representation quality, model error and planner/model exploitation under matched interaction budgets.

**DX-I2 — RSI [U,T].** A self-modifying program accepts any edit that increases its score on a fixed public task set. Does repeated score improvement demonstrate general recursive self-improvement or a Gödel-machine-style guarantee? State the missing assumptions and design a held-out evaluation.

**DX-I3 — reasoning [U,T].** You enumerate programs in a small arithmetic DSL to fit input/output examples. Several programs fit perfectly but disagree on an unseen input. Explain identifiability, prior/search effects and how to construct a useful additional query. State why a timeout is not evidence that no program exists.

**DX-I4 — mechanistic interpretability [U,T].** Design an activation-patching experiment for a tiny attention model. Specify clean/corrupt examples, what is patched, outcome, a negative control, and a threat caused by unnatural activation combinations. State a claim the experiment could support and one it could not establish alone.

**DX-I5 — AI for Science/proteins [U,T].** (a) Two protein sequences in train and test are nearly identical; labels were acquired at different dates. Identify homology and temporal-leakage risks. (b) Explain why pairwise-distance features may fail to distinguish mirror-image structures. (c) In a GO `is_a` child→parent relation, what consistency condition should predicted function scores satisfy, and why is an unannotated function not always a known negative? Distinguish structural prediction accuracy from experimentally established biological function.


## First-week local checks and dimension labels

The seven `LC-01`–`LC-07` check groups are defined exactly alongside START-01–START-07 in [the workflow](../operations/WEEKLY_DAILY_WORKFLOW.md). Do them after the lesson, one relevant subskill at a time; there is no combined entrance examination. Their separate examiner answers are in the key. `DX-` identifies this optional bank; `LC-` identifies local learning checks; neither is a worksheet identifier.

Labels: `C` calculation, `U` conceptual understanding, `D` mathematical derivation/proof requested in that item, `I` actual implementation, `T` changed-case reasoning/critique. A label identifies the demand, not a competency earned automatically. DX-F2 and DX-I3 ask algorithm design/explanation, so they do not certify executed implementation; DX-H1 accepts a formula/explanation, so it has no implementation label. DX-A3's logical negation is not a full proof exam. DX-H2 tests a scalar recurrent gradient, not implementation of general reverse-mode autodiff. Inspect each subpart separately.
