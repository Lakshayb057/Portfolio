import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/lakshay.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 px-6 md:px-12"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-72 md:h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-72 md:h-72 bg-highlight/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      {/* Main Container carefully aligned to the exact grid of About.jsx */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full border border-red-500/30 glass text-xs sm:text-sm font-semibold tracking-wide text-red-400 mt-16 sm:mt-0 mb-6 sm:mb-8"
        >
          Welcome to my portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse"></div>
          <img
            src={profileImg}
            alt="Lakshay"
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-[3px] sm:border-4 border-red-500/20 glass object-cover object-top shadow-[0_0_40px_rgba(239,68,68,0.2)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1]"
        >
          <span className="text-red-500">Hi, I'm</span> <br className="md:hidden" />
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Lakshay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-[90%] sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-12"
        >
          A passion-driven Full-Stack Developer specializing in comprehensive, scalable applications. Transforming complex problems into elegant, modern web solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center space-x-4 sm:space-x-6 mb-16 sm:mb-24"
        >
          <a href="https://github.com/Lakshayb057" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/20">
            <Github size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lakshayb057" target="_blank" rel="noreferrer" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/20">
            <Linkedin size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="mailto:Lakshayb057@gmail.com" className="p-3 sm:p-4 glass rounded-full text-slate-300 hover:text-white hover:bg-red-500/20 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/20">
            <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-bounce cursor-pointer z-50 text-slate-500 hover:text-red-400 hover:scale-110 transition-all"
        >
          <Link to="about" smooth={true} duration={500}>
            <ChevronDown size={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
