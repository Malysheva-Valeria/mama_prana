// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/* Static output to `dist/`; `site` feeds canonical URLs and sitemap */
export default defineConfig({
  site: 'https://mamaprana.com.ua',
  output: 'static',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: {
      // uk at root, en under /en
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', en: 'en-US' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
