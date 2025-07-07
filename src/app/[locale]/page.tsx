import { Container } from '@/components/Container';
import { HeroSection } from '@/components/HeroSection';
import { EmbedYoutube } from '@/components/EmbedYoutube';
import Image from 'next/image';
import Link from 'next/link';
import { fetchBandsInTownEvents } from '@/server/actions';
import { EventList } from '@/app/events/components/EventList';
import { WaveDivider } from '@/components/WaveDivider';
import { StaticNavbar } from '@/components/StaticNavbar';
import { EmbedSpotify } from '@/components/EmbedSpotify';
import { fetchHomePage } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

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
        <DesktopHeroContent />
        <MobileHeroContent />
      </HeroSection>
      <LocaleSwitcher />
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

const DesktopHeroContent = () => {
  return (
    <div className="container mx-auto hidden h-full w-full max-w-3xl flex-col justify-between gap-3 px-4 sm:flex">
      <Image
        src="/images/svg/keeymen_logo.svg"
        alt="The Keeymen logo"
        width={800}
        height={800}
      />
      <div className="flex w-full items-center justify-center gap-11 pb-8 font-serif text-3xl font-bold tracking-wider uppercase">
        {[
          { href: '#gigs', label: 'Gigs' },
          { href: '#media', label: 'Media' },
          { href: '/epk', label: 'Press kit' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="group relative transition-opacity"
          >
            <span>{label}</span>
            <span
              className="absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-200 group-hover:w-full"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
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
