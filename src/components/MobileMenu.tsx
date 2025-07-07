'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// import { ArrowUpRightIcon } from 'lucide-react';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';

type ProcessedMenuItem = {
  href: string;
  label: string | null;
};

interface MobileMenuProps {
  navItems?: ProcessedMenuItem[];
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, currentLocale, redirectedPathname } = useLocaleSwitcher();

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

  const closeMenuWhenReachedTop = () => {
    // when start scrolling, close the menu
    if (window.scrollY > 0) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenuWhenReachedTop);
    return () => {
      window.removeEventListener('scroll', closeMenuWhenReachedTop);
    };
  }, []);

  if (!navItems) return null;

  return (
    <>
      {/* Hamburger / X gomb */}
      <button
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed top-3 right-3 z-50 flex h-14 w-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-transparent p-1 text-[#fefefe] shadow-none transition-all sm:hidden',
          isOpen && 'bg-[#fefefe] text-[#25147B] shadow-lg',
        )}
      >
        {/* Hamburger lines */}
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className={cn(
            'block h-1 w-6 origin-center bg-[#fefefe]',
            isOpen && 'bg-[#25147B]',
          )}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className={cn('block h-1 w-6 bg-[#fefefe]', isOpen && 'bg-[#25147B]')}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className={cn(
            'block h-1 w-6 origin-center bg-[#fefefe]',
            isOpen && 'bg-[#25147B]',
          )}
        />
      </button>

      {/* Overlay háttér, kattintásra bezár */}
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

      {/* Oldalsó menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 flex h-full w-[75%] flex-col justify-between bg-[#25147B] p-8 text-white shadow-lg backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map(({ label, href }) => {
                const isActive = href === window.location.hash;

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'mb-4 flex items-center justify-center gap-2 bg-[#edd9f5]/25 p-3 text-lg font-semibold',
                      isActive && 'border-2',
                    )}
                  >
                    <span className="text-xl font-semibold uppercase">
                      {label}
                    </span>
                    {/* {external && <ArrowUpRightIcon className="flex-shrink-0" />} */}
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-2">
              {i18n.locales.map((locale) => {
                return (
                  <Link
                    key={locale}
                    href={redirectedPathname(locale)}
                    className={cn(
                      'flex-1 border border-[#edd9f5]/25 p-2 text-center uppercase',
                      locale === currentLocale && 'bg-[#edd9f5]/25',
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
