'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

export const AnalyticsWrapper = () => {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');

  if (isAdminPath) return null;

  return (
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
  );
};
