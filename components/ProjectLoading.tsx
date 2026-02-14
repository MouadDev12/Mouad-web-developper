import React from 'react';

interface ProjectLoadingProps {
  projectLogo: string;
  projectTitle: string;
}

const ProjectLoading: React.FC<ProjectLoadingProps> = ({ projectLogo, projectTitle }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-prestige-black/95 backdrop-blur-xl">
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo Container with Professional Animation */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-32 h-32 border-4 border-prestige-red/20 rounded-full animate-spin"></div>
          <div className="absolute inset-2 w-28 h-28 border-4 border-prestige-red/40 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-4 w-24 h-24 border-4 border-prestige-red/60 rounded-full animate-spin animation-delay-300"></div>
          
          {/* Logo/Image */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-prestige-dark border-4 border-prestige-red/80 shadow-2xl shadow-prestige-red/50">
            <img 
              src={projectLogo} 
              alt={projectTitle}
              className="w-full h-full object-cover scale-110 animate-pulse"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-prestige-red/20 to-prestige-black/40"></div>
          </div>
        </div>

        {/* Loading Text with Typing Effect */}
        <div className="text-center space-y-4">
          <h3 className="font-sora text-2xl font-bold text-white tracking-tight">
            {projectTitle}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-prestige-red font-mono text-sm">Loading</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-prestige-red rounded-full animate-bounce animation-delay-0"></div>
              <div className="w-2 h-2 bg-prestige-red rounded-full animate-bounce animation-delay-150"></div>
              <div className="w-2 h-2 bg-prestige-red rounded-full animate-bounce animation-delay-300"></div>
            </div>
          </div>
          <p className="text-prestige-gray text-sm max-w-xs mx-auto">
            Preparing your project experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-prestige-dark rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-prestige-red to-prestige-red/60 rounded-full animate-pulse"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-prestige-red/40 rounded-full animate-ping animation-delay-0"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-prestige-red/30 rounded-full animate-ping animation-delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-prestige-red/50 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-spin {
          animation: spin 2s linear infinite;
        }
        .animate-bounce {
          animation: bounce 1.4s infinite;
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-150 { animation-delay: 150ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default ProjectLoading;
