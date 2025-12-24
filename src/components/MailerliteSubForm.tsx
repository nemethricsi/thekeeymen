'use client';

import { createOrUpdateSubscriber } from '@/lib/mailerlite';
import { getLocaleFromPathname, getMailingGroupByLocale } from '@/lib/utils';
import { MAILERLITE_QUERYResult } from '@/sanity/types';
import { MailIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const MailerliteSubForm = ({
  mailerlite,
}: {
  mailerlite: MAILERLITE_QUERYResult;
}) => {
  const emailSchema = z.object({
    email: z.email(
      mailerlite?.toastMessages?.invalidEmail ??
        'Please enter a valid email address',
    ),
  });

  const [email, setEmail] = useState('');
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = emailSchema.safeParse({ email });

    if (!validationResult.success) {
      toast.error(
        mailerlite?.toastMessages?.invalidEmail ??
          'Please enter a valid email address',
      );
      return;
    }

    try {
      const { data } = await createOrUpdateSubscriber({
        email,
        groups: [getMailingGroupByLocale(locale)],
      });
      console.log(data);
      toast.success(
        mailerlite?.toastMessages?.success ??
          'You are now subscribed to The Keeymen Mailing List!',
      );
      setEmail('');
    } catch (error) {
      console.error(error);
      toast.error(mailerlite?.toastMessages?.error ?? 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-0">
        <div className="flex items-center gap-2">
          <MailIcon className="-mt-0.5 h-6 w-6 text-white/50" />
          <h2 className="font-serif font-semibold text-white">
            {mailerlite?.title}
          </h2>
        </div>
        <p className="text-sm font-medium text-white/75">
          {mailerlite?.description}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mb-10 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          name="email"
          required
          placeholder={mailerlite?.inputPlaceholder ?? 'Email address'}
          className="outline-lila-400 w-full rounded-lg border-white/20 bg-white/10 px-5 py-3 text-base font-medium text-white focus:bg-white/20 focus:outline-2 focus:outline-offset-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="text-lila-700 outline-lila-400 rounded-lg border border-white bg-white px-4 py-2 leading-6 font-semibold transition-colors hover:border-neutral-200 hover:bg-neutral-200 focus:outline-2 focus:outline-offset-3"
        >
          {mailerlite?.buttonLabel ?? 'Subscribe'}
        </button>
      </form>
    </div>
  );
};
