import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-4 rounded-2xl sm:w-[280px] w-full"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-2 m-2 card-img_hover">
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live site`}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center text-white"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} source code`}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center"
              >
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px]">{description}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <p className="mt-3 text-secondary text-[16px] max-w-2xl leading-[28px] text-center">
          From production platforms to RAG pipelines and computer vision, here are some of the systems I've designed and built.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
