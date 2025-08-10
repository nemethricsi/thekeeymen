import { defineField, defineType } from 'sanity';

export const news = defineType({
  name: 'news',
  title: 'Hírek',
  type: 'document',
  icon: () => '🗞️',
  fields: [
    defineField({
      name: 'publishedAt',
      title: 'Időpont',
      description:
        'A hír publikálásának időpontja. Ez egy szabadon állítható dátum. Ez hasznos, ha például előre megírsz egy hírt, de majd csak adott időpontban akarod publikálni a Főoldalon.',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Cím',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Leírás',
      type: 'internationalizedArrayText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to action',
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
        defineField({
          name: 'isExternal',
          title: 'Új lapon nyíljon meg',
          type: 'boolean',
          initialValue: false,
          options: {
            layout: 'switch',
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ title, publishedAt }) {
      const hungarianTitle =
        title?.find((item: { _key: string }) => item._key === 'hu')?.value ||
        title?.[0]?.value ||
        'Untitled';
      const formattedDate =
        typeof publishedAt === 'string'
          ? new Date(publishedAt).toLocaleDateString('hu-HU', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })
          : '';

      return {
        title: hungarianTitle,
        subtitle: formattedDate,
      };
    },
  },
});
