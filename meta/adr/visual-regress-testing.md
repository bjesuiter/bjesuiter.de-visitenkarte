# ADR: Visual regression testing

## Status

Accepted

## Date

2026-03-13

## Context

We want a first visual regression testing setup for this Astro site.

The goal is to catch unintended visual changes on the localized homepages before expanding coverage to more pages, more browsers, and eventually CI.

This repository currently serves:

- German homepage at `/de/`
- English homepage at `/en/`
- a root page at `/` that can client-side redirect to `/en/` for English-preferring browsers

Important implementation detail:

- `src/layouts/Layout.astro` contains a client-side language redirect on `/` for browsers that prefer English.
- To avoid locale/redirect instability, the visual regression suite should target the explicit localized homepage routes `/de/` and `/en/` instead of `/`.

## Decisions

### Initial route coverage

Start with full-page screenshots for the two explicit localized landing pages:

- `/de/`
- `/en/`

Notes:

- Although `/` also renders German content, it includes locale-based client-side redirect behavior.
- `/de/` is the better stable target for visual baselines.

### Screenshot scope

Use **full-page screenshots only** for the first version.

No section-level or component-level visual snapshots yet.

### Viewports

Initial viewport set:

- minimal: `300x500`
- iPhone 12 Pro: `390x844`
- generic tablet: `768x1024`
- desktop: `1440x1200`

Explicitly not included in the first version:

- iPhone SE `375x667`
- iPad Pro `1024x1366`

These can be added later if needed.

### Browser coverage

Initial browser coverage is:

- **Chromium only**

Future expansion may add:

- WebKit
- Firefox

### Execution environment

Initial execution is:

- **local only**

Not in CI yet.

### Server mode

Run visual regression tests against the production-like preview flow:

- `bun run build`
- `bun run preview`

Do not use the Astro dev server for the first version.

### Baseline storage

Baseline screenshots should be:

- **committed to git**

### Snapshot update workflow

Snapshot updates should be:

- **manual only**

Provide explicit commands/scripts for:

- running visual checks
- updating baselines intentionally

### Animation policy

Default policy:

- keep animations and transitions **enabled**

Reasoning:

- tests should stay as close as possible to the real page behavior

Exception policy:

- if specific tests become flaky, disable motion **surgically per test/page**, not globally by default

### Diff strictness

Use:

- **slightly tolerant** visual diffs

The setup should not require perfect pixel identity if tiny rendering noise appears.

### Smoke-test behavior

Visual tests should also provide basic smoke coverage.

At minimum, each test should verify:

- the page loads successfully
- the expected target route is reached
- the page is in a screenshot-ready state before capture

Optional later additions:

- console error checks
- failed image/network assertions where practical

### Screenshot timing

Initial screenshot timing rule:

- use a fixed `250ms` delay before taking the screenshot

This is intentionally simple for the first version.

If that proves unstable, we can later move to a more explicit “main content ready” strategy.

### Developer-facing scripts

Add dedicated Bun scripts for:

- running visual tests
- manually updating visual baselines

## Proposed implementation plan

### 1. Add Playwright

Add Playwright as a dev dependency and use Playwright Test's built-in screenshot assertions.

Planned pieces:

- Playwright package
- Playwright config
- screenshot test directory

### 2. Configure preview-based test execution

Set Playwright up to run against the built preview server.

Planned flow:

1. build the Astro site
2. start `astro preview`
3. run Playwright against that server

The configuration should document that this is intentionally preview/build based for more production-like rendering.

### 3. Define the initial viewport matrix

Create named projects or equivalent configuration for:

- `minimal` → `300x500`
- `iphone-12-pro` → `390x844`
- `tablet` → `768x1024`
- `desktop` → `1440x1200`

Use Chromium only.

### 4. Avoid locale instability by targeting explicit localized routes

Because `/` can redirect to `/en/` in English browser environments, the initial suite should not use `/` as a baseline target.

Implementation rule:

- use `/de/` for the German homepage baseline
- use `/en/` for the English homepage baseline

This removes the need for locale-specific stabilization in the first version.

### 5. Create initial visual regression specs

Add tests for:

- German homepage `/de/`
- English homepage `/en/`

For each route and viewport:

1. navigate to the page
2. assert the final URL is the expected one
3. wait `250ms`
4. capture a full-page screenshot
5. compare against baseline with slight tolerance

### 6. Add manual snapshot workflows

Add scripts similar to:

- `bun run test:visual`
- `bun run test:visual:update`

The update script should intentionally regenerate baselines.

### 7. Commit the initial baselines

Generate and commit the first approved screenshot baselines into the repository.

### 8. Document usage

Document in the repo how to:

- run the visual suite locally
- update baselines manually
- review changed snapshots before committing them

## Expected file additions when implemented

Likely additions:

- `playwright.config.ts`
- `tests/visual/*.spec.ts` or similar
- visual snapshot files generated by Playwright
- `package.json` script updates
- optional `README.md` note or dedicated testing doc

## Risks / caveats

### Remote font rendering

The site loads Google Fonts.

Possible impact:

- minor visual noise or timing differences if font loading is not fully stable

If this becomes noisy, consider later:

- waiting explicitly for fonts
- reducing rendering variance
- bundling fonts locally if needed

### Motion-related flakiness

Animations remain enabled by default.

Possible impact:

- some elements may snapshot at slightly different states

If that occurs, prefer targeted mitigation for the affected test instead of a global “disable all motion” rule.

### Browser expansion cost

Adding WebKit and Firefox later will multiply baseline volume and maintenance effort.

This is intentionally deferred.

### CI rollout later

CI is intentionally deferred for now.

When added later, CI will need:

- deterministic browser installation
- stable font/rendering behavior
- snapshot diff artifacts for review

## Future follow-ups

Potential next steps after the first version is stable:

1. add CI execution on pull requests
2. add WebKit coverage for Safari-oriented validation
3. add Firefox coverage if desired
4. expand routes to CV, support, and print pages
5. add targeted component/section snapshots where useful
6. add console error / broken asset assertions
7. add per-test motion disabling only where instability requires it

## Summary

The first visual regression setup should be:

- Playwright-based
- local only
- Chromium only
- preview/build based
- full-page only
- committed baselines in git
- manual baseline updates
- slightly tolerant diffs
- initial route coverage limited to `/de/` and `/en/`
- initial viewports limited to `300x500`, `390x844`, `768x1024`, and `1440x1200`
- defaulting to real motion, with surgical stabilization only if necessary later
