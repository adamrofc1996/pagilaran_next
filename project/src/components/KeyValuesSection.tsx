import React from 'react';
import { Award, Users, Globe, Leaf, TrendingUp, Shield } from 'lucide-react';

const keyValues = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Pursuing the highest standards in everything we do, from tea cultivation to customer service.',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Supporting and empowering the communities where we operate through various development programs.',
    color: 'accent'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to environmental stewardship and sustainable practices for future generations.',
    color: 'success'
  },
  {
    icon: Leaf,
    title: 'Innovation',
    description: 'Embracing research-driven innovation and continuous improvement in all aspects of our operations.',
    color: 'primary'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Fostering sustainable growth that benefits all stakeholders and creates lasting value.',
    color: 'accent'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest ethical standards and transparency in all our business practices.',
    color: 'success'
  }
];

export const KeyValuesSection: React.FC = () => {
  return (
    <section className="key-values-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Core
            <span className="text-gradient-accent"> Values</span>
          </h2>
          <p className="section-description">
            The principles that guide our commitment to excellence and drive our mission 
            to deliver premium tea while creating positive impact for all stakeholders.
          </p>
        </div>

        {/* Values Grid */}
        <div className="section-grid">
          {keyValues.map((value, index) => (
            <div 
              key={index} 
              className="card key-values-card animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`key-values-icon icon-container-${value.color}`}>
                <value.icon size={32} />
              </div>
              <div className="card-content">
                <h3 className="section-subtitle">{value.title}</h3>
                <p className="section-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};