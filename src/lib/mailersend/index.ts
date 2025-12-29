'use server';

import { MailerSend, EmailParams, Recipient } from 'mailersend';

import { env } from '@/env';

const mailerSend = new MailerSend({
  apiKey: env.MAILERSEND_API_TOKEN,
});

export const sendOrderConfirmationEmail = async ({
  email,
  orderUrlHu,
  orderUrlEn,
  templateId,
}: {
  email: string;
  orderUrlHu: string;
  orderUrlEn: string;
  templateId: string;
}) => {
  const recipients = [new Recipient(email)];

  const personalization = [
    {
      email,
      data: {
        order_url_hu: orderUrlHu,
        order_url_en: orderUrlEn,
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
