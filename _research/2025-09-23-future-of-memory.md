---
title: "The Future of Memory: Limits and Opportunities"
collection: research
# permalink: /research/2025-09-01-future-of-memory
excerpt: 'A reconsideration of proposed system architectures with huge shared memories, arguing instead for breaking memory into smaller slices tightly coupled with compute elements.'
date: 2025-09-23
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2508.20425'
citation: 'Samuel Dayo, Shuhan Liu, Peijing Li, Philip Levis, Subhasish Mitra, Thierry Tambe, David Tennenhouse, and H.-S. Philip Wong. 2025. The Future of Memory: Limits and Opportunities. https://doi.org/10.48550/arXiv.2508.20425'
---

## Abstract

Memory latency, bandwidth, capacity, and energy increasingly limit performance. In this paper, we reconsider proposed system architectures that consist of huge (many-terabyte to petabyte scale) memories shared among large numbers of CPUs. We argue two practical engineering challenges, scaling and signaling, limit such designs. We propose the opposite approach. Rather than create large, shared, homogenous memories, systems explicitly break memory up into smaller slices more tightly coupled with compute elements. Leveraging advances in 2.5D/3D integration, this compute-memory node provisions private local memory, enabling accesses of node-exclusive data through micrometer-scale distances, and dramatically reduced access cost. In-package memory elements support shared state within a processor, providing far better bandwidth and energy-efficiency than DRAM, which is used as main memory for large working sets and cold data. Hardware making memory capacities and distances explicit allows software to efficiently compose this hierarchy, managing data placement and movement.

## Citation

The BibTeX entry for this paper is

```bibtex
@misc{dayo_future_2025,
	title = {The {Future} of {Memory}: {Limits} and {Opportunities}},
	shorttitle = {The {Future} of {Memory}},
	url = {http://arxiv.org/abs/2508.20425},
	doi = {10.48550/arXiv.2508.20425},
	publisher = {arXiv},
	author = {Dayo, Samuel and Liu, Shuhan and Li, Peijing and Levis, Philip and Mitra, Subhasish and Tambe, Thierry and Tennenhouse, David and Wong, H.-S. Philip},
	month = sep,
	year = {2025},
	note = {arXiv:2508.20425 [cs]},
	keywords = {Computer Science - Hardware Architecture},
}
```
