'use client';

import { useState, useEffect } from 'react';
import { ArrowUpToLineIcon } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
    }
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed right-6 bottom-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#fefefe] text-[#25147B] opacity-0 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#e5e5e5] active:scale-95 data-[state=visible]:opacity-100"
          aria-label="Back to top"
          data-state={isVisible ? 'visible' : 'hidden'}
          onClick={scrollToTop}
        >
          <ArrowUpToLineIcon />
        </button>
      )}
    </>
  );
};
