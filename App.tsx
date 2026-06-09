/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Quote, Shield, Award, MapPin, Sparkles, Star, ScrollText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import PackagesSection from './components/PackagesSection';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';
import CountUp from './components/CountUp';
import CustomCursor from './components/CustomCursor';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import ReactHelmet from './components/ReactHelmet';
import SkeletonLoader from './components/SkeletonLoader';
import CurveTextureBackground from './components/CurveTextureBackground';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  const { language, t } = useThemeLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300); // 1.3 seconds for perfect luxurious branding intro response time
    return () => clearTimeout(timer);
  }, []);

  const handleOpenBooking = (pkgName?: string) => {
    setSelectedPkg(pkgName);
    setBookingOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 68; // Adjust for 68px sticky navbar
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="amar-signature-app" className="relative min-h-screen bg-luxury-navy text-luxury-offwhite font-sans antialiased selection:bg-luxury-gold selection:text-luxury-navy">
      
      {/* 🚀 Dynamic SEO Head metadata management utilizing React 19 native hoisting */}
      <ReactHelmet />

      {/* Premium Luxury loading skeleton preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[250000]"
          >
            <SkeletonLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom magnetic interactive cursor with premium feel */}
      <CustomCursor />

      {/* Elegant curves with glowing gold-navy gradient overlays */}
      <CurveTextureBackground />

      {/* Absolute Radial glow highlights */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] radial-gold-glow pointer-events-none select-none z-0" />
      <div className="absolute top-[800px] left-[-100px] w-[450px] h-[450px] radial-gold-glow pointer-events-none select-none z-0" />

      {/* 🧭 PREMIUM NAVIGATION BAR */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 🖼 HERO SECTION — FULL CLINEMATIC */}
      <section 
        id="home" 
        className="relative pt-[120px] pb-20 md:py-32 xl:py-40 min-h-screen flex items-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content column (55%) */}
            <div className="lg:col-span-7 text-left space-y-8">
              
              {/* Premium Pill tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill text-luxury-gold shadow-md">
                <span className="w-2 h-2 bg-luxury-gold rounded-full animate-ping" />
                <span className="font-mono text-[10px] uppercase tracking-[2px] font-bold">
                  ● {t('heroPill')}
                </span>
              </div>

              {/* Majestic Editorial Heading */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-luxury-offwhite font-bold leading-[1.1] tracking-tight">
                  {t('heroTitlePart1')}<span className="text-luxury-gold italic block sm:inline">{t('heroTitleHighlight')}</span>{t('heroTitlePart2')}
                </h1>
                
                {/* Description tailored for Bangladeshi target demographics */}
                <p className="text-sm md:text-base text-luxury-muted max-w-xl leading-relaxed">
                  {t('heroDesc')}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => handleScrollToSection('projects')}
                  id="hero-view-projects-btn"
                  className="px-7 py-3.5 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light text-luxury-navy font-serif font-bold rounded-lg shadow-xl shadow-luxury-gold/10 hover:shadow-luxury-gold/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {t('heroCtaProjects')}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenBooking()}
                  id="hero-book-call-btn"
                  className="px-7 py-3.5 bg-transparent hover:bg-luxury-gold hover:text-luxury-navy text-luxury-gold font-serif font-semibold border-2 border-luxury-gold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {t('heroCtaBook')}
                  <Calendar className="w-4 h-4" />
                </button>
              </div>

              {/* Scroll guide hint */}
              <div className="pt-10 flex items-center gap-4 text-left">
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-luxury-gold to-transparent" />
                <span className="font-mono text-[9px] uppercase tracking-[3px] text-luxury-gold font-bold">
                  {language === 'bn' ? 'আমাদের লিগ্যাসি এক্সপ্লোর করতে স্ক্রোল করুন' : 'Scroll to explore legacy guides'}
                </span>
              </div>

            </div>

            {/* Right Asset Collage column (45%) */}
            <div className="lg:col-span-5 relative">
              
              {/* Subtle tech dot matrix grid decoration behind */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-[radial-gradient(rgba(201,168,76,0.15)_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />

              {/* Main Overlapping Collage Matrix */}
              <div className="grid grid-cols-12 gap-4 items-stretch">
                
                {/* 1. Tall primary executive portrait */}
                <motion.div 
                  className="col-span-8 relative rounded-2xl overflow-hidden border border-luxury-gold-dark/30 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.92, y: 35 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  <motion.div
                    className="w-full h-full relative"
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                      alt="Bangladesh elite business founder portrait" 
                      className="w-full h-80 sm:h-96 object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle inner shadow mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/95 via-transparent to-transparent" />

                    {/* Floating Stat Pill overlaid inside main tall portrait */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-heavy rounded-xl flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      <span className="font-mono text-[9px] text-luxury-gold font-bold tracking-widest uppercase">
                        ● {t('heroPillFounders')}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 2. Side-stacked smaller reference pictures */}
                <div className="col-span-4 flex flex-col gap-4">
                  
                  {/* Strategy board photo */}
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-luxury-gold-dark/20 h-36"
                    initial={{ opacity: 0, scale: 0.88, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" 
                      alt="Corporate strategy boardroom" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* Meeting photo */}
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-luxury-gold-dark/20 h-36"
                    initial={{ opacity: 0, scale: 0.88, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" 
                      alt="Consultant board session" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>

                  {/* 3. Stat Card overlay on side stack */}
                  <motion.div 
                    className="p-3 glass rounded-xl text-center space-y-0.5 shadow-xl"
                    initial={{ opacity: 0, scale: 0.88, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
                  >
                    <span className="block text-xl font-serif text-luxury-gold font-black">
                      <CountUp end={80} suffix="+" />
                    </span>
                    <span className="block text-[8px] font-mono tracking-widest text-luxury-offwhite/85 uppercase">
                      {t('heroStatProjects')}
                    </span>
                  </motion.div>

                </div>

              </div>

              {/* Decorative luxury logo circle watermark */}
              <div className="absolute -bottom-6 -left-6 glass border-2 border-luxury-gold p-3.5 rounded-full shadow-2xl z-20 animate-spin-slow hidden sm:flex items-center justify-center font-serif text-xs font-bold text-luxury-gold w-14 h-14">
                {t('heroBadgeMark')}
              </div>

            </div>

          </div>

        </div>

        {/* Abstract vector overlay mesh lines for luxury design depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,168,76,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none select-none z-0" />
      </section>

      {/* 📄 ABOUT MODULE */}
      <AboutSection onOpenBooking={() => handleOpenBooking()} />

      {/* ⚙️ SERVICES GRIID LAYER */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* 🧭 PROPRIETARY BLUEPRINT TIMELINE */}
      <HowItWorks />

      {/* 📊 WHY CHOOSE US METRIC INDICATORS */}
      <WhyChooseUs />

      {/* 💳 RETAINER PRICING SCHEME AND TOGGLES */}
      <PackagesSection onOpenBooking={handleOpenBooking} />

      {/* 🖼 PORTFOLIO GRID CASE HISTORIES */}
      <PortfolioSection />

      {/* 🎖 AWARDS GALLERY SLIDER */}
      <AwardsSection />

      {/* ⭐ TESTIMONIALS SLIDER SECTION */}
      <TestimonialsSection />

      {/* 📄 RECURRING INSIGHTS BLOG POSTS */}
      <BlogSection />

      {/* 📧 CONNECT WITH US COORDINATES MODULE */}
      <ContactSection />

      {/* ⚙️ MAIN FOOTER SECTION */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 🟩 WA COORDINATES LIVE FLOATING TRIGGER */}
      <WhatsAppButton />

      {/* 📅 DIALOG BOOKING FORM POPUP CODES */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        preferredPackage={selectedPkg} 
      />

    </div>
  );
}
