import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { bioParagraphs } from '../utils/constants';

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
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
          <h2 className="section-title">About</h2>
          <h3 className="section-subtitle">Me, Myself, and I</h3>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start space-y-8 space-y-reverse md:space-y-0 space-x-0 md:space-x-12">
          {/* Bio */}
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="w-full flex flex-col sm:text-lg md:text-xl text-slate-300 space-y-4"
          >
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <Link
              href="#work"
              className="my-2 flex flex-wrap text-sky-500 group"
            >
              Check out some of my latest projects.
              <span className="ml-1 mt-1 text-sky-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 custom-transition">
                <HiArrowRight />
              </span>
            </Link>
          </motion.div>

          {/* Image container */}
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="mx-auto md:mx-0 order-first md:order-last"
          >
            <Image
              src="/assets/portrait2.png"
              alt="Portfolio portrait"
              width={500}
              height={500}
              priority={true}
              className="w-[256px] h-[256px] md:min-w-[320px] md:h-[320px] lg:h-[384px] lg:min-w-[384px] rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
