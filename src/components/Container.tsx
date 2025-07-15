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
        'container mx-auto flex max-w-3xl flex-col justify-center px-5 sm:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};
