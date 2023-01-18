import React from 'react';

type Props = {};

const Footer = (props: Props) => {

  return (
    <section
      id="footer"
      className="px-4"
    >
      <div className="py-12 border-t border-slate-500/50 flex flex-col items-center font-medium text-center">
        <p className="text-lg mb-4">Designed and built by Me &copy; 2023</p>
        <p>Made with NextJS, Tailwind, and Framer</p>
      </div>
    </section>
  );
};

export default Footer;
