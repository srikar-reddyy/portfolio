import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Socials from '../Components/ui/Socials';
import { navLinks as links, profile } from '../constants';

const overlayVariants = {
  closed: { opacity: 0, y: -16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.1 },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: 'easeIn' } },
};

const itemVariants = {
  closed: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  // Close the menu first, then scroll once the page is unlocked
  const goTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    requestAnimationFrame(() => {
      document.body.style.overflow = '';
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isOpen ? 'bg-transparent border-b border-transparent' : 'bg-ink/75 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="container-page">
        <div className="flex justify-between items-center py-4">
          <a
            href="#about"
            onClick={close}
            className="text-white font-bold text-xl hover:text-accent transition-colors"
          >
            {profile.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex">
            <ul className="flex space-x-8 items-center">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative py-2 px-1 text-base font-medium text-neutral-300 hover:text-white transition-colors
                               after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-accent
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Animated hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile full-screen menu (outside the header so backdrop-blur doesn't trap it) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            className="sm:hidden fixed inset-0 z-40 h-[100dvh] bg-ink flex flex-col"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            {/* Soft glow accents */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-purple-500/15 blur-[100px]" />

            <ul className="relative flex-1 flex flex-col justify-center items-center gap-2 px-6">
              {links.map((item, index) => (
                <motion.li key={item} variants={itemVariants} className="w-full max-w-xs">
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => goTo(e, item.toLowerCase())}
                    className="group flex items-center justify-between w-full py-3 border-b border-white/10 text-3xl font-bold text-white
                               hover:text-accent active:text-accent transition-colors"
                  >
                    <span>{item}</span>
                    <span className="text-sm font-medium text-neutral-500 group-hover:text-accent transition-colors">
                      0{index + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={itemVariants} className="relative flex justify-center pb-12">
              <Socials size="text-2xl" />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
