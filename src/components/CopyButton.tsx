'use client';

import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { useCopyButton } from '@/hooks/useCopyButton';

export const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const { copyState, handleClick, getCopyIcon, getCopyText } =
    useCopyButton(text);
  const Icon = getCopyIcon();

  return (
    <button
      type="button"
      title="Copy to clipboard"
      className={cn(
        'hover:bg-neutral-20 grid h-7 w-7 place-content-center rounded-full transition-all',
        copyState === 'copied' && 'bg-green-10 hover:bg-green-10',
        copyState === 'error' && 'bg-red-10 hover:bg-red-10',
        className,
      )}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.7 }}
          key={copyState}
          transition={{ duration: 0.12 }}
        >
          <Icon
            className={cn(
              'h-4 w-4',
              copyState === 'copied' && 'text-green-95',
              copyState === 'error' && 'text-red-95',
            )}
          />
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">{getCopyText()}</span>
    </button>
  );
};
