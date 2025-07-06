import { type SchemaTypeDefinition } from 'sanity';
import { homePage } from '@/sanity/schemaTypes/homePage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage],
};
