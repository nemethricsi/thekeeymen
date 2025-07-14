import { parseBandsInTownDate } from '@/app/events/parseBandsInTownDate';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon, BellRingIcon } from 'lucide-react';

export const ConcertCard = ({ event }: { event: BandsInTownEvent }) => {
  const { day, month, year } = parseBandsInTownDate(event.datetime);

  const renderCallToAction = () => {
    if (event.sold_out) {
      return <StaticCta>Sold out</StaticCta>;
    }

    const offer = event.offers.length > 0 ? event.offers[0] : undefined;
    const url = offer?.url;
    const notifyMeUrl = `${event.url}&trigger=notify_me`;
    const isFree = event.free;

    if (isFree) {
      return url ? (
        <ClickableCta url={url}>
          <span>Free</span>
          <ArrowUpRightIcon />
        </ClickableCta>
      ) : (
        <StaticCta>Free</StaticCta>
      );
    }

    return url ? (
      <ClickableCta url={url}>
        <span>Tickets</span>
        <ArrowUpRightIcon />
      </ClickableCta>
    ) : (
      <ClickableCta
        url={notifyMeUrl}
        className="bg-transparent text-[#fefefe] lg:border-none"
      >
        <BellRingIcon className="h-5 w-5" />
        <span>Notify me</span>
      </ClickableCta>
    );
  };

  return (
    <div className="flex flex-col items-center justify-between gap-2 px-0 hover:bg-[#b367ce] lg:flex-row lg:gap-4 lg:p-4 lg:[&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-[#cc92e0]">
      <div className="flex w-full items-center gap-4 lg:gap-8">
        {/* Date */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <div className="w-11 text-right text-[40px] font-medium lg:w-14 lg:text-5xl">
            {day}
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium uppercase lg:text-2xl">
              {month}
            </div>
            <div className="text-lg font-medium lg:text-xl">{year}</div>
          </div>
        </div>
        {/*Separator*/}
        <div className="h-10 w-px bg-[#cc92e0]" />
        {/*Name and venue*/}
        <div className="flex flex-col">
          <div className="text-base font-medium uppercase lg:text-xl">
            {event.title.length > 0 ? event.title : event.venue.name}
          </div>
          <div className="text-sm font-light lg:text-base">
            {event.venue.city}, {event.venue.country}
          </div>
        </div>
      </div>
      {renderCallToAction()}
    </div>
  );
};

const ClickableCta = ({
  className,
  children,
  url,
}: {
  className?: string;
  children: React.ReactNode;
  url?: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex w-full flex-shrink-0 items-center justify-center gap-2 border border-[#f5edfa] bg-[#f5edfa] px-4 py-2 font-bold text-[#8e43a5] uppercase hover:bg-[#f5edfa] hover:text-[#8e43a5] hover:drop-shadow-md lg:w-auto lg:bg-transparent lg:text-[#f5edfa]',
        className,
      )}
    >
      {children}
    </a>
  );
};

const StaticCta = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pointer-events-none flex w-full flex-shrink-0 cursor-not-allowed items-center justify-center gap-2 border border-[#f5edfa] px-4 py-2 font-bold text-[#f5edfa] uppercase opacity-50 select-none lg:w-auto lg:border-none">
      {children}
    </div>
  );
};
