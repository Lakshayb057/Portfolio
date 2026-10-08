import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Calendar, Sparkles } from 'lucide-react';

const workExperiences = [
  {
    title: "FinMantra – Financial Lead Management Platform",
    role: "Full-Stack Freelance Engineer",
    badge: "LIVE IN PRODUCTION",
    date: "Jul' 26",
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "Node.js", "PostgreSQL", "WebSockets", "Meta CAPI", "Gemini API"],
    bullets: [
      "Built a full-stack financial lead management platform using React.js, Node.js, Express.js, and PostgreSQL, enabling administrators to manage 10+ configurable settings and templates through a secure dashboard without redeployment.",
      "Integrated Meta Conversions API (CAPI) with Google Tag Manager (GTM) using server-side event tracking, dataLayer, SHA-256 hashing, and lead deduplication, boosting conversion attribution accuracy for 100% of qualified leads.",
      "Developed a dual-channel WhatsApp OTP system combining the Meta WhatsApp Cloud API with a Baileys fallback gateway, guaranteeing reliable verification and uninterrupted authentication even during primary gateway downtime.",
    ],
  },
  {
    title: "ChatLeads AI – Automated Lead Intelligence & WhatsApp CRM",
    role: "Full-Stack AI & Backend Engineer",
    badge: "LIVE IN PRODUCTION",
    date: "Jun' 26",
    techStack: ["Next.js", "FastAPI", "Node.js", "PostgreSQL", "WebSockets", "Gemini 2.5 Flash", "Groq API (Llama-4)", "Pandas"],
    bullets: [
      "Architected a real-time WhatsApp CRM supporting 50+ concurrent active sessions using Node.js, FastAPI, Baileys SDK, and WebSockets, enabling instant lead synchronization, live agent monitoring, and secure JWT auth.",
      "Automated document processing by integrating Gemini 2.5 Flash for OCR and Llama-4 (Groq API) for intelligent data extraction, reducing manual lead entry by 90% while generating structured records from PDFs and images.",
      "Engineered a scalable multi-tenant backend with PostgreSQL, rate-limit protection, and Pandas/OpenPyXL-based Excel reporting, capable of processing 10,000+ leads with sub-second querying.",
    ],
  },
  {
    title: "Nexus – High-Performance Multi-Tenant CRM Platform",
    role: "Backend & Systems Engineer",
    badge: "LIVE IN PRODUCTION",
    date: "May' 26",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL (JSONB)", "Prisma ORM", "Redis", "Socket.io", "Brevo SMTP"],
    bullets: [
      "Engineered a multi-tenant CRM supporting 4 distinct user roles (SuperAdmin, Admin, TeamLead, Agent) with Prisma ORM and PostgreSQL, enabling dynamic lead management and flexible CSV/Excel data pipeline imports.",
      "Implemented real-time lead assignment and callback notifications with Socket.io, leveraged Redis for low-latency event streaming, and integrated Brevo SMTP to automate appointment reminders for 1,000+ leads/day.",
      "Optimized backend throughput via database indexing, chunk-based bulk imports (1,000 records/batch), and streaming Excel export APIs, reducing processing latency by 70% while handling 100,000+ lead records.",
    ],
  },
  {
    title: "ABV - SkillPort – Vocational Education & Institute Management",
    role: "Lead Full-Stack Developer",
    badge: "DELIVERED • ₹1.1L REVENUE",
    date: "Apr' 26",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "PDF-Parse", "Axios", "RBAC"],
    bullets: [
      "Developed an end-to-end MERN-based institute management platform automating admissions, student records, digital document workflows, and priority notices for 500+ students and administrative faculty.",
      "Implemented a JWT-secured certificate verification portal with unique digital IDs and integrated PDF-Parse to automate credential verification, reducing manual administrative review effort by 40%.",
      "Engineered granular RBAC dashboards for admins, staff, and students, integrated Axios for resilient client-server data flow, and delivered a production solution that generated ₹1.1 lakh in project revenue.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
            <span>Career Path & Work</span>
            <span className="text-red-500">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A chronicle of client-commissioned platforms, distributed architectures, and AI systems.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-zinc-800 space-y-12 sm:space-y-16">
        {workExperiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Glowing timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-red-500 shadow-[0_0_10px_#ef4444] group-hover:scale-125 transition-transform" />

            {/* Experience Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/40 rounded-3xl p-7 sm:p-9 backdrop-blur-xl transition-all duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                    {exp.badge}
                  </span>
                  <span className="text-sm font-semibold text-zinc-300">
                    {exp.role}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Calendar size={13} className="text-red-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-6">
                {exp.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-8">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="pt-6 border-t border-zinc-800/60 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {tech}
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

export default Experience;
