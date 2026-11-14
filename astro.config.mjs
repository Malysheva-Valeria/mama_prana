// @ts-check
import sitemap from '@astrojs/sitemap';
import process from 'node:process';
import { defineConfig } from 'astro/config';

/*
 * Static output to `dist/`; `site` feeds canonical URLs and sitemap.
 * SITE_URL / BASE_PATH override them for preview hosts (GitHub Pages serves under /mama_prana/).
 */
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://mamaprana.com.ua',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
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
