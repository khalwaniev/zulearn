# LearnHarness feasibility decision

**Use LearnHarness as the preferred extensible host, through a Zulearn community plugin. Keep the same learning engine available in a small portable server for immediate learning and a separate assessment window. No upstream core modification is necessary.**

Inspected 27 November 2026. These are source-pinned observations, not a promise about future upstream versions.

| Source | Inspected revision | Reuse boundary |
|---|---|---|
| [LearnHarness](https://github.com/amosblomqvist/learnharness/tree/e3cfff6ee7b91d94cd7ed3eea0dcbf8807773fe8) | `e3cfff6ee7b91d94cd7ed3eea0dcbf8807773fe8`, version 0.7.0 | Public plugin APIs; AGPL-3.0-only |
| [Learn](https://github.com/amosblomqvist/learn/tree/7cfd8942f82ab9476e63572387e1fe9bcea5082c) | `7cfd8942f82ab9476e63572387e1fe9bcea5082c` | Pedagogical ideas only; no explicit licence found, no code/prompts copied |
| [Jane Street agent skills](https://github.com/janestreet/agent_skills/tree/469868f4489cbdbe178c775a0af05bb6bef63689) | `469868f4489cbdbe178c775a0af05bb6bef63689` | MIT; Socratic mechanisms restated in original words, no literal prompts copied |

## What was inspected

Upstream README, package and lock files, licence, architecture/development/getting-started/provider documentation, plugin-authoring/API documentation, frontend/backend examples, community-plugin host and inference interfaces. Learn's skill/state approach and Jane Street's Socratic tutoring were inspected against the existing learning-evidence register. These repositories are implementations and design examples, not controlled evidence that AI tutoring improves independent transfer.

| Area | Verified source/behavior | Zulearn decision |
|---|---|---|
| Architecture/dependencies | Next.js local web app; Node backend; core/community plugins; model SDKs; much larger dependency tree than portable Zulearn. `npm ci --ignore-scripts` installed 1121 packages in this sandbox; setup/build and local startup succeeded. | Do not fork the host; isolate our small engine. Dependency installation is not a security audit. |
| Installation/execution | Pinned source `npm run plugins:setup`, `npm run dev`; host HTTP startup exercised on Linux Node 24.22.3. Upstream CI uses Node 26. | Document upstream Node 26 for reproducibility; portable requires Node 24+. Windows/WSL source support documented, learner machine untested. |
| Extensions | Manifest frontend `activate`, `registerView`, `registerAction`, `placeAction`; backend `handle`, `directory`, `dataDirectory`, `cleanup`; frontend `ctx.call`. | Installer generates dist assets; private data is a sibling of code and survives reinstall. |
| Persistence/graph | Local host learning graph and provider/profile stores exist. Plugin learning context is read-oriented; graph labels can arise from AI teaching/extraction. | Do not equate graph presence with competence. Our immutable 109-node registry and separate SQLite evidence store are authoritative for Zulearn evidence. |
| Mathematics/exercises | Host math/graph/chat components are available; plugins can render their own view. No need to depend on an undocumented exercise grader. | MVP uses readable mathematical text, fractions, powers and original visual bars. Arbitrary LaTeX rendering and a full proof checker are not implemented. |
| AI | Public inference catalogue and explicit model selection; provider keys/auth required for selected remote services; API/subscription support varies. | Use explicit Strong model only, 500-token/30-second bounded user requests, no silent model/cost fallback. Portable local compatible endpoint or ChatGPT context remains optional. |
| Privacy/security | Local files do not imply offline model requests. Community plugins execute trusted Node code with broad filesystem/network capability; not a sandbox. | Keep only Zulearn/inspected plugins, bind portable to loopback, do not expose dev host publicly, keep keys out of records. No claim of upstream security certification. |
| Import | No native importer for the approved Zulearn ZIP was verified. | Include unchanged V1 docs and derived validated JSON as assets. Never let a model reinterpret the curriculum during import. |
| Portability/recovery | Host has its own profile paths and backup mechanisms; exact plugin-data coverage should not be assumed. | Provide explicit checksum-checked Zulearn backup/restore independent of host backup. Export before switching interfaces or updating. |
| Assessment isolation | A community plugin cannot disable every host tutor view or other applications. | Backend blocks all Zulearn assistance while active; use the portable assessment window plus manual continuous-recording protocol. |

## Adopted teaching mechanisms and evidence boundary

From the inspected projects: persistent learner state, one focused question, first-principles derivation, asking the learner to predict before revealing, responsive misconception repair, worked examples, fading guidance and later independent checks. Zulearn uses original tutor instructions and a bounded deterministic lesson/task engine; it does not import unrestricted agent tools or execute learner code.

The retained [scientific evidence register](../../curriculum/v1/reading/SCIENTIFIC_EVIDENCE_REGISTER.md) supports retrieval, distributed practice, worked examples for novices and testing transfer separately. Exact 24-hour retrieval, eight-minute introductory checks and two-card defaults are implementation heuristics, not proven optimal doses. Socratic questioning is used when useful; direct explanation is available when a prerequisite is missing. AI-generated feedback may be wrong. An independent answer, explanation, later retrieval and transfer remain separate observations; only observed numeric scope is automatically assessed.

## Licensing and redistribution

LearnHarness is AGPL-3.0-only. Its full licence is retained at [local-app/LICENSE](../../local-app/LICENSE). New local-app code, plugin adapter and integration scripts are offered under that licence; retain notices and provide corresponding source when conveying binaries or modified network-served software as required by AGPL. Source is present in this repository. No upstream core source has been copied into the plugin.

This does **not** relicense the unchanged curriculum, existing repository materials, original competition tasks, datasets, pretrained models or proprietary catalogues. Their respective rights/notices apply. Learn has no explicit licence at the inspected revision, so no copying of its code or prompts was done. Jane Street MIT notice obligations apply if its literal material is copied in future. No such literal copy is included here.

Original Zulearn opening explanations, diagrams and generated task templates are newly authored. OpenStax links are citations/supplementary reading; no textbook exercise bodies were copied. Catalogue inventory contains factual metadata only, not proprietary lessons, solutions or raw exports. IOAI notebooks remain at pinned upstream URLs; the optional fetcher preserves their bytes and records CC-BY-4.0 attribution, with separate asset/model terms still applicable. No licence to redistribute other contest PDFs is inferred merely from public accessibility; they are linked at source.

## Bounded costs and limits

No paid inference, OAuth credentials or learner-machine installation was used in the test. Transport and plugin inference contracts are tested with fake providers; actual chosen-provider behavior/cost remains a local setup verification. Local inference needs hardware and a separately installed model. The portable app is immediately usable without either. There is no automated content import from paid platforms, full-course exercise renderer, proof verifier, remote deployment or anti-cheat system.

Actual host plugin execution and browser results are recorded in [IMPLEMENTATION_RECORD.md](../../governance/IMPLEMENTATION_RECORD.md). This audit is sufficient for plugin integration; it is not a claim to have audited every upstream dependency or future revision.
