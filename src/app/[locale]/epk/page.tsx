import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchEpk, fetchNavigation } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { CopyButton } from '@/components/CopyButton';

export default async function ElectronicPressKitPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  const epk = await fetchEpk({ locale });
  const mediaMentions = epk?.mediaMentions;

  console.log({ mediaMentions });

  return (
    <div className="min-h-screen bg-[#8e43a5]">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-[calc(80px+2rem)]">
        <Container className="gap-10 pb-8">
          <h1 className="text-center text-4xl font-bold">{epk?.title}</h1>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Rövid bio</h2>
            {epk?.shortBio && (
              <div className="relative rounded-md bg-black/10 p-4 pr-16 text-left shadow-inner">
                <CopyButton
                  text={epk.shortBio}
                  className="absolute top-4 right-4 cursor-pointer rounded-md border border-white/40 p-4 hover:bg-white/20"
                />

                {epk.shortBio}
              </div>
            )}
          </section>
          {Array.isArray(mediaMentions) && mediaMentions.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">Rólunk mondták</h2>
              <div className="flex flex-col gap-4">
                {mediaMentions?.map((mention) => (
                  <article
                    key={mention._key}
                    className="rounded bg-neutral-50 p-2 text-base leading-relaxed text-neutral-900"
                  >
                    <p>&ldquo;{mention.quote}&rdquo;</p>
                    <p>{mention.publication}</p>
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
