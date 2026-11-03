# Topline Infra-Projects Pvt. Ltd. — Official Corporate Website

[![Developer: Viaan Agarwal](https://img.shields.io/badge/Developer-Viaan%20Agarwal-amber?style=for-the-badge&logo=github)](https://github.com/agarwalayaansh16-stack)
[![Status](https://img.shields.io/badge/Status-Live%20%2F%20Production-success?style=for-the-badge)](#)
[![Built With](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-Proprietary-lightgrey?style=for-the-badge)](#)

A modern, high-performance corporate web platform engineered for **Topline Infra-Projects Pvt. Ltd.**, a premier Indian civil infrastructure firm established in 2004 specializing in national highways, bridges, railway platforms, and complex earthworks across Bihar, Jammu & Kashmir, and Ladakh.

> **Developed by [Viaan Agarwal](https://github.com/agarwalayaansh16-stack)**

---

## 🌟 Overview

Topline Infra-Projects Pvt. Ltd. holds an Acuité BBB+ rating with a strong order book exceeding ₹676 Cr. This web application was built from the ground up to present the company's multi-decade legacy, heavy machinery fleet, major civil engineering contracts, and corporate credentials to government authorities (NHAI, Rural Works Department, Indian Railways) and infrastructure partners.

The application is completely dependency-free, lightweight, and blazingly fast, incorporating cutting-edge browser capabilities such as browser-native Text-to-Speech audio narration, responsive touch controls, and SVG animations.

---

## 🚀 Key Features

### 🎙️ Interactive Narrated Presentation Deck (Capability Reel)
- **Built-in Presentation Mode**: A fullscreen, interactive slide deck providing a narrated walkthrough of company achievements, capabilities, and financials.
- **Web Speech API Integration**: Automatic browser speech synthesis (`SpeechSynthesisUtterance`) with intelligent accent detection (prioritizing high-quality Indian English / neural voices).
- **Presentation Controls**: Play/pause, speed toggling (1.0×, 1.15×, 1.3×), voice switcher, real-time closed captions (CC), and auto-advancing slides.
- **Full Keyboard & Touch Support**: Navigate using Arrow keys, Page Up/Down, Spacebar (pause/play), `M` (mute), `C` (captions), `Escape` (exit), or mobile swipe gestures.

### 🏗️ Dynamic Infrastructure Portfolio
- Filtered showcase of ongoing and completed high-value civil contracts (e.g., NH 131A Muzwar Tal bridge, Milbhitta to Dhobinia RCC bridge, Govindpur Chowk high-level bridge).
- Interactive card overlays revealing contract details, client authorities, scope of work, and contract valuations.
- Touch-friendly tap-to-reveal mechanism for mobile and tablet devices.

### 🚜 Equipment & Fleet Showcase
- Dynamic tabbed interface highlighting company-owned machinery (hydraulic excavators, site batching plants, road pavers, and heavy-lift cranes).
- Clear specification breakdowns for operational roles, deployment records, and site supervision.

### 📊 Real-Time Metric Counters & Animations
- High-impact animated numerical counters (`IntersectionObserver` + `requestAnimationFrame`) tracking experience, completed structures, and project metrics.
- Animated vector line drawing representing bridge engineering schematics.
- Ambient blueprint grid styling and glowing backdrop gradients reflecting civil architecture aesthetics.

### 📬 Validated Tender & Consultation Inquiry Form
- Comprehensive client-side form validation with accessible ARIA live attributes.
- Character countdown counter and intelligent automated routing via pre-filled email dispatches (`mailto:` tender desk integration).
- Auto-collapsing mobile bottom action bar to optimize form engagement on small screens.

### 📱 Responsive & Accessible UI
- Fully responsive across mobile, tablet, laptop, and ultra-wide displays.
- Safe-area insets compatibility (`env(safe-area-inset-top)` / `bottom`) for modern iOS and Android devices.
- Respects `prefers-reduced-motion` media queries for accessibility.
- Optimized typography using the Google Font **Mooli** paired with an SVG icon sprite system.

---

## 🛠️ Technology Stack

| Layer | Technologies / APIs Used |
| :--- | :--- |
| **Markup & Semantics** | HTML5 (Semantic elements, SVG Sprite System, Open Graph meta tags) |
| **Styling & Design** | Modern CSS3 (Utility-first architecture, Custom CSS variables, CSS Grid & Flexbox, Blueprint patterns, Glassmorphism backdrop filters) |
| **Typography & Fonts** | Google Font (`Mooli`), System UI fallbacks |
| **Scripting & Logic** | Pure Vanilla JavaScript (ES6+, zero runtime dependencies) |
| **Browser APIs** | Web Speech API (`speechSynthesis`), `IntersectionObserver`, `Fullscreen API`, `matchMedia` |
| **Performance** | Zero build step required, instant load time, fully static and cacheable |

---

## 📂 Project Structure

```text
topline-website/
├── index.html        # Main landing page (Hero, key metrics, capability reel trigger, credentials)
├── about.html        # Corporate history, leadership, vision, and Acuité BBB+ financial highlights
├── expertise.html    # Engineering specializations (Highways, Bridges, Rail, Marine works)
├── projects.html     # Portfolio of ongoing and completed civil infrastructure contracts
├── machinery.html    # Company-owned fleet (Excavators, Batching Plants, Pavers, Cranes)
├── contact.html      # Headquarters info (Kolkata & Katihar) and tender consultation form
├── assets/
│   ├── style.css     # Production CSS stylesheet (utility classes, themes, animations, layout)
│   └── site.js       # Core interactive logic, presentation deck engine, TTS, form validation
└── README.md         # Project documentation
```

---

## 🖥️ Pages Overview

1. **Home (`index.html`)**: Introduces Topline Infra-Projects with an animated blueprint hero, key milestone numbers, executive snapshot, and quick access to the capability reel.
2. **About Us (`about.html`)**: Details corporate journey since 2004, safety and quality assurance protocols, stable financial outlook, and office presence.
3. **Expertise (`expertise.html`)**: In-depth breakdown of core civil engineering domains:
   - Highway construction & state road widening
   - RCC bridges, high-level river crossings, and culverts
   - High-altitude & remote mountainous roads (Ladakh)
   - Railway platform & station-area infrastructure
   - Marine and underwater civil engineering works
4. **Projects (`projects.html`)**: Complete directory of ongoing and delivered public and private sector projects with client credentials (NHAI, RWD, Indian Railways).
5. **Machinery (`machinery.html`)**: Technical breakdown of owned equipment ensuring self-reliant project execution without third-party rental bottlenecks.
6. **Contact (`contact.html`)**: Office locations (Kolkata registered office & Katihar branch office), contact channels, and tender inquiry desk.

---

## ⚡ Getting Started & Local Development

Because this project is built with clean, standards-compliant HTML, CSS, and Vanilla JavaScript, it requires **no build tools, bundlers, or package installations**.

### Prerequisites
Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Running Locally

#### Option 1: Direct File Launch
Simply double-click `index.html` or open it directly in your web browser.

#### Option 2: Using VS Code Live Server
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click `index.html` and select **"Open with Live Server"**.

#### Option 3: Using Python Built-in HTTP Server
Open your terminal inside the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

#### Option 4: Using Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 Browser Compatibility

| Browser | Support | Notes |
| :--- | :---: | :--- |
| **Google Chrome / Chromium** | Full | Optimal SpeechSynthesis voices and audio synchronization |
| **Microsoft Edge** | Full | Full support for natural neural voices and presentation mode |
| **Mozilla Firefox** | Full | Full feature support |
| **Apple Safari (macOS / iOS)** | Full | Supports touch swipe gestures and safe area insets |

---

## 👨‍💻 Developer Information

* **Developer**: **Viaan Agarwal**
* **Repository**: [Topline-infra-projects-pvt-ltd](https://github.com/agarwalayaansh16-stack/Topline-infra-projects-pvt-ltd)

---

## 📄 License & Rights

Copyright © 2004–2026 **Topline Infra-Projects Pvt. Ltd.**  
All rights reserved. Website design, source code, and interactive presentation engine developed by **Viaan Agarwal**.
