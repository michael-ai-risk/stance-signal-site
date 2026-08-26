# Stance & Signal website

GitHub Pages site for Stance & Signal, built with Next.js (static export) from
`Shared/stance-signal` in the AI_WORKSPACE repo and published here as static files.

- Single-page homepage implementing Direction 02 (Cultural / Research Studio) from
  the visual direction board: full-bleed dark hero, hand-drawn system trace,
  asymmetric case split, a quiet pause section, and a black stance statement.
- English and Traditional Chinese are both built into the same page, switchable
  with the language toggle in the top nav (no separate `/zh/` routes).
- The deploy workflow publishes the `site/` directory through GitHub Pages.

To rebuild and redeploy:

```bash
cd Shared/stance-signal
BUILD_TARGET=pages npx next build --webpack
cp -r out/. ../stance-signal-site/site/
touch ../stance-signal-site/site/.nojekyll
```

Then commit and push `stance-signal-site/`.
