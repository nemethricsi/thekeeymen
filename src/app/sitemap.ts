import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://www.thekeeymen.com/hu',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.thekeeymen.com/en',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.thekeeymen.com/hu/epk',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://www.thekeeymen.com/en/epk',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
