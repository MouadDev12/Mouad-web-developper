import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import ProjectModal from './ProjectModal';

const PROJECTS: Project[] = [
  
  {
    id: '1',
    title: 'XREDUCATION Dashboard',
    category: 'Admin Dashboard / EdTech',
    image: 'IMAGES/Xreducation Dashboard.png',
    logo: 'IMAGES/Xreducation Dashboard.png',
    description:'Modern admin dashboard designed for educational institutions to monitor students, performance, and revenue.',
    longDescription:'XREDUCATION is a professional EdTech dashboard focused on clarity and efficiency. It provides real-time insights into student enrollment, financial performance, and academic metrics. Built with scalable architecture and interactive data visualizations, platform ensures secure data handling and an intuitive user experience for administrators.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js','Animations Fluides', 'Export de données','Thème Sombre/Clair','Responsive Design' ],
    liveUrl: 'https://xreducation-dashboard.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/Xreducation-Dashboard'
  },
  {
    id: '2',
    title: 'Zest & Co.',
    category: 'E-commerce / Brand Website',
    image: 'IMAGES/Zest and co.png',
    logo: 'IMAGES/Zest and co.png',
    description:'Premium e-commerce website showcasing artisanal beverages with a smooth and engaging shopping experience.',
    longDescription:'Zest & Co. is a high-end e-commerce platform designed to elevate brand identity and maximize conversions. The website features refined animations, a clean product layout, and a frictionless checkout flow. Every interaction is crafted to feel premium while remaining fast, responsive, and accessible across all devices.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animations et transitions', 'Font Awesome ', 'Google Fonts' ,'Responsive Design'],
    liveUrl: 'https://healthy-drink-shop.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/Healthy-Drink-Shop'
  },
   {
    id: '3',
    title: 'Système de gestion des stagiaires',
    category: 'Management System / Education & HR',
    image: 'IMAGES/gestion_stagiaire.png',
    logo: 'IMAGES/Gestion Bibliothéque.png',
    description: 'A professional trainee management system designed to efficiently organize, track, and manage interns within educational or corporate environments.',
    longDescription:'The Trainee Management System is a complete web application built to streamline management of interns in educational institutions and organizations. It allows administrators to add, edit, and monitor trainee profiles, filter data by department or status, and export information in structured formats. The interface focuses on clarity, usability, and responsiveness, ensuring a smooth experience across desktop and mobile devices. This project demonstrates practical management workflows, clean UI design, and real-world application structure.',
    technologies: ['React', 'React Router DOM', 'React Hook Form', 'Redux Toolkit ', 'ESLint', 'Tailwind'],
    liveUrl: 'https://gestionstagiaire.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/gestion_stagiaire'
  },
  {
    id: '4',
    title: 'Gestion Bibliothéque',
    category: 'Management System / Education',
    image: 'IMAGES/Gestion Bibliothéque.png',
    logo: 'IMAGES/Gestion Bibliothéque.png',
    description: 'Library management system for handling books, users, and borrowing operations efficiently.',
    longDescription:'Gestion Bibliothèque is a complete management system built to simplify library operations. It allows administrators to manage book inventories, track borrowings, and organize users through a clean and functional interface. The system is optimized for usability, performance, and scalability in educational environments.',
    technologies: ['React.js', 'Redux Toolkit', 'Vite', 'CSS3','LocalStorage','ESLint ', 'Responsive Design'],
    liveUrl: 'https://gestionlivres.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/gestionlivres'
  },
  {
    id: '5',
    title: 'NeoTech Shop',
    category: 'E-commerce / Electronics Platform',
    image: 'IMAGES/my_shop.png',
    logo: 'IMAGES/my_shop.png',
    description:'A modern e-commerce platform focused on showcasing electronic products with a clean, intuitive, and conversion-oriented design.',
    longDescription:'NeoTech Shop is a sleek e-commerce platform designed to highlight electronic products through bold visuals and intuitive layouts. The project emphasizes brand identity, responsive design, and a smooth user journey from product discovery to checkout.',
    technologies: ['Modern UI/UX', 'Dark Mode', 'React.js','TailwindCSS3','Framer Motion', ' React Icons', 'React Roter DOM', 'Context API', 'Responsive Design'],
    liveUrl: 'https://myshop-react-nu.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/myshop-react'
  },
  {
    id: '6',
    title: 'Coupe Afrique Can',
    category: 'Live Sports / Web Application',
    image: 'IMAGES/can afrique.png',
    logo: 'IMAGES/can afrique.png',
    description:'Real-time web application for following Africa Cup of Nations with live scores, fixtures, and team standings.', 
    longDescription: 'This CAN web application provides real-time match updates, live scores, and tournament standings for football fans. Built with a performance-focused architecture, it leverages WebSockets for instant data updates and delivers a smooth, responsive experience across devices. The project emphasizes scalability, real-time interaction, and clean UI for an engaging sports-tracking experience.',   
    technologies: ['React', 'Redux Toolkit', 'React Router DOM', 'CSS3', 'Node.js' , 'Express.js'  ,'Design responsive']
    liveUrl: 'https://coupe-afrique-can-2025.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/coupe_afrique-can-2025'
  },
  
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-prestige-red font-bold text-[10px] uppercase tracking-[0.4em]">Selected Works</span>
          <h2 className="font-sora text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
            FEATURED <br /> <span className="text-prestige-gray">PROJECTS</span>
          </h2>   
        </div>
        <div className="max-w-xs text-right">
          <p className="text-prestige-gray text-sm leading-relaxed">
             Full-Stack Developer passionate about building modern web apps that blend performance, design, and user experience.
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
