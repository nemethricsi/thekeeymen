import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id('homePage')
        .schemaType('homePage')
        .title('Főoldal')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage'),
        ),
      S.listItem()
        .id('pageSettings')
        .schemaType('pageSettings')
        .title('Oldal beállítások')
        .child(
          S.editor()
            .id('pageSettings')
            .schemaType('pageSettings')
            .documentId('pageSettings'),
        ),
      S.listItem()
        .id('socials')
        .schemaType('socials')
        .title('Streaming linkek')
        .child(
          S.editor().id('socials').schemaType('socials').documentId('socials'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'homePage' &&
          item.getId() !== 'navigation' &&
          item.getId() !== 'pageSettings' &&
          item.getId() !== 'socials',
      ),
    ]);
