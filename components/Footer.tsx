import React from 'react';
import { SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section
      id="footer"
      className="px-4"
    >
      <div className="py-12 border-t border-slate-500/50 flex flex-col items-center font-medium text-center">
        <p className="text-lg mb-4">Designed and built by Me &copy; 2023</p>
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