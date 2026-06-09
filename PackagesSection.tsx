/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Info, ShieldAlert, Award, Star, Zap, HelpCircle } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface PackagesSectionProps {
  onOpenBooking: (pkg: string) => void;
}

export default function PackagesSection({ onOpenBooking }: PackagesSectionProps) {
  // true = 3-Month (Quarterly Plan), false = Monthly
  const [isQuarterly, setIsQuarterly] = useState(true);
  const { packagesData, t, language } = useThemeLanguage();

  return (
    <section id="packages" className="relative py-24 bg-luxury-surface/30 border-t border-b border-luxury-gold-dark/15 overflow-hidden">
      {" "}
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● {t('pricingPill')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
            {t('pricingTitlePart1')} <span className="italic text-luxury-gold">{t('pricingTitleHighlight')}</span>
          </h2>
          <p className="text-sm text-luxury-muted">
            {t('pricingDesc')}
          </p>

          {/* Monthly vs. 3-Month Toggler switch */}
          <div className="pt-6 flex items-center justify-center">
            <div className="inline-flex p-1 bg-luxury-navy border border-luxury-gold-dark/20 rounded-full">
              <button
                onClick={() => setIsQuarterly(false)}
                className={`px-5 py-2 text-xs font-mono tracking-wider rounded-full uppercase transition-all cursor-pointer ${
                  !isQuarterly 
                    ? 'bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-bold' 
                    : 'text-luxury-offwhite/70 hover:text-luxury-offwhite'
                }`}
              >
                {language === 'bn' ? 'মাসিক পরিকল্পনা' : 'Monthly Plan'}
              </button>
              <button
                onClick={() => setIsQuarterly(true)}
                className={`relative px-5 py-2 text-xs font-mono tracking-wider rounded-full uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  isQuarterly 
                    ? 'bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-bold' 
                    : 'text-luxury-offwhite/70 hover:text-luxury-offwhite'
                }`}
              >
                {language === 'bn' ? '৩-মাসের রিটেইনার' : '3-Month Retainer'}
                <span className="text-[8px] font-bold px-1.5 py-0.2 bg-white/20 text-current rounded-full">
                  {language === 'bn' ? '১৫% সাশ্রয়' : 'SAVE 15%'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {packagesData.map((pkg) => {
            const finalPrice = isQuarterly ? pkg.priceQuarterly : pkg.priceMonthly;
            const savingsText = isQuarterly 
              ? language === 'bn' 
                ? `${t('saveOverQuarter')} ৳${(pkg.priceMonthly * 3 - pkg.priceQuarterly).toLocaleString()}`
                : `Save ৳${(pkg.priceMonthly * 3 - pkg.priceQuarterly).toLocaleString()} over 3 months`
              : null;

            return (
              <div 
                key={pkg.id}
                className={`relative glass rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group ${
                  pkg.isFeatured 
                    ? 'border-2 border-luxury-gold shadow-[0_10px_30px_rgba(232,201,106,0.15)] lg:-translate-y-4 bg-[#0A0F1E]/80 backdrop-blur-lg' 
                    : 'hover:glass-heavy'
                }`}
                id={`price-card-${pkg.id}`}
              >
                
                {/* Popularity Badge/Premium Ribbon */}
                {pkg.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy text-[10px] font-mono font-black tracking-widest px-4 py-1.5 rounded-full shadow-md uppercase">
                    {language === 'bn' ? '🥇 সর্বাধিক জনপ্রিয়' : '🥇 MOST POPULAR PROGRAM'}
                  </div>
                )}
                {pkg.tag && !pkg.isFeatured && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono border border-luxury-gold/50 px-2 py-0.5 rounded text-luxury-gold tracking-widest uppercase font-bold">
                    {pkg.tag}
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* Name and description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-luxury-offwhite font-bold group-hover:text-luxury-gold transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-luxury-muted leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price display block */}
                  <div className="border-t border-b border-luxury-gold-dark/15 py-4 space-y-1.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-3xl font-serif font-black text-luxury-gold">
                        ৳{finalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-luxury-muted">
                        / {isQuarterly ? (language === 'bn' ? 'ত্রিমাসিক' : 'quarter') : (language === 'bn' ? 'মাস' : 'month')}
                      </span>
                    </div>
                    {savingsText && (
                      <p className="text-[10px] font-mono text-emerald-400 font-medium">
                        ✦ {savingsText}
                      </p>
                    )}
                  </div>

                  {/* Feature listing */}
                  <div className="space-y-3.5">
                    <span className="block text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold">
                      {language === 'bn' ? 'প্রগ্রামে যা অন্তর্ভুক্ত রয়েছে:' : 'INCLUDED IN PROGRAM:'}
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-luxury-offwhite/90">
                          <Check className="w-4 h-4 text-luxury-gold mt-0.5 flex-shrink-0 stroke-[2.5]" />
                          <span className="leading-tight text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing CTA Button */}
                <div className="pt-8 text-left mt-auto">
                  <button
                    onClick={() => onOpenBooking(pkg.name)}
                    className={`w-full py-3 rounded-lg font-mono tracking-wider text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isFeatured 
                        ? 'bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light text-luxury-navy shadow-lg hover:shadow-luxury-gold/20' 
                        : 'bg-luxury-surface text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy border border-luxury-gold-dark/30 hover:border-luxury-gold'
                    }`}
                  >
                    {language === 'bn' ? `${pkg.name.split(' ')[0]} প্যাকেজটি সিলেক্ট করুন` : `Select ${pkg.name.split(' ')[0]} retainer`}
                  </button>
                  <p className="text-center text-[10px] text-luxury-muted mt-2.5 font-mono">
                    ✦ {language === 'bn' ? 'প্রোগ্রাম শুরুর পূর্বে এনডিএ চুক্তি স্বাক্ষর আবশ্যক' : 'Signed NDA required prior to program kickoff'}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Value promise statement bar */}
        <div className="mt-16 p-5 rounded-xl glass text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 bg-luxury-gold/5 border border-luxury-gold-dark/20 rounded-lg text-luxury-gold">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-0.5 flex-1 text-center sm:text-left">
            <h4 className="text-xs font-mono tracking-wider text-luxury-gold uppercase font-bold">
              {language === 'bn' ? 'নিশ্চিত মিডিয়া প্লেসমেন্টের শর্তাবলী' : 'Guaranteed Media Placement Terms'}
            </h4>
            <p className="text-[11px] text-luxury-muted leading-relaxed">
              {language === 'bn' 
                ? 'যদি আমাদের কৌশলবিদরা ম্যাট্রিক্স অনুমোদনের ৭৫ কার্যদিবসের মধ্যে দক্ষিণ এশিয়ার প্রধান আর্থিক কলামগুলোতে আপনার ভেরিফাইড প্রোফাইল ফিচার প্রকাশ করতে ব্যর্থ হন, তবে আমরা আপনার প্রাথমিক অগ্রিম খতিয়ান শর্তহীনভাবে ১০০% ফেরত দেব।'
                : 'If our strategists fail to book your verified profile features in major South Asian financial columns within 75 calendar days of matrix approval, we will refund 100% of your initial downpayment, unconditionally.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
