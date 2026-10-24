# Ghaseeli Platform (منصة غسيلي)
### Smart Governance Platform for Kidney Dialysis Centers, Supplies Management & Emergency Coordination in Egypt (Pilot Scope: Dakahlia Governorate)

[![Content Verification](https://img.shields.io/badge/Content%20Verification-Passed%20100%25-0A6EBD.svg)](#content-integrity-verification)
[![Deploy to GitHub Pages](https://github.com/ghaseeli-platform/actions/workflows/deploy.yml/badge.svg)](https://github.com/ghaseeli-platform/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-0B4F8A.svg)](LICENSE)

An executive presentation website for the graduation project **"Ghaseeli" (غسيلي)** — an Arabic (RTL), data-driven platform built for senior healthcare managers and decision-makers in Egypt.

---

## 🌐 Live Deployed URL

- **GitHub Pages Live Demo:** [https://github.com/ghaseeli-platform](https://github.com/ghaseeli-platform) *(Deploys automatically via GitHub Actions)*

---

## 📋 Project Summary

"Ghaseeli" addresses the fragmentation and supply chain challenges facing hemodialysis treatment across Egyptian governorates (pilot scope: Dakahlia Governorate and adjacent governorates). Key highlights:

- **59,000+ Dialysis Patients in Egypt** receiving 13+ sessions monthly (156 sessions/year).
- **Network Distribution:** 63.3% public sector (397 centers), 28.3% private & NGO sector (380 centers).
- **Annual Cost Burden:** ~EGP 78,000 per patient (~EGP 4.6 Billion nationally at EGP 500/session).
- **Core Innovation (USP):** Unified digital directory with live Multi-Criteria Decision Making (MCDM) center recommendation engine, inventory-linked machine availability (dialyzers & tubing), and instant emergency dispatch.

---

## 🛠️ Tech Stack & Architecture

- **Scaffold & Language:** Vite 8, React 19, TypeScript
- **Styling & Design System:** Tailwind CSS v3, Logical CSS (`dir="rtl"`, `margin-inline`, `padding-inline`)
- **Animation & Motion:** Framer Motion (page transitions, spring layout animations for MCDM simulator)
- **Typography:** Cairo (headings), IBM Plex Sans Arabic (body copy) via Google Fonts
- **Icons:** Lucide React (mirrored for RTL)
- **Routing:** React Router v7 (`HashRouter` for zero-404 GitHub Pages compatibility)

---

## 🎨 Design Tokens

| Token | CSS Variable | Hex Value | Primary Purpose |
|---|---|---|---|
| Background | `--white` | `#FFFFFF` | Dominant clean canvas |
| Surface | `--surface` | `#F5FAFE` | Alternating section backgrounds, card containers |
| Tints & Chips | `--blue-50` | `#E6F2FB` | Badges, hover states, input highlights |
| Primary Hospital Blue | `--blue-500` | `#0A6EBD` | Primary buttons, active links, key metrics |
| Heading Accent | `--blue-700` | `#0B4F8A` | Heading contrasts, interactive hover states |
| Dark Sections & Footer | `--blue-900` | `#0A2F52` | Footers, dark contrast presentation blocks |
| Ink (Body Text) | `--ink` | `#0F2A43` | High-contrast readable typography (WCAG AAA) |
| Muted Text | `--muted` | `#4A6580` | Secondary metadata and helper labels |
| Status: Available | `--ok` | `#1E9E6A` | Active machines, confirmed booking status |
| Status: Sterilization | `--warn` | `#E8A317` | Sterilization machine cycle |
| Status: Maintenance / Emergency | `--danger` | `#D64545` | Emergency mode toggle, machine breakdown |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 18 (Tested on Node.js v24 LTS)
- npm >= 9

### 2. Installation
```bash
git clone https://github.com/ghaseeli-platform.git
cd ghaseeli-platform
npm install
```

### 3. Development Server
```bash
npm run dev
```

### 4. Verify Content Integrity
Enforces zero unauthorized Arabic text and guarantees 100% fidelity against `docs/content-source.md`:
```bash
npm run verify:content
```

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Repository Structure

```
ghaseeli-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD pipeline
├── docs/
│   ├── content-source.md           # Verbatim Appendix A & B source of truth
│   └── screenshots/                # Browser responsiveness verification (390, 820, 1440)
│       ├── desktop-1440-home.png
│       ├── tablet-820-problem.png
│       └── mobile-390-platform.png
├── public/
│   └── images/                     # Licensed commercial Unsplash imagery
│       ├── hero-dialysis.jpg
│       ├── patient-dialysis.jpg
│       ├── waiting-room.jpg
│       ├── elderly-patient.jpg
│       ├── nurse-machine.jpg
│       ├── hospital-exterior.jpg
│       └── dialysis-supplies.jpg
├── scripts/
│   └── verify-content.mjs          # Content compliance gate script
├── src/
│   ├── components/                 # Reusable UI & interactive widgets
│   │   ├── ArchitectureDiagram.tsx # 3-Tier animated architecture
│   │   ├── BiHeatmapCard.tsx       # Abstract GIS occupancy heatmap
│   │   ├── CountUp.tsx             # Numeric count-up animation
│   │   ├── Footer.tsx              # Executive footer with sources
│   │   ├── HeartbeatLine.tsx       # SVG pulse ECG animation
│   │   ├── MachineStatusLoop.tsx   # Automated slot state cycle
│   │   ├── McdmSimulator.tsx       # Interactive MCDM scoring & re-ordering
│   │   ├── Navbar.tsx              # Sticky header with scroll progress
│   │   ├── NextPageCard.tsx        # Chapter transition cards
│   │   └── QrCheckinAnimation.tsx  # QR scan simulation
│   ├── content/
│   │   └── content.ar.ts           # Type-safe Arabic content dictionary
│   ├── pages/
│   │   ├── HomePage.tsx            # Hero, stats, USP, teaser
│   │   ├── ProblemPage.tsx         # Patient journey, KPIs, macro numbers
│   │   ├── SolutionsPage.tsx       # Competitive matrix & gap analysis
│   │   ├── PlatformPage.tsx        # Roles, functional tabs, MCDM demo
│   │   ├── ArchitecturePage.tsx    # NFR, ERD schema, 3-tier diagram
│   │   └── BusinessPage.tsx        # Monetization, disclaimers, sources
│   ├── App.tsx                     # Routing & Framer Motion page transitions
│   ├── index.css                   # Tailwind tokens & RTL root definitions
│   └── main.tsx
├── CREDITS.md                      # Image authorship, licenses & font credits
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📝 Content Notes

1. **Content Provenance:** Every statement, statistic, and bullet point is taken verbatim from the project requirements document (Appendix A) and approved additions (Appendix B).
2. **Text Integrity:** No synthetic marketing fluff or placeholder text is included. Western Arabic digits (0-9) are formatted consistently with the original source document.
3. **Simulated Data Context:** In accordance with Appendix A Section 10, the MCDM scoring metrics, machine cycle states, and geographic heatmaps are based on simulated data modeled after realistic Dakahlia Governorate demographics.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
Images are licensed under the Unsplash License (see [CREDITS.md](CREDITS.md)).
