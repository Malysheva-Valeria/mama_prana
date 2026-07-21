// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/**
 * Сайт статичний: жодного рантайму на сервері, вихід — папка `dist/`,
 * яку можна покласти на будь-який хостинг.
 *
 * `site` використовується для канонічних URL, sitemap та og:url.
 * Поки деплою немає — тримаємо продакшн-домен з концепту.
 */
export default defineConfig({
  site: 'https://mamaprana.com.ua',
  output: 'static',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: {
      // українська живе в корені (/), англійська — під /en
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
