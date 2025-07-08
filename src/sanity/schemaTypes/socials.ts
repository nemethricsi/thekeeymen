import { defineField, defineType } from 'sanity';

export const socials = defineType({
  name: 'socials',
  title: 'Streaming linkek',
  type: 'document',
  icon: () => '🌐',
  fields: [
    defineField({
      type: 'url',
      name: 'spotify',
      title: 'Spotify',
    }),
    defineField({
      type: 'url',
      name: 'bandcamp',
      title: 'Bandcamp',
    }),
    defineField({
      type: 'url',
      name: 'appleMusic',
      title: 'Apple Music',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Streaming linkek',
      };
    },
  },
});
