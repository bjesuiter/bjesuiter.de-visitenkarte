---
# bjesuiter.de-visitenkarte-db4j
title: Fix print output for print and drucken pages
status: todo
type: task
created_at: 2026-03-14T16:29:40Z
updated_at: 2026-03-14T16:29:40Z
---

Ensure Cmd+P on the print and drucken pages only prints the document content, not the preview harness (A4 page frames, gray background, shadows, etc.). Keep the invisible A4 layout boxes so the browser still has exact print boundaries and does not cut content away.

Best case: add a visual regression test that uses Playwright to print a page as PDF, compare the PDF with the preview pages, and iterate on @print media styles until the output matches closely.
