---
title: "GEMMA — 16nm AI accelerator tapeout"
type: "Silicon project, memory and design-for-test blocks"
venue: "Stanford University"
date: 2025-10-01
category: flagship
summary: "A 16nm AI accelerator taped out with an embedded DRAM partition, design-for-test module, and refresh controller I redesigned in the four months before tapeout."
---

GEMMA is a 16nm gain-cell eDRAM-based accelerator targeting Mamba-class state-space model inference.
I joined roughly four months before tapeout and redesigned three blocks: the embedded DRAM partition, the design-for-test module, and the refresh controller.
I also implemented the MXFP6 quantization and arithmetic logic, authored the AXI and DMA transaction specifications, and designed a high-throughput SIMD compute unit using high-level synthesis.

## The refresh controller

The block worth singling out is the eDRAM controller, whose refresh policy is driven by the data-lifetime patterns identified through [GainSight](/projects/gainsight/) profiling.
That makes it the point where the profiling work stops being an analysis and becomes physical silicon: measurements taken from simulated workloads decide when real memory rows get refreshed.

## Status

The silicon has returned from fabrication and is under test.
I am no longer participating in that effort and delivered onboarding documentation for the handoff.
I retain co-authorship on the forthcoming manuscript.
