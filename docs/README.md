# Zulearn static learning interface

GitHub Pages: https://khalwaniev.github.io/zulearn/ (main /docs; availability depends on Pages deployment). No framework, API, installer or build pipeline. Runtime loads the canonical frozen JSON at 4852fb9eb0ff89379fdba806f635fe3f6a4a6ef1; activities.json is original supplemental practice and derived approved locator index. No change to curriculum/v1 or original data. The website requires ordinary browser JavaScript and network access; Markdown fallback is available.

## Progress

The empty public `docs/progress.json` is an optional non-sensitive canonical status summary; no actual progress is fabricated. It is fetched from main, not localStorage. Choose one canonical record location: public summary if explicitly willing to publish it, otherwise a private Git repository with the same schema. The public site cannot automatically read private records. Use the form to validate and prepare a full JSON replacement; inspect current file, then commit explicitly using GitHub editor, an authorized connector, or Git locally. Reload after committing. No checkbox commits automatically. Never publish private evidence, grades, chats, credentials or protected work. Keep evidence and memberships privately. Status attestations are not proof. Deep-Path concept completion needs all relevant activities accounted for; independent mastery requires reviewed independent work, retention and transfer. No title-based deduplication. TensorTonic known membership query parameters are removed; other query-bearing or ambiguous URLs are rejected rather than inventing identity. External IDs must be actual inspected public item URLs.

## Curation and acceptance

15 original exercises; 52 approved worksheet locators, 17 approved paper locators, 6 bounded TensorTonic tasks; 109 competencies, 112 concepts, 14 checkpoints, 23 refinements and ten lessons. Original practice is intentional retention/transfer, not a proven exclusive gap; platform prompt-level relationships remain unresolved. MathNet, AoPS, OTIS, Putnam and additional course/catalogue links are selection sources, not individually inspected task assignments. No protected assessment key linked by site; existing immutable diagnostic key is publicly accessible via GitHub. Genuine unseen tests must use reviewer-held private fresh questions/keys.

Actual pure renderer and progress/checker functions executed against frozen data: 12 checks passed (see list below). Browser, live deployment, link liveness, and real user cross-session commit were not tested in the connector runtime. No claim of exhaustive curation.

- PASS: 109/112/14 frozen counts
- PASS: Opening lessons, refinements and approved locators
- PASS: Exact rational checker
- PASS: Canonical URL and query validation
- PASS: Initial state validates
- PASS: Progress serialization and recovery
- PASS: Mastery evidence required
- PASS: Concept accounting required
- PASS: Actual renderer: all canonical IDs present
- PASS: Fraction diagram, answer form and protected key not linked
- PASS: Next action advances after independent completion
- PASS: No undefined resource link

## ChatGPT progress update

After learning, say: “I completed FRA-01 [assisted or independently]. Actual result: [describe privately]. Validate the ID and evidence status; give one exact next action.” If you explicitly choose to publish a non-sensitive status, add “Update my public Zulearn progress summary on GitHub.” The tutor must read the latest `docs/progress.json`, resolve the canonical ID (paper URL → existing paper ID; actual TensorTonic problem URL → canonical URL; never record a catalogue landing page as a task), preserve unrelated records, reject unsupported mastery, commit only the minimal change with the current blob SHA, then re-read and report the commit. Without write access, use the website's validated JSON draft and GitHub editor or local Git. Private evidence never enters the public repository.

Additional post-push test: the committed JavaScript was fetched and executed against the actual frozen records using a simulated DOM and fixture fetch. Nine checks passed: initialization/handler binding; correct equivalent fraction; rejection of zero denominator; tutor clipboard handoff; canonical record selection; insufficient mastery rejection; explicit draft generation; serialized progress recovery/next action; corrupt state fails closed. These are runtime simulation tests, not desktop/mobile browser tests or a real learner progress commit. The public Pages URL could not be reached by the verification tool; GitHub main commit was verified independently.
