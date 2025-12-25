'use client';

import { syncSubscriber } from '@/lib/mailerlite/subscriber.service';
import { CheckCircleIcon, Loader2Icon } from 'lucide-react';
import { useState, useTransition } from 'react';

import Button from '@/components/ui/button';

export default function MailerLiteNewsletterConsentButton({
  isSubscribed: initialIsSubscribed,
  email,
  groups,
  buttonLabel,
  alreadySubscribedLabel,
}: {
  isSubscribed: boolean;
  email: string;
  groups: string[];
  buttonLabel: string;
  alreadySubscribedLabel: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);

  const SubscribeButton = () => {
    return (
      <Button
        type="submit"
        disabled={isPending}
        className="w-full items-center gap-2 py-4 lg:py-3"
      >
        {isPending && <Loader2Icon className="h-4 w-4 animate-spin" />}
        <span>{buttonLabel}</span>
      </Button>
    );
  };

  if (isSubscribed) {
    return (
      <Button disabled className="w-full items-center gap-2 lg:w-fit">
        <CheckCircleIcon className="h-4 w-4" />
        {alreadySubscribedLabel}
      </Button>
    );
  }

  const handleSubmit = async () => {
    startTransition(async () => {
      await syncSubscriber({ email, groups });
      setIsSubscribed(true);
    });
  };

  return (
    <form action={handleSubmit}>
      <SubscribeButton />
    </form>
  );
}
