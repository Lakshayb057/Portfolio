import React from 'react';
import { motion } from 'framer-motion';

// Load all official multi-color brand SVG logos from assets
const techLogos = import.meta.glob('../assets/tech/*.svg', { eager: true, import: 'default' });

// Categorized Skills & Stacks with official brand colors, real SVGs, and 3D depth parameters
const skillsList = [
  // Frontend
  { id: "react", name: "REACT", category: "frontend", color: "#61DAFB", duration: 5.2, delay: 0 },
  { id: "nextjs", name: "NEXT.JS", category: "frontend", color: "#FFFFFF", duration: 6.1, delay: 0.8 },
  { id: "html5", name: "HTML5", category: "frontend", color: "#E34F26", duration: 6.1, delay: 0.6 },
  { id: "css3", name: "CSS3", category: "frontend", color: "#1572B6", duration: 5.7, delay: 1.2 },
  { id: "tailwindcss", name: "TAILWIND CSS", category: "frontend", color: "#06B6D4", duration: 6.5, delay: 0.3 },
  { id: "javascript", name: "JAVASCRIPT", category: "languages", color: "#F7DF1E", duration: 6.2, delay: 2.4 },
  { id: "typescript", name: "TYPESCRIPT", category: "languages", color: "#3178C6", duration: 6.7, delay: 1.0 },
  { id: "figma", name: "FIGMA", category: "frontend", color: "#F24E1E", duration: 5.9, delay: 2.2 },

  // Backend
  { id: "nodejs", name: "NODE.JS", category: "backend", color: "#68A063", duration: 5.9, delay: 1.8 },
  { id: "express", name: "EXPRESS", category: "backend", color: "#FFFFFF", duration: 6.3, delay: 0.9 },
  { id: "django", name: "DJANGO", category: "backend", color: "#4ade80", duration: 5.4, delay: 2.1 },
  { id: "fastapi", name: "FASTAPI", category: "backend", color: "#009688", duration: 5.4, delay: 0.5 },
  { id: "laravel", name: "LARAVEL", category: "backend", color: "#FF2D20", duration: 5.5, delay: 1.8 },
  { id: "socketio", name: "SOCKET.IO", category: "backend", color: "#FFFFFF", duration: 6.0, delay: 0.8 },
  { id: "webrtc", name: "WEBRTC", category: "backend", color: "#00A4E4", duration: 5.6, delay: 1.7 },

  // Languages
  { id: "python", name: "PYTHON", category: "languages", color: "#3776AB", duration: 5.8, delay: 1.1 },
  { id: "java", name: "JAVA", category: "languages", color: "#ED8B00", duration: 6.6, delay: 1.9 },
  { id: "cplusplus", name: "C++", category: "languages", color: "#00599C", duration: 6.4, delay: 2.3 },
  { id: "c", name: "C", category: "languages", color: "#A8B9CC", duration: 5.3, delay: 0.7 },
  { id: "kotlin", name: "KOTLIN", category: "languages", color: "#7F52FF", duration: 6.3, delay: 2.7 },
  { id: "php", name: "PHP", category: "languages", color: "#777BB4", duration: 5.7, delay: 1.3 },

  // Database & Cloud
  { id: "mongodb", name: "MONGODB", category: "database", color: "#47A248", duration: 6.8, delay: 1.5 },
  { id: "postgresql", name: "POSTGRESQL", category: "database", color: "#4169E1", duration: 6.9, delay: 2.0 },
  { id: "mysql", name: "MYSQL", category: "database", color: "#4479A1", duration: 5.6, delay: 0.4 },
  { id: "redis", name: "REDIS", category: "database", color: "#FF4438", duration: 5.3, delay: 0.9 },
  { id: "prisma", name: "PRISMA", category: "database", color: "#A78BFA", duration: 5.9, delay: 2.6 },
  { id: "firebase", name: "FIREBASE", category: "database", color: "#FFA000", duration: 6.4, delay: 0.4 },
  { id: "docker", name: "DOCKER", category: "database", color: "#2496ED", duration: 6.2, delay: 2.5 },
  { id: "vercel", name: "VERCEL", category: "database", color: "#FFFFFF", duration: 5.6, delay: 1.4 },
  { id: "netlify", name: "NETLIFY", category: "database", color: "#00C7B7", duration: 5.8, delay: 1.3 },

  // Tools & APIs
  { id: "git", name: "GIT", category: "tools", color: "#F05032", duration: 5.5, delay: 1.6 },
  { id: "github", name: "GITHUB", category: "tools", color: "#FFFFFF", duration: 6.7, delay: 0.2 },
  { id: "postman", name: "POSTMAN", category: "tools", color: "#FF6C37", duration: 6.5, delay: 0.1 },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen py-20 lg:py-28 px-6 md:px-12 relative max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20 overflow-visible"
      style={{ perspective: 1400 }}
    >
      <div style={{ transformStyle: "preserve-3d" }}>
        
        {/* =========================================================================
            SECTION HEADER WITH 3D SPATIAL ENTRANCE (MATCHING ABOUT ME)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotateX: -20, z: -80 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="flex items-center gap-4 mb-12 sm:mb-14"
        >
          <h2 className="hero-name-font tracking-wide text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-none flex items-baseline">
            <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">SKILLS & STACK</span>
            <span className="text-red-500 font-sans ml-1 text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-zinc-800/80 flex-grow max-w-xs origin-left"
          />
        </motion.div>

        {/* =========================================================================
            3D FLOATING CONSTELLATION GRID
            - 3D spatial depth & entrance physics
            - Interactive 3D pop on hover with authentic multi-color brand radiance
            ========================================================================= */}
        <div className="relative py-2" style={{ transformStyle: "preserve-3d" }}>
          {/* Subtle Ambient Red Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-5 lg:gap-6 max-w-6xl mx-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            {skillsList.map((skill, idx) => {
                const logoSrc = techLogos[`../assets/tech/${skill.id}.svg`];

                return (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.75, rotateX: 20, z: -80 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
                    exit={{ opacity: 0, scale: 0.6, z: -60 }}
                    transition={{
                      opacity: { duration: 0.35 },
                      scale: { duration: 0.35 },
                      layout: { type: "spring", stiffness: 350, damping: 28 },
                      delay: (idx % 12) * 0.025,
                    }}
                    whileHover={{
                      scale: 1.14,
                      y: -10,
                      z: 35,
                      rotateX: 4,
                      rotateY: -2,
                      transition: { type: 'spring', stiffness: 450, damping: 18 },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group relative flex flex-col items-center cursor-pointer select-none"
                  >
                    {/* Glassmorphic 3D Square Tile */}
                    <div
                      className="w-[72px] h-[72px] sm:w-[86px] sm:h-[86px] md:w-[94px] md:h-[94px] rounded-2xl sm:rounded-[24px] bg-[#121215] border border-white/[0.09] flex items-center justify-center p-3.5 sm:p-4 md:p-5 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] group-hover:bg-[#17171c]"
                      style={{
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = skill.color;
                        e.currentTarget.style.boxShadow = `0 0 32px ${skill.color}55, inset 0 0 16px ${skill.color}22`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
                      }}
                    >
                      {/* Real Official Brand SVG - High contrast silver resting state -> Authentic full brand color on hover */}
                      {logoSrc && (
                        <img
                          src={logoSrc}
                          alt={skill.name}
                          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-all duration-300 filter grayscale brightness-[1.8] contrast-[1.25] opacity-90 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.12)] group-hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)] pointer-events-none"
                          loading="lazy"
                          draggable={false}
                        />
                      )}
                    </div>

                    {/* Skill Name underneath the tile - revealed bold with brand color on hover */}
                    <div className="h-6 flex items-center justify-center mt-2 pointer-events-none">
                      <span
                        className="text-[11px] sm:text-xs font-mono font-extrabold tracking-wider uppercase opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-200 whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
