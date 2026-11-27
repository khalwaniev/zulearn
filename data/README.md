# Machine-readable curriculum and evidence boundaries

All files are UTF-8 JSON with `schema_version: 1`. Run `node scripts/validate-curriculum.cjs` before changing or importing data.

| File | Meaning |
|---|---|
| `approved_package.json` | Human approval, original ZIP size/hash, repository baseline and byte-preservation boundary |
| `curriculum.json` | 109 stable V1 competency IDs; entry edges separate from conditional depth; original resource and independent-evidence fields |
| `subcompetencies.json` | 12 local arithmetic/programming refinements plus 11 narrowly requested research refinements; all except basic operations start new |
| `deep_path.json` | 112 observed concept titles and modality occurrence counts; local D001–D112 IDs are not claimed platform item IDs |
| `catalogue/inventory.json` | Source-scoped factual observations, hashes, counts, limitations and status vocabulary |
| `catalogue/relationships.json` | Verified modality totals and unresolved item-level overlap; no exact duplicate pairs invented |
| `checkpoints.json` | 14 challenge slots with source locator, exact competency mapping, local readiness, timing, protocol and grading boundary |
| `ioai_tasks.json` | Six pinned original 2025 notebook paths and Git blob SHA-1 values |
| `ioai_2025_scope.json` | All 64 official syllabus topic rows, source-row/classification mapping and original PDF SHA-256 |

Learning state lives in private SQLite, not these content files. Tables distinguish instruction progress, narrow subskill state, tasks and independent evidence, platform completion, cards, challenge attempts, exposure, integrity events, conversations and private catalogue observations. Presence in a registry or knowledge graph is not proof of competence. `completed` refers to an activity only. A numeric independent result does not certify proof quality or whole-topic mastery.

Entry graph validation checks dangling references, uniqueness and acyclicity. Pedagogical entry edges are applied at the needed-operation level; conditional depth and research scaffolding are not recursively imposed as global gates. The frozen V1 Markdown and its checksum manifest remain the provenance authority for the transcription. The runtime never mutates these public files.

Public data intentionally cannot reconstruct private proprietary exports byte for byte. Raw hashes and aggregate metadata establish provenance; item IDs are null when not exposed. New private curation uses a local stable hash ID and actual observed URL, without inventing platform identity or publishing state.
