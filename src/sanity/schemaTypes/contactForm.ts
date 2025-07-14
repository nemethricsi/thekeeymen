import { defineField, defineType } from 'sanity';

export const contactForm = defineType({
  name: 'contactForm',
  title: 'Kontakt form',
  type: 'document',
  icon: () => '💬',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Szekció címe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placeholders',
      type: 'object',
      title: 'Placeholders',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'message',
          type: 'internationalizedArrayString',
          title: 'Üzenet',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          type: 'internationalizedArrayString',
          title: 'Email',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'phone',
          type: 'internationalizedArrayString',
          title: 'Telefonszám',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'submitButton',
      type: 'object',
      title: 'Küldés gomb',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'sendLabel',
          type: 'internationalizedArrayString',
          title: 'Küldés címke',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sendingLabel',
          type: 'internationalizedArrayString',
          title: 'Küldés folyamatban címke',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'messages',
      type: 'object',
      title: 'Üzenetek',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'success',
          type: 'internationalizedArrayString',
          title: 'Sikeres küldés',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'error',
          type: 'internationalizedArrayString',
          title: 'Hiba',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Kontakt form',
      };
    },
  },
});
