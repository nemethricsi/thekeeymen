import { LocalizedLink } from '@/components/LocalizedLink';
import { cn, externalLink } from '@/lib/utils';

export default function PrivacyConsent({
  privacyText,
  privacyLinkText,
  className,
}: {
  privacyText: string;
  privacyLinkText: string;
  className?: string;
}) {
  return (
    <p className={cn('text-xs text-neutral-500', className)}>
      *{privacyText}{' '}
      <LocalizedLink
        href="/privacy"
        className={cn('text-neutral-500 underline', className)}
        {...externalLink}
      >
        {privacyLinkText}
      </LocalizedLink>
      .
    </p>
  );
}
