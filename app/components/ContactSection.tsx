import React from 'react';
import SectionContainer from './SectionContainer';
import Link from 'next/link';
import Form from './Form';

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <SectionContainer>
      <div
        id="contact"
        className="w-full h-full flex px-4 pt-16 sm:pt-4 sm:px-0 flex-col sm:flex-row justify-between"
      >
        <div className="flex gap-y-10 sm:pl-4 lg:pl-0 my-6 sm:my-10 w-full sm:w-1/3 flex-col">
          <div className="space-y-4">
            <h4 className="text-xs capitalize">Contact</h4>
            <h2 className="text-2xl uppercase sm:text-3xl font-bold">
              Reach Out To Me
            </h2>
            <h4 className="text-xs">Address Lorem ipsum dolor sit.</h4>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h2 className="text-xl w-full lg:text-2xl font-extrabold">
              +91-7837988677
            </h2>
            <h2 className="text-xl w-full lg:text-2xl font-extrabold">
              kaushik445566@gmail.com
            </h2>
          </div>
          <div className="w-full flex flex-row text-xs items-center gap-x-2 md:gap-x-4 uppercase">
            <Link href="https://github.com/ikaushiksharma">Facebook</Link>
            <Link href="https://github.com/ikaushiksharma">Instagram</Link>
            <Link href="https://github.com/ikaushiksharma">Twitter</Link>
            <Link href="https://github.com/ikaushiksharma">Linkedin</Link>
          </div>
          {/* <div className="flex lg:py-4 xxl:py-6 w-full gap-4 md:gap-6 lg:w-2/3 flex-col"></div> */}
        </div>
        <div className="w-full flex max-sm:justify-center max-lg:justify-end h-4/5 sm:w-3/5">
          <Form />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
