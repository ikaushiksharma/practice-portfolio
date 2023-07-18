import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 min-h-screen w-full relative h-full">
      {children}
    </section>
  );
};

export default SectionContainer;
