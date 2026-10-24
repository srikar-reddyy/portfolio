import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaHorse, FaBasketballBall, FaUsers } from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiNodedotjs, SiExpress, SiFastapi,
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiMongodb, SiPostgresql, SiRedis, SiDocker,
  SiLangchain, SiOpenai, SiPytorch, SiHuggingface, SiOpencv, SiGit, SiGithubcopilot, SiClaude,
  SiVercel, SiPostman, SiLinux,
} from 'react-icons/si';
import './highlight.css';
import { styles } from '../styles';

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function About() {
  const cards = [
    {
      title: 'Languages',
      icons: [
        { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-500' },
        { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-400' },
        { icon: SiPython, label: 'Python', color: 'text-yellow-500' },
        { icon: SiCplusplus, label: 'C++', color: 'text-blue-400' },
      ],
    },
    {
      title: 'Backend',
      icons: [
        { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-500' },
        { icon: SiExpress, label: 'Express', color: 'text-neutral-200' },
        { icon: SiFastapi, label: 'FastAPI', color: 'text-teal-400' },
        { icon: SiPostman, label: 'REST APIs', color: 'text-orange-500' },
      ],
    },
    {
      title: 'Frontend & Design',
      icons: [
        { icon: SiReact, label: 'React', color: 'text-cyan-400' },
        { icon: SiNextdotjs, label: 'Next.js', color: 'text-white' },
        { icon: SiTailwindcss, label: 'Tailwind', color: 'text-cyan-400' },
        { icon: SiFigma, label: 'Figma', color: 'text-pink-500' },
      ],
    },
    {
      title: 'Databases & Infrastructure',
      icons: [
        { icon: SiMongodb, label: 'MongoDB', color: 'text-green-500' },
        { icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-400' },
        { icon: SiRedis, label: 'Redis', color: 'text-red-500' },
        { icon: FaAws, label: 'AWS', color: 'text-orange-400' },
        { icon: SiDocker, label: 'Docker', color: 'text-blue-500' },
        { icon: SiVercel, label: 'Vercel', color: 'text-white' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icons: [
        { icon: SiLangchain, label: 'LangChain', color: 'text-emerald-400' },
        { icon: SiOpenai, label: 'OpenAI', color: 'text-white' },
        { icon: SiPytorch, label: 'PyTorch', color: 'text-orange-500' },
        { icon: SiHuggingface, label: 'Hugging Face', color: 'text-yellow-400' },
        { icon: SiOpencv, label: 'OpenCV', color: 'text-green-400' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icons: [
        { icon: SiGit, label: 'Git', color: 'text-orange-500' },
        { icon: SiClaude, label: 'Claude', color: 'text-orange-300' },
        { icon: SiGithubcopilot, label: 'Copilot', color: 'text-white' },
        { icon: SiLinux, label: 'Linux', color: 'text-yellow-300' },
      ],
    },
    {
      title: 'Beyond the Code',
      icons: [
        { icon: FaHorse, label: 'Horse Riding', color: 'text-amber-400' },
        { icon: FaBasketballBall, label: 'Basketball', color: 'text-orange-500' },
        { icon: FaUsers, label: 'Startup Mentoring', color: 'text-cyan-400' },
      ],
    },
  ];

  return (
    <motion.div
      id="about"
      className="relative px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24 bg-black text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      {/* Glow Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[90px]"></div>
      </div>

      <h2 className={`relative text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16 ${styles.sectionHeadText}`}>
  Skills
</h2>



      {/* Mobile-optimized grid with proper spacing */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`relative group rounded-xl sm:rounded-2xl ${cards.length % 2 === 1 && i === cards.length - 1 ? 'sm:col-span-2' : ''} p-[2px] sm:p-1 mx-1 sm:mx-0 bg-gradient-to-tr from-cyan-500/40 via-transparent to-cyan-500/40 animate-border-spin`}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300 blur-md opacity-0 group-hover:opacity-100"></div>
            
            {/* Inner Card with mobile padding adjustments */}
            <div className="relative bg-neutral-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 flex flex-col items-center shadow-md space-y-3 sm:space-y-6 w-full z-10">
              <h2 className="text-white opacity-75 text-xl sm:text-[1.35rem] font-semibold text-center">
                {card.title}
              </h2>

              {card.icons.length > 0 ? (
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full">
                  {card.icons.map(({ icon: Icon, label, color }, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-neutral-800 rounded-lg sm:rounded-xl px-2 py-2 sm:px-4 sm:py-3 shadow-md border border-white/20 hover:border-cyan-500/30 transition-all"
                      whileHover={{
                        scale: 1.1,
                        zIndex: 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`${color} text-xl sm:text-xl`} />
                      <span className="text-white text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <span className="text-neutral-500 text-sm sm:text-base py-4">
                  Add content...
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;