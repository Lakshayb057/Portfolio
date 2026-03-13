import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/lakshay.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-highlight/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-red-500/20 glass text-sm font-medium text-red-500 mb-6"
        >
          Welcome to my portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <img
            src={profileImg}
            alt="Lakshay"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-red-500/20 glass object-cover object-top shadow-2xl shadow-red-500/10"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          <span className="text-red-500">Hi, I'm</span> <br className="md:hidden" /><span className="text-gradient">Lakshay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 px-4"
        >
          A passion-driven Full-Stack Developer specializing in comprehensive, scalable applications. Transforming complex problems into elegant, modern web solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center space-x-4 mb-24"
        >
          <a href="https://github.com/Lakshayb057" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/lakshayb057" target="_blank" rel="noreferrer" className="p-3 glass rounded-full text-slate-300 hover:text-accent hover:bg-accent/10 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:Lakshayb057@gmail.com" className="p-3 glass rounded-full text-slate-300 hover:text-highlight hover:bg-highlight/10 transition-all">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-bounce cursor-pointer z-50 mt-12 text-slate-500 hover:text-white transition-colors"
        >
          <Link to="about" smooth={true} duration={500}>
            <ChevronDown size={40} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
