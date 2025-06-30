import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const parseBandsInTownDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const day = format(date, 'dd');
  const month = format(date, 'MMM', { locale: enUS });
  const year = format(date, 'yyyy');

  return { day, month, year };
};
