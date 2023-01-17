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
    'Python',
    'Lorem-1',
    'asd',
    'qwerty',
  ];

  // Back-end skills
  const backEndSkills = [
    'Git',
    'Github',
    'AJAX',
    'Third-party APIs',
    'Node',
    'OOP',
    'Express',
    'REST API',
    'SQL, MySQL, Sequelize',
    'ORM',
    'MVC',
    'Handlebars',
    'NoSQL, MongoDB, Mongoose',
    'MERN',
    'Sanity',
  ];

  return (
    <section
      id="skills"
      className="mb-20 px-6 py-12 scroll-mt-16 border border-amber-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-500 uppercase tracking-widest font-semibold">
            Skills
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl text-center md:text-left font-bold">
            Crafting digital solutions with style
          </h3>
        </div>

        {/* Skills Container */}
        <div className="w-full max-w-full flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Frontend Skill Card */}
          <div className="w-full max-w-7xl p-3 flex flex-col rounded-xl shadow-lg bg-slate-800 text-center">
            {/* Card Header */}
            <div className="mb-6 flex flex-col items-center">
              {/* Frontend Icon */}
              <div className="mb-4 p-4 rounded-full bg-slate-900 text-3xl text-sky-500">
                <HiCode />
              </div>
              {/* Frontend Title */}
              <h3 className="w-min text-xl sm:2xl md:text-3xl font-semibold uppercase tracking-widest">
                Frontend Development
              </h3>
            </div>
            {/* Card Body */}
            {/* Frontend List */}
            <ul className="h-full py-4 space-y-2 bg-slate-900 rounded-xl text-lg text-slate-300">
              {frontEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Backend Skill Card */}
          <div className="w-full max-w-7xl p-3 flex flex-col rounded-xl shadow-lg bg-slate-800 text-center">
            {/* Card Header */}
            <div className="mb-6 flex flex-col items-center">
              {/* Backend Icon */}
              <div className="mb-4 p-4 rounded-full bg-slate-900 text-3xl text-sky-500">
                <HiDatabase />
              </div>
              {/* Backend Title */}
              <h3 className="w-min text-xl sm:2xl md:text-3xl font-semibold uppercase tracking-widest">
                Backend Development
              </h3>
            </div>
            {/* Card Body */}
            {/* Backend List */}
            <ul className="h-full py-4 space-y-2 bg-slate-900 rounded-xl text-lg text-slate-300">
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
