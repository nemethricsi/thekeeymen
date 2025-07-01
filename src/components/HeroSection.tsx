export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-start justify-end bg-cover bg-center bg-no-repeat p-3 text-white bg-blend-lighten md:p-4 md:py-14"
      style={{
        backgroundImage: `linear-gradient(to bottom, #25147B, #8E43A5), url('/images/hero_2.png')`,
      }}
    >
      {children}
    </section>
  );
};
