import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="section-container hero-container md:pt-64 flex flex-col items-center justify-center text-center"
    >
      {/* Background Animation */}
      <BackgroundCircles />

      {/* Center Image Container */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: 1,
        }}
        transition={{ delay: 2.9, duration: 0.5 }}
        className="-mt-[64px] p-[6px] w-32 h-32 bg-gradient-to-t from-sky-600 to-cyan-400 rounded-full"
      >
        <div className="relative flex flex-col justify-center w-full h-full rounded-full overflow-hidden bg-black">
          <Image
            src="/assets/portfolio-logo.svg"
            alt="Portfolio Logo"
            width={150}
            height={150}
            className="relative w-full object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{
          y: '50%',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.8 }}
        className="z-10 mt-10 md:mt-20"
      >
        <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest custom-text-shadow">Hi, my name is</h2>
        <h1 className="pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold text-sky-500 tracking-widest custom-text-shadow">
          Kyle Tang
        </h1>
        <h2 className="h-10 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest custom-text-shadow">
          <span>{text}</span>
          <Cursor cursorColor="#0ea5e9" />
        </h2>
      </motion.div>
    </section>
  );
};

export default Hero;
