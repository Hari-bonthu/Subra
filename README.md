# Subra House Service

> **Shift • Clean • Renovate • Maintain**  
> Modern, founder-supervised clinical hygiene, shifting turnover, floor renovation, and scheduled maintenance for homes and workplaces across East Godavari (Kakinada, Rajahmundry, Amalapuram, and Samalkota).

[![Deploy to GitHub Pages](https://github.com/actions/checkout/actions/workflows/deploy.yml/badge.svg)](https://github.com)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## Overview

**Subra House Service** is a responsive, multi-page web application engineered with precision typography, architectural layouts, and authentic startup brand positioning. Designed specifically around the four service pillars:

- **SHIFT**: Move-in, move-out, and pre-occupancy deep turnover sanitization.
- **CLEAN**: Clinical-grade hospital bio-sanitizers, tile descaling, and upholstery HEPA extraction.
- **RENOVATE**: Rotary single-disc floor crystallization, buffing, and surface restoration.
- **MAINTAIN**: Scheduled residential and commercial janitorial SLAs with founder accountability.

---

## Multi-Page Route Structure

The application utilizes `react-router-dom` with automatic top scroll restoration on navigation:

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Authentic hero, startup trust pillars, 6 featured services preview, brand story, process overview, and client testimonials. |
| `/services` | **All Services** | Catalog of all 12 services with category filter tabs (`All (12)`, `Residential (6)`, `Commercial (6)`), search bar, and standard vs. deep clean comparison matrix. |
| `/residential` | **For Homes** | 6 residential packages (Standard, Deep Clean, Bathroom, Kitchen, Vacuuming, Dusting), room-by-room clinical protocols, and homeowner FAQs. |
| `/commercial` | **For Business** | 6 commercial solutions (Office, Floor Crystallization, Pathogen Disinfection, Waste Removal, Post-Event Turnover, Janitorial SLAs), and an interactive RFP proposal request form. |
| `/about` | **About Subra** | Founding origin story in East Godavari, 4 core startup pillars, and founder satisfaction guarantee. |
| `/process` | **Our Process** | 3-step booking-to-sparkle journey and 42-point supervisor checklist across 4 distinct inspection phases. |
| `/contact` | **Contact & Dispatch** | Toll-free hotline (`+91 884 234 5678`), direct WhatsApp link, service coverage map, and interactive callback request form. |

---

## Key Features

- **Interactive Booking & Instant Estimator Modal**: Dynamic multi-step quote calculator allowing users to select rooms, square footage, property type, and date with immediate price calculations.
- **Service Detail Specification Modal**: Deep-dive specification modal for every service detailing what's included, estimated duration, equipment used, and booking triggers.
- **Dynamic Real-Time Filtering**: Filter all 12 services by category or query string instantly.
- **Clean Typography (No-Eyebrow Design)**: Headings stand on their own with editorial hierarchy using Manrope and Inter without uppercase eyebrow tag clutter.
- **Mobile Optimized**: Responsive navigation drawer, touch-friendly interactive targets, and a sticky bottom booking bar for mobile users.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 7](https://reactrouter.com/) (`react-router-dom`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)

---

## Project Structure

```text
Subra/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/                       # Static public assets
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── ScrollToTop.tsx   # Window scroll-to-top on route change
│   │   ├── modals/
│   │   │   ├── BookingModal.tsx       # Interactive quote & booking modal
│   │   │   └── ServiceDetailModal.tsx # Detailed service specifications modal
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CommercialServices.tsx
│   │   │   ├── FinalCta.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── MobileStickyBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ResidentialServices.tsx
│   │   │   ├── TealStorySection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       └── ServiceCard.tsx
│   ├── data/
│   │   └── siteData.ts           # Service catalogs, trust items, FAQs, reviews
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ResidentialPage.tsx
│   │   ├── CommercialPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProcessPage.tsx
│   │   └── ContactPage.tsx
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces and data models
│   ├── App.tsx                   # BrowserRouter, routes, modals, root layout
│   ├── index.css                 # Theme fonts, colors & custom styling
│   └── main.tsx                  # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts                # Vite config with automated GitHub Pages base path
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 20 or higher) and `npm` installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/Hari-bonthu/Subra.git

# Navigate into the project directory
cd Subra

# Install dependencies
npm install
```

### Local Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## GitHub Pages Deployment (CI/CD)

This repository includes a fully configured automated GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Setup Instructions

1. **Push your code** to GitHub on the `main` (or `master`) branch.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically trigger on push:
   - Builds the production bundle with TypeScript checks (`npm run build`).
   - Copies `dist/index.html` to `dist/404.html` to enable seamless client-side SPA routing.
   - Deploys the static assets directly to GitHub Pages.

### Base Path Handling

The `vite.config.ts` automatically handles subpaths when deployed to GitHub Pages:
- When running in GitHub Actions, it detects `GITHUB_REPOSITORY` and sets the base URL to `/<repo-name>/`.
- If using a custom domain (e.g. `https://subra.in`), configure the `VITE_BASE_PATH='/'` environment variable or CNAME file.
- React Router is configured with `basename={import.meta.env.BASE_URL}` to ensure seamless navigation across custom domains and GitHub Pages subpaths.

---

## License

Private and proprietary. Developed for **Subra House Service**.
