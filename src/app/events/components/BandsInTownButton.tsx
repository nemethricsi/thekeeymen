import { ReusableTooltip } from '@/components/ReusableTooltip';
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
    <ReusableTooltip message="Bandsintown" side="right">
      <Link
        href={artist.url}
        className={cn(
          'group flex items-center gap-2 rounded-lg px-2 py-1 text-sm transition-colors hover:bg-neutral-600 hover:text-white',
          className,
        )}
        {...externalLink}
      >
        <SiBandsintown className="h-4 w-4" />
        <span className="flex items-center gap-2 text-xs font-semibold uppercase">
          <span>{label}</span>
          <span className="bg-linen-100 flex items-center justify-center rounded p-1 font-normal text-neutral-600 transition-colors group-hover:bg-neutral-500 group-hover:text-white">
            {artist.tracker_count}
          </span>
        </span>
      </Link>
    </ReusableTooltip>
  );
};
