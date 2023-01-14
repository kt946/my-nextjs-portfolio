import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

type Props = {};

const Header = (props: Props) => {
  const [navMenu, setNavMenu] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

  const displayMobileMenu = () => {
    setNavMenu(!navMenu);
    setMenuButton(!menuButton);
  };

  const navLinks = [
    {
      name: 'Home',
      url: '#home',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Skills',
      url: '#skills',
    },
    {
      name: 'Works',
      url: '#works',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ];
  const socialLinks = [
    {
      name: 'mail',
      icon: <MdOutlineEmail />,
      url: '/',
    },
    {
      name: 'linkedin',
      icon: <FaLinkedin />,
      url: '/',
    },
    {
      name: 'github',
      icon: <FaGithub />,
      url: '/',
    },
  ];

  return (
    <header className="bg-black/40 fixed w-full top-0 z-20 backdrop-blur py-3 px-3 sm:px-5 text-base border-b border-slate-500/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-70 transition duration-300"
        >
          <Image
            src="/assets/portfolio-logo.svg"
            alt="Portfolio Logo"
            width={0}
            height={0}
            priority={true}
            className="w-auto max-w-xs h-6"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-row items-center space-x-6 tracking-wider">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.name}
              href="/" // {navLink.url}
              className="hover:text-sky-500 transition duration-300"
            >
              {navLink.name}
            </Link>
          ))}
          <Link
            href="/"
            className="py-1 px-4 text-sky-500 border hover:text-white border-sky-500 hover:bg-sky-500 rounded-full transition duration-300"
          >
            Resume
          </Link>
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.name}
              href={socialLink.url}
              className="text-2xl text-slate-500 hover:text-sky-500 transition duration-300"
            >
              {socialLink.icon}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`hamburger hamburger--spin p-2 pb-0 z-30 md:hidden ${menuButton && 'is-active'}`}
          onClick={() => displayMobileMenu()}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={`${
            navMenu ? 'md:hidden inset-0 w-full h-screen bg-black/70 backdrop-blur-sm ease-in-out duration-300' : ''
          } fixed`}
          onClick={() => displayMobileMenu()}
        >
          {/* Menu */}
          <div
            className={`${
              navMenu ? 'right-0' : 'right-[-100%]'
            } fixed top-0 w-full max-w-xs h-screen p-6 py-2 bg-slate-800 ease-in-out duration-300`}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
