---
layout: archive
title: "Academics and Cousework"
permalink: /academics/
author_profile: true
---

## Selected List of Courses Taken

## Course Projects

{% include base_path %}

{% for post in site.academics reversed %}
{% include archive-single.html %}
{% endfor %}

## Talks

{% if site.talkmap_link == true %}

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
