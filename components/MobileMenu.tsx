import React from 'react';
import Link from 'next/link';

type Props = {
  navMenu: boolean;
  setNavMenu: (arg0: boolean) => void;
  navLinks: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
  socialLinks: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

const MobileMenu = ({ navMenu, setNavMenu, navLinks, socialLinks }: Props) => {
  return (
    <div
      className={`${
        navMenu ? 'right-0' : 'right-[-100%]'
      } fixed top-0 w-full max-w-xs h-screen z-25 py-10 px-6 flex flex-col bg-slate-800 border-l-2 border-sky-500 text-lg tracking-wider ease-in-out duration-300`}
    >
      <div className="flex flex-col mt-4">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.url}
            className="py-2 px-3 flex items-center rounded-lg hover:bg-slate-900/60 hover:text-sky-500 custom-transition"
            onClick={() => setNavMenu(false)}
          >
            <div className="pr-6 text-2xl">{navLink.icon}</div>
            {navLink.name}
          </Link>
        ))}
        <div className="my-4 py-6 flex flex-col border-y border-slate-500/30">
          <Link
            href="/"
            className="py-2 px-6 rounded-full text-center text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 custom-transition"
          >
            Resume
          </Link>
        </div>
        <div className="flex justify-between">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="p-2 rounded-full text-2xl text-slate-400 hover:text-sky-500 border-2 border-slate-500 hover:border-sky-500 custom-transition"
            >
              {socialLink.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
