'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { clinicData } from '@/data/demos/clinic';
import { DemoNavbar } from '@/demo-components/DemoNavbar';
import { DemoHero } from '@/demo-components/DemoHero';
import { DemoSocialProof } from '@/demo-components/DemoSocialProof';
import { DemoBookingModal } from '@/demo-components/DemoBookingModal';
import { DemoContactSection } from '@/demo-components/DemoContactSection';
import { DemoFooter } from '@/demo-components/DemoFooter';
import { WhatsAppCTA } from '@/demo-components/WhatsAppCTA';
import {
  Stethoscope,
  ShieldCheck,
  Award,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  FileCheck2,
  HeartPulse,
  Info,
} from 'lucide-react';

export const ClinicView: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(clinicData.treatments[0].id);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('11:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientConcern, setPatientConcern] = useState('');
  const [formError, setFormError] = useState('');

  const navItems = [
    { label: 'Doctor Profile', href: '#doctor-spotlight' },
    { label: 'Treatments & Fees', href: '#treatments-section' },
    { label: 'Express Booking', href: '#express-booking' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Hours & Location', href: '#location-hours' },
  ];

  const currentTreatment =
    clinicData.treatments.find((t) => t.id === selectedTreatmentId) || clinicData.treatments[0];

  const liveClinicMessage =
    `*NEW CLINIC APPOINTMENT REQUEST — ${clinicData.businessName.toUpperCase()}*\n` +
    `---------------------------------\n` +
    `👤 *Patient Name:* ${patientName.trim() || 'Vikram Malhotra (Sample)'}\n` +
    `📱 *Phone:* ${patientPhone.trim() || '+91 98765 43210'}\n` +
    `🧑‍⚕️ *Consulting Doctor:* ${clinicData.doctor.name}\n` +
    `🩺 *Treatment / Concern:* ${currentTreatment.name} (Starting ₹${currentTreatment.startingFee})\n` +
    `📅 *Preferred Date:* ${selectedDate}\n` +
    `⏰ *Preferred Slot:* ${selectedSlot}\n` +
    (patientConcern.trim() ? `📝 *Reported Symptoms:* ${patientConcern.trim()}\n` : '') +
    `---------------------------------\n` +
    `(Generated via interactive healthcare clinic demo prototype)`;

  const handleInPageBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!patientPhone.trim()) {
      setFormError('Please enter your WhatsApp contact number.');
      return;
    }
    setFormError('');

    const cleanPhone = clinicData.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(liveClinicMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* Clinic Local Navigation */}
      <DemoNavbar
        businessName={clinicData.businessName}
        tagline={clinicData.tagline}
        phone={clinicData.contact.phone}
        displayPhone={clinicData.contact.displayPhone}
        navItems={navItems}
        primaryCtaLabel="Schedule Visit"
        onPrimaryCtaClick={() => setIsBookingOpen(true)}
        accentColor="cyan"
        badgeText="Healthcare Demo Prototype"
      />

      {/* Hero Section */}
      <DemoHero
        businessName={clinicData.businessName}
        badgeText="Interactive Demo — Replace with Your Business Details"
        headline="Advanced Dental Excellence &"
        highlightedText="Gentle Patient Care"
        subheadline={clinicData.shortDescription}
        rating={clinicData.rating}
        reviewCount={clinicData.reviewCount}
        heroImage={clinicData.heroImage}
        primaryCtaText="Book Doctor Consultation"
        secondaryCtaText="View Treatments & Fees"
        onPrimaryCtaClick={() => setIsBookingOpen(true)}
        onSecondaryCtaClick={() => {
          document.getElementById('treatments-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        locationText={`${clinicData.contact.area}, ${clinicData.contact.city}`}
        openingHoursPreview="Mon - Sat: 09:30 AM – 08:30 PM (Sun By Appt)"
        accentColor="cyan"
        quickFeatures={[
          { icon: <HeartPulse className="w-4 h-4 text-cyan-400" />, text: 'Painless Digital Laser Dentistry' },
          { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: 'Sterilization Level 4 Protocols' },
          { icon: <FileCheck2 className="w-4 h-4 text-sky-400" />, text: 'Transparent Fees • No Hidden Add-ons' },
        ]}
      />

      {/* Prominent Medical Disclaimer Banner */}
      <section className="bg-cyan-950/20 border-b border-cyan-500/20 py-3.5 px-4 text-xs text-center text-cyan-200/90">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Demo Prototype Notice:</strong> This website is an interactive demonstration for prospective healthcare clients. Information shown is fictional. No medical diagnosis or professional clinical advice is rendered.
          </span>
        </div>
      </section>

      {/* Doctor Profile Spotlight Section */}
      <section id="doctor-spotlight" className="py-16 sm:py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Doctor Photo & Credential Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121318] border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full" />

                {/* Doctor Portrait Image */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-cyan-500/20 bg-zinc-900 shadow-lg">
                  <Image
                    src={clinicData.doctor.photoUrl || '/images/demos/clinic-doctor.jpg'}
                    alt={clinicData.doctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40 text-[10px] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Doctor</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cyan-500/30 inline-block mb-1">
                      Lead Dental Specialist
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {clinicData.doctor.name}
                    </h3>
                    <p className="text-xs text-cyan-100/90 font-medium">
                      {clinicData.doctor.degree}
                    </p>
                  </div>
                </div>

                <div className="py-4 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Clinical Experience</span>
                    <span className="font-bold text-white">{clinicData.doctor.experienceYears}+ Years Active Practice</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Medical Registration</span>
                    <span className="font-mono text-zinc-300">{clinicData.doctor.regNumber}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">First Consultation Fee</span>
                    <span className="font-bold text-cyan-400 text-sm">₹{clinicData.doctor.consultationFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Languages Spoken</span>
                    <span className="text-zinc-300">{clinicData.doctor.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Consult with {clinicData.doctor.name.split(',')[0]}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Specialties */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  About the Specialist
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Empathetic Dentistry Backed by Modern Digital Precision
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {clinicData.doctor.bio}
                </p>
              </div>

              {/* Education / Credentials List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Academic Credentials & Certifications
                </h4>
                <div className="space-y-2">
                  {clinicData.doctor.education.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-zinc-300"
                    >
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3D Intraoral Diagnostic Scans</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Autoclave Class-B Sterilization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments & Starting Consultation Fees Grid */}
      <section id="treatments-section" className="py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Clinical Procedures
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Diagnostic & Restorative Treatments
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Clear starting fees and expected consultation times. Select any treatment to schedule directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clinicData.treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 font-medium">
                      {treatment.category}
                    </span>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {treatment.durationMinutes} mins
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {treatment.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Common concerns addressed */}
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-zinc-500 block mb-1">
                      Common Indications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.commonConcerns.map((c, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-medium block">
                      Starting Fee
                    </span>
                    <span className="text-lg font-black text-white">
                      ₹{treatment.startingFee.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTreatmentId(treatment.id);
                      setIsBookingOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-all shadow-md shadow-cyan-500/20 active:scale-95 flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Slot</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Page Quick Appointment Concierge */}
      <section id="express-booking" className="py-14 sm:py-20 border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#121318] border border-cyan-500/30 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Direct Clinic Desk Dispatch
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request an Appointment via WhatsApp
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill in your preferred day and time. Watch the WhatsApp message format in real time below.
              </p>
            </div>

            <form onSubmit={handleInPageBooking} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-300 font-medium block mb-1">
                    Selected Procedure / Concern
                  </label>
                  <select
                    value={selectedTreatmentId}
                    onChange={(e) => setSelectedTreatmentId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium focus:outline-none"
                  >
                    {clinicData.treatments.map((t) => (
                      <option key={t.id} value={t.id} className="bg-zinc-900 text-white">
                        {t.name} (from ₹{t.startingFee})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-zinc-300 font-medium block mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-medium focus:outline-none"
                  >
                    {[...clinicData.timeSlots.morning, ...clinicData.timeSlots.evening].map((s) => (
                      <option key={s} value={s} className="bg-zinc-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-zinc-300 font-medium block mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Malhotra"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-zinc-300 font-medium block mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-zinc-300 font-medium block mb-1">
                    Brief Description of Dental Concern (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mild sensitivity when drinking cold water since two days"
                    value={patientConcern}
                    onChange={(e) => setPatientConcern(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Realistic WhatsApp Message Preview Bubble */}
              <div className="rounded-2xl border border-cyan-500/30 bg-[#075e54]/10 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Live WhatsApp Dispatch Preview</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                    Updates in real time
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1f2c34] text-xs font-mono text-zinc-200 whitespace-pre-line border border-white/10 leading-relaxed shadow-inner">
                  {liveClinicMessage}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-cyan-500/25 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Confirm Appointment via WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-zinc-500 mt-2">
                  Direct connection with clinic coordinator. No third-party convenience charges.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Patient Reviews & Social Proof */}
      <div id="reviews">
        <DemoSocialProof
          businessName={clinicData.businessName}
          rating={clinicData.rating}
          reviewCount={clinicData.reviewCount}
          reviews={clinicData.reviews}
          accentColor="cyan"
        />
      </div>

      {/* Hours, Clinic Address & Directions */}
      <DemoContactSection
        businessName={clinicData.businessName}
        contact={clinicData.contact}
        openingHours={clinicData.openingHours}
        accentColor="cyan"
      />

      {/* Footer */}
      <DemoFooter
        businessName={clinicData.businessName}
        tagline={clinicData.tagline}
        phone={clinicData.contact.displayPhone}
        email={clinicData.contact.email}
        address={clinicData.contact.address}
        city={clinicData.contact.city}
      />

      {/* Reusable Booking Modal */}
      <DemoBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        businessName={clinicData.businessName}
        whatsappNumber={clinicData.contact.whatsappNumber}
        services={clinicData.treatments.map((t) => ({
          id: t.id,
          name: t.name,
          price: t.startingFee,
          durationMinutes: t.durationMinutes,
        }))}
        specialists={[
          {
            id: clinicData.doctor.id,
            name: clinicData.doctor.name,
            title: clinicData.doctor.specialty,
          },
        ]}
        timeSlots={clinicData.timeSlots}
        initialSelectedServiceId={selectedTreatmentId}
        accentColor="cyan"
        modalTitle="Schedule Clinic Consultation"
        specialistLabel="Attending Doctor"
        isMedicalClinic={true}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppCTA
        phoneNumber={clinicData.contact.whatsappNumber}
        defaultMessage={`Hi ${clinicData.businessName}, I would like to schedule a consultation with ${clinicData.doctor.name}.`}
        buttonLabel="WhatsApp Consultation"
        businessName={clinicData.businessName}
      />
    </div>
  );
};
