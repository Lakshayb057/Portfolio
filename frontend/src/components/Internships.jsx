import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileCheck, IndianRupee, Sparkles } from 'lucide-react';

const internships = [
  {
    company: "Chaos Design Pvt. Ltd.",
    role: "Junior Developer",
    location: "Gurgaon (DLF City Phase 1), Haryana",
    date: "July 2026 – Present (12 Months)",
    stipend: "INR 30,000 / month",
    badge: "OFFER ACCEPTED • 12-MONTH TENURE",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/25",
    isUpcoming: true,
    highlights: [
      "Secured a competitive 12-month Junior Developer role with a monthly stipend of INR 30,000 at Chaos Design Pvt. Ltd.",
      "Entrusted with full-stack engineering, core frontend/backend feature delivery, and scalable application architecture.",
      "Collaborating with cross-functional product and engineering teams to build modern, performant web platforms.",
    ],
    tech: ["React.js", "Node.js", "Full-Stack Development", "API Architecture", "Production Workflows"],
  },
  {
    company: "IFB Automotive",
    role: "Junior Software Intern",
    location: "Gurugram, Haryana",
    date: "Jul' 25",
    stipend: "Internship Certificate Issued",
    badge: "CERTIFIED INTERNSHIP",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/25",
    isUpcoming: false,
    highlights: [
      "Contributed to web and AI-powered application development using Python, Django, HTML, and MongoDB, assisting in scalable modules.",
      "Collaborated with the core development team to design, test, debug, and integrate application features while maintaining strict code quality.",
      "Optimized data storage and retrieval by implementing efficient file-handling mechanisms, requirement analysis, and team-based delivery.",
    ],
    tech: ["Python", "Django", "MongoDB", "AI Modules", "File Handling", "HTML/CSS"],
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
            <span>Internships</span>
            <span className="text-red-500">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Verified industry experience, accepted developer offers, and hands-on production engineering.
        </p>
      </div>

      {/* 2 Featured Internship Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {internships.map((intern, idx) => (
          <motion.div
            key={intern.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.01, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 sm:p-9 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider border ${intern.badgeColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {intern.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Calendar size={13} className="text-red-500" />
                  {intern.date}
                </span>
              </div>

              {/* Company & Role */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
                {intern.role}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 mb-6">
                <span className="font-semibold text-white">{intern.company}</span>
                <span className="text-zinc-700">•</span>
                <span className="inline-flex items-center gap-1 text-zinc-400 text-xs">
                  <MapPin size={13} className="text-zinc-500" />
                  {intern.location}
                </span>
                {intern.isUpcoming && (
                  <>
                    <span className="text-zinc-700">•</span>
                    <span className="inline-flex items-center gap-1 text-red-400 text-xs font-mono font-semibold">
                      <IndianRupee size={13} />
                      {intern.stipend}
                    </span>
                  </>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {intern.highlights.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-5 border-t border-zinc-800/60 flex flex-wrap gap-2">
              {intern.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:border-red-500/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
