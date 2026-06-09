/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Calendar, Users, HelpCircle, Briefcase, Award, FolderKanban, Info, Sparkles, Star, Layers, ScrollText, Phone, Sun, Moon, Globe } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import ThemeToggle from './ThemeToggle';
import GlobeThemeController from './GlobeThemeController';

interface NavbarProps {
  onOpenBooking: (pkg?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenBooking, onScrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { language, setLanguage, theme, setTheme, t } = useThemeLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = [
    { label: t('navHome'), id: 'home' },
    { 
      label: t('navAbout'), 
      id: 'about',
      hasDropdown: true,
      dropdownItems: [
        { label: t('navTeam'), id: 'about-team', icon: Users, desc: t('aboutTeamTitle') },
        { label: t('navFAQ'), id: 'about-faq', icon: HelpCircle, desc: t('aboutFaqTitle') }
      ]
    },
    { 
      label: t('navPackages'), 
      id: 'packages', 
      badge: '3',
      hasDropdown: true,
      dropdownItems: [
        { label: t('standard'), id: 'packages', price: '৳90,000', icon: Layers, desc: t('standard') },
        { label: t('growth'), id: 'packages', price: '৳1,35,000', icon: Sparkles, desc: t('growth') },
        { label: t('platinum'), id: 'packages', price: 'Premium', labelBadge: 'Premium', icon: Award, desc: t('platinum') }
      ]
    },
    { label: t('navServices'), id: 'services' },
    { label: t('navPricing'), id: 'packages' },
    { 
      label: t('navProjects'), 
      id: 'projects',
      hasDropdown: true,
      dropdownItems: [
        { label: t('portfolioTitle'), id: 'projects', icon: FolderKanban, desc: t('portfolioHeadline') },
        { label: t('portfolioSubtitle'), id: 'projects', icon: ScrollText, desc: t('portfolioHeadline') }
      ]
    },
    { label: t('navContact'), id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <>
      <header 
        id="luxury-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass py-2 shadow-2xl' : 'bg-luxury-navy/40 backdrop-blur-xs py-4'
        }`}
        style={{ height: '68px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            id="brand-logo"
          >
            {/* Monogram in gold square */}
            <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-dark to-luxury-gold flex items-center justify-center rounded-lg shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif text-xl font-bold text-luxury-navy tracking-tight select-none">AS</span>
            </div>
            {/* Wordmark */}
            <div className="flex flex-col">
              <span className="font-serif text-lg leading-tight font-bold tracking-wider text-luxury-offwhite">
                {language === 'bn' ? 'আমার ' : 'AMAR '}<span className="text-luxury-gold block sm:inline">{language === 'bn' ? 'সিগনেচার' : 'SIGNATURE'}</span>
              </span>
              <span className="text-[9px] font-mono tracking-[2px] text-luxury-gold/70 uppercase">
                {t('navLegacyStudio')}
              </span>
            </div>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <button
                  onClick={() => !item.hasDropdown && handleLinkClick(item.id)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-luxury-offwhite hover:text-luxury-gold transition-colors font-medium tracking-wide focus:outline-none cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[9px] font-mono bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 text-luxury-gold/80 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 mt-1 glass-heavy rounded-xl shadow-2xl p-2.5 transition-all duration-300 origin-top transform scale-100 opacity-100"
                    id={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="space-y-1">
                      {item.dropdownItems?.map((drop) => {
                        const DropIcon = drop.icon;
                        return (
                          <button
                            key={drop.label}
                            onClick={() => handleLinkClick(drop.id)}
                            className="w-full flex items-start gap-3 p-2.5 hover:bg-white/5 rounded-lg text-left transition-all group/item cursor-pointer focus:outline-none"
                          >
                            <div className="mt-0.5 p-1.5 bg-luxury-gold/10 border border-luxury-gold/20 rounded-md text-luxury-gold group-hover/item:bg-luxury-gold group-hover/item:text-luxury-navy transition-all">
                              <DropIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-luxury-offwhite group-hover/item:text-luxury-gold transition-colors block truncate">
                                  {drop.label}
                                </span>
                                {'price' in drop && (
                                  <span className={`text-[10px] font-mono px-1.5 py-0.2 border rounded ${
                                    drop.labelBadge ? 'border-luxury-gold bg-luxury-gold/20 text-luxury-gold font-bold' : 'border-white/10 text-luxury-offwhite/70'
                                  }`}>
                                    {drop.price}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-luxury-muted truncate mt-0.5">
                                {drop.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* Underline hover effect */}
                <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 🌐 Elegant floating 'Globe & Sun/Moon' control panel with tactile interactions */}
            <div className="flex items-center border-r border-luxury-gold/15 pr-3 mr-1">
              <GlobeThemeController id="desktop-globe-theme-ctrl" />
            </div>

            <button 
              onClick={() => handleLinkClick('contact')}
              id="sticky-nav-contact-btn"
              className="px-4 py-1.5 text-xs font-mono tracking-wider text-luxury-gold hover:text-luxury-offwhite border border-luxury-gold-dark/30 hover:border-luxury-gold rounded-md transition-all uppercase cursor-pointer"
            >
              {t('navContact')}
            </button>
            <button 
              onClick={() => onOpenBooking()}
              id="sticky-nav-book-btn"
              className="flex items-center gap-1.5 px-4.5 py-1.5 text-xs font-serif bg-gradient-to-r from-luxury-gold-dark to-luxury-gold hover:from-luxury-gold hover:to-luxury-gold-light text-luxury-navy font-bold rounded-md shadow-lg shadow-luxury-gold/5 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t('navBookSession')}
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              id="mobile-menu-trigger"
              className="p-2 text-luxury-offwhite hover:text-luxury-gold bg-white/5 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Bottom edge: 2px gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-dark/40 to-transparent" />
      </header>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-sm glass-heavy border-l border-luxury-gold-dark/20 h-full p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 z-50">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-luxury-gold flex items-center justify-center rounded text-luxury-navy font-bold text-base">
                    AS
                  </div>
                  <span className="font-serif text-base font-bold text-luxury-offwhite">
                    AMAR SIGNATURE
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  id="mobile-menu-close"
                  className="p-2 text-luxury-offwhite/80 hover:text-luxury-gold hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-8 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (item.hasDropdown) {
                            toggleDropdown(item.label);
                          } else {
                            handleLinkClick(item.id);
                          }
                        }}
                        className="text-left font-serif text-lg text-luxury-offwhite hover:text-luxury-gold transition-colors focus:outline-none w-full flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className="px-1.5 py-0.2 text-[9px] font-mono bg-luxury-gold/20 text-luxury-gold border border-luxury-gold/40 rounded-full font-bold">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDown className={`w-4 h-4 text-luxury-gold/85 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        )}
                      </button>
                    </div>

                    {/* Mobile Dropdown items */}
                    {item.hasDropdown && activeDropdown === item.label && (
                      <div className="pl-4 border-l border-luxury-gold-dark/20 space-y-2.5 mt-2 py-1">
                        {item.dropdownItems?.map((drop) => (
                          <button
                            key={drop.label}
                            onClick={() => handleLinkClick(drop.id)}
                            className="w-full text-left flex flex-col hover:bg-white/5 p-1.5 rounded transition-all focus:outline-none"
                          >
                            <span className="text-xs font-semibold text-luxury-offwhite/90 flex items-center justify-between">
                              {drop.label}
                              {'price' in drop && <span className="text-[9px] font-mono text-luxury-gold">{drop.price}</span>}
                            </span>
                            <span className="text-[10px] text-luxury-muted mt-0.5">{drop.desc}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom CTAs */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              {/* Mobile Preferences Toggles */}
              <div className="flex items-center justify-between pb-3" id="mobile-preferences">
                <span className="text-[10px] font-mono tracking-wider uppercase text-luxury-muted">Preferences</span>
                <GlobeThemeController id="mobile-globe-theme-ctrl" />
              </div>

              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-serif font-bold rounded-lg shadow-lg shadow-luxury-gold/10"
              >
                <Calendar className="w-4 h-4" />
                {t('navBookSession')}
              </button>
              <div className="flex justify-center gap-6 text-xs font-mono text-luxury-gold/60">
                <span>{language === 'bn' ? 'গুলশান-২, ঢাকা' : 'Gulshan-2, Dhaka'}</span>
                <span>•</span>
                <span>@amarsignature</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
