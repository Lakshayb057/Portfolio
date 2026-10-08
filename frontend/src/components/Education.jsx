import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, Calendar, Award, Code2, ExternalLink } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.83",
    period: "Aug' 23 – Present",
    location: "Punjab, India",
    icon: <GraduationCap size={24} className="text-red-400" />,
    details: "Core focus on Software Engineering, Data Structures & Algorithms, Database Management Systems, Cloud Computing, and Full-Stack Web Technologies.",
    tags: ["B.Tech CSE", "Data Structures", "Web Architectures", "Cloud"],
  },
  {
    institution: "Aptech Learning",
    degree: "ACP - Aptech Certified Professional in C/C++ Programming",
    score: "Grade: Pass",
    period: "Jun 2023 – Jun 2024",
    location: "Fatehabad, Haryana",
    icon: <Code2 size={24} className="text-red-400" />,
    details: "12-month intensive program covering C, C++, OOP, Java Fundamentals, SQL Server, VB.NET, Cloud Computing, HTML5, jQuery, and practical software projects.",
    tags: ["C / C++", "OOP Principles", "Java", "SQL Server", "12-Mo Program"],
    certificateLink: "https://drive.google.com/file/d/15wR62pFMsR2PemgpHpYtKPoQG7daXL9B/view?usp=sharing",
  },
  {
    institution: "Daffodils Public School",
    degree: "Senior Secondary (Intermediate / 12th)",
    score: "Percentage: 65%",
    period: "Jun' 22 – Apr' 23",
    location: "Fatehabad, Haryana",
    icon: <School size={22} className="text-zinc-400" />,
    details: "Science & Mathematics curriculum establishing strong quantitative reasoning and computational problem-solving foundations.",
    tags: ["Higher Secondary", "Physics & Math", "Computer Science"],
  },
  {
    institution: "Crescent Public School",
    degree: "Secondary School (Matriculation / 10th)",
    score: "Percentage: 67%",
    period: "Jun' 20 – Apr' 21",
    location: "Fatehabad, Haryana",
    icon: <School size={22} className="text-zinc-400" />,
    details: "Foundational academic training with emphasis on scientific principles, analytical problem solving, and computer applications.",
    tags: ["Matriculation", "Science & Tech", "Core Foundation"],
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
            <span>Education</span>
            <span className="text-red-500">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          Academic qualifications, certified professional training, and engineering foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -5, borderColor: 'rgba(239,68,68,0.4)' }}
            className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                  {edu.icon}
                </div>
                <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                  {edu.score}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-1.5 flex items-center justify-between">
                <span>{edu.institution}</span>
                {edu.certificateLink && (
                  <a
                    href={edu.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-red-400 transition-colors"
                    title="View Certificate"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </h3>
              <h4 className="text-xs font-semibold text-zinc-300 mb-4 line-clamp-2">
                {edu.degree}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {edu.details}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {edu.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-zinc-950/70 border border-zinc-800/80 text-[10px] font-mono text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-zinc-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-zinc-400" />
                  {edu.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
