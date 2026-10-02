'use client';

import React, { useState } from 'react';
import { SALON_BLOGS } from '../../data/prototypesData';
import { ArrowUpRight } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

export const SalonBlog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <section id="blog" className="relative py-24 bg-black border-b border-neutral-900 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 left-12 select-none pointer-events-none opacity-[0.03] text-white font-salon-display text-8xl sm:text-[160px] font-black tracking-widest">
        RECENT POSTS
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-mono font-semibold">
                GROOMING JOURNAL
              </span>
            </div>
            <h2 className="font-salon-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              OUR BLOG
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono max-w-sm">
            Expert grooming insights, beard maintenance techniques, and product guides from our master barbers.
          </p>
        </div>

        {/* 3 Editorial Cards with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SALON_BLOGS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
              className="group cursor-pointer bg-neutral-950 border border-neutral-900 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Graphic Thumbnail with Leica styling */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125"
                  containerClassName="w-full h-full"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />

                {/* Read time pill */}
                <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-neutral-800">
                  {post.readTime}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-red-500 font-semibold uppercase tracking-wider">
                    {post.date}
                  </div>
                  <h3 className="font-salon-display text-xl font-bold text-white tracking-wide group-hover:text-red-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <span className="font-salon-display tracking-wider">Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
