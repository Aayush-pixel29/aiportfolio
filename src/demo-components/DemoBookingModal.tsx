'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';

export interface BookingModalService {
  id: string;
  name: string;
  price: number;
  durationMinutes?: number;
}

export interface BookingModalSpecialist {
  id: string;
  name: string;
  title: string;
}

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName: string;
  whatsappNumber: string;
  services: BookingModalService[];
  specialists?: BookingModalSpecialist[];
  timeSlots: {
    morning: string[];
    afternoon?: string[];
    evening: string[];
  };
  initialSelectedServiceId?: string;
  accentColor?: 'rose' | 'amber' | 'cyan' | 'emerald';
  modalTitle?: string;
  specialistLabel?: string;
  isMedicalClinic?: boolean;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  businessName,
  whatsappNumber,
  services,
  specialists = [],
  timeSlots,
  initialSelectedServiceId,
  accentColor = 'rose',
  modalTitle = 'Book Appointment',
  specialistLabel = 'Preferred Specialist',
  isMedicalClinic = false,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialSelectedServiceId || (services[0]?.id ?? '')
  );
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>(
    specialists[0]?.id ?? ''
  );

  // Generate next 7 selectable dates
  const [availableDates, setAvailableDates] = useState<{ dateStr: string; label: string; day: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialSelectedServiceId) {
      setSelectedServiceId(initialSelectedServiceId);
    }
  }, [initialSelectedServiceId]);

  useEffect(() => {
    // Generate dates dynamically
    const days: { dateStr: string; label: string; day: string }[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      const day = d.toLocaleDateString('en-US', { weekday: 'short' });
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      days.push({ dateStr, label, day: i === 0 ? 'Today' : day });
    }
    setAvailableDates(days);
    setSelectedDate(days[0]?.dateStr || '');

    // Default time slot
    if (timeSlots.morning && timeSlots.morning.length > 0) {
      setSelectedTime(timeSlots.morning[0]);
    }
  }, [timeSlots]);

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];
  const currentSpecialist = specialists.find((sp) => sp.id === selectedSpecialistId);

  const getAccentConfig = () => {
    switch (accentColor) {
      case 'amber':
        return {
          btn: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-amber-500/25',
          borderActive: 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold',
        };
      case 'cyan':
        return {
          btn: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-cyan-500/25',
          borderActive: 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-bold',
        };
      case 'emerald':
        return {
          btn: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black shadow-emerald-500/25',
          borderActive: 'border-emerald-400 bg-emerald-500/10 text-emerald-300 font-bold',
        };
      case 'rose':
      default:
        return {
          btn: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white shadow-rose-500/25',
          borderActive: 'border-rose-400 bg-rose-500/10 text-rose-300 font-bold',
        };
    }
  };

  const style = getAccentConfig();

  const formattedDateObj = availableDates.find((d) => d.dateStr === selectedDate);
  const dateDisplay = formattedDateObj ? `${formattedDateObj.day}, ${formattedDateObj.label}` : selectedDate;

  // Build live WhatsApp message preview
  const livePreviewMessage = `*NEW BOOKING INQUIRY — ${businessName.toUpperCase()}*\n` +
    `---------------------------------\n` +
    `👤 *Client Name:* ${customerName.trim() || 'Priya Sharma (Sample)'}\n` +
    `📱 *Phone:* ${customerPhone.trim() || '+91 98765 43210'}\n` +
    `✨ *Service:* ${currentService ? currentService.name : 'General Consultation'} (₹${currentService?.price || 0})\n` +
    (currentSpecialist ? `🧑‍⚕️ *${specialistLabel}:* ${currentSpecialist.name}\n` : '') +
    `📅 *Date:* ${dateDisplay}\n` +
    `⏰ *Time Slot:* ${selectedTime || '10:00 AM'}\n` +
    (customerNotes.trim() ? `📝 *Notes/Concern:* ${customerNotes.trim()}\n` : '') +
    `---------------------------------\n` +
    `(Generated via interactive web demo prototype)`;

  const handleConfirmWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!customerPhone.trim()) {
      setValidationError('Please enter your mobile phone number.');
      return;
    }
    setValidationError('');

    const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(livePreviewMessage)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#121318] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-white"
          >
            {/* Header */}
            <div className="p-4 sm:px-6 sm:py-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {modalTitle}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Live Demo
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {businessName} • Select your preference and preview the pre-filled WhatsApp message
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleConfirmWhatsApp} className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              {/* Service Selector */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  1. Select Service / Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                  {services.map((svc) => (
                    <button
                      type="button"
                      key={svc.id}
                      onClick={() => setSelectedServiceId(svc.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                        selectedServiceId === svc.id
                          ? style.borderActive
                          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-xs sm:text-sm truncate text-white">
                          {svc.name}
                        </p>
                        {svc.durationMinutes && (
                          <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-zinc-500" />
                            {svc.durationMinutes} mins
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-bold shrink-0 text-white">
                        ₹{svc.price.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialist Selection (if provided) */}
              {specialists.length > 0 && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    2. {specialistLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {specialists.map((sp) => (
                      <button
                        type="button"
                        key={sp.id}
                        onClick={() => setSelectedSpecialistId(sp.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedSpecialistId === sp.id
                            ? style.borderActive
                            : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                        }`}
                      >
                        <p className="font-semibold text-xs sm:text-sm text-white">
                          {sp.name}
                        </p>
                        <p className="text-[11px] text-zinc-400 mt-0.5 truncate">
                          {sp.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Date Picker (Horizontal slider/buttons) */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  {specialists.length > 0 ? '3.' : '2.'} Select Date
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {availableDates.map((d) => (
                    <button
                      type="button"
                      key={d.dateStr}
                      onClick={() => setSelectedDate(d.dateStr)}
                      className={`px-3.5 py-2.5 rounded-xl border text-center shrink-0 min-w-[72px] transition-all ${
                        selectedDate === d.dateStr
                          ? style.borderActive
                          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-400'
                      }`}
                    >
                      <span className="text-[10px] block uppercase font-medium">
                        {d.day}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                        {d.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  {specialists.length > 0 ? '4.' : '3.'} Preferred Time Slot
                </label>
                <div className="space-y-3">
                  {timeSlots.morning && timeSlots.morning.length > 0 && (
                    <div>
                      <span className="text-[11px] text-zinc-400 block mb-1.5 font-medium">
                        Morning
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.morning.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                              selectedTime === slot
                                ? style.borderActive
                                : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {timeSlots.afternoon && timeSlots.afternoon.length > 0 && (
                    <div>
                      <span className="text-[11px] text-zinc-400 block mb-1.5 font-medium">
                        Afternoon
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.afternoon.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                              selectedTime === slot
                                ? style.borderActive
                                : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {timeSlots.evening && timeSlots.evening.length > 0 && (
                    <div>
                      <span className="text-[11px] text-zinc-400 block mb-1.5 font-medium">
                        Evening
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.evening.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                              selectedTime === slot
                                ? style.borderActive
                                : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  {specialists.length > 0 ? '5.' : '4.'} Your Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 block mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] text-zinc-400 block mb-1">
                      Special Notes / Concern (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Looking for textured cut / mild tooth sensitivity"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-white/40 focus:outline-none text-white text-xs sm:text-sm placeholder:text-zinc-600"
                    />
                  </div>
                </div>
              </div>

              {validationError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Medical disclaimer in clinic mode */}
              {isMedicalClinic && (
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-200/90 leading-relaxed">
                  <strong>Notice:</strong> This is a demo appointment scheduler. It does not replace emergency medical triage or real doctor diagnosis.
                </div>
              )}

              {/* Realistic WhatsApp Message Preview Bubble */}
              <div className="rounded-2xl border border-emerald-500/30 bg-[#075e54]/10 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Live WhatsApp Dispatch Preview</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                    Pre-filled automatically
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#1f2c34] text-xs font-mono text-zinc-200 whitespace-pre-line border border-white/10 leading-relaxed shadow-inner">
                  {livePreviewMessage}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl active:scale-95 ${style.btn}`}
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Confirm & Book on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-zinc-500 mt-2">
                  Opens WhatsApp with all details pre-filled. Zero third-party fees.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
