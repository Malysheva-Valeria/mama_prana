/**
 * Завантажує брендові шрифти локально в `public/fonts/`
 * і генерує `src/styles/fonts.css`.
 *
 * Шрифти НЕ тягнуться з CDN у рантаймі: концепція вимагає незалежності
 * від зовнішніх сервісів, а локальні файли ще й прибирають зайвий
 * DNS+TLS раунд-тріп на першому рендері.
 *
 * Запуск:  npm run fonts
 * Робити це треба один раз; результат комітиться в репозиторій.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = resolve(root, 'public/fonts');
const cssOut = resolve(root, 'src/styles/fonts.css');

// Google Fonts віддає woff2 лише сучасним браузерам — прикидаємось Chrome
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

/** Нам потрібні латиниця та кирилиця — сайт двомовний */
const WANTED_SUBSETS = new Set(['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']);

const FAMILIES = [
  // Заголовки: висококонтрастна елегантна серифна
  { name: 'Cormorant Garamond', slug: 'cormorant', query: 'ital,wght@0,300;0,400;0,500;1,400' },
  // Основний текст: спокійна серифна
  { name: 'EB Garamond', slug: 'ebgaramond', query: 'ital,wght@0,400;1,400' },
  // Лейбли: геометричний сан-серіф під широке розведення капсом
  { name: 'Montserrat', slug: 'montserrat', query: 'wght@300;400' },
];

async function fetchCss(family) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family.name).replace(
    /%20/g,
    '+',
  )}:${family.query}&display=swap`;

  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${family.name}: HTTP ${res.status}`);
  return res.text();
}

/** Розбирає CSS Google Fonts на блоки @font-face із міткою підмножини */
function parseFaces(css) {
  const faces = [];
  // Кожному @font-face передує коментар з назвою підмножини: /* cyrillic */
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g;

  for (const [, subset, body] of css.matchAll(re)) {
    const pick = (prop) => body.match(new RegExp(`${prop}:\\s*([^;]+);`))?.[1]?.trim();
    const url = body.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    if (!url) continue;

    faces.push({
      subset,
      url,
      style: pick('font-style') ?? 'normal',
      weight: pick('font-weight') ?? '400',
      unicodeRange: pick('unicode-range'),
    });
  }
  return faces;
}

await mkdir(fontsDir, { recursive: true });

const blocks = [];
let downloaded = 0;

for (const family of FAMILIES) {
  const faces = parseFaces(await fetchCss(family)).filter((f) => WANTED_SUBSETS.has(f.subset));

  for (const face of faces) {
    const ital = face.style === 'italic' ? 'i' : '';
    const file = `${family.slug}-${face.weight}${ital}-${face.subset}.woff2`;

    const res = await fetch(face.url, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`${file}: HTTP ${res.status}`);
    await writeFile(resolve(fontsDir, file), Buffer.from(await res.arrayBuffer()));
    downloaded += 1;

    blocks.push(
      [
        '@font-face {',
        `  font-family: '${family.name}';`,
        `  font-style: ${face.style};`,
        `  font-weight: ${face.weight};`,
        '  font-display: swap;',
        `  src: url('/fonts/${file}') format('woff2');`,
        face.unicodeRange ? `  unicode-range: ${face.unicodeRange};` : null,
        '}',
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  console.log(`${family.name}: ${faces.length} накреслень`);
}

const header = [
  '/*',
  ' * Згенеровано автоматично: npm run fonts',
  ' * Не редагувати вручну — правити scripts/fetch-fonts.mjs.',
  ' */',
  '',
].join('\n');

await writeFile(cssOut, `${header}${blocks.join('\n\n')}\n`);
console.log(`\nЗавантажено ${downloaded} файлів → public/fonts/`);
console.log(`Згенеровано ${cssOut.replace(root + '/', '')}`);
