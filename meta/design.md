# Design system / visual identity

This document captures the major design patterns of this project so future changes stay recognizably part of the same site.

It is intentionally practical: use it as a guardrail when adding new pages, components, cards, sections, or variants.

---

## 1. Core brand feeling

The site should feel like:

- **personal, but highly intentional**
- **technical, but warm**
- **editorial / dossier-like**, not generic startup SaaS
- **calm, polished, dark, and glass-adjacent**, without becoming glossy or neon-heavy
- **human-first and credible**, not over-animated or gimmicky

The visual language is a mix of:

- dark emerald dossier surfaces
- subtle grid paper / technical document texture
- serif display typography for major headings
- techno / monospace-adjacent sans typography for UI and metadata
- strong but restrained emerald accents
- rounded surfaces and pill-shaped controls

---

## 2. Color language

### Primary environment

The project lives in a **deep green-black atmosphere**.

Common background base:

- `#02110d`
- layered with dark green overlays and radial emerald glows

The background should usually be built from:

- a dark base fill
- one or two soft radial green highlights
- optional subtle technical grid texture

### Accent colors

Use emerald / mint tones for:

- active states
- small headings / badges / metadata labels
- dashed dividers
- icon emphasis
- CTA gradients

Typical accent family:

- `#a7f3d0`
- `#6ee7b7`
- `#34d399`
- muted emerald alpha borders

### Text colors

Use bright but slightly softened whites / mint-whites:

- major heading: near-white mint
- body: softened mint-white
- metadata: greener accent
- never pure harsh white unless absolutely necessary

### Codemonument color exception

There is an intentional **purple Codemonument accent family** for CodeMonument-specific references. That purple is a special-case identity accent, not a general UI accent.

---

## 3. Typography

Three font roles define the site:

### `Rubik` → base / reading / default UI copy

Use for:

- body default
- general copy where no stronger identity is needed

### `Fraunces` → display / editorial headings

Use for:

- page titles
- section titles
- major card headings

This gives the project its more human, editorial, premium tone.

### `Chakra Petch` → technical UI / metadata / navigation

Use for:

- dock navigation labels
- badges
- kicker labels
- CTA buttons
- support links
- technical metadata on the CV

This font is critical to the “technical dossier” identity.

### `Playwrite` → motto / rare personality accent

Use sparingly for handwritten or personal-emphasis content only.

---

## 4. Shape language

### Corners

The project prefers **rounded geometry** over sharp corners.

Key radii:

- major surfaces: around `22px`
- inner cards: around `14px`
- links / pills / controls: rounded-xl or full pill

### Buttons and nav items

Buttons and navigation controls should usually be:

- pill-shaped
- compact
- dense
- slightly raised on hover

### Avoid

- square boxes
- tiny-radius enterprise UI
- overly soft oversized blob shapes

---

## 5. Surface system

There are two major surface families.

### A. Outer “sheet” / “card” surfaces

Examples:

- home main card
- support card
- CV outer sheet

Characteristics:

- solid outer border
- rounded corners
- subtle internal grid texture
- dark green layered gradient background
- deep shadow
- should feel like a physical dossier / panel placed on a moody background

Shared component:

- `src/components/ui/SurfaceCard.astro`

### B. Inner dossier boxes

Examples:

- CV info panels
- project cards
- some internal card sections

Characteristics:

- not generic bordered rectangles
- top and bottom dashed framing treatment
- framing wraps around rounded corners
- framing fades toward the left/right edges
- subtle inner wash / glow
- should feel like “technical annotation boxes”, not Tailwind demo cards

### C. Recurring “brace frame” motif

This project uses a recurring border treatment that should feel like a pair of **technical braces** rather than a full box outline.

This design element is also referred to as:

- **dashed border braces / dashed border clamp**

This is an important identity element for the CV page and similar dossier-like sections.

#### Core visual intent

The motif should read like:

- a partial frame
- a technical annotation bracket
- a border that **grips the content from two opposite sides**
- more architectural than decorative

It should never feel like:

- a normal rectangle stroke
- a standard card border
- a vignette or glow effect pretending to be structure

#### Border spec

Always use:

- **1px dashed border**
- emerald-tinted line color consistent with the existing dossier border language
- geometry that matches the element type:
  - **brace frames:** rounded corners matching the element’s existing radius
  - **divider clamps:** crisp square 90° turns with **no** corner radius

#### Critical geometry rule for brace frames

The border must be handled in this order:

1. remain **fully visible at the central edge span**
2. stay fully visible while **wrapping around the rounded corner**
3. only **after the corner turn** begin to fade out

This rule is critical.

The fade must **not** eat into the corner itself.
The viewer should clearly see:

- the straight border segment
- the rounded turn
- then the fade

That sequencing is what makes the frame feel like a brace.

#### Variant 1: horizontal brace frame

Use this when the element should be framed from the **top and bottom**.

Behavior:

- draw only the **top** and **bottom** border runs
- let each run wrap slightly down around the left and right corners
- after the rounded corner turn, fade the border toward the side edges
- do **not** complete the full left or right side as a full-height stroke

Visual impression:

- like a top brace and a bottom brace
- ideal for section shells, dossier panels, grouped content blocks, and framed inner sections

#### Variant 2: vertical brace frame

Use this when the element should be framed from the **left and right**.

Behavior:

- draw only the **left** and **right** border runs
- let each run wrap slightly across the top and bottom corners
- after the rounded corner turn, fade the border toward the top and bottom edges
- do **not** complete the full top or bottom side as a full-width stroke

Visual impression:

- like side braces holding the content column in place
- ideal for stacked cards such as responsibilities, outcomes, notes, or highlighted detail blocks inside a larger section

#### Variant 3: horizontal divider clamp

Use this when a section needs a **standalone horizontal divider** that belongs to the same brace language, but does **not** belong to a rounded box.

Behavior:

- draw one readable **horizontal dashed span** as the main divider line
- at the left and right ends, turn the line with a **hard 90° corner** into a short vertical segment
- only **after** that turn, let the open end fade out
- keep the central horizontal span dominant; the turned end segments are supporting structure
- do **not** render it like a generic blunt-ended `hr`

Visual impression:

- like a technical separator that has been cut from the brace system
- more architectural than a plain dashed rule
- quieter than a full framed box, but clearly part of the same dossier language

Good uses:

- between stacked CV subsections
- between grouped metadata rows
- between dense content clusters that need separation without becoming separate cards

#### Variant 4: vertical divider clamp

Use this when a layout needs a **standalone vertical divider** that echoes the brace language, but without any rounded frame corners.

Behavior:

- draw one readable **vertical dashed span** as the main divider line
- at the top and bottom ends, turn the line with a **hard 90° corner** into a short horizontal segment
- only **after** that turn, let the open end fade out
- keep the central vertical span dominant; the turned end segments should stay compact
- do **not** let the cap segments become long enough to read like shelves or tabs

Visual impression:

- like a locator rail with small orthogonal clamps
- useful for separating columns, side-by-side detail groups, or internal dossier zones

Good uses:

- between compact columns
- inside metadata grids
- as a structural separator in denser editorial layouts

#### Geometry rule for divider clamps

These divider variants follow the same visual sequencing as the rounded brace frames, but with **orthogonal precision** instead of corner radius.

The line must be handled in this order:

1. remain fully visible at the main span
2. make a clearly readable **90° turn**
3. only then begin to fade out

The fade must not soften or erase the corner itself.
The corner is what makes the divider read as part of the brace family.

#### Fade behavior

The fade should be:

- subtle and smooth
- symmetrical unless intentional asymmetry is required by composition
- used only on the open ends of the brace or divider clamp

The fade should never:

- start before the corner is fully readable
- overpower the dashed structure
- become so long that the brace looks blurry

### Global open-edge fade rule

A general design rule of this project is:

- whenever a line, border, strip, divider, or framing element ends in open space, the end should usually **fade out** instead of stopping abruptly

This applies beyond the dashed border braces.
It is part of the visual language of the whole site.

#### Why this rule exists

Open-edge fading makes structural lines feel:

- more intentional
- more integrated into the surface
- less like generic CSS borders
- calmer and more technical

Hard stops are acceptable only when a line is intentionally meant to feel mechanical, blunt, or grid-locked.
The default should be the opposite: **lines should dissolve at their open ends**.

#### Where this rule applies

Use fading open ends for example on:

- horizontal dividers
- `hr`-like separators
- partial card frames
- timeline strips
- technical annotation lines
- section separators
- accent rails and locator lines

Example:

- if a section uses an `hr`, the left and right ends should usually fade out instead of terminating as a hard full-width stroke

#### Where this rule does not apply

Do not force fade-outs on:

- closed geometric shapes that are meant to read as complete boxes
- outer solid sheet borders
- controls where sharp edge clarity is more important than atmosphere
- tiny UI details where the fade would only look blurry

#### Implementation rule

Prefer this hierarchy:

1. keep the line or border color itself solid
2. create the fade with a **mask** or a dedicated opacity falloff on the drawing layer
3. preserve the readable core segment before the fade begins

This is important because the project should avoid borders that look like soft gradients.
The structure should stay crisp; only the open end should dissolve.

#### Implementation guidance

When implementing this pattern in CSS:

- prefer pseudo-elements dedicated to the border treatment
- use masking to control the fade rather than lowering the opacity of the entire border uniformly
- keep the main content surface independent from the brace drawing logic
- preserve clean corner radii so the brace remains crisp

#### Usage rule

Use this brace frame motif repeatedly across the page to create rhythm, but apply it with restraint.

Good recurring uses:

- major framed sections
- sub-panels within the CV
- detail cards such as responsibilities / outcomes / highlights
- metadata groupings that need structural emphasis

Avoid using it on every single element.
It should feel like a **deliberate recurring signature**, not like every box received the same border utility.

### D. Timeline Strip

The project timeline cards use a dedicated accent element called the **timeline strip**.

This is not a decorative gradient flourish.
It is a structural marker that visually says:

- this is one entry in a chronology
- this card is anchored in the timeline
- the content is being indexed, not just boxed

#### Core visual intent

The timeline strip should feel like:

- a slim vertical rail
- a technical locator line
- a calm but clear accent that helps the eye scan the project history
- part of the card architecture, not an overlay sticker

It should never feel like:

- a bright glowing progress bar
- a colorful marketing gradient
- a random left border utility
- a generic status indicator from an app dashboard

#### Color and material rule

The timeline strip must use a **solid color**, not a gradient.

Rules:

- use one emerald / mint accent tone only
- no top-to-bottom fade
- no multicolor treatment
- no glow bloom as a substitute for line quality

The strip should be crisp, quiet, and intentional.

#### Geometry rule

The timeline strip should follow the same corner philosophy as the **dashed border braces**.

That means:

- it must not stop abruptly at a sharp angle
- it should **wrap around the corner radius** of the card
- the rounded turn should be clearly visible
- the strip should feel integrated into the card silhouette

In practice, this means the strip is not just a straight left-edge line.
It should include a visible rounded continuation around the top and bottom corners so the accent feels built into the card frame.

#### Form of the strip

The canonical timeline strip is:

- vertical in orientation
- positioned on the leading edge of the project entry card
- narrow and disciplined
- continuous through the main middle run
- gently wrapped around the top and bottom corners

Visual impression:

- like a timeline rail entering the card and hugging its shell
- like a solid accent spine for chronological content

#### Relationship to the card border

The timeline strip is a **separate accent structure** from the card border.

That distinction matters:

- the card itself may still have its own border / frame logic
- the timeline strip is the chronological marker
- it should not visually merge into a full bordered rectangle

Think of it as a highlighted spine attached to the card, not a recolored version of the entire card outline.

#### Implementation guidance

When implementing the timeline strip:

- prefer pseudo-elements or dedicated layered backgrounds so the strip remains independent from the base card surface
- preserve the card radius so the wrapped corners stay clean
- do not approximate the effect with a flat `border-left` only
- do not use a gradient for the strip body
- keep the strip visually stable across screen and print variants unless print clarity requires simplification

#### Styling technique

The implementation technique for the timeline strip is:

- create the card as a normal surface
- add a dedicated `::before` pseudo-element on the card
- draw the strip with `border-left`, `border-top`, and `border-bottom`
- use the card radius on the left corners so the strip visibly wraps around the top-left and bottom-left corners
- use a **mask gradient** on the pseudo-element so the open ends fade smoothly outward while the main run and corner turns remain crisp
- keep the strip color as a single solid accent value

This is important:

- the strip itself stays solid
- only the **visibility mask** fades the open end
- this avoids the strip looking like a gradient fill

#### Reference CSS

Use this CSS pattern as the canonical implementation for the timeline strip:

```css
.resume-surface-project {
  --resume-timeline-strip-color: rgba(110, 231, 183, 0.42);
  --resume-timeline-strip-width: 2px;
  --resume-timeline-strip-wrap: 1.5rem;
  position: relative;
  background: rgba(4, 21, 17, 0.78);
}

.resume-surface-project::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: calc(
    var(--resume-timeline-strip-wrap) + var(--resume-timeline-strip-width)
  );
  border-top: var(--resume-timeline-strip-width) solid
    var(--resume-timeline-strip-color);
  border-bottom: var(--resume-timeline-strip-width) solid
    var(--resume-timeline-strip-color);
  border-left: var(--resume-timeline-strip-width) solid
    var(--resume-timeline-strip-color);
  border-top-left-radius: var(--resume-panel-radius);
  border-bottom-left-radius: var(--resume-panel-radius);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0,
    #000 calc(100% - 0.92rem),
    rgba(0, 0, 0, 0.72) calc(100% - 0.56rem),
    rgba(0, 0, 0, 0.28) calc(100% - 0.18rem),
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    #000 0,
    #000 calc(100% - 0.92rem),
    rgba(0, 0, 0, 0.72) calc(100% - 0.56rem),
    rgba(0, 0, 0, 0.28) calc(100% - 0.18rem),
    transparent 100%
  );
}

@media print {
  .resume-surface-project {
    --resume-timeline-strip-color: var(--resume-print-accent);
  }
}
```

#### Usage guidance

Use the timeline strip on:

- project history cards
- chronological entries
- other timeline-like content where one edge should carry the sequencing accent

Do not use it on:

- generic buttons
- support cards
- unrelated utility panels
- every inset card on the page

It is a specialized recurring motif, not a universal accent line.

### Important border rule

The current design distinction is intentional:

- **outermost major sheet border = solid**
- **inner rounded dossier boxes = dashed top/bottom treatment only**, not a full dashed rectangle

Do not flatten these into identical card borders.

---

## 6. Background treatment

### Page backdrops

The backdrop should usually combine:

- dark green-black base
- radial emerald glow in corners
- optional subtle technical grid overlay

Shared component:

- `src/components/ui/PageBackdrop.astro`

### Where the subtle grid belongs

The subtle page-level grid is appropriate on:

- index / landing pages
- CV main sheet surfaces
- large design moments where the dossier feeling matters

It should remain subtle and never dominate content.

---

## 7. Navigation pattern

Component:

- `src/components/DockNav.astro`

The nav is a **floating glass dock**.

Characteristics:

- sticky near the top
- rounded pill container
- lightly translucent dark green background
- soft border and blur
- icon + uppercase label
- active item gets bright mint gradient fill
- hover should lift very slightly

Language switching belongs inside the same dock as a compact dropdown.

### Navigation tone

The nav should feel:

- compact
- tactile
- slightly futuristic
- but not flashy

Avoid turning it into:

- a plain text navbar
- a giant app sidebar
- a generic website header

---

## 8. Home page structure

Primary implementation:

- `src/components/scratch/Variant5.astro`

This is currently the canonical landing page expression.

### Home composition

The home page is structured like a dossier / profile pass:

1. **hero header with large image**
2. **profile rows** with title, description, and links
3. **resume CTA section**
4. optional verification section (currently hidden)
5. **support CTA section**

### Hero treatment

The hero should combine:

- large photography
- strong display heading
- technical subheadline
- dark overlay for legibility
- a compositional split between copy and image on wider screens

### Profile row treatment

Profile rows are not arbitrary cards. They are structured strips.

Characteristics:

- dashed separators
- title/description on one side
- link list on the other
- links are compact technical rows with icon + label + `open`

---

## 9. Support page pattern

Component:

- `src/components/SupportCard.astro`

Support pages should feel like a **focused branch of the same identity**, not a separate microsite.

Rules:

- reuse the same outer surface language
- same typography stack
- same emerald accent behavior
- same compact technical links
- do not introduce donation-platform branding as the primary visual language

The project brand should remain dominant over third-party destination brands.

---

## 10. CV / resume pattern

Primary implementation:

- `src/components/CVDocument.astro`

The CV is the most explicit form of the site’s dossier identity.

### Core CV principles

- should feel like an extension of the landing page
- should feel denser and more editorial
- should support both screen reading and print/download use
- should preserve brand identity on screen
- should remain highly legible in print mode

### CV page language

Use:

- solid outer sheet border
- subtle grid background inside the main sheet
- dashed dividers
- strong section rhythm
- emphasis panels with soft green wash
- technical metadata styling
- display serif headings

### Print mode rule

Print mode is allowed to simplify decorative effects.

Brand screen styling is important, but print clarity wins when needed.

---

## 11. Motion

Motion should be **subtle and secondary**.

Use for:

- slight lift on hover
- slight icon scale changes
- short entrance motion on home rows
- underline reveals or very restrained emphasis

Avoid:

- large parallax
- long easing flourishes
- attention-grabbing looping animation
- animation as decoration without interaction value

If motion is removed entirely, the UI should still feel complete.

---

## 12. Content styling patterns

### Headings

- large headings: `Fraunces`
- small technical labels / badges: `Chakra Petch`, uppercase, letter-spaced
- balance line breaks where possible

### Body copy

- should be readable and calm
- usually constrained to a reasonable measure (`max-width` / `ch`-based rhythm)
- body is never extremely low contrast

### Metadata

Use technical label styling:

- uppercase
- spaced letters
- smaller size
- emerald accent

### CTAs

CTAs should usually be:

- pill-shaped
- uppercase technical label style
- mint gradient for primary action
- dark translucent fill for secondary action

---

## 13. Reuse and anti-divergence rules

When creating new pages or sections, prefer reuse over ad-hoc styling.

### Reuse these building blocks first

- `PageBackdrop.astro` for page-level atmosphere
- `SurfaceCard.astro` for primary sheet surfaces
- `DockNav.astro` for top navigation
- existing CTA/link patterns from `Variant5` and `SupportCard`

### If two pages share the same visual job

Extract a component instead of copy-pasting classes.

Examples:

- shared shell surfaces
- repeated CTA blocks
- repeated technical list rows
- repeated support/info cards

### Avoid divergence through “just this one page” styling

Do **not** introduce one-off visual systems unless the page is intentionally experimental.

---

## 14. What not to do

Do not drift into:

- generic Tailwind demo aesthetic
- bright blue SaaS UI
- glassmorphism everywhere
- loud neon cyberpunk
- plain corporate résumé template styling
- hyper-minimal white-space-only portfolio design
- overly cute or playful illustration-heavy design

The site should remain:

- dark
- elegant
- technical
- human
- grounded

---

## 15. Canonical reference components

If in doubt, these files define the current identity best:

- `src/components/ui/PageBackdrop.astro`
- `src/components/ui/SurfaceCard.astro`
- `src/components/DockNav.astro`
- `src/components/scratch/Variant5.astro`
- `src/components/SupportCard.astro`
- `src/components/CVDocument.astro`
- `src/css/global.css`

Use those as the baseline before inventing new visual patterns.

---

## 16. Practical decision checklist

Before merging a design change, ask:

1. Does this still feel like the same person/site?
2. Does it preserve the dark emerald dossier identity?
3. Are the typography roles still correct?
4. Are borders/surfaces still following the outer-solid / inner-dossier logic?
5. Is the technical grid texture subtle rather than dominant?
6. Is the motion restrained?
7. Could this be extracted into a shared component to avoid future drift?

If several answers are “no”, the design likely needs to be pulled back toward the established system.
