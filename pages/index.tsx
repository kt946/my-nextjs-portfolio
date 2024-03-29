import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { devName, contactCTA, resumeCTA } from '../constants/constants';

export default function Home() {
  return (
    <div className="font-sans bg-[#0a0a0a] text-gray-100 h-screen z-0 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-firefox md:scrollbar">
      <Head>
        <title>{devName}</title>
        <meta
          name="description"
          content={`${devName}'s personal portfolio website`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link 
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
        />
      </Head>

      <Header />

      <main>
        <Hero />

        <About />

        {/* render CTA section using contactCTA in constants */}
        <CallToAction {...contactCTA} />

        <Skills />

        {/* render CTA section using resumeCTA in constants */}
        <CallToAction {...resumeCTA} />

        <Work />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
