import React from 'react';
import { HiCode, HiDatabase } from 'react-icons/hi';
import { motion } from 'framer-motion';

type Props = {
  skillCard: {
    id: string;
    summary: string;
    skills: string[];
  };
};

const SkillCard = ({ skillCard }: Props) => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    // Skill Card Container
    <div className="w-full max-w-7xl p-3 flex flex-col rounded-xl bg-slate-800 text-center gap-5">
      {/* Card Icon */}
      <div className="w-fit mx-auto mt-4 p-4 rounded-full bg-slate-900 text-3xl text-primary">
        {/* If id equals 'frontEndSkills', use HiCode for frontend skills, else use HiDatabase for backend skills */}
        {skillCard.id === 'frontEndSkills' ? <HiCode /> : <HiDatabase />}
      </div>

      {/* Card Title */}
      <h3 className="w-min mx-auto text-xl sm:text-2xl font-bold uppercase tracking-widest">
        {/* If id equals 'frontEndSkills', use frontend title, else use backend title */}
        {skillCard.id === 'frontEndSkills' ? 'Front-end Development' : 'Back-end Development'}
      </h3>

      {/* Skill summary */}
      <p className="mx-auto max-w-sm text-slate-300 sm:text-lg">{skillCard.summary}</p>

      {/* Card List */}
      <div className="h-full p-4 bg-slate-900 rounded-xl ">
        <motion.ul
          {...stagger}
          className="flex flex-start flex-wrap gap-4 text-slate-400"
        >
          {/* Render skills list using stagger animation */}
          {skillCard?.skills.map((skill, i) => (
            <motion.li
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.2, delay: 0.1 * i }}
              key={skill}
              className="px-3 py-1 border border-slate-400 rounded-lg"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default SkillCard;
