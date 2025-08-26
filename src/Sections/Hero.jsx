import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

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
              words={['a UI/UX Designer', 'a Product Manager', 'a Web Developer', 'a Tech Enthusiast']}
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
          UI/UX Designer | Full Stack Developer | Data Structures & Algorithms Enthusiast 📊💻 | Building seamless and responsive digital experiences 🌐✨ | Passionate about solving problems through clean code and innovative solutions 💡🚀
        </p>

        {/* Resume Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
  <a
    href="https://drive.google.com/file/d/15q7_jUjhLWbY_GHX3NAF2Gx1whTkk4ar/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block px-6 py-3 rounded-xl font-semibold text-white bg-black border-2 border-cyan-400
               transition-all duration-300 hover:scale-105 hover:shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee] group"
  >
    <span className="relative z-10">View Resume</span>

    {/* Glow layer */}
    <span className="absolute inset-0 rounded-xl bg-cyan-400 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500" />
  </a>
</div>

      </div>

      {/* Right Image + Animation */}
      <div className="relative flex justify-center items-center">
        <img
          src="/assets/srikarphoto.jpg"
          alt="Srikar Avatar"
          className="w-48 h-48 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-cyan-400
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
