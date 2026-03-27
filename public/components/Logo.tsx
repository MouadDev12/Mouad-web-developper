
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
        <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="logoDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1C1C1C" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="logoShineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#DC2626" floodOpacity="0.3"/>
        </filter>
        <clipPath id="hexClip">
          <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" />
        </clipPath>
      </defs>

      {/* Outer hexagon - border with shadow */}
      <g filter={glow ? "url(#logoShadow)" : undefined}>
        <polygon 
          points="50,3 93,27 93,73 50,97 7,73 7,27" 
          fill="url(#logoDarkGrad)"
          stroke="url(#logoRedGrad)"
          strokeWidth="1.8"
        />
      </g>

      {/* Subtle shine overlay */}
      <polygon 
        points="50,3 93,27 93,73 50,97 7,73 7,27" 
        fill="url(#logoShineGrad)"
      />

      {/* Inner hexagon outline */}
      <polygon 
        points="50,14 82,32 82,68 50,86 18,68 18,32" 
        fill="none"
        stroke="#FF4444"
        strokeWidth="0.4"
        opacity="0.2"
      />

      {/* Stylized M - premium geometric lettermark */}
      <g filter={glow ? "url(#logoGlow)" : undefined}>
        {/* Left vertical of M */}
        <path 
          d="M27 72L27 36" 
          stroke="#FFFFFF" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        {/* Left diagonal of M */}
        <path 
          d="M27 36L50 56" 
          stroke="#FFFFFF" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Right diagonal of M */}
        <path 
          d="M50 56L73 36" 
          stroke="#FFFFFF" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Right vertical of M */}
        <path 
          d="M73 36L73 72" 
          stroke="#FFFFFF" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        {/* Red accent - center diamond peak */}
        <path 
          d="M42 46L50 56L58 46" 
          stroke="url(#logoRedGrad)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Top red accent bar */}
      <line x1="40" y1="24" x2="60" y2="24" stroke="url(#logoRedGrad)" strokeWidth="2" strokeLinecap="round" />

      {/* Bottom red accent bar */}
      <line x1="40" y1="82" x2="60" y2="82" stroke="url(#logoRedGrad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

      {/* Corner detail marks */}
      <circle cx="50" cy="24" r="1.5" fill="#FF4444" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default Logo;
