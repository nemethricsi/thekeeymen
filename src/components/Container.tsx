export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 px-4">
      {children}
    </div>
  );
};
