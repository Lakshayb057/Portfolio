import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles, Send } from 'lucide-react';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Certifications', to: 'certificates' },
  { name: 'Skills', to: 'skills' },
  { name: 'Stats', to: 'stats' },
  { name: 'UniVerse', to: 'universe' },
  { name: 'Internships', to: 'internships' },
  { name: 'Projects', to: 'client-projects' },
  { name: 'Education', to: 'education' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to adjust capsule styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll offset
      const sections = ['home', ...navItems.map((n) => n.to), 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler with Lenis support
  const handleScrollTo = (targetId) => {
    setMobileMenuOpen(false);
    if (window.__lenis) {
      window.__lenis.scrollTo(`#${targetId}`, { duration: 1.3, offset: -50 });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 relative ${
            isScrolled
              ? 'bg-zinc-950/80 border border-zinc-800/90 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl'
              : 'bg-zinc-900/35 border border-zinc-800/50 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
          }`}
        >
          {/* Subtle top edge specular highlight line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent pointer-events-none" />

          {/* Left: Brand Identity - Whole name in same Monoton font */}
          <div className="flex items-center">
            <button
              onClick={() => handleScrollTo('home')}
              className="group flex items-center text-left focus:outline-none py-1"
              aria-label="Scroll to home"
            >
              <span className="hero-name-font tracking-wide text-white text-xl sm:text-2xl leading-none flex items-baseline group-hover:text-zinc-100 transition-colors">
                <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.18)]">LAKSHAY</span>
                <span className="text-red-500 font-sans ml-0.5 text-xl sm:text-2xl drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] group-hover:scale-125 transition-transform duration-200">.</span>
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation with Spring Pill Hover */}
          <div 
            className="hidden lg:flex items-center gap-1 relative px-1 py-0.5 rounded-full bg-zinc-950/40 border border-zinc-800/40"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.to;
              const isHovered = hoveredItem === item.to;

              return (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.to)}
                  onMouseEnter={() => setHoveredItem(item.to)}
                  className={`relative px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {/* Hover Backdrop Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-zinc-800/60 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Active Indicator Underline / Dot */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-red-500/15 border border-red-500/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Quick Action CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleScrollTo('contact')}
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-bold tracking-tight hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-md shadow-white/10 overflow-hidden"
            >
              <span>Let's Talk</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-zinc-950"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide Down Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-20 inset-x-4 max-w-lg mx-auto bg-zinc-950/95 border border-zinc-800/90 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-2 lg:hidden"
            >
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-900 mb-1">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Navigation</span>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-1.5 py-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleScrollTo(item.to)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/50 hover:border-red-500/30 text-zinc-300 hover:text-white text-sm font-medium transition-all text-left"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={13} className="text-zinc-600" />
                  </button>
                ))}
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-98 transition-all"
                >
                  <Send size={15} />
                  <span>Get In Touch</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
