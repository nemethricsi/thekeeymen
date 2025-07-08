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
      name: 'shortBio',
      title: 'Rövid bio',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaMentions',
      title: 'Média hivatkozások',
      type: 'array',
      of: [{ type: 'mediaMention' }],
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
