import { Container } from '@/components/Container';
import { HeroSection } from '@/components/HeroSection';
import { EmbedYoutube } from '@/components/EmbedYoutube';
import { fetchBandsInTownEvents } from '@/server/actions';
import { EventList } from '@/app/events/components/EventList';
import { WaveDivider } from '@/components/WaveDivider';
import { StaticNavbar } from '@/components/StaticNavbar';
import { EmbedSpotify } from '@/components/EmbedSpotify';
import { fetchHomePage, fetchNavigation } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { LogoWithLocaleSwitcher } from '@/components/LogoWithLocaleSwitcher';
import { DesktopNavigation } from '@/components/DesktopNavigation';

export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const events = await fetchBandsInTownEvents();
  const homePageData = await fetchHomePage({ locale });

  return (
    <main className="flex flex-col bg-[#8e43a5]">
      <HeroSection>
        <DesktopHeroContent locale={locale} />
        <MobileHeroContent />
      </HeroSection>
      <section id="gigs" className="border py-10">
        <Container className="gap-10">
          <EventList events={events} numberToShow={3} />
        </Container>
      </section>
      <section id="media" className="relative border bg-[#8e43a5] py-10 pb-20">
        <Container className="gap-10">
          <div className="flex w-full flex-col gap-3">
            {homePageData?.youtubeUrl && (
              <EmbedYoutube src={homePageData.youtubeUrl} />
            )}
            <p className="text-center">{homePageData?.title}</p>
          </div>
          <EmbedSpotify />
        </Container>
        <WaveDivider />
      </section>
    </main>
  );
}

const DesktopHeroContent = async ({ locale }: { locale: Locale }) => {
  const data = await fetchNavigation({ locale });

  return (
    <div className="container mx-auto hidden h-full w-full max-w-3xl flex-col justify-between gap-3 px-4 sm:flex">
      <LogoWithLocaleSwitcher />
      {data?.navigation && <DesktopNavigation navigation={data.navigation} />}
    </div>
  );
};

const MobileHeroContent = () => {
  return (
    <div className="container mx-auto flex h-full w-full flex-col justify-between gap-3 px-4 sm:hidden">
      <StaticNavbar />
    </div>
  );
};
