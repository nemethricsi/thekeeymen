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
