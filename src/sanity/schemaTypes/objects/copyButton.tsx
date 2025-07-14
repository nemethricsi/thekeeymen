import { defineField, defineType } from 'sanity';

export const copyButton = defineType({
  name: 'copyButton',
  title: 'Copy Button',
  type: 'object',
  fields: [
    defineField({
      name: 'copyLabel',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'successLabel',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'errorLabel',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      copyLabel: 'copyLabel',
    },
    prepare({ copyLabel }) {
      // Find the Hungarian label in the array
      const huLabel = copyLabel?.find((l: { _key: string }) => l._key === 'hu');
      return {
        title: huLabel?.value || 'No Hungarian label',
        media: <span style={{ fontSize: '1.5rem' }}>📋</span>,
      };
    },
  },
});
