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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'internationalizedArrayString',
          title: 'SEO Title',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'internationalizedArrayText',
          title: 'SEO Description',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'openGraphImage',
          type: 'image',
          title: 'Open Graph Image',
          description:
            'A kép, ami a share-nél jelenik meg. 1200 x 630px legyen.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'homePageTitle',
          type: 'internationalizedArrayString',
          title: 'Főoldal címe',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'epkPageTitle',
          type: 'internationalizedArrayString',
          title: 'Sajtóoldal címe',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
