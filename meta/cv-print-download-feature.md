# CV page: screen design + download/print modes

## Request

Rework the CV / Lebenslauf page so it no longer falls out of the design language of the main landing page.

## Requirements

- The CV page should visually match the main page design much more closely.
- Add action buttons at the top of the page:
  - **Download**
  - **Print**
- **Download** should:
  - use the main page design language
  - adapt the layout for print/PDF export
  - open the browser flow that can be saved as PDF
- **Print** should:
  - use a white / bright version of the same print layout
  - be more pigment / ink friendly for real paper printing
- Keep the print layout structure broadly similar between Download and Print.
- Keep the on-screen version in the branded site design.

## Implementation notes

- On-screen CV uses a darker, branded shell inspired by the homepage styling.
- Toolbar now exposes separate actions for PDF-style download and ink-friendly printing.
- Print mode is selected before `window.print()` and reset after printing.
- Default print fallback should remain ink-friendly when the page is printed without using the dedicated Download button.

## Files touched

- `src/components/ResumeDocument.astro`
- `src/data/resume.ts`
- `src/pages/de/lebenslauf.astro`
- `src/pages/en/cv.astro`
