'use server';

import { MailerSend, EmailParams, Recipient } from 'mailersend';

import { env } from '@/env';

const mailerSend = new MailerSend({
  apiKey: env.MAILERSEND_API_TOKEN,
});

export const sendOrderConfirmationEmail = async ({
  email,
  orderUrl,
  templateId,
}: {
  email: string;
  orderUrl: string;
  templateId: string;
}) => {
  const recipients = [new Recipient(email)];

  const personalization = [
    {
      email,
      data: {
        order_url: orderUrl,
      },
    },
  ];

  const emailParams = new EmailParams()
    .setTo(recipients)
    .setTemplateId(templateId)
    .setPersonalization(personalization);

  const res = await mailerSend.email.send(emailParams);
  return res;
};
