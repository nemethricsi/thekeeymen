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
  const remoteSrc = metadata?.seo?.openGraphImage?.asset?.url;

  const fallback = 'https://thekeeymen.com/images/opengraph-image.jpg';
  const src = remoteSrc || fallback;

  console.log('---- OG image remoteSrc ----', remoteSrc);

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
        <img src={src} alt="Keeymen" width={1200} height={630} />
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
