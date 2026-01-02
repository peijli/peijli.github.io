---
title: "GainSight: A Unified Framework for Data Lifetime Profiling and Heterogeneous Memory Composition"
collection: research
# permalink: /research/2025-08-01-gainsight
excerpt: 'The first comprehensive, open-source framework that aligns dynamic, fine-grained workload lifetime profiles with memory device characteristics to enable generation of optimal StRAM memory compositions.'
date: 2025-08-05
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2504.14866'
citation: 'Peijing Li, Matthew Hung, Yiming Tan, Konstantin Hoßfeld, Jake Cheng Jiajun, Shuhan Liu, Lixian Yan, Xinxin Wang, Philip Levis, H.-S. Philip Wong, and Thierry Tambe. 2025. GainSight: A Unified Framework for Data Lifetime Profiling and Heterogeneous Memory Composition. https://doi.org/10.48550/arXiv.2504.14866'
---

## Abstract

As AI workloads drive increasing memory requirements, domain-specific accelerators need higher-density on-chip memory beyond what current SRAM scaling trends can provide. Simultaneously, the vast amounts of short-lived data in these workloads make SRAM overprovisioned in retention capability. To address this mismatch, we propose a wholesale shift from uniform SRAM arrays to heterogeneous on-chip memory, incorporating denser short-term RAM (StRAM) devices whose limited retention times align with transient data lifetimes. To facilitate this shift, we introduce GainSight, the first comprehensive, open-source framework that aligns dynamic, fine-grained workload lifetime profiles with memory device characteristics to enable generation of optimal StRAM memory compositions. GainSight combines retargetable profiling backends with an architecture-agnostic analytical frontend. The various backends capture cycle-accurate data lifetimes, while the frontend correlates workload patterns with StRAM retention properties to generate optimal memory compositions and project performance. GainSight elevates data lifetime to a first-class design consideration for next-generation AI accelerators, enabling systematic exploitation of data transience for improved on-chip memory density and efficiency. Applying GainSight to MLPerf Inference and PolyBench workloads reveals that 64.3% of first-level GPU cache accesses and 79.01% of systolic array scratchpad accesses exhibit sub-microsecond lifetimes suitable for high-density StRAM, with optimal heterogeneous on-chip memory compositions achieving up to 3x active energy and 4x area reductions compared to uniform SRAM hierarchies. To facilitate adoption and further research, GainSight is open-sourced at https://gainsight.stanford.edu/.

## Citation

The BibTeX entry for this paper is

{% raw %}
```bibtex
@misc{li_gainsight_2025,
	title = {{GainSight}: {A} {Unified} {Framework} for {Data} {Lifetime} {Profiling} and {Heterogeneous} {Memory} {Composition}},
	shorttitle = {{GainSight}},
	url = {http://arxiv.org/abs/2504.14866},
	doi = {10.48550/arXiv.2504.14866},
	publisher = {arXiv},
	author = {Li, Peijing and Hung, Matthew and Tan, Yiming and Hoßfeld, Konstantin and Jiajun, Jake Cheng and Liu, Shuhan and Yan, Lixian and Wang, Xinxin and Levis, Philip and Wong, H.-S. Philip and Tambe, Thierry},
	month = aug,
	year = {2025},
	note = {arXiv:2504.14866 [cs]},
	keywords = {Computer Science - Hardware Architecture, Computer Science - Emerging Technologies},
}
```
{% endraw %}
