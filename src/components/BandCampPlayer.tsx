'use client';

export const BandCampPlayer = () => {
  return (
    <iframe
      title="embed bandcamp"
      style={{
        border: 0,
        width: '100%',
        height: 520,
        display: 'block',
        margin: '1rem 0',
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2896876080/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
      seamless
    ></iframe>
  );
};
