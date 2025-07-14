import { Container } from '@/components/Container';
import { HeroSection } from '@/components/HeroSection';
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
import { LogoWithLocaleSwitcher } from '@/components/LogoWithLocaleSwitcher';
import { DesktopNavigation } from '@/components/DesktopNavigation';
import { WaveOpacityDivider } from '@/components/WaveOpacityDivider';
import { ContactFormComponent } from '@/components/ContactForm';

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

  return (
    <main className="flex flex-col bg-[#8e43a5]">
      <HeroSection>
        <DesktopHeroContent locale={locale} />
      </HeroSection>
      <section
        id="gigs"
        className="scroll-mt-14 bg-linear-to-b from-transparent to-[#8e43a5] py-10 lg:scroll-mt-20"
      >
        <Container className="gap-10">
          <EventList events={events} numberToShow={3} />
        </Container>
      </section>
      <section id="media" className="relative scroll-mt-20 bg-[#8e43a5] py-10">
        <Container className="gap-10">
          <div className="flex w-full flex-col gap-3">
            {homePageData?.youtubeUrl && (
              <EmbedYoutube src={homePageData.youtubeUrl} />
            )}
            <p className="text-center">{homePageData?.title}</p>
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
          <section id="contact" className="relative scroll-mt-6 py-10 pb-30">
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
            <WaveOpacityDivider />
          </section>
        )}
    </main>
  );
}

const DesktopHeroContent = async ({ locale }: { locale: Locale }) => {
  const data = await fetchNavigation({ locale });

  return (
    <div className="container mx-auto hidden h-full w-full max-w-3xl flex-col justify-between gap-3 px-4 lg:flex">
      <LogoWithLocaleSwitcher />
      {data?.navigation && <DesktopNavigation navigation={data.navigation} />}
    </div>
  );
};
