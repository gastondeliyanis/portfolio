import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Send, Layers, Radio, Clock, ShieldCheck } from 'lucide-react';
import Phone3D from './Phone3D';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ currentAppIndex, setCurrentAppIndex, onShowToast }) {
  const { personal } = portfolioData;
  const [localTime, setLocalTime] = useState('');

  // Live Argentina (ART UTC-3) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('es-AR', {
          timeZone: 'America/Argentina/Buenos_Aires',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 lg:py-12 overflow-hidden tech-grid-bg">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neonPurple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-neonCyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Giant Nick Ho Motorsports Style Watermark (404 & BERISSO) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono font-black text-[18vw] leading-none stroke-watermark select-none pointer-events-none z-0 opacity-40">
        404
      </div>
      <div className="absolute left-6 bottom-4 font-mono font-black text-[7vw] leading-none stroke-watermark select-none pointer-events-none z-0 opacity-25">
        BERISSO
      </div>

      {/* Telemetry Top Bar (Nick Ho / High-Performance Telemetry Style) */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-8 relative z-10">
        <div className="glass-panel py-2 px-4 rounded-xl border border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-neonEmerald animate-ping" />
            <span className="text-zinc-200 font-semibold uppercase tracking-wider">
              ESTADO: DISPONIBLE PARA PROYECTOS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-zinc-400">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-neonCyan" />
              <span>BERISSO (34°52'S 57°53'W)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-neonPurple" />
              <span>CFL 404 • DESARROLLO MÓVIL IA</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-neonCyan">
            <Clock className="w-3.5 h-3.5" />
            <span>ART (UTC-3): {localTime || '--:--:--'}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Personal Brand & Elevator Pitch */}
        <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neonCyan/40 bg-neonCyan/5 text-neonCyan font-mono text-xs tracking-wider shadow-neon-cyan">
            <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping" />
            <span>{personal.statusBadge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-zinc-400 font-mono text-xs tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-neonEmerald" />
              <span>{personal.location}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Hola, soy <span className="bg-gradient-to-r from-neonCyan via-neonPurple to-neonEmerald bg-clip-text text-transparent glow-text-cyan">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-zinc-200 font-mono">
              {personal.tagline}
            </p>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            {personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#proyectos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-neonCyan via-teal-400 to-neonEmerald hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Layers className="w-4 h-4" />
              <span>Explorar Proyectos 3D</span>
            </a>

            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold text-zinc-200 glass-panel hover:border-neonPurple/60 hover:shadow-neon-purple hover:text-white hover:scale-105 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Contactar a Gaston</span>
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-neonCyan glow-text-cyan">IA</div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">Gemini & ChatGPT</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-neonPurple glow-text-purple">Móvil</div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">Apps Interactivas</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-neonEmerald glow-text-emerald">CFL 404</div>
              <div className="text-xs text-zinc-400 mt-1 font-mono">Berisso, Argentina</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Phone Showcase */}
        <div className="lg:col-span-6 relative">
          <Phone3D
            currentAppIndex={currentAppIndex}
            setCurrentAppIndex={setCurrentAppIndex}
            onShowToast={onShowToast}
          />
        </div>
      </div>
    </section>
  );
}
