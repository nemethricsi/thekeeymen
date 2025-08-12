import { Reddit_Sans, Bitter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SanityLive } from '@/sanity/lib/live';
import { AnalyticsWrapper } from '@/components/AnalyticsWrapper';
import { ToastContainer, Bounce } from 'react-toastify';

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
          'bg-linen-50 min-h-screen font-sans text-lg leading-relaxed text-black antialiased',
        )}
      >
        {children}
        <SanityLive />
        <AnalyticsWrapper />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
