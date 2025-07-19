'use client';

import { useState, useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { LocalizedLink } from '@/components/LocalizedLink';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { ProcessedMenuItem } from '@/types';
import { Container } from '@/components/Container';
import { WaveDividerNavbar } from '@/components/WaveDivider-navbar';

export const MobileNavbar = ({
  navItems,
}: {
  navItems: ProcessedMenuItem[];
}) => {
  const scrollThreshold = 60;
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(scrollY.get() > 100);
  const { i18n, currentLocale, redirectedPathname, isHomePage } =
    useLocaleSwitcher();
  const initiallyTransparent = isHomePage;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useMotionValueEvent(scrollY, 'change', (current) => {
    setScrolled(current > scrollThreshold);
  });

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-50 flex w-full items-center gap-3 py-2 drop-shadow-2xl lg:hidden',
          !initiallyTransparent && 'bg-kashmir-600',
          initiallyTransparent &&
            'from-kashmir-600 bg-linear-to-b to-transparent',
          scrolled && 'bg-kashmir-600 backdrop-blur-sm',
          isOpen && 'bg-none',
        )}
      >
        <Container
          className={cn(
            'flex-row items-start gap-3',
            !scrolled && isHomePage && 'pt-4 sm:pt-8',
          )}
        >
          <motion.div
            initial={false}
            animate={{
              width: scrolled || !isHomePage ? 120 : '100%',
              opacity: isOpen ? 0 : 1,
            }}
          >
            <LocalizedLink href="/">
              <Image
                src="/svg/keeymen_logo.svg"
                alt="The Keeymen logo"
                width={500}
                height={500}
              />
            </LocalizedLink>
          </motion.div>
          <div className="ml-auto">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </Container>
        {(scrolled || !isHomePage) && <WaveDividerNavbar />}
      </header>
      {/* Overlay background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black"
          />
        )}
      </AnimatePresence>
      {/* Side menu*/}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-kashmir-600 fixed top-0 left-0 z-50 flex h-full w-[80%] flex-col justify-between backdrop-blur-sm"
          >
            <div className="flex flex-col px-4 py-8">
              {navItems.map(({ label, href }) => {
                const isActive = href === window.location.hash;

                return (
                  <LocalizedLink
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'mb-4 flex items-center justify-center gap-2 rounded-lg bg-white/25 p-3 text-lg font-semibold text-white',
                      isActive && 'border-2 bg-white/40',
                    )}
                  >
                    <span className="text-xl font-semibold uppercase">
                      {label}
                    </span>
                    {/* {external && <ArrowUpRightIcon className="shrink-0" />} */}
                  </LocalizedLink>
                );
              })}
            </div>
            <div className="flex gap-4 px-4 py-8">
              {i18n.locales.map((locale) => {
                return (
                  <Link
                    key={locale}
                    href={redirectedPathname(locale)}
                    className={cn(
                      'border-linen-50 flex-1 rounded-lg border p-2 text-center text-white uppercase',
                      locale === currentLocale && 'bg-white/40 font-semibold',
                    )}
                  >
                    {locale}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const HamburgerButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <button
      aria-label="Toggle menu"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        'z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full bg-transparent p-1 text-white shadow-none transition-all',
        isOpen && 'text-tk-bblue-500 bg-white shadow-lg',
      )}
    >
      {/* Hamburger lines */}
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className={cn(
          'block h-1 w-6 origin-center rounded-lg bg-white',
          isOpen && 'bg-tk-bblue-500',
        )}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={cn(
          'block h-1 w-6 rounded-lg bg-white',
          isOpen && 'bg-tk-bblue-500',
        )}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className={cn(
          'block h-1 w-6 origin-center rounded-lg bg-white',
          isOpen && 'bg-tk-bblue-500',
        )}
      />
    </button>
  );
};
