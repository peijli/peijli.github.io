---
title: "OpenGCRAM: An Open-Source Gain Cell Compiler Enabling Design-Space Exploration for AI Workloads"
collection: research
# permalink: /research/2025-07-01-opengcram
excerpt: 'An open-source GCRAM compiler capable of generating GCRAM bank circuit designs and DRC- and LVS-clean layouts for commercially available foundry CMOS.'
date: 2025-07-14
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2507.10849'
citation: 'Xinxin Wang, Lixian Yan, Shuhan Liu, Luke Upton, Zhuoqi Cai, Yiming Tan, Shengman Li, Koustav Jana, Peijing Li, Jesse Cirimelli-Low, Thierry Tambe, Matthew Guthaus, and H.-S. Philip Wong. 2025. OpenGCRAM: An Open-Source Gain Cell Compiler Enabling Design-Space Exploration for AI Workloads. https://doi.org/10.48550/arXiv.2507.10849'
---

## Abstract

Gain Cell memory (GCRAM) offers higher density and lower power than SRAM, making it a promising candidate for on-chip memory in domain-specific accelerators. To support workloads with varying traffic and lifetime metrics, GCRAM also offers high bandwidth, ultra low leakage power and a wide range of retention times, which can be adjusted through transistor design (like threshold voltage and channel material) and on-the-fly by changing the operating voltage. However, designing and optimizing GCRAM sub-systems can be time-consuming. In this paper, we present OpenGCRAM, an open-source GCRAM compiler capable of generating GCRAM bank circuit designs and DRC- and LVS-clean layouts for commercially available foundry CMOS, while also providing area, delay, and power simulations based on user-specified configurations (e.g., word size and number of words). OpenGCRAM enables fast, accurate, customizable, and optimized GCRAM block generation, reduces design time, ensure process compliance, and delivers performance-tailored memory blocks that meet diverse application requirements.

## Citation

The BibTeX entry for this paper is

{% raw %}
```bibtex
@misc{wang_opengcram_2025,
	title = {{OpenGCRAM}: {An} {Open}-{Source} {Gain} {Cell} {Compiler} {Enabling} {Design}-{Space} {Exploration} for {AI} {Workloads}},
	shorttitle = {{OpenGCRAM}},
	url = {http://arxiv.org/abs/2507.10849},
	doi = {10.48550/arXiv.2507.10849},
	publisher = {arXiv},
	author = {Wang, Xinxin and Yan, Lixian and Liu, Shuhan and Upton, Luke and Cai, Zhuoqi and Tan, Yiming and Li, Shengman and Jana, Koustav and Li, Peijing and Cirimelli-Low, Jesse and Tambe, Thierry and Guthaus, Matthew and Wong, H.-S. Philip},
	month = jul,
	year = {2025},
	note = {arXiv:2507.10849 [cs]},
	keywords = {Electrical Engineering and Systems Science - Systems and Control, Computer Science - Hardware Architecture},
}
```
{% endraw %}
