# mama prana

One-page website for the Mama Prana yoga studio in Cherkasy. Static, bilingual (UA/EN), no backend.

Brand concept, palette and page structure: [`docs/CONCEPT.md`](./docs/CONCEPT.md).

## Stack

| What      | With                                         |
| --------- | -------------------------------------------- |
| Framework | [Astro](https://astro.build) (static output) |
| Language  | TypeScript (strict)                          |
| Styles    | Plain CSS, design tokens, scoped components  |
| Motion    | CSS only (`animation-timeline`, keyframes)   |
| Quality   | ESLint · Prettier · `astro check`            |
| CI        | GitHub Actions                               |

No UI framework. The only client script is a small `IntersectionObserver`
that reveals sections on scroll and replays the logo sunrise.

## Getting started

Node version comes from [`.nvmrc`](./.nvmrc) (Node 24).

```bash
npm install
npm run dev      # http://localhost:4321
```

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                    |
| `npm run build`   | Production build into `dist/`                 |
| `npm run preview` | Preview the built `dist/` locally             |
| `npm run check`   | Type-check `.astro` and `.ts` files           |
| `npm run lint`    | ESLint (`lint:fix` to autofix)                |
| `npm run format`  | Prettier (`format:check` to verify)           |
| `npm run verify`  | Everything above, same as CI                  |
| `npm run fonts`   | Re-download brand fonts to `src/assets/fonts` |

## Structure

```
src/
├── assets/photos/  Photos (optimized by astro:assets)
├── components/     Page sections (Hero, Practices, Schedule, …)
├── i18n/
│   ├── content.ts  All site copy, both languages
│   └── utils.ts    Locale and path helpers
├── layouts/
│   └── Base.astro  <head>, SEO, hreflang, reveal script
├── pages/
│   ├── index.astro     /     (Ukrainian)
│   └── en/index.astro  /en/  (English)
└── styles/
    ├── tokens.css  Palette, type scale, spacing, motion
    ├── motion.css  Reveal and scroll-linked animations
    └── global.css  Reset and utilities
```

## Editing

- **Copy and schedule:** `src/i18n/content.ts`. Components contain no hard-coded text,
  and a missing translation fails `npm run check`.
- **Colors, fonts, spacing:** only through variables in `src/styles/tokens.css`.
  Sections pick a palette with `data-theme="cream | blue | terracotta"`.
- **Photos:** drop files into `src/assets/photos/` and pass them to `<Photo src={…} />`.
- **New language:** add it to `languages` in `content.ts`, write the dictionary,
  create `src/pages/<code>/index.astro` and add the locale in `astro.config.mjs`.

## Accessibility and performance

- Semantic markup, labelled sections, skip link.
- Animations respect `prefers-reduced-motion`.
- Fully readable without JavaScript; motion is progressive enhancement.
- `hreflang`, canonical URLs and an auto-generated sitemap for both languages.
- Self-hosted fonts and responsive webp images.

## Deploying

`npm run build` outputs a static `dist/` that works on any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set `site` in
`astro.config.mjs` to the production domain.

## Open items

- Phone and email are not set in `content.ts` (footer hides them until added).
- Replace the Telegram link if the studio uses a different handle.
- Booking is via Instagram/Telegram; a form would need a backend or a third-party service.
