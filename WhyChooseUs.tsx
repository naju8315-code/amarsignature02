/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Award, Zap, ShieldCheck, HelpCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { label: 'Executive Authority Architecture', targetPct: 98, desc: 'Positioning you as the undisputed benchmark standard in your domain.' },
    { label: 'Public Narrative & Trust Vector', targetPct: 92, desc: 'Engaging national and global media with reliable key narratives.' },
    { label: 'Digital Brand Footprint Mastery', targetPct: 95, desc: 'SEO, article networks, and content indexing that commands respect.' },
    { label: 'Reputation Shielding & Security', targetPct: 100, desc: 'Monitoring and preventing toxic digital narratives pre-emptively.' }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-luxury-navy overflow-hidden" ref={containerRef}>
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-1/2 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Two stacked offset images with a gold floating badge */}
          <div className="lg:col-span-5 relative h-[450px]">
            {/* Grid overlay dots */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(201,168,76,0.1)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Back tall image */}
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=500" 
              alt="Advisory boardroom strategy" 
              className="w-10/12 h-[340px] object-cover rounded-2xl border border-luxury-gold-dark/25 shadow-2xl transition-all hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />

            {/* Front offset image overlay */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" 
              alt="Direct consultation in action" 
              className="w-8/12 h-[220px] object-cover rounded-2xl border-2 border-luxury-gold shadow-2xl absolute bottom-0 right-0 z-10 hover:border-luxury-gold-light transition-all"
              referrerPolicy="no-referrer"
            />

            {/* Micro badge overlay */}
            <div className="absolute -left-4 bottom-20 glass p-4 rounded-xl shadow-2xl z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-mono text-luxury-gold tracking-widest uppercase font-bold">Confidentiality</span>
                <span className="block text-[10px] text-luxury-offwhite/80">NDAs Filed Globally</span>
              </div>
            </div>
          </div>

          {/* Right: Copywriting + Progress anim bars */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
                ● WHY SELECT AMAR SIGNATURE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
                An Absolute Standard Of <span className="italic text-luxury-gold">Executive Positioning</span>
              </h2>
              <p className="text-xs md:text-sm text-luxury-muted">
                Traditional agencies focus on clicks and visual templates. We focus on power, trust capital, and board dominance. Here are our verified benchmark performance levels:
              </p>
            </div>

            {/* Progress Bars Container */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-serif font-bold text-luxury-offwhite">
                    <span>{skill.label}</span>
                    <span className="font-mono text-luxury-gold text-sm font-black">
                      {animate ? skill.targetPct : 0}%
                    </span>
                  </div>

                  {/* Empty rail */}
                  <div className="h-2 w-full bg-luxury-surface border border-white/5 rounded-full overflow-hidden">
                    {/* Filling line */}
                    <div 
                      className="h-full bg-gradient-to-r from-luxury-gold-dark to-luxury-gold rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: animate ? `${skill.targetPct}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }} 
                    />
                  </div>

                  <p className="text-[10px] text-luxury-muted leading-tight">
                    ✦ {skill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
