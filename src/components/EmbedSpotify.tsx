export const EmbedSpotify = ({ src }: { src: string }) => {
  return (
    <iframe
      title="embed-thekeeymen-spotify"
      style={{ borderRadius: 12 }}
      src={`${src}?theme=0`}
      width="100%"
      height="352"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
