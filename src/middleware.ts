import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from '@/i18n-config';
import { type NextRequest, NextResponse } from 'next/server';

const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip locale redirect for /admin path and public files
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/documents') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/svg') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/opengraph') ||
    pathname.startsWith('/robots')
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products?session_id=abc
    // The new URL is now /en/products?session_id=abc
    const newPath = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(new URL(newPath, request.url), 301);
  }
}

export const config = {
  // matcher: '/cart'
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
