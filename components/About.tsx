import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="my-36 px-6 py-12 scroll-mt-16 border border-blue-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col border border-red-500">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-500 uppercase tracking-widest font-semibold">
            About
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl text-center md:text-left font-bold">
            Who am I? You sure you want to know?
          </h3>
        </div>

        <div className="relative w-full flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-12">
          {/* Image container */}
          <div className="mx-auto md:mx-0">
            <Image
              src="/assets/portrait2.png"
              alt="Portfolio portrait"
              width={500}
              height={500}
              priority={true}
              className="w-[256px] h-[256px] md:min-w-[320px] md:h-[320px] lg:h-[384px] lg:min-w-[384px] rounded-2xl object-cover"
            />
          </div>
          {/* Bio */}
          <div className="w-full flex flex-col">
            <div className="mb-10 sm:text-lg md:text-xl text-slate-300 space-y-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quaerat, accusantium quae consequuntur
                temporibus accusamus, inventore velit officia perspiciatis doloremque itaque! Cumque eligendi doloribus
                ad harum accusantium optio at facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat voluptate voluptatem amet
                ipsam porro suscipit? Impedit totam, cumque repudiandae maiores reiciendis assumenda excepturi
                accusantium dolores architecto quod? Officiis, dolore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis ullam doloribus harum
                aspernatur quidem deserunt voluptatibus dolor commodi soluta vel consectetur, delectus quae culpa amet
                aliquid ea, provident hic?
              </p>
            </div>
            <Link href="#contact">
              <button className="w-fit mx-auto md:mx-0 py-3 px-6 border-2 border-sky-500 hover:bg-sky-500 rounded-full text-center text-lg font-semibold text-sky-500 hover:text-white transition ease-in-out duration-300">
                Connect with me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
