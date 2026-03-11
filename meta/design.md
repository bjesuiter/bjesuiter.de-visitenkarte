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
