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
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
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
    <section id="contact" className="pt-24 pb-8 relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/3 space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 glass rounded-xl text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <a href="mailto:Lakshayb057@gmail.com" className="text-slate-400 hover:text-accent transition-colors">Lakshayb057@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 glass rounded-xl text-highlight">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <a href="tel:+918295886832" className="text-slate-400 hover:text-highlight transition-colors">+91 8295886832</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 glass rounded-xl text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <span className="text-slate-400">Punjab / Haryana, India</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-2/3 glass p-8 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition-all flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {status && (
                 <p className={`text-sm mt-4 font-medium ${status.includes('Success') ? 'text-emerald-400' : 'text-amber-400'}`}>
                   {status}
                 </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center mt-12 animate-bounce cursor-pointer text-slate-500 hover:text-white transition-colors">
        <Link to="home" smooth={true} duration={500}>
          <ChevronUp size={40} />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
