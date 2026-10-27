---
title: Visual-Language Behavior Planning for Autonomous Underwater Vehicles
summary: A quantized VLM on a Jetson Orin NX that assembles behavior trees for an AUV from visual question answering.
period: Aug 2024 – May 2025
start: 2024-08-01
context: NTU URECA (CCDS24070) · Supervised by Assoc Prof Nicholas Vun
award: NTU President's Research Scholar
tags: [VLM, VILA, Behavior Trees, Jetson Orin NX, AUV]
---

- Deployed a 4-bit AWQ-quantized **VILA** Vision-Language Model on an **NVIDIA Jetson Orin NX** (16 GB) under a 25 W power budget for pool AUV operations (~3.1 s latency).
- Combined interactive Visual Question Answering with a **NanoDB** vector database to retrieve behavior components and assemble XML **Behavior Trees** executed via BehaviorTree.CPP in ROS 2.
- Validated end-to-end in SITL and real-pool AUV trials for obstacle detection, obstacle avoidance and basic movement.
