'use client';

import Image from 'next/image';
import { HeroSection } from '@/components/HeroSection';
import { DesktopNavigation } from '@/components/DesktopNavigation';
import { ProcessedMenuItem } from '@/types';
import { LogoWithLocaleSwitcher } from '@/components/LogoWithLocaleSwitcher';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LocalizedLink } from '@/components/LocalizedLink';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { cn } from '@/lib/utils';

interface HeroSectionWithNavProps {
  navigation: ProcessedMenuItem[];
}

export const HeroSectionWithNav = ({ navigation }: HeroSectionWithNavProps) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const heroTarget = heroRef.current;
    const sectionTargets = document.querySelectorAll('section[id]');
    const observers: IntersectionObserver[] = [];

    if (heroTarget != null) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setShowNav(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: '-100px 0px 0px 0px',
        },
      );
      heroObserver.observe(heroTarget);
      observers.push(heroObserver);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id != null) {
              setActiveItem(id);
            }
          }
        });
      },
      { threshold: 0.6 },
    );
    sectionTargets.forEach((section) => sectionObserver.observe(section));
    observers.push(sectionObserver);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <>
      <HeroSection ref={heroRef}>
        <div className="container mx-auto hidden h-full w-full max-w-3xl flex-col justify-between gap-3 px-4 lg:flex">
          <LogoWithLocaleSwitcher />
          <DesktopNavigation navigation={navigation} />
        </div>
      </HeroSection>

      <AnimatePresence>
        {showNav && (
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 z-40 hidden h-20 w-full bg-linear-to-b from-[#408ea3] to-[#408ea3]/80 drop-shadow-xl drop-shadow-black/20 backdrop-blur-sm lg:flex"
          >
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
                  {navigation.map(({ href, label }) => {
                    const isActive = href === `/#${activeItem}`;

                    return (
                      <NavLink
                        key={href}
                        href={href}
                        onClick={() => handleNavClick(href)}
                      >
                        <span>{label}</span>
                        <span
                          className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-200 group-hover:w-full"
                          aria-hidden="true"
                        />
                        {isActive && (
                          <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#fefefe]" />
                        )}
                      </NavLink>
                    );
                  })}
                </nav>
                <LocaleSwitcher />
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <LocalizedLink
      href={href}
      className={cn(
        'group relative text-xl font-semibold text-white transition-opacity',
      )}
      onClick={onClick}
    >
      {children}
    </LocalizedLink>
  );
};
