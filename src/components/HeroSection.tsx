export const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="relative flex h-[calc(100vh-320px)] w-full flex-col items-start justify-end bg-cover bg-center bg-no-repeat px-3 py-6 text-white bg-blend-lighten sm:h-screen md:p-4 md:py-14"
      style={{
        backgroundImage: `linear-gradient(to bottom, #408ea3, #8E43A5), url('/images/hero-blur-3.png')`,
      }}
    >
      {children}
    </section>
  );
};
