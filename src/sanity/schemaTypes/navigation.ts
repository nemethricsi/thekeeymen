import { defineType } from 'sanity';

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigáció',
  type: 'array',
  of: [{ type: 'menuItem' }],
});
