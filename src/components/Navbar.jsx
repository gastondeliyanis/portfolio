import React, { useState } from 'react';
import { Menu, X, Cpu, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos 3D', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Formación', href: '#formacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-panel border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-neonCyan via-neonPurple to-neonEmerald flex items-center justify-center p-0.5 shadow-neon-cyan group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-darkBg rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-neonCyan text-sm">GD</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-base tracking-wide bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
            <div className="flex items-center space-x-2">
              <span className="block text-[10px] font-mono text-neonEmerald uppercase tracking-wider">
                Desarrollo Móvil + IA
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[10px] font-mono text-zinc-400">Berisso</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neonCyan transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neonCyan hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-neonCyan via-teal-400 to-neonEmerald hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Contactar</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white text-xl p-2 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-zinc-800 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-neonCyan font-medium transition-colors text-base"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-neonCyan to-neonEmerald shadow-neon-cyan"
            >
              Contactar a Gaston
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
