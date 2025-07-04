'use client';

import { ConcertCard } from '@/app/events/components/ConcertCard';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

interface ConcertListProps {
  concerts: BandsInTownEvent[];
  numberToShow: number;
}

export const ConcertList = ({ concerts, numberToShow }: ConcertListProps) => {
  const [open, setOpen] = useState(false);

  const visibleConcerts = concerts.slice(0, numberToShow);
  const hiddenConcerts = concerts.slice(numberToShow);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="w-full">
      {visibleConcerts.map((event) => {
        return <ConcertCard key={event.id} event={event} />;
      })}
      <Collapsible.Content>
        {hiddenConcerts.map((event) => {
          return <ConcertCard key={event.id} event={event} />;
        })}
      </Collapsible.Content>
      {concerts.length > numberToShow && (
        <Collapsible.Trigger
          className="mt-4 flex w-full cursor-pointer justify-center uppercase underline underline-offset-4 hover:no-underline"
          asChild
        >
          <button>{open ? 'Show less' : 'Show all'}</button>
        </Collapsible.Trigger>
      )}
    </Collapsible.Root>
  );
};
