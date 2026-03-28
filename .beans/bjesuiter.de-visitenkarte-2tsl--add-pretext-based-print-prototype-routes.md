---
# bjesuiter.de-visitenkarte-2tsl
title: Add Pretext-based print prototype routes
status: completed
type: feature
priority: normal
created_at: 2026-03-28T13:37:21Z
updated_at: 2026-03-28T13:42:06Z
---

Create `/en/cv/print-pretext/` and `/de/lebenslauf/drucken-pretext/` as copies/prototypes of the current print pages, then try using Pretext for more dynamic section placement in the prototype renderer.

## Todo

- [x] Add the Pretext dependency
- [x] Create a `CVPrintPretext` prototype renderer based on the current print pages
- [x] Add `/en/cv/print-pretext/` and `/de/lebenslauf/drucken-pretext/` routes
- [x] Use Pretext in the prototype for more dynamic section placement
- [x] Verify the prototype routes build successfully

## Summary of Changes

- added `@chenglou/pretext` and created `src/components/CVPrintPretext.astro` as a prototype copy of the current print renderer
- added `/en/cv/print-pretext/` and `/de/lebenslauf/drucken-pretext/` routes for the new prototype
- replaced the hardcoded project-page bucketing in the prototype with a client-side Pretext-guided paginator that estimates project card heights and generates project pages dynamically
- validated the new routes with `bun run build`
