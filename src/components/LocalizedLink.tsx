'use client';

import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import Link from 'next/link';

export const LocalizedLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof Link>) => {
  const { currentLocale } = useLocaleSwitcher();

  return (
    <Link href={`/${currentLocale}${href}`} className={className} {...props}>
      {children}
    </Link>
  );
};
