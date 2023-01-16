import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="my-36 w-full flex flex-col items-center scroll-mt-16"
    >
      <h2 className="pl-[15px] mt-6 mb-10 uppercase text-3xl text-center tracking-[15px] text-sky-500 font-semibold">About</h2>

      <div className="relative px-6 w-full max-w-7xl flex flex-col md:flex-row justify-center">
        {/* Image container */}
        <div className="mx-auto md:mx-0">
          <Image
            src="/assets/portrait2.png"
            alt="Portfolio portrait"
            width={500}
            height={500}
            priority={true}
            className="w-[256px] h-[256px] md:w-[300px] md:h-[300px] rounded-2xl object-cover"
          />
        </div>
        {/* Bio */}
        <div className="md:ml-10 mt-10 md:mt-0 w-full md:w-[60%] flex flex-col">
          <h3 className="mb-4 text-center md:text-left text-2xl md:text-3xl tracking-wide font-semibold">
            Who am I? You sure you want to know?
          </h3>
          <div className="mb-10 sm:text-lg md:text-xl text-slate-400 space-y-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quaerat, accusantium quae consequuntur
              temporibus accusamus, inventore velit officia perspiciatis doloremque itaque! Cumque eligendi doloribus ad
              harum accusantium optio at facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat voluptate voluptatem amet ipsam
              porro suscipit? Impedit totam, cumque repudiandae maiores reiciendis assumenda excepturi accusantium
              dolores architecto quod? Officiis, dolore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis ullam doloribus harum
              aspernatur quidem deserunt voluptatibus dolor commodi soluta vel consectetur, delectus quae culpa amet
              aliquid ea, provident hic?
            </p>
          </div>
          <Link
            href="#contact"
            className="w-fit mx-auto md:mx-0 py-3 px-6 border-2 border-sky-500 hover:bg-sky-500 rounded-full text-center text-lg font-semibold text-sky-500 hover:text-white transition ease-in-out duration-300"
          >
            Connect with me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
