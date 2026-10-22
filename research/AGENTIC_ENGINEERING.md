# Agentic research engineering

## Target capability
Design, implement, audit, and efficiently supervise LLM-powered research agents for code, literature, datasets and experiments — without letting agents replace mathematical reasoning or validation.

## Progression
1. Structured tool-use and strict tool contracts; provenance and authorization.
2. Test-driven agent-generated code; fixtures, integration tests, deterministic baselines.
3. Context management: read repo governance, authoritative files, immutable specs.
4. Experiment agents: explicit hypotheses, frozen split, code+data hashes, measured metrics.
5. Multi-agent delegation with independent verification and clear evidence authority.
6. Evaluation: acceptance tests, human review, blinded tasks, productivity measurement.
7. Operational safeguards: protected incumbent, rollback, budgets, privacy, logging.
8. Reliability: fallbacks, failure injection, environment reproducibility, interruption recovery.

## Hard gates
- No direct agent modification of protected result without tests, diff inspection, and explicit research approval.
- No model-generated measurements without actual logs and artifact provenance.
- No parallel agents working on shared writable state without isolation and merge protocol.
- Research claims require independent verification, not consensus of multiple AI agents.

## Evidence caution
An early-2025 randomized trial on experienced open-source developers found slower completion with then-current tools on those sampled tasks; a 2026 follow-up discussed weak, selection-biased evidence suggesting newer tools may help. Do not assume agent use is universally faster; benchmark your own tasks.
References: https://metr.org/blog/2026-02-24-uplift-update/ ; https://arxiv.org/abs/2507.09089
