import { WaveDivider } from '@/components/WaveDivider';

export const HeroSection = ({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.RefObject<HTMLElement | null>;
}) => {
  return (
    <section
      ref={ref}
      className="relative flex h-[calc(100vh-320px)] w-full flex-col items-start justify-end bg-cover bg-center bg-no-repeat px-3 py-6 text-white bg-blend-screen lg:h-screen lg:p-4 lg:pt-14 landscape:h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, #467199 0%, #532b64 75%), url('/images/hero-blur-3.png')`,
      }}
    >
      {children}
      <WaveDivider className="fill-linen-50" svgClassName="h-4 sm:h-10" />
    </section>
  );
};
