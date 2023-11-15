---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

## Research Projects

### [Road-side based cybersecurity in connected and automated vehicle systems](https://ccat.umtri.umich.edu/research/u-m/road-side-based-cybersecurity-in-connected-and-automated-vehicle-systems/)

#### January 2022 -- Present

This project encompasses my independent research work done under the guidance of [Prof. Neda Masoud](http://www-personal.umich.edu/~nmasoud/) at the University of Michigan [Center for Connected and Automated Transportation](https://ccat.umtri.umich.edu).
The overarching objective of this research project is "to develop a holistic framework that integrates physics-based data-driven modeling and dynamic decision making under uncertainty and partial information to improve cybersecurity in connected and automated vehicles (CAV)."

I am currently working on one part of the project titled "A Communication Protocol for Securing Connected Vehicle Platoons Using Joint Hardware-Software Means," where I explore the most efficient way to secure communication within platoons of connected vehicles with combinations of symmetric and symmetric cryptography as well as envisioning specialized hardware to further optimize authentication processes.
Continued work on this project will form the basis of my [capstone thesis for the U-M College of Engineering Honors Program](https://honors.engin.umich.edu/capstone-experience/).

### UMTRI Bioscience Group

#### February 2022 -- August 2022

I worked as a research assistant at the [University of Michigan Transportation Research Institute's Biosciences Group](https://www.umtri.umich.edu/research/groups/biosciences/) over the Winter, Spring, and Summer 2022 terms.
My group primarily "conducts research on the biomechanics of motor vehicle occupants as it relates to occupant injuries, crash protection, and occupant accommodation." 
I was mostly working on their [HumanShape Project](http://humanshape.org), which aimed to develop parametric, morphable 3D human body models using "high-resolution laser scans and anthropometric measurement data of men, women, and children with a wide range of age, stature and body weight."
I worked closely with [Prof. Jingwen Hu](https://www.umtri.umich.edu/people/hu-jingwen/) and Research Scientist [Sheila Ebert](https://www.umtri.umich.edu/people/ebert-sheila/) on collecting and processing 3D body scan data from females of various standing and sitting postures, using 3D CAD tools and computer vision algorithms implemented with Python scripts.
This experience also provided me with the impetus to delve deeper into the field of digital human modeling and to eventually produce a literature review article on the topic.

In the meantime, I also dedicated time to work on the separate project of [Evaluation of Motion Sickness](https://www.umtri.umich.edu/about/news-information-and-media/evaluation-of-motion-sickness/), which aims to quantify motion sickness through video-taping physiological reactions of test subjects inside a moving vehicle.
Working with [Dr. Monica Jones](https://www.umtri.umich.edu/people/jones-monica/), I was responsible for processing the video data and extracting the relevant physiological data using Python and Java applications.

<!-- ### Statistics Online Computational Resources Analytical Toolbox

#### January 2021 -- December 2022

I have been designing and maintaining the open-source platform for Statistics Online Computational Resource Analytical Toolbox (SOCRAT) as part of Michigan Engineering's Multidisciplinary Design program since January 2021. After initial participation as a collaborator, I now lead a team of eight on this project. I am currently mentored by Professor Ivo Dinov.
SOCRAT is a platform for data analytics and visualization, implemented with multi-level modularity where each independent module represents a distinct function for data processing. Up till now, I have been creating new modules that integrate machine learning customization with TensorFlow and interactive data visualization with TensorBoard into the SOCRAT platform.
Apart from all that, the realities of now managing a group of eight certainly call for a distinct skillset than that used in all academic projects I had done before. Not only am I relying on project management tools such as Jira and Confluence to keep everyone on the same page in terms of details of our work, but I also have to rely much more on attentively listening to each of my collaborator's ideas and opinions about various facets of my project.  -->

## Publications and Conference Presentations

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
