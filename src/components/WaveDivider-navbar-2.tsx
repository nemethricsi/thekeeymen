import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export const WaveDividerNavbar2 = ({
  className = 'fill-black',
  svgClassName = 'h-3',
}: {
  className?: ClassValue;
  svgClassName?: ClassValue;
}) => {
  return (
    <div className="line-height-0 absolute bottom-0 left-0 w-full translate-y-[calc(100%-1px)] rotate-y-180 transform overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={cn(
          'relative block w-[calc(100%+1.3px)] rotate-y-180 transform',
          svgClassName,
        )}
      >
        <path
          d="M0 0v25.438c57.348 12.2 124.308 17.679 189.6 15.387 84.432-2.95 164.836-9.688 249.4-11.99 88.608-2.397 175.808.659 260.6 10.76C782.724 49.485 882.18 59.485 967.5 53c43.38-3.297 67.2-4.03 108.72-10.35C1187.39 25.73 1335.6 4.138 1440 40.825V0z"
          className={cn(className)}
        ></path>
      </svg>
    </div>
  );
};
