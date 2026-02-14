
import React, { useEffect, useState } from 'react';
import { X, Github, Rocket, Info, Code2, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectLoading from './ProjectLoading';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => { 
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <ProjectLoading projectLogo={project.logo || project.image} projectTitle={project.title} />;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-prestige-black/90 backdrop-blur-xl transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-prestige-black rounded-prestige overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300 border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white hover:bg-prestige-red hover:text-white rounded-full text-prestige-black transition-all shadow-xl group"
        >
          <X size={24} />
        </button>

        {/* Hero Media */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-prestige-dark overflow-hidden group relative shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prestige-red/20 to-transparent opacity-60"></div>
        </div>

        {/* Content Details - Added flex-1 and min-h-0 to ensure it scrolls correctly */}
        <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col bg-prestige-black blueprint-grid flex-1 min-h-0">
          <div className="mb-12">
            <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em] border border-prestige-red/30 px-4 py-1.5 rounded-full bg-prestige-red/5">
              {project.category}
            </span>
            <h2 className="font-sora text-4xl md:text-6xl font-extrabold text-white mt-8 leading-[1.1] tracking-tighter">
              {project.title}
            </h2>
          </div>

          <div className="space-y-12 flex-1">
            <section>
              <h4 className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-prestige-gray font-bold mb-6">
                <Info size={16} className="text-prestige-red" /> Executive Summary
              </h4>
              <p className="text-prestige-gray leading-relaxed text-lg md:text-xl font-medium">
                {project.longDescription || project.description}
              </p>
            </section>

            {project.technologies && (
              <section>
                <h4 className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-prestige-gray font-bold mb-6">
                  <Code2 size={16} className="text-prestige-red" /> Technical Foundation
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest hover:border-prestige-red/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6">
            <a 
              href={project.liveUrl} 
              className="group flex-1 py-5 rounded-full bg-white text-prestige-black font-extrabold flex items-center justify-center gap-3 hover:bg-prestige-red hover:text-white transition-all shadow-xl"
            >
              <Rocket size={20} /> Launch Interface
              <div className="w-8 h-8 rounded-full bg-prestige-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-prestige-black transition-all">
                <ArrowUpRight size={18} />
              </div>
            </a>
            <a 
              href={project.githubUrl} 
              className="flex-1 py-5 rounded-full bg-transparent text-white font-extrabold flex items-center justify-center gap-3 border border-white/20 hover:border-prestige-red hover:text-prestige-red transition-all"
            >
              <Github size={20} /> Explore Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
