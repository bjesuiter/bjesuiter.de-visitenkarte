---
# bjesuiter.de-visitenkarte-epam
title: Build parallel CVPrintPaged prototype renderer and temporary routes
status: completed
type: task
priority: normal
created_at: 2026-03-28T12:56:11Z
updated_at: 2026-03-28T13:00:41Z
parent: bjesuiter.de-visitenkarte-ohtv
---

Create a new flowing print renderer alongside the existing implementation so the migration can be developed and compared safely.

## Todo

- [x] Add `src/components/CVPrintPaged.astro`
- [x] Render the CV as one continuous document instead of hardcoded page buckets
- [x] Add temporary prototype routes for DE and EN
- [x] Keep the current print routes untouched for side-by-side comparison
- [x] Verify the prototype routes build successfully

## Summary of Changes

- added `src/components/CVPrintPaged.astro` as a flowing print-document prototype that renders the shared CV data without hardcoded page buckets
- added temporary prototype routes at `/de/lebenslauf/drucken-paged/` and `/en/cv/print-paged/` while keeping the current production print routes untouched
- validated the prototype routes with `bun run build`
