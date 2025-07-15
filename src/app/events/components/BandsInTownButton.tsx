import { BandsInTownEvent } from '@/lib/bands-in-town';
import { cn, externalLink } from '@/lib/utils';
import Link from 'next/link';
import { SiBandsintown } from 'react-icons/si';

export const BandsInTownButton = ({
  artist,
  label,
  className,
}: {
  artist: BandsInTownEvent['artist'];
  label: string;
  className?: string;
}) => {
  return (
    <Link
      href={artist.url}
      className={cn(
        'group flex items-center gap-2 rounded-lg px-2 py-1 text-sm hover:bg-[#f5edfa] hover:text-[#8e43a5]',
        className,
      )}
      {...externalLink}
    >
      <SiBandsintown className="h-4 w-4" />
      <span className="flex items-center gap-2 text-xs font-semibold uppercase">
        <span>{label}</span>
        <span className="flex items-center justify-center rounded bg-[#faf6fd] p-1 font-normal text-[#8e43a5] group-hover:bg-[#f5edfa]">
          {artist.tracker_count}
        </span>
      </span>
    </Link>
  );
};
