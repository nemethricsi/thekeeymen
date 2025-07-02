import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'container mx-auto flex max-w-[700px] flex-col items-center justify-center px-4',
        className,
      )}
    >
      {children}
    </div>
  );
};
