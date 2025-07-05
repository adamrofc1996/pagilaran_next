import React, { useState } from 'react';
import { Leaf, Award, Download, ChevronRight, CheckCircle, Globe } from 'lucide-react';
import productsData from '../data/products.json';

const products = productsData.map(p => ({
  id: p.name.toLowerCase().replace(/ /g, '-'),
  name: p.name,
  subtitle: p.description,
  description: p.flavorNotes,
  image: p.image,
  tastingNotes: p.tags,
  specifications: {
    grade: p.specifications.split(', ')[0] || 'N/A',
    moisture: 'N/A',
    caffeine: 'N/A',
    origin: 'N/A',
    processing: 'N/A',
    harvest: 'N/A',
  },
  certifications: p.certifications.split(', '),
  features: [
    p.specifications,
  ]
}));

const qualityStandards = [
  {
    icon: Award,
    title: 'International\nCertifications', // Added line break to better fit card
    description: 'International quality standards including ISO 22000, HACCP, and organic certifications.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Control',
    description: 'Rigorous testing at every stage from leaf to cup, ensuring consistent quality and safety.'
  },
  {
    icon: Globe,
    title: 'Global Standards', 
    description: 'Compliant with international food safety regulations and export requirements worldwide.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'Ethically sourced from our own plantations with sustainable farming practices.'
  }
];

export const ProductsPage: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative section-padding mb-16 bg-[url('/images/product-ptpagilaran.jpg')] bg-cover bg-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <Leaf className="w-5 h-5 text-accent-300 animate-leaf-float" />
            <span className="text-white font-inter font-medium">Premium Quality</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Premium Tea
            <span className="text-gradient-animated ml-3">
              Collection
            </span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium teas, each representing the pinnacle 
            of Java's tea craftsmanship and over a century of cultivation expertise.
          </p>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-grid">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`group relative px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 overflow-hidden ${
                  activeProduct.id === product.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-tea scale-105'
                    : 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl hover:scale-105 border border-primary-100'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Leaf className="w-4 h-4" />
                  <span>{product.name}</span>
                </span>
                {activeProduct.id === product.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50" />
                )}
              </button>
            ))}
          </div>

          {/* Active Product Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
              <div className="relative overflow-hidden rounded-3xl shadow-tea group-hover:shadow-gold transition-all duration-500">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
                  <Leaf className="w-4 h-4 text-primary-600" />
                  <span className="font-inter font-semibold text-primary-800 text-sm">Premium Quality</span>
                </div>
                
                <div className="absolute top-6 right-6 bg-accent-500 text-white rounded-full px-4 py-2 shadow-lg">
                  <span className="font-inter font-semibold text-sm">Export Grade</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-800 mb-3">
                  {activeProduct.name}
                </h2>
                <p className="font-inter text-xl text-accent-600 font-medium mb-6">
                  {activeProduct.subtitle}
                </p>
                <p className="font-inter text-lg text-primary-600 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Product Tabs */}
              <div className="border-b border-primary-200">
                <div className="flex space-x-8">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'specifications', label: 'Specifications' },
                    { id: 'certifications', label: 'Certifications' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 px-1 border-b-2 font-inter font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'border-accent-500 text-accent-600'
                          : 'border-transparent text-primary-600 hover:text-primary-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Tasting Notes */}
                    <div>
                      <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-4">Tasting Notes</h4>
                      <div className="flex flex-wrap gap-3">
                        {activeProduct.tastingNotes.map((note, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 px-4 py-2 rounded-full font-inter font-medium shadow-sm"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {activeProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                            <span className="font-inter text-primary-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div>
                    <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-6">Technical Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(activeProduct.specifications).map(([key, value]) => (
                        <div key={key} className="bg-gradient-to-br from-pearl-50 to-primary-50 rounded-xl p-4 border border-primary-100">
                          <div className="font-inter font-semibold text-primary-800 capitalize mb-2 flex items-center">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mr-2" />
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="font-inter text-primary-600 font-medium">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div>
                    <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-6">Quality Certifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {activeProduct.certifications.map((cert, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                              <Award className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-inter font-semibold text-primary-800">{cert}</div>
                              <div className="font-inter text-sm text-primary-600">Certified</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-gold hover:shadow-xl">
                  <Leaf className="w-5 h-5" />
                  <span>Request Sample</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center space-x-2 bg-white hover:bg-primary-50 text-primary-800 px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-primary-200">
                  <Download className="w-5 h-5" />
                  <span>Download Specs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-[url('/images/product-ptpagilaran.jpg')] bg-cover bg-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-800/80" />
        <div className="relative container-grid">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Quality
              <span className="text-gradient-animated ml-3">Standards</span>
            </h2>
            <p className="font-inter text-xl text-primary-100 max-w-full mx-auto leading-relaxed whitespace-nowrap">
              Our commitment to excellence is reflected in every aspect of our tea production and quality control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-3d hover:shadow-gold transition-all duration-300 hover:scale-105 border border-white/20 text-center h-full flex flex-col items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-4 whitespace-pre-line text-center">
                    {standard.title}
                  </h3>
                  <p className="font-inter text-primary-200 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};