# Progress and learning evidence

The active website has two destinations: Learning Resources and Problem Bank. Its checklist is **first-level branches only**, with exactly fourteen Deep-Path part records. Concept-level and individual-problem checklists are no longer required. This policy supersedes older tracking granularity while preserving the source templates and their historical use.

[docs/progress.json](../docs/progress.json) on GitHub is the single authoritative committed completion/selection store. The static interface stages a proposal in tab memory; it cannot commit automatically. Explicit learner authorization, latest-record and scope comparisons, write-time conflict protection, undo/discard and committed-file read-back are required. See [the complete publication procedure](../docs/README.md#chatgpt-progress-update).

| Preserved source | Current purpose |
|---|---|
| [Deep-Path concept inventory](DEEP_PATH_EVERYTHING.md) | All 112 stable concept IDs, fixed order, counts and historical template; informational, no compulsory concept checkbox |
| [Competency record](COMPETENCIES.md) | All 109 scientific competencies; reviewed evidence remains distinct from reported completion |
| [Activity log template](ACTIVITY_LOG_TEMPLATE.md) | Optional private detail for an actual inspected task, provider identity, memberships and evidence |
| [Learner state template](LEARNER_STATE_TEMPLATE.md) | Optional private context for resuming tutoring |
| [Challenge log template](CHALLENGE_LOG_TEMPLATE.md) | Preserved independent-assessment protocol; challenges are deferred from the current website |

A completed part or selected resource never completes its constituent concepts/problems or certifies independent mastery. Old records and aliases remain valid. Independent performance, delayed retention and transfer require actual scoped evidence; no such evidence is fabricated by the interface.

Public completion summaries must contain only explicitly authorized non-sensitive information. Detailed private notes, conversations, scores, drafts and research can stay in ignored private files or an existing private repository. Those notes are supporting evidence, not a second authoritative completion ledger. No private records or repository are created automatically.
