import { Container } from '@/components/Container';
import {
  SiBandcamp,
  SiSpotify,
  SiApplemusic,
  SiBandsintown,
} from 'react-icons/si';
import { fetchSocials } from '@/sanity/lib/queries';
import { ReusableTooltip } from '@/components/ReusableTooltip';
import { externalLink } from '@/lib/utils';

export const Footer = async ({
  seoTitle,
}: {
  seoTitle: string | null | undefined;
}) => {
  const socials = await fetchSocials();

  return (
    <footer className="from-lila-900 to-kashmir-600 relative bg-linear-to-b">
      <Container className="flex flex-col gap-1 py-6">
        <div className="flex justify-start sm:justify-center sm:gap-5 sm:p-4 lg:gap-10">
          {socials?.bandcamp && (
            <ReusableTooltip message="Bandcamp">
              <SocialIcon href={socials.bandcamp} ariaLabel="Bandcamp">
                <SiBandcamp
                  size={30}
                  className="text-white sm:opacity-95 sm:group-hover:opacity-100"
                />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.spotify && (
            <ReusableTooltip message="Spotify">
              <SocialIcon href={socials.spotify} ariaLabel="Spotify">
                <SiSpotify
                  size={30}
                  className="text-white sm:opacity-95 sm:group-hover:opacity-100"
                />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.appleMusic && (
            <ReusableTooltip message="Apple music">
              <SocialIcon href={socials.appleMusic} ariaLabel="Apple music">
                <SiApplemusic
                  size={30}
                  className="text-white sm:opacity-95 sm:group-hover:opacity-100"
                />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.bandsInTown && (
            <ReusableTooltip message="Bands in Town">
              <SocialIcon href={socials.bandsInTown} ariaLabel="Bandsintown">
                <SiBandsintown
                  size={30}
                  className="text-white opacity-95 group-hover:opacity-100"
                />
              </SocialIcon>
            </ReusableTooltip>
          )}
        </div>
        <p className="text-kashmir-50 text-xs uppercase sm:text-center sm:text-sm">
          © {seoTitle ? seoTitle : 'The Keeymen'} 2013 -{' '}
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

const SocialIcon = ({
  children,
  href,
  ariaLabel,
}: {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}) => {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      className="group flex h-12 w-12 items-center justify-center rounded-full opacity-90 transition-all duration-300 hover:-rotate-12 hover:bg-white/10 hover:opacity-100"
      {...externalLink}
    >
      {children}
    </a>
  );
};
