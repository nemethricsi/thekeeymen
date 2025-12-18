import Image from 'next/image';
import { Metadata } from 'next';

import { Locale } from '@/i18n-config';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchMetadata, fetchNavigation } from '@/sanity/lib/queries';
import { Container } from '@/components/Container';
import { CheckoutSessionButton } from '@/components/CheckoutSessionButton';
import { baseURL } from '@/lib/constans';
import { env } from '@/env';
import { getDictionary } from '@/app/[locale]/dictionaries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });
  const baseTitle = metadata?.seo?.title as string;
  const pageTitle = metadata?.seo?.epkPageTitle;
  const fullUrl = `${baseURL}/${locale}/p/zabella-zine-keeymen-moldvai-collaboration`;

  return {
    title: `MOLDVAI Zine • ${baseTitle}`,
    description:
      locale === 'hu'
        ? 'Elkészült a 14. Zabella Zine, egy rendhagyó kollaborációs kiadvány. Szövegeit és rajzait új, csángó dallamokból inspirálódott, MOLDVAI címre keresztelt albumunk ihlette.'
        : 'The 14th Zabella Zine is complete — an unconventional collaborative release. Its texts and illustrations were inspired by our new album titled MOLDVAI, which draws from traditional csángó melodies.',
    alternates: {
      languages: {
        en: `${baseURL}/en/p/zabella-zine-keeymen-moldvai-collaboration`,
        hu: `${baseURL}/hu/p/zabella-zine-keeymen-moldvai-collaboration`,
      },
      canonical: {
        url: fullUrl,
      },
    },
    openGraph: {
      title: `MOLDVAI Zine • ${baseTitle}`,
      description:
        locale === 'hu'
          ? 'Elkészült a 14. Zabella Zine, egy rendhagyó kollaborációs kiadvány. Szövegeit és rajzait új, csángó dallamokból inspirálódott, MOLDVAI címre keresztelt albumunk ihlette.'
          : 'The 14th Zabella Zine is complete — an unconventional collaborative release. Its texts and illustrations were inspired by our new album titled MOLDVAI, which draws from traditional csángó melodies.',
      url: fullUrl,
      siteName: metadata?.seo?.title as string,
      locale,
      type: 'website',
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/images/OG_zabella.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} • ${baseTitle}`,
      description: metadata?.seo?.description as string,
    },
  };
}

export default async function ZabellaZineKeeymenMoldvaiCollaborationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-32 lg:pt-36">
        <Container className="gap-16 pb-24 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-3xl font-bold lg:text-4xl">
              The Keeymen & Zabella Zine: Moldvai Zine
            </h1>
            <p className="text-base font-semibold lg:text-lg">
              {dict.zabella.excerpt}
            </p>
            <Image
              src="/images/zines.jpg"
              alt="Zabella Zine x Keeymen x Moldvai Collaboration"
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-3">
              <p>{dict.zabella.limitedOffer}</p>
            </div>
            <div className="my-4 flex justify-center lg:my-8">
              <CheckoutSessionButton locale={locale} />
            </div>
            <p className="text-lg">
              {dict.zabella.aboutZabella.beforeLink}{' '}
              <a
                href="https://www.facebook.com/zabellazine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline underline-offset-4 hover:no-underline"
              >
                Zabella Zine
              </a>{' '}
              {dict.zabella.aboutZabella.afterLink}
            </p>
            <div className="flex flex-col gap-2">
              <Image
                src="/images/zabella_editors.jpg"
                alt="Zabella Zine x Keeymen x Moldvai Collaboration"
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-lg object-cover"
              />
              <p className="text-sm text-neutral-600">
                {dict.zabella.captionEditors}
              </p>
            </div>
            <p>{dict.zabella.specialFeature}</p>
            <div className="flex flex-col gap-2">
              <Image
                src="/images/zabella_team.jpg"
                alt="Zabella Zine x Keeymen x Moldvai Collaboration"
                width={1000}
                height={1000}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <p className="text-sm text-neutral-600">
                {dict.zabella.poems}: Bakos Barna, Domján Julcsi, Filotás
                Karina, Gaál- Nyeste Katalin, Gerjeni Mirjam, Kisvarga Anika,
                Lakos Benedek, Nagy-Gulyka Brigitta, Nádas Dávid, Stermeczky
                Zsolt
              </p>
              <p className="text-sm text-neutral-600">
                {dict.zabella.illustrators}: Khor Fruzsi (
                <a
                  href="https://www.instagram.com/khorfruzsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @khorfruzsi
                </a>
                ), Kuti Luca Kamilla (
                <a
                  href="https://www.instagram.com/luca.kamilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @luca.kamilla
                </a>
                ), Radványi Maja (
                <a
                  href="https://www.instagram.com/majaradvanyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @majaradvanyi
                </a>
                ), Szabó Izabella (
                <a
                  href="https://www.instagram.com/pasztellneon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @pasztellneon
                </a>
                ), Szitnyai Krisztina (
                <a
                  href="https://www.instagram.com/szitnyai_kriszti_illustration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @szitnyai_kriszti_illustration
                </a>
                )
              </p>
            </div>
            <Image
              src="/images/zine_preview.jpg"
              alt="Zabella Zine x Keeymen x Moldvai Collaboration"
              width={1000}
              height={1000}
              className="aspect-auto w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-3 rounded-lg border border-neutral-700 p-3 text-sm text-neutral-700">
              <p>{dict.zabella.aboutShipping.postalService}</p>
              <p>
                {dict.zabella.aboutShipping.priceExplainer}{' '}
                {new Intl.NumberFormat(locale, {
                  style: 'currency',
                  currency: 'HUF',
                  minimumFractionDigits: 0,
                }).format(3990)}
                .
              </p>
            </div>
            <div className="my-2 flex justify-center lg:my-4">
              <CheckoutSessionButton locale={locale} />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
