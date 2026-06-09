/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const { testimonialsData, t, language } = useThemeLanguage();

  // Auto-play loop
  useEffect(() => {
    if (!testimonialsData || testimonialsData.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000); // 6 sec transitions
    return () => clearInterval(timer);
  }, [testimonialsData]);

  if (!testimonialsData || testimonialsData.length === 0) return null;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const active = testimonialsData[index];

  return (
    <section id="testimonials" className="relative py-24 bg-luxury-surface border-t border-b border-luxury-gold-dark/15 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-10 w-96 h-96 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● {t('testimonialsPill')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
            {t('testimonialsTitle')} <span className="italic text-luxury-gold">{t('testimonialsHighlight')}</span>
          </h2>
          <p className="text-xs md:text-sm text-luxury-muted">
            {t('testimonialsDesc')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-heavy rounded-2xl p-8 md:p-14 shadow-2xl space-y-8 text-left transition-all duration-500">
          
          {/* Quote icon bg indicator */}
          <div className="absolute top-8 right-8 text-luxury-gold/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          {/* Stars rating */}
          <div className="flex gap-1 text-luxury-gold">
            {Array.from({ length: active.rating }).map((_, sIdx) => (
              <Star key={sIdx} className="w-5 h-5 fill-luxury-gold" />
            ))}
          </div>

          {/* Quote description in rich Playfair */}
          <p className="font-serif text-lg md:text-2xl lg:text-3xl text-luxury-offwhite/95 leading-relaxed italic relative z-10">
            "{active.quote}"
          </p>

          {/* Client Bio & headshot section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-luxury-content/10">
            
            <div className="flex items-center gap-4 text-left">
              {/* Headshot */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-luxury-gold shadow-md">
                <img 
                  src={active.imageUrl} 
                  alt={active.author} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <h4 className="font-serif text-base font-bold text-luxury-offwhite">
                  {active.author}
                </h4>
                <span className="text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                  {active.role} {language === 'bn' ? 'এর' : 'at'} <span className="text-luxury-offwhite">{active.company}</span>
                </span>
              </div>
            </div>

            {/* Manual controller buttons inside card */}
            <div className="flex gap-2.5">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-2.5 rounded-lg bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy text-luxury-gold border border-luxury-gold-dark/20 transition-all cursor-pointer"
                aria-label="Previous testimony"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-2.5 rounded-lg bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy text-luxury-gold border border-luxury-gold-dark/20 transition-all cursor-pointer"
                aria-label="Next testimony"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Slide Indicator Bullet Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonialsData.map((_, bulletIdx) => (
            <button
              key={bulletIdx}
              onClick={() => setIndex(bulletIdx)}
              className={`h-1.5 rounded-full transition-all ${
                bulletIdx === index ? 'w-10 bg-luxury-gold' : 'w-2.5 bg-luxury-gold/20'
              }`}
              aria-label={`Go to slide ${bulletIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
