import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Phone, 
  Send, 
  ArrowUpRight, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  X, 
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';

const MIN_MESSAGE_CHARACTERS = 150;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState('');
  const [showChannelModal, setShowChannelModal] = useState(false);

  // Field Validation Logic
  const validateName = (name) => {
    const trimmed = name.trim();
    if (!trimmed) {
      return "Full name is required.";
    }
    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) {
      return "Please enter both your first and last name separated by a space (e.g. John Doe).";
    }
    if (parts[0].length < 2 || parts[1].length < 2) {
      return "Both first and last name must be at least 2 characters.";
    }
    return "";
  };

  const validateEmail = (email) => {
    const trimmed = email.trim();
    if (!trimmed) {
      return "Email address is required.";
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email format (e.g. yourname@domain.com).";
    }
    return "";
  };

  const validateMessage = (msg) => {
    const trimmed = msg.trim();
    if (!trimmed) {
      return `Message is required (minimum ${MIN_MESSAGE_CHARACTERS} characters).`;
    }
    if (trimmed.length < MIN_MESSAGE_CHARACTERS) {
      const remaining = MIN_MESSAGE_CHARACTERS - trimmed.length;
      return `Message must be at least ${MIN_MESSAGE_CHARACTERS} characters (currently ${trimmed.length} / ${MIN_MESSAGE_CHARACTERS} — ${remaining} more needed).`;
    }
    return "";
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let errorMsg = '';
    if (field === 'name') errorMsg = validateName(formData.name);
    else if (field === 'email') errorMsg = validateEmail(formData.email);
    else if (field === 'message') errorMsg = validateMessage(formData.message);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      let errorMsg = '';
      if (field === 'name') errorMsg = validateName(value);
      else if (field === 'email') errorMsg = validateEmail(value);
      else if (field === 'message') errorMsg = validateMessage(value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  // Background backup submission to Web3Forms
  const submitToWeb3Forms = async () => {
    const WEB3FORMS_ACCESS_KEY = "d97e7bba-32fd-40f0-b204-ce29b3259dce";
    try {
      await fetch('https://api.web3forms.com/submit', {
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
    } catch (err) {
      console.warn("Background form sync note:", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const messageErr = validateMessage(formData.message);

    setErrors({
      name: nameErr,
      email: emailErr,
      message: messageErr,
    });

    // Block submission if any validation fails
    if (nameErr || emailErr || messageErr) {
      return;
    }

    // Open channel selection modal
    setShowChannelModal(true);
  };

  const handleChooseEmail = () => {
    submitToWeb3Forms();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hi Lakshay,\n\nI reached out via your portfolio contact form.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    // Direct Gmail web compose link with lakshayb057@gmail.com
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=lakshayb057@gmail.com&su=${subject}&body=${bodyContent}`;
    
    // Open Gmail compose in new tab
    const newWindow = window.open(gmailUrl, '_blank');
    
    // Fallback to mailto if popup blocked or native client preferred
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = `mailto:lakshayb057@gmail.com?subject=${subject}&body=${bodyContent}`;
    }

    setShowChannelModal(false);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
    setErrors({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 7000);
  };

  const handleChooseWhatsApp = () => {
    submitToWeb3Forms();

    // Formatted template with filled details
    const textTemplate = 
      `Hello Lakshay, I came across your portfolio and would like to connect!\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Message:*\n${formData.message}`;

    // WhatsApp direct link to contact 8295886832 (country code +91)
    const whatsappUrl = `https://wa.me/918295886832?text=${encodeURIComponent(textTemplate)}`;
    
    window.open(whatsappUrl, '_blank');

    setShowChannelModal(false);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
    setErrors({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 7000);
  };

  const messageLength = formData.message.trim().length;
  const isMessageValid = messageLength >= MIN_MESSAGE_CHARACTERS;
  const messageProgress = Math.min(100, Math.round((messageLength / MIN_MESSAGE_CHARACTERS) * 100));

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-14">
        <h2 className="hero-name-font tracking-wide text-white uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-none mb-4 flex items-baseline">
          <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">GET IN TOUCH</span>
          <span className="text-red-500 font-sans ml-1 text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
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
            href="mailto:lakshayb057@gmail.com"
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
                    lakshayb057@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
          </a>

          {/* LinkedIn Card with verified URL */}
          <a
            href="https://www.linkedin.com/in/lakshayb057/"
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
                    linkedin.com/in/lakshayb057
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
            </div>
          </a>

          {/* Phone & WhatsApp Card */}
          <a
            href="https://wa.me/918295886832"
            target="_blank"
            rel="noreferrer"
            className="group block bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors">
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
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
          </a>

          {/* Location pill */}
          <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-2xl p-5 flex items-center gap-3 text-xs text-zinc-400">
            <MapPin size={16} className="text-red-400 shrink-0" />
            <span>Fatehabad, Haryana, India 125050 • Available worldwide for remote engineering</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 sm:p-9 backdrop-blur-xl relative">
          <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 1. Name Input with First & Last Name validation */}
              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder:text-zinc-600 ${
                    touched.name && errors.name
                      ? 'border-red-500/80 focus:border-red-500 bg-red-950/10'
                      : touched.name && !errors.name
                      ? 'border-emerald-500/60 focus:border-emerald-500'
                      : 'border-zinc-800 focus:border-red-500'
                  }`}
                />
                {touched.name && errors.name && (
                  <p className="flex items-center gap-1.5 text-xs font-mono text-red-400 mt-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* 2. Email Input with Proper Format validation */}
              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder:text-zinc-600 ${
                    touched.email && errors.email
                      ? 'border-red-500/80 focus:border-red-500 bg-red-950/10'
                      : touched.email && !errors.email
                      ? 'border-emerald-500/60 focus:border-emerald-500'
                      : 'border-zinc-800 focus:border-red-500'
                  }`}
                />
                {touched.email && errors.email && (
                  <p className="flex items-center gap-1.5 text-xs font-mono text-red-400 mt-1.5">
                    <AlertCircle size={13} className="shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* 3. Message Textarea with 150+ Character validation */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
                  Message
                </label>
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <span className={isMessageValid ? 'text-emerald-400 font-semibold' : 'text-zinc-500'}>
                    {messageLength} / {MIN_MESSAGE_CHARACTERS}
                  </span>
                  {isMessageValid && (
                    <CheckCircle size={13} className="text-emerald-400" />
                  )}
                </div>
              </div>

              <textarea
                rows={5}
                placeholder="Write your project details, goals, or role overview here (minimum 150 characters)..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder:text-zinc-600 resize-none ${
                  touched.message && errors.message
                    ? 'border-red-500/80 focus:border-red-500 bg-red-950/10'
                    : touched.message && !errors.message
                    ? 'border-emerald-500/60 focus:border-emerald-500'
                    : 'border-zinc-800 focus:border-red-500'
                }`}
              />

              {/* Progress bar towards 150 chars */}
              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden mt-1.5">
                <div 
                  className={`h-full transition-all duration-300 ${
                    isMessageValid 
                      ? 'bg-emerald-500' 
                      : 'bg-gradient-to-r from-red-600 to-rose-400'
                  }`}
                  style={{ width: `${messageProgress}%` }}
                />
              </div>

              {touched.message && errors.message && (
                <p className="flex items-center gap-1.5 text-xs font-mono text-red-400 mt-2">
                  <AlertCircle size={13} className="shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-white/5"
            >
              <span>Send Message</span>
              <Send size={15} />
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl">
                <CheckCircle size={16} className="shrink-0" />
                <span>Message dispatched successfully! Thank you for reaching out.</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Modal: Choose Delivery Method (Email vs WhatsApp) */}
      <AnimatePresence>
        {showChannelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChannelModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800/90 rounded-3xl p-7 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Subtle Ambient Red Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold">
                    Choose Delivery Method
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                    Send Message Via
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Choose how you want to connect directly with Lakshay.
                  </p>
                </div>
                <button
                  onClick={() => setShowChannelModal(false)}
                  className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Option Cards */}
              <div className="space-y-3.5 mb-6">
                {/* 1. Gmail Option */}
                <button
                  type="button"
                  onClick={handleChooseEmail}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-red-500/50 transition-all duration-200 group flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-base group-hover:text-red-400 transition-colors">
                        Send via Gmail
                      </h4>
                      <ExternalLink size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Opens Gmail with all your filled details addressed to <span className="text-zinc-300 font-mono">lakshayb057@gmail.com</span>.
                    </p>
                  </div>
                </button>

                {/* 2. WhatsApp Option */}
                <button
                  type="button"
                  onClick={handleChooseWhatsApp}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-200 group flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-base group-hover:text-emerald-400 transition-colors">
                        Send via WhatsApp
                      </h4>
                      <ExternalLink size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Opens WhatsApp with a formatted message template addressed to <span className="text-zinc-300 font-mono">+91-8295886832</span>.
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
