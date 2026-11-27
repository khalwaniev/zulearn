# Final corrective change manifest — P01–P12

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

Baseline: `zulearn_definitive_curriculum_2026-11-27.zip`, SHA-256 `2aeeaa02ed14430eac2fa21f6cabca83dca2387e864c5e48da6cffbf0efe0334`, 114,147 bytes, 24 files. Its physical bytes and integrity were rechecked before changes. Source of independent-audit status/findings: the human's final corrective request, not a newly invented or unseen audit transcript. Each finding below was checked against actual baseline content before modifying it.

**Decision:** P01–P12 corrected within this bounded pass; v1 architecture fixed for learning. Start START-01. The corrective pass is author-side verification and does not claim a second independent audit. No live GitHub write, commit, branch, PR, deployment or curriculum integration occurred. Approval of the revised package is still required for future live integration.

## Finding → baseline evidence → correction → verification

| Finding | Verified baseline evidence | Correction and affected files | Executed verification IDs |
|---|---|---|---|
| P01 | `curriculum/COMPETENCY_REGISTRY.md:13` — Single direct-prerequisite column treated entire topics as gates; separate entry/depth semantics across all retained IDs. | **109 rows, entry versus task-conditional depth; 102 baseline IDs preserved.** Files: curriculum/COMPETENCY_REGISTRY.md; curriculum/MASTER_CURRICULUM.md | V02,V03,V04 |
| P02 | `curriculum/COMPETENCY_REGISTRY.md:47` — C01 required F02; M07 required calculus/counting; M12 convex theory; L19 neural nets; L21 RNN/generative models; B08 structure evaluation. | **Six named overconstraints removed; finite-first/ scalar-first/tabular-first and early leakage routes explicit.** Files: curriculum/COMPETENCY_REGISTRY.md; curriculum/MATHEMATICS.md; research/RESEARCH_SPECIALISATIONS.md | V02,V03,V04,V07 |
| P03 | `operations/WEEKLY_DAILY_WORKFLOW.md:27` — Default Day 1 opened diagnostic items; routing used whole-question targets. Replace with teaching, local subskill checks and immediate repair. | **START-01 teaches fractions first after the four basic operations; brief local checks and immediate remediation; scoring records stay tutor-side.** Files: assessment/DIAGNOSTIC_PROTOCOL.md; operations/WEEKLY_DAILY_WORKFLOW.md; templates/LEARNER_STATE.md | V04,V05,V08 |
| P04 | `curriculum/COMPETENCY_REGISTRY.md:16` — F02 incorrectly reused geometry/series A4; several prompt labels claimed implementation not required by their text; mixed rubrics could mask gaps. | **31 DX parents retained; demand labels fixed; mixed subparts scored separately; LC key answers added.** Files: assessment/DIAGNOSTIC_QUESTIONS.md; assessment/DIAGNOSTIC_KEY.md; curriculum/COMPETENCY_REGISTRY.md | V05,V07,V08 |
| P05 | `curriculum/MATHEMATICS.md:101` — Creativity sources existed but were optional/too weakly recurring; make discovery integral from the first week without prestige/far-transfer claims. | **Recurring generate/conjecture/test/explain plus a weekly level-appropriate non-routine task; selective MathNet/AoPS/OTIS/Putnam.** Files: curriculum/MATHEMATICS.md; operations/LEARNING_MASTERY_PROTOCOL.md; operations/WEEKLY_DAILY_WORKFLOW.md | V04,V09 |
| P06 | `curriculum/COMPETENCY_REGISTRY.md:28` — Some topics were named already (including Jacobians/Hessians), but explicit tasks/depth for the full requested mathematical/TCS list were incomplete. | **Exact Taylor/Jacobian/Hessian/change/conditional/bound/recurrence/fixed-point/MDL/MC/VI/amortized/language/DSL/SAT/SMT/verification tasks.** Files: curriculum/MATHEMATICS.md; curriculum/ALGORITHMS_TCS.md; curriculum/COMPETENCY_REGISTRY.md | V02,V06,V07,V09 |
| P07 | `research/RESEARCH_SPECIALISATIONS.md:13` — All five branches and 17-paper table already existed; strengthen entry/depth, discriminating controls and bounded artifacts rather than replace with a larger canon. | **Five branch kits distinguish accessible entry, claim-specific depth, controls and one bounded artifact; 17 baseline papers retained.** Files: research/RESEARCH_SPECIALISATIONS.md | V09,V11 |
| P08 | `curriculum/COMPETENCY_REGISTRY.md:80` — L16 combined distinct objectives; post-training/verifier skills existed in platform metadata but lacked their own clear evidence nodes. | **Separate L16/L26; add L27 post-training and L28 verifier guidance; selected methods, not a new reproduction quota.** Files: curriculum/COMPETENCY_REGISTRY.md; research/RESEARCH_SPECIALISATIONS.md; curriculum/DEEP_PATH_CONCEPT_MAP.md | V06,V09,V11 |
| P09 | `operations/LEARNING_MASTERY_PROTOCOL.md:32` — Learning rules existed but no minimal persistent tutoring engine/state template or inspected requested-repo adoption policy existed. | **Three requested repos pinned/read; useful mechanisms adopted selectively; no software build, global probe or assisted-mastery claim.** Files: operations/AI_LEARNING_ENGINE.md; templates/LEARNER_STATE.md; reading/SCIENTIFIC_EVIDENCE_REGISTER.md | V10,V12 |
| P10 | `curriculum/COMPETENCY_REGISTRY.md:82` — R1 was referenced but not defined; math, domain, algorithm and diagnostic locators reused labels such as B1/A1. | **RL-R1 fully specified; 52 unique worksheet owners; DX/LC/START namespaces separate.** Files: curriculum/WORKSHEET_INDEX.md; curriculum/MATHEMATICS.md; curriculum/ALGORITHMS_TCS.md; research/RESEARCH_SPECIALISATIONS.md | V06,V07 |
| P11 | `curriculum/MASTER_CURRICULUM.md:55` — Master/protocol/workflow agreed on the old diagnostic-first start, which conflicts with the new human decision; synchronize all three and current evidence/status. | **Unified teaching-first route and fixed week queue; v1 design frozen for learning, live integration still approval-gated.** Files: curriculum/MASTER_CURRICULUM.md; assessment/DIAGNOSTIC_PROTOCOL.md; operations/WEEKLY_DAILY_WORKFLOW.md; README.md | V04,V08,V12 |
| P12 | `reading/SCIENTIFIC_EVIDENCE_REGISTER.md:31` — Individual course sources were present, but no bounded institution-level AI-relevant crosswalk was supplied. | **Bounded MIT/Stanford/Berkeley/CMU/OSSU primary-source crosswalk; C19 and minimal C13 depth, no imported degree requirements.** Files: governance/CURRICULUM_CROSSWALK.md; curriculum/COMPETENCY_REGISTRY.md; curriculum/ALGORITHMS_TCS.md | V09,V10,V12 |


Verification IDs refer to the executed [PACKAGE_VALIDATION](PACKAGE_VALIDATION.md) receipt, including all-file reads/link checks, entry DAG/critical dependency/profile checks, label/key/worksheet consistency, mathematical/code tests, source pins, preservation and ZIP checks. Technical checks support the stated facts; they do not prove pedagogical optimality or certify personal mastery.

## Latest human starting-point correction

Assume only basic addition, subtraction, multiplication and division, recorded as F01.basic_ops. Fractions, decimals, percentages, ratios, negative numbers, exponents, roots and every other arithmetic topic are new until independently demonstrated. The first session now teaches fraction meaning/equivalence; the seven-visit queue teaches arithmetic extensions, then starts notation/equality, alongside simple Python. No arithmetic-completion claim is made for a single week. Remaining extensions have explicit MAT-ARITH tasks and can develop alongside algebra. No new competency nodes are added for this clarification.

The learner-facing flow is just the current lesson, short practice/check and one next action. The comprehensive graph and evidence shorthand stay in optional tutor records. Rapid progression requires actual independent understanding; the tutor carries unfinished work forward and preserves all ultimate research objectives.

## Coverage and boundedness

All 12 requested deliverables retain their original paths. All 102 baseline competency IDs remain; seven explicit nodes bring the registry to 109. Entry relationships fall from 245 undifferentiated baseline edges to 165 smaller entry edges; depth relationships remain conditional content references, not a second global prerequisite gate. Graph acyclicity alone does not establish pedagogical validity, so profile traces and the exact first session were also inspected.

The 112 Deep-Path titles, parts and modality counts remain unchanged. Selected allocation fields now separate generation/SSL and common post-training versus conditional deep RL. The baseline 17-paper canon is preserved; new method references are targeted/on-demand, not extra mandatory reproductions. The tutoring engine is Markdown plus existing tools, not a software platform. No complete university program, new competition or paid enrollment is added.

The four original provenance files are byte-identical: recovered report, citation concordance, catalogue inventory and recovery provenance. The prior validation receipt is preserved byte-identically as `provenance/BASELINE_PACKAGE_VALIDATION.md`. These historical records describe the earlier package; current master/workflow/manifest take precedence over their old diagnostic/freeze wording.

## Artifact changes

The following file-level table is derived from actual baseline/revision bytes. Hashes identify changed/current bytes; they are not claims of original unrecovered Deep Research deliverable fidelity. Current validation and checksum files are generated after this table and described separately to avoid circular self-hashing.

| File | Disposition | Baseline bytes | Revised bytes | Baseline SHA-256 | Revised SHA-256 |
|---|---|---:|---:|---|---|
| PATCH_MANIFEST.md | CORRECTED | 7847 | 9790 | `2495f9088cb545a45ae0080216063b5134f159d84777c67372efcbeec9131a02` | `4740bf52d032cd388d8c6652ffb7a7b136107170fe76f03b1dfeb1c57ed2eaf7` |
| README.md | CORRECTED | 3303 | 4865 | `917999bb6e4fd56f3070a588ec691ef6ed889b00e230fbcf76b35a7b27a72076` | `d9b8cd8b934c128c619db1d8ea55e4157d051ef9a6f0d18c35c8b36aa08a6210` |
| assessment/DIAGNOSTIC_KEY.md | CORRECTED | 15365 | 20327 | `d52f4a6edbc4348ae18e7d002154edba71a1a5e932962588624f8f2290eedf61` | `fb56f0912cabe2d725a496403de3d78ab28cf034cc628d998a559bff3eeea68e` |
| assessment/DIAGNOSTIC_PROTOCOL.md | CORRECTED | 7109 | 8479 | `08076158789475b1c76e5148f75540d0fe213f41ea716e625147bb9fa84c6098` | `3911da5b234ef12e8edb5818242d892dd5e99edf10893aec19d320a466bc983e` |
| assessment/DIAGNOSTIC_QUESTIONS.md | CORRECTED | 9411 | 10779 | `761cf31c5b013522876077e44be2c6b5f47b3cd76cff68e66253f2824e0740fa` | `a87e7c8e9f22b10fd2cdf5ec30c32565fa5f6639c915a98e87e8199075bff75b` |
| curriculum/ALGORITHMS_TCS.md | CORRECTED | 9652 | 15526 | `92f4e824463e44df525e99a1de24317183c190010a9187d09004e1f5a6b2add7` | `7dcd0aa4a66dd3b9a06e40c7c7232ae684efb9aef6ac15e558a562c313d82bac` |
| curriculum/COMPETENCY_REGISTRY.md | CORRECTED | 28997 | 41158 | `02ca2997a3aea13dd4a3092cf7a051a857460ff9ac3885ceb518f4c7bbeffb87` | `0484b79d252edccc45e84491bd7bb9ede763ef8a2f3a87b0b454dfd46ad59cba` |
| curriculum/DEEP_PATH_CONCEPT_MAP.md | CORRECTED | 19879 | 20768 | `9e5327cdd4f168c1552ce55a5f5926926d530cd544d249a640cee705cf763e37` | `be9d69e2662733bce8e4096ff0501f18c93889ab84112699f1bb7a789266291f` |
| curriculum/MASTER_CURRICULUM.md | CORRECTED | 8230 | 9781 | `8bf95347d3680b655930fdfffda6b1525fe464e90be8382719f9e23374a451fa` | `37619f60af5b35f38514ab4eb6caa2523ffcfe3a61e2be05c2f0e172d38f4401` |
| curriculum/MATHEMATICS.md | CORRECTED | 21114 | 35409 | `d87522a3c0025bb75bdf78272e72b2ecb0901c9c0eb2f016b39aee1705875aec` | `8b09cf5af71e42d5192f22d8906aff66df2f22835140a7e1073cbbf82bf91219` |
| curriculum/ML_PLATFORM_ALLOCATION.md | CORRECTED | 11057 | 12599 | `5f471ee8a0fef06037eaa1658573f12975e9637bd5eb88310e37700fa75311b7` | `0439b5065d4c5c7764addaf9eb2bb27fc2bd90e405ca4a09bd0dd846708741ba` |
| curriculum/WORKSHEET_INDEX.md | ADDED | — | 8234 | — | `169d59bfcb7eaaa8c13a830bf4d52c129b8c70d91ba54dd97801168f506b90e3` |
| governance/CURRICULUM_ADVERSARIAL_AUDIT.md | CORRECTED | 9940 | 12266 | `5f7012349441957a4297d1e40f11d9835e3ee8434704582195a431474f4c3428` | `e684dbec7af495e636891774f3828aad8850581868902a1a87b714011d103b97` |
| governance/CURRICULUM_CROSSWALK.md | ADDED | — | 7251 | — | `c104ecce08f4446bbcfe0bfbb962617201618521000e3846824e1c524b0a0367` |
| governance/INDEPENDENT_AUDIT_BRIEF.md | CORRECTED | 4713 | 5139 | `91657044e2b195d5ffa6d7cd16b70d51517a6738da83954eb6b0b0d8101569f0` | `ce1c3100dbf339c5dd5b10fb0c18d5e297b09f1c974c660596373865822eaec0` |
| operations/AI_LEARNING_ENGINE.md | ADDED | — | 9849 | — | `fa11199372c94a947fbce5f4782fd987176c2536a944c5486ce8f53f68e7f700` |
| operations/LEARNING_MASTERY_PROTOCOL.md | CORRECTED | 6531 | 7706 | `d71438109499219b43f214306c3b79b997c8ae617f9abf76828962051daf38e7` | `96bc35c2fe144adcac5360aea81be6188f2a894d706c68ecc23f346dd033af31` |
| operations/WEEKLY_DAILY_WORKFLOW.md | CORRECTED | 8650 | 12866 | `e7dea39bb671730664e3fc694f64c31f83c9c651456b4fe4d2cad01bc0f26bc1` | `e4004b819c0f265a28733fb8235270a46e19f6bfdf83378eddf97d915383b4e3` |
| provenance/BASELINE_PACKAGE_VALIDATION.md | ADDED | — | 5817 | — | `5d8ea55c16ba18968ade98ae9a3d5040f9f7867904c434c4f9b9704c1f0fec7d` |
| provenance/CATALOGUE_INVENTORY.md | PRESERVED EXACT | 5025 | 5025 | `45a5f131f1509057deba041d0934708ff1f08b3288a30bb959500f68f5862af0` | `45a5f131f1509057deba041d0934708ff1f08b3288a30bb959500f68f5862af0` |
| provenance/RECOVERED_DEEP_RESEARCH_REPORT.md | PRESERVED EXACT | 21424 | 21424 | `054d1705ee4661a83cfd7c904a135135bbf3ee82c18f688fe2e27f335d878d0b` | `054d1705ee4661a83cfd7c904a135135bbf3ee82c18f688fe2e27f335d878d0b` |
| provenance/RECOVERY_PROVENANCE.md | PRESERVED EXACT | 6163 | 6163 | `fcf6d8e922f07550f3cbf3e1d2cdc56fc0da8a2a792a236084108d449ac2093f` | `fcf6d8e922f07550f3cbf3e1d2cdc56fc0da8a2a792a236084108d449ac2093f` |
| provenance/REPORT_CITATION_MAP.md | PRESERVED EXACT | 5904 | 5904 | `f7d4e2517badff321377d5bb107da7a78a905898ec1ac2e252b62ab8ae9bd299` | `f7d4e2517badff321377d5bb107da7a78a905898ec1ac2e252b62ab8ae9bd299` |
| reading/SCIENTIFIC_EVIDENCE_REGISTER.md | CORRECTED | 18408 | 24039 | `77a0d3884c65995dee84310a4a1b42da70bfa4b2e8fdf9826b155b96be0fce3c` | `f935dd6b2c6f77b1735cfec89921c5a3626311e5a172926b0cebc8c2dda3d35d` |
| research/COMPETITION_POLICY.md | CORRECTED | 5563 | 6018 | `377ac5c27b0024c0093a402a5d1ece9cd93f03ab7cd0c8060a3f21b1b7349370` | `40c0d245a241555487451b3d71012fbf685def5558167181e5d895e8a8e574f1` |
| research/RESEARCH_SPECIALISATIONS.md | CORRECTED | 17548 | 25243 | `0ec0fed952647064711c13172f196e4aed401a6c3749f685f1d2580ef786c697` | `20d96fa684f4a5634d1f3783680eb14ef1425d6bd381085afefb144403f59c9e` |
| templates/LEARNER_STATE.md | ADDED | — | 2350 | — | `f17bb0d1aa270e30931f903316b36c2031952ca49ce7c66e8da882934ee0366f` |


`FINAL_CORRECTION_MANIFEST.md` is newly generated; `PACKAGE_VALIDATION.md` and `SHA256SUMS` describe the final archive and replace only the old active technical receipts. The old receipt's exact copy is retained. Current per-file hashes, including this manifest, are in SHA256SUMS; the ZIP's SHA-256 is reported outside the archive to avoid a circular digest.

## Stop rule

The final architecture is coherent, scientifically bounded and executable from arithmetic. Stop broad design and begin the supplied first lesson. Future learner-state/pace/retention adjustments are execution, not a redesign. Open a new compulsory competency only for demonstrated independent-performance gaps, a concrete research requirement or materially stronger evidence. Future GitHub integration requires explicit approval of this revised package and rechecking the then-current repository preimages.
