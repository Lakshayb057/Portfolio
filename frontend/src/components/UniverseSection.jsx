import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Zap, ExternalLink, CircleDollarSign, BarChart3, Database, X, Maximize2 } from 'lucide-react';

const techTags = [
  'PERN Stack',
  'React.js (Vite)',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'AWS EC2',
  'AWS RDS',
  'AWS VPC',
  'AWS S3',
  'Socket.io',
  'Razorpay',
  'Groq AI',
  'Tailwind CSS',
  'React Native',
];

// Production Architecture & Core Systems Solved data from engineering deep-dive
const deepDivePillars = [
  {
    icon: <Zap className="text-amber-400" size={22} />,
    accentBorder: "border-amber-500/20",
    title: "Real-Time Event Orchestration",
    description: "Engineered WebSocket channels with Socket.io syncing customer mobile clients, kitchen POS terminals, and instant Telegram alert bots in real time.",
  },
  {
    icon: <CircleDollarSign className="text-emerald-400" size={22} />,
    accentBorder: "border-emerald-500/20",
    title: "Idempotent Financial Pipelines",
    description: "Integrated Razorpay payment gateways with webhook idempotency keys to eliminate double-charges, handling automated vendor splits and refund workflows.",
  },
  {
    icon: <BarChart3 className="text-amber-400" size={22} />,
    accentBorder: "border-amber-500/20",
    title: "Multi-Role Dashboards & Telemetry",
    description: "Role-based access separating Super-Admins, Vendor Kitchens, and Students with interactive Recharts analytics and Groq AI order insights.",
  },
  {
    icon: <Database className="text-emerald-400" size={22} />,
    accentBorder: "border-emerald-500/20",
    title: "Relational Data Integrity (PERN)",
    description: "Structured PostgreSQL relational schema with connection pooling, index optimization, and strict ACID transaction guarantees under load.",
  },
];

const awsTopology = [
  {
    tag: "AWS EC2",
    tagColor: "text-amber-400",
    title: "Full-Stack Compute",
    desc: "Hosts the React SPA frontend and Node/Express backend with reverse proxy routing.",
  },
  {
    tag: "AWS RDS (PostgreSQL)",
    tagColor: "text-sky-400",
    title: "Managed Relational DB",
    desc: "ACID-compliant relational schema, indexed order pipelines, and transaction integrity.",
  },
  {
    tag: "AWS VPC",
    tagColor: "text-emerald-400",
    title: "Isolated Security Layer",
    desc: "Private cloud network boundary shielding internal databases from public exposure.",
  },
  {
    tag: "AWS S3",
    tagColor: "text-amber-400",
    title: "Object Storage",
    desc: "Scalable, secure storage for vendor catalog images, assets, and receipts.",
  },
];

const UniverseVideoModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] w-screen h-screen bg-[#07070a]/98 backdrop-blur-3xl overflow-y-auto flex flex-col"
    >
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-[1000] w-full bg-[#09090e]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium flex items-center gap-1.5 ml-2">
            <Zap size={13} className="text-orange-400" /> food.universeorder.co.in
          </span>
          <span className="hidden sm:inline-block text-zinc-600 font-mono">|</span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            UniVerse • Flagship Campus Dining OS Full Screen Demo
          </span>
        </div>

        {/* Dedicated Cross Button */}
        <button
          id="universe-modal-close-btn"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="Close video (Return to portfolio)"
          aria-label="Close"
        >
          <span>Close</span>
          <X size={16} className="text-white" />
        </button>
      </header>

      {/* Modal Video Content Area */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-8">
        {/* Full Theatre Video Screen */}
        <div className="relative w-full aspect-video max-h-[75vh] rounded-2xl sm:rounded-3xl bg-black border border-white/15 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex items-center justify-center">
          <video
            src="/universe_video.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* Info & Bottom Return Button */}
        <div className="space-y-6 bg-[#0c0d12] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-1">
                Flagship Startup • 0 to 1 Engineering
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                UniVerse — Campus Dining & Multi-Vendor OS
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                Eliminating campus dining wait times with real-time QR ordering, automated kitchen dispatching, and vendor split settlements.
              </p>
            </div>

            <a
              href="https://food.universeorder.co.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-mono text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Visit Live Platform</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Return CTA */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/15 hover:border-orange-500/50 text-white font-mono text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-md"
            >
              <span>Back to Portfolio</span>
              <X size={14} className="text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

const UniverseSection = () => {
  const [activeMedia, setActiveMedia] = useState('graphic'); // 'graphic' | 'video'
  const [isFullPageVideoOpen, setIsFullPageVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsFullPageVideoOpen(true);
  };

  return (
    <section id="universe" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Top Banner Row: Flagship Pill + Live URL */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>FLAGSHIP STARTUP • SHIPPED 0 TO 1</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live in Production: </span>
          <a
            href="https://food.universeorder.co.in"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-orange-400 underline underline-offset-4 font-semibold transition-colors"
          >
            food.universeorder.co.in
          </a>
        </div>
      </div>

      {/* Main Showcase Bento Grid: Left Details + Right Interactive Media Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        
        {/* Left Column (lg:col-span-6): UniVerse Title, Subtitle, Role & Bio, Tech Stack, CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Main Title: UniVerse. with solid modern sans font & dot */}
          <h2 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white flex items-baseline leading-none mb-3">
            <span>UniVerse</span>
            <span className="text-orange-500 font-sans ml-0.5 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]">.</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
            Next-Gen Campus Dining & Multi-Vendor OS
          </h3>

          {/* Position Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
            Architected and built as{' '}
            <strong className="text-white font-bold bg-white/[0.08] px-2 py-0.5 rounded-md border border-white/10">
              Co-Founder (Engineering, Growth & Finance)
            </strong>
            . UniVerse completely eliminates campus dining lines with instantaneous QR ordering, live kitchen display dispatching, and automated vendor settlements.
          </p>

          {/* Operational & Engineering Key Responsibilities */}
          <div className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              <span>Developing full-stack applications & real-time delivery systems using modern web technologies and WebSocket integration.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              <span>Spearheading marketing initiatives, promotional frameworks, user acquisition campaigns, and 50+ vendor onboarding.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              <span>Managing financial operations, pricing structures, enterprise budgeting, and automated vendor settlements.</span>
            </div>
          </div>

          {/* Tech Stack Pills from Screenshot */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-orange-500/40 hover:text-white transition-all shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://food.universeorder.co.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              <span>Visit Live Platform</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              id="universe-play-video-btn"
              onClick={handlePlayVideo}
              className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/50 text-zinc-300 hover:text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Play size={14} className="text-orange-500 fill-orange-500 group-hover:scale-110 transition-transform" />
              <span>Play Video Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column (lg:col-span-6): Interactive Media Card with Graphic / Video Demo Switch */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <div className="relative rounded-3xl border border-zinc-800/90 bg-[#0d0d10] p-2.5 sm:p-3 shadow-2xl overflow-hidden group">
            
            {/* Top-Right Graphic / Video Demo Switch Button Pill */}
            <div className="absolute top-4 right-4 z-20 flex items-center bg-zinc-950/90 border border-white/10 rounded-full p-1 backdrop-blur-md shadow-xl">
              <button
                id="universe-graphic-tab-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMedia('graphic');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeMedia === 'graphic'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Graphic
              </button>
              <button
                id="universe-video-tab-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMedia('video');
                  setIsFullPageVideoOpen(true);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeMedia === 'video'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Play size={11} className={activeMedia === 'video' ? 'fill-white' : ''} />
                <span>Video Demo</span>
              </button>
            </div>

            {/* Display Media: Graphic Banner or Video Player (Click to open full page) */}
            <div 
              id="universe-media-container"
              onClick={() => setIsFullPageVideoOpen(true)}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center cursor-pointer group/media"
            >
              {activeMedia === 'graphic' ? (
                <img
                  src="/universe_banner.png"
                  alt="UniVerse Campus Dining Platform"
                  className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              ) : (
                <video
                  ref={videoRef}
                  src="/universe_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl bg-black"
                />
              )}

              {/* Full Page Video Overlay Badge */}
              <button
                id="universe-open-fullpage-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullPageVideoOpen(true);
                }}
                className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-orange-500 border border-white/20 text-white text-xs font-mono font-medium backdrop-blur-md shadow-xl transition-all duration-200 group-hover/media:scale-105 cursor-pointer"
              >
                <Maximize2 size={12} />
                <span>Open Full Page</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* =========================================================================
          ENGINEERING DEEP-DIVE: PRODUCTION ARCHITECTURE & CORE SYSTEMS SOLVED
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Ambient Backing Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="mb-8">
          <span className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase block mb-1.5">
            ENGINEERING DEEP-DIVE
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.2rem] text-white tracking-tight leading-tight">
            Production Architecture & Core Systems Solved
          </h3>
        </div>

        {/* 4 Deep-Dive Pillar Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {deepDivePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3, borderColor: 'rgba(249,115,22,0.35)', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }}
              className="bg-[#121217] border border-white/[0.07] rounded-2xl p-6 sm:p-7 transition-all duration-300 flex items-start gap-4 group"
            >
              {/* Rounded Dark Icon Box */}
              <div className={`w-12 h-12 rounded-xl bg-[#181820] border ${pillar.accentBorder} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                {pillar.icon}
              </div>

              {/* Text Content */}
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nested AWS Cloud & Security Topology Container */}
        <div className="bg-[#08080b] border border-white/[0.06] rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
              PRODUCTION AWS CLOUD & SECURITY TOPOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {awsTopology.map((item) => (
              <div
                key={item.title}
                className="bg-[#101015] border border-white/[0.05] hover:border-white/10 rounded-xl p-4 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`text-[10.5px] font-mono font-bold tracking-wider uppercase block mb-1.5 ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <h5 className="font-display font-bold text-white text-sm mb-1.5 leading-snug">
                    {item.title}
                  </h5>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Row: Live Deployment Status + Orange Launch Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span>
              Live Deployment Active at{' '}
              <strong className="text-white font-mono font-semibold">food.universeorder.co.in</strong>
            </span>
          </div>

          <a
            href="https://food.universeorder.co.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <span>LAUNCH LIVE APP →</span>
          </a>
        </div>

      </motion.div>

      {/* UniVerse Full-Screen Video Modal */}
      <AnimatePresence>
        {isFullPageVideoOpen && (
          <UniverseVideoModal onClose={() => setIsFullPageVideoOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default UniverseSection;
