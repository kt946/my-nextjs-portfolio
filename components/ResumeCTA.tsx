import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { resumeLink } from '../utils/constants';

type Props = {};

const ResumeCTA = (props: Props) => {
  return (
    <section
      id="callToAction"
      className="section-container py-0 mb-14"
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
        className="mx-auto p-6 md:py-12 w-full max-w-[1280px] flex flex-col justify-center items-center gap-6 text-center bg-slate-900 rounded-xl"
      >
        {/* Text */}
        <h3 className="text-xl md:text-3xl font-bold">
          Want to see more of what I can do? Check out my resume.
        </h3>
        {/* Link */}
        <Link
          href={resumeLink}
          className="custom-btn custom-transition"
        >
          To my resume
          <span className="mt-1 ml-2 text-xl">
            <HiOutlineDocumentText />
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default ResumeCTA;
