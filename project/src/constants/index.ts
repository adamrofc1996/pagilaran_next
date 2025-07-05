export const CONTACT_INFO = {
  phone: '+62 274 123456',
  email: 'export@ptpagilaran.com',
};

export const SCROLL_THRESHOLD = 50;

import { Star, TrendingUp } from 'lucide-react';

export const HOME_HERO_STATS = [
  { number: '100+', label: 'Years of Heritage', icon: Star },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '1000+', label: 'Hectares', icon: Leaf }
];

export const HOME_TRUST_INDICATORS = [
  { icon: Globe, text: 'ISO 22000 Certified' },
  { icon: Star, text: 'Organic Certified' },
  { icon: Leaf, text: 'Rainforest Alliance' }
];

export const HOME_FEATURES = [
  {
    icon: Star,
    title: 'Century of Heritage',
    description: 'Over 100 years of tea cultivation expertise passed down through generations',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: Users,
    title: 'Academic Excellence',
    description: 'Research-driven innovation and sustainable practices for premium quality',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting to 50+ countries with trusted international partnerships',
    color: 'from-success-500 to-success-600'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Committed to environmental stewardship and community development',
    color: 'from-success-500 to-success-600'
  },
  {
    icon: TrendingUp,
    title: 'Edu-Research Hub',
    description: 'Strategic research and innovation partner for institutions and universities.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Community Empowerment & Ethical Governance',
    description: 'Applying People, Planet, Profit principles and Good Corporate Governance for community welfare and business sustainability.',
    color: 'from-purple-500 to-purple-600'
  }
];

export const HOME_PRODUCT_CATEGORIES = [
  { name: 'Black Tea', image: '/images/black-tea.webp' },
  { name: 'Green Tea', image: '/images/green-tea.webp' },
  { name: 'White Tea', image: '/images/white-tea.webp' },
  { name: 'Oolong Tea', image: '/images/oolong-tea.webp' },
];

import { Users, Leaf, Award, HeartHandshake, Globe, BookOpen, Sprout, Building2 } from 'lucide-react';

export const HOME_GLOBAL_IMPACT_POINTS = [
  { 
    icon: Users, 
    number: '1000+', 
    label: 'Farmers Empowered',
    color: 'from-sky-500 to-sky-600',
    textColor: 'text-black'
  },
  { 
    icon: Leaf, 
    number: '500+', 
    label: 'Hectares Conserved',
    color: 'from-emerald-500 to-emerald-600',
    textColor: 'text-black'
  },
  { 
    icon: BookOpen, 
    number: '200+', 
    label: 'Students Educated',
    color: 'from-amber-500 to-amber-600',
    textColor: 'text-black'
  },
  { 
    icon: HeartHandshake, 
    number: '100%', 
    label: 'Ethical Sourcing',
    color: 'from-violet-500 to-violet-600',
    textColor: 'text-black'
  },
  { 
    icon: Globe, 
    number: '50+', 
    label: 'Countries Reached',
    color: 'from-rose-500 to-rose-600',
    textColor: 'text-black'
  },
  { 
    icon: Building2, 
    number: '100+', 
    label: 'Community Programs',
    color: 'from-lime-500 to-lime-600',
    textColor: 'text-black'
  },
  { 
    icon: Sprout, 
    number: '20+', 
    label: 'New Plantations',
    color: 'from-cyan-500 to-cyan-600',
    textColor: 'text-black'
  },
  { 
    icon: Award, 
    number: '5+', 
    label: 'Certifications',
    color: 'from-fuchsia-500 to-fuchsia-600',
    textColor: 'text-black'
  }
];