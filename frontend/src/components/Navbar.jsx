import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full z-50 top-0 pt-6 flex justify-center items-center px-4 md:px-6"
    >
      <div 
        className="w-full max-w-7xl flex justify-between items-center px-6 py-3 rounded-full glass shadow-lg shadow-black/50 border border-white/10"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl sm:text-3xl font-bold tracking-tighter cursor-pointer"
        >
          <Link to="home" smooth={true} duration={500} spy={true}>
            <span className="text-white">Lak</span>
            <span className="text-red-500">shay</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 relative">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveItem(item.name)}
              className="relative px-3 py-2 text-sm font-medium cursor-pointer transition-colors z-10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Highlight Hover Pill using Framer Motion */}
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hoverPill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                />
              )}
              {/* Active dot indicator beneath the text */}
              {activeItem === item.name && (
                <motion.div
                   layoutId="activeDot"
                   className="absolute -bottom-1.5 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"
                   style={{ x: "-50%" }}
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ type: "spring", stiffness: 400, damping: 24 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${activeItem === item.name || hoveredIndex === index ? 'text-white' : 'text-slate-300'}`}>
                {item.name}
              </span>
            </Link>
          ))}
          
          <div className="pl-6">
             <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="/Lakshay CV.pdf"
                download
                className="block text-xs font-bold uppercase tracking-widest bg-red-600 px-6 py-2.5 rounded-full text-white shadow-lg shadow-red-500/20"
              >
                Resume
             </motion.a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors relative z-50 bg-white/5 rounded-full border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2, ease: "easeInOut" } }}
            className="absolute top-[85px] left-4 right-4 md:hidden glass border border-white/10 rounded-3xl shadow-2xl overflow-hidden origin-top"
          >
            <div className="flex flex-col items-center py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, type: "spring", stiffness: 300, damping: 24 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block py-3.5 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors w-[90%] mx-auto rounded-xl"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.1, type: "spring" }}
                className="pt-6 pb-2 w-full px-8"
              >
                <a
                  href="/Lakshay CV.pdf"
                  download
                  className="block w-full text-center text-sm font-bold uppercase tracking-widest bg-red-600 px-8 py-4 rounded-full text-white active:scale-95 transition-transform shadow-lg shadow-red-500/30"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
