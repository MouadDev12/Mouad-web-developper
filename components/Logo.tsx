
import React from 'react';

interface LogoProps {
  className?: string;
  glow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", glow = true }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3E3E" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background hexagon shape */}
      <polygon 
        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
        fill="url(#darkGradient)"
        stroke="url(#redGradient)"
        strokeWidth="2"
      />

      {/* Inner geometric frame */}
      <polygon 
        points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" 
        fill="none"
        stroke="#FF3E3E"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Stylized M letter - modern geometric */}
      <g filter={glow ? "url(#glow)" : undefined}>
        {/* Left stroke of M */}
        <path 
          d="M28 70V35L40 50" 
          stroke="#FFFFFF" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Middle peak of M */}
        <path 
          d="M40 50L50 35L60 50" 
          stroke="url(#redGradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right stroke of M */}
        <path 
          d="M60 50L72 35V70" 
          stroke="#FFFFFF" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Accent dot */}
      <circle cx="50" cy="25" r="3" fill="#FF3E3E">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Corner accents */}
      <line x1="15" y1="30" x2="20" y2="35" stroke="#FF3E3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="85" y1="30" x2="80" y2="35" stroke="#FF3E3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="15" y1="70" x2="20" y2="65" stroke="#FF3E3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="85" y1="70" x2="80" y2="65" stroke="#FF3E3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
};

export default Logo;
