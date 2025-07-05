import React from 'react';
import { Calendar, ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';
import { newsItems, insights } from '../data/newsData';

const iconComponents: { [key: string]: React.ElementType } = {
  TrendingUp,
  BookOpen,
  Award,
};


export const News: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
            News &
            <span className="text-gradient-animated ml-3">Updates</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest developments, research breakthroughs, 
            and industry insights from the world of premium tea exports.
          </p>
        </div>

        {/* Featured News */}
        {newsItems.filter(item => item.featured).map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 mb-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  {React.createElement(iconComponents[item.icon], { className: "w-6 h-6 text-accent-300" })}
                  <span className="font-inter font-semibold text-accent-300 uppercase tracking-wide text-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-lg leading-relaxed mt-3 mb-0 text-primary-100">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-primary-200">
                    <Calendar className="w-4 h-4" />
                    <span className="font-inter text-sm">{formatDate(item.date)}</span>
                  </div>
                  <button className="flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.filter(item => !item.featured).map((item, index) => (
            <article key={index} className="bg-pearl-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  {React.createElement(iconComponents[item.icon], { className: "w-4 h-4 text-primary-600" })}
                  <span className="font-inter text-xs font-semibold text-primary-800 uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-primary-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter text-sm">{formatDate(item.date)}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-inter text-primary-600 leading-relaxed mt-3 mb-0">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-inter font-semibold transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Industry Insights */}
        <div className="bg-primary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Industry Insights
            </h3>
            <p className="font-inter text-primary-600">
              Expert perspectives on tea industry trends and innovations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-playfair text-xl font-bold text-primary-800 mb-3">
                  {insight.title}
                </h4>
                <p className="font-inter text-primary-600 mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-primary-500">{insight.readTime}</span>
                  <button className="text-accent-600 hover:text-accent-700 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};