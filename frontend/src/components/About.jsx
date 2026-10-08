import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Zap, Sparkles, ExternalLink, Award } from 'lucide-react';

const pillars = [
  {
    icon: <Brain className="text-zinc-400 group-hover:text-red-500 transition-colors" size={28} />,
    title: "DSA & Problem Solving",
    description: "Strong algorithmic foundation, data structure optimization, and competitive problem solving.",
  },
  {
    icon: <Layers className="text-zinc-400 group-hover:text-red-500 transition-colors" size={28} />,
    title: "Building Solutions",
    description: "End-to-end web & software development, from database modeling to live cloud deployment.",
  },
  {
    icon: <Zap className="text-zinc-400 group-hover:text-red-500 transition-colors" size={28} />,
    title: "Full-Stack & Systems",
    description: "High-performance MERN, Next.js, Django, WebSockets, and distributed microservices.",
  },
  {
    icon: <Sparkles className="text-zinc-400 group-hover:text-red-500 transition-colors" size={28} />,
    title: "UI/UX & Mobile",
    description: "Pixel-perfect responsive web designs and native Android experiences with Jetpack Compose.",
  },
];

const certifications = [
  {
    title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
    issuer: "UDEMY",
    date: "Aug' 25",
    link: "https://drive.google.com/file/d/13ICN96ZAK89KfZ0hqRjB5JDUD7pyMYii/view",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "INFOSYS SPRINGBOARD",
    date: "Aug' 25",
    link: "https://drive.google.com/file/d/1GmTwsMLuO1qyONl0Cpde-RSfh_eqVY52/view",
  },
  {
    title: "Aptech Certified Professional in C/C++ Programming",
    issuer: "APTECH INSTITUTE",
    date: "Jun' 24",
    link: "https://drive.google.com/file/d/15wR62pFMsR2PemgpHpYtKPoQG7daXL9B/view?usp=sharing",
  },
  {
    title: "JAVA PROGRAMMING - Lovely Professional University",
    issuer: "IAMNEO PLATFORM",
    date: "May' 24",
    link: "https://drive.google.com/file/d/1Mo2j4_YcuKombnqfDaurv0XnEh61DCGd/view?usp=sharing",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "FREECODECAMP",
    date: "Sep' 23",
    link: "https://drive.google.com/file/d/1RanN4_5XwtZ5cBAGdPJhQc8t9vPGDyVV/view?usp=sharing",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-14">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
          <span>About Me</span>
          <span className="text-red-500">.</span>
        </h2>
        <div className="h-px bg-zinc-800/80 flex-grow max-w-xs" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Hello, I'm Lakshay.
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              My journey in development started with curiosity about how software works behind the scenes.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
              Today, that curiosity has evolved into building <strong className="text-white font-semibold">full-stack applications</strong>, <strong className="text-red-500 font-semibold">AI-driven tools</strong>, and <strong className="text-white font-semibold">real-world products</strong>. I enjoy turning complex ideas into scalable digital solutions using modern technologies.
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <span className="block text-xs font-mono text-zinc-500 uppercase tracking-wider">Education</span>
              <span className="text-sm font-semibold text-zinc-200">LPU & Aptech Learning</span>
              <span className="block text-xs text-zinc-400">B.Tech CSE • ACP Certified</span>
            </div>
            <div>
              <span className="block text-xs font-mono text-zinc-500 uppercase tracking-wider">Focus</span>
              <span className="text-sm font-semibold text-zinc-200">Full-Stack & Systems</span>
              <span className="block text-xs text-red-500">Production Apps</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-xs font-mono text-zinc-500 uppercase tracking-wider">Location</span>
              <span className="text-sm font-semibold text-zinc-200">Gurugram / Punjab</span>
              <span className="block text-xs text-zinc-400">India</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid with 3D hover response */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 25px rgba(239,68,68,0.15)' }}
              className="group bg-zinc-900/35 border border-zinc-800/70 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="mb-4">{pillar.icon}</div>
              <div>
                <h4 className="font-display font-bold text-white text-base mb-1.5 group-hover:text-red-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award size={18} className="text-red-500" />
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] font-semibold">
            Certifications & Verified Credentials
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-red-500/40 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-200 group-hover:text-white font-medium text-xs sm:text-[13px] leading-snug line-clamp-2">
                  {cert.title}
                </span>
                <ExternalLink size={14} className="text-zinc-500 group-hover:text-red-500 flex-shrink-0 transition-colors mt-0.5" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono pt-1 border-t border-zinc-800/40">
                <span>{cert.issuer}</span>
                <span className="text-red-400/90">{cert.date}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
