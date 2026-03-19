import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const projects = [
  {
    title: "NexusCRM",
    description: "Full-stack Client Relationship Management System enabling streamlined management of leads, contacts, deals, tasks, and sales workflows. Built with a component-driven architecture and a robust REST API featuring JWT authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Lakshayb057/nexuscrm",
    live: "https://nexuscrm-client.vercel.app/login"
  },
  {
    title: "Applicant Tracking System (ATS)",
    description: "Production-ready automated hiring system with AI-powered CV parsing (Affinda). Integrates WhatsApp, Exotel dialer, and SMTP into a multi-channel inbox. Managed on scalable GCP infrastructure.",
    tech: ["Next.js", "FastAPI / Node.js", "PostgreSQL", "Google Cloud", "AI Integration"],
    github: "https://github.com/Lakshayb057/ATS",
    // live: "#"
  },
  {
    title: "SS Enterprises Telecom Portal",
    description: "A fully responsive corporate website for a telecom service provider (wesse.in). Developed with a clean UI and seamless experience across devices, integrating dynamic PHP content modules.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "PHP"],
    github: "https://github.com/Lakshayb057/Project-SS",
    live: "http://wesse.in"
  },
  {
    title: "Core Banking System",
    description: "A robust, menu-driven banking application using persistent binary file I/O to manage customer accounts and financial transactions. Features real-time balance updates and mini-statement generation.",
    tech: ["C", "C++", "Binary I/O", "Data Structures"],
    github: "https://github.com/Lakshayb057/Bank",
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative px-6 md:px-12 bg-transparent overflow-hidden" style={{ perspective: 1800 }}>
      {/* Background Red Ambiance */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/10 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -30, z: -200 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-between mb-16 px-2"
        >
          <div className="flex items-center space-x-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white whitespace-nowrap italic drop-shadow-md">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-px bg-red-500/20 flex-grow" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10" style={{ transformStyle: "preserve-3d" }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotateX: -45, rotateY: idx % 2 === 0 ? -20 : 20, z: -300 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: Math.random() > 0.5 ? 5 : -5, 
                rotateY: Math.random() > 0.5 ? 5 : -5, 
                z: 100,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass p-8 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.4)] cursor-pointer"
            >
              <div className="flex justify-between items-center mb-8" style={{ transform: "translateZ(30px)" }}>
                <Folder className="text-accent group-hover:scale-110 transition-transform" size={40} />
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={24} className="group-hover:scale-125 transition-transform" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                      <ExternalLink size={24} className="group-hover:scale-125 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-accent transition-colors drop-shadow-md" style={{ transform: "translateZ(40px)" }}>
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow" style={{ transform: "translateZ(20px)" }}>
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(30px)" }}>
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono font-bold text-white bg-red-500/20 group-hover:bg-red-500/40 px-3 py-1 rounded-full shadow-lg transition-colors">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center mt-20 animate-bounce cursor-pointer text-slate-500 hover:text-red-400 transition-colors"
      >
        <Link to="contact" smooth={true} duration={500}>
          <motion.div whileHover={{ scale: 1.3, rotateZ: 180 }}>
             <ChevronDown size={40} className="drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
