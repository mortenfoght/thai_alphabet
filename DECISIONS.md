# Decisions

## 2026-07-20 14:00 WAT | About Thailand knowledge base architecture

**What:** Built the full "About Thailand" section — a hub page, 5 category
index pages, and 27 deep-dive articles — as a data-driven content system rather
than 33 hand-written components.

- Article prose lives as markdown under `src/content/thailand/<category>/<slug>.md`,
  loaded at build time via Vite `import.meta.glob(..., { query: '?raw', eager: true })`.
- `src/thailandContent.js` is the single content registry (categories, ordering,
  nav labels, parsed title/description/body) consumed by nav, breadcrumb, and pages.
- `src/Markdown.jsx` is a small dependency-free renderer for the exact markdown
  subset used (## / ### headings, paragraphs, `-` lists, **bold**, *italic*,
  links). Chosen over react-markdown to avoid a dependency + install and to keep
  full control over link safety.
- Routing stays state-based (no router): view ids `about`, `thai-cat:<id>`,
  `thai-art:<slug>` resolved in App.jsx.
- Mega-menu "About Thailand" became grouped (Overview + 5 categories) with
  clickable group headers → category index pages.

**Why:** 27+ articles by hand is unmaintainable; markdown files keep content
editable and let the nav/index pages be generated from the files present.

**Security/safety:** Every external link forced to `target="_blank"
rel="noopener noreferrer"`. Link URLs parsed with paren-balancing so Wikipedia
URLs like `History_of_Thailand_(1932–1973)` render intact. No new dependencies.

**Decided by:** Alfred (architecture), verified in browser, pending Louie QA.
