import { env } from '@/env';
import { Locale } from '@/i18n-config';
import { MAILERSEND_TEMPLATE_IDS } from '@/lib/constans';
import { sendOrderConfirmationEmail } from '@/lib/mailersend';
import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const POST = async (req: NextRequest) => {
  const sig = req.headers.get('stripe-signature');

  if (sig == null) {
    return new Response('No stripe signature', { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error('❌ Invalid Stripe signature', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const cs = event.data.object;

        const lineItems = await stripe.checkout.sessions.listLineItems(cs.id);
        const didPurchaseMoldvaiZine = lineItems.data.some(
          (li) => li.price?.product === env.MOLDVAI_ZINE_PRODUCT_ID,
        );

        const email = cs.customer_details?.email;
        const locale = (cs.locale ?? 'hu') as Locale;

        if (email != null && didPurchaseMoldvaiZine) {
          /**
           * Make sure this is only happens in production.
           * If the local stripe listener is active this will be triggered for every request.
           */
          const res = await sendOrderConfirmationEmail({
            email,
            orderUrl: `${env.NEXT_PUBLIC_APP_URL}/${locale}/moldvai-zine-confirmation?session_id=${cs.id}`,
            templateId:
              locale === 'hu'
                ? MAILERSEND_TEMPLATE_IDS.MOLDVAI_ZINE_ORDER_CONFIRMATION_HU
                : MAILERSEND_TEMPLATE_IDS.MOLDVAI_ZINE_ORDER_CONFIRMATION_EN,
          });

          console.log('--- mailersend response: ', res);
        }
        break;
      default:
        console.warn(`Unhandled event type ${event.type}`);
        break;
    }

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('❌ Error processing event', err);
    return NextResponse.json(
      { error: 'Error processing event' },
      { status: 500 },
    );
  }
};
