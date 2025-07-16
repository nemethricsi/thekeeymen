import { Container } from '@/components/Container';
import { EmbedYoutube } from '@/components/EmbedYoutube';
import { fetchBandsInTownEvents } from '@/server/actions';
import { EventList } from '@/app/events/components/EventList';
import { EmbedSpotify } from '@/components/EmbedSpotify';
import {
  fetchContactForm,
  fetchHomePage,
  fetchNavigation,
} from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { ContactFormComponent } from '@/components/ContactForm';
import { HeroSectionWithNav } from '@/components/HeroSectionWithNav';

export const revalidate = 60;

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

  return (
    <main className="flex flex-col bg-[#8e43a5]">
      {pageSettings?.navigation && (
        <HeroSectionWithNav navigation={pageSettings.navigation} />
      )}
      <section
        id="gigs"
        className="-scroll-m-0.5 bg-linear-to-b from-transparent to-[#8e43a5] pt-24 pb-10"
      >
        <Container className="gap-10">
          <EventList
            events={events}
            numberToShow={3}
            noResultText={homePageData?.noResultText}
            bandsInTownButtonText={homePageData?.bandsInTownButtonText}
          />
        </Container>
      </section>
      <section id="media" className="relative scroll-mt-20 bg-[#8e43a5] py-10">
        <Container className="gap-10">
          <div className="flex w-full flex-col gap-2 text-base font-medium">
            <p className="text-[#faf6fd]">{homePageData?.title}</p>
            {homePageData?.youtubeUrl && (
              <EmbedYoutube src={homePageData.youtubeUrl} />
            )}
          </div>
          <EmbedSpotify />
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
          <section id="contact" className="relative scroll-mt-9 py-10 pb-30">
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
              />
            </Container>
          </section>
        )}
    </main>
  );
}
