import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Radio, ShieldCheck, Activity, Database, Server, Smartphone, Zap } from 'lucide-react';

const universePillars = [
  {
    icon: <Radio className="text-red-500" size={22} />,
    title: "Real-Time Event Orchestration",
    description: "Engineered WebSocket channels with Socket.io syncing customer mobile clients, kitchen POS terminals, and automated Telegram alert bots in real time.",
  },
  {
    icon: <ShieldCheck className="text-rose-400" size={22} />,
    title: "Idempotent Financial Pipelines",
    description: "Integrated Razorpay payment gateways with HMAC SHA-256 webhook verification to eliminate double-charges, handling automated T+1 vendor splits and refund workflows.",
  },
  {
    icon: <Activity className="text-red-400" size={22} />,
    title: "Multi-Role Dashboards & Telemetry",
    description: "Role-based access separating Super-Admins, Vendor Kitchens, and Students with live queue telemetry, automated order status dispatching, and sales analytics.",
  },
  {
    icon: <Zap className="text-amber-400" size={22} />,
    title: "Cloudinary CDN & QR Verification",
    description: "Optimized platform media delivery with Cloudinary CDN reducing load times by 40%, paired with cryptographic QR order verification at vendor pickup counters.",
  },
];

const cloudTopology = [
  {
    label: "COMPUTE & SPA",
    title: "React.js on Vercel",
    desc: "Blazing client-side SPA with Tailwind CSS, dynamic menu routing, and optimistic UI updates.",
  },
  {
    label: "BACKEND API",
    title: "Node & Express on Render",
    desc: "Robust REST microservices with JWT session security, rate limiting, and Socket.io event gateway.",
  },
  {
    label: "DATA STORE",
    title: "MongoDB Atlas",
    desc: "High-throughput document database with indexed schemas for rapid order and menu lookups.",
  },
  {
    label: "ALERTS & MEDIA",
    title: "Telegram & Cloudinary",
    desc: "Automated vendor instant push notifications via Telegram Bot API and optimized asset CDN.",
  },
];

const UniverseSection = () => {
  return (
    <section id="universe" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Top Banner Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-semibold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>FLAGSHIP STARTUP • CO-FOUNDER • SHIPPED 0 TO 1</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Live in Production: </span>
          <a
            href="https://food.universeorder.co.in"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red-400 underline underline-offset-4"
          >
            food.universeorder.co.in
          </a>
        </div>
      </div>

      {/* Main Title & Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-4 flex items-center">
          <span>UniVerse</span>
          <span className="text-red-500">.</span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6">
          Next-Gen Campus Dining Platform & Multi-Vendor OS
        </h3>
        <p className="text-zinc-400 text-base sm:text-lg max-w-4xl leading-relaxed">
          Architected and deployed as <strong className="text-white font-semibold">Co-Founder & Full-Stack Engineer</strong>. UniVerse serves <strong className="text-red-400 font-semibold">1,000+ active students</strong> and empowers <strong className="text-white font-semibold">50+ campus food vendors</strong> by eliminating long dining queues through instant QR ordering, live kitchen display dispatching, and automated vendor settlements.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-6">
          {[
            'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io',
            'Razorpay HMAC', 'Cloudinary CDN', 'Telegram Bot API', 'Firebase',
            'Vercel', 'Render', 'Tailwind CSS'
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-red-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 4 Architectural Pillar Cards with 3D hover response */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {universePillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
            className="bg-zinc-900/35 border border-zinc-800/80 rounded-2xl p-7 backdrop-blur-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                {pillar.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                {pillar.title}
              </h4>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Production Cloud & Security Topology Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900/30 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl mb-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-[0.2em]">
            Production Cloud Architecture & Pipeline
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cloudTopology.map((item) => (
            <div
              key={item.label}
              className="bg-zinc-950/70 border border-zinc-800/80 hover:border-red-500/40 rounded-2xl p-5 flex flex-col justify-between transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono text-red-400 font-semibold tracking-wider block mb-1">
                  {item.label}
                </span>
                <h5 className="font-display font-bold text-white text-base mb-2">
                  {item.title}
                </h5>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action CTA Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm text-zinc-300 font-medium">
            Active Multi-Vendor Campus Deployment Serving Real Orders
          </span>
        </div>
        <a
          href="https://food.universeorder.co.in"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-500/25"
        >
          <span>Launch Live App</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default UniverseSection;
