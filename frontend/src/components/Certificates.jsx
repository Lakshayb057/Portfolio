import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Master Generative AI & Generative AI Tools ( ChatGPT & More )",
    issuer: "Udemy",
    date: "Aug, 2025",
    link: "https://drive.google.com/file/d/13ICN96ZAK89KfZ0hqRjB5JDUD7pyMYii/view"
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    date: "Aug, 2025",
    link: "https://drive.google.com/file/d/1GmTwsMLuO1qyONl0Cpde-RSfh_eqVY52/view"
  },
  {
    title: "Aptech Certified Professional in C/C++ Programming",
    issuer: "Aptech Institute",
    date: "June, 2024",
    link: "https://drive.google.com/file/d/15wR62pFMsR2PemgpHpYtKPoQG7daXL9B/view?usp=sharing"
  },
  {
    title: "JAVA PROGRAMIN",
    issuer: "Lovely Professional university | IAMNEO Platform",
    date: "May, 2024",
    link: "https://drive.google.com/file/d/1Mo2j4_YcuKombnqfDaurv0XnEh61DCGd/view?usp=sharing"
  },
  {
    title: "Responsive Web Design",
    issuer: "Free Code Camp",
    date: "Sep, 2023",
    link: "https://drive.google.com/file/d/1RanN4_5XwtZ5cBAGdPJhQc8t9vPGDyVV/view?usp=sharing"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative px-6 md:px-12 bg-transparent" style={{ perspective: 1800 }}>
      <div className="max-w-7xl mx-auto" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -30, z: -200 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-between mb-16 px-2"
        >
          <div className="flex items-center space-x-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white whitespace-nowrap italic drop-shadow-md">
              Major <span className="text-gradient">Certificates</span>
            </h2>
            <div className="h-px bg-red-500/20 flex-grow" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ transformStyle: "preserve-3d" }}>
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45, rotateY: 20, z: -300 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 10, 
                rotateY: -10, 
                z: 100,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all group flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
                <div className="p-3 rounded-xl bg-red-500/10 text-accent group-hover:bg-red-500/30 transition-colors shadow-inner">
                  <Award size={24} />
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-accent transition-colors drop-shadow-md"
                >
                  <ExternalLink size={24} className="group-hover:scale-125 transition-transform" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-accent transition-colors line-clamp-2 drop-shadow-md" style={{ transform: "translateZ(40px)" }}>
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 flex-grow" style={{ transform: "translateZ(20px)" }}>
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-red-500/20" style={{ transform: "translateZ(30px)" }}>
                <span className="text-xs font-mono font-bold text-white bg-red-500/20 group-hover:bg-red-500/40 px-3 py-1 rounded-full shadow-lg transition-colors">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
