/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Sparkles, Briefcase, PenTool, Globe, Mic, ArrowRight, Check, X, ShieldAlert } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ServiceItem } from '../types';
import ReactHelmet from './ReactHelmet';

interface ServicesSectionProps {
  onOpenBooking: (topic?: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { servicesData, t, language } = useThemeLanguage();

  // Map string name to Lucide Icon
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-luxury-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-luxury-gold" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-luxury-gold" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-luxury-gold" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-luxury-gold" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-luxury-gold" />;
      default:
        return <Compass className="w-6 h-6 text-luxury-gold" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-luxury-navy overflow-hidden">
      {/* Absolute decorative glow background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-left max-w-3xl space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● {t('servicesPill')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-luxury-offwhite font-bold leading-tight">
            {language === 'bn' ? (
              <>{t('servicesTitlePart1')} <span className="italic text-luxury-gold">{t('servicesTitleHighlight')}</span></>
            ) : (
              <>{t('servicesTitlePart1')} <span className="italic text-luxury-gold">{t('servicesTitleHighlight')}</span></>
            )}
          </h2>
          <p className="text-sm text-luxury-muted max-w-2xl">
            {t('servicesDesc')}
          </p>
        </div>

        {/* 3x2 grid of modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group relative glass rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1.5 hover:glass-heavy hover:shadow-[0_8px_25px_rgba(232,201,106,0.12)] transition-all duration-300 text-left"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-6">
                {/* Icon box with glowing background */}
                <div className="inline-flex items-center justify-center p-3 bg-luxury-navy border border-luxury-gold-dark/20 rounded-xl group-hover:border-luxury-gold group-hover:bg-luxury-gold/5 transition-all">
                  {renderIcon(service.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-luxury-offwhite font-bold group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-luxury-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-luxury-gold-dark/10 mt-6 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-1.5 text-xs font-mono text-luxury-gold group-hover:text-luxury-offwhite tracking-wider uppercase transition-colors text-left cursor-pointer"
                >
                  {language === 'bn' ? 'বিস্তারিত পড়তে ক্লিক করুন' : 'Read More Scope'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive service deep details dialog modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div 
              className="relative w-full max-w-xl glass-heavy rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl"
              id="service-modal-card"
            >
              {/* Dynamic Metadata overwrites */}
              <ReactHelmet 
                title={selectedService.title}
                description={selectedService.description}
                ogTitle={selectedService.title}
                ogDescription={selectedService.description}
              />

              {/* Top border decor */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold" />

              {/* Close x */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-luxury-offwhite/60 hover:text-luxury-gold hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 text-left">
                <div className="inline-flex p-3 bg-luxury-navy border border-luxury-gold/20 rounded-xl">
                  {renderIcon(selectedService.iconName)}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-luxury-offwhite font-bold">
                  {selectedService.title} {language === 'bn' ? 'বিস্তারিত পরিধি' : 'Detailed Scope'}
                </h3>
                <p className="text-xs text-luxury-muted leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Scope Benefits */}
              <div className="text-left space-y-3">
                <span className="block text-[10px] font-mono tracking-wider text-luxury-gold uppercase font-bold">
                  {language === 'bn' ? 'মূল কৌশলগত সুবিধাসমূহ:' : 'Core Strategic Advantages:'}
                </span>
                <div className="space-y-2">
                  {selectedService.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-luxury-offwhite">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 stroke-[2.5]" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-luxury-offwhite">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 stroke-[2.5]" />
                    <span>{language === 'bn' ? 'ত্রৈমাসিক কৌশল অডিট রিপোর্ট' : 'Quarterly Strategy Audit Reports'}</span>
                  </div>
                </div>
              </div>

              {/* Consultation redirection */}
              <div className="pt-2 flex items-center justify-between border-t border-luxury-gold-dark/15">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-mono text-luxury-offwhite/50 hover:text-luxury-offwhite transition-colors"
                >
                  {language === 'bn' ? 'বন্ধ করুন' : 'Close Scope'}
                </button>
                <button
                  onClick={() => {
                    const svcName = selectedService.title;
                    setSelectedService(null);
                    onOpenBooking(svcName);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-mono text-xs font-bold uppercase rounded-lg shadow-md hover:scale-[1.02] transition-transform"
                >
                  {language === 'bn' ? 'সেবাটি সম্পর্কে তথ্য নিন' : 'Inquire This Service'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
