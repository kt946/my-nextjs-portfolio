import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Work = (props: Props) => {
  return (
    // Section Container
    <section
      id="work"
      className="my-36 px-6 py-12 scroll-mt-16 border border-red-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col border border-emerald-500">
        {/* Section Title */}
        <div className="mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-400 uppercase tracking-widest font-semibold">
            Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-center md:text-left font-bold">
            A selection of my latest web development projects
          </h3>
        </div>

        {/* Project List Container */}
        <ul className="flex flex-col border border-amber-400">
          {/* Project Container */}
          {/* Every odd index, reverse project screenshot and info */}
          <li className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6">
            {/* Project Screenshot */}
            <Link
              href="/"
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src="/assets/screenshot-placeholder.png"
                alt="Project screenshot"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              ></Image>
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-center  bg-black opacity-0 hover:opacity-80 transition ease-in-out duration-300">
                <p className="text-3xl font-semibold text-sky-400">Visit Project</p>
              </div>
            </Link>
            {/* Project info */}
            <div className="md:max-w-xl border border-cyan-400 space-y-2 flex flex-col justify-center">
              {/* Project Title */}
              <Link href="/">
                <h4 className="text-3xl font-semibold tracking-wide hover:text-sky-400 transition ease-in-out duration-300">
                  Lorem Ipsum
                </h4>
              </Link>
              {/* Project Description */}
              <p className="sm:text-lg md:text-xl text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex autem pariatur illum ullam quos earum ad
                veritatis quaerat, at, voluptatem laudantium eius. Id quaerat odio sed, aliquid sequi architecto
                eligendi!
              </p>
              {/* Project Technologies */}
              <ul className="flex flex-row space-x-3 text-lg text-slate-400">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
              {/* Project Link and Github */}
              <div className="pt-4 space-x-6 text-xl">
                <Link
                  href="/"
                  className="py-2 px-4 border-2 border-sky-400 hover:bg-sky-400 text-sky-400 hover:text-slate-200 rounded-full transition ease-in-out duration-300"
                >
                  Visit Project
                </Link>
                <Link
                  href="/"
                  className="py-2 px-4 border-2 border-sky-400 hover:bg-sky-400 text-sky-400 hover:text-slate-200 rounded-full transition ease-in-out duration-300"
                >
                  Github
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
