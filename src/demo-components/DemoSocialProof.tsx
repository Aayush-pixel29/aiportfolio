'use client';

import React from 'react';
import { Star, CheckCircle2, MessageSquare, ThumbsUp, ShieldCheck } from 'lucide-react';
import { DemoReview } from '@/data/demos/types';

interface DemoSocialProofProps {
  businessName: string;
  rating: number;
  reviewCount: number;
  reviews: DemoReview[];
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
}

export const DemoSocialProof: React.FC<DemoSocialProofProps> = ({
  businessName,
  rating,
  reviewCount,
  reviews,
  accentColor = 'rose',
}) => {
  const getBadgeClass = () => {
    switch (accentColor) {
      case 'amber':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'cyan':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'emerald':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'rose':
      default:
        return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
    }
  };

  const badgeStyle = getBadgeClass();

  return (
    <section className="py-16 sm:py-24 border-b border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fictional Demonstration Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Client Experience & Reputation
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Preview of customer testimonials, review score modules, and social proof sections ready for {businessName}.
          </p>
        </div>

        {/* Overall Score Badge */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-black text-white">{rating.toFixed(1)}</span>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-400">Overall Rating Score</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="text-xs text-zinc-400 text-center sm:text-left">
            <strong className="text-white block font-semibold">{reviewCount}+ Customer Ratings</strong>
            <span>Based on sample booking feedback</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Direct WhatsApp Inquiries</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.tag && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                      {rev.tag}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">{rev.author}</span>
                <span className="text-[11px] text-zinc-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
