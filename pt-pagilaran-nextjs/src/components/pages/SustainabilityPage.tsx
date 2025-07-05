'use client'

import React from 'react';
import { Leaf, Droplets, Users, BookOpen, Award, TrendingUp, Recycle, Heart } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: 'Environmental Conservation',
    description: 'Protecting biodiversity through sustainable farming practices, forest conservation programs, and ecosystem restoration projects.',
    metrics: '500+ hectares protected',
    color: 'from-green-500 to-green-600',
    details: [
      'Native forest preservation programs',
      'Biodiversity monitoring and protection',
      'Organic farming certification',
      'Carbon sequestration initiatives'
    ]
  },
  {
    icon: Droplets,
    title: 'Water Management',
    description: 'Advanced irrigation systems and water conservation techniques to minimize environmental impact and ensure sustainable water use.',
    metrics: '30% water reduction',
    color: 'from-blue-500 to-blue-600',
    details: [
      'Drip irrigation systems',
      'Rainwater harvesting',
      'Water quality monitoring',
      'Watershed protection programs'
    ]
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Supporting local communities through education, healthcare, and economic empowerment programs that create lasting positive impact.',
    metrics: '1000+ families supported',
    color: 'from-purple-500 to-purple-600',
    details: [
      'Educational scholarships',
      'Healthcare access programs',
      'Skills training initiatives',
      'Women empowerment projects'
    ]
  },
  {
    icon: BookOpen,
    title: 'Research & Innovation',
    description: 'UGM-backed research programs advancing sustainable tea cultivation, processing methods, and agricultural innovation.',
    metrics: '15+ research projects',
    color: 'from-accent-500 to-accent-600',
    details: [
      'Sustainable cultivation research',
      'Climate adaptation studies',
      'Soil health improvement',
      'Pest management innovation'
    ]
  }
];

const impactMetrics = [
  { value: '-40%', label: 'Carbon Footprint Reduction', icon: Leaf, color: 'text-green-600' },
  { value: '100%', label: 'Renewable Energy', icon: TrendingUp, color: 'text-blue-600' },
  { value: '500+', label: 'Hectares Protected', icon: Award, color: 'text-accent-600' },
  { value: '1000+', label: 'Local Jobs Created', icon: Users, color: 'text-purple-600' }
];

const certifications = [
  { 
    name: 'Rainforest Alliance', 
    description: 'Sustainable agriculture and forest conservation certification',
    icon: Leaf,
    color: 'from-green-500 to-green-600'
  },
  { 
    name: 'Organic Certified', 
    description: 'Chemical-free cultivation and processing practices',
    icon: Award,
    color: 'from-blue-500 to-blue-600'
  },
  { 
    name: 'Fair Trade', 
    description: 'Ethical trading standards and community development',
    icon: Heart,
    color: 'from-red-500 to-red-600'
  },
  { 
    name: 'ISO 14001', 
    description: 'Environmental management system certification',
    icon: Recycle,
    color: 'from-accent-500 to-accent-600'
  }
];

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section
        className="relative section-padding mb-16 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/kakao-pagilaran.jpg')` }}
      >
        <div className="absolute inset-0 bg-primary-900 opacity-80" />
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <Leaf className="w-5 h-5 text-accent-300 animate-leaf-float" />
            <span className="text-white font-inter font-medium">Sustainable Excellence</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sustainability &
            <span className="text-gradient-animated ml-3">
              Research
            </span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Backed by Universitas Gadjah Mada's academic excellence, we lead the industry in 
            sustainable practices, environmental conservation, and innovative research that 
            benefits both our planet and communities.
          </p>
        </div>
      </section>

      {/* UGM Partnership Highlight */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white shadow-3d">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-8 h-8 text-accent-300" />
                  <span className="font-inter font-semibold text-accent-300">Academic Partnership</span>
                </div>
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
                  Powered by
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400 block">
                    Universitas Gadjah Mada
                  </span>
                </h2>
                <p className="font-inter text-lg leading-relaxed mb-8 text-primary-100">
                  Our unique partnership with Indonesia's premier university brings cutting-edge research, 
                  academic rigor, and innovative solutions to every aspect of our tea production and 
                  sustainability initiatives.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="font-playfair text-2xl font-bold text-accent-300 mb-1">15+</div>
                    <div className="font-inter text-sm text-primary-200">Active Research Projects</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="font-playfair text-2xl font-bold text-accent-300 mb-1">50+</div>
                    <div className="font-inter text-sm text-primary-200">Published Studies</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl transform rotate-3" />
                <img
                  src="https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Research and Development"
                  className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Our
              <span className="text-gradient-animated ml-3">Initiatives</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive sustainability programs that create positive impact for our environment and communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-pearl-50 to-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 h-full">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${initiative.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <initiative.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-3">
                        {initiative.title}
                      </h3>
                      <p className="font-inter text-primary-600 leading-relaxed mb-4">
                        {initiative.description}
                      </p>
                      <div className="flex items-center space-x-2 mb-6">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-inter font-semibold text-green-600">{initiative.metrics}</span>
                      </div>
                      <div className="space-y-2">
                        {initiative.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                            <span className="font-inter text-sm text-primary-700">{detail}</span>
                          </div>
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

      {/* Impact Metrics */}
      <section
        className="section-padding text-white relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/kakao-pagilaran.jpg')` }}
      >
        <div className="absolute inset-0 bg-primary-800 opacity-80" />
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our
              <span className="text-gradient-animated ml-3">Impact</span>
            </h2>
            <p className="font-inter text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Measurable results from our comprehensive sustainability efforts and environmental stewardship
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-3d hover:shadow-gold transition-all duration-300 hover:scale-105 border border-white/20">
                  <metric.icon className={`w-12 h-12 mx-auto mb-4 group-hover:animate-pulse ${metric.color}`} />
                  <div className="font-playfair text-4xl lg:text-5xl font-bold text-accent-300 mb-2">
                    {metric.value}
                  </div>
                  <div className="font-inter text-primary-200 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Certified
              <span className="text-gradient-animated ml-3">Excellence</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to sustainability is validated by internationally recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-primary-800 mb-3">{cert.name}</h3>
                  <p className="font-inter text-sm text-primary-600 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};