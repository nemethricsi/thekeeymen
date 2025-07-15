'use client';

import { ConcertCard } from '@/app/events/components/ConcertCard';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { GuitarIcon, HandMetalIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { BandsInTownButton } from '@/app/events/components/BandsInTownButton';

interface EventListProps {
  events: BandsInTownEvent[];
  numberToShow: number;
  noResultText: string | null | undefined;
  bandsInTownButtonText: string | null | undefined;
}

export const EventList = ({
  events,
  numberToShow,
  noResultText,
  bandsInTownButtonText,
}: EventListProps) => {
  const [open, setOpen] = useState(false);
  const artist = events.length > 0 ? events[0].artist : null;

  const visibleEvents = events.slice(0, numberToShow);
  const hiddenEvents = events.slice(numberToShow);

  if (events.length === 0) {
    return (
      <div className="flex w-full flex-col gap-3">
        {artist != null && bandsInTownButtonText != null && (
          <BandsInTownButton
            artist={artist}
            label={bandsInTownButtonText}
            className="self-start"
          />
        )}
        <div className="flex w-full items-start gap-3 rounded-lg border border-[#dcbdea] bg-[#ae6bca] p-4 lg:items-center">
          <GuitarIcon className="h-6 w-6 flex-shrink-0 text-[#edd9f5]" />
          <p className="font-semibold text-[#fbf6fd]">
            {noResultText
              ? noResultText
              : 'No gigs right now — we&apos;re cooking up the next ones.'}
          </p>
          <HandMetalIcon className="h-6 w-6 flex-shrink-0 text-[#edd9f5]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {artist != null && bandsInTownButtonText != null && (
        <BandsInTownButton
          artist={artist}
          label={bandsInTownButtonText}
          className="self-start"
        />
      )}
      <div className="flex w-full flex-col gap-6 lg:gap-0">
        {/* Always visible concerts */}
        {visibleEvents.map((event) => (
          <ConcertCard key={event.id} event={event} />
        ))}

        {/* Collapsible hidden concerts */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                opacity: { duration: 0.3 },
              }}
              className="overflow-hidden"
            >
              {hiddenEvents.map((event) => (
                <ConcertCard key={event.id} event={event} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        {events.length > numberToShow && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex w-full cursor-pointer justify-center uppercase underline underline-offset-4 hover:no-underline"
          >
            {open ? 'Show less' : 'Show all'}
          </button>
        )}
      </div>
    </div>
  );
};
