---
title: Autonomous Ackermann Robot Car (ROS 2)
summary: An Ackermann-steered car that reads image cards around an arena and races back to its carpark. Fastest car in Task 2 (8 s), and the first approved ROS 2 team in NTU MDP.
period: Aug 2026 – Oct 2026
start: 2026-08-01
context: NTU Multidisciplinary Design Project (MDP)
award: Rank 1 in Task 2 (fastest car, 8 s)
tags: [ROS 2 Jazzy, Hybrid A*, LQR, EKF, YOLO, STM32, ros2_control]
github: https://github.com/Alvin0523/mdp
docs: https://alvin0523.github.io/mdp/
featured: true
---

An Ackermann-steered robot car that reads image cards placed around an arena, then races round obstacles back to its carpark. We were the **first approved ROS 2 team in NTU MDP**.

- **Rank 1 in Task 2** (fastest car, 8 s); in Task 1 it read 7 of 8 images in 52 s.
- **ROS 2 Jazzy on a Raspberry Pi 4**: Hybrid A* / Reeds-Shepp planning, LQR path following, EKF localisation and YOLO vision.
- **STM32F407 firmware** with 100 Hz wheel-speed PI control, plus an Android tablet app over Bluetooth.
- **ros2_control** hardware abstraction lets the same code drive the real car and the Gazebo sim, monitored in Foxglove.
