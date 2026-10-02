'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
import { DemoContactInfo, DemoOpeningHours } from '@/data/demos/types';

interface DemoContactSectionProps {
  businessName: string;
  contact: DemoContactInfo;
  openingHours: DemoOpeningHours[];
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
}

export const DemoContactSection: React.FC<DemoContactSectionProps> = ({
  businessName,
  contact,
  openingHours,
  accentColor = 'rose',
}) => {
  const getAccentClass = () => {
    switch (accentColor) {
      case 'amber':
        return {
          icon: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          btn: 'bg-amber-500 hover:bg-amber-400 text-black',
        };
      case 'cyan':
        return {
          icon: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
          btn: 'bg-cyan-500 hover:bg-cyan-400 text-black',
        };
      case 'emerald':
        return {
          icon: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          btn: 'bg-emerald-500 hover:bg-emerald-400 text-black',
        };
      case 'rose':
      default:
        return {
          icon: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
          btn: 'bg-rose-500 hover:bg-rose-400 text-white',
        };
    }
  };

  const style = getAccentClass();
  const cleanPhone = contact.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="location-hours" className="py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Location & Operating Hours
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Conveniently situated with dedicated parking and rapid direct communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Details & Actions Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-400" />
              <span>Studio Address & Inquiries</span>
            </h3>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl border shrink-0 mt-0.5 ${style.icon}`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-medium">{contact.address}</strong>
                  <span className="text-xs text-zinc-400">{contact.area}, {contact.city}</span>
                  {contact.landmark && (
                    <span className="text-xs text-zinc-500 block mt-0.5">
                      Landmark: {contact.landmark}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl border shrink-0 ${style.icon}`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-medium">Direct Telephone</strong>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs text-zinc-300 hover:text-white transition-colors"
                  >
                    {contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl border shrink-0 ${style.icon}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-medium">Email Inquiries</strong>
                  <span className="text-xs text-zinc-400">{contact.email}</span>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${businessName}, I would like to inquire about your timings and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={contact.mapEmbedUrl || `https://maps.google.com/?q=${encodeURIComponent(`${contact.address}, ${contact.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-zinc-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Operating Hours & Interactive Map Preview */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>Weekly Operating Hours</span>
            </h3>

            <div className="space-y-2.5">
              {openingHours.map((slot, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm"
                >
                  <span className="font-medium text-zinc-300">{slot.days}</span>
                  <span
                    className={
                      slot.isClosed
                        ? 'text-rose-400 font-semibold'
                        : 'text-emerald-400 font-semibold'
                    }
                  >
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Stylized Map Mockup Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161822] h-44 flex flex-col items-center justify-center text-center p-4">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3457ff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    {businessName} • {contact.area}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Live GPS Google Map Integration available
                  </p>
                </div>
                <a
                  href={contact.mapEmbedUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
