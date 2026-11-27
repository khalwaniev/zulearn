# Curriculum integration and local learning implementation — 27 November 2026

## Outcome and provenance

The human-approved V1 curriculum is the single frozen curriculum. All 30 files were recovered from the supplied ZIP, whose SHA-256 matches `87a7dcf011a1beadad66ea9f546a71446942093dfcd21e6fbc7af544737981a2`; ZIP integrity and each extracted member were checked. The 29 document hashes in the original checksum manifest match. No approved V1 file was edited. Current approval and execution corrections live in [CURRICULUM_STATE.md](../CURRICULUM_STATE.md).

Integration baseline: `bd639216c753a2df527c8311177148ece8614410` on public `khalwaniev/zulearn/main`, inspected before modification. Eleven superseded documents were preserved byte for byte under adjacent `legacy/` directories; their original paths now direct readers to the active curriculum. Older reference lists are labelled supplementary. See [machine-readable provenance](INTEGRATION_PROVENANCE.json) for original Git blob and SHA-256 values. The old Deep Research missions no longer create work before learning.

New implementation is explicitly new: the application, ten integrated opening lessons, generated tasks, diagrams, private state model, adapters, metadata transcriptions, personal simulation protocol and requested narrow subskills. Previously approved curriculum/report content stays unchanged with its original provenance and limitations. Raw proprietary exports and private learner state are not public.

## Bounded change manifest

| Requirement | Concrete integration | Verification |
|---|---|---|
| Freeze and one authority | Exact `curriculum/v1/`, root authority overlay, historical pointers | ZIP SHA/integrity, every member byte match; all original checksums; 11 legacy copies compared to baseline Git blobs |
| Entry/depth and basic arithmetic correction | 109 competency rows, 165 entry edges, 23 subskills; only F01.basic_ops initially assumed | Every structured registry row compared with V1; unique IDs/references and entry DAG checked; startup state tests |
| Deep-Path Everything | All 112 concepts required for exploration; 3,185 modality occurrences preserved; optional parallel lane resumes concept order | Exact ordinal/count checks; completion updates next concept without inferring mastery |
| Catalogues | 1,853 scoped observations / 1,852 named; factual dates, source hashes/URLs, difficulty/count/category metadata, unresolved identity | Inventory/schema/status/count checks; 79 verified public TensorTonic problem URLs; private curation backup/restore test; no invented canonical IDs |
| LearnHarness preferred foundation | Public plugin APIs, shared UI/engine, separate private plugin SQLite; no upstream core fork | Installed pinned host; actual HTTP/plugin discovery, enable, assets, backend operations, UI view, lock and disable/re-enable persistence exercised |
| Immediate fractions | Original equal-parts explanation/visual, paper practice, discovery, changed tasks, next action | Actual browser walkthrough and screenshots inspected; ten lesson examples and operations checked; exact rational arithmetic |
| Optional adaptive tutor | Lesson/state-informed original prompt, misconception hypothesis, guidance fading, explicit provider consent and bounded transport | Fake-provider/host-contract tests; in-flight cancellation and late-answer withholding; no real provider inference claimed |
| State and mastery evidence | SQLite WAL/transactions; separate curriculum, instruction progress, private knowledge observations and independent evidence | Restart, delayed fresh check, assisted-vs-independent and score/review tests; numeric scope never certifies whole-topic mastery |
| External practice | Seven statuses; verified identity needed to duplicate; progressive actual-URL metadata curation | Test rejects topic-only duplication and credential query URLs; platform completion never changes competence |
| Anki | Two atomic drafts per lesson; stable deduplication; UTF-8 TSV | Unit and browser export checks; official import-format reference; Anki owns scheduling |
| Backup/recovery | Checksum-checked portable JSON; schema/pin/reference validation; transaction and safety copy | Browser download/restore, corruption rejection, independent new-profile restore, code/data preservation during plugin reinstall |
| Competitions | 14 slots across early local checks, IMO, IOI, ICPC, Putnam and IOAI; exact IDs/readiness/protocol/grading boundaries | All referenced competency IDs resolved; original task locators inspected; six original IOAI notebooks downloaded and Git blob hashes verified |
| IOAI purity | Original tasks unchanged; all 64 syllabus rows retained with classifications | 26/16/13/9 section counts; pinned task-byte receipts; original syllabus SHA; no research-domain filtering; explicit stricter personal no-assistant protocol |
| Challenge integrity | Backend assistance lock, persistent deadline/drafts/reasoning, separate exposure pools, reported independent grading, manual livestream protocol | Real browser and HTTP tests; host plugin lock; refresh/restart/timer/exposure tests; no claim of system-wide proctoring |
| Narrow research refinements | 11 additions under existing parent IDs, no new mandatory courses | All parents/scaffolding references valid; original 109-node entry graph unchanged |
| Privacy/licensing | Loopback-only portable server, token/origin/asset checks; ignored DB/auth/raw/backup paths; source licence/notices | Real HTTP tests; source/licence review; staged-public-file scan; credentials never backed up |

## Executed verification

Environment: Linux sandbox, Node **24.22.3**, Python **3.12.14**. This is not the learner's Windows/WSL machine.

- `node scripts/validate-curriculum.cjs`: PASS. Approved files, all registry rows/165-edge DAG, subskills, 112 concepts/3,185 occurrences, 1,853 observations, ten lessons, 14 checkpoints, six IOAI pins, all 64 syllabus rows and current relative documentation links.
- `node --test local-app/tests/engine.test.cjs`: **17 tests PASS**. Includes exact numeric checking, misconception repair, no fabricated initial mastery, fresh pools, durable challenge lock/draft, expiry, delayed retrieval, rollback/restore, platform evidence, private curation, Anki, safe HTTP, fake transport and plugin public API contract.
- `local-app/tests/browser-smoke.cjs`: PASS with Playwright 1.62.1 and Chromium 158 in a disposable profile. Fraction reading/practice/next lesson, independent task, direct-API hint refusal, reload/draft, submission, backup/restore, Anki download, 390px mobile layout and restarted-state resume; no page JavaScript errors. Desktop/mobile screenshots inspected outside Git.
- Pinned LearnHarness: dependency install, plugin setup/build and Next dev startup passed. `local-app/tests/learnharness-smoke.cjs` exercised the **real host**, not only a mocked plugin context: disabled discovery → enable → backend state/lesson/practice → challenge assistance refusal → backup → actual sidebar/view/fraction rendering → disable/re-enable preserving progress. No model called. Host screenshot/log inspected outside Git.
- `python3 scripts/fetch-ioai-originals.py <private-directory>`: PASS. Original notebook byte sizes: Radar 22,496; Chicken Counting 26,741; Concepts 40,924; Restroom 12,846; Antique 8,702; Pixel 29,987. All six Git blob SHA-1 pins matched. Nothing executed; no datasets/models downloaded.
- The nine opening OpenStax URLs, the exact next distribution reference and Python tutorial URL resolved to their intended primary-source sections on 27 November 2026. Original archive statements/rules were inspected during the bounded mapping pass. Full paid-platform item accessibility and graders remain item-specific and unresolved where unavailable.

GitHub read-back of implementation commit `80d088f9f5176c3c2b63d148945c5dbea0a07559` matched all 112 file identities and the changed-file sizes; critical approval, checksum, server and plugin files were read back separately. Initial CI passed on Ubuntu but caught Windows Git line-ending conversion before application tests. A follow-up `.gitattributes` fix preserves approved/historical bytes and makes ordinary text checkouts use LF. The approved files themselves were not changed. The final Windows/Linux CI result is verified separately after that commit; it must not be inferred merely from the workflow's presence.

## Implemented versus remaining limits

**Ready now:** portable local learning without provider setup; ten opening lessons; today's math queue and optional Python/ML lane; persistent state; original changed exercises; narrow independent checks; optional AI adapter; platform inventory/status/private curation; atomic Anki export; backup/restore; archive challenge mapping and manual score/review records; plugin view on the real pinned host.

**Not claimed:** the learner's Windows/WSL installation tested; live paid-provider tutoring tested; all provider models compatible; arbitrary code run by the app; full LaTeX/proof checking; an automated advanced course covering every registry node; complete paid-platform inventories or exact global overlap; original hidden competition graders/datasets universally available; external-device anti-cheat; encrypted records; automated YouTube/Anki/cloud integrations. The original-task fetcher downloads notebooks only. Source links and exact frozen worksheets guide later study without a new curriculum-design project.

Keep using the portable app for strict no-assistant livestreams: the plugin cannot disable other LearnHarness host tutor views. Correct numeric work remains narrow evidence until explanation/implementation review, retention and transfer support a broader claim. Local logs/backups are recoverable records, not tamper-proof public certification.

Start learning: follow [the exact first-session instructions](../local-app/README.md#first-session-about-25-minutes). No remaining optional integration blocks the first fraction lesson.
