import { createOrUpdateSubscriber } from '@/lib/mailerlite';
import { UpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';

export async function syncSubscriber({
  email,
  groups,
}: {
  email: string;
  groups: UpdateSubscriberParams['groups'];
}) {
  return createOrUpdateSubscriber({
    email,
    groups,
  });
}
