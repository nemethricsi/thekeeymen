import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Tooltip';

interface ReusableTooltipProps {
  children: React.ReactNode;
  message: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
}
export const ReusableTooltip = ({
  children,
  message,
  side = 'top',
}: ReusableTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} className="max-w-xs p-4 text-base">
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};
