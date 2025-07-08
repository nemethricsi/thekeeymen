import { getLocaleFromPathname } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { type Locale, i18n } from '@/i18n-config';

export const useLocaleSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const isHomePage = i18n.locales
    .map((locale) => `/${locale}`)
    .includes(pathname);

  return { currentLocale, redirectedPathname, i18n, isHomePage };
};
