import type { Metadata } from 'next';
import { Reddit_Sans, Bitter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { BackToTop } from '@/components/BackToTop';
import { MobileMenu } from '@/components/MobileMenu';
import { Footer } from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';

const redditSans = Reddit_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const bitterSansSerif = Bitter({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Keeymen',
  description:
    'The Keeymen is a surf rock supergroup from Lake Balaton, blending vintage guitar tones with modern energy. Check out our latest gigs, media, and press kit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          redditSans.variable,
          bitterSansSerif.variable,
          'min-h-screen bg-[#8e43a5] font-sans text-lg leading-relaxed text-[#fefefe] antialiased',
        )}
      >
        {children}
        <BackToTop />
        <MobileMenu />
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
