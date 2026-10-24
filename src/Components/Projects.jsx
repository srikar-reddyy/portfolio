import { useCallback, useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

import Section from './ui/Section';
import { reveal } from './ui/motion';
import { projects } from '../constants';

function LinkButtons({ project, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} live site`}
          className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-neutral-300 hover:text-accent hover:border-accent/50 transition-colors"
        >
          <FaExternalLinkAlt className="w-3.5 h-3.5" />
        </a>
      )}
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code`}
          className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-neutral-300 hover:text-accent hover:border-accent/50 transition-colors"
        >
          <FaGithub className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article variants={reveal} className="h-full">
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={false}
        transitionSpeed={1200}
        className="card card-hover h-full flex flex-col overflow-hidden"
      >
        <button
          type="button"
          onClick={onOpen}
          className="block aspect-[16/10] overflow-hidden bg-black/40 rounded-none focus-visible:ring-inset"
          aria-label={`Open ${project.name} case study`}
        >
          <img
            src={project.image}
            alt=""
            loading="lazy"
            width="640"
            height="400"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </button>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{project.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <li key={m} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {m}
              </li>
            ))}
          </ul>

          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
            >
              Read case study <FaArrowRight className="text-xs" />
            </button>
            <LinkButtons project={project} />
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}

function CaseStudy({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const { caseStudy: cs } = project;

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="card relative w-full sm:max-w-3xl max-h-[92svh] overflow-y-auto rounded-b-none sm:rounded-2xl bg-surface"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.image} alt="" className="w-full aspect-[16/8] object-cover" />

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-black/70 text-white hover:text-accent"
        >
          <FaTimes />
        </button>

        <div className="p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Case study</p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <h3 id="case-study-title" className="text-3xl font-bold text-white">
              {project.name}
            </h3>
            <LinkButtons project={project} />
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white">The problem</h4>
              <p className="mt-2 text-neutral-400 leading-relaxed">{cs.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">My role</h4>
              <p className="mt-2 text-neutral-400 leading-relaxed">{cs.role}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Architecture</h4>
              <ul className="mt-2 space-y-2">
                {cs.architecture.map((a) => (
                  <li key={a} className="flex gap-3 text-neutral-400 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/70" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Impact</h4>
              <ul className="mt-2 space-y-2">
                {cs.impact.map((i) => (
                  <li key={i} className="flex gap-3 text-neutral-200 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="Production platforms, RAG pipelines and computer vision. Open any project for the full case study."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} onOpen={() => setActive(project)} />
        ))}
      </div>

      <AnimatePresence>
        {active && <CaseStudy key={active.name} project={active} onClose={close} />}
      </AnimatePresence>
    </Section>
  );
}

export default Projects;
