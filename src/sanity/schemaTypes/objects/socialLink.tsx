import { defineField, defineType } from 'sanity';
import { SiBandcamp, SiYoutube, SiSpotify, SiApplemusic } from 'react-icons/si';

const PLATFORMS = [
  { title: 'YouTube', value: 'youtube' },
  { title: 'Spotify', value: 'spotify' },
  { title: 'Apple Music', value: 'appleMusic' },
  { title: 'Bandcamp', value: 'bandcamp' },
];

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: PLATFORMS,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      subtitle: 'url',
    },
    prepare({ platform, subtitle }) {
      const platformObj = PLATFORMS.find((p) => p.value === platform);
      const platformTitle = platformObj ? platformObj.title : platform;
      return {
        title: platformTitle,
        subtitle: subtitle,
        media: () => {
          switch (platform) {
            case 'bandcamp':
              return <SiBandcamp />;
            case 'youtube':
              return <SiYoutube />;
            case 'spotify':
              return <SiSpotify />;
            case 'appleMusic':
              return <SiApplemusic />;
            default:
              return null;
          }
        },
      };
    },
  },
});
