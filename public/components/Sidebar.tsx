import React from 'react';
import { Home, User, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { Section } from '../types';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: Section.Home, icon: Home, label: 'Home' },
    { id: Section.Skills, icon: User, label: 'Skills' },
    { id: Section.Projects, icon: Briefcase, label: 'Work' },
    { id: Section.Education, icon: GraduationCap, label: 'History' },
    { id: Section.Contact, icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4 p-2 glass-panel rounded-full border-white/5 shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`p-4 rounded-full transition-all duration-300 relative group ${
                isActive 
                  ? 'bg-white text-black' 
                  : 'text-prestige-gray hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Tooltip */}
              <span className="absolute right-16 px-3 py-1 bg-prestige-dark text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/10">
                {item.label}
              </span>
              
              {isActive && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-prestige-red rounded-full shadow-[0_0_10px_#FF3E3E]"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;