import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homePage"][0]{ title }`);

export const fetchHomePage = async () => {
  const result = await sanityFetch({ query: HOME_PAGE_QUERY });
  return result.data;
};
