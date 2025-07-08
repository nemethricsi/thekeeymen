'use client';

import { AnimatePresence, motion } from 'motion/react';
import { CheckIcon, CopyIcon, CopyXIcon } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  type CopyState = 'idle' | 'copied' | 'error';
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const getCopyIcon = (copyState: CopyState) => {
    switch (copyState) {
      case 'idle':
        return CopyIcon;
      case 'copied':
        return CheckIcon;
      case 'error':
        return CopyXIcon;
    }
  };

  const Icon = getCopyIcon(copyState);

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
      onClick={() => {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setCopyState('copied');
            setTimeout(() => setCopyState('idle'), 1000);
          })
          .catch(() => {
            setCopyState('error');
            setTimeout(() => setCopyState('idle'), 1000);
          });
      }}
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
    </button>
  );
};
