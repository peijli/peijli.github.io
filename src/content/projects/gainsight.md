---
title: "GainSight — data lifetime profiling for heterogeneous on-chip memory"
type: "Research project, first author and lead developer"
venue: "Stanford University"
date: 2026-07-01
category: flagship
summary: "An open-source framework that extracts cycle-accurate data lifetimes from accelerator workloads and turns them into optimal heterogeneous on-chip memory compositions."
---

GainSight extracts cycle-accurate data lifetimes from accelerator workloads and correlates them against emerging memory device characteristics to generate optimal heterogeneous on-chip memory compositions.
Retargetable simulator backends feed an architecture-agnostic analytical frontend, so the same analysis applies across very different accelerator shapes.
I have been the first author and lead developer since 2024.

## How it works

- **Backends.** [Accel-Sim](https://accel-sim.github.io) for NVIDIA GPU modeling and [SCALE-Sim](https://github.com/scalesim-project/scale-sim-v2) for systolic arrays.
- **Workloads.** MLPerf Inference and PolyBench.
- **Frontend.** An architecture-agnostic analytical stage that correlates measured lifetime distributions with device retention properties and solves for a memory composition.

## What it found

Across MLPerf Inference and PolyBench, 64.3% of first-level GPU cache accesses and 79% of systolic-array scratchpad accesses have sub-microsecond lifetimes.
Memory that is provisioned to hold data for milliseconds is therefore overprovisioned in retention for most of what it stores.
Composing the on-chip hierarchy from denser, shorter-retention devices instead reaches up to 3× active energy and 4× area reduction against a uniform SRAM baseline.

## Where it has been used

- The gain-cell memory compiler study described in [OpenGCRAM](/research/2025-07-14-opengcram/) adopts GainSight as its evaluation methodology, using it to extract the L1 and L2 cache performance demands of the AI workloads it evaluates.
- The argument in [Towards Memory Specialization](/research/2025-10-13-dimes-stram/) (DIMES '25) rests on the lifetime characterization GainSight produced.
- An undergraduate researcher I mentored in summer 2025 built a trace pipeline that feeds directly into the GainSight workflow, extending a commercial toolchain that had no cycle-accurate memory-access logging of its own.

## Paper and code

The framework is described in [GainSight: A Unified Framework for Data Lifetime Profiling and Heterogeneous Memory Composition](/research/2025-08-05-gainsight/).

The work was funded under a US Department of Defense microelectronics program and the paper carries a public-release distribution statement.
The published paper points at a source repository in my former research group's namespace, which I no longer control; I am mirroring the code to my own account and this page will link there once that is done.
