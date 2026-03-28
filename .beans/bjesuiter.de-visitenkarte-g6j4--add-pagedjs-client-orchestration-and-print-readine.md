---
# bjesuiter.de-visitenkarte-g6j4
title: Add Paged.js client orchestration and print readiness flow
status: todo
type: task
priority: normal
created_at: 2026-03-28T12:56:21Z
updated_at: 2026-03-28T12:56:24Z
parent: bjesuiter.de-visitenkarte-ohtv
blocked_by:
    - bjesuiter.de-visitenkarte-epam
---

Integrate Paged.js on the prototype routes and make sure print or download actions only run after fonts and pagination are ready.

## Todo

- [ ] Add the Paged.js dependency and client bootstrapping
- [ ] Wait for fonts before pagination where needed
- [ ] Expose a ready state for the paged preview
- [ ] Ensure print/download triggers wait for pagination completion
- [ ] Keep the orchestration isolated from the legacy renderer
