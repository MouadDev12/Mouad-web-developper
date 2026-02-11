import React from 'react';
import { Cpu, Palette, Globe, Megaphone } from 'lucide-react';

const SKILLS = [
  { 
    name: 'UI/UX DESIGN', 
    category: 'Creative', 
    icon: Palette, 
    level: 95, 
    description: 'Specializing in high-fidelity prototypes and prestige digital interfaces.'
  },
  { 
    name: 'REACT / NEXT.JS', 
    category: 'Frontend', 
    icon: Cpu, 
    level: 90, 
    description: 'Expertise in building scalable, performance-driven web applications.'
  },
  { 
    name: 'NODE / DATABASE', 
    category: 'Backend', 
    icon: Globe, 
    level: 85, 
    description: 'Robust server-side logic and database architecture for complex systems.'
  },
  { 
    name: 'BRANDING', 
    category: 'Marketing', 
    icon: Megaphone, 
    level: 80, 
    description: 'Crafting unique visual identities that resonate with premium audiences.'
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 border-y border-white/5 bg-prestige-dark/30 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-0 text-[15rem] font-bold text-white/5 select-none pointer-events-none -translate-x-1/2">
        STORY
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em]">Tech Stack & Mastery</span>
            <h2 className="font-sora text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Behind every design is <br /> 
              <span className="text-prestige-gray">an even greater story.</span>
            </h2>
          </div>
          
          <p className="text-prestige-gray leading-relaxed max-w-md text-lg">
            Every pixel I place has a purpose. For truly impactful visuals, I follow a narrative that guides the creative process, ensuring the final product resonates with precision and prestige.
          </p>

          <div className="flex flex-wrap gap-12 pt-8">
            <div className="group">
              <p className="text-5xl font-sora font-extrabold text-white group-hover:text-prestige-red transition-colors">4+</p>
              <p className="text-[10px] text-prestige-gray uppercase tracking-widest mt-2">Years Experience</p>
            </div>
            <div className="group">
              <p className="text-5xl font-sora font-extrabold text-white group-hover:text-prestige-red transition-colors">50+</p>
              <p className="text-[10px] text-prestige-gray uppercase tracking-widest mt-2">Projects Completed</p>
            </div>
            <div className="group">
              <p className="text-5xl font-sora font-extrabold text-white group-hover:text-prestige-red transition-colors">12</p>
              <p className="text-[10px] text-prestige-gray uppercase tracking-widest mt-2">Tech Certifications</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="glass-panel p-8 rounded-prestige red-glow-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-prestige-gray group-hover:text-prestige-red group-hover:bg-prestige-red/10 transition-all mb-6">
                <skill.icon size={24} />
              </div>
              <h3 className="text-white font-sora font-bold text-lg mb-2">{skill.name}</h3>
              <p className="text-prestige-gray text-xs leading-relaxed mb-6">
                {skill.description}
              </p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-prestige-gray">Mastery</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-prestige-red shadow-[0_0_10px_rgba(255,62,62,0.5)] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;