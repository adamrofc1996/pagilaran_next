import React from 'react';
import { MapPin, TrendingUp, Users, Star, Globe, BarChart3, Target } from 'lucide-react';

const exportData = [
  { 
    region: 'Europe', 
    percentage: 35, 
    countries: 15, 
    growth: '+12%',
    keyMarkets: ['Germany', 'Netherlands', 'UK', 'France'],
    description: 'Strong demand for premium orthodox teas'
  },
  { 
    region: 'Asia Pacific', 
    percentage: 28, 
    countries: 12, 
    growth: '+18%',
    keyMarkets: ['Japan', 'Singapore', 'Australia', 'South Korea'],
    description: 'Growing green tea and specialty blends market'
  },
  { 
    region: 'Middle East', 
    percentage: 20, 
    countries: 8, 
    growth: '+15%',
    keyMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
    description: 'Premium CTC and black tea preferences'
  },
  { 
    region: 'Americas', 
    percentage: 17, 
    countries: 6, 
    growth: '+22%',
    keyMarkets: ['USA', 'Canada', 'Brazil', 'Chile'],
    description: 'Emerging market for organic and specialty teas'
  }
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Premium Tea Co. UK',
    country: 'United Kingdom',
    quote: 'PT Pagilaran consistently delivers exceptional quality. Their orthodox black tea is among the finest we\'ve sourced from Indonesia. The partnership has been invaluable for our premium tea line.',
    rating: 5,
    partnership: '8 years',
    volume: '500+ tons annually'
  },
  {
    name: 'Ahmed Al-Rashid',
    company: 'Gulf Tea Trading',
    country: 'UAE',
    quote: 'Reliable partner for over 10 years. Their CTC grade perfectly suits our regional market preferences. The consistency in quality and delivery has made them our preferred supplier.',
    rating: 5,
    partnership: '12 years',
    volume: '800+ tons annually'
  },
  {
    name: 'Hiroshi Tanaka',
    company: 'Tokyo Tea House',
    country: 'Japan',
    quote: 'The green tea quality rivals traditional Japanese standards. Impressive consistency and flavor profile. PT Pagilaran understands the nuances of premium tea production.',
    rating: 5,
    partnership: '6 years',
    volume: '200+ tons annually'
  }
];

const globalStats = [
  { 
    number: '50+', 
    label: 'Export Countries', 
    icon: Globe, 
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-500'
  },
  { 
    number: '200+', 
    label: 'Global Partners', 
    icon: Users, 
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-500'
  },
  { 
    number: '10M+', 
    label: 'Kg Exported Annually', 
    icon: BarChart3, 
    color: 'from-accent-500 to-accent-600',
    textColor: 'text-accent-500'
  },
  { 
    number: '25+', 
    label: 'Years Average Partnership', 
    icon: Target, 
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-500'
  }
];

export const GlobalPresencePage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative section-padding mb-16 bg-[url('/images/warehouse-pagilaran.jpg')] bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <Globe className="w-5 h-5 text-accent-300 animate-pulse" />
            <span className="text-white font-inter font-medium">Worldwide Reach</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Global Footprint
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-12">
            From the highlands of Java to tables worldwide, our premium teas reach over 50 countries 
            across six continents, building lasting partnerships with discerning tea lovers and 
            premium distributors globally.
          </p>

          {/* Global Stats Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20">
                <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                <div className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                <div className="font-inter text-primary-200 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Distribution */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Export
              <span className="text-gradient-animated ml-3">Distribution</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Our strategic global distribution network ensures premium Java tea reaches every corner of the world
            </p>
          </div>

          {/* Regional Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {exportData.map((data, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-playfair text-2xl font-bold text-primary-800">{data.region}</h3>
                    <div className="flex items-center space-x-2 text-green-600">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-inter font-semibold">{data.growth}</span>
                    </div>
                  </div>
                  
                  {/* Percentage Circle */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#c7a740"
                          strokeWidth="2"
                          strokeDasharray={`${data.percentage}, 100`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-playfair text-3xl font-bold text-primary-800">{data.percentage}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary-600" />
                        <span className="font-inter text-primary-700">{data.countries} Countries</span>
                      </div>
                    </div>
                    
                    <p className="font-inter text-primary-600 leading-relaxed">
                      {data.description}
                    </p>
                    
                    <div>
                      <h4 className="font-inter font-semibold text-primary-800 mb-2">Key Markets:</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.keyMarkets.map((market, marketIndex) => (
                          <span
                            key={marketIndex}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-inter"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="section-padding bg-[url('/images/warehouse-pagilaran.jpg')] bg-cover bg-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-800/80" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by Partners
              <span className="text-gradient-animated ml-3 block">
                Worldwide
              </span>
            </h2>
            <p className="font-inter text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              What our global partners say about their experience working with PT Pagilaran
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-3d hover:shadow-gold transition-all duration-500 hover:scale-105 border border-white/20 h-full">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="font-inter text-primary-100 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Partnership Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="font-inter text-xs text-primary-300 mb-1">Partnership</div>
                      <div className="font-inter font-semibold text-accent-300">{testimonial.partnership}</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="font-inter text-xs text-primary-300 mb-1">Annual Volume</div>
                      <div className="font-inter font-semibold text-accent-300">{testimonial.volume}</div>
                    </div>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-white">{testimonial.name}</div>
                      <div className="font-inter text-sm text-primary-200">{testimonial.company}</div>
                      <div className="font-inter text-sm text-accent-300">{testimonial.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Global
              <span className="text-gradient-animated ml-3">Impact</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Measurable results from our global partnerships and export excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-playfair text-4xl lg:text-5xl font-bold text-primary-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-inter text-primary-800 font-medium">
                    {stat.label}
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