import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  X, 
  Play, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Bot, 
  Lock, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const clientProjects = [
  {
    id: "ekhum",
    title: "Ekhum",
    subtitle: "Fundraising Infrastructure for Non-Profits & NGOs • Chaos Designs Pvt. Ltd. Internship Project",
    company: "Chaos Designs Pvt. Ltd.",
    role: "Chaos Designs Pvt. Ltd. | Internship Project",
    date: "Internship Project",
    colSpan: "lg:col-span-12",
    domain: "ekhum.org",
    videoSrc: "/EkhumProjectVideo.mp4",
    description: "Architected a full-stack enterprise fundraising platform for non-profits and NGOs during my internship at Chaos Designs Pvt. Ltd., integrating 5 payment gateways, automated Indian statutory 80G/10BD tax compliance, multi-tenant data isolation, and event-driven communication microservices.",
    bulletPoints: [
      "Architected full-stack enterprise fundraising platform (React 18, Vite, TypeScript, Express, PostgreSQL, Prisma) with multi-tenant RBAC, managing end-to-end donor CRM lifecycles, automated campaigns, and real-time WebSocket analytical reporting.",
      "Engineered high-throughput financial core integrating 5 payment gateways (Razorpay, Cashfree, PayU, CCAvenue, Worldline) with cryptographic webhook verification, recurring token mandates, and distributed worker pipelines handling automated contact deduplication.",
      "Automated Indian statutory compliance (80G certification & Form 10BD filings) using atomic transaction counters and PDFKit, accompanied by AES-256 encrypted credential storage and an event-driven Go WhatsApp communication microservice."
    ],
    problemSolutions: [
      {
        issue: "Fragmented Multi-Gateway Payments & Transaction Verification",
        problem: "Nonprofits rely on multiple payment providers (Razorpay, Cashfree, PayU, CCAvenue, Worldline) for UPI, cards, and net banking. Without unified orchestration, failed webhooks or network drops caused dropped transactions, fake donation confirmations, or uncaptured recurring mandates.",
        solution: "Implemented a unified Payment Router & Verification Engine (paymentRouter.ts, paymentVerification.ts) validating server-side cryptographic signatures (HMAC SHA-256) and direct server-to-server gateway status polling with background worker reconciliation."
      },
      {
        issue: "Regulatory Tax Compliance Overhead (Section 80G & Form 10BD)",
        problem: "In India, NGOs must issue valid 80G tax receipts and submit annual Form 10BD filings. Manual handling causes serial number collisions, PAN mismatches, and compliance violations (e.g., cash donations >₹2,000 legally cannot receive 80G receipts).",
        solution: "Built an automated compliance module with atomic, per-NGO, per-financial-year sequential numbering. Enforced auto-reversion of cash donations >₹2,000 to non-80G acknowledgements, held incomplete records in pending state, and generated tamper-proof tax PDFs on the fly using PDFKit."
      },
      {
        issue: "Data Isolation & Multi-Tenant Security",
        problem: "Multiple charities share centralized infrastructure. Insecure direct object references (IDOR) or cross-tenant leaks could expose donor identities, PAN numbers, high-value financial records, and custom branding.",
        solution: "Enforced strict database tenant scoping (org_id context filtering on every SQL query and API route), layered a granular server-side RBAC matrix (Superadmin, Org Admin, Campaign Manager, Viewer), and encrypted sensitive secrets at rest using AES-256."
      },
      {
        issue: "Donor Churn, Duplicate Records & Communication Silos",
        problem: "Organizations collect donor inputs from various sources (embedded widgets, hosted campaign checkouts, offline drives), leading to duplicated donor profiles and fractured outreach.",
        solution: "Created a dedicated decoupled asynchronous background worker (worker.ts) to execute deduplication algorithms merging profiles by PAN/phone/email, integrated with an event-driven Go WhatsApp Gateway microservice for instant receipt delivery."
      }
    ],
    metrics: [
      { label: "Payment Gateways", value: "5 Gateways Unified" },
      { label: "Statutory Tax Compliance", value: "Automated 80G & Form 10BD" },
      { label: "Security & Encryption", value: "AES-256 & Multi-Tenant RBAC" }
    ],
    tech: ["React 18", "Vite", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Razorpay", "Cashfree", "PayU", "CCAvenue", "Worldline", "PDFKit", "AES-256", "Go (Golang)", "WebSockets"],
    live: "https://ekhum.org",
    github: "https://github.com/lakshayb057/Ekhum"
  },
  {
    id: "finmantra",
    title: "FinMantra",
    subtitle: "A financial lead management platform with Meta CAPI server-side conversion attribution and dual-channel WhatsApp OTP.",
    date: "Jul' 26",
    colSpan: "lg:col-span-7",
    domain: "finmantra.in/admin",
    videoSrc: "/Finmantraprojectvideo.mp4",
    description: "Built a full-stack financial lead management platform using React.js, Node.js, Express.js, and PostgreSQL, enabling administrators to manage 10+ configurable settings, API credentials, and templates through a secure dashboard without redeployment.",
    extendedDetails: "Integrated Meta Conversions API (CAPI) with Google Tag Manager (GTM) using server-side event tracking, browser-side dataLayer, SHA-256 hashing, and lead deduplication, achieving 100% qualified conversion attribution. Developed a dual-channel WhatsApp OTP system combining Meta WhatsApp Cloud API with a Baileys fallback gateway for fail-safe authentication.",
    metrics: [
      { label: "Attribution Accuracy", value: "100% Qualified" },
      { label: "Hot Configurations", value: "10+ Settings" },
      { label: "OTP Delivery", value: "Dual-Channel (Meta + Baileys)" }
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Meta CAPI", "Google Tag Manager", "WhatsApp Cloud API", "Baileys", "Next.js"],
    live: "https://finmantra.in",
    github: "https://github.com/lakshayb057/FinMantra"
  },
  {
    id: "chatleads-ai",
    title: "ChatLeads AI",
    subtitle: "Real-time WhatsApp fleet CRM with Gemini 2.5 Flash OCR and Groq Llama-4 automated lead extraction.",
    date: "Jun' 26",
    colSpan: "lg:col-span-5",
    domain: "chatleads.ai/fleet",
    videoSrc: "/ChatleadsAIProjectvideo.mp4",
    description: "Architected a real-time WhatsApp CRM supporting 50+ concurrent sessions using Node.js, FastAPI, Baileys SDK, and WebSockets, enabling instant lead synchronization, live agent monitoring, and secure JWT authentication.",
    extendedDetails: "Automated document processing by integrating Gemini 2.5 Flash for OCR and Llama-4 (Groq API) for intelligent data extraction, reducing manual lead entry by 90% while extracting structured records from PDFs and images. Engineered a scalable multi-tenant PostgreSQL backend with Pandas/OpenPyXL reporting for 10,000+ leads.",
    metrics: [
      { label: "Concurrent Sessions", value: "50+ Active Fleet" },
      { label: "Manual Effort Cut", value: "90% Reduction" },
      { label: "Leads Processed", value: "10,000+ Records" }
    ],
    tech: ["Next.js", "FastAPI", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Gemini 2.5 Flash", "Groq API (Llama-4)", "Pandas"],
    live: "https://chatleads-ai.vercel.app",
    github: "https://github.com/lakshayb057/ChatLeads-AI"
  },
  {
    id: "abv-skillport",
    title: "ABV - SkillPort",
    subtitle: "Vocational institute management platform automating student workflows with JWT-secured digital certificate verification.",
    date: "Apr' 26",
    colSpan: "lg:col-span-5",
    domain: "abvskillcentre.in",
    videoSrc: "/AtalProjectVedio.mp4",
    description: "Developed a MERN-based institute management platform using React.js, Node.js, Express.js, and MongoDB, automating admissions, student records, digital document workflows, and priority-based notices for 500+ students and administrative staff.",
    extendedDetails: "Implemented a JWT-secured certificate verification portal with unique digital IDs and PDF-Parse document automation, reducing manual verification effort by 40%. Engineered RBAC dashboards for admins, staff, and students, generating ₹1.1 lakh in commercial project revenue.",
    metrics: [
      { label: "Project Revenue", value: "₹1.1 Lakh Generated" },
      { label: "Active Students", value: "500+ Enrolled" },
      { label: "Verification Effort", value: "40% Time Saved" }
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth", "PDF-Parse", "Axios", "Git"],
    live: "https://abvskillcentre.in/",
    github: "https://github.com/lakshayb057/ABV-SkillPort"
  },
  {
    id: "nexus-crm",
    title: "Nexus CRM",
    subtitle: "High-performance multi-tenant CRM with Redis event bus, chunked bulk imports, and automated appointment reminders.",
    date: "May' 26",
    colSpan: "lg:col-span-7",
    domain: "nexuscrm-production.up.railway.app",
    videoSrc: "/NexusCRMprojectVideo.mp4",
    description: "Engineered a multi-tenant CRM supporting 4 user roles (SuperAdmin, Admin, TeamLead, Agent) using React.js, Node.js, Express.js, Prisma ORM, and PostgreSQL, enabling dynamic lead management and flexible CSV/Excel bulk imports.",
    extendedDetails: "Implemented real-time lead assignment and callback notifications with Socket.io, leveraged Redis for low-latency event handling, and integrated Brevo SMTP to automate appointment reminders for 1,000+ leads/day. Optimized database indexing and chunk-based imports (1,000/batch), slashing processing time by 70% for 100,000+ records.",
    metrics: [
      { label: "Lead Database", value: "100,000+ Records" },
      { label: "Batch Import Speed", value: "70% Faster (1k/batch)" },
      { label: "Daily Appointments", value: "1,000+ Emails/Day" }
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL (JSONB)", "Prisma ORM", "Redis", "Socket.io", "Brevo SMTP"],
    live: "https://nexuscrm-production.up.railway.app",
    github: "https://github.com/lakshayb057/NexusCRM"
  }
];

// Individual Bento Card (Matches User's Reference Screenshot)
const ScreenshotBentoCard = ({ project, idx, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      onClick={() => onOpenModal(project)}
      className={`group relative ${project.colSpan} rounded-[28px] sm:rounded-[34px] border border-white/[0.1] hover:border-red-500/50 bg-[#0e0e12] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)] transition-all duration-500 cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end`}
    >
      {/* Background Media: Edge-to-Edge Autoplaying Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#07070a]">
        {project.videoSrc && (
          <video
            src={project.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}

        {/* Cinematic Vignette Overlay at Bottom to give flawless text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 group-hover:via-black/45 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Top-Right Badge: Full Screen Video */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 group-hover:bg-red-600/90 border border-white/20 group-hover:border-red-500 text-white text-xs font-mono backdrop-blur-md shadow-xl transition-all duration-300">
        <Play size={11} className="text-red-400 group-hover:text-white fill-current" />
        <span>Open Full Screen</span>
      </div>

      {/* Bottom Content Overlaid (Matches Screenshot's Bold Title + 2-line Subtitle) */}
      <div className="relative z-20 p-6 sm:p-9 pt-8 pointer-events-none">
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight group-hover:text-red-400 transition-colors drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
          {project.title}
        </h3>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-2.5 font-normal max-w-2xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

// Entire Screen Pop-Up Window for Project Video & Complete Info
const ProjectDetailsModal = ({ project, onClose }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';

    // Auto-focus container so arrow keys and page down work immediately
    if (scrollContainerRef.current) {
      scrollContainerRef.current.focus();
    }

    const container = scrollContainerRef.current;
    const handleNativeWheel = (e) => {
      // Stop event from bubbling to window so external scroll interceptors (Lenis) don't block native modal scroll
      e.stopPropagation();
    };

    if (container) {
      container.addEventListener('wheel', handleNativeWheel, { passive: true });
      container.addEventListener('touchmove', handleNativeWheel, { passive: true });
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      if (container) {
        container.removeEventListener('wheel', handleNativeWheel);
        container.removeEventListener('touchmove', handleNativeWheel);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <motion.div
      ref={scrollContainerRef}
      tabIndex={-1}
      data-lenis-prevent="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] w-full h-full bg-[#07070a]/98 backdrop-blur-3xl overflow-y-auto overscroll-contain flex flex-col focus:outline-none"
    >
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-[1000] w-full bg-[#09090e]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium flex items-center gap-1.5">
            <Lock size={12} className="text-emerald-400" /> {project.domain}
          </span>
          <span className="hidden sm:inline-block text-zinc-600 font-mono">|</span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
            {project.title} Full Screen Showcase
          </span>
        </div>

        {/* Dedicated Cross Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="Close video (Return to portfolio)"
          aria-label="Close"
        >
          <span>Close</span>
          <X size={16} className="text-white" />
        </button>
      </header>

      {/* Full-Screen Content Area */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-8">
        
        {/* Full Theatre Video Screen */}
        <div className="relative w-full aspect-video max-h-[75vh] rounded-2xl sm:rounded-3xl bg-black border border-white/15 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex items-center justify-center">
          {project.videoSrc && (
            <video
              src={project.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          )}
        </div>

        {/* Complete Project Info Section */}
        <div className="space-y-8 bg-[#0c0d12] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400">
                  {project.date}
                </span>
                {project.company && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-medium">
                    {project.company} Internship
                  </span>
                )}
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-1">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/15 hover:border-red-500/50 text-white font-mono text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-md"
                >
                  <Github size={15} className="text-red-400" />
                  <span>Source Code</span>
                </a>
              )}
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-mono text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all shadow-lg shadow-red-500/30 hover:scale-105 active:scale-95"
              >
                <span>Open Live Project</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Technical Accomplishments from CV */}
          <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Engineering Overview</h4>
            <p>{project.description}</p>
            {project.extendedDetails && (
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {project.extendedDetails}
              </p>
            )}
          </div>

          {/* Exactly 3-Line Bullet Points for CV (When Available) */}
          {project.bulletPoints && (
            <div className="space-y-3 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={13} className="text-red-400" /> Key Architectural Contributions
              </h4>
              <ul className="space-y-2.5">
                {project.bulletPoints.map((pt, i) => (
                  <li key={i} className="text-zinc-300 text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem & Solution Engineering Deep-Dive */}
          {project.problemSolutions && (
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Layers size={13} className="text-red-400" /> Comprehensive Problem–Solution Breakdown
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problemSolutions.map((item, i) => (
                  <div key={i} className="bg-black/50 border border-white/10 rounded-2xl p-5 space-y-3">
                    <h5 className="font-sans font-bold text-sm sm:text-base text-white flex items-center gap-2">
                      <span className="text-xs font-mono text-red-400">Issue {i + 1}:</span> {item.issue}
                    </h5>
                    <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      <span className="text-zinc-300 font-semibold font-mono text-[10.5px] uppercase tracking-wider block mb-1">The Problem:</span>
                      {item.problem}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
                      <span className="text-emerald-400 font-semibold font-mono text-[10.5px] uppercase tracking-wider block mb-1">How It Is Solved:</span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-black/50 border border-white/10 rounded-2xl p-5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-lg sm:text-xl font-sans font-bold text-white mt-1.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">Technologies & Architecture</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Return CTA */}
          <div className="pt-6 border-t border-white/10 flex justify-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/15 hover:border-red-500/50 text-white font-mono text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all shadow-md"
            >
              <span>Back to Portfolio</span>
              <X size={14} className="text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
};

const Projects = () => {
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // Mobile horizontal scroll-linked progression (matching Certifications)
  const mobileContainerRef = useRef(null);
  const { scrollYProgress: mobileScrollY } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  const smoothMobileScrollY = useSpring(mobileScrollY, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // 5 client projects: index 0 to 4
  // Each project locks into center (0%, -100%, -200%, -300%, -400%)
  const mobileX = useTransform(
    smoothMobileScrollY,
    [0, 0.08, 0.22, 0.32, 0.47, 0.57, 0.72, 0.82, 0.96],
    ['0%', '0%', '-100%', '-100%', '-200%', '-200%', '-300%', '-300%', '-400%']
  );

  useMotionValueEvent(smoothMobileScrollY, 'change', (latest) => {
    if (latest < 0.16) setActiveMobileIdx(0);
    else if (latest < 0.40) setActiveMobileIdx(1);
    else if (latest < 0.65) setActiveMobileIdx(2);
    else if (latest < 0.85) setActiveMobileIdx(3);
    else setActiveMobileIdx(4);
  });

  const jumpToMobileProject = (index) => {
    if (!mobileContainerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(clientProjects.length - 1, index));
    const rect = mobileContainerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = mobileContainerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = [0.04, 0.27, 0.52, 0.77, 0.96][clampedIndex];
    const targetScrollY = containerTop + targetProgress * scrollableDistance;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScrollY, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  // Support touch swipe gestures on mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0 && activeMobileIdx < clientProjects.length - 1) {
        jumpToMobileProject(activeMobileIdx + 1);
      } else if (diffX < 0 && activeMobileIdx > 0) {
        jumpToMobileProject(activeMobileIdx - 1);
      }
    }
  };

  // Prevent background scrolling and pause Lenis when pop-up window is open
  useEffect(() => {
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    };
  }, [activeProjectModal]);

  return (
    <section id="client-projects" className="relative w-full scroll-mt-20">
      {/* =========================================================================
          MOBILE VIEW (< lg: 1024px):
          - Vertical scroll drives horizontal transition through all 5 projects
          - Releases naturally into the next section (Education) after the 5th project
          - Touch swipe & indicator pills also trigger project transitions
          ========================================================================= */}
      <div
        ref={mobileContainerRef}
        className="lg:hidden relative h-[190vh] w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="sticky top-16 xs:top-20 sm:top-24 h-auto w-full flex flex-col justify-start pt-2.5 xs:pt-4 sm:pt-6 pb-2 items-center overflow-hidden px-2 xs:px-4">
          {/* Section Header */}
          <div className="w-full max-w-[430px] xs:max-w-[470px] sm:max-w-[520px] flex items-center justify-between gap-2 xs:gap-3 mb-3 xs:mb-4 px-1">
            <div className="flex items-center gap-2 xs:gap-3 min-w-0">
              <h2 className="hero-name-font tracking-wide text-white uppercase text-[19px] xs:text-[22px] sm:text-3xl leading-none flex items-baseline whitespace-nowrap">
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">CLIENT PROJECTS</span>
                <span className="text-red-500 font-sans ml-1 text-xl xs:text-2xl sm:text-3xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
              </h2>
              <div className="hidden sm:block h-px bg-zinc-800/80 flex-grow max-w-[80px]" />
            </div>
            <span className="text-[11px] font-mono text-zinc-400 bg-[#141418] border border-white/10 px-2.5 py-0.5 rounded-full shrink-0">
              0{activeMobileIdx + 1} / 0{clientProjects.length}
            </span>
          </div>

          {/* Horizontal Moving Track */}
          <div className="w-full overflow-hidden flex items-center justify-center py-1">
            <motion.div
              style={{ x: mobileX }}
              className="flex w-full items-center"
            >
              {clientProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 flex flex-col items-center justify-center px-2 xs:px-3"
                >
                  <div className="w-full max-w-[430px] xs:max-w-[470px] sm:max-w-[520px] flex flex-col">
                    {/* Top strip: Domain */}
                    <div className="flex items-center justify-between mb-2 px-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                        <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wide">
                          {project.domain}
                        </span>
                      </div>
                    </div>

                    {/* Video Card Container */}
                    <div
                      onClick={() => setActiveProjectModal(project)}
                      className="group relative w-full h-[270px] xs:h-[310px] sm:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.92)] border border-white/[0.12] active:scale-[0.99] transition-all bg-[#0e0e12] cursor-pointer flex flex-col justify-end"
                    >
                      {/* Background Video */}
                      <div className="absolute inset-0 z-0 overflow-hidden bg-[#07070a]">
                        {project.videoSrc && (
                          <video
                            src={project.videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 pointer-events-none" />
                      </div>

                      {/* Overlay Details */}
                      <div className="relative z-20 p-4 xs:p-5 pt-8 pointer-events-none">
                        <h3 className="font-display font-extrabold text-2xl xs:text-3xl text-white tracking-tight leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                          {project.title}
                        </h3>
                        <p className="text-zinc-300 text-xs xs:text-sm leading-relaxed mt-1.5 font-normal line-clamp-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Tech Stack Tags */}
                    <div className="mt-2.5 px-1 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-white/10 text-[10px] font-mono text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900/50 text-[10px] font-mono text-zinc-500">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Navigation Controls */}
          <div className="flex items-center justify-between w-full max-w-[430px] xs:max-w-[470px] sm:max-w-[520px] mt-3 px-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <span className="text-zinc-400">Scroll down or swipe</span>
            </div>

            {/* Indicator Pills */}
            <div className="flex items-center gap-1.5">
              {clientProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToMobileProject(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeMobileIdx === idx
                      ? 'w-7 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]'
                      : 'w-2 bg-zinc-800 hover:bg-zinc-600'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => jumpToMobileProject(activeMobileIdx - 1)}
                disabled={activeMobileIdx === 0}
                className="p-1 rounded-full bg-zinc-900 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-red-500/50 transition-colors"
                aria-label="Previous Project"
              >
                <ChevronLeft size={13} />
              </button>
              <button
                onClick={() => jumpToMobileProject(activeMobileIdx + 1)}
                disabled={activeMobileIdx === clientProjects.length - 1}
                className="p-1 rounded-full bg-zinc-900 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-red-500/50 transition-colors"
                aria-label="Next Project"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (lg: 1024px+):
          - Original Asymmetric Bento Grid (Flagship Hero Card + 2x2 Asymmetric Grid)
          ========================================================================= */}
      <div 
        className="hidden lg:block pt-6 sm:pt-10 md:pt-20 pb-8 sm:pb-12 md:pb-24 px-4 sm:px-6 md:px-12 relative max-w-7xl mx-auto" 
        style={{ perspective: 1200 }}
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-8 md:mb-14">
          <div className="flex items-center gap-4">
            <h2 className="hero-name-font tracking-wide text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-none flex items-baseline">
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">CLIENT PROJECTS</span>
              <span className="text-red-500 font-sans ml-1 text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
            </h2>
            <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Commercial solutions, enterprise infrastructure, and high-throughput fintech platforms. Click any project to open the full-screen showcase.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-7">
          {clientProjects.map((project, idx) => (
            <ScreenshotBentoCard 
              key={project.id} 
              project={project} 
              idx={idx} 
              onOpenModal={setActiveProjectModal}
            />
          ))}
        </div>
      </div>

      {/* Entire Screen Pop-Up Window */}
      <AnimatePresence>
        {activeProjectModal && (
          <ProjectDetailsModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
