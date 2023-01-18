import React from 'react';
import Link from 'next/link';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { socialLinks, resumeLink } from '../utils/constants';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="mb-20 px-6 py-12 scroll-mt-16 border border-orange-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col border border-blue-500">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-500 uppercase tracking-widest font-semibold">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl text-center md:text-left font-bold">
            Let&apos;s build something incredible together!
          </h3>
        </div>
        <div className="w-full grid md:grid-cols-5 md:flex-row gap-8 border border-emerald-500">
          {/* Contact Card */}
          <div className="p-6 md:p-3 flex flex-col items-center col-span-3 md:col-span-2 w-full h-full bg-slate-800 rounded-xl text-center">
            <h4 className="mb-6 flex text-2xl md:text-3xl font-bold tracking-wide">
              Get In Touch
              <span className="mt-1 ml-3 text-2xl md:text-3xl">
                <HiOutlineChatBubbleBottomCenterText />
              </span>
            </h4>
            <p className="mb-6 text-slate-300">
              I&apos;m currently looking for full-time positions, but if you got an exciting partnership opportunity to
              share or if you just want to say hi, my inbox is always open!
            </p>
            <p className="mb-6 text-lg md:text-xl font-bold text-slate-300">Connect with me and let&apos;s chat!</p>

            <ul className="space-y-6 flex flex-col items-center">
              {/* Social Links */}
              {socialLinks.map((socialLink) => (
                <li key={socialLink.id}>
                  <Link
                    href={socialLink.url}
                    className="flex text-xl text-slate-400 hover:text-sky-500 custom-transition"
                  >
                    <span className="mr-2 mt-[2px] text-2xl">{socialLink.icon}</span>
                    {socialLink.name}
                  </Link>
                </li>
              ))}
              <li>
                {/* Resume Link */}
                <Link href={resumeLink.url}>
                  <button className="custom-btn custom-transition">Download Resume</button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="col-span-3 w-full h-auto bg-slate-800 rounded-xl p-3 caret-sky-500 focus:caret-sky-500">
            <form className="md:px-3">
              <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="uppercase md:text-md font-semibold pb-2">Name</label>
                  <input
                    className="contactInput"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="uppercase md:text-md font-semibold pb-2">Email</label>
                  <input
                    className="contactInput"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* Subject Field */}
              <div className="flex flex-col py-3">
                <label className="uppercase md:text-md font-semibold pb-2">Subject</label>
                <input
                  className="contactInput"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              {/* Message Field */}
              <div className="flex flex-col py-2">
                <label className="uppercase md:text-md font-semibold pb-2">Message</label>
                <textarea
                  className="contactInput"
                  rows={8}
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mx-auto mt-4 mb-2 custom-btn custom-transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
