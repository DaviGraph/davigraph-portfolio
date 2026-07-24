- Portfolio for David Onyekachukwu — Founder, Davi Graph

**Direction:** Dark Midnight Indigo palette (`#0a0a1a` bg, `#4f46e5` accent) · Syne headings + Plus Jakarta Sans body · bento-grid layout · generous whitespace · subtle scroll/hover animations.

### Page structure (single-page, anchor-scrolled)

1. **Hero**
  - Small kicker: "Founder · Davi Graph"
  - Massive Syne name: "David Onyekachukwu"
  - Thesis: "I build and ship software fast — out of , Nigeria."
  - CTAs: `View my work` (indigo filled) · `Get in touch` (ghost with border)
  - Subtle animated grain / indigo glow orb in the background
2. **Projects (bento grid — hero section)**
  - Asymmetric 4-tile bento (mixed sizes, not uniform):
    - **CrossDrop** — large feature tile, LIVE badge, live link, QR/PWA/Pidgin/auto-expire highlights
    - **ElonVest** — medium tile, CLIENT PROJECT badge, Next.js + Alpaca API
    - **StudyPadi** — medium tile, IN PROGRESS badge, NERDC + Claude API
    - **ARIA** — small tile, PROTOTYPE badge, Electron voice assistant
  - Status badges use color-coded pills (LIVE=mint, CLIENT=indigo, IN PROGRESS=amber, PROTOTYPE=muted)
  - Hover: tile lifts, accent border glow
3. **About** — two-column: short bio (CS student, Delta State University, learn-by-shipping, AI-assisted workflow) + a small stat/fact bento (location, year, role)
4. **Stack** — categorized chips in a bento (Frontend / Backend / AI tools / Deployment)
5. **Contact** — big statement ("Open to freelance & remote internships") + bento grid of contact tiles (Email, GitHub, LinkedIn, Phone), each clickable
6. **Footer** — minimal: © 2026 Davi Graph · Abraka, Nigeria

### Technical notes

- Route: rewrite `src/routes/index.tsx` (replace placeholder) with all sections + proper `head()` metadata (title, description, og tags — no og:image).
- Design tokens: update `src/styles.css` — replace light-first tokens with dark-first Midnight Indigo palette in `:root`; add `--accent-indigo`, `--accent-indigo-glow`, indigo gradient token, subtle shadow-glow token.
- Fonts: add Google Fonts `<link>` for Syne (600, 700, 800) + Plus Jakarta Sans (400, 500, 600) in `src/routes/__root.tsx` head; add `--font-display: "Syne"` and `--font-sans: "Plus Jakarta Sans"` in `@theme`.
- Components: build inline within `index.tsx` split into small subcomponents (Hero, ProjectsBento, ProjectCard, About, Stack, Contact, Footer). No shadcn overrides needed beyond semantic tokens.
- Animations: intersection-observer based fade/translate on section enter (small custom hook, no new deps); hover transforms on tiles via Tailwind transitions.
- Icons: use `lucide-react` (already available) sparingly for contact + project status.
- Accessibility: semantic `<section>`, single `<h1>`, `aria-label`s on icon links, focus-visible rings in accent color.

### Out of scope

No backend, no contact form, no CMS — links are `mailto:` / external URLs. No dark-mode toggle (dark only).