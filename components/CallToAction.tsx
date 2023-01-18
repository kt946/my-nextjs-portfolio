import React from 'react';
import Link from 'next/link';
import { FaRegSmileWink } from 'react-icons/fa';

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section
      id="callToAction"
      className="mb-10 px-6"
    >
      {/* Content Container */}
      <div className="mx-auto p-6 md:py-12 w-full max-w-[1280px] flex flex-col justify-center items-center space-y-6 text-center bg-slate-800 rounded-xl">
        <h3 className="text-xl md:text-3xl font-bold">
          Don&apos;t be a stranger. Feel free to reach out and connect with me!
        </h3>
        <Link href="#contact">
          <button className="custom-btn custom-transition">
            Get in touch
            <span className='mt-1 ml-2 text-xl'>
              <FaRegSmileWink />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
