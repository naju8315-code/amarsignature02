/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="relative bg-luxury-navy border-t border-luxury-gold-dark/15 pt-20 pb-8 text-left overflow-hidden">
      
      {/* Absolute gold gradient separator at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-dark to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Logo (3 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={() => onScrollToSection('home')}
              className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 bg-luxury-gold flex items-center justify-center rounded-lg shadow-md">
                <span className="font-serif text-xl font-bold text-luxury-navy">AS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-tight font-bold tracking-wider text-luxury-offwhite">
                  AMAR <span className="text-luxury-gold">SIGNATURE</span>
                </span>
                <span className="text-[9px] font-mono tracking-[2px] text-luxury-gold/70 uppercase">
                  South Asia Legacy Studio
                </span>
              </div>
            </button>
            
            <p className="text-xs text-luxury-muted leading-relaxed max-w-sm">
              We architect enduring authority, digital trust footprints, and prestigious positioning for South Asia's pre-eminent venture founders & directors.
            </p>

            {/* Social media circle buttons */}
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, href: '#', label: 'Facebook feed' },
                { icon: Instagram, href: '#', label: 'Instagram handle' },
                { icon: Youtube, href: '#', label: 'YouTube broadcast' },
                { icon: MessageSquare, href: '#', label: 'WhatsApp direct line' }
              ].map((soc, sIdx) => {
                const SocIcon = soc.icon;
                return (
                  <a 
                    key={sIdx}
                    href={soc.href}
                    className="p-2 bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy border border-luxury-gold-dark/20 hover:border-luxury-gold rounded-lg text-luxury-gold transition-all"
                    aria-label={soc.label}
                  >
                    <SocIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-wider text-luxury-gold uppercase font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Studio Home', id: 'home' },
                { label: 'About History', id: 'about' },
                { label: 'Pricing Retainers', id: 'packages' },
                { label: 'Advisory Projects', id: 'projects' },
                { label: 'Insights Blog', id: 'blog' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-luxury-muted hover:text-luxury-gold transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Methods (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-wider text-luxury-gold uppercase font-bold">
              Support Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Voice Audits', id: 'services' },
                { label: 'Executive Team', id: 'about-team' },
                { label: 'FAQs & Security', id: 'about-faq' },
                { label: 'Client Booking NDA', id: 'packages' },
                { label: 'Terms of Sovereignty', id: 'contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-luxury-muted hover:text-luxury-gold transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Coordinate info (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="text-xs font-mono tracking-wider text-luxury-gold uppercase font-bold">
              Dhaka Contact Info
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="text-luxury-muted">
                  Level 9, Signature Tower, Road 45, Gulshan-2, Dhaka, Bangladesh.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span className="text-luxury-muted">
                  +880 1711-SIGNATURE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span className="text-luxury-muted">
                  relations@amarsignature.com
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-1">
              <span className="block text-[10px] font-mono text-luxury-gold uppercase">Confidential Status:</span>
              <p className="text-[10px] text-luxury-muted">
                ✦ Operating in high-encrypted, silent network protocols.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright row & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-luxury-muted">
          <div>
            <span>© 2026 Amar Signature. Dhaka, BD. All rights defended under private counsel.</span>
          </div>

          {/* Back to top controller */}
          <button 
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 px-3.5 py-2 bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy text-luxury-gold rounded-lg border border-luxury-gold-dark/25 hover:border-luxury-gold transition-all uppercase text-[10px] tracking-wider font-bold cursor-pointer"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
