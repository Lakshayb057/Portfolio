import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 py-12 px-6 md:px-12 relative z-10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer font-display font-extrabold text-2xl tracking-tight text-white flex items-center"
          >
            <span>Lakshay</span>
            <span className="text-red-500">.</span>
          </Link>
          <span className="text-zinc-600 text-sm">|</span>
          <span className="text-xs font-mono text-zinc-500">Full-Stack Engineer</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 font-mono text-center sm:text-left">
          &copy; {new Date().getFullYear()} Lakshay. Designed & Built with high precision.
        </p>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-5 text-sm text-zinc-400">
          <a
            href="https://github.com/Lakshay"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/Lakshay"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:text-red-400 flex items-center justify-center transition-all ml-2"
            title="Back to top"
          >
            <ArrowUp size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
