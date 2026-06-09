/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Globe, Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    subject: 'Request Private Board Session'
  });
  
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrors('All required fields (Name, Email, Phone, Message) must be filled.');
      return;
    }
    setErrors(null);
    setSuccess(true);
    // Quietly reset form input
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: '',
      subject: 'Request Private Board Session'
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-luxury-surface/40 border-t border-luxury-gold-dark/15 overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/3 left-10 w-96 h-96 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-left max-w-3xl space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● INITIATE ADVISORY ENGAGEMENT
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
            Step Into the <span className="italic text-luxury-gold">Signature Circle</span>
          </h2>
          <p className="text-xs md:text-sm text-luxury-muted">
            Establish connection with our private client relations desk in Dhaka to coordinate diagnostic schedules.
          </p>
        </div>

        {/* Contact Split layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Side: Custom Contact Form */}
          <div className="lg:col-span-7 glass rounded-2xl p-6 md:p-8 space-y-6 shadow-xl text-left">
            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
                
                <h3 className="font-serif text-xl sm:text-2xl text-luxury-offwhite font-medium">
                  Submit Positioning Brief
                </h3>

                {errors && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs text-red-300 font-medium">
                    ✦ {errors}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g., Kazi Zahed"
                      className="w-full px-4 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite placeholder:text-muted-text/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Corporate email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                      Corporate Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="zahed@benchmark.com"
                      className="w-full px-4 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite placeholder:text-muted-text/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone number */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                      WhatsApp/Phone *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g., +880 1819-XXXXXX"
                      className="w-full px-4 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite placeholder:text-muted-text/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                      Enterprise & Designation
                    </label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g., Pioneer Dev Group, CIO"
                      className="w-full px-4 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite placeholder:text-muted-text/30 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                    Primary Agenda Topic
                  </label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-3 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite focus:outline-none cursor-pointer"
                  >
                    <option value="Request Private Board Session">Request Private Board Diagnostic Session</option>
                    <option value="Bespoke Visual Heritage Design">Bespoke Visual Heritage & Typography Design</option>
                    <option value="Thought Leadership Ghostwriting">Thought Leadership Ghostwriting Inquiries</option>
                    <option value="Corporate PR Campaign">National Media News & Press Releases</option>
                  </select>
                </div>

                {/* Brief Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                    Profile Description & Objectives *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly state your current role, domain, and target objectives so we can prepare diagnostics pre-call."
                    className="w-full px-4 py-2.5 bg-black/35 border border-luxury-gold-dark/20 focus:border-luxury-gold rounded-lg text-xs text-luxury-offwhite placeholder:text-muted-text/30 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Privacy check info row */}
                <div className="p-3.5 bg-luxury-gold/5 border border-luxury-gold-dark/25 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] text-luxury-muted leading-tight">
                    By submitting this diagnostic brief, you request encrypted onboarding files. All information shared here is strictly confidential and protected by pre-drafted client trust laws.
                  </p>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="flex items-center gap-2 px-6.5 py-3 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light text-luxury-navy font-mono text-xs font-bold uppercase rounded-lg shadow-lg hover:shadow-luxury-gold/15 transition-all cursor-pointer"
                >
                  Confirm Brief & Initiate Call
                  <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="inline-flex p-4.5 bg-luxury-gold/15 border border-luxury-gold rounded-full text-luxury-gold">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-luxury-gold font-bold">
                    Positioning Brief Cataloged
                  </h3>
                  <p className="max-w-md mx-auto text-xs text-luxury-muted leading-relaxed">
                    Thank you. We have securely archived your corporate registration profile. Our Private Desk Officer in Dhaka will finalize dispatch credentials and message your cell within 2 business hours.
                  </p>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 bg-luxury-surface border border-luxury-gold-dark text-luxury-gold font-mono text-xs font-bold uppercase rounded-lg hover:bg-luxury-gold/10 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Coordinates / Address info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            
            {/* Address Details */}
            <div className="glass p-6 rounded-2xl space-y-6 flex-1 shadow-lg">
              <h3 className="font-serif text-xl text-luxury-offwhite font-bold border-b border-luxury-gold-dark/15 pb-3">
                Dhaka Operations Desk
              </h3>

              <div className="space-y-5">
                
                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-luxury-gold/10 border border-luxury-gold-dark/25 rounded-xl text-luxury-gold">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                      HEADQUARTERS OFFICE
                    </span>
                    <p className="text-xs text-luxury-offwhite leading-relaxed font-semibold mt-1">
                      Level 9, Signature Tower, Road 45, Gulshan-2, Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>

                {/* Direct Relations Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-luxury-gold/10 border border-luxury-gold-dark/25 rounded-xl text-luxury-gold">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                      DIRECT RELATIONS PHONE
                    </span>
                    <p className="text-xs text-luxury-offwhite font-bold mt-1">
                      +880 1711-SIGNATURE <span className="block sm:inline sm:ml-2 text-luxury-gold-dark text-[10px] font-mono font-medium">(Public Desk)</span>
                    </p>
                    <p className="text-xs text-luxury-offwhite font-bold">
                      +880 1899-77001 <span className="block sm:inline sm:ml-2 text-luxury-gold-dark text-[10px] font-mono font-medium">(Client Hotline)</span>
                    </p>
                  </div>
                </div>

                {/* Corporate Correspondence Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-luxury-gold/10 border border-luxury-gold-dark/25 rounded-xl text-luxury-gold">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                      CORPORATE CORRESPONDENCE
                    </span>
                    <p className="text-xs text-luxury-offwhite font-bold mt-1 hover:text-luxury-gold transition-colors">
                      relations@amarsignature.com
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-luxury-gold/10 border border-luxury-gold-dark/25 rounded-xl text-luxury-gold">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                      ADVISORY SCHEDULES
                    </span>
                    <p className="text-xs text-luxury-offwhite font-medium mt-1">
                      Saturday - Thursday: 10:00 AM - 07:00 PM GD
                    </p>
                    <p className="text-[10px] text-luxury-muted mt-0.5">
                      ✦ Sunday PM blocks reserved for Platinum VIP clients.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social presence hooks layout */}
            <div className="glass p-6 rounded-2xl space-y-4 shadow-lg text-left">
              <h4 className="text-xs font-mono tracking-wider text-luxury-gold uppercase font-bold">
                Digital Security Feeds
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook feed' },
                  { icon: Instagram, href: '#', label: 'Instagram handle' },
                  { icon: Youtube, href: '#', label: 'YouTube broadcast' },
                  { icon: MessageSquare, href: '#', label: 'WhatsApp direct line' }
                ].map((social, idx) => {
                  const SIcon = social.icon;
                  return (
                    <a 
                      key={idx}
                      href={social.href}
                      className="p-3 bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy border border-luxury-gold-dark/25 hover:border-luxury-gold rounded-xl text-luxury-gold transition-all"
                      aria-label={social.label}
                    >
                      <SIcon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Google Map below coordinates */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-luxury-gold-dark/15 shadow-2xl relative h border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1573030384755!2d90.4137!3d23.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a10!2sDhaka%20Gulshan%202!5e0!3m2!1sen!2sbd!4v1700000000000" 
            className="w-full h-80 md:h-[400px] border-none grayscale contrast-125"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Amar Signature Gulshan-2 Location Map"
          />
          {/* Subtle gold transparent frame outline overlay */}
          <div className="absolute inset-0 border border-luxury-gold/5 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
