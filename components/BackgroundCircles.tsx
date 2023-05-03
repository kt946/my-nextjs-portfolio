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
      <div className="bg-tech-circle-1" />

      <div className="bg-tech-circle-2" />

      <div className="bg-tech-circle-3" />

      <div className="bg-tech-circle-4" />

      <div className="bg-tech-circle-5" />

      <div className="bg-tech-circle-6" />

      <div className="bg-tech-circle-7" />

      <div className="bg-tech-circle-8" />

      <div className="bg-tech-circle-9" />

      <div className="bg-tech-circle-10" />

      <div className="bg-tech-circle-11" />
    </motion.div>
  );
};

export default BackgroundCircles;
