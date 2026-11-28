# Zulearn: two pages, selected branches

This interface supersedes the earlier five-page UI and concept-level checklist. The scientific curriculum and original source materials remain preserved. The reviewed starting commit is `0dd9efc2960ece62712b2df753663197ee7934ac`.

The two primary destinations are **Learning Resources** (the default homepage) and **Problem Bank**. Deep-ML and TensorTonic deliver their own learning content. Zulearn organizes resources, stages self-reported branch completion, and exposes retained practice with honest provenance. It does not schedule learning or infer mastery.

## Resource hierarchy and checklist

`Platform → Parent category → First-level branch → Informational contents`

Only selected, trackable first-level branches receive a completion checkbox. Provider categories, concepts, individual problems and internal chapters do not. Progress at category/platform level derives from selected branch records. Selection controls are separate from completion checkboxes. Optional resources can be added with a bounded scope; removing one preserves its committed history. Pending complementary sets cannot enter the confirmed checklist until reviewed and their scope is established in the registry.

| Platform | Parent category | Named branches | Initially selected checkboxes |
|---|---|---:|---:|
| Deep-ML | Deep-Path Everything | 14 | 14 |
| Deep-ML | Learning Paths | 13 | 0 |
| Deep-ML | Labs | 120 | 0 |
| Deep-ML | Projects | 157 | 0 |
| Deep-ML | Collections | 24 | 0 |
| Deep-ML | Courses | 2 | 0 |
| Deep-ML | Math | 24 thematic sets | 0 |
| Deep-ML | Intuition | 16 thematic sets | 0 |
| TensorTonic | Study Plans & Roadmap | 34 | 2 |
| TensorTonic | Projects | 28 observations | 0 |
| TensorTonic | Research Paper Tracks | 29 | 0 |
| TensorTonic | Labs | 1 | 0 |
| TensorTonic | ML System Design | 58 | 0 |
| TensorTonic | Articles | 8 thematic groups | 0 |
| Zulearn | Lessons | 2 chapters | 2 |
| Zulearn | Problem Bank | 9 candidate thematic sets | 0 |
| Zulearn | Selected Courses | 5 bounded selections | 5 |
| Zulearn | Research Papers | 17 | 17 |
| **Total** | **18 parent categories** | **561** | **40** |

The 40 selected units are 14 primary parts and 26 retained complementary selections. These are not 40 compulsory full courses. All nonprimary selections can be removed. There are 512 other selectable catalogue branches and nine pending problem sets; neither adds a default obligation. Counts are named navigation scopes/observations, not a unique-exercise count. Provider categories/observations can overlap.

The inventory is [resources.json](resources.json). Every branch states its title, local identifier, provenance or source URL, source-link type, selection status and completion scope. A local observation identifier is not a provider identifier. Missing direct URLs link to the actual provider category with an explicit label. Large categories disclose the first eight optional rows, then offer “Show all”; search includes the full named inventory. All 1,853 original factual observations remain unchanged in [the source inventory](../data/catalogue/inventory.json), including earlier snapshots. The five recovered TensorTonic project-category listings remain informational inside Projects.

### Deep-Path Everything

Exactly `UNIT-DP-01` through `UNIT-DP-14` are manual part records. `UNIT-PATH-D` is derived. The 112 concept IDs, their original ordering, prerequisite mappings, and 3,185 observed activity occurrences remain informational. Checking a part reports its relevant learning scope, with established exclusions/deferrals retained. It creates no concept/problem records and establishes no independent mastery.

| Before | Current |
|---|---|
| 222 manual units; 31 derived parents | 40 initially selected branch units; one legacy-ID derived Deep-Path parent, plus category/platform summaries calculated directly |
| 112 mandatory Deep-Path concept units | 14 part units; zero mandatory concept units |
| 11 individual conditional TensorTonic tasks | Two bounded selections containing those tasks informationally |
| 52 individual worksheets and 14 challenge units in checklist | Candidate practice grouped thematically; independent challenges preserved in GitHub and deferred from this UI |
| 508 canonical identities | All 508 preserved; 486 additional local resource-scope identities; 994 distinct registry identities |

### Full provider resources and local selections

The TensorTonic Language Modeling from Scratch branch covers **ten conditional transfer tasks** selected previously. It does **not** mean completion of the full provider plan (62 problem occurrences, 17 quizzes, 17 chapters). The other selected TensorTonic branch covers only the conditional bootstrap task in the first roadmap module. The other 20 named plans and the remaining roadmap modules are discoverable and optional.

MIT 18.06, MIT 18.02SC, MIT 6.042J, Harvard Stat 110 and Stanford EE364A have bounded sections explicitly preserved from the approved mathematics curriculum. Completing one reports only that selection. Paper assignments preserve their original reading/derivation/implementation limits; they are distinct from a provider's paper implementation track.

New selections default to a bounded complementary scope. Full-provider completion is a separate explicit choice, available only for resources whose scope permits it. Changing an already completed scope requires a separately reviewed reset; an old record cannot silently certify new work.

## Problem Bank and scientific honesty

[complementary-audit.json](complementary-audit.json) reviews every retained item, with target skill, candidate gap, relevant provider evidence and its inspection limit, insufficiency decision, exact provenance and verification method:

| Retained source | Count | Allocation |
|---|---:|---|
| Original Zulearn exercises | 46 | Pending complementary verification |
| Approved worksheet display copies | 52 | Pending complementary verification |
| Exact external problem locators | 17 | Pending complementary verification |
| Conditional LeetCode identities | 4 | Pending complementary verification; three algorithmic sets under Zulearn |
| Existing TensorTonic task references | 11 | Native conditional referrals; bodies/solutions not recreated |
| Confirmed unique complementary gaps | **0** | No unsupported exclusivity claim |

All 119 pending candidates remain behind an explicit “pending complementary verification” disclosure. They are optional preserved practice, excluded from the confirmed complementary workload. Numeric practice still has an exact rational checker; written work has original criteria or an independent-review method. External statements/solutions are linked, not republished. No new original exercise was created. Lesson delivery stays in GitHub; Learning Resources contains no exercise bodies, answer forms, hints or solutions.

The bounded current inspections include TensorTonic's bootstrap task, multiple-choice scoring task, and leakage lesson. In particular, entity/time splits, near-duplicates, preprocessing boundaries and repeated test use already appear in the leakage lesson. Generic leakage or statistical reasoning must not be presumed absent from the providers. Deep-ML's split lab exposes its name but not the complete task body to the public reader; its adequacy remains unresolved. The retained Deep-ML Intuition and Math inventories include substantial mathematical/scientific reasoning. Title similarity is neither proof of equivalence nor proof of a unique gap.

### Unresolved inventory and deduplication limits

- Deep-ML has 12 retained thematic path names plus Essentials. Current direct path identities and many course/item links remain unresolved. These snapshots are not asserted current provider routes.
- The TensorTonic project snapshot reports 31 projects in 11 categories. Eight direct named projects and 20 release observations are retained; releases can overlap projects and each other. These are not 28 verified unique projects. Five category destinations are separately informational. The full project index was unavailable during this audit.
- All 29 paper-track names remain visible, without invented individual URLs. One named lab is recovered; a complete lab count is unavailable.
- The current article hub and LLM Internals index both show 20 published guides; 31 listed topics include unpublished material. This retrieval resolves the earlier cached 19-versus-20 discrepancy, without reconstructing missing article bodies.
- The roadmap's 122 visible assignments versus 125 branding remains unresolved. Occurrences across plans, standalone interfaces and snapshots cannot be added as unique problems.
- Zero cross-platform exact-duplicate pairs are verified. The eleven previously established TensorTonic observation aliases retain their existing canonical identities. Unknown relationships stay unknown; do not merge by title.
- A candidate can enter the confirmed complementary set only after relevant provider activity contracts are inspected and an actual missing demand, provenance and evaluation are established. If a provider already supplies it, refer to the native activity instead.

No claim equates a checklist, catalogue size, availability, coverage or a completed guided task with independent mastery, a PhD programme or demonstrated frontier research ability.

## Authoritative progress and batch publication

**`docs/progress.json` on GitHub is the single committed progress store.** It remains unchanged by this implementation. There is no progress database, browser-local progress ledger, automatic platform synchronization or automatic GitHub commit. Only the theme preference uses local storage. Staged changes stay in tab memory; leaving with uncommitted changes triggers a warning.

The inline “Review changes / Save progress to GitHub” panel provides undo per branch, discard, clipboard fallback and committed-file verification. A checked staged box is explicitly labelled staged; the committed numerator does not change until read-back verifies publication.

The backward-compatible progress schema remains `schema_version: 1`, with the existing `records` and optional `next` fields. An optional `selections` object stores explicit branch selection and bounded scope. Old evidence, canonical identifiers and lane pointers remain valid. No automatic history migration or child inference occurs. The old hierarchy is preserved at the reviewed baseline in Git history.

### ChatGPT progress update

Only after the learner explicitly authorizes publishing a concrete batch:

1. Read the latest `main` registry and `docs/progress.json`, retaining the current progress blob SHA and branch HEAD.
2. Compare **both** each `previous` record and `previous_selection` against the latest file, including when only completion is changing. Stop on a conflict and review that branch. Do not overwrite a changed scope.
3. Validate and merge with production [model.js](model.js) `applyBatch`. Only trackable first-level branch IDs are permitted. Reject concept, worksheet, individual problem, derived parent, internal chapter and unverified-set updates. Branch checkbox batches support `completed_reported` or `not_started` with empty evidence only. Historical independently reviewed evidence remains valid but is not fabricated by checkboxes.
4. Preserve every unrelated record, selection and `next` pointer. A scope change on completed work requires an explicit reset. Removing a selection preserves its historical record.
5. Commit using the latest GitHub contents blob SHA or an expected-HEAD compare-and-set. A validation performed earlier does not replace the write-time precondition.
6. Read the committed file back and verify the exact requested changes. Only then claim the progress was saved. The website's “Verify committed progress” reads the latest raw GitHub file, compares all staged changes, and clears the proposal only when it matches. Network failures or mismatches are displayed as incomplete verification.

A local merge helper is available for an already authorized update:

```bash
node scripts/progress-batch.cjs --authorized latest-progress.json batch.json merged-progress.json
```

This writes a separate validated proposal, refuses existing output paths, and does not commit. `--authorized` records an authorization already obtained; it is not a substitute for the learner's instruction. Private notes, scores, research or raw proprietary exports must not be inserted into public progress.

## Development and verification

There is no runtime framework, paid API, package install or database. GitHub Pages serves `/docs`. Production reads same-origin JSON, so initial rendering does not depend on cross-origin raw GitHub access. `syllabus.json` is a generated, SHA-256-linked display projection of the unchanged scientific source JSON; it is not a second editable curriculum authority.

```bash
python scripts/simplify-learning.py
node scripts/test-learning.cjs
```

The generator always starts from the reviewed baseline, preserving every nonhierarchy activity field. It does not modify frozen sources or real progress. The tests execute the actual production model with actual repository data. They check hierarchy, legacy identities, aliases, scope boundaries, no fabricated completion/mastery, selection, conflicts, authorization, unchanged progress and protected bytes. Current receipt: **207 assertions passed; 83 protected source files byte-identical**. The original 30-file curriculum package, 109 competencies, 112 concepts, 14 independent assessment definitions and 1,853 source observations remain intact.

Actual Chromium rendering was inspected for desktop and **320- and 390-CSS-pixel iframe viewports**, with light/dark inspected at 390 pixels. This is real production rendering and interaction, not a simulated DOM test; it is not a physical-device/touch or full assistive-technology certification. Desktop and narrow screenshots are in [qa/](qa/). The narrow screenshots include the surrounding desktop harness. Both pages had no horizontal content overflow in the inspected narrow viewports (305/375 CSS-pixel client areas with native scrollbars). A 320-pixel toolbar overflow was found and corrected. All 14 part checkboxes measured to the right of their titles. Browser interaction verified staged completion, undo, optional selection, batch preview, discard, search and exact equivalent-fraction checking. Broader live publishing status is reported separately from these preview checks.

Legacy Today/Master Path routes open Learning Resources. Progress/Checklist opens the inline save panel. Old exercises open Problem Bank with their pending status; concept/part links open informational contents of the appropriate part. Tutor/Challenges link to preserved GitHub sources without creating extra pages.
