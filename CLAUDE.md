# subcalc

React + Vite app that builds to a single self-contained `dist/index.html` (via `vite-plugin-singlefile`) — no separate JS/CSS assets, so it can be shared or hosted as one file.

## Structure

- `src/data/recipes.js` — numeric formulas for substrate, liquid culture, and agar recipes (`calc(V)` functions). Treat these as load-bearing; don't alter a formula without being asked.
- `src/data/i18n.js` — full English (`en`) and Slovak (`sk`) translations for UI strings and recipe text.
- `src/components/*` — tab UI, recipe dropdowns, results tables, step lists.
- `src/App.jsx` — top-level state (active tab, language, form inputs), live recalculation via `useMemo`.
- `dist/index.html` — the built single-file artifact. **This is committed to git** so the app is usable straight from the repo without a build step.

## Required workflow: build before every commit

`dist/index.html` must always reflect the current `src/`. Before creating any git commit that touches `src/`, `index.html`, or config files:

1. Run:
   ```bash
   npm run build
   ```
2. Confirm `dist/index.html` was regenerated (check `git status`/`git diff` shows it changed if source changed).
3. Stage and commit `dist/index.html` together with the source changes in the same commit — never commit source changes with a stale `dist/index.html`.

Do not skip the build step even for small changes — a stale `dist/index.html` defeats the purpose of committing it.
