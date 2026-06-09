/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, Calendar, Clock, BookOpen, X, Sparkles } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { BlogPost } from '../types';
import ReactHelmet from './ReactHelmet';

export default function BlogSection() {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);
  const { blogPostsData, t, language } = useThemeLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubbed(true);
    setNewsletterEmail('');
  };

  return (
    <section id="blog" className="relative py-24 bg-luxury-navy overflow-hidden">
      {" "}
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 left-1/2 w-80 h-80 radial-gold-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/15 text-luxury-gold text-xs font-mono tracking-[2.5px] uppercase rounded-full border border-luxury-gold/30">
            ● {t('insightsPill')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-offwhite font-bold leading-tight">
            {t('insightsTitle')} <span className="italic text-luxury-gold">{t('insightsHighlight')}</span>
          </h2>
          <p className="text-xs md:text-sm text-luxury-muted">
            {t('insightsDesc')}
          </p>
        </div>

        {/* 3-column Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article 
              key={post.id}
              className="group glass rounded-2xl overflow-hidden hover:border-luxury-gold/40 hover:glass-heavy transition-all duration-300 flex flex-col justify-between"
              id={`blog-post-${post.id}`}
            >
              <div className="space-y-4">
                {/* Media frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/20 border-b border-luxury-gold-dark/10">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 glass text-luxury-gold font-mono text-[9px] uppercase tracking-wider rounded font-bold shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Info and content */}
                <div className="p-6 text-left space-y-3">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-luxury-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-luxury-gold" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-luxury-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-luxury-offwhite group-hover:text-luxury-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-luxury-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action read indicator */}
              <div className="p-6 pt-0 text-left">
                <button
                  onClick={() => setReadingPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-luxury-gold group-hover:text-luxury-offwhite uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  {language === 'bn' ? 'বিস্তারিত পড়ুন' : 'Read More'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Dynamic Subsection: PRIVATE SUBSCRIBER LETTER */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl glass-heavy text-left relative overflow-hidden">
          {/* Subtle logo bg mark */}
          <div className="absolute right-6 bottom-2 text-luxury-gold/5 font-serif text-9xl font-black pointer-events-none select-none">AS</div>

          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase font-bold block">
              {language === 'bn' ? '✦ প্রকাশ্য ইন্টেলিজেন্স রিলিজ' : '✦ CLASSIFIED INTELLIGENCE RELEASES'}
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-luxury-offwhite font-bold leading-tight">
              {language === 'bn' 
                ? '১,২০০+ উচ্চ-মূল্যের বাংলাদেশী বিশিষ্ট ব্যক্তিবর্গের সাথে যোগ দিন যারা "দ্য সিগনেচার ব্রিফ" পড়ছেন' 
                : 'Join 1,200+ High-Net-Worth Bangladeshi Leaders Reading The Signature Brief'}
            </h3>
            <p className="text-xs md:text-sm text-luxury-muted leading-relaxed">
              {language === 'bn' 
                ? 'আমরা কর্পোরেট ইমেলগুলোতে দ্বিসাপ্তাহিক, ব্যক্তিগত উপদেশনা, লাক্সারি উপস্থাপনা এবং ডিজিটাল ট্রাস্ট মেকানিক্স সরাসরি পাঠিয়ে থাকি। কোনো অপ্রয়োজনীয় প্রচার নেই।' 
                : 'We send bi-weekly, private advisories on reputation optimization, luxury presentation strategy, speechwriter blueprints, and digital trust mechanics directly to your corporate inbox. No spam. No promotions.'}
            </p>

            {/* Newsletter input trigger */}
            {!newsletterSubbed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold" />
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার কর্পোরেট ইমেইল লিখুন' : 'Enter corporate email address'}
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-luxury-gold-dark/25 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold rounded-xl text-sm placeholder:text-luxury-offwhite/30 text-luxury-offwhite focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-luxury-gold-dark to-luxury-gold text-luxury-navy font-mono text-xs font-bold uppercase rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                >
                  {language === 'bn' ? 'সার্কেলে যোগ দিন' : 'Join Circle'}
                </button>
              </form>
            ) : (
              <div className="p-4 bg-luxury-gold/5 border border-luxury-gold-dark/35 rounded-xl text-xs text-luxury-gold font-bold inline-flex items-center gap-2">
                <span>✦ {language === 'bn' ? 'আমন্ত্রণ নিশ্চিত হয়েছে। আমার সিগনেচারের এলিট প্রাপক তালিকায় আপনাকে স্বাগতম।' : 'Invitation Confirmed. Welcome to the elite recipient circle of Amar Signature.'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Reading Article Modal Panel */}
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div 
              className="relative w-full max-w-2xl glass-heavy rounded-2xl overflow-y-auto max-h-[90vh] space-y-6 shadow-2xl p-6 md:p-10 text-left"
              id="blog-modal-card"
            >
              {/* Overwrite head meta with the active blog post properties */}
              <ReactHelmet 
                title={readingPost.title}
                description={readingPost.excerpt}
                ogTitle={readingPost.title}
                ogDescription={readingPost.excerpt}
                ogImage={readingPost.imageUrl}
                ogType="article"
                twitterTitle={readingPost.title}
                twitterDescription={readingPost.excerpt}
                twitterImage={readingPost.imageUrl}
              />

              {/* Close card button */}
              <button 
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 p-2 text-luxury-offwhite/60 hover:text-luxury-gold hover:bg-white/5 rounded-full transition-colors border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 pt-4">
                <span className="inline-block px-2.5 py-0.5 bg-luxury-gold/15 text-luxury-gold text-[10px] font-mono tracking-widest uppercase rounded">
                  {readingPost.category}
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-luxury-offwhite font-bold leading-tight">
                  {readingPost.title}
                </h3>

                <div className="flex items-center gap-6 text-xs text-luxury-muted font-mono border-b border-luxury-gold-dark/15 pb-4">
                  <span>{language === 'bn' ? 'প্রকাশিত:' : 'Published:'} {readingPost.date}</span>
                  <span>•</span>
                  <span>{language === 'bn' ? 'সময়:' : 'Est:'} {readingPost.readTime}</span>
                  <span>•</span>
                  <span>{language === 'bn' ? 'লেখক: আমার স্ট্র্যাটেজি বোর্ড' : 'By: Amar Strategy Board'}</span>
                </div>
              </div>

              {/* High resolution Image inside */}
              <div className="h-56 w-full rounded-xl overflow-hidden border border-luxury-gold-dark/20">
                <img 
                  src={readingPost.imageUrl} 
                  alt={readingPost.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sample premium copy */}
              <div className="space-y-4 text-sm md:text-base text-luxury-offwhite/90 leading-relaxed font-sans">
                {language === 'bn' ? (
                  <>
                    <p>
                      <strong>ভূমিকা:</strong> ব্যক্তিগত ব্র্যান্ডের কর্তৃত্ব প্রতিষ্ঠা করা অহংকার করার বিষয় নয়; এটি স্পষ্টতা তৈরি সম্পর্কে। বাংলাদেশের অত্যন্ত সুসংগত নেটওয়ার্ক অবকাঠামোতে, মূল শিল্পপতি ও বিশিষ্ট নীতিনির্ধারকরা অত্যন্ত সতর্ক নজরে পরিচালিত হন। 
                    </p>
                    <p>
                      এটি নেভিগেট করতে, আমরা আমাদের সিগনেচার <strong>ভয়েস ম্যাট্রিক্স ফ্রেমওয়ার্ক</strong> ব্যবহার করি। আমরা সুনির্দিষ্ট ন্যারেটিভ সমন্বয় সাধন করি, যা গভীর চিন্তা নেতৃত্বের ধারাবাহিকতা নিশ্চিত করে।
                    </p>
                    <p>
                      আমাদের গবেষণা ইঙ্গিত করে যে, ব্যক্তিগত ডিজিটাল উপস্থাপনা প্রাতিষ্ঠানিক ব্যানারের তুলনায় চার গুণ বেশি ব্যবসায়িক সুযোগ ও বাণিজ্যিক সংযুক্তি তৈরি করে।
                    </p>
                    <p className="border-l-4 border-luxury-gold pl-4 italic text-luxury-muted text-xs md:text-sm">
                      "ব্যক্তিগত ভাবমূর্তি রক্ষা ও সুশৃঙ্খলভাবে নিজের লক্ষ্য ও দর্শনকে বিশ্বের দ্বারে পৌঁছে দেওয়াই হলো সর্বোচ্চ আভিজাত্য।"
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Introduction:</strong> Establishing personal brand authority isn't about bragging; it is about creating clarity. In Bangladesh’s highly synchronized network architecture, key decision-makers operate with selective attention pipelines. 
                    </p>
                    <p>
                      To navigate this, Amar Signature deploys the <strong>Voice Matrix framework</strong>. We catalog specific narrative coordinates, ensuring consistent thought distribution. When an executive posts or keynotes, audiences should recognize an immediate standard of leadership, heritage, and analytical precision.
                    </p>
                    <p>
                      Our research underscores that personal digital positioning drives four times higher direct commercial engagement compared to institutional banners. Founders who command deep respect raise venture capital, lock down strategic real estate leases, and attract tier-one international partners with absolute confidence.
                    </p>
                    <p className="border-l-4 border-luxury-gold pl-4 italic text-luxury-muted text-xs md:text-sm">
                      "Sovereign positioning is the fine art of broadcasting wisdom pre-emptively on multi-channels, turning individual authority into an indestructible business gateway in Gulshan and beyond."
                    </p>
                  </>
                )}
              </div>

              <div className="pt-6 border-t border-luxury-gold-dark/15 flex items-center justify-between">
                <button
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2 text-xs font-mono text-luxury-offwhite/50 hover:text-luxury-offwhite transition-colors"
                >
                  {language === 'bn' ? 'অনুচ্ছেদ বন্ধ করুন' : 'Close Article'}
                </button>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-luxury-gold">✦ Amar Signature Editorial</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
