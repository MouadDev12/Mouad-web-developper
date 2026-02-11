import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing Core Protocols...",
    "Calibrating Crimson Matrix...",
    "Loading Visual Assets...",
    "Establishing Prestige Connection...",
    "Mouad.M Online"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);

    const statusInterval = setInterval(() => {
      setStatusIndex(prev => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-prestige-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prestige-red/10 rounded-full blur-[150px] animate-pulse"></div>
      
      <div className="relative mb-12">
        {/* Orbits */}
        <div className="w-32 h-32 rounded-full border-2 border-white/5 border-t-prestige-red animate-spin shadow-[0_0_40px_rgba(255,62,62,0.2)]"></div>
        <div className="absolute inset-2 rounded-full border border-white/10 border-b-white/30 animate-[spin_3s_linear_infinite_reverse]"></div>
        
        {/* Central Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-sora font-extrabold text-3xl text-white animate-pulse">M</div>
        </div>
      </div>

      <div className="text-center relative z-10 w-full max-w-xs px-6">
        <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-prestige-gray mb-3 opacity-60">
          SYSTEM PRESTIGE v5.0.4
        </div>
        
        <div className="h-6 overflow-hidden">
          <div className="font-sora text-white text-sm font-bold tracking-widest transition-all duration-300 uppercase">
            {statuses[statusIndex]}
          </div>
        </div>

        <div className="mt-8 w-full h-[1px] bg-white/5 rounded-full relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-prestige-red transition-all duration-300 ease-out shadow-[0_0_15px_#FF3E3E]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-4 font-mono text-[10px] text-prestige-gray tracking-widest font-bold">
          {progress}% STABILITY LOADED
        </div>
      </div>

      {/* Blueprint Grid Elements for Loading */}
      <div className="absolute top-0 bottom-0 left-1/4 border-l border-white/[0.02]"></div>
      <div className="absolute top-0 bottom-0 right-1/4 border-l border-white/[0.02]"></div>
      <div className="absolute left-0 right-0 top-1/2 border-t border-white/[0.02]"></div>
    </div>
  );
};

export default LoadingScreen;