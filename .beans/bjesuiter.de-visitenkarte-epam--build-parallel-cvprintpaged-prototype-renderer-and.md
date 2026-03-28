---
# bjesuiter.de-visitenkarte-epam
title: Build parallel CVPrintPaged prototype renderer and temporary routes
status: in-progress
type: task
priority: normal
created_at: 2026-03-28T12:56:11Z
updated_at: 2026-03-28T12:56:14Z
parent: bjesuiter.de-visitenkarte-ohtv
---

Create a new flowing print renderer alongside the existing implementation so the migration can be developed and compared safely.

## Todo

- [ ] Add `src/components/CVPrintPaged.astro`
- [ ] Render the CV as one continuous document instead of hardcoded page buckets
- [ ] Add temporary prototype routes for DE and EN
- [ ] Keep the current print routes untouched for side-by-side comparison
- [ ] Verify the prototype routes build successfully
