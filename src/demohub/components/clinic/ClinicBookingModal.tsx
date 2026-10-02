'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { CLINIC_SERVICES } from '../../data/prototypesData';
import { X, Calendar, Clock, CheckCircle, User, Mail, Phone, Heart, MessageCircle } from 'lucide-react';

export const ClinicBookingModal: React.FC = () => {
  const { activeModal, closeModal, showNotification } = useDemo();

  const [service, setService] = useState('cosmetic');
  const [doctor, setDoctor] = useState('Dr. Priya Sharma, MDS (Aesthetic & Smile Architecture)');
  const [date, setDate] = useState('Tomorrow');
  const [time, setTime] = useState('11:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (activeModal !== 'clinic-booking') return null;

  const doctors = [
    'Dr. Priya Sharma, BDS, MDS (Aesthetic & Smile Architecture - AIIMS New Delhi)',
    'Dr. Vikram Malhotra, MDS (Guided Implantology & Oral Surgery)',
    'Dr. Sneha Kulkarni, MDS (Invisible Orthodontics & Clear Aligners)',
    'Dr. Rohan Deshmukh, MDS (Endodontics & Single-Visit RCT)'
  ];

  const slots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:30 PM', '5:00 PM', '6:30 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setConfirmed(true);
    showNotification(`Consultation scheduled for ${name}!`);
  };

  const handleReset = () => {
    setConfirmed(false);
    setName('');
    setPhone('');
    closeModal();
  };

  const waMessage = `*NEW APPOINTMENT — EVERMILES DENTAL CLINIC*\n` +
    `👤 *Patient:* ${name}\n` +
    `📱 *Phone:* ${phone}\n` +
    `🩺 *Specialty:* ${service}\n` +
    `🧑‍⚕️ *Consultant:* ${doctor.split('(')[0].trim()}\n` +
    `📅 *Preferred Slot:* ${date} at ${time}\n` +
    `📍 *Clinic:* Evermiles Dental Clinic, Linking Road, Khar / Bandra West, Mumbai`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-neutral-800">
        
        {/* Header */}
        <div className="bg-[#0B1E19] text-white px-6 py-5 flex items-center justify-between border-b border-emerald-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-800/60 flex items-center justify-center text-emerald-300">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-clinic-serif text-lg font-bold">EVERMILES · Consultation Booking</h3>
              <p className="text-[10px] text-emerald-300 font-clinic-sans">Personalized Dental Treatment Plan · Khar / Bandra West</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-clinic-serif text-2xl font-bold text-neutral-900">
                  Appointment Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-neutral-900">{name}</span>. We look forward to welcoming you to Evermiles Clinic.
                </p>
              </div>

              <div className="p-4 bg-[#F8F7F4] rounded-2xl border border-neutral-200 text-xs text-left space-y-2 max-w-md mx-auto font-clinic-sans">
                <div className="flex justify-between text-neutral-700">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-bold capitalize">{service}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span className="text-neutral-500">Specialist:</span>
                  <span className="font-medium">{doctor.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span className="text-neutral-500">Scheduled Time:</span>
                  <span className="text-emerald-800 font-bold">{date} at {time}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span className="text-neutral-500">Clinic Address:</span>
                  <span>Suite 402, MediPark Towers, Linking Rd, Bandra W, Mumbai</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-clinic-sans text-xs font-bold tracking-wide transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-full font-clinic-sans text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-clinic-sans">
              
              {/* Treatment Type */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-800">Select Specialty Treatment</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CLINIC_SERVICES.map(s => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                        service === s.id
                          ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold shadow-sm'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doctor Specialist */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-800">Select Doctor / Specialist</label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 text-xs focus:outline-none focus:border-emerald-700"
                >
                  {doctors.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Time Slots */}
              <div className="space-y-1.5">
                <label className="font-bold text-neutral-800">Preferred Consultation Slot</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {slots.map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2 rounded-xl text-center text-xs font-mono border transition-all ${
                        time === t
                          ? 'bg-[#0B1E19] text-white border-[#0B1E19] font-bold'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-neutral-600">Patient Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-emerald-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-neutral-600">WhatsApp Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-emerald-700"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0B1E19] hover:bg-[#15382F] text-white rounded-full font-bold text-xs tracking-wider uppercase transition-colors shadow-lg active:scale-95"
                >
                  Schedule Priority Consultation
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
