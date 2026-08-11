# mycology-calc

React + Vite app that builds to a single self-contained `dist/index.html` (via `vite-plugin-singlefile`) — no separate JS/CSS assets, so it can be shared or hosted as one file.

## Structure

- `src/data/recipes.js` — numeric formulas for substrate, liquid culture, and agar recipes (`calc(V)` functions). Treat these as load-bearing; don't alter a formula without being asked.
- `src/data/i18n.js` — full English (`en`) and Slovak (`sk`) translations for UI strings and recipe text.
- `src/components/*` — tab UI, recipe dropdowns, results tables, step lists.
- `src/App.jsx` — top-level state (active tab, language, form inputs), live recalculation via `useMemo`.
- `dist/` — build output (gitignored, not committed). `.github/workflows/pages.yml` runs `npm run build` and deploys `dist/` to GitHub Pages automatically on every push to `main`. Don't build or commit `dist/` locally — CI is the source of truth for the deployed artifact.

## Required workflow: push after every feature/fix

After implementing and committing a feature or fix, push the commit(s) to the remote (`git push`) right away — don't leave finished work sitting unpushed locally.
