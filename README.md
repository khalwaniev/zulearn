# Zulearn Programme

Learn one thing well, then take the next step. The approved curriculum is frozen; the application starts with fractions. Only basic addition, subtraction, multiplication and division are provisionally fluent.

## Start learning

Use Node.js 24 or newer. The portable app has no npm dependencies and works without an AI account.

```bash
git clone https://github.com/khalwaniev/zulearn.git
cd zulearn
node scripts/validate-curriculum.cjs
node --test local-app/tests/engine.test.cjs
node local-app/server.cjs
```

Open **http://127.0.0.1:8765**. Read the equal-parts explanation, draw the example on paper, and click **Try one changed exercise**. The app saves your work and resumes automatically. Optional help stays under **Ask for help**. There is no entrance examination.

For an existing checkout, use `git pull --ff-only` before starting, with local changes committed or preserved. [Windows/WSL instructions and optional LearnHarness plugin](local-app/README.md) include backup, Anki and provider setup.

## Authority and purpose

[Curriculum state](CURRICULUM_STATE.md) defines the current authority. All **30 approved V1 files** are preserved byte for byte in [curriculum/v1](curriculum/v1/README.md), including the 12 deliverables, evidence, audit and provenance records. Approved ZIP SHA-256:

`87a7dcf011a1beadad66ea9f546a71446942093dfcd21e6fbc7af544737981a2`

The objectives remain PhD research preparation under Professor Jürgen Schmidhuber; AGI, RSI, reasoning, mechanistic interpretability and AI for Science; ARC, CASP and CAFA competence; and independent mathematical discovery, algorithm invention, architecture design and scientific experimentation. No admissions, credential or research-result claim follows from this plan.

Deep-Path Everything is the primary ML backbone: explore all **112 concepts and relevant activities**, curate actual items as encountered, and merge only verified identical exercises. TensorTonic provides complementary depth, implementation, systems work and transfer. Keep selective LeetCode and Anki. The app integrates original explanations so external references need not become a daily navigation burden.

## Implementation map

| Need | Location |
|---|---|
| Current execution policy and changes | [CURRICULUM_STATE.md](CURRICULUM_STATE.md) |
| Local app, fraction lessons, persistence and checks | [local-app](local-app/README.md) |
| LearnHarness architecture, execution, costs and licensing audit | [feasibility audit](integrations/learnharness/FEASIBILITY.md) |
| Competencies, entry prerequisites, targeted refinements | [data](data/README.md) |
| Deep-ML/TensorTonic catalogue observations and provenance | [catalogue inventory](data/catalogue/README.md) |
| Original archive challenge mappings and livestream protocol | [challenge policy](assessment/CHALLENGE_PROTOCOL.md) |
| Integration, verification and implementation limits | [integration record](governance/IMPLEMENTATION_RECORD.md) |

Private learning records, proprietary raw exports and API credentials stay outside Git. The code does not infer independent competence from AI assistance or a completed platform activity. Earlier reference documents remain supplementary; superseded schedules are explicitly archived.
