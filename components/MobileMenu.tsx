import React from 'react';
import Link from 'next/link';
import { socialLinks, resumeLink } from '../constants/constants';

type Props = {
  navMenu: boolean;
  setNavMenu: (arg0: boolean) => void;
  navLinks: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

const MobileMenu = ({ navMenu, setNavMenu, navLinks }: Props) => {
  return (
    // Menu Container
    <div
      className={`${
        navMenu ? 'right-0' : 'right-[-100%]'
      } fixed top-0 w-full max-w-xs h-screen z-25 py-10 px-6 flex flex-col bg-[#020617] border-l-2 border-primary text-lg tracking-wider custom-transition`}
    >
      <div className="flex flex-col mt-4">
        {/* Navigation Links */}
        {navLinks.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.url}
            className="py-2 px-3 flex items-center rounded-lg hover:bg-slate-800 font-semibold hover:text-primary custom-transition"
            onClick={() => setNavMenu(false)}
          >
            <span className="pr-6 text-2xl text-gray-400">{navLink.icon}</span>
            {navLink.name}
          </Link>
        ))}
        {/* Resume Link */}
        <div className="my-4 py-4 flex flex-col border-y border-gray-500/30">
          <Link
            href={resumeLink}
            className="custom-btn btn-secondary-style"
          >
            Resume
          </Link>
        </div>
        <div className="flex justify-evenly">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="custom-social-btn"
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
