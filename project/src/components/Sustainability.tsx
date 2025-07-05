import React from 'react';
import { Leaf, Droplets, Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: 'Environmental Conservation',
    description: 'Protecting biodiversity through sustainable farming practices and forest conservation programs.',
    metrics: '500+ hectares protected',
    color: 'text-green-600'
  },
  {
    icon: Droplets,
    title: 'Water Management',
    description: 'Advanced irrigation systems and water conservation techniques to minimize environmental impact.',
    metrics: '30% water reduction',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Supporting local communities through education, healthcare, and economic empowerment programs.',
    metrics: '1000+ families supported',
    color: 'text-purple-600'
  },
  {
    icon: BookOpen,
    title: 'Research & Innovation',
    description: 'UGM-backed research programs advancing sustainable tea cultivation and processing methods.',
    metrics: '15+ research projects',
    color: 'text-accent-600'
  }
];

const certifications = [
  { name: 'Rainforest Alliance', description: 'Sustainable agriculture certification' },
  { name: 'Organic Certified', description: 'Chemical-free cultivation practices' },
  { name: 'Fair Trade', description: 'Ethical trading standards' },
  { name: 'ISO 14001', description: 'Environmental management system' }
];

export const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
            Sustainability &
            <span className="text-gradient-animated"> Research</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Backed by Universitas Gadjah Mada's academic excellence, we lead the industry in 
            sustainable practices, environmental conservation, and innovative research.
          </p>
        </div>

        {/* UGM Partnership Highlight */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 mb-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-accent-300" />
                <span className="font-inter font-semibold text-accent-300">Academic Partnership</span>
              </div>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
                Powered by Universitas Gadjah Mada
              </h3>
              <p className="font-inter text-lg leading-relaxed mb-8 text-primary-100">
                Our unique partnership with Indonesia's premier university brings cutting-edge research, 
                academic rigor, and innovative solutions to every aspect of our tea production.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-playfair text-2xl font-bold text-accent-300 mb-1">15+</div>
                  <div className="font-inter text-sm text-primary-200">Active Research Projects</div>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-accent-300 mb-1">50+</div>
                  <div className="font-inter text-sm text-primary-200">Published Studies</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Research and Development"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-pearl-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-white shadow-md ${initiative.color}`}>
                  <initiative.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="font-inter text-primary-600 leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-inter font-semibold text-green-600">{initiative.metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-primary-800 rounded-3xl p-8 lg:p-12 mb-20 text-white">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">Our Impact</h3>
            <p className="font-inter text-primary-200">Measurable results from our sustainability efforts</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-300 mb-2">-40%</div>
              <div className="font-inter text-primary-200">Carbon Footprint Reduction</div>
            </div>
            <div>
              <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-300 mb-2">100%</div>
              <div className="font-inter text-primary-200">Renewable Energy</div>
            </div>
            <div>
              <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-300 mb-2">500+</div>
              <div className="font-inter text-primary-200">Hectares Protected</div>
            </div>
            <div>
              <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-300 mb-2">1000+</div>
              <div className="font-inter text-primary-200">Local Jobs Created</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-800 mb-12">
            Certified Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-pearl-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-primary-800 mb-2">{cert.name}</h4>
                <p className="font-inter text-sm text-primary-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};