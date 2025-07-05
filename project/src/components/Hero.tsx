import React from 'react';
import { Play, Award, Globe, Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with high-res batik patterns */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(240, 249, 244, 0.85) 0%, rgba(234, 179, 8, 0.75) 50%, rgba(45, 119, 56, 0.85) 100%), url('https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* High-res SVG Batik Pattern - Fixed background, 10% opacity */}
        <div 
          className="absolute inset-0 opacity-10 bg-fixed"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eab308' fill-opacity='1'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm-30-24c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 8c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'responsive'
          }}
        />
        
        {/* Custom SVG Tea Leaf Illustrations with floating animation */}

      </div>

      {/* Content with enhanced typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <div>
          {/* Enhanced Badge - NO UGM references */}
          <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-primary-800 font-bold text-sm tracking-wide">Premium Tea Excellence Since 1910</span>
          </div>

          {/* Main Headline - Font weight 700 */}
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-8xl 3xl:text-9xl text-white mb-6 leading-tight"
              style={{
                fontWeight: '700',
                textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)',
                // Using filter and opacity to achieve desired contrast ratio of 4.5:1
                filter: 'contrast(4.5) opacity(1)'
              }}>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Crafted in the Heart of
            </span>
            <br />
            {/* Gradient text: linear-gradient(90deg, #eab308, #ca8a04, #2d7738) */}
            <span className="inline-block transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    background: 'linear-gradient(90deg, #eab308, #ca8a04, #2d7738)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
                  }}>
              Java
            </span>
          </h1>

          {/* Subheadline - Font weight 600 */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl 3xl:text-6xl text-white mb-6 opacity-95"
              style={{
                fontWeight: '600',
                textShadow: '1px 1px 6px rgba(0,0,0,0.6)'
              }}>
            Enjoyed Around the World
          </h2>

          {/* Description - Font weight 400 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-6 py-12 max-w-4xl mx-auto">
            <p className="text-xl 3xl:text-2xl text-white leading-relaxed" style={{ fontWeight: '400' }}>
              Premium tea exports backed by a century of heritage and academic excellence. 
              From the volcanic soils of Java to tables worldwide.
            </p>
          </div>

          {/* Stat Cards - Adjusted dimensions with 16:9 aspect ratio and 24px gap */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-5xl 3xl:max-w-7xl mx-auto" style={{ gap: '24px' }}>
            {[
              { number: '100+', label: 'Years of Heritage', icon: Award },
              { number: '50+', label: 'Countries Served', icon: Globe },
              { number: '1000+', label: 'Hectares', icon: Leaf }
            ].map((stat, index) => (
              <div key={index} className="group" style={{ 
                width: '100%', 
                aspectRatio: '16/9'
              }}>
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 border border-white/30 text-center h-full flex flex-col justify-center"
                     style={{ 
                       boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px',
                       background: 'linear-gradient(45deg, rgba(240, 249, 244, 0.95), rgba(234, 179, 8, 0.1))'
                     }}>
                  <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="text-4xl 3xl:text-5xl mb-3 font-heading" style={{ 
                    fontWeight: '700',
                    background: 'linear-gradient(90deg, #eab308, #ca8a04, #2d7738)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>{stat.number}</div>
                  <div className="text-primary-700 font-medium text-lg" style={{ fontWeight: '600' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{ 
                      background: 'linear-gradient(45deg, rgba(240, 249, 244, 0.95), rgba(234, 179, 8, 0.2))',
                      boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px',
                      fontWeight: '700'
                    }}>
              <span className="relative z-10 flex items-center space-x-3" style={{ 
                background: 'linear-gradient(90deg, #eab308, #ca8a04, #2d7738)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                <span>Explore Our Premium Teas</span>
              </span>
            </button>
            
            <button className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                    style={{ 
                      fontWeight: '600',
                      boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px'
                    }}>
              <span className="relative z-10 flex items-center space-x-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Our Story</span>
              </span>
            </button>
          </div>

          {/* Trust indicators with proper contrast */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-90">
            {[
              { icon: Globe, text: 'ISO 22000 Certified' },
              { icon: Award, text: 'Organic Certified' },
              { icon: Leaf, text: 'Rainforest Alliance' }
            ].map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-white group hover:scale-105 transition-transform duration-300">
                <div className="p-2 bg-white/10 rounded-full">
                  <indicator.icon className="w-4 h-4 group-hover:animate-pulse" />
                </div>
                <span className="font-medium group-hover:text-accent-300 transition-colors" style={{ fontWeight: '600' }}>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center hover:border-accent-300 transition-colors">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};