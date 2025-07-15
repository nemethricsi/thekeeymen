import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Főoldal',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Title',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Youtube URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'noResultText',
      type: 'internationalizedArrayString',
      title: 'Bands in town no concert text',
      description:
        'Ez akkor jelenik meg, amikor nincs egy jövőbeli koncert sem a Bands in town-ban.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Főoldal',
      };
    },
  },
});
