# KNWN Website — Claude Code Project Guide

## Project Overview
KNWN is an elite cheer training and consulting brand. Premium athletic aesthetic: dark, bold, high-contrast. 
Built on **Next.js 15 + Tailwind CSS + shadcn/ui**.

## Stack
- Framework: Next.js 15 (App Router, TypeScript)
- Styling: Tailwind CSS v3
- Components: shadcn/ui
- Fonts: Inter (current) — see Design System below
- Deployment: Vercel

## Design System
**Brand:** Elite athletic, premium, dark/bold. Think high-end sports apparel meets performance coaching.
- Primary: dark backgrounds (`#0a0a0a`, `#111`)
- Accent: bold white, sharp reds or gold
- Typography: condensed/bold headings for impact
- No gradients that look "AI/SaaS purple." Intentional, athletic, premium.

## UI/UX Skill
This project has **UI/UX Pro Max** installed at `.claude/skills/ui-ux-pro-max/`.

Before making design decisions (colors, typography, layout, components), run the search tool:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> --stack nextjs
```

Domains: `style`, `typography`, `color`, `ux`, `landing`, `product`, `chart`

**Example queries for this project:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elite athletic dark bold" --domain style --stack nextjs
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "athletic premium heading font" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark sports landing page" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "sports fitness site" --domain product
```

Always run at least one search before proposing design changes. Use the output to justify choices.

## Coding Rules
- All components in `src/components/`
- Page content data in `src/lib/content.ts` (single source of truth)
- No inline styles — use Tailwind utility classes
- Use `cn()` from `src/lib/utils.ts` for conditional classes
- Images: use `next/image` with proper `alt` text (accessibility rule: `alt-text`)
- Touch targets: minimum 44×44px (accessibility rule: `touch-target-size`)
- Every interactive element needs `cursor-pointer` and a hover state

## Branches
- `main` — production
- Feature branches: `feat/<description>`
- Fixes: `fix/<description>`
- PR required before merge to main

## Key Files
- `src/app/page.tsx` — Homepage
- `src/lib/content.ts` — All site content data
- `src/components/site/site-header.tsx` — Nav
- `src/app/services/[slug]/page.tsx` — Service detail pages
- `src/app/api/consultation-spots/route.ts` — Live spots counter API
