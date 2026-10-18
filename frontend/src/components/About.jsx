import React from 'react';
import { motion } from 'framer-motion';

// Reusable Bento Icon Component:
// Red & Black monochrome in default state -> Vibrant 3D Emoji on container hover
const BentoIcon = ({ redBlackContent, emojiChar, glowColor = 'rgba(239, 68, 68, 0.4)' }) => (
  <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-start select-none">
    {/* Default: Red and Black only */}
    <div className="absolute inset-0 flex items-center justify-start transition-all duration-300 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75 group-hover:pointer-events-none">
      {redBlackContent}
    </div>

    {/* Hover: Vibrant Emoji appearance */}
    <div
      className="absolute inset-0 flex items-center justify-start transition-all duration-300 ease-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110"
      style={{ filter: `drop-shadow(0 8px 16px ${glowColor})` }}
    >
      <span className="text-2xl sm:text-3xl leading-none select-none font-['Apple_Color_Emoji','Segoe_UI_Emoji','Noto_Color_Emoji']">
        {emojiChar}
      </span>
    </div>
  </div>
);

// 1. DSA - Brain (Red & Black default, 🧠 emoji on hover)
const DsaIcon = () => (
  <BentoIcon
    emojiChar="🧠"
    glowColor="rgba(244, 114, 182, 0.45)"
    redBlackContent={
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(239,68,68,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 14C24 14 18 19 16 26C14 31 15 36 17 40C15 44 18 49 23 51C26 52 29 53 32 53C35 53 38 52 41 51C46 49 49 44 47 40C49 36 50 31 48 26C46 19 40 14 32 14Z"
          fill="#141416"
          stroke="#ef4444"
          strokeWidth="2.5"
        />
        <path
          d="M25 21C28 23 30 27 28 32C26 36 21 38 22 43C23 47 28 48 32 48C36 48 41 47 42 43C43 38 38 36 36 32C34 27 36 23 39 21"
          stroke="#ef4444"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 16V49" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <path d="M19 28C22 28 24 31 23 35" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M45 28C42 28 40 31 41 35" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M20 41C24 41 26 44 25 48" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M44 41C40 41 38 44 39 48" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    }
  />
);

// 2. Building Solutions - Crane (Red & Black default, 🏗️ emoji on hover)
const BuildingSolutionsIcon = () => (
  <BentoIcon
    emojiChar="🏗️"
    glowColor="rgba(245, 158, 11, 0.45)"
    redBlackContent={
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(239,68,68,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Platform */}
        <rect x="12" y="52" width="28" height="4" rx="2" fill="#ef4444" />

        {/* Vertical Tower Mast */}
        <rect x="18" y="18" width="8" height="34" fill="#141416" stroke="#ef4444" strokeWidth="1.5" rx="1" />
        <path d="M19 22L25 28M25 22L19 28" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 30L25 36M25 30L19 36" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 38L25 44M25 38L19 44" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 46L25 52M25 46L19 52" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />

        {/* Top Jib Apex & Cables */}
        <polygon points="22,10 26,18 18,18" fill="#ef4444" />
        <line x1="22" y1="10" x2="52" y2="18" stroke="#dc2626" strokeWidth="1.2" />
        <line x1="22" y1="10" x2="14" y2="18" stroke="#dc2626" strokeWidth="1.2" />

        {/* Horizontal Jib / Boom */}
        <rect x="14" y="16" width="38" height="4" rx="1.5" fill="#ef4444" />
        <rect x="13" y="16" width="5" height="6" rx="1" fill="#09090b" stroke="#ef4444" strokeWidth="1" />

        {/* Trolley, Cable & Hook */}
        <rect x="36" y="19" width="6" height="3" rx="1" fill="#ef4444" />
        <line x1="39" y1="22" x2="39" y2="29" stroke="#ef4444" strokeWidth="1.5" />
        <path d="M39 29 C39 32 36 32 36 30" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Slings & Suspended Beam */}
        <line x1="39" y1="30" x2="31" y2="36" stroke="#dc2626" strokeWidth="1.2" />
        <line x1="39" y1="30" x2="47" y2="36" stroke="#dc2626" strokeWidth="1.2" />
        <rect x="29" y="36" width="20" height="9" rx="1.5" fill="#141416" stroke="#ef4444" strokeWidth="1.6" />
      </svg>
    }
  />
);

// 3. Full-Stack - Lightning (Red & Black default, ⚡ emoji on hover)
const FullStackIcon = () => (
  <BentoIcon
    emojiChar="⚡"
    glowColor="rgba(250, 204, 21, 0.45)"
    redBlackContent={
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full drop-shadow-[0_4px_14px_rgba(239,68,68,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37 9L21 33H33L27 55L45 29H33L37 9Z"
          fill="#ef4444"
          stroke="#7f1d1d"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M35 12L24 31H33L30 46L41 29H33L35 12Z"
          fill="#b91c1c"
          opacity="0.3"
        />
      </svg>
    }
  />
);

// 4. UI/UX - Sparkles / Stars (Red & Black default, ✨ emoji on hover)
const UiUxIcon = () => (
  <BentoIcon
    emojiChar="✨"
    glowColor="rgba(255, 255, 255, 0.45)"
    redBlackContent={
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full drop-shadow-[0_4px_14px_rgba(239,68,68,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary 4-Point Star in Red */}
        <path
          d="M38 12C38 21 44 26 52 26C44 26 38 31 38 40C38 31 32 26 24 26C32 26 38 21 38 12Z"
          fill="#ef4444"
          stroke="#7f1d1d"
          strokeWidth="1.2"
        />
        {/* Companion Star */}
        <path
          d="M22 34C22 39 25 42 29 42C25 42 22 45 22 50C22 45 19 42 15 42C19 42 22 39 22 34Z"
          fill="#dc2626"
          opacity="0.85"
        />
      </svg>
    }
  />
);

const About = () => {
  return (
    <section
      id="about"
      className="pt-6 sm:pt-14 md:pt-20 pb-6 sm:pb-12 md:pb-24 px-4 sm:px-6 md:px-12 relative max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
      style={{ perspective: 1400 }}
    >
      <div style={{ transformStyle: "preserve-3d" }}>

        {/* Section Header with 3D Depth Entrance */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotateX: -20, z: -80 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 md:mb-14"
        >
          <h2 className="hero-name-font tracking-wide text-white uppercase text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-none flex items-baseline">
            <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">ABOUT ME</span>
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
            UNIFIED RESPONSIVE BENTO GRID:
            - Mobile: Bio on top (full width), Row 1: [DSA] [Building Solutions], Row 2: [Full-Stack] [UI/UX]
            - Desktop: Row 1: Bio (8 cols) + DSA (4 cols), Row 2: Building Solutions (4 cols) + Full-Stack (4 cols) + UI/UX (4 cols)
            ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-5" style={{ transformStyle: "preserve-3d" }}>

          {/* 1. Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -70, rotateY: 12, rotateX: -6, z: -120, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0, z: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.22 }}
            whileHover={{
              y: -6,
              rotateX: 2,
              rotateY: -2,
              z: 25,
              borderColor: 'rgba(239, 68, 68, 0.35)',
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="col-span-2 lg:col-span-8 bg-[#121214] border border-white/[0.08] rounded-[20px] sm:rounded-[32px] p-5 sm:p-9 lg:p-12 transition-colors duration-300 flex flex-col justify-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] cursor-default"
          >
            {/* Subtle Glass Top Rim Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

            {/* Subtle Inside Ambient Red Glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 sm:w-80 sm:h-80 bg-red-500/[0.06] rounded-full blur-[65px] pointer-events-none group-hover:bg-red-500/[0.12] transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Content with 3D Pop */}
            <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-bold text-xl sm:text-3xl lg:text-[2.65rem] text-white tracking-tight leading-tight"
              >
                Hello, I'm Lakshay.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-zinc-400 text-xs sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-6 font-normal"
              >
                My journey in development started with curiosity about how software works behind the scenes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-zinc-400 text-xs sm:text-base lg:text-lg leading-relaxed mt-2.5 sm:mt-6 font-normal"
              >
                Today, that curiosity has evolved into building <strong className="text-white font-semibold">full-stack applications</strong>, <span className="text-red-500 font-semibold">AI-driven tools</span>, and <strong className="text-white font-semibold">real-world products</strong>. I enjoy turning complex ideas into scalable digital solutions using modern technologies.
              </motion.p>
            </div>
          </motion.div>

          {/* 2. DSA Card (Mobile: Left column row 2 | Desktop: Right col row 1) */}
          <motion.div
            initial={{ opacity: 0, x: 70, rotateY: -12, rotateX: -6, z: -120, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0, z: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.15, type: "spring", bounce: 0.22 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              rotateY: 3,
              z: 25,
              borderColor: 'rgba(239, 68, 68, 0.45)',
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="col-span-1 lg:col-span-4 bg-[#121214] border border-white/[0.08] hover:border-red-500/40 rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-6 lg:p-8 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] min-h-[160px] sm:min-h-[220px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-red-500/[0.03] group-hover:bg-pink-500/[0.08] rounded-full blur-3xl pointer-events-none transition-colors duration-300" />

            <div className="mb-2 sm:mb-5" style={{ transform: "translateZ(30px)" }}>
              <DsaIcon />
            </div>

            <div style={{ transform: "translateZ(20px)" }}>
              <h4 className="font-display font-bold text-sm sm:text-lg lg:text-xl text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors leading-tight">
                DSA
              </h4>
              <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm leading-snug sm:leading-relaxed">
                Problem solving and algorithmic thinking.
              </p>
            </div>
          </motion.div>

          {/* 3. Building Solutions (Mobile: Right column row 2 beside DSA | Desktop: Left col row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 70, rotateX: 20, rotateY: 6, z: -100 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.2, type: "spring", bounce: 0.22 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              z: 25,
              borderColor: 'rgba(239, 68, 68, 0.45)',
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="col-span-1 lg:col-span-4 bg-[#121214] border border-white/[0.08] hover:border-red-500/40 rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-6 lg:p-8 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] min-h-[160px] sm:min-h-[220px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-red-500/[0.03] group-hover:bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none transition-colors duration-300" />

            <div className="mb-2 sm:mb-5" style={{ transform: "translateZ(30px)" }}>
              <BuildingSolutionsIcon />
            </div>

            <div style={{ transform: "translateZ(20px)" }}>
              <h4 className="font-display font-bold text-sm sm:text-lg lg:text-xl text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors leading-tight">
                Building Solutions
              </h4>
              <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm leading-snug sm:leading-relaxed">
                End-to-end web & software development.
              </p>
            </div>
          </motion.div>

          {/* 4. Full-Stack (Mobile: Left column row 3 | Desktop: Center col row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 20, z: -100 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.3, type: "spring", bounce: 0.22 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              z: 25,
              borderColor: 'rgba(239, 68, 68, 0.45)',
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="col-span-1 lg:col-span-4 bg-[#121214] border border-white/[0.08] hover:border-red-500/40 rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-6 lg:p-8 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] min-h-[160px] sm:min-h-[220px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-red-500/[0.03] group-hover:bg-yellow-500/[0.08] rounded-full blur-3xl pointer-events-none transition-colors duration-300" />

            <div className="mb-2 sm:mb-5" style={{ transform: "translateZ(30px)" }}>
              <FullStackIcon />
            </div>

            <div style={{ transform: "translateZ(20px)" }}>
              <h4 className="font-display font-bold text-sm sm:text-lg lg:text-xl text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors leading-tight">
                Full-Stack
              </h4>
              <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm leading-snug sm:leading-relaxed">
                Modern MERN and Django architectures.
              </p>
            </div>
          </motion.div>

          {/* 5. UI/UX (Mobile: Right column row 3 beside Full-Stack | Desktop: Right col row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 70, rotateX: 20, rotateY: -6, z: -100 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.4, type: "spring", bounce: 0.22 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              z: 25,
              borderColor: 'rgba(239, 68, 68, 0.45)',
              transition: { type: "spring", stiffness: 350, damping: 22 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="col-span-1 lg:col-span-4 bg-[#121214] border border-white/[0.08] hover:border-red-500/40 rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-6 lg:p-8 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] min-h-[160px] sm:min-h-[220px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-red-500/[0.03] group-hover:bg-white/[0.08] rounded-full blur-3xl pointer-events-none transition-colors duration-300" />

            <div className="mb-2 sm:mb-5" style={{ transform: "translateZ(30px)" }}>
              <UiUxIcon />
            </div>

            <div style={{ transform: "translateZ(20px)" }}>
              <h4 className="font-display font-bold text-sm sm:text-lg lg:text-xl text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors leading-tight">
                UI/UX
              </h4>
              <p className="text-zinc-400 text-[11px] sm:text-xs lg:text-sm leading-snug sm:leading-relaxed">
                Creating user-centric and responsive designs.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;

