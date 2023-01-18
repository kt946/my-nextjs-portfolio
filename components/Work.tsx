import React from 'react';
import ProjectCard from './ProjectCard';
import { projectList } from '../utils/constants';

type Props = {};

const Work = (props: Props) => {
  return (
    <section
      id="work"
      className="mb-20 px-6 py-12 scroll-mt-16 border border-red-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col border border-emerald-500">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-500 uppercase tracking-widest font-semibold">
            Work
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl text-center md:text-left font-bold">
            A selection of my latest web development projects
          </h3>
        </div>

        {/* Project List Container */}
        <ul className="flex flex-col space-y-12 md:space-y-36 border border-amber-400">
          {/* Every odd index, reverse project screenshot and info */}
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
