# Plan 001: Build Subhram Clean Systems Static Responsive React Website

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step.

## Status

- **Priority**: P1
- **Effort**: L
- **Risk**: LOW
- **Depends on**: none
- **Category**: direction
- **Planned at**: 2026-09-07

## Why this matters

Subhram requires a modern, high-trust digital presence for residential and commercial cleaning services. Following the architectural, editorial direction in `DESIGN.md` and the 14-section specification, this plan delivers a production-grade, fully responsive React static website with custom typography (Manrope + Inter), exact brand tokens (signature teal `#16C2B0`, ink charcoal `#17212B`, soft backgrounds `#F8FAFC`), editorial image compositions, interactive booking/quote system, and cross-device responsiveness.

## Current state

- Scaffolded Vite + React 19 + TypeScript project.
- Configured Tailwind CSS v4 with custom tokens: `--color-brand-500: #16C2B0`, `--color-ink-900: #17212B`, `--color-surface-default: #F8FAFC`.
- Loaded Google Fonts: Manrope (`400..800`) and Inter (`300..700`).
- Implemented all 13 required sections:
  1. Section 01: White navigation bar with desktop links, quote CTA, and mobile slide-over drawer.
  2. Section 02: Asymmetric 7:5 Hero with editorial photography, floating stat badge, and dual CTAs.
  3. Section 03: 3-column trust/value strip directly below hero.
  4. Section 04: About Subhram editorial composition with overlapping 10+ years experience card.
  5. Section 05: Residential Services with 6 specialized cards (Standard, Deep, Bathroom, Kitchen, Vacuuming, Dusting).
  6. Section 06: Commercial Services with 6 enterprise cards (Office, Floor Maintenance, Disinfection, Waste Removal, Post-Event, Scheduled).
  7. Section 07: Service card design system with upper 4:3 image and overlapping white panel.
  8. Section 08: Signature Teal Story section (`#16C2B0` background, 50% media split, high-contrast dark CTA).
  9. Section 09: How It Works 3-step process with thin connector lines and `#ECFDF9` surface.
  10. Section 10: Why Choose Subhram 6-point trust indicators grid and insurance assurance banner.
  11. Section 11: Human, believable testimonials with 5-star ratings and verified customer badges.
  12. Section 12: Final high-contrast dark CTA section (`#17212B` background with dual actions).
  13. Section 13: Architectural footer with contact details, regional coverage, service links, and copyright.
  14. Section 14: Interactive multi-step Booking/Quote Modal and Service Detail Modal.

## Commands you will need

| Purpose   | Command                  | Expected on success |
|-----------|--------------------------|---------------------|
| Install   | `npm install`            | exit 0              |
| Build     | `npm run build`          | exit 0, dist/ generated |
| Preview   | `npm run preview`        | starts on 4173      |

## Scope

**In scope**:
- `src/types/index.ts`
- `src/utils/cn.ts`
- `src/data/siteData.ts`
- `src/components/ui/Button.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/StatCard.tsx`
- `src/components/ui/ServiceCard.tsx`
- `src/components/modals/BookingModal.tsx`
- `src/components/modals/ServiceDetailModal.tsx`
- `src/components/sections/Navbar.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/TrustStrip.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ResidentialServices.tsx`
- `src/components/sections/CommercialServices.tsx`
- `src/components/sections/TealStorySection.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/WhyChooseUs.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/FinalCta.tsx`
- `src/components/sections/Footer.tsx`
- `src/components/sections/MobileStickyBar.tsx`
- `src/App.tsx`
- `src/index.css`
- `index.html`

## Done criteria

- [x] `npm run build` exits with code 0.
- [x] Zero TypeScript or runtime compilation errors.
- [x] All 13 page sections present and visually verified.
- [x] Interactive booking modal with live estimation and reference generation verified.
- [x] Responsive layout verified across Mobile (390px), Tablet (768px), and Desktop (1280px).
- [x] Output is purely static HTML/CSS/JS ready for deployment.
