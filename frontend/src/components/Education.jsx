import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, Award, Code2, ExternalLink } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.83",
    badge: "CURRENT DEGREE • PURSUING",
    isCurrent: true,
    period: "Aug' 23 – Present",
    location: "Punjab, India",
    icon: GraduationCap,
    details: "Core focus on Software Engineering, Data Structures & Algorithms, Database Management Systems, Cloud Computing, and Full-Stack Web Technologies.",
  },
  {
    institution: "Aptech Learning",
    degree: "ACP - Aptech Certified Professional in C/C++ Programming",
    score: "Grade: Pass",
    badge: "CERTIFIED DIPLOMA • 12 MONTHS",
    isCurrent: false,
    period: "Jun 2023 – Jun 2024",
    location: "Fatehabad, Haryana",
    icon: Code2,
    details: "12-month intensive program covering C, C++, OOP, Java Fundamentals, SQL Server, VB.NET, Cloud Computing, HTML5, jQuery, and practical software projects.",
    certificateLink: "https://drive.google.com/file/d/15wR62pFMsR2PemgpHpYtKPoQG7daXL9B/view?usp=sharing",
  },
  {
    institution: "Daffodils Public School",
    degree: "Senior Secondary (Intermediate / 12th)",
    score: "Percentage: 65%",
    badge: "SENIOR SECONDARY",
    isCurrent: false,
    period: "Jun' 22 – Apr' 23",
    location: "Fatehabad, Haryana",
    icon: School,
    details: "Science & Mathematics curriculum establishing strong quantitative reasoning and computational problem-solving foundations.",
  },
  {
    institution: "Crescent Public School",
    degree: "Secondary School (Matriculation / 10th)",
    score: "Percentage: 67%",
    badge: "MATRICULATION",
    isCurrent: false,
    period: "Jun' 20 – Apr' 21",
    location: "Fatehabad, Haryana",
    icon: School,
    details: "Foundational academic training with emphasis on scientific principles, analytical problem solving, and computer applications.",
  }
];

const Education = () => {
  return (
    <section id="education" className="pt-6 sm:pt-10 md:pt-20 pb-8 sm:pb-12 md:pb-24 px-4 sm:px-6 md:px-12 relative max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-8 md:mb-14 relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="hero-name-font tracking-wide text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-none flex items-baseline">
            <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">EDUCATION</span>
            <span className="text-red-500 font-sans ml-1 text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Academic qualifications, certified professional training, and engineering foundation.
        </p>
      </div>

      {/* 2x2 Modern Cards Grid matching Internships layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {educationData.map((edu, idx) => {
          const IconComponent = edu.icon;
          return (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(239,68,68,0.4)', 
                boxShadow: '0 0 30px rgba(239,68,68,0.12)' 
              }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-5 sm:p-7 md:p-9 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute -top-24 -right-24 w-52 h-52 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Status Bar (Desktop only: hidden on small screen) */}
                <div className="hidden sm:flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider border ${
                    edu.isCurrent
                      ? 'bg-red-500/10 text-red-400 border-red-500/30'
                      : 'bg-zinc-950/80 text-zinc-400 border-zinc-800'
                  }`}>
                    {edu.isCurrent ? (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    )}
                    {edu.badge}
                  </span>

                  <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-full">
                    {edu.score}
                  </span>
                </div>

                {/* Institution & Degree */}
                <div className="flex items-start gap-3.5 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-red-500/40 group-hover:bg-red-950/20 transition-all duration-300">
                    <IconComponent size={20} className="text-red-400 sm:w-6 sm:h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {edu.institution}
                      </h3>
                      {edu.certificateLink && (
                        <a
                          href={edu.certificateLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono transition-all hover:scale-105 shrink-0"
                          title="View Verified Certificate"
                        >
                          <span>Verify</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
                      {edu.degree}
                    </h4>

                    {/* Mobile Score: Clean simple text below degree without red bg or border */}
                    <div className="sm:hidden mt-2">
                      <span className="text-xs font-mono text-zinc-300 font-medium">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                  {edu.details}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-3.5 sm:pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar size={13} className="text-red-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin size={13} className="text-red-400" />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
