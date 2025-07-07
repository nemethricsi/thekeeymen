import { defineField, defineType } from 'sanity';

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menüpont',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare({ label }) {
      // Find the Hungarian label in the array
      const huLabel = label?.find((l: { _key: string }) => l._key === 'hu');
      return {
        title: huLabel?.value || 'No Hungarian label',
      };
    },
  },
});
