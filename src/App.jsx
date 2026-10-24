import React from 'react';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import './index.css';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="flex-1">
        <section id="about" className="pb-0">
          <Hero />
        </section>

        <section id="skills" className="pt-0">
          <About />
        </section>

        <section className="pt-0">
          <Experience />
        </section>

        <section id="projects" className="pt-0">
          <Projects />
        </section>
        
        <section id="education" className="pt-0">
          <Education />
        </section>

        <section id="contact" className="pt-0">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;
