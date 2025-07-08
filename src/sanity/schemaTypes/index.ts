import { homePage } from '@/sanity/schemaTypes/homePage';
import type { SchemaPluginOptions } from 'sanity';

import { pageSettings } from '@/sanity/schemaTypes/pageSettings';
import { socials } from '@/sanity/schemaTypes/socials';
import { menuItem } from '@/sanity/schemaTypes/objects/menuItem';
import { navigation } from '@/sanity/schemaTypes/navigation';
import { singletonTypes } from '@/sanity.config';

export const schema: SchemaPluginOptions = {
  types: [homePage, pageSettings, menuItem, navigation, socials],
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
