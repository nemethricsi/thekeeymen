import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Tooltip';

interface ReusableTooltipProps {
  children: React.ReactNode;
  message: string;
}
export const ReusableTooltip = ({
  children,
  message,
}: ReusableTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};
