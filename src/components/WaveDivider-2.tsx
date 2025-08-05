import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export const WaveDivider2 = ({
  className = 'fill-black',
  svgClassName = 'h-10',
}: {
  className?: ClassValue;
  svgClassName?: ClassValue;
}) => {
  return (
    <div className="line-height-0 absolute bottom-0 left-0 w-full translate-y-px -scale-x-100 rotate-180 transform overflow-hidden">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={cn(
          'relative block w-[calc(100%+1.3px)] rotate-y-180 transform',
          svgClassName,
        )}
      >
        <path
          className={cn(className)}
          d="M0 0v10.9c15.6 9.212 33.168 17.914 57.228 24.543C119.292 52.56 198 52.441 269.496 43.966c37.38-4.43 72.108-11.377 107.604-17.369 49.104-8.292 101.676-20.075 156.996-21.676 43.512-1.244 85.08 4.11 118.32 13.773C690.54 29.774 727.2 45.75 776.772 50.55c48.528 4.71 97.62-2.92 142.956-10.596s90.192-17.02 140.302-18.787c71.68-2.553 135.94 9.985 202.68 16.95 36.24 3.78 70.8 2.693 104.51-3.273 26.92-4.752 57.6-11.752 72.78-21.488V0z"
        ></path>
      </svg>
    </div>
  );
};
