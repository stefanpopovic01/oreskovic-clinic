# Orešković Clinic — Website

A rehab & aesthetic clinic in Zagreb and Opatija. React + Vite, pure frontend, no backend.

## Tech stack
- React + Vite, `react-router-dom` for routing
- Plain CSS per component (no Tailwind), shared design tokens in `theme.css`
- Fonts: Playfair Display (headings) + Manrope (body)
- Palette: ivory / cream / champagne / charcoal / gold / blush

## Pages & routes
| Route | Page |
|---|---|
| `/` | Homepage (Hero, TrustBar, AboutClinic, Treatments strip, Pricing, Process, Results, Offer, Testimonials, FinalCta) |
| `/o-klinici` | About the clinic — story, technology (devices), locations with Google Maps |
| `/tretmani/:slug` | One dynamic page for all 19 treatments |
| `/cjenik` | Pricing — search + mega-menu + card grid + per-category detail panel |
| `/rezultati` | Results gallery by treatment, with filter and lightbox |
| `/rezervacija` | Booking/inquiry form |
| `/uspesna-rezervacija` | Confirmation after form submit (guarded — only reachable via redirect, not by direct URL) |
| `/postavke-kolacica`, `/politika-privatnosti` | GDPR pages |
| `*` | 404 page |

## Shared data (single source of truth)
- `src/data/pricingData.js` — all prices, used by both the Cjenik page and individual treatment pages
- `src/data/treatmentsData.js` — description/process/FAQ for each treatment, linked to pricing via `pricingId`

Change a price in one place and it updates everywhere. The Home Pricing section (`Pricing.jsx`) also pulls directly from here, via a list of chosen IDs.

## Design patterns reused across pages
- **Hero pull-up**: `margin-top: -110px` + `padding-top: calc(var(--section-padding-y) + 110px)` — background extends under the sticky header
- **Reveal on scroll**: IntersectionObserver + `.reveal`/`.is-visible` classes
- **Entrance fade-in**: self-triggering CSS animation on hero sections on page load
- **Aurora blobs** (blur + drift animation) behind hero sections — hidden on mobile (`display:none` below 900px) for performance and a cleaner small-screen look
- Mobile menu is `position:absolute` (doesn't push page content down)

## Deploy
- `vercel.json` at the root rewrites all paths to `index.html` (without this, direct access to a route like `/cjenik` returns 404 on Vercel)
- `.gitignore` covers `.env` variants, `node_modules`, `dist`, editor/OS files