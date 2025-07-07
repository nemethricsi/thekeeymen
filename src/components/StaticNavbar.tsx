'use client';

import { Container } from '@/components/Container';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { type ProcessedMenuItem } from '@/components/MobileMenu';
import { LocalizedLink } from './LocalizedLink';

interface StaticNavbarProps {
  navItems: ProcessedMenuItem[];
}

export const StaticNavbar = ({ navItems }: StaticNavbarProps) => {
  return (
    <header className="fixed top-0 left-0 z-40 flex h-20 w-full bg-[#25147B]/50 drop-shadow-xl drop-shadow-black/20 backdrop-blur-sm">
      <Container className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/images/svg/keeymen_logo.svg"
            alt="The Keeymen logo"
            width={150}
            height={150}
          />
        </Link>
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
      </Container>
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
