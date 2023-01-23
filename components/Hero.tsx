import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { devName, roles } from '../utils/constants';

type Props = {};

const Hero = (props: Props) => {
  // typewriter effect from 'react-simple-typewriter' package
  // import roles here
  const [text] = useTypewriter({
    words: [...roles],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="section-container hero-container bg-black md:pt-64 flex flex-col items-center justify-center text-center"
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
        className="-mt-[64px] p-[4px] w-32 h-32 rounded-full bg-primary" // to add a colored border to center image, add the class "bg-" with your desired color such as "bg-blue-500"
      >
        {/* Center Image */}
        <div className="flex flex-col justify-center w-full h-full rounded-full overflow-hidden bg-black">
          {/* For personal brand Logo or portrait image, use either jpg or png for image file */}
          <Image
            src="/assets/logo500x500.png"
            alt="Portfolio Logo"
            width={150}
            height={150}
            className="p-7 w-full object-cover object-center" // if using portrait image, remove class "p-7" for image to cover object, else add some padding for logo
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
        className="z-10 mt-10 md:mt-12"
      >
        {/* Intro */}
        <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest custom-text-shadow">
          Hi, my name is
        </h2>
        {/* Name */}
        <h1 className="pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold tracking-wider md:tracking-widest">
          <span className="custom-gradient-text">{devName}</span>
        </h1>
        {/* Typing Text */}
        <h2 className="h-10 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest custom-text-shadow">
          {/* text from array will display here */}
          <span>{text}</span>
          {/* change the color of the cursor here */}
          <Cursor cursorColor="#00A6FF" />
        </h2>
      </motion.div>
    </section>
  );
};

export default Hero;
