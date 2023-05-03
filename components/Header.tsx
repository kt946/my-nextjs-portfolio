import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaList } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { HiUserCircle, HiOutlineFolder } from 'react-icons/hi2';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import { socialLinks, resumeLink, LogoImage } from '../constants/constants';
import { motion } from 'framer-motion';

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
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
      className="bg-black/80 sticky top-0 z-20 w-full min-h-[61px] py-3 md:py-4 px-4 text-base border-b border-slate-300/20 backdrop-blur"
    >
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="home"
          className="py-1 md:p-0 hover:opacity-70 custom-transition"
          onClick={() => window.location.replace('/')}
        >
          <Image
            src={`/assets/${LogoImage}`}
            alt="Portfolio Logo"
            width={0}
            height={0}
            className="w-auto max-w-xs h-7"
          />
        </Link>

        {/* Navigation Group */}
        <ul className="hidden md:flex flex-row items-center gap-6 tracking-wider font-semibold">
          {/* Navigation Links */}
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                href={navLink.url}
                className="hover:text-primary custom-transition"
              >
                {navLink.name}
              </Link>
            </li>
          ))}
          {/* Resume Link */}
          <li>
            <Link
              href={resumeLink}
              className="py-2 px-4 rounded-full border border-primary hover:bg-primary text-primary hover:text-black custom-transition"
            >
              Resume
            </Link>
          </li>
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li key={socialLink.name}>
              <Link
                href={socialLink.url}
                className="text-2xl text-slate-400 hover:text-primary custom-transition"
              >
                {socialLink.icon}
              </Link>
            </li>
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
        <div className={`fixed md:hidden ${navMenu ? 'inset-0' : ''}`}>
          {/* Overlay */}
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
    </motion.header>
  );
};

export default Header;
