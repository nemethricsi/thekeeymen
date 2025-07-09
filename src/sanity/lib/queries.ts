import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { type Locale } from '@/i18n-config';

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    "title": title[_key == $locale][0].value,
    youtubeUrl,
  }
`);

export const fetchHomePage = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: HOME_PAGE_QUERY,
    params: { locale },
  });
  return result.data;
};

export const PAGE_SETTINGS_QUERY = defineQuery(`
  *[_id == "pageSettings"][0]{
    navigation,
    "seoTitle": seoTitle[_key == $locale][0].value,
    "seoDescription": seoDescription[_key == $locale][0].value,
  }
`);
export const fetchPageSettings = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: PAGE_SETTINGS_QUERY,
    params: { locale },
  });
  return result.data;
};

export const METADATA_QUERY = defineQuery(`
  *[_id == "pageSettings"][0]{
    "seoTitle": seoTitle[_key == $locale][0].value,
    "seoDescription": seoDescription[_key == $locale][0].value,
  }
`);
export const fetchMetadata = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: METADATA_QUERY,
    params: { locale },
  });
  return result.data;
};

export const NAVIGATION_QUERY = defineQuery(`
  *[_id == "pageSettings"][0]{
    "navigation": navigation[]{
      href,
      "label": label[_key == $locale][0].value,
    }
  }
`);
export const fetchNavigation = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: NAVIGATION_QUERY,
    params: { locale },
  });
  return result.data;
};

export const SOCIALS_QUERY = defineQuery(`
  *[_id == "socials"][0]{
    spotify,
    bandcamp,
    appleMusic,
  }
`);
export const fetchSocials = async () => {
  const result = await sanityFetch({
    query: SOCIALS_QUERY,
  });
  return result.data;
};

export const EPK_QUERY = defineQuery(`
  *[_id == "epk"][0]{
    "title": title[_key == $locale][0].value,
    downloadablePressKit{
      "label": label[_key == $locale][0].value,
      url,
    },
    socialMediaSection{
      "title": title[_key == $locale][0].value,
      "description": description[_key == $locale][0].value,
    },
    "shortBioTitle": shortBioTitle[_key == $locale][0].value,
    "shortBio": shortBio[_key == $locale][0].value,
    "photosTitle": photosTitle[_key == $locale][0].value,
    "mediaMentionsTitle": mediaMentionsTitle[_key == $locale][0].value,
    "mediaMentions": mediaMentions[]{
      ...,
      "quote": quote[_key == $locale][0].value,
      publication,
      url,
      title,
      author,
      date,
    }
  }
`);
export const fetchEpk = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: EPK_QUERY,
    params: { locale },
  });
  return result.data;
};

export const OPEN_GRAPH_IMAGE_QUERY = defineQuery(`
  *[_id == "pageSettings"][0]{
    openGraphImage{
      asset->{
        url,
      }
    }
  }
`);

export const fetchOpenGraphImage = async () => {
  const result = await sanityFetch({
    query: OPEN_GRAPH_IMAGE_QUERY,
  });
  return result.data;
};
