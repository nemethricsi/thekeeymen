'use client';

import { useCopyButton } from '@/hooks/useCopyButton';
import { cn } from '@/lib/utils';

export const CopyTextButton = ({
  textToCopy,
  copyLabel,
  successLabel,
  errorLabel,
  className,
}: {
  textToCopy: string;
  copyLabel: string;
  successLabel: string;
  errorLabel: string;
  className?: string;
}) => {
  const { copyState, handleClick, getCopyIcon, getCopyText } = useCopyButton({
    textToCopy,
    copyLabel,
    successLabel,
    errorLabel,
  });

  const Icon = getCopyIcon();

  return (
    <button
      type="button"
      className={cn(
        'bg-linen-100 border-linen-300 hover:bg-linen-200 text-linen-800 flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
        className,
        copyState === 'copied' &&
          'border-lime-300 bg-lime-100 text-lime-700 hover:bg-lime-100',
        copyState === 'error' &&
          'border-rose-300 bg-rose-100 text-rose-700 hover:bg-rose-100',
      )}
      onClick={handleClick}
    >
      <Icon
        className={cn(
          'size-4',
          copyState === 'copied' && 'text-lime-700',
          copyState === 'error' && 'text-rose-700',
        )}
      />
      <span>{getCopyText()}</span>
    </button>
  );
};
