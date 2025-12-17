import { Container } from '@/components/Container';
import { LocalizedLink } from '@/components/LocalizedLink';
import { StaticNavbar } from '@/components/StaticNavbar';
import { Locale } from '@/i18n-config';
import { fetchNavigation } from '@/sanity/lib/queries';
import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';

export default async function ZabellaMoldvaiZineConfirmationThankYouPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-32 lg:pt-36">
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
                ? 'Köszönjük a megrendelést! Az új MOLDVAI zine-t hamarosan postán küldjük el neked.'
                : 'Thank you for your order! The new MOLDVAI zine will be sent to you by post soon.'}
            </p>
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
