---
# bjesuiter.de-visitenkarte-9wn5
title: Open print preview in new tab and auto-open print dialog
status: completed
type: feature
priority: normal
created_at: 2026-03-15T08:57:47Z
updated_at: 2026-03-15T09:00:22Z
---

Change the CV print action so it opens the print preview in a new browser tab and automatically opens the browser print dialog when that preview loads. Keep the dedicated print preview page working and validate the behavior with the existing print flow.

## Todo

- [x] Inspect current print-link and print-preview behavior
- [x] Open print preview from the CV page in a new tab
- [x] Auto-open the browser print dialog when the print preview loads from the print action
- [x] Validate with build and visual/print checks

## Summary of Changes

- changed the CV print link in `src/components/CVDocument.astro` to open the print preview in a new tab with `?autoprint=1`
- added auto-print handling in `src/components/CVPrint.astro` so the print preview only auto-opens the browser print dialog when that query parameter is present
- the auto-print flow removes the query parameter from the URL after activation so the preview tab remains shareable/refreshable without reusing the special link state
- added `tests/visual/print-behavior.spec.ts` to verify plain preview pages do not auto-print, and that the print action opens a popup/new tab that triggers `window.print()` once
- validation: `bun run build` and `bunx playwright test tests/visual/print-behavior.spec.ts tests/visual/print.spec.ts --config=playwright.config.ts --project=desktop-chromium` pass
