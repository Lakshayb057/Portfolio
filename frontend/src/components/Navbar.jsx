import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeItem, setActiveItem] = useState('Home');

  // 3D Stagger animation for nav elements
  const containerVariants = {
    hidden: { opacity: 0, y: -50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: "spring", stiffness: 100, damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: -90, z: -50 },
    visible: { opacity: 1, rotateX: 0, z: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className="fixed w-full z-50 top-0 pt-6 flex justify-center items-center px-4 md:px-12"
    >
      <div 
        className="w-full max-w-7xl flex justify-between items-center px-5 sm:px-8 py-3 rounded-full glass shadow-lg shadow-black/50 border border-white/10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotateY: 15, z: 20 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl sm:text-3xl font-bold tracking-tighter cursor-pointer"
        >
          <Link to="home" smooth={true} duration={500}>
            <span className="text-white">Lak</span>
            <span className="text-red-500">shay</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 relative" style={{ perspective: 1000, transformStyle: "preserve-3d" }}>
          {navItems.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setActiveItem(item.name)}
                  className="relative px-3 py-2 text-sm font-medium cursor-pointer flex items-center justify-center transition-colors z-10"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Highlight Hover Pill using Framer Motion */}
                  {hoveredIndex === index && (
                      <motion.span
                        layoutId="hoverPill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
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
                  <motion.span 
                      className={`relative z-10 block ${activeItem === item.name || hoveredIndex === index ? 'text-white' : 'text-slate-300'}`}
                      animate={{ 
                          z: hoveredIndex === index ? 30 : 0,
                          rotateX: hoveredIndex === index ? 15 : 0
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                      {item.name}
                  </motion.span>
                </Link>
            </motion.div>
          ))}
          
          <motion.div className="pl-6" variants={itemVariants} style={{ transformStyle: "preserve-3d" }}>
             <motion.a
                whileHover={{ scale: 1.05, z: 40, rotateX: 15, boxShadow: "0px 15px 30px rgba(239, 68, 68, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="/Lakshay CV.pdf"
                download
                className="block text-xs font-bold uppercase tracking-widest bg-red-600 px-6 py-2.5 rounded-full text-white shadow-lg shadow-red-500/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                Resume
             </motion.a>
          </motion.div>
        </div>

        {/* Mobile CV Button */}
        <motion.a
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
          href="/Lakshay CV.pdf"
          download
          className="md:hidden px-5 py-2 text-[10px] font-bold uppercase tracking-widest bg-red-600 text-white rounded-full shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
        >
          Download CV
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
