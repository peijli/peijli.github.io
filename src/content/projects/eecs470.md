---
title: "An out-of-order, super-scalar implementation of the RISC-V ISA in the style of the P6 micro-architecture"
type: "Course project, EECS 470 Computer Architecture"
venue: "University of Michigan"
date: 2023-04-13
location: "Ann Arbor, MI"
---

This is a team project for the EECS 470 Computer Architecture class at the University of Michigan, taught by [Dr. Jonathan Beaumont](https://eecs.engin.umich.edu/people/beaumont-jonathan/).
Over the span of the Winter 2023 semester, my team completed an implementation of the P6 microarchitecture using the RISC- V instruction set.
My collaborators included Wenjie Geng, Haowen Tan, Yunjie Zhang, and Yunqi Zhang.

Our design includes several features that contribute to high performance, including out-of-order execution, superscalar instruction fetch and dispatch, a non-blocking instruction cache, instruction prefetching, and a branch target buffer, among others. We have ensured the correctness of our processor through rigorous testing and validation, even if it comes at a cost of fewer claimed advanced features, and we believe that our implementation provides a powerful and flexible CPU design suitable for a wide range of applications.

A high-level overview of our design is shown below.

![Microprocessor Overview](/images/470_flow.png)

> Please reach out to me if you are interested in reading the full report or accessing the source code for this project.
