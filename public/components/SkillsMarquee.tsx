import React from 'react';
import { SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiPhp, SiLaravel, SiFigma, SiPython, SiGithub } from 'react-icons/si';

const TECHS = [
  { name: 'React', icon: SiReact, link:"https://react.dev"  },
  { name: 'JavaScript', icon: SiJavascript, link:"https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { name: 'Tailwind CSS', icon: SiTailwindcss, link:"https://tailwindcss.com" },
  { name: 'HTML', icon: SiHtml5, link:"https://developer.mozilla.org/fr/docs/Web/HTML" },
  { name: 'PHP', icon: SiPhp, link:"https://www.php.net" },
  { name: 'Laravel', icon: SiLaravel, link:"https://laravel.com" },
  { name: 'Figma', icon: SiFigma, link:"https://www.figma.com" },
  { name: 'Python', icon: SiPython, link:"https://www.python.org" },
  { name: 'Git&GitHub', icon: SiGithub, link:"https://github.com" },
];

const SkillsMarquee: React.FC = () => {
  return (
    <div className="w-full bg-prestige-dark border-y border-white/5 py-8 overflow-hidden relative group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-prestige-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-prestige-black to-transparent z-10"></div>
      
      <div className="animate-marquee hover:[animation-play-state:paused] flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {TECHS.map((tech, idx) => (
              <a 
                key={`${i}-${idx}`} 
                href={tech.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 px-12 group/item hover:opacity-80 transition-opacity cursor-pointer"
              >
                <tech.icon size={28} className="text-prestige-gray group-hover/item:text-prestige-red transition-colors" />
                <span className="text-4xl md:text-5xl font-sora font-extrabold text-white/20 group-hover/item:text-white transition-all tracking-tighter uppercase">
                  {tech.name}
                </span>
                <div className="w-2 h-2 rounded-full bg-prestige-red mx-4 opacity-50"></div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
