import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "Master Generative AI & Generative AI Tools ( ChatGPT & More )",
    issuer: "Udemy",
    date: "Aug, 2025",
    link: "#"
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    date: "Aug, 2025",
    link: "#"
  },
  {
    title: "Aptech Certified Professional in C/C++ Programming",
    issuer: "Aptech Institute",
    date: "June, 2024",
    link: "#"
  },
  {
    title: "JAVA PROGRAMIN",
    issuer: "Lovely Professional university | IAMNEO Platform",
    date: "May, 2024",
    link: "#"
  },
  {
    title: "Responsive Web Design",
    issuer: "Free Code Camp",
    date: "Sep, 2023",
    link: "#"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-between mb-16 px-2"
        >
          <div className="flex items-center space-x-4 w-full">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white whitespace-nowrap italic">
              Major <span className="text-gradient">Certificates</span>
            </h2>
            <div className="h-px bg-red-500/20 flex-grow" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all group flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-red-500/10 text-accent group-hover:bg-red-500/20 transition-colors">
                  <Award size={24} />
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4 flex-grow">
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1 rounded-full">
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
