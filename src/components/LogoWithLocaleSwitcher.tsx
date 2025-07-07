'use client';

import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const LogoWithLocaleSwitcher = () => {
  const { i18n, currentLocale, redirectedPathname } = useLocaleSwitcher();

  return (
    <div className="relative">
      <div className="absolute -top-8 right-0 flex gap-2">
        {i18n.locales.map((locale) => (
          <Link
            key={locale}
            href={redirectedPathname(locale)}
            className={cn(
              'font-medium uppercase underline-offset-4',
              locale === currentLocale && 'border-b-2',
            )}
          >
            {locale}
          </Link>
        ))}
      </div>
      <Image
        src="/images/svg/keeymen_logo.svg"
        alt="The Keeymen logo"
        width={800}
        height={800}
      />
    </div>
  );
};
