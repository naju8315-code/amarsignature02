/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PackageItem {
  id: string;
  name: string;
  priceMonthly: number;
  priceQuarterly: number;
  tag?: string;
  features: string[];
  isFeatured?: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic Lucide Icon mapping
  benefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Strategy' | 'Branding' | 'Research';
  clientName: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  category: string;
  year: string;
  organization: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
