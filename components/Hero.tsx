import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      className="pt-[60px] w-full h-screen flex flex-col space-y-32 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="z-10">
        <h2 className="pb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest">Hi, my name is</h2>
        <h1 className="pb-2 text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold text-sky-500 tracking-widest">
          Kyle Tang
        </h1>
        <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-extrabold px-10 tracking-widest">
          <span>{text}</span>
          <Cursor cursorColor="#0ea5e9" />
        </h2>
      </div>
    </section>
  );
};

export default Hero;
