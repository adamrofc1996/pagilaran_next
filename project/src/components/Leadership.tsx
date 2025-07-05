import React from 'react';
import { Users, Award, Building, GraduationCap } from 'lucide-react';

const boardMembers = [
  {
    name: 'Prof. Dr. Panut Mulyono',
    position: 'Chairman of the Board',
    background: 'Rector of Universitas Gadjah Mada',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Academic Leadership', 'Strategic Planning', 'Higher Education']
  },
  {
    name: 'Dr. Siti Nurjanah',
    position: 'Managing Director',
    background: '25+ years in agribusiness',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Tea Industry', 'Export Management', 'Operations']
  },
  {
    name: 'Prof. Dr. Bambang Hendarto',
    position: 'Director of Research',
    background: 'Faculty of Agriculture, UGM',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Agricultural Science', 'Sustainable Farming', 'Innovation']
  },
  {
    name: 'Ir. Ahmad Wijaya',
    position: 'Director of Operations',
    background: 'Former VP at Unilever Indonesia',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Supply Chain', 'Quality Management', 'International Trade']
  }
];

const governance = [
  {
    icon: Building,
    title: 'Corporate Structure',
    description: 'Transparent governance structure with clear accountability and oversight mechanisms.'
  },
  {
    icon: GraduationCap,
    title: 'Academic Oversight',
    description: 'UGM provides academic guidance and ensures research-driven decision making.'
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description: 'Regular engagement with all stakeholders including employees, communities, and partners.'
  },
  {
    icon: Award,
    title: 'Ethical Standards',
    description: 'Commitment to highest ethical standards in all business operations and practices.'
  }
];

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
            Leadership &
            <span className="text-accent-500"> Governance</span>
          </h2>
          <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership combines academic excellence with industry expertise, 
            ensuring strategic vision and operational excellence in every aspect of our business.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Board of Directors
            </h3>
            <p className="font-inter text-primary-600">
              Distinguished leaders bringing together academic excellence and industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h4 className="font-playfair text-xl font-bold text-primary-800 mb-2">
                  {member.name}
                </h4>
                <p className="font-inter font-semibold text-accent-600 mb-2">
                  {member.position}
                </p>
                <p className="font-inter text-sm text-primary-600 mb-4">
                  {member.background}
                </p>
                
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UGM Governance Structure */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 mb-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
                UGM Oversight Structure
              </h3>
              <p className="font-inter text-lg leading-relaxed mb-8 text-primary-100">
                As a subsidiary of Universitas Gadjah Mada, PT Pagilaran operates under 
                rigorous academic oversight, ensuring transparency, accountability, and 
                adherence to the highest standards of corporate governance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-300 rounded-full" />
                  <span className="font-inter text-primary-200">University Senate Oversight</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-300 rounded-full" />
                  <span className="font-inter text-primary-200">Academic Advisory Board</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-300 rounded-full" />
                  <span className="font-inter text-primary-200">Research Integration Committee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-300 rounded-full" />
                  <span className="font-inter text-primary-200">Ethics and Compliance Board</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="UGM Campus"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Governance Principles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Governance Principles
            </h3>
            <p className="font-inter text-primary-600">
              Our commitment to excellence extends beyond tea production to every aspect of our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governance.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <principle.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-2xl font-bold text-primary-800 mb-3">
                      {principle.title}
                    </h4>
                    <p className="font-inter text-primary-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-3xl font-bold text-primary-800 mb-6">Our Vision</h3>
            <p className="font-inter text-lg text-primary-600 leading-relaxed">
              To be the world's leading premium tea exporter from Indonesia, recognized for 
              exceptional quality, sustainable practices, and academic excellence in every cup we deliver.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-3xl font-bold text-primary-800 mb-6">Our Mission</h3>
            <p className="font-inter text-lg text-primary-600 leading-relaxed">
              To cultivate and export the finest Indonesian tea while advancing sustainable agriculture, 
              supporting local communities, and leveraging academic research to drive innovation in the tea industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};