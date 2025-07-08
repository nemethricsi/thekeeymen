'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { Fragment } from 'react';

export const LocaleSwitcher = () => {
  const { i18n, currentLocale, redirectedPathname } = useLocaleSwitcher();

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((locale) => (
        <Fragment key={locale}>
          <Link
            href={redirectedPathname(locale)}
            className={cn(
              'text-white',
              locale === currentLocale && 'underline',
            )}
          >
            {locale}
          </Link>
          <div className="rounded-full bg-white [&:not(:last-child)]:h-4 [&:not(:last-child)]:w-px" />
        </Fragment>
      ))}
    </div>
  );
};
