/** All site copy lives here; a missing translation fails compilation. */

export const languages = {
  uk: 'Українська',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'uk';

/** Short labels for the language switcher */
export const languageShort: Record<Lang, string> = {
  uk: 'UA',
  en: 'EN',
};

export interface PracticeItem {
  /** Section id and nav anchor */
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export interface ScheduleClass {
  time: string;
  name: string;
  /** Shows a "New!" badge */
  isNew?: boolean;
}

export interface ScheduleDay {
  day: string;
  classes: ScheduleClass[];
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
    days: ScheduleDay[];
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
    email?: string;
    phone?: string;
    social: SocialLink[];
    rights: string;
  };
  a11y: {
    skipToContent: string;
    languageSwitcher: string;
    /** Template with `{lang}` */
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
    eyebrow: 'Щотижня',
    title: 'Розклад',
    note: 'Запис обов’язковий.',
    days: [
      {
        day: 'Понеділок',
        classes: [
          { time: '13:30', name: 'Міні-група йоги' },
          { time: '17:00', name: 'Дитяча йога' },
          { time: '18:30', name: 'Вечірня йога' },
        ],
      },
      {
        day: 'Вівторок',
        classes: [
          { time: '09:00', name: 'Ранкова йога' },
          { time: '18:00', name: 'Йога для початківців' },
          { time: '19:30', name: 'Бачата', isNew: true },
        ],
      },
      {
        day: 'Середа',
        classes: [
          { time: '13:30', name: 'Міні-група йоги' },
          { time: '17:00', name: 'Дитяча йога' },
          { time: '18:30', name: 'Вечірня йога' },
        ],
      },
      {
        day: 'Четвер',
        classes: [
          { time: '09:00', name: 'Ранкова йога' },
          { time: '18:00', name: 'Йога для початківців' },
          { time: '19:30', name: 'Бачата', isNew: true },
        ],
      },
      {
        day: 'П’ятниця',
        classes: [
          { time: '13:30', name: 'Міні-група йоги' },
          { time: '17:00', name: 'Дитяча йога' },
          { time: '18:30', name: 'Йога (різні напрямки)' },
        ],
      },
      {
        day: 'Субота',
        classes: [
          { time: '10:00', name: 'Бачата', isNew: true },
          { time: '11:00', name: 'Ранкова йога' },
        ],
      },
    ],
  },
  cta: {
    eyebrow: 'Запис',
    title: 'Перша практика',
    body: 'Напишіть нам — підберемо формат, який підійде саме вам. Килимок і все необхідне у студії вже є.',
    primaryLabel: 'Записатися в Instagram',
    primaryHref: 'https://instagram.com/mamaprana.studio.che',
    secondaryLabel: 'Написати в Telegram',
    secondaryHref: 'https://t.me/Yoga_FaceYoga_Kinesio',
  },
  footer: {
    tagline: 'Дихай. Рухайся. Повертайся до себе.',
    navTitle: 'Навігація',
    contactTitle: 'Контакти',
    address: 'Черкаси, бул. Шевченка 385, БЦ «Депо», 4 поверх, офіс 13',
    social: [
      { label: 'Instagram', href: 'https://instagram.com/mamaprana.studio.che' },
      { label: 'Telegram', href: 'https://t.me/Yoga_FaceYoga_Kinesio' },
      { label: 'Threads', href: 'https://www.threads.com/@mamaprana.studio.che' },
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
    eyebrow: 'Every week',
    title: 'Schedule',
    note: 'Booking is required.',
    days: [
      {
        day: 'Monday',
        classes: [
          { time: '13:30', name: 'Mini-group yoga' },
          { time: '17:00', name: 'Kids yoga' },
          { time: '18:30', name: 'Evening yoga' },
        ],
      },
      {
        day: 'Tuesday',
        classes: [
          { time: '09:00', name: 'Morning yoga' },
          { time: '18:00', name: 'Yoga for beginners' },
          { time: '19:30', name: 'Bachata', isNew: true },
        ],
      },
      {
        day: 'Wednesday',
        classes: [
          { time: '13:30', name: 'Mini-group yoga' },
          { time: '17:00', name: 'Kids yoga' },
          { time: '18:30', name: 'Evening yoga' },
        ],
      },
      {
        day: 'Thursday',
        classes: [
          { time: '09:00', name: 'Morning yoga' },
          { time: '18:00', name: 'Yoga for beginners' },
          { time: '19:30', name: 'Bachata', isNew: true },
        ],
      },
      {
        day: 'Friday',
        classes: [
          { time: '13:30', name: 'Mini-group yoga' },
          { time: '17:00', name: 'Kids yoga' },
          { time: '18:30', name: 'Yoga (various styles)' },
        ],
      },
      {
        day: 'Saturday',
        classes: [
          { time: '10:00', name: 'Bachata', isNew: true },
          { time: '11:00', name: 'Morning yoga' },
        ],
      },
    ],
  },
  cta: {
    eyebrow: 'Booking',
    title: 'Your first practice',
    body: 'Write to us and we will find the format that suits you. Mats and everything else are already at the studio.',
    primaryLabel: 'Book via Instagram',
    primaryHref: 'https://instagram.com/mamaprana.studio.che',
    secondaryLabel: 'Message on Telegram',
    secondaryHref: 'https://t.me/Yoga_FaceYoga_Kinesio',
  },
  footer: {
    tagline: 'Breathe. Move. Come back to yourself.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    address: 'Cherkasy, 385 Shevchenka Blvd, Depo Business Centre, 4th floor, office 13',
    social: [
      { label: 'Instagram', href: 'https://instagram.com/mamaprana.studio.che' },
      { label: 'Telegram', href: 'https://t.me/Yoga_FaceYoga_Kinesio' },
      { label: 'Threads', href: 'https://www.threads.com/@mamaprana.studio.che' },
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
