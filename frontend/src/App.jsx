import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import UniverseSection from './components/UniverseSection';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-300 selection:bg-red-500 selection:text-white overflow-x-clip">
      <AnimatedBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <UniverseSection />
        <Internships />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
