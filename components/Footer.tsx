import React from 'react';
import { devName, socialLinks } from '../utils/constants';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="px-4"
    >
      <div className="max-w-7xl mx-auto py-12 border-t border-slate-300/20 flex flex-col-reverse sm:flex-row justify-between items-center text-lg text-center">
        {/* Copyright */}
        <p>
          &copy; {year} <span className="font-bold">{devName}</span>
        </p>
        {/* Socials */}
        <ul className="flex items-center gap-6 mb-6 sm:mb-0">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li key={socialLink.name} className="flex">
              <Link
                href={socialLink.url}
                className="custom-social-btn text-2xl custom-transition"
              >
                {socialLink.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
