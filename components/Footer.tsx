import React from 'react';
import { SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si';

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="px-4 "
    >
      <div className="max-w-7xl mx-auto py-12 border-t border-slate-300/20 flex flex-col sm:flex-row justify-between items-center text-lg text-center text-slate-300">
        {/* Copyright */}
        <p className="mb-4 sm:mb-0">
          &copy; {year} <span className="text-slate-200 font-bold">Kyle Tang</span>
        </p>
        {/* Additional Text */}
        <p className="flex items-center">
          Made with
          <span className="pl-2 flex text-3xl space-x-2">
            <SiTailwindcss />
            <SiNextdotjs />
            <SiFramer />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
