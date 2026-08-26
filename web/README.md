# Stance & Signal — Astro rebuild

Visual direction: **Direction 02 — Cultural / Research Studio** (dark ground, editorial
serif type, a person held small inside light and shadow — not software, not a listing
site, not a corporate advisory template).

## Structure

```
src/
  pages/          index, real-estate, cases, method, start (index is the only page
                  built out in phase 1; the rest are thin stubs so nav links resolve)
  layouts/        BaseLayout.astro
  components/     Navigation, HumanHero, EditorialPause, CaseFragment, FieldNote, Footer
  assets/         human/ abstract/ evidence/ — real photography goes here
  styles/         global.css, typography.css, motion.css
```

## Pending photography

Three photo slots are wired up but unfilled (`Photography pending — …` panels render
in their place, not a CSS-gradient fake). Once real files land in `src/assets/human/`:

1. **Hero** (`HumanHero`, index page) — a small figure crossing a shaft of light in
   an otherwise dark space.
2. **Editorial pause** (`EditorialPause`, index page) — a figure moving behind
   frosted glass, indistinct, in transit.
3. **Case fragment** (`CaseFragment`, index page) — a blurred figure carried through
   an urban corridor, motion dragging the frame.

To wire a file in: drop it in `src/assets/human/`, `import` it in
`src/pages/index.astro`, and pass it as the `image` prop to the matching component.

## Local development

```
npm install
npm run dev       # http://localhost:4321/stance-signal-site/
npm run build      # outputs to dist/
npm run preview
```

## Deploy

`.github/workflows/deploy.yml` builds this app on push to `main` and publishes
`web/dist` to GitHub Pages. `astro.config.mjs` sets `site`/`base` for
`https://michael-ai-risk.github.io/stance-signal-site/`.
