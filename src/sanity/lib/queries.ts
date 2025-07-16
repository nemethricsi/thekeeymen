import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { type Locale } from '@/i18n-config';

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    embedYoutube{
      "caption": caption[_key == $locale][0].value,
      youtubeUrl,
    },
    embedSpotify{
      "caption": caption[_key == $locale][0].value,
      embedCode,
    },
    bandsInTownLabels{
      "noResultText": noResultText[_key == $locale][0].value,
      "bandsInTownButtonText": bandsInTownButtonText[_key == $locale][0].value,
      "soldOut": soldOut[_key == $locale][0].value,
      "free": free[_key == $locale][0].value,
      "tickets": tickets[_key == $locale][0].value,
      "notifyMe": notifyMe[_key == $locale][0].value,
    },
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
    bandsInTown,
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
    shortBioSection{
      "shortBioTitle": shortBioTitle[_key == $locale][0].value,
      "shortBio": shortBio[_key == $locale][0].value,
      copyButtonLabels{
        "copyLabel": copyLabel[_key == $locale][0].value,
        "successLabel": successLabel[_key == $locale][0].value,
        "errorLabel": errorLabel[_key == $locale][0].value,
      }
    },
    pressPhotosSection{
      "photosTitle": photosTitle[_key == $locale][0].value,
      photos,
    },
    mediaMentionsSection{
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
    },
    socialMediaSection{
      "title": title[_key == $locale][0].value,
      "description": description[_key == $locale][0].value,
    },
    "releasesSectionTitle": releasesSectionTitle[_key == $locale][0].value,
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

export const CONTACT_FORM_QUERY = defineQuery(`
  *[_id == "contactForm"][0]{
    "title": title[_key == $locale][0].value,
    placeholders{
      "message": message[_key == $locale][0].value,
      "email": email[_key == $locale][0].value,
      "phone": phone[_key == $locale][0].value,
    },
    submitButton{
      "sendLabel": sendLabel[_key == $locale][0].value,
      "sendingLabel": sendingLabel[_key == $locale][0].value,
    },
    messages{
      "success": success[_key == $locale][0].value,
      "error": error[_key == $locale][0].value,
    },
  }
`);
export const fetchContactForm = async ({ locale }: { locale: Locale }) => {
  const result = await sanityFetch({
    query: CONTACT_FORM_QUERY,
    params: { locale },
  });
  return result.data;
};

export const RELEASES_QUERY = defineQuery(`
  *[_type == "release"]{
    ...,
    coverImage{
      asset->{
        url,
      }
    },
    availableOn[]{
      platform,
      url
    }
  }
`);

export const fetchReleases = async () => {
  const result = await sanityFetch({
    query: RELEASES_QUERY,
  });
  return result.data;
};
