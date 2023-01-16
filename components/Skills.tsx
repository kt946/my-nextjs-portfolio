import React from 'react';
import { HiCode, HiDatabase } from 'react-icons/hi';

type Props = {};

const Skills = (props: Props) => {
  // Front-end skills
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript ES6',
    'TypeScript',
    'jQuery',
    'Responsive Design',
    'DOM API',
    'Bootstrap',
    'Bulma',
    'React',
    'Redux',
    'Tailwind CSS',
    'NextJS',
    'Framer Motion',
  ];

  // Back-end skills
  const backEndSkills = [
    'Git',
    'Github',
    'AJAX',
    'Third-party APIs',
    'Node',
    'Object-Oriented Programming (OOP)',
    'Express',
    'REST API',
    'SQL, MySQL, Sequelize',
    'Object-Relational Mapping (ORM)',
    'Model-View-Controller (MVC)',
    'Handlebars',
    'NoSQL, MongoDB, Mongoose',
    'MERN',
  ];

  return (
    <section
      id="skills"
      className="my-36 w-full flex flex-col items-center scroll-mt-16"
    >
      <h2 className="pl-[15px] mt-6 mb-10 uppercase text-3xl text-center tracking-[15px] text-sky-500 font-semibold">Skills</h2>
      {/* Skills Container */}
      <div className="relative px-6 w-full max-w-full flex flex-col md:flex-row justify-center">
        {/* Skill Card */}
        <div className="w-full md:w-[1200px] flex flex-col md:flex-row rounded-xl shadow-lg bg-slate-800 text-center">
          {/* Frontend List */}
          <div className="w-full border-b md:border-b-0 md:border-r border-sky-500/50">
            <div className="my-6 flex flex-col items-center">
              <div className="mb-4 p-4 rounded-full bg-slate-900 text-3xl text-sky-500">
                <HiCode />
              </div>
              <h3 className="text-2xl font-semibold uppercase tracking-widest">Frontend Skills</h3>
            </div>
            <ul className="mb-6 space-y-2 text-lg text-slate-400 font-medium">
              {frontEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Backend List */}
          <div className="w-full">
            <div className="my-6 flex flex-col items-center">
              <div className="mb-4 p-4 rounded-full bg-slate-900 text-3xl text-sky-500">
                <HiDatabase />
              </div>
              <h3 className="text-2xl font-semibold uppercase tracking-widest">Backend Skills</h3>
            </div>
            <ul className="mb-6 space-y-2 text-lg text-slate-400 font-medium">
              {backEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
