import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink, HiArrowRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { title } from 'process';

type Props = {
  project: {
    title: string;
    image: string;
    description: string;
    tech: string[];
    projectLink: string;
    githubLink: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    // Project Container
    <motion.li
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
      className="w-full flex flex-col lg:flex-row lg:gap-12 lg:odd:flex-row-reverse"
    >
      {/* Project Image */}
      <Link
        href={project.projectLink}
        className="lg:max-w-2xl relative flex w-full rounded-2xl overflow-hidden group"
      >
        {/* Image */}
        <Image
          src={`/assets/${project.image}`}
          alt={`Project screenshot of ${project.title}`}
          width={1920}
          height={1080}
          className="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
        ></Image>
        {/* Overlay */}
        <p className="absolute z-[1] w-full h-full flex flex-col justify-center items-center text-2xl md:text-3xl font-semibold text-primary opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
          <span className="flex">
            Visit Project
            <span className="ml-2 mt-1">
              <HiArrowRight />
            </span>
          </span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-80 transition ease-in-out duration-500" />
      </Link>

      {/* Project Info */}
      <div className="w-full my-2 flex flex-col item justify-center">
        {/* Project Title */}
        <h4 className="w-fit group">
          <Link
            href={project.projectLink}
            className="my-2 flex flex-wrap text-xl sm:text-2xl md:text-3xl font-bold tracking-wide group-hover:text-primary custom-transition"
          >
            {project.title}
            <span className="ml-1 mt-1 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 custom-transition">
              <HiArrowRight />
            </span>
          </Link>
        </h4>
        {/* Project Description */}
        <p className="paragraph-text-color">{project.description}</p>
        {/* Project Technologies */}
        <ul className="my-4 flex flex-wrap text-slate-400 gap-3">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="px-3 py-1 border border-slate-400 rounded-lg"
            >
              {techItem}
            </li>
          ))}
        </ul>
        {/* Project Links */}
        <div className="flex space-x-6">
          {/* Deployed Link */}
          <Link
            href={project.projectLink}
            className="project-link-btn"
          >
            <HiOutlineExternalLink />
          </Link>
          {/* Github Link */}
          <Link
            href={project.githubLink}
            className="project-link-btn"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
