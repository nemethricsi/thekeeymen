'use server';

import { env } from '@/env';
import { Locale } from '@/i18n-config';
import { BandsInTownEvent } from '@/lib/bands-in-town';
import { stripe } from '@/lib/stripe';

export const fetchBandsInTownEvents = async (): Promise<BandsInTownEvent[]> => {
  const response = await fetch(
    `https://rest.bandsintown.com/artists/The%20Keeymen/events/?app_id=${env.BANDSINTOWN_API_KEY}`,
  );
  const data = await response.json();
  return data;
};

export const createCheckoutSession = async (
  locale: Locale,
): Promise<{
  error: boolean;
  message: string;
  data?: { url: string };
}> => {
  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'revolut_pay'],
    mode: 'payment',
    line_items: [
      {
        price: env.PRICE_ID_ZABELLA_ZINE_MOLDVAI,
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 20,
        },
      },
    ],
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: ['HU'],
    },
    success_url: `${env.NEXT_PUBLIC_APP_URL}/${locale}/zabella-moldvai-zine-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_APP_URL}/${locale}/p/zabella-zine-keeymen-moldvai-collaboration`,
  });

  if (!url) {
    return {
      error: true,
      message: 'Failed to create checkout session',
    };
  }

  return {
    error: false,
    message: 'Checkout session created successfully',
    data: { url },
  };
};
