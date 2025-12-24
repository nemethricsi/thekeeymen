'use server';

import { env } from '@/env';
import MailerLite, {
  CreateOrUpdateSubscriberParams,
} from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
  api_key: env.MAILERLITE_API_TOKEN,
});

export const createOrUpdateSubscriber = async (
  params: CreateOrUpdateSubscriberParams,
) => {
  // console.log({ locale });
  // const existingSubscriber = await mailerlite.subscribers.find(params.email);
  // const currentLocaleGroup = getMailingGroupByLocale(locale);
  // const groupsSubscribedTo = existingSubscriber.data.data.groups?.map(
  //   ({ id }) => id,
  // );

  // if (groupsSubscribedTo?.includes(currentLocaleGroup)) {
  //   throw Error('You are already subscribed to the newsletter');
  // }

  try {
    const response = await mailerlite.subscribers.createOrUpdate(params);
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Something went wrong',
    );
  }
};
