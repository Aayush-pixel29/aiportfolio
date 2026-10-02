import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Scissors, UtensilsCrossed, Stethoscope, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local Client Prototypes & Interactive Demos — Aayush Shelar',
  description: 'Explore live client acquisition demos tailored for local businesses including luxury salons, fine-dining restaurants, and dental/aesthetic clinics.',
  openGraph: {
    title: 'Local Client Prototypes & Interactive Demos — Aayush Shelar',
    description: 'Bespoke high-converting websites engineered for local businesses with zero-friction WhatsApp booking and order dispatch.',
    type: 'website',
  },
};

const demos = [
  {
    title: 'Luxury Salon & Wellness Studio',
    subtitle: 'Hair artistry, skin therapy, stylist selection & express WhatsApp booking.',
    href: '/demo/salon',
    badge: 'Live Prototype',
    image: '/images/demos/salon-hero.jpg',
    icon: <Scissors className="w-5 h-5 text-rose-400" />,
    color: 'rose',
    accentBorder: 'hover:border-rose-500/40',
    features: [
      'Master stylist profiles & bios',
      'Transparent service menus with duration',
      'Date & time slot concierge',
      'Pre-filled WhatsApp booking confirmation',
    ],
  },
  {
    title: 'Woodfired Bistro & Kitchen',
    subtitle: 'Digital food menu with veg/non-veg tags, interactive cart & WhatsApp ordering.',
    href: '/demo/restaurant',
    badge: 'Live Prototype',
    image: '/images/demos/restaurant-hero.jpg',
    icon: <UtensilsCrossed className="w-5 h-5 text-amber-400" />,
    color: 'amber',
    accentBorder: 'hover:border-amber-500/40',
    features: [
      'Interactive food catalog with spice levels',
      'Live shopping basket with +/- stepper',
      'Takeaway vs. doorstep delivery options',
      'Instant itemized WhatsApp receipt generator',
    ],
  },
  {
    title: 'Dental & Aesthetic Clinic',
    subtitle: 'Doctor credentials, clinical treatments, consultation fees & WhatsApp triage.',
    href: '/demo/clinic',
    badge: 'Live Prototype',
    image: '/images/demos/clinic-hero.jpg',
    icon: <Stethoscope className="w-5 h-5 text-cyan-400" />,
    color: 'cyan',
    accentBorder: 'hover:border-cyan-500/40',
    features: [
      'Doctor qualifications & registration badge',
      'Clear starting procedure fees',
      'Morning & evening slot scheduler',
      'Ethical demo notices & medical disclaimers',
    ],
  },
];

export default function DemoHubPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Acquisition Demo Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Converting Interactive Prototypes for{' '}
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h1>

          <p className="text-base text-zinc-400 leading-relaxed">
            Click into any live prototype below to experience the real-time client journey, mobile-first booking flows, and instant WhatsApp dispatch engine.
          </p>
        </div>

        {/* 3 Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.href}
              className={`p-5 sm:p-6 rounded-3xl bg-[#121318] border border-white/10 ${demo.accentBorder} transition-all duration-300 flex flex-col justify-between space-y-6 group hover:translate-y-[-2px] shadow-xl`}
            >
              <div className="space-y-4">
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/10">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    {demo.icon}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {demo.badge}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {demo.subtitle}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  {demo.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={demo.href}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
                >
                  <span>Launch Live Prototype</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-white/10 text-center space-y-3 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-white">Need a customized system for a different niche?</h3>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto">
            These templates are dynamically adaptable for coaching programs, fashion boutiques, home trade services, real estate, and local agencies.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              Return to Portfolio
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Aayush%2C%20I%20saw%20your%20local%20business%20prototypes%20and%20want%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Discuss Your Business</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
