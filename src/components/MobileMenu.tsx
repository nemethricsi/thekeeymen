'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
    if (window.scrollY === 0) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenuWhenReachedTop);
    return () => {
      window.removeEventListener('scroll', closeMenuWhenReachedTop);
    };
  }, []);

  return (
    <>
      {/* Hamburger / X gomb */}
      <button
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-[#fefefe]/50 bg-black p-1 text-[#fefefe] shadow-lg sm:hidden"
      >
        {/* Hamburger lines */}
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 origin-center bg-white"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block h-0.5 w-6 bg-white"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 origin-center bg-white"
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
            className="fixed top-0 left-0 z-50 flex h-full w-[80%] flex-col bg-gray-900 p-6 text-white shadow-lg md:hidden"
          >
            <a
              href="#gigs"
              onClick={() => setIsOpen(false)}
              className="mb-4 flex justify-center border p-3 text-lg font-semibold hover:text-indigo-400"
            >
              Gigs
            </a>
            <a
              href="#media"
              onClick={() => setIsOpen(false)}
              className="mb-4 flex justify-center border p-3 text-lg font-semibold hover:text-indigo-400"
            >
              Media
            </a>
            <a
              href="#press-kit"
              onClick={() => setIsOpen(false)}
              className="mb-4 flex justify-center border p-3 text-lg font-semibold hover:text-indigo-400"
            >
              Press kit
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
