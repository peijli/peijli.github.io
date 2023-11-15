---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

## Research Projects

### Road-side based cybersecurity in connected and automated vehicle systems

### UMTRI Bioscience Group

### Statistics Online Computational Resources Analytical Toolbox

## Publications and Conference Presentations

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.research reversed %}
  {% include archive-single.html %}
{% endfor %}
