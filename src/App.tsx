import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/activities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Overview />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="activities">
        <Activities />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;