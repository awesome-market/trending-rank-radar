# ⚡ KodeArrow — 3D Biomechanical Ergonomics Simulation

> Interactive 3D typing simulation, FK/IK hand kinematics, carpal stress analytics, and KodeArrow modal navigation comparison.

## 🌐 Live Interactive Demo
- **GitHub Pages:** [https://ahmadhassan-bted.github.io/.github/](https://ahmadhassan-bted.github.io/.github/)

---

## 🎮 Features
- **3D Procedural Hands**: Anatomical inverse kinematics (MCP, PIP, DIP joint flexion limits, transverse carpal arch, natural resting finger curvature).
- **Outward Palm Stance & Strict Alt Thumb Placement**: Left thumb resting on the rightmost end of Left Alt, right thumb on the leftmost end of Right Alt, spacebar nestled directly in between.
- **Side-by-Side Comparison**:
  - **Traditional Navigation**: 18cm hand displacement to physical arrow clusters, high carpal pressure, ulnar deviation strain.
  - **KodeArrow**: 100% home row lock, zero hand travel, directional navigation via `Alt + IJKL` and home row shortcuts.
- **Live Interactive Typing & Navigation**: Test both free navigation modes and switch between TypeScript Code and Prose Paragraph modes in real-time.
- **Biomechanical HUD**: Real-time carpal pressure, ulnar deviation angle, hand displacement travel odometer, and FPS monitor.

---

## 🛠 Standalone Files
- [`index.html`](index.html): Complete self-contained 3D WebGL application (HTML5, Vanilla CSS, Three.js).
- [`three.min.js`](three.min.js): Bundled local Three.js r128 runtime (with automatic CDN fallback).