import React from 'react';
import SectionContainer from './SectionContainer';
import Tag from './Tag';
import CardSliderWithData from './CardSliderWithData';

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <SectionContainer>
      <Tag id="about">Projects</Tag>
      <div className="w-full h-full flex px-4 pt-8 sm:pt-4 sm:px-0 flex-col sm:flex-row justify-between">
        <CardSliderWithData />
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
