'use client';

import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player';

interface EmbedYoutubeProps {
  src: string;
  className?: string;
  playing?: boolean;
  muted?: boolean;
  light?: boolean;
  loop?: boolean;
}

export const EmbedYoutube = ({
  src,
  className,
  playing = false,
  muted = false,
  light = false,
  loop = false,
}: EmbedYoutubeProps) => {
  return (
    <div
      className={cn(
        'aspect-video w-full overflow-hidden rounded-lg',
        className,
      )}
    >
      <ReactPlayer
        src={src}
        width="100%"
        height="100%"
        controls
        playing={playing}
        muted={muted}
        light={light}
        loop={loop}
      />
    </div>
  );
};
