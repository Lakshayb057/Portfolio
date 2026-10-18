import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import AnimatedBackground from './components/AnimatedBackground';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Stats from './components/Stats';
import UniverseSection from './components/UniverseSection';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize Lenis with gentle, controlled scrolling speed (slower, silky momentum)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // Controlled, gentle transition time
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      smoothWheel: true,
      wheelMultiplier: 0.7, // Lower multiplier slows down mouse wheel travel comfortably
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-300 selection:bg-red-500 selection:text-white overflow-x-clip">
      <CursorFollower />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Stats />
        <UniverseSection />
        <Internships />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
