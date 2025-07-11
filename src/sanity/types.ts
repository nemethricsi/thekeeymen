/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type MediaMention = {
  _type: 'mediaMention';
  quote: Array<
    {
      _key: string;
    } & InternationalizedArrayTextValue
  >;
  publication: string;
  url?: string;
  title?: string;
  author?: string;
  date?: string;
};

export type Epk = {
  _id: string;
  _type: 'epk';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  downloadablePressKit?: {
    label: Array<
      {
        _key: string;
      } & InternationalizedArrayStringValue
    >;
    url: string;
  };
  shortBioTitle: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  shortBio: Array<
    {
      _key: string;
    } & InternationalizedArrayTextValue
  >;
  photosTitle: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  mediaMentionsTitle: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  mediaMentions?: Array<
    {
      _key: string;
    } & MediaMention
  >;
  socialMediaSection?: {
    title?: Array<
      {
        _key: string;
      } & InternationalizedArrayStringValue
    >;
    description?: Array<
      {
        _key: string;
      } & InternationalizedArrayTextValue
    >;
  };
};

export type Socials = {
  _id: string;
  _type: 'socials';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  spotify?: string;
  bandcamp?: string;
  appleMusic?: string;
};

export type Navigation = Array<
  {
    _key: string;
  } & MenuItem
>;

export type MenuItem = {
  _type: 'menuItem';
  label: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  href: string;
};

export type PageSettings = {
  _id: string;
  _type: 'pageSettings';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  navigation: Navigation;
  seoTitle: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  seoDescription: Array<
    {
      _key: string;
    } & InternationalizedArrayTextValue
  >;
  openGraphImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type HomePage = {
  _id: string;
  _type: 'homePage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: Array<
    {
      _key: string;
    } & InternationalizedArrayStringValue
  >;
  youtubeUrl: string;
};

export type InternationalizedArrayTextValue = {
  _type: 'internationalizedArrayTextValue';
  value?: string;
};

export type InternationalizedArrayStringValue = {
  _type: 'internationalizedArrayStringValue';
  value?: string;
};

export type InternationalizedArrayText = Array<
  {
    _key: string;
  } & InternationalizedArrayTextValue
>;

export type InternationalizedArrayString = Array<
  {
    _key: string;
  } & InternationalizedArrayStringValue
>;

export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: 'slug';
  current: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes =
  | MediaMention
  | Epk
  | Socials
  | Navigation
  | MenuItem
  | PageSettings
  | HomePage
  | InternationalizedArrayTextValue
  | InternationalizedArrayStringValue
  | InternationalizedArrayText
  | InternationalizedArrayString
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageHotspot
  | SanityImageCrop
  | SanityFileAsset
  | SanityImageAsset
  | SanityImageMetadata
  | Geopoint
  | Slug
  | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: HOME_PAGE_QUERY
// Query: *[_id == "homePage"][0]{    "title": title[_key == $locale][0].value,    youtubeUrl,  }
export type HOME_PAGE_QUERYResult =
  | {
      title: null;
      youtubeUrl: null;
    }
  | {
      title: string | null;
      youtubeUrl: null;
    }
  | {
      title: string | null;
      youtubeUrl: string;
    }
  | null;
// Variable: PAGE_SETTINGS_QUERY
// Query: *[_id == "pageSettings"][0]{    navigation,    "seoTitle": seoTitle[_key == $locale][0].value,    "seoDescription": seoDescription[_key == $locale][0].value,  }
export type PAGE_SETTINGS_QUERYResult =
  | {
      navigation: Navigation;
      seoTitle: string | null;
      seoDescription: string | null;
    }
  | {
      navigation: null;
      seoTitle: null;
      seoDescription: null;
    }
  | null;
// Variable: METADATA_QUERY
// Query: *[_id == "pageSettings"][0]{    "seoTitle": seoTitle[_key == $locale][0].value,    "seoDescription": seoDescription[_key == $locale][0].value,  }
export type METADATA_QUERYResult =
  | {
      seoTitle: null;
      seoDescription: null;
    }
  | {
      seoTitle: string | null;
      seoDescription: string | null;
    }
  | null;
// Variable: NAVIGATION_QUERY
// Query: *[_id == "pageSettings"][0]{    "navigation": navigation[]{      href,      "label": label[_key == $locale][0].value,    }  }
export type NAVIGATION_QUERYResult =
  | {
      navigation: Array<{
        href: string;
        label: string | null;
      }>;
    }
  | {
      navigation: null;
    }
  | null;
// Variable: SOCIALS_QUERY
// Query: *[_id == "socials"][0]{    spotify,    bandcamp,    appleMusic,  }
export type SOCIALS_QUERYResult =
  | {
      spotify: null;
      bandcamp: null;
      appleMusic: null;
    }
  | {
      spotify: string | null;
      bandcamp: string | null;
      appleMusic: string | null;
    }
  | null;
// Variable: EPK_QUERY
// Query: *[_id == "epk"][0]{    "title": title[_key == $locale][0].value,    downloadablePressKit{      "label": label[_key == $locale][0].value,      url,    },    socialMediaSection{      "title": title[_key == $locale][0].value,      "description": description[_key == $locale][0].value,    },    "shortBioTitle": shortBioTitle[_key == $locale][0].value,    "shortBio": shortBio[_key == $locale][0].value,    "photosTitle": photosTitle[_key == $locale][0].value,    "mediaMentionsTitle": mediaMentionsTitle[_key == $locale][0].value,    "mediaMentions": mediaMentions[]{      ...,      "quote": quote[_key == $locale][0].value,      publication,      url,      title,      author,      date,    }  }
export type EPK_QUERYResult =
  | {
      title: null;
      downloadablePressKit: null;
      socialMediaSection: null;
      shortBioTitle: null;
      shortBio: null;
      photosTitle: null;
      mediaMentionsTitle: null;
      mediaMentions: null;
    }
  | {
      title: string | null;
      downloadablePressKit: null;
      socialMediaSection: null;
      shortBioTitle: null;
      shortBio: null;
      photosTitle: null;
      mediaMentionsTitle: null;
      mediaMentions: null;
    }
  | {
      title: string | null;
      downloadablePressKit: {
        label: string | null;
        url: string;
      } | null;
      socialMediaSection: {
        title: string | null;
        description: string | null;
      } | null;
      shortBioTitle: string | null;
      shortBio: string | null;
      photosTitle: string | null;
      mediaMentionsTitle: string | null;
      mediaMentions: Array<{
        _key: string;
        _type: 'mediaMention';
        quote: string | null;
        publication: string;
        url: string | null;
        title: string | null;
        author: string | null;
        date: string | null;
      }> | null;
    }
  | null;
// Variable: OPEN_GRAPH_IMAGE_QUERY
// Query: *[_id == "pageSettings"][0]{    openGraphImage{      asset->{        url,      }    }  }
export type OPEN_GRAPH_IMAGE_QUERYResult =
  | {
      openGraphImage: null;
    }
  | {
      openGraphImage: {
        asset: {
          url: string | null;
        } | null;
      };
    }
  | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '\n  *[_id == "homePage"][0]{\n    "title": title[_key == $locale][0].value,\n    youtubeUrl,\n  }\n': HOME_PAGE_QUERYResult;
    '\n  *[_id == "pageSettings"][0]{\n    navigation,\n    "seoTitle": seoTitle[_key == $locale][0].value,\n    "seoDescription": seoDescription[_key == $locale][0].value,\n  }\n': PAGE_SETTINGS_QUERYResult;
    '\n  *[_id == "pageSettings"][0]{\n    "seoTitle": seoTitle[_key == $locale][0].value,\n    "seoDescription": seoDescription[_key == $locale][0].value,\n  }\n': METADATA_QUERYResult;
    '\n  *[_id == "pageSettings"][0]{\n    "navigation": navigation[]{\n      href,\n      "label": label[_key == $locale][0].value,\n    }\n  }\n': NAVIGATION_QUERYResult;
    '\n  *[_id == "socials"][0]{\n    spotify,\n    bandcamp,\n    appleMusic,\n  }\n': SOCIALS_QUERYResult;
    '\n  *[_id == "epk"][0]{\n    "title": title[_key == $locale][0].value,\n    downloadablePressKit{\n      "label": label[_key == $locale][0].value,\n      url,\n    },\n    socialMediaSection{\n      "title": title[_key == $locale][0].value,\n      "description": description[_key == $locale][0].value,\n    },\n    "shortBioTitle": shortBioTitle[_key == $locale][0].value,\n    "shortBio": shortBio[_key == $locale][0].value,\n    "photosTitle": photosTitle[_key == $locale][0].value,\n    "mediaMentionsTitle": mediaMentionsTitle[_key == $locale][0].value,\n    "mediaMentions": mediaMentions[]{\n      ...,\n      "quote": quote[_key == $locale][0].value,\n      publication,\n      url,\n      title,\n      author,\n      date,\n    }\n  }\n': EPK_QUERYResult;
    '\n  *[_id == "pageSettings"][0]{\n    openGraphImage{\n      asset->{\n        url,\n      }\n    }\n  }\n': OPEN_GRAPH_IMAGE_QUERYResult;
  }
}
