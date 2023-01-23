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
        scale: [10, 0, 1],
        opacity: [0, 1, 1],
      }}
      transition={{ delay: 1, duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="h-[100px] w-[100px] md:h-[125px] md:w-[125px] hero-ring-style border md:border-2 border-primary/25 animate-ping" />

      <div className="h-[200px] w-[200px] md:h-[350px] md:w-[350px] hero-ring-style border-dashed border-4 md:border-[15px] border-slate-800/50 animate-[spin_10s_linear_infinite]" />

      <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] hero-ring-style border-4 md:border-8 border-b-transparent border-slate-600/20 animate-[spin_10s_linear_infinite_reverse]" />

      <div className="h-[300px] w-[300px] md:h-[450px] md:w-[450px] hero-ring-style border-dotted border-4 md:border-[10px] border-slate-800/50 animate-[spin_10s_linear_infinite]" />

      <div className="h-[350px] w-[350px] md:h-[500px] md:w-[500px] hero-ring-style border-double border-4 md:border-8 border-t-transparent border-r-transparent border-slate-600/30 animate-[spin_10s_linear_infinite_reverse]" />

      <div className="h-[400px] w-[400px] md:h-[550px] md:w-[550px] hero-ring-style border-double border-4 md:border-8 border-r-transparent border-t-transparent border-slate-800/50 animate-[spin_10s_linear_infinite]" />

      <div className="h-[450px] w-[450px] md:h-[600px] md:w-[600px] hero-ring-style border-4 md:border-8 border-x-transparent border-slate-600/20 animate-[spin_10s_linear_infinite_reverse]" />

      <div className="h-[500px] w-[500px] md:h-[650px] md:w-[650px] hero-ring-style border md:border-2 border-primary/40 animate-pulse" />

      <div className="h-[550px] w-[550px] md:h-[700px] md:w-[700px] hero-ring-style border-double border-4 md:border-[10px] border-x-transparent border-slate-600/30 animate-[spin_10s_linear_infinite]" />

      <div className="h-[600px] w-[600px] md:h-[750px] md:w-[750px] hero-ring-style border-dashed border-4 md:border-[10px] border-y-transparent border-slate-800/50 animate-[spin_10s_linear_infinite_reverse]" />

      <div className="h-[650px] w-[650px] md:h-[800px] md:w-[800px] hero-ring-style border-8 md:border-[10px] border-slate-600/20" />
    </motion.div>
  );
};

export default BackgroundCircles;
