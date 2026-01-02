---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

## [Differentiated Access Memories, LtRAM, and StRAM](https://dam.stanford.edu)

### September 2024 -- Present

This is my primary research direction as a Ph.D. student, where I work under the guidance of [Prof. Thierry Tambe](https://tambelab.stanford.edu/people/thierry-tambe) and collaborators throughout the Computer Science and Electrical Engineering departments at Stanford.

DAM (Differentiated Access Memories) is a five-year project at Stanford University to research and define how future computers will manage memory as a heterogeneous resource with different tradeoffs. 
I am interested in tackling the "memory wall" problem in the AI/ML fields, where the surging size of AI models demands more on-chip memory to store intermediate results, optimizing spatial and temporal locality and improving energy efficiency. 
However, even as the rest of the logical circuits continue to scale down with more advanced process nodes, the density of SRAM has not been keeping pace, leading to the risk where memory may dominate the area and power budgets of future AI accelerators.

This points to a renewed interest in alternative on-chip memory devices that provide higher density and improved fJ/bit efficiency. 
My lab and I argue that the future of memory will evolve from a uniform address space to a heterogeneous collection of different memories optimized for different uses.
Our research seeks to answer: What new memory technologies will we need, how do we compose them in systems, and what caching mechanisms do they need? How can applications and algorithms guide the composition of heterogeneous memories? How will software present and manage heterogeneous memories?

My contributions to this overarching research direction include, chronologically:

- **[GainSight](https://arxiv.org/abs/2504.14866)**: Given 2T/3T gain cells as SRAM alternatives with higher density but limited retention times, as well as the prospects of composing different memory devices into heterogeneous on-chip memory hierarchies, I developed GainSight, the first comprehensive, open-source framework that aligns dynamic workload lifetime profiles with memory device characteristics to generate optimal on-chip cache compositions in accelerators, enabling our lab to explore the design space of heterogeneous memory hierarchies for upcoming architecture designs.
- Position papers on **[the Future of Memory](https://arxiv.org/abs/2508.20425)** and **[Towards Memory Specialization (DIMES '25)](https://doi.org/10.1145/3764862.3768175)**: I co-authored two position papers that argue for a paradigm shift in memory architectures away from uniform memory hierarchies toward specialized memory architectures that exploit application-specific access patterns and data lifetime characteristics, proposing long-term RAM (LtRAM) and short-term RAM (StRAM) as new memory classes with explicit OS support.
- **[OpenGCRAM](https://arxiv.org/abs/2507.10849)**: Contributing to an open-source Gain Cell memory compiler for generating GCRAM designs with customizable retention times for AI workloads.

## Undergraduate-level Research

Many of my research experiences prior to Stanford were done at the University of Michigan as an undergraduate student through the U-M's Civil and Environmental Engineering department and the University of Michigan Transportation Research Institute (UMTRI).

### [Road-side based cybersecurity in connected and automated vehicle systems](https://ccat.umtri.umich.edu/research/u-m/road-side-based-cybersecurity-in-connected-and-automated-vehicle-systems/), January 2022 -- April 2024

This project encompassed my research work done under the guidance of [Prof. Neda Masoud](http://www-personal.umich.edu/~nmasoud/) at the University of Michigan [Center for Connected and Automated Transportation](https://ccat.umtri.umich.edu).
The overarching objective of this research project is "to develop a holistic framework that integrates physics-based data-driven modeling and dynamic decision making under uncertainty and partial information to improve cybersecurity in connected and automated vehicles (CAV)."

<!-- I am currently working on one part of the project titled "A Communication Protocol for Securing Connected Vehicle Platoons Using Joint Hardware-Software Means," where I explore the most efficient way to secure communication within platoons of connected vehicles with combinations of symmetric and symmetric cryptography as well as envisioning specialized hardware to further optimize authentication processes.
Continued work on this project will form the basis of my [capstone thesis for the U-M College of Engineering Honors Program](https://honors.engin.umich.edu/capstone-experience/). -->

### UMTRI Bioscience Group, February 2022 -- August 2022

I worked as a research assistant at the [University of Michigan Transportation Research Institute's Biosciences Group](https://www.umtri.umich.edu/research/groups/biosciences/) over the Winter, Spring, and Summer 2022 terms.
My group primarily "conducts research on the biomechanics of motor vehicle occupants as it relates to occupant injuries, crash protection, and occupant accommodation." 

<!-- I was mostly working on their [HumanShape Project](http://humanshape.org), which aimed to develop parametric, morphable 3D human body models using "high-resolution laser scans and anthropometric measurement data of men, women, and children with a wide range of age, stature and body weight."
I worked closely with [Prof. Jingwen Hu](https://www.umtri.umich.edu/people/hu-jingwen/) and Research Scientist [Sheila Ebert](https://www.umtri.umich.edu/people/ebert-sheila/) on collecting and processing 3D body scan data from females of various standing and sitting postures, using 3D CAD tools and computer vision algorithms implemented with Python scripts.

In the meantime, I also dedicated time to work on the separate project of [Evaluation of Motion Sickness](https://www.umtri.umich.edu/about/news-information-and-media/evaluation-of-motion-sickness/), which aims to quantify motion sickness through video-taping physiological reactions of test subjects inside a moving vehicle.
Working with [Dr. Monica Jones](https://www.umtri.umich.edu/people/jones-monica/), I was responsible for processing the video data and extracting the relevant physiological data using Python and Java applications. -->

# Publications, Preprints and Conference Presentations

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
