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
      <div className="absolute border border-sky-500/20 rounded-full h-[150px] w-[150px] animate-ping" />
      <div className="absolute border border-sky-500/20 rounded-full h-[300px] w-[300px]" />
      <div className="absolute border border-sky-500/20 rounded-full h-[500px] w-[500px]" />
      <div className="absolute border border-sky-500/60 rounded-full h-[700px] w-[700px] animate-pulse" />
      <div className="absolute border border-sky-500/20 rounded-full h-[900px] w-[900px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
