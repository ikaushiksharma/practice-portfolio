import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: Props) => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20 w-full overflow-x-hidden relative h-full">
      {children}
    </section>
  );
};

export default SectionContainer;
