import React from 'react';
import { MapPin, TrendingUp, Users, Star } from 'lucide-react';

const exportData = [
  { region: 'Europe', percentage: 35, countries: 15, growth: '+12%' },
  { region: 'Asia Pacific', percentage: 28, countries: 12, growth: '+18%' },
  { region: 'Middle East', percentage: 20, countries: 8, growth: '+15%' },
  { region: 'Americas', percentage: 17, countries: 6, growth: '+22%' }
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Premium Tea Co. UK',
    country: 'United Kingdom',
    quote: 'PT Pagilaran consistently delivers exceptional quality. Their orthodox black tea is among the finest we\'ve sourced from Indonesia.',
    rating: 5
  },
  {
    name: 'Ahmed Al-Rashid',
    company: 'Gulf Tea Trading',
    country: 'UAE',
    quote: 'Reliable partner for over 10 years. Their CTC grade perfectly suits our regional market preferences.',
    rating: 5
  },
  {
    name: 'Hiroshi Tanaka',
    company: 'Tokyo Tea House',
    country: 'Japan',
    quote: 'The green tea quality rivals traditional Japanese standards. Impressive consistency and flavor profile.',
    rating: 5
  }
];

export const GlobalPresence: React.FC = () => {
  return (
    <section id="global" className="py-24 relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 0.8) 50%, rgba(240, 249, 244, 0.6) 100%)' 
    }}>
      {/* High-res Batik Pattern Background - 10% opacity, responsive scale */}
      <div 
        className="absolute inset-0 opacity-10 bg-fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d7738' fill-opacity='1'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm-30-24c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 8c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'responsive'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary-800 mb-6" style={{ fontWeight: '700' }}>
            Global Footprint
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: '400' }}>
            From the highlands of Java to tables worldwide, our premium teas reach over 50 countries 
            across six continents, building lasting partnerships with discerning tea lovers.
          </p>
        </div>

        {/* Export Distribution - Properly sized and aligned */}
        <div className="relative mb-20">
          <div className="rounded-3xl p-8 lg:p-12 border border-neutral-100/50" style={{ 
            background: 'linear-gradient(45deg, rgba(240, 249, 244, 0.95), rgba(234, 179, 8, 0.1))',
            boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px'
          }}>
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl text-primary-800 mb-4" style={{ fontWeight: '700' }}>Export Distribution</h3>
              <p className="text-primary-600" style={{ fontWeight: '400' }}>Our tea reaches every corner of the globe</p>
            </div>
            
            {/* Export Data Grid - Responsive with 24px gap and proper sizing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto" style={{ gap: '24px' }}>
              {exportData.map((data, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    {/* Responsive sizing: 100% mobile, 45% tablet, 30% desktop */}
                    <div className="w-36 h-36 mx-auto relative" style={{ 
                      width: window.innerWidth < 768 ? '100%' : window.innerWidth < 1024 ? '45%' : '30%',
                      maxWidth: '144px',
                      aspectRatio: '1/1'
                    }}>
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="3"
                          strokeDasharray={`${data.percentage}, 100`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-heading text-3xl text-primary-800" style={{ fontWeight: '700' }}>{data.percentage}%</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-heading text-xl text-primary-800 mb-2" style={{ fontWeight: '700' }}>{data.region}</h4>
                  <div className="space-y-1 text-sm text-primary-600">
                    <div className="flex items-center justify-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span style={{ fontWeight: '400' }}>{data.countries} Countries</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-success-600" />
                      <span className="text-success-600" style={{ fontWeight: '600' }}>{data.growth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl lg:text-4xl text-primary-800 mb-4" style={{ fontWeight: '700' }}>
              Trusted by Partners Worldwide
            </h3>
            <p className="text-primary-600" style={{ fontWeight: '400' }}>What our global partners say about us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-neutral-100/50" style={{ 
                background: 'linear-gradient(45deg, rgba(240, 249, 244, 0.95), rgba(234, 179, 8, 0.05))',
                boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px'
              }}>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-primary-700 mb-6 leading-relaxed" style={{ fontWeight: '400' }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-primary-800" style={{ fontWeight: '600' }}>{testimonial.name}</div>
                    <div className="text-sm text-primary-600" style={{ fontWeight: '400' }}>{testimonial.company}</div>
                    <div className="text-sm text-accent-600" style={{ fontWeight: '400' }}>{testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats - Card with gradient background and bold gold-to-green text */}
        <div className="rounded-3xl p-8 lg:p-12 border border-neutral-100/50" style={{ 
          background: 'linear-gradient(45deg, rgba(240, 249, 244, 0.95), rgba(234, 179, 8, 0.1))',
          boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px'
        }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl lg:text-5xl mb-2 text-gradient-gold-darker">
                50+
              </div>
              <div className="text-primary-800" style={{ fontWeight: '600' }}>Export Countries</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl mb-2 text-gradient-gold-darker">
                200+
              </div>
              <div className="text-primary-800" style={{ fontWeight: '600' }}>Global Partners</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl mb-2 text-gradient-gold-darker">
                10M+
              </div>
              <div className="text-primary-800" style={{ fontWeight: '600' }}>Kg Exported Annually</div>
            </div>
            <div>
              <div className="font-heading text-4xl lg:text-5xl mb-2 text-gradient-gold-darker">
                25+
              </div>
              <div className="text-primary-800" style={{ fontWeight: '600' }}>Years Average Partnership
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};