'use client';

import React, { useState } from 'react';
import { Scissors, Phone, MapPin, Mail, Check } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const SalonFooter: React.FC = () => {
  const { showNotification } = useDemo();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showNotification(`Subscribed ${email} to Barbercrop newsletter!`);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer id="contacts" className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Logo & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="font-salon-display text-2xl font-bold tracking-wider text-white">
                BARBERCROP
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-light max-w-sm">
              Premium gentleman grooming and traditional hot towel shave atelier. Dedicated to precision craft, luxury pomades, and uncompromising styling since 2015.
            </p>
          </div>

          {/* Col 2: Studio Locations */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-salon-display text-lg font-bold text-white tracking-wider">
              FLAGSHIP STUDIO
            </h4>
            <div className="flex items-center gap-2 text-neutral-400">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors font-mono">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-start gap-2 text-neutral-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>331 Linking Road, Khar / Bandra West, Mumbai 400052</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:appointments@barbercrop-mumbai.com" className="hover:text-white transition-colors">
                appointments@barbercrop-mumbai.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-3">
              <a href="#contacts" aria-label="Facebook" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12z"/></svg>
              </a>
              <a href="#contacts" aria-label="Twitter / X" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#contacts" aria-label="Instagram" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 3: Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-salon-display text-lg font-bold text-white tracking-wider">
              SUBSCRIBE OUR NEWSLETTER
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Receive exclusive grooming offers, seasonal hair care tips, and master barber availability.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-600 transition-colors"
              />
              <button
                type="submit"
                className="px-5 bg-red-600 hover:bg-red-700 text-white font-salon-display text-xs tracking-wider font-semibold transition-colors shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4" /> : 'SUBSCRIBE'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-600">
          <div>BARBERCROP ©. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-400">Terms of Service</a>
            <a href="#cookies" className="hover:text-neutral-400">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
