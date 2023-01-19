import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { socialLinks, resumeLink } from '../utils/constants';
import { MdSend } from 'react-icons/md';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
  };
  return (
    <section
      id="contact"
      className="section-container mb-14"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="section-title">Contact</h2>
          <h3 className="section-subtitle">Let&apos;s build something incredible together!</h3>
        </div>
        <div className="w-full grid md:grid-cols-5 md:flex-row gap-8">
          {/* Contact Card */}
          <div className="w-full h-full p-3 py-6 flex flex-col items-center justify-center col-span-3 md:col-span-2 bg-slate-800 rounded-xl text-center space-y-5">
            <h4 className="flex text-2xl md:text-3xl font-bold tracking-wide">
              Get In Touch
              <span className="mt-1 ml-3 text-2xl md:text-3xl">
                <HiOutlineChatBubbleBottomCenterText />
              </span>
            </h4>
            <p className="text-slate-300 text-lg md:px-2">
              I&apos;m currently looking for full-time positions, but if you got an exciting opportunity you need help with or if
              you just want to say hi, my inbox is always open!
            </p>
            <p className="text-slate-300 text-lg md:px-2">
              Send me a message through the form or connect with me on socials!
            </p>
            {/* Social Links */}
            <div className="w-full flex justify-center space-x-8">
              {socialLinks.map((socialLink) => (
                <Link
                  key={socialLink.name}
                  href={socialLink.url}
                  className="p-2 md:p-3 rounded-full text-2xl md:text-3xl text-slate-400 hover:text-sky-500 border-2 md:border-[3px] border-slate-500 hover:border-sky-500 custom-transition"
                >
                  {socialLink.icon}
                </Link>
              ))}
            </div>
            {/* Resume Link */}
            <Link
              href={resumeLink.url}
              className="custom-btn custom-transition"
            >
              Download Resume
            </Link>
          </div>
          {/* Contact Form */}
          <div className="col-span-3 w-full h-auto bg-slate-800 rounded-xl p-3 caret-sky-500 focus:caret-sky-500">
            <form
              className="md:p-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="pb-2 uppercase md:text-md font-semibold">Name</label>
                  <input
                    className="contactInput"
                    type="text"
                    placeholder="Name"
                    {...register('name')}
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="pb-2 uppercase md:text-md font-semibold tracking-wider">Email</label>
                  <input
                    className="contactInput"
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                  />
                </div>
              </div>
              {/* Subject Field */}
              <div className="flex flex-col py-3">
                <label className="pb-2 uppercase md:text-md font-semibold tracking-wider">Subject</label>
                <input
                  className="contactInput"
                  type="text"
                  placeholder="Subject"
                  {...register('subject')}
                />
              </div>
              {/* Message Field */}
              <div className="flex flex-col py-2">
                <label className="pb-2 uppercase md:text-md font-semibold tracking-wider">Message</label>
                <textarea
                  className="contactInput"
                  rows={6}
                  placeholder="Message"
                  {...register('message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="mx-auto px-8 mt-4 mb-2 custom-btn group custom-transition"
              >
                Submit
                <span className="ml-2 mt-1.5 text-sky-500 group-hover:text-slate-200 custom-transition">
                  <MdSend />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
