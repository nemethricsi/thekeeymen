'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n, type Locale } from '@/i18n-config';
import { cn, getLocaleFromPathname } from '@/lib/utils';

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathname(locale)}
          className={cn(locale === currentLocale && 'underline')}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
};
