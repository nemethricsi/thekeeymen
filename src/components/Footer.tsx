import { Container } from '@/components/Container';
import { SiBandcamp, SiSpotify, SiApplemusic } from 'react-icons/si';
import { fetchSocials } from '@/sanity/lib/queries';

export const Footer = async () => {
  const socials = await fetchSocials();

  return (
    <footer className="relative bg-[#25147B] pb-5">
      <Container className="pt-5">
        <div className="flex justify-center gap-5 p-4 sm:gap-10">
          {socials?.bandcamp && (
            <SocialIcon href={socials.bandcamp} title="Bandcamp">
              <SiBandcamp size={30} />
            </SocialIcon>
          )}
          {socials?.spotify && (
            <SocialIcon href={socials.spotify} title="Spotify">
              <SiSpotify size={30} />
            </SocialIcon>
          )}
          {socials?.appleMusic && (
            <SocialIcon href={socials.appleMusic} title="Apple music">
              <SiApplemusic size={30} />
            </SocialIcon>
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
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
}) => {
  return (
    <a
      href={href}
      title={title}
      className="flex h-12 w-12 items-center justify-center rounded-full opacity-90 transition-all duration-300 hover:-rotate-12 hover:bg-white/10 hover:opacity-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
