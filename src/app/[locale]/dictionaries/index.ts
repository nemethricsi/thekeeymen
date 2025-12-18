import 'server-only';

const dictionaries = {
  hu: () => import('./hu.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
