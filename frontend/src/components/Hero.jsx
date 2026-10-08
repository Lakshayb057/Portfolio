import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import lakshayImg from '../assets/lakshay.png';

// Live background programming language & portfolio skills logos
const techLogos = [
  // --- Left 65% area (Dark side - remains submerged after scroll) ---
  { icon: 'devicon-c-plain', label: 'C', top: '7%', left: '4%', size: 'text-4xl sm:text-5xl', duration: 7.5, delay: 0 },
  { icon: 'devicon-react-original', label: 'React', top: '9%', left: '23%', size: 'text-5xl sm:text-6xl', duration: 6.8, delay: 0.8 },
  { icon: 'devicon-prisma-original', label: 'Prisma', top: '6%', left: '44%', size: 'text-3xl sm:text-4xl', duration: 8.1, delay: 1.4 },
  { icon: 'devicon-cplusplus-plain', label: 'C++', top: '19%', left: '48%', size: 'text-5xl sm:text-6xl', duration: 8.8, delay: 1.2 },
  { icon: 'devicon-nextjs-plain', label: 'Next.js', top: '23%', left: '11%', size: 'text-4xl sm:text-5xl', duration: 7.6, delay: 0.3 },
  { icon: 'devicon-kotlin-plain', label: 'Kotlin', top: '30%', left: '33%', size: 'text-4xl sm:text-5xl', duration: 8.4, delay: 2.1 },
  { icon: 'devicon-javascript-plain', label: 'JavaScript', top: '37%', left: '5%', size: 'text-5xl sm:text-6xl', duration: 7.8, delay: 1.0 },
  { icon: 'devicon-express-original', label: 'Express.js', top: '29%', left: '57%', size: 'text-4xl sm:text-5xl', duration: 8.7, delay: 1.7 },
  { icon: 'devicon-typescript-plain', label: 'TypeScript', top: '45%', left: '53%', size: 'text-4xl sm:text-5xl', duration: 8.6, delay: 2.2 },
  { icon: 'devicon-nodejs-plain', label: 'Node.js', top: '51%', left: '20%', size: 'text-4xl sm:text-5xl', duration: 8.0, delay: 1.6 },
  { icon: 'devicon-java-plain', label: 'Java', top: '63%', left: '9%', size: 'text-5xl sm:text-6xl', duration: 9.2, delay: 2.0 },
  { icon: 'devicon-python-plain', label: 'Python', top: '57%', left: '39%', size: 'text-5xl sm:text-6xl', duration: 8.4, delay: 2.5 },
  { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', top: '69%', left: '51%', size: 'text-4xl sm:text-5xl', duration: 7.9, delay: 0.7 },
  { icon: 'devicon-django-plain', label: 'Django', top: '71%', left: '29%', size: 'text-4xl sm:text-5xl', duration: 8.3, delay: 1.9 },
  { icon: 'devicon-csharp-plain', label: 'C#', top: '77%', left: '4%', size: 'text-4xl sm:text-5xl', duration: 7.2, delay: 0.5 },
  { icon: 'devicon-tailwindcss-original', label: 'Tailwind CSS', top: '81%', left: '19%', size: 'text-4xl sm:text-5xl', duration: 7.7, delay: 1.3 },
  { icon: 'devicon-mongodb-plain', label: 'MongoDB', top: '85%', left: '38%', size: 'text-5xl sm:text-6xl', duration: 9.0, delay: 2.1 },
  { icon: 'devicon-laravel-original', label: 'Laravel', top: '88%', left: '49%', size: 'text-4xl sm:text-5xl', duration: 8.2, delay: 0.9 },
  { icon: 'devicon-redis-plain', label: 'Redis', top: '91%', left: '12%', size: 'text-3xl sm:text-4xl', duration: 7.3, delay: 1.8 },
  { icon: 'devicon-mysql-plain', label: 'MySQL', top: '92%', left: '28%', size: 'text-4xl sm:text-5xl', duration: 8.9, delay: 2.4 },

  // --- Right 35% area (Full dark screen at scroll 0, gracefully covered on scroll) ---
  { icon: 'devicon-html5-plain', label: 'HTML5', top: '10%', left: '79%', size: 'text-5xl sm:text-6xl', duration: 7.4, delay: 1.1 },
  { icon: 'devicon-docker-plain', label: 'Docker', top: '16%', left: '66%', size: 'text-4xl sm:text-5xl', duration: 8.5, delay: 1.5 },
  { icon: 'devicon-css3-plain', label: 'CSS3', top: '24%', left: '89%', size: 'text-5xl sm:text-6xl', duration: 8.2, delay: 1.8 },
  { icon: 'devicon-git-plain', label: 'Git', top: '35%', left: '72%', size: 'text-4xl sm:text-5xl', duration: 7.0, delay: 0.4 },
  { icon: 'devicon-github-original', label: 'GitHub', top: '44%', left: '88%', size: 'text-4xl sm:text-5xl', duration: 8.0, delay: 2.0 },
  { icon: 'devicon-android-plain', label: 'Android', top: '53%', left: '68%', size: 'text-4xl sm:text-5xl', duration: 8.8, delay: 0.6 },
  { icon: 'devicon-vscode-plain', label: 'VS Code', top: '63%', left: '83%', size: 'text-4xl sm:text-5xl', duration: 7.5, delay: 1.2 },
  { icon: 'devicon-postman-plain', label: 'Postman', top: '72%', left: '67%', size: 'text-4xl sm:text-5xl', duration: 8.3, delay: 2.3 },
  { icon: 'devicon-firebase-plain', label: 'Firebase', top: '81%', left: '91%', size: 'text-4xl sm:text-5xl', duration: 7.6, delay: 1.6 },
  { icon: 'devicon-figma-plain', label: 'Figma', top: '85%', left: '75%', size: 'text-4xl sm:text-5xl', duration: 8.6, delay: 0.9 },
  { icon: 'devicon-php-plain', label: 'PHP', top: '92%', left: '84%', size: 'text-4xl sm:text-5xl', duration: 9.1, delay: 2.2 },
];

const Hero = () => {
  const containerRef = useRef(null);

  // Track window width for responsive transforms
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pinned scroll container for the sequenced scroll reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring interpolation for soft, buttery scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 22,
    restDelta: 0.001,
  });

  // Track shifted layout state for text alignment
  const [isShifted, setIsShifted] = useState(false);
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    setIsShifted(latest > 0.12);
  });

  // =========================================================================
  // TWO-PHASE CHOREOGRAPHED SCROLL SEQUENCE:
  // Phase 1: Text glides to LEFT, White Screen scrolls in from RIGHT BORDER
  // Phase 2: THEN Lakshay's photo rises up smoothly from the BOTTOM
  // =========================================================================

  // Phase 1 (0 -> 0.42): White screen scrolls out from the right border
  const whiteBgX = useTransform(smoothProgress, [0, 0.42], ['100%', '0%']);

  // Phase 1 (0 -> 0.42): Text container glides horizontally to the center of the 65% dark left area
  const textX = useTransform(
    smoothProgress,
    [0, 0.42],
    ['0vw', isDesktop ? '-17.5vw' : '0vw']
  );

  // Phase 2 (0.38 -> 0.78): Photo rises up from the BOTTOM of the screen
  const photoY = useTransform(smoothProgress, [0.38, 0.78], ['85vh', '0vh']);
  const photoOpacity = useTransform(smoothProgress, [0.38, 0.58], [0, 1]);
  const photoScale = useTransform(smoothProgress, [0.38, 0.78], [0.92, 1]);

  // Smooth scroll handler for "Get in Touch" button
  const handleGetInTouch = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[185vh] w-full"
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden select-none">
        {/* ========================================================
            SUBMERGED LIVE BACKGROUND: PROGRAMMING LANGUAGES
            Floating logos: C, C++, C#, Java, JS, Python, React, Node
            Blended softly in dark background, zero conflict with text
            ======================================================== */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {techLogos.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{
                y: [0, -18, 0],
                x: [0, 8, -6, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: tech.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: tech.delay,
              }}
              style={{ top: tech.top, left: tech.left }}
              className={`absolute flex items-center justify-center opacity-[0.13] sm:opacity-[0.16] text-zinc-400 select-none ${tech.size} filter drop-shadow-[0_0_12px_rgba(255,255,255,0.06)]`}
              title={tech.label}
            >
              <i className={tech.icon} />
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            PHASE 1: WHITE BACKGROUND (35% WIDTH)
            Scrolls out from the RIGHT border to cover 35% of screen
            ======================================================== */}
        <motion.div
          style={{ x: whiteBgX }}
          className="absolute inset-y-0 right-0 w-full lg:w-[35%] bg-white z-[1] pointer-events-none shadow-2xl"
        >
          {/* Subtle vertical divider hairline on desktop */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-zinc-200/80 hidden lg:block" />
        </motion.div>

        {/* ========================================================
            PHASE 2: LAKSHAY'S PHOTO
            Centered horizontally within the 35% white area only,
            grounded directly at the bottom edge (No hover tilt)
            ======================================================== */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[35%] flex items-end justify-center pointer-events-none z-20 overflow-hidden">
          <motion.div
            style={{
              y: photoY,
              opacity: photoOpacity,
              scale: photoScale,
            }}
            className="relative flex items-end justify-center pointer-events-auto w-full px-2"
          >
            <img
              src={lakshayImg}
              alt="Lakshay Bansal"
              className="h-[76vh] sm:h-[84vh] lg:h-[88vh] xl:h-[92vh] max-h-[860px] max-w-full w-auto object-contain object-bottom rounded-2xl sm:rounded-3xl drop-shadow-[0_25px_45px_rgba(0,0,0,0.28)] pointer-events-none"
            />
          </motion.div>
        </div>

        {/* ========================================================
            STAGE CONTAINER: TEXT CONTENT
            Starts centered across full screen, glides to LEFT on scroll
            ======================================================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-8 lg:px-12 pointer-events-none">
          <motion.div
            style={{ x: textX }}
            className="relative z-10 w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col pointer-events-auto px-4"
          >
            {/* Eyebrow Role Badge (Increased Font Size, Clean Static Dot) */}
            <motion.div
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-400 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase mb-6 sm:mb-8 transition-all duration-500 ${
                isShifted && isDesktop ? 'self-start' : 'self-center'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Full-Stack Developer & Software Engineer</span>
            </motion.div>

            {/* Main Display Typography: "LAKSHAY."
                Using Monoton / multi-line inline stroke style from reference image */}
            <motion.h1
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`hero-name-font tracking-wide text-white leading-none mb-6 transition-all duration-500 text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.5rem] 2xl:text-[6.2rem] ${
                isShifted && isDesktop ? 'text-left' : 'text-center'
              }`}
            >
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">LAKSHAY</span>
              <span className="text-red-500 font-sans ml-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
            </motion.h1>

            {/* Subtitle (Increased Font Size) */}
            <motion.p
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 transition-all duration-500 ${
                isShifted && isDesktop ? 'text-left self-start' : 'text-center self-center'
              }`}
            >
              Crafting high-performance web experiences with code and creative strategy.
            </motion.p>

            {/* Action Buttons (Increased Padding & Font Size, Reliable Actions) */}
            <motion.div
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`flex flex-wrap items-center gap-4 sm:gap-6 mb-10 sm:mb-14 transition-all duration-500 ${
                isShifted && isDesktop ? 'justify-start' : 'justify-center'
              }`}
            >
              {/* Download Resume Button: Downloads latest lakshay.pdf */}
              <a
                href="/lakshay.pdf"
                download="lakshay.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-8 sm:px-10 py-4 rounded-full font-bold text-sm sm:text-base tracking-wide transition-colors shadow-xl shadow-white/10"
              >
                <span>Download Resume</span>
              </a>

              {/* Get in Touch Button: Smooth scrolls to bottom contact form */}
              <a
                href="#contact"
                onClick={handleGetInTouch}
                className="cursor-pointer inline-flex items-center justify-center gap-2 border border-zinc-700/80 bg-zinc-900/70 backdrop-blur-md text-white hover:bg-zinc-800 px-8 sm:px-10 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Social Profiles (Updated URLs & Aligned) */}
            <motion.div
              layout
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`flex items-center gap-6 sm:gap-8 text-zinc-400 text-sm sm:text-base transition-all duration-500 ${
                isShifted && isDesktop ? 'justify-start' : 'justify-center'
              }`}
            >
              <a
                href="https://github.com/Lakshayb057"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://www.linkedin.com/in/lakshayb057/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="mailto:Lakshayb057@gmail.com"
                className="hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Lakshayb057@gmail.com</span>
                <span className="sm:hidden">Mail</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
