'use client';

import { Locale } from '@/i18n-config';
import { ReusableTooltip } from './ReusableTooltip';
import { ArrowRightIcon, Loader2Icon } from 'lucide-react';
import { createCheckoutSession } from '@/server/actions';
import { toast } from 'react-toastify';
import { useState } from 'react';
import {
  MOLDVAI_ZINE_PRICE_IN_CENTS,
  MOLDVAI_ZINE_SHIPPING_PRICE_IN_CENTS,
} from '@/lib/constans';

export const CheckoutSessionButton = ({ locale }: { locale: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const response = await createCheckoutSession(locale);
    if (response.error) {
      toast.error(response.message);
    } else if (response.data?.url) {
      window.location.href = response.data.url;
    } else {
      toast.error('Failed to create checkout session');
    }
  };

  return (
    <ReusableTooltip
      message={
        locale === 'hu'
          ? `A zine-t postán küldjük el neked. Jelenleg csak Magyarországon elérhető. A kiadvány ára az album letöltő kódjával együtt ${new Intl.NumberFormat(
              locale,
              {
                style: 'currency',
                currency: 'HUF',
                minimumFractionDigits: 0,
              },
            ).format(
              MOLDVAI_ZINE_PRICE_IN_CENTS / 100,
            )} + ${new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: 'HUF',
              minimumFractionDigits: 0,
            }).format(
              MOLDVAI_ZINE_SHIPPING_PRICE_IN_CENTS / 100,
            )} postaköltség.`
          : `The zine will be sent to you by post. Currently only available in Hungary. The price of the zine is ${new Intl.NumberFormat(
              locale,
              {
                style: 'currency',
                currency: 'HUF',
                minimumFractionDigits: 0,
              },
            ).format(
              MOLDVAI_ZINE_PRICE_IN_CENTS / 100,
            )}, plus ${new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: 'HUF',
              minimumFractionDigits: 0,
            }).format(
              MOLDVAI_ZINE_SHIPPING_PRICE_IN_CENTS / 100,
            )} for postage. The price also includes the download code for the album.`
      }
    >
      <button
        type="button"
        disabled={isLoading}
        className="bg-lila-700 group hover:bg-lila-500 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-white uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
        onClick={handleClick}
      >
        {isLoading ? (
          <Loader2Icon className="w-[143px] animate-spin" />
        ) : (
          <span>{locale === 'hu' ? 'Megrendelem!' : 'Buy now!'}</span>
        )}
        {!isLoading && (
          <ArrowRightIcon className="h-5 w-5 translate-x-0 transition-transform duration-100 group-hover:translate-x-1" />
        )}
      </button>
    </ReusableTooltip>
  );
};
