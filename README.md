# Cubegle — Corporate Website

A modern, high-performance marketing website for Cubegle, a data engineering and analytics consulting company. Built with React 19, Vite 8, and Framer Motion, featuring a complete design system, hash-based routing, and responsive layouts.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [Design System](#design-system)
- [Components](#components)
- [Data Layer](#data-layer)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [Scripts](#scripts)
- [Linting](#linting)

---

## Overview

This is a single-page application (SPA) for Cubegle's public-facing website. It showcases the company's services, case studies, client logos, tech stack, and process roadmap. The site uses hash-based routing to navigate between the homepage, a services listing, individual service detail pages, and individual case study detail pages — all without a server-side router.

---

## Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 19.2                          |
| Build Tool     | Vite 8.1                            |
| Animation      | Framer Motion 12.4                  |
| Linting        | OxLint (React + OXC plugins)        |
| Fonts          | Inter (body), Geist (headings)      |
| Icons          | Material Symbols Outlined (Google Fonts) |
| Styling        | Vanilla CSS with CSS Custom Properties |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (recommended v20+)
- [pnpm](https://pnpm.io/), npm, or yarn

### Install Dependencies

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

The app will be available at **http://localhost:5173/**.

### Production Build

```bash
pnpm build
```

Output is written to the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

---

## Project Structure

```
├── public/                      # Static assets (copied as-is to dist/)
│   └── assets/
│       ├── css/styles.css
│       └── js/main.js
├── src/
│   ├── main.jsx                 # App entry point (React root)
│   ├── App.jsx                  # Root component with hash-based router
│   ├── App.css                  # Legacy/default app styles
│   ├── index.css                # Global design system & base styles
│   ├── components/              # UI components (see below)
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── TrustedBy.jsx / .css
│   │   ├── ServicesTeaser.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── ServiceDetail.jsx / .css
│   │   ├── LivePipelineDemo.jsx / .css
│   │   ├── Outcomes.jsx / .css
│   │   ├── ProcessRoadmap.jsx / .css
│   │   ├── Industries.jsx / .css
│   │   ├── CaseStudies.jsx / .css
│   │   ├── CaseStudyDetail.jsx / .css
│   │   ├── TechStack.jsx / .css
│   │   ├── FinalCTA.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── useInView.js        # Intersection Observer hook
│   └── data/                    # Static content data
│       ├── servicesData.js      # 6 service definitions
│       └── caseStudiesData.js   # 6 case study definitions
├── dist/                        # Production build output
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── .oxlintrc.json
└── README.md
```

---

## Routing

The app uses **hash-based routing** — no server configuration or client-side router library is required.

| Hash Pattern                     | View                          | Description                                |
| -------------------------------- | ----------------------------- | ------------------------------------------ |
| `#/` or empty                    | Homepage                      | Full landing page with all sections        |
| `#/services`                     | Services Listing              | Grid of all service offerings              |
| `#/services/:serviceId`          | Service Detail                | In-depth view of a single service          |
| `#/case-studies/:caseStudyId`    | Case Study Detail             | Full case study with architecture diagrams |
| `#/:sectionId`                   | Homepage (scrolled)           | Scrolls to the matching section element    |

Navigation is handled entirely in `App.jsx` via `window.location.hash` and a `hashchange` event listener. There is no external router dependency (e.g., React Router).

---

## Design System

All design tokens are defined as CSS custom properties in `src/index.css`.

### Colors

| Token                | Value     | Usage                        |
| -------------------- | --------- | ---------------------------- |
| `--primary`          | `#0e1e5b` | Deep navy, primary brand     |
| `--secondary`        | `#F59E0B` | Amber accent / CTA buttons   |
| `--data-teal`        | `#00D084` | Data/tech accent             |
| `--surface`          | `#fcf8ff` | Page background              |
| `--on-surface`       | `#19173b` | Body text                    |
| `--on-primary`       | `#ffffff` | Text on primary backgrounds  |
| `--border-subtle`    | `#E2E8F0` | Card borders, dividers       |

### Typography

| Class                  | Font    | Size   | Weight | Usage              |
| ---------------------- | ------- | ------ | ------ | ------------------ |
| `.font-display-lg`     | Geist   | 48px   | 700    | Hero / page titles |
| `.font-headline-md`    | Geist   | 32px   | 600    | Section headings   |
| `.font-headline-sm`    | Geist   | 24px   | 600    | Card titles        |
| `.font-body-lg`        | Inter   | 18px   | 400    | Subtitles          |
| `.font-body-md`        | Inter   | 16px   | 400    | Body text          |
| `.font-label-caps`     | Geist   | 12px   | 600    | Uppercase labels   |
| `.font-label-md`       | Geist   | 14px   | 500    | Inline labels      |

### Spacing

An 8px-based spacing scale: `--space-1` (4px) through `--space-32` (128px).

### Buttons

- `.btn-primary` — Amber fill with shadow, used for main CTAs
- `.btn-outline` — Transparent with navy border
- `.btn-ghost` — Semi-transparent white, used on dark backgrounds
- `.btn-lg` — Larger variant for hero CTAs

---

## Components

| Component            | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **Navbar**           | Fixed top navigation with logo, links, and mobile menu              |
| **Hero**             | Full-viewport hero with animated headline and CTA                   |
| **TrustedBy**        | Infinite-scrolling client logo ticker                               |
| **ServicesTeaser**   | Brief preview cards linking to service detail pages                 |
| **Services**         | Full services listing page (shown at `#/services`)                  |
| **ServiceDetail**    | Single service deep-dive with timeline, tech stack, and case study links |
| **LivePipelineDemo** | Interactive animated data pipeline visualization                    |
| **Outcomes**         | Key metrics / results section                                       |
| **ProcessRoadmap**   | Step-by-step process visualization                                  |
| **Industries**       | Industry verticals the company serves                               |
| **CaseStudies**      | Case study cards grid with images and metadata                      |
| **CaseStudyDetail**  | Full case study page with architecture diagrams, challenges, solutions, process, results, and testimonials |
| **TechStack**        | Technology icons and tools showcase                                 |
| **FinalCTA**         | Bottom-of-page call-to-action section                               |
| **Footer**           | Site footer with links and company info                             |

### Shared Hook

- **`useInView`** — Custom React hook using `IntersectionObserver` to detect when an element enters the viewport. Used to trigger reveal animations and count-up effects.

---

## Data Layer

All content is defined as static JavaScript objects in `src/data/`:

### `servicesData.js`

Exports `SERVICES_DATA` — an array of 6 service objects:

| ID                   | Title                   |
| -------------------- | ----------------------- |
| `data-engineering`   | Data Engineering        |
| `data-warehousing`   | Data Warehousing        |
| `bi-dashboards`      | BI Dashboards           |
| `ai-ml`              | AI / ML Engineering     |
| `devops-cloud`       | DevOps & Cloud          |
| `product-development`| Product Development     |

Each service object contains: `id`, `title`, `short` (description), `long` (detailed description), `icon` (Material Symbol name), `bullets` (feature list), `realizedCaseStudies` (links), `techStack` (tools used), and `timeline` (implementation phases).

### `caseStudiesData.js`

Exports `CASE_STUDIES_DATA` — an array of 6 case study objects:

| ID                      | Category                | Title                                  |
| ----------------------- | ----------------------- | -------------------------------------- |
| `ai-support`            | AI & Machine Learning   | CognitiveOps: Agentic AI Orchestration |
| `healthcare-data`       | Data Platforms          | OmniHealth: Clinical Data Mesh         |
| `retail-inventory`      | Data Platforms          | StockSens: Real-Time Inventory         |
| `fintech-fraud`         | Cloud & Infrastructure  | ShieldLedger: Fraud Guard Platform     |
| `predictive-maintenance`| Cloud & Infrastructure  | AeroForge: IoT Edge Telemetry          |
| `smart-city`            | Cloud & Infrastructure  | MetroPulse: Urban Transit Analytics    |

Each case study contains: `id`, `category`, `title`, `subtitle`, `client`, `bgImage`, `meta`, `overviewP1/P2`, `timeline`, `teamSize`, `technologies`, `challenges`, `solutions`, `architecture`, `process`, `results`, `testimonial`, and `relatedLinks`.

---

## Animations

The site uses **Framer Motion** for entrance animations and **CSS keyframe animations** for looping effects.

### Framer Motion

Used in components for `initial` / `animate` / `transition` entrance effects on elements as they enter the viewport.

### CSS Keyframes (in `index.css`)

| Animation            | Description                               |
| -------------------- | ----------------------------------------- |
| `fadeInUp`           | Fade in from below                        |
| `fadeInLeft`         | Fade in from the left                     |
| `fadeInRight`        | Fade in from the right                    |
| `pulse-glow`         | Pulsing opacity glow effect               |
| `float`              | Gentle vertical float                     |
| `scroll-ticker`      | Infinite horizontal scroll (logo ticker)  |
| `gradient-shift`     | Background gradient animation             |
| `data-flow`          | Vertical data flow particles              |
| `count-up-bar`       | Width animation for metric bars           |

### Reveal System

The `.reveal` / `.visible` CSS classes combined with `useInView` provide a scroll-triggered fade-in system. Elements start at `opacity: 0` and transition to visible when they enter the viewport.

---

## Accessibility

- **Skip Link**: A "Skip to content" link is rendered at the top of the page, visible on focus for keyboard users.
- **Focus Visible**: All interactive elements have `:focus-visible` outlines using the amber secondary color.
- **ARIA Labels**: Navigation links and interactive elements include appropriate `aria-label` attributes.
- **Semantic HTML**: The app uses `<nav>`, `<main>`, `<section>`, `<footer>`, and heading hierarchy.
- **Screen Reader Text**: The `.sr-only` utility class provides visually-hidden text for screen readers.

---

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `pnpm dev`        | Start Vite dev server with HMR           |
| `pnpm build`      | Build production bundle to `dist/`       |
| `pnpm lint`       | Run OxLint across the project            |
| `pnpm preview`    | Preview the production build locally     |

---

## Linting

The project uses [OxLint](https://oxc.rs/) with the following configuration (`.oxlintrc.json`):

- **Plugins**: `react`, `oxc`
- **Rules**:
  - `react/rules-of-hooks` — **error** — Enforces Rules of Hooks
  - `react/only-export-components` — **warn** — Warns on non-component exports from files containing components

---

## Browser Support

- Chrome (latest)
- Edge (latest)
- Firefox (latest)
- Safari (latest)

Uses modern CSS features (custom properties, `backdrop-filter`, `gap`, container queries) and ES2022+ JavaScript.

---

## License

Private — Cubegle Internal Use Only
