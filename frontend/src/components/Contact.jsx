import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Send, ArrowUpRight, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const WEB3FORMS_ACCESS_KEY = "d97e7bba-32fd-40f0-b204-ce29b3259dce";

    setStatus('Sending...');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
      {/* Section Title matching Parth's Let's build something great. */}
      <div className="mb-14">
        <h2 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-4 flex items-center">
          <span>Let's build something great</span>
          <span className="text-red-500">.</span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal">
          Open for full-time roles, software engineering collaborations, and high-impact full-stack opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <a
            href="mailto:Lakshayb057@gmail.com"
            className="group block bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-400 transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                    EMAIL
                  </span>
                  <span className="text-zinc-200 group-hover:text-white font-medium text-sm sm:text-base">
                    Lakshayb057@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/Lakshay"
            target="_blank"
            rel="noreferrer"
            className="group block bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-400 transition-colors">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                    LINKEDIN
                  </span>
                  <span className="text-zinc-200 group-hover:text-white font-medium text-sm sm:text-base">
                    linkedin.com/in/Lakshay
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
          </a>

          {/* Phone / WhatsApp Card */}
          <a
            href="tel:+918295886832"
            className="group block bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-400 transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                    PHONE & WHATSAPP
                  </span>
                  <span className="text-zinc-200 group-hover:text-white font-medium text-sm sm:text-base">
                    +91-8295886832
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
          </a>

          {/* Location pill */}
          <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-2xl p-5 flex items-center gap-3 text-xs text-zinc-400">
            <MapPin size={16} className="text-red-400" />
            <span>Based in Gurugram / Punjab, India • Available worldwide for remote opportunities</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 sm:p-9 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <span>{status === 'Sending...' ? 'Sending...' : 'Send Message'}</span>
              <Send size={15} />
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                <CheckCircle size={16} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                <AlertCircle size={16} />
                <span>Could not send message. Please reach out directly to Lakshayb057@gmail.com</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
