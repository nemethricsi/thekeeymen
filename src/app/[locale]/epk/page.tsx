import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchEpk, fetchNavigation } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import { CopyButton } from '@/components/CopyButton';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, CloudDownloadIcon } from 'lucide-react';

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
        <Container className="gap-10 pb-12 sm:gap-16">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-center font-serif text-4xl font-bold">
              {epk?.title}
            </h1>
            {epk?.downloadablePressKit != null && (
              <div>
                <Link
                  href={epk.downloadablePressKit.url}
                  target="_blank"
                  className="flex items-center gap-2 border bg-[#f5edfa] px-4 py-2 transition-colors hover:bg-[#edd9f5]"
                >
                  <CloudDownloadIcon />
                  <span>{epk.downloadablePressKit.label}</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            )}
          </div>
          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold">
              {epk?.shortBioTitle}
            </h2>
            {epk?.shortBio && (
              <div className="relative bg-[#f5edfa] p-8 pt-12 text-left text-base leading-relaxed">
                <CopyButton
                  text={epk.shortBio}
                  className="absolute top-4 right-4 cursor-pointer p-4 transition-colors hover:bg-[#edd9f5]"
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
                src="/images/press/Keeymen.jpg"
                alt="Keeymen"
                width={1000}
                height={1000}
                className="rounded-md"
              />
              <Image
                src="/images/press/Keeymen_5.jpg"
                alt="Keeymen5"
                width={1000}
                height={1000}
                className="rounded-md"
              />
              <Image
                src="/images/press/Keeymen_7.jpg"
                alt="Keeymen7"
                width={1000}
                height={1000}
                className="rounded-md"
              />
              <Image
                src="/images/press/Keeymen_8.jpg"
                alt="Keeymen8"
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
                    className="flex flex-col gap-1 bg-[#f5edfa] p-8 text-base leading-relaxed text-neutral-900"
                  >
                    <p className="italic">&ldquo;{mention.quote}&rdquo;</p>
                    <p className="text-sm font-semibold">
                      &mdash;{' '}
                      {mention.url != null ? (
                        <a
                          href={mention.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2"
                        >
                          {mention.publication}
                        </a>
                      ) : (
                        <span>{mention.publication}</span>
                      )}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
          {epk?.socialMediaSection && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk.socialMediaSection.title}
              </h2>
              <p>{epk.socialMediaSection.description}</p>
            </section>
          )}
        </Container>
      </main>
    </div>
  );
}
