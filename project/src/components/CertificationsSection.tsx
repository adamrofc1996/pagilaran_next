import React from 'react';
import { Award, Shield, Leaf, Globe, CheckCircle, Star } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    name: 'ISO 22000',
    description: 'Food Safety Management System certification ensuring the highest standards in food safety.',
    year: '2020',
    authority: 'International Organization for Standardization'
  },
  {
    icon: Leaf,
    name: 'Organic Certified',
    description: 'Certified organic tea production following strict environmental and quality standards.',
    year: '2019',
    authority: 'USDA Organic & EU Organic'
  },
  {
    icon: Globe,
    name: 'Rainforest Alliance',
    description: 'Sustainable agriculture certification promoting environmental conservation and social responsibility.',
    year: '2021',
    authority: 'Rainforest Alliance'
  },
  {
    icon: Shield,
    name: 'HACCP',
    description: 'Hazard Analysis Critical Control Points system for food safety and quality assurance.',
    year: '2020',
    authority: 'Codex Alimentarius'
  },
  {
    icon: CheckCircle,
    name: 'Fair Trade',
    description: 'Ethical trading standards ensuring fair prices and working conditions for farmers.',
    year: '2022',
    authority: 'Fair Trade International'
  },
  {
    icon: Star,
    name: 'GMP Certified',
    description: 'Good Manufacturing Practices certification for quality production processes.',
    year: '2021',
    authority: 'WHO Guidelines'
  }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24" aria-label="Certifications Section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Quality
            <span className="text-gradient-primary"> Certifications</span>
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Our commitment to excellence is validated by internationally recognized certifications 
            that ensure the highest standards in quality, safety, and sustainability.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <cert.icon size={40} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{cert.name}</h3>
                <p className="text-neutral-600 text-sm mb-3">{cert.description}</p>
                <div className="flex justify-between items-center text-xs text-neutral-500 mt-2">
                  <span className="font-medium text-neutral-600">Since {cert.year}</span>
                  <span>{cert.authority}</span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-200">
                <button className="w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md text-sm transition-colors duration-300">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-extrabold text-blue-600 mb-2">6+</div>
                <p className="text-neutral-600 text-sm">International Certifications</p>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-indigo-600 mb-2">100%</div>
                <p className="text-neutral-600 text-sm">Compliance Rate</p>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-blue-600 mb-2">Annual</div>
                <p className="text-neutral-600 text-sm">Audit Schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};