import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Smartphone, Database, Wrench, Sparkles, Cpu } from 'lucide-react';

const skillGroups = [
  {
    category: "Languages",
    icon: <Code2 size={18} className="text-red-500" />,
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Server size={18} className="text-red-500" />,
    skills: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original text-white" },
      { name: "Django", icon: "devicon-django-plain text-rose-500" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
    ]
  },
  {
    category: "Web Development",
    icon: <Globe size={18} className="text-red-500" />,
    skills: [
      { name: "MERN Stack" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Responsive Web" },
      { name: "REST APIs" },
    ]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone size={18} className="text-red-500" />,
    skills: [
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "Jetpack Compose" },
      { name: "Java (Android)" },
      { name: "Material 3" },
      { name: "Coroutines" },
    ]
  },
  {
    category: "Databases & Storage",
    icon: <Database size={18} className="text-red-500" />,
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Prisma ORM", icon: "devicon-prisma-original text-white" },
      { name: "SQL & NoSQL" },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={18} className="text-red-500" />,
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original text-white" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original text-white" },
      { name: "Render" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ]
  },
  {
    category: "AI & Developer Tools",
    icon: <Sparkles size={18} className="text-red-500" />,
    skills: [
      { name: "Gemini 2.5 API" },
      { name: "Groq API (Llama-4)" },
      { name: "Claude" },
      { name: "Antigravity" },
      { name: "Windsurf" },
      { name: "Trae" },
      { name: "Blackbox" },
    ]
  },
  {
    category: "Core Concepts",
    icon: <Cpu size={18} className="text-red-500" />,
    skills: [
      { name: "Data Structures & Algo" },
      { name: "WebSockets & Real-time" },
      { name: "JWT & RBAC Security" },
      { name: "API Integration" },
      { name: "UI/UX Fundamentals" },
      { name: "Lead Attribution (CAPI/GTM)" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-14">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
          <span>Skills & Stack</span>
          <span className="text-red-500">.</span>
        </h2>
        <div className="h-px bg-zinc-800/80 flex-grow max-w-xs" />
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.06 }}
            whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 25px rgba(239,68,68,0.15)' }}
            className="bg-zinc-900/35 border border-zinc-800/70 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-zinc-800/60">
                {group.icon}
                <h3 className="font-display font-bold text-white text-base">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/40 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-200"
                  >
                    {skill.icon && (
                      <i className={`${skill.icon} text-sm flex-shrink-0`} />
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
