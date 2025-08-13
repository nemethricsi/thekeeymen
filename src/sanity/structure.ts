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
      S.listItem()
        .id('epk')
        .schemaType('epk')
        .title('Press Kit')
        .child(S.editor().id('epk').schemaType('epk').documentId('epk')),
      S.listItem()
        .id('contactForm')
        .schemaType('contactForm')
        .title('Kontakt form')
        .child(
          S.editor()
            .id('contactForm')
            .schemaType('contactForm')
            .documentId('contactForm'),
        ),
      S.listItem()
        .id('mailerlite')
        .schemaType('mailerlite')
        .title('Email marketing (Mailerlite)')
        .child(
          S.editor()
            .id('mailerlite')
            .schemaType('mailerlite')
            .documentId('mailerlite'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'homePage' &&
          item.getId() !== 'navigation' &&
          item.getId() !== 'pageSettings' &&
          item.getId() !== 'socials' &&
          item.getId() !== 'epk' &&
          item.getId() !== 'contactForm' &&
          item.getId() !== 'mailerlite',
      ),
    ]);
