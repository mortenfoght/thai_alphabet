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

## 2026-07-20 17:30 WAT | SEO: real URLs, prerendering, internal links

**What:** Made the About Thailand knowledge base actually indexable. The prose
was already keyword-first; the blocker was that the whole app was one URL with
no per-page metadata. Mort chose (1) keep prose + add SEO layer, (2) real URLs
+ prerendered HTML.

- **Real URLs** for the knowledge base only: `/about-thailand`,
  `/about-thailand/<category>`, `/about-thailand/<category>/<slug>`
  (`src/routes.js`, single source of truth for viewId↔path + SEO metadata).
- **State-based routing upgraded to History API** in App.jsx: `navigate()`
  pushes real URLs, popstate syncs, `applySeo()` updates title/meta/canonical/
  JSON-LD on every nav.
- **Build-time prerendering**: `npm run build` now runs client build →
  `vite build --ssr src/entry-server.jsx` → `node scripts/prerender.mjs`, which
  renders 34 routes (home + hub + 5 categories + 27 articles) to static HTML
  with full `<head>` + baked content, and emits sitemap.xml + robots.txt.
  `hydrateRoot` for prerendered pages, `createRoot` for SPA-fallback pages.
- **Internal links**: curated high-precision phrase→article map
  (`src/internalLinks.js`); Markdown links the first occurrence of each target
  in a body as a real same-site `<a href>` with client-side nav; each article
  also gets a "More in <Category>" related list.
- `base` switched from `./` to `/` (nested URLs need root-absolute assets;
  drops the unused GitHub Pages /thai_alphabet/ subpath).

**Key SEO-safety decision:** the alphabet tools were deliberately NOT given
their own URLs (they stay at `/`). The host serves the prerendered home page as
the SPA fallback for any unknown path, so `pathToViewId` resolves every
unrecognised path to `home` — guaranteeing the fallback markup always matches
what the client renders (no hydration mismatches). Verified: all 34 real routes
hydrate with zero console errors; internal links, back/forward, and the tools
all work.

**Post-deploy check required:** confirm the live host serves the prerendered
nested `index.html` at the clean (no-slash) article URL rather than the SPA
fallback — this is what makes per-article SEO actually work.

**Decided by:** Mort (scope + approach), Alfred (implementation), pending Louie QA.

## 2026-07-20 18:15 WAT | Fix: committed wrangler.jsonc so the deploy stops rebuilding

**What:** The SEO deploy failed — not in the build (34 pages prerendered fine),
but in the deploy step. With no committed wrangler config, `npx wrangler deploy`
auto-detected a "Vite framework" project and RE-RAN `npm run build` with
Cloudflare's Vite plugin injected, which changed the SSR sub-build output to a
hashed `dist-ssr/assets/entry-server-<hash>.js`, so `scripts/prerender.mjs`
crashed with ERR_MODULE_NOT_FOUND.

**Fix:**
- Added `wrangler.jsonc` — a static-assets Worker (name "learnthai",
  `assets.directory: "./dist"`, `not_found_handling: "single-page-application"`).
  A committed config stops the framework auto-config + rebuild; wrangler just
  uploads the already-built `dist/`. Validated with `wrangler deploy --dry-run`
  (reads 74 assets, no rebuild).
- Hardened `scripts/prerender.mjs` to locate the SSR entry by scanning
  `dist-ssr` for `entry-server*.js` (defensive against hashed names).

**Serving:** Workers assets `html_handling` defaults to auto-trailing-slash, so
prerendered nested `*/index.html` are served at clean no-slash URLs; unknown
paths fall back to the SPA shell — same as before, now with baked per-article
SEO. Confirms the post-deploy check.

**Decided by:** Alfred, Louie QA PASS.
