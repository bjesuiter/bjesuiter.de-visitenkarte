# Visitenkarte

## Original Concept

Initial idea for this project: build the page like a real-world contact card with
interactive 3D tilt that reacts to mouse movement. That concept is intentionally
parked for now because the interaction complexity was too high for the first
iteration.

## Icon Usage

- Find Icons here: `https://icon-sets.iconify.design/?query=astro`
  - alternative icon browser: https://icones.js.org/
- install necessary icon pack, for example: logos:
  `bun add @iconify-json/logos`
- use as `<Icon name="logos:github-icon" />`

## TODOs

- optimize images: https://www.youtube.com/watch?v=kGGnanUKM00
- add a full menu with "BJesuiter", "CodeMonument" und "Impressum"
- add complete localization as english and german!

## Visual regression testing

This repo includes a local Playwright-based visual regression setup.

Current scope:

- routes: `/de/` and `/en/`
- screenshots: full-page only
- browser: Chromium
- viewports:
  - `300x500`
  - `390x844`
  - `768x1024`
  - `1440x1200`
- server mode: `bun run build` + `bun run preview`

One-time browser install:

```bash
bunx playwright install chromium
```

Run the checks:

```bash
bun run test:visual
```

Update baselines intentionally:

```bash
bun run test:visual:update
```

Notes:

- Baseline screenshots are committed to git.
- Snapshot updates are manual only.
- Tests currently keep animations enabled to stay close to the real page.
- Playwright HTML reports and temporary test output are written under `tmp/playwright/`.

## References

- Icon Packs used:
  - @iconify-json/ph (Phosphor Icons)
  - @iconify-json/logos
  - @iconify-json/ion

---

# Repo Log

## 2025-02-15 Upgrade tailwind to v4

```bash
bunx --bun @tailwindcss/upgrade
```
