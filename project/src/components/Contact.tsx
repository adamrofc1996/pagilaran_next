
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building, Globe, Clock } from 'lucide-react';
import { OfficeMap } from './OfficeMap'; // Impor komponen baru

// Data kantor di-hardcode untuk sementara
const offices = [
  {
    name: 'Head Office',
    label: 'Main Office',
    address: 'Jl. Pagilaran No. 1, Batang, Central Java 51271, Indonesia',
    phone: '+62 285 123456',
    email: 'info@ptpagilaran.com',
    type: 'primary',
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
  'General Inquiry'
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
            Contact &
            <span className="text-gradient-animated ml-3">Partnership</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us? Get in touch to explore premium tea export opportunities, 
            request samples, or discuss custom requirements for your market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <Send className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-primary-800">Send us a Message</h3>
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
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
                      className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
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
                    className="w-full px-4 py-3 border border-pearl-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-inter resize-none"
                    placeholder="Please provide details about your inquiry, including quantity requirements, target markets, or specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Building className="w-6 h-6 text-primary-600" />
                <h3 className="font-playfair text-xl font-bold text-primary-800">Our Offices</h3>
              </div>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className={`${office.type === 'primary' ? 'border-l-4 border-accent-500 pl-4' : ''}`}>
                    {office.label && (
                      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mb-2">
                        <Building className="w-3 h-3 mr-1" /> {office.label}
                      </span>
                    )}
                    <h4 className="font-inter font-semibold text-primary-800 mb-2">{office.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-primary-600">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary-500" />
                        <span className="font-inter text-primary-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary-500" />
                        <span className="font-inter text-primary-600">{office.email}</span>
                      </div>
                    </div>
                    <OfficeMap embedUrl={office.embedUrl} mapUrl={office.mapUrl} name={office.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary-600" />
                <h3 className="font-playfair text-xl font-bold text-primary-800">Business Hours</h3>
              </div>
              
              <div className="space-y-2 text-sm">
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
                <div className="mt-4 pt-4 border-t border-pearl-200">
                  <p className="font-inter text-xs text-primary-500">
                    * All times are in Western Indonesia Time (WIB)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-primary-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-accent-300" />
                <h3 className="font-playfair text-xl font-bold">Quick Actions</h3>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-inter font-medium transition-colors text-left">
                  Product Catalog
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-inter font-medium transition-colors text-left">
                  Request Sample Kit
                </button>
                <button className="w-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-3 rounded-xl font-inter font-medium transition-colors text-left">
                  Schedule Video Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};