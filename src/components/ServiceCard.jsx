import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ title, problem, intervention, result, lang, notionLink, viewMoreText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Verificamos el ancho de pantalla de forma real (JavaScript) para no depender solo de CSS
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className="border-b border-verde-musgo/10 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 md:py-14 flex justify-between items-center group cursor-pointer text-left"
      >
        <span className="text-xl md:text-4xl font-serif text-verde-musgo group-hover:text-crema-oliva transition-all duration-500 leading-tight">
          {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-verde-musgo/40">
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            {/* Si es mobile usamos 1 columna, si es desktop usamos 3 */}
            <div className={`pb-12 md:pb-20 grid gap-10 md:gap-16 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
              
              {/* Bloque 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-dorado-mate font-bold">
                  {lang === 'es' ? 'El Problema' : 'The Problem'}
                </h4>
                <p className="font-sans text-base text-verde-seco/60 leading-relaxed italic">
                  {problem}
                </p>
              </div>

              {/* Bloque 2 */}
              <div className={`flex flex-col gap-4 border-verde-musgo/10 ${!isMobile ? 'border-l pl-10' : 'border-t pt-6'}`}>
                <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-dorado-mate font-bold">
                  {lang === 'es' ? 'Intervención' : 'Intervention'}
                </h4>
                <p className="font-sans text-base text-verde-seco/80 leading-relaxed">
                  {intervention}
                </p>
              </div>

              {/* Bloque 3 */}
              <div className={`flex flex-col gap-6 border-verde-musgo/10 justify-between items-start ${!isMobile ? 'border-l pl-10' : 'border-t pt-6'}`}>
                <div className="space-y-4">
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-crema-oliva font-bold">
                    {lang === 'es' ? 'Resultado' : 'Result'}
                  </h4>
                  <p className="font-serif text-base md:text-lg text-crema-oliva font-medium leading-relaxed italic">
                    {result}
                  </p>
                </div>

                {notionLink && (
                  <a 
                    href={notionLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-crema-oliva/20 px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-crema-oliva hover:bg-crema-oliva hover:text-fondo-deep transition-all duration-500 group/btn w-full md:w-auto justify-center md:justify-start"
                  >
                    <span>{viewMoreText}</span>
                    <ArrowUpRight size={14} className="opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}