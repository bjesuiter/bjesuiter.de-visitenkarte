---
# bjesuiter.de-visitenkarte-db4j
title: Fix print output for print and drucken pages
status: completed
type: task
priority: normal
created_at: 2026-03-14T16:29:40Z
updated_at: 2026-03-14T16:47:19Z
---

Ensure Cmd+P on the print and drucken pages only prints the document content, not the preview harness (A4 page frames, gray background, shadows, etc.). Keep the invisible A4 layout boxes so the browser still has exact print boundaries and does not cut content away.

Best case: add a visual regression test that uses Playwright to print a page as PDF, compare the PDF with the preview pages, and iterate on @print media styles until the output matches closely.

## Todo

- [x] Inspect current print/preview page structure and styles
- [x] Reproduce current print output and identify harness artifacts in print mode
- [x] Adjust @print styles so only document content prints while preserving A4 page boundaries
- [x] Add or update regression coverage for print output
- [x] Validate via build/tests and review generated PDF output

## Summary of Changes

- changed the print media rules for `src/components/CVPrint.astro` so browser printing keeps the A4 page boxes as invisible layout boundaries instead of expanding them to viewport width
- removed the visible print harness during actual printing by zeroing the `@page` margin, preserving explicit A4 page dimensions in `@media print`, and hiding sheet borders/overflow badges in print mode
- added `tests/visual/print.spec.ts` plus desktop Chromium snapshots for EN/DE preview page 1, printed page 1, printed page 6, and the first rendered PDF page
- the regression test now generates a real PDF via Playwright, verifies PDF page count matches the on-screen preview page count, and snapshots the first PDF page thumbnail on macOS
- validation: `bun run build` and `bunx playwright test tests/visual/print.spec.ts --config=playwright.config.ts --project=desktop-chromium` pass
- note: the full visual suite still has existing unrelated minimal-homepage snapshot diffs in `tests/visual/home.spec.ts`
