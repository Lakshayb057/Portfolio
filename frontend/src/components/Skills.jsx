import { motion } from 'framer-motion';
import { Key, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original text-white" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Django", icon: "devicon-django-plain text-emerald-500" },
    ]
  },
  {
    title: "Tools & Extra",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original text-white" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "SMTP", jsxIcon: <Mail className="text-amber-400" size={32} /> },
      { name: "Auth", jsxIcon: <Key className="text-amber-500" size={32} /> },
    ]
  }
];

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        y: {
          duration: Math.random() * 2 + 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      animate={{
        y: [0, Math.random() * -15 - 5, 0],
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col items-center justify-center p-2 sm:p-4"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-2xl transition-all duration-500" />
      
      {/* Icon Container */}
      <div className="relative z-10 mb-2 sm:mb-3 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.4)] transition-all duration-300">
        <div className="text-3xl sm:text-4xl md:text-5xl flex items-center justify-center group-hover:scale-110 transition-transform">
          {skill.icon ? (
            <i className={`${skill.icon} transition-all`} />
          ) : (
            skill.jsxIcon
          )}
        </div>
      </div>
      
      {/* Name */}
      <span className="relative z-10 text-[10px] md:text-xs font-mono tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase">
        {skill.name}
      </span>

      {/* Connection line decorator (Visual only) */}
      <div className="absolute top-1/2 left-full w-4 h-px bg-white/5 group-hover:bg-accent/20 hidden lg:block" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Technical <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">Nebula</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Breaking the boundaries of traditional grids. A fluid ecosystem of technologies I've mastered to bridge the gap between imagination and digital reality.
          </p>
        </motion.div>

        <div className="space-y-24">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
              {/* Category label - Integrated */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="lg:w-1/4 pt-4 shrink-0 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-3 mb-2">
                  <div className="w-6 h-px bg-accent/50" />
                  <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">
                    {category.title}
                  </span>
                </div>
              </motion.div>

              {/* Floating skills nebula - More compact */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12 py-2 flex-grow">
                {category.skills.map((skill, idx) => (
                  <SkillBadge 
                    key={skill.name} 
                    skill={skill} 
                    index={idx + catIdx * 6} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrow */}
      <div className="flex justify-center mt-32 animate-bounce cursor-pointer text-slate-500 hover:text-white transition-colors">
        <Link to="experience" smooth={true} duration={500}>
          <ChevronDown size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Skills;
