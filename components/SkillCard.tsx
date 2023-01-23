import React from 'react';
import { HiCode, HiDatabase } from 'react-icons/hi';

type Props = {
  skillCard: {
    id: string;
    summary: string;
    skills: string[];
  };
};

const SkillCard = ({ skillCard }: Props) => {
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
        <ul className="flex flex-start flex-wrap gap-4 text-slate-400">
          {/* Render skills list */}
          {skillCard?.skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 border border-slate-400 rounded-lg"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
