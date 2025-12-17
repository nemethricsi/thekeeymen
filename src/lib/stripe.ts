import { Stripe } from 'stripe';
import { env } from '@/env';

export const stripe = new Stripe(env.STRIPE_API_KEY, {
  apiVersion: '2025-12-15.clover',
});

// export const createCheckoutSession = async (params: CreateCheckoutSessionParams) => {
//   const session = await stripe.checkout.sessions.create(params);
//   return session;
// };
