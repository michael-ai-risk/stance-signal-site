import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michael-ai-risk.github.io',
  base: '/stance-signal-site',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
