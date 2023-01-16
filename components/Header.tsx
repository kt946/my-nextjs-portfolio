import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaList } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineHome } from 'react-icons/hi';
import { HiUserCircle, HiOutlineFolder } from 'react-icons/hi2';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import MobileMenu from './MobileMenu';

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
  const socialLinks = [
    {
      name: 'mail',
      icon: <HiOutlineMail />,
      url: '/',
    },
    {
      name: 'linkedin',
      icon: <FaLinkedinIn />,
      url: '/',
    },
    {
      name: 'github',
      icon: <FaGithub />,
      url: '/',
    },
  ];

  return (
    <header className="bg-[#111111]/70 sticky w-full top-0 z-20 backdrop-blur min-h-[61px] py-3 px-3 md:px-5 text-base border-b border-slate-300/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="py-1 px-2 md:p-0 hover:opacity-70 transition duration-300"
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
              className="hover:text-sky-500 transition duration-300"
            >
              {navLink.name}
            </Link>
          ))}
          <Link
            href="/"
            className="py-1 px-4 rounded-full text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 transition duration-300"
          >
            Resume
          </Link>
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="text-2xl text-slate-400 hover:text-sky-500 transition duration-300"
            >
              {socialLink.icon}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`hamburger hamburger--spin p-2 pb-0 z-30 md:hidden ${navMenu && 'is-active'}`}
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
            className={`${
              navMenu ? 'w-full h-screen bg-black/70 backdrop-blur-sm transition ease-in-out duration-300' : ''
            }`}
            onClick={() => setNavMenu(!navMenu)}
          />
          {/* Menu */}
          <MobileMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navLinks={navLinks}
            socialLinks={socialLinks}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
