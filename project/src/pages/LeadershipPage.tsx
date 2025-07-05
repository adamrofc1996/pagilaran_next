import React from 'react';
import { Users, Briefcase, BarChart, Award, Shield } from 'lucide-react';

const boardMembers = [
  {
    name: 'Prof. Ir. Adi Djoko Guritno, M.SIE., Ph.D.',
    position: 'Direktur Utama',
    background: 'CEO of PT Pagilaran, Professor in Agricultural Industrial Technology at UGM',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Academic Leadership', 'Strategic Planning', 'Supply Chain Risk Management', 'Agricultural Industrial Technology'],
    education: 'Agricultural Technology Universitas Gadjah Mada, Master of Industrial Engineering from Institut Teknologi Bandung, Ph.D in Agricultural Economics from Ehime University, Japan',
    experience: '25+ years in academic leadership, Chairman of the Department of Industrial Technology of Agriculture, Faculty of Agriculture, Gadjah Mada University'
  },
  {
    name: 'Taufan Alam, S.P., M.Sc.',
    position: 'Direktur Produksi',
    background: 'Lecturer at Universitas Gadjah Mada, Department of Agronomy',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Agronomy', 'Agroforestry', 'Yield Gap Analysis', 'Crop Simulation', 'Soil Fertility'],
    education: 'Undergraduate in Agronomy from Universitas Gadjah Mada, Master in Agronomy from Universitas Gadjah Mada',
    experience: 'Focus on agro-ecosystem models, sustainable agriculture, and various cropping systems'
  },
  {
    name: 'Prof. Dr. Didi Achjari, S.E., M.Com., Ak., C.A.',
    position: 'Komisaris Independen',
    background: 'Dean of the Faculty of Economics and Business (FEB) UGM',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    expertise: ['Accounting Information Systems', 'Electronic Commerce', 'Electronic Government', 'Information Technology Adoption/Diffusion', 'Roles of IT/IS in Business Strategy'],
    education: 'Undergraduate in Accounting/Economics from Universitas Gadjah Mada, Master of Commerce from University of New South Wales, Doctor of Business Administration from Curtin University of Technology',
    experience: 'Associate Dean of Administration Affairs, Consultant for Integrated Academic Information System Development, Coordinator of e-Business Concentration, Director of Information System at FEB UGM'
  }
];

const governance = [
  {
    icon: Briefcase,
    title: 'Corporate Structure',
    description: 'Transparent governance structure with clear accountability, oversight mechanisms, and defined roles and responsibilities.',
    details: ['Board of Directors oversight', 'Executive management structure', 'Clear reporting lines', 'Regular board meetings']
  },
  {
    icon: BarChart,
    title: 'Academic Oversight',
    description: 'UGM provides academic guidance, research direction, and ensures evidence-based decision making across all operations.',
    details: ['University Senate oversight', 'Academic advisory board', 'Research integration', 'Knowledge transfer programs']
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description: 'Regular engagement with all stakeholders including employees, communities, partners, and regulatory bodies.',
    details: ['Community consultation', 'Employee representation', 'Partner feedback systems', 'Regulatory compliance']
  },
  {
    icon: Shield,
    title: 'Ethical Standards',
    description: 'Commitment to highest ethical standards in all business operations, practices, and stakeholder relationships.',
    details: ['Code of conduct', 'Anti-corruption policies', 'Fair trade practices', 'Environmental responsibility']
  }
];



export const LeadershipPage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative section-padding mb-16 bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url('/images/pabrik-pagilaran.jpg')` }}>
        <div className="absolute inset-0 bg-primary-900 opacity-80" />
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
        
        <div className="relative container-grid text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-3d">
            <Users className="w-5 h-5 text-accent-300" />
            <span className="text-white font-inter font-medium">Executive Leadership</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leadership &
            <span className="text-gradient-animated ml-3">
              Governance
            </span>
          </h1>
          
          <p className="font-inter text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Our leadership combines academic excellence with industry expertise, ensuring strategic vision, 
            operational excellence, and sustainable growth in every aspect of our tea business.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="absolute inset-0 bg-tea-pattern opacity-5" />
        <div className="relative container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Board of
              <span className="text-gradient-animated ml-3">Directors</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Distinguished leaders bringing together academic excellence and industry expertise to guide our strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50">
                  <div className="flex items-start space-x-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="font-inter font-semibold text-accent-600 mb-2">
                        {member.position}
                      </p>
                      <p className="font-inter text-primary-600 mb-4">
                        {member.background}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-inter font-semibold text-primary-800 text-sm mb-1">Education</h4>
                          <p className="font-inter text-primary-600 text-sm">{member.education}</p>
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-primary-800 text-sm mb-1">Experience</h4>
                          <p className="font-inter text-primary-600 text-sm">{member.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-primary-800 text-sm mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-inter"
                              >
                                {skill}
                              </span>
                            ))}
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
      </section>

      {/* UGM Governance Structure */}
      <section className="section-padding bg-cover bg-center text-white relative overflow-hidden"
        style={{ backgroundImage: `url('/images/pabrik-pagilaran.jpg')` }}>
        <div className="absolute inset-0 bg-primary-900 opacity-80" />
        <div className="relative container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
                UGM Oversight
                <span className="text-gradient-animated ml-3 block">
                  Structure
                </span>
              </h2>
              <p className="font-inter text-lg leading-relaxed mb-8 text-primary-100">
                As a subsidiary of Universitas Gadjah Mada, PT Pagilaran operates under 
                rigorous academic oversight, ensuring transparency, accountability, and 
                adherence to the highest standards of corporate governance and academic excellence.
              </p>
              <div className="space-y-4">
                {[
                  'University Senate Oversight',
                  'Academic Advisory Board',
                  'Research Integration Committee',
                  'Ethics and Compliance Board'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                    <span className="font-inter text-primary-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl transform rotate-3" />
              <img
                src="https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="UGM Campus"
                className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="section-padding bg-gradient-soft relative">
        <div className="container-grid">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
              Governance
              <span className="text-gradient-animated ml-3">Principles</span>
            </h2>
            <p className="font-inter text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence extends beyond tea production to every aspect of our operations and governance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {governance.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-3d hover:shadow-tea transition-all duration-500 hover:scale-105 border border-primary-100/50 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-3">
                        {principle.title}
                      </h3>
                      <p className="font-inter text-primary-600 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                      <div className="space-y-2">
                        {principle.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                            <span className="font-inter text-sm text-primary-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};