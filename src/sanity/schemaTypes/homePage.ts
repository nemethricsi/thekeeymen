import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Főoldal',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'embedYoutube',
      title: 'Youtube videó',
      type: 'object',
      fields: [
        defineField({
          name: 'caption',
          title: 'Youtube beágyazás címe',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'youtubeUrl',
          title: 'Youtube URL',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'embedSpotify',
      title: 'Spotify beágyazás',
      type: 'object',
      fields: [
        defineField({
          name: 'caption',
          title: 'Spotify beágyazás címe',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'embedCode',
          title: 'Spotify embed code',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'noResultText',
      type: 'internationalizedArrayString',
      title: 'Bands in town no concert text',
      description:
        'Ez akkor jelenik meg, amikor nincs egy jövőbeli koncert sem a Bands in town-ban.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bandsInTownButtonText',
      type: 'internationalizedArrayString',
      title: 'Bands in town button text',
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
