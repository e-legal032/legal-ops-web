import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ServiceCard({ title, problem, intervention, result, lang }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-verde-musgo/10 w-full max-w-4xl mx-auto px-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-12 flex justify-between items-center group cursor-pointer text-left gap-4"
      >
        <span className="text-lg sm:text-xl md:text-3xl font-serif text-verde-musgo group-hover:text-crema-oliva transition-all duration-300 leading-tight">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-verde-musgo/40 flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            {/* Grid: 1 columna en mobile, 3 en desktop */}
            <div className="pb-8 md:pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              
              {/* Bloque: El Problema */}
              <div className="space-y-2 md:space-y-3">
                <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-dorado-mate font-bold opacity-80">
                  {lang === 'es' ? 'El Problema' : 'The Problem'}
                </h4>
                <p className="font-sans text-sm md:text-base text-verde-seco/60 leading-relaxed italic">
                  {problem}
                </p>
              </div>

              {/* Bloque: Intervención */}
              <div className="space-y-2 md:space-y-3 border-l-0 md:border-l border-verde-musgo/10 md:pl-6">
                <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-dorado-mate font-bold opacity-80">
                  {lang === 'es' ? 'Mi Intervención' : 'My Intervention'}
                </h4>
                <p className="font-sans text-sm md:text-base text-verde-seco/80 leading-relaxed">
                  {intervention}
                </p>
              </div>

              {/* Bloque: Resultado */}
              <div className="space-y-2 md:space-y-3 bg-verde-musgo/5 md:bg-transparent p-4 md:p-0 rounded-sm md:border-l md:border-verde-musgo/10 md:pl-6">
                <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-crema-oliva font-bold">
                  {lang === 'es' ? 'Resultado' : 'Result'}
                </h4>
                <p className="font-serif text-sm md:text-base text-crema-oliva font-medium leading-relaxed italic">
                  {result}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}