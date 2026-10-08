import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Layers, ArrowUpRight } from 'lucide-react';

const projectItems = [
  {
    title: "DarshanAI",
    subtitle: "Smart Pilgrimage & Temple Booking Android App",
    category: "mobile",
    categoryLabel: "NATIVE ANDROID (KOTLIN)",
    description: "Native Android application enabling temple bookings, passenger management, slot scheduling, and digital ticket history. Features OTP-based email verification, QR-code e-tickets, and asynchronous operations with Kotlin Coroutines and Material 3 glassmorphism.",
    tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Kotlin Coroutines", "JavaMail API", "Material 3"],
    github: "https://github.com/Lakshay/DarshanAI",
    badge: "MOBILE APP",
    highlight: "QR E-Tickets & OTP Flow"
  },
  {
    title: "UniVerse",
    subtitle: "Digital Campus Dining Platform & Multi-Vendor OS",
    category: "fullstack",
    categoryLabel: "FLAGSHIP STARTUP",
    description: "Full-stack campus dining platform serving 1,000+ students and 50+ food vendors. Features real-time order dispatching with Socket.io, Razorpay HMAC SHA-256 payment verification, Telegram vendor alerts, and Cloudinary media optimization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Razorpay", "Tailwind CSS"],
    live: "https://food.universeorder.co.in",
    github: "https://github.com/Lakshay/universe",
    badge: "LIVE STARTUP",
    highlight: "1,000+ Active Users"
  },
  {
    title: "ChatLeads AI",
    subtitle: "Automated Lead Intelligence & WhatsApp Fleet CRM",
    category: "ai",
    categoryLabel: "AI & REAL-TIME",
    description: "Real-time WhatsApp CRM supporting 50+ concurrent sessions with Baileys SDK and WebSockets. Automates document OCR and structured lead generation using Gemini 2.5 Flash and Llama-4 (Groq API), cutting manual entry by 90%.",
    tech: ["Next.js", "FastAPI", "Node.js", "PostgreSQL", "Gemini 2.5 Flash", "Groq API", "WebSockets"],
    github: "https://github.com/Lakshay/ChatLeads-AI",
    badge: "AI PLATFORM",
    highlight: "90% Automation in Lead Entry"
  },
  {
    title: "Nexus CRM",
    subtitle: "High-Performance Multi-Tenant CRM Platform",
    category: "fullstack",
    categoryLabel: "ENTERPRISE BACKEND",
    description: "Multi-tenant CRM supporting 4 distinct user roles with dynamic lead management, chunked bulk CSV/Excel imports (1,000 records/batch), real-time Socket.io notifications, Redis low-latency cache, and Brevo SMTP appointment alerts.",
    tech: ["React.js", "Node.js", "PostgreSQL (JSONB)", "Prisma ORM", "Redis", "Socket.io", "Brevo SMTP"],
    github: "https://github.com/Lakshay/NexusCRM",
    badge: "ENTERPRISE",
    highlight: "100k+ Records Handled"
  },
  {
    title: "FinMantra",
    subtitle: "Financial Lead Management & Attribution Platform",
    category: "fullstack",
    categoryLabel: "FULL-STACK PLATFORM",
    description: "Financial lead management platform with dynamic admin controls, Meta Conversions API (CAPI) server-side event tracking via GTM, and dual-channel WhatsApp OTP verification with Baileys gateway failover.",
    tech: ["Next.js", "React", "FastAPI", "Node.js", "PostgreSQL", "Meta CAPI", "GTM", "Gemini API"],
    github: "https://github.com/Lakshay/FinMantra",
    badge: "ATTRIBUTION ENGINE",
    highlight: "100% Attribution Accuracy"
  },
  {
    title: "ABV - SkillPort",
    subtitle: "Vocational Education & Institute Management",
    category: "fullstack",
    categoryLabel: "COMMISSIONED SYSTEM",
    description: "MERN-based institute portal automating admissions, student records, and priority notices for 500+ students. Implemented JWT certificate verification with unique digital IDs and automated PDF-Parse verification.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "PDF-Parse", "Axios", "RBAC"],
    github: "https://github.com/Lakshay/SkillPort",
    badge: "COMMISSIONED",
    highlight: "₹1.1L Project Revenue"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectItems
    : projectItems.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
            <span>Selected Work</span>
            <span className="text-red-500">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A curated collection of impactful projects spanning AI systems, real-time architectures, and mobile applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {[
          { key: 'all', label: 'All Projects' },
          { key: 'fullstack', label: 'Full-Stack & Web' },
          { key: 'mobile', label: 'Mobile (Android)' },
          { key: 'ai', label: 'AI & Real-Time' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === tab.key
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
            className="group bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category & Badge Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-wider text-red-400 font-semibold">
                  {project.categoryLabel}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
                  {project.highlight}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-red-400 transition-colors mb-1">
                {project.title}
              </h3>
              <h4 className="text-xs font-semibold text-zinc-400 mb-4">
                {project.subtitle}
              </h4>

              {/* Description */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-zinc-800/60">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-[11px] font-mono text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 text-xs font-semibold"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-red-500/60 group-hover:bg-red-500 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
