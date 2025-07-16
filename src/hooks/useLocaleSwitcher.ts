import { getLocaleFromPathname } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { type Locale, i18n } from '@/i18n-config';
import { useEffect, useState } from 'react';

export const useLocaleSwitcher = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>('');
  const currentLocale = getLocaleFromPathname(pathname);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';

    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');

    return hash ? `${newPath}${hash}` : newPath;
  };

  const isHomePage = i18n.locales
    .map((locale) => `/${locale}`)
    .includes(pathname);

  return { currentLocale, redirectedPathname, i18n, isHomePage };
};
