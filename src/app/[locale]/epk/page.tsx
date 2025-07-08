import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchEpk, fetchNavigation } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { CopyButton } from '@/components/CopyButton';
import Image from 'next/image';

export default async function ElectronicPressKitPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  const epk = await fetchEpk({ locale });
  const mediaMentions = epk?.mediaMentions;

  return (
    <div className="min-h-screen bg-[#fbf6fd] text-[#38133f]">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-[calc(80px+3rem)]">
        <Container className="gap-10 pb-8 sm:gap-16">
          <h1 className="text-center font-serif text-4xl font-bold">
            {epk?.title}
          </h1>
          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold">
              {epk?.shortBioTitle}
            </h2>
            {epk?.shortBio && (
              <div className="relative rounded-md border bg-[#f5edfa] p-4 pt-12 text-left text-base leading-relaxed">
                <CopyButton
                  text={epk.shortBio}
                  className="absolute top-4 right-4 cursor-pointer rounded-md p-4 transition-colors hover:bg-[#edd9f5]"
                />

                {epk.shortBio}
              </div>
            )}
          </section>
          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold">
              {epk?.photosTitle}
            </h2>
            <div className="flex flex-col gap-4">
              <Image
                src="/images/press/Keeymen_5.jpg"
                alt="Hero"
                width={1000}
                height={1000}
                className="rounded-md"
              />
              <Image
                src="/images/press/Keeymen_7.jpg"
                alt="Hero"
                width={1000}
                height={1000}
                className="rounded-md"
              />
              <Image
                src="/images/press/Keeymen_8.jpg"
                alt="Hero"
                width={1000}
                height={1000}
                className="rounded-md"
              />
            </div>
          </section>
          {Array.isArray(mediaMentions) && mediaMentions.length > 0 && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk?.mediaMentionsTitle}
              </h2>
              <div className="flex flex-col gap-4">
                {mediaMentions?.map((mention) => (
                  <article
                    key={mention._key}
                    className="flex flex-col gap-1 rounded border bg-[#f5edfa] p-3 text-base leading-relaxed text-neutral-900"
                  >
                    <p className="italic">&ldquo;{mention.quote}&rdquo;</p>
                    <p className="text-sm font-semibold">
                      &mdash; {mention.publication}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
    </div>
  );
}
