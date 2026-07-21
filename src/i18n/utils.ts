import { content, defaultLang, languages, type Lang, type SiteContent } from './content';

/** Звужує `Astro.currentLocale` (string | undefined) до нашого типу мови. */
export function resolveLang(locale: string | undefined): Lang {
  return locale !== undefined && locale in languages ? (locale as Lang) : defaultLang;
}

/** Контент для конкретної мови. */
export function useContent(locale: string | undefined): { lang: Lang; t: SiteContent } {
  const lang = resolveLang(locale);
  return { lang, t: content[lang] };
}

/**
 * Будує шлях з урахуванням мови.
 * `localizePath('/', 'uk')` → `/`, `localizePath('/', 'en')` → `/en/`
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const suffix = clean === '' ? '/' : `/${clean}`;
  return `${prefix}${suffix}`;
}

/** Усі мови, крім поточної — для перемикача. */
export function otherLangs(current: Lang): Lang[] {
  return (Object.keys(languages) as Lang[]).filter((l) => l !== current);
}

/** Підстановка у шаблон вигляду `Перемкнути на {lang}`. */
export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
