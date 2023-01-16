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
      <div className="h-[75px] md:h-[150px] w-[75px] md:w-[150px] absolute border md:border-2 border-sky-500/25 rounded-full animate-ping" />
      <div className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] absolute border-dashed border-4 md:border-[12px] border-r-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[200px] md:h-[400px] w-[200px] md:w-[400px] absolute border-4 md:border-8 border-b-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[250px] md:h-[500px] w-[250px] md:w-[500px] absolute border-dotted border-4 md:border-8 border-l-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[300px] md:h-[600px] w-[300px] md:w-[600px] absolute border-4 md:border-8 border-t-transparent border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[350px] md:h-[700px] w-[350px] md:w-[700px] absolute border md:border-2 border-sky-500/50 rounded-full animate-pulse" />
      <div className="h-[400px] md:h-[800px] w-[400px] md:w-[800px] absolute border-double border-2 md:border-[10px] border-x-transparent border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
      <div className="h-[450px] md:h-[900px] w-[450px] md:w-[900px] absolute border-double border-2 md:border-[10px] border-y-transparent border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="h-[500px] md:h-[950px] w-[500px] md:w-[950px] absolute border-4 md:border-[10px] border-sky-500/20 rounded-full" />
    </motion.div>
  );
};

export default BackgroundCircles;
