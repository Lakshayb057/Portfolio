import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/favicon.png';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Lakshay Logo" className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300" />
          <div className="hidden sm:block text-xl md:text-2xl font-bold tracking-tighter">
            <span className="text-white">Lak</span>
            <span className="text-red-500">shay</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-accent"
              className="text-sm font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Lakshay CV.pdf"
            download
            className="text-xs font-bold uppercase tracking-widest bg-red-600 px-6 py-2.5 rounded-full text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition-all active:scale-95"
          >
            download resume!
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full glass border-t border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col items-center py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-accent cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Lakshay CV.pdf"
            download
            className="text-sm font-bold uppercase tracking-widest bg-red-600 px-8 py-3 rounded-full text-white active:scale-95 transition-transform"
          >
            download resume!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
