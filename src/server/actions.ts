'use server';

import { env } from '@/env';
import { BandsInTownEvent } from '@/lib/bands-in-town';

export const fetchBandsInTownEvents = async (): Promise<BandsInTownEvent[]> => {
  const response = await fetch(
    `https://rest.bandsintown.com/artists/The%20Keeymen/events/?app_id=${env.BANDSINTOWN_API_KEY}`,
  );
  const data = await response.json();
  return data;
};
