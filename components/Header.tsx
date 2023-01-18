import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaList } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { HiUserCircle, HiOutlineFolder } from 'react-icons/hi2';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { socialLinks, resumeLink } from './../utils/constants';

type Props = {};

const Header = (props: Props) => {
  const [navMenu, setNavMenu] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      icon: <HiOutlineHome />,
      url: '#home',
    },
    {
      name: 'About',
      icon: <HiUserCircle />,
      url: '#about',
    },
    {
      name: 'Skills',
      icon: <FaList />,
      url: '#skills',
    },
    {
      name: 'Work',
      icon: <HiOutlineFolder />,
      url: '#work',
    },
    {
      name: 'Contact',
      icon: <BsFillPersonLinesFill />,
      url: '#contact',
    },
  ];

  return (
    <header className="bg-[#111111]/70 sticky top-0 z-20 w-full min-h-[61px] py-3 px-6 md:px-5 text-base border-b border-slate-300/10  backdrop-blur">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="py-1 md:p-0 hover:opacity-70 custom-transition"
        >
          <Image
            src="/assets/portfolio-logo.svg"
            alt="Portfolio Logo"
            width={0}
            height={0}
            priority={true}
            className="w-auto max-w-xs h-7"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-row items-center space-x-6 tracking-wider">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.name}
              href={navLink.url}
              className="hover:text-sky-500 custom-transition"
            >
              {navLink.name}
            </Link>
          ))}
          <Link
            href={resumeLink.url}
            className="py-1 px-4 rounded-full text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 custom-transition"
          >
            Resume
          </Link>
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="text-2xl text-slate-400 hover:text-sky-500 custom-transition"
            >
              {socialLink.icon}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`hamburger hamburger--spin pt-2 z-30 md:hidden ${navMenu && 'is-active'}`}
          onClick={() => setNavMenu(!navMenu)}
        >
          <span className="hamburger-box ">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={`fixed md:hidden ${navMenu ? 'inset-0' : ''}`}>
          <div
            className={`${navMenu ? 'w-full h-screen bg-black/70 backdrop-blur-sm custom-transition' : ''}`}
            onClick={() => setNavMenu(!navMenu)}
          />
          {/* Menu */}
          <MobileMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navLinks={navLinks}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
