'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppCTAProps {
  phoneNumber: string;
  defaultMessage: string;
  buttonLabel?: string;
  businessName?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  phoneNumber,
  defaultMessage,
  buttonLabel = 'Chat on WhatsApp',
}) => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      {/* Floating Action Button for Desktop & Tablet */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 hidden sm:block">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-[#25D366]" />
          <span className="tracking-wide">{buttonLabel}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-white font-medium">
            Fast Reply
          </span>
        </a>
      </div>

      {/* Floating Button for Mobile */}
      <div className="fixed bottom-6 right-4 z-40 sm:hidden">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={buttonLabel}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] active:bg-[#20bd5a] text-white shadow-xl shadow-emerald-500/40 transition-transform active:scale-95 border border-white/20"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </a>
      </div>
    </>
  );
};
