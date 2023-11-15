---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

## Research Projects

### Road-side based cybersecurity in connected and automated vehicle systems

#### January 2022 -- Present

This project under the university's Center for Connected and Automated Vehicles and the University of Michigan Transportation Research Institute represents another substantial commitment to my minor in Civil Engineering. I am currently being mentored by Professor Neda Masoud.
According to the project's abstract, the objective of this research project is "to develop a holistic framework that integrates physics-based data-driven modeling and dynamic decision making under uncertainty and partial information to improve cybersecurity in connected and automated vehicles (CAV)."
I am currently working on one part of the project titled "A Communication Protocol for Securing Connected Vehicle Platoons Using Joint Hardware-Software Means," where I explore the most efficient way to secure communication within platoons of connected vehicles with combinations of symmetric and symmetric cryptography as well as envisioning specialized hardware to further optimize authentication processes.

### UMTRI Bioscience Group

#### February 2022 -- August 2022

I worked as a research assistant at the University of Michigan Transportation Research Institute's Biosciences Group over the Winter, Spring, and Summer 2022 terms. My group primarily "conducts research on the biomechanics of motor vehicle occupants as it relates to occupant injuries, crash protection, and occupant accommodation." I was mostly working on their HumanShape Project, which aimed to develop parametric, morphable 3D human body models using "high-resolution laser scans and anthropometric measurement data of men, women, and children with a wide range of age, stature and body weight."
I worked closely with Prof. Jingwen Hu and Research Scientist Sheila Ebert on collecting and processing 3D body scan data from females of various standing and sitting postures, using 3D CAD tools and computer vision algorithms implemented with Python scripts.

### Statistics Online Computational Resources Analytical Toolbox

#### January 2021 -- December 2022

I have been designing and maintaining the open-source platform for Statistics Online Computational Resource Analytical Toolbox (SOCRAT) as part of Michigan Engineering's Multidisciplinary Design program since January 2021. After initial participation as a collaborator, I now lead a team of eight on this project. I am currently mentored by Professor Ivo Dinov.
SOCRAT is a platform for data analytics and visualization, implemented with multi-level modularity where each independent module represents a distinct function for data processing. Up till now, I have been creating new modules that integrate machine learning customization with TensorFlow and interactive data visualization with TensorBoard into the SOCRAT platform.
Apart from all that, the realities of now managing a group of eight certainly call for a distinct skillset than that used in all academic projects I had done before. Not only am I relying on project management tools such as Jira and Confluence to keep everyone on the same page in terms of details of our work, but I also have to rely much more on attentively listening to each of my collaborator's ideas and opinions about various facets of my project. 

## Publications and Conference Presentations

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
