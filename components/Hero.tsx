import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onExploreClick: () => void;
  onResumeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick, onResumeClick }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Africa/Casablanca'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      
      {/* Header Info (Matching Top of Ref Image) */}
      <div className="absolute top-8 left-12 flex items-center gap-3">
        <div className="w-10 h-10">
          <Logo className="w-full h-full" glow={true} />
        </div>
        <span className="font-sora font-bold text-lg tracking-tight">Mouad</span>
      </div>

      <div className="absolute top-8 right-12 text-right hidden md:block">
        <p className="text-[10px] text-prestige-gray uppercase tracking-widest">AGADIR, AITMELLOUL, MOROCCO</p>
        <p className="text-[12px] font-mono text-white mt-1">{currentTime}</p>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="w-2 h-2 rounded-full bg-prestige-red animate-pulse"></div>
        <span className="text-[10px] text-prestige-gray uppercase tracking-widest font-bold">Available for <span className="text-white">New Projects</span></span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Portrait with Red Glow */}
        <div className="relative group mb-8">
          {/* Crimson Halo */}
          <div className="absolute -inset-10 bg-prestige-red/20 blur-[80px] rounded-full group-hover:bg-prestige-red/30 transition-all duration-700"></div>
          
          <div className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img 
              src="/IMAGES/mouad.png" 
              alt="Mouad Mekrech" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Red Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-prestige-red/40 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Signature Overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <h1 className="font-signature text-7xl md:text-9xl text-white whitespace-nowrap text-glow-red drop-shadow-2xl select-none">
              Mouad
            </h1>
          </div>
        </div>

        {/* Bio Description */}
        <div className="mt-12 space-y-6">
          <p className="font-sora text-sm md:text-base text-prestige-gray uppercase tracking-[0.2em]">
            Hi, I'm <span className="text-white">Mouad Mekrech</span>.
            <br />
            Developper <span className="text-white">Web </span> Full <span className="text-white">Stack</span>.
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            {[{Icon : Github , link : "https://github.com/MouadDev12"}, {Icon : Linkedin , link : "https://www.linkedin.com/in/mouad-mekrech-5b1057330/"}, {Icon : Instagram , link : "https://www.instagram.com/itzme.mouad/"}].map(({Icon , link}, idx) => (
              <a key={idx} href={link} target="_Blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-prestige-gray hover:text-prestige-red hover:border-prestige-red transition-all">

                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onExploreClick}
              className="group flex items-center gap-4 px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all"
            >
              <span className="font-sora font-bold text-sm uppercase tracking-widest">Start a Project</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight size={18} />
              </div>
            </button>
            <button 
              onClick={onResumeClick}
              className="px-8 py-3 rounded-full border border-white/10 text-prestige-gray hover:text-white transition-all text-sm uppercase tracking-widest font-bold"
            >
              Resume CV
            </button>
          </div>
        </div>
      </div>

      {/* Grid Intersections Points (Aesthetic) */}
      <div className="absolute top-0 bottom-0 left-1/4 border-l border-white/5"></div>
      <div className="absolute top-0 bottom-0 right-1/4 border-l border-white/5"></div>
      <div className="absolute left-0 right-0 top-1/2 border-t border-white/5"></div>

    </section>
  );
};

export default Hero;