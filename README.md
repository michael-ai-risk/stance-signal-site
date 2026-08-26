# Stance & Signal website

This repo holds both the live source and the published static site:

- `app/` — Next.js source. Connected to Vercel for live preview/design iteration
  (Vercel builds straight from this folder, Root Directory = `app`).
- `site/` — static export of `app/`, published through GitHub Pages. Only updated
  when a design is confirmed and ready to go out publicly — it does not
  auto-sync with Vercel.

Single-page homepage implementing Direction 02 (Cultural / Research Studio) from
the visual direction board: full-bleed dark hero, hand-drawn system trace,
asymmetric case split, a quiet pause section, and a black stance statement.
English and Traditional Chinese are both built into the same page, switchable
with the language toggle in the top nav (no separate `/zh/` routes).

To rebuild `site/` from `app/` and publish to GitHub Pages:

```bash
cd app
BUILD_TARGET=pages npx next build --webpack
cp -r out/. ../site/
touch ../site/.nojekyll
cd ..
git add app site && git commit -m "..." && git push
```
