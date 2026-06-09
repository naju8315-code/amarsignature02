/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Globe, Sun, Moon, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface GlobeThemeControllerProps {
  id?: string;
  className?: string;
}

export default function GlobeThemeController({ id = 'floating-globe-theme-ctrl', className = '' }: GlobeThemeControllerProps) {
  const { language, setLanguage, theme, setTheme } = useThemeLanguage();
  const [isGlobeSpinning, setIsGlobeSpinning] = useState(false);
  const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleLanguageToggle = (lang: 'en' | 'bn') => {
    if (language !== lang) {
      setLanguage(lang);
      setIsGlobeSpinning(true);
      setTimeout(() => setIsGlobeSpinning(false), 900);
    }
  };

  const cycleLanguage = () => {
    const nextLang = language === 'en' ? 'bn' : 'en';
    handleLanguageToggle(nextLang);
  };

  return (
    <div
      id={id}
      className={`relative flex items-center gap-1.5 p-1 rounded-full border shadow-xl hover:shadow-[0_8px_30px_rgb(201,168,76,0.12)] transition-all duration-300 ${
        isDark
          ? 'bg-black/40 border-luxury-gold/20 backdrop-blur-md text-luxury-offwhite hover:border-luxury-gold/40'
          : 'bg-white/80 border-luxury-gold-dark/20 backdrop-blur-md text-luxury-navy hover:border-luxury-gold-dark/45 shadow-luxury-gold/5'
      } ${className}`}
    >
      {/* 🌐 Language Switcher Portion with Micro Scroll/Tabs & Globe */}
      <div className="relative flex items-center pl-1">
        {/* Animated Globe Tooltip */}
        <AnimatePresence>
          {showLanguageTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-12 left-2 z-50 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-md border border-luxury-gold/20 shadow-xl pointer-events-none whitespace-nowrap bg-luxury-navy text-luxury-gold"
            >
              <div className="flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                {language === 'en' ? 'Switch to Bangla' : 'ইংরেজিতে পরিবর্তন করুন'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tactile spinning Globe container */}
        <button
          onClick={cycleLanguage}
          onMouseEnter={() => setShowLanguageTooltip(true)}
          onMouseLeave={() => setShowLanguageTooltip(false)}
          className={`relative p-1.5 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none ${
            isDark ? 'hover:bg-luxury-gold/10' : 'hover:bg-luxury-gold-dark/10'
          }`}
          aria-label="Toggle language"
        >
          <motion.div
            animate={{ rotate: isGlobeSpinning ? 360 : 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            <Globe className={`w-4 h-4 transition-colors duration-300 ${isDark ? 'text-luxury-gold' : 'text-luxury-gold-dark'}`} />
          </motion.div>
          {/* Subtle pulse ring on hover */}
          <span className="absolute inset-0 rounded-full border border-luxury-gold/30 opacity-0 hover:scale-110 hover:opacity-100 transition-all duration-300" />
        </button>

        {/* Rounded horizontal switch selector, using Framer motion sliding pill */}
        <div className={`relative flex items-center rounded-full p-0.5 ml-1 ${
          isDark ? 'bg-black/30' : 'bg-luxury-gold/5'
        }`}>
          {/* Active Sliding pill */}
          <motion.div
            layout
            className="absolute rounded-full bg-gradient-to-r from-luxury-gold-dark to-luxury-gold shadow-md h-[18px] z-0"
            style={{
              width: language === 'en' ? '24px' : '28px',
              left: language === 'en' ? '2px' : '28px',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          />

          <button
            onClick={() => handleLanguageToggle('en')}
            className={`relative z-10 w-6 h-4.5 flex items-center justify-center text-[9px] font-mono font-extrabold cursor-pointer focus:outline-none transition-colors duration-300 ${
              language === 'en' ? 'text-luxury-navy' : isDark ? 'text-luxury-offwhite/50 hover:text-luxury-offwhite' : 'text-luxury-navy/60 hover:text-luxury-navy'
            }`}
          >
            EN
          </button>

          <button
            onClick={() => handleLanguageToggle('bn')}
            className={`relative z-10 w-7 h-4.5 flex items-center justify-center text-[9px] font-sans font-black tracking-normal cursor-pointer focus:outline-none transition-colors duration-300 ${
              language === 'bn' ? 'text-luxury-navy' : isDark ? 'text-luxury-offwhite/50 hover:text-luxury-offwhite' : 'text-luxury-navy/60 hover:text-luxury-navy'
            }`}
          >
            বাং
          </button>
        </div>
      </div>

      {/* Elegant Separator dot with gold gradient aura */}
      <span className="w-[1px] h-4 bg-gradient-to-g from-transparent via-luxury-gold/25 to-transparent mx-0.5" />

      {/* ☀️ / 🌙 Visual Theme Toggle segment */}
      <div className="relative pr-1 flex items-center">
        {/* Theme Tooltip */}
        <AnimatePresence>
          {showThemeTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-12 right-2 z-50 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-md border border-luxury-gold/20 shadow-xl pointer-events-none whitespace-nowrap bg-luxury-navy text-luxury-gold"
            >
              {isDark ? (language === 'bn' ? 'লাইট মোড' : 'Light Mode') : (language === 'bn' ? 'ডার্ক মোড' : 'Dark Mode')}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleTheme}
          onMouseEnter={() => setShowThemeTooltip(true)}
          onMouseLeave={() => setShowThemeTooltip(false)}
          className={`relative w-7 h-7 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer focus:outline-none ${
            isDark 
              ? 'hover:bg-white/5 text-luxury-gold' 
              : 'hover:bg-black/5 text-luxury-gold-dark'
          }`}
          aria-label="Toggle theme mode"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon-to-sun"
                initial={{ y: 10, rotate: -30, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: -10, rotate: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex items-center justify-center"
              >
                <Sun className="w-4 h-4 text-luxury-gold" />
              </motion.div>
            ) : (
              <motion.div
                key="sun-to-moon"
                initial={{ y: 10, rotate: -30, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                exit={{ y: -10, rotate: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex items-center justify-center"
              >
                <Moon className="w-4 h-4 text-luxury-gold-dark" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Aesthetic orbital feedback ring */}
          <motion.span 
            className="absolute inset-[2px] rounded-full border border-luxury-gold/15 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
            whileHover={{ scale: 1.15 }}
          />
        </button>
      </div>
    </div>
  );
}
