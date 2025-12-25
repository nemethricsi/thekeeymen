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

export const checkIfSubscribed = async (email: string | null | undefined) => {
  if (email == null)
    return { error: true, message: 'Email is required', data: {} };

  try {
    const existingSubscriber = await mailerlite.subscribers.find(email);
    return {
      error: false,
      message: 'Subscribed',
      data: existingSubscriber.data,
    };
  } catch (err) {
    console.log(err);
    return { error: true, message: 'Something went wrong', data: err };
  }
};
