import { urlFor } from '@/sanity/lib/image';
import { fetchOpenGraphImage } from '@/sanity/lib/queries';
import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  const metadata = await fetchOpenGraphImage();
  const src = metadata?.seo?.openGraphImage
    ? urlFor(metadata.seo.openGraphImage).width(1200).url()
    : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={src || '/images/opengraph-image.jpg'}
          alt="Keeymen"
          width={1200}
          height={630}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
