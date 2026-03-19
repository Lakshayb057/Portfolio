import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

const experiences = [
  {
    role: "Junior Software Intern",
    company: "IFB Automotive Private Limited",
    location: "Gurugram, Haryana",
    date: "Sep, 2024 – Dec, 2024",
    points: [
      "Developed web and AI-powered application modules using Django, Python, HTML, and MongoDB.",
      "Implemented file handling for efficient data storage and retrieval.",
      "Collaborated with the team to design, test, and deploy project modules."
    ]
  },
  {
    role: "Lead Backend/Frontend Dev",
    company: "NexusCRM",
    location: "Remote / Project",
    date: "July, 2024 – Sep, 2024",
    points: [
      "Engineered a full-stack CRM system using React.js, Node.js, Express, and MongoDB.",
      "Built a robust REST API featuring JWT authentication and role-based access control.",
      "Deployed across Vercel and Render with optimized state management and cross-browser support."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "SS Enterprises",
    location: "Remote / Contract",
    date: "April, 2024 – June, 2024",
    points: [
      "Developed a fully responsive, production-ready corporate website for a telecom service provider (wesse.in).",
      "Integrated dynamic content using PHP, implementing a component-driven architecture based on brand guidelines.",
      "Ensured SEO optimization, security compliance, and reliable uptime via live server configuration."
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 pb-16 last:pb-0"
    >
      {/* Vertical Track Segment */}
      <div className="absolute left-4 top-2 bottom-0 w-px bg-red-500/20 md:left-6"></div>
      
      {/* Pulsing Indicator */}
      <div className="absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center md:left-0">
        <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping scale-75"></div>
        <div className="relative w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full border-4 border-black shadow-[0_0_15px_rgba(239,68,68,0.5)] z-10"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Date / Metadata Sidebar */}
        <div className="lg:w-1/4 shrink-0">
          <div className="sticky top-24">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono mb-3">
              <Calendar size={12} className="mr-2" />
              {exp.date}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
            <div className="text-red-400 font-medium mb-2">{exp.company}</div>
            <div className="flex items-center text-slate-500 text-xs">
              <MapPin size={12} className="mr-1" />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Bento Content Card */}
        <motion.div 
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="flex-grow glass p-8 rounded-3xl border border-red-500/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all shadow-2xl shadow-red-500/5"
        >
          <ul className="space-y-4">
            {exp.points.map((pt, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500/40 mt-2 group-hover:bg-red-500 transition-colors"></span>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                  {pt}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative px-6 md:px-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           className="mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            <span className="text-gradient">Experiences</span>
          </h2>
          <div className="h-1 w-24 bg-red-500 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-32 animate-bounce cursor-pointer text-slate-500 hover:text-white transition-colors">
        <Link to="projects" smooth={true} duration={500}>
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
