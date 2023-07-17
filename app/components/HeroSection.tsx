import React from 'react';
import SectionContainer from './SectionContainer';
import Button from './Button';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <SectionContainer>
      <div className="w-full h-full flex flex-col sm:flex-row items-start justify-between">
        <div className="flex mt-0 sm:mt-16 w-full sm:w-1/2 flex-col">
          <div className="w-full sm:w-4/5 space-y-6 lg:space-y-8 xl:space-y-12 xxl:space-y-16 ">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl xxl:text-7xl font-bold leading-normal md:leading-relaxed lg:leading-[3rem]">
              Get help with <span className="text-tertiary">coding</span> from
              engineers <span className="text-tertiary">.</span>
            </h1>
            <p className="w-full sm:w-2/3 leading-relaxed">
              Learn how to code efficiently and create apps and games that work.
              Consult with best experts to apply skills in action.
            </p>
            <div className="flex items-center gap-x-4">
              <Button>Start Learning</Button>
              <h3 className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
                Watch Video
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end xxl:justify-center w-full my-8 sm:my-16 sm:w-1/2">
          <img
            src="/images/illustrations.png"
            className="h-72 sm:h-full lg:h-96 xl:h-[28rem] xxl:h-[30rem]"
            alt=""
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
