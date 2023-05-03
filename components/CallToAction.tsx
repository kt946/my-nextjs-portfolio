import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  message: string;
  buttonMessage: string;
  buttonIcon: JSX.Element;
  linkURL: string;
};

const CallToAction = ({ message, buttonMessage, buttonIcon, linkURL }: Props) => {
  return (
    <section className="section-container py-0 mb-14">
      {/* Content Container */}
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
        className="mx-auto p-6 md:py-12 w-full max-w-[1280px] flex flex-col justify-center items-center gap-6 text-center bg-slate-800 rounded-xl"
      >
        {/* Text */}
        <h3 className="text-xl md:text-3xl font-bold">{message}</h3>
        {/* Link */}
        <Link
          href={linkURL}
          className="custom-btn btn-primary-style"
        >
          {buttonMessage}
          {buttonIcon}
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
