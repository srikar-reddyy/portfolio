import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/srikar-reddyy' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/srikar-reddy-81577b263/' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:srikarsrikar303@gmail.com' },
];

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col-reverse sm:flex-row items-center justify-center px-4 sm:px-20 pt-24 sm:pt-12 overflow-hidden">
      {/* Left Text */}
      <div className="z-10 mt-10 sm:mt-0 sm:mr-12 max-w-2xl text-center sm:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Hi, <br />
          <span>I'm Srikar</span> <span className="waving-hand">👋</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
          I am{' '}
          <span style={{ color: '#00FFFF', fontWeight: 'bold' }}>
            <Typewriter
              words={['a Backend Engineer', 'an AI Engineer', 'a Full Stack Developer', 'a RAG Pipeline Builder']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-neutral-400 mt-4">
          Backend & AI Engineer based in Hyderabad, India 📍 I build scalable full-stack applications, production RAG pipelines, and intelligent AI-powered systems. Full Stack Engineer at StaySync, serving 2,400+ active users with 99.9% uptime 🚀
        </p>

        {/* Resume Button */}
        <div className="mt-8 flex flex-wrap items-center gap-5 justify-center sm:justify-start">
  <a
    href="https://drive.google.com/file/d/1q1pOFgrvK8iflwMWjGlFZzf38fuvRPlD/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block px-6 py-3 rounded-xl font-semibold text-white bg-black border-2 border-cyan-400
               transition-all duration-300 hover:scale-105 hover:shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee] group"
  >
    <span className="relative z-10">View Resume</span>

    {/* Glow layer */}
    <span className="absolute inset-0 rounded-xl bg-cyan-400 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500" />
  </a>
  {socials.map(({ icon: Icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-neutral-300 hover:text-cyan-400 transition-colors text-2xl"
    >
      <Icon />
    </a>
  ))}
</div>

      </div>

      {/* Right Image + Animation */}
      <div className="relative flex justify-center items-center">
        <img
          src="/assets/srikar-headshot.jpg"
          alt="Srikar Avatar"
          className="shrink-0 w-48 h-48 sm:w-80 sm:h-80 object-cover object-center bg-white rounded-full border-4 border-cyan-400
             shadow-[0_0_40px_#00ffff33,0_20px_40px_#00ffff22]
             transition-all duration-500 ease-in-out
             hover:shadow-[0_0_10px_#00ffff44,0_30px_60px_#00ffff33]
             hover:scale-105"
        />

        {/* Rotating circles */}
        <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] border border-cyan-400/30 rounded-full animate-spin-slow z-[-1] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] border border-cyan-400/20 rounded-full animate-spin-reverse-slower z-[-2] -translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}

export default Hero;
