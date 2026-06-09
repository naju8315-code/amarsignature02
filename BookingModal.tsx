/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferredPackage?: string;
}

export default function BookingModal({ isOpen, onClose, preferredPackage }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preferredPackage || 'Executive Branding',
    date: '2026-06-15',
    timeSlot: '14:00',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in Name, Email and Phone details.');
      return;
    }
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div id="booking-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      {/* Container */}
      <div 
        id="booking-modal-card"
        className="relative w-full max-w-2xl glass-heavy rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
      >
        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-dark" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          id="close-modal-btn"
          className="absolute top-4 right-4 p-2 text-luxury-offwhite/60 hover:text-luxury-gold hover:bg-white/5 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="space-y-2 text-left">
              <span className="inline-block text-xs font-mono tracking-[2px] text-luxury-gold uppercase">
                DIRECT ADVISORY SLOT
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-luxury-offwhite font-bold">
                Schedule Your Private Valuation
              </h3>
              <p className="text-sm text-luxury-muted">
                Secure a private 30-minute consultation with Principal Partner Amar Chowdhury.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {/* Name */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Salman Rahman"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite placeholder:text-luxury-offwhite/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite placeholder:text-luxury-offwhite/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Phone (WhatsApp preferred)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g., +880 1711-XXXXXX"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite placeholder:text-luxury-offwhite/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>
              </div>

              {/* Company & Role */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Company & Designation
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g., Apex Group, CIO"
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite placeholder:text-luxury-offwhite/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>
              </div>

              {/* Choose Service */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Inquiry Topic
                </label>
                <select 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full px-3 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all cursor-pointer"
                >
                  <option value="Standard Package">Standard Brand Build (৳90,000)</option>
                  <option value="Growth Consultant Package">Growth Consultant Strategy (৳1,35,000)</option>
                  <option value="Platinum Premium">Platinum Legacy (Premium Tier)</option>
                  <option value="Executive Advisory">1-on-1 Consultation Block</option>
                  <option value="Media PR Session">National Media & PR Guidance</option>
                </select>
              </div>

              {/* Appointment Date */}
              <div className="space-y-1">
                <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-sm text-luxury-offwhite focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="text-left space-y-2">
              <label className="block text-xs font-mono tracking-wider text-luxury-gold uppercase">
                Preferred Time Slot (Dhaka Local Time GMT+6)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: '11:00', label: '11:00 AM' },
                  { value: '14:00', label: '02:00 PM' },
                  { value: '16:30', label: '04:30 PM' },
                ].map(slot => (
                  <button
                    key={slot.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot.value })}
                    className={`py-2 text-xs font-mono rounded-lg border transition-all ${
                      formData.timeSlot === slot.value 
                        ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold' 
                        : 'border-luxury-gold-dark/20 hover:border-luxury-gold hover:bg-white/5 text-luxury-offwhite/80'
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-luxury-gold/5 border border-luxury-gold-dark/25 text-left">
              <ShieldCheck className="w-5 h-5 text-luxury-gold flex-shrink-0" />
              <p className="text-xs text-luxury-offwhite/90">
                <strong>Absolute Privacy Guarantee:</strong> All discussions, files, and consultation items are guarded by professional non-disclosure agreements.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button 
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-medium text-luxury-offwhite/60 hover:text-luxury-offwhite hover:bg-white/5 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-serif bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light text-luxury-navy font-semibold rounded-lg shadow-lg hover:shadow-luxury-gold/10 transition-all"
              >
                Confirm Booking
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold/10 border border-luxury-gold-dark/40 rounded-full text-luxury-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-luxury-gold font-bold">
                Consultation Requested
              </h3>
              <p className="max-w-md mx-auto text-sm text-luxury-muted">
                Your private session request has been cataloged. Our Client Officer will reach out via WhatsApp at <strong>{formData.phone}</strong> inside 2 business hours to share your invitation passport.
              </p>
            </div>

            <div className="border-t border-b border-luxury-gold-dark/20 py-4 max-w-sm mx-auto text-left space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-luxury-muted">Consultant:</span>
                <span className="text-luxury-offwhite font-medium">Amar Chowdhury</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-muted">Subject:</span>
                <span className="text-luxury-offwhite font-medium">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-luxury-muted">Selected Slot:</span>
                <span className="text-luxury-gold font-mono font-medium">{formData.date} at {formData.timeSlot === '11:00' ? '11:00 AM' : formData.timeSlot === '14:00' ? '02:00 PM' : '04:30 PM'}</span>
              </div>
            </div>

            <button 
              onClick={handleReset}
              className="px-8 py-3 bg-luxury-navy border border-luxury-gold-dark text-luxury-gold hover:bg-luxury-gold/10 rounded-lg text-sm font-mono tracking-wider uppercase transition-all"
            >
              Exit Private Client Room
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
