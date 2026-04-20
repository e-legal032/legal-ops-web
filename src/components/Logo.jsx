import React from 'react';

export default function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fondo: Cuadrado con esquinas redondeadas - Verde Musgo Profundo */}
      <rect width="100" height="100" rx="24" fill="#1A3021" />
      
      {/* Siglas GTN: Tipografía Serif elegante - Color Crema Oliva */}
      <text 
        x="50%" 
        y="54%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill="#D9DFD2" 
        style={{ 
          fontFamily: 'serif', 
          fontWeight: 'bold', 
          fontSize: '38px',
          letterSpacing: '-0.02em'
        }}
      >
        GTN
      </text>
    </svg>
  );
}