import React from 'react';

export default function HeroGraphic() {
  return (
    <svg 
      className="w-full h-auto max-w-[90vw] md:max-w-4xl opacity-50 md:opacity-100 transition-all duration-1000"
      viewBox="0 0 800 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a9a7d" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8a9a7d" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#8a9a7d" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Círculos concéntricos de precisión */}
      <circle cx="400" cy="400" r="350" stroke="url(#fadeGradient)" strokeWidth="0.5" />
      <circle cx="400" cy="400" r="250" stroke="url(#fadeGradient)" strokeWidth="0.5" strokeDasharray="10 10" />
      <circle cx="400" cy="400" r="150" stroke="#8a9a7d" strokeWidth="0.2" opacity="0.3" />

      {/* Ejes cartesianos técnicos */}
      <line x1="400" y1="50" x2="400" y2="750" stroke="#8a9a7d" strokeWidth="0.2" opacity="0.3" />
      <line x1="50" y1="400" x2="750" y2="400" stroke="#8a9a7d" strokeWidth="0.2" opacity="0.3" />

      {/* Cuadrícula de ingeniería (Sutil) */}
      <path d="M200 200 L600 200 L600 600 L200 600 Z" stroke="#8a9a7d" strokeWidth="0.3" opacity="0.1" />
      <path d="M300 100 L500 100 M300 700 L500 700" stroke="#8a9a7d" strokeWidth="1" opacity="0.2" />
      
      {/* Elementos rotados para dar dinamismo */}
      <rect x="350" y="350" width="100" height="100" stroke="#9a8c73" strokeWidth="0.5" opacity="0.4" transform="rotate(45 400 400)" />
    </svg>
  );
}