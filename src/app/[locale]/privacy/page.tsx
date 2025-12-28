import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { Locale } from '@/i18n-config';
import { fetchNavigation } from '@/sanity/lib/queries';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-32 lg:pt-36">
        <Container className="gap-16 pb-24 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-3xl font-bold">
              {locale === 'hu' ? 'Adatkezelési tájékoztató' : 'Privacy Policy'}
            </h1>
            <p>
              A jelen{' '}
              <strong>Adatkezelési tájékoztató célja, hogy rögzítse</strong> a
              www.thekeeymen.com weboldalon (a továbbiakban: Weboldal) keresztül
              megvalósuló adatkezelések elveit, módját és feltételeit, valamint
              tájékoztatást nyújtson az Érintettek személyes adataik kezelésével
              kapcsolatos jogairól és jogérvényesítési lehetőségeiről.
            </p>
            <p>
              Az Adatkezelő a személyes adatokat a hatályos magyar jogszabályok,
              valamint az Európai Parlament és a Tanács (EU) 2016/679 rendelete
              (a továbbiakban: GDPR) rendelkezéseinek megfelelően,
              tisztességesen, jogszerűen és átlátható módon kezeli, és mindenkor
              biztosítja az adatok biztonságát.
            </p>
            <p>
              A jelen <strong>Adatkezelési tájékoztató hatálya kiterjed</strong>{' '}
              a Weboldal látogatóira, a Weboldalon keresztül vásárló
              felhasználókra, a hírlevélre feliratkozókra, valamint mindazokra,
              akik a Weboldalon keresztül bármely módon kapcsolatba lépnek az
              Adatkezelővel.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
