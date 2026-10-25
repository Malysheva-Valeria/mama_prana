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

/** Locale-aware path: `localizePath('/', 'en')` → `/en/` */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const suffix = clean === '' ? '/' : `/${clean}`;
  return `${prefix}${suffix}`;
}

/** All locales except the current one. */
export function otherLangs(current: Lang): Lang[] {
  return (Object.keys(languages) as Lang[]).filter((l) => l !== current);
}

/** Fills `{lang}` in a template. */
export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
