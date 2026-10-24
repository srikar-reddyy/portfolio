import { motion } from 'framer-motion';
import { FaAws, FaHorse, FaBasketballBall, FaUsers } from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiNodedotjs, SiExpress, SiFastapi, SiPostman,
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiMongodb, SiPostgresql, SiRedis, SiDocker,
  SiLangchain, SiOpenai, SiPytorch, SiHuggingface, SiOpencv, SiGit, SiGithubcopilot, SiClaude,
  SiVercel, SiLinux,
} from 'react-icons/si';

import Section from './ui/Section';
import { reveal } from './ui/motion';

const groups = [
  {
    title: 'Languages',
    items: [
      { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-400' },
      { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-300' },
      { icon: SiPython, label: 'Python', color: 'text-yellow-400' },
      { icon: SiCplusplus, label: 'C++', color: 'text-sky-400' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-500' },
      { icon: SiExpress, label: 'Express', color: 'text-neutral-200' },
      { icon: SiFastapi, label: 'FastAPI', color: 'text-teal-400' },
      { icon: SiPostman, label: 'REST APIs', color: 'text-orange-400' },
    ],
  },
  {
    title: 'Frontend & Design',
    items: [
      { icon: SiReact, label: 'React', color: 'text-cyan-400' },
      { icon: SiNextdotjs, label: 'Next.js', color: 'text-white' },
      { icon: SiTailwindcss, label: 'Tailwind', color: 'text-cyan-400' },
      { icon: SiFigma, label: 'Figma', color: 'text-pink-400' },
    ],
  },
  {
    title: 'Data & Infrastructure',
    items: [
      { icon: SiMongodb, label: 'MongoDB', color: 'text-green-500' },
      { icon: SiPostgresql, label: 'PostgreSQL', color: 'text-sky-400' },
      { icon: SiRedis, label: 'Redis', color: 'text-red-500' },
      { icon: FaAws, label: 'AWS', color: 'text-orange-400' },
      { icon: SiDocker, label: 'Docker', color: 'text-blue-400' },
      { icon: SiVercel, label: 'Vercel', color: 'text-white' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      { icon: SiLangchain, label: 'LangChain', color: 'text-emerald-400' },
      { icon: SiOpenai, label: 'OpenAI', color: 'text-white' },
      { icon: SiPytorch, label: 'PyTorch', color: 'text-orange-500' },
      { icon: SiHuggingface, label: 'Hugging Face', color: 'text-yellow-400' },
      { icon: SiOpencv, label: 'OpenCV', color: 'text-green-400' },
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      { icon: SiGit, label: 'Git', color: 'text-orange-500' },
      { icon: SiClaude, label: 'Claude', color: 'text-orange-300' },
      { icon: SiGithubcopilot, label: 'Copilot', color: 'text-white' },
      { icon: SiLinux, label: 'Linux', color: 'text-yellow-300' },
    ],
  },
];

const interests = [
  { icon: FaHorse, label: 'Competitive horse riding' },
  { icon: FaBasketballBall, label: 'Basketball' },
  { icon: FaUsers, label: 'Mentoring early-stage campus startups on tech architecture' },
];

function About() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills"
      description="The stack I use to take products from system design to production."
    >
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <motion.div key={group.title} variants={reveal} className="card card-hover p-5 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map(({ icon: Icon, label, color }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-neutral-200"
                >
                  <Icon className={`${color} text-base`} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div variants={reveal} className="card mt-5 p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Beyond the code</h3>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {interests.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-neutral-200">
              <Icon className="text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}

export default About;
