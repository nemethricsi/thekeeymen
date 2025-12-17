import Image from 'next/image';
import { Locale } from '@/i18n-config';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchNavigation } from '@/sanity/lib/queries';
import { Container } from '@/components/Container';
import { CheckoutSessionButton } from '@/components/CheckoutSessionButton';

export default async function ZabellaZineKeeymenMoldvaiCollaborationPage({
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
            <h1 className="mb-4 font-serif text-3xl font-bold">
              The Keeymen & Zabella Zine: Moldvai Zine
            </h1>
            {locale === 'hu' ? (
              <p className="font-bold lg:text-lg">
                Elkészült a 14. Zabella Zine, egy rendhagyó kollaborációs
                kiadvány. Szövegeit és rajzait az új,{' '}
                <span className="font-bold">MOLDVAI</span> című albumunk
                ihlette.
              </p>
            ) : (
              <p className="text-lg font-bold">
                The 14th Zabella Zine is a unique collaboration publication. The
                text and illustrations are inspired by our new album,{' '}
                <span className="font-bold">MOLDVAI</span>.
              </p>
            )}
            <Image
              src="/images/zines.jpg"
              alt="Zabella Zine x Keeymen x Moldvai Collaboration"
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-3">
              {locale === 'hu' ? (
                <p>
                  A MOLDVAI zine-ből összesen 150 példány készült. Rendeld meg
                  most a saját egyedi példányodat, és küldünk mellé egy exkluzív
                  letöltő kódot, aminek segítségével már most, jóval megjelenés
                  előtt meghallgathatod az új, MOLDVAI című albumunkat.
                </p>
              ) : (
                <p>
                  There are only a total of 150 copies of the MOLDVAI zine.
                  Order your own unique copy now, and we&apos;ll post it to you
                  along with an exclusive download code, which allows you to
                  listen to our new album, MOLDVAI on bandcamp, before its
                  release.
                </p>
              )}
            </div>
            <div className="my-4 flex justify-center">
              <CheckoutSessionButton locale={locale} />
            </div>
            {locale === 'hu' ? (
              <p className="text-lg">
                A{' '}
                <a
                  href="https://www.facebook.com/zabellazine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  Zabella Zine
                </a>{' '}
                egy független, irodalmi fanzine. Lapszámaik különböző témákban,
                más-más alkotók illusztrációival és vendégverseivel jelennek
                meg. Céljuk, hogy esélyt adjanak a kezdő, kísérletező íróknak és
                illusztrátoroknak egyaránt.
              </p>
            ) : (
              <p className="text-lg">
                The{' '}
                <a
                  href="https://www.facebook.com/zabellazine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  Zabella Zine
                </a>{' '}
                is an independent, literary fanzine. Their issues feature
                different themes, with different artists&apos; illustrations and
                guest poems. Their goal is to give opportunities to both
                beginning, experimental writers and illustrators.
              </p>
            )}
            <div className="flex flex-col gap-2">
              <Image
                src="/images/zabella_editors.jpg"
                alt="Zabella Zine x Keeymen x Moldvai Collaboration"
                width={1000}
                height={1000}
                className="aspect-square w-full rounded-lg object-cover"
              />
              {locale === 'hu' ? (
                <p className="text-sm">
                  A Zabella Zine szerkesztői: Domján Julcsi és Kisvarga Anika.
                </p>
              ) : (
                <p className="text-sm">
                  The editors of the Zabella Zine are Domján Julcsi and Kisvarga
                  Anika.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/images/zabella_team.jpg"
                alt="Zabella Zine x Keeymen x Moldvai Collaboration"
                width={1000}
                height={1000}
                className="aspect-video w-full rounded-lg object-cover"
              />
              <p className="text-sm">
                {locale === 'hu' ? 'Versek' : 'Poems'}: Bakos Barna, Domján
                Julcsi, Filotás Karina, Gaál- Nyeste Katalin, Gerjeni Mirjam,
                Kisvarga Anika, Lakos Benedek, Nagy-Gulyka Brigitta, Nádas
                Dávid, Stermeczky Zsolt
              </p>
              <p className="text-sm">
                {locale === 'hu' ? 'Illusztrátorok' : 'Illustrators'}: Khor
                Fruzsi (
                <a
                  href="https://www.instagram.com/khorfruzsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @khorfruzsi
                </a>
                ), Kuti Luca Kamilla (
                <a
                  href="https://www.instagram.com/luca.kamilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @luca.kamilla
                </a>
                ), Radványi Maja (
                <a
                  href="https://www.instagram.com/majaradvanyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @majaradvanyi
                </a>
                ), Szabó Izabella (
                <a
                  href="https://www.instagram.com/pasztellneon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @pasztellneon
                </a>
                ), Szitnyai Krisztina (
                <a
                  href="https://www.instagram.com/szitnyai_kriszti_illustration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline underline-offset-4 hover:no-underline"
                >
                  @szitnyai_kriszti_illustration
                </a>
                )
              </p>
            </div>
            <Image
              src="/images/zine_preview.jpg"
              alt="Zabella Zine x Keeymen x Moldvai Collaboration"
              width={1000}
              height={1000}
              className="aspect-auto w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-3 rounded-lg border border-neutral-700 p-3 text-sm text-neutral-700">
              {locale === 'hu' ? (
                <p>
                  A zine-t postán küldjük el neked. Jelenleg csak Magyarországon
                  elérhető.
                </p>
              ) : (
                <p>
                  The zine will be sent to you by post. Currently only available
                  in Hungary.
                </p>
              )}
              {locale === 'hu' ? (
                <p>
                  A kiadvány ára az album letöltő kódjával együtt{' '}
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'HUF',
                    minimumFractionDigits: 0,
                  }).format(3990)}
                  .
                </p>
              ) : (
                <p>
                  The price of the zine includes the download code for the album
                  is{' '}
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'HUF',
                    minimumFractionDigits: 0,
                  }).format(3990)}
                  .
                </p>
              )}
            </div>
            <div className="mb-2 flex justify-center lg:my-4 lg:mb-0">
              <CheckoutSessionButton locale={locale} />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
