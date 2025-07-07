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
