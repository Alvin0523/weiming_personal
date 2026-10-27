---
title: "VLASH-Piper: Real-Time Async VLA Deployment on Edge"
summary: Fine-tuned a π0.5 vision-language-action policy for a 6-DOF arm and ran it at 30 Hz on a Jetson AGX Orin with asynchronous inference.
period: Feb 2026 – May 2026
start: 2026-02-06
team: Ray
context: HKUST COMP4901D Embedded AI Systems
award: Best Project Runner-Up Award
tags: [VLA, π0.5, LeRobot, Jetson AGX Orin, AgileX Piper]
github: https://github.com/Alvin0523/vlash-piper
featured: true
---

- Fine-tuned a **π0.5 Vision-Language-Action (VLA)** policy and integrated Hugging Face **LeRobot** (v0.4.1) for AgileX PIPER 6-DOF arm control over CAN bus.
- Deployed on **NVIDIA Jetson AGX Orin** using multi-threaded async inference (VLASH framework) to decouple camera encoding from model execution, achieving a **30 Hz real-time control loop** (<35 ms latency) for zero-shot tabletop manipulation.
