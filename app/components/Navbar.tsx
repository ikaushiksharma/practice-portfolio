import React from 'react';
import Button from './Button';
import MobileNav from './MobileNav';

type Props = {};
const navLinks = ['home', 'about', 'projects', 'testimonials'];
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="fixed z-50 hidden opacity-0 sm:opacity-100 sm:flex items-center py-4 justify-between top-0 w-full xxl:px-24 xl:px-20 md:px-10 sm:px-2 px-4 left-0 backdrop-blur-md">
        <h1 className="font-semibold uppercase">Kaushik Sharma</h1>
        <ul className="flex items-center capitalize justify-evenly sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-6">
          {navLinks.map((link, idx) => (
            <li key={idx} className="hover:text-tertiary cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
        <Button>Contact</Button>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;