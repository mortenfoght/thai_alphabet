# Session Log

## 2026-10-05 07:30 WAT | Competitive brief + $thai companion skill spec
- **Done:**
  - Competitive research on 16 Thai-learning sites/apps, delivered as a
    branded HTML artifact (navy/gold/aqua palette + Frank Ruhl Libre pulled
    from the site's own `App.css`): https://claude.ai/code/artifact/c3bd8017-d315-4ed0-9780-e5bb00147e0a
  - Defined the concrete 5-part `$thai` companion skill spec per Mort's
    structure (identity, learner state, learning behaviour, 8 modes, session
    memory) → `THAI_COMPANION_SKILL.md`. Logged as a decision in
    `DECISIONS.md` (2026-10-05 07:30 WAT entry).
  - No code/repo behaviour changed this session.
- **In progress:** Nothing in flight. The companion is still a ChatGPT
  custom-GPT skill today; porting it to learnthai.io is build-order item #1
  from the competitive brief.
- **Next:** Decide the concrete integration approach for the companion on
  the site (backend proxy design, where the OpenAI key lives, what UI
  surface — widget vs. dedicated page) before writing any code. The spec in
  `THAI_COMPANION_SKILL.md` is the behavioural contract to build against;
  Part 5 (session memory) is the part that specifically needs a real DB,
  not just a prompt.
- **Blockers / open questions:** (1) What the ChatGPT skill currently *is*
  mechanically (Custom GPT instructions vs. Assistants API vs. plain system
  prompt) — determines what's portable as-is vs. needs rebuilding.
  (2) Where the OpenAI key should live (new Worker route vs. separate
  service). (3) UI scope (chat widget everywhere vs. dedicated "Companion"
  page, voice or text-only).
- **Correction mid-session:** First pass at `THAI_COMPANION_SKILL.md` wrongly
  framed it as *the* skill definition. Mort corrected: ChatGPT owns and
  builds the `$thai` skill itself; this repo only tracks site-integration
  requirements (key proxy, mode routing, learner-state schema, session
  handoff). File rewritten accordingly; see `DECISIONS.md` 2026-10-05 13:45
  WAT entry. Do not redefine the skill's pedagogy here in future sessions.
- **Context:**
  - Static React 19 + Vite SPA, deployed as a Cloudflare Workers static-assets site (`wrangler.jsonc`, name `learnthai`), auto-deploys on push to `main` (per memory).
  - Build pipeline: `vite build` (client) → `vite build --ssr src/entry-server.jsx` → `scripts/prerender.mjs` prerenders 34 SEO routes (home, About Thailand hub/categories/27 articles) to static HTML; alphabet tools stay client-only at `/`.
  - No backend/server/Functions directory exists anywhere in the repo — everything is static assets today. Adding ChatGPT means adding a real backend (per global security rule: API keys never client-side).
  - `src/` holds ~45 files: alphabet/number/vowel/classifier/month tables + flashcards + quizzes, Thai short stories, About Thailand knowledge base (markdown-driven), shared `HearButton.jsx` (TTS), state-based router (`routes.js`, History API, `applySeo.js`).
  - Design source material (brand book, screens, UI-improvement PDFs) lives in gitignored `learn thai site/` — not in git history.
  - No `.env` files present in the repo currently.
