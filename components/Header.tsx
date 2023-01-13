import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

type Props = {};

const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false);

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
    <header className="bg-black/40 sticky top-0 z-99 backdrop-blur py-2 px-5 text-base border-b border-gray-500/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-80 transition duration-300"
        >
          <Image
            src="/assets/portfolio-logo.svg"
            alt="Portfolio Logo"
            width={0}
            height={0}
            priority
            className="w-auto h-7"
          />
        </Link>

        <HiMenu
          className="text-4xl cursor-pointer md:hidden"
          onClick={() => setToggle(true)}
        />

        {/* Navigation */}
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
            className="py-1.5 px-4 text-sky-500 border hover:text-white border-sky-500 hover:bg-sky-500 rounded-full transition duration-300"
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
      </nav>
    </header>
  );
};

export default Header;
