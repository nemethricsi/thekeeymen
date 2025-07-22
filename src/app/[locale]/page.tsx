import { Metadata } from 'next';
import { Container } from '@/components/Container';
import { EmbedYoutube } from '@/components/EmbedYoutube';
import { fetchBandsInTownEvents } from '@/server/actions';
import { EventList } from '@/app/events/components/EventList';
import { EmbedSpotify } from '@/components/EmbedSpotify';
import {
  fetchContactForm,
  fetchHomePage,
  fetchMetadata,
  fetchNavigation,
} from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { ContactFormComponent } from '@/components/ContactForm';
import { HeroSectionWithNav } from '@/components/HeroSectionWithNav';
import { parseSpotifyIframe } from '@/lib/utils';
import { WaveDivider2 } from '@/components/WaveDivider-2';
import { WaveDivider3 } from '@/components/WaveDivider-3';
import { baseURL } from '@/lib/constans';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });
  const baseTitle = metadata?.seo?.title;
  const pageTitle = metadata?.seo?.homePageTitle;
  const fullUrl = `${baseURL}/${locale}`;

  return {
    title: `${pageTitle} • ${baseTitle}`,
    description: metadata?.seo?.description,
    icons: {
      icon: '/icon.ico',
    },
    alternates: {
      languages: {
        en: 'https://www.thekeeymen.com/en',
        hu: 'https://www.thekeeymen.com/hu',
      },
      canonical: {
        url: fullUrl,
      },
    },
    openGraph: {
      title: `${pageTitle} • ${baseTitle}`,
      description: metadata?.seo?.description as string,
      url: fullUrl,
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
      title: `${pageTitle} • ${baseTitle}`,
      description: metadata?.seo?.description as string,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const events = await fetchBandsInTownEvents();
  const homePageData = await fetchHomePage({ locale });
  const contactFormData = await fetchContactForm({ locale });
  const pageSettings = await fetchNavigation({ locale });
  const spotifySrc = parseSpotifyIframe(
    homePageData?.embedSpotify?.embedCode ?? '',
  );

  return (
    <main className="flex flex-col">
      {pageSettings?.navigation && (
        <HeroSectionWithNav navigation={pageSettings.navigation} />
      )}
      <section
        id="gigs"
        className="relative scroll-mt-14 pt-6 pb-14 sm:scroll-mt-20 sm:pb-28"
      >
        <Container className="gap-10">
          <EventList
            events={events}
            numberToShow={3}
            noResultText={homePageData?.bandsInTownLabels?.noResultText}
            bandsInTownButtonText={
              homePageData?.bandsInTownLabels?.bandsInTownButtonText
            }
            soldOutLabel={homePageData?.bandsInTownLabels?.soldOut}
            freeLabel={homePageData?.bandsInTownLabels?.free}
            ticketsLabel={homePageData?.bandsInTownLabels?.tickets}
            notifyMeLabel={homePageData?.bandsInTownLabels?.notifyMe}
            locale={locale}
          />
        </Container>
        <WaveDivider2 className="fill-lila-800" svgClassName="h-4 sm:h-6" />
      </section>
      <section
        id="media"
        className="from-lila-800 to-kashmir-600 relative scroll-mt-8 bg-linear-to-b py-10 sm:scroll-mt-14 sm:py-16"
      >
        <Container className="gap-10">
          <div className="flex flex-col gap-2 text-base font-medium">
            <p className="text-white">{homePageData?.embedYoutube?.caption}</p>
            {homePageData?.embedYoutube?.youtubeUrl && (
              <>
                <EmbedYoutube
                  src={homePageData.embedYoutube.youtubeUrl}
                  className="hidden sm:block"
                  playing
                  muted
                />
                <EmbedYoutube
                  src={homePageData.embedYoutube.youtubeUrl}
                  className="sm:hidden"
                  light
                />
              </>
            )}
          </div>
          <div className="flex flex-col gap-2 text-base font-medium">
            <p className="text-white">{homePageData?.embedSpotify?.caption}</p>
            {spotifySrc != null && <EmbedSpotify src={spotifySrc} />}
          </div>
        </Container>
      </section>
      {contactFormData != null &&
        contactFormData.placeholders?.message &&
        contactFormData.placeholders?.email &&
        contactFormData.placeholders?.phone &&
        contactFormData.submitButton?.sendLabel &&
        contactFormData.submitButton?.sendingLabel &&
        contactFormData.messages?.success &&
        contactFormData.messages?.error && (
          <section
            id="contact"
            className="relative scroll-mt-9 py-14 pb-30 sm:scroll-mt-16 sm:py-30"
          >
            <WaveDivider3
              className="fill-kashmir-600"
              svgClassName="h-4 sm:h-10"
            />
            <Container className="gap-4">
              <h2 className="text-center font-serif text-2xl font-bold uppercase lg:text-3xl">
                {contactFormData.title}
              </h2>
              <ContactFormComponent
                messagePlaceholder={contactFormData.placeholders.message}
                emailPlaceholder={contactFormData.placeholders.email}
                phonePlaceholder={contactFormData.placeholders.phone}
                submitButtonLabel={contactFormData.submitButton.sendLabel}
                submitButtonSendingLabel={
                  contactFormData.submitButton.sendingLabel
                }
                successMessage={contactFormData.messages.success}
                errorMessage={contactFormData.messages.error}
                emailSubject={contactFormData.emailSubject}
              />
            </Container>
          </section>
        )}
    </main>
  );
}
