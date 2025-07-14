import { defineField, defineType } from 'sanity';

const TYPES = [
  { title: 'Single', value: 'single' },
  { title: 'EP', value: 'ep' },
  { title: 'LP', value: 'lp' },
  { title: 'Album', value: 'album' },
  { title: 'Demo', value: 'demo' },
  { title: 'Live Album', value: 'liveAlbum' },
];

export const release = defineType({
  name: 'release',
  title: 'Megjelenések',
  type: 'document',
  icon: () => '📀',
  fields: [
    defineField({
      name: 'title',
      title: 'Cím',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Típus',
      type: 'string',
      options: {
        list: TYPES,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseYear',
      title: 'Megjelenés éve',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^\d{4}$/, {
          name: 'year',
          invert: false,
        }).error('Please enter a valid 4-digit year (e.g., 2024)'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Borítókép',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formats',
      title: 'Elérhető formátumok',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Digital', value: 'digital' },
          { title: 'Vinyl', value: 'vinyl' },
          { title: 'CD', value: 'cd' },
          { title: 'Cassette', value: 'cassette' },
        ],
        layout: 'list',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'availableOn',
      title: 'Elérhető ezeken a platformokon',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      coverImage: 'coverImage',
      releaseYear: 'releaseYear',
    },
    prepare({ title, type, coverImage, releaseYear }) {
      const typeObj = TYPES.find((t) => t.value === type);
      const typeTitle = typeObj ? typeObj.title : typeObj;

      return {
        title: `${title} (${typeTitle})`,
        subtitle: `${releaseYear}`,
        media: coverImage,
      };
    },
  },
});
