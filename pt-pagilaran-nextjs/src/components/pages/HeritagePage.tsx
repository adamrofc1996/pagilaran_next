'use client'

import React from 'react';
import { Calendar, Award, Users, Leaf, BookOpen } from 'lucide-react';
import clsx from 'clsx';
import { milestones } from '@/data/milestones';

export const HeritagePage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative section-padding mb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="absolute inset-0 bg-[url('/images/pabrik-pagilaran.png')] bg-cover bg-center opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className={clsx("inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d")}>
            <Calendar className="w-5 h-5 text-accent-300" />
            <span className="text-white font-inter font-medium">Since 1910</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A Century of
            <span className="text-gradient-animated ml-3">
                Excellence
            </span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-12">
            From Dutch colonial origins to modern academic excellence, our journey spans over a century 
            of dedication to premium tea cultivation, innovation, and sustainable practices that honor 
            both tradition and progress.
          </p>

          {/* Heritage Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '114', label: 'Years of Heritage', suffix: '+' },
              { number: '1000', label: 'Hectares Cultivated', suffix: '+' },
              { number: '4', label: 'Generations', suffix: '' },
              { number: '50', label: 'Countries Served', suffix: '+' }
            ].map((stat, index) => (
              <div key={index} className={clsx("bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20")}>
                <div className="font-playfair text-3xl lg:text-4xl font-bold text-accent-300 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="font-inter text-primary-200 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Our
              <span className="text-gradient-animated ml-3">Journey</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">Discover the key milestones that shaped PT Pagilaran into the premium tea exporter we are today</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={clsx("absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 hidden lg:block")} />

            {/* Milestones */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={clsx(
                  "flex flex-col lg:flex-row items-center gap-12",
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className={clsx("inline-flex items-center space-x-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full px-6 py-3 mb-6 shadow-lg")}>
                      <milestone.icon className="w-6 h-6 text-primary-600" />
                      <span className="font-playfair text-3xl font-bold text-primary-800">{milestone.year}</span>
                    </div>
                    
                    <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
                      {milestone.title}
                    </h3>
                    
                    <p className="font-inter text-lg text-primary-600 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                      {milestone.description}
                    </p>
                    
                    <div className={clsx("bg-white rounded-2xl p-6 shadow-3d border border-primary-100/50 max-w-md mx-auto lg:mx-0")}>
                      <p className="font-inter text-primary-700 leading-relaxed italic">
                        "{milestone.details}"
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className={clsx("hidden lg:block relative")}>
                    <div className={clsx("w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full border-4 border-white shadow-gold flex items-center justify-center")}>
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className={clsx("relative group")}>
                      <div className={clsx("absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500")} />
                      <div className={clsx("relative overflow-hidden rounded-3xl shadow-tea group-hover:shadow-gold transition-all duration-500")}>
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={clsx("absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent")} />
                        <div className={clsx("absolute bottom-6 left-6 right-6")}>
                          <div className={clsx("bg-white/90 backdrop-blur-sm rounded-xl p-4")}>
                            <div className="font-playfair font-bold text-primary-800 text-lg mb-1">
                              {milestone.year}
                            </div>
                            <div className="font-inter text-primary-600 text-sm">
                              {milestone.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="absolute inset-0 bg-[url('/images/pabrik-pagilaran.png')] bg-cover bg-center opacity-20" />
        <div className="relative container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
                Our
                <span className="text-gradient-animated ml-3">Legacy</span>
              </h2>
              <p className="font-inter text-lg text-primary-100 leading-relaxed mb-8">
                More than a century of tea cultivation has taught us that excellence is not just about 
                the final product, but about every step of the journey. From the careful selection of 
                tea varietals to the sustainable farming practices that protect our environment for 
                future generations.
              </p>
              <div className="space-y-4">
                {[
                  'Perkebunan: Teh dan Kakao berkualitas tinggi',
                  'Perindustrian: Pengolahan teh dan kakao modern',
                  'Perdagangan: Distribusi produk ke pasar domestik dan internasional',
                  'Konsultasi: Keahlian agribisnis dan manajemen'
                ].map((point, index) => (
                  <div key={index} className={clsx("flex items-center space-x-3")}>
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                    <span className="font-inter text-primary-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20">
                    <Award className="w-8 h-8 text-accent-300 mb-4" />
                    <div className="font-playfair text-2xl font-bold text-white mb-2">Quality</div>
                    <div className="font-inter text-primary-200 text-sm">Uncompromising standards</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20">
                    <Users className="w-8 h-8 text-accent-300 mb-4" />
                    <div className="font-playfair text-2xl font-bold text-white mb-2">Community</div>
                    <div className="font-inter text-primary-200 text-sm">Supporting local families</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20">
                    <Leaf className="w-8 h-8 text-accent-300 mb-4" />
                    <div className="font-playfair text-2xl font-bold text-white mb-2">Sustainability</div>
                    <div className="font-inter text-primary-200 text-sm">Environmental stewardship</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-3d border border-white/20">
                    <BookOpen className="w-8 h-8 text-accent-300 mb-4" />
                    <div className="font-playfair text-2xl font-bold text-white mb-2">Innovation</div>
                    <div className="font-inter text-primary-200 text-sm">Research-driven excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};