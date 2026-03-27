import React from 'react';
import { EducationItem } from '../types';
import { MapPin, GraduationCap } from 'lucide-react';

const EDUCATION_DATA: EducationItem[] = [
  {
    id: '1',
    degree: 'Full-Stack Web Development',
    institution: 'ISTA Ait Melloul',
    period: '2024 — Present',
    description: 'Specializing in React, Node.js, and modern cloud architectures. Focused on building scalable and user-friendly web applications.'
  },
  {
    id: '2',
    degree: 'Architectural Drafting',
    institution: 'ISTA Inzegane',
    period: '2022 — 2024',
    description: 'Expertise in 2D/3D modeling and technical design. Transitioned spatial design principles into digital user interfaces.'
  },
  {
    id: '3',
    degree: 'Technical Surveying',
    institution: 'ISTA Tassila',
    period: '2021 — 2022',
    description: 'In-depth study of surveying and mapping using AutoCAD. Developed strong analytical and precision skills.'
  },
  
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24 text-center space-y-4">
        <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em]">Knowledge Base</span>
        <h2 className="font-sora text-4xl md:text-7xl font-extrabold text-white tracking-tighter">
          Academic <span className="text-prestige-gray">Evolution</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {EDUCATION_DATA.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col glass-panel rounded-prestige p-10 hover:bg-white/5 transition-all duration-500 red-glow-hover group relative overflow-hidden"
          >
            {/* Background Number */}
            <div className="absolute top-4 right-8 text-7xl font-bold text-white/[0.03] group-hover:text-prestige-red/[0.05] transition-colors">
              0{item.id}
            </div>

            {/* Icon Bubble */}
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-prestige-gray mb-10 group-hover:text-prestige-red group-hover:border-prestige-red/30 group-hover:scale-110 transition-all">
              <GraduationCap size={32} />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-[10px] font-bold text-prestige-red uppercase tracking-[0.2em]">{item.period}</span>
                <h3 className="text-2xl font-bold text-white mt-2 leading-tight font-sora">{item.degree}</h3>
              </div>
              
              <div className="flex items-center gap-2 text-prestige-gray font-medium">
                <MapPin size={18} className="text-prestige-red" />
                <span className="text-sm tracking-wide">{item.institution}</span>
              </div>
              
              <p className="text-prestige-gray leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;