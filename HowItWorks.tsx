/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Users2, FileText, TrendingUp, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book Advisory Block',
      desc: 'Submit your profile coordinates and schedule a private 30-minute discovery call with our partners.',
      icon: Calendar,
    },
    {
      num: '02',
      title: 'Meet Principal Strategist',
      desc: 'Conduct a confidential 1-on-1 diagnostic auditing your active career, public footprint, and niche goals.',
      icon: Users2,
    },
    {
      num: '03',
      title: 'Receive Custom Brand Blueprint',
      desc: 'Get your tailored 30-page personal voice matrix, visual asset guide, and publication timeline.',
      icon: FileText,
    },
    {
      num: '04',
      title: 'Launch & Govern Authority',
      desc: 'Go public with synchronized editorial posting, national PR features, and ongoing direct counsel.',
      icon: TrendingUp,
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-luxury-surface/50 border-b border-luxury-gold-dark/15 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-10 right-10 w-72 h-72 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● OUR PROPRIETARY METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
            The Timeline to <span className="italic text-luxury-gold">Public Hegemony</span>
          </h2>
          <p className="text-sm text-luxury-muted">
            Our highly structured 4-step blueprint transforms operators into recognizable market standard creators.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          
          {/* Gold Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-luxury-gold-dark/10 via-luxury-gold/60 to-luxury-gold-dark/10 z-0 border-t border-dashed border-luxury-gold/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx}
                  className="group flex flex-col items-center text-center space-y-6"
                  id={`process-step-${step.num}`}
                >
                  {/* Step bubble / circle */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Ring scale effect */}
                    <div className="absolute inset-0 bg-luxury-gold/5 rounded-full scale-125 group-hover:scale-150 group-hover:bg-luxury-gold/10 transition-all duration-500" />
                    
                    {/* Circle Container */}
                    <div className="relative w-18 h-18 rounded-full bg-luxury-navy border-2 border-luxury-gold-dark flex items-center justify-center shadow-xl group-hover:border-luxury-gold transition-all duration-300">
                      <StepIcon className="w-6 h-6 text-luxury-gold group-hover:scale-110 transition-transform" />
                      
                      {/* Floating Number Card */}
                      <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-luxury-gold-dark text-luxury-navy font-mono text-[10px] font-black rounded-md border border-luxury-gold">
                        {step.num}
                      </span>
                    </div>

                  </div>

                  {/* Informative text below */}
                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-serif text-lg font-bold text-luxury-offwhite group-hover:text-luxury-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-luxury-muted leading-relaxed px-2">
                      {step.desc}
                    </p>
                  </div>

                  {/* Mobile divider help icon */}
                  {idx < 3 && (
                    <div className="block lg:hidden text-luxury-gold-dark/40 py-2">
                      <ChevronRight className="w-5 h-5 rotate-90 md:rotate-0" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Note block */}
        <p className="text-center text-[11px] font-mono tracking-wide text-luxury-gold/60 mt-16 uppercase">
          ✦ Initial Intake Audits take approximately 14 schedule days to perfect.
        </p>

      </div>
    </section>
  );
}
