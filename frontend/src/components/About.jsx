import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/lakshay.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative px-6 md:px-12" style={{ perspective: 1200 }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
        
        {/* About Text */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotateY: 30, z: -200 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="lg:w-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">About Me</h2>
            <div className="h-px bg-red-500/20 flex-grow" />
          </div>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-6" style={{ transform: "translateZ(30px)" }}>
            Hi, I'm <span className="text-accent font-bold drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">Lakshay</span>, a B.Tech Computer Science student at Lovely Professional University, specializing in Full-Stack Development.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8" style={{ transform: "translateZ(20px)" }}>
            I focus on building scalable web applications and have a solid foundation in both front-end and back-end development. I am committed to continuously improving my skills in emerging technologies, combining clean aesthetics with robust, production-ready architecture.
          </p>
          
          <div className="grid grid-cols-2 gap-6" style={{ transformStyle: "preserve-3d" }}>
            <motion.div 
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10, z: 50 }}
              className="glass p-4 rounded-xl border border-red-500/10 shadow-lg shadow-black/20"
            >
              <h3 className="text-accent font-bold mb-1">Education</h3>
              <p className="text-slate-300 text-sm">B.Tech CSE @ LPU<br/>(2023 - Present)</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, z: 50 }}
              className="glass p-4 rounded-xl border border-red-500/10 shadow-lg shadow-black/20"
            >
              <h3 className="text-highlight font-bold mb-1">Location</h3>
              <p className="text-slate-300 text-sm">Punjab, India<br/>(Remote/On-site)</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image View */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotateY: -30, z: -200 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
          style={{ transformStyle: "preserve-3d" }}
        >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -15, rotateX: 5, z: 100 }}
              className="relative w-full max-w-sm aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden glass border border-red-500/40 group shadow-[0_0_50px_rgba(239,68,68,0.3)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10 pointer-events-none"/>
              <img 
                src={profileImg} 
                alt="Lakshay" 
                className="w-full h-full object-cover object-top grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />
              <motion.div 
                className="absolute bottom-4 right-4 z-20"
                whileHover={{ scale: 1.1, z: 50 }}
              >
                 <p className="text-xs font-mono text-white/50 tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/40 group-hover:border-accent group-hover:text-accent shadow-lg shadow-red-500/20 transition-all">
                   {"< FULL STACK DEV />"}
                 </p>
              </motion.div>
            </motion.div>
           
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700/50 to-transparent block -z-10" />
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center mt-12 animate-bounce cursor-pointer text-slate-500 hover:text-red-400 transition-colors"
      >
        <Link to="skills" smooth={true} duration={500}>
          <motion.div whileHover={{ scale: 1.3, rotateZ: 180 }}>
            <ChevronDown size={40} className="drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
