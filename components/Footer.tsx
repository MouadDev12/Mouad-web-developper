import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, ArrowUp, ExternalLink, Heart, Code, Sparkles } from 'lucide-react';
import { Section } from '../types';

interface FooterProps {
  onSectionChange: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' }
  ];

  const quickLinks = ['Home', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <footer className="relative bg-gradient-to-b from-prestige-dark to-black border-t border-white/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-prestige-red rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 bg-gradient-to-br from-prestige-red to-red-600 rotate-45 flex items-center justify-center shadow-lg group-hover:shadow-prestige-red/50 transition-all duration-300">
                <div className="w-7 h-7 bg-prestige-black -rotate-45 shadow-inner"></div>
              </div>
              <div className="ml-4">
                <span className="font-sora text-2xl font-bold tracking-tight text-white block">
                  MOUAD<span className="text-prestige-red">.</span>M
                </span>
                <p className="text-[10px] font-medium text-prestige-gray uppercase tracking-widest mt-1">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-prestige-gray text-sm leading-relaxed mt-6">
              Crafting premium digital experiences with precision and passion. Specialized in building exceptional web applications that drive results.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredSocial(social.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`relative w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-prestige-gray transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg ${social.color} ${hoveredSocial === social.label ? 'scale-110 -translate-y-1' : ''}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Sparkles size={16} className="text-prestige-red" />
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onSectionChange(link.toLowerCase() as Section)}
                    className="text-prestige-gray hover:text-white font-medium text-sm flex items-center gap-3 group transition-all duration-300"
                  >
                    <ChevronRight size={16} className="text-prestige-red opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Mail size={16} className="text-prestige-red" />
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</h4>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-prestige-red/10 flex items-center justify-center group-hover:bg-prestige-red transition-all duration-300">
                  <Mail size={18} className="text-prestige-red group-hover:text-white transition-colors" />
                </div>
                <div className="text-prestige-gray group-hover:text-white font-medium text-sm transition-all break-all pt-1">
                  mouadmekrech12@gmail.com
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                  <Phone size={18} className="text-green-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-prestige-gray group-hover:text-white font-medium text-sm transition-all pt-1">
                  +212 768-636308
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                  <MapPin size={18} className="text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-prestige-gray group-hover:text-white font-medium text-sm transition-all pt-1">
                  Agadir, Morocco
                </div>
              </li>
            </ul>
          </div>

          {/* Availability Status Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Code size={16} className="text-prestige-red" />
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Availability</h4>
            </div>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-prestige-red/50 transition-all duration-500 group">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_#22C55E]" />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest block mb-2">Open to Work</span>
                  <p className="text-prestige-gray text-xs leading-relaxed font-medium">
                    Available for freelance projects and full-time opportunities in full-stack development.
                  </p>
                </div>
                <button 
                  onClick={() => onSectionChange(Section.Contact)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-prestige-red to-red-600 text-white font-bold text-xs uppercase tracking-[0.15em] hover:from-white hover:to-prestige-gray hover:text-prestige-black transition-all duration-300 shadow-lg hover:shadow-prestige-red/50"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative mb-16 p-8 rounded-2xl bg-gradient-to-r from-prestige-red via-red-600 to-prestige-red overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Build Something Amazing Together</h3>
              <p className="text-white/90 text-sm font-medium">Have a project in mind? I'd love to hear about it.</p>
            </div>
            <button 
              onClick={() => onSectionChange(Section.Contact)}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-prestige-black font-bold text-sm uppercase tracking-[0.1em] hover:bg-prestige-gray hover:text-white transition-all duration-300 shadow-xl whitespace-nowrap"
            >
              Get in Touch
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-prestige-gray text-xs font-medium uppercase tracking-[0.2em] mb-2">
                &copy; {currentYear} MOUAD MEKRECH • PRESTIGE V5.0
              </p>
              <p className="text-prestige-gray/60 text-[10px] font-medium">
                All rights reserved. Built with precision and passion.
              </p>
            </div>
            
            {/* Made with Love */}
            <div className="flex items-center gap-2 text-prestige-gray/80 text-xs">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>in Morocco</span>
            </div>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 hover:border-prestige-red hover:bg-prestige-red hover:text-white transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-prestige-red transition-all duration-300">
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;