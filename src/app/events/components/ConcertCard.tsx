'use client';

import { parseBandsInTownDate } from '@/app/events/parseBandsInTownDate';
import { Locale } from '@/i18n-config';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { cn, externalLink } from '@/lib/utils';
import { ArrowUpRightIcon, BellRingIcon } from 'lucide-react';

interface ConcertCardProps {
  event: BandsInTownEvent;
  soldOutLabel: string | null | undefined;
  freeLabel: string | null | undefined;
  ticketsLabel: string | null | undefined;
  notifyMeLabel: string | null | undefined;
  locale: Locale;
}
export const ConcertCard = ({
  event,
  soldOutLabel,
  freeLabel,
  ticketsLabel,
  notifyMeLabel,
  locale,
}: ConcertCardProps) => {
  const { day, month, year } = parseBandsInTownDate(event.datetime, locale);

  const renderCallToAction = () => {
    if (event.sold_out) {
      return <StaticCta>{soldOutLabel}</StaticCta>;
    }

    const offer = event.offers.length > 0 ? event.offers[0] : undefined;
    const url = offer?.url;
    const notifyMeUrl = `${event.url}&trigger=notify_me`;
    const isFree = event.free;

    if (isFree) {
      return url ? (
        <ClickableCta
          url={url}
          className="border bg-transparent text-neutral-600 hover:text-white lg:border-none"
        >
          <span>{freeLabel}</span>
          <ArrowUpRightIcon className="h-5 w-5" />
        </ClickableCta>
      ) : (
        <StaticCta>{freeLabel}</StaticCta>
      );
    }

    return url ? (
      <ClickableCta url={url}>
        <span>{ticketsLabel}</span>
        <ArrowUpRightIcon className="h-5 w-5" />
      </ClickableCta>
    ) : (
      <ClickableCta
        url={notifyMeUrl}
        className="border border-neutral-400 bg-transparent text-neutral-600 hover:text-white lg:border-none"
      >
        <BellRingIcon className="h-5 w-5" />
        <span>{notifyMeLabel}</span>
      </ClickableCta>
    );
  };

  return (
    <div className="hover:bg-linen-100 flex flex-col items-center justify-between gap-1 px-0 lg:flex-row lg:gap-4 lg:p-4 lg:[&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-neutral-200">
      <div className="flex w-full items-center gap-4 lg:gap-8">
        {/* Date */}
        <div className="flex shrink-0 items-center gap-3">
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
        <div className="h-10 w-px bg-neutral-200" />
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
      className={cn(
        'bg-lila-700 hover:bg-lila-500 flex w-full shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white uppercase transition-colors hover:drop-shadow-md lg:w-auto',
        className,
      )}
      {...externalLink}
    >
      {children}
    </a>
  );
};

const StaticCta = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pointer-events-none flex w-full shrink-0 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-neutral-400 px-4 py-2 text-sm font-bold text-neutral-600 uppercase opacity-75 select-none lg:w-auto lg:border-none">
      {children}
    </div>
  );
};
