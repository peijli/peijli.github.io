---
title: "GEMMA — 16nm AI accelerator tapeout"
type: "Silicon project, accelerator design and verification"
venue: "Stanford University"
date: 2025-10-01
category: flagship
summary: "A 16nm gain-cell eDRAM AI accelerator I helped design and verify through the register-transfer level, including its embedded memory test logic and refresh controller, now fabricated as working silicon."
---

GEMMA is a 16nm gain-cell eDRAM-based accelerator targeting Mamba-class state-space model inference.
I joined roughly four months before tapeout and worked on the accelerator's design and verification through the register-transfer level: SystemC design entry, high-level synthesis with Siemens Catapult, and simulation and debug in Synopsys VCS and Verdi.
My contributions included the embedded memory partition and its retention-aware test logic, the refresh controller, the native MXFP6 quantization and arithmetic logic, the DMA and AXI transaction behavior, and a high-throughput SIMD compute unit.
System-on-chip integration and physical design were handled by other contributors on the team.

## The refresh controller

The block worth singling out is the eDRAM controller, whose refresh policy is driven by the data-lifetime patterns identified through [GainSight](/projects/gainsight/) profiling.
That's the point where the profiling work stops being an analysis and becomes physical silicon: measurements taken from simulated workloads decide when real memory rows get refreshed.

Gain cells hold charge for a limited, process-sensitive time, and that time varies across the array.
Rather than refreshing every row at the worst-case rate, I designed test logic that characterizes retention behavior across the array so different rows can be refreshed on different schedules, cutting the power, bandwidth, and latency that uniform worst-case refresh would cost.

## Status

The silicon has returned from fabrication and is under test.
