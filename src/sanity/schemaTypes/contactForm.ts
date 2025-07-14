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
    }),
    defineField({
      name: 'placeholders',
      type: 'object',
      title: 'Placeholders',
      fields: [
        defineField({
          name: 'message',
          type: 'internationalizedArrayString',
          title: 'Üzenet',
        }),
        defineField({
          name: 'email',
          type: 'internationalizedArrayString',
          title: 'Email',
        }),
        defineField({
          name: 'phone',
          type: 'internationalizedArrayString',
          title: 'Telefonszám',
        }),
      ],
    }),
    defineField({
      name: 'submitButton',
      type: 'object',
      title: 'Küldés gomb',
      fields: [
        defineField({
          name: 'sendLabel',
          type: 'internationalizedArrayString',
          title: 'Küldés címke',
        }),
        defineField({
          name: 'sendingLabel',
          type: 'internationalizedArrayString',
          title: 'Küldés folyamatban címke',
        }),
      ],
    }),
    defineField({
      name: 'messages',
      type: 'object',
      title: 'Üzenetek',
      fields: [
        defineField({
          name: 'success',
          type: 'internationalizedArrayString',
          title: 'Sikeres küldés',
        }),
        defineField({
          name: 'error',
          type: 'internationalizedArrayString',
          title: 'Hiba',
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
