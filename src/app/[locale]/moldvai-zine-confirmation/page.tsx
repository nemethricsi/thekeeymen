import Image from 'next/image';

import { Container } from '@/components/Container';
import { LocalizedLink } from '@/components/LocalizedLink';
import { StaticNavbar } from '@/components/StaticNavbar';
import { Locale } from '@/i18n-config';
import { stripe } from '@/lib/stripe';
import { fetchNavigation } from '@/sanity/lib/queries';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
import { externalLink } from '@/lib/utils';

export default async function ZabellaMoldvaiZineConfirmationThankYouPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  const { session_id: sessionId } = await searchParams;
  const data = await fetchNavigation({ locale });

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
        {data?.navigation && <StaticNavbar navItems={data.navigation} />}
        <main className="pt-32 lg:pt-36">
          <Container className="gap-16 pb-24 lg:gap-20">
            <div className="flex flex-col justify-center gap-6">
              <XCircleIcon className="mx-auto h-12 w-12 text-red-600 opacity-70" />
              <div className="text-center text-red-600">
                Session Id is missing from the URL.
              </div>
              <LocalizedLink
                href="/"
                className="text-center underline underline-offset-4 lg:opacity-70 lg:hover:opacity-100"
              >
                {locale === 'hu'
                  ? 'Vissza a főoldalra'
                  : 'Back to the homepage'}
              </LocalizedLink>
            </div>
          </Container>
        </main>
      </div>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items'],
  });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-24 lg:pt-32">
        <Container className="gap-16 pb-24 lg:gap-20">
          <div className="flex flex-col justify-center gap-6">
            <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600 opacity-70" />
            <h1 className="text-center font-serif text-3xl font-bold">
              {locale === 'hu'
                ? 'Köszönjük a megrendelést!'
                : 'Thank you for your order!'}
            </h1>
            <p className="text-center opacity-70">
              {locale === 'hu'
                ? 'Köszönjük a megrendelést! A MOLDVAI zine-ed hamarosan postán küldjük el neked.'
                : `Thank you for your order! Your MOLDVAI zine will be sent to you by post soon.`}
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="font-medium">
                {locale === 'hu' ? 'Szállítási adatok:' : 'Shipping details:'}
              </h2>
              <div className="flex w-fit flex-col gap-0 rounded-lg border border-dashed p-6">
                <p className="font-semibold">
                  {session.collected_information?.shipping_details?.name}
                </p>
                <p>
                  {
                    session.collected_information?.shipping_details?.address
                      .line1
                  }
                </p>
                {session.collected_information?.shipping_details?.address
                  .line2 && (
                  <p>
                    {
                      session.collected_information.shipping_details.address
                        .line2
                    }
                  </p>
                )}
                <p>
                  {
                    session.collected_information?.shipping_details?.address
                      .city
                  }
                </p>
                <p>
                  {
                    session.collected_information?.shipping_details?.address
                      .postal_code
                  }
                </p>
                <p>
                  {new Intl.DisplayNames([locale], { type: 'region' }).of(
                    session.collected_information?.shipping_details?.address
                      .country as string,
                  )}
                </p>
              </div>
            </div>
            {locale === 'hu' ? (
              <div>
                Ha véletlenül rossz szállítási címet adtál meg, kérlek{' '}
                <LocalizedLink
                  href="/#contact"
                  className="text-blue-600 underline underline-offset-4 lg:opacity-70 lg:hover:opacity-100"
                  {...externalLink}
                >
                  írj nekünk egy üzenetet
                </LocalizedLink>
                .
              </div>
            ) : (
              <div>
                If you accidentally entered the wrong shipping address, please{' '}
                <LocalizedLink
                  href="/#contact"
                  className="text-blue-600 underline underline-offset-4 lg:opacity-70 lg:hover:opacity-100"
                  {...externalLink}
                >
                  send us a message
                </LocalizedLink>
                .
              </div>
            )}
            <div className="flex flex-col gap-2">
              <h2 className="font-medium">
                {locale === 'hu' ? 'Megrendelt termékek:' : 'Purchased items:'}
              </h2>
              {session.line_items?.data &&
                session.line_items.data.map(async (li) => {
                  const product = await stripe.products.retrieve(
                    li.price?.product as string,
                  );

                  return (
                    <div
                      key={li.id}
                      className="bg-linen-50 flex items-start gap-2 rounded-lg border border-neutral-700/10 p-3"
                    >
                      <Image
                        src={product.images[0] as string}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="aspect-square rounded-sm object-cover"
                      />
                      <div className="flex flex-col gap-0">
                        <p className="font-semibold">{product.name}</p>
                        <p>
                          {li.quantity} x{' '}
                          {new Intl.NumberFormat(locale, {
                            style: 'currency',
                            currency: 'HUF',
                            minimumFractionDigits: 0,
                          }).format((li.price?.unit_amount ?? 0) / 100)}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <LocalizedLink
              href="/"
              className="text-center underline underline-offset-4 lg:opacity-70 lg:hover:opacity-100"
            >
              {locale === 'hu' ? 'Vissza a főoldalra' : 'Back to the homepage'}
            </LocalizedLink>
          </div>
        </Container>
      </main>
    </div>
  );
}
