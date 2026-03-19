import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/lakshay.png';

const Hero = () => {
  // Mouse tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Intense 3D tilt values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 px-6 md:px-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1500 }}
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-72 md:h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-72 md:h-72 bg-highlight/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      {/* Main Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div
           initial={{ opacity: 0, y: 50, rotateX: -90, z: -500 }}
           animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="inline-block px-5 py-2 rounded-full border border-red-500/30 glass text-xs sm:text-sm font-semibold tracking-wide text-red-400 mt-16 sm:mt-0 mb-6 sm:mb-8"
           style={{ transform: "translateZ(80px)" }}
        >
          Welcome to my portfolio
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
           animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
           transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.5 }}
           className="relative mb-8 sm:mb-10 lg:mb-12 cursor-pointer"
           style={{ transform: "translateZ(150px)" }}
           whileHover={{ scale: 1.1, rotateZ: 10 }}
        >
          <div className="absolute inset-0 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
          <img
            src={profileImg}
            alt="Lakshay"
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-[3px] sm:border-4 border-red-500/40 glass object-cover object-top shadow-[0_0_60px_rgba(239,68,68,0.5)]"
          />
        </motion.div>

        <motion.h1
           initial={{ opacity: 0, y: 100, rotateX: 90 }}
           animate={{ opacity: 1, y: 0, rotateX: 0 }}
           transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
           className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1]"
           style={{ transform: "translateZ(100px)" }}
        >
          <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">Hi, I'm</span> <br className="md:hidden" />
          <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">Lakshay</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 50, rotateX: 90 }}
           animate={{ opacity: 1, y: 0, rotateX: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-[90%] sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-12 font-medium drop-shadow-lg"
           style={{ transform: "translateZ(60px)" }}
        >
          A passion-driven Full-Stack Developer specializing in comprehensive, scalable applications. Transforming complex problems into elegant, modern web solutions.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.5, z: -200 }}
           animate={{ opacity: 1, scale: 1, z: 0 }}
           transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
           className="flex items-center space-x-4 sm:space-x-6 mb-16 sm:mb-24"
           style={{ transform: "translateZ(120px)" }}
        >
          <motion.a whileHover={{ scale: 1.2, rotateY: 180, z: 50 }} href="https://github.com/Lakshayb057" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 transition-colors shadow-lg shadow-black/40">
            <Github size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotateY: 180, z: 50 }} href="https://www.linkedin.com/in/lakshayb057" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 transition-colors shadow-lg shadow-black/40">
            <Linkedin size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotateY: 180, z: 50 }} href="mailto:Lakshayb057@gmail.com" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 transition-colors shadow-lg shadow-black/40">
            <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="animate-bounce cursor-pointer z-50 text-slate-400 hover:text-red-400"
           style={{ transform: "translateZ(80px)" }}
        >
          <Link to="about" smooth={true} duration={500}>
             <motion.div whileHover={{ scale: 1.3, rotateZ: 180 }}>
               <ChevronDown size={40} className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
             </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
