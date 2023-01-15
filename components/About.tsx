import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="pt-[60px] w-full h-screen flex flex-col items-center"
    >
      <h2 className="mt-6 uppercase text-3xl text-center tracking-[15px] text-sky-500">About</h2>
      <h3 className="my-6 mx-3 text-xl md:text-3xl tracking-wide text-center">Who Am I? You sure you want to know?</h3>
    </section>
  );
};

export default About;
