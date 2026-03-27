
import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Shield, Zap } from 'lucide-react';
import Logo from './Logo';

const PROMPT_TEXT = `[SYSTEM LOG]: INITIALIZING MM.STUDIOS CORE PROTOCOLS...
[IDENTITY]: PRESET LOADS: "MM.STUDIOS"
[STATUS]: OPTIMIZED FOR HIGH-PERFORMANCE VISUALS

--- DESIGN SPECIFICATIONS V3.0 ---

OVERALL STYLE
- Futuristic Dark UI Personal Portfolio
- Neon Glow Aesthetic (Cyber-Holographic)
- Metallic Chrome Accents (Silver & Gold)
- Clean, Minimalist yet Visually Striking
- High-Tech Designer Identity
- Premium Startup / AI Product Vibe
- Ultra-Smooth Motion Curves

COLOR SYSTEM
- Primary Background: Deep Dark Navy Gradient (#060B14 → #0B1220)
- Panels: Glassmorphism Blur (0.7 Opacity, #0E1628)
- Neon Accents: 
  - Primary: Electric Blue (#3FA9FF)
  - Secondary: Quantum Purple (#7B61FF)
  - Legacy: Solar Gold (#FFD700) for Branding
- Text Hierarchy:
  - Active: Soft White (#EAF2FF)
  - Muted: Blue-Gray (#8FA3BF)
  - Micro: Steel Gray (#6B7C93)

TYPOGRAPHY MATRIX
- Headings: Sora / Poppins (SemiBold)
- Body: Inter (Medium)
- UI Labels: Inter Light (0.1em Tracking)

ENGINE PARAMETERS
- Layout: 12-Column Balanced Grid
- Corners: 20px - 24px Precision Radius
- Lighting: Ambient Radial Glows (120px Blur)
- Effects: Bloom, Glass Blur, Neon Outer Shadows

[INFO]: ALL SYSTEMS OPERATIONAL.
[LOG]: READY FOR DEPLOYMENT.
`;

const DesignPrompt: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < PROMPT_TEXT.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + PROMPT_TEXT.charAt(index));
        setIndex((prev) => prev + 1);
      }, 3);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section id="specs" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
           System <span className="text-[#3FA9FF]">Diagnostics</span>
        </h2>
        <p className="text-[#6B7C93] text-sm uppercase tracking-widest font-mono">Real-time interface parameters</p>
      </div>

      <div className="glass-card rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[#3FA9FF]/20">
        {/* Terminal Header */}
        <div className="bg-[#060B14] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.4)]"></div>
          </div>
          <div className="flex items-center gap-3 text-[#6B7C93] text-[10px] font-mono uppercase tracking-[0.2em]">
            <Terminal size={14} className="text-[#3FA9FF]" /> MM_STUDIOS_CORE.LOG
          </div>
          <div className="flex gap-4">
             <Cpu size={14} className="text-[#6B7C93]" />
             <Shield size={14} className="text-[#6B7C93]" />
             <Zap size={14} className="text-[#3FA9FF]" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 md:p-12 font-mono text-sm leading-relaxed text-[#3FA9FF]/80 relative group">
          {/* Subtle Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%] opacity-30"></div>
          
          <pre className="whitespace-pre-wrap relative z-20 min-h-[400px]">
            {displayedText}
            <span className="w-2 h-5 bg-[#3FA9FF] inline-block animate-pulse ml-1 align-middle shadow-[0_0_8px_#3FA9FF]"></span>
          </pre>

          {/* Background Branding Watermark SVG */}
          <div className="absolute bottom-6 right-8 opacity-[0.03] w-32 h-32 select-none pointer-events-none grayscale">
            <Logo glow={false} />
          </div>
        </div>
        
        {/* Terminal Footer Status Bar */}
        <div className="bg-[#060B14]/50 px-6 py-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-[#6B7C93]">
          <div>LOC: DISTRICT_7 // NEO_TOKYO</div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> ENCRYPTED</span>
            <span>Uptime: 99.99%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPrompt;
