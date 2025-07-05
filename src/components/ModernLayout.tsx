import React from 'react';
import { ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react';

export const ModernLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Modern Hero Section */}
      <section className="section-modern">
        <div className="container-grid relative z-10">
          <div className="text-center space-content">
            <div className="inline-flex items-center space-x-2 backdrop-glass rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-accent-500" />
              <span className="text-neutral-700 font-medium">Modern Design System</span>
            </div>
            
            <h1 className="heading-modern mb-6">
              Beautiful, Clean &
              <span className="text-gradient-primary block">Responsive Design</span>
            </h1>
            
            <p className="text-modern mx-auto mb-12">
              Experience the perfect blend of modern aesthetics and functional design. 
              Our layout system provides clean, responsive components that adapt beautifully 
              to any screen size while maintaining exceptional performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-glass">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-grid">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Modern
              <span className="text-gradient-accent"> Features</span>
            </h2>
            <p className="text-responsive-lg text-neutral-600 content-medium mx-auto">
              Discover the powerful features that make our design system exceptional
            </p>
          </div>

          <div className="grid-modern">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance with modern CSS techniques and efficient animations.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Shield,
                title: 'Accessible Design',
                description: 'Built with accessibility in mind, ensuring everyone can use your interface.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Globe,
                title: 'Responsive Layout',
                description: 'Perfectly adapts to any screen size from mobile to desktop and beyond.',
                color: 'from-blue-500 to-indigo-500'
              }
            ].map((feature, index) => (
              <div key={index} className="card-modern hover-lift group">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tea-pattern opacity-10" />
        <div className="container-grid relative z-10">
          <div className="text-center space-content">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Build Something
              <span className="text-gradient-animated block">Amazing?</span>
            </h2>
            <p className="text-xl text-primary-100 content-medium mx-auto mb-8">
              Join thousands of developers who are already using our modern design system 
              to create beautiful, responsive websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Start Building
              </button>
              <button className="btn-outline bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};