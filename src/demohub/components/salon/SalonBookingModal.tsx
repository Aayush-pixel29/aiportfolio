'use client';

import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { SALON_SERVICES } from '../../data/prototypesData';
import { X, Scissors, Phone, CheckCircle, MessageSquare } from 'lucide-react';

export const SalonBookingModal: React.FC = () => {
  const { activeModal, closeModal, showNotification } = useDemo();

  const [service, setService] = useState('haircut');
  const [barber, setBarber] = useState('Vikram Singhania (Master Barber)');
  const [date, setDate] = useState('Tomorrow');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (activeModal !== 'salon-booking') return null;

  const barbers = [
    'Vikram Singhania (Master Barber)',
    'Kabir Mehta (Fade Specialist)',
    'Aman Verma (Beard Architect)'
  ];

  const times = ['10:00 AM', '11:00 AM', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setConfirmed(true);
    showNotification(`Appointment booked for ${name}!`);
  };

  const handleReset = () => {
    setConfirmed(false);
    setName('');
    setPhone('');
    closeModal();
  };

  const handleWhatsAppBooking = () => {
    const selectedSrv = SALON_SERVICES.find(s => s.id === service)?.title || service;
    const msg = `Hi Barbercrop Mumbai! I would like to book a grooming appointment:\n\n• Name: ${name || 'Client'}\n• Phone: ${phone || 'N/A'}\n• Service: ${selectedSrv}\n• Barber: ${barber}\n• Slot: ${date} at ${time}\n• Location: Bandra West, Mumbai`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-neutral-950 border border-neutral-800 rounded-none w-full max-w-xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Crimson Header Bar */}
        <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white">
              <Scissors className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-salon-display text-lg font-bold tracking-wider text-white">
              BARBERCROP · APPOINTMENT RESERVATION
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {confirmed ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-salon-display text-3xl font-bold text-white tracking-wide">
                  APPOINTMENT CONFIRMED
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Your chair is reserved at our Bandra West lounge.
                </p>
              </div>

              <div className="bg-neutral-900 p-4 border border-neutral-800 text-xs font-mono text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-semibold uppercase">{service}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Master Barber:</span>
                  <span>{barber}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Scheduled:</span>
                  <span className="text-red-400 font-bold">{date} at {time}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="text-neutral-500">Location:</span>
                  <span>Plot 14, Linking Road, Bandra West, Mumbai</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-salon-display text-sm tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  CONFIRM VIA WHATSAPP
                </button>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-salon-display text-sm tracking-wider font-semibold transition-colors"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs text-neutral-300">
              
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="font-salon-display text-sm tracking-wider text-neutral-300 font-semibold uppercase">
                  Select Grooming Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SALON_SERVICES.map(srv => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setService(srv.id)}
                      className={`p-2.5 text-left border transition-all ${
                        service === srv.id
                          ? 'bg-neutral-900 border-red-600 text-white ring-1 ring-red-600/50'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-salon-display font-bold text-xs tracking-wider">{srv.title}</div>
                      <div className="text-[10px] text-red-500 font-mono mt-0.5">{srv.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Barber Selection */}
              <div className="space-y-2">
                <label className="font-salon-display text-sm tracking-wider text-neutral-300 font-semibold uppercase">
                  Select Master Barber
                </label>
                <select
                  value={barber}
                  onChange={(e) => setBarber(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-600"
                >
                  {barbers.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <label className="font-salon-display text-sm tracking-wider text-neutral-300 font-semibold uppercase">
                  Choose Time Slot (Tomorrow)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map(t => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2 text-center text-xs font-mono border transition-all ${
                        time === t
                          ? 'bg-red-600 border-red-600 text-white font-bold'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohan Singhania"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-salon-display text-sm tracking-wider font-semibold transition-colors"
                >
                  CONFIRM RESERVATION
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
