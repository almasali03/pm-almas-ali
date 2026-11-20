# Portfolio site redesign — design spec

Date: 2026-11-20 · Owner: Almas Ali · Status: approved

## Goal
A personal portfolio that presents Almas as a product manager at heart — first-principles thinking, problem framing, judgement and outcomes — specialising in AI products and forward-deployed product work. It should be at least as polished as a top-tier product portfolio, with richer but restrained motion. It must not read like a developer's site.

## Decisions
| Area | Decision |
|---|---|
| Hosting | Vercel, free `*.vercel.app` subdomain, auto-deploy from `main` |
| Repo | This repo; Lovable/Vite code replaced, history kept; GitHub Pages workflow and CNAME removed |
| Stack | Next.js (App Router, statically rendered), TypeScript, Tailwind CSS v4, Framer Motion (`motion`), Lenis smooth scroll |
| Fonts | Instrument Serif (display), Inter (body) via `next/font`; no monospace in UI |
| Theme | Light-first, dark toggle; warm off-white `#FAFAF7`, near-black ink, deep indigo accent |
| Structure | Homepage + one page per case study |
| Content | Typed data in `src/content/`; every claim must exist in the master resume |

## Pages
- `/` — Hero → How I think (3 principles) → Selected work (4 cards) → Forward-deployed builds (3) → Experience timeline → Credentials → Contact
- `/work/[slug]` — `orbit-ai`, `apac-gtm`, `z2p-underwriting`, `lifecycle-engine`; template: Context → Problem → What I noticed → The bet → What shipped → Outcome → What I'd do next
- `/resume.pdf` — master resume PDF
- Custom 404; Open Graph image generated per page

## Motion
- Hero: word-by-word blur-to-sharp reveal; slow drifting gradient
- Sections: fade and rise on enter (once)
- Case-study steps: a vertical line draws as you scroll, each step reveals on reach
- Metrics count up on enter
- Cards: subtle tilt + shadow lift on hover
- Timeline line draws on scroll
- All motion disabled under `prefers-reduced-motion`; content visible without JS (no opacity-0 in server HTML)

## Content rules
- Source of truth: master resume. Client/partner names only if in it.
- Correct figures: NiveshPe from Aug 2025; PayMate Lead PM to Jul 2025; Z2P 1M+ downloads, NPA under 1%; GST challan ₹20L in first quarter.
- AI tooling mentioned at most once, as a means; no engineering-stack claims for ORBIT.
- No phone number; email almasali03@gmail.com; no "open to work" wording.

## Quality bar
- `next build` passes with no type or lint errors
- Lighthouse ≥ 95 performance, accessibility, SEO on desktop and mobile
- No horizontal scroll at 375px; keyboard focus visible; colour contrast AA in both themes
- All internal links resolve; OG image renders
- Owner reviews a Vercel preview before sharing the link

## Out of scope
Writing/blog section, CMS, analytics, contact form, custom domain.
