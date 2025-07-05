import React, { useState } from 'react';
import { Leaf, Award, Download, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 'orthodox',
    name: 'Orthodox Black Tea',
    subtitle: 'Premium Whole Leaf',
    description: 'Hand-picked and traditionally processed using the orthodox method, preserving the full character and complexity of our high-grown Java tea.',
      image: "/images/th-22028614882b9f536c72a7c25219c2cc6f97e757.png",



    tastingNotes: ['Malty', 'Citrus', 'Honey', 'Floral'],
    specifications: {
      grade: 'PEKOE, OP, FOP',
      moisture: '< 7%',
      caffeine: '2.5-4.5%',
      origin: 'Java Highlands'
    },
    certifications: ['Organic', 'Rainforest Alliance', 'ISO 22000']
  },
  {
    id: 'ctc',
    name: 'Premium CTC',
    subtitle: 'Crush, Tear, Curl',
    description: 'Our CTC tea offers a robust, full-bodied flavor perfect for blending. Processed using modern techniques while maintaining traditional quality standards.',
      image: "/images/id-11134207-7r992-lqn5x1wiyy9a10.jpg",



    tastingNotes: ['Bold', 'Malty', 'Robust', 'Astringent'],
    specifications: {
      grade: 'BP, PF, F, D',
      moisture: '< 7%',
      caffeine: '3.0-5.0%',
      origin: 'Java Lowlands'
    },
    certifications: ['ISO 22000', 'HACCP', 'Halal']
  },
  {
    id: 'green',
    name: 'Green Tea',
    subtitle: 'Naturally Pure',
    description: 'Carefully steamed and dried to preserve antioxidants and delicate flavors. Our green tea represents the finest of Java\'s tea craftsmanship.',
      image: "/images/fb85e2f84eb372bf8ed5c17c8043fd6a.jpg",



    tastingNotes: ['Fresh', 'Grassy', 'Sweet', 'Vegetal'],
    specifications: {
      grade: 'Sencha, Gunpowder',
      moisture: '< 6%',
      caffeine: '2.0-3.5%',
      origin: 'Java Highlands'
    },
    certifications: ['Organic', 'JAS Organic', 'ISO 22000']
  }
];

export const ProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-700 mb-6">
            Premium Tea
            <span className="text-black"> Collection</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium teas, each representing 
            the pinnacle of Java's tea craftsmanship and heritage.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 ${
                activeProduct.id === product.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-pearl-100 text-primary-600 hover:bg-primary-100'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Active Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300" />
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
            
            {/* Floating Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
              <Leaf className="w-4 h-4 text-primary-600" />
              <span className="font-inter font-semibold text-primary-800 text-sm">Premium Quality</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-800 mb-2">
                {activeProduct.name}
              </h3>
              <p className="font-inter text-xl text-accent-600 font-medium mb-6">
                {activeProduct.subtitle}
              </p>
              <p className="font-inter text-lg text-primary-600 leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Tasting Notes */}
            <div>
              <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-4">Tasting Notes</h4>
              <div className="flex flex-wrap gap-3">
                {activeProduct.tastingNotes.map((note, index) => (
                  <span
                    key={index}
                    className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-inter font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-4">Specifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(activeProduct.specifications).map(([key, value]) => (
                  <div key={key} className="bg-pearl-50 rounded-lg p-4">
                    <div className="font-inter font-semibold text-primary-800 capitalize mb-1">{key}</div>
                    <div className="font-inter text-primary-600">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {activeProduct.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2">
                    <Award className="w-4 h-4 text-primary-600" />
                    <span className="font-inter font-medium text-primary-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105">
                <span>Request Sample</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-primary-100 hover:bg-primary-200 text-primary-800 px-8 py-4 rounded-full font-inter font-semibold transition-colors">
                <Download className="w-5 h-5" />
                <span>Download Specs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); // Removed Tailwind utilities, relying on component classes instead
};