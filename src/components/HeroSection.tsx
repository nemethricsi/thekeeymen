export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="borderbg-cover relative flex h-[calc(100vh-300px)] w-full flex-col items-start justify-end bg-center bg-no-repeat px-3 py-6 text-white bg-blend-lighten sm:h-screen md:p-4 md:py-14"
      style={{
        backgroundImage: `linear-gradient(to bottom, #25147B, #8E43A5), url('/images/hero.png')`,
      }}
    >
      {children}
    </section>
  );
};
