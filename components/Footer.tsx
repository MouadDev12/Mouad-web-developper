import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, ArrowUp } from 'lucide-react';
import { Section } from '../types';

interface FooterProps {
  onSectionChange: (section: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-12 bg-prestige-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-prestige-red rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 bg-prestige-black -rotate-45"></div>
              </div>
              <span className="font-sora text-2xl font-bold tracking-tight text-white">
                MOUAD<span className="text-prestige-red">.</span>M
              </span>
            </div>
            <p className="text-prestige-gray text-base leading-relaxed">
              Designing and developing intentional digital products with a focus on simplicity and prestige-grade performance.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-prestige-gray hover:text-prestige-red hover:border-prestige-red hover:bg-prestige-red/5 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/5 inline-block">
              Navigation
            </h4>
            <ul className="space-y-5">
              {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onSectionChange(link.toLowerCase() as Section)}
                    className="text-prestige-gray hover:text-white font-bold text-sm flex items-center gap-3 group transition-all"
                  >
                    <ChevronRight size={16} className="text-prestige-red opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/5 inline-block">
              Connection
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group cursor-pointer">
                <Mail size={20} className="text-prestige-red mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-prestige-gray group-hover:text-white font-bold text-sm transition-all break-all">mouadmekrech12@gmail.com</div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <Phone size={20} className="text-prestige-red mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-prestige-gray group-hover:text-white font-bold text-sm transition-all">+212 768-636308</div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin size={20} className="text-prestige-red mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-prestige-gray group-hover:text-white font-bold text-sm transition-all">Agadir, Morocco</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/5 inline-block">
              Status
            </h4>
            <div className="p-8 rounded-prestige glass-panel space-y-6 red-glow-hover transition-all">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-prestige-red animate-pulse shadow-[0_0_8px_#FF3E3E]"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Status</span>
              </div>
              <p className="text-prestige-gray text-xs leading-relaxed font-bold">
                Actively seeking new high-end challenges in full-stack engineering.
              </p>
              <button 
                onClick={() => onSectionChange(Section.Contact)}
                className="w-full py-3 rounded-full bg-white text-prestige-black font-extrabold text-[10px] uppercase tracking-[0.2em] hover:bg-prestige-red hover:text-white transition-all shadow-lg"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-prestige-gray text-[10px] font-bold uppercase tracking-[0.4em]">
            &copy; {currentYear} MOUAD MEKRECH • PRESTIGE V5.0
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-prestige-gray hover:text-white transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-prestige-red group-hover:text-prestige-red transition-all">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;