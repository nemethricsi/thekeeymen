'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export const singletonTypes = new Set([
  'homePage',
  'pageSettings',
  'socials',
  'epk',
  'contactForm',
]);

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    internationalizedArray({
      languages: [
        { id: 'hu', title: 'Magyar' },
        { id: 'en', title: 'English' },
      ],
      fieldTypes: ['string', 'text'],
      defaultLanguages: ['hu'],
    }),
  ],
  document: {
    newDocumentOptions: (prev) =>
      prev.filter(
        (item) =>
          item.templateId !== 'homePage' &&
          item.templateId !== 'pageSettings' &&
          item.templateId !== 'socials' &&
          item.templateId !== 'epk' &&
          item.templateId !== 'contactForm',
      ),
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
