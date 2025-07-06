'use client';

import { Container } from '@/components/Container';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const StaticNavbar = () => {
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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#gigs">Gigs</NavLink>
          <NavLink href="/#media">Media</NavLink>
          <NavLink href="/epk">Press kit</NavLink>
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
    <Link href={href} className={cn('text-xl font-semibold text-white')}>
      {children}
    </Link>
  );
};
