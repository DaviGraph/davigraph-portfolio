## Goal

Replace the nav logo with just the red "D" mark (no plate), and refine typography + spacing across all sections to a "techy & precise" feel that matches the logo's confident, engineered brand energy.

## 1. Logo swap

- Upload `user-uploads://10970-removebg-preview.png` to Lovable Assets as `davi-graph-mark.png` (the D-only crop; we'll use CSS `object-position` + fixed width to show only the D from the full lockup, OR crop the D out at upload time and store just the mark). Preferred: crop to just the D via an intermediate edit, then upload — cleaner and lighter.
- Replace the nav `<img>` in `src/routes/index.tsx`:
  - No white background plate, no padding, no rounded box.
  - Render at ~28–32px tall, sits directly on the dark background.
  - `alt="Davi Graph"`.
- Update favicon in `src/routes/__root.tsx` to point to the new D mark asset (copied into `public/favicon.png`); remove the old `davi-graph-logo.jpg` asset pointer.

## 2. Typography refinements (techy & precise)

In `src/styles.css` and `src/routes/index.tsx`:

- **Add JetBrains Mono** as `--font-mono` (loaded via `<link>` in `__root.tsx`). Used for metadata: eyebrows, status pills, stat labels, project index numbers, footer.
- **Headings (Syne)**: tighten tracking further (`-0.03em` on h1/h2, `-0.02em` on h3). Drop hero size one step on desktop (`text-7xl` instead of `text-8xl`) — precision over spectacle. Keep bold weight.
- **Body (Plus Jakarta)**: bump base line-height to 1.7 for long-form paragraphs; keep 1.5 for UI.
- **Micro-labels**: all eyebrows, status pills, stat labels, and tag chips switch to JetBrains Mono, uppercase, `tracking-[0.14em]`, size `text-[10px]`–`text-[11px]`. Feels engineered.
- **Numeric accents**: prefix each section header with a mono index (`01 / WORK`, `02 / ABOUT`, `03 / STACK`, `04 / CONTACT`) in the eyebrow slot. Prefix each project card with its index (`01`, `02`…) top-left in mono.

## 3. Spacing refinements

- **Grid rhythm**: standardize vertical section spacing to a single scale — `pt-24 md:pt-36` (down from `pt-32 md:pt-48`). Tighter, more deliberate.
- **Container**: narrow max width from `max-w-6xl` to `max-w-5xl` for more precise line lengths.
- **Card padding**: unify to `p-6 md:p-8` across projects/about/stack/contact cards (currently mixed `p-8 md:p-12`).
- **Card radius**: drop from `rounded-3xl` to `rounded-2xl` — snappier, less soft.
- **Gaps**: bento grid gap `gap-3` (from `gap-4`); stat cards gap `gap-3`.
- **Borders**: lift border opacity slightly (`--border` from 8% → 12%) so the grid reads as a precise wireframe rather than a floaty blur.
- **Hero**: reduce top padding (`pt-12 md:pt-20`), tighten CTA row spacing.

## 4. Small polish

- Replace the `Sparkles` icon in the hero eyebrow with a mono `[ FOUNDER — DAVI GRAPH ]` label (bracketed, no icon) — matches the techy vibe.
- Footer: mono copyright + location.
- Status pills stay colored but switch to mono type.

## Files touched

- `src/routes/index.tsx` — nav logo, section headers with indices, mono micro-labels, spacing/radius/gap updates, hero eyebrow, footer.
- `src/styles.css` — add `--font-mono`, tighten heading tracking, bump body line-height, adjust `--border`.
- `src/routes/__root.tsx` — add JetBrains Mono `<link>`, update favicon href.
- `src/assets/davi-graph-mark.png.asset.json` — new asset pointer (D-only).
- `src/assets/davi-graph-logo.jpg.asset.json` — deleted via `lovable-assets delete`.
- `public/favicon.png` — replaced with the D mark.

## Out of scope

- No changes to sections, copy, projects data, or contact info.
- No color palette changes beyond the border opacity nudge.
