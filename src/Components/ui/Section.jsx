import { motion } from 'framer-motion';
import { reveal, stagger } from './motion';

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div variants={reveal} className="mb-12 sm:mb-16 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {description && <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">{description}</p>}
    </motion.div>
  );
}

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="container-page"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        {children}
      </motion.div>
    </section>
  );
}
