import React, { useState } from 'react';
import { translations } from './translations';
import { Globe, ArrowUpRight } from 'lucide-react';
import ServiceCard from './components/ServiceCard';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gris-humo font-sans selection:bg-dorado-mate/30 text-gris-carbon">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full p-4 flex justify-between items-center z-50 bg-white/60 backdrop-blur-xl border-b border-verde-bosque/10">
        <div className="font-serif text-verde-bosque font-bold text-xl tracking-tighter ml-4">
          GTN
        </div>
        
        <div className="flex items-center gap-8 mr-4">
          <a href="#servicios" className="nav-item">{t.services}</a>
          <a href="https://ana-site.netlify.app" target="_blank" rel="noopener noreferrer" className="nav-item flex items-center gap-1">
            {t.otherSite} <ArrowUpRight size={12} />
          </a>
          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="btn-language">
            <Globe size={12} /> {lang.toUpperCase()}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl md:text-8xl font-serif text-verde-bosque mb-6 text-center max-w-5xl leading-tight tracking-tight">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-gris-carbon/70 tracking-wide text-center italic">
          {t.subtitle}
        </p>
        <div className="mt-16 flex flex-col items-center">
          <div className="hero-line"></div>
          <span className="mt-4 text-[9px] uppercase tracking-[0.5em] text-dorado-mate font-bold">
            {lang === 'es' ? 'Deslizar' : 'Scroll'}
          </span>
        </div>
      </header>

      {/* SERVICIOS */}
      <section id="servicios" className="py-32 w-full flex flex-col items-center px-6 bg-white/20">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-dorado-mate mb-16 font-bold text-center">
          {t.servicesTitle}
        </h2>
        <div className="w-full flex flex-col items-center">
          {[1, 2, 3].map((num) => (
            <ServiceCard 
              key={num}
              lang={lang} 
              title={t[`pilar${num}`].title} 
              problem={t[`pilar${num}`].problem} 
              intervention={t[`pilar${num}`].intervention} 
              result={t[`pilar${num}`].result} 
            />
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-40 w-full flex flex-col items-center px-6">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-dorado-mate mb-8 font-bold">
          {t.contactTitle}
        </h2>
        <p className="text-3xl md:text-5xl font-serif text-verde-bosque mb-20 text-center max-w-3xl leading-snug">
          {t.contactSubtitle}
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
          <a href="mailto:e.legal032@gmail.com" className="contact-button">
            <span className="label">Email</span>
            <span className="action-text">{t.ctaMail}</span>
          </a>

          <a href="https://wa.me/5491125809757" target="_blank" rel="noopener noreferrer" className="contact-button">
            <span className="label">WhatsApp</span>
            <span className="action-text">{t.ctaWhatsapp}</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-verde-bosque text-gris-humo">
        <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif font-bold text-2xl tracking-tighter italic">GTN</div>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-60">
            © {new Date().getFullYear()} {t.title} — {t.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;