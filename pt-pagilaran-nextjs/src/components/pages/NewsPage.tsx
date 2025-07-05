'use client'

import React, { useState } from 'react';
import { Calendar, ArrowRight, BookOpen, Award, TrendingUp, Filter, Search, Tag } from 'lucide-react';

const newsCategories = ['All', 'Company News', 'Research', 'Awards', 'Sustainability', 'Industry'];

const newsItems = [
  {
    id: 1,
    category: 'Company News',
    title: 'PT Pagilaran Expands Export to European Markets',
    excerpt: 'New partnerships established with premium tea distributors in Germany, France, and the Netherlands, marking a 25% increase in European exports for 2024.',
    content: 'PT Pagilaran has successfully expanded its European market presence through strategic partnerships with leading tea distributors across Germany, France, and the Netherlands. This expansion represents a significant milestone in our global growth strategy, with European exports increasing by 25% compared to the previous year.',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    featured: true,
    readTime: '5 min read',
    tags: ['Export', 'Europe', 'Growth', 'Partnerships']
  },
  {
    id: 2,
    category: 'Research',
    title: 'UGM Research Breakthrough in Sustainable Tea Cultivation',
    excerpt: 'Joint research with UGM Faculty of Agriculture develops new organic fertilization method, reducing chemical inputs by 40% while maintaining yield quality.',
    content: 'A groundbreaking research collaboration between PT Pagilaran and Universitas Gadjah Mada has resulted in a revolutionary organic fertilization method that significantly reduces chemical inputs while maintaining high-quality tea yields.',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: BookOpen,
    featured: false,
    readTime: '7 min read',
    tags: ['Research', 'Sustainability', 'UGM', 'Innovation']
  },
  {
    id: 3,
    category: 'Awards',
    title: 'Excellence Award at Indonesia Tea Export Summit',
    excerpt: 'Recognized for outstanding contribution to Indonesian tea exports and sustainable farming practices at the annual industry summit.',
    content: 'PT Pagilaran was honored with the Excellence Award at the Indonesia Tea Export Summit, recognizing our outstanding contribution to the industry and commitment to sustainable practices.',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: Award,
    featured: false,
    readTime: '4 min read',
    tags: ['Awards', 'Recognition', 'Industry', 'Excellence']
  },
  {
    id: 4,
    category: 'Sustainability',
    title: 'Carbon Neutral Certification Achieved',
    excerpt: 'PT Pagilaran becomes the first Indonesian tea company to achieve carbon neutral certification through comprehensive environmental initiatives.',
    content: 'We are proud to announce that PT Pagilaran has achieved carbon neutral certification, making us the first Indonesian tea company to reach this significant environmental milestone.',
    date: '2023-12-20',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: BookOpen,
    featured: false,
    readTime: '6 min read',
    tags: ['Sustainability', 'Environment', 'Certification', 'Innovation']
  },
  {
    id: 5,
    category: 'Industry',
    title: 'Global Tea Market Trends 2024',
    excerpt: 'Analysis of emerging trends in the global tea market and how PT Pagilaran is positioned to capitalize on new opportunities.',
    content: 'Our latest market analysis reveals significant trends in the global tea industry, including increased demand for premium organic teas and sustainable sourcing practices.',
    date: '2023-12-15',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    featured: false,
    readTime: '8 min read',
    tags: ['Market Analysis', 'Trends', 'Global', 'Strategy']
  },
  {
    id: 6,
    category: 'Company News',
    title: 'New Processing Facility Opens in Central Java',
    excerpt: 'State-of-the-art tea processing facility inaugurated to increase production capacity and maintain quality standards.',
    content: 'PT Pagilaran has officially opened a new state-of-the-art tea processing facility in Central Java, designed to increase our production capacity while maintaining the highest quality standards.',
    date: '2023-12-10',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    icon: TrendingUp,
    featured: false,
    readTime: '5 min read',
    tags: ['Facility', 'Expansion', 'Production', 'Quality']
  }
];

const insights = [
  {
    title: 'The Future of Indonesian Tea Exports',
    description: 'Market trends and opportunities in the global tea industry for Indonesian producers',
    readTime: '5 min read',
    category: 'Market Analysis'
  },
  {
    title: 'Sustainable Agriculture in Java',
    description: 'How traditional methods meet modern sustainability standards in tea cultivation',
    readTime: '7 min read',
    category: 'Sustainability'
  },
  {
    title: 'Academic Excellence in Agribusiness',
    description: 'The role of universities in modern agricultural enterprises and innovation',
    readTime: '6 min read',
    category: 'Research'
  }
];

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<typeof newsItems[0] | null>(null);

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedArticle) {
    return (
      <div className="pt-32 pb-16">
        {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white mb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center space-x-2 text-accent-300 hover:text-accent-400 mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="font-inter">Back to News</span>
            </button>
            
            <div className="flex items-center space-x-3 mb-6">
              <selectedArticle.icon className="w-6 h-6 text-accent-300" />
              <span className="font-inter font-semibold text-accent-300 uppercase tracking-wide text-sm">
                {selectedArticle.category}
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              {selectedArticle.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-primary-200">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="font-inter text-sm">{formatDate(selectedArticle.date)}</span>
              </div>
              <span className="font-inter text-sm">{selectedArticle.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-12"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-lg text-primary-600 leading-relaxed mb-8">
                {selectedArticle.content}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {selectedArticle.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-inter flex items-center space-x-1"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section
        className="relative section-padding mb-16 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/study_pagilaran.jpeg')` }}
      >
        <div className="absolute inset-0 bg-primary-900 opacity-70" />
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <BookOpen className="w-5 h-5 text-accent-300" />
            <span className="text-white font-inter font-medium">Latest Updates</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            News &
            <span className="text-gradient-animated ml-3">
              Updates
            </span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Stay informed about our latest developments, research breakthroughs, industry insights, 
            and the exciting journey of PT Pagilaran in the global tea market.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-grid">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400" />
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent font-inter"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-primary-600" />
              <div className="flex flex-wrap gap-2">
                {newsCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-accent-500 text-white shadow-lg'
                        : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured News */}
          {featuredNews.length > 0 && (
            <div className="mb-16">
              {featuredNews.map((item) => (
                <div key={item.id} className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white shadow-3d">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <item.icon className="w-6 h-6 text-accent-300" />
                        <span className="font-inter font-semibold text-accent-300 uppercase tracking-wide text-sm">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-3">
                        {item.title}
                      </h2>
                      <p className="font-inter text-lg leading-relaxed mt-3 mb-8 text-primary-100">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-primary-200">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-inter text-sm">{formatDate(item.date)}</span>
                          </div>
                          <span className="font-inter text-sm">{item.readTime}</span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(item)}
                          className="flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105"
                        >
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
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <article key={item.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <item.icon className="w-4 h-4 text-primary-600" />
                      <span className="font-inter text-xs font-semibold text-primary-800 uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full space-y-3">
                    <div className="flex items-center space-x-4 text-primary-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-inter text-sm">{formatDate(item.date)}</span>
                      </div>
                      <span className="font-inter text-sm">{item.readTime}</span>
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-primary-800 group-hover:text-accent-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="font-inter text-primary-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-inter"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedArticle(item)}
                        className="flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-inter font-semibold transition-colors group"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Insights */}
      <section
        className="section-padding text-white relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/study_pagilaran.jpeg')` }}
      >
        <div className="absolute inset-0 bg-primary-800 opacity-70" />
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Industry
              <span className="text-gradient-animated ml-3">Insights</span>
            </h2>
            <p className="font-inter text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Expert perspectives on tea industry trends, innovations, and market developments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-3d hover:shadow-gold transition-all duration-500 hover:scale-105 border border-white/20 h-full">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="w-5 h-5 text-accent-300" />
                    <span className="font-inter text-sm text-accent-300 font-semibold">{insight.category}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-3">
                    {insight.title}
                  </h3>
                  <p className="font-inter text-primary-200 mb-4 leading-relaxed flex-grow">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm text-primary-300">{insight.readTime}</span>
                    <button className="text-accent-300 hover:text-accent-400 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};