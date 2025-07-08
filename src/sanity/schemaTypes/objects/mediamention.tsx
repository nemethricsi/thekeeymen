import { defineField, defineType } from 'sanity';

export const mediaMention = defineType({
  name: 'mediaMention',
  title: 'Média hivatkozás',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Idézet',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Médium',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'title',
      title: 'Cikk címe',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Szerző',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Dátum',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      publication: 'publication',
    },
    prepare({ publication }) {
      return {
        title: publication,
        media: <span style={{ fontSize: '1.5rem' }}>📰</span>,
      };
    },
  },
});
