import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 min-h-screen w-full relative h-full">
      {children}
    </section>
  );
};

export default SectionContainer;
