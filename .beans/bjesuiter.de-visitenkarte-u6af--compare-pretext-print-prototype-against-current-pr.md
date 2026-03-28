---
# bjesuiter.de-visitenkarte-u6af
title: Compare Pretext print prototype against current print layout
status: completed
type: task
priority: normal
created_at: 2026-03-28T13:48:00Z
updated_at: 2026-03-28T13:49:53Z
---

Investigate whether the Pretext-guided project pagination introduces layout regressions by comparing `/en/cv/print-pretext/` against `/en/cv/print/`.

## Todo

- [x] Compare the Pretext prototype and current print route visually
- [x] Identify any layout regressions introduced by the Pretext pagination
- [x] Summarize the differences and likely causes
- [x] Suggest whether to keep, adjust, or revert the Pretext pagination experiment

## Summary of Changes

- compared `/en/cv/print-pretext/` against `/en/cv/print/` in the browser using Playwriter
- verified that the visible project-page distribution matches the current print route: 16 visible pages with the same project card counts per page in the preview
- found a regression in the prototype's instrumentation and hidden source markup: the hidden measurement shell still contains a `.cv-print-page` with all 15 project cards, so the DOM page count becomes 17, the overflow detector reports a phantom overflow page, and generated project pages get shifted `data-cv-page-number` values
- recommendation: do not revert the Pretext experiment yet, but fix the hidden source-shell / overflow-measurement interaction before treating the prototype as trustworthy
