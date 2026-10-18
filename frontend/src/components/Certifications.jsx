import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Code2, 
  Coffee, 
  Layout, 
  ExternalLink, 
  Maximize2,
  X,
  ZoomIn
} from 'lucide-react';

const certificatesData = [
  {
    id: 1,
    tabLabel: "Generative AI & LLMs",
    issuer: "Udemy",
    date: "Aug' 25",
    fullDate: "August 19, 2025",
    headline: "Master Generative AI & Generative AI Tools",
    credentialId: "UC-dd37d58e-e88a-45a7-a41a-131a207704c1",
    imageSrc: "/certificates/master_genai.png",
    pdfSrc: "/certificates/Master Generative Al lakshay.pdf",
    driveLink: "https://drive.google.com/file/d/13ICN96ZAK89KfZ0hqRjB5JDUD7pyMYii/view",
    icon: Sparkles
  },
  {
    id: 2,
    tabLabel: "Computational Theory",
    issuer: "Infosys Springboard",
    date: "Aug' 25",
    fullDate: "August 11, 2025",
    headline: "Language Principle & Finite Automata Theory",
    credentialId: "INFOSYS-CT-2025",
    imageSrc: "/certificates/infosys_theory.png",
    pdfSrc: "/certificates/InfosysLakshay.pdf",
    driveLink: "https://drive.google.com/file/d/1GmTwsMLuO1qyONl0Cpde-RSfh_eqVY52/view",
    icon: Cpu
  },
  {
    id: 3,
    tabLabel: "C & C++ Programming",
    issuer: "Aptech Institute",
    date: "Jun' 24",
    fullDate: "June 15, 2024",
    headline: "Aptech Certified Professional in C/C++ Programming",
    credentialId: "2000005469",
    imageSrc: "/certificates/aptech_cpp.png",
    pdfSrc: "/certificates/Aptech-certificate.pdf",
    driveLink: "https://drive.google.com/file/d/15wR62pFMsR2PemgpHpYtKPoQG7daXL9B/view?usp=sharing",
    icon: Code2
  },
  {
    id: 4,
    tabLabel: "Java Programming",
    issuer: "IAMNEO / LPU",
    date: "May' 24",
    fullDate: "May 5, 2024",
    headline: "Java Programming (72 Hours) - LPU",
    credentialId: "35cQ6dn70o8bp55q9",
    imageSrc: "/certificates/java_neocolab.png",
    pdfSrc: "/certificates/Java neocolab certificate .pdf",
    driveLink: "https://drive.google.com/file/d/1Mo2j4_YcuKombnqfDaurv0XnEh61DCGd/view?usp=sharing",
    icon: Coffee
  },
  {
    id: 5,
    tabLabel: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Sep' 23",
    fullDate: "September 23, 2023",
    headline: "Responsive Web Design Developer Certification",
    credentialId: "fcc3a061a2e-c722-4e1f-9938-0f278a01e546",
    imageSrc: "/certificates/freecodecamp_rwd.jpg",
    pdfSrc: "/certificates/WhatsApp Image 2023-09-23 at 19.51.41.jpg",
    driveLink: "https://drive.google.com/file/d/1RanN4_5XwtZ5cBAGdPJhQc8t9vPGDyVV/view?usp=sharing",
    icon: Layout
  }
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [lightboxCert, setLightboxCert] = useState(null);

  // Track which certificate is currently scrolled into view
  useEffect(() => {
    const observers = [];
    certificatesData.forEach((cert, idx) => {
      const el = document.getElementById(`cert-item-${cert.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        {
          rootMargin: '-20% 0px -40% 0px',
          threshold: 0.15
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      const sectionEl = document.getElementById('certificates');
      if (!sectionEl) return;
      const rect = sectionEl.getBoundingClientRect();
      // If user hasn't scrolled to certificates yet or has scrolled past
      if (rect.top > window.innerHeight * 0.6 || rect.bottom < window.innerHeight * 0.2) {
        setActiveIndex(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to a specific certificate
  const scrollToCert = (id) => {
    const el = document.getElementById(`cert-item-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="certificates" className="pt-24 pb-32 lg:pb-44 px-6 md:px-12 relative max-w-7xl mx-auto scroll-mt-20">
        
        {/* 2-Column Layout: Left Sticky Header & Drawer + Right Free Certificates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* =========================================================================
              LEFT COLUMN: STICKY ON SCREEN
              - Holds the CERTIFICATES. heading (stays sticky with the view!)
              - Holds the 5 drawer tiles
              - Stays fixed in the viewport while the right column scrolls
              ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            
            {/* Section Header: Stays on screen while scrolling certificates! */}
            <div className="flex items-center gap-4">
              <h2 className="hero-name-font tracking-wide text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] leading-none flex items-baseline">
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">CERTIFICATES</span>
                <span className="text-red-500 font-sans ml-1 text-2xl sm:text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
              </h2>
              <div className="h-px bg-zinc-800/80 flex-grow max-w-xs" />
            </div>

            {/* Vertical Tiles Drawer */}
            <div className="space-y-3 relative pt-1">
              {certificatesData.map((cert, idx) => {
                const isActive = idx === activeIndex;
                const IconComponent = cert.icon;

                return (
                  <div
                    key={cert.id}
                    onClick={() => scrollToCert(cert.id)}
                    className="group relative flex items-center gap-4 py-3 px-3 rounded-2xl cursor-pointer transition-all duration-300"
                  >
                    {/* Active Left Red Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="stickyCertIndicator"
                        className="absolute left-0 top-2 bottom-2 w-1.5 bg-red-500 rounded-full shadow-[0_0_14px_rgba(239,68,68,0.95)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}

                    {/* Category Icon */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] scale-105' 
                        : 'bg-[#141418] text-zinc-500 border border-white/[0.06] group-hover:text-zinc-200 group-hover:border-zinc-700'
                    }`}>
                      <IconComponent size={20} />
                    </div>

                    {/* Label & Details */}
                    <div className="flex flex-col">
                      <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 leading-snug ${
                        isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                      }`}>
                        {cert.tabLabel}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 mt-0.5">
                        {cert.issuer} • {cert.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-4 border-t border-zinc-800/60">
              <span>Scroll to view certificates</span>
              <span className="text-zinc-400 font-bold bg-[#141418] border border-white/10 px-2.5 py-0.5 rounded-full">
                {activeIndex !== null ? `0${activeIndex + 1}` : '--'} / 0{certificatesData.length}
              </span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: CERTIFICATES FREE ON SCREEN ONE BELOW ANOTHER
              - No mock container boxes or bezels!
              - Scroll naturally until the last certificate aligns with the screen
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id} 
                id={`cert-item-${cert.id}`} 
                className={`scroll-mt-28 transition-all duration-300 ${
                  cert.id === certificatesData.length ? 'pb-24 lg:pb-36' : ''
                }`}
              >
                {/* Floating Top Info Strip */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wide truncate max-w-[240px] sm:max-w-none">
                      0{cert.id}. {cert.headline}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => setLightboxCert(cert)}
                      aria-label="Enlarge certificate"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white bg-[#141418] hover:bg-zinc-800 border border-white/[0.08] px-2.5 py-1 rounded-full transition-colors"
                    >
                      <ZoomIn size={12} />
                      <span className="hidden sm:inline">Enlarge</span>
                    </button>

                    <a
                      href={cert.pdfSrc || cert.driveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 border border-red-500/20 px-3 py-1 rounded-full transition-all"
                    >
                      <span>Original</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* The Certificate Image Free On Screen */}
                <div
                  onClick={() => setLightboxCert(cert)}
                  className="group relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/[0.1] hover:border-red-500/40 transition-all duration-300 cursor-pointer bg-zinc-950/80"
                >
                  <img
                    src={cert.imageSrc}
                    alt={cert.headline}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* Subtle Hover Action Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 bg-zinc-950/90 text-white font-mono text-xs px-4 py-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-sm">
                      <Maximize2 size={13} />
                      Click to View Fullscreen
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mt-2 px-1">
                  <span>Issued: <strong className="text-zinc-400">{cert.fullDate}</strong></span>
                  <span>ID: <strong className="text-zinc-400">{cert.credentialId}</strong></span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Fullscreen Certificate Lightbox Modal */}
      <AnimatePresence>
        {lightboxCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111116] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {lightboxCert.headline}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {lightboxCert.issuer} • {lightboxCert.fullDate} • ID: {lightboxCert.credentialId}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={lightboxCert.pdfSrc || lightboxCert.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white font-medium text-xs px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Open PDF</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => setLightboxCert(null)}
                    aria-label="Close full view"
                    className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Certificate Image */}
              <div className="flex-grow min-h-0 overflow-auto flex items-center justify-center p-2 bg-black/40 rounded-xl">
                <img
                  src={lightboxCert.imageSrc}
                  alt={lightboxCert.headline}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
