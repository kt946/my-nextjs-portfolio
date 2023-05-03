import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { bioParagraphs, profileImage } from '../constants/constants';

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
          className="section-title-container"
        >
          <h2 className="section-title">About</h2>
          <h3 className="section-subtitle">Me, Myself, and I</h3>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Bio */}
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
            className="w-full flex flex-col paragraph-text-color gap-4"
          >
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <Link
              href="#work"
              className="w-fit my-2 flex flex-wrap text-primary font-semibold group custom-transition hover:underline underline-offset-4"
            >
              Check out some of my latest projects.
              <span className="ml-1 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 custom-transition">
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
              src={`/assets/${profileImage}`}
              alt="Portfolio portrait"
              width={500}
              height={500}
              priority={true}
              className="w-[256px] h-[256px] md:min-w-[320px] md:h-[320px] lg:h-[384px] lg:min-w-[384px] rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
