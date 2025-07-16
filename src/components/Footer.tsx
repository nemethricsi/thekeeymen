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
    <footer className="relative bg-[#408ea3]">
      <Container className="flex flex-col gap-1 pt-5 pb-4">
        <div className="flex justify-start sm:justify-center sm:gap-5 sm:p-4 lg:gap-10">
          {socials?.bandcamp && (
            <ReusableTooltip message="Bandcamp">
              <SocialIcon href={socials.bandcamp}>
                <SiBandcamp size={30} />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.spotify && (
            <ReusableTooltip message="Spotify">
              <SocialIcon href={socials.spotify}>
                <SiSpotify size={30} />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.appleMusic && (
            <ReusableTooltip message="Apple music">
              <SocialIcon href={socials.appleMusic}>
                <SiApplemusic size={30} />
              </SocialIcon>
            </ReusableTooltip>
          )}
          {socials?.bandsInTown && (
            <ReusableTooltip message="Bands in Town">
              <SocialIcon href={socials.bandsInTown}>
                <SiBandsintown size={30} />
              </SocialIcon>
            </ReusableTooltip>
          )}
        </div>
        <p className="text-xs text-neutral-200 uppercase sm:text-center sm:text-sm">
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
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex h-12 w-12 items-center justify-center rounded-full opacity-90 transition-all duration-300 hover:-rotate-12 hover:bg-white/10 hover:opacity-100"
      {...externalLink}
    >
      {children}
    </a>
  );
};
