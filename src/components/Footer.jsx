import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-black/90 py-12 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neonCyan font-bold">
            GD
          </div>
          <div>
            <p className="text-zinc-300 font-semibold">{portfolioData.personal.name}</p>
            <p className="text-[11px] text-zinc-500">
              Desarrollador de Aplicaciones Móviles con IA • CFL 404
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-zinc-400">
          <a href="#inicio" className="hover:text-neonCyan transition-colors">
            Inicio
          </a>
          <a href="#proyectos" className="hover:text-neonCyan transition-colors">
            Proyectos
          </a>
          <a href="#habilidades" className="hover:text-neonCyan transition-colors">
            Habilidades
          </a>
          <a href="#contacto" className="hover:text-neonCyan transition-colors">
            Contacto
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-[11px] text-zinc-600">Berisso, Argentina</span>
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-neonCyan transition-all flex items-center justify-center shadow-lg hover:shadow-neon-cyan"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
