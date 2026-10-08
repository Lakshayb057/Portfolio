import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Stats', to: 'stats' },
  { name: 'UniVerse', to: 'universe' },
  { name: 'Internships', to: 'internships' },
  { name: 'Projects', to: 'projects' },
  { name: 'Work', to: 'experience' },
  { name: 'Education', to: 'education' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-xl shadow-2xl shadow-black/80'
            : 'bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md'
        }`}
      >
        {/* Logo with Red accent dot */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center group"
        >
          <span>Lakshay</span>
          <span className="text-red-500 ml-0.5 group-hover:scale-125 transition-transform">.</span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveItem(item.to)}
              className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200 relative py-1 text-[13.5px]"
            >
              {item.name}
              {activeItem === item.to && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Connect Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-white/5"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-400 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-zinc-950/95 border border-zinc-800/90 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl flex flex-col gap-4 lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-red-400 text-base font-medium py-2 border-b border-zinc-800/50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black text-center py-3 rounded-full font-bold text-sm mt-2"
            >
              Connect
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
