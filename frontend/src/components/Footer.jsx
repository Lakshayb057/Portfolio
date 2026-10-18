import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-black relative z-10 overflow-hidden">
      {/* Background Ambient Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-8 relative z-10 flex flex-col justify-between">
        
        {/* 1. Large Light Grey Typography Name Spanning Less Than Half Screen */}
        <div className="w-full py-4 md:py-8 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <h2 className="font-display font-black tracking-tighter uppercase text-[14vw] sm:text-[14.5vw] md:text-[15vw] leading-[0.82] text-transparent bg-clip-text bg-gradient-to-b from-zinc-500/35 via-zinc-600/20 to-zinc-800/5 text-center drop-shadow-[0_2px_24px_rgba(255,255,255,0.02)] transition-all duration-700">
            Lakshay<span className="text-red-500/30">.</span>
          </h2>
        </div>

        {/* 2. Info Bar Placed Below The Name "Lakshay." */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-b border-zinc-900/90 my-2">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer font-display font-extrabold text-2xl tracking-tight text-white flex items-center group"
            >
              <span>Lakshay</span>
              <span className="text-red-500 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all">.</span>
            </Link>
            <span className="text-zinc-700 text-sm">|</span>
            <span className="text-xs font-mono text-zinc-400">Full-Stack Engineer</span>
          </div>

          {/* Navigation & Social Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a
              href="https://github.com/lakshayb057"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lakshayb057"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lakshayb057@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer w-9 h-9 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-red-500/60 hover:text-red-400 flex items-center justify-center transition-all ml-2 group"
              title="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3. Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-600">
          <p>
            &copy; {new Date().getFullYear()} Lakshay. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
            Designed & Built with high precision
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
