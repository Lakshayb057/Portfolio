import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The form needs to know WHICH email to send to!
    const WEB3FORMS_ACCESS_KEY = "d97e7bba-32fd-40f0-b204-ce29b3259dce";
    
    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setStatus("Setup Required: Please add your Access Key in Contact.jsx");
      return;
    }

    setStatus('Sending...');
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus(`Failed: ${data.message || "Unknown API error"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please check your console.');
    }
  };

  return (
    <section id="contact" className="pt-24 pb-8 relative px-6 md:px-12" style={{ perspective: 1800 }}>
      <div className="max-w-7xl mx-auto" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
           initial={{ opacity: 0, y: 100, rotateX: 30, z: -200 }}
           whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
           transition={{ duration: 0.8, type: "spring" }}
           viewport={{ once: false, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-md">Get In Touch</h2>
          <p className="text-slate-300 max-w-xl mx-auto font-medium drop-shadow-lg">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12" style={{ transformStyle: "preserve-3d" }}>
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 30, z: -200 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="md:w-1/3 space-y-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div whileHover={{ scale: 1.1, rotateY: -15, z: 50 }} className="flex items-start space-x-4 glass p-4 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] cursor-pointer">
              <div className="p-3 bg-red-500/10 rounded-xl text-accent">
                <Mail size={24} />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <h4 className="text-lg font-bold text-white drop-shadow-md">Email</h4>
                <a href="mailto:Lakshayb057@gmail.com" className="text-slate-300 font-medium hover:text-red-400 transition-colors">Lakshayb057@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, rotateY: -15, z: 50 }} className="flex items-start space-x-4 glass p-4 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] cursor-pointer">
              <div className="p-3 bg-red-500/10 rounded-xl text-highlight">
                <Phone size={24} />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <h4 className="text-lg font-bold text-white drop-shadow-md">Phone</h4>
                <a href="tel:+918295886832" className="text-slate-300 font-medium hover:text-red-400 transition-colors">+91 8295886832</a>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, rotateY: -15, z: 50 }} className="flex items-start space-x-4 glass p-4 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] cursor-pointer">
              <div className="p-3 bg-red-500/10 rounded-xl text-emerald-400">
                <MapPin size={24} />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <h4 className="text-lg font-bold text-white drop-shadow-md">Location</h4>
                <span className="text-slate-300 font-medium">Punjab / Haryana, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -30, z: -200 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5, z: 50, transition: { type: "spring", stiffness: 300 } }}
            className="md:w-2/3 glass p-8 rounded-2xl border border-red-500/20 shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.3)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6" style={{ transform: "translateZ(20px)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white drop-shadow-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-red-500/20 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-inner transition-all hover:bg-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white drop-shadow-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-red-500/20 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-inner transition-all hover:bg-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white drop-shadow-sm mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-red-500/20 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 shadow-inner transition-all hover:bg-white/10 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-xl font-bold border border-red-500/50 hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              {status && (
                 <p className={`text-sm mt-4 font-bold drop-shadow-lg ${status.includes('Success') ? 'text-emerald-400' : 'text-amber-400'}`}>
                   {status}
                 </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center mt-12 animate-bounce cursor-pointer text-slate-500 hover:text-red-400 transition-colors"
      >
        <Link to="home" smooth={true} duration={500}>
          <motion.div whileHover={{ scale: 1.3, rotateZ: 180 }}>
            <ChevronUp size={40} className="drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
