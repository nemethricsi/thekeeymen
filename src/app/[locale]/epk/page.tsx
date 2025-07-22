import { Metadata } from 'next';
import { Container } from '@/components/Container';
import { StaticNavbar } from '@/components/StaticNavbar';
import {
  fetchEpk,
  fetchMetadata,
  fetchNavigation,
  fetchReleases,
} from '@/sanity/lib/queries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { FaFilePdf } from 'react-icons/fa';
import { CopyTextButton } from '@/components/CopyTextButton';
import { IconType } from 'react-icons/lib';
import {
  SiApplemusic,
  SiBandcamp,
  SiGoogledrive,
  SiSpotify,
  SiYoutube,
} from 'react-icons/si';
import { type SocialLink } from '@/sanity/types';
import { ReusableTooltip } from '@/components/ReusableTooltip';
import { externalLink } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { baseURL } from '@/lib/constans';

const platformIcons: Record<SocialLink['platform'], IconType> = {
  bandcamp: SiBandcamp,
  youtube: SiYoutube,
  spotify: SiSpotify,
  appleMusic: SiApplemusic,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await fetchMetadata({ locale });
  const baseTitle = metadata?.seo?.title as string;
  const pageTitle = metadata?.seo?.epkPageTitle;
  const fullUrl = `${baseURL}/${locale}/epk`;

  return {
    title: `${pageTitle} • ${baseTitle}`,
    description: metadata?.seo?.description,
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      languages: {
        en: `${baseURL}/en/epk`,
        hu: `${baseURL}/hu/epk`,
      },
      canonical: {
        url: fullUrl,
      },
    },
    openGraph: {
      title: `${pageTitle} • ${baseTitle}`,
      description: metadata?.seo?.description as string,
      url: fullUrl,
      siteName: metadata?.seo?.title as string,
      locale,
      type: 'website',
      images: [
        {
          url:
            metadata?.seo?.openGraphImage?.asset?.url ||
            'https://thekeeymen.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} • ${baseTitle}`,
      description: metadata?.seo?.description as string,
    },
  };
}

export default async function ElectronicPressKitPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = await fetchNavigation({ locale });
  const epk = await fetchEpk({ locale });
  const releases = await fetchReleases();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 lg:pt-0">
      {data?.navigation && <StaticNavbar navItems={data.navigation} />}
      <main className="pt-32 lg:pt-36">
        <Container className="gap-16 pb-24 lg:gap-20">
          <div className="flex flex-col items-center gap-6">
            {/* <h1 className="text-center font-serif text-4xl font-bold">
              {epk?.title}
            </h1> */}
            <div className="flex flex-col items-center gap-3 self-start sm:flex-row">
              {epk?.downloadablePressKit != null && (
                <Link
                  href={epk.downloadablePressKit.url}
                  className="group flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 font-medium text-neutral-800 transition-colors hover:bg-neutral-200 sm:w-fit"
                  {...externalLink}
                >
                  <SiGoogledrive className="h-5 w-5" />
                  <span className="text-sm">
                    {epk.downloadablePressKit.label}
                  </span>
                  <ArrowRightIcon className="tranneutral-x-0 group-hover:tranneutral-x-1 hidden h-5 w-5 transition-transform duration-100 group-active:-rotate-45 sm:block" />
                  <ArrowUpRightIcon className="h-5 w-5 sm:hidden" />
                </Link>
              )}
              {epk?.downloadableRider != null && (
                <Link
                  href={epk.downloadableRider.url}
                  className="group flex items-center gap-2 self-start rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
                  {...externalLink}
                >
                  <FaFilePdf className="h-5 w-5" />
                  <span className="text-sm">{epk.downloadableRider.label}</span>
                  <ArrowRightIcon className="tranneutral-x-0 group-hover:tranneutral-x-1 hidden h-5 w-5 transition-transform duration-100 group-active:-rotate-45 sm:block" />
                  <ArrowUpRightIcon className="h-5 w-5 sm:hidden" />
                </Link>
              )}
            </div>
          </div>
          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-semibold">
              {epk?.shortBioSection?.shortBioTitle}
            </h2>
            {epk?.shortBioSection?.shortBio && (
              <div className="flex flex-col-reverse items-center gap-2 text-base sm:text-lg lg:flex-col">
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
          {epk?.pressPhotosSection && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk?.pressPhotosSection?.photosTitle}
              </h2>
              {epk?.pressPhotosSection &&
                Array.isArray(epk.pressPhotosSection.photos) &&
                epk.pressPhotosSection.photos.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
                    {epk.pressPhotosSection.photos.map((photo) => {
                      if (photo == null) return null;

                      return (
                        <div key={photo._key} className="group/photo relative">
                          <Image
                            src={urlFor(photo).width(800).url()}
                            alt={photo.alt}
                            width={1000}
                            height={1000}
                            className="h-56 rounded-lg object-cover group-hover/photo:brightness-110"
                          />
                          <ReusableTooltip
                            message="Open original size"
                            side="left"
                          >
                            <Link
                              href={urlFor(photo).url()}
                              className="group/button absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 transition-colors hover:bg-white/50"
                              {...externalLink}
                            >
                              <ArrowUpRightIcon className="h-6 w-6 text-white/75 group-hover/button:text-white" />
                            </Link>
                          </ReusableTooltip>
                        </div>
                      );
                    })}
                  </div>
                )}
            </section>
          )}
          {epk?.releasesSectionTitle != null && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk?.releasesSectionTitle}
              </h2>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {releases.map((release) => {
                  return (
                    <article
                      key={release._id}
                      className="flex flex-col gap-1 overflow-hidden rounded-lg"
                    >
                      <h2 className="text-left text-sm font-medium">
                        {release.title} (
                        <span className="uppercase">{release.type}</span>,{' '}
                        {release.releaseYear})
                      </h2>
                      <Image
                        src={
                          release.coverImage?.asset?.url ||
                          '/images/albumart.jpg'
                        }
                        alt={release.title}
                        width={800}
                        height={800}
                        className="rounded-lg"
                      />
                      <div className="flex flex-wrap items-center justify-start gap-1">
                        {release.availableOn?.map(({ platform, url }) => {
                          const Icon = platformIcons[platform];
                          return (
                            <ReusableTooltip
                              key={platform}
                              message={platform}
                              side="bottom"
                            >
                              <Link
                                href={url}
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-200 transition-colors hover:bg-neutral-300"
                                {...externalLink}
                              >
                                <Icon className="h-6 w-6" />
                              </Link>
                            </ReusableTooltip>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {epk?.mediaMentionsSection && (
            <section className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-semibold">
                {epk?.mediaMentionsSection?.mediaMentionsTitle}
              </h2>
              <div className="flex flex-col gap-4">
                {Array.isArray(epk.mediaMentionsSection.mediaMentions) &&
                  epk.mediaMentionsSection.mediaMentions.map((mention) => (
                    <article
                      key={mention._key}
                      className="flex flex-col gap-1 rounded-lg bg-neutral-100 p-5 text-base leading-relaxed sm:p-8"
                    >
                      <p className="italic">&ldquo;{mention.quote}&rdquo;</p>
                      <p className="text-sm font-semibold">
                        &mdash;{' '}
                        {mention.url != null ? (
                          <a
                            href={mention.url}
                            className="underline underline-offset-2"
                            {...externalLink}
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
          {epk?.socialMediaSection != null && (
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
