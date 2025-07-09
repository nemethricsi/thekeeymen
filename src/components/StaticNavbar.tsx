'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

import { LocalizedLink } from './LocalizedLink';
import { ProcessedMenuItem } from '@/types';
import { LocaleSwitcher } from './LocaleSwitcher';

interface StaticNavbarProps {
  navItems: ProcessedMenuItem[];
}

export const StaticNavbar = ({ navItems }: StaticNavbarProps) => {
  return (
    <header className="fixed top-0 left-0 z-40 hidden h-20 w-full bg-linear-to-b from-[#367084] to-[#367084]/80 drop-shadow-xl drop-shadow-black/20 backdrop-blur-sm sm:flex">
      <div className="container mx-auto flex max-w-5xl flex-row items-center justify-between px-4">
        <LocalizedLink href="/">
          <Image
            src="/svg/keeymen_logo.svg"
            alt="The Keeymen logo"
            width={150}
            height={150}
          />
        </LocalizedLink>
        <div className="flex items-center gap-10">
          <nav className="hidden flex-row items-center gap-10 font-serif uppercase sm:flex">
            {navItems.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                <span>{label}</span>
                <span
                  className="absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-200 group-hover:w-full"
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <LocalizedLink
      href={href}
      className={cn(
        'group relative text-xl font-semibold text-white transition-opacity',
      )}
    >
      {children}
    </LocalizedLink>
  );
};
