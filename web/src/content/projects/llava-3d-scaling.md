---
title: Scaling LLaVA-3D for Large-Scale 3D Scene Understanding
summary: Plug-in token compression for a 3D multimodal model — 6× fewer tokens with higher ScanQA accuracy, no retraining.
period: Feb 2026 – May 2026
start: 2026-02-02
context: HKUST COMP5422 3D Visual Scene Understanding · Supervised by Prof. Dan Xu
tags: [3D LMM, LLaVA-3D, Token Compression, ScanQA]
github: https://github.com/JunzhangLiu/LLaVA-3D
---

- Extended LLaVA-3D with plug-in compression strategies (attention-score pruning, spatial K-Means clustering) to improve 3D Large Multimodal Model scalability without retraining the base model.
- Spatial K-Means clustering (K = 512) reduced the token count from **~3,096 to 512** (~6× compression) while raising ScanQA validation EM@1 from **46.2% to 48.8%**.
- Also tested attention-score pruning and a multi-scene stress test (~9.3k tokens).
