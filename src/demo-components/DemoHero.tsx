'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight, MapPin, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

interface QuickFeature {
  icon: React.ReactNode;
  text: string;
}

interface DemoHeroProps {
  businessName: string;
  badgeText?: string;
  headline: string;
  highlightedText?: string;
  subheadline: string;
  rating: number;
  reviewCount: number;
  primaryCtaText: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  locationText: string;
  openingHoursPreview: string;
  quickFeatures: QuickFeature[];
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
  heroImage?: string;
}

export const DemoHero: React.FC<DemoHeroProps> = ({
  businessName,
  badgeText = 'Interactive Demo — Replace with Your Business Details',
  headline,
  highlightedText,
  subheadline,
  rating,
  reviewCount,
  primaryCtaText,
  secondaryCtaText = 'Explore Offerings',
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  locationText,
  openingHoursPreview,
  quickFeatures,
  accentColor = 'rose',
  heroImage,
}) => {
  const getAccentConfig = () => {
    switch (accentColor) {
      case 'amber':
        return {
          glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          gradientText: 'from-amber-200 via-amber-400 to-orange-400',
          ctaPrimary: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-amber-500/25',
          borderAccent: 'border-amber-500/20',
          dot: 'bg-amber-400',
        };
      case 'cyan':
        return {
          glow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          gradientText: 'from-cyan-200 via-sky-400 to-blue-400',
          ctaPrimary: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-cyan-500/25',
          borderAccent: 'border-cyan-500/20',
          dot: 'bg-cyan-400',
        };
      case 'emerald':
        return {
          glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          gradientText: 'from-emerald-200 via-teal-300 to-emerald-400',
          ctaPrimary: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black shadow-emerald-500/25',
          borderAccent: 'border-emerald-500/20',
          dot: 'bg-emerald-400',
        };
      case 'rose':
      default:
        return {
          glow: 'from-rose-500/20 via-purple-500/10 to-transparent',
          badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
          gradientText: 'from-rose-200 via-pink-400 to-rose-400',
          ctaPrimary: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white shadow-rose-500/25',
          borderAccent: 'border-rose-500/20',
          dot: 'bg-rose-400',
        };
    }
  };

  const style = getAccentConfig();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-white/10">
      {/* Background radial glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b ${style.glow} blur-3xl pointer-events-none -z-10`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Top Demo Notice Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-zinc-300">{badgeText}</span>
          </div>

          {/* Social Proof Star Pill & Location */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">{rating.toFixed(1)}</span>
              <span className="text-zinc-400">({reviewCount}+ sample reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs px-2 py-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{locationText}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            {headline}{' '}
            {highlightedText && (
              <span className={`bg-gradient-to-r ${style.gradientText} bg-clip-text text-transparent`}>
                {highlightedText}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {subheadline}
          </p>

          {/* 10-Second Business Owner Explainer Banner */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs max-w-xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-zinc-300 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>10-Second Demo:</strong> Pick an item → Tap book/order → Pre-fills WhatsApp instantly.
              </span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onPrimaryCtaClick}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 ${style.ctaPrimary}`}
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onSecondaryCtaClick && (
              <button
                onClick={onSecondaryCtaClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>{secondaryCtaText}</span>
              </button>
            )}
          </div>

          {/* Quick Hours Note */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>Operating Hours: {openingHoursPreview}</span>
          </div>

          {/* Hero Visual Showcase Photo (if provided) */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="pt-6"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 aspect-[16/9] max-w-4xl mx-auto group">
                <Image
                  src={heroImage}
                  alt={`${businessName} Showcase`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 inline-block mb-1.5">
                    Flagship Atmosphere
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white drop-shadow-md">
                    {businessName}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Value Highlights */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
            {quickFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center sm:justify-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300"
              >
                <div className="text-zinc-400">{feat.icon}</div>
                <span className="font-medium truncate">{feat.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
