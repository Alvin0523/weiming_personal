---
title: "Underwater DA3: LoRA Fine-Tuning for AUV Depth Estimation"
summary: Adapted Depth Anything 3 to underwater scenes with LoRA, cutting AbsRel error by 59% on the MIMIR-UW SeaFloor benchmark.
period: Feb 2026 – May 2026
start: 2026-02-02
context: HKUST COMP4471 Deep Learning in Computer Vision
tags: [Depth Estimation, LoRA, DINOv2, ROS 2, AUV]
github: https://github.com/Alvin0523/Depth-Anything-3-Underwater-Refinement
featured: true
---

- Adapted the **Depth Anything 3** (DA3) Mono Metric Large model for underwater environments by injecting rank-8 **LoRA** into the DINOv2-L ViT backbone to handle light attenuation and backscatter.
- Trained on NVIDIA A100 GPUs with SILog + Sobel gradient loss, reducing **AbsRel error by 59%** and raising δ < 1.25 accuracy from **0.94% (zero-shot) to 56.8%** on the MIMIR-UW SeaFloor benchmark.
- Fused per-pixel metric depth with YOLOv11-seg instance masks and Kalman-filter target tracking inside a ROS 2 Jazzy AUV 3D localization stack.
