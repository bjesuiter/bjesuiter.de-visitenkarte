---
# bjesuiter.de-visitenkarte-zy2k
title: Remove legacy manual pagination logic after migration
status: todo
type: task
priority: normal
created_at: 2026-03-28T12:57:04Z
updated_at: 2026-03-28T12:57:07Z
parent: bjesuiter.de-visitenkarte-ohtv
blocked_by:
    - bjesuiter.de-visitenkarte-2z74
---

Once the new renderer is active and validated, remove the manual page-bucket implementation and related debug code.

## Todo

- [ ] Remove obsolete manual page grouping arrays and page wrappers
- [ ] Delete no-longer-needed overflow debug logic
- [ ] Clean up unused styles and helper code
- [ ] Confirm the print routes still build and render correctly
- [ ] Update the epic summary to reflect the finished migration
