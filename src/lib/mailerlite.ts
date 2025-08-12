'use server';

import { env } from '@/env';
import MailerLite, {
  CreateOrUpdateSubscriberParams,
} from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
  api_key: env.MAILERLITE_API_TOKEN,
});

export const createSubscriber = async (
  params: CreateOrUpdateSubscriberParams,
) => {
  const existingSubscriber = await mailerlite.subscribers.find(params.email);
  if (existingSubscriber.data.data != null) {
    throw Error('You are already subscribed to the newsletter');
  }

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Something went wrong',
    );
  }
};
