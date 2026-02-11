import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'XREDUCATION',
    category: 'Fintech / Admin',
    image: 'https://images.unsplash.com/photo-1551288049-bbda023b88d6?auto=format&fit=crop&q=80&w=800',
    description: 'A clean management dashboard for academic institutions, tracking student metrics and revenue.',
    longDescription: 'XREDUCATION provides a high-level overview of academic performance. Designed with a focus on usability, it features real-time data visualization using Chart.js and a robust Firebase backend for secure data management.',
    technologies: ['React', 'Chart.js', 'Tailwind', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Zest & Co.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    description: 'An interactive showcase for premium artisanal beverages with fluid shopping experience.',
    longDescription: 'Zest & Co. uses Framer Motion for delightful micro-interactions. The site is optimized for conversion, featuring a seamless checkout flow and a fully responsive grid that looks beautiful on any device.',
    technologies: ['React', 'Framer Motion', 'Node.js', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'CAN 2025 Maroc',
    category: 'Live Sports',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
    description: 'A sports companion app for tracking the 2025 Africa Cup of Nations with live scores.',
    longDescription: 'Stay updated with every goal. This application handles high-concurrency real-time data via WebSockets, providing fans with instant notifications and detailed team analytics throughout the tournament.',
    technologies: ['Next.js', 'WebSockets', 'Prisma', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em]">Selected Works</span>
          <h2 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
            CREATIVE <br /> <span className="text-prestige-gray">SHOWCASE</span>
          </h2>
        </div>
        <div className="max-w-xs text-right">
          <p className="text-prestige-gray text-sm leading-relaxed">
            I combine technical excellence with artistic vision to create impactful digital experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer glass-panel rounded-prestige overflow-hidden transition-all duration-500 red-glow-hover"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-prestige-dark">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
              />
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-prestige-red group-hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <span className="text-[10px] font-bold text-prestige-red uppercase tracking-widest mb-3 block">
                {project.category}
              </span>
              <h3 className="font-sora text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-prestige-gray text-xs leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies?.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[9px] font-bold text-prestige-gray uppercase tracking-tighter border border-white/5 px-2 py-1 rounded bg-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;