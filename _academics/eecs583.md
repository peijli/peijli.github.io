---
title: '"Patchouli": Performance Analysis and Tiling Choice Optimization Using LLVM IR'
collection: academics
type: "Course project, EECS 583 Advanced Compilers"
# permalink: /academics/2015-spring-teaching-1
venue: "University of Michigan"
date: 2023-12-12
location: "Ann Arbor, MI"
---

This is the term project for the [EECS 583 Advanced Compilers](https://web.eecs.umich.edu/~mahlke/courses/583f23/) course at the University of Michigan, taught by Prof. Scott Mahlke.
Together with collaborators [Yongyi Yang](https://fftyyy.github.io) and Boren Ke, we implemented a LLVM optimization pass to correctly transform canonical, iterative matrix multiplication functions into their tiled versions, along with a regression-based algorithm that searches for optimal tile sizes with LLVM runtime profile information.

<img src="http://www-personal.umich.edu/~peijli/images/Patchouli.png" alt="Patchouli" width="256"/>

> Image credit: うさちゃこ, Touhou Project, patchouli knowledge, yukkuri / 【フリー素材】ちゃこ式ゆっくりパチュリー【立ち絵】. 2023. Accessed: Dec. 06, 2023. [Online]. Available: <https://www.pixiv.net/en/artworks/111069201>

## Project Report Abstract

This project implements tiled matrix multiplication and automatic, profile-guided tile size selection as LLVM optimization passes.
Given the rising cost of matrix multiplication operations in ever more complex software applications, the method of splitting matrices involved in multiplication operations into tiles to exploit spatial locality in caches and improve memory performance has garnered renewed attention.
However, despite theoretical advancements in this field, there has not been a truly language-independent, syntactically transparent, SSA-based optimization pass implemented for both performing matrix tiling and selecting ideal tile sizes given individual memory system configurations.
This has prevented more widespread integration of advanced matrix tiling techniques into existing compiler toolchains.
Our project seeks to address this research gap, with an LLVM optimization pass to correctly transform canonical, iterative matrix multiplication functions into their tiled versions, along with a regression-based algorithm that searches for optimal tile sizes with LLVM runtime profile information.
As the result of our experiment, we observed a nearly 2x performance speed-up when we run our algorithm on the EECS 583 class server, for matrix multiplication operands with dimensions ranging from 1500 to 1700.

> Please reach out to me if you are interested in reading the full report.

