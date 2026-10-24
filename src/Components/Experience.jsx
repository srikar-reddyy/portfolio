import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Section from './ui/Section';
import { reveal } from './ui/motion';
import { workExperience } from '../constants';

function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="relative border-l border-white/10 ml-2 space-y-8">
        {workExperience.map((job) => (
          <motion.li key={job.company} variants={reveal} className="relative pl-8">
            <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/20" />
            <div className="card card-hover p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{job.title}</h3>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                  >
                    {job.company} <FaExternalLinkAlt className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
                <span className="chip self-start">{job.date}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-neutral-300 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
