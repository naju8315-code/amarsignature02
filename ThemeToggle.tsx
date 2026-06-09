/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
  id?: string;
}

export default function ThemeToggle({ className = '', id = 'theme-toggle-btn' }: ThemeToggleProps) {
  const { theme, setTheme } = useThemeLanguage();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative p-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.08] focus:outline-none cursor-pointer group ${
        isDark 
          ? 'bg-black/20 border border-luxury-gold/15 text-luxury-gold hover:bg-black/30' 
          : 'bg-luxury-gold/10 border border-luxury-gold-dark/20 text-luxury-gold-dark hover:bg-luxury-gold/20'
      } ${className}`}
      id={id}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle visual theme"
    >
      {/* Background ripple on hover */}
      <span className="absolute inset-0 bg-radial from-luxury-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-sun"
            initial={{ y: 20, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: 45, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4.5 h-4.5 text-luxury-gold" />
          </motion.div>
        ) : (
          <motion.div
            key="light-moon"
            initial={{ y: 20, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: 45, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4.5 h-4.5 text-luxury-gold-dark" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
