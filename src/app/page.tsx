import { Container } from '@/components/Container';
import { EventsList } from '@/components/EventsList';
import { HeroSection } from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
  return (
    <main>
      <HeroSection>
        <DesktopHeroContent />
        <MobileHeroContent />
      </HeroSection>
      <section id="gigs" className="bg-[#8e43a5] py-8">
        <Container>
          <h2 className="self-start font-serif text-3xl font-bold uppercase">
            Gigs
          </h2>
          <EventsList />
        </Container>
      </section>
      <section id="media" className="bg-[#8e43a5] py-8">
        <Container>
          <h2 className="self-start font-serif text-3xl font-bold uppercase">
            Media
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
        </Container>
      </section>
      <section id="press-kit" className="bg-[#8e43a5] py-8">
        <Container>
          <h2 className="self-start font-serif text-3xl font-bold uppercase">
            Press kit
          </h2>
          <p className="text-lg">
            A The Keeymen egy 2013-ban alakult instrumentális surf supergroup.
            Tagjai nevéhez fűződnek a Néhai Bárány, Bozo, The Punch, Padkarosda
            stb. produkciók. A zenekar hamar megszerezte stabil helyét a
            budapesti alternatív Klub- és Fesztiválélet rendszeres fellépői
            között. Játszottak közösen számos neves zenekarral (pl. Carson Coma,
            Csaknekedkislány, The Qualitons, Ricsárdgír, Dope Calypso…) a
            legismertebb budapesti klubokban (pl. A38, Akvárium, TOLDI Dürer
            Kert, Pontoon, Turbina, Gólya…), valamint az underground szcéna
            egyre népszerűbb fesztiváljain (Kolorádó, Bánkitó, Ubik, Fekete zaj,
            TILOS maraton, KERET…). 2021-ben jelent meg második nagylemezük t
            címmel, amit idén tavasszal a 4SEASONS - négy évszak tematikájú
            kazetta követ majd 4 bonus trackkel, valamint folyamatban van a
            MOLDVAI elnevezésű - moldvai csángó dallamokra épülő albumuk
            felvétele is.
          </p>
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
      <div className="sticky top-0 flex w-full items-center justify-center gap-10 font-serif text-2xl font-bold uppercase">
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
              className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-300 group-hover:w-full"
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
