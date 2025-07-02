import { Container } from '@/components/Container';
import { EmbedBandcamp } from '@/components/EmbedBandcamp';
import { HeroSection } from '@/components/HeroSection';
import { EmbedYoutube } from '@/components/EmbedYoutube';
import Image from 'next/image';
import Link from 'next/link';
import { ConcertList } from '@/app/events/components/ConcertList';
import { fetchBandsInTownEvents } from '@/server/actions';

export const revalidate = 60;

export default async function Home() {
  const events = await fetchBandsInTownEvents();
  return (
    <main>
      <HeroSection>
        <DesktopHeroContent />
        <MobileHeroContent />
      </HeroSection>
      <section id="gigs" className="scroll-mt-0.5 bg-[#8e43a5] py-8">
        <Container className="gap-10">
          <h2 className="w-full self-start text-center font-serif text-3xl font-bold text-[#f5edfa] uppercase sm:w-fit sm:text-left">
            Gigs
          </h2>
          <ConcertList concerts={events} numberToShow={1} />
        </Container>
      </section>
      <section id="media" className="scroll-mt-0.5 bg-[#8e43a5] py-8">
        <Container className="gap-10">
          <h2 className="w-full self-start text-center font-serif text-3xl font-bold text-[#f5edfa] uppercase sm:w-fit sm:text-left">
            Media
          </h2>
          <div className="flex w-full flex-col gap-3">
            <p className="text-center">
              The Keeymen a Partizán Sessions adásában - 2023
            </p>
            <EmbedYoutube src="https://www.youtube.com/watch?v=PbZBMtoxhZU" />
          </div>
          <div className="flex w-full flex-col gap-0">
            <p className="text-center">The Keeymen - 2 (LP, 2021)</p>
            <EmbedBandcamp />
          </div>
        </Container>
      </section>
      <footer className="bg-linear-to-b from-[#8e43a5] to-[#25147B] py-16 pt-32">
        <Container>
          <p className="text-lg uppercase">© The Keeymen 2025</p>
        </Container>
      </footer>
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
      <div className="flex w-full items-center justify-center gap-10 pb-8 font-serif text-4xl font-bold uppercase">
        {[
          { href: '#gigs', label: 'Gigs', external: false },
          { href: '#media', label: 'Media', external: false },
          { href: '/epk', label: 'Press kit', external: true },
        ].map(({ href, label, external }) => (
          <Link
            key={href}
            href={href}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : undefined}
            className="group relative transition-opacity"
          >
            <span>{label}</span>
            <span
              className="absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-300 group-hover:w-full"
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
      <div className="flex items-center justify-between">
        <Image
          src="/images/svg/keeymen_logo.svg"
          alt="The Keeymen logo"
          width={165}
          height={165}
        />
      </div>
    </div>
  );
};
