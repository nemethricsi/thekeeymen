import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export const WaveDividerNavbar = ({
  className = 'fill-kashmir-600',
  svgClassName = 'h-3',
}: {
  className?: ClassValue;
  svgClassName?: ClassValue;
}) => {
  return (
    <div className="line-height-0 absolute bottom-0 left-0 w-full translate-y-full rotate-y-180 transform overflow-hidden">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn(
          'relative block w-[calc(100%+1.3px)] rotate-y-180 transform',
          svgClassName,
        )}
      >
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          className={cn(className)}
        ></path>
      </svg>
    </div>
  );
};
