import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const PROJECTS: Project[] = [
  
  {
    id: '1',
    title: 'XREDUCATION Dashboard',
    category: 'Admin Dashboard / EdTech',
    image: '/images/XREDUCATION Dashboard.png',
    logo: '/images/XREDUCATION Dashboard.png',
    description:'Modern admin dashboard designed for educational institutions to monitor students, performance, and revenue.',
    longDescription:'XREDUCATION is a professional EdTech dashboard focused on clarity and efficiency. It provides real-time insights into student enrollment, financial performance, and academic metrics. Built with scalable architecture and interactive data visualizations, the platform ensures secure data handling and an intuitive user experience for administrators.',
    technologies: ['React', 'Chart.js', 'Tailwind', 'Firebase'],
    liveUrl: 'https://xreducation-dashboard.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/Xreducation-Dashboard'
  },
  {
    id: '2',
    title: 'Zest & Co.',
    category: 'E-commerce / Brand Website',
    image: '/images/Zest and co.png',
    logo: '/images/Zest and co.png',
    description:'Premium e-commerce website showcasing artisanal beverages with a smooth and engaging shopping experience.',
    longDescription:'Zest & Co. is a high-end e-commerce platform designed to elevate brand identity and maximize conversions. The website features refined animations, a clean product layout, and a frictionless checkout flow. Every interaction is crafted to feel premium while remaining fast, responsive, and accessible across all devices.',
    technologies: ['React', 'Framer Motion', 'Node.js', 'Stripe'],
    liveUrl: 'https://healthy-drink-shop.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/Healthy-Drink-Shop'
  },
  {
  id: '3',
  title: 'Gestion Stagiaire',
  category: 'Educational / Interactive Web Application',
  image: '/images/code-quiz.png',
  logo: '/images/codequiz-logo.png',
  description:
    'Interactive quiz application designed to help users test and improve their programming knowledge in a fun and engaging way.',
  longDescription:
    'CodeQuiz is an educational web application focused on interactive learning. It allows users to answer dynamic quiz questions with instant feedback, score tracking, and a responsive user interface. The project emphasizes usability, clean architecture, and an engaging learning experience, making it ideal for students and self-learners in web development.',
  technologies: ['React', 'Context API', 'JavaScript', 'CSS3', 'Responsive Design'],
  liveUrl: 'https://codequiz.vercel.app/',
  githubUrl: 'https://github.com/MouadDev12/CodeQuiz'
}
  {
    id: '4',
    title: 'Gestion Bibliothéque',
    category: 'Management System / Education',
    image: '/images/Gestion Bibliothéque.png',
    logo: '/images/Gestion Bibliothéque.png',
    description: 'Library management system for handling books, users, and borrowing operations efficiently.',
    longDescription:'Gestion Bibliothèque is a complete management system built to simplify library operations. It allows administrators to manage book inventories, track borrowings, and organize users through a clean and functional interface. The system is optimized for usability, performance, and scalability in educational environments.',
    technologies: ['Next.js', 'WebSockets', 'Prisma', 'Tailwind'],
    liveUrl: 'https://gestionlivres.vercel.app/',
    githubUrl: 'https://github.com/MouadDev12/gestionlivres'
  },
  {
    id: '5',
    title: 'Nike Store',
    category: 'E-commerce / Product Landing',
    image: '/images/Nike Store.png',
    logo: '/images/Nike Store.png',
    description:'Modern product-focused e-commerce experience inspired by Nike’s branding and visual identity.',
    longDescription: 'Nike Store is a sleek e-commerce interface designed to emphasize products through bold visuals and clean layouts. The project focuses on brand consistency, responsive design, and an optimized user journey from product discovery to checkout.',
    technologies: ['Next.js', 'WebSockets', 'Prisma', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'Coupe Afrique Can',
    category: 'Live Sports / Web Application',
    image: '/images/can afrique.png',
    logo: '/images/can afrique.png',
    description:'Real-time web application for following the Africa Cup of Nations with live scores, fixtures, and team standings.', 
    longDescription: 'This CAN web application provides real-time match updates, live scores, and tournament standings for football fans. Built with a performance-focused architecture, it leverages WebSockets for instant data updates and delivers a smooth, responsive experience across devices. The project emphasizes scalability, real-time interaction, and clean UI for an engaging sports-tracking experience.',   
    technologies: ['Next.js', 'WebSockets', 'Prisma', 'Tailwind'],
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