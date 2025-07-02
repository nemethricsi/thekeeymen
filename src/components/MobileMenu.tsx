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

  return (
    <>
      {/* Hamburger / X gomb */}
      <button
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 flex h-14 w-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-[#fefefe] p-1 text-[#25147B] shadow-lg transition-all sm:hidden"
      >
        {/* Hamburger lines */}
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 origin-center bg-[#25147B]"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="block h-0.5 w-6 bg-[#25147B]"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 origin-center bg-[#25147B]"
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
            className="fixed top-0 left-0 z-50 flex h-full w-[75%] flex-col bg-[#25147B]/75 p-6 text-white shadow-lg backdrop-blur-sm md:hidden"
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
