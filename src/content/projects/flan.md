---
title: "Flan — solver-backed memory placement in MLIR"
type: "Research project, originator and lead"
venue: "Stanford University"
date: 2026-06-01
category: flagship
summary: "A compiler framework that formulates data placement across heterogeneous memory as an Optimization Modulo Theories problem and solves it with Z3, producing provably optimal placement schedules instead of hand-written heuristics."
---

Flan formulates data placement across heterogeneous memory as an Optimization Modulo Theories problem, solves it with [Z3](https://github.com/Z3Prover/z3), and integrates the result into the MLIR pipeline at the bufferization boundary.
Migration, refresh, and eviction policies are not written by hand — they fall out of the optimization.
I originated the project and lead it, and I own the code and the direction.

## Pipeline

Three stages are implemented and one is designed but not yet implemented. Stated plainly, because the difference matters:

1. **Liveness extraction** *(implemented)* — a C++ pass built on MLIR infrastructure that extracts data lifetimes from `linalg`-on-tensors IR.
2. **Constraint generation** *(implemented)* — the lifetime facts become an Optimization Modulo Theories instance over the available memory technologies.
3. **Solving** *(implemented)* — a Python solver synthesizes provably optimal, phase-based placement schedules.
4. **Annotation** *(designed, not implemented)* — the final MLIR pass that writes placement decisions back as memory-space attributes on `memref` types.

## What is distinctive

- **A symbolic transition-time encoding** that reduces the number of decision variables from linear in the number of program events to linear in a small constant per value. This is what keeps the formulation tractable.
- **Native non-linear objectives.** Energy-delay product can be expressed directly, which integer linear programming cannot represent.
- **The first formalization** of heterogeneous memory mapping as a multi-commodity flow problem.

## Results

Across nine JAX linear-algebra kernels and 34 memory configurations, Flan averages a 19.8% energy reduction and a 21.0% latency reduction against the best greedy heuristic baseline, reaching 82.9% and 88.5% at maximum.

## Status

The complete 15-page manuscript is finished and will be released as a technical report alongside the source, published as an open-source repository under my own account.
This page will link to it once that is done.
