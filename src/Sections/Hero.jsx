import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

import Socials from '../Components/ui/Socials';
import { heroStats, profile } from '../constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  return (
    <section id="about" className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Single soft glow — kept subtle on purpose */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container-page relative w-full grid gap-12 lg:grid-cols-[1.25fr_1fr] items-center">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p {...fadeUp(0)} className="chip gap-2">
            <FaMapMarkerAlt className="text-accent" /> {profile.location}
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m Srikar.
            <span className="block mt-2 bg-gradient-to-r from-accent to-sky-300 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 text-lg sm:text-xl text-neutral-300">
            I build{' '}
            <span className="font-semibold text-white">
              <Typewriter
                words={['scalable backends.', 'production RAG pipelines.', 'AI-powered products.']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1600}
              />
            </span>
          </motion.p>

          <motion.p
            {...fadeUp(0.22)}
            className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            Full Stack Engineer at StaySync, where I build a multi-tenant platform with 2,400+ active users. I care
            about systems that are fast, reliable and easy to reason about.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume <FaArrowRight className="text-sm" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <Socials className="sm:ml-2" />
          </motion.div>

          <motion.dl
            {...fadeUp(0.38)}
            className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-white/10 pt-8"
          >
            {heroStats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl sm:text-3xl font-bold text-white">{value}</dd>
                <dd className="mt-1 text-xs sm:text-sm text-neutral-500">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative mx-auto"
        >
          <img
            src="/assets/srikar-headshot.jpg"
            alt="Portrait of Srikar Reddy"
            width="320"
            height="320"
            className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover bg-white
                       ring-4 ring-accent/80 shadow-[0_0_60px_-10px_rgba(34,211,238,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
