import { EventsList } from '@/components/EventsList';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-no-repeat p-4 py-16 text-white bg-blend-lighten"
        style={{
          backgroundImage: `linear-gradient(to bottom, #25147B, #8E43A5), url('/images/hero_2.png')`,
        }}
      >
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4">
          <Image
            src="/images/svg/keeymen_logo.svg"
            alt="The Keeymen logo"
            width={800}
            height={800}
          />
          <div className="mt-[400px] hidden w-full items-center justify-center gap-10 font-serif text-2xl font-bold uppercase md:flex">
            {[
              { href: '#events', label: 'Events' },
              { href: '#media', label: 'Media' },
              { href: '#press-kit', label: 'Press kit' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative transition-opacity"
              >
                <span className="relative z-10">{label}</span>
                <span
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#fefefe] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="events" className="bg-[#8e43a5] py-16">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4 sm:px-0">
          <EventsList />
        </div>
      </section>
      <section id="media" className="bg-[#8e43a5] py-16">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4">
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
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
        </div>
      </section>
      <section id="press-kit" className="bg-[#8e43a5] py-16">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-4xl font-bold">Press kit</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem
            voluptatibus ducimus sint voluptate. Iure quas dolore, nobis eveniet
            atque mollitia similique! Non consectetur sed quos, possimus
            exercitationem ipsa, nobis nostrum modi hic fugiat qui. Repellat
            consequatur ad cum saepe repellendus?
          </p>
        </div>
      </section>
    </>
  );
}
