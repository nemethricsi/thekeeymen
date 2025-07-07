import { defineField, defineType } from 'sanity';

export const pageSettings = defineType({
  name: 'pageSettings',
  title: 'Beállítások',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'navigation',
      title: 'Navigáció',
      description: 'A navigációs menüpontok.',
      type: 'navigation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      type: 'internationalizedArrayString',
      title: 'SEO Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      type: 'internationalizedArrayText',
      title: 'SEO Description',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Oldal beállítások',
      };
    },
  },
});
