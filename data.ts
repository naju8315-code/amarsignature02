/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PackageItem, ServiceItem, ProjectItem, AwardItem, TestimonialItem, BlogPost, FAQItem, TeamMember } from './types';

export const packagesData: PackageItem[] = [
  {
    id: 'standard',
    name: 'Standard Package',
    priceMonthly: 35000,
    priceQuarterly: 90000,
    description: 'Perfect for emerging founders, senior executives & specialized consultants establishing their digital authority.',
    features: [
      'Personal Brand Strategy & Roadmap',
      'Professional LinkedIn Profile Optimization',
      'High-End Portrait Photoshoot Direction',
      '2 Custom Curated Editorial Articles per Month',
      'Executive Ghostwriting (3 posts/week)',
      'Basic Monthly Analytics Review'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Consultant Package',
    priceMonthly: 50000,
    priceQuarterly: 135000,
    tag: 'MOST POPULAR',
    isFeatured: true,
    description: 'Designed for high-growth venture founders & industry specialists looking to scale their public voice and leadership.',
    features: [
      'Comprehensive Brand Audit & Positioning Matrix',
      'LinkedIn & Twitter Account Signature Design',
      'Luxury Media Pack & Press Release Draft',
      'Dhaka Executive Portrait Session (Included)',
      '4 Deep-Dive Thought-Leadership Articles',
      'Premium Ghostwriting (5 posts/week)',
      'Bi-Weekly Video Scripting (TikTok/Reels)',
      'Priority WhatsApp Strategy Support'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Premium',
    priceMonthly: 75000,
    priceQuarterly: 210000,
    tag: 'PREMIUM MASTERCLASS',
    description: 'The definitive executive legacy program for top-tier CEOs, conglomerate heirs, and celebrated directors.',
    features: [
      'All Growth features + Custom Web Portfolio Space',
      'Elite Positioning & Bangladesh National Media PR Outreach',
      'Full Editorial Calendar & Personal Podcast Incubation',
      'Weekly Multi-channel Content Distribution',
      'Infinite Messaging / VIP Round-the-clock Consultancy',
      'Crisis Management & Online Reputation Protection',
      'Keynote Speechwriting & TEDx Pitch Strategy'
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Establish a clear, magnetic vision. We draft your personal mission, target audience profile, and niche alignment roadmap tailored for Bangladesh and global business domains.',
    iconName: 'Compass',
    benefits: ['Strategic Market Differentiation', 'Target Audience Optimization', 'Niche Hegemony Planning']
  },
  {
    id: 'brand-naming',
    title: 'Brand Naming & Identity',
    description: 'Crafting premium monograms, typography guidelines, signature letterheads, and taglines that project prestige, heritage, and modern sophistication.',
    iconName: 'Sparkles',
    benefits: ['Bespoke Logo Mark Design', 'Premium Visual Color Themes', 'Consistent Asset Kit']
  },
  {
    id: 'brand-consultant',
    title: 'Executive Consulting',
    description: 'Direct 1-on-1 positioning advisory blocks with Amar Signature. We help refine your boardroom presence, keynote speaking cues, and networking strategy.',
    iconName: 'Briefcase',
    benefits: ['Elite Executive Coaching', 'Public Profile Alignment', 'High-Stakes Prep']
  },
  {
    id: 'copywriting',
    title: 'Thought-leadership Ghostwriting',
    description: 'Your ideas, translated into world-class writing. Daily curated posts, deep-dive newsletters, and opinion pieces published in Bangladesh’s top financial papers.',
    iconName: 'PenTool',
    benefits: ['Zero-Effort Creation', 'Inter-Industry Thought Authority', 'Polished Editorial Tone']
  },
  {
    id: 'brand-advertising',
    title: 'Brand PR & Media Strategy',
    description: 'Strategic placement across tier-one national media (The Daily Star, Prothom Alo) and international business publications to cement your legacy.',
    iconName: 'Globe',
    benefits: ['Media Feature Booking', 'Podcast Guest Sequencing', 'Prestigious Press Coverage']
  },
  {
    id: 'brand-voice',
    title: 'Brand Voice Mastery',
    description: 'Defining a unique, recognizable tone of voice that reflects wisdom, authority, and elegance across video reels, podcasts, and digital messages.',
    iconName: 'Mic',
    benefits: ['Structured Video Scripting', 'Consistent Speech Nuance', 'Engaging Storytelling Loops']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Re-inventing the Venture Capitalist',
    category: 'Strategy',
    clientName: 'Mahmud Rahman',
    location: 'Gulshan-2, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    description: 'Transformed an quiet angel investor into a recognizable champion for Bangladeshi tech founders. Secured 3 keynotes and grew LinkedIn following by 340%.'
  },
  {
    id: 'proj-2',
    title: 'Heritage Meets Modern Real Estate',
    category: 'Branding',
    clientName: 'Nusrat Jahan',
    location: 'Dhanmondi, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'Designed a sophisticated executive visual brand identity and digital presence for a prominent real estate heiress, establishing her as an architectural trendsetter.'
  },
  {
    id: 'proj-3',
    title: 'The Sovereign FinTech Pioneer',
    category: 'Research',
    clientName: 'Zeeshan Ahmed',
    location: 'Banani, Dhaka',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    description: 'Authored an authoritative series of regulatory research documents on decentralized finance in South Asia, launching the client as an advisor to national committees.'
  },
  {
    id: 'proj-4',
    title: 'E-commerce Disruptor Signature Launch',
    category: 'Strategy',
    clientName: 'Sajid Karim',
    location: 'Uttara, Dhaka',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    description: 'Engineered a multi-channel thought-leadership launch campaign focusing on sustainable supply chain management, driving direct enterprise inquiries.'
  },
  {
    id: 'proj-5',
    title: 'Aesthetic Medical Director Rebrand',
    category: 'Branding',
    clientName: 'Dr. Tasnim Kabir',
    location: 'Gulshan-1, Dhaka',
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    description: 'Architected a sophisticated clinic brand around Tasnim’s personal authority, transforming her into Dhaka’s premium skincare luxury advisor.'
  },
  {
    id: 'proj-6',
    title: 'Corporate Green Infrastructure Initiative',
    category: 'Research',
    clientName: 'Farhan Chowdhury',
    location: 'Dhaka Cantonment',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    description: 'Conducted localized carbon footprint research and mapped it to public-private partnership strategies, positioning our client at regional green summits.'
  }
];

export const awardsData: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Personal Brand Campaign',
    category: 'Consulting Excellence',
    year: '2025',
    organization: 'South Asia Advisory Guild'
  },
  {
    id: 'award-2',
    title: 'Elite Executive Positioning Trophy',
    category: 'PR & Media Strategy',
    year: '2025',
    organization: 'Dhaka Brand Forum'
  },
  {
    id: 'award-3',
    title: 'Luxury Identity Craft Award',
    category: 'Visual & Digital Design',
    year: '2026',
    organization: 'Golden Pixel South Asia'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Amar Signature completely transformed how our industry perceives me. We walked in as operators and came out as the undisputed authorities of South Asian VC. The ROI surpassed my highest expectations.',
    author: 'Mahmud Rahman',
    role: 'Managing Partner',
    company: 'Bengal Horizon Ventures',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    quote: 'Our brand identity is now on par with ultra-premium Swiss or British design studios. The advisory team at Amar Signature brings elite corporate rigor fused with artistic excellence.',
    author: 'Nusrat Jahan',
    role: 'Chief Design Executive',
    company: 'Dhanmondi Signature Living',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    quote: 'Their thought-leadership ghostwriting is spectacular. Every article reads exactly like my individual perspective, but elevated to pristine, publication-grade literary standards.',
    author: 'Zeeshan Ahmed',
    role: 'Founder & CEO',
    company: 'FinTech Sovereign BD',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Dhaka Power Loop: Why Bangladesh’s Top Founders are Investing in Personal Branding',
    category: 'Insights',
    date: 'June 02, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    excerpt: 'In competitive corporate environments like Gulshan and Banani, personal trust is of higher value than traditional advertising. Here is a look at the data.'
  },
  {
    id: 'blog-2',
    title: 'Crafting Your Monogram: The Subtle Aesthetic of Ultra-High-Net-Worth Visual Signature',
    category: 'Design & Style',
    date: 'May 28, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Loud luxury is fleeting. Discover how silent luxury layout, negative space ratios, and gold typography accents dictate power and confidence.'
  },
  {
    id: 'blog-3',
    title: 'The Ghost in the Executive Suite: Ultimate Guide to Thought-Leadership Strategy',
    category: 'Strategy & Leadership',
    date: 'May 14, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    excerpt: 'How top-tier CEOs allocate only 2 hours a month to generate a massive, consistent digital and print media footprint.'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who is Amar Signature designed for?',
    answer: 'We serve high-growth founders, venture capital partners, legacy family conglomerates, executive medical specialists, and top-tier directors who want to control their narratives and establish elite reputation authority.'
  },
  {
    id: 'faq-2',
    question: 'How do you preserve my individual authentic voice?',
    answer: 'We conduct a comprehensive 3-stage intake audit with voice recordings and strategic assessments to construct a custom Voice Matrix. Every article and post we draft flows perfectly from your personal insights, elevated by our professional editorial writers.'
  },
  {
    id: 'faq-3',
    question: 'Is my personal data and engagement confidential?',
    answer: 'Absolutely. We sign comprehensive non-disclosure agreements (NDAs) with all of our clients before commencing audits. All operations are kept completely confidential by default.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer offline public relations services in Bangladesh?',
    answer: 'Yes. We orchestrate elite media placements, profile features, podcast placements, and keynote bookings with key national newspapers, finance channels and private network forums in DAC.'
  }
];

export const teamData: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Amar Chowdhury',
    role: 'Principal Partner & Luxury Strategist',
    bio: 'Former global consultant advising on brand legacy, luxury design, and high-stakes executive positions in London and Dhaka.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'member-2',
    name: 'Samira Karim',
    role: 'Head of Content & Voice Architecture',
    bio: 'Expert editorial director and former business journalist specialized in translating high-level executive thoughts into clean masterpieces.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  }
];
