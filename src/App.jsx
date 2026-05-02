import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Globe, ArrowUpRight, Menu, X } from 'lucide-react';
import HeroGraphic from './components/HeroGraphic';
import ServiceCard from './components/ServiceCard';
import TechStack from './components/TechStack';
import Logo from './components/Logo';

function App() {
  const [lang, setLang] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className="min-h-screen bg-fondo-deep font-sans selection:bg-verde-musgo/30 text-verde-seco overflow-x-hidden">
      
      {/* NAV PRINCIPAL */}
      <nav className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex items-center gap-4 group cursor-pointer z-[60]" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }}>
          <Logo className="h-10 w-10 opacity-80" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-crema-oliva font-bold text-xl tracking-tighter">G | T | N</span>
            <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-dorado-mate font-bold opacity-60">Gestión Técnica</span>
          </div>
        </div>
        
        {!isMobile && (
          <div className="flex items-center gap-8">
            <a href="#servicios" className="nav-item">{t.services}</a>
            <a href="https://ana-site.netlify.app" target="_blank" rel="noopener noreferrer" className="nav-item flex items-center gap-1.5">
              {t.otherSite} <ArrowUpRight size={12} />
            </a>
            <a href="#contacto" className="nav-item-contact">{lang === 'es' ? 'Contacto' : 'Contact'}</a>
            <div className="h-4 w-px bg-verde-musgo/20 mx-2"></div> 
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="btn-language flex items-center gap-2 text-[10px] font-bold">
              <Globe size={14} /> {lang.toUpperCase()}
            </button>
          </div>
        )}

        {isMobile && (
          <>
            <button className="z-[60] text-verde-musgo p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-screen bg-fondo-deep flex flex-col items-center justify-center gap-8 z-[55]">
                <a href="#servicios" className="nav-item" onClick={() => setIsMenuOpen(false)}>{t.services}</a>
                <a href="https://ana-site.netlify.app" target="_blank" rel="noopener noreferrer" className="nav-item" onClick={() => setIsMenuOpen(false)}>{t.otherSite}</a>
                <a href="#contacto" className="nav-item-contact" onClick={() => setIsMenuOpen(false)}>{lang === 'es' ? 'Contacto' : 'Contact'}</a>
                <button onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setIsMenuOpen(false); }} className="btn-language">
                  <Globe size={14} /> {lang.toUpperCase()}
                </button>
              </div>
            )}
          </>
        )}
      </nav>

      {/* HERO */}
      <header className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <HeroGraphic />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-crema-oliva mb-6 max-w-5xl leading-[1.1] tracking-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl text-verde-musgo tracking-wide italic opacity-80 max-w-2xl italic">
            {t.subtitle}
          </p>
          <div className="mt-12 md:mt-20 flex flex-col items-center">
            <div className="hero-line"></div>
            <span className="mt-4 text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-dorado-mate font-bold">
              {lang === 'es' ? 'Deslizar' : 'Scroll'}
            </span>
          </div>
        </div>
      </header>

      {/* MANIFIESTO (RESTAURADO) */}
      <section className="py-20 md:py-40 bg-fondo-deep">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-dorado-mate font-bold">
              <span className="section-marker"></span>
              {lang === 'es' ? 'Manifiesto' : 'Manifesto'}
            </h3>
          </div>
          <div className="md:col-span-8 space-y-8 md:space-y-12">
            <p className="font-sans text-2xl sm:text-4xl md:text-6xl text-crema-oliva leading-tight font-medium">
              {lang === 'es' 
                ? "Tecnología Transparente: No instalo software que no entiendas." 
                : "Transparent Technology: I don't install software you don't understand."}
            </p>
            <div className="h-px w-12 md:w-20 bg-verde-musgo/20"></div>
            <p className="font-sans text-base md:text-xl text-verde-seco/50 leading-relaxed max-w-2xl italic">
              {lang === 'es'
                ? "Sistemas robustos y abiertos que garantizan que siempre seas el dueño de tus datos. Simplicidad técnica para que vos te enfoques en el Derecho."
                : "Robust and open systems that ensure you always own your data. Technical simplicity so you can focus on the Law."}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-32 w-full px-6 bg-verde-musgo/5 border-t border-verde-musgo/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-dorado-mate font-bold">
              <span className="section-marker"></span> {t.servicesTitle}
            </h2>
            <p className="font-serif text-verde-musgo/60 italic text-base md:text-lg max-w-sm md:text-right">
              {lang === 'es' ? 'Soluciones diseñadas desde los primeros principios.' : 'Solutions designed from first principles.'}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[1, 2, 3].map((num) => (
              <ServiceCard 
                key={num}
                lang={lang} 
                title={t[`pilar${num}`].title} 
                problem={t[`pilar${num}`].problem} 
                intervention={t[`pilar${num}`].intervention} 
                result={t[`pilar${num}`].result}
                notionLink={t[`pilar${num}`].link}
                viewMoreText={t.viewMore}
              />
            ))}
          </div>
        </div>
      </section>

      <TechStack lang={lang} />

      {/* CONTACTO */}
      <section id="contacto" className="py-24 md:py-40 w-full flex flex-col items-center px-6">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-dorado-mate mb-8 font-bold">
          {t.contactTitle}
        </h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-serif text-crema-oliva mb-12 md:mb-20 text-center max-w-3xl leading-snug">
          {t.contactSubtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <a href="mailto:e.legal032@gmail.com" className="contact-button w-full text-center py-6 border border-verde-musgo/10 rounded-sm">
            <span className="label block text-[10px] opacity-50 mb-1">Email</span>
            <span className="action-text">{t.ctaMail}</span>
          </a>
          <a href="https://wa.me/5491125809757" target="_blank" rel="noopener noreferrer" className="contact-button w-full text-center py-6 border border-verde-musgo/10 rounded-sm">
            <span className="label block text-[10px] opacity-50 mb-1">WhatsApp</span>
            <span className="action-text">{t.ctaWhatsapp}</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-20 bg-fondo-deep border-t border-verde-musgo/10 text-center">
        <span className="font-serif font-bold text-xl tracking-tighter text-crema-oliva block mb-4">G | T | N</span>
        <p className="text-[9px] uppercase tracking-[0.3em] opacity-40">
          © {new Date().getFullYear()} — {t.rights}
        </p>
      </footer>
    </div>
  );
}

export default App;