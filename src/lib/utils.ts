import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Locale } from '@/i18n-config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeToInt(time: string) {
  return parseFloat(time.replace(':', '.'));
}

export function getLocaleFromPathname(pathname: string) {
  const pathnameParts = pathname.split('/');
  return pathnameParts[1] as Locale;
}

export const externalLink = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export function parseSpotifyIframe(iframeHtml: string): string | null {
  const srcMatch = iframeHtml.match(/src="([^"]+)"/);
  if (!srcMatch) return null;

  const url = new URL(srcMatch[1]);
  // Töröljük a fölös query paramétereket, hogy letisztult legyen
  url.search = ''; // így sötét téma lesz

  return url.toString();
}

const renderTemplate = <T extends Record<string, string>>(
  template: string,
  variables: T,
): string => {
  return template.replace(/{{\s*(\w+)\s*}}/g, (_, key: string) => {
    if (key in variables) {
      return variables[key as keyof T];
    }
    return '';
  });
};

type EmailSubjectVariables = {
  email: string;
};

export const renderEmailSubject = (
  template: string,
  variables: EmailSubjectVariables,
) => {
  return renderTemplate(template, variables);
};
