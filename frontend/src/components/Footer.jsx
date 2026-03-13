const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold tracking-tighter mb-4 md:mb-0">
          <span className="text-white">Lak</span>
          <span className="text-red-500">shay</span>
        </div>
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Lakshay. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 text-sm font-medium">
          <a href="https://github.com/Lakshayb057" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/lakshayb057" className="text-slate-400 hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
