import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        scale: 10,
        opacity: 0,
      }}
      animate={{
        scale: [8, 0, 1],
        opacity: [0, 1, 1],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="h-[150px] w-[150px] absolute border-2 border-sky-500/25 rounded-full animate-ping" />
      <div className="h-[300px] w-[300px] absolute border-dashed border-[12px] border-r-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[400px] w-[400px] absolute border-8 border-b-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[500px] w-[500px] absolute border-dotted border-8 border-l-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[600px] w-[600px] absolute border-8 border-t-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[700px] w-[700px] absolute border-2 border-sky-500/50 rounded-full animate-pulse" />
      <div className="h-[800px] w-[800px] absolute border-double border-[10px] border-x-transparent border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[900px] w-[900px] absolute border-double border-[10px] border-y-transparent border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[950px] w-[950px] absolute border-[10px] border-sky-500/25 rounded-full" />
    </motion.div>
  );
};

export default BackgroundCircles;
