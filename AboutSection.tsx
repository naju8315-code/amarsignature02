/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ShieldCheck, Award, Target, HelpCircle, Users } from 'lucide-react';
import CountUp from './CountUp';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const { t, teamMembers, faqData, strengthsData, language } = useThemeLanguage();

  return (
    <section id="about" className="relative py-24 bg-luxury-navy overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Overlapping Image Collage */}
          <div className="lg:col-span-5 relative h-[400px] sm:h-[480px] w-full max-w-md mx-auto lg:mx-0">
            {/* Background pattern trace */}
            <div className="absolute inset-4 border border-luxury-gold/10 rounded-2xl -translate-x-4 -translate-y-4 pointer-events-none" />
            
            {/* Image 1: Main background stack */}
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=500" 
              alt="Elite business team session" 
              className="w-10/12 h-68 sm:h-80 object-cover rounded-2xl border border-luxury-gold-dark/20 shadow-2xl absolute right-0 top-0 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Image 2: Middle stack offset */}
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500" 
              alt="Luxury consultant workspace" 
              className="w-8/12 h-44 sm:h-52 object-cover rounded-2xl border-2 border-luxury-gold-dark/40 shadow-2xl absolute left-0 bottom-12 z-10 hover:border-luxury-gold transition-all duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Image 3: Small fore-focus circular highlight */}
            <div className="absolute -right-4 bottom-2 glass p-4.5 rounded-2xl shadow-2xl z-20 max-w-[190px]">
              <span className="block text-3xl font-serif text-luxury-gold font-bold">
                <CountUp end={8} suffix="+" /> {language === 'bn' ? 'বছর' : 'Yrs'}
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-luxury-offwhite/70 uppercase mt-1">
                {language === 'bn' ? 'ঢাকার বাজারে আধিপত্য' : 'Dhaka Market Hegemony'}
              </span>
            </div>
            
            {/* Decorative gold wireframe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-luxury-gold/5 pointer-events-none" />
          </div>

          {/* Right Side: Copywriting & Bullet strengths */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
                ● {t('aboutTitleBadge')}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-3xl text-luxury-offwhite font-bold leading-tight">
                {language === 'bn' ? (
                  <>আমরা আপনাকে এমন এক ব্র্যান্ড হতে সাহায্য করি যা <span className="italic text-luxury-gold">মানুষ মনে রাখে</span></>
                ) : (
                  <>We Help You Become the Brand <span className="italic text-luxury-gold">People Remember</span></>
                )}
              </h2>
              <p className="text-luxury-muted leading-relaxed text-sm md:text-base">
                {t('aboutParagraph')}
              </p>
            </div>

            {/* Strengths bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengthsData.map((str, idx) => (
                <div key={idx} className="p-4 glass rounded-xl space-y-1.5 hover:glass-heavy transition-all hover:scale-[1.01]">
                  <div className="flex items-center gap-2 text-luxury-gold">
                    <Check className="w-4 h-4 text-luxury-gold flex-shrink-0 stroke-[3px]" />
                    <span className="font-serif text-sm font-semibold text-luxury-offwhite text-left">
                      {str.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-luxury-muted leading-relaxed pl-6">
                    {str.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics Showcase with Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-luxury-gold-dark/20">
              <div className="text-left space-y-1">
                <span className="block font-serif text-2xl md:text-4xl font-bold text-luxury-gold">
                  <CountUp end={50} suffix="+" />
                </span>
                <span className="block text-[10px] sm:text-[11px] font-mono tracking-[1px] text-luxury-offwhite/70 uppercase">
                  {language === 'bn' ? 'সক্রিয় উদ্যোক্তা' : 'ACTIVE FOUNDERS'}
                </span>
              </div>
              <div className="text-left space-y-1">
                <span className="block font-serif text-2xl md:text-4xl font-bold text-luxury-gold">
                  <CountUp end={80} suffix="+" />
                </span>
                <span className="block text-[10px] sm:text-[11px] font-mono tracking-[1px] text-luxury-offwhite/70 uppercase">
                  {language === 'bn' ? 'প্রকল্প সম্পন্ন' : 'PROJECTS DELIVERED'}
                </span>
              </div>
              <div className="text-left space-y-1">
                <span className="block font-serif text-2xl md:text-4xl font-bold text-luxury-gold">
                  <CountUp end={10} suffix="+" />
                </span>
                <span className="block text-[10px] sm:text-[11px] font-mono tracking-[1px] text-luxury-offwhite/70 uppercase">
                  {language === 'bn' ? 'বিশেষজ্ঞ যুক্ত' : 'EXPERTS ON BOARD'}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Subsection 1: MEET THE ADVISORY TEAM (about-team) */}
        <div id="about-team" className="mt-32 pt-20 border-t border-luxury-gold-dark/15 text-left">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-mono tracking-[3px] text-luxury-gold uppercase block">
              {language === 'bn' ? 'উপদেষ্টা পরিষদ' : 'ADVISORY COUNCIL'}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-luxury-offwhite font-bold">
              {language === 'bn' ? 'আপনার ব্র্যান্ড প্রতিষ্ঠা করার নেপথ্য কারিগর' : 'The Minds Steering Your Position'}
            </h3>
            <p className="text-sm text-luxury-muted leading-relaxed">
              {language === 'bn' 
                ? 'আমাদের পার্টনাররা আধুনিক ডিজাইন ও দীর্ঘকালীন ব্যবসায়িক মেধার সমন্বনয় ঘটান। আমরা ক্লায়েন্টের গোপনীয়তা রক্ষায় দৃঢ় প্রতিশ্রুতিবদ্ধ।' 
                : 'Our partners combine legacy investment experience with elite creative design. We operate in small, highly classified team pods around each private client.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 glass rounded-2xl hover:glass-heavy transition-all hover:scale-[1.01] group"
              >
                {/* Member headshot */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-luxury-gold-dark/30 flex-shrink-0">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-luxury-offwhite group-hover:text-luxury-gold transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-semibold">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-luxury-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Subsection 2: THE FAQ CORNER (about-faq) */}
        <div id="about-faq" className="mt-32 pt-20 border-t border-luxury-gold-dark/15 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side column FAQ prompt */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono tracking-[3px] text-luxury-gold uppercase block">
                {language === 'bn' ? 'সত্যের প্রতি অঙ্গীকারবদ্ধ' : 'COMMITMENT TO EXCELLENCE'}
              </span>
              <h3 className="font-serif text-3xl text-luxury-offwhite font-bold leading-tight">
                {language === 'bn' ? (
                  <>ব্যক্তিগত পরামর্শের <span className="italic text-luxury-gold">স্বচ্ছতা</span></>
                ) : (
                  <>Private Advisory <span className="italic text-luxury-gold">Transparency</span></>
                )}
              </h3>
              <p className="text-xs text-luxury-muted leading-relaxed">
                {language === 'bn'
                  ? 'ব্যক্তিগত ব্র্যান্ডিং এজেন্সি মূল্যায়ন করা একটি স্পর্শকাতর প্রক্রিয়া। এখানে আমাদের কঠোর কর্মপ্রবাহ, গোপনীয়তা এবং ক্লায়েন্ট নীতি সম্পর্কে স্পষ্ট ধারণা দেওয়া হল।'
                  : 'Evaluating a business branding agency is a personal project. Here are clear, unfiltered coordinates regarding our strict workflow, client constraints, and operational confidentiality.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-navy text-luxury-gold font-mono rounded-lg text-xs font-bold uppercase border border-luxury-gold-dark/30 hover:border-luxury-gold transition-all"
                >
                  {language === 'bn' ? 'অন্যান্য প্রশ্ন জিজ্ঞেস করুন' : 'Ask Other Question'}
                </button>
              </div>
            </div>

            {/* Right side Accordion */}
            <div className="lg:col-span-8 space-y-4">
              {faqData.map((faq) => (
                <div 
                  key={faq.id} 
                  className="p-5 glass rounded-xl space-y-2 hover:glass-heavy transition-all"
                >
                  <h4 className="font-serif text-base font-semibold text-luxury-offwhite flex items-center gap-2">
                    <span className="text-xs font-mono text-luxury-gold">[FAQ]</span>
                    {faq.question}
                  </h4>
                  <p className="text-xs text-luxury-muted leading-relaxed pl-10">
                    {faq.answer}
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
