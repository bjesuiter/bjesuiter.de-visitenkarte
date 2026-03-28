---
# bjesuiter.de-visitenkarte-vn76
title: Remove hidden source pages from Pretext print prototype
status: completed
type: task
priority: normal
created_at: 2026-03-28T14:04:00Z
updated_at: 2026-03-28T14:07:22Z
---

Refactor the Pretext print prototype so it no longer keeps hidden source pages in the same page/overflow system as the generated preview pages.

## Todo

- [x] Explain the current purpose of the hidden source shell/pages
- [x] Replace hidden source pages with non-page measurement/template containers
- [x] Keep the Pretext pagination behavior working
- [x] Verify the prototype route still builds successfully

## Summary of Changes

- clarified the hidden source markup purpose: it was not legacy output, it was an offscreen measurement/template area for estimating project card heights before generating paginated project pages
- removed the hidden source markup from the `.cv-print-page` page system and converted it into a non-page measurement container
- kept the Pretext-generated pagination behavior intact while eliminating the phantom extra page and overflow warning
- validated with `bun run build` and a browser check confirming 16 total pages, 0 overflow pages, and correct page numbering on `/en/cv/print-pretext/`
