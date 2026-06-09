/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export interface ReactHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  ogLocale?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export default function ReactHelmet({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  ogLocale,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
}: ReactHelmetProps) {
  const { language } = useThemeLanguage();

  // Localized Defaults
  const defaults = {
    title: language === 'bn' 
      ? 'আমার সিগনেচার | এক্সিকিউটিভ পার্সোনাল ব্র্যান্ডিং ঢাকা' 
      : 'Amar Signature | Executive Personal Branding Dhaka',
    description: language === 'bn'
      ? 'ভবিষ্যতের চিন্তাশীল নেতৃত্ব, সুনির্দিষ্ট ন্যারেটিভ সমন্বয় এবং বাংলাদেশের শীর্ষস্থানীয়দের জন্য ব্যক্তিগত ব্র্যান্ডিং এবং লিগ্যাসি প্রতিষ্ঠা।'
      : 'Elite personal reputation strategy, bespoke visual positioning, and editorial brand planning directory, customized for Bangladesh\'s top-tier executives.',
    keywords: language === 'bn'
      ? 'ব্যক্তিগত ব্র্যান্ডিং, রেপুটেশন লিগ্যাসি, এক্সিকিউটিভ ব্র্যান্ডিং ঢাকা, আমার সিগনেচার'
      : 'personal branding, reputation legacy, founder branding dhaka, Amar Signature Bangladesh, senior leadership communication',
  };

  const finalTitle = title ? `${title} | Amar Signature` : defaults.title;
  const finalDescription = description || defaults.description;
  const finalKeywords = keywords || defaults.keywords;
  const finalOgTitle = ogTitle || title || (language === 'bn' ? 'আমার সিগনেচার ব্র্যান্ডিং' : 'Amar Signature Branding');
  const finalOgDescription = ogDescription || finalDescription;
  
  // Clean fallback for OG/Meta coordinates
  const finalOgImage = ogImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80';
  const finalOgUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : 'https://amarsignature.com');
  const finalOgLocale = ogLocale || (language === 'bn' ? 'bn_BD' : 'en_US');
  
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || finalOgImage;

  return (
    <>
      {/* Primary HTML Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* OpenGraph / Facebook Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:locale" content={finalOgLocale} />
      <meta property="og:site_name" content="Amar Signature" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />
    </>
  );
}
