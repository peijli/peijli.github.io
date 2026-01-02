---
title: "Towards Memory Specialization: A Case for Long-Term and Short-Term RAM"
collection: research
# permalink: /research/2025-10-01-dimes-stram
excerpt: 'A paradigm shift from simple memory hierarchies toward specialized memory architectures that exploit application-specific access patterns, proposing long-term RAM (LtRAM) and short-term RAM (StRAM).'
date: 2025-10-13
venue: 'Workshop on Disruptive Memory Systems (DIMES 25)'
paperurl: 'https://doi.org/10.1145/3764862.3768175'
citation: 'Peijing Li, Muhammad Shahir Abdurrahman, Rachel Cleaveland, Sergey Legtchenko, Philip Levis, Ioan Stefanovici, Thierry Tambe, David Tennenhouse, Caroline Trippel, and H.-S. Philip Wong. 2025. Towards Memory Specialization: A Case for Long-Term and Short-Term RAM. In Workshop on Disruptive Memory Systems (DIMES ’25), October 13, 2025. Association for Computing Machinery, Seoul, Korea (South), 10. https://doi.org/10.1145/3764862.3768175'
---

## Abstract

Both SRAM and DRAM have stopped scaling: there is no technical roadmap to reduce their cost (per byte/GB). As a result, memory now dominates system cost. This paper argues for a paradigm shift from today's simple memory hierarchy toward specialized memory architectures that exploit application-specific access patterns. Rather than relying solely on traditional off-chip DRAM and on-chip SRAM, we envisage memory systems equipped with additional types of memory whose performance trade-offs benefit workloads through non-hierarchical optimization. We propose two new memory classes deserving explicit OS support: long-term RAM (LtRAM) optimized for read-intensive data with long lifetimes, and short-term RAM (StRAM) designed for transient, frequently-accessed data with short lifetimes. We explore underlying device technologies that could implement these classes, including their evolution and their potential integration into current system designs given emerging workload requirements. We identify critical research challenges to realize what we believe is a necessary evolution toward more efficient and scalable computing systems capable of meeting future demands.

## Citation

The BibTeX entry for this paper is

{% raw %}
```bibtex
@inproceedings{li_towards_2025,
	address = {Seoul, Korea (South)},
	title = {Towards {Memory} {Specialization}: {A} {Case} for {Long}-{Term} and {Short}-{Term} {RAM}},
	isbn = {979-8-4007-2226-4},
	shorttitle = {Towards {Memory} {Specialization}},
	doi = {10.1145/3764862.3768175},
	booktitle = {Workshop on {Disruptive} {Memory} {Systems} ({DIMES} '25)},
	publisher = {Association for Computing Machinery},
	author = {Li, Peijing and Abdurrahman, Muhammad Shahir and Cleaveland, Rachel and Legtchenko, Sergey and Levis, Philip and Stefanovici, Ioan and Tambe, Thierry and Tennenhouse, David and Trippel, Caroline and Wong, H.-S. Philip},
	month = oct,
	year = {2025},
	keywords = {Computer Science - Hardware Architecture, Computer Science - Emerging Technologies},
	pages = {10},
}
```
{% endraw %}
