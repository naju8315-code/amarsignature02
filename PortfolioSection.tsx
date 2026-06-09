/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Filter, Calendar, MapPin, Award, X, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ProjectItem } from '../types';

export default function PortfolioSection() {
  const [filter, setFilter] = useState<'All' | 'Strategy' | 'Branding' | 'Research'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { projectsData, t, language } = useThemeLanguage();

  const categoryLabels: Record<string, string> = {
    All: language === 'bn' ? 'সব' : 'All',
    Strategy: language === 'bn' ? 'কৌশলী' : 'Strategy',
    Branding: language === 'bn' ? 'ব্র্যান্ডিং' : 'Branding',
    Research: language === 'bn' ? 'গবেষণা' : 'Research'
  };

  // Filter project categories
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-luxury-surface/20 border-t border-b border-luxury-gold-dark/15 overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-10 left-10 w-80 h-80 radial-gold-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
              ● {t('portfolioPill')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-3xl text-luxury-offwhite font-bold leading-tight">
              {t('portfolioTitle')} <span className="italic text-luxury-gold">{t('portfolioHighlight')}</span>
            </h2>
            <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
              {t('portfolioDesc')}
            </p>
          </div>

          {/* Filtering Buttons */}
          <div className="flex flex-wrap gap-2.5 glass-pill p-2 rounded-xl">
            {(['All', 'Strategy', 'Branding', 'Research'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4.5 py-2 text-xs font-mono tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-bold' 
                    : 'text-luxury-offwhite/60 hover:text-luxury-gold hover:bg-white/5'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-2xl overflow-hidden cursor-pointer hover:border-luxury-gold/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:glass-heavy"
              id={`portfolio-item-${project.id}`}
            >
              
              {/* Media container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40 border-b border-luxury-gold-dark/15">
                {/* Image */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover Mask overlay with details label */}
                <div className="absolute inset-0 bg-luxury-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2.5 py-0.5 border border-luxury-gold bg-luxury-gold/20 text-luxury-gold font-mono text-[9px] uppercase font-bold tracking-widest rounded">
                      {language === 'bn' ? 'বিভাগ' : 'Category'}: {categoryLabels[project.category] || project.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-luxury-offwhite">
                      {project.title}
                    </h4>
                    <span className="flex items-center justify-center gap-1.5 text-xs text-luxury-gold font-mono uppercase tracking-wider">
                      {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Flat ribbon overlay */}
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 glass text-luxury-gold font-mono text-[9px] tracking-wider rounded uppercase shadow-md font-bold">
                  {categoryLabels[project.category] || project.category}
                </div>
              </div>

              {/* Headline info box below (shows by default) */}
              <div className="p-5 text-left space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-luxury-gold/80 block uppercase">
                  {project.clientName}
                </span>
                <h3 className="font-serif text-base font-bold text-luxury-offwhite group-hover:text-luxury-gold transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-[11px] text-luxury-muted line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Project Case Study Details modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div 
              className="relative w-full max-w-2xl glass-heavy rounded-2xl overflow-hidden shadow-2xl space-y-6"
              id="portfolio-modal-card"
            >
              {/* Image banner */}
              <div className="relative h-60 md:h-72 w-full">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-surface to-transparent" />
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 bg-black/50 hover:bg-black/80 text-luxury-offwhite hover:text-luxury-gold rounded-full transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text content details */}
              <div className="p-6 md:p-8 space-y-6 text-left">
                
                <div className="flex flex-wrap gap-4 items-center justify-between border-b border-luxury-gold-dark/15 pb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase block">
                      {language === 'bn' ? 'ব্যক্তিগত ক্লায়েন্ট ব্রিফ' : 'PRIVATE CLIENT BRIEF'}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-luxury-offwhite font-bold leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <span className="px-3 py-1 border border-luxury-gold bg-luxury-gold/15 text-luxury-gold text-xs font-mono font-bold tracking-widest uppercase rounded">
                    {categoryLabels[selectedProject.category] || selectedProject.category}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-luxury-muted uppercase block text-[10px] tracking-wider">{language === 'bn' ? 'ক্লায়েন্ট:' : 'Client:'}</span>
                    <span className="text-luxury-offwhite font-bold">{selectedProject.clientName}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-luxury-muted uppercase block text-[10px] tracking-wider">{language === 'bn' ? 'অবস্থান:' : 'Location:'}</span>
                    <span className="text-luxury-offwhite font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                      {selectedProject.location}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-luxury-muted uppercase block text-[10px] tracking-wider">{language === 'bn' ? 'সময়কাল:' : 'Timeline:'}</span>
                    <span className="text-luxury-offwhite font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                      {language === 'bn' ? `${selectedProject.year} অর্থবছর` : `Fiscal Year ${selectedProject.year}`}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-xs font-mono text-luxury-gold tracking-widest uppercase font-bold">
                    {language === 'bn' ? 'কেস স্টাডি বিশ্লেষণ:' : 'Case Study Analysis:'}
                  </span>
                  <p className="text-sm text-luxury-muted leading-relaxed">
                    {selectedProject.description} {language === 'bn' 
                      ? 'আমরা একটি ক্লায়েন্ট ভয়েস গাইড গঠন করেছি এবং ডিজিটাল পাবলিক অথরিটি বাড়াতে বিজ্ঞাপনের মাধ্যমে সম্পাদকীয় প্রকাশনা প্রস্তুত করেছি।'
                      : 'We structured a custom Voice Guide, integrated physical speech patterns, and curated editorial publication releases to achieve verified digital authority index ratings.'}
                  </p>
                </div>

                {/* CTA / back buttons */}
                <div className="pt-4 flex items-center justify-end border-t border-luxury-gold-dark/15">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-luxury-navy border border-luxury-gold text-luxury-gold rounded-lg font-mono text-xs uppercase tracking-wider hover:bg-luxury-gold/5 transition-all"
                  >
                    {language === 'bn' ? 'পোর্টফোলিওতে ফিরে যান' : 'Return to Portfolio'}
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
