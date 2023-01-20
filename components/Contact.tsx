import React, { useRef } from 'react';
import Link from 'next/link';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { socialLinks, resumeLink } from '../utils/constants';

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(formRef.current);
    // console.log(serviceId, templateId, publicKey);

    // if form data exists and environment variaiables exist, then send form data using emailjs
    if (formRef.current && serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        console.log('Email sent successfully');
        formRef.current.reset();
      } catch (error) {
        console.error('Error sending email: ', error);
      }
    }
  };

  return (
    <section
      id="contact"
      className="section-container mb-14"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="section-title">Contact</h2>
          <h3 className="section-subtitle">Let&apos;s build something incredible together!</h3>
        </motion.div>
        <div className="w-full grid md:grid-cols-5 md:flex-row gap-8">
          {/* Contact Card */}
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="w-full h-full p-3 py-6 flex flex-col items-center justify-center col-span-3 md:col-span-2 bg-slate-800 rounded-xl text-center space-y-5"
          >
            <h4 className="flex text-2xl md:text-3xl font-bold tracking-wide">
              Get In Touch
              <span className="mt-1 ml-3 text-2xl md:text-3xl">
                <HiOutlineChatBubbleBottomCenterText />
              </span>
            </h4>
            <p className="text-slate-300 sm:text-lg md:px-2">
              I&apos;m currently looking for full-time positions, but if you got an exciting opportunity you need help
              with or if you just want to say hi, my inbox is always open!
            </p>
            <p className="text-slate-300 sm:text-lg md:px-2">
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
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="col-span-3 w-full h-auto bg-slate-800 rounded-xl p-3 caret-sky-500 focus:caret-sky-500"
          >
            <form
              className="md:p-3"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="pb-2 uppercase md:text-md font-semibold">Name</label>
                  <input
                    className="contactInput"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required 
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="pb-2 uppercase md:text-md font-semibold tracking-wider">Email</label>
                  <input
                    className="contactInput"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required 
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
                  name="subject"
                  required 
                />
              </div>
              {/* Message Field */}
              <div className="flex flex-col py-2">
                <label className="pb-2 uppercase md:text-md font-semibold tracking-wider">Message</label>
                <textarea
                  className="contactInput"
                  rows={6}
                  placeholder="Message"
                  name="message"
                  required 
                ></textarea>
              </div>
              <button
                type="submit"
                className="mx-auto px-8 mt-4 mb-2 custom-btn custom-transition group"
              >
                Submit
                <span className="ml-2 mt-1.5 text-sky-500 group-hover:text-slate-200 custom-transition">
                  <MdSend />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
