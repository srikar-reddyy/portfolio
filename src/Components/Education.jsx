import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

import Section from './ui/Section';
import { reveal } from './ui/motion';
import { education } from '../constants';

function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <ol className="relative border-l border-white/10 ml-2 space-y-6">
        {education.map((item) => (
          <motion.li key={item.school} variants={reveal} className="relative pl-8">
            <span className="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full border-2 border-accent bg-ink" />
            <div className="card card-hover p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="grid place-items-center w-14 h-14 shrink-0 rounded-xl bg-white overflow-hidden">
                {item.logo ? (
                  <img src={item.logo} alt="" loading="lazy" className="w-full h-full object-contain p-1.5" />
                ) : (
                  <FaGraduationCap className="text-2xl text-ink" aria-hidden="true" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{item.school}</h3>
                    <p className="text-accent font-medium">{item.degree}</p>
                  </div>
                  <span className="text-sm text-neutral-500 whitespace-nowrap">{item.date}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                      <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-neutral-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

export default Education;
