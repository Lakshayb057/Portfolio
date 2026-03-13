import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/lakshay.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* About Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">About Me</h2>
            <div className="h-px bg-red-500/20 flex-grow" />
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            Hi, I'm <span className="text-accent font-semibold">Lakshay</span>, a B.Tech Computer Science student at Lovely Professional University, specializing in Full-Stack Development.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            I focus on building scalable web applications and have a solid foundation in both front-end and back-end development. I am committed to continuously improving my skills in emerging technologies, combining clean aesthetics with robust, production-ready architecture.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-4 rounded-xl border border-red-500/10">
              <h3 className="text-accent font-semibold mb-1">Education</h3>
              <p className="text-slate-300 text-sm">B.Tech CSE @ LPU<br/>(2023 - Present)</p>
            </div>
            <div className="glass p-4 rounded-xl border border-red-500/10">
              <h3 className="text-highlight font-semibold mb-1">Location</h3>
              <p className="text-slate-300 text-sm">Punjab, India<br/>(Remote/On-site)</p>
            </div>
          </div>
        </motion.div>

        {/* Profile Image View */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
            <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden glass border border-red-500/20 group shadow-2xl shadow-red-500/10">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10 pointer-events-none"/>
              <img 
                src={profileImg} 
                alt="Lakshay" 
                className="w-full h-full object-cover object-top grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 z-20">
                 <p className="text-xs font-mono text-white/30 tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/20 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                   {"< FULL STACK DEV />"}
                 </p>
              </div>
            </div>
           
           {/* Abstract Dots */}
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700/50 to-transparent block -z-10" />
        </motion.div>

      </div>

      <div className="flex justify-center mt-12 animate-bounce cursor-pointer text-slate-500 hover:text-white transition-colors">
        <Link to="skills" smooth={true} duration={500}>
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default About;
