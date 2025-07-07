import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { CopyIcon } from 'lucide-react';

export default function ElectronicPressKitPage() {
  return (
    <div className="min-h-screen bg-[#8e43a5]">
      <StaticNavbar />
      <main className="pt-[calc(80px+2rem)]">
        <Container className="gap-10">
          <h1 className="text-3xl">Short bio</h1>
          <div className="relative rounded-md bg-black/10 p-4 pr-16 text-left shadow-inner">
            <button className="absolute top-4 right-4 cursor-pointer rounded-md border border-white/40 p-2 hover:bg-white/20">
              <CopyIcon className="h-4 w-4" />
            </button>
            A The Keeymen egy 2013-ban alakult instrumentális surf supergroup.
            Tagjai nevéhez fűződnek a Néhai Bárány, Bozo, The Punch, Padkarosda
            stb. produkciók. A zenekar hamar megszerezte stabil helyét a buda-
            pesti alternatív Klub- és Fesztiválélet rendszeres fellépői között.
            Játszottak közösen számos neves zenekarral (pl. Carson Coma,
            Csaknekedkislány, The Qualitons, Ricsárdgír, Dope Calypso…) a
            legismertebb budapesti klubokban (pl. A38, Akvárium, TOLDI, Dürer
            Kert, Pontoon, Turbina, Gólya…), valamint az underground szcéna
            egyre népszerűbb fesztiváljain (Kolorádó, Bánkitó, Ubik, Fekete zaj,
            TILOS maraton, KERET…). 2021-ben jelent meg második nagylemezük t
            címmel, amit idén tavasszal a 4SEASONS - négy évszak tematikájú
            kazetta követ majd 4 bonus trackkel, valamint folyamatban van a
            MOLDVAI elnevezésű - moldvai csángó dallamokra épülő albumuk
            felvétele is.
          </div>
        </Container>
      </main>
    </div>
  );
}
