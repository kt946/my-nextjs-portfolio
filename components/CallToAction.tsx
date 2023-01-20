import React from 'react';
import Link from 'next/link';
import { FaRegSmileWink } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section
      id="callToAction"
      className="mb-14 px-3"
    >
      {/* Content Container */}
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
        className="mx-auto p-6 md:py-12 w-full max-w-[1280px] flex flex-col justify-center items-center space-y-6 text-center bg-slate-800 rounded-xl"
      >
        {/* Text */}
        <h3 className="text-xl md:text-3xl font-bold">
          Don&apos;t be a stranger. Feel free to reach out and connect with me!
        </h3>
        {/* Link */}
        <Link
          href="#contact"
          className="custom-btn custom-transition"
        >
          Let&apos;s chat
          <span className="mt-1 ml-2 text-xl">
            <FaRegSmileWink />
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
