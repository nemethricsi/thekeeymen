import { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Locale } from '@/i18n-config';

import { fetchMetadata, fetchNavigation } from '@/sanity/lib/queries';
import { BackToTop } from '@/components/BackToTop';
import { MobileNavbar } from '@/components/MobileNavbar';
import { WaveOpacityDivider } from '@/components/WaveOpacityDivider';
import { baseURL } from '@/lib/constans';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });

  return {
    title: metadata?.seo?.title as string,
    description: metadata?.seo?.description as string,
    alternates: {
      languages: {
        en: `${baseURL}/en`,
        hu: `${baseURL}/hu`,
      },
    },
    openGraph: {
      title: metadata?.seo?.title as string,
      description: metadata?.seo?.description as string,
      url: `${baseURL}/${locale}`,
      siteName: metadata?.seo?.title as string,
      locale,
      type: 'website',
      images: [
        {
          url:
            metadata?.seo?.openGraphImage?.asset?.url ||
            'https://thekeeymen.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata?.seo?.title as string,
      description: metadata?.seo?.description as string,
    },
  };
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const navigation = await fetchNavigation({ locale });
  const metadata = await fetchMetadata({ locale });

  return (
    <>
      <BackToTop />
      {navigation?.navigation && (
        <MobileNavbar navItems={navigation.navigation} />
      )}
      {children}
      <section className="relative">
        <WaveOpacityDivider
          className="fill-lila-900"
          svgClassName="h-6 sm:h-12"
        />
      </section>
      <Footer seoTitle={metadata?.seo?.title} />
    </>
  );
}
