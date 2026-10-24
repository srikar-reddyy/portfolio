import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { styles } from '../styles';
import { workExperience } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';
import { SectionWrapper } from '../hoc';

const Experience = () => (
  <>
    <motion.div variants={textVariant()} className="text-center">
      <p className={styles.sectionSubText}>What I've done so far</p>
      <h2 className={styles.sectionHeadText}>Experience</h2>
    </motion.div>

    <div className="mt-12 flex flex-col gap-6 max-w-4xl mx-auto">
      {workExperience.map((job, index) => (
        <motion.div
          key={job.company_name}
          variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
          className="rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-500/40 via-transparent to-cyan-500/40"
        >
          <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-white text-2xl font-bold">{job.title}</h3>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:underline"
                >
                  {job.company_name} <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
              <span className="text-neutral-400 text-sm">{job.date}</span>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {job.points.map((point, i) => (
                <li key={i} className="text-neutral-300 text-[15px] leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, 'experience');
