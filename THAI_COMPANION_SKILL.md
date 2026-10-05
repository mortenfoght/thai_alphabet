# $thai companion — site integration notes

This is **not** the skill definition. The `$thai` skill itself (identity,
personality, learner-state rules, learning behaviour, the 8 modes, session
memory) is authored and iterated by Mort in ChatGPT — that's the source of
truth, and it stays there. This file tracks only what learnthai.io's
backend will eventually need to support once the companion is ported here,
per build-order item #1 in the
[competitive brief](https://claude.ai/code/artifact/c3bd8017-d315-4ed0-9780-e5bb00147e0a).

## What the site needs to provide

### 1. A backend proxy for the OpenAI key
No backend exists in this repo today — it's a static Workers-assets site.
The key can never be client-side (standing security rule), so this means
standing up a real Worker route or separate service that calls OpenAI on
the site's behalf.

### 2. A way to route the 8 modes
`$thai chat / lesson / review / vocab / roleplay / correct / translate /
test me` need to arrive at the backend as distinct, selectable contexts —
the site picks/forwards the right one, it doesn't reimplement the
pedagogy behind it.

### 3. A learner-state store
The companion needs persistence across sessions, which a ChatGPT skill
alone can't reliably give it. The site backend will need a table for
whatever shape the state actually takes — expected to cover at least:
level, vocabulary status per word, weak words, recurring grammar mistakes,
pronunciation issues, topics practiced, and speaking-style preference
(e.g. ผม/ครับ vs. ฉัน/ค่ะ vs. neutral). **Confirm the exact field shape
against the live ChatGPT skill before building the schema** — this repo
doesn't define it, it just needs to store whatever Mort hands over.

### 4. A session-memory write/read path
End-of-session updates (what's known now, what needs review, what should
resurface later) need to be written back to the learner-state store and
read back in at the start of the learner's next session.

## Open questions before any of this gets built
1. What the ChatGPT skill mechanically *is* — Custom GPT instructions vs.
   Assistants API vs. a plain system prompt — determines what's portable
   as-is vs. needs rebuilding against a new API.
2. Where the OpenAI key/proxy should live (new Worker route vs. a separate
   service).
3. UI scope — chat widget everywhere vs. a dedicated "Companion" page,
   voice or text-only.

## Explicitly out of scope here
Rewriting, duplicating, or second-guessing the skill's identity,
personality, or pedagogical rules. That work happens in ChatGPT, not in
this repo.
