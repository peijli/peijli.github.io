---
title: "Heterogeneous Memory Design Exploration for AI Accelerators with a Gain Cell Memory Compiler"
excerpt: 'An extension of the OpenGCRAM compiler to both SRAM and GCRAM, enabling systematic identification of optimal heterogeneous on-chip memory configurations for AI workloads under specified performance metrics.'
date: 2026-02-24
venue: 'arXiv preprint'
paperUrl: 'https://arxiv.org/abs/2602.21278'
citation: 'Xinxin Wang, Lixian Yan, Shuhan Liu, Luke Upton, Zhuoqi Cai, Yiming Tan, Shengman Li, Koustav Jana, Peijing Li, Jesse Cirimelli-Low, Thierry Tambe, Matthew Guthaus, and H.-S. Philip Wong. 2026. Heterogeneous Memory Design Exploration for AI Accelerators with a Gain Cell Memory Compiler. https://doi.org/10.48550/arXiv.2602.21278'
---

## Abstract

As memory increasingly dominates system cost and energy, heterogeneous on-chip memory systems that combine technologies with complementary characteristics are becoming essential. Gain Cell RAM (GCRAM) offers higher density, lower power, and tunable retention, expanding the design space beyond conventional SRAM. To this end, we create an OpenGCRAM compiler supporting both SRAM and GCRAM. It generates macro-level designs and layouts for commercial CMOS processes and characterizes area, delay, and power across user-defined configurations. The tool enables systematic identification of optimal heterogeneous memory configurations for AI tasks under specified performance metrics.

## Contribution

I am the ninth of thirteen authors. This paper adopts [GainSight](/projects/gainsight/) as its evaluation methodology, using the profiler to extract the L1 and L2 cache performance demands of the AI workloads against which the compiler's memory configurations are assessed.

## Citation

The BibTeX entry for this paper is

```bibtex
@misc{wang_heterogeneous_2026,
	title = {Heterogeneous {Memory} {Design} {Exploration} for {AI} {Accelerators} with a {Gain} {Cell} {Memory} {Compiler}},
	url = {http://arxiv.org/abs/2602.21278},
	doi = {10.48550/arXiv.2602.21278},
	publisher = {arXiv},
	author = {Wang, Xinxin and Yan, Lixian and Liu, Shuhan and Upton, Luke and Cai, Zhuoqi and Tan, Yiming and Li, Shengman and Jana, Koustav and Li, Peijing and Cirimelli-Low, Jesse and Tambe, Thierry and Guthaus, Matthew and Wong, H.-S. Philip},
	month = feb,
	year = {2026},
	note = {arXiv:2602.21278 [cs.AR]},
	keywords = {Computer Science - Hardware Architecture, Electrical Engineering and Systems Science - Systems and Control},
}
```
