import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import PlanetaryNav from './components/PlanetaryNav';

function App() {
  return (
    <div className="bg-black text-white relative">
      <ParticleBackground />
      <Navigation />
      <PlanetaryNav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;