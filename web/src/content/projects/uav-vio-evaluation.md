---
title: UAV Trajectory Tracking & Visual-Inertial Odometry Evaluation
summary: Flight-test and evaluation stack benchmarking VINS-Fusion and visual-EKF odometry on quadrotors.
period: Feb 2026 – May 2026
start: 2026-02-04
context: HKUST ELEC5660 Introduction to Aerial Robotics
tags: [UAV, VIO, VINS-Fusion, EKF, ROS]
github: https://github.com/zhangone-smile/UAV-Trajectory-Tracking-VIO-Evaluation
---

- Built a ROS 1 Noetic flight-test and evaluation stack for quadrotor UAVs, evaluating motion-capture EKF trajectory tracking across 3D flight profiles (circle, cosine, donut, figure-eight).
- Automated an `evo` pipeline to benchmark VINS-Fusion and visual-EKF odometry drift against reference paths, computing Absolute Position Error (APE) and Relative Pose Error (RPE).
