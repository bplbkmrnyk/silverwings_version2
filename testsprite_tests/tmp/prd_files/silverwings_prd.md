# Product Requirements Document (PRD)
## Silver Wings Defence — Tactical Web Portal
**Version:** 1.0  
**Date:** April 2026  
**Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, TypeScript  
**Base URL:** `http://localhost:3000`

---

## 1. Product Overview

Silver Wings Defence is a premium military-grade B2B defense portal. The website markets autonomous drone defense systems and aerospace products to government, military, and contractor clients. It features a dark tactical aesthetic, animated scroll interactions, a client authentication flow, and a product catalog.

---

## 2. Application Architecture

### 2.1 Pages (Routes)

| Route | Component File | Auth Required | Description |
|---|---|---|---|
| `/` | `app/page.tsx` | No | Homepage — hero, solutions, partner logos, CTA |
| `/about-us` | `app/about-us/page.tsx` | No | Company origins, doctrine, leadership |
| `/services` | `app/services/page.tsx` | No | Service offerings with imagery |
| `/products` | `app/products/page.tsx` | No | Product grid catalog |
| `/products/[id]` | `app/products/[id]/page.tsx` | No | Single product detail page |
| `/news` | `app/news/page.tsx` | No | News and press releases |
| `/career` | `app/career/page.tsx` | No | Job listings — "Active Directives" |
| `/contact` | `app/contact/page.tsx` | No | Encrypted contact form + Partner Portal |
| `/login` | `app/login/page.tsx` | No | Client login — Command Gateway |
| `/signup` | `app/signup/page.tsx` | No | Operative Registration |
| `/forgot-password` | `app/forgot-password/page.tsx` | No | Clearance reset flow |

### 2.2 Shared Components

| Component | Purpose |
|---|---|
| `NavBar.tsx` | Fixed top navigation with CLIENT LOGIN button |
| `Footer.tsx` | Copyright + quick links |
| `PageBackground.tsx` | Reusable parallax background image with opacity overlay |
| `ProductGrid.tsx` | Responsive product card grid with hover terminal tooltip |
| `CircularCardsSection.tsx` | Scroll-animated circular card section |
| `DroneAssemblySection.tsx` | Scroll-scrubbed drone assembly animation |
| `HorizontalScroll.tsx` | Touch/mouse drag horizontal scroll container |
| `ParallaxImage.tsx` | Scroll-bound image parallax effect |
| `ScrollAnimation.tsx` | Generic scroll-triggered reveal wrapper |
| `SmoothScroll.tsx` | Lenis smooth scroll provider |

---

## 3. Global Requirements

### 3.1 Layout & Shell
- **REQ-G-01:** NavBar must be fixed to the top (`position: fixed`) and remain visible during scroll on all pages.
- **REQ-G-02:** Footer must appear on all pages below the main content.
- **REQ-G-03:** Page `<body>` must prevent horizontal overflow (`overflow-x: hidden`).
- **REQ-G-04:** Google Fonts (`Inter`, `Space Grotesk`) and Material Symbols Outlined must load from the `<head>`.
- **REQ-G-05:** The site title must be **"Silver Wings Defence"** in the browser tab.
- **REQ-G-06:** Dark mode must be the only appearance — `class="dark"` on `<html>`.

### 3.2 Typography
- **REQ-G-07:** Headings use `Space Grotesk` (var `--font-space-grotesk`).
- **REQ-G-08:** Body text uses `Inter` (var `--font-inter`).
- **REQ-G-09:** All labels/tags use uppercase tracking (`tracking-widest`).

### 3.3 Color Palette (Design Tokens)
| Token | Value | Used For |
|---|---|---|
| `--color-background` | `#05070a` | Page backgrounds |
| `--color-primary` | `#afc8f0` | Steel blue accent |
| `--color-tertiary` | `#d4af37` | Gold accent |
| `--color-military-green` | `#4B5320` | Operational status |
| `--color-on-surface` | `#e1e2e7` | Primary text |
| `--color-on-surface-variant` | `#c4c6cf` | Secondary text |

---

## 4. Page-Level Requirements

---

### 4.1 Homepage (`/`)

#### Hero Section
- **REQ-H-01:** Heading must display three stacked lines: **"Precision." / "Protection." / "Power."** with word-by-word entrance animation.
- **REQ-H-02:** "Precision." and "Power." lines are white; "Protection." is `text-primary` (steel blue).
- **REQ-H-03:** Background image (`home_bg.png`) has a parallax scroll effect — moves downward as user scrolls.
- **REQ-H-04:** Hero content fades out as user scrolls down.
- **REQ-H-05:** Two CTA buttons exist: **"Request Proposal"** (gradient) and **"Explore Solutions"** (bordered gold).
- **REQ-H-06:** A tactical status card on the right side (desktop only) shows AIRSPACE, ASSETS, and THREAT LVL.

#### Sovereign Guard Section
- **REQ-H-07:** Section heading is "The Sovereign Guard".
- **REQ-H-08:** Parallax image (manufacturing facility) appears on the right on desktop.
- **REQ-H-09:** Operational Status block with military-green left border reads "99.999% uptime".
- **REQ-H-10:** Text paragraphs animate in with `Reveal` component as they enter viewport.

#### Core Solutions (Horizontal Scroll)
- **REQ-H-11:** Section contains exactly **3 horizontal scroll cards**: Unmanned Systems, Global Surveillance, Cyber Security.
- **REQ-H-12:** Cards must be horizontally scrollable via mouse drag or touch swipe.
- **REQ-H-13:** Each card has a hover opacity transition on its background image.
- **REQ-H-14:** "View All Specs" anchor link exists (currently `href="#"`).

#### Circular Cards Section
- **REQ-H-15:** Renders 6 circular cards (4 text, 2 image) in a 3-column grid.
- **REQ-H-16:** Each card fans in from a staggered direction (left, center, right) on scroll.

#### Drone Assembly Section
- **REQ-H-17:** A scroll-scrubbed animation displays drone assembly frames.
- **REQ-H-18:** Animation progress is tied to vertical scroll position.

#### Partner Logos
- **REQ-H-19:** Authorized Supplier To bar shows 5 partner names in grayscale at 50% opacity.

#### CTA Section
- **REQ-H-20:** "Access Technical Specifications" heading uses `WordReveal` animation.
- **REQ-H-21:** "Download 2024 Brochure" button exists with a download icon.
- **REQ-H-22:** Export control disclaimer text appears below button.

---

### 4.2 Navigation Bar (`NavBar`)

- **REQ-N-01:** Logo "SILVER WINGS DEFENCE" links to `/` on click.
- **REQ-N-02:** Desktop links (hidden below `lg` breakpoint): Home, About, Services, Products, News, Career, Contact.
- **REQ-N-03:** "CLIENT LOGIN" button (visible from `sm` breakpoint) contains a `shield_person` icon and links to `/login`.
- **REQ-N-04:** Mobile hamburger menu (`menu`/`close` icon) toggles a full-screen overlay below `lg`.
- **REQ-N-05:** Mobile overlay lists all nav links + a CLIENT LOGIN button linking to `/login`.
- **REQ-N-06:** Clicking any mobile menu link closes the overlay.
- **REQ-N-07:** NavBar background is `#111417` at 90% opacity with `backdrop-blur-md`.

---

### 4.3 About Us (`/about-us`)

- **REQ-A-01:** Hero heading reads "Architects of the Sky." — "of the Sky." is in `text-primary`.
- **REQ-A-02:** Background image (`about_bg.png`) with 20% opacity and luminosity blend.
- **REQ-A-03:** Body text reads without unescaped entities — `don't` must render correctly (uses `&apos;`).
- **REQ-A-04:** Two stat boxes visible: "2010 Year Founded" and "40+ Global Patents".
- **REQ-A-05:** Rotating ring animations (clockwise and counter-clockwise) are visible behind the drone image.
- **REQ-A-06:** "CORE DOCTRINE" section contains 3 bento cards: Mission, Vision, and Values.
- **REQ-A-07:** "View Technical Specs" button has a gold border (`border-tertiary`).
- **REQ-A-08:** Terminal block in Leadership section shows system status output.

---

### 4.4 Services (`/services`)

- **REQ-SV-01:** Page renders with the services background image.
- **REQ-SV-02:** Contains at minimum 4 service cards with imagery.
- **REQ-SV-03:** Background images on service cards have opacity/mix-blend transitions.

---

### 4.5 Products (`/products`)

- **REQ-P-01:** Page title is "Tactical Arsenal" or similar.
- **REQ-P-02:** Product grid renders all **11 products** from `staticProducts` in `lib/products.ts`.
- **REQ-P-03:** Each product card shows the product name and ID code (e.g., `SWD-SYS-01`).
- **REQ-P-04:** On **desktop hover**, a terminal-style tooltip appears near the cursor showing specs.
- **REQ-P-05:** Tooltip changes to red "ACQUIRING SYSTEM" mode when hovering the CTA button.
- **REQ-P-06:** "ACQUIRE SYSTEM" button navigates to `/products/[id]`.
- **REQ-P-07:** Mobile layout shows product name, specs, and CTA button stacked vertically.
- **REQ-P-08:** Product grid is `1 col` mobile / `2 col` tablet / `3 col` desktop.

---

### 4.6 Product Detail (`/products/[id]`)

- **REQ-PD-01:** Valid IDs are `01` through `11`. Invalid IDs should show fallback name "Unknown System".
- **REQ-PD-02:** Page shows: System ID, product name, RESTRICTED badge, tactical specs table.
- **REQ-PD-03:** Terminal analysis block has a scanning animation line.
- **REQ-PD-04:** "ABORT AND RETURN" link navigates back to `/products`.
- **REQ-PD-05:** Rotating targeting rings are visible behind the product image.
- **REQ-PD-06:** "CONFIRM ACQUISITION" button exists with red background.
- **REQ-PD-07:** Top status bar shows "ENCRYPTION: 256-BIT SECURE" and "CONNECTION STABLE" with pulsing green dot.

---

### 4.7 News (`/news`)

- **REQ-NW-01:** Page renders with news background image.
- **REQ-NW-02:** News articles or press releases are listed.
- **REQ-NW-03:** Article images render without errors.

---

### 4.8 Career (`/career`)

- **REQ-C-01:** Hero heading reads "Build the Apex Predators of the Sky." with gradient text.
- **REQ-C-02:** Body text renders with `don't` correctly (uses `&apos;`).
- **REQ-C-03:** "Unrivaled Infrastructure" section contains 3 feature cards (R&D Labs, Swarm Clusters, Live-Fire).
- **REQ-C-04:** "Tactical Divisions" section contains 4 division cards.
- **REQ-C-05:** "Autonomous AI Systems" description renders without unescaped quotes (uses `&quot;`).
- **REQ-C-06:** "Active Directives" terminal block displays 4 job listings.
- **REQ-C-07:** Each job listing has a hover left-border color reveal and `[ INITIATE UPLOAD ]` text.
- **REQ-C-08:** Terminal header has 3 colored dots (red, yellow, green) simulating a macOS window.

---

### 4.9 Contact (`/contact`)

- **REQ-CO-01:** Page renders with contact background and "ESTABLISH COMMAND" heading.
- **REQ-CO-02:** Contact form contains 5 fields: Operative Name, Sur/Code Name, Organization, Security Clearance (select), Encrypted Payload (textarea).
- **REQ-CO-03:** All form inputs have Material Icons as left decorators.
- **REQ-CO-04:** Security Clearance dropdown has 4 options: UNCLASSIFIED, CONFIDENTIAL, SECRET, TOP SECRET.
- **REQ-CO-05:** "TRANSMIT" button exists with a send icon.
- **REQ-CO-06:** "CHANNEL SECURE" indicator with military-green square dot is visible.
- **REQ-CO-07:** A scanning-line hover animation plays on the form container on hover.
- **REQ-CO-08:** Right sidebar shows "Global Command" with address, phone, and email.
- **REQ-CO-09:** Map preview div is visible with a crosshair overlay.
- **REQ-CO-10:** "Partner Portal" card contains "AUTHORIZE ACCESS" button — clicking it navigates to `/login`.

---

### 4.10 Login Page (`/login`)

- **REQ-L-01:** Page header reads **"COMMAND GATEWAY"** with a `shield_person` icon.
- **REQ-L-02:** Network status ticker above the form reads: "NETWORK SECURE | ENCRYPTION: AES-256 | REGION: CLASSIFIED | THREAT LEVEL: LOW | UPLINK STABLE".
- **REQ-L-03:** Watermark text "AUTH // TIER-1" is visible in the top-right of the card.
- **REQ-L-04:** Form contains two fields: **Operative ID / Clearance Code** (text input with badge icon) and **Security Passphrase** (password input with password icon).
- **REQ-L-05:** "RESET CLEARANCE?" link appears right-aligned above the password field and navigates to `/forgot-password`.
- **REQ-L-06:** "Remember Terminal Session" checkbox is present and functional.
- **REQ-L-07:** "AUTHORIZE ACCESS" button is full-width with a `login` icon.
- **REQ-L-08:** "OR" divider separates the button from the signup link.
- **REQ-L-09:** "INITIATE CLEARANCE REQUEST" link navigates to `/signup`.
- **REQ-L-10:** Bottom security footer shows: "Secure Connection" with a verified_user icon, and "SWD-AUTH v2.4" on the right.
- **REQ-L-11:** Biometric scan animation (light sweep) plays on card hover.

---

### 4.11 Sign Up Page (`/signup`)

- **REQ-SU-01:** Page header reads **"OPERATIVE REGISTRATION"** with a `how_to_reg` icon.
- **REQ-SU-02:** Watermark text "REQ // TIER-1" is visible in top-right of the card.
- **REQ-SU-03:** Form is a 2-column grid containing 6 fields: Operative Name, Requested ID, Affiliation/Agency, Clearance Level Request (select), Security Passphrase, Verify Passphrase.
- **REQ-SU-04:** All 6 fields have Material Icons as left decorators.
- **REQ-SU-05:** "Clearance Level Request" dropdown has 3 options: EXTERNAL CONTRACTOR, STANDARD OPERATIVE, COMMAND STAFF.
- **REQ-SU-06:** "SUBMIT CLEARANCE REQUEST" button uses military-green gradient and is full-width.
- **REQ-SU-07:** "RETURN TO COMMAND GATEWAY" link navigates to `/login`.
- **REQ-SU-08:** Radar sweep animation (gold) plays on card hover.

---

### 4.12 Forgot Password (`/forgot-password`)

- **REQ-FP-01:** Page header reads **"RESET CLEARANCE"** with a `lock_reset` icon.
- **REQ-FP-02:** Watermark text "SEC // RESET" is visible.
- **REQ-FP-03:** Single email input field with `alternate_email` icon.
- **REQ-FP-04:** "TRANSMIT RESET CODE" button is full-width with a send icon.
- **REQ-FP-05:** "← Return to Command Gateway" link navigates back to `/login`.

---

### 4.13 Footer

- **REQ-F-01:** Displays "SILVER WINGS DEFENCE" branding.
- **REQ-F-02:** Copyright reads "© 2024 SILVER WINGS DEFENCE. TACTICAL PRECISION SECURED."
- **REQ-F-03:** Contains 5 footer links: Privacy Policy, Terms of Service, Careers, Download Brochures, Partner Portal.
- **REQ-F-04:** All footer links turn gold (`#eac349`) on hover.
- **REQ-F-05:** Footer links currently use `href="#"` (not yet wired to routes — known limitation).

---

## 5. Navigation & Routing Matrix

```
/ ─── NavBar → All pages
    ├─ /about-us         [About link]
    ├─ /services         [Services link]
    ├─ /products         [Products link]
    │   └─ /products/01  [Product card CTA]
    │   └─ /products/11  (max ID)
    ├─ /news             [News link]
    ├─ /career           [Career link]
    ├─ /contact          [Contact link]
    │   └─ /login        [AUTHORIZE ACCESS button in Partner Portal]
    └─ /login            [CLIENT LOGIN button]
        ├─ /forgot-password  [Reset Clearance? link]
        └─ /signup           [Initiate Clearance Request link]
            └─ /login        [Return to Command Gateway link]
```

---

## 6. Form Validation Requirements

| Form | Field | Validation |
|---|---|---|
| Contact | Operative Name | No validation (text input) |
| Contact | Sur/Code Name | No validation (text input) |
| Contact | Organization | No validation (text input) |
| Contact | Security Clearance | Dropdown — no validation |
| Contact | Encrypted Payload | No validation (textarea) |
| Login | Operative ID | `required` attribute present |
| Login | Security Passphrase | `required` attribute, `type="password"` |
| Signup | Operative Name | `required` attribute |
| Signup | Requested ID | `required` attribute |
| Signup | Affiliation | `required` attribute |
| Signup | Clearance Level | Dropdown — no validation |
| Signup | Security Passphrase | `required` attribute, `type="password"` |
| Signup | Verify Passphrase | `required` attribute, `type="password"` |
| Forgot Password | Email/ID | `required` attribute, `type="email"` |

> **Note:** No backend submission is wired. All buttons use `type="button"` or are not yet connected to an API.

---

## 7. Responsive Design Requirements

| Breakpoint | Key Behavior |
|---|---|
| Mobile (`< 640px`) | NavBar: logo + hamburger only. Login button hidden. Hero: single column. Cards: stacked. |
| Small (`sm: 640px`) | CLIENT LOGIN button appears in NavBar. Hero CTA buttons side-by-side. |
| Medium (`md: 768px`) | Hero becomes 2-column grid. Parallax image card appears. |
| Large (`lg: 1024px`) | NavBar shows all links. Mobile menu hidden. Contact: 12-col grid. |
| XL (`xl: 1280px`) | Horizontal scroll spacers activate. Max layout at 1600px. |

---

## 8. Animation Requirements

| Animation | Trigger | Behavior |
|---|---|---|
| Hero heading word reveal | Page load | Words slide up with stagger |
| Hero content fade | Scroll down | Opacity → 0 as hero exits viewport |
| Hero background parallax | Scroll | BG moves at 30% scroll speed |
| `Reveal` component | Enter viewport | Slides up from Y=60, opacity 0→1 |
| `CircularCard` fan-in | Scroll | Cards translate from X±150, rotate ±25deg |
| Drone assembly | Scroll | Frame-by-frame assembly animation |
| Product card hover | Mouse hover | Image opacity changes, CTA slides up |
| Login biometric sweep | Card hover | Light line sweeps top→bottom over 3s |
| Signup radar sweep | Card hover | Gold line sweeps bottom→top over 4s |
| Rotating rings (About, Products) | Continuous | Slow CSS keyframe `spin` animations |
| Mobile menu | Button click | `animate-in fade-in` transition |

---

## 9. Known Limitations & Future Work

| Item | Status |
|---|---|
| Login form — no backend authentication | Not implemented |
| Signup form — no user creation | Not implemented |
| Forgot password — no email dispatch | Not implemented |
| Contact form — no email/API submission | Not implemented |
| Footer links (Privacy, ToS, etc.) | All `href="#"` — placeholder |
| "Request Proposal" hero button | `type="button"` — no action |
| "Download 2024 Brochure" button | `type="button"` — no action |
| Product images | All use same placeholder image |
| Product specs | All show "TBD" data |
| News articles | Static data only |
| CMS integration | Stubbed in `lib/products.ts` |

---

## 10. Test Acceptance Criteria

### TC-01: Navigation Flow
- [ ] Clicking logo navigates to `/`
- [ ] All 7 nav links navigate to correct routes
- [ ] CLIENT LOGIN button navigates to `/login`
- [ ] Mobile hamburger opens overlay
- [ ] All mobile menu links close overlay and navigate correctly

### TC-02: Login Page
- [ ] Page renders at `/login` without errors
- [ ] Both form fields are present with icons
- [ ] RESET CLEARANCE? links to `/forgot-password`
- [ ] INITIATE CLEARANCE REQUEST links to `/signup`
- [ ] Remember Terminal Session checkbox toggles
- [ ] Security footer bar is visible

### TC-03: Signup Page
- [ ] Page renders at `/signup` without errors
- [ ] All 6 fields are visible with icons
- [ ] Clearance Level dropdown has 3 options
- [ ] RETURN TO COMMAND GATEWAY links to `/login`

### TC-04: Forgot Password Page
- [ ] Page renders at `/forgot-password` without errors
- [ ] Email field present with icon
- [ ] Return link navigates to `/login`

### TC-05: Contact Page
- [ ] AUTHORIZE ACCESS button navigates to `/login`
- [ ] All 5 form fields are visible
- [ ] Dropdown has 4 clearance levels
- [ ] Contact info (address, phone, email) is visible

### TC-06: Products
- [ ] `/products` renders 11 product cards
- [ ] Each card navigates to `/products/[id]` on CTA click
- [ ] `/products/01` through `/products/11` all render without 404
- [ ] ABORT AND RETURN link goes back to `/products`

### TC-07: Home Page
- [ ] Hero section renders with 3-line heading
- [ ] 3 horizontal scroll cards are visible
- [ ] Partner logos bar is visible
- [ ] Drone assembly section renders

### TC-08: Responsive Layout
- [ ] Site has no horizontal overflow at 375px (mobile)
- [ ] NavBar collapses to hamburger below 1024px
- [ ] Forms are single-column on mobile

### TC-09: Code Quality
- [ ] `npx tsc --noEmit` returns 0 errors ✅
- [ ] `npx eslint . --quiet` returns 0 errors ✅
- [ ] No unescaped entities in JSX ✅

---

*Document generated based on codebase analysis of `d:\WORK\silverwings` — April 2026.*
