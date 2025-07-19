'use client';

import { ConcertCard } from '@/app/events/components/ConcertCard';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { GuitarIcon, HandMetalIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { BandsInTownButton } from '@/app/events/components/BandsInTownButton';
import { Locale } from '@/i18n-config';

interface EventListProps {
  events: BandsInTownEvent[];
  numberToShow: number;
  noResultText: string | null | undefined;
  bandsInTownButtonText: string | null | undefined;
  soldOutLabel: string | null | undefined;
  freeLabel: string | null | undefined;
  ticketsLabel: string | null | undefined;
  notifyMeLabel: string | null | undefined;
  locale: Locale;
}

export const EventList = ({
  events,
  numberToShow,
  noResultText,
  bandsInTownButtonText,
  soldOutLabel,
  freeLabel,
  ticketsLabel,
  notifyMeLabel,
  locale,
}: EventListProps) => {
  const [open, setOpen] = useState(false);
  const artist = events.length > 0 ? events[0].artist : null;

  const visibleEvents = events.slice(0, numberToShow);
  const hiddenEvents = events.slice(numberToShow);

  if (events.length === 0) {
    return (
      <div className="mb-20 flex w-full flex-col gap-3">
        {artist != null && bandsInTownButtonText != null && (
          <BandsInTownButton
            artist={artist}
            label={bandsInTownButtonText}
            className="self-start"
          />
        )}
        <div className="border-linen-300 bg-linen-100 flex w-full items-start gap-3 rounded-lg border p-4 lg:items-center">
          <GuitarIcon className="text-linen-700 h-6 w-6 shrink-0" />
          <p className="text-linen-700 font-medium">
            {noResultText
              ? noResultText
              : 'No gigs right now — we&apos;re cooking up the next ones.'}
          </p>
          <HandMetalIcon className="text-linen-700 h-6 w-6 shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 text-neutral-600">
      {artist != null && bandsInTownButtonText != null && (
        <BandsInTownButton
          artist={artist}
          label={bandsInTownButtonText}
          className="self-start"
        />
      )}
      <div className="flex w-full flex-col gap-8 lg:gap-0">
        {/* Always visible concerts */}
        {visibleEvents.map((event) => (
          <ConcertCard
            key={event.id}
            event={event}
            soldOutLabel={soldOutLabel}
            freeLabel={freeLabel}
            ticketsLabel={ticketsLabel}
            notifyMeLabel={notifyMeLabel}
            locale={locale}
          />
        ))}

        {/* Collapsible hidden concerts */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
                opacity: { duration: 0.3 },
              }}
              className="overflow-hidden"
            >
              {hiddenEvents.map((event) => (
                <ConcertCard
                  key={event.id}
                  event={event}
                  soldOutLabel={soldOutLabel}
                  freeLabel={freeLabel}
                  ticketsLabel={ticketsLabel}
                  notifyMeLabel={notifyMeLabel}
                  locale={locale}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        {events.length > numberToShow && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex w-full justify-center text-xs font-bold uppercase underline underline-offset-4 hover:no-underline"
          >
            {open ? 'Show less' : 'Show all'}
          </button>
        )}
      </div>
    </div>
  );
};
