import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    // reducedMotion="user" turns off motion for people who ask their OS for less of it
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </MotionConfig>
  );
}

export default App;
