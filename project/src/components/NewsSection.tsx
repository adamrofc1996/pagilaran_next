import React from 'react';
import { ArrowRight, TrendingUp, Award, BookOpen, Leaf } from 'lucide-react';
import NewsCard from './NewsCard';

const newsItems = [
  {
    id: 1,
    category: 'Company News',
    title: 'PT Pagilaran Expands Export to European Markets',
    excerpt: 'New partnerships established with premium tea distributors in Germany, France, and the Netherlands, marking a 25% increase in European exports.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    readTime: '5 min read'
  },
  {
    id: 2,
    category: 'Research',
    title: 'Breakthrough in Sustainable Tea Cultivation',
    excerpt: 'Research collaboration develops new organic fertilization method, reducing chemical inputs by 40% while maintaining yield quality.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: BookOpen,
    readTime: '7 min read'
  },
  {
    id: 3,
    category: 'Awards',
    title: 'Excellence Award at Indonesia Tea Export Summit',
    excerpt: 'Recognized for outstanding contribution to Indonesian tea exports and sustainable farming practices at the annual industry summit.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: Award,
    readTime: '4 min read'
  },
  {
    id: 4,
    category: 'Sustainability',
    title: 'Carbon Neutral Certification Achieved',
    excerpt: 'PT Pagilaran becomes the first Indonesian tea company to achieve carbon neutral certification through comprehensive environmental initiatives.',
    date: '2023-12-20',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: Leaf,
    readTime: '6 min read'
  },
  {
    id: 5,
    category: 'Industry',
    title: 'Global Tea Market Trends 2024',
    excerpt: 'Analysis of emerging trends in the global tea market and how PT Pagilaran is positioned to capitalize on new opportunities.',
    date: '2023-12-15',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    readTime: '8 min read'
  },
  {
    id: 6,
    category: 'Company News',
    title: 'New Processing Facility Opens in Central Java',
    excerpt: 'State-of-the-art tea processing facility inaugurated to increase production capacity and maintain quality standards.',
    date: '2023-12-10',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    readTime: '5 min read'
  }
];

export const NewsSection: React.FC = () => {
  const featuredNews = newsItems.slice(0, 1);
  const regularNews = newsItems.slice(1, 1);

  return (
    <section className="news-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Latest
            <span className="text-gradient-primary"> News</span>
          </h2>
          <p className="section-description">
            Stay informed about our latest developments, research breakthroughs, 
            and industry insights from the world of premium tea exports.
          </p>
        </div>

        {/* Featured News */}
          {featuredNews.map((item) => (
            <div key={item.id} className="section-content">
              <NewsCard item={item} isFeatured={true} />
            </div>
          ))}

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {regularNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <a href="/news" className="btn btn-outline btn-lg">
            View All News
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};