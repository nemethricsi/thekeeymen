import { defineField, defineType } from 'sanity';

export const epk = defineType({
  name: 'epk',
  title: 'Electronic Press Kit',
  type: 'document',
  icon: () => '🎙️',
  fields: [
    defineField({
      name: 'title',
      title: 'Cím',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'downloadablePressKit',
      type: 'object',
      title: 'Letölthető press kit',
      fields: [
        defineField({
          name: 'label',
          title: 'Letölthető press kit címe',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Press kit link',
          description:
            'Például Google Drive link, ahonnan le tudják tölteni a csomagot.',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'shortBioTitle',
      title: 'Rövid bio címe',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Rövid bio',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photosTitle',
      title: 'Képek címe',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaMentionsTitle',
      title: 'Média hivatkozások címe',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaMentions',
      title: 'Média hivatkozások',
      type: 'array',
      of: [{ type: 'mediaMention' }],
    }),
    defineField({
      name: 'socialMediaSection',
      title: 'Közösségi Média',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Cím',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'description',
          title: 'Leírás',
          type: 'internationalizedArrayText',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Electronic Press Kit',
      };
    },
  },
});
