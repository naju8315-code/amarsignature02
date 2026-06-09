/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function SkeletonLoader() {
  const { language } = useThemeLanguage();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="luxury-initial-preloader"
      className="fixed inset-0 z-[200000] bg-luxury-navy flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
    >
      {/* Backlighting effect */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] radial-gold-glow pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] radial-gold-glow pointer-events-none opacity-30" />

      {/* 🧭 Skeleton Navbar Row */}
      <div id="skeleton-navbar-row" className="flex items-center justify-between w-full relative z-10 border-b border-luxury-gold/5 pb-5">
        {/* Logo block */}
        <div id="skeleton-logo-wrap" className="flex items-center gap-2.5">
          <div id="skeleton-logo-icon" className="w-8 h-8 rounded-full bg-luxury-surface border border-luxury-gold/15 luxury-shimmer flex items-center justify-center">
            <span className="text-[10px] text-luxury-gold font-serif font-bold">∑</span>
          </div>
          <div id="skeleton-logo-text" className="h-4 w-32 rounded-md bg-luxury-surface luxury-shimmer" />
        </div>
        
        {/* Right Nav links mockup */}
        <div id="skeleton-nav-links" className="hidden md:flex items-center gap-6">
          <div className="h-2 w-16 rounded bg-luxury-surface luxury-shimmer" />
          <div className="h-2 w-16 rounded bg-luxury-surface luxury-shimmer" />
          <div className="h-2.5 w-24 rounded-full bg-luxury-surface luxury-shimmer border border-luxury-gold/10" />
        </div>
      </div>

      {/* 🖼 Split Screen Content (replicating the hero section layout structures) */}
      <div id="skeleton-content-split" className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8 relative z-10 my-auto">
        
        {/* Left column (60%) */}
        <div id="skeleton-left-hero" className="lg:col-span-7 space-y-8 text-left">
          {/* Pill category badge */}
          <div id="skeleton-pill-tag" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-surface/45 border border-luxury-gold/10 w-44 h-8 luxury-shimmer" />

          {/* Large Title Placeholder lines */}
          <div id="skeleton-hero-title" className="space-y-4">
            <div className="h-10 sm:h-12 w-11/12 rounded-lg bg-luxury-surface/80 luxury-shimmer border border-luxury-gold/5" />
            <div className="h-10 sm:h-12 w-8/12 rounded-lg bg-luxury-surface/80 luxury-shimmer border border-luxury-gold/5" />
            <div className="h-4 w-10/12 rounded bg-luxury-surface/50 mt-8 luxury-shimmer" />
            <div className="h-4 w-9/12 rounded bg-luxury-surface/50 luxury-shimmer" />
          </div>

          {/* Action buttons list */}
          <div id="skeleton-hero-actions" className="flex flex-wrap gap-4 pt-4">
            <div className="h-12 w-40 rounded-full bg-luxury-surface/90 border border-luxury-gold/25 luxury-shimmer" />
            <div className="h-12 w-32 rounded-full bg-luxury-surface/40 border border-luxury-gold/10 luxury-shimmer" />
          </div>
        </div>

        {/* Right Column (40%) */}
        <div id="skeleton-right-hero" className="lg:col-span-5 flex justify-center items-center relative">
          {/* Geometric Outer Backdrop mimicking the portrait card structure */}
          <div id="skeleton-decor-ring" className="absolute -inset-4 rounded-3xl border border-dashed border-luxury-gold/10 animate-spin-slow pointer-events-none" />
          
          <div id="skeleton-luxury-card" className="w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-luxury-surface/90 border border-luxury-gold/15 p-6 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden luxury-shimmer">
            {/* Inner shimmer elements */}
            <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-luxury-gold-dark to-luxury-gold" />
            
            <div className="flex justify-between items-start">
              <div className="h-8 w-8 rounded-full bg-luxury-navy/60" />
              <div className="h-4 w-16 bg-luxury-navy/60 rounded" />
            </div>

            <div className="space-y-3">
              <div className="h-3 w-5/12 bg-luxury-navy/50 rounded" />
              <div className="h-5 w-11/12 bg-luxury-navy/75 rounded" />
              <div className="h-5 w-8/12 bg-luxury-navy/75 rounded" />
            </div>

            <div className="flex gap-2 items-center">
              <div className="h-6 w-6 rounded-full bg-luxury-navy/60" />
              <div className="h-3 w-28 bg-luxury-navy/50 rounded" />
            </div>
          </div>
        </div>

      </div>

      {/* 🧭 Foot Status Bar */}
      <div id="skeleton-footer-row" className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full relative z-10 border-t border-luxury-gold/5 pt-5 text-luxury-muted">
        <div id="skeleton-quote-block" className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
          <span className="font-serif text-xs italic tracking-wider">
            {language === 'bn' ? 'সবচেয়ে চমৎকার উপায়ে ব্যক্তিগত স্বাক্ষর প্রতিষ্ঠা করা হচ্ছে' : 'Crafting elite identities with precision'}
          </span>
        </div>

        {/* Dynamic status line with flashing dots */}
        <div id="skeleton-loader-status" className="font-mono text-[10px] tracking-[4px] uppercase text-luxury-gold flex items-center gap-2">
          <span>
            {language === 'bn' ? 'লোড হচ্ছে' : 'INITIALIZING'}
          </span>
          <span className="w-10 text-left">{dots}</span>
        </div>

        <div id="skeleton-signature-credit" className="text-[10px] font-mono tracking-widest text-[#E8C96A]/30">
          AMAR SIGNATURE SECURE
        </div>
      </div>
    </div>
  );
}
