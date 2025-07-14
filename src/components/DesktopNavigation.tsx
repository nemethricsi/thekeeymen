'use client';

import { ProcessedMenuItem } from '@/types';
import { LocalizedLink } from './LocalizedLink';

export const DesktopNavigation = ({
  navigation,
}: {
  navigation: ProcessedMenuItem[];
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-11 pb-8 font-serif text-2xl font-bold tracking-wider uppercase">
      {navigation.map(({ href, label }) => (
        <LocalizedLink
          key={href}
          href={href}
          className="group relative transition-opacity"
        >
          <span>{label}</span>
          <span
            className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-200 group-hover:w-full"
            aria-hidden="true"
          />
        </LocalizedLink>
      ))}
    </div>
  );
};
