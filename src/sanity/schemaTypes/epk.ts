import { defineField, defineType } from 'sanity';

export const epk = defineType({
  name: 'epk',
  title: 'Press Kit',
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
      name: 'downloadableRider',
      type: 'object',
      title: 'Letölthető Rider',
      fields: [
        defineField({
          name: 'label',
          title: 'Letölthető Rider címe',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Rider link',
          description:
            'Például Google Drive link, ahonnan le tudják tölteni a Ridert.',
          type: 'url',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'shortBioSection',
      title: 'Rövid bio',
      type: 'object',
      fields: [
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
          name: 'copyButtonLabels',
          title: 'Copy Button',
          type: 'copyButton',
        }),
      ],
    }),
    defineField({
      name: 'pressPhotosSection',
      title: 'Sajtófotók szekció',
      type: 'object',
      fields: [
        defineField({
          name: 'photosTitle',
          title: 'Szekció címe',
          type: 'internationalizedArrayString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'photos',
          title: 'Sajtófotók',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternatív szöveg',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'mediaMentionsSection',
      title: 'Média hivatkozások szekció',
      type: 'object',
      fields: [
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
      ],
    }),
    defineField({
      name: 'releasesSectionTitle',
      title: 'Megjelenések szekció címe',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
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
