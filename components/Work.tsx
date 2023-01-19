import React from 'react';
import ProjectCard from './ProjectCard';
import { projectList } from '../utils/constants';

type Props = {};

const Work = (props: Props) => {
  return (
    <section
      id="work"
      className="section-container"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="section-title">
            Work
          </h2>
          <h3 className="section-subtitle">
            A selection of my latest web development projects
          </h3>
        </div>

        {/* Project List Container */}
        <ul className="flex flex-col space-y-12 md:space-y-36">
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
