type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <main className="max-w-[2520px] relative mx-auto xxl:px-24 xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </main>
  );
};

export default Container;
