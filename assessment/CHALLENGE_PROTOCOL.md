# Independent challenges — original tasks, honest evidence

Start with the original Zulearn equal-parts check after the first short lesson; no whole-curriculum completion is needed. Later archived tasks require only their listed local readiness. Contest practice should replace a small practice block, not the foundation/research schedule; use at most one deliberate checkpoint in a week when ready, and defer rather than cram. The full IOAI edition simulation is a separately scheduled six-hour session.

## Reserved checkpoint map

Exact identifiers, locators, timing, rules and competencies are in [checkpoints.json](../data/checkpoints.json). Statements are not modified; selected-task timing and solo conditions are explicitly personal protocols. These are not official participation, medal results or reconstructed ranks.

| Track / original archive task | Exact Zulearn IDs | Readiness / progression | Measurement |
|---|---|---|---|
| Original Zulearn equal-parts → fraction addition | F01.fraction_meaning → F01.fraction_operations | Corresponding brief lesson; introductory | Fresh values/visual not previously issued; exact calculation, explanation separately reviewed |
| Original Zulearn Python assignment/output | C01.assignment | Assignment and print; introductory | Saved own source and actual output; human correctness review, no arbitrary-code execution in app |
| IMO 1959 P1 | F02, F07, F08 | Algebra, divisibility, full proof; first proof checkpoint | Complete valid argument and original conditions; historical point allocation unverified, no invented score |
| IMO 1959 P3 | F02, F03, F04, F07 | Polynomial/trig case reasoning | Proof completeness and original conditions; harder than entry check |
| IOI 2018 Combo | C01, C04, C05, C08 | Implementation, search/query reasoning | Original grader, query limits and subtask points |
| IOI 2018 Seats | C04, C05, C06 | Data structures and incremental maintenance | Original tests/subtasks/limits; advanced |
| ICPC 2023 World Finals E, A Recurring Problem | F05, C04, C05, C07 | Recurrences/enumeration, algorithm design/complexity | Original 20-second limit and correctness; personal solo selected-task timing |
| ICPC 2023 World Finals F, Tilting Tiles | C04, C06, C08 | Grid state/invariants/search | Original 3-second limit and correctness; personal solo selected-task timing |
| Putnam 2024 A1 | F02, F07, F08 | Integer powers, divisibility, proof | Original 10-point proof standard where independent rubric available; otherwise ungraded proof review |
| Putnam 2024 B1 | F07, F08, M17 | Permutation/grid proof | Original conditions, independent proof review |
| Putnam 2024 B4 | M07, M18, F07 | Conditional expectation and limiting argument | Original conditions, independent proof review; advanced |
| IOAI 2025 Days 1 and 2, all six tasks | Per-task exact IDs in ioai_tasks.json; full syllabus in ioai_2025_scope.json | Full edition syllabus and original assets; 360 minutes/day | Original task metrics and grading; hidden evaluation availability checked before any original-score claim |

Primary sources: [IMO 1959](https://www.imo-official.org/assets/documents/problems/1959/1959_eng.pdf), [IOI 2018 archive](https://ioinformatics.org/page/ioi-2018/49), [ICPC 2023 official problems](https://icpc.global/worldfinals/problems/2023-ICPC-World-Finals/icpc2023.pdf), [MAA Putnam archive](https://maa.org/maa-putnam-archive/), [IOAI original 2025 repository](https://github.com/IOAI-official/IOAI-2025). Putnam task identifiers were cross-checked against the [author-maintained archive](https://kskedlaya.org/putnam-archive/2024.pdf) when automated MAA PDF extraction was unavailable; MAA remains the official authority. No grader or proof score is invented when unavailable.

## IOAI is an unfiltered edition track

All **64 topic rows** of the [2025 official syllabus](https://ioai-official.org/wp-content/uploads/2025/06/Syllabus-2025-Final.pdf), their Theory/Practice/Both categories and section structure are retained. Competency mappings are navigation, not changes to scope or weighting. No optimization toward the five research domains. New editions require a separately verified edition scope; the app does not claim 2026/2027 equivalence.

The six original notebooks are pinned to commit `39558e9a639d170bd92de91958fcdc915f670463` with their blob hashes. Do not rewrite tasks, data, metrics or limits. [2025 rules](https://ioai-official.org/wp-content/uploads/2025/08/Contest-Rules-for-IOAI-2025-version-2.3-1.pdf) have heading Version 2.4 despite filename 2.3. They allowed a limited organizer chatbot; this learner's **personal no-assistant simulation is stricter** and clearly labelled. Training, inference, original permitted pretrained models and necessary computation remain allowed. A model required as the task's algorithm/evaluator is distinct from an unauthorized tutor/coding assistant. Preserve task-provided model use and disclose any unavailable external service.

`python3 scripts/fetch-ioai-originals.py /private/path/ioai2025` downloads exact pinned notebooks, verifies Git blob hashes and writes attribution. It must not run notebooks or download datasets/models automatically. It belongs to the setup/reviewer phase; do not inspect reserved statements before a held-out attempt. Original data, hidden tests or AI-evaluator services may be unavailable. Then retain the original task but record an ungraded attempt, or separately label a retrospective changed protocol; never call a local surrogate score official.

## Minimal continuous livestream protocol

Before the attempt, select the checkpoint without opening its statement/solution, attest it is unseen, and confirm the listed readiness. A reviewer can prepare original assets in a clean folder without exposing solution material. If already familiar, mark **Use as practice instead**; do not relabel it unseen. Public archives and self-report cannot prove unseen status.

Use the portable Zulearn window. Close ChatGPT, LearnHarness host tutor views, coding assistants and external hints; disable editor AI completions; hide live chat and notifications. Set declared tools, original task locator, chosen time and any deviations in the stream description. Record the desktop and working paper continuously, with no edits or live-chat assistance. Do not publish private keys/data on stream.

Start the app attempt before revealing the original statement. It records task/checkpoint IDs, server timestamps, deadline, private draft and declared rules. It blocks all Zulearn AI, hints, ordinary lessons and solutions for the attempt, cancels in-flight AI and persists the lock across refresh/restart. It cannot disable other programs/devices or prove the stream is continuous. Window visibility observations are not cheating verdicts. Declare interruption/abandon if assistance arrives. An accidental refresh does not reset the timer.

At submission/expiry keep source, paper scans, actual runtime/test output, artifact hashes and the unedited stream URL privately with the result. Use the original judge/rubric if available. An independent reviewer should inspect explanation, algorithm, counterexamples, edge cases, complexity and grader receipts. Records → Save reported score labels external grading as reported, not independently verified by the app. A pending score remains pending. Compare later unseen transfer and retention, not merely a contest total. No medal prediction or official rank is generated.

After the attempt, unlock tutoring and perform error analysis: missing concept, proof gap, implementation error, or time strategy. Repair only that competency, export at most a few atomic cards, then return to the learning queue. Backups are recoverability tools, not tamper-evident custody; restoring an older record can erase exposure history, so preserve original assessment backups/recordings with a reviewer for public evidence claims.
