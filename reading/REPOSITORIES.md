# High-value repositories to study — not to star indiscriminately

Study architecture, mathematical implementation, test strategy, benchmarks, code provenance, and numerical failure; clone only when needed.

| Repo | Goal | Depth |
|---|---|---|
| https://github.com/pytorch/pytorch | autograd, kernels, training stack | selective internals |
| https://github.com/karpathy/nn-zero-to-hero | from-scratch DL | implement deeply |
| https://github.com/huggingface/transformers | transformer families and interfaces | selective model internals |
| https://github.com/pyg-team/pytorch_geometric | geometric graph ML | build message passing and tests |
| https://github.com/aqlaboratory/openfold | structural protein DL | architecture and selected modules |
| https://github.com/aqlaboratory/openfold-3 | modern biomolecular structure modeling | research reference; verify current limitations |
| https://github.com/RosettaCommons/RFdiffusion | protein generative design | selected methods and inference |
| https://github.com/rdkit/rdkit | chemistry graph operations | apply and inspect core APIs |
| https://github.com/openmm/openmm | molecular simulation / forces | selected numerical concepts |
| https://github.com/Project-MONAI/MONAI | scientific and medical imaging | workflow and transforms |
| https://github.com/MIC-DKFZ/nnUNet | adaptive medical segmentation | reproducible evaluation and architecture |
| https://github.com/biopython/biopython | sequence / structural bioinformatics | selected algorithmic libraries |
| https://github.com/Lightning-AI/pytorch-lightning | experimental engineering, callbacks | learn patterns, not mandatory use |
| https://github.com/triton-lang/triton | GPU kernels when justified | performance specialization |
| https://github.com/pytest-dev/pytest | testing and debugging | deep practical use |

**Reproduction depth rubric:** 0 bookmarked / 1 installed / 2 runs baseline / 3 understands core mathematics and data / 4 independent reimplementation tests / 5 scientifically evaluated extension. Do not claim 5 without independent review.

Respect licenses, resources, and citation requirements. Avoid uploading research datasets or large pretrained checkpoints into this learning repository.
