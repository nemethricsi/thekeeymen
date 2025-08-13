import { defineField, defineType } from 'sanity';

export const mailerlite = defineType({
  name: 'mailerlite',
  title: 'Email marketing (Mailerlite)',
  type: 'document',
  icon: () => '💌',
  fields: [
    defineField({
      name: 'title',
      title: 'Cím',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Leírás',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inputPlaceholder',
      title: 'Input mező placeholder',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Gomb címke',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'toastMessages',
      title: 'Toast üzenetek',
      type: 'object',
      fields: [
        defineField({
          name: 'success',
          title: 'Sikeres üzenet',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'error',
          title: 'Hibaüzenet',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'invalidEmail',
          title: 'Érvénytelen email cím',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'linkToSubscriptionForm',
      title: 'Link a feliratkozásra',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Szöveg',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'linkText',
          title: 'Link szövege',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Email marketing (Mailerlite)',
      };
    },
  },
});
