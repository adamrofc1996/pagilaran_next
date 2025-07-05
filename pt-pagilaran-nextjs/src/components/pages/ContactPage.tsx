'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Building, Globe, Clock, Download, Calendar, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { OfficeMap } from '@/components/OfficeMap';

const offices = [
  {
    name: 'Head Office',
    label: 'Main Office', 
    address: 'Jl. Pagilaran No. 1, Batang, Central Java 51271, Indonesia',
    phone: '+62 285 123456',
    email: 'info@ptpagilaran.com',
    type: 'primary',
    description: 'Main operations and administration center',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=PT+Pagilaran+Batang',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.333314375964!2d109.8936111147721!3d-6.9511111950125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdc68e76b3b1b%3A0xac5a0a7c74f2b4e!2sP.T.+Pagilaran!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid'
  },
  {
    name: 'Export Office',
    label: 'Branch Office',
    address: 'Jl. Malioboro No. 123, Yogyakarta 55271, Indonesia', 
    phone: '+62 274 789012',
    email: 'export@ptpagilaran.com',
    type: 'secondary',
    description: 'International trade and export operations',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jalan+Malioboro+Yogyakarta',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.051166894364!2d110.3631943147776!3d-7.78424999437916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578816155555%3A0x24131de9f6a8f14!2sJl.+Malioboro!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid'
  },
  {
    name: 'Research Center',
    label: 'Branch Office',
    address: 'UGM Campus, Bulaksumur, Yogyakarta 55281, Indonesia',
    phone: '+62 274 345678',
    email: 'research@ptpagilaran.com',
    type: 'secondary',
    description: 'Research and development facility',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Universitas+Gadjah+Mada',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.16816326368!2d110.3779223147775!3d-7.77184899438626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584bd8a2433d%3A0x15a5c3a441aaa65a!2sUniversitas+Gadjah+Mada!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid'
  }
];

const inquiryTypes = [
  'Export Partnership',
  'Product Samples', 
  'Bulk Orders',
  'Research Collaboration',
  'Sustainability Programs',
  'Media Inquiries',
  'General Inquiry'
];

const quickActions = [
  {
    title: 'Product Catalog',
    description: 'Complete product specifications and pricing',
    icon: Download,
    action: 'download'
  },
  {
    title: 'Request Sample Kit',
    description: 'Try our premium tea varieties',
    icon: Mail,
    action: 'sample'
  },
  {
    title: 'Schedule Video Call',
    description: 'Meet with our export team',
    icon: Calendar,
    action: 'meeting'
  },
  {
    title: 'Visit Our Facility',
    description: 'Tour our tea plantation and processing',
    icon: Building,
    action: 'visit'
  }
];

export const ContactPage: React.FC = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#footer') {
      console.log('Hash is #footer. Attempting to scroll.');
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        console.log('Footer element found, scrolling...');
        footerElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Footer element not found.');
      }
    }
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    message: '',
    volume: '',
    timeline: ''
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section
        className="relative section-padding mb-16 text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/images/deal_pagilaran.jpg')` }}
      >
        <div className="absolute inset-0 bg-primary-900 opacity-70" />
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <Mail className="w-5 h-5 text-accent-300" />
            <span className="text-white font-inter font-medium">Get In Touch</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contact &
            <span className="text-gradient-animated ml-3">Partnership</span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Ready to partner with us? Get in touch to explore premium tea export opportunities, 
            request samples, or discuss custom requirements for your market.
          </p>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-grid">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-white rounded-2xl p-2 shadow-lg border border-primary-100">
              {[
                { id: 'contact', label: 'Contact Form', icon: Send },
                { id: 'offices', label: 'Our Offices', icon: Building },
                { id: 'actions', label: 'Quick Actions', icon: Globe }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center w-48 space-x-2 px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-3d p-8 lg:p-12 border border-primary-100/50">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-playfair text-3xl font-bold text-primary-800">Send us a Message</h2>
                      <p className="font-inter text-primary-600">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="Your country"
                        />
                      </div>
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Expected Volume (optional)
                        </label>
                        <input
                          type="text"
                          name="volume"
                          value={formData.volume}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="e.g., 100 tons annually"
                        />
                      </div>
                      <div>
                        <label className="block font-inter font-semibold text-primary-800 mb-2">
                          Timeline (optional)
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter"
                          placeholder="e.g., Q2 2024"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-inter font-semibold text-primary-800 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 font-inter resize-none"
                        placeholder="Please provide details about your inquiry, including quantity requirements, target markets, or specific questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-gold hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-primary-100/50">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-accent-600" />
                    <h3 className="font-playfair text-xl font-bold text-primary-800">Business Hours</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-inter text-primary-600">Monday - Friday</span>
                      <span className="font-inter font-semibold text-primary-800">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-primary-600">Saturday</span>
                      <span className="font-inter font-semibold text-primary-800">8:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-primary-600">Sunday</span>
                      <span className="font-inter font-semibold text-primary-800">Closed</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200">
                      <p className="font-inter text-xs text-primary-500">
                        * All times are in Western Indonesia Time (WIB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl shadow-lg p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-accent-100" />
                    <h3 className="font-playfair text-xl font-bold">Response Time</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-200 rounded-full" />
                      <span className="font-inter text-accent-100">Email inquiries: Within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-200 rounded-full" />
                      <span className="font-inter text-accent-100">Sample requests: 3-5 business days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-200 rounded-full" />
                      <span className="font-inter text-accent-100">Partnership proposals: 1-2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'offices' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="group">
                  <div className={`bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border h-full ${
                    office.type === 'primary' 
                      ? 'border-accent-200 ring-2 ring-accent-100' 
                      : 'border-primary-100/50'
                  }`}>
                    {office.label && (
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mb-2">
                        <Building className="w-3 h-3 mr-1" /> {office.label}
                      </span>
                    )}
                    
                    <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-2">{office.name}</h3>
                    <p className="font-inter text-primary-600 mb-6">{office.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-primary-700">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent-600" />
                        <span className="font-inter text-primary-700">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent-600" />
                        <span className="font-inter text-primary-700">{office.email}</span>
                      </div>
                    </div>
                    <OfficeMap embedUrl={office.embedUrl} mapUrl={office.mapUrl} name={office.name} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'actions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickActions.map((action, index) => (
                <div key={index} className="group flex">
                  <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 text-center flex flex-col justify-between items-center w-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <action.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-primary-800 mb-3 flex-grow">
                      {action.title}
                    </h3>
                    <p className="font-inter text-primary-600 mb-6 leading-relaxed flex-grow">
                      {action.description}
                    </p>
                    <button className="w-full bg-primary-100 hover:bg-accent-500 text-primary-800 hover:text-white px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};