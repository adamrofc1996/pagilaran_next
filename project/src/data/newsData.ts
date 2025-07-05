export const newsItems = [
  {
    category: 'Company News',
    title: 'PT Pagilaran Expands Export to European Markets',
    excerpt: 'New partnerships established with premium tea distributors in Germany, France, and the Netherlands, marking a 25% increase in European exports.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: 'TrendingUp',
    featured: true
  },
  {
    category: 'Research',
    title: 'UGM Research Breakthrough in Sustainable Tea Cultivation',
    excerpt: 'Joint research with UGM Faculty of Agriculture develops new organic fertilization method, reducing chemical inputs by 40% while maintaining yield quality.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: 'BookOpen',
    featured: false
  },
  {
    category: 'Awards',
    title: 'Excellence Award at Indonesia Tea Export Summit',
    excerpt: 'Recognized for outstanding contribution to Indonesian tea exports and sustainable farming practices at the annual industry summit.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: 'Award',
    featured: false
  },
  {
    category: 'Sustainability',
    title: 'Carbon Neutral Certification Achieved',
    excerpt: 'PT Pagilaran becomes the first Indonesian tea company to achieve carbon neutral certification through comprehensive environmental initiatives.',
    date: '2023-12-20',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: 'BookOpen',
    featured: false
  }
];

export const insights = [
  {
    title: 'The Future of Indonesian Tea Exports',
    description: 'Market trends and opportunities in the global tea industry',
    readTime: '5 min read'
  },
  {
    title: 'Sustainable Agriculture in Java',
    description: 'How traditional methods meet modern sustainability standards',
    readTime: '7 min read'
  },
  {
    title: 'Academic Excellence in Agribusiness',
    description: 'The role of universities in modern agricultural enterprises',
    readTime: '6 min read'
  }
];

// Define types for better type safety
export type NewsItem = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  icon: string; // Changed to string as Lucide icons are imported as components
  featured: boolean;
};

export type InsightItem = {
  title: string;
  description: string;
  readTime: string;
};