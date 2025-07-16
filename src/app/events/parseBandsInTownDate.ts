import { format } from 'date-fns';
import { enUS, hu } from 'date-fns/locale';
import { Locale } from '@/i18n-config';

export const parseBandsInTownDate = (dateTime: string, locale: Locale) => {
  const date = new Date(dateTime);
  const day = format(date, 'dd');
  const month = format(date, 'MMM', { locale: localeMap[locale] });
  const year = format(date, 'yyyy');

  return { day, month, year };
};

const localeMap = {
  hu: hu,
  en: enUS,
};
