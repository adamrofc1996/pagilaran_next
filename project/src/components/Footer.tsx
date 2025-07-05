import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Leaf, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/heritage' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Careers', href: '#' },
    { name: 'News', path: '/news' }
  ],
  products: [
    { name: 'Orthodox Black Tea', path: '/products' },
    { name: 'Premium CTC', path: '/products' },
    { name: 'Green Tea', path: '/products' },
    { name: 'Custom Blends', path: '/contact' }
  ],
  services: [
    { name: 'Export Services', path: '/global-presence' },
    { name: 'Quality Assurance', path: '/products' },
    { name: 'Research & Development', path: '/sustainability' },
    { name: 'Sustainability Programs', path: '/sustainability' }
  ],
  resources: [
    { name: 'Product Specifications', href: '#' },
    { name: 'Certifications', href: '#' },
    { name: 'Industry Reports', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
  ]
};

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tea-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-start space-x-1 group mb-6">
                <img src="/images/pagilaran-logo.png" alt="PT Pagilaran Logo" className="w-16 h-16 floating-logo" />
                <div className="flex flex-col justify-center">
                  <div className="font-heading transition-colors text-xl 3xl:text-2xl text-white whitespace-nowrap" style={{ fontWeight: '700' }}>
                    PT Pagilaran
                  </div>
                  <div className="text-xs 3xl:text-sm transition-colors leading-tight text-neutral-200 whitespace-nowrap" style={{ fontWeight: '600' }}>
                    Premium Tea Exports
                  </div>
                </div>
              </Link>
              
              <p className="font-inter text-primary-200 leading-relaxed mb-8 -mt-6">
                Crafting premium tea from the heart of Java for over a century. 
                Backed by Universitas Gadjah Mada's academic excellence.
              </p>
              
              <div className="space-y-2 -mt-4">
                <div className="flex items-center space-x-3 group">
                  <MapPin className="w-4 h-4 text-accent-300 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="font-inter text-sm text-primary-200 group-hover:text-white transition-colors">
                    Jl. Pagilaran No. 1, Batang, Central Java, Indonesia
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 text-accent-300 group-hover:animate-pulse" />
                  <span className="font-inter text-sm text-primary-200 group-hover:text-white transition-colors">+62 285 123456</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 text-accent-300 group-hover:animate-pulse" />
                  <span className="font-inter text-sm text-primary-200 group-hover:text-white transition-colors">export@ptpagilaran.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-4 relative">
                    Company
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full" />
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        {link.path ? (
                          <Link
                            to={link.path}
                            className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-4 relative">
                    Products
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full" />
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.products.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-4 relative">
                    Services
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full" />
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-4 relative">
                    Resources
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full" />
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        {link.path ? (
                          <Link
                            to={link.path}
                            className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-inter text-primary-200 hover:text-accent-300 transition-all duration-300 text-sm flex items-center group"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-700/50 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-2 flex items-center">
                <Leaf className="w-6 h-6 text-accent-400 mr-2 animate-leaf-float" />
                Stay Updated
              </h3>
              <p className="font-inter text-primary-200">
                Get the latest news about our products, sustainability initiatives, and industry insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-3 rounded-xl font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-gold hover:shadow-xl whitespace-nowrap group">
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-primary-700/50 backdrop-blur-sm border border-primary-600/50 text-white placeholder-primary-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent font-inter transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="font-inter text-primary-200 text-sm">
                © 2024 PT Pagilaran. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="font-inter text-primary-200 hover:text-accent-300 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-primary-400">|</span>
                <a href="#" className="font-inter text-primary-200 hover:text-accent-300 transition-colors">
                  Terms of Service
                </a>
                <span className="text-primary-400">|</span>
                <a href="#" className="font-inter text-primary-200 hover:text-accent-300 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="font-inter text-primary-200 text-sm">Follow us:</span>
              <div className="flex items-center space-x-3">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-700/50 hover:bg-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-gold group backdrop-blur-sm"
                  >
                    <social.icon className="w-4 h-4 text-white group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};