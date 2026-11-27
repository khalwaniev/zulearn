# Zulearn Local — begin fractions

## Quick start: Windows with WSL

Install Node.js 24 LTS (or newer compatible Node) and Git inside WSL first. Check `node --version`; a Node 18/20 installation is too old for this SQLite implementation. Keep the checkout and private database in the WSL Linux filesystem.

```bash
cd ~/zingle
git clone https://github.com/khalwaniev/zulearn.git
cd zulearn
node scripts/validate-curriculum.cjs
node --test local-app/tests/engine.test.cjs
node local-app/server.cjs
```

If `~/zingle/zulearn` already exists, use `cd ~/zingle/zulearn` and `git pull --ff-only` instead of cloning. Preserve any local edits first. Open **http://127.0.0.1:8765** in the Windows browser. WSL localhost forwarding is expected, but this environment has not tested your Windows/WSL machine. If the page does not open, try it inside WSL and check localhost forwarding; do not expose the app to the network. Ctrl+C stops it. The same final command resumes your previous state next time.

Native PowerShell also works with Node 24 and Git: clone, `Set-Location zulearn`, then run the same three `node` commands. Native Windows startup has not been executed here. There are no shell-specific dependencies in the portable app.

## First session: about 25 minutes

1. Open Today, **What a fraction means**. Read the four short explanations and the 1/3 = 2/6 visual example (5 minutes).
2. On paper draw one whole split into four equal parts; shade three. Name both numbers and split every part in half. Explain why 3/4 = 6/8 (7 minutes).
3. Answer the discovery prompt about unequal parts. Click **Try one changed exercise**, give the fraction and your reasoning, then **Check practice** (5 minutes). A failed count stays local: reread the equal-parts explanation, use One hint if needed, draw another whole and try a fresh task.
4. If comfortable, choose Challenges → **Fresh equal-parts challenge**. Confirm unseen/rules, work for up to 8 minutes without AI or hints, and submit. Calculation is checked exactly; explanation review stays pending. This is a small original Zulearn check, not an olympiad.
5. Optionally save two short Anki cards. Close the app when finished. Next time Today resumes your next unfinished lesson.

Fast progression: demonstrate the changed task unaided, give a sound explanation, and continue; do not repeat drills for a quota. If assistance was used, it remains practice. To accelerate without repeating guided practice, a correct fresh independent local check also advances the instruction queue. Do not infer all fraction skills from a single equal-parts calculation.

The next queue is fraction operations → decimals → ratios/percent → signed numbers → powers/grouping → algebra notation → equality. Optional Python and the collapsed Optional parallel ML lane can start concurrently. The latter resumes the first unresolved Deep-Path concept rather than imposing an all-mathematics gate. All later arithmetic begins new. Later advanced interactive content is not implemented; the frozen curriculum remains the progression reference.

## Optional LearnHarness foundation

The plugin uses public LearnHarness extension APIs and the same Zulearn engine/UI. No upstream core fork is required. [Full feasibility and source audit](../integrations/learnharness/FEASIBILITY.md).

Reproducible upstream setup in WSL (Node **26** follows upstream's pinned source CI; portable Zulearn needs only 24):

```bash
cd ~/zingle
git clone https://github.com/amosblomqvist/learnharness.git
cd learnharness
git checkout e3cfff6ee7b91d94cd7ed3eea0dcbf8807773fe8
npm ci
npm run plugins:setup
npm run dev
```

Open http://localhost:3000 once. In Settings → Community plugins note the actual plugins directory. In another terminal, from the Zulearn checkout:

```bash
node scripts/install-learnharness-plugin.cjs "/actual/plugins/directory/zulearn-local"
```

Replace only that path with the directory displayed by LearnHarness. Refresh Community plugins, enable **Zulearn Local**, and click **Continue Zulearn** in the sidebar. Re-run the installer after updating Zulearn, then restart LearnHarness. The installer replaces generated `dist/` code and preserves sibling `data/` records. Use a single active LearnHarness host per profile. The official upstream setup is a larger dependency installation; it need not block today's portable lesson.

Host and portable profiles are separate. To switch, export a Zulearn backup and restore it in the other interface. Do not point both running interfaces at the same database. The host's knowledge graph is separate from Zulearn competence evidence.

## AI help: optional and explicit

Without a provider, integrated explanations, hints, tasks, state and challenges work. **Copy ChatGPT lesson context** uses your existing ChatGPT during learning. It is assisted work, and the app cannot track an external chat.

The LearnHarness plugin uses its explicitly configured Strong model through the host's public inference API. Configure a provider/model in LearnHarness, then use Ask for help and consent to the request. No paid fallback/model is selected silently. The host may have other AI features with their own usage; inspect its settings.

Portable in-app tutoring accepts an explicitly selected OpenAI-compatible `/chat/completions` endpoint. Set environment variables for the current terminal; do not put secrets in a tracked file:

```bash
export ZULEARN_AI_BASE_URL="http://127.0.0.1:11434/v1"
export ZULEARN_AI_MODEL="YOUR_INSTALLED_LOCAL_MODEL_ID"
node local-app/server.cjs
```

This example requires a separately installed compatible local model server; it is not bundled or automatically downloaded. For a remote provider use its documented HTTPS base URL and `ZULEARN_AI_KEY` in your private environment. Compatibility varies by provider; the adapter's wire format was tested with a fake local endpoint, not every real model. A ChatGPT subscription does not itself configure this adapter or establish API billing entitlement.

Each user-requested reply is capped at 500 output tokens and 30 seconds with no automatic retry. Context contains the current original lesson, three recent observations and up to ten lesson conversation turns, not arbitrary files. Costs depend on provider/model/input/output rates; no numerical price or zero-cost claim is made. Never use a paid provider until you have configured its own budget. AI has no shell/file/web tools. Treat generated claims as unverified; confirm mathematics against the lesson or primary reference. No live paid-provider call was made during verification.

## State, backup, recovery and Anki

Portable defaults: WSL/Linux `~/.local/share/zulearn/zulearn.sqlite` (or `$XDG_DATA_HOME/zulearn`); native Windows `%LOCALAPPDATA%\Zulearn\zulearn.sqlite`. Override with `ZULEARN_DATA_DIR` before launch. SQLite uses WAL and transactional writes. Stop the app before manually copying the entire directory; copying only a live `.sqlite` file can miss WAL data.

Use Records → Download private backup regularly and before updating. Move the downloaded JSON to your private backup location. Restore validates a SHA-256 checksum, schema, curriculum identity and known references before replacing records transactionally; it creates a private `before-restore-<uuid>.json` safety copy first. Checksums detect accidental damage, not malicious rewriting. Backups contain learning history and chat text, so keep them private; they contain no provider credentials. Newer database schemas are refused without downgrade. No encryption at rest or automated cloud backup is provided. Keep old valid backups as well as the latest one.

Anki: save two lesson cards, then Anki → Export Anki TSV. In Anki use File → Import, Basic note type, Front/Back/Tags, preview, and update-existing handling for matching fronts. One card tests one primary idea. Anki owns scheduling. There is no direct Anki account integration.

Platforms: search D001–D112 or observed titles; open the actual platform and record status/assistance/evidence. **Record a newly inspected platform item privately** accepts an actual HTTPS URL, title and competency IDs. It does not scrape tasks or publish private metadata. Duplicate status requires another observed item and inspected identity/constraint evidence. Completion is not mastery.

## Independent Challenge Mode

See [rules and checkpoint map](../assessment/CHALLENGE_PROTOCOL.md). Use the portable window for strict livestream attempts. In a challenge all Zulearn tutor/hint/lesson/export endpoints lock, including another tab; in-flight AI is cancelled and late replies withheld. Timers, drafts, task IDs and results persist. No automated proctoring or YouTube integration is claimed. Other LearnHarness views, applications and devices cannot be disabled by this plugin.

## Developer verification

```bash
node scripts/validate-curriculum.cjs
node --test local-app/tests/engine.test.cjs
```

Optional browser smoke test requires developer-installed Playwright and Chromium (not app dependencies):

```bash
ZULEARN_CHROMIUM="/path/to/chromium" node local-app/tests/browser-smoke.cjs
```

Real LearnHarness host smoke (optional developer setup, after installing the pinned host):

```bash
ZULEARN_LEARNHARNESS_DIR="/path/to/learnharness" ZULEARN_CHROMIUM="/path/to/chromium" node local-app/tests/learnharness-smoke.cjs
```

Tests use disposable profiles. Do not run experimental tests against your real learning directory. See the [implementation record](../governance/IMPLEMENTATION_RECORD.md) for exactly what was exercised.
