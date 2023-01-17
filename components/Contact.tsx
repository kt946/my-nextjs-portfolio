import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="mb-20 px-6 py-12 scroll-mt-16 border border-orange-500"
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col border border-blue-500">
        {/* Section Title */}
        <div className="mb-12 md:mb-24">
          <h2 className="mb-3 text-3xl md:text-4xl text-center md:text-left text-sky-500 uppercase tracking-widest font-semibold">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl text-center md:text-left font-bold">
            Let&apos;s build something incredible together!
          </h3>
        </div>
        <div className="w-full flex flex-col md:flex-row border border-emerald-500"></div>
      </div>
    </section>
  );
};

export default Contact;
