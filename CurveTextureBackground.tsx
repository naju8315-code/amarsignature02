/**
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function CurveTextureBackground() {
  const { theme } = useThemeLanguage();
  const isDark = theme === 'dark';

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      id="luxury-curve-glowing-canvas"
    >
      {/* 🔮 Soft Radial Gradient Backlighting Aura */}
      <div 
        className={`absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-25 mix-blend-screen transition-all duration-1000 ${
          isDark 
            ? 'bg-gradient-to-tr from-luxury-gold-dark/20 to-luxury-gold/5' 
            : 'bg-gradient-to-tr from-luxury-gold/15 to-[#8a7232]/5'
        }`} 
      />
      <div 
        className={`absolute bottom-1/3 right-10 w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-20 mix-blend-screen transition-all duration-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-[#8C6F23]/15 to-luxury-navy/30' 
            : 'bg-gradient-to-br from-[#E8C96A]/10 to-[#E8C96A]/5'
        }`} 
      />

      {/* 🎨 Fluid Intersecting Vector Curved Lines with Rich Gold Gradient */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.25] dark:opacity-[0.16] transition-opacity duration-700"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fine Metallic Gold Gradient Stringent */}
          <linearGradient id="luxuryCurveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C6F23" stopOpacity="0.05" />
            <stop offset="30%" stopColor="#C9A84C" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#E8C96A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="luxuryCurveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#E8C96A" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#8C6F23" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8C6F23" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="glowGlint" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8C96A" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8C96A" stopOpacity="1" />
            <stop offset="100%" stopColor="#E8C96A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dynamic Curved Ribbon 1 */}
        <motion.path
          d="M -100,200 C 300,100 500,600 900,300 C 1200,100 1300,700 1600,400"
          stroke="url(#luxuryCurveGrad1)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Accent Offset Ribbon 1 */}
        <motion.path
          d="M -80,215 C 310,118 495,585 905,310 C 1195,115 1305,685 1595,410"
          stroke="url(#luxuryCurveGrad1)"
          strokeWidth="0.6"
          strokeDasharray="4 8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Dynamic Curved Ribbon 2 (Intersecting Wave) */}
        <motion.path
          d="M -50,650 C 400,850 600,150 1000,500 C 1250,700 1350,200 1550,300"
          stroke="url(#luxuryCurveGrad2)"
          strokeWidth="1.0"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 3.0, ease: 'easeInOut', delay: 0.2 }}
        />

        {/* Dynamic Curved Ribbon 3 (Sweeping Subtle Horizon) */}
        <motion.path
          d="M -150,450 C 250,300 750,750 1150,450 C 1350,320 1450,550 1600,500"
          stroke="url(#luxuryCurveGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3.2, ease: 'easeInOut', delay: 0.6 }}
        />

        {/* Elegant Floating Light Particles/Nodes on the curves */}
        <motion.circle
          cx="390"
          cy="320"
          r="2.5"
          fill="#E8C96A"
          className="shadow-2xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.circle
          cx="1000"
          cy="500"
          r="2"
          fill="#E8C96A"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <motion.circle
          cx="750"
          cy="600"
          r="1.5"
          fill="#E8C96A"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </svg>

      {/* Grid crosshair coordinate decals in corners for bespoke layout precision */}
      <div className="absolute top-[20%] left-10 w-2 h-2 border-l border-t border-luxury-gold/20" />
      <div className="absolute top-[20%] right-10 w-2 h-2 border-r border-t border-luxury-gold/20" />
      <div className="absolute bottom-[20%] left-10 w-2 h-2 border-l border-b border-luxury-gold/20" />
      <div className="absolute bottom-[20%] right-10 w-2 h-2 border-r border-b border-luxury-gold/20" />
    </div>
  );
}
