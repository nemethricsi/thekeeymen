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
        'flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200',
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
