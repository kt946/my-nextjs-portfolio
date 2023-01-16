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
      className="md:pt-40 w-full h-[600px] min-h-screen flex flex-col items-center justify-center text-center"
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
        transition={{ delay: 1.9, duration: 0.5 }}
        className="relative flex justify-center items-center"
      >
        {/* Outer Ring */}
        <div className="absolute w-[100px] h-[100px] md:w-[134px] md:h-[134px] rounded-full bg-gradient-to-b from-sky-600 to-cyan-400 shadow-md shadow-cyan-400/50 animate-[spin_3s_linear_infinite]" />
        {/* Inner Circle */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 flex flex-col justify-center bg-black rounded-full">
          {/* Image */}
          <Image
            src="/assets/portfolio-logo.svg"
            alt="Portfolio Logo"
            width={112} // {112}
            height={112} // {112}
            priority={true}
            className="w-auto p-4" // "rounded-full"
          />
        </div>
      </motion.div>

      {/* Heading */}
      <div className="z-10 mt-20 md:mt-28">
        <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest">Hi, my name is</h2>
        <h1 className="px-6 pb-2 text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold text-sky-500 tracking-widest">
          Kyle Tang
        </h1>
        <h2 className="px-6 h-10 uppercase text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-widest">
          <span>{text}</span>
          <Cursor cursorColor="#0ea5e9" />
        </h2>
      </div>
    </section>
  );
};

export default Hero;
