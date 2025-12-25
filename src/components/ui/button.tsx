import { Button, ButtonProps } from '@base-ui/react/button';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
  className?: string;
};

export default function CustomButton({
  children,
  className,
  ...buttonProps
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        'bg-lila-500 hover:bg-lila-700 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold tracking-wide text-white disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:opacity-50 disabled:hover:bg-neutral-400',
        className,
      )}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
