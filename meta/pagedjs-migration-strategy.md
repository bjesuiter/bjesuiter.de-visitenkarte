# Migration strategy: CV print rendering from manual page layout to Paged.js

## Goal

Migrate the current print CV implementation from a mostly manual, page-oriented layout in `src/components/CVPrint.astro` to a **flow-based, CSS-driven paged document** powered by **Paged.js**.

The target outcome is:

- less hardcoded page splitting
- fewer fragile page overflow fixes
- better maintainability when CV content changes
- print-first pagination driven by document flow instead of manual arrays
- preserved support for:
  - localized CV content from `src/data/cv.ts`
  - browser print flow
  - PDF download via browser print dialog
  - on-screen print preview route

---

## Why migrate

The current implementation already contains several signals that the print view is acting like a custom pagination engine:

- hardcoded page buckets for skills and projects
- explicit `.cv-print-page` wrappers
- print-only mode switching in inline script
- runtime overflow detection and page overflow warnings
- a separate print-preview presentation mode

This works, but it means content changes require manual rebalancing.

Paged.js is a better fit when the problem is:

- “turn this long HTML document into printable pages”
- “keep sections together when possible”
- “let CSS and paged-media rules decide page breaks”

Pretext could help with measurement, but it would push the project deeper into custom layout logic. Paged.js should reduce custom logic instead.

---

## Current-state summary

### Current routes

- `src/pages/de/lebenslauf/drucken.astro`
- `src/pages/en/cv/print.astro`

### Current source of truth

- shared CV data: `src/data/cv.ts`
- localized intro copy: `src/components/CVIntro.astro`

### Current renderer

- `src/components/CVPrint.astro`

### Current structural constraints

`CVPrint.astro` is currently built around **manual page objects**, for example:

- `paginatedSkillPages`
- `paginatedProjectPages`

This means pagination lives in Astro/JS instead of in document flow.

---

## Migration principle

Do **not** replace the current print implementation in one step.

Instead:

1. build a **parallel Paged.js prototype renderer**
2. validate output quality and maintainability
3. switch routes only after parity is good enough
4. keep a fallback path until the new flow is trusted

This de-risks the migration significantly.

---

## Recommended target architecture

### 1. Replace page-first markup with document-first markup

Instead of rendering many explicit `.cv-print-page` wrappers, render:

- one continuous CV document
- semantic sections
- semantic sub-sections for projects, skills, profile, links, etc.

Example shape:

- `main.cv-print-document`
  - `header.cv-print-hero`
  - `section.cv-print-profile`
  - `section.cv-print-skills`
  - `section.cv-print-projects`
    - repeated `article.cv-project-entry`

Paged.js should then paginate that flowing content.

### 2. Move pagination responsibility into CSS + Paged.js

Use CSS rules such as:

- `break-before`
- `break-after`
- `break-inside: avoid`
- `page-break-*` compatibility fallbacks where useful
- `@page` for page size and margins

### 3. Keep print styling separate from screen styling where possible

The current component mixes:

- on-screen preview layout
- print mode
- download mode
- overflow tooling

The Paged.js version should aim for cleaner separation:

- **document styles** for printable content
- **preview shell styles** for on-screen page visualization
- **small orchestration script** for Paged.js lifecycle and print trigger

### 4. Keep shared data unchanged

Do not move CV content out of `src/data/cv.ts`.

The migration should only change how the content is rendered and paginated.

This preserves the existing coupling between:

- website CV
- print CV
- German and English variants

---

## Recommended phases

## Phase 0 — Define success criteria

Before writing code, agree on what “good enough to switch” means.

Suggested acceptance criteria:

- all current print routes still exist in both locales
- no page overflow in default A4 print
- project cards do not split in obviously bad places
- headings are not orphaned at the bottom of a page
- print output remains ink-friendly
- browser “Save as PDF” output is stable enough for real use
- future edits in `src/data/cv.ts` require little or no manual page rebucketing

---

## Phase 1 — Add a parallel prototype renderer

### Add a new prototype component

Suggested file:

- `src/components/CVPrintPaged.astro`

This component should:

- use the same `locale` prop shape as `CVPrint.astro`
- read the same `getLocalizedCvContent(locale)` data
- render one continuous document instead of fixed pages

### Add temporary prototype routes

Suggested temporary routes:

- `src/pages/de/lebenslauf/drucken-paged.astro`
- `src/pages/en/cv/print-paged.astro`

These should live side-by-side with the current routes so you can compare outputs visually.

### Keep the old implementation untouched during this phase

Do not edit the current `CVPrint.astro` yet beyond maybe extracting shared presentational subcomponents if useful.

---

## Phase 2 — Install and bootstrap Paged.js

### Dependency

Add Paged.js as a client-side dependency.

### Integration approach

Use a **client-side enhancement** approach:

- Astro renders the continuous print document HTML
- a small client script loads/runs Paged.js
- once pagination is complete, the page becomes print-ready

### Important implementation detail

Paged.js runs in the browser and paginates after render.

That means the new print route should have a small readiness lifecycle such as:

1. page loads
2. fonts become ready
3. Paged.js paginates content
4. optional “ready” state is set on `document.documentElement`
5. print/download action becomes available or auto-print may run

### Do not auto-print before pagination is complete

The current implementation already handles delayed print triggering.

Keep that concept, but change the readiness signal from “our custom mode is set” to “Paged.js has finished laying out pages”.

---

## Phase 3 — Restructure markup for flow layout

This is the most important architectural change.

### Hero/profile section

Render this as normal flowing document content.

Allow CSS to keep important grouped blocks together using:

- `break-inside: avoid`
- grouped wrappers for portrait + intro + meta where necessary

### Facts and links

Render as regular sections, not page-specific cards.

You can still preserve the visual design language, but the structure should not assume a specific page number.

### Skills

Today skills are manually grouped into page arrays.

In the Paged.js version:

- render all skill categories in order
- let CSS multi-column or grid layout handle dense presentation if needed
- prevent individual skill cards from splitting badly with `break-inside: avoid`

### Projects

Today projects are manually bucketed by page.

In the Paged.js version:

- render all projects in chronological order
- treat each project as a flow item
- try to keep each project card together first
- if some large projects cannot fit on one page, allow controlled internal splitting only in well-defined areas

### Strong recommendation for projects

Split project structure internally into semantic sub-blocks:

- project header
- summary
- highlights
- technical context / stack

This gives you more control if a full card cannot remain intact.

For example:

- keep header with at least first summary paragraph
- keep highlights list together if possible
- allow stack section to move if necessary

This is much better than either:

- forcing every card to stay whole at all costs, or
- letting pages split anywhere randomly

---

## Phase 4 — Build print CSS around paged-media rules

### Keep

- `@page { size: A4; ... }`
- print color adjustment rules
- print palette variables
- typography tuned for paper

### Rework

The following should be reconsidered because they are strongly tied to manual page wrappers:

- `.cv-print-stack`
- `.cv-print-page`
- explicit fixed page heights in preview mode
- overflow warning badges based on manual page boxes

### New CSS layers to introduce

#### A. Document layer

Styles for the flowing content itself:

- typography
- spacing
- cards
- borders
- lists
- project structure

#### B. Paged output layer

Styles specific to paginated output:

- page margins
- running headers/footers if desired later
- page box backgrounds
- page spacing for preview mode

#### C. Preview shell layer

Styles only for on-screen preview of the paginated pages:

- page shadow
- page gap
- centered page stack
- optional debug outlines

### Favor simple break rules first

Start with a small set:

- `break-inside: avoid` on cards and important clusters
- `break-after` on major sections only if truly needed
- `break-before` for high-level sections only if readability demands it

Avoid over-constraining the layout too early.

---

## Phase 5 — Rebuild print/download orchestration

The current component contains a fairly large inline script for:

- print mode state
- download mode state
- overflow checks
- auto-print
- before/after print cleanup

The Paged.js version should simplify this.

### New orchestration responsibilities

Keep only:

- detect preview mode vs print trigger mode
- wait for fonts
- wait for Paged.js pagination
- set a “ready” attribute/class
- trigger `window.print()` only after layout is ready

### Likely removable logic

If Paged.js works well, you can likely remove:

- manual overflow measurement
- manual per-page overflow state attributes
- warning badges like `data-cv-overflow`
- custom double-`requestAnimationFrame` overflow sync loops

That would be one of the biggest maintainability wins.

---

## Phase 6 — Design parity pass

Once pagination works, do a dedicated design pass.

### Goal

Preserve the current visual identity where it still makes sense:

- dossier-like panels
- serif headings
- technical metadata styling
- subtle separators
- ink-friendly print palette

### Expect some simplification

Some current effects were designed around hand-shaped page cards.

In paged flow, simplify if needed:

- overly rigid card heights
- page-specific tuning
- decorative structures that fight automatic page breaking

Print quality and maintainability should win over pixel-perfect parity with the manual layout.

---

## Phase 7 — Validation and comparison

Before switching routes, compare both systems.

### Compare in both locales

- German
- English

### Compare on realistic outputs

- browser print preview
- Save as PDF output
- at least one Chromium-based browser
- ideally Safari too, since print behavior can differ

### Validation checklist

Check:

- total page count
- awkward splits
- heading widows/orphans
- image scaling
- link rendering
- project card consistency
- skill section density
- final readability on paper/PDF

### Strong recommendation

Add visual regression coverage for the print routes once the Paged.js version is stable enough.

This repo already has a visual-regression ADR in `meta/adr/visual-regress-testing.md`; print-preview screenshots would be a good follow-up.

---

## Phase 8 — Switch routes and clean up

Once the Paged.js renderer is accepted:

### Route switch

Update:

- `src/pages/de/lebenslauf/drucken.astro`
- `src/pages/en/cv/print.astro`

to render the new Paged.js-based component.

### Then clean up

Remove or archive:

- the old manual-page component
- manual pagination arrays
- overflow-debug scripts
- page-bucket-specific CSS that no longer applies

If you want a short safety window, keep the old version in a legacy file temporarily, e.g.:

- `src/components/CVPrintLegacy.astro`

Then remove it once confidence is high.

---

## Suggested file plan

## New files

Suggested additions:

- `src/components/CVPrintPaged.astro`
- `src/pages/de/lebenslauf/drucken-paged.astro`
- `src/pages/en/cv/print-paged.astro`
- optional: `src/components/cv/PrintProjectEntry.astro`
- optional: `src/components/cv/PrintSkillSection.astro`
- optional: `src/scripts/cv-print-paged.ts`

## Existing files likely to change later

- `src/pages/de/lebenslauf/drucken.astro`
- `src/pages/en/cv/print.astro`
- possibly `src/layouts/Layout.astro` if preview/body attributes need simplification

## Existing files to keep as-is initially

- `src/data/cv.ts`
- `src/components/CVIntro.astro`

---

## Detailed implementation advice

## 1. Do not force page wrappers in Astro anymore

This is the main migration rule.

If the new renderer still produces one `<article>` per page in Astro, the migration will not gain much.

Let Paged.js create pages from a flowing document.

## 2. Keep groups together, not pages together

The mental model should become:

- keep this block together
- keep this heading with its first content
- avoid breaking inside this card if possible

not:

- project 1 and 2 belong to page 5
- project 3 belongs to page 6

## 3. Be realistic about large projects

Some project entries may simply be too large to fit on one page cleanly.

For those, define acceptable split points.

For example:

- avoid splitting inside the header/meta block
- allow split between summary and stack
- avoid splitting individual short lists

## 4. Keep print preview and print output related but not identical

The preview route should visually show pages on screen.

But do not overload the print document markup with too much preview-only structure.

Prefer preview-only CSS around the paginated pages generated by Paged.js.

## 5. Fonts must be ready before pagination

Because line wrapping affects pagination, font readiness is critical.

If pagination runs before fonts settle, page breaks will drift.

## 6. Avoid too much grid rigidity inside paged sections

Rigid multi-column layouts can fight page breaking.

Use them carefully for:

- skill sections
- project meta layouts
- fact lists

If a grid causes bad splits, consider a simpler print-only layout.

---

## Risks and caveats

## 1. Browser support differences

Paged.js depends on browser behavior.

Expect some variation across engines, especially around:

- print preview timing
- CSS paged-media details
- break handling

## 2. Existing visual motifs may need simplification

Highly art-directed border effects can become fragile in flowing paged layout.

Some current dossier effects may need print-specific simplification.

## 3. Auto-print timing can become flaky if tied too early

Print must only happen after:

- fonts are loaded
- pagination is complete
- preview styles are applied

## 4. Debugging page breaks can still take time

Paged.js reduces custom pagination work, but it does not eliminate layout tuning.

You will still need to iterate on:

- break rules
- spacing
- section grouping
- print typography density

---

## Rollback strategy

If the prototype reveals major problems, do not switch the live print routes.

Instead:

- keep `CVPrint.astro` as the production renderer
- keep the prototype route for experimentation
- document the blockers

Typical blockers that would justify delaying migration:

- unstable pagination between browsers
- unacceptable project-card splitting
- excessive client-side delay before print readiness
- too much redesign needed to preserve document quality

---

## Recommended order of execution

1. create `CVPrintPaged.astro`
2. create temporary paged prototype routes
3. install and wire Paged.js
4. render one continuous document
5. get basic A4 pagination working
6. add print trigger readiness lifecycle
7. tune break rules for hero, skills, and projects
8. do design parity pass
9. compare old vs new output in both locales
10. switch live routes
11. delete manual pagination logic

---

## Final recommendation

For this repo, the best migration path is:

- **prototype first**
- **continuous document markup**
- **Paged.js for pagination**
- **CSS break rules for grouping**
- **only switch production routes after side-by-side validation**

That gives you the main benefit of Paged.js:

**future CV content changes should mostly flow automatically, instead of forcing manual page rebucketing and overflow debugging.**
