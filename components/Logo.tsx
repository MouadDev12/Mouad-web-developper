
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
        <linearGradient id="softGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F1F1F" />
          <stop offset="100%" stopColor="#4DA6FF" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4DA6FF" />
          <stop offset="100%" stopColor="#DCEEFF" />
        </linearGradient>
      </defs>

      {/* Stylized MM Glyphs */}
      <path 
        d="M15 75V25L35 55L55 25V75" 
        stroke="url(#softGradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M45 75V25L65 55L85 25V75" 
        stroke="url(#softGradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ opacity: 0.6 }}
      />

      {/* Orbital Arc */}
      <path 
        d="M10 65C10 80 40 90 70 85C95 80 100 60 85 40" 
        stroke="#4DA6FF" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      
      {/* Friendly Dot */}
      <circle cx="85" cy="40" r="3" fill="#4DA6FF">
        <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default Logo;
