'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { salonData } from '@/data/demos/salon';
import { DemoNavbar } from '@/demo-components/DemoNavbar';
import { DemoHero } from '@/demo-components/DemoHero';
import { DemoServicesGrid, DisplayItem } from '@/demo-components/DemoServicesGrid';
import { DemoSocialProof } from '@/demo-components/DemoSocialProof';
import { DemoBookingModal } from '@/demo-components/DemoBookingModal';
import { DemoContactSection } from '@/demo-components/DemoContactSection';
import { DemoFooter } from '@/demo-components/DemoFooter';
import { WhatsAppCTA } from '@/demo-components/WhatsAppCTA';
import {
  Sparkles,
  Scissors,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Shield,
  Star,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export const SalonView: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(salonData.services[0].id);
  const [selectedStylistId, setSelectedStylistId] = useState(salonData.stylists[0].id);
  const [inPageDate, setInPageDate] = useState('Tomorrow');
  const [inPageTime, setInPageTime] = useState('04:30 PM');

  const navItems = [
    { label: 'Services & Pricing', href: '#services-grid' },
    { label: 'Master Stylists', href: '#stylists' },
    { label: 'Express Booking', href: '#express-booking' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Hours & Location', href: '#location-hours' },
  ];

  const categories = [
    { id: 'hair artistry', name: 'Hair Artistry' },
    { id: 'color & highlights', name: 'Color & Highlights' },
    { id: 'skin & facial therapy', name: 'Skin & Facial Therapy' },
    { id: 'occasion & nails', name: 'Occasion & Nails' },
  ];

  const displayServices: DisplayItem[] = salonData.services.map((s) => ({
    id: s.id,
    category: s.category,
    name: s.name,
    description: s.description,
    price: s.price,
    durationMinutes: s.durationMinutes,
    popular: s.popular,
    tag: s.tag,
    image: s.image,
  }));

  const handleSelectServiceFromGrid = (item: DisplayItem) => {
    setSelectedServiceId(item.id);
    setIsBookingOpen(true);
  };

  const handleBookWithStylist = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    setIsBookingOpen(true);
  };

  const currentService = salonData.services.find((s) => s.id === selectedServiceId) || salonData.services[0];
  const currentStylist = salonData.stylists.find((s) => s.id === selectedStylistId) || salonData.stylists[0];

  const liveSimulatorMessage =
    `*SALON APPOINTMENT REQUEST — ${salonData.businessName.toUpperCase()}*\n` +
    `---------------------------------\n` +
    `✨ *Service:* ${currentService.name} (₹${currentService.price})\n` +
    `💇 *Stylist:* ${currentStylist.name}\n` +
    `📅 *Preferred Day:* ${inPageDate}\n` +
    `⏰ *Preferred Slot:* ${inPageTime}\n` +
    `---------------------------------\n` +
    `Please confirm slot availability for this appointment. Thank you!`;

  // In-page direct WhatsApp booking action
  const handleDirectInPageBooking = () => {
    const cleanPhone = salonData.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(liveSimulatorMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* Local Business Navigation */}
      <DemoNavbar
        businessName={salonData.businessName}
        tagline={salonData.tagline}
        phone={salonData.contact.phone}
        displayPhone={salonData.contact.displayPhone}
        navItems={navItems}
        primaryCtaLabel="Book Appointment"
        onPrimaryCtaClick={() => setIsBookingOpen(true)}
        accentColor="rose"
        badgeText="Salon Demo Prototype"
      />

      {/* Hero Section */}
      <DemoHero
        businessName={salonData.businessName}
        badgeText="Interactive Demo — Replace with Your Business Details"
        headline="Where Precision Shears Meet"
        highlightedText="Artisanal Hair & Skin Care"
        subheadline={salonData.shortDescription}
        rating={salonData.rating}
        reviewCount={salonData.reviewCount}
        primaryCtaText="Book Appointment"
        secondaryCtaText="View Service Menu"
        onPrimaryCtaClick={() => setIsBookingOpen(true)}
        onSecondaryCtaClick={() => {
          document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
        }}
        locationText={`${salonData.contact.area}, ${salonData.contact.city}`}
        openingHoursPreview="Tue - Sun: 10:00 AM – 08:30 PM (Mondays Closed)"
        accentColor="rose"
        heroImage={salonData.heroImage}
        quickFeatures={[
          { icon: <Scissors className="w-4 h-4 text-rose-400" />, text: 'Master Stylists & Colorists' },
          { icon: <Sparkles className="w-4 h-4 text-purple-400" />, text: 'Olaplex & Organic Botanicals' },
          { icon: <Shield className="w-4 h-4 text-emerald-400" />, text: 'Zero Pre-Payment Required' },
        ]}
      />

      {/* Services & Pricing Section */}
      <DemoServicesGrid
        title="Curated Services & Transparent Pricing"
        subtitle="Select any treatment below to immediately preview your appointment summary or customize your booking."
        categories={categories}
        items={displayServices}
        selectedItemIds={[selectedServiceId]}
        onSelectItem={handleSelectServiceFromGrid}
        ctaButtonText="Book This"
        currencySymbol="₹"
        accentColor="rose"
      />

      {/* Stylist Selection Section */}
      <section id="stylists" className="py-16 sm:py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Meet the Artisans
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Choose Your Dedicated Specialist
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Every stylist at {salonData.businessName} brings certified international training and meticulous craft to every session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {salonData.stylists.map((st) => (
              <div
                key={st.id}
                className="p-5 sm:p-6 rounded-3xl bg-[#121318] border border-white/10 flex flex-col justify-between space-y-4 hover:border-rose-500/40 hover:shadow-2xl transition-all group overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Stylist Portrait Photo */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                    {st.photoUrl ? (
                      <Image
                        src={st.photoUrl}
                        alt={st.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl bg-rose-500/10">
                        {st.avatar || '✨'}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                        {st.experience}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {st.name}
                    </h3>
                    <p className="text-xs text-rose-300 font-medium">
                      {st.title}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {st.specialty}
                  </p>
                </div>

                <button
                  onClick={() => handleBookWithStylist(st.id)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-rose-500 text-zinc-200 hover:text-white border border-white/10 hover:border-transparent text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {st.name.split(' ')[0]}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick-Booking Concierge Bar */}
      <section id="express-booking" className="py-14 sm:py-20 border-b border-white/10 bg-gradient-to-b from-rose-950/20 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#121318] border border-rose-500/20 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  Express Booking Simulator
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Instant WhatsApp Booking Confirmation
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Change any field below to watch the WhatsApp message automatically format in real time.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-zinc-400 block">Calculated Total</span>
                <span className="text-2xl font-black text-white">₹{currentService.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {/* Selected Service */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-zinc-400 font-medium block">1. Service</span>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  {salonData.services.map((s) => (
                    <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                      {s.name} (₹{s.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Stylist */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-zinc-400 font-medium block">2. Stylist</span>
                <select
                  value={selectedStylistId}
                  onChange={(e) => setSelectedStylistId(e.target.value)}
                  className="w-full bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  {salonData.stylists.map((st) => (
                    <option key={st.id} value={st.id} className="bg-zinc-900 text-white">
                      {st.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Day */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-zinc-400 font-medium block">3. Day</span>
                <select
                  value={inPageDate}
                  onChange={(e) => setInPageDate(e.target.value)}
                  className="w-full bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="Today" className="bg-zinc-900 text-white">Today</option>
                  <option value="Tomorrow" className="bg-zinc-900 text-white">Tomorrow</option>
                  <option value="This Saturday" className="bg-zinc-900 text-white">This Saturday</option>
                  <option value="This Sunday" className="bg-zinc-900 text-white">This Sunday</option>
                </select>
              </div>

              {/* Preferred Slot */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-zinc-400 font-medium block">4. Time Slot</span>
                <select
                  value={inPageTime}
                  onChange={(e) => setInPageTime(e.target.value)}
                  className="w-full bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  {[
                    ...salonData.timeSlots.morning,
                    ...salonData.timeSlots.afternoon,
                    ...salonData.timeSlots.evening,
                  ].map((slot) => (
                    <option key={slot} value={slot} className="bg-zinc-900 text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live WhatsApp Message Preview */}
            <div className="rounded-2xl border border-rose-500/20 bg-[#075e54]/10 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Real-Time WhatsApp Message Preview</span>
                </span>
                <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                  Updates dynamically
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1f2c34] text-xs font-mono text-zinc-200 whitespace-pre-line border border-white/10 leading-relaxed shadow-inner">
                {liveSimulatorMessage}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero advance deposit • Instant confirmation directly with the salon desk</span>
              </div>

              <button
                onClick={handleDirectInPageBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold text-sm shadow-xl shadow-rose-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book Appointment on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Reviews */}
      <div id="reviews">
        <DemoSocialProof
          businessName={salonData.businessName}
          rating={salonData.rating}
          reviewCount={salonData.reviewCount}
          reviews={salonData.reviews}
          accentColor="rose"
        />
      </div>

      {/* Location, Map & Hours */}
      <DemoContactSection
        businessName={salonData.businessName}
        contact={salonData.contact}
        openingHours={salonData.openingHours}
        accentColor="rose"
      />

      {/* Footer */}
      <DemoFooter
        businessName={salonData.businessName}
        tagline={salonData.tagline}
        phone={salonData.contact.displayPhone}
        email={salonData.contact.email}
        address={salonData.contact.address}
        city={salonData.contact.city}
      />

      {/* Reusable Booking Modal */}
      <DemoBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        businessName={salonData.businessName}
        whatsappNumber={salonData.contact.whatsappNumber}
        services={salonData.services.map((s) => ({
          id: s.id,
          name: s.name,
          price: s.price,
          durationMinutes: s.durationMinutes,
        }))}
        specialists={salonData.stylists.map((st) => ({
          id: st.id,
          name: st.name,
          title: st.title,
        }))}
        timeSlots={salonData.timeSlots}
        initialSelectedServiceId={selectedServiceId}
        accentColor="rose"
        modalTitle="Book Salon Appointment"
        specialistLabel="Preferred Stylist"
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppCTA
        phoneNumber={salonData.contact.whatsappNumber}
        defaultMessage={`Hi ${salonData.businessName}, I would like to book a salon appointment.`}
        buttonLabel="Book on WhatsApp"
        businessName={salonData.businessName}
      />
    </div>
  );
};
