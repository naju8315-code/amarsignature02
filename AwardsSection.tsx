/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Trophy, ChevronLeft, ChevronRight, Award, MapPin } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { awardsData, t, language } = useThemeLanguage();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % awardsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length);
  };

  return (
    <section id="awards" className="relative py-20 bg-luxury-navy overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-[3px] text-luxury-gold uppercase block">
              ● {t('awardsPill')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
              {t('awardsTitle')} <span className="italic text-luxury-gold">{t('awardsHighlight')}</span>
            </h2>
            <p className="text-xs md:text-sm text-luxury-muted max-w-xl">
              {t('awardsDesc')}
            </p>
          </div>

          {/* Carousel Arrows (Desktop only) */}
          <div className="flex gap-2.5 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-luxury-surface border border-luxury-gold-dark/20 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5 transition-colors cursor-pointer"
              aria-label="Previous award"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-luxury-surface border border-luxury-gold-dark/20 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5 transition-colors cursor-pointer"
              aria-label="Next award"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awardsData.map((award, idx) => {
              const worksActive = idx === activeIndex;
              return (
                <div
                  key={award.id}
                  className={`relative p-6 md:p-8 rounded-2xl glass text-left transition-all duration-500 flex flex-col justify-between ${
                    worksActive 
                      ? 'border-2 border-luxury-gold shadow-[0_10px_30px_rgba(232,201,106,0.12)] scale-[1.02] bg-[#0A0F1E]/80 backdrop-blur-lg' 
                      : 'opacity-80 hover:opacity-100 hover:glass-heavy'
                  }`}
                  id={`award-card-${award.id}`}
                >
                  
                  {/* Design ribbon */}
                  {worksActive && (
                    <span className="absolute top-4 right-4 text-[9px] font-mono font-bold text-luxury-gold tracking-widest bg-luxury-gold/20 px-2 py-0.5 rounded border border-luxury-gold/45">
                      {language === 'bn' ? 'সিলেকশন ফোকাস' : 'SELECTION FOCUS'}
                    </span>
                  )}

                  <div className="space-y-6">
                    {/* Trophy box with animation */}
                    <div className="inline-flex p-3.5 bg-luxury-navy border border-luxury-gold-dark/25 rounded-xl text-luxury-gold">
                      <Trophy className="w-6 h-6 text-luxury-gold stroke-[2]" />
                    </div>

                    <div className="space-y-2">
                      <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                        ✦ {award.category}
                      </span>
                      <h4 className="font-serif text-lg md:text-xl font-bold text-luxury-offwhite text-left line-clamp-2">
                        {award.title}
                      </h4>
                      <p className="text-xs text-luxury-muted leading-relaxed">
                        {language === 'bn' 
                          ? `কৌশলগত অবদানের স্বীকৃতিস্বরূপ খ্যাতনামা ${award.organization} কমিটি কর্তৃক এই অনারারি প্রদান করা হয়।`
                          : `Recognized by the prominent ${award.organization} committee for strategic breakthrough.`}
                      </p>
                    </div>
                  </div>

                  {/* Date & projects redirect link */}
                  <div className="pt-6 border-t border-luxury-gold-dark/10 mt-6 flex items-center justify-between text-xs">
                    <span className="font-mono text-luxury-gold/70">{award.year} {language === 'bn' ? 'ক্যাটাগরি' : 'Category'}</span>
                    <a
                      href="#projects"
                      className="text-luxury-gold hover:text-luxury-offwhite font-mono uppercase tracking-wider font-semibold transition-colors flex items-center gap-1"
                    >
                      {language === 'bn' ? 'পোর্টফোলিও দেখুন →' : 'View Projects →'}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Dot controllers */}
        <div className="flex justify-center gap-2 mt-12">
          {awardsData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2 rounded-full transition-all ${
                dotIdx === activeIndex ? 'w-8 bg-luxury-gold' : 'w-2 bg-luxury-gold/20'
              }`}
              aria-label={`Go to award slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
