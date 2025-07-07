import { Footer } from '@/components/Footer';
import { Locale } from '@/i18n-config';

import { fetchMetadata, fetchNavigation } from '@/sanity/lib/queries';
import { BackToTop } from '@/components/BackToTop';
import { MobileMenu } from '@/components/MobileMenu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });

  return {
    title: metadata?.seoTitle as string,
    description: metadata?.seoDescription as string,
    openGraph: {
      title: metadata?.seoTitle as string,
      description: metadata?.seoDescription as string,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata?.seoTitle as string,
      description: metadata?.seoDescription as string,
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

  return (
    <>
      <BackToTop />
      {navigation?.navigation && (
        <MobileMenu navItems={navigation.navigation} />
      )}
      {children}
      <Footer />
    </>
  );
}
