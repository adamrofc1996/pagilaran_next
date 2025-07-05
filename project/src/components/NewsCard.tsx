import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  item: {
    id: number;
    image: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
  };
  isFeatured?: boolean;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const NewsCard: React.FC<NewsCardProps> = ({ item, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <div className="card card-premium news-card p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="news-image h-80 rounded-2xl mb-8"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2 text-primary-500 mb-3">
              <span className="news-category">{item.category}</span>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(item.date)}</span>
              </div>
              <span>{item.readTime}</span>
            </div>
            <h3 className="news-title text-4xl mb-4">
              {item.title}
            </h3>
            <p className="news-excerpt text-lg mb-8">
              {item.excerpt}
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card group">
        <img
          src={item.image}
          alt={item.title}
          className="news-image h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-6">
          <div className="flex items-center space-x-2 text-primary-500 mb-3">
            <span className="news-category">{item.category}</span>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{formatDate(item.date)}</span>
            </div>
          </div>
          <h3 className="font-playfair text-xl font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
            {item.title}
          </h3>
          <p className="font-inter text-primary-600 leading-relaxed mt-2 mb-1">
            {item.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-inter text-sm text-primary-500">
              {item.readTime}
            </span>
            <a href="#" className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-inter font-semibold transition-colors">
              Read More
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsCard;