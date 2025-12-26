'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

import { LocalizedLink } from '@/components/LocalizedLink';
import { ProcessedMenuItem } from '@/types';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { usePathname } from 'next/navigation';
import { WaveDividerNavbar2 } from '@/components/WaveDivider-navbar-2';

interface StaticNavbarProps {
  navItems: ProcessedMenuItem[];
}

export const StaticNavbar = ({ navItems }: StaticNavbarProps) => {
  const pathname = usePathname();
  return (
    <header className="bg-kashmir-600 fixed top-0 left-0 z-40 hidden h-20 w-full drop-shadow-xl drop-shadow-black/20 lg:flex">
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
          <nav className="hidden flex-row items-center gap-10 font-serif uppercase lg:flex">
            {navItems.map(({ href, label }) => {
              const isActive = pathname.endsWith(href);

              return (
                <NavLink key={href} href={href}>
                  <span>{label}</span>
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"
                    aria-hidden="true"
                  />
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-white" />
                  )}
                </NavLink>
              );
            })}
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
      <WaveDividerNavbar2 className="fill-kashmir-600" />
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
