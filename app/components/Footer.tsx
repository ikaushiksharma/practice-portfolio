import React from 'react';
import SectionContainer from './SectionContainer';

type Props = {};

const Footer = (props: Props) => {
  return (
    <SectionContainer>
      <div className="space-y-4 mb-12 sm:space-y-16">
        <div className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row w-full h-full justify-between">
          <div className="flex text-center sm:text-left sm:w-2/5 pr-5 flex-col gap-y-2 sm:gap-y-4 h-full">
            <h1 className="text-lg sm:text-xl uppercase font-semibold">
              Kaushik Sharma
            </h1>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, ipsum!
            </p>
          </div>
          <div className="flex sm:w-3/5 justify-evenly">
            <div className="flex flex-col gap-y-4 h-full">
              <h1 className="text-sm uppercase font-semibold">Menu</h1>
              <ul className="flex flex-col gap-y-2">
                <li className="text-xs">About Us</li>
                <li className="text-xs">Careers</li>
                <li className="text-xs">Press Kit</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4 h-full">
              <h1 className="text-sm uppercase font-semibold">Services</h1>
              <ul className="flex flex-col gap-y-2">
                <li className="text-xs">Frontend</li>
                <li className="text-xs">Backend</li>
                <li className="text-xs">Animations</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4 h-full">
              <h1 className="text-sm uppercase font-semibold">Contact Us</h1>
              <ul className="flex flex-col gap-y-2">
                <li className="text-xs">Instagram</li>
                <li className="text-xs">Linkedin</li>
                <li className="text-xs">Github</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 sm:space-y-16 w-full h-full justify-evenly">
          <div className="w-full h-1 bg-gray-800"></div>
          <div className="flex flex-col sm:flex-row text-center sm:text-left space-y-4 sm:space-y-0 w-full justify-between">
            <p className="text-xs">
              Copyright &copy;2023 Kaushik Sharma | All Rights Reserved.
            </p>
            <p className="text-xs">Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
