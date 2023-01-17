import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink, HiArrowRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

type Props = {
  project: {
    title: string;
    description: string;
    tech: string[];
    projectLink: string;
    githubLink: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    // Project Container
    <li className="w-full flex flex-col lg:flex-row lg:space-y-0 space-x-0 lg:space-x-6 lg:even:flex-row-reverse lg:even:space-x-reverse">
      {/* Project info */}
      <div className="lg:max-w-lg my-2 flex flex-col justify-center order-last lg:order-first">
        {/* Project Title */}
        <Link
          href={project.projectLink}
          className="w-fit group"
        >
          <h4 className="mb-2 flex flex-wrap text-xl sm:text-2xl md:text-3xl font-bold tracking-wide group-hover:text-sky-400 custom-transition">
            {project.title}
            <span className="hidden sm:block ml-2 mt-1 text-sky-400 opacity-0 group-hover:opacity-100 custom-transition">
              <HiArrowRight />
            </span>
          </h4>
        </Link>
        {/* Project Description */}
        <p className="mb-2 sm:text-lg md:text-xl text-slate-400">{project.description}</p>
        {/* Project Technologies */}
        <ul className="mb-2 flex flex-wrap text-lg text-slate-400 font-semibold">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="pr-4 pb-1"
            >
              {techItem}
            </li>
          ))}
        </ul>
        {/* Project Link and Github */}
        <div className="flex space-x-6 md:text-lg md:font-semibold">
          <Link
            href={project.projectLink}
            className="p-2 text-2xl border-2 border-sky-400 hover:bg-sky-400 rounded-full text-sky-400 hover:text-white custom-transition"
          >
            <HiOutlineExternalLink />
          </Link>
          <Link
            href={project.githubLink}
            className="p-2 text-2xl border-2 border-sky-400 hover:bg-sky-400 rounded-full text-sky-400 hover:text-white custom-transition"
          >
            <FaGithub />
          </Link>
        </div>
      </div>

      {/* Project Screenshot */}
      <Link
        href={project.projectLink}
        className="relative flex max-w-5xl rounded-2xl overflow-hidden group"
      >
        {/* Image */}
        <Image
          src="/assets/screenshot-placeholder.png"
          alt="Project screenshot"
          width={1920}
          height={1080}
          className="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
        ></Image>
        {/* Overlay */}
        <p className="absolute z-[1] w-full h-full flex flex-col justify-center items-center text-2xl md:text-3xl font-semibold text-sky-400 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
          <span className="flex">
            Visit Project
            <span className="ml-2 mt-1">
              <HiArrowRight />
            </span>
          </span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-80 transition ease-in-out duration-500" />
      </Link>
    </li>
  );
};

export default ProjectCard;
