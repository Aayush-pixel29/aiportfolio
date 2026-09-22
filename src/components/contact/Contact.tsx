"use client";

import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Add real form submission logic here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative w-full bg-dark text-white min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24">
      {/* Scroll timeline indicator on left */}
      <div className="hidden md:flex absolute left-8 top-32 bottom-32 flex-col items-center gap-8">
        <div className="w-[1px] h-full bg-white/10 absolute top-0 bottom-0 z-0"></div>
        <div className="w-2 h-2 rounded-full border border-white/20 bg-dark z-10"></div>
        <div className="w-2 h-2 rounded-full border border-white/20 bg-dark z-10"></div>
        <div className="w-2 h-2 rounded-full border border-white/20 bg-dark z-10"></div>
        <div className="w-2 h-2 rounded-full bg-coral shadow-[0_0_10px_var(--coral)] z-10"></div>
      </div>

      {/* Download CV rotated text */}
      <div className="hidden md:block absolute left-8 bottom-12 -rotate-90 origin-left font-mono text-[10px] tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer">
        DOWNLOAD CV
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-20">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="font-mono text-[12px] text-cyan mb-8 tracking-widest">
            {"// CONNECT"}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4">
            Let&apos;s build something resilient.
          </h2>
          
          <p className="text-white/60 text-lg max-w-md leading-relaxed mb-12">
            Open to full-time AI Engineer and Full-Stack roles. If you&apos;re hiring or just want to talk about edge AI and multi-agent systems — reach out.
          </p>

          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 flex flex-col gap-4 max-w-md">
            <span className="text-white/60 text-sm">Want to save some typing?</span>
            <button className="flex items-center justify-center gap-3 w-full bg-white text-dark font-medium py-3 rounded-lg hover:bg-white/90 transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan transition-colors"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company / Role (Optional)"
              className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan transition-colors"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
            />
            <div className="relative">
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              />
              <div className="absolute right-4 bottom-4 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-mint"></span>
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                sent ? 'bg-mint text-dark' : 'bg-mint/90 hover:bg-mint text-dark'
              }`}
            >
              {sent ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  SENT
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full mt-24 border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">Email</span>
            <a href="mailto:shelaraayush535@gmail.com" className="text-white hover:text-cyan transition-colors text-sm font-medium">shelaraayush535@gmail.com</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">Phone</span>
            <a href="tel:+919175227454" className="text-white hover:text-cyan transition-colors text-sm font-medium">+91 91752 27454</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">Social</span>
            <div className="flex gap-4">
              <a href="https://github.com/Aayush-pixel29" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan transition-colors text-sm font-medium">GitHub</a>
              <a href="https://www.linkedin.com/in/aayush-shelar-166b99249/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan transition-colors text-sm font-medium">LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">Location</span>
            <span className="text-white/80 text-sm font-medium">Mumbai, Maharashtra, India</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-mono text-xs text-white/40 tracking-widest">
            © {new Date().getFullYear()} Aayush Shelar.
          </div>
          <button 
            onClick={scrollToTop}
            className="font-mono text-[11px] text-cyan tracking-widest hover:text-white transition-colors flex items-center gap-2"
          >
            {"// BACK TO TOP"}
          </button>
        </div>
      </div>
    </section>
  );
};
