import React, { useRef } from 'react';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if form data exists and environment variables exist, then send form data using emailjs
    if (formRef.current && serviceId && templateId && publicKey) {
      try {
        const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        // if message sent is successful
        if (result.status === 200) {
          console.log('Email sent successfully');
          // clear form
          formRef.current.reset();
        } else {
          console.error(`Error sending email: ${result.text}`);
        }
      } catch (error) {
        console.error('Error sending email: ', error);
      }
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
            className="mx-auto max-w-3xl text-slate-300 caret-primary focus:caret-primary"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="pb-2 uppercase md:text-md">Name</label>
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
                <label className="pb-2 uppercase md:text-md tracking-wider">Email</label>
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
            <div className="flex flex-col py-2">
              <label className="pb-2 uppercase md:text-md tracking-wider">Subject</label>
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
              <label className="pb-2 uppercase md:text-md tracking-wider">Message</label>
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
              className="mx-auto mt-8 custom-btn px-8 custom-transition group"
            >
              Submit
              <span className="ml-2 mt-1.5 text-primary group-hover:text-black custom-transition">
                <MdSend />
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
