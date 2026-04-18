import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ServiceCard({ title, problem, intervention, result, lang }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dorado-mate/20 w-full max-w-2xl mx-auto">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex justify-between items-center group cursor-pointer"
      >
        <span className="text-2xl md:text-3xl font-serif text-verde-bosque group-hover:text-dorado-mate transition-colors text-left leading-tight">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-dorado-mate ml-4"
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
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-dorado-mate font-bold">
                  {lang === 'es' ? 'El Problema' : 'The Problem'}
                </h4>
                <p className="font-sans text-sm text-gris-carbon/80 leading-relaxed italic">
                  {problem}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-dorado-mate font-bold">
                  {lang === 'es' ? 'Mi Intervención' : 'My Intervention'}
                </h4>
                <p className="font-sans text-sm text-gris-carbon/80 leading-relaxed">
                  {intervention}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-dorado-mate font-bold">
                  {lang === 'es' ? 'Resultado' : 'Result'}
                </h4>
                <p className="font-serif text-sm text-verde-bosque font-semibold leading-relaxed">
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