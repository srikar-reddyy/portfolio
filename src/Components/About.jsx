import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt, FaPython, FaCode } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
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
      title: 'Tech Stack',
      icons: [
        { icon: FaReact, label: 'React', color: 'text-cyan-400' },
        { icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
        { icon: FaFigma, label: 'Figma', color: 'text-pink-500' },
        { icon: FaGitAlt, label: 'Git', color: 'text-orange-500' },
        { icon: FaHtml5, label: 'HTML5', color: 'text-red-500' },
        { icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-500' },
      ],
    },
    {
      title: 'Programming Languages',
      icons: [
        { icon: FaPython, label: 'Python', color: 'text-yellow-500' },
        { icon: DiJavascript, label: 'JavaScript', color: 'text-yellow-400' },
        { icon: FaCode, label: 'C++', color: 'text-blue-500' },
        { icon: FaHtml5, label: 'HTML', color: 'text-red-500' },
        { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500' },
        { icon: SiTailwindcss, label: 'Tailwind', color: 'text-cyan-400' },
      ],
    },
    { title: 'UI/UX Designing', icons: [] },
    { title: 'Tools', icons: [] },
    { title: 'Design', icons: [] },
    { title: 'Other Skills', icons: [] },
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
            className="relative group rounded-xl sm:rounded-2xl p-[2px] sm:p-1 mx-1 sm:mx-0 bg-gradient-to-tr from-cyan-500/40 via-transparent to-cyan-500/40 animate-border-spin"
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