import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, Leaf, Target, BookOpen, Globe, Users } from 'lucide-react';

import clsx from 'clsx';
// Remove unused import
import products from '../data/products.json';
import {
  HOME_HERO_STATS,
  HOME_TRUST_INDICATORS,

  HOME_PRODUCT_CATEGORIES,
  HOME_GLOBAL_IMPACT_POINTS,
} from '../constants';

const organizationalValues = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Mengejar standar tertinggi dalam setiap aspek, mulai dari budidaya teh hingga pelayanan pelanggan.'
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    description: 'Menerapkan inovasi berbasis riset dan peningkatan berkelanjutan dalam semua aspek operasional kami.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Berkomitmen pada pengelolaan lingkungan dan praktik berkelanjutan untuk generasi mendatang.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Mendukung dan memberdayakan komunitas di wilayah operasional kami melalui berbagai program pengembangan.'
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex-center overflow-hidden pb-10">
        {/* Background with enhanced depth */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-[20s] hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(45, 119, 56, 0.85) 0%, rgba(35, 96, 48, 0.75) 50%, rgba(29, 77, 40, 0.85) 100%), url('/images/tea-2119434.jpg')`
            }}
          />
          {/* Floating tea leaves with enhanced animation */}
          <div className="absolute inset-0">
            {HOME_PRODUCT_CATEGORIES.map((_, i) => (
              <div
                key={i}
                className={clsx(
                  `absolute w-8 h-8 text-accent-400/40`,
                  // Add more conditional classes here if needed
                )}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 4) * 20}%`,
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${6 + i}s`
                }}
              >
                <Leaf className="w-full h-full" />
              </div>
            ))}
          </div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-900/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-grid text-center pt-48">
          <div className="space-content">


            {/* Main Headline with enhanced 3D effect */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight text-crisp">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                From Java’s Volcanic Highlands
              </span>
              <br />
              <span className="inline-block transform hover:scale-105 transition-transform duration-300 text-gradient-animated">
                to the World’s Finest Tables
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-neutral-100 mb-4 opacity-95 text-crisp">
              A Century of Craft, A Taste the World Remembers
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 mb-8 content-medium leading-normal opacity-90 text-crisp">
              <span className="text-4xl font-serif text-white opacity-70 relative -top-2 -left-2">“</span>Backed by a century of research-driven cultivation and rooted in the heart of Java, Pagilaran delivers premium tea that stands among the world’s finest — ethically grown, globally enjoyed.<span className="text-4xl font-serif text-white opacity-70 relative -bottom-2 -right-2">”</span>
            </p>

            {/* Enhanced 3D Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 content-medium">
              {HOME_HERO_STATS.map((stat, index) => (
                <div key={index} className="group">
                  <div className="card-premium p-6 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu">
                    <stat.icon className="w-8 h-8 text-accent-500 mx-auto mb-3 group-hover:animate-pulse" />
                    <div className="text-3xl font-bold text-yellow-500 mb-2 font-heading text-crisp">{stat.number}</div>
                    <div className="text-neutral-600 font-medium text-crisp">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/products" 
                className="w-64 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-gold hover:shadow-xl whitespace-nowrap group"
              >
                <span className="flex items-center justify-center">
                  <Leaf className="w-5 h-5 mr-2" />
                  <span className="text-lg">View All Products</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <button className="w-64 group backdrop-glass hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-depth-2 hover:shadow-depth-3">
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-crisp text-lg">Watch Our Story</span>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
              {HOME_TRUST_INDICATORS.map((indicator, index) => (
                <div key={index} className="group flex items-center space-x-2 text-neutral-200 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu">
                  <indicator.icon className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="font-medium group-hover:text-white transition-colors text-crisp">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* Quick Overview Section */}
      <section className="py-16 bg-gradient-soft relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div className="relative container-grid">
          <div className="text-center mb-16 animate-up">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 backdrop-glass rounded-full px-6 py-3 mb-8 shadow-depth-3">
              <Award className="w-5 h-5 text-accent-400" />
              <span className="text-gradient-animated">Premium Tea Excellence Since 1910</span>
            </div>
            <h2 className="font-heading text-5xl font-bold text-primary-800 mt-2 mb-4 text-crisp relative z-10">
              <span className="text-gradient-animated">Tentang</span> Kami
            </h2>
            <p className="text-xl text-primary-600 content-medium leading-relaxed text-crisp whitespace-nowrap">
              Pelajari lebih lanjut tentang komitmen kami terhadap standar mutu dan kualitas teh premium
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="card-premium p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-accent-500" />
                <h3 className="font-heading text-2xl font-bold text-primary-800 text-crisp">Profil Singkat</h3>
              </div>
              <p className="text-primary-600 leading-relaxed text-crisp">
                PT Pagilaran adalah perusahaan swasta yang bergerak secara terpadu di bidang perkebunan, perindustrian, perdagangan, dan konsultasi, dengan komoditas utama berupa teh dan kakao. Sejak lebih dari 50 tahun lalu, PT Pagilaran telah mengelola dua unit inti dan empat unit plasma, melalui semangat bisnis yang tidak hanya berorientasi pada profit, namun juga berfokus pada keberlanjutan dan kontribusi sosial. Sebagai bagian dari Universitas Gadjah Mada (UGM), PT Pagilaran mengemban amanah Tri Dharma Perguruan Tinggi (pendidikan, penelitian, dan pengabdian masyarakat) melalui kolaborasi penelitian ilmiah oleh mahasiswa, dosen, dan peneliti, serta program pemberdayaan petani dalam skema Perkebunan Inti Rakyat (PIR) Nasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-soft relative">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div className="relative container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl font-bold text-primary-800 mb-4">
              Visi &
              <span className="text-gradient-animated ml-3">Misi</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed text-center">
              Visi dan misi kami memandu setiap langkah, memastikan pertumbuhan yang berkelanjutan dan dampak positif
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="card-premium p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-7 h-7 text-accent-500" />
                <h3 className="font-playfair text-2xl font-bold text-primary-800">
                  Visi
                </h3>
              </div>
              <p className="font-inter text-primary-600 leading-relaxed text-center">
                Menjadi perusahaan agribisnis terkemuka yang berkelanjutan dan inovatif, menghasilkan produk teh dan kakao berkualitas tinggi yang diakui secara global, serta memberikan kontribusi signifikan bagi kesejahteraan masyarakat dan lingkungan.
              </p>
            </div>
            <div className="card-premium p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-accent-500" />
                <h3 className="font-playfair text-2xl font-bold text-primary-800">
                  Misi
                </h3>
              </div>
              <ol className="font-inter text-primary-600 leading-relaxed space-y-2">
                <li className="flex items-start"><span className="mr-2 font-bold text-accent-500">1.</span> Mengembangkan dan menerapkan praktik pertanian berkelanjutan untuk menjaga kelestarian lingkungan dan kualitas produk.</li>
                <li className="flex items-start"><span className="mr-2 font-bold text-accent-500">2.</span> Melakukan inovasi dalam pengolahan dan pengembangan produk teh dan kakao untuk memenuhi permintaan pasar global.</li>
                <li className="flex items-start"><span className="mr-2 font-bold text-accent-500">3.</span> Membangun kemitraan yang kuat dengan petani dan komunitas lokal untuk meningkatkan kesejahteraan bersama.</li>
                <li className="flex items-start"><span className="mr-2 font-bold text-accent-500">4.</span> Meningkatkan nilai perusahaan melalui tata kelola yang baik, efisiensi operasional, dan pengembangan sumber daya manusia yang profesional.</li>
                <li className="flex items-start"><span className="mr-2 font-bold text-accent-500">5.</span> Berkomitmen pada riset dan pengembangan untuk terus menghasilkan produk unggulan dan solusi agribisnis yang relevan.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Organizational Values */}
      <section className="py-16 bg-gradient-soft relative">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div className="relative container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl font-bold text-primary-800 mb-4">
              Our
              <span className="text-gradient-animated ml-3">Values</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
              Prinsip-prinsip inti yang melandasi tindakan, keputusan, dan hubungan kemitraan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizationalValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 text-center h-full">
                  <value.icon className="w-12 h-12 text-accent-500 mx-auto mb-6 group-hover:animate-bounce" />
                  <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-primary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 bg-gradient-soft relative">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div className="container-grid">
          <div className="text-center mb-16 animate-up">
            <h2 className="font-heading text-5xl font-bold text-primary-800 mt-2 mb-4 text-crisp relative z-10">
            <span className="text-gradient-animated">Premium Tea</span> Collection
          </h2>
            <p className="text-xl text-primary-600 content-medium leading-relaxed text-crisp">
              Temukan pilihan teh premium kami yang spesial diproduksi dari dataran tinggi Jawa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 3).map((product, index) => (
              <div key={index} className="group animate-scale" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="card-premium overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-hover hover:z-10 transform-gpu h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-depth-2">
                      Premium
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-primary-800 mb-3 group-hover:text-primary-900 transition-colors text-crisp">
                      {product.name}
                    </h3>
                    <p className="text-primary-600 mb-4 leading-relaxed text-crisp">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                       {(product.tags || []).map((note, noteIndex) => (
                        <span
                          key={noteIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      className="inline-flex items-center space-x-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors group"
                    >
                      <span className="text-crisp">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link
              to="/products"
              className="w-64 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-gold hover:shadow-xl whitespace-nowrap group"
            >
              <span className="flex items-center justify-center">
                <Leaf className="w-5 h-5 mr-2" />
                <span className="text-lg">View All Products</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 bg-gradient-soft">
        <div 
          className="absolute inset-0 bg-white" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcdcdc' stroke-width='1'%3E%3Cpath d='M50 0L61.8 35.4H98.5L68.3 57.3L80.1 92.7L50 70.8L19.9 92.7L31.7 57.3L1.5 35.4H38.2Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            mixBlendMode: 'overlay',
            pointerEvents: 'none'
          }}
        />
        <div className="container-grid">
          <div className="text-center mb-16 animate-up">
            <h2 className="font-heading text-5xl font-bold text-primary-800 mb-4 text-crisp">
              Global
              <span className="text-gradient-animated"> Impact</span>
            </h2>
            <p className="text-xl text-primary-600 content-medium leading-relaxed text-crisp">
              Teh premium kami menjangkau meja di seluruh dunia, <br /> menciptakan kemitraan strategis yang berdampak dan berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME_GLOBAL_IMPACT_POINTS.map((stat, index) => (
              <div key={index} className="group rounded-3xl p-8 lg:p-12 text-center border border-neutral-100/50" style={{
                background: 'white',
                boxShadow: 'rgba(0,0,0,0.15) 0px 4px 12px'
              }}>
                <div className={clsx(
                  'w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110',
                  stat.color
                )}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <p className={clsx(
                  'text-4xl font-bold mb-2',
                  stat.textColor
                )}>
                  {stat.number}
                </p>
                <p className="text-sm lg:text-base text-primary-800 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};