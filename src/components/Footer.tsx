import { Container } from '@/components/Container';
import { SiBandcamp, SiSpotify, SiApplemusic } from 'react-icons/si';
import { fetchSocials } from '@/sanity/lib/queries';
import { ReusableTooltip } from './ReusableTooltip';

export const Footer = async () => {
  const socials = await fetchSocials();

  return (
    <footer className="relative bg-[#408ea3] pb-5">
      <Container className="pt-5">
        <div className="flex justify-center gap-5 p-4 lg:gap-10">
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
        </div>
        <p className="text-center text-sm text-neutral-200">
          © The Keeymen 2013 - {new Date().getFullYear()}
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
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
