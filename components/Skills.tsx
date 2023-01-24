import React from 'react';
import { skillCardData } from '../utils/constants';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="section-container mb-14"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="mb-12 md:mb-24"
        >
          <h2 className="section-title">Skills</h2>
          <h3 className="section-subtitle">Sollicitudin tempor id eu nisl</h3>
        </motion.div>

        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="section-subtitle-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde qui laborum cupiditate, nobis sequi dicta
          assumenda ullam ducimus tempore ab doloremque labore rem a, blanditiis eos provident. Ratione, consequatur?
        </motion.p>

        {/* Skills Container */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
          className="w-full max-w-full flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8"
        >
          {skillCardData.map((skillCard) => (
            <SkillCard
              key={skillCard.id}
              skillCard={skillCard}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
