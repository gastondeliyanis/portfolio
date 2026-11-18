import React from 'react';
import {
  Bot,
  Cpu,
  Smartphone,
  FileSpreadsheet,
  Users,
  RefreshCw,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Sparkles,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  Bot,
  Cpu,
  Smartphone,
  FileSpreadsheet,
  Users,
  RefreshCw,
  CheckCircle2,
  BookOpen,
  Lightbulb
};

export default function Skills() {
  const { hard, soft } = portfolioData.skills;

  return (
    <section id="habilidades" className="py-24 relative border-t border-zinc-800/60 bg-darkCard/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neonEmerald px-3.5 py-1.5 rounded-full bg-neonEmerald/10 border border-neonEmerald/30">
            <Zap className="w-3.5 h-3.5 text-neonEmerald" />
            <span>Capacidades & Habilidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Habilidades <span className="text-neonEmerald glow-text-emerald">Técnicas e Interpersonales</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Combinación de herramientas de inteligencia artificial aplicada, desarrollo de software y competencias clave para el trabajo colaborativo en equipo.
          </p>
        </div>

        {/* Hard Skills */}
        <div className="mb-16">
          <h3 className="text-lg font-mono font-bold text-white mb-6 flex items-center space-x-2">
            <span className="text-neonCyan">#</span>
            <span>Habilidades Duras (Herramientas & Tecnologías)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hard.map((skill) => {
              const IconComp = iconMap[skill.icon] || Cpu;
              return (
                <div
                  key={skill.name}
                  className="spotlight-card p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform shadow-lg`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold ${skill.badgeBg} border ${skill.borderColor}`}>
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-neonCyan transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 block mb-3">
                      {skill.category}
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-lg font-mono font-bold text-white mb-6 flex items-center space-x-2">
            <span className="text-neonPurple">#</span>
            <span>Habilidades Blandas (Competencias Profesionales)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {soft.map((skill) => {
              const IconComp = iconMap[skill.icon] || Lightbulb;
              return (
                <div
                  key={skill.title}
                  className="p-5 rounded-xl bg-darkCard/50 border border-zinc-800/80 hover:border-neonPurple/50 hover:bg-darkCardHover transition-all duration-300 flex flex-col justify-start group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neonPurple/10 text-neonPurple border border-neonPurple/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-neonPurple transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
