# Zulearn targeted Deep Research missions

**Status: REQUESTS NOT YET EXECUTED.** These are bounded acquisition/analysis briefs. Do not mark research completed unless sources were actually retrieved, inspected, and independently verified.

## Shared scientific research contract

For each mission: search beyond Google Scholar using appropriate institutional pages, Crossref, PubMed/Europe PMC, DBLP, OpenAlex, Semantic Scholar, original publisher pages, official repositories, and author-maintained resources as applicable. Never confuse same-named authors. Preserve author/title/year/DOI/repository identifiers, publication status, licensing, access limits, quality of evidence and retrieval date. Distinguish verified findings from assumptions and third-party summaries. Do not invent inaccessible papers or full-text access. Deliver practical recommendations tied to mathematical or scientific capabilities and a prioritized gap list. Human-reviewed relevance comes before exhaustive consumption. Record all coverage limitations.

### DR-01: Xin Gao and SFB scientific publication map (P0)

**Goal:** Build the most complete *metadata-level*, identity-verified SFB publication map practicable, and an extremely focused deep-reading canon to prepare for work in the lab.

**Research questions:** How has the group's work evolved across algorithms, sequence analysis, 3D protein structure, function prediction, biological networks, multiomics, biomedical imaging, molecular/biomedical language models, and therapeutic science? Which mathematical/statistical/computational methods recur? Which 2023–2026 papers best reflect active directions? Which results can be reproduced given reasonable public compute? What experimental collaboration is essential?

**Deliverables:** `research/labs/xin_gao/PUBLICATIONS.csv` (title/year/authors/DOI/URL/affiliation-confidence/topic/method/data-code-status), `RESEARCH_TAXONOMY.md`, `TOP_30.md` with priority and reasoning, and `REPRODUCTION_CANDIDATES.md`. Include coverage methodology and duplicate/identity audit. Distinguish papers by Professor Xin Gao from researchers sharing that name.

Primary: https://sfb.kaust.edu.sa/ and https://cemse.kaust.edu.sa/profiles/xin-gao .

### DR-02: Bernard Ghanem and IVUL scientific publication map (P0)

**Goal:** Thematic bibliography and problem/architecture map around computer vision/video/3D/tracking, multimodal foundation models, trustworthy AI, and generalization.

**Deliverables:** Same structured metadata and provenance as DR-01; `TOP_25.md`, `METHODS_MAP.md`, and 3–5 feasible reproduction protocols with prerequisites and baseline metrics. Document whether a paper is CVPR/ICCV/ECCV/NeurIPS/journal work and check exact versions.

Primary: https://ivul.kaust.edu.sa/ ; https://cemse.kaust.edu.sa/profiles/bernard-ghanem .

### DR-03: Mathematical Tripos for AI for Science (P0)

**Goal:** Compare official Cambridge Tripos, Harvard Math 55, relevant graduate probability/statistics, MIT mathematical ML, numerical analysis, optimization, geometry, inverse problems, stochastic processes, and scientific modeling.

**Deliverables:** 18-module learning outcome + prerequisite DAG; official lectures/books/chapters/problem sets; 3 tiers of unseen exam questions; grading rubric; proofs and computational checks; estimated workload as unvalidated initial planning range; external calibration procedure. Respect copyright: link to licensed originals, create original problems, and never falsely claim university-equivalent difficulty.

Start: https://www.maths.cam.ac.uk/undergrad/course ; https://www.math.harvard.edu/demystifying-math-55/ ; https://ocw.mit.edu/ .

### DR-04: Problem solving curriculum inventory (P0)

**Goal:** Snapshot the live Deep-ML problem inventory by exact ID, topic, difficulty, prerequisites and user-defined allow/defer/exclude policy. Include all problem-like experiences where legally accessible (math, labs, projects, paths), plus an aligned Rosalind catalogue and selected LeetCode/AtCoder/Codeforces official IDs. DO NOT scrape unlawfully or copy copyrighted problem text.

**Deliverables:** `practice/PROBLEM_REGISTRY.csv`, `SKILL_MAPPING.md`, `PROGRESSION.md`, `ASSESSMENT.md`; live source and snapshot date; unknown/blocked entries explicit; duplicate concepts grouped. Create reproducible public solutions only where allowed. No claim user has solved anything without evidence.

### DR-05: AI-for-science biology/chemistry and competition benchmarks (P1)

**Goal:** Curriculum and tests for structural biology, sequence analysis, GO protein function, molecular modeling/simulation, mass spectrometry and analytical chemistry, microscopy, volumetric MRI, CASP, CAFA, and scientific benchmark validity.

**Deliverables:** Domain knowledge map, experimental measurement literacy, mathematical prerequisites, benchmark-specific official rules/metrics, validation/leakage protocols, accessible benchmark resources and 3 research-grade capstones. Explicitly distinguish benchmark achievement from experimental scientific validation.

### DR-06: Research-engineering and agentic systems (P1)

**Goal:** Practical, measurable competency progression for PyTorch research systems, numerical reproducibility, Triton/GPU profiling, data engineering, tool-using coding agents, permission and data boundaries, reproducibility, evaluation and human review.

**Deliverables:** 6 increasingly difficult agentic engineering laboratories; an agent-vs-manual controlled task suite; correctness/cost/timing rubrics; testable safety constraints; provenance, rollback and review checklist; literature and official documentation with source dates. Do not assert agents always increase productivity.

### DR-07: Evidence of effective accelerated expert learning (P1)

**Goal:** Synthesize actual randomized trials, meta-analyses and systematic reviews for active learning, testing, distributed practice, interleaving, worked examples, cognitive load, deliberate practice, metacognition and feedback. Separate transfer to original AI research from what studies actually establish.

**Deliverables:** Evidence table (study population, design, sample, effect, limits), design implications for Zulearn, caveated adaptive scheduling model, diagnostic/retest protocol. No false efficacy guarantee.

### DR-08: KAUST PhD preparation and research communication (P1)

**Goal:** Validate the correct future admission cycle near September 2027, degree eligibility, English requirements, faculty research fit, recommendation strategy, portfolio and interview expectations using official current sources. Develop scientific English and IELTS Band 9 stretch track without overshadowing research evidence.

**Deliverables:** date-verified requirements (with unconfirmed future dates marked), critical path, research portfolio requirements, lab-specific paper defense rubric, oral/written English diagnostic and practice schedule.

## Sequencing / immediate decisions

1. Start with **DR-01, DR-03 and DR-04**; these define the research destination, mathematics, and actual problem practice.
2. In parallel or next, DR-02 and a short cross-lab comparison identify the overlap and deliberate divergences.
3. Then DR-05 and DR-06, followed by scientific learning-quality and application audits (DR-07/08).
4. Before large-scale learning, independently diagnose current capability; allocate time adaptively.
5. Accept each research mission only when its artifacts, evidence and omissions are inspectable; reject generic reading lists.
6. Add original study problems, practical labs and reproducible examples to the repo **after** the evidence register is accepted.
