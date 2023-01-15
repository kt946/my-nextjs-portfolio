import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        scale: 10,
        opacity: 1,
      }}
      animate={{
        scale: [8, 0, 1],
        opacity: [0, 1, 1],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: 1,
        }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="flex justify-center items-center"
      >
        {/* Outer Ring */}
        <div className="absolute w-[134px] h-[134px] rounded-full bg-gradient-to-b from-sky-600 to-cyan-400 shadow-md shadow-cyan-400/50 animate-[spin_3s_linear_infinite]" />
        {/* Inner Circle */}
        <div className="absolute w-32 h-32 flex flex-col justify-center bg-black rounded-full animate-none">
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

      <div className="absolute border border-sky-500/20 rounded-full h-[150px] w-[150px] animate-ping" />
      <div className="absolute border border-sky-500/20 rounded-full h-[300px] w-[300px]" />
      <div className="absolute border border-sky-500/20 rounded-full h-[500px] w-[500px]" />
      <div className="absolute border border-sky-500/60 rounded-full h-[700px] w-[700px] animate-pulse" />
      <div className="absolute border border-sky-500/20 rounded-full h-[900px] w-[900px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
