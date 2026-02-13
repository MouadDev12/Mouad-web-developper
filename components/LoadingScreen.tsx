import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const helloWords = [
    { text: "Hello", lang: "English", color: "from-blue-400 to-blue-600", bg: "bg-blue-500/20" },
    { text: "Bonjour", lang: "Français", color: "from-red-400 to-red-600", bg: "bg-red-500/20" },
    { text: "مرحبا", lang: "العربية", color: "from-green-400 to-green-600", bg: "bg-green-500/20" },
    { text: "Azul", lang: "Tamazight", color: "from-orange-400 to-orange-600", bg: "bg-orange-500/20" },
    { text: "Hola", lang: "Español", color: "from-yellow-400 to-yellow-600", bg: "bg-yellow-500/20" },
    { text: "Привет", lang: "Русский", color: "from-purple-400 to-purple-600", bg: "bg-purple-500/20" },
    { text: "Hallo", lang: "Deutsch", color: "from-gray-300 to-gray-500", bg: "bg-gray-500/20" }
  ];

  useEffect(() => {
    let counter = 0;
    const progressInterval = setInterval(() => {
      counter++;
      setProgress(counter);
      if (counter >= 100) {
        clearInterval(progressInterval);
      }
    }, 20);

    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev < helloWords.length - 1 ? prev + 1 : 0));
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <div className="text-white text-2xl font-bold mb-12 uppercase tracking-widest animate-pulse">
          Welcome to My Portfolio
        </div>
        
        {/* Single Language Display */}
        <div className="relative mb-12">
          {/* Glow Background */}
          <div className={`absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${helloWords[wordIndex].bg} rounded-full blur-3xl animate-pulse`}></div>
          
          {/* Language Content */}
          <div className="relative text-center">
            <h1 className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${helloWords[wordIndex].color} bg-clip-text text-transparent animate-bounce mb-4`}>
              {helloWords[wordIndex].text}
            </h1>
            <div className="text-white text-lg uppercase tracking-widest font-semibold">
              {helloWords[wordIndex].lang}
            </div>
          </div>
        </div>
        
        {/* Language Progress Indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {helloWords.map((word, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === wordIndex 
                  ? `bg-gradient-to-r ${word.color} scale-150 animate-pulse` 
                  : 'bg-gray-700 scale-100'
              }`}
            ></div>
          ))}
        </div>
        
        {/* Animated Progress Bar */}
        <div className="w-96 h-3 bg-gray-800 rounded-full overflow-hidden mb-6 relative">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress Text */}
        <div className="text-gray-400 text-sm font-mono">
          <span className="text-white font-bold text-lg">{progress}%</span> • Loading Complete
        </div>
      </div>

      {/* Floating Language Names */}
      <div className="absolute inset-0 pointer-events-none">
        {helloWords.map((word, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-pulse"
            style={{
              left: `${5 + i * 13}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 5}deg) scale-150`
            }}
          >
            <div className={`text-5xl font-bold bg-gradient-to-r ${word.color} bg-clip-text text-transparent`}>
              {word.text}
            </div>
          </div>
        ))}
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-cyan-400/60 animate-pulse"></div>
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-purple-400/60 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-400/60 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-pink-400/60 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
    </div>
  );
};

export default LoadingScreen;