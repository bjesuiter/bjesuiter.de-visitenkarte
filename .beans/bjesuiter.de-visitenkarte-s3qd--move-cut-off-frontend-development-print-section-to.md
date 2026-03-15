---
# bjesuiter.de-visitenkarte-s3qd
title: Move cut-off Frontend Development print section to next page
status: completed
type: bug
priority: normal
created_at: 2026-03-15T08:47:20Z
updated_at: 2026-03-15T08:53:02Z
---

The real browser print layout still cuts off the Frontend Development section. Adjust the CV print pagination/layout so the whole section moves to the next page in actual print/PDF output instead of being clipped. Validate against the provided screenshot and the print regression flow.

## Todo

- [x] Inspect the reported cut-off Frontend Development print issue
- [x] Reproduce the print pagination problem in the current print/PDF flow
- [x] Adjust CV pagination/layout so the full section moves to the next page in print
- [x] Validate with build and print regression checks

## Summary of Changes

- repartitioned the skill pages in `src/components/CVPrint.astro` so the Frontend Development card now lives on the second IT skills page instead of the crowded first one
- this keeps the whole Frontend Development section together in real print output instead of clipping its last items at the page break
- expanded `tests/visual/print.spec.ts` with page-3/page-4 preview and print snapshots so the skill-page pagination is covered directly
- validation: `bun run build` and `bunx playwright test tests/visual/print.spec.ts --config=playwright.config.ts --project=desktop-chromium` pass
