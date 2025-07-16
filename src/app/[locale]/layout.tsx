import { Footer } from '@/components/Footer';
import { Locale } from '@/i18n-config';

import { fetchMetadata, fetchNavigation } from '@/sanity/lib/queries';
import { BackToTop } from '@/components/BackToTop';
import { MobileNavbar } from '@/components/MobileNavbar';
import { WaveOpacityDivider } from '@/components/WaveOpacityDivider';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });

  return {
    title: metadata?.seo?.title as string,
    description: metadata?.seo?.description as string,
    openGraph: {
      title: metadata?.seo?.title as string,
      description: metadata?.seo?.description as string,
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
        <WaveOpacityDivider />
      </section>
      <Footer seoTitle={metadata?.seo?.title} />
    </>
  );
}
