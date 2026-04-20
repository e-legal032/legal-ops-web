import React from 'react';
import { ShieldCheck, DatabaseZap, FileLock2, RefreshCw } from 'lucide-react';

const tools = [
  { id: 1, name: 'Proton Suite', desc: { es: 'Comunicación Encriptada', en: 'Encrypted Communication' }, icon: ShieldCheck },
  { id: 2, name: 'VeraCrypt', desc: { es: 'Cifrado de Discos', en: 'Disk Encryption' }, icon: FileLock2 },
  { id: 3, name: 'PDF24 Local', desc: { es: 'Manipulación Soberana', en: 'Sovereign Manipulation' }, icon: DatabaseZap },
  { id: 4, name: 'Syncthing', desc: { es: 'Sincronización P2P', en: 'P2P Synchronization' }, icon: RefreshCw }
];

export default function TechStack({ lang }) {
  return (
    <section className="py-16 md:py-32 w-full flex flex-col items-center px-6 bg-verde-musgo/5 border-t border-verde-musgo/10">
      <div className="max-w-5xl w-full mx-auto">
        {/* Título optimizado para cualquier ancho */}
        <h3 className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-dorado-mate mb-12 md:mb-20 text-center font-bold">
          {lang === 'es' ? 'Sistemas Robustos y Privados' : 'Robust and Private Systems'}
        </h3>
        
        {/* Grid fluido: se ajusta automáticamente según el espacio disponible */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-12 gap-y-12 text-center">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.id} className="tech-card group flex flex-col items-center w-full">
                <div className="tech-icon-container mb-3 md:mb-6 p-4 md:p-6">
                  <Icon 
                    className="tech-icon w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-all duration-500" 
                    strokeWidth={1} 
                  />
                </div>
                
                <div className="space-y-1 px-1 md:px-2">
                  <p className="tech-name text-[11px] sm:text-xs md:text-sm font-bold">
                    {tool.name}
                  </p>
                  <p className="tech-desc text-[8px] md:text-[10px] leading-tight opacity-80">
                    {tool.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}