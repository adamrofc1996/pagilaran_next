import React from 'react';
import { milestones } from '../data/milestones';

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-24 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
            Our
            <span className="text-gradient-animated ml-3">Legacy</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            From Dutch colonial origins to modern academic excellence, our journey spans over a century 
            of dedication to premium tea cultivation and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 hidden lg:block" />

          {/* Milestones */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-3 bg-primary-100 rounded-full px-6 py-2 mb-6">
                    <milestone.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-playfair text-2xl font-bold text-primary-800">{milestone.year}</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-primary-800 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="font-inter text-lg text-primary-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {milestone.description}
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'Years of Heritage' },
            { number: '1000+', label: 'Hectares Cultivated' },
            { number: '50+', label: 'Export Countries' },
            { number: '10M+', label: 'Kg Annual Production' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-primary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};