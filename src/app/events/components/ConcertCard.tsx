import { parseBandsInTownDate } from '@/app/events/parseBandsInTownDate';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { ArrowUpRightIcon, BanIcon } from 'lucide-react';

export const ConcertCard = ({ event }: { event: BandsInTownEvent }) => {
  const { day, month, year } = parseBandsInTownDate(event.datetime);
  const eventUrl = event.offers[0]?.url;

  return (
    <div className="flex flex-col items-center justify-between gap-6 px-0 py-2 hover:bg-[#b367ce] sm:flex-row sm:gap-4 sm:p-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#cc92e0]">
      <div className="flex w-full items-center gap-4 sm:gap-8">
        {/* Date */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <div className="w-11 text-right text-[40px] font-medium sm:w-14 sm:text-5xl">
            {day}
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-medium uppercase sm:text-2xl">
              {month}
            </div>
            <div className="text-lg font-medium sm:text-xl">{year}</div>
          </div>
        </div>
        {/*Separator*/}
        <div className="h-10 w-px bg-[#cc92e0]" />
        {/*Name and venue*/}
        <div className="flex flex-col">
          <div className="text-base font-medium uppercase sm:text-xl">
            {event.title.length > 0 ? event.title : event.venue.name}
          </div>
          <div className="text-sm font-light sm:text-base">
            {event.venue.city}, {event.venue.country}
          </div>
        </div>
      </div>
      {eventUrl ? (
        <a
          href={eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-shrink-0 items-center justify-center gap-2 border border-[#f5edfa] px-4 py-2 font-bold uppercase hover:bg-[#f5edfa] hover:text-[#8e43a5] sm:w-auto sm:bg-transparent"
        >
          <span>Tickets</span>
          <ArrowUpRightIcon />
        </a>
      ) : (
        <div className="flex w-full flex-shrink-0 items-center justify-center gap-2 border px-4 py-2 font-bold uppercase opacity-50 hover:cursor-not-allowed sm:w-auto">
          <span>Tickets</span>
          <BanIcon />
        </div>
      )}
    </div>
  );
};
