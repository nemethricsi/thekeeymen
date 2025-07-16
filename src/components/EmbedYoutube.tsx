'use client';

import ReactPlayer from 'react-player';

export const EmbedYoutube = ({ src }: { src: string }) => {
  return (
    <div className="aspect-video w-full">
      <ReactPlayer src={src} width="100%" height="100%" controls light />
    </div>
  );
};
