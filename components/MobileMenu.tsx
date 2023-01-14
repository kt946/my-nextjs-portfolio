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
      } fixed top-0 w-full max-w-xs h-screen flex flex-col py-10 px-6 bg-slate-800 text-lg tracking-wider ease-in-out duration-300`}
    >
      <div className="flex flex-col mt-4">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.url}
            className="flex items-center hover:bg-[#28354b] hover:text-sky-500 p-2 rounded-lg transition duration-300"
            onClick={() => setNavMenu(false)}
          >
            <div className="pr-6 text-2xl">{navLink.icon}</div>
            {navLink.name}
          </Link>
        ))}
        <div className="border-y border-slate-500/20 my-4 py-6">
          <Link
            href="/"
            className="py-2 px-6 text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 border-t-1 rounded-full transition duration-300"
          >
            Resume
          </Link>
        </div>
        <div className="flex justify-between">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="text-2xl text-slate-500 hover:text-sky-500 border-2 border-slate-500 hover:border-sky-500 p-2 rounded-full transition duration-300"
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
