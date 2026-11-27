# Recovered catalogue inventory and parsing receipt

> Recovered metadata with newly authored parsing and selection notes. Raw proprietary exercise prompts are not republished. Counts describe supplied 2026-11-27 snapshots, not immutable current inventories.

| Source export | Role | Bytes | Lines | SHA-256 |
|---|---|---:|---:|---|
| Pasted text.txt | Labs | 87458 | 1219 | `2931b262eaa76a199c34e271c9c6c833d45a76f05039c13fecf8567c560bdc96` |
| Pasted text (2).txt | Projects | 162626 | 1494 | `23f8d2ad3a7aa45ccf4abc977a5cd6926f24c533a8d0790643762152fdcd36d4` |
| Pasted text (3).txt | Collections | 16166 | 190 | `89fc3aaf2ab281bb5739fac04177d89c0381351577c7209e452832c6b5f354e4` |
| Pasted text (4).txt | Math | 122871 | 4331 | `74406905852f8097708bf103486070d29b964a86e71acc1c964a1dbcc55ddc73` |
| Pasted text (5).txt | Intuition | 20071 | 649 | `83e038e3b9c7c2b9d12ab6e747c9cf67ffe1ae66e35512bcaa7b6ac7c5f4d01f` |
| Pasted text (6).txt | Deep-Path | 28695 | 1494 | `c296b8adac217b2ce01266a78e9d29baff6907f51d3f8db54f5f80cda66a66d0` |

## Direct parsing results

- Deep-Path: 112 consecutive ordinals; 3185 step occurrences; component sums {'puzzles': 130, 'math': 605, 'problems': 2214, 'projects': 120, 'labs': 116}.
- Standalone math: 861 card delimiters, each advertising one worked example and three practice items. This does not establish 2,583 independent or original exercises.
- Intuition: 130 consecutive numbered puzzle titles; 16 part headings.
- Labs: 120 title/difficulty/target records; difficulty counts {'easy': 9, 'medium': 41, 'hard': 70}.
- Projects: 157 project cards; 3840 project-step occurrences.
- Collections: overview advertises 86 paper, 5 book, 28 video, 10 library, 6 role and 13 topic collections. Only exposed titles/descriptions were available; a count is not full item-level evidence.

## Selected projects: exact observed titles, occurrence counts, new selection rationale

| Observed title | Steps | New curriculum role |
|---|---:|---|
| Numerical Linear Algebra from Scratch in NumPy | 30 | M13–M14 stable solvers; compare reference and conditioning |
| Information Theory from Scratch in NumPy: Entropy, KL and Mutual Information | 30 | M15; select proof/computation gaps |
| Estimators from Scratch: MLE, MAP, Posteriors and the Bootstrap on One Coin | 29 | M08–M09; add independent dependence-aware transfer |
| Build Your Own teenygrad: A Tiny Tensor Autograd Engine | 58 | C11; one engine, not every alternative autodiff build |
| Neural Networks From Scratch: Forward and Backward | 13 | L10 alternative compact MLP build |
| Long Short-Term Memory from Scratch in PyTorch | 12 | L13; inspect original-cell versus modern-cell differences |
| Attention Is All You Need: Build the Transformer From Scratch | 80 | L14; encoder–decoder if needed, not a duplicate compulsory GPT |
| GPT From Your Own Layers: Tiny Shakespeare | 13 | L15 one compact LM option |
| Continual Pretraining from Scratch: Teach a Tiny LM a New Domain Without Forgetting the Old | 21 | L22 controlled forgetting/transfer study |
| Mechanistic Interpretability from Scratch: Find the Induction Circuit in a Tiny GPT | 22 | R04; follow with independent intervention controls |
| Sutton and Barto from Scratch 1: Bandits and Dynamic Programming | 21 | L18; compare exact finite-MDP oracle |
| Sutton and Barto from Scratch 4: Planning and Policy-Gradient Methods | 22 | L20–L21 after TD foundations |
| AlphaZero on Connect-4 from Scratch | 57 | C08/L21 optional small search/self-play extension |
| Message-Passing GNNs from Scratch | 46 | L17; synthetic graph validation before protein claims |
| JEPA World Model from Scratch | 38 | L21/R01 optional representation/world-model study; no paper-result equivalence claim |
| Run a Small Research Study: Does the Learning Rate Transfer? | 12 | S03/S08; controlled methods exercise |
| Make a Training Step Fast: Profile, Fix, Prove It | 12 | C13/S11 measured systems exercise |

## Observed Intuition parts

| Part | Title |
|---:|---|
| 1 | What’s typical |
| 2 | How far apart |
| 3 | How similar |
| 4 | Shapes in space |
| 5 | Probabilities from scores |
| 6 | Counting chances |
| 7 | Shapes of chance |
| 8 | Chance and surprise |
| 9 | Is it real? |
| 10 | Classic machine learning |
| 11 | Learning from mistakes |
| 12 | Inside a neural network |
| 13 | Computer vision |
| 14 | Attention and language models |
| 15 | Learning from rewards |
| 16 | Graphs, noise and speed |

## Recovery limitations

The older October Deep-ML route was also recovered as context, but it is superseded by these larger November snapshots. No October problem count or route identifier is used as a current platform identifier. The current raw TensorTonic export was not in the resolved source folder; a previous repository summary and a newly inspected official partial sample are distinguished in the platform allocation. Source files were read and parsed locally in full; this receipt does not assert that every hidden task body or grader was accessible.
