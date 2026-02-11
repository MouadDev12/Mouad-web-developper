import React from 'react';
import { Home, User, LayoutGrid, GraduationCap, Mail } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: Section.Home, icon: Home, label: 'Home' },
    { id: Section.Skills, icon: User, label: 'Skills' },
    { id: Section.Projects, icon: LayoutGrid, label: 'Work' },
    { id: Section.Education, icon: GraduationCap, label: 'Edu' },
    { id: Section.Contact, icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
      <div className="flex items-center justify-around p-2 glass-panel rounded-full border-white/10 shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className="relative p-4 rounded-full flex flex-col items-center justify-center transition-all duration-300"
            >
              <Icon 
                size={22} 
                className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-prestige-gray'}`} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-white/10 rounded-full scale-110 -z-10 blur-sm"></div>
                  <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-prestige-red shadow-[0_0_10px_#FF3E3E]"></div>
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;