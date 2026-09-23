"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PROFILE } from '../data/profile';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'AI & Agentic Systems',
    budget: '$3k – $10k',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); try { await fetch("https://formspree.io/f/xlgqrkel", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }); setSubmitted(true); } catch (err) { console.error("Formspree error", err); setSubmitted(true); } };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-[32px] sm:rounded-[44px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 shadow-2xl z-10 my-8 text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold block mb-2">
                Initiate Project / Commission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Let&apos;s Build Something Resilient
              </h2>
              <p className="text-sm text-[#D7E2EA]/70 mt-1 max-w-xl font-light">
                Open to selected freelance client systems, AI engineering roles, and production product builds.
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {/* Email Chip */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#B600A8] shrink-0" />
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs text-white hover:underline truncate"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Chip */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#7621B0] shrink-0" />
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="text-xs text-white hover:underline"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white mb-2">Message Dispatched!</h3>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md mx-auto font-light">
                  Thanks for reaching out! Aayush will get back to your email at{' '}
                  <span className="text-white font-medium">{formData.email || 'your inbox'}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-wider text-[#BBCCD7] hover:text-white underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1">
                      Target Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#161616] border border-white/10 text-white focus:outline-none focus:border-white/40 text-sm"
                    >
                      <option value="AI & Agentic Systems">AI &amp; Agentic Systems</option>
                      <option value="Full-Stack Web Products">Full-Stack Web Products</option>
                      <option value="Computer Vision & Edge AI">Computer Vision &amp; Edge AI</option>
                      <option value="Developer Tools & Automation">Developer Tools &amp; Automation</option>
                      <option value="Hardware & Embedded Software">Hardware &amp; Embedded Software</option>
                      <option value="General Engineering Role">General Engineering Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1">
                      Estimated Scope / Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#161616] border border-white/10 text-white focus:outline-none focus:border-white/40 text-sm"
                    >
                      <option value="< $3k">&lt; $3k (Prototype / MVP)</option>
                      <option value="$3k – $10k">$3k – $10k (Production System)</option>
                      <option value="$10k+">$10k+ (Comprehensive Architecture)</option>
                      <option value="Full-time Role">Full-time Engineering Role</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-1">
                    Project Details / Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you want to build, the technical constraints, or timelines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#BBCCD7] hover:text-white flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#BBCCD7] hover:text-white flex items-center gap-1"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 rounded-full uppercase tracking-widest text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
