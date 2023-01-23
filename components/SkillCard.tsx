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
    <div className="w-full max-w-7xl px-3 py-8 flex flex-col rounded-xl bg-slate-800 text-center gap-5">
      {/* Card Icon */}
      <div className="w-fit mx-auto p-4 rounded-full bg-slate-900 text-3xl text-primary">
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
      <ul className="h-full flex flex-col px-2 py-4 gap-2 rounded-xl sm:text-lg text-slate-300">
        {/* Render skills list */}
        {skillCard?.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
