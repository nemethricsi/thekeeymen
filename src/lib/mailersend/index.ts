'use server';

import { MailerSend, EmailParams, Recipient } from 'mailersend';

import { env } from '@/env';
import { CONTACT_EMAIL } from '@/lib/constans';

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
  const cc = [new Recipient(CONTACT_EMAIL)];

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
    .setCc(cc)
    .setTemplateId(templateId)
    .setPersonalization(personalization);

  const res = await mailerSend.email.send(emailParams);
  return res;
};
