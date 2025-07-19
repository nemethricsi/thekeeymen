'use client';

import { useState, useEffect } from 'react';
import { ArrowUpToLineIcon } from 'lucide-react';
import { ReusableTooltip } from '@/components/ReusableTooltip';

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
        <ReusableTooltip message="Back to top">
          <button
            className="fixed right-5 bottom-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 data-[state=visible]:opacity-100 sm:right-6 sm:bottom-6"
            aria-label="Back to top"
            data-state={isVisible ? 'visible' : 'hidden'}
            onClick={scrollToTop}
          >
            <ArrowUpToLineIcon />
          </button>
        </ReusableTooltip>
      )}
    </>
  );
};
