import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export const WaveDivider3 = ({
  className = 'fill-black',
  svgClassName = 'h-10',
}: {
  className?: ClassValue;
  svgClassName?: ClassValue;
}) => {
  return (
    <div className="line-height-0 absolute top-0 left-0 w-full -translate-y-px rotate-180 transform overflow-hidden">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(
          'relative block w-[calc(100%+1.3px)] rotate-180 transform',
          svgClassName,
        )}
      >
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className={cn(className)}
        ></path>
      </svg>
    </div>
  );
};
