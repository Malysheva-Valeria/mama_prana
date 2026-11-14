import { content, defaultLang, languages, type Lang, type SiteContent } from './content';

/** Narrows `Astro.currentLocale` to our Lang. */
export function resolveLang(locale: string | undefined): Lang {
  return locale !== undefined && locale in languages ? (locale as Lang) : defaultLang;
}

/** Content for a locale. */
export function useContent(locale: string | undefined): { lang: Lang; t: SiteContent } {
  const lang = resolveLang(locale);
  return { lang, t: content[lang] };
}

/** Prefixes a root-relative path with the configured `base`: `withBase('/x')` → `/mama_prana/x` */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** Locale-aware path, base included: `localizePath('/', 'en')` → `/en/` */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const suffix = clean === '' ? '/' : `/${clean}`;
  return withBase(`${prefix}${suffix}`);
}

/** All locales except the current one. */
export function otherLangs(current: Lang): Lang[] {
  return (Object.keys(languages) as Lang[]).filter((l) => l !== current);
}

/** Fills `{lang}` in a template. */
export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
