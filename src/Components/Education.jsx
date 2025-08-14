import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../Utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{
    background: 'linear-gradient(135deg, rgba(50, 60, 80, 0.7) 0%, rgba(30, 40, 60, 0.6) 100%)',
    color: '#ffffff',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: `
      0 4px 20px rgba(0, 255, 255, 0.3),
      0 10px 30px rgba(0, 255, 255, 0.2),
      0 20px 60px rgba(0, 255, 255, 0.1),
      0 40px 100px rgba(0, 255, 255, 0.05)
    `,
    border: 'none',
  }}
  
    contentArrowStyle={{ borderRight: '7px solid rgba(0, 255, 255, 0.7)' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    {/* Logo + Title side by side with very less gap */}
    <div className="flex items-center gap-2 mb-1">
      <img
        src={experience.icon}
        alt="logo"
        className="w-12 h-12 object-cover rounded-md" // Bigger logo + only slightly rounded
      />
      <h3 className="text-white text-[20px] font-bold leading-tight">
        {experience.title}
      </h3>
    </div>

    {/* Company Name */}
    <p className="text-secondary text-[15px] font-semibold mb-2 leading-none">
      {experience.company_name}
    </p>

    {/* Points */}
    <div className="flex flex-col ml-1">
      {experience.points.map((point, index) => (
        <p
          key={`experience-point-${index}`}
          className="text-[14px] leading-snug"
          style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2px' }}
        >
          {point}
        </p>
      ))}
    </div>
  </VerticalTimelineElement>
);

function Education() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 sm:px-20 pt-24 sm:pt-12 overflow-hidden">
      <motion.div variants={textVariant()} className="flex justify-center items-center py-0 px-3">
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-16 flex flex-col w-full">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
