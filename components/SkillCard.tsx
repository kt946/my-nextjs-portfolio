import React from 'react';
import { HiCode, HiDatabase } from 'react-icons/hi';

type Props = { frontEndSkills?: string[]; backEndSkills?: string[] };

const SkillCard = ({ frontEndSkills, backEndSkills }: Props) => {
  return (
    <div className="w-full max-w-7xl p-3 flex flex-col rounded-xl bg-slate-800 text-center">
      {/* Card Header */}
      <div className="mb-6 mt-3 flex flex-col items-center">
        {/* Card Icon */}
        <div className="mb-4 p-4 rounded-full bg-slate-900 text-3xl text-sky-500">
          {frontEndSkills ? <HiCode /> : <HiDatabase />}
        </div>
        {/* Card Title */}
        <h3 className="w-min text-xl sm:2xl md:text-3xl font-semibold uppercase tracking-widest">
          {frontEndSkills ? 'Front-end Development' : 'Back-end Development'}
        </h3>
      </div>
      {/* Card List */}
      <ul className="h-full px-2 py-4 space-y-2 bg-slate-900 rounded-xl text-lg text-slate-300">
        {frontEndSkills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
        {backEndSkills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
