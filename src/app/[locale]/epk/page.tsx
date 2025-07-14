import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import { fetchEpk, fetchNavigation, fetchReleases } from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, CloudDownloadIcon, IconNode } from 'lucide-react';
import { CopyTextButton } from '@/components/CopyTextButton';
import { IconType } from 'react-icons/lib';
import { SiApplemusic, SiBandcamp, SiSpotify, SiYoutube } from 'react-icons/si';
import { type SocialLink } from '@/sanity/types';

const platformIcons: Record<SocialLink['platform'], IconType> = {
  bandcamp: SiBandcamp,
  youtube: SiYoutube,
  spotify: SiSpotify,
  appleMusic: SiApplemusic,
};

export default async function ElectronicPressKitPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  const epk = await fetchEpk({ locale });
  const releases = await fetchReleases();
  const mediaMentions = epk?.mediaMentions;

  console.log(releases);

  return (
    <div className="min-h-screen bg-[#fbf6fd] text-[#38133f] sm:pt-28 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-[calc(80px+3rem)]">
        <Container className="gap-10 pb-12 lg:gap-16">
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
              {epk?.shortBioSection?.shortBioTitle}
            </h2>
            {epk?.shortBioSection?.shortBio && (
              <div className="flex flex-col-reverse items-center gap-2 lg:flex-col">
                <CopyTextButton
                  textToCopy={epk.shortBioSection.shortBio}
                  copyLabel={
                    epk.shortBioSection.copyButtonLabels?.copyLabel || 'Copy'
                  }
                  successLabel={
                    epk.shortBioSection.copyButtonLabels?.successLabel ||
                    'Copied!'
                  }
                  errorLabel={
                    epk.shortBioSection.copyButtonLabels?.errorLabel ||
                    'Error copying bio'
                  }
                  className="w-full justify-center lg:w-fit lg:self-start"
                />
                <p>{epk.shortBioSection.shortBio}</p>
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
          {epk?.releasesSectionTitle != null && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk?.releasesSectionTitle}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {releases.map((release) => {
                  return (
                    <article key={release._id} className="flex flex-col gap-1">
                      <Image
                        src={
                          release.coverImage?.asset?.url ||
                          '/images/albumart.jpg'
                        }
                        alt={release.title}
                        width={1000}
                        height={1000}
                      />
                      <h2 className="text-center text-base sm:text-left">
                        {release.title} (
                        <span className="uppercase">{release.type}</span>,{' '}
                        {release.releaseYear})
                      </h2>
                      <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
                        {release.availableOn?.map(({ platform, url }) => {
                          const Icon = platformIcons[platform];
                          return (
                            <Link
                              href={url}
                              key={platform}
                              className="flex h-10 w-10 items-center justify-center bg-[#f5edfa] hover:bg-white"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon className="h-6 w-6" />
                            </Link>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
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
