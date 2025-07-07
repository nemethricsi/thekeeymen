import { Reddit_Sans, Bitter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SanityLive } from '@/sanity/lib/live';

const redditSans = Reddit_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const bitterSansSerif = Bitter({
  variable: '--font-serif',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          redditSans.variable,
          bitterSansSerif.variable,
          'min-h-screen bg-[#8e43a5] font-sans text-lg leading-relaxed text-[#fefefe] antialiased',
        )}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
