# Gamal Sayed — Data Engineer Portfolio

A modern, premium, recruiter-focused portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design direction

- **Dark-first theme** (`#0a0e14` void background) with a light mode toggle, built on CSS variables so every color adapts instantly.
- **Signature visual**: an animated, ambient ETL pipeline diagram (`PipelineBackground.tsx`) rendered behind the hero and contact sections — parallel "data lanes" with pulsing nodes and flowing dashes, standing in for the ingest → process → store → serve journey a data engineer actually builds.
- **Per-project architecture diagrams** (`ArchitectureDiagram.tsx`) auto-generated from each project's pipeline stages — no stock imagery, every visual is generated from real content.
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (labels, tags, timestamps — a nod to terminal/schema output).
- Glassmorphism cards, soft shadows, scroll-reveal animations, animated skill-level bars, an interactive timeline, and a short pipeline-themed loading sequence on first paint.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

> Note: `next/font/google` fetches fonts at build time, so `npm run build` / `npm run dev` needs internet access the first time (fonts are then cached).

## Project structure

```
src/
  app/
    layout.tsx      # fonts, SEO metadata, theme bootstrap
    page.tsx         # assembles all sections
    globals.css       # CSS variable theme tokens (dark + light)
    sitemap.ts / robots.ts
  components/         # one component per section/UI piece
  context/
    ThemeContext.tsx  # dark/light mode with localStorage persistence
  lib/
    data.ts           # ALL editable content lives here
    utils.ts
  types/
    index.ts
public/
  resume.pdf          # placeholder — replace with your real resume
```

## Customizing content

Everything you'll want to edit — name, tagline, bio, skills, projects, experience,
certifications, and social links — lives in **`src/lib/data.ts`**. Nothing else needs
to change to update the copy.

To swap in your own:
- **Resume**: replace `public/resume.pdf` with your real file (same filename, or update `personal.resumeUrl`).
- **Projects**: edit the `projects` array — each project's `pipeline` array drives its architecture diagram automatically.
- **Site URL / OG metadata**: update `siteUrl` in `src/app/layout.tsx` and `src/app/sitemap.ts` once you have a real domain.

## Accessibility & performance notes

- Visible focus rings on all interactive elements (`:focus-visible`).
- `prefers-reduced-motion` is respected globally.
- Semantic landmarks (`header`, `main`, `footer`, `section` with `id`s) and descriptive `aria-label`s on icon-only buttons.
- Static generation (`○ Static`) for every route — no server runtime required, deploys cleanly to Vercel, Netlify, or any static/Node host.

## Deploying

The easiest path is [Vercel](https://vercel.com/new) — push this repo and import it, no config needed. Any Node 18+ host that runs `npm run build && npm run start` also works.
