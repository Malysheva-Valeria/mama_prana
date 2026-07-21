/**
 * Увесь текст сайту живе тут — у компонентах немає жодного рядка копірайту.
 *
 * `SiteContent` описує форму контенту, а `content` типізовано як
 * `Record<Lang, SiteContent>`, тому забутий переклад — це помилка компіляції,
 * а не порожнє місце на живому сайті.
 */

export const languages = {
  uk: 'Українська',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'uk';

/** Короткі підписи для перемикача мов */
export const languageShort: Record<Lang, string> = {
  uk: 'UA',
  en: 'EN',
};

export interface PracticeItem {
  /** Використовується як id секції та якір навігації */
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export interface ScheduleCard {
  name: string;
  duration: string;
  level: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    philosophy: string;
    practices: string;
    space: string;
    schedule: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    mantra: string;
    scrollHint: string;
  };
  philosophy: {
    eyebrow: string;
    statement: string;
    body: string[];
    imageCaption: string;
  };
  practices: {
    eyebrow: string;
    title: string;
    items: PracticeItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    captions: string[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    note: string;
    cards: ScheduleCard[];
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    address: string;
    email: string;
    phone: string;
    social: SocialLink[];
    rights: string;
  };
  a11y: {
    skipToContent: string;
    languageSwitcher: string;
    /** Шаблон з `{lang}` — підставляється назва мови */
    switchTo: string;
  };
}

const uk: SiteContent = {
  meta: {
    title: 'mama prana — студія йоги',
    description:
      'Студія йоги mama prana: практики для тіла, face yoga та ретрити. Дихай. Рухайся. Повертайся до себе.',
    ogAlt: 'mama prana — студія йоги',
  },
  nav: {
    philosophy: 'Філософія',
    practices: 'Напрямки',
    space: 'Простір',
    schedule: 'Розклад',
    contact: 'Запис',
  },
  hero: {
    eyebrow: 'Yoga Studio',
    mantra: 'Дихай. Рухайся. Повертайся до себе.',
    scrollHint: 'Гортайте',
  },
  philosophy: {
    eyebrow: 'Про студію',
    statement: 'Йога — це не про ідеальну позу. Це про повернення до власного дихання.',
    body: [
      'Ми створили простір, де можна сповільнитися. Без змагання, без поспіху, без оцінок — лише ви, килимок і ритм власного тіла.',
      'Кожна практика будується навколо уваги: до дихання, до опори, до того, що тіло вже знає. Ми лише допомагаємо це почути.',
    ],
    imageCaption: 'Простір студії',
  },
  practices: {
    eyebrow: 'Практики',
    title: 'Три напрямки',
    items: [
      {
        id: 'body',
        name: 'Body',
        tagline: 'Асани та робота з тілом',
        description:
          'Класична практика асан — від sirsasana й sarvangasana до trikonasana. Ми будуємо силу через стабільність, а гнучкість — через терпіння. Групи невеликі, темп — ваш власний.',
      },
      {
        id: 'face',
        name: 'Face Yoga',
        tagline: 'Elevate your beauty with face yoga',
        description:
          'М’язи обличчя теж тримають напругу. Практика поєднує вправи, самомасаж та роботу з диханням — природна альтернатива косметологічним процедурам.',
      },
      {
        id: 'retreats',
        name: 'Retreats',
        tagline: 'Подорож самопізнання',
        description:
          'Кілька днів поза містом, поза розкладом, поза телефоном. Практики зранку й на заході сонця, тиша, проста їжа та достатньо часу, щоб почути себе.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Простір',
    title: 'Місце, де все відбувається',
    captions: [
      'Фасад студії',
      'Головний зал',
      'Ранкова практика',
      'Зона відпочинку',
      'Деталі інтер’єру',
      'Вечірнє світло',
    ],
  },
  schedule: {
    eyebrow: 'Формати',
    title: 'Як можна практикувати',
    note: 'Актуальний розклад на тиждень — у нашому Instagram. Перше заняття завжди пробне.',
    cards: [
      {
        name: 'Групова практика',
        duration: '75 хв',
        level: 'Усі рівні',
        description: 'До восьми людей у залі. Достатньо уваги кожному, достатньо простору кожному.',
      },
      {
        name: 'Індивідуально',
        duration: '60 хв',
        level: 'За запитом',
        description: 'Практика під ваше тіло, ваш стан і вашу мету. Часто — після травм чи паузи.',
      },
      {
        name: 'Face Yoga',
        duration: '45 хв',
        level: 'Без підготовки',
        description: 'Вправи, самомасаж і робота з диханням. Можна групою або наодинці.',
      },
      {
        name: 'Ретрит',
        duration: '2–5 днів',
        level: 'Усі рівні',
        description: 'Виїзна програма кілька разів на рік. Дати анонсуємо заздалегідь.',
      },
    ],
  },
  cta: {
    eyebrow: 'Запис',
    title: 'Перша практика',
    body: 'Напишіть нам — підберемо формат, який підійде саме вам. Килимок і все необхідне у студії вже є.',
    primaryLabel: 'Записатися в Instagram',
    primaryHref: 'https://instagram.com/',
    secondaryLabel: 'Написати в Telegram',
    secondaryHref: 'https://t.me/',
  },
  footer: {
    tagline: 'Дихай. Рухайся. Повертайся до себе.',
    navTitle: 'Навігація',
    contactTitle: 'Контакти',
    address: 'Київ, вул. Прикладна, 1',
    email: 'hello@mamaprana.com.ua',
    phone: '+380 00 000 0000',
    social: [
      { label: 'Instagram', href: 'https://instagram.com/' },
      { label: 'Telegram', href: 'https://t.me/' },
    ],
    rights: 'Усі права захищено',
  },
  a11y: {
    skipToContent: 'Перейти до основного вмісту',
    languageSwitcher: 'Вибір мови',
    switchTo: 'Перемкнути на {lang}',
  },
};

const en: SiteContent = {
  meta: {
    title: 'mama prana — yoga studio',
    description:
      'mama prana yoga studio: body practice, face yoga and retreats. Breathe. Move. Come back to yourself.',
    ogAlt: 'mama prana — yoga studio',
  },
  nav: {
    philosophy: 'Philosophy',
    practices: 'Practices',
    space: 'Space',
    schedule: 'Schedule',
    contact: 'Book',
  },
  hero: {
    eyebrow: 'Yoga Studio',
    mantra: 'Breathe. Move. Come back to yourself.',
    scrollHint: 'Scroll',
  },
  philosophy: {
    eyebrow: 'About',
    statement: 'Yoga is not about the perfect pose. It is about returning to your own breath.',
    body: [
      'We built a space where you are allowed to slow down. No competition, no rush, no judgement — just you, the mat and the rhythm of your own body.',
      'Every practice is built around attention: to the breath, to the ground beneath you, to what the body already knows. We simply help you hear it.',
    ],
    imageCaption: 'Inside the studio',
  },
  practices: {
    eyebrow: 'Practices',
    title: 'Three directions',
    items: [
      {
        id: 'body',
        name: 'Body',
        tagline: 'Asanas and physical practice',
        description:
          'Classical asana practice — from sirsasana and sarvangasana to trikonasana. We build strength through stability and flexibility through patience. Small groups, your own pace.',
      },
      {
        id: 'face',
        name: 'Face Yoga',
        tagline: 'Elevate your beauty with face yoga',
        description:
          'Facial muscles hold tension too. The practice combines exercises, self-massage and breathwork — a natural alternative to cosmetic procedures.',
      },
      {
        id: 'retreats',
        name: 'Retreats',
        tagline: 'A journey of self-discovery',
        description:
          'A few days outside the city, outside the schedule, outside your phone. Practice at sunrise and sunset, silence, simple food and enough time to hear yourself.',
      },
    ],
  },
  gallery: {
    eyebrow: 'Space',
    title: 'Where it all happens',
    captions: [
      'Studio facade',
      'Main hall',
      'Morning practice',
      'Lounge area',
      'Interior details',
      'Evening light',
    ],
  },
  schedule: {
    eyebrow: 'Formats',
    title: 'Ways to practise',
    note: 'The current weekly schedule lives on our Instagram. Your first class is always a trial.',
    cards: [
      {
        name: 'Group practice',
        duration: '75 min',
        level: 'All levels',
        description: 'Up to eight people in the hall. Enough attention for everyone, enough space.',
      },
      {
        name: 'One to one',
        duration: '60 min',
        level: 'On request',
        description:
          'Practice shaped around your body, your state and your goal. Often after injury or a long pause.',
      },
      {
        name: 'Face Yoga',
        duration: '45 min',
        level: 'No experience needed',
        description: 'Exercises, self-massage and breathwork. In a group or one to one.',
      },
      {
        name: 'Retreat',
        duration: '2–5 days',
        level: 'All levels',
        description: 'An away programme a few times a year. Dates are announced in advance.',
      },
    ],
  },
  cta: {
    eyebrow: 'Booking',
    title: 'Your first practice',
    body: 'Write to us and we will find the format that suits you. Mats and everything else are already at the studio.',
    primaryLabel: 'Book via Instagram',
    primaryHref: 'https://instagram.com/',
    secondaryLabel: 'Message on Telegram',
    secondaryHref: 'https://t.me/',
  },
  footer: {
    tagline: 'Breathe. Move. Come back to yourself.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    address: 'Kyiv, 1 Prykladna St.',
    email: 'hello@mamaprana.com.ua',
    phone: '+380 00 000 0000',
    social: [
      { label: 'Instagram', href: 'https://instagram.com/' },
      { label: 'Telegram', href: 'https://t.me/' },
    ],
    rights: 'All rights reserved',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    languageSwitcher: 'Language switcher',
    switchTo: 'Switch to {lang}',
  },
};

export const content: Record<Lang, SiteContent> = { uk, en };
