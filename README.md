# DDSH — Dynamic Driver Safety Hub
## Official Product Showcase Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28)](https://firebase.google.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-FF0055)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

> **The AI Layer That Keeps Drivers Alive.**  
> A premium SaaS showcase website for the DDSH platform — built for national project exhibition and investor pitch.

---

## 📋 Overview

This repository contains the official **product showcase website** for DDSH (Dynamic Driver Safety Hub) — a real-time AI-powered driver safety platform that combines eye-state classification and whole-body pose estimation to prevent drowsiness-related accidents.

The website is designed as a **B2B/B2C SaaS landing page**, positioning DDSH not just as a college project but as a scalable, fundable safety intelligence product ready for enterprise deployment.

> 🔗 **ML Model Repository**: [github.com/msVivekRanjan/DDSH](https://github.com/YOUR_USERNAME/DDSH)  
> 🌐 **Live Website**: [ddsh-sys.vercel.app](https://ddsh-sys.vercel.app/)

---

## ✨ Website Sections

| Section | Description |
|---|---|
| **Hero** | Animated headline, platform stats, mesh gradient background |
| **Problem Statement** | Industry data — 1.35M deaths, $109B economic cost |
| **Solution Overview** | DrowsAI™ + PoseGuard™ dual-layer detection system |
| **Tech Stack** | Full technology grid with research paper citations |
| **How It Works** | 5-step animated pipeline timeline |
| **Use Cases** | 6 feature cards including 4 innovation roadmap ideas |
| **Feasibility** | Technical specs + market opportunity data |
| **Research Foundation** | Peer-reviewed paper citations with DOI badges |
| **Live Demo** | Typewriter terminal simulation of real detection output |
| **Team** | Builder profile with achievements |
| **Footer** | Links, acknowledgements, showcase credits |

---

## 🛠️ Tech Stack

| Component | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 14.0+ |
| **Styling** | Tailwind CSS | 3.4+ |
| **Animations** | Framer Motion | 10.x |
| **UI Components** | shadcn/ui | latest |
| **Icons** | Lucide React | latest |
| **Fonts** | Syne (headings) + DM Sans (body) | Google Fonts |
| **Hosting** | Firebase Hosting | latest |
| **IDE** | Firebase Studio / VS Code | — |
| **VCS** | Git + GitHub | — |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `background` | `#0A0A0F` | Page background |
| `surface` | `#111118` | Card backgrounds |
| `border` | `#1E1E2E` | Card borders |
| `primary` | `#E84545` | CTA, alerts, accents |
| `secondary` | `#4ECDC4` | Safety indicators |
| `accent` | `#FFE66D` | Warnings, roadmap badges |
| `text-primary` | `#F0F0F5` | Headings, body |
| `text-muted` | `#6B6B8A` | Captions, labels |

### Typography

- **Display / Headings**: Syne — weight 700–800, tight letter-spacing
- **Body**: DM Sans — weight 400, line-height 1.7
- **Code / Terminal**: JetBrains Mono

---

## 📁 Project Structure

```
ddsh-website/
├── app/
│   ├── layout.tsx                 # Root layout with fonts + metadata
│   ├── page.tsx                   # Main single-page app
│   └── globals.css                # Global styles + CSS variables
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx               # Animated hero with stats
│   │   ├── Problem.tsx            # Problem statement + counters
│   │   ├── Solution.tsx           # DrowsAI + PoseGuard cards
│   │   ├── TechStack.tsx          # Technology grid
│   │   ├── HowItWorks.tsx         # 5-step pipeline timeline
│   │   ├── UseCases.tsx           # 6 feature cards
│   │   ├── Feasibility.tsx        # Technical + market data
│   │   ├── Research.tsx           # Paper citation cards
│   │   ├── Demo.tsx               # Terminal typewriter simulation
│   │   ├── Team.tsx               # Builder profile
│   │   └── Footer.tsx             # Footer with links
│   │
│   ├── ui/
│   │   ├── Navbar.tsx             # Sticky nav with blur backdrop
│   │   ├── GlassCard.tsx          # Reusable glassmorphism card
│   │   ├── Badge.tsx              # Status + roadmap badges
│   │   ├── AnimatedCounter.tsx    # Count-up on scroll enter
│   │   └── Terminal.tsx           # Typewriter terminal component
│   │
│   └── providers/
│       └── MotionProvider.tsx     # Framer Motion config
│
├── lib/
│   ├── constants.ts               # Site copy, stats, feature data
│   └── utils.ts                   # cn() and helper functions
│
├── public/
│   └── og-image.png               # Open Graph image for social sharing
│
├── next.config.js                 # output: 'export' for Firebase static hosting
├── tailwind.config.ts             # Custom theme extending Tailwind
├── firebase.json                  # Firebase hosting configuration
├── .firebaserc                    # Firebase project binding
└── package.json                   # Dependencies
```

---

## 🚀 Quick Start

### 1️⃣ Prerequisites

- **Node.js 18+** installed
- **npm** or **pnpm**
- **Firebase CLI** installed globally
- A Firebase project created at [console.firebase.google.com](https://console.firebase.google.com)

### 2️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/DDSH-website.git
cd DDSH-website
```

### 3️⃣ Install Dependencies

```bash
npm install
# or
pnpm install
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5️⃣ Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory (required for Firebase Hosting).

### 6️⃣ Deploy to Firebase

```bash
# Login to Firebase (first time only)
firebase login

# Initialize Firebase (first time only)
firebase init hosting
# → Select your project
# → Set public directory to: out
# → Configure as single-page app: No (static export)

# Deploy
firebase deploy --only hosting
```

**Expected output:**
```
✔ Deploy complete!
Hosting URL: https://YOUR-PROJECT.web.app
```

---

## 🔧 Configuration

Customize all site content in `lib/constants.ts`. This is the single source of truth for copy, stats, and feature data.

Key configuration:

```typescript
// Site metadata
export const SITE_CONFIG = {
  name: "DDSH",
  tagline: "The AI Layer That Keeps Drivers Alive.",
  author: "Vivek Ranjan Sahoo",
  institution: "ITER, SOA University",
  githubUrl: "https://github.com/YOUR_USERNAME/DDSH",
  linkedinUrl: "https://linkedin.com/in/YOUR_PROFILE",
}

// Hero stats (animated counters)
export const HERO_STATS = [
  { value: 90, suffix: "%", label: "Detection Accuracy" },
  { value: 2, suffix: "s", label: "Alert Response Time" },
  { value: 30, suffix: "FPS", label: "Real-Time Processing" },
  { value: 133, suffix: "", label: "Body Keypoints Tracked" },
]

// Feature cards (Use Cases section)
export const FEATURES = [ ... ]
```

---

## 🎬 Demo Preparation

### For Live Showcase Presentation:

1. **Test on target machine before the event:**
   ```bash
   npm run build && npx serve out
   ```

2. **Verify all animations load correctly** — check scroll-triggered reveals on a fresh browser tab (no cached state)

3. **Test terminal demo section** — ensure typewriter animation loops cleanly

4. **Prepare offline fallback:**
   ```bash
   # Host locally if internet is unavailable at venue
   npm run build
   npx serve out -p 3000
   # Open: http://localhost:3000
   ```

5. **What to show judges:**
   - Scroll through the full landing page (1–2 min)
   - Highlight the DrowsAI™ + PoseGuard™ dual-layer cards
   - Point to Roadmap features (amber badges) — shows product vision
   - Show the terminal demo — live detection output simulation
   - Reference the peer-reviewed paper citation cards for credibility

### Handling Demo Failures:

| Issue | Solution |
|---|---|
| No internet at venue | Use `npx serve out` for local hosting |
| Animations laggy | Open in Chrome, disable browser extensions |
| Fonts not loading | Fonts are loaded from Google CDN — pre-cache or embed locally |
| Firebase URL down | Use the locally hosted build as backup |

---

## 📊 Platform Overview (for Judges)

DDSH is positioned as a **two-layer driver safety intelligence platform**:

```
Layer 1 — DrowsAI™ (Eye Intelligence)
    MobileNet Transfer Learning
    → 90% accuracy | 100% precision
    → Alarm at 6 consecutive closed-eye frames (~2 sec)

Layer 2 — PoseGuard™ (Body Intelligence)
    MediaPipe Holistic / HRNet Whole-body
    → 133 keypoints (body + face + hands + feet)
    → Posture slump + head drop detection

Combined Signal → Higher confidence alerts, fewer false positives
```

---

## 📖 Research Foundation

This website documents an implementation grounded in two peer-reviewed publications:

**Paper 1 — DDSH Core System:**
```
Bhanja, S., et al. (2025). Dynamic Driver Safety Hub (DDSH): A Real-Time 
Driver Drowsiness Detection System. ROBOMECH Journal.
DOI: 10.1186/s40648-025-00307-4
```

**Paper 2 — Pose Estimation Module:**
```
Wei, F., Xu, G., et al. (2025). Whole-body 2D human pose estimation based 
on human keypoints distribution constraint and adaptive Gaussian factor. 
Complex & Intelligent Systems, 11:415.
DOI: 10.1007/s40747-025-02054-w
```

---

## ⚠️ Known Limitations

1. **Static Export Only**: Firebase Hosting requires `output: 'export'` — no server-side rendering or API routes
2. **No Backend**: This is a showcase website only — it does not connect to the live ML model
3. **Video Placeholder**: The demo section uses a simulated terminal, not actual live webcam feed
4. **Mobile Animations**: Some complex Framer Motion animations may be reduced on low-powered mobile devices

---

## 🔮 Roadmap Features (Showcased on Website)

These are innovation ideas presented on the website as **future roadmap items** (amber badge):

1. **Child Safety Mode** — Detects irregular rear-seat child movements, activates child locks
2. **Insurance Telematics** — DrowsinessScore™ per trip for usage-based premium calculation
3. **Fatigue Analytics Dashboard** — Post-trip heatmaps and route-level safety scoring
4. **Emergency Auto-Response** — Autonomous hazard lights + emergency service contact
5. **Micro-sleep Prediction** — Pre-drowsy pattern detection before full eye closure
6. **Weather-Correlated Fatigue** — Alert sensitivity adjusted for night/rain conditions
7. **Voice + Posture Biometrics** — Fused speech slurring + pose slump for DUI detection assist

---

## 👨‍💻 Author

**Vivek Ranjan Sahoo**  
B.Tech CSE | ITER, SOA University  
Bhubaneswar, Odisha, India

- 🏆 Selected for Innovation Expo — Hackfrost 2025, SOA University
- 🤖 AI/ML Enthusiast | Computer Vision | IoT
- 🛹 National-level Skater | Rajya Puraskar Awardee

**Contact**: [GitHub](https://github.com/msVivekRanjan) | [LinkedIn](https://linkedin.com/in/vivekranjansahoo7/)

---

## 🙏 Acknowledgments

- **Bhanja et al.** — Original DDSH paper, ROBOMECH Journal (2025)
- **Wei, Fan & Guanghua Xu et al.** — Pose estimation paper, Complex & Intelligent Systems (2025)
- **Firebase** — Hosting and deployment infrastructure
- **Vercel / shadcn** — UI component inspiration
- **Department of CSE, ITER SOA University** — Academic guidance and support

---

## 📄 License

This project is MIT Licensed. See [LICENSE](LICENSE) for details.

The website content, copy, and innovation ideas are original work by Vivek Ranjan Sahoo.  
Research paper citations are credited to their respective authors.

---

## 🤝 Related Repositories

| Repository | Description |
|---|---|
| [DDSH ML Model](https://github.com/msVivekRanjan/DDSH) | Core Python ML project — MobileNet + MediaPipe |
| [DDSH Website](https://github.com/msVivekRanjan/DDSHweb) | This repository — Next.js showcase site |

---

**Last Updated**: February 2026   
**Live URL**: [ddsh-sys.vercel.app](https://ddsh-sys.vercel.app/)
