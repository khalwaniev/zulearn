# Minimal adaptive AI learning engine

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Use the existing tools: ChatGPT, one Markdown learner-state record, Anki where useful, paper, a Python interpreter and the already selected platforms. **No new app, API integration, agent swarm, database or automated scheduler is required.** The curriculum determines the default queue; the tutor adjusts the next local lesson from actual evidence.

## Teaching policy

1. **Begin teaching.** At the first session, only the four basic operations are provisionally fluent; fractions and other arithmetic extensions, algebra and Python are new unless independently demonstrated otherwise. Start START-01; do not launch a 31-item diagnostic or ask repeated permission to begin an already requested lesson.
2. **Use the smallest useful foundation.** Explain the current variable, operation or definition and its purpose with a concrete example. State assumptions/conditions. A scientific proposition need not be declared “unconditionally true” or self-evident to be teachable.
3. **Make discovery possible.** Ask for a prediction, example, reason or counterexample when the learner has the required pieces. Ask one focused question at a time. If they lack a representation or needed operation, provide a worked explanation promptly; do not require multiple failures before helping.
4. **Check locally after learning.** One or two short probes identify the precise misconception in the current operation. Use a counterexample or contrast only where it changes instruction. A single miss is not a judgment about a whole subject; correct reasoning plus a small slip needs a different response from a confident misconception.
5. **Fade assistance.** Move from explanation/worked example to a completion problem, then a changed independent attempt. Record help actually used. Do not equate copying, recognizing, agreeing, feeling a “click,” or an AI-written solution with mastery.
6. **Transfer and retrieve.** Reserve a fresh changed task and a later delayed sample. Include short retrieval from previously taught skills. Make mathematical creativity recurring, using generate/conjecture/test/explain even before formal proof fluency.
7. **Persist evidence and next action.** Update the small state record at the end, not after every sentence. Queue one exact next resource/task. Do not make the learner choose among platforms every morning.

Optional acceleration: if the learner says they know the current subtopic, use one or two short varied unaided tasks directly. If the evidence is sufficient, advance; there is no requirement to escalate until they fail. If insufficient, teach the operation immediately. Prior evidence can be reused; do not re-probe an already demonstrated skill for ceremony.

## Minimal state and selection algorithm

Use [LEARNER_STATE](../templates/LEARNER_STATE.md) as a **private working copy**. The template is shareable; real personal learning logs need not be public. Start with only F01.basic_ops self-report and the first two current subskills; expand rows only when taught.

```text
1. Read the current queue and a few due reviews from the saved record.
2. If no record exists: start START-01, without a global diagnostic.
3. Teach the next queued subskill and its necessary local operation.
4. Observe the learner's explanation/attempt; record the actual assistance.
5. If a misconception blocks this task: explain, practise, then use a changed check.
6. If independent work is sound: advance the local queue; retain a later sample.
7. End with a short state update and exactly one next action for each active lane.
```

Keep at most one active mathematics subskill and one programming/DSA subskill, with a small data/scientific observation when ready. “Independent” refers to a concrete unaided task, not to a probability assigned by an LLM to the learner's knowledge. Suggested first reviews are next session and roughly a week later, then a longer interval if retained; adapt to errors/retention needs rather than treating exact dates as scientific optima.

States: `assumed_self_report` (F01.basic_ops only initially), `new`, `assisted`, `independent_now`, `retained`, `needs_repair`. Confidence is recorded separately from correctness and reason quality. A correct multiple-choice response alone may be a guess; a hesitant response can be correct; “I don't know” is usable information, not a moral or ability failure. Never lower an entire subject because one advanced subskill is missing.

At a new chat, paste the compact state and next queue. Saving a Markdown record does not make ChatGPT automatically read it or guarantee memory across sessions. If the assistant cannot write the file, it returns a short proposed update for the learner to save. No external messages, enrollments, account changes or GitHub writes follow from this tutoring workflow.

## Copy-ready tutor instruction

```text
Teach the next Zulearn v1 task from my saved queue. Only basic addition, subtraction, multiplication and division are provisionally fluent;
other skills are not assumed mastered. If no state is supplied, start START-01 fraction meaning/equivalence and optional whole-number Python:
equal-parts drawings, fraction meaning/equivalence and simple whole-number Python assignment.
Begin with a clear, motivated explanation and one worked example. Use paper for
the mathematics and my existing Python interpreter for code. Ask one focused question
at a time when I have enough knowledge to reason; explain directly when I do not.
Use short local checks, never a comprehensive entrance diagnostic or probing until
failure. Keep entry needs separate from research-level depth. For independent
checks withhold hints/solutions until I submit. Grade the specific reasoning and
actual code, not my confidence or your own generated answer. Record any help.
Correct misconceptions immediately, then use a changed example. Keep a small
retrieval/transfer queue, one recurring discovery task, and a concise Markdown state.
Do not claim remembered progress across chats without reading the saved record.
End by proposing the state update and the exact next action; do not redesign the
curriculum or add courses. No live GitHub modifications are authorized.
```

## What was selectively adopted from the requested repositories

These are implementation/design sources, **not controlled educational trials**. Files were inspected at pinned commits. No code or prompt package was installed or copied wholesale.

| Source and pinned evidence | Mechanism retained | Modification/rejected overreach |
|---|---|---|
| [amosblomqvist/learn](https://github.com/amosblomqvist/learn/tree/7cfd8942f82ab9476e63572387e1fe9bcea5082c), README and `skills/teach/SKILL.md` | Motivate a concept, connect it to a definition, explain how one might discover it; choose Socratic/expository delivery | Reject universal “no other teaching methods come close,” guaranteed retention, unbounded probe-until-failure and mandatory approval/delegation ceremonies |
| [amosblomqvist/learnharness](https://github.com/amosblomqvist/learnharness/tree/e3cfff6ee7b91d94cd7ed3eea0dcbf8807773fe8), `docs/teaching-methodology.md`, prober doctrine and confidence prompt | Current/goal state, minimal useful dependency path, reuse prior evidence, distinguish confidence from reasoning; current prober stops when evidence suffices | Owner's “self-evidence” theory is not a proven learning model; feeling obvious does not certify truth/mastery. No graph database or custom UI required |
| [janestreet/agent_skills](https://github.com/janestreet/agent_skills/tree/469868f4489cbdbe178c775a0af05bb6bef63689), README and `socratic-tutor/SKILL.md` | Small subskills, one focused question, varied independent checks, review and compact resumable state | Remove compulsory pre-teaching diagnostic, all-subskill completion ritual and automatic course-wide percentages. Use Markdown tables, not a required custom progress display |

Both bounded questioning and direct instruction are available. Established learning-science entries E01–E13 support retrieval, spacing, feedback and conditional guidance; they do not prove these repositories' personal theories or this local engine optimal. Anki stores compact recall prompts, not entire proofs or generated solution dumps. The tutor may explain or critique an implementation, but only the learner's fresh unaided work can establish independent evidence.

## Failure handling

If a source fails to load, use the original explanation/task embedded in the workflow/worksheet instead of sending the learner to search for another curriculum. If the AI is uncertain about a mathematical claim, verify with the named primary resource, an analytic case or executed computation before using it. Do not invent a result, a learner answer, a grade, a review date that already happened, or a persistent state update. A short answer plus clear next action is preferable to a display of the tutoring machinery.

## Latest starting-point correction and simple learner view

Only F01.basic_ops is assumed: basic addition, subtraction, multiplication and division. Every other arithmetic topic is new until shown independently. Never infer fraction, decimal, ratio, percent, signed-number or exponent mastery from it. Present just the current explanation, one short practice/check and next action. Keep the comprehensive graph, scoring shorthand and saved state in the background; the learner need not fill forms or select resources each morning. Preserve all research objectives and independent-evidence requirements.
