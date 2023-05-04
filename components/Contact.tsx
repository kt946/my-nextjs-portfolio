import React, { useState, useRef } from 'react';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { AiOutlineLoading } from 'react-icons/ai';

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  // function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // send form data using emailjs
    try {
      setLoading(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log('Email sent successfully');
      formRef.current!.reset();
    } catch (error) {
      console.error(`Error sending email: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-container"
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

        {/* Section Comment */}
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="section-subtitle-2"
        >
          I&apos;m currently looking for full-time positions, but if you got an exciting opportunity you need help with
          or you just want to say hi, fill out this awesome contact form below or connect with me on social media!
        </motion.p>

        <div className="w-full">
          {/* Form */}
          <motion.form
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mx-auto max-w-2xl text-gray-300 caret-primary focus:caret-primary"
          >
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md font-bold">Name</label>
              <input
                className="contactInput"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md tracking-wider font-bold">Email</label>
              <input
                className="contactInput"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            {/* Message Field */}
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md tracking-wider font-bold">Message</label>
              <textarea
                className="contactInput"
                rows={6}
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="h-12 custom-btn btn-primary-style"
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin h-6 w-6" />
              ) : (
                <>
                  Submit
                  <MdSend />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
